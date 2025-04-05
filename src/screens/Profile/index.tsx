import {
    Image,
    Linking,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Spacer } from '@components';

import { ReposList } from './components/ReposList';
import { useProfile } from './hooks';
import { styles } from './styles';


export function Profile() {
    const { user, repos, t } = useProfile();

    return (
        <SafeAreaView edges={['bottom']} style={styles.container}>
            <View style={styles.profileArea}>
                <Image source={{ uri: user.avatar_url }} style={styles.profileImage} />
                <View style={styles.profileInfoArea}>
                    <Text style={styles.profileInfoName}>{user.name}</Text>
                    <Text>{t('profileScreenFollowers')}: {user.followers}</Text>
                    <Text>{t('profileScreenFollowing')}: {user.following}</Text>
                    <Spacer size={8} />
                    <Text
                        style={styles.profileInfoUrl}
                        onPress={() => Linking.openURL(user.html_url)}
                    >
                        {t('github')}
                    </Text>
                </View>
            </View>
            <ReposList repos={repos} />
        </SafeAreaView>
    );
}
