import { StyleSheet, View } from "react-native"
import React from "react"
import { palette } from "../../utils/lib/Colours/colours"
import { moderateScale, verticalScale } from "../../utils/lib/screenUtils"






const ProgressBar = ({isActive}: any) => {
    return (
        <View
            style={ isActive? Styles.isActive :Styles.notActive}
        >
        </View>
    )
}


const Styles = StyleSheet.create({
    isActive: {
        backgroundColor: palette.primary,
        width: moderateScale(25),
        height: verticalScale(5),
        borderRadius: 10,     
    }, 
    notActive:{
        backgroundColor: palette.lightPrimary,
        width: moderateScale(5),
        height: verticalScale(5),
        borderRadius: 20,   
    }
})

export default ProgressBar