import React from 'react';
import {
    Image,
    View,
    Alert
} from 'react-native';
import styles from './styles';
import Label from "src/component/ui/Label/index";
import {circleStyle} from "src/utils/theme";
import Ripple from "src/component/ui/Ripple/index";
import {Color} from "src/utils/color";
import Icon from "react-native-vector-icons/MaterialIcons";
import {AlertMessage} from "src/utils/message";



export default class Setting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user : {
                id: 2,
                name: "Test User",
                email: "demo@webmobtech.com",
                profile_pic: "https://media.creativemornings.com/uploads/user/avatar/89900/Profile_picture_square.jpg",
                mobile_no: "7698472475"
            },
        };
    }

    onUpdateProfile = () => {

    };

    onSignOutTapped = () => {
        /*Alert.alert(
            AlertMessage.logoutTitle,
            AlertMessage.logoutMsg,
            [
                {
                    text: AlertMessage.cancel, onPress: () => {
                }
                },
                {text: AlertMessage.ok, onPress: () => {

                }},
            ]
        )*/
    };

    render() {
        return(
            <View style={styles.setting_Container}>
                <Label roboto_medium ml={10} mt={20} mb={5}>
                    Profile
                </Label>
                <View style={styles.setting_SeprationLine}/>

                <Ripple style={styles.setting_UserDetail} onPress={this.onUpdateProfile}>
                    {
                        this.state.user &&
                        <View style={styles.setting_imageContainer}>
                            <Image source={{uri: this.state.user.profile_pic, cache: 'force-cache'}}
                                   style={[circleStyle, styles.setting_roundProfile]}/>
                        </View>
                    }
                    <View style={styles.setting_profile}>
                        {
                            this.state.user &&
                            <Label style={styles.setting_label} small>
                                {this.state.user.email}
                            </Label>
                        }
                        {
                            this.state.user &&
                            <Label style={styles.setting_label} small>
                                {this.state.user.mobile_no.toString()}
                            </Label>
                        }
                    </View>
                    <Icon name='keyboard-arrow-right'
                          size={30}
                          color={Color.PRIMARY}
                    />
                </Ripple>
                <View style={styles.setting_SeprationLine}/>

                <Ripple style={{flexDirection: 'row', alignItems: 'center', paddingRight: 5}}
                        onPress={this.onPassowordUpdate}>
                    <Label style={{flex: 1}} small mt={12} ml={10} mb={12} roboto_medium align="left">
                        Change Password
                    </Label>
                    <Icon name='keyboard-arrow-right'
                          size={30}
                          color={Color.PRIMARY}
                    />
                </Ripple>
                <View style={styles.setting_SeprationLine}/>

                <Ripple onPress={this.onSignOutTapped}>
                    <Label small mt={12} ml={10} mb={12} roboto_medium align="left">
                        Sign Out
                    </Label>
                </Ripple>
                <View style={styles.setting_SeprationLine}/>
            </View>
        );
    }
};