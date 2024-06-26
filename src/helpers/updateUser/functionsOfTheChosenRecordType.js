import { updateRegistrationDoc } from "../../firebase/firestore/update_document.js";
import { templateTypePoint, templateTypeUser } from "../../view/templates/updateUser_cases.js";
import { Account } from "../constructores/index.js";
import { locationHome } from "../locations.js";
import { updateRegistrationDocumentData } from "./updateRegistrationDocumentData.js";

export function functionsOfTheChosenRecordType(containerInputsForm,btnRegisterupdate,navegador) {

    const registryData  = new Account({
        photoURLUser: localStorage.getItem("photoURLUser"),
        typeRegister: localStorage.getItem("typeRegister"),
        email: localStorage.getItem("email"),
        uid: localStorage.getItem("uidUser"),
        activeSession: true,
        publications_made: [],
        registrationInTheFirstInstance: true,
        description: ''
    })

    function getInputValues(inputName, inputDescription) {

        registryData.displayName = inputName.value;
        if(inputDescription) registryData.description = inputDescription.value

    }

    if(registryData.typeRegister == "user-account"){

        containerInputsForm.innerHTML = templateTypeUser

        const inputName = containerInputsForm.querySelector(".updateProfile__name");

        btnRegisterupdate.addEventListener("click", (e)=>{

            e.preventDefault()
            if(inputName.value){

                getInputValues(inputName)

                updateRegistrationDoc(registryData.uid, registryData.typeRegister,{
                    displayName: registryData.displayName,
                    photoURLUser: registryData.photoURLUser,
                    publications_made: [],
                    activeSession: registryData.activeSession,
                    registrationInTheFirstInstance: registryData.registrationInTheFirstInstance
                })
                updateRegistrationDocumentData(registryData.displayName)

                localStorage.setItem("displayName", registryData.displayName)
                localStorage.setItem("photoURLUser", registryData.photoURLUser)
                localStorage.setItem("activeSession", registryData.activeSession)
                localStorage.setItem("registrationInTheFirstInstance", registryData.registrationInTheFirstInstance)

                navegador.style.display="flex"

                locationHome()

            } else alert(messaje)
        })

    }

    if(registryData.typeRegister == "user-point"){

        containerInputsForm.innerHTML = templateTypePoint

        const inputName = containerInputsForm.querySelector(".updateProfile__name");
        const inputDescription = containerInputsForm.querySelector(".updateProfile__description")

        btnRegisterupdate.addEventListener("click", (e)=>{

            e.preventDefault()
            if(inputName.value){
                getInputValues(inputName, inputDescription)

                updateRegistrationDoc(registryData.uid, registryData.typeRegister,{
                    displayName: registryData.displayName,
                    photoURLUser: registryData.photoURLUser,
                    publications_made: [],
                    activeSession: registryData.activeSession,
                    description: registryData.description,
                    registrationInTheFirstInstance: registryData.registrationInTheFirstInstance
                })
                updateRegistrationDocumentData(registryData.displayName)

                localStorage.setItem("displayName", registryData.displayName)
                localStorage.setItem("photoURLUser", registryData.photoURLUser)
                localStorage.setItem("activeSession", registryData.activeSession)
                localStorage.setItem("registrationInTheFirstInstance", registryData.registrationInTheFirstInstance)
                localStorage.setItem("description", registryData.description)

                navegador.style.display="flex"
                locationHome()

            } else alert(messaje)
        })
    }
}