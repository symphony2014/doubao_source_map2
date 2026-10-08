// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'DebugActionType'
// - Renamed export 't' to 'generateDebugTokens'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 419751
         */
module.exports = function (module, exports, require) {
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let o = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];
  let a = async () => await asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        default: e
      } = await require.e("hashjs-256") /*id: 62121*/.then(require.t.bind(require, 79830, 23));
      return e;
    }
  });
  let l = async e => new Uint8Array(!function (e) {
    if (function (e) {
      if (typeof e == "object" && typeof e.crypto == "object") {
        let {
          getRandomValues: t
        } = e.crypto;
        return typeof t == "function";
      }
      return false;
    }(e) && typeof e.crypto.subtle == "object") {
      var t;
      let {
        subtle: n
      } = e.crypto;
      return (t = n) && o.every(e => typeof t[e] == "function");
    }
    return false;
  }(window) ? (await a())().update(e).digest() : await window.crypto.subtle.digest("SHA-256", e));
  let s = async () => await asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        BAtos: e,
        stob64: t,
        stoBA: i
      } = await require.e("jsrsasign") /*id: 80443*/.then(require.t.bind(require, 181683, 19));
      return {
        BAtos: e,
        stob64: t,
        stoBA: i
      };
    }
  });
  let d = async e => {
    let {
      stob64: t
    } = await s();
    return t(e).replace(/[+\/]/g, e => e === "+" ? "-" : "_");
  };
  let c = async e => e ? await d(JSON.stringify({
    typ: "JWT",
    alg: "Sha256",
    tfv: e
  })) : await d(JSON.stringify({
    typ: "JWT",
    alg: "Sha256"
  }));
  let u = async (e, t) => {
    let {
      BAtos: n,
      stoBA: i
    } = await s();
    return await d(n(Array.from(await l(new Uint8Array(i(`${e}.${t}`))))));
  };
  let v = async e => {
    let t = await c();
    let n = await d(JSON.stringify({
      uid: e.userId,
      logId: e.logId,
      sctId: e.sectionId,
      msgId: e.messageId,
      ts: e.timestamp,
      dkv: e.deviceKeyVersion
    }));
    if (!e.sectionId && !e.messageId) {
      throw Error("Please give section_id or message_id");
    }
    let i = await u(t, n);
    if (!i) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "token_hash_invaild",
        meta: {
          log_id: e.logId,
          msg_id: e.messageId,
          ts: e.timestamp,
          dkv: e.deviceKeyVersion,
          sct_id: e.sectionId
        }
      });
    }
    return `${t}.${n}.${i}`;
  };
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var m = {
    Report: 1,
    Debug: 2,
    Share: 3,
    Copy: 6,
    Submit: 7
  };
  let g = async (e, t) => {
    let n = [];
    n = Array.isArray(e) ? e : [e];
    let i = Math.floor(Date.now() / 1000);
    let o = await Promise.all(n.map(async e => {
      let r = (e == null ? undefined : e.ext?.inner_log_id) || (e == null ? undefined : e.local_info?.log_id);
      return {
        log_id: r,
        token: await v({
          userId: chatUserInfoActions.getUserIdStr() || "",
          logId: r || "",
          deviceKeyVersion: "0",
          timestamp: i,
          sectionId: e == null ? undefined : e.section_id,
          messageId: e == null ? undefined : e.message_id
        })
      };
    }));
    try {
      await apiServicesCollection.PrivacyApiService.DebugSaveToken({
        batch_data: o,
        feedback_source: t
      });
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: " update debug token failed",
        error: e
      });
    }
    return o;
  };
  require.d(exports, {
    DebugActionType: function () {
      return m;
    },
    generateDebugTokens: function () {
      return g;
    }
  });
}