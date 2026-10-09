// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'webpackSecretKey'
// - Resolved require(530132) to 'webpack-secret-key'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 513884
         */
module.exports = function (module, exports, require) {
  var webpackSecretKey = require("webpack-secret-key") /*id: 530132*/;
  function i() {}
  function o() {}
  o.resetWarningCache = i;
  module.exports = function () {
    function e(e, t, n, i, o, a) {
      if (a !== webpackSecretKey) {
        var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        s.name = "Invariant Violation";
        throw s;
      }
    }
    function t() {
      return e;
    }
    e.isRequired = e;
    var n = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: o,
      resetWarningCache: i
    };
    n.PropTypes = n;
    return n;
  };
}