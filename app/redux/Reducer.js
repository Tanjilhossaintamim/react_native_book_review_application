import * as actionTypes from "./actionTypes"
const initaialState = {
    books: [],
    catagories: [],
    selectedBook: [],
    token: null,
    book_is_loading: false,
    catagory_is_loading: false,
    auth_is_loading: false,
    feedback_is_loading: false,
};

const Reducer = (state = initaialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_BOOKS:


            return {
                ...state,
                books: action.payload
            }
        case actionTypes.LOAD_CATAGORY:

            return {
                ...state,
                catagories: action.payload

            }

        case actionTypes.LOGOUT:
            return {
                ...state,
                token: null
            }

        case actionTypes.CATAGORYWISE_BOOK:
            const selectCatagorybook = state.books?.filter(item => item.category == action.payload)

            return {
                ...state,
                selectedBook: selectCatagorybook
            }

        case actionTypes.STORE_TOKEN:
            return {
                ...state,
                token: action.payload
            }


        case actionTypes.AUTH_LOADING:
            return {
                ...state,
                auth_is_loading: action.payload
            }

        case actionTypes.BOOK_LOADING:
            return {
                ...state,
                book_is_loading: action.payload
            }


        case actionTypes.CATAGORY_LOADING:
            return {
                ...state,
                catagory_is_loading: action.payload
            }
        case actionTypes.FEEDBACK_LOADING:
            return {
                ...state,
                feedback_is_loading: action.payload
            }


        default:
            return state
    }
}


export default Reducer;