// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'lineGenerator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 832501
         */
module.exports = function (module, exports, require) {
  var arrayConvertUtils = require("array-convert-utils") /*id: 30870*/;
  var constantCreator_1 = require("constant-creator_1") /*id: 29801*/;
  var linePathGenerator = require("line-path-generator") /*id: 409913*/;
  var pathBuilderFactory = require("path-builder-factory") /*id: 468606*/;
  var tupleAccessors = require("tuple-accessors") /*id: 222130*/;
  function s(t, n) {
    var e = constantCreator_1.createConstant(true);
    var s = null;
    var c = linePathGenerator.LineGenerator;
    var h = null;
    var f = pathBuilderFactory.createPathBuilder(l);
    function l(r) {
      var o;
      var u;
      var a;
      var l = (r = arrayConvertUtils.toArray(r)).length;
      var _ = false;
      if (s == null) {
        h = c(a = f());
      }
      o = 0;
      for (; o <= l; ++o) {
        if ((!(o < l) || !e(u = r[o], o, r)) === _) {
          if (_ = !_) {
            h.lineStart();
          } else {
            h.lineEnd();
          }
        }
        if (_) {
          h.point(+t(u, o, r), +n(u, o, r));
        }
      }
      if (a) {
        h = null;
        return a + "" || null;
      }
    }
    t = typeof t == "function" ? t : t === undefined ? tupleAccessors.first : constantCreator_1.createConstant(t);
    n = typeof n == "function" ? n : n === undefined ? tupleAccessors.second : constantCreator_1.createConstant(n);
    l.x = function (n) {
      if (arguments.length) {
        t = typeof n == "function" ? n : constantCreator_1.createConstant(+n);
        return l;
      } else {
        return t;
      }
    };
    l.y = function (t) {
      if (arguments.length) {
        n = typeof t == "function" ? t : constantCreator_1.createConstant(+t);
        return l;
      } else {
        return n;
      }
    };
    l.defined = function (t) {
      if (arguments.length) {
        e = typeof t == "function" ? t : constantCreator_1.createConstant(!!t);
        return l;
      } else {
        return e;
      }
    };
    l.curve = function (t) {
      if (arguments.length) {
        c = t;
        if (s != null) {
          h = c(s);
        }
        return l;
      } else {
        return c;
      }
    };
    l.context = function (t) {
      if (arguments.length) {
        if (t == null) {
          s = h = null;
        } else {
          h = c(s = t);
        }
        return l;
      } else {
        return s;
      }
    };
    return l;
  }
  require.d(exports, {
    lineGenerator: function () {
      return s;
    }
  });
}