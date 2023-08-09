import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CatagoryCard = (props) => {

    const catagory = props.item
    return (
        <TouchableOpacity onPress={props.selectCatagory} >

            <View style={styles.card}>
                {
                    catagory.image && <Image source={{ uri: catagory.image }} style={styles.image} />
                }
                <View>
                    <Text style={styles.text}>{catagory.name}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20

    },
    image: {
        width: "90%",
        height: 100
    },
    text: {
        fontSize: 20,
        fontWeight: '500'

    }
})


export default CatagoryCard;