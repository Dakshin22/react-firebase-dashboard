import React, { useEffect, useState, useContext } from "react";
import firebase from "firebase/app";

export const userContext = React.createContext();
export const userProvider = (props) => {
  const [session, setSession] = useState({ user: null, loading: true });

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setSession({ loading: false, user });
    });
    return () => unsubscribe();
  }, []);

  return (
    <userContext.Provider value={session}>
      {!session.loading && props.children}
    </userContext.Provider>
  );
};
export const useSession = () => {
    const session = useContext(UserContext);
    return session
}