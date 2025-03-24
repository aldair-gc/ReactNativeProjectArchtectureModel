import { Linking, Text, TouchableOpacity, View } from 'react-native';

import { GithubUserRepo } from '@services';

import { styledLanguages, styles } from './styles';

interface RepoItem {
    item: GithubUserRepo;
}

export function RepoItem({ item }: RepoItem) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.reposArea}
            onPress={() => Linking.openURL(item.html_url)}
        >
            <View style={styles.reposInfoArea}>
                <Text style={styles.reposInfoRepoName}>{item.name}</Text>
                <Text style={styles.reposInfoRepoUrl}>{item.url}</Text>
                {item.language &&
                    <Text style={styledLanguages(item.language).reposInfoRepoLanguage}>
                        {item.language}
                    </Text>
                }
            </View>
            <View>
                <Text style={styles.reposInfoStars}>{item.stargazers_count} ★</Text>
            </View>
        </TouchableOpacity>
    );
}
