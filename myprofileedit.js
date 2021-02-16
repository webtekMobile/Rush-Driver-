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

class Myprofileedit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [
        {
          id: 1,
          title: 'Order ',
          quantity: 1,
        },
        {
          id: 2,
          title: 'Orders ',
          quantity: 0,
        },
        {
          id: 3,
          title: 'Orders ',
          quantity: 7,
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
          borderTopWidth: 0.2,
          height: '100%',
        }}>
        <Text style={{fontSize: 20}}>{item.title}</Text>

        <Text style={{fontSize: 20}}>{item.quantity}</Text>
      </View>
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
                height: '80%',
                width: '140%',
                backgroundColor: 'white',
                borderRadius: 50,
                elevation: 10,
              }}>
              <TouchableOpacity>
                <View style={{marginLeft: 12, marginTop: 8}}>
                  <Icon name="close" size={25} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                paddingTop: '5%',
              }}>
              EDIT PROFILE
            </Text>
          </View>

          <View
            style={{
              height: '70%',
              width: '12%',
              backgroundColor: 'white',
              borderRadius: 50,
              elevation: 10,
              marginTop: 10,
            }}>
            <TouchableOpacity>
              <View style={{marginLeft: 10, marginTop: 10}}>
                <Icon name="edit" size={25} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{height: '15%', paddingLeft: '10%'}}>
          <TouchableOpacity>
            <Image
              style={{
                height: '80%',
                width: '23%',
                borderRadius: 40,
                marginLeft: '35%',
                marginTop: '3%',
              }}
              source={require('./assets/profile.jpg')}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: '30%',
            width: '80%',
            marginLeft: '8%',
          }}>
          <TextInput style={styles.txtinput} placeholder="Samer Zouein" />
          <TextInput style={styles.txtinput} placeholder="8565002333" />
          <TextInput
            style={styles.txtinput}
            placeholder="samer.zouein@gmail.com"
          />
        </View>
        <View
          style={{
            height: '10%',
            borderBottomWidth: 1,
            width: '80%',
            marginLeft: '10%',
          }}>
          <TouchableOpacity>
            <LinearGradient
              colors={['#fc2e1c', '#de594e', '#eb897f']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                width: '65%',
                height: '74%',
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 30,
                marginTop: '3%',
              }}>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>
                Documents
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.lstbox}>
          <Text
            style={{
              fontSize: 25,
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Monthly Score
          </Text>
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
export default Myprofileedit;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'white',
  },
  txtinput: {
    height: '23%',
    width: '80%',
    borderRadius: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 20,
    marginLeft: '13%',
  },
  lstbox: {
    height: '25%',
    width: '80%',
    marginLeft: '10%',
    borderRadius: 10,
    marginTop: '6%',
    padding: '10%',
    backgroundColor: 'white',
    borderWidth:0.2,
  },
});
