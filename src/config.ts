const RUNTIME: 'dev' | 'prod' = 'prod';

export const API_BASE_URL =
    RUNTIME === 'dev'
        ? 'http://localhost:3000'
        : 'https://srec-mvp-backend-production.up.railway.app';
