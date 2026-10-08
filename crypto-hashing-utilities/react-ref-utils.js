// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'mH' to 'assignRef'
// - Renamed export 'Yr' to 'isClassComponent'
// - Renamed export 'sQ' to 'mergeRefs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35713.652e82fe.js
         * chunkId: 35713
         * moduleId: 624373
         */
module.exports = function (module, exports, require) {
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  var reactIsTypeCheckersReexport = require("react-is-type-checkers-reexport") /*id: 547283*/;
  function i(e, t) {
    if (typeof e == "function") {
      e(t);
    } else if (typeofHelper.getType(e) === "object" && e && "current" in e) {
      e.current = t;
    }
  }
  function u() {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    var r = t.filter(function (e) {
      return e;
    });
    if (r.length <= 1) {
      return r[0];
    } else {
      return function (e) {
        t.forEach(function (t) {
          i(t, e);
        });
      };
    }
  }
  function a(e) {
    var t;
    var n;
    var r = reactIsTypeCheckersReexport.isMemo(e) ? e.type.type : e.type;
    return (typeof r != "function" || (t = r.prototype) !== null && t !== undefined && !!t.render) && (typeof e != "function" || (n = e.prototype) !== null && n !== undefined && !!n.render);
  }
  require("react-core-library-reexport") /*id: 634663*/;
  require.d(exports, {
    assignRef: function () {
      return i;
    },
    isClassComponent: function () {
      return a;
    },
    mergeRefs: function () {
      return u;
    }
  });
}