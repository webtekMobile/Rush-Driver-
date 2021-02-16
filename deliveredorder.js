import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, TouchableOpacity,FlatList} from 'react-native';

class Deliveredorder extends React.Component {
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

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 60,
            width: 60,
            margin: 15,
            backgroundColor: 'white',
            elevation: 1,
            borderRadius: 50,
          }}>
          <TouchableOpacity>
            <View style={{padding: 18}}>
              <Icon name="align-left" size={25} color="#444" />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 30,
            width: 120,
            marginLeft: 240,
            marginTop: -70,
            backgroundColor: '#46484a',
            flexDirection: 'row',
            borderRadius: 30,
          }}>
          <View
            style={{
              height: 22,
              width: 22,
              margin: 10,
              elevation: 1,
              borderRadius: 20,
              backgroundColor: 'white',
              marginTop: 4,
              marginLeft: 4,
            }}>
            <TouchableOpacity>
              <View style={{padding: 2}}>
                <Icon name="phone" size={20} color="#444" />
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              paddingTop: 5,
            }}>
            Call support
          </Text>
        </View>
        <View style={{height:340,width:'100%'}}>
          <Text style={{paddingTop:130,paddingLeft:100,fontSize:20}}>Map Under Maintanace</Text>
            </View>
        <View style={styles.downbox}>
          <Text style={styles.txt0}>
            You have received a pick up order from Bartartine Sin El Fil to
            Mansourieh.
          </Text>
          <View style={{height: 200, width: '90%', paddingLeft: 20}}>
            <Text style={{color: 'red', fontSize: 16, fontWeight: 'bold'}}>
              DELIVERED ORDER
            </Text>
            <View style={{height:150,paddingTop:30}}>
              <FlatList
                data={this.state.Data}
                renderItem={this.renderItem}
                KeyExtractor={(item) => item.id}
                numColumns={0}></FlatList>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold'}}>SUBTOTAL</Text>
              <Text style={{color: 'red', fontWeight: 'bold'}}>20.000 LBP</Text>
            </View>
          </View>
          <View style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#fc2e1c', '#de594e', '#eb897f']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                width: '80%',
                height: 55,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                marginLeft: 35,
              }}>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                  }}>
                  Done
                </Text>
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  }
}
export default Deliveredorder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  downbox: {
    height: '50%',
    width: '100%',
    backgroundColor: '#e1e6eb',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  txt0: {
    padding: 25,
    fontSize: 20,
  },
  box2: {
    flexDirection: 'row',
    height: '20%',
    width: '100%',
    paddingTop: 0,
  },
});
