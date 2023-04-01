import {showMessage} from 'react-native-flash-message';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const FlashMessage = (message: string) => {
  return showMessage({
    message,
    type: 'default',
    titleStyle: {
      fontSize: wp('4.5%'),
      textAlign: 'center',
      fontWeight: '700',
    },
    backgroundColor: '#FF9985',
  });
};
export default FlashMessage;
