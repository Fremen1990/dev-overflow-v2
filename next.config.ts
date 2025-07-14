import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            // new URL('https://avatars.githubusercontent.com/u/**'),

            // {
            //     protocol: 'https',
            //     hostname: 'avatars.githubusercontent.com',
            //     port: '',
            //     pathname: '/u/**',
            // },
        ]
    }
};

export default nextConfig;
