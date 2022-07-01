module.exports = {
  plugins: [
      {
          plugin: require("./craco-plugins/module-federation.js")
      },
  ],
  webpack: {
      plugins: {
          remove: ["ModuleScopePlugin"],
      },
  },
};