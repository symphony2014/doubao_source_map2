// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'wheelEventHandler'
// - Resolved require(354533) to 'wheel-event-handler'
// - Renamed variable 'i' to 'svgPanZoomControls'
// - Resolved require(250769) to 'svg-pan-zoom-controls'
// - Renamed variable 's' to 'svgDomUtils'
// - Resolved require(856038) to 'svg-dom-utils'
// - Renamed variable 'r' to 'svgViewportUtils'
// - Resolved require(378364) to 'svg-viewport-utils'
// - Renamed variable 'a' to 'svgViewportManager'
// - Resolved require(448562) to 'svg-viewport-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43923.de8d5f4c.js
         * chunkId: 43923
         * moduleId: 217059
         */
module.exports = function (module, exports, require) {
  var wheelEventHandler = require("wheel-event-handler") /*id: 354533*/;
  var svgPanZoomControls = require("svg-pan-zoom-controls") /*id: 250769*/;
  var svgDomUtils = require("svg-dom-utils") /*id: 856038*/;
  var svgViewportUtils = require("svg-viewport-utils") /*id: 378364*/;
  var svgViewportManager = require("svg-viewport-manager") /*id: 448562*/;
  function l(t, e) {
    this.init(t, e);
  }
  var h = {
    viewportSelector: ".svg-pan-zoom_viewport",
    panEnabled: true,
    controlIconsEnabled: false,
    zoomEnabled: true,
    dblClickZoomEnabled: true,
    mouseWheelZoomEnabled: true,
    preventMouseEventsDefault: true,
    zoomScaleSensitivity: 0.1,
    minZoom: 0.5,
    maxZoom: 10,
    fit: true,
    contain: false,
    center: true,
    refreshRate: "auto",
    beforeZoom: null,
    onZoom: null,
    beforePan: null,
    onPan: null,
    customEventsHandler: null,
    eventsListenerElement: null,
    onUpdatedCTM: null
  };
  var u = {
    passive: true
  };
  l.prototype.init = function (t, e) {
    var o = this;
    this.svg = t;
    this.defs = t.querySelector("defs");
    svgViewportUtils.setupSvgAttributes(this.svg);
    this.options = svgDomUtils.extend(svgDomUtils.extend({}, h), e);
    this.state = "none";
    var n = svgViewportUtils.getBoundingClientRectNormalized(t);
    this.width = n.width;
    this.height = n.height;
    this.viewport = svgViewportManager(svgViewportUtils.getOrCreateViewport(this.svg, this.options.viewportSelector), {
      svg: this.svg,
      width: this.width,
      height: this.height,
      fit: this.options.fit,
      contain: this.options.contain,
      center: this.options.center,
      refreshRate: this.options.refreshRate,
      beforeZoom: function (t, e) {
        if (o.viewport && o.options.beforeZoom) {
          return o.options.beforeZoom(t, e);
        }
      },
      onZoom: function (t) {
        if (o.viewport && o.options.onZoom) {
          return o.options.onZoom(t);
        }
      },
      beforePan: function (t, e) {
        if (o.viewport && o.options.beforePan) {
          return o.options.beforePan(t, e);
        }
      },
      onPan: function (t) {
        if (o.viewport && o.options.onPan) {
          return o.options.onPan(t);
        }
      },
      onUpdatedCTM: function (t) {
        if (o.viewport && o.options.onUpdatedCTM) {
          return o.options.onUpdatedCTM(t);
        }
      }
    });
    var l = this.getPublicInstance();
    l.setBeforeZoom(this.options.beforeZoom);
    l.setOnZoom(this.options.onZoom);
    l.setBeforePan(this.options.beforePan);
    l.setOnPan(this.options.onPan);
    l.setOnUpdatedCTM(this.options.onUpdatedCTM);
    if (this.options.controlIconsEnabled) {
      svgPanZoomControls.enable(this);
    }
    this.lastMouseWheelEventTime = Date.now();
    this.setupHandlers();
  };
  l.prototype.setupHandlers = function () {
    var t = this;
    var e = null;
    this.eventListeners = {
      mousedown: function (o) {
        var n = t.handleMouseDown(o, e);
        e = o;
        return n;
      },
      touchstart: function (o) {
        var n = t.handleMouseDown(o, e);
        e = o;
        return n;
      },
      mouseup: function (e) {
        return t.handleMouseUp(e);
      },
      touchend: function (e) {
        return t.handleMouseUp(e);
      },
      mousemove: function (e) {
        return t.handleMouseMove(e);
      },
      touchmove: function (e) {
        return t.handleMouseMove(e);
      },
      mouseleave: function (e) {
        return t.handleMouseUp(e);
      },
      touchleave: function (e) {
        return t.handleMouseUp(e);
      },
      touchcancel: function (e) {
        return t.handleMouseUp(e);
      }
    };
    if (this.options.customEventsHandler != null) {
      this.options.customEventsHandler.init({
        svgElement: this.svg,
        eventsListenerElement: this.options.eventsListenerElement,
        instance: this.getPublicInstance()
      });
      var o = this.options.customEventsHandler.haltEventListeners;
      if (o && o.length) {
        for (var n = o.length - 1; n >= 0; n--) {
          if (this.eventListeners.hasOwnProperty(o[n])) {
            delete this.eventListeners[o[n]];
          }
        }
      }
    }
    for (var i in this.eventListeners) {
      (this.options.eventsListenerElement || this.svg).addEventListener(i, this.eventListeners[i], !this.options.preventMouseEventsDefault && u);
    }
    if (this.options.mouseWheelZoomEnabled) {
      this.options.mouseWheelZoomEnabled = false;
      this.enableMouseWheelZoom();
    }
  };
  l.prototype.enableMouseWheelZoom = function () {
    if (!this.options.mouseWheelZoomEnabled) {
      var t = this;
      this.wheelListener = function (e) {
        return t.handleMouseWheel(e);
      };
      var e = !this.options.preventMouseEventsDefault;
      wheelEventHandler.on(this.options.eventsListenerElement || this.svg, this.wheelListener, e);
      this.options.mouseWheelZoomEnabled = true;
    }
  };
  l.prototype.disableMouseWheelZoom = function () {
    if (this.options.mouseWheelZoomEnabled) {
      var t = !this.options.preventMouseEventsDefault;
      wheelEventHandler.off(this.options.eventsListenerElement || this.svg, this.wheelListener, t);
      this.options.mouseWheelZoomEnabled = false;
    }
  };
  l.prototype.handleMouseWheel = function (t) {
    if (this.options.zoomEnabled && this.state === "none") {
      if (this.options.preventMouseEventsDefault) {
        if (t.preventDefault) {
          t.preventDefault();
        } else {
          t.returnValue = false;
        }
      }
      var e = t.deltaY || 1;
      var o = 3 + Math.max(0, 30 - (Date.now() - this.lastMouseWheelEventTime));
      this.lastMouseWheelEventTime = Date.now();
      if ("deltaMode" in t && t.deltaMode === 0 && t.wheelDelta) {
        e = t.deltaY === 0 ? 0 : Math.abs(t.wheelDelta) / t.deltaY;
      }
      e = e > -0.3 && e < 0.3 ? e : (e > 0 ? 1 : -1) * Math.log(Math.abs(e) + 10) / o;
      var n = this.svg.getScreenCTM().inverse();
      var i = svgViewportUtils.getEventPoint(t, this.svg).matrixTransform(n);
      var s = Math.pow(1 + this.options.zoomScaleSensitivity, e * -1);
      this.zoomAtPoint(s, i);
    }
  };
  l.prototype.zoomAtPoint = function (t, e, o) {
    var n = this.viewport.getOriginalState();
    if (o) {
      t = Math.max(this.options.minZoom * n.zoom, Math.min(this.options.maxZoom * n.zoom, t)) / this.getZoom();
    } else if (this.getZoom() * t < this.options.minZoom * n.zoom) {
      t = this.options.minZoom * n.zoom / this.getZoom();
    } else if (this.getZoom() * t > this.options.maxZoom * n.zoom) {
      t = this.options.maxZoom * n.zoom / this.getZoom();
    }
    var i = this.viewport.getCTM();
    var s = e.matrixTransform(i.inverse());
    var r = this.svg.createSVGMatrix().translate(s.x, s.y).scale(t).translate(-s.x, -s.y);
    var a = i.multiply(r);
    if (a.a !== i.a) {
      this.viewport.setCTM(a);
    }
  };
  l.prototype.zoom = function (t, e) {
    this.zoomAtPoint(t, svgViewportUtils.getSvgCenterPoint(this.svg, this.width, this.height), e);
  };
  l.prototype.publicZoom = function (t, e) {
    if (e) {
      t = this.computeFromRelativeZoom(t);
    }
    this.zoom(t, e);
  };
  l.prototype.publicZoomAtPoint = function (t, e, o) {
    if (o) {
      t = this.computeFromRelativeZoom(t);
    }
    if (svgDomUtils.getType(e) !== "SVGPoint") {
      if ("x" in e && "y" in e) {
        e = svgViewportUtils.createSVGPoint(this.svg, e.x, e.y);
      } else {
        throw Error("Given point is invalid");
      }
    }
    this.zoomAtPoint(t, e, o);
  };
  l.prototype.getZoom = function () {
    return this.viewport.getZoom();
  };
  l.prototype.getRelativeZoom = function () {
    return this.viewport.getRelativeZoom();
  };
  l.prototype.computeFromRelativeZoom = function (t) {
    return t * this.viewport.getOriginalState().zoom;
  };
  l.prototype.resetZoom = function () {
    var t = this.viewport.getOriginalState();
    this.zoom(t.zoom, true);
  };
  l.prototype.resetPan = function () {
    this.pan(this.viewport.getOriginalState());
  };
  l.prototype.reset = function () {
    this.resetZoom();
    this.resetPan();
  };
  l.prototype.handleDblClick = function (t) {
    if (this.options.preventMouseEventsDefault) {
      if (t.preventDefault) {
        t.preventDefault();
      } else {
        t.returnValue = false;
      }
    }
    if (this.options.controlIconsEnabled) {
      var e;
      if ((t.target.getAttribute("class") || "").indexOf("svg-pan-zoom-control") > -1) {
        return false;
      }
    }
    e = t.shiftKey ? 1 / ((1 + this.options.zoomScaleSensitivity) * 2) : (1 + this.options.zoomScaleSensitivity) * 2;
    var o = svgViewportUtils.getEventPoint(t, this.svg).matrixTransform(this.svg.getScreenCTM().inverse());
    this.zoomAtPoint(e, o);
  };
  l.prototype.handleMouseDown = function (t, e) {
    if (this.options.preventMouseEventsDefault) {
      if (t.preventDefault) {
        t.preventDefault();
      } else {
        t.returnValue = false;
      }
    }
    svgDomUtils.mouseAndTouchNormalize(t, this.svg);
    if (this.options.dblClickZoomEnabled && svgDomUtils.isDblClick(t, e)) {
      this.handleDblClick(t);
    } else {
      this.state = "pan";
      this.firstEventCTM = this.viewport.getCTM();
      this.stateOrigin = svgViewportUtils.getEventPoint(t, this.svg).matrixTransform(this.firstEventCTM.inverse());
    }
  };
  l.prototype.handleMouseMove = function (t) {
    if (this.options.preventMouseEventsDefault) {
      if (t.preventDefault) {
        t.preventDefault();
      } else {
        t.returnValue = false;
      }
    }
    if (this.state === "pan" && this.options.panEnabled) {
      var e = svgViewportUtils.getEventPoint(t, this.svg).matrixTransform(this.firstEventCTM.inverse());
      var o = this.firstEventCTM.translate(e.x - this.stateOrigin.x, e.y - this.stateOrigin.y);
      this.viewport.setCTM(o);
    }
  };
  l.prototype.handleMouseUp = function (t) {
    if (this.options.preventMouseEventsDefault) {
      if (t.preventDefault) {
        t.preventDefault();
      } else {
        t.returnValue = false;
      }
    }
    if (this.state === "pan") {
      this.state = "none";
    }
  };
  l.prototype.fit = function () {
    var t = this.viewport.getViewBox();
    var e = Math.min(this.width / t.width, this.height / t.height);
    this.zoom(e, true);
  };
  l.prototype.contain = function () {
    var t = this.viewport.getViewBox();
    var e = Math.max(this.width / t.width, this.height / t.height);
    this.zoom(e, true);
  };
  l.prototype.center = function () {
    var t = this.viewport.getViewBox();
    var e = (this.width - (t.width + t.x * 2) * this.getZoom()) * 0.5;
    var o = (this.height - (t.height + t.y * 2) * this.getZoom()) * 0.5;
    this.getPublicInstance().pan({
      x: e,
      y: o
    });
  };
  l.prototype.updateBBox = function () {
    this.viewport.simpleViewBoxCache();
  };
  l.prototype.pan = function (t) {
    var e = this.viewport.getCTM();
    e.e = t.x;
    e.f = t.y;
    this.viewport.setCTM(e);
  };
  l.prototype.panBy = function (t) {
    var e = this.viewport.getCTM();
    e.e += t.x;
    e.f += t.y;
    this.viewport.setCTM(e);
  };
  l.prototype.getPan = function () {
    var t = this.viewport.getState();
    return {
      x: t.x,
      y: t.y
    };
  };
  l.prototype.resize = function () {
    var t = svgViewportUtils.getBoundingClientRectNormalized(this.svg);
    this.width = t.width;
    this.height = t.height;
    var e = this.viewport;
    e.options.width = this.width;
    e.options.height = this.height;
    e.processCTM();
    if (this.options.controlIconsEnabled) {
      this.getPublicInstance().disableControlIcons();
      this.getPublicInstance().enableControlIcons();
    }
  };
  l.prototype.destroy = function () {
    var t = this;
    this.beforeZoom = null;
    this.onZoom = null;
    this.beforePan = null;
    this.onPan = null;
    this.onUpdatedCTM = null;
    if (this.options.customEventsHandler != null) {
      this.options.customEventsHandler.destroy({
        svgElement: this.svg,
        eventsListenerElement: this.options.eventsListenerElement,
        instance: this.getPublicInstance()
      });
    }
    for (var e in this.eventListeners) {
      (this.options.eventsListenerElement || this.svg).removeEventListener(e, this.eventListeners[e], !this.options.preventMouseEventsDefault && u);
    }
    this.disableMouseWheelZoom();
    this.getPublicInstance().disableControlIcons();
    this.reset();
    c = c.filter(function (e) {
      return e.svg !== t.svg;
    });
    delete this.options;
    delete this.viewport;
    delete this.publicInstance;
    delete this.pi;
    this.getPublicInstance = function () {
      return null;
    };
  };
  l.prototype.getPublicInstance = function () {
    var t = this;
    this.publicInstance ||= this.pi = {
      enablePan: function () {
        t.options.panEnabled = true;
        return t.pi;
      },
      disablePan: function () {
        t.options.panEnabled = false;
        return t.pi;
      },
      isPanEnabled: function () {
        return !!t.options.panEnabled;
      },
      pan: function (e) {
        t.pan(e);
        return t.pi;
      },
      panBy: function (e) {
        t.panBy(e);
        return t.pi;
      },
      getPan: function () {
        return t.getPan();
      },
      setBeforePan: function (e) {
        t.options.beforePan = e === null ? null : svgDomUtils.proxy(e, t.publicInstance);
        return t.pi;
      },
      setOnPan: function (e) {
        t.options.onPan = e === null ? null : svgDomUtils.proxy(e, t.publicInstance);
        return t.pi;
      },
      enableZoom: function () {
        t.options.zoomEnabled = true;
        return t.pi;
      },
      disableZoom: function () {
        t.options.zoomEnabled = false;
        return t.pi;
      },
      isZoomEnabled: function () {
        return !!t.options.zoomEnabled;
      },
      enableControlIcons: function () {
        if (!t.options.controlIconsEnabled) {
          t.options.controlIconsEnabled = true;
          svgPanZoomControls.enable(t);
        }
        return t.pi;
      },
      disableControlIcons: function () {
        if (t.options.controlIconsEnabled) {
          t.options.controlIconsEnabled = false;
          svgPanZoomControls.disable(t);
        }
        return t.pi;
      },
      isControlIconsEnabled: function () {
        return !!t.options.controlIconsEnabled;
      },
      enableDblClickZoom: function () {
        t.options.dblClickZoomEnabled = true;
        return t.pi;
      },
      disableDblClickZoom: function () {
        t.options.dblClickZoomEnabled = false;
        return t.pi;
      },
      isDblClickZoomEnabled: function () {
        return !!t.options.dblClickZoomEnabled;
      },
      enableMouseWheelZoom: function () {
        t.enableMouseWheelZoom();
        return t.pi;
      },
      disableMouseWheelZoom: function () {
        t.disableMouseWheelZoom();
        return t.pi;
      },
      isMouseWheelZoomEnabled: function () {
        return !!t.options.mouseWheelZoomEnabled;
      },
      setZoomScaleSensitivity: function (e) {
        t.options.zoomScaleSensitivity = e;
        return t.pi;
      },
      setMinZoom: function (e) {
        t.options.minZoom = e;
        return t.pi;
      },
      setMaxZoom: function (e) {
        t.options.maxZoom = e;
        return t.pi;
      },
      setBeforeZoom: function (e) {
        t.options.beforeZoom = e === null ? null : svgDomUtils.proxy(e, t.publicInstance);
        return t.pi;
      },
      setOnZoom: function (e) {
        t.options.onZoom = e === null ? null : svgDomUtils.proxy(e, t.publicInstance);
        return t.pi;
      },
      zoom: function (e) {
        t.publicZoom(e, true);
        return t.pi;
      },
      zoomBy: function (e) {
        t.publicZoom(e, false);
        return t.pi;
      },
      zoomAtPoint: function (e, o) {
        t.publicZoomAtPoint(e, o, true);
        return t.pi;
      },
      zoomAtPointBy: function (e, o) {
        t.publicZoomAtPoint(e, o, false);
        return t.pi;
      },
      zoomIn: function () {
        this.zoomBy(1 + t.options.zoomScaleSensitivity);
        return t.pi;
      },
      zoomOut: function () {
        this.zoomBy(1 / (1 + t.options.zoomScaleSensitivity));
        return t.pi;
      },
      getZoom: function () {
        return t.getRelativeZoom();
      },
      setOnUpdatedCTM: function (e) {
        t.options.onUpdatedCTM = e === null ? null : svgDomUtils.proxy(e, t.publicInstance);
        return t.pi;
      },
      resetZoom: function () {
        t.resetZoom();
        return t.pi;
      },
      resetPan: function () {
        t.resetPan();
        return t.pi;
      },
      reset: function () {
        t.reset();
        return t.pi;
      },
      fit: function () {
        t.fit();
        return t.pi;
      },
      contain: function () {
        t.contain();
        return t.pi;
      },
      center: function () {
        t.center();
        return t.pi;
      },
      updateBBox: function () {
        t.updateBBox();
        return t.pi;
      },
      resize: function () {
        t.resize();
        return t.pi;
      },
      getSizes: function () {
        return {
          width: t.width,
          height: t.height,
          realZoom: t.getZoom(),
          viewBox: t.viewport.getViewBox()
        };
      },
      destroy: function () {
        t.destroy();
        return t.pi;
      }
    };
    return this.publicInstance;
  };
  var c = [];
  module.exports = function (t, e) {
    var o = svgDomUtils.getSvg(t);
    if (o === null) {
      return null;
    }
    for (var n = c.length - 1; n >= 0; n--) {
      if (c[n].svg === o) {
        return c[n].instance.getPublicInstance();
      }
    }
    c.push({
      svg: o,
      instance: new l(o, e)
    });
    return c[c.length - 1].instance.getPublicInstance();
  };
}