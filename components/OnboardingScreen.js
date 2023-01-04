import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');
const primaryColor = '#FF9502'

function OnboardingScreen () {

  const _onPress = text => {
    Alert.alert(text);
  };
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor={'transparent'} hidden={false} />
        <Swiper autoplay={true} loop={true} showsPagination={false}>
          <View style={styles.slide}>
            <Image
              source={require('../assets/image1.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/image2.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/image3.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/image4.png')}
              style={styles.image}
            />
          </View>
        </Swiper>

        <View style={styles.frame_absolute}>    
          <View style={styles.logo_part_container}>
            <Image style={styles.logo_image}
              source={require('../assets/images/logo_onboarding_screen.png')}
            />
            <Text style={styles.subtitle}>Friends and Family Banking</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.signupContainer} onPress={() => _onPress('Tapped Sign up')}>
              <Text style={styles.signup}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => _onPress('Tapped Log in')}>
              <View style={styles.loginContainer}>
                <Text style={styles.login}>Log in</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: width,
    height: height
  },
  
  frame_absolute: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'column',
    width: width,
  },
  logo_image: {
    width: '60%',
    height: 100,
     resizeMode: 'contain'
   },
  logo_part_container: {
    // position: 'absolute',
    width: '100%',
    // bottom: 200,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
//   titleContainer: {
//     width: 300,
//     height: 70,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   subTitleContainer: {
//     height: 50,
//     opacity: 0.7,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: 36,
    color: '#FFFFFF'
  },
  buttonContainer: {
    marginVertical: 20,
    height: 140,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signupContainer: {
    width: width - 40,
    height: 60,
    backgroundColor: primaryColor,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signup: {
    // fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  },
  loginContainer: {
    width: width - 40,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 2
  },
  login: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  }
});

export default OnboardingScreen