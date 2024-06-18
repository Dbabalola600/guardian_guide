import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"
import { palette, ThemeContext } from "../../utils/lib/Colours/colours"
import { moderateScale, verticalScale } from "../../utils/lib/screenUtils"
import { AppText } from "../../components/Display/AppText"
import { useContext } from "react"
import MoreButton from "../../components/Display/MoreButton"
import AppDivider from "../../components/Display/Divider"
import PlannerIcon from "../../assets/icons/planner_icon.svg"



const ParentingNugget = () => {

    const { theme, toggleTheme } = useContext<ThemeContextValue>(ThemeContext);
    return (
        <View>
            <View
                style={{
                    alignSelf: "center",
                    // justifyContent: "center",
                    backgroundColor: palette.whiteBg,
                    width: moderateScale(329),
                    height: verticalScale(204),
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    paddingVertical: 20
                }}
            >

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: verticalScale(15),
                        paddingHorizontal: moderateScale(5)
                    }}
                >

                    <View>


                        <AppText style={{
                            color: palette.darkGreen,
                            fontSize: 14, fontWeight: "600",
                            paddingBottom: 5
                        }}>

                            <PlannerIcon width={14} height={14} />  <AppText style={{ fontSize: 14, fontWeight: "600", color: palette.primary }}>Daily</AppText> Parenting <AppText style={{ color: palette.primary }}>Nuggets</AppText>
                        </AppText>

                        <AppText style={{
                            color: theme.textColor2,
                            fontSize: 9,
                            fontWeight: "400"
                        }}>
                            Expert advice for everyday parenting challenges.
                        </AppText>
                    </View>



                    <View>
                        <MoreButton />
                    </View>
                </View>

                <View style={{
                    gap: 10,
                    marginTop: 20,
                    paddingHorizontal: moderateScale(5)
                }}>
                    <TouchableOpacity style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: moderateScale(5)
                    }}>

                        <View>
                            <AppText style={style.text1}>
                                Play and learn together every day.
                            </AppText>
                            <AppText style={style.text2}>
                                Discover the joy of learning through playtime.
                            </AppText>

                        </View>

                        <View>
                            <ImageBackground
                                style={{
                                    backgroundColor: theme.lightPrimary,
                                    width: moderateScale(50),
                                    height: verticalScale(33),
                                    borderRadius: 8
                                }}
                            />
                        </View>

                    </TouchableOpacity>

                    <AppDivider />



                    <TouchableOpacity style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: moderateScale(5)
                    }}>

                        <View>
                            <AppText style={style.text1}>
                                Happy Kids, Healthy Snacks
                            </AppText>
                            <AppText style={style.text2}>
                                Snack ideas for smiles and good nutrition.
                            </AppText>

                        </View>

                        <View>
                            <ImageBackground
                                style={{
                                    backgroundColor: theme.lightPrimary,
                                    width: moderateScale(50),
                                    height: verticalScale(33),
                                    borderRadius: 8
                                }}
                            />
                        </View>

                    </TouchableOpacity>

                    <AppDivider />



                </View>

            </View>

        </View>
    )
}

const style = StyleSheet.create({
    text1: {
        color: palette.lightPrimary,
        fontSize: 10,
        fontWeight: "500"

    },
    text2: {
        color: palette.inputColour,
        fontSize: 8,
        fontWeight: "400"

    }
})

export default ParentingNugget