// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'composeClassNames'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 66784.0c351d11.js
         * chunkId: 66784
         * moduleId: 606502
         */
module.exports = function (module, exports, require) {
  var iteratorAdapterUtil = require("iterator-adapter-util") /*id: 528920*/;
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  let i = "props";
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var arrayFlattenUtil_3 = require("array-flatten-util_3") /*id: 737816*/;
  var invariantCheck = require("invariant-check") /*id: 415427*/;
  function l(e) {
    return !!e;
  }
  function s(e, t) {
    var n = 0;
    var r = Object.values(e);
    for (; n < r.length; n++) {
      var o = r[n];
      if (typeof o == "string") {
        t(o);
        continue;
      }
      s(o, t);
    }
  }
  function f() {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    var r = arrayFlattenUtil_3.flattenArray(t);
    var a = r.filter(l).map(function (e) {
      return e.alias;
    }).filter(l).join(" ");
    var u = f.compose.apply(f, arrayIterableSliceUtil.sliceArrayIterable(r));
    var d = a ? [a] : [];
    s(u[i], function (e) {
      d.push(e);
    });
    return d.join(" ");
  }
  f.create = function () {
    invariantCheck.invariant(false);
  };
  f.compose = function () {
    var e = {};
    var t = arguments.length;
    var n = Array(t);
    var o = 0;
    for (; o < t; o++) {
      n[o] = arguments[o];
    }
    var u;
    var l = arrayFlattenUtil_3.flattenArray(n);
    var s = iteratorAdapterUtil.createIterator(l);
    try {
      for (s.s(); !(u = s.n()).done;) {
        var f = u.value;
        if (f) {
          throttledDeepCloneUtil.throttledDeepClone(e, f[i]);
        }
      }
    } catch (e) {
      s.e(e);
    } finally {
      s.f();
    }
    return {
      props: e
    };
  };
  require.d(exports, {
    composeClassNames: function () {
      return f;
    }
  });
}