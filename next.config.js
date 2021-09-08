
// const withImages = require('next-images')

module.exports = {
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com', 'dl.airtable.com', 'drive.google.com']
  },
  future: {
    webpack5: true,
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    // # Authentication
    // GOOGLE_ID=915230511402-n1dqtru13bcu41l1vv3mp2d5n4mga4ld.apps.googleusercontent.com,
    // GOOGLE_SECRET=mvOY13K1Y5URQj6ypjXrlhUH,
    // NEXTAUTH_URL='http://localhost:3000',

  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}