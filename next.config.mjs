/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'loremflickr.com', // or whichever domain(s) faker uses for your images
            'picsum.photos',
        ],
    },
};

export default nextConfig;