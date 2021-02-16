import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

class Balancesheet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Data: [
        {
          id: '1',
          title: 'Total Deliveries',
          qty: '4.008.000 LBP',
        },
        {
          id: '2',
          title: 'Total Rush Wallet',
          qty: '90.000 LBP',
        },
        {
          id: '3',
          total: 'TOTAL PAYMENTS',
          amount: '4.298.000 LBP',
        },
      ],

      Data1: [
        {
          id: '1',
          title: 'Total Deliveries',
          qty: '348.000 LBP',
        },
        {
          id: '2',
          title: 'Total Tips',
          qty: '90.000 LBP',
        },

        {
          id: '3',
          title: 'PENALTY',
          qty: '-90.000 LBP',
        },
        {
          id: '4',
          total: 'TOTAL EARNINGS',
          amount: '1.298.001 LBP',
        },
      ],
    };
  }
  renderItem = ({item}) => (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingLeft: 10,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.title}</Text>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.qty}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          height: 30,
          paddingRight: 30,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: 'green',
            paddingTop: 5,
          }}>
          {item.total}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: 'green',
            paddingTop: 5,
          }}>
          {item.amount}
        </Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            padding: 10,
            height: 200,
            width: '100%',
            backgroundColor: '#2e3236',
            borderBottomEndRadius: 40,
            borderBottomStartRadius: 40,
          }}>
          <View style={{paddingRight: 25}}>
            <View
              style={{
                height: 55,
                width: 55,
                margin: 15,
                backgroundColor: 'white',
                elevation: 1,
                borderRadius: 50,
              }}>
              <TouchableOpacity>
                <View style={{padding: 15, paddingTop: 14}}>
                  <Icon name="arrow-left" size={25} color="#444" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: -50}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 20,
                textAlign: 'center',
                color: 'white',
              }}>
              BALANCE SHEET
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                marginLeft: 20,
                textAlign: 'center',
                color: 'white',
                paddingTop: 40,
              }}>
              BALANCE OF
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                marginLeft: 20,
                textAlign: 'center',
                color: 'white',
              }}>
              SEPTEMBER 2020
            </Text>
          </View>
        </View>

        <View style={styles.fstbox}>
          <Text
            style={{
              fontSize: 18,
              color: 'red',
              height: 70,
              paddingLeft: 60,
              paddingTop: 25,
              fontWeight: 'bold',
            }}>
            PPAYMENTS
          </Text>
          <FlatList
            data={this.state.Data}
            renderItem={this.renderItem}
            KeyExtractor={(item) => item.id}
            numColumns={1}></FlatList>
        </View>
        <View style={styles.box2}>
          <Text
            style={{
              fontSize: 18,
              color: 'green',
              height: 70,
              paddingLeft: 60,
              paddingTop: 25,
              fontWeight: 'bold',
            }}>
            EARNINGS
          </Text>
          <FlatList
            data={this.state.Data1}
            renderItem={this.renderItem}
            KeyExtractor={(item) => item.id}
            numColumns={1}></FlatList>
        </View>
        <TouchableOpacity>
          <LinearGradient
            colors={['#fc2e1c', '#de594e', '#eb897f']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{
              width: '80%',
              height: 50,
              alignSelf: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              margin: 30,
            }}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 25}}>
              Submit
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Balancesheet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
