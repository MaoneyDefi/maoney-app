import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ImageBackground,
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
            <ImageBackground
              source={require('../assets/image1.png')}
              style={styles.image}>
              <Text style={styles.subtitle}>Friends and Family Banking</Text>
            </ImageBackground>
          </View>
          <View style={styles.slide}>
            <ImageBackground
              source={require('../assets/image2.png')}
              style={styles.image}>
              <Text style={styles.subtitle}>Friends and Family Banking</Text>
            </ImageBackground>
          </View>
          <View style={styles.slide}>
            <ImageBackground
              source={require('../assets/image3.png')}
              style={styles.image}>
              <Text style={styles.subtitle}>Friends and Family Banking</Text>
            </ImageBackground>          
          </View>
          <View style={styles.slide}>
            <ImageBackground
              source={require('../assets/image4.png')}
              style={styles.image}>
              <Text style={styles.subtitle}>Friends and Family Banking</Text>
            </ImageBackground>            
          </View>
        </Swiper>

        <View style={styles.frame_absolute}>    
          
          <View style={styles.logo_part_container}>
            <Image style={styles.logo_image}
              source={require('../assets/images/logo_onboarding_screen.png')}
            />
          </View>
          
          <View style={styles.help_img_wrapper}>
            <Image style={styles.help_img}
              source={require('../assets/images/help.png')}
            />
          </View>

          <View style={styles.buttonContainer}>
            
            <TouchableOpacity style={styles.signupContainer} onPress={() => _onPress('Tapped Sign up')}>
              <Text style={styles.signup}>Sign up</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.loginContainer} onPress={() => _onPress('Tapped Log in')}>
              <Text style={styles.login}>Log in</Text>
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
    paddingBottom: 44,
    paddingHorizontal: 24,
  },
  logo_image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 60
   },
  help_img: {
    width: 40,
    height: 37
  },
  help_img_wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  logo_part_container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    position: 'absolute',
    fontFamily: 'Helvetica',
    fontSize: 32,
    color: '#FFFFFF',
    bottom: 260,
    width: '100%',
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24
  },
  signupContainer: {
    width: '100%',
    height: 64,
    backgroundColor: primaryColor,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  signup: {
    // fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  },
  loginContainer: {
    width: '100%',
    height: 60,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 3,
  },
  login: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  }
});

export default OnboardingScreen