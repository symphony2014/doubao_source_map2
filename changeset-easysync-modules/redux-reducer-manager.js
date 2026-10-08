// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reduxCoreApi'
// - Resolved require(76673) to 'redux-core-api'
// - Renamed variable 'o' to 'refCounterUtil'
// - Resolved require(548726) to 'ref-counter-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 799825
         */
module.exports = function (module, exports, require) {
  var r = this && this.__assign || function () {
    return (r = Object.assign || function (t) {
      var e;
      var n = 1;
      var r = arguments.length;
      for (; n < r; n++) {
        for (var i in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            t[i] = e[i];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  };
  exports.__esModule = true;
  var reduxCoreApi = require("redux-core-api") /*id: 76673*/;
  var refCounterUtil = require("ref-counter-util") /*id: 548726*/;
  function s(t, e = reduxCoreApi.combineReducers) {
    if (t && Object.keys(t).length !== 0) {
      return e(t);
    } else {
      return function (t, e) {
        return t || null;
      };
    }
  }
  exports.getRefCountedReducerManager = function (t) {
    var e = refCounterUtil.getStringRefCounter();
    for (var n in t.getReducerMap()) {
      e.add(n);
    }
    return {
      reduce: t.reduce,
      getReducerMap: t.getReducerMap,
      add: function (n, r) {
        if (e.getCount(n) === 0) {
          t.add(n, r);
        }
        e.add(n);
      },
      remove: function (n) {
        e.remove(n);
        if (e.getCount(n) === 0) {
          t.remove(n);
        }
      }
    };
  };
  exports.getReducerManager = function (t, e = reduxCoreApi.combineReducers) {
    var n = e(t);
    var o = r({}, t);
    var a = [];
    return {
      getReducerMap: function () {
        return o;
      },
      reduce: function (t, e) {
        if (a.length > 0) {
          t = r({}, t);
          var i = 0;
          var o = a;
          for (; i < o.length; i++) {
            var s = o[i];
            delete t[s];
          }
          a = [];
        }
        if (t === undefined) {
          t = {};
        }
        return n(t, e);
      },
      add: function (t, r) {
        if (t && !o[t]) {
          o[t] = r;
          n = s(o, e);
        }
      },
      remove: function (t) {
        if (t && o[t]) {
          delete o[t];
          a.push(t);
          n = s(o, e);
        }
      }
    };
  };
}