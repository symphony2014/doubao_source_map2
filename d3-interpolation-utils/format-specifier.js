// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'FormatSpecifier'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 227229
         */
module.exports = function (module, exports, require) {
  var i = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function r(t) {
    var n;
    if (!(n = i.exec(t))) {
      throw Error("invalid format: " + t);
    }
    return new o({
      fill: n[1],
      align: n[2],
      sign: n[3],
      symbol: n[4],
      zero: n[5],
      width: n[6],
      comma: n[7],
      precision: n[8] && n[8].slice(1),
      trim: n[9],
      type: n[10]
    });
  }
  function o(t) {
    this.fill = t.fill === undefined ? " " : t.fill + "";
    this.align = t.align === undefined ? ">" : t.align + "";
    this.sign = t.sign === undefined ? "-" : t.sign + "";
    this.symbol = t.symbol === undefined ? "" : t.symbol + "";
    this.zero = !!t.zero;
    this.width = t.width === undefined ? undefined : +t.width;
    this.comma = !!t.comma;
    this.precision = t.precision === undefined ? undefined : +t.precision;
    this.trim = !!t.trim;
    this.type = t.type === undefined ? "" : t.type + "";
  }
  r.prototype = o.prototype;
  o.prototype.toString = function () {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };
  require.d(exports, {
    FormatSpecifier: function () {
      return r;
    }
  });
}