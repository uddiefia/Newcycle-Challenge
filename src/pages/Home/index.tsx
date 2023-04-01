import React, {FC, useCallback, useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {RouteProp, useNavigation} from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import {MainNavigationHookType, MainStackParamList} from '../../navigation';
import ReceiptCard from '../../components/receiptCard';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {
  recieptType,
  removeReceipts,
} from '../../redux/features/receipts/receiptsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import {fetchReciepts} from '../../redux/features/receipts/receiptsThunk';
import styles from './styles';
import FlashMessage from '../../components/FlashMsg';

type Props = {
  route: RouteProp<MainStackParamList>;
};

const HomePage: FC<Props> = ({route}) => {
  const dispatch: AppDispatch = useDispatch();
  const {receipts, receiptsLoader} = useSelector(
    (state: RootState) => state.receipts,
  );

  useEffect(() => {
    if (receipts.length === 0) dispatch(fetchReciepts());
  }, []);

  const [selectedRecipts, setSelectedRecipts] = useState<Array<number>>([]);
  const navigation = useNavigation<MainNavigationHookType>();

  const handlerLongPress = useCallback(
    (id: number) => {
      if (selectedRecipts.includes(id)) {
        unselect(id);
      } else {
        setSelectedRecipts(selectedRecipts.concat(id));
      }
    },
    [selectedRecipts],
  );

  const handlerPress = useCallback(
    (id: number) => {
      if (selectedRecipts.length > 0) {
        if (selectedRecipts.includes(id)) {
          unselect(id);
        } else {
          setSelectedRecipts(selectedRecipts.concat(id));
        }
      } else {
        const data = receipts.filter(ele => ele.id === id);
        if (data.length > 0) {
          navigation.navigate('RecieptPreview', {
            data: data[0],
            PageTitle: data[0].name,
          });
        }
      }
    },
    [selectedRecipts],
  );
  const unselect = (id: number) => {
    let filteredArray = selectedRecipts.filter((item: number) => item != id);
    setSelectedRecipts(filteredArray);
  };

  const deleteReceipts = () => {
    dispatch(removeReceipts(selectedRecipts));
    setSelectedRecipts([]);
    FlashMessage(
      selectedRecipts.length > 1
        ? 'Receipts have been removed'
        : 'The receipt has been removed',
    );
  };
  const renderReceipt = (data: {index: number; item: recieptType}) => {
    return (
      <ReceiptCard
        data={data.item}
        handlerLongPress={handlerLongPress}
        selectedRecipts={selectedRecipts}
        handlerPress={handlerPress}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      {selectedRecipts.length > 0 ? (
        <View style={styles.deleteView}>
          <Text style={styles.select}>{selectedRecipts.length} Selected</Text>
          <Text
            style={styles.delete}
            onPress={() => {
              Alert.alert('', 'Are you sure you want to delete this receipts', [
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: () => {
                    deleteReceipts();
                  },
                },
              ]);
            }}>
            Delete
          </Text>
        </View>
      ) : null}
      <FlatList
        data={receipts}
        ItemSeparatorComponent={() => {
          return <View style={{height: 10}} />;
        }}
        initialNumToRender={30}
        renderItem={renderReceipt}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          receipts.length === 0 && receiptsLoader === 'pending' ? (
            <SkeletonPlaceholder backgroundColor="#F3E8E3">
              <View style={styles.placeLoader} />
            </SkeletonPlaceholder>
          ) : (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Lottie
                source={require('../../assets/no_data.json')}
                style={styles.notFoundImage}
                autoPlay
                loop
              />
              <Text style={{fontSize: wp('5%'), marginTop: 30}}>
                No Data Found!
              </Text>
            </View>
          )
        }
        ListFooterComponent={<View style={{height: 70}} />}
        ListHeaderComponent={<View style={{height: 10}} />}
      />
      <View style={styles.addNewFLoatingBtn}>
        <TouchableOpacity
          style={styles.addNewMainView}
          onPress={() => {
            navigation.navigate('CreateNewReceipt');
          }}>
          <Text style={styles.addText}>Add New</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;
