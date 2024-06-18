import { SecureStorage } from "../../utils/storage/secureStorage"




export default async function LoginValidation (data: any){

    console.log("here22",data)
    const isMail = await SecureStorage.getInst().getValueFor("email")
    const password = await SecureStorage.getInst().getValueFor("password")
 

    if (data.password === password && data.email === isMail) {
        return true
    } else {
        return false
    }
}