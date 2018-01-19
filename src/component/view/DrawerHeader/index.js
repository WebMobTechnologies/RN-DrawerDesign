import React from "react";
import {
    View,
    FlatList,
    Image,
    TouchableHighlight,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./styles";
import {Color} from "src/utils/color";
import Ripple from 'src/component/ui/Ripple';
import Label from "../../ui/Label/index";
import userPlaceholder from 'src/assets/user_placeholder.png';

export default class SideBar extends React.Component {
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
            drawerList: [
                {
                    title: "Home",
                    icon: 'home',
                    route: "Home"
                }, {
                    title: "Notifications",
                    icon: 'notifications',
                    route: "Notification",
                }, {
                    title: "Friends",
                    icon: 'group',
                    route: "Friends"
                }, {
                    title: "Settings",
                    icon: 'settings',
                    route: "Settings"
                },
            ],
            drawerIndex: 0
        };
    }

    _renderProfile = () => {
        return (
            <TouchableHighlight style={styles.drawerHeader_container} underlayColor={Color.PRIMARY_DARK}
                                onPress={this.onProfileTapped}>
                <View>
                    <View style={styles.drawerHeader_imageContainer}>
                        <Image
                            source={{uri: this.state.user.profile_pic, cache: 'force-cache'}}
                            style={styles.drawerHeader_image}/>
                    </View>
                    <View style={styles.drawerHeader_text_content}>
                        {this.state.user.name !== null &&
                        <Label sigleLine roboto_medium color={Color.WHITE}>
                            {this.state.user.name}
                        </Label>
                        }
                        <Label small color={Color.WHITE}>
                            {this.state.user.email}
                        </Label>
                    </View>
                </View>
            </TouchableHighlight>
        );
    };

    onProfileTapped = () => {
       this.drawerItemClick(this.state.drawerList[3], 3)
    };

    _renderBorder = () => {
        return (
            <View style={styles.drawerHeader_borderLine}/>
        );
    };

    _renderIcon = (item, index) => {
        return (
            <Icon name={item.icon}
                  style={{marginRight: 17}}
                  size={25}
                  color={this.state.drawerIndex === index ? Color.PRIMARY : Color.TEXT_SECONDARY}
            />
        );
    };

    _renderItem = (item, index) => {
        return (
            <Ripple
                onPress={this.drawerItemClick.bind(this, item, index)}>
                <View style={styles.drawerHeader_item_container}>
                    <Icon name={item.icon}
                          style={{marginRight: 17}}
                          size={25}
                          color={this.state.drawerIndex === index ? Color.PRIMARY : Color.TEXT_PRIMARY}
                    />
                    <Label roboto_medium small
                           color={this.state.drawerIndex === index ? Color.PRIMARY : Color.TEXT_PRIMARY}>
                        {item.title}
                    </Label>
                </View>
            </Ripple>
        );
    };

    render() {
        return (
            <View style={{flex: 1, paddingBottom: 20}}>
                {
                    this.state.user && this._renderProfile()
                }
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.drawerList}
                    renderItem={({item, index}) => this._renderItem(item, index)}
                    keyExtractor={item => item.title}
                    extraData={this.state}/>
            </View>
        );
    }

    drawerItemClick = (item, index) => {
        if (index !== this.state.drawerIndex) {
            console.log("Route : ", item.route);
            this.setState({
                drawerIndex: index
            })
            this.props.navigation.navigate('DrawerClose');
            this.props.navigation.navigate(item.route);
        }
    }
}