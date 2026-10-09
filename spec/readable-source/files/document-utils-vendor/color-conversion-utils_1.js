// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'cssColorNamesMap'
// - Resolved require(425483) to 'css-color-names-map'
// - Renamed variable 'r' to 'arrayFlattenUtil_1'
// - Resolved require(478675) to 'array-flatten-util_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 749719
         */
module.exports = function (module, exports, require) {
  var cssColorNamesMap = require("css-color-names-map") /*id: 425483*/;
  var arrayFlattenUtil_1 = require("array-flatten-util_1") /*id: 478675*/;
  var o = Object.hasOwnProperty;
  var a = Object.create(null);
  for (var s in cssColorNamesMap) {
    if (o.call(cssColorNamesMap, s)) {
      a[cssColorNamesMap[s]] = s;
    }
  }
  var h = module.exports = {
    to: {},
    get: {}
  };
  function l(t, e, n) {
    return Math.min(Math.max(e, t), n);
  }
  function u(t) {
    var e = Math.round(t).toString(16).toUpperCase();
    if (e.length < 2) {
      return "0" + e;
    } else {
      return e;
    }
  }
  h.get = function (t) {
    var e;
    var n;
    switch (t.substring(0, 3).toLowerCase()) {
      case "hsl":
        e = h.get.hsl(t);
        n = "hsl";
        break;
      case "hwb":
        e = h.get.hwb(t);
        n = "hwb";
        break;
      default:
        e = h.get.rgb(t);
        n = "rgb";
    }
    if (e) {
      return {
        model: n,
        value: e
      };
    } else {
      return null;
    }
  };
  h.get.rgb = function (t) {
    if (!t) {
      return null;
    }
    var e;
    var n;
    var r;
    var a = [0, 0, 0, 1];
    if (e = t.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
      n = 0;
      r = e[2];
      e = e[1];
      for (; n < 3; n++) {
        var s = n * 2;
        a[n] = parseInt(e.slice(s, s + 2), 16);
      }
      if (r) {
        a[3] = parseInt(r, 16) / 255;
      }
    } else if (e = t.match(/^#([a-f0-9]{3,4})$/i)) {
      n = 0;
      r = (e = e[1])[3];
      for (; n < 3; n++) {
        a[n] = parseInt(e[n] + e[n], 16);
      }
      if (r) {
        a[3] = parseInt(r + r, 16) / 255;
      }
    } else if (e = t.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
      for (n = 0; n < 3; n++) {
        a[n] = parseInt(e[n + 1], 0);
      }
      if (e[4]) {
        if (e[5]) {
          a[3] = parseFloat(e[4]) * 0.01;
        } else {
          a[3] = parseFloat(e[4]);
        }
      }
    } else if (e = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
      for (n = 0; n < 3; n++) {
        a[n] = Math.round(parseFloat(e[n + 1]) * 2.55);
      }
      if (e[4]) {
        if (e[5]) {
          a[3] = parseFloat(e[4]) * 0.01;
        } else {
          a[3] = parseFloat(e[4]);
        }
      }
    } else if (!(e = t.match(/^(\w+)$/))) {
      return null;
    } else if (e[1] === "transparent") {
      return [0, 0, 0, 0];
    } else if (o.call(cssColorNamesMap, e[1])) {
      (a = cssColorNamesMap[e[1]])[3] = 1;
      return a;
    } else {
      return null;
    }
    for (n = 0; n < 3; n++) {
      a[n] = l(a[n], 0, 255);
    }
    a[3] = l(a[3], 0, 1);
    return a;
  };
  h.get.hsl = function (t) {
    if (!t) {
      return null;
    }
    var e = t.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
    if (e) {
      var n = parseFloat(e[4]);
      return [(parseFloat(e[1]) % 360 + 360) % 360, l(parseFloat(e[2]), 0, 100), l(parseFloat(e[3]), 0, 100), l(isNaN(n) ? 1 : n, 0, 1)];
    }
    return null;
  };
  h.get.hwb = function (t) {
    if (!t) {
      return null;
    }
    var e = t.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
    if (e) {
      var n = parseFloat(e[4]);
      return [(parseFloat(e[1]) % 360 + 360) % 360, l(parseFloat(e[2]), 0, 100), l(parseFloat(e[3]), 0, 100), l(isNaN(n) ? 1 : n, 0, 1)];
    }
    return null;
  };
  h.to.hex = function () {
    var t = arrayFlattenUtil_1(arguments);
    return "#" + u(t[0]) + u(t[1]) + u(t[2]) + (t[3] < 1 ? u(Math.round(t[3] * 255)) : "");
  };
  h.to.rgb = function () {
    var t = arrayFlattenUtil_1(arguments);
    if (t.length < 4 || t[3] === 1) {
      return "rgb(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ")";
    } else {
      return "rgba(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ", " + t[3] + ")";
    }
  };
  h.to.rgb.percent = function () {
    var t = arrayFlattenUtil_1(arguments);
    var e = Math.round(t[0] / 255 * 100);
    var n = Math.round(t[1] / 255 * 100);
    var i = Math.round(t[2] / 255 * 100);
    if (t.length < 4 || t[3] === 1) {
      return "rgb(" + e + "%, " + n + "%, " + i + "%)";
    } else {
      return "rgba(" + e + "%, " + n + "%, " + i + "%, " + t[3] + ")";
    }
  };
  h.to.hsl = function () {
    var t = arrayFlattenUtil_1(arguments);
    if (t.length < 4 || t[3] === 1) {
      return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
    } else {
      return "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + t[3] + ")";
    }
  };
  h.to.hwb = function () {
    var t = arrayFlattenUtil_1(arguments);
    var e = "";
    if (t.length >= 4 && t[3] !== 1) {
      e = ", " + t[3];
    }
    return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + e + ")";
  };
  h.to.keyword = function (t) {
    return a[t.slice(0, 3)];
  };
}