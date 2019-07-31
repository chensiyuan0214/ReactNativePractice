//import libraries
import React from 'react';
import ReactNative from 'react-native';



//Create a component
const App = () => {

    return (
        <Text>Some Text </Text>
    );
};

//render it to a device
ReactNative.AppRegistry.registryComponent('albums', () => App);