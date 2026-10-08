// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(893631) to 'babel-typeof-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 37636
         */
module.exports = function (module, exports, require) {
  var i = require("babel-typeof-helper") /*id: 893631*/.default;
  function r(e) {
    if (typeof WeakMap != "function") {
      return null;
    }
    var t = new WeakMap();
    var n = new WeakMap();
    return (r = function (e) {
      if (e) {
        return n;
      } else {
        return t;
      }
    })(e);
  }
  module.exports = function (e, t) {
    if (!t && e && e.__esModule) {
      return e;
    }
    if (e === null || i(e) != "object" && typeof e != "function") {
      return {
        default: e
      };
    }
    var n = r(t);
    if (n && n.has(e)) {
      return n.get(e);
    }
    var o = {
      __proto__: null
    };
    var s = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in e) {
      if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
        var l = s ? Object.getOwnPropertyDescriptor(e, a) : null;
        if (l && (l.get || l.set)) {
          Object.defineProperty(o, a, l);
        } else {
          o[a] = e[a];
        }
      }
    }
    o.default = e;
    if (n) {
      n.set(e, o);
    }
    return o;
  };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
}