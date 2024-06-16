
import { GestureResponderEvent, StyleProp, Text, TextStyle, TouchableOpacity } from 'react-native'
import React from 'react';
import { AppText } from './AppText';
import { palette } from '../../utils/lib/Colours/colours';

type AppTextProp = {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    // fontFamily?: PoppinFont | undefined;
    onPress?: () => void;
};
export function PressText(props: AppTextProp) {

    return (
        <TouchableOpacity
            // onPress={props.onPress}
            onPress={props.onPress}
        >
            <AppText
                style={props.style ||{
                    fontSize: 15, 
                    color: palette.textColor, 
                    fontWeight:"500"
                }}
            >
                {props.children}
            </AppText>

        </TouchableOpacity>

    )
}