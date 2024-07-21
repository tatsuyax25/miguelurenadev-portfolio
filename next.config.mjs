/** @type {import('next').NextConfig} */
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

export default {
  webpack(config, { dev, isServer }) {
    if (!isServer) {
      config.optimization.splitChunks = {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css|scss)$/,
            chunks: "all",
            enforce: true,
          },
        },
      };

      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: "static/css/[contenthash].css",
          chunkFilename: "static/css/[contenthash].css",
        })
      );
    }

    return config;
  },
};

