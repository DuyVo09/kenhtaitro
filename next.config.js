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
}

module.exports = nextConfig
