import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { navigationRef } from './navigation';
import { MainStack, MainStackParams } from './stack/MainStack.routes';

export type RootStackParams = {
    MainStack: MainStackParams;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const navigatorOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animation: 'default',
};

export const Router = () => (
    <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator screenOptions={navigatorOptions}>
            {MainStack}
        </RootStack.Navigator>
    </NavigationContainer>
);
