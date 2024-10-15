import { build } from "vite";
import htmlPurge from "vite-plugin-html-purgecss";

export default {
  plugins: [htmlPurge()],
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
};