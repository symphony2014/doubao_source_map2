// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'flattenArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 125982
         */
module.exports = function (module, exports, require) {
  var iteratorHelpers = require("iterator-helpers") /*id: 369701*/;
  var objectToStringUtil = require("object-to-string-util") /*id: 194580*/;
  var isObjectUtil = require("is-object-util") /*id: 8345*/;
  var a = Symbol.isConcatSpreadable;
  function s(t) {
    return Array.isArray(t) || isObjectUtil.isObject(t) && objectToStringUtil.objectToString(t) === "[object Arguments]" || !!t && !!t[a];
  }
  function l(t, e) {
    if (t == null ? 0 : t.length) {
      return function t(e, n, i, o, a) {
        var l;
        var u;
        if (i === undefined) {
          i = s;
        }
        if (o === undefined) {
          o = false;
        }
        if (a === undefined) {
          a = [];
        }
        if (e == null) {
          return a;
        }
        try {
          var c = iteratorHelpers.createIterator(e);
          var f = c.next();
          for (; !f.done; f = c.next()) {
            var d = f.value;
            if (n > 0 && i(d)) {
              if (n > 1) {
                t(d, n - 1, i, o, a);
              } else {
                a.push.apply(a, iteratorHelpers.concatIterables(d));
              }
            } else if (!o) {
              a[a.length] = d;
            }
          }
        } catch (t) {
          l = {
            error: t
          };
        } finally {
          try {
            if (f && !f.done && (u = c.return)) {
              u.call(c);
            }
          } finally {
            if (l) {
              throw l.error;
            }
          }
        }
        return a;
      }(t, e = e === undefined ? 1 : +e);
    } else {
      return [];
    }
  }
  require.d(exports, {
    flattenArray: function () {
      return l;
    }
  });
}