import React from "react";
import { Text, TextProps } from "react-native";

import { styles } from "./styles";

type Props = TextProps & {
  value: string;
};

const PostLocation: React.FC<Props> = ({ value }) => (
  <Text style={styles.postLocation}>{value}</Text>
);

export default PostLocation;
