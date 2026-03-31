/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // Útil para hosting em VPS sem processamento de imagem dedicado
  },
};

export default nextConfig;
