// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G9' to 'asyncContentProxy'
// - Renamed export 'GR' to 'createDelayedPromise'
// - Renamed export 'n6' to 'promiseWithTimeout'
// - Renamed export 'y8' to 'isPromiseLike'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 592307
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isErrorUtil = require("is-error-util") /*id: 597114*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  function s(e, t, n) {
    return new Promise((r, o) => {
      setTimeout(() => {
        if (n) {
          o(Error("Mock to reject."));
          return;
        }
        if (isUndefinedCheck.isUndefined(t)) {
          r(undefined);
        } else {
          r(t);
        }
      }, e);
    });
  }
  class u extends Error {
    static isTimeoutError(e) {
      return e instanceof u || isErrorUtil.isError(e) && e.name === "TimeoutError";
    }
    constructor(e) {
      super(e);
      this.name = "TimeoutError";
    }
  }
  function c(e, t = 45000) {
    return Promise.race([e, new Promise((e, n) => {
      setTimeout(() => {
        n(new u(`Promise timed out after ${t} ms`));
      }, t);
    })]);
  }
  function d(e) {
    let t;
    let n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    let i = async () => {
      t ||= await e;
      return t;
    };
    return new Proxy({}, {
      get: (e, t) => new Proxy(emptyExportFunction.emptyFunction, {
        apply: n ? undefined : async (e, n, r) => {
          let o = await i();
          if (!(t in o)) {
            throw Error(`${t} is undefined`);
          }
          let a = o[t];
          if (typeof a != "function") {
            throw Error(`${t} is not function`);
          }
          return a.apply(o, r);
        },
        get: (e, n) => {
          if (n === "then") {
            return async e => {
              try {
                let n = await i();
                if (!(t in n)) {
                  throw Error(`${t} is undefined`);
                }
                let r = n[t];
                return Promise.resolve(e(await r));
              } catch (e) {
                return Promise.reject(e);
              }
            };
          }
          if (n === "catch") {
            return async e => {
              try {
                let e = await i();
                if (!(t in e)) {
                  throw Error(`${t} is undefined`);
                }
                let n = e[t];
                await n;
              } catch (t) {
                try {
                  return Promise.resolve(await e(t));
                } catch (e) {
                  return Promise.reject(e);
                }
              }
            };
          }
          if (n === "finally") {
            return async e => {
              try {
                let e = await i();
                if (!(t in e)) {
                  throw Error(`${t} is undefined`);
                }
                let n = e[t];
                await n;
              } catch (e) {
                return Promise.reject(e);
              } finally {
                try {
                  return Promise.resolve(await e());
                } catch (e) {
                  return Promise.reject(e);
                }
              }
            };
          }
          throw Error("Bind a none-promise and none-function value is not supported");
        }
      })
    });
  }
  let h = e => !!e && isObjectOrFunction_1_1.isObjectOrFunction(e) && "then" in e && isFunctionUtil_1.isFunction(e.then);
  require.d(exports, {
    asyncContentProxy: function () {
      return d;
    },
    createDelayedPromise: function () {
      return s;
    },
    promiseWithTimeout: function () {
      return c;
    },
    isPromiseLike: function () {
      return h;
    }
  });
}