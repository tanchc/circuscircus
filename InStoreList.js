import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native';
import axios from 'axios';
import Row from './Row';
import { Button, Container, Header, Content, Icon, List, ListItem, Text, Left, Right, Body, Title, Thumbnail} from 'native-base';

export default class InStoreList extends Component {
  constructor(props) {
    super(props);
    this.person1 = {id:1, name: "Geneve Chia", image:'https://lh3.googleusercontent.com/y27iOBO3grPqz8qE0quiXWcSZa-JnAOT1xnLIHEvfEATQfYfmbsBHB244im7qABwDuGjnA=s85'};
    this.person2 = {id:2, name: "Dylan", image:'https://lh3.googleusercontent.com/iCPVVTeJeH-4X-1gBi4pg2LrgI9XfpqPsavv-GQplx0CkPVVSnFZmlapMxd-HfQKU6qckQ=s85'};
    this.person3 = {id:3, name: "Manfred Ho", image:'https://lh3.googleusercontent.com/3uY8jXQ8kwNMRkV88MZgxAfxAbQGHJSnivbgtOmpFYAa7oCcnBEZnxauvknunYgttp-8RHA=s85'};
    this.person4 = {id:4, name: "Keerthi", image: 'https://lh3.googleusercontent.com/5kwG5J_FGdfoetF8FeicMn-LhoRd-Kp--9GFHkwlBQrRvFhWJZ0nIauHqmdA1SsQRiWS=s85'};
  }
  render() {
    return(
      <List>
         <ListItem avatar button onPress={() => {this.props.getProfile(this.person1)}}>
           <Left>
             <Thumbnail source={{ uri: 'https://lh3.googleusercontent.com/Udxio1ckALyLOPrFjXqNwjzY-7AL56V6CVz-s2KEDi436_XeKGHoG7cF7SwVhQdkLrcYh7s=s85' }} />
           </Left>
           <Body>
             <Text>{this.person1.name}</Text>
             <Text note>Time spent: 4 hrs</Text>
           </Body>
           <Right>
             <Text note>11:34 am</Text>
           </Right>
         </ListItem>
         <ListItem avatar button onPress={() => {this.props.getProfile(this.person2)}}>
           <Left>
             <Thumbnail source={{ uri: 'https://lh3.googleusercontent.com/iCPVVTeJeH-4X-1gBi4pg2LrgI9XfpqPsavv-GQplx0CkPVVSnFZmlapMxd-HfQKU6qckQ=s85' }} />
           </Left>
           <Body>
             <Text>{this.person2.name}</Text>
             <Text note>Time spent: 3 hrs</Text>
           </Body>
           <Right>
             <Text note>1:21 pm</Text>
           </Right>
         </ListItem>
         <ListItem avatar button onPress={() => {this.props.getProfile(this.person3)}}>
           <Left>
             <Thumbnail source={{ uri: 'https://lh3.googleusercontent.com/3uY8jXQ8kwNMRkV88MZgxAfxAbQGHJSnivbgtOmpFYAa7oCcnBEZnxauvknunYgttp-8RHA=s85' }} />
           </Left>
           <Body>
             <Text>{this.person3.name}</Text>
             <Text note>Time spent: 1 hr</Text>
           </Body>
           <Right>
             <Text note>3:43 pm</Text>
           </Right>
         </ListItem>
         <ListItem avatar button onPress={() => {this.props.getProfile(this.person4)}}>
           <Left>
             <Thumbnail source={{ uri: 'https://lh3.googleusercontent.com/5kwG5J_FGdfoetF8FeicMn-LhoRd-Kp--9GFHkwlBQrRvFhWJZ0nIauHqmdA1SsQRiWS=s85' }} />
           </Left>
           <Body>
             <Text>{this.person4.name}</Text>
             <Text note>Time spent: 1 hr</Text>
           </Body>
           <Right>
             <Text note>4:00 pm</Text>
           </Right>
         </ListItem>
      </List>
    )
  }
}
