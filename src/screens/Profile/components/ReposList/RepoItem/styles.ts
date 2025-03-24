import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    reposArea: {
        padding: 10,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        borderRadius: 4,
        justifyContent: 'space-between',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    reposInfoArea: {
        gap: 8,
        flex: 1,
    },
    reposInfoRepoName: {
        fontWeight: '600',
        fontSize: 16,
    },
    reposInfoRepoUrl: {
        fontWeight: '500',
        color: 'blue',
    },
    reposInfoStars: {
        fontWeight: '500',
        fontSize: 14,
    },
});


export const styledLanguages = (language: string) => StyleSheet.create({
    reposInfoRepoLanguage: {
        padding: 6,
        borderRadius: 8,
        alignSelf: 'flex-start',
        fontWeight: '500',
        ...switchLng(language),
    },
});

function switchLng(lng: string) {
    const stylesByLanguage: Record<
        string,
        { backgroundColor: string; color: string }
    > = {
        javascript: {
            backgroundColor: '#f1e05a',
            color: '#000',
        },
        python: {
            backgroundColor: '#3572A5',
            color: '#FFF',
        },
        java: {
            backgroundColor: '#b07219',
            color: '#FFF',
        },
        typescript: {
            backgroundColor: '#2b7489',
            color: '#FFF',
        },
        csharp: {
            backgroundColor: '#178600',
            color: '#FFF',
        },
        cpp: {
            backgroundColor: '#f34b7d',
            color: '#FFF',
        },
        php: {
            backgroundColor: '#4F5D95',
            color: '#FFF',
        },
        ruby: {
            backgroundColor: '#701516',
            color: '#FFF',
        },
        go: {
            backgroundColor: '#00ADD8',
            color: '#000',
        },
        dart: {
            backgroundColor: '#00B4AB',
            color: '#000',
        },
        kotlin: {
            backgroundColor: '#A97BFF',
            color: '#000',
        },
    };

    const key = lng.toLowerCase();
    const defaultStyle = {
        backgroundColor: '#0009',
        color: '#FFF',
    };

    return stylesByLanguage[key] || defaultStyle;
}
