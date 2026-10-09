// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'esModuleInteropHelper_2'
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(739258) to 'define-property-safe-util_1'
// - Resolved require(975605) to 'iterable-to-array-helper_1'
// - Resolved require(305660) to 'parse-query-params'
// - Resolved require(736883) to 'query-params-stringify'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 97038.67ba788d.js
         * chunkId: 97038
         * moduleId: 786143
         */
module.exports = function (module, exports, require) {
  var esModuleInteropHelper_2 = require("es-module-interop-helper_2") /*id: 299302*/;
  exports.default = undefined;
  var o = esModuleInteropHelper_2(require("define-property-safe-util_1") /*id: 739258*/);
  var i = esModuleInteropHelper_2(require("iterable-to-array-helper_1") /*id: 975605*/);
  var a = esModuleInteropHelper_2(require("parse-query-params") /*id: 305660*/);
  var s = esModuleInteropHelper_2(require("query-params-stringify") /*id: 736883*/);
  function u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function c(e, t, r) {
    if (t === undefined || Object.keys(t).length === 0) {
      return e;
    }
    var n;
    var c;
    var f = false;
    if (typeof r == "boolean" || r === undefined) {
      n = !!r;
    } else {
      n = !!r.encodeList;
      f = r.stable;
    }
    var l = e.split("?");
    var d = i.default(l, 2);
    var p = d[0];
    var h = d[1];
    var m = h === undefined ? "" : h;
    if (m) {
      var v = m.split("#");
      var b = i.default(v, 2);
      m = b[0];
      var y = b[1];
      c = y === undefined ? "" : y;
    } else {
      var g = e.split("#");
      var x = i.default(g, 2);
      p = x[0];
      var w = x[1];
      c = w === undefined ? "" : w;
    }
    var _ = a.default(undefined, m);
    _ = Object.assign(_, t);
    if (f) {
      _ = Object.keys(_).sort(function (e, t) {
        if (e > t) {
          return 1;
        } else {
          return -1;
        }
      }).reduce(function (e, t) {
        return function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] ?? {};
            if (t % 2) {
              u(Object(r), true).forEach(function (t) {
                o.default(e, t, r[t]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
            } else {
              u(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
            }
          }
          return e;
        }({}, e, o.default({}, t, _[t]));
      }, {});
    }
    m = (m = s.default(_, n)) && `?${m}`;
    c = c && `#${c}`;
    return `${p}${m}${c}`;
  }
  c.default = c;
  exports.default = c;
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}