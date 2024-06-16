import { StyleSheet, TouchableOpacity, View } from "react-native"
import { moderateScale, verticalScale } from "../../utils/lib/screenUtils"
import { AppText } from "./AppText"
import { palette } from "../../utils/lib/Colours/colours"


type SpecProps = {
    title: any,

    details: any,
    mainClick: any,
    color: any

}

const GrowthMetricsCard = (props: SpecProps) => {
    return (
        <TouchableOpacity
            onPress={props.mainClick}
            style={{
                backgroundColor: props.color,
                height: verticalScale(70),
                width: moderateScale(80),
                borderRadius: 8, 
                flexDirection:"column", 
                gap: 5

            }}
        >

            <View>
                <AppText
                    style={{
                        color: palette.textColor2,
                        textAlign: "center",
                        marginTop: verticalScale(10),
                        fontSize: 10,
                        fontWeight: "400"

                    }}
                >
                    {props.title}
                </AppText>

            </View>

            <View style={{
                justifyContent: "center",
                alignSelf: "center",
                alignItems: "center"
            }}>
                {props.details}
            </View>

            <View
                style={{
                    backgroundColor: palette.lightGreen,
                    width: moderateScale(48),
                    height: verticalScale(12),
                    borderRadius: 40,
                    justifyContent: "center",
                    alignSelf: "center",
                    alignItems: "center"
                }}
            >
                <AppText style={{
                    color: palette.darkGreen,
                    fontSize: 8,
                    fontWeight: "400"
                }}>
                    View
                </AppText>
            </View>


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})


export default GrowthMetricsCard
