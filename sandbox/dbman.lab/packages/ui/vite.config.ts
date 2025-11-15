import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from '@tailwindcss/vite';


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log(" -- 개발 모드 -- ")
  console.log(mode)
  console.log(" -- 환경 변수 -- ")
  console.log(env)
  return {
    plugins: [
      react(),
      tailwindcss(),
      tsconfigPaths(),
    ],
    server: {
      // host: true,
      // https: true,
      port: 5173,
      // origin: env.VITE_ORIGIN_URL,  
      // strictPort: true,
      // cors: true,
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      // },
    },
  }
})