import React from 'react';
import {
    View,
    Image
} from 'react-native';
import styles from './styles';
import logo from 'src/assets/logo.png';
import Label from "src/component/ui/Label/index";
import {Color} from "../../utils/color";

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.home_Container}>
                <Image source={logo}
                       style={styles.home_centerIcon}/>

                <Label ml={30} mr={30} large mt={20} align={'center'}>
                    Welcome to Webmob Technologies
                </Label>
                <Label ml={30}
                       small
                       align={'center'}
                       mr={30}
                       light
                       color={Color.TEXT_SECONDARY} mt={20}>
                    We offer Mobile Apps,Web Apps,UI/UX, IT Consulting, Project Management, DevOps Services
                </Label>

            </View>
        );
    }
}
