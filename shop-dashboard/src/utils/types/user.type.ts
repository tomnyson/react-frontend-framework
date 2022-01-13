
export type TRegister = {
  username: string,
  email: string,
  role?: number | 0
  password: string
  password_confirm?: string
}

export type TLogin = Pick<TRegister, "email" | "password">;