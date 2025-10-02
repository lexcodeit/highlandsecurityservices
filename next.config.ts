import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                hostname: "sm0329ck67.ufs.sh",
            },
        ],
    },
};

export default nextConfig;
