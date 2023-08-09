import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import homeimage from "../../../assets/jaredd-craig-HH4WBGNyltc-unsplash.jpg"

const HomeScreen = (props) => {
    return (
        <View>
            <Image source={homeimage} style={{ width: '100%', height: 400 }} />

            <View style={{ marginTop: 6 }}>
                <Text style={{ fontSize: 20, padding: 10 }}>

                    People who have reached the pinnacle of success do not deprive themselves of reading books despite being extremely successful in life
                </Text>
                <View style={{ width: 150, justifyContent: 'center', alignItems: 'center' }}>

                    <Button title='Show Books' onPress={() => props.navigation.navigate("Books")} />
                </View>
            </View>
        </View>
    )
}

export default HomeScreen;