// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'parseSvgTransform'
// - Renamed export 'Y' to 'parseCssTransform'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 619801
         */
module.exports = function (module, exports, require) {
  var i;
  var linearInterpolation_2 = require("linear-interpolation_2") /*id: 948395*/;
  var o = 180 / Math.PI;
  var u = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  function a(t, n, e, i, r, u) {
    var a;
    var s;
    var c;
    if (a = Math.sqrt(t * t + n * n)) {
      t /= a;
      n /= a;
    }
    if (c = t * e + n * i) {
      e -= t * c;
      i -= n * c;
    }
    if (s = Math.sqrt(e * e + i * i)) {
      e /= s;
      i /= s;
      c /= s;
    }
    if (t * i < n * e) {
      t = -t;
      n = -n;
      c = -c;
      a = -a;
    }
    return {
      translateX: r,
      translateY: u,
      rotate: Math.atan2(n, t) * o,
      skewX: Math.atan(c) * o,
      scaleX: a,
      scaleY: s
    };
  }
  function s(t, n, e, i) {
    function o(t) {
      if (t.length) {
        return t.pop() + " ";
      } else {
        return "";
      }
    }
    return function (u, a) {
      var s;
      var c;
      var h;
      var f;
      var l = [];
      var _ = [];
      u = t(u);
      a = t(a);
      (function (t, i, o, u, a, s) {
        if (t !== o || i !== u) {
          var c = a.push("translate(", null, n, null, e);
          s.push({
            i: c - 4,
            x: linearInterpolation_2.createLerp(t, o)
          }, {
            i: c - 2,
            x: linearInterpolation_2.createLerp(i, u)
          });
        } else if (o || u) {
          a.push("translate(" + o + n + u + e);
        }
      })(u.translateX, u.translateY, a.translateX, a.translateY, l, _);
      s = u.rotate;
      if (s !== (c = a.rotate)) {
        if (s - c > 180) {
          c += 360;
        } else if (c - s > 180) {
          s += 360;
        }
        _.push({
          i: l.push(o(l) + "rotate(", null, i) - 2,
          x: linearInterpolation_2.createLerp(s, c)
        });
      } else if (c) {
        l.push(o(l) + "rotate(" + c + i);
      }
      h = u.skewX;
      if (h !== (f = a.skewX)) {
        _.push({
          i: l.push(o(l) + "skewX(", null, i) - 2,
          x: linearInterpolation_2.createLerp(h, f)
        });
      } else if (f) {
        l.push(o(l) + "skewX(" + f + i);
      }
      (function (t, n, e, i, u, a) {
        if (t !== e || n !== i) {
          var s = u.push(o(u) + "scale(", null, ",", null, ")");
          a.push({
            i: s - 4,
            x: linearInterpolation_2.createLerp(t, e)
          }, {
            i: s - 2,
            x: linearInterpolation_2.createLerp(n, i)
          });
        } else if (e !== 1 || i !== 1) {
          u.push(o(u) + "scale(" + e + "," + i + ")");
        }
      })(u.scaleX, u.scaleY, a.scaleX, a.scaleY, l, _);
      u = a = null;
      return function (t) {
        var n;
        var e = -1;
        var i = _.length;
        while (++e < i) {
          l[(n = _[e]).i] = n.x(t);
        }
        return l.join("");
      };
    };
  }
  var c = s(function (t) {
    let n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
    if (n.isIdentity) {
      return u;
    } else {
      return a(n.a, n.b, n.c, n.d, n.e, n.f);
    }
  }, "px, ", "px)", "deg)");
  var h = s(function (t) {
    if (t == null) {
      return u;
    } else {
      i ||= document.createElementNS("http://www.w3.org/2000/svg", "g");
      i.setAttribute("transform", t);
      if (t = i.transform.baseVal.consolidate()) {
        return a((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f);
      } else {
        return u;
      }
    }
  }, ", ", ")", ")");
  require.d(exports, {
    parseSvgTransform: function () {
      return h;
    },
    parseCssTransform: function () {
      return c;
    }
  });
}