// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'colorModel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 346102
         */
module.exports = function (module, exports, require) {
  var colorConversionUtils = require("color-conversion-utils") /*id: 965962*/;
  var colorHexEnumMap = require("color-hex-enum-map") /*id: 486822*/;
  var o = class {
    constructor() {
      this.type = colorHexEnumMap.colorFormats.ALL;
    }
    get() {
      return this.type;
    }
    set(t) {
      if (this.type && this.type !== t) {
        throw Error("Cannot change both RGB and HSL channels at the same time");
      }
      this.type = t;
    }
    reset() {
      this.type = colorHexEnumMap.colorFormats.ALL;
    }
    is(t) {
      return this.type === t;
    }
  };
  var l = new class {
    constructor(t, e) {
      this.color = e;
      this.changed = false;
      this.data = t;
      this.type = new o();
    }
    set(t, e) {
      this.color = e;
      this.changed = false;
      this.data = t;
      this.type.type = colorHexEnumMap.colorFormats.ALL;
      return this;
    }
    _ensureHSL() {
      let t = this.data;
      let {
        h: e,
        s: r,
        l: a
      } = t;
      if (e === undefined) {
        t.h = colorConversionUtils.colorUtils.channel.rgb2hsl(t, "h");
      }
      if (r === undefined) {
        t.s = colorConversionUtils.colorUtils.channel.rgb2hsl(t, "s");
      }
      if (a === undefined) {
        t.l = colorConversionUtils.colorUtils.channel.rgb2hsl(t, "l");
      }
    }
    _ensureRGB() {
      let t = this.data;
      let {
        r: e,
        g: r,
        b: a
      } = t;
      if (e === undefined) {
        t.r = colorConversionUtils.colorUtils.channel.hsl2rgb(t, "r");
      }
      if (r === undefined) {
        t.g = colorConversionUtils.colorUtils.channel.hsl2rgb(t, "g");
      }
      if (a === undefined) {
        t.b = colorConversionUtils.colorUtils.channel.hsl2rgb(t, "b");
      }
    }
    get r() {
      let t = this.data;
      let e = t.r;
      if (this.type.is(colorHexEnumMap.colorFormats.HSL) || e === undefined) {
        this._ensureHSL();
        return colorConversionUtils.colorUtils.channel.hsl2rgb(t, "r");
      } else {
        return e;
      }
    }
    get g() {
      let t = this.data;
      let e = t.g;
      if (this.type.is(colorHexEnumMap.colorFormats.HSL) || e === undefined) {
        this._ensureHSL();
        return colorConversionUtils.colorUtils.channel.hsl2rgb(t, "g");
      } else {
        return e;
      }
    }
    get b() {
      let t = this.data;
      let e = t.b;
      if (this.type.is(colorHexEnumMap.colorFormats.HSL) || e === undefined) {
        this._ensureHSL();
        return colorConversionUtils.colorUtils.channel.hsl2rgb(t, "b");
      } else {
        return e;
      }
    }
    get h() {
      let t = this.data;
      let e = t.h;
      if (this.type.is(colorHexEnumMap.colorFormats.RGB) || e === undefined) {
        this._ensureRGB();
        return colorConversionUtils.colorUtils.channel.rgb2hsl(t, "h");
      } else {
        return e;
      }
    }
    get s() {
      let t = this.data;
      let e = t.s;
      if (this.type.is(colorHexEnumMap.colorFormats.RGB) || e === undefined) {
        this._ensureRGB();
        return colorConversionUtils.colorUtils.channel.rgb2hsl(t, "s");
      } else {
        return e;
      }
    }
    get l() {
      let t = this.data;
      let e = t.l;
      if (this.type.is(colorHexEnumMap.colorFormats.RGB) || e === undefined) {
        this._ensureRGB();
        return colorConversionUtils.colorUtils.channel.rgb2hsl(t, "l");
      } else {
        return e;
      }
    }
    get a() {
      return this.data.a;
    }
    set r(t) {
      this.type.set(colorHexEnumMap.colorFormats.RGB);
      this.changed = true;
      this.data.r = t;
    }
    set g(t) {
      this.type.set(colorHexEnumMap.colorFormats.RGB);
      this.changed = true;
      this.data.g = t;
    }
    set b(t) {
      this.type.set(colorHexEnumMap.colorFormats.RGB);
      this.changed = true;
      this.data.b = t;
    }
    set h(t) {
      this.type.set(colorHexEnumMap.colorFormats.HSL);
      this.changed = true;
      this.data.h = t;
    }
    set s(t) {
      this.type.set(colorHexEnumMap.colorFormats.HSL);
      this.changed = true;
      this.data.s = t;
    }
    set l(t) {
      this.type.set(colorHexEnumMap.colorFormats.HSL);
      this.changed = true;
      this.data.l = t;
    }
    set a(t) {
      this.changed = true;
      this.data.a = t;
    }
  }({
    r: 0,
    g: 0,
    b: 0,
    a: 0
  }, "transparent");
  require.d(exports, {
    colorModel: function () {
      return l;
    }
  });
}