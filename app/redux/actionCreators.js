import axios from "axios"
import * as actionTypes from "./actionTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LOAD_BOOKS = (books) => {
    return {
        type: actionTypes.LOAD_BOOKS,
        payload: books
    }
}

const LOAD_CATAGORY = (catagories) => {
    return {
        type: actionTypes.LOAD_CATAGORY,
        payload: catagories
    }
}

export const user_logout = () => {
    return {
        type: actionTypes.LOGOUT
    }
}

const book_loading = (status) => {
    return {
        type: actionTypes.BOOK_LOADING,
        payload: status
    }
}
const catagory_loading = status => {
    return {
        type: actionTypes.CATAGORY_LOADING,
        payload: status
    }
}

const auth_loading = status => {
    return {
        type: actionTypes.AUTH_LOADING,
        payload: status
    }
}
const feedback_loading = status => {
    return {
        type: actionTypes.FEEDBACK_LOADING,
        payload: status
    }
}

const Store_Token = (token) => {
    return {
        type: actionTypes.STORE_TOKEN,
        payload: token
    }
}

export const catagorywise_book = bookid => {
    return {
        type: actionTypes.CATAGORYWISE_BOOK,
        payload: bookid
    }
}

export const fetchBooks = () => dispatch => {
    dispatch(book_loading(true))
    axios.get("https://book-d50c3-default-rtdb.firebaseio.com/books.json")
        .then(res => {
            dispatch(book_loading(false));
            dispatch(LOAD_BOOKS(res.data));

        })
        .catch(error => {
            dispatch(book_loading(false))
            alert(error.response.data.error.message)
        })
}

export const fetchCatagories = () => dispatch => {
    dispatch(catagory_loading(true))
    axios.get("https://book-d50c3-default-rtdb.firebaseio.com/catagories.json")
        .then(res => {
            dispatch(catagory_loading(false));
            dispatch(LOAD_CATAGORY(res.data));

        })
        .catch(err => {
            dispatch(catagory_loading(false))
            err.response.data.error.message;
        })
}


export const sendFeedback = (feedback) => dispatch => {
    dispatch(feedback_loading(true))
    axios.post("https://book-d50c3-default-rtdb.firebaseio.com/feedback.json", feedback)
        .then(res => {
            dispatch(feedback_loading(false))
            alert('Feedback Send Successfully !');

        })
        .catch(error => {
            dispatch(feedback_loading(false))
            alert(error.response.data.error.message);
        })
}


export const useAuthenication = (email, password, mode) => dispatch => {
    dispatch(auth_loading(true))
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    }
    let url = "";
    if (mode == 'signup') {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxsSjK22k1ADnEAdCnUByNXn8jr37cx6k"

    }
    else {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBxsSjK22k1ADnEAdCnUByNXn8jr37cx6k"
    }
    axios.post(url, authData)
        .then(res => {
            const expiredTime = new Date(new Date().getTime() + 3600 * 1000);
            async () => {
                await AsyncStorage.setItem('token', res.data.idToken.toString());
                await AsyncStorage.setItem('expiredTime', expiredTime.toString())
            }


            dispatch(Store_Token(res.data.idToken));
            dispatch(auth_loading(false))
            alert('Successfully Login !')
        })
        .catch(error => {
            dispatch(auth_loading(false))
            alert(error.response.data.error.message)
        })
}