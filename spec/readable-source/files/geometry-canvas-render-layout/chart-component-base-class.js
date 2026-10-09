// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ChartComponentBase'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 94957
         */
module.exports = function (module, exports, require) {
  var refValueWrapper = require("ref-value-wrapper") /*id: 368437*/;
  var svgGroupElement = require("svg-group-element") /*id: 249968*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var styleExtractionUtils = require("style-extraction-utils") /*id: 80675*/;
  function u() {
    return (u = Object.assign || function (t) {
      var e;
      var n = 1;
      var i = arguments.length;
      for (; n < i; n++) {
        for (var r in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            t[r] = e[r];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  var c = 0;
  var p = function () {
    function t() {
      this.disposed = false;
      this.groupRef = refValueWrapper.refWrapper();
      this._eventListeners = {};
      c += 1;
      this.id = c.toString();
    }
    Object.defineProperty(t.prototype, "renderObj", {
      get: function () {
        return this.groupRef.current;
      },
      enumerable: true,
      configurable: true
    });
    t.prevProcessOption = function (t) {};
    t.prototype.getInitialState = function () {
      return null;
    };
    t.prototype.getKey = function (t) {
      return this.type + "-" + this.id + "-" + t;
    };
    t.prototype.getOption = function () {
      return this.option;
    };
    t.prototype.getThemeOption = function (t) {
      if (this.chart) {
        return objectPathGetDefault.getObjectPathDefault(this.chart.getTheme(), this.type);
      } else {
        return null;
      }
    };
    t.prototype.setOption = function (t) {
      this.option = throttledDeepCloneUtil.throttledDeepClone(this.option, t);
    };
    t.prototype.getState = function () {
      return this.state;
    };
    t.prototype.setState = function (t) {
      this.state = safePropertyAssignUtil.safePropertyAssign(this.state, t);
    };
    t.prototype.getTextStyle = function (t) {
      var e = styleExtractionUtils.getTextStyle(this.chart.getOption().textStyle);
      var n = styleExtractionUtils.getTextStyle(t);
      if (this.chart.getOption().transition === false) {
        n.transitionProperty = "none";
      }
      return u(u({}, e), n);
    };
    t.prototype.getLineStyle = function (t) {
      var e = styleExtractionUtils.getStrokeStyle(t);
      if (this.chart.getOption().transition === false) {
        e.transitionProperty = "none";
      }
      return e;
    };
    t.prototype.getShapeStyle = function (t) {
      var e = styleExtractionUtils.getFillStyle(t);
      if (this.chart.getOption().transition === false) {
        e.transitionProperty = "none";
      }
      return e;
    };
    t.prototype.handleUIEvent = function (t, e, n) {
      var i = e + ":" + t.type;
      var r = u(u({}, n), {
        type: i,
        mouse: t
      });
      this.chart.dispatchAction(r);
    };
    t.prototype.init = function () {};
    t.prototype.beforeRender = function () {};
    t.prototype.render = function () {
      return new svgGroupElement.SvgGroupElement({
        key: this.id
      });
    };
    t.prototype.afterRender = function () {};
    t.prototype.update = function () {
      var t = [];
      var e = 0;
      for (; e < arguments.length; e++) {
        t[e] = arguments[e];
      }
    };
    t.prototype.updated = function () {};
    t.prototype.beforeDestroy = function () {};
    t.prototype.destroy = function () {
      this.beforeDestroy();
      this.removeAllEvents();
      this.groupRef.current = null;
      this.disposed = true;
    };
    t.prototype.getRenderObj = function () {
      return this.groupRef.current;
    };
    t.prototype.removeAllEvents = function () {
      var t = this;
      getOwnKeys.getOwnKeys(this._eventListeners).forEach(function (e) {
        return t.chart.off(e, t._eventListeners[e]);
      });
      this._eventListeners = {};
    };
    t.prototype.registerEvent = function (t, e) {
      if (!this._eventListeners[t]) {
        this._eventListeners[t] = e;
        this.chart.on(t, e);
      }
    };
    return t;
  }();
  exports.ChartComponentBase = p;
}