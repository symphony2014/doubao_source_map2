// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'EF' to 'exportKeyJwk'
// - Renamed export 'HI' to 'generateKeyPair'
// - Renamed export 'NA' to 'decryptImportKeys'
// - Renamed export 'Xx' to 'signData'
// - Renamed export 'yh' to 'encryptKeyData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17574.32d72dbf.js
         * chunkId: 17574
         * moduleId: 859863
         */
module.exports = function (module, exports, require) {
  let o;
  var chatInputTimestampUtil = require("chat-input-timestamp-util") /*id: 688751*/;
  var a = (e, t, n) => new Promise((o, r) => {
    var a = e => {
      try {
        s(n.next(e));
      } catch (e) {
        r(e);
      }
    };
    var i = e => {
      try {
        s(n.throw(e));
      } catch (e) {
        r(e);
      }
    };
    var s = e => e.done ? o(e.value) : Promise.resolve(e.value).then(a, i);
    s((n = n.apply(e, t)).next());
  });
  let i = {
    name: "ECDSA",
    namedCurve: "P-256"
  };
  let s = () => {
    var e;
    var t;
    if (typeof window != "undefined" && ((e = window == null ? undefined : window.crypto) == null ? undefined : e.subtle)) {
      return window.crypto.subtle;
    }
    if ((t = globalThis == null ? undefined : globalThis.crypto) == null ? undefined : t.subtle) {
      return globalThis.crypto.subtle;
    }
    throw Error("WebCrypto subtle not supported");
  };
  let l = () => {
    if (typeof window != "undefined" && (window == null ? undefined : window.crypto)) {
      return window.crypto;
    }
    if (globalThis == null ? undefined : globalThis.crypto) {
      return globalThis.crypto;
    }
    throw Error("WebCrypto crypto not supported");
  };
  let c = e => a(undefined, null, function* () {
    o ||= yield s().generateKey(i, e, ["sign", "verify"]);
    return o;
  });
  let d = e => a(undefined, null, function* () {
    return yield s().exportKey("jwk", e);
  });
  let u = e => a(undefined, null, function* () {
    let [t, n] = yield Promise.all([s().importKey("jwk", e.privateKey, i, false, ["sign"]), s().importKey("jwk", e.publicKey, i, true, ["verify"])]);
    return {
      privateKey: t,
      publicKey: n
    };
  });
  let p = (e, t) => a(undefined, null, function* () {
    return yield s().sign({
      name: "ECDSA",
      hash: {
        name: "SHA-256"
      }
    }, e, t);
  });
  let h = e => a(undefined, null, function* () {
    let t = new TextEncoder();
    let n = s();
    let o = yield n.importKey("raw", t.encode(e), "PBKDF2", false, ["deriveKey"]);
    return n.deriveKey({
      name: "PBKDF2",
      salt: t.encode("fixed-salt"),
      iterations: 100000,
      hash: "SHA-256"
    }, o, {
      name: "AES-GCM",
      length: 256
    }, false, ["encrypt", "decrypt"]);
  });
  let f = e => a(undefined, null, function* () {
    let t = yield s().generateKey(i, true, ["sign", "verify"]);
    let [n, o] = yield Promise.all([d(t.privateKey), d(t.publicKey)]);
    return yield function (e, t) {
      return a(this, null, function* () {
        let n = s();
        let o = yield h(t);
        let r = l().getRandomValues(new Uint8Array(12));
        let a = yield n.encrypt({
          name: "AES-GCM",
          iv: r
        }, o, new TextEncoder().encode(e));
        let i = new Uint8Array(r.length + a.byteLength);
        i.set(r, 0);
        i.set(new Uint8Array(a), r.length);
        return btoa(String.fromCharCode(...i));
      });
    }(JSON.stringify({
      privateKey: n,
      publicKey: o
    }), e || chatInputTimestampUtil.tokenGeneratorId);
  });
  let m = (e, ...t) => a(undefined, [e, ...t], function* (e, t = chatInputTimestampUtil.tokenGeneratorId) {
    let n = yield h(t);
    let o = Uint8Array.from(atob(e), e => e.charCodeAt(0));
    let a = o.slice(0, 12);
    let i = o.slice(12);
    let l = yield s().decrypt({
      name: "AES-GCM",
      iv: a
    }, n, i);
    let c = JSON.parse(new TextDecoder().decode(l));
    return yield u(c);
  });
  require.d(exports, {
    exportKeyJwk: function () {
      return d;
    },
    generateKeyPair: function () {
      return c;
    },
    decryptImportKeys: function () {
      return m;
    },
    signData: function () {
      return p;
    },
    encryptKeyData: function () {
      return f;
    }
  });
}