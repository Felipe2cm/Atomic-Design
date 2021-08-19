import React from "react";

import { View, Image, Text } from "react-native";

import { styles } from "../../../pages/Feed/styles";
import PostAvatar from "../../atoms/PostAvatar";

import { ProfileIcon } from "../../../global/styles/icons";

type Props = {
  username: string;
  location: string;
};

const PostHeader: React.FC<Props> = ({ username, location }) => {
  return (
    <View style={styles.postHeader}>
      <PostAvatar source={ProfileIcon} />
      <View>
        <Text style={styles.postUsername}>{username}</Text>
        <Text style={styles.postLocation}>{location}</Text>
      </View>
    </View>
  );
};

export default PostHeader;
