import { Modal, View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native"
import React from "react"
import { AppText } from "../../components/Display/AppText"
import { palette } from "../../utils/lib/Colours/colours"
import { moderateScale, verticalScale } from "../../utils/lib/screenUtils"
import AntDesign from "react-native-vector-icons/AntDesign"



type SpecProps = {
    visible: any
    onClose: any,


}

const TermsOfServiceModal = ({ visible, onClose }: SpecProps) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            collapsable
        >
            <View
                style={styles.modalContainer}
            >
                <View style={styles.drawerContainer}>
                    <View style={{
                        height: 5,
                        backgroundColor: "#626262CC",
                        borderRadius: 20,
                        width: 104,
                        justifyContent: "center",
                        alignSelf: "center"
                    }} />
                     <TouchableOpacity 
                     onPress={onClose}
                        style={{
                            justifyContent:"flex-end", 
                            alignSelf:"flex-end"
                        }}
                        >
                            <AntDesign
                             name="closesquareo"
                             color={palette.textColor2}
                             size={verticalScale(20)}

                             />
                        </TouchableOpacity>

                    <ScrollView contentContainerStyle={{ marginTop: verticalScale(40) }}>
                       
                        <AppText style={{
                            textAlign: "center",
                            fontSize: 20,
                            fontWeight: "600",
                            color: palette.textColor
                        }}>
                            Terms and Guidelines
                        </AppText>

                        <View style={{
                            width: moderateScale(309),

                            alignSelf: "center",
                            marginTop: verticalScale(40)
                        }}>
                            <AppText style={styles.mainTextStyle}>
                                Welcome to <AppText style={{color: palette.secondary}}>GuardianGuide,</AppText> the ultimate parenting and childcare assistant app. Please read the following terms and guidelines carefully before using our services:
                            </AppText>
                        </View>
                    </ScrollView>
                </View>

            </View>

        </Modal>
    )

}



const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',

    },
    drawerContainer: {
        backgroundColor: palette.backgroundColor,
        padding: 16,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: verticalScale(745)
    },
    line: {
        borderBottomColor: '#D9DCE2',
        borderBottomWidth: 1,
        marginVertical: 10,
        marginHorizontal: 10
    },

    TextContainer: {
        alignSelf: 'center',
        // color: COLORS.primaryBlackHex,
        // padding: SPACING.space_12,
    },

    mainTextStyle: {
        color: palette.textColor2,
        fontWeight: "400",
        fontSize: 14
    }

});

export default TermsOfServiceModal