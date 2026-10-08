// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(342117) to 'message-format-util'
// - Renamed variable 'o' to 'colorPaletteMap'
// - Resolved require(209547) to 'color-palette-map'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 734308
         */
module.exports = function (module, exports, require) {
  var r = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var T = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.ColorModel = undefined;
  var n = T(require("message-format-util") /*id: 342117*/);
  var colorPaletteMap = require("color-palette-map") /*id: 209547*/;
  var i = new Map();
  var a = function () {
    function t() {
      this.userColors = new Map();
    }
    t.prototype.normalizeColor = function (t, e) {
      if (!t || t === "named") {
        return e;
      }
      if (i.has(t)) {
        return i.get(t)(e);
      }
      throw new n.default("UndefinedColorModel", "Color model '%1' not defined", t);
    };
    t.prototype.getColor = function (t, e) {
      if (t && t !== "named") {
        return this.normalizeColor(t, e);
      } else {
        return this.getColorByName(e);
      }
    };
    t.prototype.getColorByName = function (t) {
      if (this.userColors.has(t)) {
        return this.userColors.get(t);
      } else if (colorPaletteMap.COLORS.has(t)) {
        return colorPaletteMap.COLORS.get(t);
      } else {
        return t;
      }
    };
    t.prototype.defineColor = function (t, e, Q) {
      var r = this.normalizeColor(t, Q);
      this.userColors.set(e, r);
    };
    return t;
  }();
  exports.ColorModel = a;
  i.set("rgb", function (t) {
    var e;
    var Q;
    var T = t.trim().split(/\s*,\s*/);
    var o = "#";
    if (T.length !== 3) {
      throw new n.default("ModelArg1", "Color values for the %1 model require 3 numbers", "rgb");
    }
    try {
      var i = r(T);
      var a = i.next();
      for (; !a.done; a = i.next()) {
        var u = a.value;
        if (!u.match(/^(\d+(\.\d*)?|\.\d+)$/)) {
          throw new n.default("InvalidDecimalNumber", "Invalid decimal number");
        }
        var s = parseFloat(u);
        if (s < 0 || s > 1) {
          throw new n.default("ModelArg2", "Color values for the %1 model must be between %2 and %3", "rgb", "0", "1");
        }
        var l = Math.floor(s * 255).toString(16);
        if (l.length < 2) {
          l = "0" + l;
        }
        o += l;
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (a && !a.done && (Q = i.return)) {
          Q.call(i);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    return o;
  });
  i.set("RGB", function (t) {
    var e;
    var Q;
    var T = t.trim().split(/\s*,\s*/);
    var o = "#";
    if (T.length !== 3) {
      throw new n.default("ModelArg1", "Color values for the %1 model require 3 numbers", "RGB");
    }
    try {
      var i = r(T);
      var a = i.next();
      for (; !a.done; a = i.next()) {
        var u = a.value;
        if (!u.match(/^\d+$/)) {
          throw new n.default("InvalidNumber", "Invalid number");
        }
        var s = parseInt(u);
        if (s > 255) {
          throw new n.default("ModelArg2", "Color values for the %1 model must be between %2 and %3", "RGB", "0", "255");
        }
        var l = s.toString(16);
        if (l.length < 2) {
          l = "0" + l;
        }
        o += l;
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (a && !a.done && (Q = i.return)) {
          Q.call(i);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    return o;
  });
  i.set("gray", function (t) {
    if (!t.match(/^\s*(\d+(\.\d*)?|\.\d+)\s*$/)) {
      throw new n.default("InvalidDecimalNumber", "Invalid decimal number");
    }
    var e = parseFloat(t);
    if (e < 0 || e > 1) {
      throw new n.default("ModelArg2", "Color values for the %1 model must be between %2 and %3", "gray", "0", "1");
    }
    var Q = Math.floor(e * 255).toString(16);
    if (Q.length < 2) {
      Q = "0" + Q;
    }
    return `#${Q}${Q}${Q}`;
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}