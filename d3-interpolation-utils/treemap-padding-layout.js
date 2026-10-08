// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createTreemapPad'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 39858
         */
module.exports = function (module, exports, require) {
  var roundRectangleBounds = require("round-rectangle-bounds") /*id: 491577*/;
  var treemapDiceStackLayout = require("treemap-dice-stack-layout") /*id: 86958*/;
  var functionAssertUtils = require("function-assert-utils") /*id: 584013*/;
  var utilConstantFactory = require("util-constant-factory") /*id: 790932*/;
  function a() {
    var t = treemapDiceStackLayout.createTreemap;
    var n = false;
    var e = 1;
    var a = 1;
    var s = [0];
    var c = utilConstantFactory.returnZero;
    var h = utilConstantFactory.returnZero;
    var f = utilConstantFactory.returnZero;
    var l = utilConstantFactory.returnZero;
    var _ = utilConstantFactory.returnZero;
    function p(t) {
      t.x0 = t.y0 = 0;
      t.x1 = e;
      t.y1 = a;
      t.eachBefore(y);
      s = [0];
      if (n) {
        t.eachBefore(roundRectangleBounds.roundRectBounds);
      }
      return t;
    }
    function y(n) {
      var e = s[n.depth];
      var i = n.x0 + e;
      var r = n.y0 + e;
      var o = n.x1 - e;
      var u = n.y1 - e;
      if (o < i) {
        i = o = (i + o) / 2;
      }
      if (u < r) {
        r = u = (r + u) / 2;
      }
      n.x0 = i;
      n.y0 = r;
      n.x1 = o;
      n.y1 = u;
      if (n.children) {
        e = s[n.depth + 1] = c(n) / 2;
        i += _(n) - e;
        r += h(n) - e;
        o -= f(n) - e;
        u -= l(n) - e;
        if (o < i) {
          i = o = (i + o) / 2;
        }
        if (u < r) {
          r = u = (r + u) / 2;
        }
        t(n, i, r, o, u);
      }
    }
    p.round = function (t) {
      if (arguments.length) {
        n = !!t;
        return p;
      } else {
        return n;
      }
    };
    p.size = function (t) {
      if (arguments.length) {
        e = +t[0];
        a = +t[1];
        return p;
      } else {
        return [e, a];
      }
    };
    p.tile = function (n) {
      if (arguments.length) {
        t = functionAssertUtils.assertFunction(n);
        return p;
      } else {
        return t;
      }
    };
    p.padding = function (t) {
      if (arguments.length) {
        return p.paddingInner(t).paddingOuter(t);
      } else {
        return p.paddingInner();
      }
    };
    p.paddingInner = function (t) {
      if (arguments.length) {
        c = typeof t == "function" ? t : utilConstantFactory.createConstant(+t);
        return p;
      } else {
        return c;
      }
    };
    p.paddingOuter = function (t) {
      if (arguments.length) {
        return p.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t);
      } else {
        return p.paddingTop();
      }
    };
    p.paddingTop = function (t) {
      if (arguments.length) {
        h = typeof t == "function" ? t : utilConstantFactory.createConstant(+t);
        return p;
      } else {
        return h;
      }
    };
    p.paddingRight = function (t) {
      if (arguments.length) {
        f = typeof t == "function" ? t : utilConstantFactory.createConstant(+t);
        return p;
      } else {
        return f;
      }
    };
    p.paddingBottom = function (t) {
      if (arguments.length) {
        l = typeof t == "function" ? t : utilConstantFactory.createConstant(+t);
        return p;
      } else {
        return l;
      }
    };
    p.paddingLeft = function (t) {
      if (arguments.length) {
        _ = typeof t == "function" ? t : utilConstantFactory.createConstant(+t);
        return p;
      } else {
        return _;
      }
    };
    return p;
  }
  require.d(exports, {
    createTreemapPad: function () {
      return a;
    }
  });
}