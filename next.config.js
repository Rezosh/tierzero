/** @type {import('next').NextConfig} */
const {withAxiom} = require('next-axiom');


const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatars.akamai.steamstatic.com',
            port: '',
            pathname: '/**',
          },
        ],
    
    }
}

module.exports = withAxiom(nextConfig);
