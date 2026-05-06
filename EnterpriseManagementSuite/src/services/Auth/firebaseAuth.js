import auth from '@react-native-firebase/auth';

// 🔥 REGISTER
export const registerUser = async (name, email, password) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password
    );

    // update name
    await userCredential.user.updateProfile({
      displayName: name,
    });

    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// 🔐 LOGIN
export const loginUser = async (email, password) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password
    );

    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// 🔁 RESET PASSWORD
export const resetPassword = async (email) => {
  try {
    await auth().sendPasswordResetEmail(email);

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// 👂 LISTEN USER (VERY IMPORTANT 🔥)
export const listenToAuthChanges = (callback) => {
  return auth().onAuthStateChanged(user => {
    if (user) {
      callback({
        name: user.displayName || 'User',
        email: user.email,
        photo: user.photoURL || null,
      });
    } else {
      callback(null);
    }
  });
};

// 🚪 LOGOUT
export const logoutUser = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    throw error;
  }
};