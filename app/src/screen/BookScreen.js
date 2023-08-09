import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchBooks } from '../../redux/actionCreators';
import BookCard from '../component/BookCard';
import Spinner from "../component/Spinner"


const mapStateToProps = state => {
    return {
        books: state.books,
        token: state.token,
        book_isloading: state.book_is_loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchbooks: () => dispatch(fetchBooks())
    }
}
const BookScreen = (props) => {


    useEffect(() => {
        props.fetchbooks();


    }, [])
    if (props.book_isloading) {
        return <Spinner />
    }
    return (
        <View style={{ backgroundColor: "#aaaa" }}>
            <FlatList data={props.books} renderItem={({ item }) => (<BookCard item={item} selectBook={() => props.navigation.navigate('BookDetails', { book: item })} />)} keyExtractor={item => item.id.toString()} />
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(BookScreen);