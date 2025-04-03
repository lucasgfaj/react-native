import { View, Text, Button, Image } from 'react-native'
import React, { useState } from 'react'

type CarProps = {
  car: string
  brand: string,
  hp: number

};

export default function Car({car, brand, hp}: CarProps) {

    const [counter, setCounter] = useState(0);

    // let counter: number = 0;
    let image = `https://res.cloudinary.com/duposs86e/image/upload/v1743641856/2527718435_0333a14594_z_b224ja.jpg`

    const handlePress = () => {
        console.log("Press");

        // counter = counter + 1;
        setCounter(counter + 1);

        console.log("Counter: ", counter);

    };
    return (
    <View>
       <Image source={{ uri: image }} height={250} width={250} />
      <Text>Car: {car}</Text>
      <Text>Brand: {brand}</Text>
      <Text>HP: {hp}</Text>
      <Text>LIKES: {counter} </Text>
    <Button title="LIKE" onPress={handlePress}/>
    </View>
  )
}