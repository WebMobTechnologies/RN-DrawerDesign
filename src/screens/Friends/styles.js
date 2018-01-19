import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const win = Dimensions.get('window');
import {Color} from "src/utils/color"

export default styles = StyleSheet.create({
    friends_Container: {
        flex: 1,
        backgroundColor: Color.BG_COLOR
    },
    friends_Separator: {
        height: 1,
        backgroundColor: Color.BORDER_COLOR,
    },
    friends_listContainer: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 20,
        flexDirection: 'row',
    },
});
