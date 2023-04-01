import {Platform, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  inputBox: {
    paddingVertical: Platform.OS === 'ios' ? 10 : 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 36,
    color: '#3A2E29',
    paddingHorizontal: wp('5%'),
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    fontSize: wp('4'),
    marginLeft: wp('4.5%'),
    marginRight: wp('4.5%'),
    marginBottom: 16,
  },
  saveBtnWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveText: {
    fontSize: wp('4%'),
    color: 'white',
    fontWeight: '700',
  },
});

export default styles;
