// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'babelInteropRequireWildcard'
// - Resolved require(37636) to 'babel-interop-require-wildcard'
// - Renamed variable 'r' to 'esModuleInteropHelper_2'
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(975605) to 'iterable-to-array-helper_1'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Resolved require(741570) to 'use-safe-state'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 900767
         */
module.exports = function (module, exports, require) {
  var babelInteropRequireWildcard = require("babel-interop-require-wildcard") /*id: 37636*/;
  var esModuleInteropHelper_2 = require("es-module-interop-helper_2") /*id: 299302*/;
  exports.default = function (e, t) {
    var n = t || {};
    var i = n.defaultValue;
    var r = n.value;
    var l = n.onChange;
    var u = n.postState;
    var h = a.default(function () {
      if (r !== undefined) {
        return r;
      } else if (i !== undefined) {
        if (typeof i == "function") {
          return i();
        } else {
          return i;
        }
      } else if (typeof e == "function") {
        return e();
      } else {
        return e;
      }
    });
    var c = o.default(h, 2);
    var d = c[0];
    var f = c[1];
    var v = r !== undefined ? r : d;
    if (u) {
      v = u(v);
    }
    var g = s.useRef(l);
    g.current = l;
    var p = s.useCallback(function (e, t) {
      f(e, t);
      if (v !== e && g.current) {
        g.current(e, v);
      }
    }, [v, g]);
    var y = s.useRef(r);
    s.useEffect(function () {
      if (r === undefined && r !== y.current) {
        f(r);
      }
      y.current = r;
    }, [r]);
    return [v, p];
  };
  var o = esModuleInteropHelper_2(require("iterable-to-array-helper_1") /*id: 975605*/);
  var s = babelInteropRequireWildcard(require("react-core-library-reexport") /*id: 634663*/);
  var a = esModuleInteropHelper_2(require("use-safe-state") /*id: 741570*/);
}