import { Image, SafeAreaView, Text } from 'react-native';

import { images } from '@assets';
import { Button, Input } from '@components';

import { useSearch } from './hooks';
import { styles } from './styles';

export function Search() {
    const { t, name } = useSearch();

    async function test() {
        try {
            const user = await fetch(`https://api.github.com/users/${name.current}/repos`)
                .then(respJson => respJson.json());
            console.log('USER: ', user, 2);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={images.uspLogo} style={styles.image} />
            <Text style={styles.title}>{t('welcome', { name: 'Adonai' })}</Text>
            <Input
                placeholder={t('searchScreenInputPlaceHolder')}
                autoCapitalize="none"
                onChangeText={text => { name.current = text; }}
                autoCorrect={false} />
            <Button text={t('searchScreenButtonText')} onPress={test} />
        </SafeAreaView>
    );
}

