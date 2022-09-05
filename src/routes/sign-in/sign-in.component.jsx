import {
  signInWithGooglePopup,
  createUserDocument
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocument(user);
  }

  return (
    <div>
      <h1>Sign in page.</h1>
      <button onClick={logGoogleUser}>Pop-up sign in</button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;
