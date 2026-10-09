// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 390581
         */
module.exports = function (module, exports, require) {
  exports.Util = exports.Transform = undefined;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  class a {
    constructor(t = [1, 0, 0, 1, 0, 0]) {
      this.dirty = false;
      this.m = t && t.slice() || [1, 0, 0, 1, 0, 0];
    }
    reset() {
      this.m[0] = 1;
      this.m[1] = 0;
      this.m[2] = 0;
      this.m[3] = 1;
      this.m[4] = 0;
      this.m[5] = 0;
    }
    copy() {
      return new a(this.m);
    }
    copyInto(t) {
      t.m[0] = this.m[0];
      t.m[1] = this.m[1];
      t.m[2] = this.m[2];
      t.m[3] = this.m[3];
      t.m[4] = this.m[4];
      t.m[5] = this.m[5];
    }
    point(t) {
      var e = this.m;
      return {
        x: e[0] * t.x + e[2] * t.y + e[4],
        y: e[1] * t.x + e[3] * t.y + e[5]
      };
    }
    translate(t, e) {
      this.m[4] += this.m[0] * t + this.m[2] * e;
      this.m[5] += this.m[1] * t + this.m[3] * e;
      return this;
    }
    scale(t, e) {
      this.m[0] *= t;
      this.m[1] *= t;
      this.m[2] *= e;
      this.m[3] *= e;
      return this;
    }
    rotate(t) {
      var e = Math.cos(t);
      var i = Math.sin(t);
      var r = this.m[0] * e + this.m[2] * i;
      var a = this.m[1] * e + this.m[3] * i;
      var n = -(this.m[0] * i) + this.m[2] * e;
      var s = -(this.m[1] * i) + this.m[3] * e;
      this.m[0] = r;
      this.m[1] = a;
      this.m[2] = n;
      this.m[3] = s;
      return this;
    }
    getTranslation() {
      return {
        x: this.m[4],
        y: this.m[5]
      };
    }
    skew(t, e) {
      var i = this.m[0] + this.m[2] * e;
      var r = this.m[1] + this.m[3] * e;
      var a = this.m[2] + this.m[0] * t;
      var n = this.m[3] + this.m[1] * t;
      this.m[0] = i;
      this.m[1] = r;
      this.m[2] = a;
      this.m[3] = n;
      return this;
    }
    multiply(t) {
      var e = this.m[0] * t.m[0] + this.m[2] * t.m[1];
      var i = this.m[1] * t.m[0] + this.m[3] * t.m[1];
      var r = this.m[0] * t.m[2] + this.m[2] * t.m[3];
      var a = this.m[1] * t.m[2] + this.m[3] * t.m[3];
      var n = this.m[0] * t.m[4] + this.m[2] * t.m[5] + this.m[4];
      var s = this.m[1] * t.m[4] + this.m[3] * t.m[5] + this.m[5];
      this.m[0] = e;
      this.m[1] = i;
      this.m[2] = r;
      this.m[3] = a;
      this.m[4] = n;
      this.m[5] = s;
      return this;
    }
    invert() {
      var t = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
      var e = this.m[3] * t;
      var i = -this.m[1] * t;
      var r = -this.m[2] * t;
      var a = this.m[0] * t;
      var n = t * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
      var s = t * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
      this.m[0] = e;
      this.m[1] = i;
      this.m[2] = r;
      this.m[3] = a;
      this.m[4] = n;
      this.m[5] = s;
      return this;
    }
    getMatrix() {
      return this.m;
    }
    decompose() {
      var t = this.m[0];
      var i = this.m[1];
      var r = this.m[2];
      var a = this.m[3];
      var n = this.m[4];
      var s = this.m[5];
      var o = t * a - i * r;
      let h = {
        x: n,
        y: s,
        rotation: 0,
        scaleX: 0,
        scaleY: 0,
        skewX: 0,
        skewY: 0
      };
      if (t != 0 || i != 0) {
        var l = Math.sqrt(t * t + i * i);
        h.rotation = i > 0 ? Math.acos(t / l) : -Math.acos(t / l);
        h.scaleX = l;
        h.scaleY = o / l;
        h.skewX = (t * r + i * a) / o;
        h.skewY = 0;
      } else if (r != 0 || a != 0) {
        var d = Math.sqrt(r * r + a * a);
        h.rotation = Math.PI / 2 - (a > 0 ? Math.acos(-r / d) : -Math.acos(r / d));
        h.scaleX = o / d;
        h.scaleY = d;
        h.skewX = 0;
        h.skewY = (t * r + i * a) / o;
      }
      h.rotation = exports.Util._getRotation(h.rotation);
      return h;
    }
  }
  exports.Transform = a;
  var n = Math.PI / 180;
  var s = 180 / Math.PI;
  var o = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 132, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 255, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 203],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [119, 128, 144],
    slategrey: [119, 128, 144],
    snow: [255, 255, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    transparent: [255, 255, 255, 0],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 5]
  };
  var h = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
  var l = [];
  let d = typeof requestAnimationFrame != "undefined" && requestAnimationFrame || function (t) {
    setTimeout(t, 60);
  };
  exports.Util = {
    _isElement: t => !!t && t.nodeType == 1,
    _isFunction: t => !!t && !!t.constructor && !!t.call && !!t.apply,
    _isPlainObject: t => !!t && t.constructor === Object,
    _isArray: t => Object.prototype.toString.call(t) === "[object Array]",
    _isNumber: t => Object.prototype.toString.call(t) === "[object Number]" && !isNaN(t) && isFinite(t),
    _isString: t => Object.prototype.toString.call(t) === "[object String]",
    _isBoolean: t => Object.prototype.toString.call(t) === "[object Boolean]",
    isObject: t => t instanceof Object,
    isValidSelector(t) {
      if (typeof t != "string") {
        return false;
      }
      var e = t[0];
      return e === "#" || e === "." || e === e.toUpperCase();
    },
    _sign: t => t === 0 ? 1 : t > 0 ? 1 : -1,
    requestAnimFrame(t) {
      l.push(t);
      if (l.length === 1) {
        d(function () {
          let t = l;
          l = [];
          t.forEach(function (t) {
            t();
          });
        });
      }
    },
    createCanvasElement() {
      var t = document.createElement("canvas");
      try {
        t.style = t.style || {};
      } catch (t) {}
      return t;
    },
    createImageElement: () => document.createElement("img"),
    _isInDocument(t) {
      while (t = t.parentNode) {
        if (t == document) {
          return true;
        }
      }
      return false;
    },
    _urlToImage(t, i) {
      var r = exports.Util.createImageElement();
      r.onload = function () {
        i(r);
      };
      r.src = t;
    },
    _rgbToHex: (t, e, i) => (16777216 + (t << 16) + (e << 8) + i).toString(16).slice(1),
    _hexToRgb(t) {
      var e = parseInt(t = t.replace("#", ""), 16);
      return {
        r: e >> 16 & 255,
        g: e >> 8 & 255,
        b: e & 255
      };
    },
    getRandomColor() {
      for (var t = (Math.random() * 16777215 << 0).toString(16); t.length < 6;) {
        t = "0" + t;
      }
      return "#" + t;
    },
    getRGB(t) {
      var e;
      if (t in o) {
        return {
          r: (e = o[t])[0],
          g: e[1],
          b: e[2]
        };
      } else if (t[0] === "#") {
        return this._hexToRgb(t.substring(1));
      } else if (t.substr(0, 4) === "rgb(") {
        return {
          r: parseInt((e = h.exec(t.replace(/ /g, "")))[1], 10),
          g: parseInt(e[2], 10),
          b: parseInt(e[3], 10)
        };
      } else {
        return {
          r: 0,
          g: 0,
          b: 0
        };
      }
    },
    colorToRGBA: t => {
      t = t || "black";
      return exports.Util._namedColorToRBA(t) || exports.Util._hex3ColorToRGBA(t) || exports.Util._hex4ColorToRGBA(t) || exports.Util._hex6ColorToRGBA(t) || exports.Util._hex8ColorToRGBA(t) || exports.Util._rgbColorToRGBA(t) || exports.Util._rgbaColorToRGBA(t) || exports.Util._hslColorToRGBA(t);
    },
    _namedColorToRBA(t) {
      var e = o[t.toLowerCase()];
      if (e) {
        return {
          r: e[0],
          g: e[1],
          b: e[2],
          a: 1
        };
      } else {
        return null;
      }
    },
    _rgbColorToRGBA(t) {
      if (t.indexOf("rgb(") === 0) {
        var e = (t = t.match(/rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number);
        return {
          r: e[0],
          g: e[1],
          b: e[2],
          a: 1
        };
      }
    },
    _rgbaColorToRGBA(t) {
      if (t.indexOf("rgba(") === 0) {
        var e = (t = t.match(/rgba\(([^)]+)\)/)[1]).split(/ *, */).map((t, e) => t.slice(-1) === "%" ? e === 3 ? parseInt(t) / 100 : parseInt(t) / 100 * 255 : Number(t));
        return {
          r: e[0],
          g: e[1],
          b: e[2],
          a: e[3]
        };
      }
    },
    _hex8ColorToRGBA(t) {
      if (t[0] === "#" && t.length === 9) {
        return {
          r: parseInt(t.slice(1, 3), 16),
          g: parseInt(t.slice(3, 5), 16),
          b: parseInt(t.slice(5, 7), 16),
          a: parseInt(t.slice(7, 9), 16) / 255
        };
      }
    },
    _hex6ColorToRGBA(t) {
      if (t[0] === "#" && t.length === 7) {
        return {
          r: parseInt(t.slice(1, 3), 16),
          g: parseInt(t.slice(3, 5), 16),
          b: parseInt(t.slice(5, 7), 16),
          a: 1
        };
      }
    },
    _hex4ColorToRGBA(t) {
      if (t[0] === "#" && t.length === 5) {
        return {
          r: parseInt(t[1] + t[1], 16),
          g: parseInt(t[2] + t[2], 16),
          b: parseInt(t[3] + t[3], 16),
          a: parseInt(t[4] + t[4], 16) / 255
        };
      }
    },
    _hex3ColorToRGBA(t) {
      if (t[0] === "#" && t.length === 4) {
        return {
          r: parseInt(t[1] + t[1], 16),
          g: parseInt(t[2] + t[2], 16),
          b: parseInt(t[3] + t[3], 16),
          a: 1
        };
      }
    },
    _hslColorToRGBA(t) {
      if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(t)) {
        let e;
        let i;
        let r;
        let [a, ...n] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t);
        let s = Number(n[0]) / 360;
        let o = Number(n[1]) / 100;
        let h = Number(n[2]) / 100;
        if (o === 0) {
          return {
            r: Math.round(r = h * 255),
            g: Math.round(r),
            b: Math.round(r),
            a: 1
          };
        }
        e = h < 0.5 ? h * (1 + o) : h + o - h * o;
        let l = h * 2 - e;
        let d = [0, 0, 0];
        for (let t = 0; t < 3; t++) {
          if ((i = s + -(1 / 3 * (t - 1))) < 0) {
            i++;
          }
          if (i > 1) {
            i--;
          }
          r = i * 6 < 1 ? l + (e - l) * 6 * i : i * 2 < 1 ? e : i * 3 < 2 ? l + (e - l) * (2 / 3 - i) * 6 : l;
          d[t] = r * 255;
        }
        return {
          r: Math.round(d[0]),
          g: Math.round(d[1]),
          b: Math.round(d[2]),
          a: 1
        };
      }
    },
    haveIntersection: (t, e) => !(e.x > t.x + t.width) && !(e.x + e.width < t.x) && !(e.y > t.y + t.height) && !(e.y + e.height < t.y),
    cloneObject(t) {
      var e = {};
      for (var i in t) {
        if (this._isPlainObject(t[i])) {
          e[i] = this.cloneObject(t[i]);
        } else if (this._isArray(t[i])) {
          e[i] = this.cloneArray(t[i]);
        } else {
          e[i] = t[i];
        }
      }
      return e;
    },
    cloneArray: t => t.slice(0),
    degToRad: t => t * n,
    radToDeg: t => t * s,
    _degToRad: t => {
      exports.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead.");
      return exports.Util.degToRad(t);
    },
    _radToDeg: t => {
      exports.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead.");
      return exports.Util.radToDeg(t);
    },
    _getRotation: t => konvaCoreConfig.Konva.angleDeg ? exports.Util.radToDeg(t) : t,
    _capitalize: t => t.charAt(0).toUpperCase() + t.slice(1),
    throw(t) {
      throw Error("Konva error: " + t);
    },
    error(t) {},
    warn(t) {
      if (!konvaCoreConfig.Konva.showWarnings) {
        return;
      }
    },
    each(t, e) {
      for (var i in t) {
        e(i, t[i]);
      }
    },
    _inRange: (t, e, i) => e <= t && t < i,
    _getProjectionToSegment(t, e, i, r, a, n) {
      var s;
      var o;
      var h;
      var l = (t - i) * (t - i) + (e - r) * (e - r);
      if (l == 0) {
        s = t;
        o = e;
        h = (a - i) * (a - i) + (n - r) * (n - r);
      } else {
        var d = ((a - t) * (i - t) + (n - e) * (r - e)) / l;
        if (d < 0) {
          s = t;
          o = e;
          h = (t - a) * (t - a) + (e - n) * (e - n);
        } else if (d > 1) {
          s = i;
          o = r;
          h = (i - a) * (i - a) + (r - n) * (r - n);
        } else {
          h = ((s = t + d * (i - t)) - a) * (s - a) + ((o = e + d * (r - e)) - n) * (o - n);
        }
      }
      return [s, o, h];
    },
    _getProjectionToLine(t, i, r) {
      var a = exports.Util.cloneObject(t);
      var n = Number.MAX_VALUE;
      i.forEach(function (s, o) {
        if (r || o !== i.length - 1) {
          var h = i[(o + 1) % i.length];
          var l = exports.Util._getProjectionToSegment(s.x, s.y, h.x, h.y, t.x, t.y);
          var d = l[0];
          var c = l[1];
          var u = l[2];
          if (u < n) {
            a.x = d;
            a.y = c;
            n = u;
          }
        }
      });
      return a;
    },
    _prepareArrayForTween(t, i, r) {
      var a;
      var n = [];
      var s = [];
      if (t.length > i.length) {
        var o = i;
        i = t;
        t = o;
      }
      for (a = 0; a < t.length; a += 2) {
        n.push({
          x: t[a],
          y: t[a + 1]
        });
      }
      for (a = 0; a < i.length; a += 2) {
        s.push({
          x: i[a],
          y: i[a + 1]
        });
      }
      var h = [];
      s.forEach(function (t) {
        var i = exports.Util._getProjectionToLine(t, n, r);
        h.push(i.x);
        h.push(i.y);
      });
      return h;
    },
    _prepareToStringify(t) {
      var i;
      t.visitedByCircularReferenceRemoval = true;
      for (var r in t) {
        if (t.hasOwnProperty(r) && t[r] && typeof t[r] == "object") {
          i = Object.getOwnPropertyDescriptor(t, r);
          if (t[r].visitedByCircularReferenceRemoval || exports.Util._isElement(t[r])) {
            if (!i.configurable) {
              return null;
            }
            delete t[r];
          } else if (exports.Util._prepareToStringify(t[r]) === null) {
            if (!i.configurable) {
              return null;
            }
            delete t[r];
          }
        }
      }
      delete t.visitedByCircularReferenceRemoval;
      return t;
    },
    _assign(t, e) {
      for (var i in e) {
        t[i] = e[i];
      }
      return t;
    },
    _getFirstPointerId: t => t.touches ? t.changedTouches[0].identifier : t.pointerId || 999,
    releaseCanvas(...t) {
      if (konvaCoreConfig.Konva.releaseCanvasOnDestroy) {
        t.forEach(t => {
          t.width = 0;
          t.height = 0;
        });
      }
    },
    drawRoundedRectPath(t, e, i, r) {
      let a = 0;
      let n = 0;
      let s = 0;
      let o = 0;
      if (typeof r == "number") {
        a = n = s = o = Math.min(r, e / 2, i / 2);
      } else {
        a = Math.min(r[0] || 0, e / 2, i / 2);
        n = Math.min(r[1] || 0, e / 2, i / 2);
        o = Math.min(r[2] || 0, e / 2, i / 2);
        s = Math.min(r[3] || 0, e / 2, i / 2);
      }
      t.moveTo(a, 0);
      t.lineTo(e - n, 0);
      t.arc(e - n, n, n, Math.PI * 3 / 2, 0, false);
      t.lineTo(e, i - o);
      t.arc(e - o, i - o, o, 0, Math.PI / 2, false);
      t.lineTo(s, i);
      t.arc(s, i - s, s, Math.PI / 2, Math.PI, false);
      t.lineTo(0, a);
      t.arc(a, a, a, Math.PI, Math.PI * 3 / 2, false);
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}