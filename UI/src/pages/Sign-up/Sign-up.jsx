import { SignUp } from "@clerk/clerk-react";
import "./Sign-up.css";

export default function SignupPage() {
  return (
    <div className="sign-up">
      <SignUp path="/sign-up" signInUrl="/sign-in" />
    </div>
  );
}
