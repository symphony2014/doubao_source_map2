// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't8' to 'setObjectPath'
// - Renamed export 'U2' to 'getObjectPath'
// - Renamed export 'zA' to 'mergeObjects'
// - Renamed export 'Od' to 'unsetObjectPath'
// - Renamed export 'cS' to 'isEmptyObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 881861
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var objectPathUnsetUtil = require("object-path-unset-util") /*id: 502450*/;
  function s(e, t) {
    return e == null || objectPathUnsetUtil.unsetObjectPath(e, t);
  }
  var valueToPathArray = require("value-to-path-array") /*id: 599844*/;
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  let u = e => {
    let t = valueToPathArray.valueToPathArray(e);
    return (!isNumberUtil.isNumber(e) || t.length !== 1) && Number.isInteger(+t[t.length - 1]);
  };
  function p(e, t) {
    let n = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    if (t.length === 0) {
      return;
    }
    let o = objectPathGetDefault.getObjectPathDefault(e, t);
    if (Array.isArray(o) && o.every(e => e == null)) {
      s(e, t);
    } else if (function (e) {
      if (!isObjectOrFunction_1_1.isObjectOrFunction(e)) {
        return false;
      }
      {
        let t = objectValuesHelper.getObjectValues(e);
        return !t.length || t.every(e => e === undefined);
      }
    }(o)) {
      s(e, t);
    }
    p(e, t.slice(0, t.length - 1), n);
  }
  function f(e) {
    return objectValuesHelper.getObjectValues(e).length === 0;
  }
  function h(e, t) {
    return objectPathGetDefault.getObjectPathDefault(e, t);
  }
  function m(e, t) {
    s(e, t);
    let n = valueToPathArray.valueToPathArray(t);
    p(e, n = n.slice(0, n.length - 1), false);
  }
  function v(e, t, n, r) {
    if (r || n !== undefined) {
      return safeObjectSetWrapper.safeObjectSet(e, t, n);
    }
    if (u(t) && h(e, t) !== undefined) {
      safeObjectSetWrapper.safeObjectSet(e, t, undefined);
      let n = valueToPathArray.valueToPathArray(t);
      p(e, n = n.slice(0, n.length - 1), false);
    } else if (!u(t) && h(e, t) !== undefined) {
      m(e, t);
    }
  }
  function g(e, t) {
    if (e && (typeof e == "function" || typeof e == "object") && t && (typeof t == "function" || typeof t == "object")) {
      Object.entries(t).forEach(t => {
        let [n, r] = t;
        e[n] = r;
      });
    }
    return e;
  }
  require.d(exports, {
    setObjectPath: function () {
      return v;
    },
    getObjectPath: function () {
      return h;
    },
    mergeObjects: function () {
      return g;
    },
    unsetObjectPath: function () {
      return m;
    },
    isEmptyObject: function () {
      return f;
    }
  });
}