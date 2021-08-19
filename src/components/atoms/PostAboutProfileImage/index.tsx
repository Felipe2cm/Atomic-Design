import React from "react";
import { Image, ImageProps } from "react-native";

import { styles } from "../../../pages/Feed/styles";

const PostAboutProfileImage: React.FC<ImageProps> = ({ ...rest }) => (
  <Image style={styles.lastLiked} {...rest} />
);

export default PostAboutProfileImage;
