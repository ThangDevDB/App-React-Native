import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import {SIZES, COLORS} from '../Theme/Theme'

const Restaurent = ({title, data}) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={styles.textBtn}>{`Tất Cả >>`}</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity style={styles.item} onPress={() => {}}>
                            <View>
                                <Image source={{uri: item.image_url}} style={styles.image} resizeMode="cover" />
                            </View>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.address}>{`${item.location.address1}, ${item.location.city}`}</Text>
                            <Text style={styles.address}>{item.review_count} reviews</Text>                      
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default Restaurent

const styles = StyleSheet.create({
    container: {
        margin: 15
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        color: COLORS.title,
        marginVertical: 5,
    },
    textBtn:{
        fontSize: 16,
        color: COLORS.primary,
        fontWeight: '700'
    },
    image: {
        width: SIZES.width / 2 + 60,
        height: 120,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    item:{
        marginRight: 5,
        backgroundColor: COLORS.white,
        borderRadius: 5,
    },
    name:{
        marginTop: 5,
        marginHorizontal: 5,
        color: COLORS.title,
        fontWeight: 'bold',
        fontSize: SIZES.h4
    },
    address:{
        marginHorizontal: 5,
        marginTop: 5,
    }
})