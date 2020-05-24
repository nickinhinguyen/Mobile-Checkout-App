import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList,Image,ScrollView} from 'react-native';
import {Header} from 'react-native-elements';
import { Component } from "react";
import {connect} from 'react-redux';
import CartItem from './CartItem.js'
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
// function mapDispatchtoProps(dispatch){
//     return{
//       removeItemFromCart : (item) => dispatch ({type:'REMOVE_FROM_CART',payload:item}) 
//     }
//   };


class ShoppingCartScreen extends Component {
    
    render() {
        const arrTotal = this.props.cart.map(e => e.product.priceOne * e.quantity);
        const subtotal = arrTotal.length ? arrTotal.reduce((a, b) => a + b) : 0;
        const tax = (subtotal*0.13);
        const promo = 0;
        const total = subtotal + tax + promo;

        const {
            main, checkoutButton, wrapper, checkoutTitle,summary,summaryLine
         } = styles;
         return (
             
            <View style={wrapper}>
                 <Header
                    centerComponent={{ text: 'MY CART', style: { color: '#000', fontSize:18 } }}
                    containerStyle={{backgroundColor: '#FFF',}}
            />
                <ScrollView>
                    <View>
                        <FlatList
                            contentContainerStyle={main}
                            enableEmptySections
                            data = {this.props.cart}
                            renderItem={({item}) => <CartItem title={item.product.title} imageUri={item.product.imageUri} price={item.product.priceOne} id={item.product.id} item={item}/>}
                            keyExtractor={item => item.id}
                            
                        />
                      
                    </View>
                <View style={summary}>
                    <Text>Add Promotion</Text>
                </View>
                <View style={summary} >
                    <View style={summaryLine}>
                        <Text>Order Subtotal    </Text>
                        <Text> ${subtotal.toFixed(2)}</Text>
                    </View >
                    <View style={summaryLine}>
                        <Text>Tax (13%)   </Text>
                        <Text> ${tax.toFixed(2)}</Text>
                    </View>
                    <View style={summaryLine}>
                        <Text>Promotion  </Text>
                        <Text>${promo.toFixed(2)}</Text>
                    </View>
                </View>
                    </ScrollView>
                <TouchableOpacity style={checkoutButton} >
                        <Text style={checkoutTitle}>TOTAL ${total.toFixed(2)} CHECKOUT NOW</Text>
                    </TouchableOpacity>
            </View>
        );
}}


// function Item({title, imageUri, price, id,removeItem,}) {
    

//     return (
//         <View style={styles.productStyle}>
//         <Image source={imageUri}  style={styles.productImage} />

        
//         <View style={[styles.mainRight]}>
//             <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
//                 <Text style={styles.txtName}>{title}</Text>
//                 <TouchableOpacity onPress={() => removeItem(id)}>
//                     <Text style={{  color: '#0984e3' }}>remove</Text>
//                 </TouchableOpacity>
//             </View>
//             <View>
//                 <Text style={styles.txtPrice}>${price}</Text>
                
//             </View>
//             <View style={styles.productController}>
            
//                 <View style={styles.numberOfProduct}>
//                 <Text style={{fontWeight: 'bold'}}>quanity:</Text>
//                     {/* <TouchableOpacity onPress={() => this.incrQuantity(cartItem.product.id)}> */}
//                     <TouchableOpacity >
//                         <Text style={{  color: '#0984e3', fontSize:20 }}>+</Text>
//                     </TouchableOpacity>
//                     <Text>1</Text>
//                     {/* <TouchableOpacity onPress={() => this.decrQuantity(cartItem.product.id)}> */}
//                     <TouchableOpacity >
//                         <Text style={{  color: '#0984e3', fontSize:20 }}>-</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     </View>
//     );
//   };

export default connect (mapStateToProps,null)(ShoppingCartScreen);

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
    summary:{
        backgroundColor: '#FFFFFF',
        margin: 10,
        padding: 10,
       
    },
    summaryLine:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productStyle: {
        flexDirection: 'row',
        margin: 10,
        marginBottom:0,
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
        color: '#2d3436',
        fontSize: 20,
        fontWeight: '400',
        // fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 18,
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
