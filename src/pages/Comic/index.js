import React, { Component } from "react";

import { ScrollView } from "react-native";

import { Container, Header, ComicImage, ComicTitle, ComicBio } from "./styles";

export default class Comic extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.comic.title : "Comic"
    };
  };
  constructor(props) {
    super(props);

    this.state = {
      comic: props.navigation.getParam("comic")
    };
  }
  render() {
    const { comic } = this.state;
    return (
      <Container>
        <ScrollView>
          <Header>
            <ComicImage
              source={{
                uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
              }}
            />
            <ComicTitle>{comic.title}</ComicTitle>
            <ComicBio>{comic.description}</ComicBio>
          </Header>
        </ScrollView>
      </Container>
    );
  }
}
