import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DialCode} from './dial_code'
import DropDownPicker from 'react-native-dropdown-picker'
import { Item, Input, Label, Picker } from 'native-base'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  ToastAndroid
} from 'react-native';

class LandingPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      code:'+971',
      mobileerror:''
    }
  }

  mobileValidate=(text)=>{
    let number=this.state.code+text
    console.log(number)
    if(number.length != 13){
        console.log('wrong')
        this.setState({mobileerror:'hello'})
    } else {
        this.setState({mobile:number,mobileerror:''})
    }

}
showToast = () => {
  ToastAndroid.show("OTP sent Successfully", ToastAndroid.SHORT);
}
SubmitOtp = () => {

  if (this.state.mobile.trim() === "") {
      console.log('Please Enter correct mobile number')
      this.setState(() => ({ errorField: "Please Enter correct mobile number" }));
  } else {

    // this.props.navigation.navigate('Verify',{driverId:'1',driverMobile:'+919793081102'})
      
      return (
          
          fetch('https://rush.aaratechnologies.in/web2/web/twilio/driver_login', {
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  'mobile': this.state.mobile,
              })
          })

              .then(response => response.json())
              .then(async (data) => {
                console.log('All data',data)
                  if (data.response_code == '200') {
                      this.showToast()
                      console.log('id',data.response_data.data)
                      this.props.navigation.navigate('Verify',{driverId:data.response_data.data,driverMobile:this.state.mobile})
                  }
                  else {
                      alert('error',data.comments)
                  }

              })
              .catch(function (error) {
                  let edata = error.message;
                  console.log('Error:', edata)
                
              }
              )
      )
  }

}

  render() {
    console.log(this.state.mobile)
    return (
      <ScrollView >
      <SafeAreaView style={{width:wp('100%'),height:hp('100%')}}>
    
        <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'flex-end' }}>
          <View>
            <Image
              style={{ width: 180, height: 100 }}
              source={require('./assets/rush.png')}></Image>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={{ width: '80%', height: '30%' }}>
            <Text style={{ textAlign: 'center', fontFamily: 'Poppins-SemiBold', fontSize: 15, paddingVertical: '3%' }} >WELCOME</Text>
            <Text style={{ textAlign: 'center', fontSize: 14, fontFamily: 'Poppins-Regular' }}>Please enter your phone number {'\n'} in order to proceed</Text>
          </View>
          <View style={{ width: '98%', height: '20%' }}>
            <View style={[styles.inptBox, { flexDirection: 'row', width: '95%', overflow: 'visible',borderWidth:0.5,
            borderColor:this.state.mobileerror == 'hello' ? 'red':'#fff' }]}>
              <DropDownPicker
              labelStyle={{
                fontSize: 14,
                textAlign: 'left',
                color: '#fff'
            }}
                items={DialCode}
                defaultValue={this.state.code}
                containerStyle={{ width: '22%' }}
                style={{ backgroundColor: '#BE1E23', borderTopLeftRadius: 25, borderBottomLeftRadius: 25 }}
                itemStyle={{
                  justifyContent: 'flex-start',
                  color: '#444'
                }}
                dropDownStyle={{ backgroundColor: '#fff' }}
                onChangeItem={item => this.setState({
                  code: item.value
                })}
              />
           
              <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{width:'75%',height:'100%',borderBottomRightRadius: 25, borderTopRightRadius: 25,overflow:'hidden'}}>
              <Item style={[styles.inptItem, { width: '100%', borderRadius: 0, backgroundColor:'transparent' }]}>
                <Input
                  placeholder=''
                  style={{color:'#fff'}}
                  type="text"
                  keyboardType='decimal-pad'
                  onChangeText={(text) => this.mobileValidate(text)}
                  onSubmitEditing={()=>this.SubmitOtp()
                  }
                  style={[styles.inptText,{width:'100%',height:'100%',}]} />

              </Item>
              </LinearGradient>
            </View>
          
          </View>
          
        </View>
        
      </SafeAreaView>
      </ScrollView>
  
    );
  }
}
export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  inptItem: {
    elevation: 0.5,
    backgroundColor: 'white',
    borderRadius: 25,
    height: '100%'
},

inptBox: {
  width: '80%',
  alignSelf: 'center',
  marginTop: '2%',
  height: '60%',
  overflow: 'hidden',
  borderRadius: 25
},
inptText: {
  height:40,
  width:'100%',
  borderTopRightRadius:25,
  borderBottomRightRadius:25,
  paddingLeft: 10,
  fontSize: 14,
  fontFamily: 'Poppins-Light'
},
});
