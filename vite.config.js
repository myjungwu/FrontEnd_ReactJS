import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  // export default defineConfig(({ command, mode }) => {
    // const env = loadEnv(mode, process.cwd(), "");

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
    // define: {
    //   VITE_APIURL : JSON.stringify(env.VITE_APIURL),
    // },
  };
});
