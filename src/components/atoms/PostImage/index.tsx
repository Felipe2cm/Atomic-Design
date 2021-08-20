import React from "react";

import { Image, ImageProps } from "react-native";
import { styles } from "./styles";

const PostHeader: React.FC<ImageProps> = ({ ...rest }) => (
  <Image style={styles.cover} {...rest} />
);

export default PostHeader;
