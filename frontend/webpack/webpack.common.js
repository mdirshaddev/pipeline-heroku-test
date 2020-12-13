const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.jsx'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "static/images"
        }
      },
      {
        test: /\.(aac|mp3)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/audio",
            esModule: false
          }
        }
      },
      {
        test: /\.(webm|mp4)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "video",
            esModule: false
          }
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackPwaManifest({
      filename: "manifest.json",
      name: 'IrshadTMDb',
      short_name: 'Movie Database',
      description: 'Movie Database',
      background_color: '#ffffff',
      theme_color: "#ddd",
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      publicPath: '/',
      includeDirectory: true,
      icons: [
        {
          src: path.resolve(__dirname, '../src/assets/images/logo.jpg'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('static/icons')
        }
      ]
    }),
    new WorkboxPlugin.GenerateSW({
      // Do not precache images
      exclude: [/\.(?:png|jpg|jpeg|svg|css|json|js)$/],
      directoryIndex: "/",

      // Define runtime caching rules.
      runtimeCaching: [{
        // Match any request that ends with .png, .jpg, .jpeg or .svg.
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

        // Apply a cache-first strategy.
        handler: 'CacheFirst',

        options: {
          // Use a custom cache name.
          cacheName: 'images',

          // Only cache 10 images.
          expiration: {
            maxEntries: 10,
          },
        },
      },{
        urlPattern: /\.(?:js|js|css)$/,
        handler: "CacheFirst",
        options: {
          cacheName: 'scripts',
          expiration: {
            maxAgeSeconds: 10,
          }
        }
      },{
        urlPattern: /\.(?:json|json)$/,
        handler: "CacheFirst",
        options: {
          cacheName: 'manifest',
          expiration: {
            maxAgeSeconds: 300,
          }
        }
      },{
        urlPattern: /\.(?:html|html)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'index',
          expiration: {
            maxAgeSeconds: 300
          }
        }
      }],
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  stats: 'verbose'
};
