import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import styles from './styles';
import { COLORS } from '../../Theme/Theme';

const Navigator = ({ navigation }) => {
    navigation.navigate('Tab')
};

const SignInScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/background.png')}
        style={{
          flex: 1
        }}
        resizeMode="cover"
      >
        <StatusBar style="light" />
        <ScrollView>
          <View style={styles.topContainer}>
            <Text style={styles.title}>CHÀO MỪNG</Text>
            <Text style={styles.subtitle}>Đăng Nhập Để Tiếp Tục</Text>
          </View>

          <Formik
            initialValues={{ userName: '', password: '' }}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit,isSubmitting, values }) => (
              <>
                <View style={styles.dataContainer}>
                  <View>
                    <TextInput
                      placeholder='Tên Đăng Nhập'
                      style={styles.textinput}
                      placeholderTextColor={COLORS.white} 
                      onChangeText={handleChange('userName')}
                      onBlur={handleBlur('userName')}
                      value={values.userName}
                    />
                  </View>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholder='Mật Khẩu'
                      style={styles.textinput}
                      placeholderTextColor={COLORS.white}
                      secureTextEntry={showPassword} 
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                    <TouchableOpacity
                      style={styles.buttonView}
                      onPress={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      {!showPassword ?
                        <Ionicons name="eye" size={24} color="white" /> :
                        <MaterialCommunityIcons name="eye-off" size={24} color="white" />
                      }
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.btnContainer}>
                  <TouchableOpacity onPress={() => {navigation.navigate('Tab')}}>
                    <View style={styles.button1}>
                      <Text style={styles.btnText}>ĐĂNG NHẬP</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={() => { }}>
              <View style={styles.button2}>
                <View style={styles.logo}>
                  <Image source={require('../../../assets/facebook.png')}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                </View>
                <Text style={styles.btnText}>Đăng Nhập Với Facebook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.button2}>
                <View style={styles.logo}>
                  <Image source={require('../../../assets/Google.png')}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                </View>
                <Text style={styles.btnText}>Đăng Nhập Với Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('forgotPw')}>
              <Text style={styles.text}>Quên Mật Khẩu?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.text}>Bạn Chưa Có Tài Khoản ? | Đăng Kí Ngay!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

export default SignInScreen