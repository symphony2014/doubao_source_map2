// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'secureLocalStorageWrapper'
// - Resolved require(457399) to 'secure-local-storage-wrapper'
// - Renamed variable 'n' to 'cryptoAesImplementation'
// - Resolved require(739433) to 'crypto-aes-implementation'
// - Renamed variable 'o' to 'cryptoUtf8Encoding'
// - Resolved require(195288) to 'crypto-utf8-encoding'
// - Renamed variable 'u' to 'fileNodeSelectorUtils'
// - Resolved require(696977) to 'file-node-selector-utils'
// - Renamed variable 'l' to 'reduxStoreInitializer'
// - Resolved require(75100) to 'redux-store-initializer'
// - Renamed variable 'd' to 'deferredPromiseFactory_1'
// - Resolved require(397926) to 'deferred-promise-factory_1'
// - Renamed variable 'f' to 'userEnvironmentUtils'
// - Resolved require(107339) to 'user-environment-utils'
// - Renamed variable '_' to 'docxEventCollector'
// - Resolved require(477626) to 'docx-event-collector'
// - Renamed variable 'g' to 'cookieValueReader'
// - Resolved require(167512) to 'cookie-value-reader'
// - Renamed variable 'h' to 'runtimeEnvFlags'
// - Resolved require(573139) to 'runtime-env-flags'
// - Renamed variable 'm' to 'jsonSafeUtils'
// - Resolved require(39873) to 'json-safe-utils'
// - Renamed variable 'v' to 'flowDocChatMemberIo'
// - Resolved require(956604) to 'flow-doc-chat-member-io'
// - Renamed variable 'p' to 'docUpgradeConfigConstants'
// - Resolved require(12463) to 'doc-upgrade-config-constants'
// - Updated imported property 'TQ' to 'isLocalDev' (module 573139)
// - Updated imported property 'ej' to 'getCookieValue' (module 167512)
// - Updated imported property 'f' to 'deferredPromise' (module 397926)
// - Updated imported property 'bJ' to 'getCurrentDocToken' (module 696977)
// - Updated imported property 'ZP' to 'reduxStore' (module 75100)
// - Updated imported property 'tF' to 'getUserInfo' (module 107339)
// - Updated imported property 'd' to 'safeJsonParse' (module 39873)
// - Updated imported property 'r3' to 'wrappedCollector' (module 477626)
// - Updated imported property 'VN' to 'ccmDocUpgradeInfo' (module 12463)
// - Updated imported property 'k' to 'uploadOldDocOffline' (module 12463)
// - Updated imported property 's8' to 'getChatIoInstance' (module 956604)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: upload-old-doc-offline-data.d2e47053.js
         * chunkId: 82011
         * moduleId: 808033
         */
