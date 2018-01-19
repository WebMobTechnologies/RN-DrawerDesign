import React from 'react';
import {
    View,
    FlatList,
    Image
} from 'react-native';
import styles from './styles';
import {circleStyle} from "src/utils/theme";
import {DateFormat} from "src/utils/dateFormat";
import userPlaceholder from 'src/assets/user_placeholder.png';
import {Color} from "src/utils/color";
import Label from "src/component/ui/Label/index";


export default class Friends extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            friends: [
                {
                    id: 0,
                    profile_pic: "https://www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/Square-Profile-Pic-1-1.jpg",
                    name: "Lorem ipsum",
                    mutualFriends: 5,
                },
                {
                    id: 1,
                    profile_pic: "https://static1.squarespace.com/static/52f1466be4b00a8e06e74ff5/t/597fa7e115d5dbed1724bf39/1501538276944/Square+profile+picture+1.jpg",
                    name: "Lorem ipsum",
                    mutualFriends: 20,
                },
                {
                    id: 2,
                    profile_pic: "https://woogmasterstudio.com/wp-content/uploads/2015/04/square-alex-profile.jpg",
                    name: "Lorem ipsum",
                },
                {
                    id: 3,
                    profile_pic: "https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg",
                    name: "Lorem ipsum",
                    mutualFriends: 58,
                },
                {
                    id: 4,
                    profile_pic: "https://comedyworks.com/attachments/photos/0001/4039/Nikki_Square_profile_thumb.jpg",
                    name: "Dolor sit",
                },
                {
                    id: 5,
                    profile_pic: "https://www.designindaba.com/sites/default/files/node/profiles/19255/dominic-wilcox.jpg",
                    name: "Lorem ipsum dolor",
                    mutualFriends: 2,
                },
                {
                    id: 6,
                    profile_pic: "https://plutusfoundation.org/wp-content/uploads/2017/05/Square-Profile-Pic-2.jpg",
                    name: "Lorem ipsum dolor",
                    mutualFriends: 27,
                },
                {
                    id: 7,
                    profile_pic: "https://woogmasterstudio.com/wp-content/uploads/2015/04/square-alex-profile.jpg",
                    name: "Lorem ipsum dolor",
                    mutualFriends: 85,
                },
                {
                    id: 8,
                    profile_pic: "https://www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/Square-Profile-Pic-1-1.jpg",
                    name: "Lorem ipsum dolor",
                    mutualFriends: 47,
                }
            ]
        }
    }

    _renderSeparator = () => {
        return (
            <View style={styles.friends_Separator}/>
        );
    };

    renderListItem = (index, item) => {
        return (
            <View style={styles.friends_listContainer}>
                <View style={circleStyle}>

                    <Image style={[circleStyle, {backgroundColor: null, borderWidth: 0.5, borderColor: Color.BLACK}]}
                           source={{uri: item.profile_pic, cache: 'force-cache'}}/>
                </View>

                <View style={{justifyContent: 'space-around', flex: 1, alignSelf: 'stretch', paddingLeft: 10}}>
                    {
                        item.name ?
                            <Label roboto_medium
                                   mb={5}
                                   color={Color.TEXT_PRIMARY}
                                   sigleLine>
                                {item.name}
                            </Label>
                            : null
                    }
                    <Label small color={Color.TEXT_SECONDARY}>
                        New friend request
                    </Label>
                    {
                        item.mutualFriends &&
                        <Label small color={Color.TEXT_SECONDARY}>
                            {item.mutualFriends} mutual friends
                        </Label>
                    }
                </View>
            </View>
        );
    };


    render() {
        return (
            <View style={styles.friends_Container}>
                <FlatList
                    data={this.state.friends}
                    renderItem={
                        ({index, item}) => this.renderListItem(index, item)
                    }
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={this._renderSeparator}
                    ListFooterComponent={this._renderSeparator}
                />
            </View>
        );
    }
}