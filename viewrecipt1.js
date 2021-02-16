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
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

class Viewrecipt1 extends React.Component {
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
    <View style={{}}>
      <Text style={{fontSize: 20}}>{item.title}</Text>
      <Text>{item.price}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            height: '8%',
            width: '90%',
            marginLeft: '4.5%',
            justifyContent: 'space-between',
          }}>
          <View style={{marginTop: 7}}>
            <View
              style={{
                height: '85%',
                width: '140%',
                backgroundColor: 'white',
                borderRadius: 50,
                elevation: 10,
              }}>
              <TouchableOpacity>
                <View style={{marginLeft: 12, marginTop: 12}}>
                  <Icon name="align-left" size={22} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              height: '60%',
              width: '25%',
              backgroundColor: 'white',
              borderRadius: 50,
              elevation: 10,
              marginTop: 12,
            }}>
            <TouchableOpacity>
              <View
                style={{marginLeft: 10, marginTop: 5, flexDirection: 'row'}}>
                <Icon name="globe" size={25} color="black" />
                <Text
                  style={{fontSize: 16, paddingLeft: 5, fontWeight: 'bold'}}>
                  Online
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            paddingTop: '5%',
            paddingLeft: '5%',
            paddingBottom: '2%',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            BAR TARTINE - SIN EL FIL
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderTopWidth: 0.2,
            borderBottomWidth: 0.2,
            width: '90%',
            marginLeft: '5%',
            paddingTop: '5%',
            paddingBottom: '5%',
          }}>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>CLIENTS</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>TIME</Text>
          </View>
          <View>
            <Text style={{fontSize: 16, paddingLeft: '20%'}}>Sara Doe</Text>
            <Text style={{fontSize: 16, paddingLeft: '13%'}}>
              Wednesday, July 08 at 03:23 PM
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            paddingLeft: '7%',
            paddingTop: '7%',
          }}>
          <Text style={{fontSize: 18, color: 'red', fontWeight: 'bold'}}>
            DELIVERED ORDER
          </Text>
          <View style={{justifyContent: 'space-between'}}>
            <View
              style={{
                paddingBottom: '5%',
                paddingTop: '10%',
              }}>
              <FlatList
                data={this.state.Data}
                renderItem={this.renderItem}
                KeyExtractor={(item) => item.id}
                numColumns={1}></FlatList>
            </View>
          </View>
          <View
            style={{
              borderTopWidth: 0.2,
              paddingTop: '10%',
              paddingBottom: '10%',
            }}>
            <FlatList
              data={this.state.Data1}
              renderItem={this.renderItem}
              KeyExtractor={(item) => item.id}
              numColumns={1}></FlatList>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: '10%',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>TOTAL</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'red'}}>
              23.000 LBP
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingTop: '8%',
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            backgroundColor: '#cccbc6',
            height: '100%',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                height: '150%',
                width: '10%',
                borderRadius: 40,
                backgroundColor: 'red',
                marginLeft: '10%',
              }}
              source={require('./assets/profile.jpg')}></Image>
            <Text
              style={{
                fontSize: 18,
                color: 'red',
                fontWeight: 'bold',
                paddingLeft: '4%',
                paddingTop: '1%',
              }}>
              RUSH WALLET
            </Text>
          </View>

          <Text
            style={{
              width: '80%',
              paddingLeft: '24%',
              color: '#a3a29e',
            }}>
            Please specify the exact amount added to the client wallet
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                paddingLeft: '23%',
              }}>
              +Add amount
            </Text>
          </TouchableOpacity>

          <View style={{paddingTop: '15%'}}>
            <TouchableOpacity>
              <LinearGradient
                colors={['#fc2e1c', '#de594e', '#eb897f']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{
                   width: '80%',
                   height: '44%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 30,
                   marginLeft: '9%',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                  }}>
                  Done
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Viewrecipt1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
