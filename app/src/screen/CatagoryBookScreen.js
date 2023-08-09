import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import BookCard from "../component/BookCard"
const mapStateToProps = state => {
    return {
        books: state.books,
        selectedCatagoryBook: state.selectedBook,
    }
}

const CatagoryBookScreen = (props) => {


    return (
        <View>
            <FlatList data={props.selectedCatagoryBook} renderItem={({ item }) => (<BookCard item={item} selectBook={() => props.navigation.navigate("BookDetails", { book: item })} />)} keyExtractor={item => item.id.toString()} />
        </View>
    )
}

export default connect(mapStateToProps)(CatagoryBookScreen)