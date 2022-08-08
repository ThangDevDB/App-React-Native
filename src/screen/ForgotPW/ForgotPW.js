import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const ForgotPwScreen = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>QUÊN MẬT KHẨU</Text>
    <Text style={styles.subtitle}>Hãy Nhập Số Điện Thoại Của Bạn Và Chúng Tôi Sẽ Gửi Mật Khẩu Mới Về Số Điện Thoại Của Bạn.</Text>
    <View>
        <TextInput placeholder='Nhập Số Điện Thoại Của Bạn' style={styles.textinput} keyboardType="numeric" />
    </View>
    <TouchableOpacity onPress={() => {}}>
        <View style={styles.button}>
            <Text style={styles.buttonTxt}>GỬI</Text>
        </View>
    </TouchableOpacity>
</View>
  )
}

export default ForgotPwScreen