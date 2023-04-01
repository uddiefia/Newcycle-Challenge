import React, {FC} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import HomePage from '../pages/Home';
import RecieptPreview from '../pages/RecieptPreview';
import {recieptType} from '../redux/features/receipts/receiptsSlice';
import CreateNewReceipt from '../pages/CreateNewReceipt';

export type MainStackParamList = {
  HomePage: undefined;
  RecieptPreview: {
    data: recieptType;
    PageTitle: string;
  };
  CreateNewReceipt: undefined;
};

export type MainNavigationHookType =
  NativeStackNavigationProp<MainStackParamList>;
type Props = {};
const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigation: FC<Props> = () => {
  return (
    <Stack.Navigator initialRouteName={'HomePage'}>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          title: 'Receipt List',
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        options={({route}) => ({
          title: route.params.PageTitle,
          gestureEnabled: false,
        })}
        name="RecieptPreview"
        component={RecieptPreview}
      />
      <Stack.Screen
        options={({route}) => ({
          title: 'Create a new receipt',
          gestureEnabled: false,
        })}
        name="CreateNewReceipt"
        component={CreateNewReceipt}
      />
    </Stack.Navigator>
  );
};
