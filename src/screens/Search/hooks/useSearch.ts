import { useRef } from 'react';

import { useTranslation } from '@locales';

export function useSearch() {
    const { t } = useTranslation();
    let name = useRef('');

    return {
        t,
        name,
    };
}
