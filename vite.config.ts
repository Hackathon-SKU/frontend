import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
   server: {
    proxy: {
      // '/api'로 들어오는 요청은 ngrok 서버로 포워딩
      '/api': {
        target: 'https://a09d7746b49a.ngrok-free.app',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path, 
      },
    },
  },
});
