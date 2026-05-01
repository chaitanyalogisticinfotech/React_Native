import auth from '@react-native-firebase/auth';

export const registerUser = async (name, email, password) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password
    );

    // Update display name
    await userCredential.user.updateProfile({
      displayName: name,
    });

    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};