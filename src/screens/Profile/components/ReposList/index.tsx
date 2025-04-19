import { FlatList } from 'react-native';

import type { GithubUserRepo } from '@services';

import { RepoItem } from './RepoItem';
import { styles } from './styles';

interface ReposListProps {
    repos: GithubUserRepo[]
}

export function ReposList({ repos }: ReposListProps) {
    return (
        <FlatList
            data={repos}
            keyExtractor={({ id }) => String(id)}
            renderItem={RepoItem}
            contentContainerStyle={styles.reposFlatList}
        />
    );
}
