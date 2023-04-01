import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {recieptType} from '../../redux/features/receipts/receiptsSlice';
import styles from './styles';

type ReceiptCardProps = {
  data: recieptType;
  handlerLongPress: (id: number) => void;
  selectedRecipts: Array<number>;
  handlerPress: (id: number) => void;
};
const ReceiptCard: FC<ReceiptCardProps> = ({
  handlerPress,
  handlerLongPress,
  selectedRecipts,
  data: {image_url, price, brand, name, id},
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.cardWrapper,
        {
          opacity: selectedRecipts.includes(id) ? 0.4 : 1,
        },
      ]}
      onPress={() => handlerPress(id)}
      onLongPress={() => handlerLongPress(id)}>
      <View style={styles.mainView}>
        <View style={{flex: 0}}>
          <FastImage
            style={styles.recieptImage}
            source={{
              uri: image_url,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.brand}>
            {brand}
          </Text>
          <Text numberOfLines={2} style={styles.text}>
            {name}
          </Text>
          <Text numberOfLines={1} style={styles.text}>
            ${price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ReceiptCard);
