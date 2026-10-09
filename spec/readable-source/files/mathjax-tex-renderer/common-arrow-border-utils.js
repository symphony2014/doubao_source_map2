// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 527791
         */
module.exports = function (module, exports, require) {
  var Q = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
  };
  exports.CommonArrow = exports.CommonDiagonalArrow = exports.CommonDiagonalStrike = exports.CommonBorder2 = exports.CommonBorder = exports.arrowBBox = exports.diagonalArrowDef = exports.arrowDef = exports.arrowBBoxW = exports.arrowBBoxHD = exports.arrowHead = exports.fullBorder = exports.fullPadding = exports.fullBBox = exports.sideNames = exports.sideIndex = exports.SOLID = exports.PADDING = exports.THICKNESS = exports.ARROWY = exports.ARROWDX = exports.ARROWX = undefined;
  exports.ARROWX = 4;
  exports.ARROWDX = 1;
  exports.ARROWY = 2;
  exports.THICKNESS = 0.067;
  exports.PADDING = 0.2;
  exports.SOLID = exports.THICKNESS + "em solid";
  exports.sideIndex = {
    top: 0,
    right: 1,
    bottom: 2,
    left: 3
  };
  exports.sideNames = Object.keys(exports.sideIndex);
  exports.fullBBox = function (t) {
    return [,,,,].fill(t.thickness + t.padding);
  };
  exports.fullPadding = function (t) {
    return [,,,,].fill(t.padding);
  };
  exports.fullBorder = function (t) {
    return [,,,,].fill(t.thickness);
  };
  exports.arrowHead = function (t) {
    return Math.max(t.padding, t.thickness * (t.arrowhead.x + t.arrowhead.dx + 1));
  };
  exports.arrowBBoxHD = function (t, e) {
    if (t.childNodes[0]) {
      var Q = t.childNodes[0].getBBox();
      var r = Q.h;
      var T = Q.d;
      e[0] = e[2] = Math.max(0, t.thickness * t.arrowhead.y - (r + T) / 2);
    }
    return e;
  };
  exports.arrowBBoxW = function (t, e) {
    if (t.childNodes[0]) {
      var Q = t.childNodes[0].getBBox().w;
      e[1] = e[3] = Math.max(0, t.thickness * t.arrowhead.y - Q / 2);
    }
    return e;
  };
  exports.arrowDef = {
    up: [-Math.PI / 2, false, true, "verticalstrike"],
    down: [Math.PI / 2, false, true, "verticakstrike"],
    right: [0, false, false, "horizontalstrike"],
    left: [Math.PI, false, false, "horizontalstrike"],
    updown: [Math.PI / 2, true, true, "verticalstrike uparrow downarrow"],
    leftright: [0, true, false, "horizontalstrike leftarrow rightarrow"]
  };
  exports.diagonalArrowDef = {
    updiagonal: [-1, 0, false, "updiagonalstrike northeastarrow"],
    northeast: [-1, 0, false, "updiagonalstrike updiagonalarrow"],
    southeast: [1, 0, false, "downdiagonalstrike"],
    northwest: [1, Math.PI, false, "downdiagonalstrike"],
    southwest: [-1, Math.PI, false, "updiagonalstrike"],
    northeastsouthwest: [-1, 0, true, "updiagonalstrike northeastarrow updiagonalarrow southwestarrow"],
    northwestsoutheast: [1, 0, true, "downdiagonalstrike northwestarrow southeastarrow"]
  };
  exports.arrowBBox = {
    up: function (t) {
      return exports.arrowBBoxW(t, [exports.arrowHead(t), 0, t.padding, 0]);
    },
    down: function (t) {
      return exports.arrowBBoxW(t, [t.padding, 0, exports.arrowHead(t), 0]);
    },
    right: function (t) {
      return exports.arrowBBoxHD(t, [0, exports.arrowHead(t), 0, t.padding]);
    },
    left: function (t) {
      return exports.arrowBBoxHD(t, [0, t.padding, 0, exports.arrowHead(t)]);
    },
    updown: function (t) {
      return exports.arrowBBoxW(t, [exports.arrowHead(t), 0, exports.arrowHead(t), 0]);
    },
    leftright: function (t) {
      return exports.arrowBBoxHD(t, [0, exports.arrowHead(t), 0, exports.arrowHead(t)]);
    }
  };
  exports.CommonBorder = function (t) {
    return function (Q) {
      var r = exports.sideIndex[Q];
      return [Q, {
        renderer: t,
        bbox: function (t) {
          var e = [0, 0, 0, 0];
          e[r] = t.thickness + t.padding;
          return e;
        },
        border: function (t) {
          var e = [0, 0, 0, 0];
          e[r] = t.thickness;
          return e;
        }
      }];
    };
  };
  exports.CommonBorder2 = function (t) {
    return function (Q, r, T) {
      var n = exports.sideIndex[r];
      var o = exports.sideIndex[T];
      return [Q, {
        renderer: t,
        bbox: function (t) {
          var e = t.thickness + t.padding;
          var Q = [0, 0, 0, 0];
          Q[n] = Q[o] = e;
          return Q;
        },
        border: function (t) {
          var e = [0, 0, 0, 0];
          e[n] = e[o] = t.thickness;
          return e;
        },
        remove: r + " " + T
      }];
    };
  };
  exports.CommonDiagonalStrike = function (t) {
    return function (Q) {
      var r = "mjx-" + Q.charAt(0) + "strike";
      return [Q + "diagonalstrike", {
        renderer: t(r),
        bbox: exports.fullBBox
      }];
    };
  };
  exports.CommonDiagonalArrow = function (t) {
    return function (r) {
      var T = Q(exports.diagonalArrowDef[r], 4);
      var n = T[0];
      var o = T[1];
      var i = T[2];
      return [r + "arrow", {
        renderer: function (e, r) {
          var T = Q(e.arrowAW(), 2);
          var a = T[0];
          var u = T[1];
          var s = e.arrow(u, n * (a - o), i);
          t(e, s);
        },
        bbox: function (t) {
          var e = t.arrowData();
          var r = e.a;
          var T = e.x;
          var n = e.y;
          var o = Q([t.arrowhead.x, t.arrowhead.y, t.arrowhead.dx], 3);
          var i = o[0];
          var a = o[1];
          var u = o[2];
          var s = Q(t.getArgMod(i + u, a), 2);
          var l = s[0];
          var c = s[1];
          var p = n + (l > r ? t.thickness * c * Math.sin(l - r) : 0);
          var h = T + (l > Math.PI / 2 - r ? t.thickness * c * Math.sin(l + r - Math.PI / 2) : 0);
          return [p, h, p, h];
        },
        remove: T[3]
      }];
    };
  };
  exports.CommonArrow = function (t) {
    return function (r) {
      var T = Q(exports.arrowDef[r], 4);
      var n = T[0];
      var o = T[1];
      var i = T[2];
      var a = T[3];
      return [r + "arrow", {
        renderer: function (e, r) {
          var T = e.getBBox();
          var a = T.w;
          var u = T.h;
          var s = T.d;
          var l = Q(i ? [u + s, "X"] : [a, "Y"], 2);
          var c = l[0];
          var p = l[1];
          var h = e.getOffset(p);
          var f = e.arrow(c, n, o, p, h);
          t(e, f);
        },
        bbox: exports.arrowBBox[r],
        remove: a
      }];
    };
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}