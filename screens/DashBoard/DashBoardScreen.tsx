import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import Layout from "../../components/Layout/MainLayout"
import { useContext, useEffect, useState } from "react";
import { palette, ThemeContext } from "../../utils/lib/Colours/colours";
import { AppText } from "../../components/Display/AppText";
import Feather from "react-native-vector-icons/Feather"
import { moderateScale, verticalScale } from "../../utils/lib/screenUtils";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { SecureStorage } from "../../utils/storage/secureStorage";
import { useIsFocused } from "@react-navigation/native";
import { AppButton } from "../../components/Display/AppButton";
import GrowthMetricsCard from "../../components/Display/GrowMetricsCard";
import Bmi from "../../assets/icons/bmi.svg"
import GrowthMetric from "./GrowthMetric";
import FamilyCalendar from "./FamilyCalendar";
import ParentingNugget from "./ParentingNugget";
import ParentingResourceHub from "./ParentingResource";


const DashboardScreen = () => {
    const { theme, toggleTheme } = useContext<ThemeContextValue>(ThemeContext);
    return (
        <Layout backgroundColour={palette.backgroundAlt} appBar={<HeaderStuff />}>
            <ScrollView style={{
                // flex: 1
                gap: verticalScale(10),
                columnGap: verticalScale(20),

            }}
                contentContainerStyle={{
                    // columnGap: verticalScale(20), 
                    // paddingVertical: verticalScale(40)
                    paddingBottom: verticalScale(30)
                }}
            >

                <View style={{ marginBottom: verticalScale(10) }}>
                    <GrowthMetric />
                </View>

                <View style={{ marginBottom: verticalScale(10) }}>
                   <ParentingNugget/>
                </View>

                <View style={{ marginBottom: verticalScale(10) }}>
                   <ParentingResourceHub/>
                </View>
                <View style={{ marginBottom: verticalScale(10) }}>
                    <FamilyCalendar />
                </View>
            </ScrollView>
        </Layout>
    )
}



const HeaderStuff = () => {
    const { theme, toggleTheme } = useContext<ThemeContextValue>(ThemeContext);
    const isFocused = useIsFocused()
    const [isUser, setUser] = useState<any>("")
    const [greeting, setGreeting] = useState("")

    const getInfo = async () => {
        const thing = await SecureStorage.getInst().getValueFor("fName")
        setUser(thing)
    }

    useEffect(() => {
        getInfo()

        const setGreetingBasedOnTime = () => {
            const currentHour = new Date().getHours();

            if (currentHour >= 5 && currentHour < 12) {
                setGreeting('Morning,');
            } else if (currentHour >= 12 && currentHour < 18) {
                setGreeting('Afternoon, ');
            } else {
                setGreeting('Evening, ');
            }
        };
        setGreetingBasedOnTime();
    }, [isFocused])

    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: moderateScale(20)
        }}>

            <View>
                <AppText style={{
                    fontSize: 20,
                    fontWeight: "500",
                    color: theme.textColor
                }}>
                    {greeting} <AppText style={{
                        fontSize: 20,
                        fontWeight: "600",
                        color: theme.textColor
                    }}>
                        {isUser}!
                    </AppText>
                </AppText>
            </View>



            <View style={{
                flexDirection: "row",
                gap: moderateScale(5),
                alignItems: "center",

            }}>
                <TouchableOpacity>
                    <Feather
                        name="search"
                        size={moderateScale(20)}
                    />




                </TouchableOpacity>

                <TouchableOpacity>
                    <View>
                        <SimpleLineIcons
                            size={20}
                            name="bell"
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: 35,
                    height: 35,
                    borderRadius: 30,
                    backgroundColor: theme.primary,
                    alignItems: "center",
                    alignSelf: "center"
                }}>

                </TouchableOpacity>


            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    growthMetricCard: {
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: palette.whiteBg,
        width: moderateScale(329),
        height: verticalScale(155),
        borderRadius: 8



    }
})


export default DashboardScreen