// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'generateDpopToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17574.32d72dbf.js
         * chunkId: 17574
         * moduleId: 218459
         */
module.exports = function (module, exports, require) {
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var chatInputTimestampUtil = require("chat-input-timestamp-util") /*id: 688751*/;
  var asyncSkillCryptoUtils = require("async-skill-crypto-utils") /*id: 859863*/;
  let i = e => btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\+/g, "-").replace(/\//g, "_").replace(/[=]/g, "");
  var chatInputLogger = require("chat-input-logger") /*id: 225602*/;
  var l = (e, t, n) => new Promise((o, r) => {
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
  let c = new class {
    constructor() {
      this.delta = 0;
      this.inited = false;
      this.getServerTimestamp = () => Promise.resolve(0);
      this.lastTimeLocalTimestamp = 0;
      this.expiresIn = 0;
      this.timeout = chatInputTimestampUtil.requestTimeout;
    }
    updateServerClock(e) {
      this.getServerTimestamp = e.getServerTimestamp;
      this.expiresIn = e.expiresIn;
      this.timeout = e.timeout;
    }
    sync() {
      return l(this, null, function* () {
        this.delta = yield function (e, t) {
          return l(this, null, function* () {
            let n = 0;
            let o = new Promise(e => {
              n = setTimeout(() => {
                e(0);
              }, t.timeout);
            });
            let r = yield Promise.race([l(this, null, function* () {
              let t = Date.now();
              chatInputLogger.traceLogger.info("[getServerTimeDelta] getServerTimestamp start, local time:", t);
              let n = (yield e()) * 1000;
              let o = Date.now();
              let r = o - t;
              let a = t + r / 2;
              let i = Math.ceil((n - a) / 1000);
              chatInputLogger.traceLogger.info("[getServerTimeDelta] getServerTimestamp end, rtt:", r, "server time:", n, "local time:", o, "local midpoint:", a, "delta:", i);
              return i;
            }), o]);
            clearTimeout(n);
            if (r) {
              chatInputLogger.traceLogger.info("[getServerTimeDelta] getServerTimestamp has delta:", r);
            } else {
              chatInputLogger.traceLogger.info("[getServerTimeDelta] getServerTimestamp timeout or delta is 0, use local time");
            }
            return r;
          });
        }(this.getServerTimestamp, {
          timeout: this.timeout
        });
        this.inited = true;
        chatInputLogger.traceLogger.info("[ServerClock] sync, delta:", this.delta);
      });
    }
    shouldSync() {
      if (!this.inited) {
        chatInputLogger.traceLogger.info("[ServerClock] not inited, should sync first");
        return true;
      }
      let e = Math.abs(Math.floor(Date.now() / 1000) - this.lastTimeLocalTimestamp) >= this.expiresIn;
      if (e) {
        chatInputLogger.traceLogger.info("[ServerClock] local time is out of date, should sync");
      }
      return e;
    }
    now() {
      return l(this, null, function* () {
        if (this.shouldSync()) {
          chatInputLogger.traceLogger.info("[ServerClock] now, should sync");
          yield this.sync();
        }
        let e = Math.floor(Date.now() / 1000);
        this.lastTimeLocalTimestamp = e;
        let t = e + this.delta;
        chatInputLogger.traceLogger.info("[ServerClock] now,localNow:", e, "delta:", this.delta, " now:", t);
        return t;
      });
    }
  }();
  var d = (e, t, n) => new Promise((o, r) => {
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
  let u = e => d(undefined, null, function* () {
    let t = yield c.now();
    return {
      jti: e.jti || uuidGeneratorUtil.generateUuid(),
      htm: e.htm || "",
      htu: e.htu || "",
      iat: e.iat || t,
      nonce: e.nonce || uuidGeneratorUtil.generateUuid()
    };
  });
  var p = (e, t, n) => new Promise((o, r) => {
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
  let h = e => p(undefined, null, function* () {
    let t = Date.now();
    let n = uuidGeneratorUtil.generateUuid();
    chatInputLogger.traceLogger.updateLoggerInstance({
      loggerInstance: e == null ? undefined : e.logger,
      traceID: n
    });
    chatInputLogger.traceLogger.info("[generateDPoPToken] start, payload:", JSON.stringify(e), "local timestamp:", t);
    let l = typeof (e == null ? undefined : e.expiresIn) == "number" ? e.expiresIn : chatInputTimestampUtil.retryCount;
    if (!(e == null ? undefined : e.iat)) {
      c.updateServerClock({
        getServerTimestamp: (e == null ? undefined : e.getServerTimestamp) || chatInputTimestampUtil.getServerTimestamp,
        expiresIn: l,
        timeout: (e == null ? undefined : e.getServerTimestampTimeout) || chatInputTimestampUtil.requestTimeout
      });
    }
    let d = yield (e == null ? undefined : e.keyPair) ? asyncSkillCryptoUtils.decryptImportKeys(e.keyPair, e.seed || chatInputTimestampUtil.tokenGeneratorId) : asyncSkillCryptoUtils.generateKeyPair(false);
    let p = yield asyncSkillCryptoUtils.exportKeyJwk(d.publicKey);
    let h = i(new TextEncoder().encode(JSON.stringify({
      typ: "dpop+jwt",
      alg: "ES256",
      jwk: p
    })));
    let f = yield u(e || {});
    chatInputLogger.traceLogger.info("[generateDPoPToken] formattedPayload", JSON.stringify(f));
    let m = i(new TextEncoder().encode(JSON.stringify(f)));
    let g = i(yield asyncSkillCryptoUtils.signData(d.privateKey, new TextEncoder().encode(`${h}.${m}`)));
    let y = `${h}.${m}.${g}`;
    chatInputLogger.traceLogger.info("[generateDPoPToken] end", `execution time: ${Date.now() - t}ms`);
    return {
      dpopToken: y,
      expiredTime: l + f.iat,
      expiresIn: l
    };
  });
  require.d(exports, {
    generateDpopToken: function () {
      return h;
    }
  });
}