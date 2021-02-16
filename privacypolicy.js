import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class Privacypolicy extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: '8%',
            width: '15%',
            margin: '3%',
            marginLeft: '80%',
            backgroundColor: 'white',
            elevation: 20,
            borderRadius: 50,
          }}>
          <TouchableOpacity>
            <View style={{padding: '27%', paddingTop: '25%'}}>
              <Icon name="times" size={30} color="#444" />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontSize: 22,
              paddingLeft: '12%',
              fontWeight: 'bold',
              paddingBottom: '8%',
            }}>
            PRIVACY POLICY
          </Text>
        </View>
        <View>
          <Text style={styles.text}>
            These terms and conditions outline the rules and regulations for the
            use of Company Name’s Website, located at Website.com.
          </Text>
          <Text style={styles.text}>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use Website Name if you do not agree
            to take all of the terms and conditions stated on this page.
          </Text>
          <Text style={styles.text}>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            “Client”, “You” and “Your” refers to you, the person log on this
            website and compliant to the Company’s terms and conditions. “The
            Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company.
            “Party”, “Parties”, or “Us”, refers to both the Client and
            ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client’s needs in respect of
            provision of the Company’s stated services, in accordance with and
            subject to,
          </Text>
        </View>
      </View>
    );
  }
}
export default Privacypolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
    width:'100%'
  },
  text: {
    color: 'black',
    fontSize: 18,
    paddingBottom: '5%',
    paddingLeft: '10%',
    width: '90%',
    textAlign: 'justify',
  },
});
