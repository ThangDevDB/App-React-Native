import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SIZES } from './src/Theme/Theme';
import { COLORS } from './src/Theme/Theme';
import StackNavigator from './Navigation/StackNavigator';


const slides = [
  {
    id: 1,
    title: ' Đây Sẽ Là Một Nơi Mua Sắm Tuyệt Vời Dành Riêng Cho Bạn <3 ',
    description: 'Đây là một nói mà bạn có thể mua sắm thoải mái tất cả các mặt hàng mà bạn thích!!!',
    image: require('./assets/onboardScreen1.png'),
  },
  {
    id: 2,
    title: ' Thoải Mái Mua Sắm Mặt Hàng Mà Bạn Yêu Thích <3 ',
    description: ' Không chỉ có những mặt hàng về đồ ăn, thời trang, đồ công nghệ,..., ở BOSS-STORE chúng tôi có tất cả những gì bạn cần.',
    image: require('./assets/onboardScreen2.png'),
  },
  {
    id: 3,
    title: ' Dễ Dàng Thanh Toán, Giao và Nhận Hàng Nhanh Chóng!!!',
    description: ' Thanh toán cực nhanh với máy quét QR, liên kết với các ví điện tử giúp rút ngắn thời gian thanh toán cho bạn, giao và nhận hàng cực nhanh từ các đối tác của chúng tôi.',
    image: require('./assets/onboardScreen3.png'),
  },
  {
    id: 4,
    title: ' Chào Mừng Bạn Đến Với BOSS-STORE ',
    description: 'Nếu Đã Xem Hết Những Điều Trên, Chúc Bạn Có Những Phút Giây Mua Sắm Tuyệt Vời Trên BOSS-STORE',
    image: require('./assets/onboardScreen1.png'),
  }
]

export default function App() {

  const [showHomePage, setShowHomePage] = useState(false);

  const buttonLabel = (label) => {
    return (
      <View style={{
        padding: 12
      }}>
        <Text style={{
          color: COLORS.title,
          fontWeight: '600',
          fontSize: SIZES.h4,
        }}>
          {label}
        </Text>
      </View>
    )
  }

  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View style={{
              flex: 1,
              alignItems: 'center',
              padding: 15,
              paddingTop: 70,
            }}>

              <Image
                source={item.image}
                style={styles.styleImage}
              />

              <Text style={{
                fontWeight: 'bold',
                color: COLORS.title,
                fontSize: SIZES.h1,
                textAlign: 'center',
              }}>
                {item.title}
              </Text>

              <Text style={{
                textAlign: 'center',
                paddingTop: 15,
                color: COLORS.title,
                fontSize: SIZES.h3,
              }}>
                {item.description}
              </Text>

            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}

        showSkipButton
        renderNextButton={() => buttonLabel("Tiếp Tục")}
        renderSkipButton={() => buttonLabel("Bỏ Qua")}
        renderDoneButton={() => buttonLabel("Đóng")}
        onDone={() => {     
          setShowHomePage(true);                     
        }}
      />
    )
  }


  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>      
  )
}

const styles = StyleSheet.create({
  styleImage: {
    width: SIZES.width - 80,
    height: 400,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})
