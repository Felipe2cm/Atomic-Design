import React from "react";
import { Text, TextProps } from "react-native";

import { styles } from "./styles";

type Props = TextProps & {
  value: string;
};

const PostUsername: React.FC<Props> = ({ value }) => (
  <Text style={styles.postUsername}>{value}</Text>
);

export default PostUsername;
