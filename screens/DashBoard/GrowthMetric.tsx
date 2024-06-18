import { FlatList, View } from "react-native"
import GrowthMetricsCard from "../../components/Display/GrowMetricsCard"

import Bmi from "../../assets/icons/bmi.svg"
import { palette, ThemeContext } from "../../utils/lib/Colours/colours"
import { moderateScale, verticalScale } from "../../utils/lib/screenUtils"
import { AppText } from "../../components/Display/AppText"
import { useContext } from "react"
import MoreButton from "../../components/Display/MoreButton"
import MetricIcon from "../../assets/icons/metric_icon.svg"

const GrowthMetric = () => {
    const iconSize = 24
    const Data = [
        {
            title: "BMI", color: "#F7E5E5E5", icon: <View>   <Bmi width={iconSize} height={iconSize} /></View>
        },
        {
            title: "Vaccinations", color: "#F7E5F4E5", icon: <View>   <Bmi width={iconSize} height={iconSize} /></View>
        },
        {
            title: "Sensory ", color: "#E5F7E8E5", icon: <View>   <Bmi width={iconSize} height={iconSize} /></View>
        },
        {
            title: "BMI", color: "#EEE5F7E5", icon: <View>   <Bmi width={iconSize} height={iconSize} /></View>
        }
    ]

    const { theme, toggleTheme } = useContext<ThemeContextValue>(ThemeContext);
    return (
        <View>
            <View style={{
                alignSelf: "center",
                justifyContent: "center",
                backgroundColor: palette.whiteBg,
                width: moderateScale(329),
                height: verticalScale(155),
                borderRadius: 8,
                paddingHorizontal: 10,
                paddingVertical: 10

            }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >

                    <View>


                        <AppText style={{
                            color: palette.darkGreen,
                            fontSize: 14, fontWeight: "600"
                        }}>

                            <MetricIcon /> Growth <AppText style={{ color: palette.primary }}>Metric</AppText>
                        </AppText>

                        <AppText style={{
                            color: theme.textColor2,
                            fontSize: 9,
                            fontWeight: "400"
                        }}>
                            Monitor your child's progress
                        </AppText>
                    </View>



                    <View>
                        <MoreButton />
                    </View>
                </View>

                <FlatList
                    data={Data}
                    horizontal
                    contentContainerStyle={{
                        gap: 20,
                        paddingBottom: 90,
                        // backgroundColor: "red",
                        height: verticalScale(70),
                        // paddingHorizontal: 10
                        marginTop: verticalScale(20)
                    }}

                    renderItem={({ item }) => {
                        return (
                            <GrowthMetricsCard
                                details={
                                    <View>
                                        <Bmi width={24} height={24} />
                                    </View>
                                }
                                mainClick={() => { }}
                                title={item.title}
                                color={item.color} />
                        )
                    }}
                />

            </View>

        </View>
    )
}

export default GrowthMetric