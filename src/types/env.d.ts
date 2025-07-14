declare namespace NodeJS {
    interface ProcessEnv {
        CODECOV_TOKEN: string;
        AUTH_SECRET: string;
        AUTH_GITHUB_ID: string;
        AUTH_GITHUB_SECRET: string;
        // Optional env variables - not implemented yet
        GOOGLE_CLIENT_ID?: string;
        GOOGLE_CLIENT_SECRET?: string;
    }
}