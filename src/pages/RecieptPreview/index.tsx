import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import FastImage from 'react-native-fast-image';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {MainNavigationHookType, MainStackParamList} from '../../navigation';
import {AppDispatch} from '../../redux/store';
import {useDispatch} from 'react-redux';
import {removeReceipts} from '../../redux/features/receipts/receiptsSlice';
import styles from './styles';
import FlashMessage from '../../components/FlashMsg';

type Props = {
  route: RouteProp<MainStackParamList, 'RecieptPreview'>;
};

const RecieptPreview: FC<Props> = ({route}) => {
  const navigation = useNavigation<MainNavigationHookType>();
  const dispatch: AppDispatch = useDispatch();

  const {name, price, description, id, image_url, brand} = route.params.data;

  return (
    <View style={{flex: 1}}>
      <View>
        <FastImage
          style={styles.FastImage}
          source={{
            uri: image_url,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={{margin: 10}}>
        <Text style={styles.price}>$ {price}</Text>
        <Text style={styles.brand}>{brand}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.name}>{description}</Text>

        <TouchableOpacity
          style={styles.DeletBtnWrapper}
          onPress={() => {
            Alert.alert('', 'Are you sure you want to delete this receipt', [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                  dispatch(removeReceipts([id]));
                  FlashMessage('The receipt has been removed');
                  navigation.goBack();
                },
              },
            ]);
          }}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecieptPreview;
