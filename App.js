/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {createRootNavigator} from "src/router/index";

export default class App extends Component<{}> {

    render() {
        const Layout = createRootNavigator(true);
        return (
            <Layout/>
        );
    }
}