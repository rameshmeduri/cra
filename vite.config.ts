import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode (development/production)

  console.log('mode --> ', mode);

  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: Number(env.VITE_APP_PORT) || 5173,
      open: true
    }
  };
});



// import.meta.env.VITE_APP_SOMETHING