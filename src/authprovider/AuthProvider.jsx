import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.config';

export const UserContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);

    const createUser = (email,password) =>{
        setLoader(false);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email,password) =>{
        setLoader(false);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGooglePopUp = () =>{
        setLoader(false);

        return signInWithPopup(auth,googleProvider);
    }
    const signInWithGitPopUp = () =>{
        setLoader(false);
        return signInWithPopup(auth,githubProvider);
    }
    
    const signOutUser = () =>{
        signOut(auth)
        .then(() =>{
            setLoader(false);
            console.log('signout successful')
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    useState(() =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setLoader(false);

            setUser(currentUser);
        });
        return(()=>{
            return unsubscribe();
        }) 
    },[])
    const authInfo = {
        user,
        loader,
        createUser,
        signInUser,
        signOutUser,
        signInWithGooglePopUp,
        signInWithGitPopUp
    }
    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;