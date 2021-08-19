import React from "react";

import { View } from "react-native";

import {
  MessengerIcon,
  FavoriteIcon,
  CommentIcon,
  SaveIcon,
} from "../../../global/styles/icons";

import { styles } from "../../../pages/Feed/styles";

import ButtonIcons from "../../atoms/ButtonIcons";

const PostOptions: React.FC = () => {
  return (
    <View style={styles.postOptions}>
      <View style={styles.postOptionsSide}>
        <ButtonIcons icon={FavoriteIcon} />
        <ButtonIcons icon={CommentIcon} />
        <ButtonIcons icon={MessengerIcon} />
      </View>
      <ButtonIcons icon={SaveIcon} />
    </View>
  );
};

export default PostOptions;
