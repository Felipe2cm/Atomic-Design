import React from "react";
import { Text, TextProps } from "react-native";

import { styles } from "./styles";

type Props = TextProps & {
  value: string;
};

const PostDescription: React.FC<Props> = ({ value }) => (
  <Text style={styles.description}>{value}</Text>
);

export default PostDescription;
