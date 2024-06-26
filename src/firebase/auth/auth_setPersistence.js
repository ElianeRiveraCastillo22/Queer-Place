import { auth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence  } from "../configuraciones.js";

export const loginPersistence = (email,password) =>{

    setPersistence(auth, browserSessionPersistence)
    .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage);

    });

}