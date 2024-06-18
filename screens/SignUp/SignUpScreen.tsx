import { StyleSheet, View } from "react-native"
import Layout from "../../components/Layout/MainLayout"
import { AppText } from "../../components/Display/AppText"
import { moderateScale, verticalScale } from "../../utils/lib/screenUtils"
import { palette } from "../../utils/lib/Colours/colours"
import { AppButton } from "../../components/Display/AppButton"
import { PressText } from "../../components/Display/PressText"
import AppTextField, { ErrorMessage } from "../../components/Input/AppTextField"
import { Controller, useForm } from "react-hook-form"
import Octicons from "react-native-vector-icons/Octicons";
import Logo from "../../assets/images/mainLogo1.svg"
import Checkbox from "expo-checkbox";
import React, { useState } from "react"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthStackParamList } from "../allRoutes"
import TermsOfServiceModal from "./TermsModal"
import { CreateYourAccountFormType, createYourAccountSchema } from "../../utils/helpers/validations"
import { zodResolver } from "@hookform/resolvers/zod";
import { SecureStorage } from "../../utils/storage/secureStorage"



type ScreenProps = NativeStackScreenProps<AuthStackParamList>
const SignUpScreen = ({ navigation }: ScreenProps) => {

    const {
        register,
        handleSubmit,
        watch,
        control,
        setValue,
        formState: { errors },
    } = useForm<CreateYourAccountFormType>({
        resolver: zodResolver(createYourAccountSchema)
    })

    const [isChecked, setIsChecked] = useState(false);
    const [isButtonLoading, setButtonLoading] = useState(false);
    const [isDrawerVisible, setDrawerVisible] = useState(false);
    const closeDrawer = () => {

        setDrawerVisible(false)
    }



    const onSubmit = handleSubmit(async (data) => {
        console.log(data)


        await SecureStorage.getInst().save("email", data.email)
        await SecureStorage.getInst().save("fName", data.fName)
        await SecureStorage.getInst().save("lName", data.lName)
        await SecureStorage.getInst().save("password", data.password)
        await SecureStorage.getInst().save("image", "")
        await SecureStorage.getInst().save("userId", "jjwllaooon30913")
        await SecureStorage.getInst().save("userAuthenticated", "true")
        await SecureStorage.getInst().save("theme", "light")
    })
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
                            Let's{" "}
                        </AppText>
                        <AppText
                            style={{
                                fontWeight: "600",
                                fontSize: 25,
                                color: palette.secondary
                            }}>
                            Begin!
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
                                    name="person"
                                    color={"#999999"}
                                    size={11}
                                />
                            </View>
                        }
                        validationName="fName"
                        control={control}
                        placeholder="First Name"
                        errorMessage={errors.fName?.message}
                    />

                    <AppTextField
                        end={
                            <View>
                                <Octicons
                                    name="person"
                                    color={"#999999"}
                                    size={11}
                                />
                            </View>
                        }
                        validationName="lName"
                        control={control}
                        placeholder="Last Name"
                        errorMessage={errors.lName?.message}
                    />

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
                        validationName="email"
                        control={control}
                        placeholder="Email"
                        errorMessage={errors.email?.message}
                    />

                    <AppTextField
                        validationName="password"
                        control={control}
                        isPassword
                        placeholder="Create Password"
                        errorMessage={errors.password?.message}

                    />

                    <AppTextField
                        validationName="confirmPassword"
                        control={control}
                        isPassword
                        placeholder="Confirm Password"
                        errorMessage={errors.confirmPassword?.message}

                    />
                    <View style={{

                        // alignItems: "flex-end"
                    }}>
                        <Controller

                            control={control}
                            rules={{
                                required: "You must accept the Terms and Conditions",
                            }}
                            name="terms"
                            render={({ field: { onChange, onBlur, value },
                                fieldState: { error }, }: any) => (
                                <View>
                                    <View style={{ flexDirection: "row", }}>
                                        <Checkbox
                                            color={value ? palette.primary : "#D0D5DD"}
                                            onValueChange={onChange}
                                            value={value} />

                                        <View style={{ paddingHorizontal: 10, flexDirection: "row" }}>
                                            <AppText style={{
                                                color: palette.textColor2,
                                                fontSize: 14,
                                                fontWeight: "400"
                                            }}>
                                                I accept the{" "}
                                            </AppText>
                                            <PressText
                                                onPress={() => setDrawerVisible(true)}
                                                style={{
                                                    color: palette.lightPrimary,
                                                    fontSize: 14,
                                                    fontWeight: "400"
                                                }}>
                                                terms{" "}
                                            </PressText>

                                            <AppText style={{
                                                color: palette.textColor2,
                                                fontSize: 14,
                                                fontWeight: "400"
                                            }}>
                                                and{" "}
                                            </AppText>

                                            <PressText
                                                onPress={() => setDrawerVisible(true)}
                                                style={{
                                                    color: palette.lightPrimary,
                                                    fontSize: 14,
                                                    fontWeight: "400"
                                                }}>
                                                guidelines.
                                            </PressText>
                                        </View>



                                    </View>

                                    <View>

                                        <ErrorMessage>{errors.terms?.message}</ErrorMessage>

                                    </View>

                                </View>

                            )}
                        />


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
                        text="Get Started"
                        onPress={onSubmit}
                    />

                    <View style={{
                        flexDirection: "row",
                        gap: 4,
                        alignContent: "center",

                    }}>
                        <AppText>
                            Ready to Reconnect?

                        </AppText>
                        <PressText
                            onPress={() => navigation.navigate("SignIn")}
                        >
                            Sign in!
                        </PressText>
                    </View>
                </View>


                <View style={styles.container}>
                    <View style={styles.line} />
                    <AppText style={styles.text}>Quick Access</AppText>
                    <View style={styles.line} />
                </View>

                <TermsOfServiceModal onClose={closeDrawer} visible={isDrawerVisible} />


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
export default SignUpScreen