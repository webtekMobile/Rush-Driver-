import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ImagePicker from "react-native-customized-image-picker";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ToastAndroid
} from 'react-native';

class Document extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSelectImg: false,
      isSelectId: false,
      isSelectLsc: false,
      isSelectpermit: false,
      dImage: "",
      dLicence: "",
      dPermit: "",
      dId: "",
      driverId:this.props.route.params.driverId,
    }
  }
  showToast = () => {
    ToastAndroid.show("Document upload Successfully", ToastAndroid.SHORT);
  }
  selectImage = () => {
    ImagePicker.openPicker({
      // multiple: true
    }).then(images => {
      console.log(images);
      this.setState({ isSelectImg: false, dImage: images })
    });
  }
  selectId = () => {
    ImagePicker.openPicker({
      // multiple: true
    }).then(images => {
      console.log(images);
      this.showToast()
      this.setState({ isSelectId: false, dId: images })
    });
  }
  selectPermit = () => {
    ImagePicker.openPicker({
      // multiple: true
    }).then(images => {
      console.log(images);
      this.setState({ isSelectpermit: false, dPermit: images })
    });
  }
  selectLicence = () => {
    ImagePicker.openPicker({
      // multiple: true
    }).then(images => {
      console.log(images);
      this.setState({ isSelectLsc: false, dLicence: images })
    });
  }

  openCameraImage = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      // cropping: true
    }).then(image => {
      console.log(image);
      this.setState({ isSelectImg: false, dImage: image })
    });
  }
  openCameraId = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      // cropping: true
    }).then(image => {
      console.log(image);
      this.setState({ isSelectId: false, dId: image })
    });
  }
  openCameraLicence = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      // cropping: true
    }).then(image => {
      console.log(image);
      this.setState({ isSelectLsc: false, dLicence: image })
    });
  }
  openCameraPermit = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      // cropping: true
    }).then(image => {
      console.log(image);
      this.setState({ isSelectpermit: false, dPermit: image })
    });
  }

  uplodaDocuments=()=>{
    return (
      fetch('https://rush.aaratechnologies.in/web2/web/driver/driver_doc', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          
            "driver_image":this.state.dImage,
            "driver_licence":this.state.dLicence,
            "driver_permit": this.state.dPermit,
            "driver_personal" :this.state.dId,
            "driver_id":this.state.driverId
            
        })
      })

        .then(response => response.json())
        .then(async (data) => {
          if (data.response_code == '200') {
            console.log(data.comments, data.response_data)
            this.props.navigation.navigate('Offline')
            this.showToast()
          }
          else {
            // this.setState({ circleBorderColor: '#BE1F24' })
            console.log(data)
          }

        })
        .catch(function (error) {
          let edata = error.message;
          console.log('Error:', edata)
        }
        )
    )
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{ width: wp('100%'), height: hp('100%') }}>
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
              <Icon name="chevron-left" size={20} color="#444" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.6,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{ fontSize: 25, fontWeight: 'bold', paddingVertical: '5%' }}>
              DOCUMENTS
