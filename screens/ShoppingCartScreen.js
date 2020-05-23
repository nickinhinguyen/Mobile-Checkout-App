import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList,Image} from 'react-native';
import {Header} from 'react-native-elements';
import { Component } from "react";
import {connect} from 'react-redux';
// const PRODUCTS = [
//     {
//       id: 1,
//       imageUri: require("../assets/books/C_programming.jpg"),
//       title: "C Programming",
//       priceOne: 120,
//       priceTwo: "$180"
//     }
//   ];
const mapStateToProps = (state) => ({
    cart: state.cart
});
function mapDispatchtoProps(dispatch){
    return{
      removeItemFromCart : (item) => dispatch ({type:'REMOVE_FROM_CART',payload:item}) 
    }
  };


class ShoppingCartScreen extends Component {
    
    render() {
        const {
            main, checkoutButton, wrapper, checkoutTitle
         } = styles;
         return (
             
            <View style={wrapper}>
                 <Header
                    centerComponent={{ text: 'MY CART', style: { color: '#000', fontSize:18 } }}
                    containerStyle={{backgroundColor: '#FFF',}}
            />

                <FlatList
                    contentContainerStyle={main}
                    enableEmptySections
                    // dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(cartArray)}
                    data = {this.props.cart}
                    renderItem={({item }) => <Item title={item.title} imageUri={item.imageUri} price={item.priceOne} id={item.id}removeItem={this.props.removeItemFromCart} />}
                    keyExtractor={item => item.id}
                       
                />
                {/* <TouchableOpacity style={checkoutButton} onPress={this.onSendOrder.bind(this)}> */}
                <TouchableOpacity style={checkoutButton} >
                    {/* <Text style={checkoutTitle}>TOTAL {total}$ CHECKOUT NOW</Text> */}
                    <Text style={checkoutTitle}>TOTAL $100 CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
}}


function Item({title, imageUri, price, id,removeItem}) {

    return (
        <View style={styles.productStyle}>
        {/* <Image source={{ uri: `${url}${cartItem.product.images[0]}` }} style={productImage} /> */}
        <Image source={imageUri}  style={styles.productImage} />

        
        <View style={[styles.mainRight]}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                {/* <Text style={txtName}>{toTitleCase(cartItem.title)}</Text> */}
                <Text style={styles.txtName}>{title}</Text>
                <TouchableOpacity onPress={() => removeItem(id)}>
                    <Text style={{  color: '#969696' }}>X</Text>
                </TouchableOpacity>
            </View>
            <View>
                {/* <Text style={txtPrice}>{cartItem.product.price}$</Text> */}
                <Text style={styles.txtPrice}>{price}</Text>
                
            </View>
            {/* <View style={productController}>
            
                <View style={numberOfProduct}>
                    <TouchableOpacity onPress={() => this.incrQuantity(cartItem.product.id)}>
                        <Text>+</Text>
                    </TouchableOpacity>
                    <Text>{cartItem.quantity}</Text>
                    <TouchableOpacity onPress={() => this.decrQuantity(cartItem.product.id)}>
                        <Text>-</Text>
                    </TouchableOpacity>
                </View>
            </View> */}
        </View>
    </View>
    );
  };

export default connect (mapStateToProps,mapDispatchtoProps)(ShoppingCartScreen);

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        // fontFamily: 'Avenir'
    },
    productStyle: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        // fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        // fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        // fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});
