import { FlatList, View } from "react-native"
import React, { useContext } from "react"
import { palette, ThemeContext } from "../../utils/lib/Colours/colours";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/lib/screenUtils";
import { AppText } from "../../components/Display/AppText";
import MoreButton from "../../components/Display/MoreButton";
import ComprehensiveImage from "../../assets/images/comprehensive_articles.svg"
import InteractiveQuiz from "../../assets/images/interactive_quiz.svg"
import WebinarImage from "../../assets/images/webinar_image.svg"
import ParentIcon from "../../assets/icons/parenting_icon_1.svg"



const ParentingResourceHub = () => {
    const { theme, toggleTheme } = useContext<ThemeContextValue>(ThemeContext);

    const data = [
        { title: "Comprehensive Articles", image: <ComprehensiveImage width={60} height={60}/> },
        { title: "Interactive Quizzes", image: <InteractiveQuiz width={60} height={60}/> },
        { title: "Webinars and Workshops", image: <WebinarImage width={60} height={60}/> },
    ]
    return (
        <View>
            <View
                style={{
                    alignSelf: "center",
                    // justifyContent: "center",
                    backgroundColor: palette.whiteBg,
                    width: moderateScale(329),
                    height: verticalScale(189),
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    paddingBottom: verticalScale(10),
                    gap: verticalScale(20),
                    paddingTop: verticalScale(20)

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


                            <ParentIcon  width={14} height={14}/> 
                            <AppText style={{paddingLeft: 10, fontSize: 14, fontWeight: "600", color: palette.primary }}>Parenting</AppText> Resource <AppText style={{ color: palette.primary }}>Hub</AppText>
                        </AppText>

                        <AppText style={{
                            color: theme.textColor2,
                            fontSize: 9,
                            fontWeight: "400"
                        }}>
                            Your go-to place for expert parenting tips and advice.
                        </AppText>
                    </View>



                    <View>
                        <MoreButton />
                    </View>
                </View>



                <View>
                    <FlatList
                        data={data}
                        horizontal
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{
                                    // backgroundColor: "red", 
                                    width: horizontalScale(89), 
                                    height: verticalScale(96), 
                                    justifyContent:"center",
                                    alignItems:"center", 
                                    gap: 5

                                }}>
                                    <View>
                                        {item.image}
                                    </View>

                                    <AppText style={{ color: theme.lightPrimary, textAlign:"center" , fontSize: 10, fontWeight:"400", width: horizontalScale(79)}}>
                                        {item.title}
                                    </AppText>

                                </View>
                            )
                        }}

                    />
                </View>

            </View>

        </View>
    )
}

export default ParentingResourceHub