module.exports = function (module, exports, require) {
  var secureLocalStorageWrapper = require("secure-local-storage-wrapper") /*id: 457399*/;
  var i = secureLocalStorageWrapper;
  var cryptoAesImplementation = require("crypto-aes-implementation") /*id: 739433*/;
  var s = cryptoAesImplementation;
  var cryptoUtf8Encoding = require("crypto-utf8-encoding") /*id: 195288*/;
  var c = cryptoUtf8Encoding;
  var fileNodeSelectorUtils = require("file-node-selector-utils") /*id: 696977*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var deferredPromiseFactory_1 = require("deferred-promise-factory_1") /*id: 397926*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var cookieValueReader = require("cookie-value-reader") /*id: 167512*/;
  var runtimeEnvFlags = require("runtime-env-flags") /*id: 573139*/;
  var jsonSafeUtils = require("json-safe-utils") /*id: 39873*/;
  var flowDocChatMemberIo = require("flow-doc-chat-member-io") /*id: 956604*/;
  var docUpgradeConfigConstants = require("doc-upgrade-config-constants") /*id: 12463*/;
  function y(e, t, r) {
    var a;
    if ((t = typeof (a = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var a = r.call(e, t || "default");
        if (typeof a != "object") {
          return a;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? a : a + "") in e) {
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
  class S {
    setItem(e, t) {
      return this.secureStorage.setItem(e, t, !!runtimeEnvFlags.isLocalDev);
    }
    getItem(e) {
      return this.secureStorage.getItem(e, undefined, !!runtimeEnvFlags.isLocalDev);
    }
    removeItem(e) {
      return this.secureStorage.removeItem(e);
    }
    constructor(e) {
      this.userID = e;
      y(this, "secureStorage", undefined);
      y(this, "secureDbName", `docs-forage-v2:${this.userID}`);
      y(this, "secret", cookieValueReader.getCookieValue("et") || "");
      y(this, "encrypt", e => runtimeEnvFlags.isLocalDev ? e : s.encrypt(e, this.secret).toString());
      y(this, "decrypt", e => runtimeEnvFlags.isLocalDev || !e ? e : s.decrypt(e, this.secret).toString(c));
      this.secureStorage = new i({
        name: this.secureDbName,
        encrypt: this.encrypt,
        decrypt: this.decrypt
      });
      this.secureStorage.storage.setDriver(this.secureStorage.storage.INDEXEDDB);
    }
  }
  function D(e, t, r, a) {
    return `${e}_${t}_${r}_${a}`;
  }
  let E = "CHANGES_MAP";
  let I = "USER_CHANGESET";
  let N = "COMMITED_CHANGESET";
  function $(e, t, r, a, i = "") {
    let n = i ? `${I}_${i}` : I;
    let s = i ? `${N}_${i}` : N;
    let o = Promise.all([e.getItem(D(t, r, a, n)), e.getItem(D(t, r, a, s))]);
    let {
      promise: c,
      resolve: u,
      reject: l
    } = deferredPromiseFactory_1.deferredPromise();
    o.then(e => {
      let [t, r] = e;
      u({
        uniqId: i,
        userChange: t || "",
        submitChange: r || ""
      });
    }).catch(e => {
      l({
        fail: true,
        e
      });
    });
    return c;
  }
  async function b() {
    let e = fileNodeSelectorUtils.getCurrentDocToken(reduxStoreInitializer.reduxStore.getState()).extra_fields.upgrade_info.relate_token;
    let {
      userId: t,
      tenantId: r
    } = userEnvironmentUtils.getUserInfo();
    if (!t || !r || !e) {
      return;
    }
    let a = new S(t);
    let i = await a.getItem(D(e, r, t, E));
    let n = jsonSafeUtils.safeJsonParse(i);
    if (!n) {
      if (typeof i == "string" && i.length > 0) {
        docxEventCollector.wrappedCollector(docUpgradeConfigConstants.ccmDocUpgradeInfo, {
          action: docUpgradeConfigConstants.uploadOldDocOffline,
          stage: "parse_changes_map_fail",
          extra: "parse data error"
        });
      }
      return;
    }
    let s = [];
    let o = Object.keys(n);
    o.forEach(i => {
      if (n[i] === 1) {
        s.push($(a, e, r, t, i));
      }
    });
    if (s.length < 1) {
      return;
    }
    s.push($(a, e, r, t));
    let c = await Promise.all(s);
    if (c.filter(e => e.fail).length) {
      docxEventCollector.wrappedCollector(docUpgradeConfigConstants.ccmDocUpgradeInfo, {
        action: docUpgradeConfigConstants.uploadOldDocOffline,
        stage: "get_data_from_local_fail"
      });
      return;
    }
    docxEventCollector.wrappedCollector(docUpgradeConfigConstants.ccmDocUpgradeInfo, {
      action: docUpgradeConfigConstants.uploadOldDocOffline,
      stage: "send_data_start"
    });
    flowDocChatMemberIo.getChatIoInstance().request({
      type: "DOC",
      data: {
        type: "USER_CHANGES",
        token: e,
        offlineData: c
      },
      version: 2
    }).then(i => {
      let u = i == null ? undefined : i.data?.code;
      docxEventCollector.wrappedCollector(docUpgradeConfigConstants.ccmDocUpgradeInfo, {
        action: docUpgradeConfigConstants.uploadOldDocOffline,
        stage: "send_data_end",
        extra: `response code is ${u}, request_id: ${i == null ? undefined : i.request_id}`
      });
      if ((i == null ? undefined : i.data?.code) === 8140202) {
        a.removeItem(D(e, r, t, E));
        o.filter(e => n[e] === 1).forEach(i => {
          a.removeItem(D(e, r, t, `${I}_${i}`));
          a.removeItem(D(e, r, t, `${N}_${i}`));
        });
        a.removeItem(D(e, r, t, I));
        a.removeItem(D(e, r, t, N));
        docxEventCollector.wrappedCollector(docUpgradeConfigConstants.ccmDocUpgradeInfo, {
          action: docUpgradeConfigConstants.uploadOldDocOffline,
          stage: "remove local data end"
        });
      }
    }).catch(e => {
      docxEventCollector.wrappedCollector(docUpgradeConfigConstants.ccmDocUpgradeInfo, {
        action: docUpgradeConfigConstants.uploadOldDocOffline,
        stage: "send_user_changes_fail",
        extra: `catch error when send user changes, err: ${e}`
      });
    });
  }
  require.d(exports, {
    uploadOldDocOfflineData: function () {
      return b;
    }
  });
}