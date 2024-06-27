/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/dossier",
        destination: "https://www.stargateexcellenceacademy.com.ng/dossier",
      },
      {
        source: "/dossier/:path*",
        destination:
          "https://www.stargateexcellenceacademy.com.ng/dossier/:path*",
      },
    ];
  },
};

export default nextConfig;
