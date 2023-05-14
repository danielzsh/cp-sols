import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    viewportHeight: 660,
    viewportWidth: 1000
  },
});
