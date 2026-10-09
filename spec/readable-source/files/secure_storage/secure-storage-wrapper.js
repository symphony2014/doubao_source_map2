// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'secureLocalStorageWrapper'
// - Resolved require(457399) to 'secure-local-storage-wrapper'
// - Renamed variable 'o' to 'cryptoAesImplementation'
// - Resolved require(739433) to 'crypto-aes-implementation'
// - Renamed variable 'a' to 'cryptoUtf8Encoding'
// - Resolved require(195288) to 'crypto-utf8-encoding'
// - Renamed variable 'u' to 'sha256HmacHasher'
// - Resolved require(80077) to 'sha256-hmac-hasher'
// - Renamed variable 'l' to 'runtimeEnvFlags'
// - Resolved require(573139) to 'runtime-env-flags'
// - Renamed variable 'd' to 'idleCallbackPolyfill_1'
// - Resolved require(55404) to 'idle-callback-polyfill_1'
// - Renamed variable 'f' to 'boolDefaultUtil'
// - Resolved require(87573) to 'bool-default-util'
// - Updated imported property 'd' to 'getDefaultBool' (module 87573)
// - Updated imported property 'K' to 'requestIdleCallback' (module 55404)
// - Updated imported property 'G' to 'cancelIdleCallback' (module 55404)
// - Updated imported property 'TQ' to 'isLocalDev' (module 573139)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: secure_storage.ae005784.js
         * chunkId: 8204
         * moduleId: 331785
         */
module.exports = function (module, exports, require) {
  var secureLocalStorageWrapper = require("secure-local-storage-wrapper") /*id: 457399*/;
  var i = secureLocalStorageWrapper;
  var cryptoAesImplementation = require("crypto-aes-implementation") /*id: 739433*/;
  var n = cryptoAesImplementation;
  var cryptoUtf8Encoding = require("crypto-utf8-encoding") /*id: 195288*/;
  var c = cryptoUtf8Encoding;
  var sha256HmacHasher = require("sha256-hmac-hasher") /*id: 80077*/;
  var h = sha256HmacHasher;
  var runtimeEnvFlags = require("runtime-env-flags") /*id: 573139*/;
  var idleCallbackPolyfill_1 = require("idle-callback-polyfill_1") /*id: 55404*/;
  var boolDefaultUtil = require("bool-default-util") /*id: 87573*/;
  let {
    dbOpTimeout: g
  } = function () {
    let e = {
      dbOpTimeout: 60000
    };
    let t = boolDefaultUtil.getDefaultBool("ccm_docx_storage", e);
    return {
      ...e,
      ...t
    };
  }();
  let v = () => new Promise((e, t) => {
    setTimeout(() => t(Error("DB operation timeout")), g);
  });
  function m(e, t, r) {
    var s;
    if ((t = typeof (s = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, t || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? s : s + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class _ {
    get dirver() {
      return this.secureStorage.storage.driver();
    }
    setItem(e, t) {
      return new Promise(r => {
        let s = idleCallbackPolyfill_1.requestIdleCallback(() => {
          var s;
          if ((s = this.idleTask.get(e)) !== null && s !== undefined) {
            s.shift();
          }
          if (!this.idleTask.get(e)?.length) {
            this.idleTask.delete(e);
          }
          r(Promise.race([v(), this.secureStorage.setItem(e, t, !!runtimeEnvFlags.isLocalDev)]));
        });
        this.idleTask.set(e, this.idleTask.has(e) ? this.idleTask.get(e).concat({
          task: s,
          resolve: r
        }) : [{
          task: s,
          resolve: r
        }]);
      });
    }
    getItem(e) {
      return this.secureStorage.getItem(e, undefined, !!runtimeEnvFlags.isLocalDev);
    }
    removeItem(e) {
      if (this.idleTask.has(e)) {
        var t;
        if ((t = this.idleTask.get(e)) !== null && t !== undefined) {
          t.forEach(e => {
            let {
              task: t,
              resolve: r
            } = e;
            idleCallbackPolyfill_1.cancelIdleCallback(t);
            if (r != null) {
              r();
            }
          });
        }
        this.idleTask.delete(e);
      }
      if (runtimeEnvFlags.isLocalDev) {
        return this.secureStorage.removeByHashKey(e);
      } else {
        return this.secureStorage.removeItem(e);
      }
    }
    constructor(e) {
      this.userID = e;
      m(this, "secureStorage", undefined);
      m(this, "secureDbName", `sophon-forage:${this.userID}`);
      m(this, "secret", h(`fa83ce.${this.userID}`).toString());
      m(this, "idleTask", new Map());
      m(this, "encrypt", e => runtimeEnvFlags.isLocalDev ? e : n.encrypt(e, this.secret).toString());
      m(this, "decrypt", e => runtimeEnvFlags.isLocalDev || !e ? e : n.decrypt(e, this.secret).toString(c));
      this.secureStorage = new i({
        name: this.secureDbName,
        encrypt: this.encrypt,
        decrypt: this.decrypt
      });
      this.secureStorage.storage.setDriver(this.secureStorage.storage.INDEXEDDB);
    }
  }
  require.r(exports);
  require.d(exports, {
    Storage: function () {
      return _;
    }
  });
}