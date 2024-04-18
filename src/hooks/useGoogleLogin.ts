import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { useCallback } from "react";

import { COLLECTIONS } from "@constants";
import { auth, store } from "@remote/firebase";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";

function useGoogleLogin() {
  const navigate = useNavigate();

  const login = useCallback(async () => {
    const provider = new GoogleAuthProvider();

    try {
      const { user } = await signInWithPopup(auth, provider);

      const newUser = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      };

      await setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), newUser);

      navigate("/list");
      console.log("로그인 성공");
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/popup-closed-by-user") {
          return;
        }
      }

      throw new Error("로그인에 실패했습니다. 다시 시도해 주세요.");
    }
  }, [navigate]);

  const logout = useCallback(() => {
    signOut(auth);
  }, []);

  return { login, logout };
}

export default useGoogleLogin;
