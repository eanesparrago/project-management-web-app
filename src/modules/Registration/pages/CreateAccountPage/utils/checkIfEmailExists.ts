import { auth } from "backend/firebase";

async function checkIfEmailExists(emailAddress: string) {
  try {
    const signInMethods = await auth.fetchSignInMethodsForEmail(emailAddress);

    if (signInMethods.length) {
      return true;
    }

    return false;
  } catch (error) {
    throw new Error(error);
  }
}

export default checkIfEmailExists;
