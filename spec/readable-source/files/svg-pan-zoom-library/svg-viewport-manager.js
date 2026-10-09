// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'svgViewportUtils'
// - Resolved require(378364) to 'svg-viewport-utils'
// - Renamed variable 'i' to 'svgDomUtils'
// - Resolved require(856038) to 'svg-dom-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43923.de8d5f4c.js
         * chunkId: 43923
         * moduleId: 448562
         */
module.exports = function (module, exports, require) {
  var svgViewportUtils = require("svg-viewport-utils") /*id: 378364*/;
  var svgDomUtils = require("svg-dom-utils") /*id: 856038*/;
  function s(t, e) {
    this.init(t, e);
  }
  s.prototype.init = function (t, e) {
    this.viewport = t;
    this.options = e;
    this.originalState = {
      zoom: 1,
      x: 0,
      y: 0
    };
    this.activeState = {
      zoom: 1,
      x: 0,
      y: 0
    };
    this.updateCTMCached = svgDomUtils.proxy(this.updateCTM, this);
    this.requestAnimationFrame = svgDomUtils.createRequestAnimationFrame(this.options.refreshRate);
    this.viewBox = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    this.cacheViewBox();
    var o = this.processCTM();
    this.setCTM(o);
    this.updateCTM();
  };
  s.prototype.cacheViewBox = function () {
    var t = this.options.svg.getAttribute("viewBox");
    if (t) {
      var e = t.split(/[\s\,]/).filter(function (t) {
        return t;
      }).map(parseFloat);
      this.viewBox.x = e[0];
      this.viewBox.y = e[1];
      this.viewBox.width = e[2];
      this.viewBox.height = e[3];
      var o = Math.min(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height);
      this.activeState.zoom = o;
      this.activeState.x = (this.options.width - this.viewBox.width * o) / 2;
      this.activeState.y = (this.options.height - this.viewBox.height * o) / 2;
      this.updateCTMOnNextFrame();
      this.options.svg.removeAttribute("viewBox");
    } else {
      this.simpleViewBoxCache();
    }
  };
  s.prototype.simpleViewBoxCache = function () {
    var t = this.viewport.getBBox();
    this.viewBox.x = t.x;
    this.viewBox.y = t.y;
    this.viewBox.width = t.width;
    this.viewBox.height = t.height;
  };
  s.prototype.getViewBox = function () {
    return svgDomUtils.extend({}, this.viewBox);
  };
  s.prototype.processCTM = function () {
    var t;
    var e = this.getCTM();
    if (this.options.fit || this.options.contain) {
      t = this.options.fit ? Math.min(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height) : Math.max(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height);
      e.a = t;
      e.d = t;
      e.e = -this.viewBox.x * t;
      e.f = -this.viewBox.y * t;
    }
    if (this.options.center) {
      var o = (this.options.width - (this.viewBox.width + this.viewBox.x * 2) * e.a) * 0.5;
      var n = (this.options.height - (this.viewBox.height + this.viewBox.y * 2) * e.a) * 0.5;
      e.e = o;
      e.f = n;
    }
    this.originalState.zoom = e.a;
    this.originalState.x = e.e;
    this.originalState.y = e.f;
    return e;
  };
  s.prototype.getOriginalState = function () {
    return svgDomUtils.extend({}, this.originalState);
  };
  s.prototype.getState = function () {
    return svgDomUtils.extend({}, this.activeState);
  };
  s.prototype.getZoom = function () {
    return this.activeState.zoom;
  };
  s.prototype.getRelativeZoom = function () {
    return this.activeState.zoom / this.originalState.zoom;
  };
  s.prototype.computeRelativeZoom = function (t) {
    return t / this.originalState.zoom;
  };
  s.prototype.getPan = function () {
    return {
      x: this.activeState.x,
      y: this.activeState.y
    };
  };
  s.prototype.getCTM = function () {
    var t = this.options.svg.createSVGMatrix();
    t.a = this.activeState.zoom;
    t.b = 0;
    t.c = 0;
    t.d = this.activeState.zoom;
    t.e = this.activeState.x;
    t.f = this.activeState.y;
    return t;
  };
  s.prototype.setCTM = function (t) {
    var e = this.isZoomDifferent(t);
    var o = this.isPanDifferent(t);
    if (e || o) {
      if (e) {
        if (this.options.beforeZoom(this.getRelativeZoom(), this.computeRelativeZoom(t.a)) === false) {
          t.a = t.d = this.activeState.zoom;
          e = false;
        } else {
          this.updateCache(t);
          this.options.onZoom(this.getRelativeZoom());
        }
      }
      if (o) {
        var n = this.options.beforePan(this.getPan(), {
          x: t.e,
          y: t.f
        });
        var s = false;
        var r = false;
        if (n === false) {
          t.e = this.getPan().x;
          t.f = this.getPan().y;
          s = r = true;
        } else if (svgDomUtils.isObject(n)) {
          if (n.x === false) {
            t.e = this.getPan().x;
            s = true;
          } else if (svgDomUtils.isNumber(n.x)) {
            t.e = n.x;
          }
          if (n.y === false) {
            t.f = this.getPan().y;
            r = true;
          } else if (svgDomUtils.isNumber(n.y)) {
            t.f = n.y;
          }
        }
        if (s && r || !this.isPanDifferent(t)) {
          o = false;
        } else {
          this.updateCache(t);
          this.options.onPan(this.getPan());
        }
      }
      if (e || o) {
        this.updateCTMOnNextFrame();
      }
    }
  };
  s.prototype.isZoomDifferent = function (t) {
    return this.activeState.zoom !== t.a;
  };
  s.prototype.isPanDifferent = function (t) {
    return this.activeState.x !== t.e || this.activeState.y !== t.f;
  };
  s.prototype.updateCache = function (t) {
    this.activeState.zoom = t.a;
    this.activeState.x = t.e;
    this.activeState.y = t.f;
  };
  s.prototype.pendingUpdate = false;
  s.prototype.updateCTMOnNextFrame = function () {
    if (!this.pendingUpdate) {
      this.pendingUpdate = true;
      this.requestAnimationFrame.call(window, this.updateCTMCached);
    }
  };
  s.prototype.updateCTM = function () {
    var t = this.getCTM();
    svgViewportUtils.setCTM(this.viewport, t, this.defs);
    this.pendingUpdate = false;
    if (this.options.onUpdatedCTM) {
      this.options.onUpdatedCTM(t);
    }
  };
  module.exports = function (t, e) {
    return new s(t, e);
  };
}