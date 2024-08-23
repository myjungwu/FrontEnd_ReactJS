import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],

    server: {
      port: 3000,
    },
    //absolute path
    resolve: {
      alias: {
        src: "/src",
      },
    },
    define: {
      VITE_APIURL : env.VITE_APIURL,
    },
  };
});
