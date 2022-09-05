import React, { Component, useContext} from "react";
import PropTypes from "prop-types";
import { View, TouchableWithoutFeedback } from "react-native";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/Feather";

import MenuIcon from "../../assets/icons/open-menu.png";
import Logout from "../../assets/icons/logout.png";
import {AuthContext} from '../../navigation/AuthProvider';
import auth from '@react-native-firebase/auth';

class HomeHeader extends Component {

  menuIcon = () => {
    const { navigation } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
        <FastImage source={MenuIcon} style={{ width: 20, height: 20 }} />
      </TouchableWithoutFeedback>
    );
  };

  searchIcon = () => {
    const { navigation, type } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Search", { type: type })}>
        <Icon name={"search"} size={20} />
      </TouchableWithoutFeedback>
    );
  };

  logoutIcon = () => {
    return (
      <TouchableWithoutFeedback onPress={ async () => await auth().signOut()}>
        <Icon name={"log-out"} size={20} />
      </TouchableWithoutFeedback>
    );
  };

  render() {
    return (
      <View style={{ marginTop: 40, marginBottom: 10, marginLeft: 16, marginRight: 16, flexDirection: "row", justifyContent: "space-between" }}>
        {this.menuIcon()}
        {this.searchIcon()}
        {this.logoutIcon()}
      </View>
    );
  }
}

export default HomeHeader;

HomeHeader.propTypes = {
  navigation: PropTypes.object,
  type: PropTypes.oneOf(["tv", "movie"]),
};
