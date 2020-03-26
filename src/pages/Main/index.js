import React, { Component } from "react";

import { FlatList } from "react-native";
import { getHeroes } from "../../services/Marvel";
import {
  Container,
  Form,
  SubmitButton,
  Input,
  HeroButton,
  HeroImage,
  HeroName,
  HeroSeparator
} from "./styles";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      refreshing: false,
      page: 1,
      heroes: [],
      name: ""
    };
  }

  async componentDidMount() {
    await this.getHeroes();
  }

  getHeroes = async () => {
    const { page, name } = this.state;

    if (name) {
      this.setState({
        page: 1
      });
      const res = await getHeroes({ name, limit: page * 20 });
      this.setState({
        heroes: res.data.results
      });
    } else {
      const res = await getHeroes({ limit: page * 20 });
      this.setState({
        heroes: res.data.results
      });
    }

    this.setState({
      loading: false,
      refreshing: false
    });
  };

  handleMoreHeroes = () => {
    const { page } = this.state;

    this.setState({ page: page + 1 });
    this.getHeroes();
  };

  handleNavigate = (screen, data) =>
    this.props.navigation.navigate(screen, data);

  handleChangeName = name => this.setState({ name });

  renderHeroes = item => {
    return (
      <HeroButton
        onPress={() => {
          this.handleNavigate("Hero", { hero: item });
        }}
      >
        <HeroImage
          source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
        />
        <HeroName>{item.name}</HeroName>
      </HeroButton>
    );
  };

  handleGetHeroes = async () => {
    this.setState({
      loading: true
    });
    await this.getHeroes();
    this.setState({ loading: false });
  };
  render() {
    const { loading, heroes, name, refreshing } = this.state;
    return (
      <Container>
        <Form>
          <Input
            placeholder="Type a hero name..."
            value={name}
            onChangeText={this.handleChangeName}
          />
          <SubmitButton loading={loading} onPress={this.handleGetHeroes} />
        </Form>
        <FlatList
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.2}
          onEndReached={this.handleMoreHeroes}
          refreshing={refreshing}
          onRefresh={this.getHeroes}
          data={heroes}
          renderItem={({ item }) => this.renderHeroes(item)}
          keyExtractor={item => String(item.id)}
          ItemSeparatorComponent={() => <HeroSeparator />}
        />
      </Container>
    );
  }
}
