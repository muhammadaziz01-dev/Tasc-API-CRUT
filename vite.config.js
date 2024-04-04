
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@" : path.resolve(__dirname, "./src"),
      "@component" : path.resolve(__dirname, "./src/components"),
      "@containers" : path.resolve(__dirname, "./src/components/containers"),
      "@sections" : path.resolve(__dirname, "./src/components/sections"),
      "@images" : path.resolve(__dirname, "./src/assets/images"),
      "@icons" : path.resolve(__dirname, "./src/assets/icons"),
      "@ui" : path.resolve(__dirname, "./src/components/UI"),
      "@ui-layout" : path.resolve(__dirname, "./src/components/layouts"),
      "@layout" : path.resolve(__dirname, "./src/layout"),
      "@pages" : path.resolve(__dirname, "./src/pages"),
      "@utils" : path.resolve(__dirname, "./src/utils"),
      "@hooks" : path.resolve(__dirname, "./src/hooks"),
      "@store" : path.resolve(__dirname, "./src/store"),
      "@router" : path.resolve(__dirname, "./src/components/router"),

    },
  },
})
