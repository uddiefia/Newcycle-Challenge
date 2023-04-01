import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {MainNavigationHookType} from '../../navigation';
import {AppDispatch} from '../../redux/store';
import {useDispatch} from 'react-redux';
import {addReceipt} from '../../redux/features/receipts/receiptsSlice';
import styles from './styles';
import FlashMessage from '../../components/FlashMsg';

const CreateNewReceipt: FC = () => {
  const navigation = useNavigation<MainNavigationHookType>();
  const dispatch: AppDispatch = useDispatch();

  const [brand, setBrand] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>();
  const [description, setDescription] = useState<string>('');

  return (
    <View style={{flex: 1, justifyContent: 'flex-start', marginTop: wp('20%')}}>
      <TextInput
        autoCapitalize="none"
        onChangeText={text => setBrand(text)}
        returnKeyType="next"
        placeholder={'Brand'}
        placeholderTextColor={'#3A2E29'}
        value={brand}
        style={[styles.inputBox]}
      />
      <TextInput
        autoCapitalize="none"
        onChangeText={text => setName(text)}
        returnKeyType="next"
        placeholder={'Name'}
        placeholderTextColor={'#3A2E29'}
        value={name}
        style={[styles.inputBox]}
      />
      <TextInput
        autoCapitalize="none"
        onChangeText={text => setPrice(text)}
        returnKeyType="next"
        inputMode="numeric"
        placeholder={'Price'}
        placeholderTextColor={'#3A2E29'}
        value={price}
        style={[styles.inputBox]}
      />
      <TextInput
        autoCapitalize="none"
        onChangeText={text => setDescription(text)}
        returnKeyType="next"
        placeholder={'Description'}
        placeholderTextColor={'#3A2E29'}
        value={description}
        style={[styles.inputBox]}
      />

      <View style={styles.saveBtnWrapper}>
        <TouchableOpacity
          disabled={
            name != '' && brand != '' && price != undefined && description != ''
              ? false
              : true
          }
          style={{
            backgroundColor: '#FF5E00',
            paddingLeft: 30,
            opacity:
              name != '' &&
              brand != '' &&
              price != undefined &&
              description != ''
                ? 1
                : 0.4,
            paddingRight: 30,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 15,
          }}
          onPress={() => {
            dispatch(
              addReceipt({
                id: new Date().valueOf(),
                name,
                brand,
                price: price ? parseInt(price) : 0,
                description,
                image_url: 'https://source.unsplash.com/random',
                status: 'PENDING',
              }),
            );
            FlashMessage('New receipt added');
            navigation.goBack();
          }}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateNewReceipt;
