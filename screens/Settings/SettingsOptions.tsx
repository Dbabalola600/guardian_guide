import { StyleSheet, View } from "react-native"
import { ThemeContext, themes } from "../../utils/lib/Colours/colours";
import { useContext } from "react";
import { AppText } from "../../components/Display/AppText";
import { PressText } from "../../components/Display/PressText";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/lib/screenUtils";
import AppDivider from "../../components/Display/Divider";
import ThemeIcon from "../../assets/icons/theme_icon.svg"


const SettingsOptions = () => {
    const { theme, toggleTheme, currentTheme } = useContext<ThemeContextValue>(ThemeContext);

    // console.log("this", currentTheme)
    return (
        <View style={{
            paddingHorizontal: moderateScale(20)
        }}>


            <View style={style.separator}>

                <View style={style.inline}>
                    <ThemeIcon
                        width={moderateScale(10)}
                        height={verticalScale(10)}
                        style={{


                        }} />
                    <AppText style={{
                        ...style.text1,
                        color: theme.textColor,

                    }}>
                        Theme
                    </AppText>

                </View>

                <PressText
                    onPress={toggleTheme}
                    style={{
                        ...style.text1,
                        color: theme.primary,
                        textTransform: "capitalize"
                    }}
                >
                    {currentTheme} Mode
                </PressText>
            </View>


            <AppDivider />


        </View>
    )
}

const style = StyleSheet.create({
    divider: {
        borderColor: "#999999",
        height: .5,
        width: "100%",
        color: "#999999",
        borderWidth: .5,
        marginTop: verticalScale(5)
    },
    separator: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text1: {
        fontSize: 10,
        fontWeight: "500",
        textAlign: "center",
        justifyContent: "center"

    },
    inline: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: horizontalScale(5)
    },
})

export default SettingsOptions