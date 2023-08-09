import React from 'react'
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { user_logout } from '../../redux/actionCreators';

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(user_logout())
    }
}

const LogoutScreen = (props) => {
    props.logout()
    alert('Logged out successfully !')

}

export default connect(null, mapDispatchToProps)(LogoutScreen)