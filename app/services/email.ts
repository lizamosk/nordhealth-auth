import emailjs from '@emailjs/browser'

const { VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_CONTACT_US_ID } = import.meta.env

/**
 * Sends the "registration completed" email. Never throws: the email is a nice extra, so a missing key or a failed
 * request must not stop the user from reaching the success page.
 */
export async function sendWelcomeEmail(toEmail: string): Promise<void> {
  if (!VITE_EMAILJS_PUBLIC_KEY || !VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_CONTACT_US_ID) {
    console.log('Welcome email skipped: EmailJS keys are not set in .env')
    return
  }

  try {
    const catImage = await fileToDataUrl('/coding-cat.jpg')

    await emailjs.send(
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_CONTACT_US_ID,
      {
        subject: 'Registration completed!',
        from_name: 'Liza NordHealth Assignment',
        from_email: 'limoskk.social@gmail.com',
        message: 'Thank you for registering and looking into my app :)',
        to_email: toEmail,
        cat_image: catImage,
      },
      { publicKey: VITE_EMAILJS_PUBLIC_KEY },
    )
  } catch (error) {
    console.log('Welcome email could not be sent:', error)
  }
}

/** Downloads a file served by the app and returns it as a `data:<type>;base64,...` URL. */
async function fileToDataUrl(url: string): Promise<string> {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Could not load ${url}: ${response.status}`)
  const blob = await response.blob()
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(blob)
  })
}
