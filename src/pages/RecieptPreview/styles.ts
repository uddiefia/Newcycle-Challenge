import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  FastImage: {
    width: wp('100%'),
    height: wp('100%'),
    alignSelf: 'stretch',
    aspectRatio: 1,
  },
  price: {
    fontSize: wp('6%'),
    lineHeight: wp('6%'),
    paddingTop: 20,
    color: '#FF9985',
  },
  brand: {
    fontSize: wp('4%'),
    lineHeight: wp('4%'),
    paddingTop: 20,
  },
  name: {fontSize: wp('4%'), lineHeight: wp('4%'), paddingTop: 20},
  DeletBtnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#FF9985',
    padding: 15,
    borderRadius: 10,
  },
  delete: {
    fontSize: wp('5%'),
    color: 'white',
    fontWeight: '700',
  },
});

export default styles;
