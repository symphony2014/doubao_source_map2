// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'classGeneratorUtil'
// - Resolved require(957901) to 'class-generator-util'
// - Renamed variable 'o' to 'isThenableCheck'
// - Resolved require(20884) to 'is-thenable-check'
// - Renamed variable 'i' to 'localforageAsyncStorage'
// - Resolved require(383061) to 'localforage-async-storage'
// - Renamed variable 'a' to 'cryptoJsBundle'
// - Resolved require(676004) to 'crypto-js-bundle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 457399
         */
module.exports = function (module, exports, require) {
  var classGeneratorUtil = require("class-generator-util") /*id: 957901*/;
  var isThenableCheck = require("is-thenable-check") /*id: 20884*/;
  var localforageAsyncStorage = require("localforage-async-storage") /*id: 383061*/;
  var cryptoJsBundle = require("crypto-js-bundle") /*id: 676004*/;
  var c = classGeneratorUtil.generate(function (e) {
    var t = localforageAsyncStorage.createInstance({
      name: e.name || "byted-local-forage",
      size: 49807360
    });
    this.storage = t;
    if (e) {
      this.encrypt = e.encrypt;
      this.decrypt = e.decrypt;
    }
  });
  function f(e) {
    return e;
  }
  c.definePrototype({
    encrypt: f,
    decrypt: f
  }, {
    writable: true
  });
  var s = "SECURE_STORAGE";
  var u = "HELLO_STORAGE";
  c.definePrototype({
    hash: function (e) {
      return (e = cryptoJsBundle.SHA256(e, "BUILD_IN_HASH_KEY")).toString();
    },
    verify: function (e, t) {
      var r = this;
      return r.getItem(s, e).then(function (e) {
        if (e === null) {
          if (!t) {
            r.setItem(s, u);
          }
          return true;
        } else {
          return e === u;
        }
      }).catch(function (e) {
        return false;
      });
    },
    getItem: function (e, t, r) {
      var n = t && t.decrypt || this.decrypt;
      try {
        if (!r) {
          e = this.hash(e);
        }
      } catch (e) {
        return Promise.reject(e);
      }
      var i = this.storage.getItem(e);
      if (isThenableCheck(i)) {
        return i.then(function (e) {
          if (e) {
            try {
              e = n(e);
            } catch (e) {
              return Promise.reject(e);
            }
          }
          return e;
        });
      } else if (typeof i != "string") {
        return i;
      } else {
        return n(i);
      }
    },
    setItem: function (e, t, r) {
      var n = this;
      if (!r) {
        e = n.hash(e);
      }
      if (isThenableCheck(t = n.encrypt(t))) {
        return t.then(function (t) {
          return n.storage.setItem(e, t);
        }).catch(function (e) {
          return false;
        });
      } else {
        return n.storage.setItem(e, t);
      }
    },
    removeItem: function (e) {
      e = this.hash(e);
      return this.storage.removeItem(e);
    },
    removeByHashKey: function (e) {
      return this.storage.removeItem(e);
    },
    clear: function () {
      return this.storage.clear();
    },
    key: function (e) {
      return this.storage.key(e);
    },
    keys: function () {
      return this.storage.keys();
    },
    length: {
      get: function () {
        return this.storage.length;
      }
    },
    updateEncryption: function (e) {
      if (!e.hasOwnProperty("decrypt")) {
        throw Error("decrypt() method should exist on oldOpts");
      }
      var t = this;
      return t.verify(e, true).then(function (r) {
        return !!r && t.keys().then(function (r) {
          return Promise.all(r.map(function (r) {
            var n = null;
            return t.getItem(r, e, true).then(function (e) {
              n = e;
              return t.setItem(r, n, true);
            });
          })).then(function (e) {
            return true;
          });
        }).catch(function (e) {
          return false;
        });
      });
    }
  });
  module.exports = c;
}