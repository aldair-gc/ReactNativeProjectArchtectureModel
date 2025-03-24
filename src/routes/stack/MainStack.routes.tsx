import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Profile, Search } from '@screens';
import { GithubUser, GithubUserRepo } from '@services';

export const MainStackScreenNames = {
    Search: 'Search',
    Profile: 'Profile',
} as const;

export type MainStackParams = {
    [MainStackScreenNames.Search]: undefined;
    [MainStackScreenNames.Profile]: {
        user: GithubUser,
        repos: GithubUserRepo[]
    };
};

const MainStackNavigator =
    createNativeStackNavigator<MainStackParams>();

const ProfileOptions: NativeStackNavigationOptions = {
    headerShown: true,
    headerBackButtonDisplayMode: 'minimal',
    headerTintColor: '#0d3db2',
};

export const MainStack = (
    <>
        <MainStackNavigator.Screen
            name={MainStackScreenNames.Search}
            component={Search}
        />
        <MainStackNavigator.Screen
            name={MainStackScreenNames.Profile}
            component={Profile}
            options={ProfileOptions}
        />
    </>
);
