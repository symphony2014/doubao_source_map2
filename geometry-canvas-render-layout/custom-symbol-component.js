// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'CustomSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 186726
         */
module.exports = function (module, exports, require) {
  var i;
  var customGroupComponentBase = require("custom-group-component-base") /*id: 691760*/;
  var svgSymbolRenderer = require("svg-symbol-renderer") /*id: 330448*/;
  i = function (t, e) {
    return (i = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  };
  function a(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  var s = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    a(e, t);
    e.prototype.getObservedAttr = function () {
      return ["symbol", "x", "y", "width", "height"];
    };
    e.prototype.getDefaultAttr = function () {
      return {
        symbol: "none",
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    };
    e.prototype.render = function () {
      var t = this.attr;
      var e = t.symbol;
      var n = t.x;
      var i = t.y;
      var r = t.width;
      var a = t.height;
      return svgSymbolRenderer.createSymbolElement(e, n, i, r, a, {});
    };
    return e;
  }(customGroupComponentBase.CustomGroupComponent);
  exports.CustomSymbol = s;
}