// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-react.0f1f9659.js
         * chunkId: 43361
         * moduleId: 626011
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var l = Symbol.for("react.element");
  var a = Symbol.for("react.fragment");
  var u = Object.prototype.hasOwnProperty;
  var o = reactCoreLibraryReexport.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
  var i = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function s(e, n, t) {
    var r;
    var a = {};
    var s = null;
    var c = null;
    if (t !== undefined) {
      s = "" + t;
    }
    if (n.key !== undefined) {
      s = "" + n.key;
    }
    if (n.ref !== undefined) {
      c = n.ref;
    }
    for (r in n) {
      if (u.call(n, r) && !i.hasOwnProperty(r)) {
        a[r] = n[r];
      }
    }
    if (e && e.defaultProps) {
      for (r in n = e.defaultProps) {
        if (a[r] === undefined) {
          a[r] = n[r];
        }
      }
    }
    return {
      $$typeof: l,
      type: e,
      key: s,
      ref: c,
      props: a,
      _owner: o.current
    };
  }
  exports.Fragment = a;
  exports.jsx = s;
  exports.jsxs = s;
}