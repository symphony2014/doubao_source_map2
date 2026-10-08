// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Av' to 'isDefined'
// - Renamed export 'Do' to 'findMapResult'
// - Renamed export 'GI' to 'isStringArray'
// - Renamed export 'Ji' to 'ensureBoolean'
// - Renamed export 'NN' to 'invokeIfFunction'
// - Renamed export 'Qb' to 'invokeFunction'
// - Renamed export 'bc' to 'formatBytesSize'
// - Renamed export 'qo' to 'ensureArray'
// - Renamed export 'sT' to 'parseNumber'
// - Renamed export 'sd' to 'getProperty'
// - Renamed export 've' to 'loadScriptAsync'
// - Renamed export 'zf' to 'ensureString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 385226
         */
module.exports = function (module, exports, require) {
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var asyncScriptLoader = require("async-script-loader") /*id: 289141*/;
  var c = asyncScriptLoader;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  let f = e => arrayIsArrayUtil.isArray(e) && e.every(isStringTypeCheck.isString);
  let h = async function (e, t = {}) {
    let {
      timeout: n
    } = t;
    let i = new Promise((t, n) => {
      c(e, e => {
        if (e) {
          n(e);
        } else {
          t();
        }
      });
    });
    if (isNumberUtil.isNumber(n)) {
      await Promise.race([i, promiseAsyncUtilities.createDelayedPromise(n)]);
    } else {
      await i;
    }
  };
  let p = e => isFunctionUtil_1.isFunction(e) ? e() : e;
  let m = e => !isUndefinedCheck.isUndefined(e);
  let g = e => {
    if (e < 0) {
      return "0B";
    }
    let t = Math.floor(e);
    if (t < 1024) {
      return `${t}B`;
    } else if (t < 1048576) {
      return `${Math.round(t / 1024)}KB`;
    } else if (t < 1073741824) {
      return `${Math.round(t / 1048576)}MB`;
    } else {
      return `${Math.round(t / 1073741824)}GB`;
    }
  };
  let _ = e => {
    let t = Number(e ?? undefined);
    if (!isNaN(t)) {
      return t;
    }
  };
  let v = e => {
    if (isStringTypeCheck.isString(e)) {
      return e;
    }
  };
  let y = e => {
    if (isBooleanUtil.isBoolean(e)) {
      return e;
    }
  };
  let S = (e, t) => {
    for (let n of e) {
      let e = t(n);
      if (e !== false) {
        return [n, e];
      }
    }
  };
  let b = e => isUndefinedCheck.isUndefined(e) ? [] : arrayIsArrayUtil.isArray(e) ? e : [e];
  let E = (e, t) => e == null ? undefined : e[t];
  let w = e => e();
  require.d(exports, {
    isDefined: function () {
      return m;
    },
    findMapResult: function () {
      return S;
    },
    isStringArray: function () {
      return f;
    },
    ensureBoolean: function () {
      return y;
    },
    invokeIfFunction: function () {
      return p;
    },
    invokeFunction: function () {
      return w;
    },
    formatBytesSize: function () {
      return g;
    },
    ensureArray: function () {
      return b;
    },
    parseNumber: function () {
      return _;
    },
    getProperty: function () {
      return E;
    },
    loadScriptAsync: function () {
      return h;
    },
    ensureString: function () {
      return v;
    }
  });
}