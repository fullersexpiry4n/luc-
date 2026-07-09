import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/nl",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
