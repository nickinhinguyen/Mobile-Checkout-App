import React,{ Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import ShoppingCartScreen from './ShoppingCartScreen';
import HomeScreen from './HomeScreen';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    cart: state.cart,
    itemCount: state.itemCount
});

class MyTabs extends Component {
    
    render() {

    const Tab = createMaterialBottomTabNavigator();


    return (
        <Tab.Navigator
        initialRouteName="HomeScreen"
        shifting={true}
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: 'rgba(127,63,191,.9)' }}
        >
        <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26}/>
            ),
            }}
        />
        
        <Tab.Screen
            name="ShoppingCart"
            component={ShoppingCartScreen}
            options={{
            tabBarBadge: this.props.itemCount,
            tabBarLabel: 'My Cart',
            tabBarIcon: ({ color }) => (
                <Zocial name="cart" color={color} size={26} />
            ),
            }}
            
        />
        
        
        </Tab.Navigator>
    );
    };}

    export default connect (mapStateToProps,null)(MyTabs);


