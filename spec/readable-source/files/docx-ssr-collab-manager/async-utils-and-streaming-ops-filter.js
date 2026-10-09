// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GR' to 'delay'
// - Renamed export 'Ji' to 'parseBoolean'
// - Renamed export 'Qb' to 'executeImmediately'
// - Renamed export 'YX' to 'filterStreamingOperations'
// - Renamed export 'sT' to 'parseNumber'
// - Renamed export 'yR' to 'createAsyncWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 781913
         */
module.exports = function (module, exports, require) {
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var pathArrayValidation = require("path-array-validation") /*id: 75446*/;
  var objectMatchUtil = require("object-match-util") /*id: 941914*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var collectionPartitionFactory = require("collection-partition-factory") /*id: 505294*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  function u(e) {
    return function () {
      var i = arguments.length;
      var r = Array(i);
      var n = 0;
      for (; n < i; n++) {
        r[n] = arguments[n];
      }
      let o = r[2];
      let {
        get: a,
        set: l,
        writable: c,
        value: h,
        ...d
      } = o;
      if (!isFunctionUtil_1.isFunction(h)) {
        return o;
      }
      let u = new Map();
      return {
        ...d,
        value() {
          var i = arguments.length;
          var r = Array(i);
          var n = 0;
          for (; n < i; n++) {
            r[n] = arguments[n];
          }
          let o = r[0] || e;
          if (u.get(o)) {
            return;
          }
          let a = h.call(this, ...r);
          if (isFunctionUtil_1.isFunction(a == null ? undefined : a.then)) {
            u.set(o, true);
            return a.then(e => {
              u.delete(o);
              return e;
            }).catch(e => {
              u.delete(o);
              throw e;
            });
          }
        }
      };
    };
  }
  function f(e) {
    let i = [];
    let r = [];
    e.forEach(e => {
      let {
        id: s,
        ops: d
      } = e;
      let [u, f] = collectionPartitionFactory.partitionCollection(d, e => (e == null ? undefined : e.p.includes("status")) && pathArrayValidation.validatePathArray(e, "action") && objectMatchUtil.checkObjectMatch(objectValuesHelper.getObjectValues(objectPathGetDefault.getObjectPathDefault(e, "action")), e => pathArrayValidation.validatePathArray(e, "streaming")));
      if (!isEmptyUtil.isEmpty(u)) {
        i = [...i, {
          id: s,
          ops: u
        }];
      }
      if (!isEmptyUtil.isEmpty(f)) {
        r = [...r, {
          id: s,
          ops: f
        }];
      }
    });
    return [i, r];
  }
  let v = e => new Promise(i => setTimeout(i, e));
  let g = e => e();
  let p = e => {
    let i = Number(e ?? undefined);
    if (!isNaN(i)) {
      return i;
    }
  };
  let _ = e => {
    if (isBooleanUtil.isBoolean(e)) {
      return e;
    }
  };
  require.d(exports, {
    delay: function () {
      return v;
    },
    parseBoolean: function () {
      return _;
    },
    executeImmediately: function () {
      return g;
    },
    filterStreamingOperations: function () {
      return f;
    },
    parseNumber: function () {
      return p;
    },
    createAsyncWrapper: function () {
      return u;
    }
  });
}