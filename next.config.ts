import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: "/iaseai-26-side-events",
        destination: "https://docs.google.com/spreadsheets/d/1o9Q4ais95h7VwZbhugf7urC_l1P_T5ML4h0KEoPvrSk/edit?gid=0#gid=0",
        permanent: false,
      },
    ];
  }
};

export default nextConfig;
