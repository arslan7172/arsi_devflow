"use client";
import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validationSchema"; 

const SignIn = () => {
  return (
    <AuthForm
      formType="signIn"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onsubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignIn;
