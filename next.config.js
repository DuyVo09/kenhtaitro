/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.module.rules.push({
  //       test: /\.css$/,
  //       issuer: /node_modules\/react-awesome-button\/dist\/styles\.css$/,
  //       use: 'ignore-loader'
  //     });
  //     config.module.rules.push({
  //       test: /\.scss$/,
  //       use: ['style-loader', 'css-loader', 'sass-loader'],
  //     });
  //   }
  //   return config;
  // },
  // output: 'export',
  images: {
    domains: ['103.130.213.45'], // Add your domain(s) here
  },

}

module.exports = nextConfig
