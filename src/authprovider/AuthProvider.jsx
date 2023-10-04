import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase.config';

export const UserContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] = useState(null);
    const [loginBtnClick,setLoginBtnClick] = useState(false);

    
    
    

    const createUser = (email,password) =>{
        setLoginBtnClick(false);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    const signInUser = (email,password) =>{
        

        setLoginBtnClick(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutUser = () =>{
        signOut(auth)
        .then(() =>{
            console.log('signout successful')
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    useState(() =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
        });
        return(()=>{
            return unsubscribe();
        }) 
    },[auth])
    
    const authInfo = {
        user,
        loginBtnClick,
        createUser,
        signInUser,
        signOutUser
    }
    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;