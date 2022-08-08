import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import {SignupSchema} from '../../../ValidationForm/Yup';
import styles from './styles';
import { COLORS } from '../../Theme/Theme';

const SignUpScreen = ({ navigation }) => {
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
        <ScrollView>
          <View style={styles.topContainer}>
            <Text style={styles.title}>CHÀO MỪNG BẠN</Text>
            <Text style={styles.subtitle}>Đăng Kí Để Tiếp Tục</Text>
          </View>

          <Formik
            initialValues={{ userName: '', password: '', email: '', numberPhone: '' }}
            onSubmit={values => console.log(values)}
            validationSchema={SignupSchema}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <View style={styles.dataContainer}>
                  <TextInput
                    placeholder='Email'
                    style={styles.textinput}
                    placeholderTextColor={COLORS.white}
                    keyboardType="email-address"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 10 }}>
                      <Ionicons name="warning-outline" size={28} color="red" />
                      <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>{errors.email}</Text>
                    </View>
                  ) : null}

                  <TextInput
                    placeholder='Số Điện Thoại'
                    style={styles.textinput}
                    placeholderTextColor={COLORS.white}
                    keyboardType="numeric"
                    onChangeText={handleChange('numberPhone')}
                    onBlur={handleBlur('numberPhone')}
                    value={values.numberPhone}
                  />
                  {errors.numberPhone && touched.numberPhone ? (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 10 }}>
                      <Ionicons name="warning-outline" size={28} color="red" />
                      <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>{errors.numberPhone}</Text>
                    </View>
                  ) : null}

                  <TextInput
                    placeholder='Tên Đăng Nhập'
                    style={styles.textinput}
                    placeholderTextColor={COLORS.white}
                    onChangeText={handleChange('userName')}
                    onBlur={handleBlur('userName')}
                    value={values.userName}
                  />
                  {errors.userName && touched.userName ? (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 10 }}>
                      <Ionicons name="warning-outline" size={28} color="red" />
                      <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>{errors.userName}</Text>
                    </View>
                  ) : null}

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
                  {errors.password && touched.password ? (
                      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 10 }}>
                        <Ionicons name="warning-outline" size={28} color="red" />
                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>{errors.password}</Text>
                      </View>
                    ) : null}

                </View>
                <View style={styles.btnContainer}>
                  <TouchableOpacity onPress={handleSubmit}>
                    <View style={styles.button1}>
                      <Text style={styles.btnText}>Đăng Kí</Text>
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
                <Text style={styles.btnText}>Đăng Kí Với Facebook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
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
                <Text style={styles.btnText}>Đăng Kí Với Google</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.text}>Bạn Đã Có Tài Khoản? | Đăng Nhập</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

export default SignUpScreen

