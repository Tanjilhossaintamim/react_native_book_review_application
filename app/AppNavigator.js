import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookScreen from './src/screen/BookScreen';
import BookDetailsScreen from './src/screen/BookDetailsScreen';
import CatagoryScreen from './src/screen/CatagoryScreen';
import LoginScreen from './src/screen/LoginScreen';
import Icon from './src/component/Icon';
import { useNavigation } from '@react-navigation/native';
import CatagoryBookScreen from './src/screen/CatagoryBookScreen';
import LogoutScreen from './src/screen/LogoutScreen';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const BookStack = () => {

    const navigation = useNavigation()
    return (

        <Stack.Navigator screenOptions={{
            headerRight: () => (<Icon name='ios-menu' size={25} color={'#fff'} action={() => navigation.toggleDrawer()} />),
            headerStyle: {
                backgroundColor: '#F11A7B'
            },
            headerTintColor: '#fff'
        }}>
            <Stack.Screen name='Book' component={BookScreen} options={({ route }) => ({ title: "Books" })} />
            <Stack.Screen name='BookDetails' component={BookDetailsScreen} options={({ route }) => ({ title: route.params.book.name })} />
        </Stack.Navigator>
    )
}

const HomeStack = () => {
    const navigation = useNavigation();
    return (

        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon name='ios-menu' size={25} color={'#fff'} action={() => navigation.toggleDrawer()}
                />),
                headerStyle: {
                    backgroundColor: '#F11A7B'
                },
                headerTintColor: '#fff'
            }}>
            <Stack.Screen name='Booklist' component={HomeScreen} options={({ route }) => ({ title: 'Home' })} />

        </Stack.Navigator>
    )
}

const CatagoryStack = () => {
    const navigation = useNavigation();

    return (

        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon name='ios-menu' size={25} color={'#fff'} action={() => navigation.toggleDrawer()}
                />),
                headerStyle: {
                    backgroundColor: '#F11A7B'
                },
                headerTintColor: '#fff'
            }}>
            <Stack.Screen name='Catagory' component={CatagoryScreen} options={({ route }) => ({ title: 'All Catagories' })} />
            <Stack.Screen name='CatagoryBook' component={CatagoryBookScreen} options={({ route }) => ({ title: route.params.catagory.name })} />

        </Stack.Navigator>
    )
}

const LoginStack = () => {
    const navigation = useNavigation();

    return (

        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon name='ios-menu' size={25} color={'#fff'} action={() => navigation.toggleDrawer()}
                />),
                headerStyle: {
                    backgroundColor: '#F11A7B'
                },
                headerTintColor: '#fff'
            }}>
            <Stack.Screen name='Authenication' component={LoginScreen} options={({ route }) => ({ title: 'Login' })} />


        </Stack.Navigator>
    )
}
const LogoutStack = () => {
    const navigation = useNavigation();

    return (

        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon name='ios-menu' size={25} color={'#fff'} action={() => navigation.toggleDrawer()}
                />),
                headerStyle: {
                    backgroundColor: '#F11A7B'
                },
                headerTintColor: '#fff'
            }}>
            <Stack.Screen name='Out' component={LogoutScreen} options={({ route }) => ({ title: 'Login' })} />


        </Stack.Navigator>
    )
}




const AppNavigator = (props) => {
    return (
        <Drawer.Navigator initialRouteName='Home' screenOptions={{
            headerShown: false
        }}>
            <Drawer.Screen name='Home' component={HomeStack} />
            <Drawer.Screen name='Books' component={BookStack} />
            <Drawer.Screen name='Catagories' component={CatagoryStack} />
            {
                props.token == null ? <Drawer.Screen name='Login' component={LoginStack} /> : <Drawer.Screen name='Logout' component={LogoutStack} />
            }

        </Drawer.Navigator>
    )
}

export default connect(mapStateToProps)(AppNavigator)