import { useState } from "react";
import { Controller } from "react-hook-form";
import {
    KeyboardTypeOptions,
    NativeSyntheticEvent,
    Pressable,
    TextInput,
    TextInputFocusEventData,
    View,
    Platform,
} from "react-native";
import { AppText } from "../Display/AppText";
import Ionicons from "react-native-vector-icons/Ionicons";
import { palette } from "../../utils/lib/Colours/colours";
import { verticalScale } from "../../utils/lib/screenUtils";




type AppTextFieldProps = {
    validationName?: string;
    onChange?: (text: string) => void;
    value?: string;
    pattern?: RegExp;
    control?: any;
    placeholder?: string;
    autoFocus?: boolean;
    errorMessage?: string;
    keyboardType?: KeyboardTypeOptions;
    containerStyle?: any;
    title?: string;
    hint?: string;
    leading?: React.ReactNode;
    end?: React.ReactNode;
    isPassword?: boolean | undefined;
    isEditable?: boolean | undefined;
    onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
    ref?: React.LegacyRef<TextInput> | undefined;
};

const AppTextField = (props: AppTextFieldProps) => {
    const [showPassword, setShowPassword] = useState(
        props.isPassword === undefined ? false : props.isPassword,
    );

    if (props.control && props.validationName) {
        return (
            <View>
                <Controller
                    control={props.control}
                    rules={{
                        required: true,
                        pattern: props.pattern
                    }}
                    name={props.validationName}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextContainer containerStyle={props.containerStyle}>
                            <AppText>
                                {props.title}
                            </AppText>

                            <View
                                style={{
                                    ...(props.isEditable !== false ? { /* your editable styles here */ } : {
                                        backgroundColor: "grey"
                                    }),
                                    ...(props.errorMessage ? {
                                        flexDirection: "row",
                                        borderBottomColor: 'red',
                                        justifyContent: "space-between",
                                    } : {
                                        // backgroundColor: "red",

                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        borderBottomColor: '#999999',
                                    }),
                                    paddingHorizontal: 15,
                                    paddingVertical: 2,
                                    borderBottomWidth: 1,
                                }}
                            >

                                {props.leading}


                                <MyTextInput
                                    hideText={showPassword}
                                    value={value}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    ref={props.ref}
                                    autoFocus={props.autoFocus}

                                    keyboardType={props.keyboardType}
                                    placeholder={props.placeholder}
                                    editable={props.isEditable != false ? true : false}

                                />
                                {props.end}
                                {props.isPassword && (
                                    <PasswordEye
                                        setShowPassword={setShowPassword}
                                        showPassword={showPassword}
                                    />
                                )}
                            </View>
                            {props.errorMessage && <ErrorMessage>{props.errorMessage}</ErrorMessage>}



                        </TextContainer>
                    )}

                />


            </View>
        )


    }



}





// Input Text within app textfield
const MyTextInput = (textInputProps: {
    onChangeText: AppTextFieldProps["onChange"];

    value: AppTextFieldProps["value"];
    hideText: boolean;
    onBlur?: AppTextFieldProps["onBlur"];
    ref: React.LegacyRef<TextInput> | undefined;
    autoFocus: AppTextFieldProps["autoFocus"];
    keyboardType: AppTextFieldProps["keyboardType"];
    placeholder: AppTextFieldProps["placeholder"];
    editable: AppTextFieldProps["isEditable"]

}) => (
    <TextInput
        //   className="flex h-[30px] flex-1 justify-center text-[15px] mt-0"
        style={{
            // backgroundColor:"red", 
            width: "90%",
            fontSize: 14,
            fontWeight: "400",
            color: palette.textColor, 
            paddingBottom: 3
        }}
        placeholderTextColor={palette.textColor2}
        ref={textInputProps.ref}
        autoFocus={textInputProps.autoFocus}
        keyboardType={textInputProps.keyboardType}
        placeholder={textInputProps.placeholder}
        onChangeText={textInputProps.onChangeText}
        defaultValue={textInputProps.value}
        onBlur={textInputProps.onBlur || undefined}
        secureTextEntry={textInputProps.hideText}
        clearTextOnFocus={false}
        editable={textInputProps.editable}
    />
);

const TextContainer = ({
    children,
    containerStyle,
}: {
    children: React.ReactNode;
    containerStyle: AppTextFieldProps["containerStyle"];
}) => (
    // <View className={ containerStyle}>{children}</View>

    <View style={containerStyle}>{children}</View>
);


//  password eye if it is a password
const PasswordEye = (props: {
    showPassword: boolean;
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
    <Pressable
        onPress={() => {
            props.setShowPassword((prev) => !prev);
        }}
    >
        {props.showPassword ? (
            <Ionicons name="eye-outline" size={11} color="#999999" />
        ) : (
            <Ionicons name="eye-off-outline" size={11} color="#999999" />
        )}
    </Pressable>
);



// error message
export const ErrorMessage = (props: { children: React.ReactNode }) => (
    <AppText style={{ marginTop:verticalScale(5),  color:"red" , fontSize: 9}}>{props?.children}</AppText>
);



export default AppTextField