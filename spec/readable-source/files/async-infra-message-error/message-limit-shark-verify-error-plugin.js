// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatMessageRetryHandler'
// - Resolved require(725789) to 'chat-message-retry-handler'
// - Renamed variable 'n' to 'uniParamsManager'
// - Resolved require(375503) to 'uni-params-manager'
// - Renamed variable 'o' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'a' to 'chatConfigConstants'
// - Resolved require(577013) to 'chat-config-constants'
// - Renamed variable 'l' to 'securityVerifySdkLoader'
// - Resolved require(279207) to 'security-verify-sdk-loader'
// - Renamed variable 's' to 'chatMessageLimitSymbol_2'
// - Resolved require(566786) to 'chat-message-limit-symbol_2'
// - Updated imported property 'i' to 'initSecuritySdk' (module 279207)
// - Updated imported property 'g' to 'getFingerprint' (module 279207)
// - Updated imported property 'p' to 'uniParamsManager' (module 375503)
// - Updated imported property 'Lp' to 'chatIdLp' (module 577013)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Y' to 'retrySendMessage' (module 725789)
// - Updated imported property 'Q' to 'messageLimitSymbol' (module 566786)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 830520
         */
module.exports = function (module, exports, require) {
  var chatMessageRetryHandler = require("chat-message-retry-handler") /*id: 725789*/;
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatConfigConstants = require("chat-config-constants") /*id: 577013*/;
  var securityVerifySdkLoader = require("security-verify-sdk-loader") /*id: 279207*/;
  var chatMessageLimitSymbol_2 = require("chat-message-limit-symbol_2") /*id: 566786*/;
  class u {
    async handleSendingMessageError(e) {
      var r;
      let s = (r = e.error_details) === null || r === undefined ? undefined : r.extra_info?.decision;
      let u = await securityVerifySdkLoader.initSecuritySdk();
      if (s) {
        u.init({
          commonOptions: {
            aid: uniParamsManager.uniParamsManager.getParam("aid"),
            iid: "0",
            did: "0",
            repoId: chatConfigConstants.chatIdLp
          },
          captchaOptions: {
            fp: await securityVerifySdkLoader.getFingerprint(),
            showMode: "mask",
            errorCb: e => {
              loggerServiceCore.defaultLogger.persist.error({
                error: e,
                message: e.message
              });
            },
            successCb: async () => {
              (await chatMessageRetryHandler.retrySendMessage({
                message: e
              }))();
              loggerServiceCore.defaultLogger.persist.success("message limit CAPTCHA verify success");
            }
          }
        }, () => {
          loggerServiceCore.defaultLogger.persist.success("CAPTCHA service init success");
          u.render({
            verify_data: s
          });
        }, e => {
          let t = Error(`type: ${e.type}, message: ${e.msg}`);
          loggerServiceCore.defaultLogger.persist.error({
            error: t,
            message: t.message
          });
        });
      }
    }
    constructor() {
      var e;
      var t;
      var r;
      e = "pluginIdentifier";
      t = chatMessageLimitSymbol_2.messageLimitSymbol;
      if ((e = typeof (r = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var i = r.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    MessageLimitSharkVerifyMessageErrorPlugin: function () {
      return u;
    }
  });
}