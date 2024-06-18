import { View } from "react-native"
import { verticalScale } from "../../utils/lib/screenUtils"



const AppDivider =()=>{
    return(
        <View style={{
            borderColor: "#999999",
            height: .5,
            width: "100%",
            backgroundColor: "#999999",
            borderWidth: .5,
            marginTop: verticalScale(5)
        }}/>


    )
}

export default AppDivider