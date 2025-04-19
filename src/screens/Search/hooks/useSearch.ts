import { useRef } from 'react';
import { Alert } from 'react-native';

import { useTranslation } from '@locales';
import { coordinator } from '@routes';
import { githubUserRequest, githubUserReposRequest } from '@services';
import { useMutation } from '@tanstack/react-query';

export function useSearch() {
    const { t } = useTranslation();
    let name = useRef('');

    const githubUserFetch = useMutation({
        mutationFn: (username: string) => githubUserRequest(username),
    });

    const githubUserReposFetch = useMutation({
        mutationFn: (username: string) => githubUserReposRequest(username),
    });

    async function fetchGithubUserAndUserRepos() {
        if (name.current === '') {
            Alert.alert(
                'Atenção',
                'Campo não pode estar vazio'
            );

            return;
        }

        const user = await githubUserFetch.mutateAsync(name.current);
        const repos = await githubUserReposFetch.mutateAsync(name.current);

        if (!user || !repos) {
            Alert.alert(
                'Atenção',
                'Não foi possível buscar por este usuário'
            );

            return;
        }

        coordinator.goToProfile(user, repos);
    }

    return {
        t,
        name,
        fetchGithubUserAndUserRepos,
        isPending: githubUserFetch.isPending || githubUserReposFetch.isPending,
    };
}
