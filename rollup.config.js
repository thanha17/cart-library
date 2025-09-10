import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.js",          // file đầu vào
  output: [
    {
      file: "dist/index.cjs.js",  // CommonJS
      format: "cjs",
      sourcemap: true
    },
    {
      file: "dist/index.esm.js",  // ES Module
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),           // loại bỏ peerDeps ra khỏi bundle
    resolve({
      extensions: [".js", ".jsx"] // thêm .jsx để Rollup nhận diện
    }),
    commonjs({
      include: /node_modules/,     // chỉ chuyển node_modules sang CommonJS
    }),
    babel({
      babelHelpers: "bundled",     // bắt buộc
      exclude: /node_modules/,     // không build node_modules
      extensions: [".js", ".jsx"], // hỗ trợ JS + JSX
      presets: ["@babel/preset-env", "@babel/preset-react"]
    })
  ],
  external: ["react", "react-dom"] // React sẽ không được đóng gói
};
