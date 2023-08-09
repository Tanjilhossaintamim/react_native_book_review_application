import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchBooks, fetchCatagories, catagorywise_book } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import CatagoryCard from '../component/CatagoryCard';
import Spinner from "../component/Spinner"



const mapStateToProps = state => {
    return {
        catagories: state.catagories,
        catagory_isLoading: state.catagory_is_loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchCatagories: () => dispatch(fetchCatagories()),
        fetchBooks: () => dispatch(fetchBooks()),
        catagorywise_books: (id) => dispatch(catagorywise_book(id))
    }
}

const CatagoryScreen = (props) => {

    useEffect(() => {
        props.fetchBooks()
        props.fetchCatagories()
    }, [])

    const catagoryselect = (item) => {
        props.catagorywise_books(item.id)
        props.navigation.navigate("CatagoryBook", { catagory: item })

    }
    if (props.catagory_isLoading) {
        return <Spinner />
    }
    return (
        <View >
            <FlatList data={props.catagories} renderItem={({ item }) => (<CatagoryCard item={item} selectCatagory={() => catagoryselect(item)} />)} keyExtractor={item => item.id.toString()} />
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CatagoryScreen);