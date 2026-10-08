// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'CustomGroupComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 691760
         */
module.exports = function (module, exports, require) {
  var i;
  var svgGroupElement = require("svg-group-element") /*id: 249968*/;
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
  function o(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  var a = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.$$CustomType = true;
      return e;
    }
    o(e, t);
    Object.defineProperty(e.prototype, "isGroup", {
      get: function () {
        return true;
      },
      enumerable: true,
      configurable: true
    });
    e.prototype.skipUpdate = function () {
      this._updated = true;
    };
    e.prototype.forceUpdate = function () {
      this.update();
    };
    e.prototype.getObservedAttr = function () {
      return [];
    };
    e.prototype.created = function () {
      if (!this._updated) {
        this.update();
      }
    };
    e.prototype.shouldUpdate = function () {
      return !this._updated;
    };
    e.prototype.update = function () {
      if (this.shouldUpdate()) {
        var t = this.render();
        this.clear();
        this.addAll(Array.isArray(t) ? t : [t].filter(function (t) {
          return t;
        }));
      }
      this._updated = true;
    };
    e.prototype.onAttrChange = function (e, n, i) {
      t.prototype.onAttrChange.call(this, e, n, i);
      if (this.getObservedAttr().indexOf(e) !== -1) {
        this._updated = false;
      }
    };
    e.prototype.render = function () {
      return null;
    };
    return e;
  }(svgGroupElement.SvgGroupElement);
  exports.CustomGroupComponent = a;
}