import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { sendFeedback } from '../../redux/actionCreators';
import Spinner from './Spinner';


const mapStateToProps = state => {
    return {
        token: state.token,
        feedback_isloading: state.feedback_is_loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sendFeedback: (feedback) => dispatch(sendFeedback(feedback))
    }
}

const FeedBackForm = (props) => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');

    const sendFeedback = (bookid) => {
        if (name != '' && feedback != "") {
            const userFeedback = {
                username: name,
                usrFeedback: feedback,
                bookid: bookid
            }
            if (props.token != null) {
                /// code will execute
                props.sendFeedback(userFeedback)
                setFeedback('')
                setName('')
            }
            else {
                alert('You are not logged in !')
            }

        }
        else {
            alert('Please fillup all Field !')
        }
    }
    if (props.feedback_isloading) {
        return <Spinner />
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 18 }}>Give Your Valuable Feedback</Text>
            <View>
                <TextInput placeholder='Your Name' style={styles.input} value={name} onChangeText={text => setName(text)} />
                <TextInput placeholder='Your FeedBack' style={styles.input} value={feedback} onChangeText={text => setFeedback(text)} />
                <Button title='Send Us' onPress={() => sendFeedback(props.bookid)} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",

        padding: 10
    },
    input: {
        width: '100%',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedBackForm);