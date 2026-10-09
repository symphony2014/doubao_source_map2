// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fp' to 'max'
// - Renamed export 'GW' to 'floor'
// - Renamed export 'I4' to 'getAxisLength'
// - Renamed export 'JB' to 'getRectFromObject'
// - Renamed export 'KX' to 'getOppositePlacementPlacements'
// - Renamed export 'NM' to 'round'
// - Renamed export 'Qq' to 'getAxisFromPlacement'
// - Renamed export 'Rn' to 'getOppositeAxis'
// - Renamed export 'VV' to 'min'
// - Renamed export 'Wh' to 'getOppositeAxisFromPlacement'
// - Renamed export 'gy' to 'getPlacementOrder'
// - Renamed export 'hp' to 'getAlignment'
// - Renamed export 'i8' to 'getOppositeAlignmentPlacements'
// - Renamed export 'k3' to 'getBasePlacement'
// - Renamed export 'ku' to 'evaluate'
// - Renamed export 'mA' to 'basePlacements'
// - Renamed export 'pw' to 'getOppositePlacement'
// - Renamed export 'uZ' to 'clamp'
// - Renamed export 'yd' to 'getPaddingObject'
// - Renamed export 'ze' to 'getExpandableObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 857700
         */
module.exports = function (module, exports, require) {
  let r = ["top", "right", "bottom", "left"];
  let i = Math.min;
  let o = Math.max;
  let a = Math.round;
  let s = Math.floor;
  let u = e => ({
    x: e,
    y: e
  });
  let c = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  let l = {
    start: "end",
    end: "start"
  };
  function f(e, t, n) {
    return o(e, i(t, n));
  }
  function h(e, t) {
    if (typeof e == "function") {
      return e(t);
    } else {
      return e;
    }
  }
  function d(e) {
    return e.split("-")[0];
  }
  function p(e) {
    return e.split("-")[1];
  }
  function g(e) {
    if (e === "x") {
      return "y";
    } else {
      return "x";
    }
  }
  function v(e) {
    if (e === "y") {
      return "height";
    } else {
      return "width";
    }
  }
  function m(e) {
    if (["top", "bottom"].includes(d(e))) {
      return "y";
    } else {
      return "x";
    }
  }
  function y(e) {
    return g(m(e));
  }
  function b(e, t, n = false) {
    let r = p(e);
    let i = y(e);
    let o = v(i);
    let a = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    if (t.reference[o] > t.floating[o]) {
      a = S(a);
    }
    return [a, S(a)];
  }
  function _(e) {
    let t = S(e);
    return [w(e), t, w(t)];
  }
  function w(e) {
    return e.replace(/start|end/g, e => l[e]);
  }
  function E(e, t, n, r) {
    let i = p(e);
    let o = function (e, t, n) {
      let r = ["left", "right"];
      let i = ["right", "left"];
      switch (e) {
        case "top":
        case "bottom":
          if (n) {
            if (t) {
              return i;
            } else {
              return r;
            }
          }
          if (t) {
            return r;
          } else {
            return i;
          }
        case "left":
        case "right":
          if (t) {
            return ["top", "bottom"];
          } else {
            return ["bottom", "top"];
          }
        default:
          return [];
      }
    }(d(e), n === "start", r);
    if (i) {
      o = o.map(e => e + "-" + i);
      if (t) {
        o = o.concat(o.map(w));
      }
    }
    return o;
  }
  function S(e) {
    return e.replace(/left|right|bottom|top/g, e => c[e]);
  }
  function x(e) {
    if (typeof e != "number") {
      return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
      };
    } else {
      return {
        top: e,
        right: e,
        bottom: e,
        left: e
      };
    }
  }
  function k(e) {
    let {
      x: t,
      y: n,
      width: r,
      height: i
    } = e;
    return {
      width: r,
      height: i,
      top: n,
      left: t,
      right: t + r,
      bottom: n + i,
      x: t,
      y: n
    };
  }
  require.d(exports, {
    max: function () {
      return o;
    },
    floor: function () {
      return s;
    },
    getAxisLength: function () {
      return v;
    },
    getRectFromObject: function () {
      return k;
    },
    getOppositePlacementPlacements: function () {
      return E;
    },
    round: function () {
      return a;
    },
    getAxisFromPlacement: function () {
      return m;
    },
    getOppositeAxis: function () {
      return g;
    },
    min: function () {
      return i;
    },
    getOppositeAxisFromPlacement: function () {
      return y;
    },
    getPlacementOrder: function () {
      return _;
    },
    getAlignment: function () {
      return p;
    },
    getOppositeAlignmentPlacements: function () {
      return b;
    },
    getBasePlacement: function () {
      return d;
    },
    evaluate: function () {
      return h;
    },
    basePlacements: function () {
      return r;
    },
    getOppositePlacement: function () {
      return S;
    },
    clamp: function () {
      return f;
    },
    getPaddingObject: function () {
      return x;
    },
    getExpandableObject: function () {
      return u;
    }
  });
}