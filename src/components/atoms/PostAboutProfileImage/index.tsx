import React from "react";
import { Image, ImageProps } from "react-native";

import { styles } from "./styles";

const PostAboutProfileImage: React.FC<ImageProps> = ({ ...rest }) => (
  <Image style={styles.lastLiked} {...rest} />
);

export default PostAboutProfileImage;
