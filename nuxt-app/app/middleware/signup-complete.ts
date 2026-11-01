// The success page only makes sense right after a sign-up. Opening it directly sends people to the form.
export default defineNuxtRouteMiddleware(() => {
  const { result } = useSignUpResult()
  if (!result.value) return navigateTo('/')
})
