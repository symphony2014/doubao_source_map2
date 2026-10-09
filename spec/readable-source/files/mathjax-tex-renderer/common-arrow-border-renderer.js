// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(527791) to 'common-arrow-border-utils'
// - Resolved require(527791) to 'common-arrow-border-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 489193
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
  var o = this && this.__exportStar || function (t, e) {
    for (var Q in t) {
      if (Q !== "default" && !Object.prototype.hasOwnProperty.call(e, Q)) {
        r(e, t, Q);
      }
    }
  };
  exports.Arrow = exports.DiagonalArrow = exports.DiagonalStrike = exports.Border2 = exports.Border = exports.RenderLine = exports.lineOffset = exports.lineData = exports.computeLineData = undefined;
  var i = n(require("common-arrow-border-utils") /*id: 527791*/);
  o(require("common-arrow-border-utils") /*id: 527791*/, exports);
  exports.computeLineData = {
    top: function (t, e, Q, r) {
      return [0, t - r, Q, t - r];
    },
    right: function (t, e, Q, r) {
      return [Q - r, -e, Q - r, t];
    },
    bottom: function (t, e, Q, r) {
      return [0, r - e, Q, r - e];
    },
    left: function (t, e, Q, r) {
      return [r, -e, r, t];
    },
    vertical: function (t, e, Q, r) {
      return [Q / 2, t, Q / 2, -e];
    },
    horizontal: function (t, e, Q, r) {
      return [0, (t - e) / 2, Q, (t - e) / 2];
    },
    up: function (t, e, Q, r) {
      return [r, r - e, Q - r, t - r];
    },
    down: function (t, e, Q, r) {
      return [r, t - r, Q - r, r - e];
    }
  };
  exports.lineData = function (t, Q, r = "") {
    var T = t.getBBox();
    var n = T.h;
    var o = T.d;
    var i = T.w;
    var a = t.thickness / 2;
    return exports.lineOffset(exports.computeLineData[Q](n, o, i, a), t, r);
  };
  exports.lineOffset = function (t, e, Q) {
    if (Q) {
      var r = e.getOffset(Q);
      if (r) {
        if (Q === "X") {
          t[0] -= r;
          t[2] -= r;
        } else {
          t[1] -= r;
          t[3] -= r;
        }
      }
    }
    return t;
  };
  exports.RenderLine = function (t, Q = "") {
    return function (r, T) {
      var n = r.line(exports.lineData(r, t, Q));
      r.adaptor.append(r.element, n);
    };
  };
  exports.Border = function (t) {
    return i.CommonBorder(function (Q, r) {
      Q.adaptor.append(Q.element, Q.line(exports.lineData(Q, t)));
    })(t);
  };
  exports.Border2 = function (t, Q, r) {
    return i.CommonBorder2(function (t, T) {
      t.adaptor.append(t.element, t.line(exports.lineData(t, Q)));
      t.adaptor.append(t.element, t.line(exports.lineData(t, r)));
    })(t, Q, r);
  };
  exports.DiagonalStrike = function (t) {
    return i.CommonDiagonalStrike(function (Q) {
      return function (Q, r) {
        Q.adaptor.append(Q.element, Q.line(exports.lineData(Q, t)));
      };
    })(t);
  };
  exports.DiagonalArrow = function (t) {
    return i.CommonDiagonalArrow(function (t, e) {
      t.adaptor.append(t.element, e);
    })(t);
  };
  exports.Arrow = function (t) {
    return i.CommonArrow(function (t, e) {
      t.adaptor.append(t.element, e);
    })(t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}