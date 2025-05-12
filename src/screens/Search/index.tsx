import {Image, KeyboardAvoidingView, Text} from 'react-native';

import {images} from '@assets';
import {Button, Input} from '@components';

import {useSearch} from './hooks';
import {styles} from './styles';

export function Search() {
    const {t, name, fetchGithubUserAndUserRepos, isPending} = useSearch();

    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <Image source={images.uspLogo} style={styles.image} />
            <Text style={styles.title}>{t('welcome', {name: 'Aldair'})}</Text>
            <Input
                placeholder={t('searchScreenInputPlaceHolder')}
                autoCapitalize="none"
                onChangeText={text => {
                    name.current = text;
                }}
                returnKeyType="search"
                onSubmitEditing={fetchGithubUserAndUserRepos}
                autoCorrect={false}
            />
            <Button
                text={
                    isPending
                        ? `${t('loading')}...`
                        : t('searchScreenButtonText')
                }
                disabled={isPending}
                onPress={fetchGithubUserAndUserRepos}
            />
        </KeyboardAvoidingView>
    );
}
