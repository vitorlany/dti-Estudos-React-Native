import axios from 'axios';
import { Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Titulo } from './Item.styled';
import { InfoContext } from '../../App';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const [item, setItem] = useState<Product | null>(null);
  const counter = useSelector((state: RootState) => state.counter);
  const useContextInfo = useContext(InfoContext);

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
      <Text>{t('introduce')}</Text>
      <Text>{item.id}</Text>
      <Titulo>{item.title}</Titulo>
      <Text>{item.price}</Text>
      <Text>{item.description}</Text>
      <Text>{item.category}</Text>
      <Text>{item.rating.rate}</Text>
      <Text>Use Context: {useContextInfo}</Text>
      <Text>Use Redux: {counter.value}</Text>
    </View>
  );
};

export const ItemReactQuery: React.FC = () => {
  const { t } = useTranslation();

  const { isPending, data: item } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://fakestoreapi.com/products/1').then(res => res.json()),
  });

  if (!item) {
    return item;
  }

  return (
    <View>
      {isPending ? (
        <Text>Requisição</Text>
      ) : (
        <View>
          <Text>{t('introduce', { lng: 'pt' })}</Text>
          <Text>{item.id}</Text>
          <Titulo>{item.title}</Titulo>
          <Text>{item.price}</Text>
          <Text>{item.description}</Text>
          <Text>{item.category}</Text>
          <Text>{item.rating.rate}</Text>
        </View>
      )}
    </View>
  );
};
