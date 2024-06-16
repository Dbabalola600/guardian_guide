import { Modal, View, StyleSheet, Animated, ImageBackground, Dimensions } from "react-native"
import React, { useEffect, useRef } from 'react';

// import Loader from "../../assets/loader_anim.svg"
import Logo from "../../assets/images/splash_screen.svg"
import { moderateScale, verticalScale } from "../../utils/lib/screenUtils";


const { width, height } = Dimensions.get('window');
const PulseLoadingModal = ({ loading }: any) => {

    return (
        <Modal
            transparent={true}
        >
            <View
                style={styles.modalContainer}
            >

                <ImageBackground
                    source={require("../../assets/images/splash_screen.png")}

                    // imageStyle={{
                    //     borderRadius: 20,
                    //     width: 315,
                    //     height: 133,
                    // }}
                    style={{
                        // backgroundColor: "blue",
                        width: width,
                        height: height,
                        // borderRadius: 20,

                    }}

                />
                {/* <Logo
                    width={moderateScale(300)}
                    height={verticalScale(400)}

                /> */}


            </View>

        </Modal>
    )
}


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'white',

    },
    FormContainer: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingBottom: 30,
        paddingHorizontal: 15,
        width: '95%',
        borderRadius: 20
        // marginHorizontal: 20
    },
});
export default PulseLoadingModal