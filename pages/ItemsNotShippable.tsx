import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components/native';

export const ItemsNotShippable = () => {
  return (
    <SafeAreaView>
      <Box>
        <TextTitle>Items Not Shippable</TextTitle>
        <Spacing scale={2} />

        <View>
          <Text>
            The following products are considered dangerous goods and cannot be
            shipped to the specified addresses outside of the contiguous United
            States.
          </Text>
          <Spacing scale={2} />
          <Text>
            Change the <Bold>Delivery Method</Bold> to{' '}
            <Bold>Pick up in Branch</Bold>.
          </Text>
          <Spacing />
        </View>
        <Spacing scale={4} />

        <View>
          <Product />
          <Spacing scale={3} />
          <HorizontalLine />
        </View>
        <Spacing scale={4} />

        <Button
          onPress={() => {}}
          title="Pick up In Branch"
          accessibilityLabel="Pick up your product In Branch"
        />
      </Box>
    </SafeAreaView>
  );
};

const Product = () => {
  return (
    <CardProduct>
      <ProductIcon source={require('../public/product.png')} />
      <View>
        <Text>
          <TextHighlight>Chemtronics</TextHighlight> - Chemtronics ULTRAJET
          Compressed Aird Duster, 10oz, 12 Aerosol
        </Text>
        <Spacing />
        <TextProductID>CP-ES1020 (ES1020)</TextProductID>
        <Spacing />
        <TextPrice>$36.99</TextPrice>
      </View>
    </CardProduct>
  );
};

const CardProduct = styled.View`
  flex-direction: row;
  gap: 8px;
`;

const Box = styled.View`
  margin: 32px 24px;
`;

const ProductIcon = styled.Image`
  width: 84px;
  height: 84px;
  resize-mode: contain;
  padding: 8px;
`;

const HorizontalLine = styled.View`
  border-bottom-color: 'black';
  border-bottom-width: 0.5px;
`;

const Spacing = styled.View<{ scale?: number }>`
  height: ${props => (props.scale ? 8 * props.scale : 8)}px;
`;

const Bold = styled.Text`
  font-weight: bold;
`;

const TextHighlight = styled.Text`
  color: #002856;
  font-weight: 700;
  font-size: 16px;
`;

const TextPrice = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #002856;
`;

const TextTitle = styled(TextHighlight)`
  text-align: center;
`;

const TextProductID = styled.Text`
  font-weight: 700;
  font-size: 14px;
  color: #666666;
`;
