import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker'
import {DialCode} from './dial_code'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ToastAndroid
} from 'react-native';

class Regdriver extends React.Component {
  constructor(props){
    super(props)
    this.state={
      fname:'',
      lname:'',
      email:'',
      zone:'',
      emailerror:'',
      ferror:'',
      lerror:'',
      zoneError:'',
      ZoneList:[],
      driverId:this.props.route.params.driverId,
    }
  }

  email = (text) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === true) {
        this.setState({ email: text,emailerror:'' })
    }
    else {
        this.setState({emailerror:'hello'})
        console.log('invalid')
    }
}

fname = (text) => {
    const reg = /\s+/g;
    if (reg.test(text) === true) {
        console.log('incorrect')
        this.setState({ ferror:'hello'})
    }
    else {
        this.setState({ fname: text,ferror:'' })
    }
}
showToast = () => {
  ToastAndroid.show("Registered Successfully", ToastAndroid.SHORT);
}
lname = (text) => {
    const reg = /\s+/g;
    if (reg.test(text) === true) {
        this.setState({ lerror:'hello'})
        console.log('incorrect')
    }
    else {
        this.setState({ lname: text ,lerror:''})
    }
}
handleRegister = () => {
       
  if (this.state.fname.trim() === '' )
  {
      this.setState({ ferror: 'hello' })
  } else if (this.state.lname.trim() === ''){
    this.setState({ lerror: 'hello' })
  } else if ( this.state.email.trim() === ''){
    this.setState({ emailerror: 'hello' })
  } else if (this.state.zone.trim() === ''){
    this.setState({ zoneError: 'hello' })
    console.log('Please Select zone')
  }
  else {
    // console.log('Almost here *')
      return (

          fetch('https://rush.aaratechnologies.in/web2/web/driver/driver_reg', {
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                {
                  "fname":this.state.fname,
                  "lname":this.state.lname,
                  "email":this.state.email,
                  "zone":this.state.zone,
                  "driver_id":this.state.driverId
                  }
              )
          })

              .then(response => response.json())
              .then(async (data) => {
                  console.log(data)
                  if (data.response_code =='200'){
                      this.showToast()
                  this.props.navigation.replace('Document',{driverId:this.state.driverId})
                  } else{
                      Alert.alert(data.comments)
                  }

              }))
          .catch(function (error) {
              let edata = error.message;
              console.log('Error:', edata)
              // Alert.alert(
              //     edata
              // );
          }
          )
  }
}

componentDidMount(){
  fetch('https://rush.aaratechnologies.in/web2/web/driver/zone_list', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(async (data) => {
                console.log(data.response_data.data)
                this.setState({ ZoneList: data.response_data.data })
            })
            .catch(function (error) {
                let edata = error.message;
                console.log('Error:', edata)

            }
            )
}

  render() {
    return (
      <ScrollView
        contentContainerStyle={{width: wp('100%'), height: hp('100%')}}>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: 'white',
              width: '13%',
              height: '7%',
              borderRadius: 40,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 10,
              marginVertical: '3%',
              marginHorizontal: '3%',
            }}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={25} color="#444" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.6,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{fontSize: 20, fontFamily:'Poppins-SemiBold', paddingVertical: '5%'}}>
              REGISTER AS A DRIVER
            </Text>
            <Text style={{fontSize:9,fontFamily:'Poppins-Light',color:'#9E1519'}}>First and Last cannot caontain numbers,special characters and space * </Text>

            <TextInput 
            style={[styles.txtinput,{borderWidth:0.5,borderColor:this.state.ferror === 'hello' ? 'red':'#fff'}]} 
            placeholder="First Name" 
             type="text"
             onChangeText={(text) => this.fname(text)}
            />
            <TextInput 
            style={[styles.txtinput,{borderWidth:0.5,borderColor:this.state.lerror === 'hello' ? 'red':'#fff'}]} 
            placeholder="Last Name"
            type="text"
            onChangeText={(text) => this.lname(text)}
            />
            <TextInput 
            style={[styles.txtinput,{borderWidth:0.5,borderColor:this.state.emailerror === 'hello' ? 'red':'#fff'}]}
            placeholder="Email Address" 
            type="text"
            onChangeText={(text) => this.email(text)}
            />
            <DropDownPicker
                items={this.state.ZoneList}
                defaultValue={this.state.zone}
                containerStyle={{ width: '90%',height:'14%' }}
                style={{ backgroundColor: '#fff',borderWidth:1,borderColor:this.state.zoneError === 'hello' ? 'red':'#fff', borderTopLeftRadius: 25, borderBottomLeftRadius: 25 ,borderTopRightRadius:25,borderBottomRightRadius:25}}
                itemStyle={{
                  justifyContent: 'flex-start',
                  color: '#444'
                }}
                dropDownStyle={{ backgroundColor: '#fff' }}
                onChangeItem={item => this.setState({
                  zone: item.value,zoneError:''
                })}
              />
            {/* <TextInput style={styles.txtinput} placeholder="Zone" /> */}
          </View>
          <View
            style={{flex: 0.2, justifyContent: 'flex-start', paddingTop: '8%'}}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={()=>this.handleRegister()}
              // onPress={() => this.props.navigation.navigate('Document')}
              title="Submit">
              <LinearGradient
               colors={['#BE1F24', '#FF5355', '#FF7B7B']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{
                  height: '65%',
                  borderRadius: 40,
                  width: '75%',
                  justifyContent:'center',alignItems:'center'
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 14,
                    fontFamily:'Poppins-Medium'
                  }}>
                  Submit
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <Text style={{textAlign: 'center',fontSize:12,fontFamily:'Poppins-Regular'}}>
              By submitting you agree to the
            </Text>
            <TouchableOpacity>
            <Text style={{textAlign: 'center', fontFamily:'Poppins-Medium'}}>
              Terms & Conditions
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default Regdriver;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f1f5',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  txtinput: {
    height: '14%',
    width: '90%',
    borderRadius: 25,
     margin: '3%',
    elevation: 1,
    backgroundColor: 'white',
    fontSize: 14,
    paddingLeft:'5%',
    fontFamily:'Poppins-Light'
  },
});