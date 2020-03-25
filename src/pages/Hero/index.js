import React, { Component } from "react";

import { FlatList } from "react-native";

import {
  Container,
  Avatar,
  Bio,
  Name,
  Header,
  Comic,
  ComicInfo,
  ComicUrl,
  ComicName
} from "./styles";

export default class Hero extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.hero.name : "Herói"
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      hero: props.navigation.getParam("hero")
    };
  }

  componentDidMount() {}

  render() {
    const { hero } = this.state;

    return (
      <Container>
        <Header>
          <Avatar
            source={{
              uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`
            }}
          ></Avatar>
          <Name>{hero.name}</Name>
          <Bio>{hero.description}</Bio>
        </Header>
        <FlatList
          refreshing={false} // Variável que armazena um estado true/false que representa se a lista está atualizando
          data={hero.comics.items}
          keyExtractor={item => String(item.name)}
          renderItem={({ item }) => (
            <Comic
              onPress={() => {
                this.handleNavigateToRepo(item);
              }}
            >
              <ComicInfo>
                <ComicName>{item.name}</ComicName>
                <ComicUrl>{item.resourceURI}</ComicUrl>
              </ComicInfo>
            </Comic>
          )}
        />
      </Container>
    );
  }
}
