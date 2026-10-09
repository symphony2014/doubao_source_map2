// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactIsTypeCheckersReexport'
// - Resolved require(547283) to 'react-is-type-checkers-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 392434
         */
module.exports = function (module, exports, require) {
  var reactIsTypeCheckersReexport = require("react-is-type-checkers-reexport") /*id: 547283*/;
  let i = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
  function o(e) {
    let t = `${e}`.match(i);
    return t && t[1] || "";
  }
  function a(e, t = "") {
    return e.displayName || e.name || o(e) || t;
  }
  function s(e, t, n) {
    let r = a(t);
    return e.displayName || (r !== "" ? `${n}(${r})` : n);
  }
  function l(e) {
    if (e != null) {
      if (typeof e == "string") {
        return e;
      }
      if (typeof e == "function") {
        return a(e, "Component");
      }
      if (typeof e == "object") {
        switch (e.$$typeof) {
          case reactIsTypeCheckersReexport.ForwardRef:
            return s(e, e.render, "ForwardRef");
          case reactIsTypeCheckersReexport.Memo:
            return s(e, e.type, "memo");
        }
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return l;
    },
    getFunctionName: function () {
      return o;
    }
  });
}