import { StyleSheet, View } from "react-native"
import Layout from "../../components/Layout/MainLayout"
import { AppText } from "../../components/Display/AppText"
import { moderateScale, verticalScale } from "../../utils/lib/screenUtils"
import { palette } from "../../utils/lib/Colours/colours"
import { AppButton } from "../../components/Display/AppButton"
import { PressText } from "../../components/Display/PressText"
import AppTextField from "../../components/Input/AppTextField"
import { useForm } from "react-hook-form"
import Octicons from "react-native-vector-icons/Octicons";
import Logo from "../../assets/images/mainLogo1.svg"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthStackParamList } from "../allRoutes"

type ScreenProps = NativeStackScreenProps<AuthStackParamList>

const SignInScreen = ({navigation}: ScreenProps) => {

    const {
        register,
        handleSubmit,
        watch,
        control,
        setValue,
        formState: { errors },
    } = useForm();
    return (
        <Layout
            backButton
        >

            <View style={{
                paddingHorizontal: moderateScale(30),
                flex: 1,
                // gap: 30
            }}>
                <View style={{
                    alignItems: "center",
                    marginBottom: verticalScale(40)
                }}>
                    <Logo
                        width={verticalScale(70)}
                    />
                </View>
                <View
                    style={{
                        marginBottom: verticalScale(40)
                    }}
                >
                    <View style={{ flexDirection: "row", }}>
                        <AppText style={{
                            fontWeight: "600",
                            fontSize: 25,
                            color: palette.textColor
                        }}>
                            Welcome Back, {" "}
                        </AppText>
                        <AppText
                            style={{
                                fontWeight: "600",
                                fontSize: 25,
                                color: palette.secondary
                            }}>
                            Guardians!
                        </AppText>
                    </View>

                    <View>
                        <AppText style={{
                            fontWeight: "400",
                            fontSize: 15,
                            color: palette.textColor2
                        }}>
                            Welcome to family support and childcare.
                        </AppText>
                    </View>

                </View>



                <View style={{
                    gap: 10, 
                    marginBottom: verticalScale(40)
                }}>
                    <AppTextField
                        end={
                            <View>
                                <Octicons
                                    name="mail"
                                    color={"#999999"}
                                    size={11}
                                />
                            </View>
                        }
                        validationName="l"
                        control={control}
                        // isPassword
                        placeholder="Email"
                    // isEditable = {false}
                    />

                    <AppTextField
                        validationName="l"
                        control={control}
                        isPassword
                        placeholder="Passowrd"
                    // isEditable = {false}
                    />
                    <View style={{

                        alignItems: "flex-end"
                    }}>

                        <PressText style={{
                            color: palette.lightPrimary
                        }}>
                            Forgot Password?
                        </PressText>
                    </View>

                </View>



                <View
                    style={{
                        alignSelf: "center",
                        gap: 10,
                        marginTop: 20
                    }}
                >
                    <AppButton
                        text="Access your Acount"
                    />

                    <View style={{
                        flexDirection: "row",
                        gap: 4,
                        alignContent: "center",

                    }}>
                        <AppText>
                            New to GuardianGuide?

                        </AppText>
                        <PressText
                            onPress={() => navigation.navigate("SignUp")}
                        >
                            Join us!
                        </PressText>
                    </View>
                </View>


                <View style={styles.container}>
                    <View style={styles.line} />
                    <AppText style={styles.text}>Quick Access</AppText>
                    <View style={styles.line} />
                </View>


            </View>
        </Layout>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,

    },
    line: {
        // flex: 1,
        height: 1,
        backgroundColor: 'grey',
        width: 60
    },
    text: {
        marginHorizontal: 10,
        fontSize: 13,
        color: palette.textColor2,
        fontWeight: "400"
    },
});
export default SignInScreen