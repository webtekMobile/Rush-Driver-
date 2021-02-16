import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

class Mypayment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Data: [
        {
          id: '1',
          month: 'SEPT-1',
        },
        {
          id: '2',
          orderid: 'Order 3456CD-83904',
          amount: '12.000 LBP',
        },

        {
          id: '3',
          orderid: 'Order 3456CD-83904',
          amount: '12.000 LBP',
        },
        {
          id: '4',
          orderid: 'Order 3456CD-83904',
          amount: '12.000 LBP',
        },
        {
          id: '5',
          orderid: 'Order 3456CD-83904',
          amount: '12.000 LBP',
        },
      ],
      Data1: [
        {
          id: '1',
          month: 'SEPT-2',
        },
        {
          id: '2',
          orderid: 'Order 3456CD-83904',
          amount: '12.000 LBP',
        },
        {
          id: '3',
          orderid: 'Order 3456CD-83904',
          amount: '12.000 LBP',
        },
        {
          id: '4',
          orderid: 'Order 3456CD-83904',
          amount: '12.000 LBP',
        },
      ],
    };
  }
  renderItem = ({item}) => (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 40,
          paddingRight: 50,
        }}>
        <Text
          style={{fontSize: 16, color: 'red', fontWeight: 'bold', padding: 10}}>
          {item.month}
        </Text>
        <Text style={{color: 'black', fontWeight: 'bold'}}>{item.orderid}</Text>
        <Text style={{color: 'red'}}>{item.amount}</Text>
      </View>
    </View>
  );
  renderItem1 = ({item}) => (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 40,
          paddingRight: 50,
        }}>
        <Text
          style={{fontSize: 16, color: 'red', fontWeight: 'bold', padding: 10}}>
          {item.month}
        </Text>
        <Text style={{color: 'black', fontWeight: 'bold'}}>{item.orderid}</Text>
        <Text style={{color: 'red'}}>{item.amount}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            height: 200,
            width: '100%',
            backgroundColor: '#2c3136',
            borderBottomEndRadius: 40,
            borderBottomLeftRadius: 40,
          }}>
          <View style={{paddingRight: 25}}>
            <View
              style={{
                height: 60,
                width: 60,
                margin: 15,
                backgroundColor: 'white',
                elevation: 20,
                borderRadius: 50,
              }}>
              <TouchableOpacity>
                <View style={{padding: 20, paddingTop: 15}}>
                  <Icon name="close" size={25} color="#444" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                paddingTop: 30,
                marginLeft: 30,
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}>
              MY PAYMENTS
            </Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 50,
                color: 'white',
                fontWeight: 'bold',
              }}>
              SEPTEMBER EARNINGS
            </Text>
            <Text
              style={{
                fontSize: 22,
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}>
              520.000 LBP
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 50,
            paddingTop: 20,
            paddingBottom: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>SEPTEMBER</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 10}}>
            2020
          </Text>
        </View>
        <View style={styles.container}>
          <View>
            <FlatList
              data={this.state.Data}
              renderItem={this.renderItem}
              KeyExtractor={(item) => item.id}
              numColumns={1}></FlatList>
            <View
              style={{
                height: 50,
                width: '100%',
                backgroundColor: 'red',
                paddingTop: 12,
                paddingLeft: 180,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                DAILY TOTAL 90.000 LBP
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View>
              <FlatList
                data={this.state.Data1}
                renderItem={this.renderItem}
                KeyExtractor={(item) => item.id}
                numColumns={1}></FlatList>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default Mypayment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
