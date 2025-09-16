import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss"; // Thêm dòng này

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: [".js", ".jsx"]
    }),
    commonjs({
      include: /node_modules/,
    }),
    babel({
      babelHelpers: "bundled",
      exclude: /node_modules/,
      extensions: [".js", ".jsx"],
      presets: ["@babel/preset-env", "@babel/preset-react"]
    }),
    postcss({
      modules: true,      // Hỗ trợ CSS module
      extract: true       // Tạo file CSS riêng khi build
    })
  ],
  external: ["react", "react-dom"]
};