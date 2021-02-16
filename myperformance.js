import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

class Myperformance extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Data: [
        {
          id: '1',
          title: 'Order Taken Today',
          qty: '11',
        },
        {
          id: '2',
          title: 'Order Taken This Week',
          qty: '143',
        },
      ],

      Data1: [
        {
          id: '1',
          title: 'Rides Time Today',
          qty: '123:09',
        },
        {
          id: '2',
          title: 'Rides Time This Week',
          qty: '1:35:56',
        },
      ],
    };
  }
  renderItem = ({item}) => (
    <View style={styles.container}>
      <View style={styles.fstbox}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 15,
              paddingTop: '5%',
              paddingBottom: '5%',
              paddingRight: '5%',
              paddingLeft: '5%',
              fontWeight: 'bold',
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 15,
              paddingTop: '5%',
              paddingBottom: '5%',
              paddingRight: '5%',
              paddingLeft: '5%',
              fontWeight: 'bold',
            }}>
            {item.qty}
          </Text>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            padding: '3%',
            height: '30%',
            width: '100%',
            backgroundColor: '#2e3236',
            borderBottomEndRadius: 40,
            borderBottomStartRadius: 40,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: '120%',
                width: '15%',
                backgroundColor: 'white',
                elevation: 20,
                borderRadius: 50,
                marginTop: '2%',
                marginLeft: '2%',
              }}>
              <TouchableOpacity>
                <View style={{paddingLeft: '30%', paddingTop: '20%'}}>
                  <Icon name="close" size={25} color="#444" />
                </View>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                paddingLeft: '15%',
                paddingTop: '5%',
              }}>
              MY PERFORMANCE
            </Text>
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              paddingLeft: '42%',
              paddingTop: '10%',
            }}>
            YOU ARE A
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              paddingLeft: '32%',
              paddingTop: '1%',
            }}>
            SILVER MEMBER
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontSize: 25,
              color: 'red',
              textAlign: 'center',
              paddingTop: '5%',
              paddingBottom: '5%',
            }}>
            Weekly Score
          </Text>
          <FlatList
            data={this.state.Data}
            renderItem={this.renderItem}
            KeyExtractor={(item) => item.id}
            numColumns={0}></FlatList>
        </View>
        <View>
          <Text
            style={{
              fontSize: 25,
              color: 'red',
              textAlign: 'center',
              paddingTop: '5%',
              paddingBottom: '5%',
            }}>
            Weekly Score
          </Text>
          <FlatList
            data={this.state.Data1}
            renderItem={this.renderItem}
            KeyExtractor={(item) => item.id}
            numColumns={0}></FlatList>
        </View>
      </View>
    );
  }
}
export default Myperformance;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  fstbox: {
   // flexDirection: 'row',
    width: '80%',
    marginLeft: '10%',
    borderWidth: 0.2,
    borderRadius: 4,
    justifyContent:'space-between'
  },
});
