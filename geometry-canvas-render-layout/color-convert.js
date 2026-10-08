// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'cssColorNamesRgb'
// - Resolved require(890025) to 'css-color-names-rgb'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 886055
         */
module.exports = function (module, exports, require) {
  var cssColorNamesRgb = require("css-color-names-rgb") /*id: 890025*/;
  var r = {};
  for (var o in cssColorNamesRgb) {
    if (cssColorNamesRgb.hasOwnProperty(o)) {
      r[cssColorNamesRgb[o]] = o;
    }
  }
  var a = module.exports = {
    rgb: {
      channels: 3,
      labels: "rgb"
    },
    hsl: {
      channels: 3,
      labels: "hsl"
    },
    hsv: {
      channels: 3,
      labels: "hsv"
    },
    hwb: {
      channels: 3,
      labels: "hwb"
    },
    cmyk: {
      channels: 4,
      labels: "cmyk"
    },
    xyz: {
      channels: 3,
      labels: "xyz"
    },
    lab: {
      channels: 3,
      labels: "lab"
    },
    lch: {
      channels: 3,
      labels: "lch"
    },
    hex: {
      channels: 1,
      labels: ["hex"]
    },
    keyword: {
      channels: 1,
      labels: ["keyword"]
    },
    ansi16: {
      channels: 1,
      labels: ["ansi16"]
    },
    ansi256: {
      channels: 1,
      labels: ["ansi256"]
    },
    hcg: {
      channels: 3,
      labels: ["h", "c", "g"]
    },
    apple: {
      channels: 3,
      labels: ["r16", "g16", "b16"]
    },
    gray: {
      channels: 1,
      labels: ["gray"]
    }
  };
  for (var s in a) {
    if (a.hasOwnProperty(s)) {
      if (!("channels" in a[s])) {
        throw Error("missing channels property: " + s);
      }
      if (!("labels" in a[s])) {
        throw Error("missing channel labels property: " + s);
      }
      if (a[s].labels.length !== a[s].channels) {
        throw Error("channel and label counts mismatch: " + s);
      }
      var h = a[s].channels;
      var l = a[s].labels;
      delete a[s].channels;
      delete a[s].labels;
      Object.defineProperty(a[s], "channels", {
        value: h
      });
      Object.defineProperty(a[s], "labels", {
        value: l
      });
    }
  }
  a.rgb.hsl = function (t) {
    var e;
    var n;
    var i = t[0] / 255;
    var r = t[1] / 255;
    var o = t[2] / 255;
    var a = Math.min(i, r, o);
    var s = Math.max(i, r, o);
    var h = s - a;
    if (s === a) {
      e = 0;
    } else if (i === s) {
      e = (r - o) / h;
    } else if (r === s) {
      e = 2 + (o - i) / h;
    } else if (o === s) {
      e = 4 + (i - r) / h;
    }
    if ((e = Math.min(e * 60, 360)) < 0) {
      e += 360;
    }
    n = (a + s) / 2;
    return [e, (s === a ? 0 : n <= 0.5 ? h / (s + a) : h / (2 - s - a)) * 100, n * 100];
  };
  a.rgb.hsv = function (t) {
    var e;
    var n;
    var i;
    var r;
    var o;
    var a = t[0] / 255;
    var s = t[1] / 255;
    var h = t[2] / 255;
    var l = Math.max(a, s, h);
    var u = l - Math.min(a, s, h);
    function c(t) {
      return (l - t) / 6 / u + 0.5;
    }
    if (u === 0) {
      r = o = 0;
    } else {
      o = u / l;
      e = c(a);
      n = c(s);
      i = c(h);
      if (a === l) {
        r = i - n;
      } else if (s === l) {
        r = 1 / 3 + e - i;
      } else if (h === l) {
        r = 2 / 3 + n - e;
      }
      if (r < 0) {
        r += 1;
      } else if (r > 1) {
        r -= 1;
      }
    }
    return [r * 360, o * 100, l * 100];
  };
  a.rgb.hwb = function (t) {
    var e = t[0];
    var n = t[1];
    var i = t[2];
    return [a.rgb.hsl(t)[0], 1 / 255 * Math.min(e, Math.min(n, i)) * 100, (i = 1 - 1 / 255 * Math.max(e, Math.max(n, i))) * 100];
  };
  a.rgb.cmyk = function (t) {
    var e;
    var n = t[0] / 255;
    var i = t[1] / 255;
    var r = t[2] / 255;
    e = Math.min(1 - n, 1 - i, 1 - r);
    return [((1 - n - e) / (1 - e) || 0) * 100, ((1 - i - e) / (1 - e) || 0) * 100, ((1 - r - e) / (1 - e) || 0) * 100, e * 100];
  };
  a.rgb.keyword = function (t) {
    var e;
    var n = r[t];
    if (n) {
      return n;
    }
    var o = Infinity;
    for (var a in cssColorNamesRgb) {
      if (cssColorNamesRgb.hasOwnProperty(a)) {
        var s = cssColorNamesRgb[a];
        var h = Math.pow(t[0] - s[0], 2) + Math.pow(t[1] - s[1], 2) + Math.pow(t[2] - s[2], 2);
        if (h < o) {
          o = h;
          e = a;
        }
      }
    }
    return e;
  };
  a.keyword.rgb = function (t) {
    return cssColorNamesRgb[t];
  };
  a.rgb.xyz = function (t) {
    var e = t[0] / 255;
    var n = t[1] / 255;
    var i = t[2] / 255;
    return [((e = e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92) * 0.4124 + (n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92) * 0.3576 + (i = i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92) * 0.1805) * 100, (e * 0.2126 + n * 0.7152 + i * 0.0722) * 100, (e * 0.0193 + n * 0.1192 + i * 0.9505) * 100];
  };
  a.rgb.lab = function (t) {
    var e = a.rgb.xyz(t);
    var n = e[0];
    var i = e[1];
    var r = e[2];
    n /= 95.047;
    i /= 100;
    r /= 108.883;
    n = n > 0.008856 ? Math.pow(n, 1 / 3) : n * 7.787 + 16 / 116;
    return [(i = i > 0.008856 ? Math.pow(i, 1 / 3) : i * 7.787 + 16 / 116) * 116 - 16, (n - i) * 500, (i - (r = r > 0.008856 ? Math.pow(r, 1 / 3) : r * 7.787 + 16 / 116)) * 200];
  };
  a.hsl.rgb = function (t) {
    var e;
    var n;
    var i;
    var r;
    var o;
    var a = t[0] / 360;
    var s = t[1] / 100;
    var h = t[2] / 100;
    if (s === 0) {
      return [o = h * 255, o, o];
    }
    n = h < 0.5 ? h * (1 + s) : h + s - h * s;
    e = h * 2 - n;
    r = [0, 0, 0];
    for (var l = 0; l < 3; l++) {
      if ((i = a + -(1 / 3 * (l - 1))) < 0) {
        i++;
      }
      if (i > 1) {
        i--;
      }
      o = i * 6 < 1 ? e + (n - e) * 6 * i : i * 2 < 1 ? n : i * 3 < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e;
      r[l] = o * 255;
    }
    return r;
  };
  a.hsl.hsv = function (t) {
    var e;
    var n = t[0];
    var i = t[1] / 100;
    var r = t[2] / 100;
    var o = i;
    var a = Math.max(r, 0.01);
    r *= 2;
    i *= r <= 1 ? r : 2 - r;
    o *= a <= 1 ? a : 2 - a;
    e = (r + i) / 2;
    return [n, (r === 0 ? o * 2 / (a + o) : i * 2 / (r + i)) * 100, e * 100];
  };
  a.hsv.rgb = function (t) {
    var e = t[0] / 60;
    var n = t[1] / 100;
    var i = t[2] / 100;
    var r = Math.floor(e) % 6;
    var o = e - Math.floor(e);
    var a = i * 255 * (1 - n);
    var s = i * 255 * (1 - n * o);
    var h = i * 255 * (1 - n * (1 - o));
    i *= 255;
    switch (r) {
      case 0:
        return [i, h, a];
      case 1:
        return [s, i, a];
      case 2:
        return [a, i, h];
      case 3:
        return [a, s, i];
      case 4:
        return [h, a, i];
      case 5:
        return [i, a, s];
    }
  };
  a.hsv.hsl = function (t) {
    var e;
    var n;
    var i;
    var r = t[0];
    var o = t[1] / 100;
    var a = t[2] / 100;
    var s = Math.max(a, 0.01);
    i = (2 - o) * a;
    e = (2 - o) * s;
    return [r, (n = (n = o * s / (e <= 1 ? e : 2 - e)) || 0) * 100, (i /= 2) * 100];
  };
  a.hwb.rgb = function (t) {
    var e;
    var n;
    var i;
    var r;
    var o;
    var a;
    var s;
    var h = t[0] / 360;
    var l = t[1] / 100;
    var u = t[2] / 100;
    var c = l + u;
    if (c > 1) {
      l /= c;
      u /= c;
    }
    e = Math.floor(h * 6);
    n = 1 - u;
    i = h * 6 - e;
    if ((e & 1) != 0) {
      i = 1 - i;
    }
    r = l + i * (n - l);
    switch (e) {
      default:
      case 6:
      case 0:
        o = n;
        a = r;
        s = l;
        break;
      case 1:
        o = r;
        a = n;
        s = l;
        break;
      case 2:
        o = l;
        a = n;
        s = r;
        break;
      case 3:
        o = l;
        a = r;
        s = n;
        break;
      case 4:
        o = r;
        a = l;
        s = n;
        break;
      case 5:
        o = n;
        a = l;
        s = r;
    }
    return [o * 255, a * 255, s * 255];
  };
  a.cmyk.rgb = function (t) {
    var e = t[0] / 100;
    var n = t[1] / 100;
    var i = t[2] / 100;
    var r = t[3] / 100;
    return [(1 - Math.min(1, e * (1 - r) + r)) * 255, (1 - Math.min(1, n * (1 - r) + r)) * 255, (1 - Math.min(1, i * (1 - r) + r)) * 255];
  };
  a.xyz.rgb = function (t) {
    var e;
    var n;
    var i;
    var r = t[0] / 100;
    var o = t[1] / 100;
    var a = t[2] / 100;
    e = r * 3.2406 + o * -1.5372 + a * -0.4986;
    n = r * -0.9689 + o * 1.8758 + a * 0.0415;
    i = r * 0.0557 + o * -0.204 + a * 1.057;
    e = e > 0.0031308 ? Math.pow(e, 1 / 2.4) * 1.055 - 0.055 : e * 12.92;
    n = n > 0.0031308 ? Math.pow(n, 1 / 2.4) * 1.055 - 0.055 : n * 12.92;
    i = i > 0.0031308 ? Math.pow(i, 1 / 2.4) * 1.055 - 0.055 : i * 12.92;
    return [(e = Math.min(Math.max(0, e), 1)) * 255, (n = Math.min(Math.max(0, n), 1)) * 255, (i = Math.min(Math.max(0, i), 1)) * 255];
  };
  a.xyz.lab = function (t) {
    var e = t[0];
    var n = t[1];
    var i = t[2];
    e /= 95.047;
    n /= 100;
    i /= 108.883;
    e = e > 0.008856 ? Math.pow(e, 1 / 3) : e * 7.787 + 16 / 116;
    return [(n = n > 0.008856 ? Math.pow(n, 1 / 3) : n * 7.787 + 16 / 116) * 116 - 16, (e - n) * 500, (n - (i = i > 0.008856 ? Math.pow(i, 1 / 3) : i * 7.787 + 16 / 116)) * 200];
  };
  a.lab.xyz = function (t) {
    var e;
    var n;
    var i;
    var r = t[0];
    var o = t[1];
    var a = t[2];
    e = o / 500 + (n = (r + 16) / 116);
    i = n - a / 200;
    var s = Math.pow(n, 3);
    var h = Math.pow(e, 3);
    var l = Math.pow(i, 3);
    n = (s > 0.008856 ? s : (n - 16 / 116) / 7.787) * 100;
    return [e = (h > 0.008856 ? h : (e - 16 / 116) / 7.787) * 95.047, n, i = (l > 0.008856 ? l : (i - 16 / 116) / 7.787) * 108.883];
  };
  a.lab.lch = function (t) {
    var e;
    var n = t[0];
    var i = t[1];
    var r = t[2];
    if ((e = Math.atan2(r, i) * 360 / 2 / Math.PI) < 0) {
      e += 360;
    }
    return [n, Math.sqrt(i * i + r * r), e];
  };
  a.lch.lab = function (t) {
    var e;
    var n = t[0];
    var i = t[1];
    return [n, i * Math.cos(e = t[2] / 360 * 2 * Math.PI), i * Math.sin(e)];
  };
  a.rgb.ansi16 = function (t) {
    var e = t[0];
    var n = t[1];
    var i = t[2];
    var r = 1 in arguments ? arguments[1] : a.rgb.hsv(t)[2];
    if ((r = Math.round(r / 50)) === 0) {
      return 30;
    }
    var o = 30 + (Math.round(i / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255));
    if (r === 2) {
      o += 60;
    }
    return o;
  };
  a.hsv.ansi16 = function (t) {
    return a.rgb.ansi16(a.hsv.rgb(t), t[2]);
  };
  a.rgb.ansi256 = function (t) {
    var e = t[0];
    var n = t[1];
    var i = t[2];
    if (e === n && n === i) {
      if (e < 8) {
        return 16;
      } else if (e > 248) {
        return 231;
      } else {
        return Math.round((e - 8) / 247 * 24) + 232;
      }
    } else {
      return 16 + Math.round(e / 255 * 5) * 36 + Math.round(n / 255 * 5) * 6 + Math.round(i / 255 * 5);
    }
  };
  a.ansi16.rgb = function (t) {
    var e = t % 10;
    if (e === 0 || e === 7) {
      if (t > 50) {
        e += 3.5;
      }
      return [e = e / 10.5 * 255, e, e];
    }
    var n = (~~(t > 50) + 1) * 0.5;
    return [(e & 1) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255];
  };
  a.ansi256.rgb = function (t) {
    if (t >= 232) {
      var e;
      var n = (t - 232) * 10 + 8;
      return [n, n, n];
    }
    return [Math.floor((t -= 16) / 36) / 5 * 255, Math.floor((e = t % 36) / 6) / 5 * 255, e % 6 / 5 * 255];
  };
  a.rgb.hex = function (t) {
    var e = (((Math.round(t[0]) & 255) << 16) + ((Math.round(t[1]) & 255) << 8) + (Math.round(t[2]) & 255)).toString(16).toUpperCase();
    return "000000".substring(e.length) + e;
  };
  a.hex.rgb = function (t) {
    var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!e) {
      return [0, 0, 0];
    }
    var n = e[0];
    if (e[0].length === 3) {
      n = n.split("").map(function (t) {
        return t + t;
      }).join("");
    }
    var i = parseInt(n, 16);
    return [i >> 16 & 255, i >> 8 & 255, i & 255];
  };
  a.rgb.hcg = function (t) {
    var e;
    var n;
    var i = t[0] / 255;
    var r = t[1] / 255;
    var o = t[2] / 255;
    var a = Math.max(Math.max(i, r), o);
    var s = Math.min(Math.min(i, r), o);
    var h = a - s;
    e = h < 1 ? s / (1 - h) : 0;
    return [(h <= 0 ? 0 : a === i ? (r - o) / h % 6 : a === r ? 2 + (o - i) / h : 4 + (i - r) / h + 4) / 6 % 1 * 360, h * 100, e * 100];
  };
  a.hsl.hcg = function (t) {
    var e = t[1] / 100;
    var n = t[2] / 100;
    var i = 1;
    var r = 0;
    if ((i = n < 0.5 ? e * 2 * n : e * 2 * (1 - n)) < 1) {
      r = (n - i * 0.5) / (1 - i);
    }
    return [t[0], i * 100, r * 100];
  };
  a.hsv.hcg = function (t) {
    var e = t[1] / 100;
    var n = t[2] / 100;
    var i = e * n;
    var r = 0;
    if (i < 1) {
      r = (n - i) / (1 - i);
    }
    return [t[0], i * 100, r * 100];
  };
  a.hcg.rgb = function (t) {
    var e = t[0] / 360;
    var n = t[1] / 100;
    var i = t[2] / 100;
    if (n === 0) {
      return [i * 255, i * 255, i * 255];
    }
    var r = [0, 0, 0];
    var o = e % 1 * 6;
    var a = o % 1;
    var s = 1 - a;
    var h = 0;
    switch (Math.floor(o)) {
      case 0:
        r[0] = 1;
        r[1] = a;
        r[2] = 0;
        break;
      case 1:
        r[0] = s;
        r[1] = 1;
        r[2] = 0;
        break;
      case 2:
        r[0] = 0;
        r[1] = 1;
        r[2] = a;
        break;
      case 3:
        r[0] = 0;
        r[1] = s;
        r[2] = 1;
        break;
      case 4:
        r[0] = a;
        r[1] = 0;
        r[2] = 1;
        break;
      default:
        r[0] = 1;
        r[1] = 0;
        r[2] = s;
    }
    h = (1 - n) * i;
    return [(n * r[0] + h) * 255, (n * r[1] + h) * 255, (n * r[2] + h) * 255];
  };
  a.hcg.hsv = function (t) {
    var e = t[1] / 100;
    var n = e + t[2] / 100 * (1 - e);
    var i = 0;
    if (n > 0) {
      i = e / n;
    }
    return [t[0], i * 100, n * 100];
  };
  a.hcg.hsl = function (t) {
    var e = t[1] / 100;
    var n = t[2] / 100 * (1 - e) + e * 0.5;
    var i = 0;
    if (n > 0 && n < 0.5) {
      i = e / (n * 2);
    } else if (n >= 0.5 && n < 1) {
      i = e / ((1 - n) * 2);
    }
    return [t[0], i * 100, n * 100];
  };
  a.hcg.hwb = function (t) {
    var e = t[1] / 100;
    var n = e + t[2] / 100 * (1 - e);
    return [t[0], (n - e) * 100, (1 - n) * 100];
  };
  a.hwb.hcg = function (t) {
    var e = t[1] / 100;
    var n = 1 - t[2] / 100;
    var i = n - e;
    var r = 0;
    if (i < 1) {
      r = (n - i) / (1 - i);
    }
    return [t[0], i * 100, r * 100];
  };
  a.apple.rgb = function (t) {
    return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255];
  };
  a.rgb.apple = function (t) {
    return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535];
  };
  a.gray.rgb = function (t) {
    return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255];
  };
  a.gray.hsl = a.gray.hsv = function (t) {
    return [0, 0, t[0]];
  };
  a.gray.hwb = function (t) {
    return [0, 100, t[0]];
  };
  a.gray.cmyk = function (t) {
    return [0, 0, 0, t[0]];
  };
  a.gray.lab = function (t) {
    return [t[0], 0, 0];
  };
  a.gray.hex = function (t) {
    var e = Math.round(t[0] / 100 * 255) & 255;
    var n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
    return "000000".substring(n.length) + n;
  };
  a.rgb.gray = function (t) {
    return [(t[0] + t[1] + t[2]) / 3 / 255 * 100];
  };
}