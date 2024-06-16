
import { GestureResponderEvent, StyleProp, Text, TextStyle, Touchable, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react';
import { Pressable } from 'react-native';
import { ThemeContext } from '../../utils/lib/Colours/colours';
import { AppText } from './AppText';


type AppButtonProp = {
    text?: string;
    buttonStyle?: StyleProp<TextStyle>;
    textStyle?: StyleProp<TextStyle>;
    onPress?: () => void;
};

export function AppButton(props: AppButtonProp) {
    const { theme, toggleTheme } = useContext<ThemeContextValue>(ThemeContext);
    return (
        <TouchableOpacity
            style={props.buttonStyle || {
                backgroundColor: theme.primary,
                alignItems: "center",

                borderRadius: 10,
                paddingVertical: 5,
                height: 39,
                width: 237,
                justifyContent: "center"
            }}
            onPress={props.onPress}
        >

            <AppText
                style={props.textStyle || {
                    color: theme.whiteColor,
                    alignItems: "center",
                    fontSize: 16,
                    fontWeight: "500"
                }}
            >
                {props.text}
            </AppText>

        </TouchableOpacity>
    )
}