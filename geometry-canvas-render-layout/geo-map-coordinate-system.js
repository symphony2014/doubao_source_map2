// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'registerGeoMapData'
// - Renamed export 'Z' to 'GeoMapCoordinateSystem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 766252
         */
module.exports = function (module, exports, require) {
  var i;
  var refValueWrapper = require("ref-value-wrapper") /*id: 368437*/;
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var findMaxByUtilValue = require("find-max-by-util-value") /*id: 804972*/;
  var arrayMaxByUtilWrapper = require("array-max-by-util-wrapper") /*id: 477121*/;
  function h(t, e) {
    var n = Math.log(Math.tan((e + 90) * Math.PI / 360)) / (Math.PI / 180);
    return [t * 20037508.342789 / 180, n = n * 20037508.34789 / 180];
  }
  var linearScaleFormatter = require("linear-scale-formatter") /*id: 639533*/;
  var geometryRectUtils = require("geometry-rect-utils") /*id: 404476*/;
  var c = function () {
    function t(t, e) {
      this.coordinateSystem = "geo";
      this.dimensions = ["lng", "lat"];
      this._boundingRect = t;
      this._geoJSON = e;
      this._initScale();
    }
    t.prototype.dataToCoord = function (t) {
      return t;
    };
    t.prototype.coordToPoint = function (t) {
      var e = h(t.lng, t.lat);
      var n = e[0];
      var i = e[1];
      return {
        x: this._lngScale.scale(n),
        y: this._latScale.scale(i)
      };
    };
    t.prototype.pointToCoord = function (t, e) {
      return {
        lng: this._lngScale.invert(t),
        lat: this._latScale.invert(e)
      };
    };
    t.prototype.dataToPoint = function (t) {
      return this.coordToPoint(this.dataToCoord(t));
    };
    t.prototype.coordToData = function (t) {
      return t;
    };
    t.prototype.recordToCoord = function (t, e, n) {
      return {
        lng: n.lng,
        lat: n.lat
      };
    };
    t.prototype.recordToPoint = function (t, e, n) {
      return this.coordToPoint(this.recordToCoord(t, e, n));
    };
    t.prototype.valueToCoord = function (t, e) {
      return null;
    };
    t.prototype.getCategoryAxis = function () {
      return null;
    };
    t.prototype.getValueAxis = function () {
      return null;
    };
    t.prototype._initScale = function () {
      var t = function t(e) {
        if (e.type === "FeatureCollection") {
          var n;
          var i;
          var r;
          var h;
          var l = e.features.map(function (e) {
            return t(e.geometry);
          });
          var u = safeArrayFlattenUtil.safeFlattenArray(l.map(function (t) {
            return t[0];
          }));
          var c = safeArrayFlattenUtil.safeFlattenArray(l.map(function (t) {
            return t[1];
          }));
          n = findMaxByUtilValue.findMaxByUtilValue(u);
          i = arrayMaxByUtilWrapper.getMaxBy(u);
          r = findMaxByUtilValue.findMaxByUtilValue(c);
          h = arrayMaxByUtilWrapper.getMaxBy(c);
        } else if (e.type === "GeometryCollection") {
          var l = e.geometries.map(function (e) {
            return t(e);
          });
          var u = safeArrayFlattenUtil.safeFlattenArray(l.map(function (t) {
            return t[0];
          }));
          var c = safeArrayFlattenUtil.safeFlattenArray(l.map(function (t) {
            return t[1];
          }));
          n = findMaxByUtilValue.findMaxByUtilValue(u);
          i = arrayMaxByUtilWrapper.getMaxBy(u);
          r = findMaxByUtilValue.findMaxByUtilValue(c);
          h = arrayMaxByUtilWrapper.getMaxBy(c);
        } else {
          var p = undefined;
          if (e.type === "Point") {
            p = [e.coordinates];
          } else if (e.type === "LineString") {
            p = e.coordinates;
          } else if (e.type === "Polygon") {
            p = safeArrayFlattenUtil.safeFlattenArray(e.coordinates);
          } else if (e.type === "MultiPoint") {
            p = e.coordinates;
          } else if (e.type === "MultiLineString") {
            p = safeArrayFlattenUtil.safeFlattenArray(e.coordinates);
          } else if (e.type === "MultiPolygon") {
            p = safeArrayFlattenUtil.safeFlattenArray(safeArrayFlattenUtil.safeFlattenArray(e.coordinates));
          }
          n = findMaxByUtilValue.findMaxByUtilValue(p.map(function (t) {
            return t[0];
          }));
          i = arrayMaxByUtilWrapper.getMaxBy(p.map(function (t) {
            return t[0];
          }));
          r = findMaxByUtilValue.findMaxByUtilValue(p.map(function (t) {
            return t[1];
          }));
          h = arrayMaxByUtilWrapper.getMaxBy(p.map(function (t) {
            return t[1];
          }));
        }
        return [[n, i], [r, h]];
      }(this._geoJSON);
      var e = t[0];
      var n = e[0];
      var i = e[1];
      var r = t[1];
      var c = r[0];
      var p = r[1];
      var d = h(n, c);
      var f = h(i, p);
      var g = Math.min(d[0], f[0]);
      var y = Math.max(d[0], f[0]);
      var v = Math.min(d[1], f[1]);
      var m = Math.max(d[1], f[1]);
      var x = this._boundingRect.width;
      var _ = this._boundingRect.height;
      var b = (m - v) / (y - g);
      if (this._boundingRect.height / this._boundingRect.width >= b) {
        _ = this._boundingRect.width * b;
      } else {
        x = this._boundingRect.height / b;
      }
      var w = geometryRectUtils.alignRect(this._boundingRect, x, _, "center", "middle");
      var S = w.x;
      var A = w.y;
      this._lngScale = new linearScaleFormatter.LinearScaleFormatter(g, y, S, S + x);
      this._latScale = new linearScaleFormatter.LinearScaleFormatter(v, m, A + _, A);
    };
    return t;
  }();
  var svgRectElement = require("svg-rect-element") /*id: 345343*/;
  var svgPolyShapeElement = require("svg-poly-shape-element") /*id: 881678*/;
  var compoundPathSvgElement = require("compound-path-svg-element") /*id: 903374*/;
  var svgPolygonShape = require("svg-polygon-shape") /*id: 89278*/;
  var svgGroupElement = require("svg-group-element") /*id: 249968*/;
  var richTextRendererUtils = require("rich-text-renderer-utils") /*id: 809271*/;
  var zoomGestureController = require("zoom-gesture-controller") /*id: 132835*/;
  var chartComponentExtender = require("chart-component-extender") /*id: 729892*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  function w(t, e, n) {
    var i = [];
    var r = e[0];
    var o = e[1];
    var a = 0;
    for (; a < t.length; a += 2) {
      var s = t.charCodeAt(a) - 64;
      var h = t.charCodeAt(a + 1) - 64;
      h = h >> 1 ^ -(h & 1);
      s = (s >> 1 ^ -(s & 1)) + r;
      h += o;
      r = s;
      o = h;
      i.push([s / n, h / n]);
    }
    return i;
  }
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
  function S(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function A() {
    return (A = Object.assign || function (t) {
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
  var E = {};
  function k(t, e) {
    E[t] = e;
  }
  var M = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "geo";
      e.handleDragStart = function () {
        if (e.option.panning) {
          e.setState({
            isPanning: true
          });
        }
      };
      e.handleDragMove = function (t) {
        if (e.option.panning && !e.state.isZooming) {
          var n = t.dx;
          var i = t.dy;
          var r = e.state.position;
          if (!e.state.isPanning && (n > 5 || i > 5)) {
            e.handleDragStart();
            return;
          }
          r[0] += n;
          r[1] += i;
          e.setState({
            position: r
          });
          e.refreshUI();
        }
      };
      e.handleDragEnd = function () {
        if (e.option.panning) {
          setTimeout(function () {
            e.setState({
              isPanning: false
            });
          }, 0);
        }
      };
      e.refreshUI = function () {
        var t;
        if ((t = e.getRenderObj()) !== null && t !== undefined) {
          t.setAttr({
            position: e.state.position,
            scale: [e.state.scale, e.state.scale]
          });
        }
        e.state.regions.forEach(function (t) {
          if (t.labelRef.current) {
            t.labelRef.current.setAttr({
              fontSize: e.option.label.fontSize / e.state.scale
            });
          }
        });
        e.chart.dispatchAction({
          type: "map:roam",
          position: e.state.position,
          scale: e.state.scale
        });
      };
      e.handleZoom = function (t) {
        if (e.option.zooming) {
          var n = t.origin;
          var i = t.zoom;
          var r = n[0];
          var o = n[1];
          var a = e.state;
          var s = a.scale;
          var h = a.position;
          var l = s * i;
          var u = l - s;
          if (!(l <= 0)) {
            h[0] -= (r - h[0]) / s * u;
            h[1] -= (o - h[1]) / s * u;
            h[0] += t.position[0];
            h[1] += t.position[1];
            e.setState({
              scale: l,
              position: h
            });
            e.refreshUI();
          }
        }
      };
      e.handleMapMouseEnter = function (t) {
        e.toggleHighlightRegion(t.region, true);
      };
      e.handleMapMouseLeave = function (t) {
        e.toggleHighlightRegion(t.region, false);
      };
      e.handleRegionEvent = function (t, n) {
        e.handleUIEvent(t, "region", {
          name: n.name,
          region: n
        });
        if (n.data) {
          e.chart.eachSeriesModel(function (e) {
            if (e.type === "map") {
              e.handleUIEvent(t, "point", n.data);
            }
          });
        }
      };
      return e;
    }
    S(e, t);
    e.prototype.getDefaultOption = function () {
      return {
        facet: 0,
        zooming: false,
        panning: false,
        map: "",
        nameMap: {},
        shapeStyle: {
          fill: "#F0F2F6",
          stroke: "#CCD0E1",
          lineWidth: 1
        },
        label: {
          show: false,
          fontSize: 12,
          color: "#333333",
          position: "inside",
          distance: 4
        },
        hover: {
          shapeStyle: {
            stroke: null,
            lineWidth: null
          },
          label: {
            show: false,
            fontSize: 12,
            color: "#333333",
            position: "inside",
            distance: 4
          }
        },
        selected: {
          shapeStyle: {
            stroke: null,
            lineWidth: null
          }
        }
      };
    };
    e.prototype.getInitialState = function () {
      return {
        position: [0, 0],
        scale: 1,
        regions: [],
        isPanning: false,
        isZooming: false
      };
    };
    e.prototype.init = function () {
      var t = this;
      var e = this.chart.getAllSeries().filter(function (t) {
        return t.getOption().type === "map";
      });
      if (e.length > 0) {
        throttledDeepCloneUtil.throttledDeepClone(this.option, throttledPathFilterStringify.throttledPathStr(e[0], ["label", "shapeStyle", "hover", "selected"]));
      }
      this._dragEventRect = new svgRectElement.SvgRectElement({
        draggable: true,
        key: this.getKey("evnet-rect"),
        fill: "#ffffff",
        getDragOffset: function () {
          return {
            x: 0,
            y: 0
          };
        },
        onDrag: this.handleDragMove,
        onDragEnd: this.handleDragEnd
      });
      this.chart.getRenderInstance().addEventElement(this._dragEventRect);
      this._zoomInstance = new zoomGestureController.ZoomController(this._dragEventRect, {
        onZoomStart: function () {
          return t.setState({
            isZooming: true
          });
        },
        onZooming: this.handleZoom,
        onZoomEnd: function () {
          return t.setState({
            isZooming: false
          });
        }
      });
      this.registerEvent("region:mouseenter", this.handleMapMouseEnter);
      this.registerEvent("region:mouseleave", this.handleMapMouseLeave);
    };
    e.prototype.beforeRender = function () {
      var t = this;
      var e = this.option.nameMap;
      var n = this.chart.getFacetContentBox(this.option.facet);
      var i = n.top;
      var o = {
        x: n.left,
        y: i,
        width: n.width,
        height: n.height
      };
      var a = function (t, e) {
        if (!t) {
          throw Error("map name " + e + " doesn't exist");
        }
        if (!t.UTF8Encoding) {
          return t;
        }
        var n = t.UTF8Scale;
        if (n == null) {
          n = 1024;
        }
        var i = t.features;
        var r = 0;
        for (; r < i.length; r++) {
          var o = i[r].geometry;
          if (o.type === "Polygon") {
            var a = o.coordinates;
            var s = 0;
            for (; s < a.length; s++) {
              a[s] = w(a[s], o.encodeOffsets[s], n);
            }
          } else if (o.type === "MultiPolygon") {
            var a = o.coordinates;
            var s = 0;
            for (; s < a.length; s++) {
              var h = a[s];
              var l = 0;
              for (; l < h.length; l++) {
                h[l] = w(h[l], o.encodeOffsets[s][l], n);
              }
            }
          }
        }
        t.UTF8Encoding = false;
        return t;
      }(E[this.option.map], this.option.map);
      this._coordGeo = new c(o, a);
      var s = a.features.map(function (n) {
        return {
          name: e[n.properties.name] || n.properties.name,
          center: n.properties.center || n.properties.cp,
          feature: n,
          color: t.option.shapeStyle.fill,
          labelRef: refValueWrapper.refWrapper(),
          regionRef: refValueWrapper.refWrapper(),
          selected: false,
          data: null
        };
      });
      this._dragEventRect.setAttr(A({}, o));
      this.setState({
        regions: s
      });
      if (this.option.zooming) {
        this._zoomInstance.enable();
      } else {
        this._zoomInstance.disable();
      }
      this._dragEventRect.setAttr({
        draggable: this.option.panning
      });
    };
    e.prototype.beforeDestroy = function () {
      this.chart.getRenderInstance().removeEventElement(this._dragEventRect);
      this._zoomInstance.destroy();
    };
    e.prototype.getCoordinate = function () {
      return this._coordGeo;
    };
    e.prototype.renderLineString = function () {
      return new svgPolyShapeElement.SvgPolyShapeElement();
    };
    e.prototype.toggleHighlightRegion = function (t, e) {
      var n;
      var i = this.option;
      var r = i.label;
      var o = i.hover.label;
      var a = t.labelRef.current;
      var s = t.regionRef.current;
      if (a != null) {
        a.setAttr(A(A(A({
          display: e ? o.show : r.show
        }, this.getTextStyle(this.option.label)), e ? this.getTextStyle(this.option.hover.label) : null), {
          fontSize: r.fontSize / this.state.scale
        }));
      }
      if (e) {
        if ((n = s == null ? undefined : s.parentNode) !== null && n !== undefined) {
          n.add(s);
        }
      }
      if (s != null) {
        s.setAttr(A(A(A(A({}, this.getShapeStyle(this.option.shapeStyle)), {
          fill: t.color
        }), t.selected ? this.getShapeStyle(this.option.selected.shapeStyle) : null), e ? this.getShapeStyle(this.option.hover.shapeStyle) : null));
      }
    };
    e.prototype.toggleSelectRegion = function (t, e) {
      var n;
      t.selected = e;
      if ((n = t.regionRef.current) !== null && n !== undefined) {
        n.setAttr(this.getRegionStyle(t));
      }
    };
    e.prototype.renderPolygon = function (t, e) {
      var n = this;
      var i = e.coordinates.map(function (t) {
        return t.map(function (t) {
          return n._coordGeo.dataToPoint({
            lng: t[0],
            lat: t[1]
          });
        });
      });
      return new compoundPathSvgElement.CompoundPathSvgElement(A(A({
        key: t.name,
        shapes: i.map(function (t) {
          return new svgPolygonShape.SvgPolygonShape({
            pointList: t
          });
        })
      }, this.getRegionStyle(t)), {
        transitionProperty: "none",
        strokeNoScale: true,
        onEvent: function (e) {
          return n.handleRegionEvent(e, t);
        }
      }));
    };
    e.prototype.renderMultiPolygon = function (t, e) {
      var n = this;
      var i = [];
      e.coordinates.forEach(function (e, r) {
        var o = e.map(function (t) {
          return t.map(function (t) {
            return n._coordGeo.dataToPoint({
              lng: t[0],
              lat: t[1]
            });
          });
        });
        i.push(new compoundPathSvgElement.CompoundPathSvgElement({
          key: t.name + "child" + r.toString(),
          shapes: o.map(function (t) {
            return new svgPolygonShape.SvgPolygonShape({
              pointList: t
            });
          })
        }));
      });
      return new compoundPathSvgElement.CompoundPathSvgElement(A(A({
        shapes: i
      }, this.getRegionStyle(t)), {
        transitionProperty: "none",
        strokeNoScale: true,
        onEvent: function (e) {
          return n.handleRegionEvent(e, t);
        }
      }));
    };
    e.prototype.getRegionStyle = function (t) {
      return A(A(A({}, this.getShapeStyle(this.option.shapeStyle)), {
        fill: t.color
      }), t.selected ? this.getShapeStyle(this.option.selected.shapeStyle) : null);
    };
    e.prototype.renderMultiLineString = function () {
      return new svgGroupElement.SvgGroupElement({});
    };
    e.prototype.renderGeometryCollection = function () {
      return new svgGroupElement.SvgGroupElement({});
    };
    e.prototype.renderRegion = function (t) {
      var e;
      var n = t.feature.geometry;
      if (n.type === "LineString") {
        e = this.renderLineString();
      } else if (n.type === "MultiLineString") {
        e = this.renderMultiLineString();
      } else if (n.type === "Polygon") {
        e = this.renderPolygon(t, n);
      } else if (n.type === "MultiPolygon") {
        e = this.renderMultiPolygon(t, n);
      } else if (n.type === "GeometryCollection") {
        e = this.renderGeometryCollection();
      }
      e.setAttr("ref", t.regionRef);
      return e;
    };
    e.prototype.renderRegions = function () {
      var t = this;
      var e = new svgGroupElement.SvgGroupElement({
        key: this.getKey("geo-feature")
      });
      this.state.regions.forEach(function (n) {
        return e.add(t.renderRegion(n));
      });
      return e;
    };
    e.prototype.renderLabels = function () {
      var t = this;
      var e = this.option.label.formatter;
      var n = new svgGroupElement.SvgGroupElement({
        key: this.getKey("geo-label")
      });
      this.state.regions.forEach(function (i) {
        var r = i.center;
        var o = i.name;
        var a = i.data;
        var s = i.selected;
        if (r && o) {
          var h = t._coordGeo.dataToPoint({
            lng: r[0],
            lat: r[1]
          });
          var l = h.x;
          var u = h.y;
          var c = richTextRendererUtils.createRichNode(A(A({
            ref: i.labelRef,
            display: t.option.label.show,
            text: e ? e(a ? a.point : {
              name: o,
              selected: s
            }) : o,
            x: l,
            y: u,
            textAlign: "center",
            textBaseline: "middle"
          }, t.getTextStyle(t.option.label)), {
            fontSize: t.option.label.fontSize / t.state.scale,
            pointerEvents: "none",
            transitionProperty: "none"
          }));
          n.add(c);
        }
      });
      return n;
    };
    e.prototype.render = function () {
      var t = this.state;
      var e = t.position;
      var n = t.scale;
      var i = new svgGroupElement.SvgGroupElement({
        key: this.getKey("geo"),
        position: e,
        scale: [n, n]
      });
      i.add(this.renderRegions());
      i.add(this.renderLabels());
      return i;
    };
    e.dependencies = [];
    return e;
  }(chartComponentExtender.ChartComponentExtender);
  require.d(exports, {
    registerGeoMapData: function () {
      return k;
    },
    GeoMapCoordinateSystem: function () {
      return M;
    }
  });
}