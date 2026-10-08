// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46126.e68e9438.js
         * chunkId: 46126
         * moduleId: 633715
         */
module.exports = function (module, exports, require) {
  var r = function (e) {
    if (e && e.__esModule) {
      return e;
    }
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (t) {
        if (t !== "default") {
          var r = Object.getOwnPropertyDescriptor(e, t);
          Object.defineProperty(n, t, r.get ? r : {
            enumerable: true,
            get: function () {
              return e[t];
            }
          });
        }
      });
    }
    n.default = e;
    return Object.freeze(n);
  }(require("react-core-library-reexport") /*id: 634663*/);
  let o = r.createContext("light");
  let i = ({
    children: e,
    mode: n = "light"
  }) => r.createElement(o.Provider, {
    value: n
  }, e);
  exports.IllustrationThemeProvider = i;
  exports.default = i;
  exports.illustrationThemeContext = o;
  exports.useIllustrationTheme = () => r.useContext(o);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}