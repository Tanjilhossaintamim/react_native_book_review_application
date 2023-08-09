import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FeedBackForm from '../component/FeedBackForm';


const BookDetailsScreen = (props) => {
    const book = props.route.params.book

    return (
        <View>
            <Image source={{ uri: book.image }} style={{ width: '100%', height: 350 }} />
            <View style={{ margin: 10 }}>


                <Text style={styles.name}>

                    {book.writer}
                </Text>
                <Text style={styles.description}>

                    {book.description}
                </Text>
            </View>
            <View style={{ justifyContent: 'center' }}>

                <FeedBackForm bookid={book.id} />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 20,
        fontWeight: '700'
    },
    description: {
        fontSize: 13,
        color: '#222'
    }
})

export default BookDetailsScreen;