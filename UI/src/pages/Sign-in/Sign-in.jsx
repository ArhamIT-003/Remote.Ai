import { SignIn } from "@clerk/clerk-react";
import "./Sign-in.css";

export default function SignInPage() {
  return (
    <div className="sign-in">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl={"/dashboard"}
      />
    </div>
  );
}
