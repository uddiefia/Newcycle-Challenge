import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  deleteView: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#F3E8E3',
    height: wp('15%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeLoader: {
    borderRadius: 20,
    width: '95%',
    height: 100,
    marginRight: 10,
    marginLeft: 10,
  },
  notFoundImage: {
    width: wp('60%'),
    height: wp('60%'),
  },
  addNewFLoatingBtn: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addNewMainView: {
    backgroundColor: '#FF9985',
    padding: 12,
    borderRadius: 15,
  },
  addText: {
    fontSize: wp('4%'),
    color: 'white',
    fontWeight: '700',
  },
  delete: {
    fontSize: wp('4%'),
    color: 'red',
    fontWeight: '700',
  },
  select: {
    fontSize: wp('4%'),
    color: 'black',
    fontWeight: '700',
  },
});

export default styles;
