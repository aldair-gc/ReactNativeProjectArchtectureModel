import { useEffect } from 'react';

import { useTranslation } from '@locales';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { coordinator, MainStackParams } from '@routes';

type ProfileScreenRouteProp = RouteProp<MainStackParams, 'Profile'>;

export function useProfile() {
    const route = useRoute<ProfileScreenRouteProp>();
    const navigation = useNavigation();
    const { t } = useTranslation();

    if (!route.params.user || !route.params.repos) {
        coordinator.goBack();
    }

    const user = route.params.user;
    const repos = route.params.repos;

    useEffect(() => {
        navigation.setOptions({ title: user.name || 'Usuário' });
    }, [navigation, user.name]);

    return {
        user,
        repos,
        t,
    };
}
