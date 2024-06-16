
import { StyleProp, Text, TextStyle } from 'react-native'
import React from 'react';
import { palette } from '../../utils/lib/Colours/colours';

type AppTextProp = {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    // fontFamily?: PoppinFont | undefined;
    
};
export function AppText(props: AppTextProp){

    return(
        <Text
        style={props.style ||{
            fontSize: 15, 
            color: palette.textColor, 
               fontWeight:"400"
        }}
        >
            {props.children}
        </Text>
    )
}