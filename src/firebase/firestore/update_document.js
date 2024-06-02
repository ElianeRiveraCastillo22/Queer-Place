import { db, doc, updateDoc ,arrayUnion, increment,arrayRemove} from "../configuraciones.js";


export const updateRegistration = async(idUserobject, object,typeAccount)=> {
    const userData = doc(db, typeAccount, idUserobject);
    await updateDoc(userData, object)
}
export const updatePublicationDocument = async(idUserobject,typeAccount, object)=> {
    const userData = doc(db, typeAccount, idUserobject);
    await updateDoc(userData, object)
}

export async function updatePublicationID (collection, idDoc, objCurrentSettings){
    const docCollection = doc(db, collection, idDoc);
    await updateDoc(docCollection, objCurrentSettings );
}
export async function updateTheIdentifiersOfUserPublications(collection, idDoc, newPublicationID){
    const docCollection = doc(db, collection, idDoc);
    await updateDoc(docCollection, {
        publications_made: arrayUnion(newPublicationID)
    } );
}
export async function updatesUsersWhoLike(collection, idDoc, usersWhoLiked){
    const docCollection = doc(db, collection, idDoc);
    await updateDoc(docCollection, {
        usersWhoLiked: arrayUnion(usersWhoLiked)
    } );
}
export async function updateWhoDeletedLike(collection, idDoc, usersWhoLiked){
    const docCollection = doc(db, collection, idDoc);
    const prueba = await updateDoc(docCollection, {
        usersWhoLiked: arrayRemove(usersWhoLiked)
    } );
}
export async function updateLikesValues(collection, idDoc, increasedOrDecreased,usersWhoLiked){
    const docCollection = doc(db, collection, idDoc);
    await updateDoc(docCollection, {
        likes: increment(increasedOrDecreased)
    } );
}

