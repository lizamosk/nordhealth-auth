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
    await emailjs.send(
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_CONTACT_US_ID,
      {
        subject: 'NordHealth Assignment: Validate your email',
        from_name: 'Liza NordHealth Assignment',
        from_email: 'limoskk.social@gmail.com',
        message: 'I hope you like the app! Have a nice day.',
        email: toEmail,
      },
      { publicKey: VITE_EMAILJS_PUBLIC_KEY },
    )
  } catch (error) {
    console.log('Welcome email could not be sent:', error)
  }
}
