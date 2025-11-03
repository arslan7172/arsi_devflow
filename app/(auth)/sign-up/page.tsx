'use client'
import AuthForm from '@/components/forms/AuthForm'
import { SignUpSchema } from '@/lib/validationSchema'
const SignUp = () => {
  return (
    <AuthForm
      formType="signUp"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", username: "", name: "" }}
      onsubmit={(data) => Promise.resolve({ success: true, data })}
    />
  )
}

export default SignUp