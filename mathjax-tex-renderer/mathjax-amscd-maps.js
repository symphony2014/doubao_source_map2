// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(921652) to 'tex-parser-handlers'
// - Resolved require(79346) to 'mathjax-amscd-parser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 715065
         */
module.exports = function (module, exports, require) {
  var r = this && this.__createBinding || (Object.create ? function (t, e, Q, r = Q) {
    var T = Object.getOwnPropertyDescriptor(e, Q);
    if (!T || ("get" in T ? !e.__esModule : T.writable || T.configurable)) {
      T = {
        enumerable: true,
        get: function () {
          return e[Q];
        }
      };
    }
    Object.defineProperty(t, r, T);
  } : function (t, e, Q, r = Q) {
    t[r] = e[Q];
  });
  var T = this && this.__setModuleDefault || (Object.create ? function (t, e) {
    Object.defineProperty(t, "default", {
      enumerable: true,
      value: e
    });
  } : function (t, e) {
    t.default = e;
  });
  var n = this && this.__importStar || function (t) {
    if (t && t.__esModule) {
      return t;
    }
    var e = {};
    if (t != null) {
      for (var Q in t) {
        if (Q !== "default" && Object.prototype.hasOwnProperty.call(t, Q)) {
          r(e, t, Q);
        }
      }
    }
    T(e, t);
    return e;
  };
  var o = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  var i = n(require("symbol-parse-maps") /*id: 664746*/);
  var a = o(require("tex-parser-handlers") /*id: 921652*/);
  var u = o(require("mathjax-amscd-parser") /*id: 79346*/);
  new i.EnvironmentMap("amscd_environment", a.default.environment, {
    CD: "CD"
  }, u.default);
  new i.CommandMap("amscd_macros", {
    minCDarrowwidth: "minCDarrowwidth",
    minCDarrowheight: "minCDarrowheight"
  }, u.default);
  new i.MacroMap("amscd_special", {
    "@": "arrow"
  }, u.default);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}