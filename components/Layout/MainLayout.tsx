import { Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { palette } from "../../utils/lib/Colours/colours";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';

type LayoutProp = {
    children: React.ReactNode;
    backgroundColour?: any,
    appBar?: React.ReactNode;
    backButton?: false | boolean;
    backArrowAction?: () => void;
};


const Layout = (props: LayoutProp) => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const handleButtonClick = () => {

        if (props.backArrowAction) {
            props.backArrowAction();
            return false;
        }
        navigation.goBack();
        return true;

    }
    return (
        <TouchableWithoutFeedback>
            <>
                <View style={{ paddingTop: insets.top + 20, backgroundColor: props.backgroundColour || palette.backgroundColor }}>

                    <View style={{ flexDirection: "row", paddingHorizontal: 20, alignItems: "center" }}>
                        {props.backButton && (
                            <TouchableOpacity onPress={handleButtonClick}>
                                <Ionicons
                                    name="arrow-back"
                                    size={20}

                                    color="#333333"
                                />
                            </TouchableOpacity>
                        )}

                        <View style={{ alignItems: "center" }}>
                            {props.appBar}
                        </View>
                    </View>

                </View>

                <View style={{
                    flex: 1,
                    justifyContent: "flex-start",
                    backgroundColor: props.backgroundColour || palette.backgroundColor

                }}>
                    {props.children}
                </View>
            </>

        </TouchableWithoutFeedback>
    )
}

export default Layout