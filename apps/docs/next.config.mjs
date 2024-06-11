// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/.well-known/ready",
        destination: "/api/healthcheck",
      },
      {
        source: "/.well-known/live",
        destination: "/api/healthcheck",
      },
    ];
  },
  transpilePackages: ["@repo/ui"],
};

export default nextConfig;
// export default withNextIntl(nextConfig);
