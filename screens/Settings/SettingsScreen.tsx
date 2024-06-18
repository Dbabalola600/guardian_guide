import { TouchableOpacity, View } from "react-native"
import Layout from "../../components/Layout/MainLayout"
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../utils/lib/Colours/colours";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { moderateScale, verticalScale } from "../../utils/lib/screenUtils";
import { AppText } from "../../components/Display/AppText";
import { SecureStorage } from "../../utils/storage/secureStorage";
import { useIsFocused } from "@react-navigation/native";
import { AppButton } from "../../components/Display/AppButton";
import SettingsHeader from "./settingsHeader";
import SettingsOptions from "./SettingsOptions";

const SettignsScreen = () => {
    const { theme, toggleTheme } = useContext<ThemeContextValue>(ThemeContext);

    return (
        <Layout backgroundColour={theme.backgroundAlt}
            appBar={<HeaderStuff />}
        >
            <View>



                <SettingsHeader />

                
                <SettingsOptions />

                <AppButton
                    text="click here"
                    onPress={async () => {
                        await SecureStorage.getInst().save("userAuthenticated", "false")
                    }}
                />




            </View>
        </Layout>
    )
}


const HeaderStuff = () => {




    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
        }}>
            <TouchableOpacity>
                <View>
                    <SimpleLineIcons
                        size={20}
                        name="bell"
                    />
                </View>
            </TouchableOpacity>



        </View>
    )
}


export default SettignsScreen