import React, {Component} from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { Header} from 'react-native-elements';
// import PRODUCTS from '../products.js';
import ItemList from './ItemList.js';


const PRODUCTS = [
    {
      id: 1,
      imageUri: require("../assets/books/C_programming.jpg"),
      title: "C Programming",
      priceOne: 120,
      priceTwo: "$180"
    },
    {
      id: 2,
      imageUri: require("../assets/books/confident_coding.jpg"),
      title: "Confident Coding",
      priceOne: 180,
      priceTwo: null
    },
    {
      id: 3,
      imageUri: require("../assets/books/happy_lemon.jpeg"),
      title: "Happy Lemon",
      priceOne: 80,
      priceTwo: null
    },
    {
      id: 4,
      imageUri: require("../assets/books/python.jpg"),
      title: "Python",
      priceOne: 80,
      priceTwo: null
    },
    {
      id: 5,
      imageUri: require("../assets/books/very_nice.jpg"),
      title: "Very Nice",
      priceOne: 80,
      priceTwo: null
    },
    {
      id: 6,
      imageUri: require("../assets/books/warandpeace.jpg"),
      title: "War and Peace",
      priceOne: 80,
      priceTwo: null
    }
  ];





  class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cartArray: [] };
        }

    renderItemList = () => {
        return PRODUCTS.map((item) => {
            return (
              <ItemList
                // onPress={() =>
                //   this.props.navigation.navigate("Detail", {
                //     detailName: item.name,
                //     detailImageUri: item.imageUri,
                //     detailPriceOne: item.priceOne,
                //     detailPriceTwo: item.priceTwo ? item.priceTwo : null
                //   })
                // }
                key={item.id}
                imageUri={item.imageUri}
                name={item.title}
                priceOne={item.priceOne}
                priceTwo={item.priceTwo ? item.priceTwo : null}
              />
            );
          });
      };


    render() { 
        return (
        <View style={styles.container}>
            {/* <Text >Home</Text> */}
            <Header
                centerComponent={{ text: 'BOOKS', style: { color: '#000', fontSize:18 } }}
                containerStyle={{
                    backgroundColor: '#FFF',
                }}
                />

            {/* ----- */}
            <ScrollView
                contentContainerStyle={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between"
                }}
            >
                {/* ItemList */}
                {this.renderItemList()}
            </ScrollView>
        </View>
        );
    }
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});