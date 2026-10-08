// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Resolved require(640848) to 'react-dom-entry-wrapper'
// - Renamed variable 'u' to 'chartLibraryCoreApi'
// - Resolved require(786949) to 'chart-library-core-api'
// - Resolved require(256315) to 'deep-equal-util_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 958671
         */
module.exports = function (module, exports, require) {
  var i = this && this.__assign || function () {
    return (i = Object.assign || function (t) {
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
  };
  var r = this && this.__createBinding || (Object.create ? function (t, e, n, i = n) {
    Object.defineProperty(t, i, {
      enumerable: true,
      get: function () {
        return e[n];
      }
    });
  } : function (t, e, n, i = n) {
    t[i] = e[n];
  });
  var o = this && this.__setModuleDefault || (Object.create ? function (t, e) {
    Object.defineProperty(t, "default", {
      enumerable: true,
      value: e
    });
  } : function (t, e) {
    t.default = e;
  });
  var a = this && this.__importStar || function (t) {
    if (t && t.__esModule) {
      return t;
    }
    var e = {};
    if (t != null) {
      for (var n in t) {
        if (n !== "default" && Object.hasOwnProperty.call(t, n)) {
          r(e, t, n);
        }
      }
    }
    o(e, t);
    return e;
  };
  var s = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.Chart = undefined;
  var h = a(require("react-core-library-reexport") /*id: 634663*/);
  var l = s(require("react-dom-entry-wrapper") /*id: 640848*/);
  var chartLibraryCoreApi = require("chart-library-core-api") /*id: 786949*/;
  Object.defineProperty(exports, "Chart", {
    enumerable: true,
    get: function () {
      return chartLibraryCoreApi.Chart;
    }
  });
  var c = s(require("deep-equal-util_2") /*id: 256315*/);
  if (chartLibraryCoreApi.setJSXRenderer) {
    chartLibraryCoreApi.setJSXRenderer(l.default);
  }
  exports.default = function (t) {
    var e = t.option;
    var n = e === undefined ? {} : e;
    var r = t.style;
    var o = t.onReady;
    var a = t.className;
    var s = t.chartRef;
    var l = t.pixelRatio;
    var p = t.renderer;
    var d = p === undefined ? "canvas" : p;
    var f = t.workerEnabled;
    var g = f !== undefined && f;
    var y = h.createRef();
    var v = h.useRef();
    var m = i({
      height: "300px"
    }, r === undefined ? {} : r);
    var x = h.useRef(null);
    h.useEffect(function () {
      if (!v.current) {
        v.current = new chartLibraryCoreApi.Chart(y.current, {
          dpr: l,
          renderer: d,
          workerEnabled: g
        });
        if (s) {
          s.current = v.current;
        }
        if (typeof o == "function") {
          o(v.current);
        }
        v.current.setOption(n);
      }
      return function () {
        v.current.destroy();
        if (s) {
          s.current = null;
        }
        v.current = null;
      };
    }, []);
    h.useEffect(function () {
      if (x.current) {
        var e = x.current;
        if (!c.default(t.option, e.option)) {
          v.current.setOption(t.option);
        }
        if (!c.default(t.style, e.style) || !c.default(t.className, e.className)) {
          v.current.resize();
        }
      }
    });
    h.useEffect(function () {
      x.current = t;
    });
    return h.default.createElement("div", {
      ref: y,
      className: a,
      style: m
    });
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}