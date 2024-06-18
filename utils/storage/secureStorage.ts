import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';


type SecureStorageKeys = "fName" | "lName" | "password" | "userId" | "email" | "image" | "userAuthenticated" | "firstTime" | "theme"


export class SecureStorage {
    private static instance: SecureStorage;

    public static getInst(): SecureStorage {
        if (!SecureStorage.instance) {
            SecureStorage.instance = new SecureStorage();
        }

        return SecureStorage.instance;
    }


    async getValueFor(key: SecureStorageKeys): Promise<string | null> {
        let result = await RNSecureStorage.getItem(key);
        return result
    }


    async save(key: SecureStorageKeys, value: string): Promise<boolean> {
        try {
            await RNSecureStorage.setItem(key, value, { accessible: ACCESSIBLE.ALWAYS });
            return true;
        } catch (e) {
            return false
        }
    }

    async delete(key: SecureStorageKeys, value: string): Promise<boolean> {
        try {
            await RNSecureStorage.removeItem(key);
            return true;
        } catch (e) {
            return false
        }
    }


    async clearAll(): Promise<boolean> {
        try {
            await RNSecureStorage.clear();
            return true;
        } catch (e) {
            return false
        }
    }



}