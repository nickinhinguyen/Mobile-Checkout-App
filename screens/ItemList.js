import React, { Component } from "react";
import { View, StyleSheet,Text, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

class ItemList extends Component {

  
  render() {
    const { imageUri, name, priceOne, priceTwo } = this.props;
    return (
        <View
          style={styles.container}
        >
          <View
            style={{
              width: wp("44%"),
              height: wp("55%"),
              marginBottom: 10
            }}
          >
            <Image
              source={imageUri}
              style={styles.image}
            />
          </View>
          <View
            style={{
              marginHorizontal: 5
            }}
          >
            <Text
              style={styles.title}
            >
              {name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 5
              }}
            >
              <Text
                style={styles.priceOne}
              >
                ${priceOne}
              </Text>
              <Text
                style={styles.priceTwo}
              >
                {priceTwo}
              </Text>
            </View>
            <TouchableOpacity style={
                {borderRadius: 30,
                margin: 10,
                backgroundColor: "#f3d23d",
                alignItems: "center",
                color: "#fff"}
            } >
                <Text >Add item</Text>
            </TouchableOpacity> 
          </View>
        </View>
        
    );
  }
}

export default ItemList;

const styles = StyleSheet.create({
    container: {
        width: wp("44%"),
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor:"#fff",
        borderRadius:wp("2%"),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      },
    image: {
        marginTop: wp("5%"),
        flex: 1,
        width: null,
        height: null,
        resizeMode: "contain"
      },
    title: {
        fontSize: 18,
        color: "#63CBA7",
        fontWeight: "bold"
      },
    priceOne:{
        fontSize: 14,
        fontWeight: "bold"
      },
    priceTwo: {
        fontSize: 12,
        textDecorationLine: "line-through",
        marginLeft: 10
      }
  });