</Text>
            <View style={styles.txtbox}>
              <TextInput
                style={{width:'70%',fontSize:14,fontFamily:'Poppins-Bold'}}
                // value={this.state.dImage.mime}
                placeholder="Driver's Images"
                type="text"
                editable={false}
              />
              <TouchableOpacity onPress={() => this.setState({ isSelectImg: true })}>
                <Image source={require('./assets/download.png')} style={{ width: 10, height: 15 }} />
              </TouchableOpacity>
            </View>
            <View style={styles.txtbox}>
            <TextInput
                style={{width:'70%',fontSize:14,fontFamily:'Poppins-Bold'}}
                // value={this.state.dLicence}
                placeholder="Driver's Licence"
                type="text"
                editable={false}
              />
              <TouchableOpacity onPress={() => this.setState({ isSelectLsc: true })}>
                <Image source={require('./assets/download.png')} style={{ width: 10, height: 15 }} />
              </TouchableOpacity>
            </View>
            <View style={styles.txtbox}>
            <TextInput
                style={{width:'70%',fontSize:14,fontFamily:'Poppins-Bold'}}
                // value={this.state.dPermit}
                placeholder="Driver's Moto Permit"
                type="text"
                editable={false}
              />
              <TouchableOpacity onPress={() => this.setState({ isSelectpermit: true })}>
                <Image source={require('./assets/download.png')} style={{ width: 10, height: 15 }} />
              </TouchableOpacity>
            </View>
            <View style={styles.txtbox}>
            <TextInput
                style={{width:'70%',fontSize:14,fontFamily:'Poppins-Bold'}}
                // value={this.state.dId}
                placeholder="Peronal I'd"
                type="text"
                editable={false}
              />
              <TouchableOpacity onPress={() => this.setState({ isSelectId: true })}>
                <Image source={require('./assets/download.png')} style={{ width: 10, height: 15 }} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{ flex: 0.2, justifyContent: 'flex-start', paddingTop: '8%' }}>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() =>
                this.uplodaDocuments()
                // this.props.navigation.navigate('Offline')
              }
              title="Submit">
              <LinearGradient
                colors={['#BE1F24', '#FF5355', '#FF7B7B']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  height: '65%',
                  borderRadius: 40,
                  width: '75%',
                  justifyContent: 'center', alignItems: 'center'
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 14,
                    fontFamily: 'Poppins-Medium'
                  }}>
                  Submit
                </Text>
              </LinearGradient>
            </TouchableOpacity>

          </View>
        </View>
        <Modal isVisible={this.state.isSelectImg}
          backdropColor='#222'
          backdropOpacity={0.3}
          // coverScreen={false}
          style={{ justifyContent: 'flex-end' }}
          swipeDirection={['up', 'down']}
          onBackButtonPress={() => this.setState({ isSelectImg: false })}
          useNativeDriver={true}
        >
          <View style={{ width: '112%', height: '25%', backgroundColor: '#fff', marginBottom: '-4%', marginLeft: '-6%', justifyContent: 'space-around', borderTopLeftRadius: 35, borderTopRightRadius: 40, alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 15 }}>Upload Car Taxi Permit</Text>
            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignSelf: 'center' }}>
              <TouchableOpacity onPress={() => this.openCameraImage()}>
                <LinearGradient
                  colors={['#BE1F24', '#FF5355', '#FF7B7B']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    // height: '65%',
                    borderRadius: 40,
                    width: '100%',
                    justifyContent: 'center', alignItems: 'center'
                  }}>
                  <Text style={{ paddingVertical: 15, paddingHorizontal: 40, color: '#fff', fontSize: 14, borderRadius: 30, fontFamily: 'Poppins-SemiBold', textTransform: 'uppercase' }}>Camera</Text>
                </LinearGradient>

              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.selectImage()}>
                <Text style={{ paddingVertical: 15, paddingHorizontal: 40, backgroundColor: '#444444', color: '#fff', fontSize: 14, borderRadius: 30, fontFamily: 'Poppins-SemiBold', textTransform: 'uppercase' }}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal isVisible={this.state.isSelectpermit}
          backdropColor='#222'
          backdropOpacity={0.3}
          // coverScreen={false}
          style={{ justifyContent: 'flex-end' }}
          swipeDirection={['up', 'down']}
          onBackButtonPress={() => this.setState({ isSelectpermit: false })}
          useNativeDriver={true}
        >
          <View style={{ width: '112%', height: '25%', backgroundColor: '#fff', marginBottom: '-4%', marginLeft: '-6%', justifyContent: 'space-around', borderTopLeftRadius: 35, borderTopRightRadius: 40, alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 15 }}>Upload Car Taxi Permit</Text>
            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignSelf: 'center' }}>
              <TouchableOpacity onPress={() => this.openCameraPermit()}>
                <LinearGradient
                  colors={['#BE1F24', '#FF5355', '#FF7B7B']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    // height: '65%',
                    borderRadius: 40,
                    width: '100%',
                    justifyContent: 'center', alignItems: 'center'
                  }}>
                  <Text style={{ paddingVertical: 15, paddingHorizontal: 40, color: '#fff', fontSize: 14, borderRadius: 30, fontFamily: 'Poppins-SemiBold', textTransform: 'uppercase' }}>Camera</Text>
                </LinearGradient>

              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.selectPermit()}>
                <Text style={{ paddingVertical: 15, paddingHorizontal: 40, backgroundColor: '#444444', color: '#fff', fontSize: 14, borderRadius: 30, fontFamily: 'Poppins-SemiBold', textTransform: 'uppercase' }}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal isVisible={this.state.isSelectLsc}
          backdropColor='#222'
          backdropOpacity={0.3}
          // coverScreen={false}
          style={{ justifyContent: 'flex-end' }}
          swipeDirection={['up', 'down']}
          onBackButtonPress={() => this.setState({ isSelectLsc: false })}
          useNativeDriver={true}
        >
          <View style={{ width: '112%', height: '25%', backgroundColor: '#fff', marginBottom: '-4%', marginLeft: '-6%', justifyContent: 'space-around', borderTopLeftRadius: 35, borderTopRightRadius: 40, alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 15 }}>Upload Car Taxi Permit</Text>
            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignSelf: 'center' }}>
              <TouchableOpacity onPress={() => this.openCameraLicence()}>
                <LinearGradient
                  colors={['#BE1F24', '#FF5355', '#FF7B7B']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    // height: '65%',
                    borderRadius: 40,
                    width: '100%',
                    justifyContent: 'center', alignItems: 'center'
                  }}>
                  <Text style={{ paddingVertical: 15, paddingHorizontal: 40, color: '#fff', fontSize: 14, borderRadius: 30, fontFamily: 'Poppins-SemiBold', textTransform: 'uppercase' }}>Camera</Text>
                </LinearGradient>

              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.selectLicence()}>
                <Text style={{ paddingVertical: 15, paddingHorizontal: 40, backgroundColor: '#444444', color: '#fff', fontSize: 14, borderRadius: 30, fontFamily: 'Poppins-SemiBold', textTransform: 'uppercase' }}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal isVisible={this.state.isSelectId}
          backdropColor='#222'
          backdropOpacity={0.3}
          // coverScreen={false}
          style={{ justifyContent: 'flex-end' }}
          swipeDirection={['up', 'down']}
          onBackButtonPress={() => this.setState({ isSelectId: false })}
          useNativeDriver={true}
        >
          <View style={{ width: '112%', height: '25%', backgroundColor: '#fff', marginBottom: '-4%', marginLeft: '-6%', justifyContent: 'space-around', borderTopLeftRadius: 35, borderTopRightRadius: 40, alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 15 }}>Upload Car Taxi Permit</Text>
            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignSelf: 'center' }}>
              <TouchableOpacity onPress={() => this.openCameraId()}>
                <LinearGradient
                  colors={['#BE1F24', '#FF5355', '#FF7B7B']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    // height: '65%',
                    borderRadius: 40,
                    width: '100%',
                    justifyContent: 'center', alignItems: 'center'
                  }}>
                  <Text style={{ paddingVertical: 15, paddingHorizontal: 40, color: '#fff', fontSize: 14, borderRadius: 30, fontFamily: 'Poppins-SemiBold', textTransform: 'uppercase' }}>Camera</Text>
                </LinearGradient>

              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.selectId()}>
                <Text style={{ paddingVertical: 15, paddingHorizontal: 40, backgroundColor: '#444444', color: '#fff', fontSize: 14, borderRadius: 30, fontFamily: 'Poppins-SemiBold', textTransform: 'uppercase' }}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}
export default Document;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f1f5',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  txtbox: {
    height: '14%',
    width: '90%',
    borderRadius: 40,
    margin: '3%',
    elevation: 2,
    backgroundColor: 'white',
    fontSize: 18,
    color: '#cbced4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  txt: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    width: '70%',
  },

});