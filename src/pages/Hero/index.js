import React, { Component } from "react";

import { FlatList, ActivityIndicator } from "react-native";

import {
  Container,
  Avatar,
  Bio,
  Name,
  Header,
  Comic,
  ComicInfo,
  ComicUrl,
  ComicName,
  ComicImage,
  Loading
} from "./styles";
import { getHeroComics } from "../../services/Marvel";

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
      hero: props.navigation.getParam("hero"),
      comics: [],
      loading: false,
      refreshing: false,
      page: 1
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true
    });
    await this.getComics();
  }

  getComics = async () => {
    const { hero, page } = this.state;
    const res = await getHeroComics(hero.id, page * 20);
    this.setState({
      comics: res.data.results,
      loading: false
    });
  };

  handleNavigate = (screen, data) =>
    this.props.navigation.navigate(screen, data);

  handleMoreComics = () => {
    const { page } = this.state;

    this.setState({ page: page + 1 });
    this.getComics();
  };

  render() {
    const { hero, comics, loading, refreshing } = this.state;

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
          <Name>Comics</Name>
        </Header>
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            onEndReached={this.handleMoreComics}
            refreshing={refreshing}
            onRefresh={() => {
              this.setState({
                refreshing: true
              });
              this.getComics();
              this.setState({
                refreshing: false
              });
            }}
            refreshing={false} // Variável que armazena um estado true/false que representa se a lista está atualizando
            data={comics}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Comic
                onPress={() => this.handleNavigate("Comic", { comic: item })}
              >
                <ComicInfo>
                  <ComicImage
                    source={{
                      uri: `${item.thumbnail.path}.${item.thumbnail.extension}`
                    }}
                  />
                  <ComicName>{item.title}</ComicName>
                </ComicInfo>
              </Comic>
            )}
          />
        )}
      </Container>
    );
  }
}
