import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const win = Dimensions.get('window');
import {Color} from "src/utils/color"
import {relativeWidth} from "../../utils/dimensions";

export default styles = StyleSheet.create({
    home_Container: {
        flex: 1,
        backgroundColor: Color.BG_COLOR,
        alignItems: 'center',
        justifyContent: 'center'
    },
    home_centerIcon: {
        width: relativeWidth(50),
        height: relativeWidth(50),
    }
});
