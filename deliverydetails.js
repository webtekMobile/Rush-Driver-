import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

class Deliverydetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Data: [
        {
          id: '1',
          title: 'Lebanese Pizza x 1',
          price: '12.000 LBP',
        },
        {
          id: '2',
          title: 'Pepsi Can x 2',
        },
        {
          id: '3',
          title: 'arge Fries x2',
        },
        {
          id: '4',
          title: 'Chicken Burger x 1',
          price: '8.000 LBP',
        },
        {
          id: '5',
          title: 'Noodles Salad x1',
        },
      ],
      Data1: [
        {
          id: '1',
          title: 'Subtotal',
          price: '20.000 LBP',
        },
        {
          id: '2',
          title: 'Delivery Charge',
          price: '3.000 LBP',
        },
      ],
    };
  }
  renderItem = ({item}) => (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: '#babdbf', paddingLeft: 10}}>{item.title}</Text>
        <Text style={{color: '#babdbf'}}>{item.price}</Text>
      </View>
    </View>
  );
  renderItem1 = ({item}) => (
    <View style={styles.container}>
      <View >
        <Text>{item.title}</Text>
        <Text>{item.price}</Text>
      </View>
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
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
                paddingTop: 35,
                marginLeft: 10,
                textAlign: 'center',
              }}>
              DELIVERY DETAILS
            </Text>
          </View>
        </View>
        <View style={{height: 220, width: '100%', backgroundColor: 'black'}}>
          <Text style={{textAlign: 'center', paddingTop: 90, color: 'white'}}>
            Map Under Maintanace
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 15,
          }}>
          <Text style={{fontWeight: 'bold'}}>BAR TARTINE - SIN EL FIL</Text>
          <Text style={{color: 'red'}}>Order 3456CD-83904</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 0.2,
            justifyContent: 'space-evenly',
            height: 80,
            paddingTop: 20,
          }}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>CLIENTS</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16}}> TIME</Text>
          </View>
          <View>
            <Text>Sara Doe</Text>
            <Text>Wednesday, July 08 at 03:23 PM</Text>
          </View>
        </View>
        <View
          style={{
            height: 150,
            width: '90%',
            borderBottomWidth: 0.2,
            margin: 20,
          }}>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              fontSize: 20,
              marginLeft: 10,
              paddingBottom: 10,
            }}>
            DELIVERED ORDER
          </Text>
          <FlatList
            data={this.state.Data}
            renderItem={this.renderItem}
            KeyExtractor={(item) => item.id}
            numColumns={1}></FlatList>
        </View>
        <View style={{height: 80, width: '90%',margin:16}}>
          <FlatList
            data={this.state.Data1}
            renderItem={this.renderItem}
            KeyExtractor={(item) => item.id}
            numColumns={1}></FlatList>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 10,
            }}>
            <Text style={{fontWeight: 'bold'}}>TIPS</Text>
            <Text style={{fontWeight: 'bold'}}>3.500 LBP</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 10,
            }}>
            <Text style={{fontWeight: 'bold',}}>TOTAL</Text>
            <Text style={{fontWeight: 'bold',color:'red'}}>23.000 LBP</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Deliverydetails;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'white',
  },
});
