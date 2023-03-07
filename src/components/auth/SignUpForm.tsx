import { useAuth } from "context/authContext";
import FormWithCallback from "./FormWithCallback";

export default function SignupForm() {
  const { signUp } = useAuth();

  return (
    <>
      <h2 className="text-lg text-center">회원가입</h2>
      <FormWithCallback submitCallback={signUp} />
    </>
  );
}
