import { useContext } from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native"
import { palette, ThemeContext } from "../../utils/lib/Colours/colours";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/lib/screenUtils";
import { messagesListData } from "../../utils/lib/data";
import AppDivider from "../../components/Display/Divider";
import { AppText } from "../../components/Display/AppText";




const ListMessages = () => {
    const { theme, toggleTheme } = useContext<ThemeContextValue>(ThemeContext);
    return (
        <View>
            <View style={{
                backgroundColor: theme.whiteColor,
                width: moderateScale(342),
                height: verticalScale(602),
                borderRadius: 8,
                justifyContent: "center",
                alignSelf: "center", 
                marginTop: verticalScale(10)
            }}>


                <FlatList
                    data={messagesListData}
                    nestedScrollEnabled
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: 20,
                        paddingBottom: verticalScale(30),
                        // backgroundColor: "red",
                        // height: verticalScale(70),
                        paddingHorizontal: 10,
                        marginTop: verticalScale(20)
                    }}
                    renderItem={({ item }) => {
                        return (

                            <View
                            style={{
                                // height: verticalScale(76), 
                                gap: 10
                            }}
                            >
                                <TouchableOpacity
                                   
                                >
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                                        <AppText style={{
                                            color: palette.primary,
                                            fontWeight: "600",
                                            fontSize: 14
                                        }}>
                                            {item.name}
                                        </AppText>

                                        <AppText
                                            style={{
                                                color: palette.textColor,
                                                fontWeight: "500",
                                                fontSize: 10
                                            }}
                                        >
                                            {item.time}
                                        </AppText>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                                        <AppText
                                            style={{
                                                color: palette.textColor,
                                                fontWeight: "400",
                                                fontSize: 10
                                            }}
                                        >
                                            {item.message}
                                        </AppText>

                                        <View style={{
                                            backgroundColor: "red",
                                            width: horizontalScale(18),
                                            height: verticalScale(18),
                                            borderRadius: 18,
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignItems: "center"
                                        }}>
                                            <AppText style={{
                                                color: palette.whiteColor,
                                                fontSize: 10,
                                                fontWeight: "700"
                                            }}>
                                                {item.number}
                                            </AppText>

                                        </View>
                                    </View>

                                  
                                </TouchableOpacity>
                                <AppDivider />
                            </View>
                        )
                    }}
                />

            </View>


        </View>
    )
}


export default ListMessages