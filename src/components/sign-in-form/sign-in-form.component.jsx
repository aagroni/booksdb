import "./sign-in-form.styles.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignInForm = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn Form</h1>
      <button onClick={logGoogleUser}>Sigin in with google popup</button>
    </div>
  );
};
export default SignInForm;
