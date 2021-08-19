import React from "react";
import { Text, TextProps } from "react-native";

import { styles } from "../../../pages/Feed/styles";

type Props = TextProps & {
  value: string;
};

const PostDescription: React.FC<Props> = ({ value }) => (
  <Text style={styles.description}>{value}</Text>
);

export default PostDescription;
