export interface SignUpPayload {
  email: string
  password: string
  updates: boolean
}

export interface SignUpResult {
  email: string
  updates: boolean
}

export async function signUp(payload: SignUpPayload, latencyMs = 900): Promise<SignUpResult> {
  await new Promise((resolve) => setTimeout(resolve, latencyMs))
  return { email: payload.email, updates: payload.updates }
}
