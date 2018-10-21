import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native';
import axios from 'axios';
import { Button, Container, Header, Content, Icon, List, ListItem, Text, Left, Right, Body, Title, Thumbnail} from 'native-base';
import InStoreList from './InStoreList';
import Profile from './Profile';

const data = {
  grant_type: "client_credentials",
  client_id: "A3Eemq9hAAWwSSNPsVPyRGEfweQOsNxY",
  client_secret: "fhGfzAEDAmrWl6eP"
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basic: true,
      isReady: false,
      currState: "Home",
      currHeader: "In-Store",
      currPerson: "",
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isReady: true });
  }
  getProfile = (name) => {
    this.setState({currState: "Profile", currHeader: "Profile Info", currPerson: name});
  }
  getHome = () => {
    if (this.state.currState=="Profile") {
      this.setState({currState: "Home"})

    }
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    let currActivity;
    if (this.state.currState=="Home") {
      currActivity = <InStoreList getProfile={this.getProfile}/>;
    }
    else {
      currActivity = <Profile currPerson={this.state.currPerson} getHome = {this.getHome}/>;
    }
    return (
      <Container>
        <Header span>
          <Left style={styles.centralize} />
            <Body style={styles.centralize}>
              <Title style={styles.addPadTop}>{this.state.currHeader}</Title>
            </Body>
          <Right style={styles.centralize}/>
        </Header>
          <Text>{this.state.currText}</Text>
          <Text>{this.state.currText2}</Text>
        <Content>
          {currActivity}
        </Content>
        <Button style={styles.invisibleBtn}>
          <Icon name='arrow-back' />
          <Text>Back</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  centralize: {
    flex: 1,
    alignItems:'center'
  },
  addPadTop: {
    paddingTop: 20,
    textAlign: 'center'
  },
  invisibleBtn: {
    display: 'none'
  }
})
