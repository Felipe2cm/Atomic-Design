import React from "react";

import { View } from "react-native";

import { styles } from "../../../pages/Feed/styles";
import PostAvatar from "../../atoms/PostAvatar";
import PostUsername from "../../atoms/PostUsername";
import PostLocation from "../../atoms/PostLocation";

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
        <PostUsername value={username} />
        <PostLocation value={location} />
      </View>
    </View>
  );
};

export default PostHeader;
