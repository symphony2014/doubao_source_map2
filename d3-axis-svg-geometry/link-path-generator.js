// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h5' to 'linkGenerator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 41069.b8943696.js
         * chunkId: 41069
         * moduleId: 830541
         */
module.exports = function (module, exports, require) {
  var arrayConvertUtils = require("array-convert-utils") /*id: 30870*/;
  var constantCreator_1 = require("constant-creator_1") /*id: 29801*/;
  var areaCurveContext = require("area-curve-context") /*id: 469551*/;
  var pathBuilderFactory = require("path-builder-factory") /*id: 468606*/;
  var tupleAccessors = require("tuple-accessors") /*id: 222130*/;
  function s(t) {
    return t.source;
  }
  function c(t) {
    return t.target;
  }
  function l() {
    return function (t) {
      let n = s;
      let e = c;
      let o = tupleAccessors.first;
      let l = tupleAccessors.second;
      let h = null;
      let f = null;
      let p = pathBuilderFactory.createPathBuilder(_);
      function _() {
        let i;
        let u = arrayConvertUtils.slice.call(arguments);
        let a = n.apply(this, u);
        let s = e.apply(this, u);
        if (h == null) {
          f = t(i = p());
        }
        f.lineStart();
        u[0] = a;
        f.point(+o.apply(this, u), +l.apply(this, u));
        u[0] = s;
        f.point(+o.apply(this, u), +l.apply(this, u));
        f.lineEnd();
        if (i) {
          f = null;
          return i + "" || null;
        }
      }
      _.source = function (t) {
        if (arguments.length) {
          n = t;
          return _;
        } else {
          return n;
        }
      };
      _.target = function (t) {
        if (arguments.length) {
          e = t;
          return _;
        } else {
          return e;
        }
      };
      _.x = function (t) {
        if (arguments.length) {
          o = typeof t == "function" ? t : constantCreator_1.createConstant(+t);
          return _;
        } else {
          return o;
        }
      };
      _.y = function (t) {
        if (arguments.length) {
          l = typeof t == "function" ? t : constantCreator_1.createConstant(+t);
          return _;
        } else {
          return l;
        }
      };
      _.context = function (n) {
        if (arguments.length) {
          if (n == null) {
            h = f = null;
          } else {
            f = t(h = n);
          }
          return _;
        } else {
          return h;
        }
      };
      return _;
    }(areaCurveContext.createCurveX);
  }
  require.d(exports, {
    linkGenerator: function () {
      return l;
    }
  });
}