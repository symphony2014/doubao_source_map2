// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: react-easy-crop.320047a5.js
         * chunkId: 26549
         * moduleId: 270317
         */
module.exports = function (module, exports, require) {
  var t;
  var o;
  var n;
  var r;
  var i;
  var a;
  var s;
  var c;
  var h;
  var p;
  var u;
  var d;
  var l;
  var v;
  var m;
  var f = false;
  function g() {
    if (!f) {
      f = true;
      var e = navigator.userAgent;
      var g = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e);
      var w = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
      d = /\b(iPhone|iP[ao]d)/.exec(e);
      l = /\b(iP[ao]d)/.exec(e);
      p = /Android/i.exec(e);
      v = /FBAN\/\w+;/i.exec(e);
      m = /Mobile/i.exec(e);
      u = !!/Win64/.exec(e);
      if (g) {
        if ((t = g[1] ? parseFloat(g[1]) : g[5] ? parseFloat(g[5]) : NaN) && document && document.documentMode) {
          t = document.documentMode;
        }
        var C = /(?:Trident\/(\d+.\d+))/.exec(e);
        a = C ? parseFloat(C[1]) + 4 : t;
        o = g[2] ? parseFloat(g[2]) : NaN;
        n = g[3] ? parseFloat(g[3]) : NaN;
        i = (r = g[4] ? parseFloat(g[4]) : NaN) && (g = /(?:Chrome\/(\d+\.\d+))/.exec(e)) && g[1] ? parseFloat(g[1]) : NaN;
      } else {
        t = o = n = i = r = NaN;
      }
      if (w) {
        if (w[1]) {
          var S = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
          s = !S || parseFloat(S[1].replace("_", "."));
        } else {
          s = false;
        }
        c = !!w[2];
        h = !!w[3];
      } else {
        s = c = h = false;
      }
    }
  }
  var w = {
    ie: function () {
      return g() || t;
    },
    ieCompatibilityMode: function () {
      return g() || a > t;
    },
    ie64: function () {
      return w.ie() && u;
    },
    firefox: function () {
      return g() || o;
    },
    opera: function () {
      return g() || n;
    },
    webkit: function () {
      return g() || r;
    },
    safari: function () {
      return w.webkit();
    },
    chrome: function () {
      return g() || i;
    },
    windows: function () {
      return g() || c;
    },
    osx: function () {
      return g() || s;
    },
    linux: function () {
      return g() || h;
    },
    iphone: function () {
      return g() || d;
    },
    mobile: function () {
      return g() || d || l || p || m;
    },
    nativeApp: function () {
      return g() || v;
    },
    android: function () {
      return g() || p;
    },
    ipad: function () {
      return g() || l;
    }
  };
  module.exports = w;
}