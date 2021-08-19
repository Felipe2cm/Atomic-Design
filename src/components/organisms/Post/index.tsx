import React from "react";
import { View, ImageProps } from "react-native";

import { styles } from "../../../pages/Feed/styles";

import PostHeader from "../../molecules/PostHeader";
import PostImage from "../../atoms/PostImage";
import PostAbout from "../../molecules/PostAbout";
import PostDescription from "../../atoms/PostDescription";

import PostOptions from "../../molecules/PostOptions";

type Profile = {
  id: string;
  name: string;
  avatar: ImageProps;
};

export type PostProps = {
  id: string;
  username: string;
  location: string;
  likes: string;
  cover: ImageProps;
  description: string;
  lastLiked: Profile;
};

type Props = {
  data: PostProps;
};

export const Post: React.FC<Props> = ({ data: item }) => {
  return (
    <View style={styles.post}>
      <PostHeader username={item.username} location={item.location} />

      <PostImage source={item.cover} />

      <View style={styles.postFooter}>
        <PostOptions />

        <PostAbout avatar={item.lastLiked.avatar} likes={item.likes} />

        <PostDescription value={item.description} />
      </View>
    </View>
  );
};
