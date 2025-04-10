import postcssPresetEnv from "postcss-preset-env";
import { purgeCSSPlugin } from "@fullhuman/postcss-purgecss";

export default {
  plugins: [
    purgeCSSPlugin({
      content: ["./**/*.html"],
    }),
    postcssPresetEnv({
      stage: 0,
    }),
  ],
};
