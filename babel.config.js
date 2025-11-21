module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@": "./src",
        },
      },
    ],
    [
      "@babel/plugin-transform-typescript", // soporte TS
      {
        allowDeclareFields: true,
      },
    ],
    "react-native-reanimated/plugin", // siempre debe ir al final
  ],
};







