import { StyleSheet, TouchableOpacity, View } from "react-native"
import { moderateScale, verticalScale } from "../../utils/lib/screenUtils"
import { palette } from "../../utils/lib/Colours/colours"





const MoreButton =()=>{

  
    return(
        <TouchableOpacity style={{
            flexDirection:"row", 
            gap: 2
        }}>

            <View
            style={style.buttonStyle}
            />
            <View
            style={style.buttonStyle}
            />
            <View
            style={style.buttonStyle}
            />

        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    buttonStyle :{
        width: moderateScale(5), 
        height: verticalScale(5), 
        backgroundColor: "transparent", 
        borderRadius:10, 
        borderColor: palette.lightPrimary, 
        borderWidth: 2
    }
})


export default MoreButton