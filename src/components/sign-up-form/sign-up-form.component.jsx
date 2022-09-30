import "./sign-up-form.styles.scss";
import { useState } from "react";

const defaultformFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  return (
    <div onSubmit={() => {}}>
      <h1>Sign up with email and password</h1>
      <form>
        <label>Display Name</label>
        <input type="text" required />

        <label>Email</label>
        <input type="email" required />

        <label>Password</label>
        <input type="password" required />

        <label>Confirm Password</label>
        <input type="password" required />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
export default SignUp;
