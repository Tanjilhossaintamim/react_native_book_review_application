import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

const BookCard = (props) => {
    const book = props.item

    return (
        <TouchableOpacity onPress={props.selectBook}>
            <View style={styles.container}>
                {book.image && <Image source={{ uri: book.image }} style={styles.image} />}

                <View style={styles.details}>
                    <Text style={styles.name} >{book.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // borderRadius: 15,
        backgroundColor: '#F4F2DE',
        // elevation: 5,
        margin: 15
    },
    image: {
        width: '100%',
        height: 200
    },
    details: {
        padding: 10,
        width: '100%'
    },
    name: {
        fontSize: 20,
        fontWeight: '500',

    }
})

export default BookCard;