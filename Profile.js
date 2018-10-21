import React, { Component } from 'react'
import { Card, Icon } from 'react-native-elements'
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state={
      customerProfile: "",
      customerStats: "",
      token: ""
    }
  }
  componentWillMount() {
    this.getToken();
  }
  getCustomerDetails = () => {
    axios.get("https://api-stg.syf.com/m2020/customers/" + this.props.currPerson.id + "/profile", { headers: { Authorization: "Bearer " + this.state.token } })
    .then(response => {
     this.setState({customerProfile: response.data});

     this.getCustomerStats();
  })
 .catch((error) => {
     console.log('error ' + error);
  });
  }
  getCustomerStats = () => {
    axios.get("https://api-stg.syf.com/m2020/credit/customers/" + this.props.currPerson.id + "/purchaseStatistics", { headers: { Authorization: "Bearer " + this.state.token } })
    .then(response => {
     this.setState({customerStats: response.data});
  })
 .catch((error) => {
     console.log('error ' + error);
     this.setState({customerStats: "Failed"});
  });
  }
  getToken = () => {
    axios.post("https://api-stg.syf.com/oauth2/v1/token", 'grant_type=client_credentials&client_id=A3Eemq9hAAWwSSNPsVPyRGEfweQOsNxY&client_secret=fhGfzAEDAmrWl6eP')
   .then(response => {
      USER_TOKEN = response.data.access_token;
      this.setState({token: response.data.access_token});
       this.getCustomerDetails();
    })
   .catch((error) => {
      console.log('error ' + error);
   });
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: this.props.currPerson.image}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.props.currPerson.name}</Text>
              <Text style={styles.info}>{this.state.customerProfile.totalSpend ? "Total Expenditure: " + this.state.customerProfile.totalSpend : "Loading..."}</Text>
              <Text style={styles.description}>{this.state.customerProfile ? "Number of Accounts: " + this.state.customerProfile.numberOfAccounts : ""}</Text>
              <Text style={styles.description}>{this.state.customerProfile ? "Country: " + this.state.customerProfile.demographics[0].countryCode : ""}</Text>
              <Text style={styles.description}>{this.state.customerProfile ? "Location: " + this.state.customerProfile.demographics[0].location : ""}</Text>
              <Text style={styles.description}>{this.state.customerProfile ? "Region: " + this.state.customerProfile.demographics[0].region : ""}</Text>
              <Text style={styles.description}>{this.state.customerStats.nextLikelyPurchase ? "Next Likely Purchase: " + this.state.customerStats.nextLikelyPurchase : ""}</Text>


            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
