import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

class Documentverification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [
        {
          id: 1,
          title: 'Personal ID ',
          issue: 'Issue date: 12 January 2017',
          expiry: 'Expiry date: 12 January 2025',
        },
        {
          id: 2,
          title: 'Driver’s license ',
          issue: 'Issue date: 12 January 2017',
          expiry: 'Expiry date: 12 January 2025',
        },
        {
          id: 3,
          title: 'Driver’s Moto Permit ',
          issue: 'Issue date: 12 January 2017',
          expiry: 'Expiry date: 12 January 2025',
        },
      ],
    };
  }

  renderItem = ({item}) => (
    <View style={styles.container}>
      <TouchableOpacity>
        <View
          style={{
            width: '100%',
            height: '100%',
            borderWidth: 0.2,
            borderRadius: 10,
            paddingTop: 30,
            paddingBottom:'5%'
          }}>
          <Text
            style={{
              fontSize: 20,
              paddingLeft: 20,
              fontWeight: 'bold',
              flexDirection: 'row',
             
            }}>
            {item.title}
          </Text>
          <View>
            <Icon
              style={{paddingLeft: '80%'}}
              name="check"
              size={25}
              color="#444"
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              paddingLeft: 20,
              paddingBottom: 10,
              color: '#7d7878',
            }}>
            {item.issue}
          </Text>
          <Text style={{fontSize: 18, paddingLeft: 20, color: '#7d7878'}}>
            {item.expiry}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <View style={{paddingRight: 30}}>
            <View
              style={{
                height: 60,
                width: 60,
                margin: 5,
                backgroundColor: 'white',
                elevation: 20,
                borderRadius: 30,
              }}>
              <TouchableOpacity>
                <View style={{padding: 17, paddingTop: 15}}>
                  <Icon name="arrow-left" size={25} color="#444" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{fontSize: 25, paddingTop: 30, fontWeight: 'bold'}}>
            DOCUMENTS
          </Text>
        </View>

        <View style={styles.container}>
          <FlatList
            data={this.state.Data}
            renderItem={this.renderItem}
            KeyExtractor={(item) => item.id}
            numColumns={1}></FlatList>
        </View>
        
      </View>
    );
  }
}
export default Documentverification;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    color: '#f2f0f0',
  },
});
