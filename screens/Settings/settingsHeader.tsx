import { View } from "react-native"

import { SecureStorage } from "../../utils/storage/secureStorage";
import { useIsFocused } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../utils/lib/Colours/colours";
import { AppText } from "../../components/Display/AppText";



const SettingsHeader = () => {
    const { theme, toggleTheme } = useContext<ThemeContextValue>(ThemeContext);
    const [isUser, setUser] = useState<any>("")
    const isFocused = useIsFocused()

    const getInfo = async () => {
        const fName = await SecureStorage.getInst().getValueFor("fName")
        const lName = await SecureStorage.getInst().getValueFor("lName")
        const image = await SecureStorage.getInst().getValueFor("image")
        const email = await SecureStorage.getInst().getValueFor("email")


        // const info = {
        //     fName: fName,
        //     lName: lName,
        //     image: image,
        //     email: email
        // }
        // console.log("here", info)
        // setMail(email)

        setUser({
            fName,
            lName,
            image,
            email

        })
    }

    useEffect(() => {

        getInfo();

    }, [isFocused]);

    return (
        <View>

            <View style={{
                alignItems: "center",
                alignSelf: "center"
            }}>
                <View
                    style={{
                        width: 90,
                        height: 90,
                        borderRadius: 120,
                        backgroundColor: theme.primary,
                        alignItems: "center",
                        alignSelf: "center"
                    }}
                />

                <View style={{
                    flexDirection:"row"
                }}>
                    <AppText style={{
                        color: theme.textColor, 
                        fontWeight:"600", 
                        fontSize:20
                    }}>
                        {isUser.fName}{" "}{isUser.lName}

                    </AppText>
                </View>



                <AppText 
                style={{
                    color: theme.textColor2, 
                    fontWeight:"500", 
                    fontSize:12
                }}
                >
                    {isUser.email}

                </AppText>


            </View>


        </View>
    )
}


export default SettingsHeader

