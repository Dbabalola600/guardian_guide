import { Image, Text, TouchableOpacity, View } from "react-native"

import { useContext, useRef, useState } from "react";
import { palette, ThemeContext } from "../../utils/lib/Colours/colours";
import { AppText } from "../../components/Display/AppText";
import Layout from "../../components/Layout/MainLayout";
import AppIntroSlider from "react-native-app-intro-slider";

import Icon from 'react-native-vector-icons/Ionicons';
import { PressText } from "../../components/Display/PressText";
import ProgressBar from "./ProgressBar";
import { moderateScale, verticalScale } from "../../utils/lib/screenUtils";
import { AppButton } from "../../components/Display/AppButton";
import { AuthStackParamList } from "../allRoutes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


type ScreenProps = NativeStackScreenProps<AuthStackParamList>


const WelcomeScreen = ({navigation}: ScreenProps) => {
    const { theme, toggleTheme } = useContext<ThemeContextValue>(ThemeContext);

    const data = [
        {
            key: 1,
            text1: "GuardianGuide: ",
            text2: "Your Child's Best Companion",
            image: require("../../assets/images/onboard1.png"),
            title: "",
            text: "Discover a world of parenting support at your fingertips with our easy-to-use app."
        },
        {
            key: 2,
            text1: "Simplify ",
            text2: "Parenthood",
            image: require("../../assets/images/onboard2.png"),
            title: "",
            text: "Effortlessly manage family life with our intuitive tools."


        },
        {
            key: 3,
            text1: "Expert ",
            text2: "Guidance",
            image: require("../../assets/images/onboard3.png"),
            title: "",
            text: "Get personalized parenting advice and expert tips for your child's well-being."


        }
    ]

    const slider = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);


    const NextSlide = () => {

        const newIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(newIndex);
        slider.current.goToSlide(newIndex, true);


        // console.log(activeIndex)
    }

    const _renderItem = ({ item }: any) => {
        return (
            <View style={{
                // width: moderateScale(300)
                paddingHorizontal: 40, 
                marginTop: 30
            }}>

                <Image source={item.image}
                    style={{
                        width: "75%",
                        height: '50%',
                        // position: 'absolute',
                        bottom: -30,
                        left: 0,
                        marginTop: 10,

                        alignSelf: "center"
                    }}
                    resizeMode="contain" />

                <View style={{
                    flexDirection: "row",
                    alignSelf: "center",
                    // width: moderateScale(300)
                    alignContent: "center",
                    width: moderateScale(280),
                    // backgroundColor:"yellow", 
                    justifyContent:"center"

                }}>
                    <AppText
                        style={activeIndex === 0 ? {
                            color: palette.secondary,
                            fontSize: 25,
                            fontWeight: "600", 
                            textAlign: "center",
                        } : {
                            color: palette.textColor,
                            fontSize: 25,
                            fontWeight: "600", 
                            textAlign: "center",
                        }}
                    >
                        {item.text1}
                        <AppText
                            style={activeIndex !== 0 ? {
                                color: palette.secondary,
                                fontSize: 25,
                                fontWeight: "600",
                                textAlign: "center"
                            } : {
                                color: palette.textColor,
                                fontSize: 25,
                                fontWeight: "600",
                                textAlign: "center"
                            }}
                        >
                            {item.text2}
                        </AppText>
                    </AppText>

                </View>

                <View style={{
                    paddingVertical: 10,
                    width: moderateScale(280),
                    alignSelf: "center"

                }}>
                    <AppText style={{
                        textAlign: "center",
                        fontSize: 15,
                        fontWeight: "400",
                        color: palette.textColor2, 
                            // backgroundColor:"yellow"
                    }}>
                        {item.text}
                    </AppText>
                </View>

                <View style={{
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                    alignSelf: "center",
                    paddingVertical: verticalScale(30)
                }}>
                    <ProgressBar isActive={activeIndex === 0 ? 1 : 0} />
                    <ProgressBar isActive={activeIndex === 1 ? 1 : 0} />
                    <ProgressBar isActive={activeIndex === 2 ? 1 : 0} />
                </View>


            </View>
        )
    }

    const _renderPagination = () => {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 250,
                    left: 30,
                    right: 30,
                }}
            >



                {
                    activeIndex !== 2 ?
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <PressText style={{
                                color: palette.lightPrimary,
                                fontSize: 18,
                                fontWeight: "400"
                            }}
                            onPress={()=>navigation.navigate("SignIn")}
                            >
                                Skip
                            </PressText>

                            <PressText
                                onPress={NextSlide}
                                style={{
                                    color: palette.primary,
                                    fontSize: 18,

                                    fontWeight: "500"
                                }}>
                                Next
                            </PressText>
                        </View> :
                        <View style={{
                            alignItems: "center",
                            gap: 10
                        }}>
                            <AppButton
                                onPress={()=>navigation.navigate("SignUp")}
                                text="Start Parenting"
                            />

                            <View style={{
                                flexDirection: "row",
                                gap: 4,
                                alignContent: "center",

                            }}>
                                <AppText>
                                    Ready to nuture?

                                </AppText>
                                <PressText
                                onPress={()=>navigation.navigate("SignIn")}
                                >
                                    Sign in
                                </PressText>
                            </View>
                        </View>
                }




            </View>
        )
    }


    return (

        <Layout >

            {/* <View style={{
                // flex: 1,
                // height:400,
                // backgroundColor: palette.primary,
                // justifyContent: 'center',
                // alignItems: 'center',

            }}> */}
            <AppIntroSlider
                data={data}
                renderItem={_renderItem}

                ref={slider}
                showNextButton={false}
                showSkipButton={false}
                showDoneButton={false}
                renderPagination={_renderPagination}
                dotStyle={{ display: 'none' }}
                activeDotStyle={{ display: 'none' }}

                onSlideChange={ind => {
                    setActiveIndex(ind);
                }}
            />

            {/* </View> */}
        </Layout>

    )
}


export default WelcomeScreen