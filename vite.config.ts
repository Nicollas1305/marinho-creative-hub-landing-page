import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins: any[] = [react()];
  
  // Only add express plugin in development mode
  if (mode === 'development') {
    plugins.push(expressPlugin());
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    build: {
      outDir: "dist/spa",
      assetsDir: "assets",
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name]-[hash][extname]",
          chunkFileNames: "assets/[name]-[hash].js",
          entryFileNames: "assets/[name]-[hash].js",
        },
      },
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./client"),
        "@shared": path.resolve(__dirname, "./shared"),
      },
    },
  };
});

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      // Dynamic import to avoid issues during build
      import("./server").then(({ createServer }) => {
        const app = createServer();
        server.middlewares.use(app);
      }).catch(() => {
        // Ignore server import errors during build
        console.log("Server not available during build");
      });
    },
  };
}
