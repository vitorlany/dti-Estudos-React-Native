import axios from 'axios';
import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Titulo } from './Item.styled';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const Item: React.FC = () => {
  const [item, setItem] = useState<Product | null>(null);

  const itemData = async () => {
    const res = await axios.get('https://fakestoreapi.com/products/1');
    setItem(res.data);
  };

  useEffect(() => {
    itemData();
  }, []);

  if (!item) {
    return null;
  }

  return (
    <View>
      <Text>{item.id}</Text>
      <Titulo>{item.title}</Titulo>
      <Text>{item.price}</Text>
      <Text>{item.description}</Text>
      <Text>{item.category}</Text>
      <Text>{item.rating.rate}</Text>
    </View>
  );
};