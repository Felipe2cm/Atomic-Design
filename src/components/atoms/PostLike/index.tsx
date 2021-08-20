import React from "react";
import { Text, TextProps } from "react-native";

import { styles } from "./styles";

type Props = TextProps & {
  value: string;
};

const PostLikes: React.FC<Props> = ({ value }) => (
  <Text style={styles.likes}>{value}</Text>
);

export default PostLikes;
