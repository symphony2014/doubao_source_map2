// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AE' to 'handleUnauthorized'
// - Renamed export 'gD' to 'processChatResponse'
// - Renamed export 'Rk' to 'validateChatError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 374853
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  let r = e => e == null ? undefined : e["x-tt-logid"];
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var chatErrorEventManager = require("chat-error-event-manager") /*id: 211398*/;
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var apiErrorHandler = require("api-error-handler") /*id: 291616*/;
  let u = e => {
    var t;
    var n;
    if (!apiErrorChecker.isApiError(e) || e == null || (t = e.errorOption) === null || t === undefined || !t.code || e == null || (n = e.errorOption) === null || n === undefined || !n.message) {
      return false;
    }
    {
      let t = Object.values(chatErrorCodes.userErrorCodes).filter(e => typeof e == "number");
      return !!isObjectOrFunction_1_1.isObjectOrFunction(e) && !!(e instanceof apiErrorHandler.ApiError) && !!t.includes(Number(e == null ? undefined : e.errorOption?.code)) && !!(e == null ? undefined : e.errorOption?.message);
    }
  };
  let c = e => {
    let {
      responseBody: t = {},
      responseHeaders: n,
      responseStatusCode: i,
      responseStatusText: o,
      requestConfig: u
    } = e;
    let {
      code: c,
      msg: d,
      status_code: h,
      status_desc: m
    } = t;
    let g = c ?? h;
    let f = d ?? m;
    let p = r(n);
    if (i === 401) {
      chatErrorEventManager.chatEventEmitter.emit(chatErrorEventManager.chatErrorCodes.UNAUTHORIZED);
      throw new apiErrorHandler.ApiError({
        message: f,
        code: String(g),
        httpStatus: o || String(i),
        logId: p,
        response: t,
        requestConfig: u
      });
    }
    if (i !== 200) {
      throw new apiErrorHandler.ApiError({
        message: f,
        code: String(g),
        httpStatus: o || String(i),
        logId: p,
        response: t,
        requestConfig: u
      });
    }
    if (i === 200 && g !== 0) {
      switch (g) {
        case chatErrorCodes.chatErrorCodes.DOUBAO_REGION_BAN:
          chatErrorEventManager.chatEventEmitter.emit(chatErrorEventManager.chatErrorCodes.DOUBAO_REGION_BAN, f, p);
          break;
        case chatErrorCodes.chatErrorCodes.NOACCESS:
          chatErrorEventManager.chatEventEmitter.emit(chatErrorEventManager.chatErrorCodes.NOACCESS, f, p);
          break;
        case chatErrorCodes.chatErrorCodes.SHARK_BLOCKED:
          chatErrorEventManager.chatEventEmitter.emit(chatErrorEventManager.chatErrorCodes.SHARK_BLOCK, f, p);
          break;
        case chatErrorCodes.chatErrorCodes.COUNTRY_RESTRICTED:
          chatErrorEventManager.chatEventEmitter.emit(chatErrorEventManager.chatErrorCodes.COUNTRY_RESTRICTED, f, p);
          break;
        case chatErrorCodes.chatErrorCodes.NOT_LOGIN:
        case chatErrorCodes.chatErrorCodes.NO_INNER_SSO_TOKEN:
        case chatErrorCodes.chatErrorCodes.OPEN_AUTH_INVALID:
          chatErrorEventManager.chatEventEmitter.emit(chatErrorEventManager.chatErrorCodes.UNAUTHORIZED, f, p);
          break;
        case chatErrorCodes.chatErrorCodes.NEED_TO_WAIT:
          chatErrorEventManager.chatEventEmitter.emit(chatErrorEventManager.chatErrorCodes.NEED_TO_WAIT, f, p);
          break;
        case chatErrorCodes.chatErrorCodes.USER_BANNED:
          chatErrorEventManager.chatEventEmitter.emit(chatErrorEventManager.chatErrorCodes.USER_BANNED, f, p);
          break;
        case chatErrorCodes.chatErrorCodes.USER_BAN_RELEASED:
        case chatErrorCodes.chatErrorCodes.USER_BAN_APPEALING:
        case chatErrorCodes.chatErrorCodes.USER_BAN_APPEAL_FAILED:
          chatErrorEventManager.chatEventEmitter.emit(chatErrorEventManager.chatErrorCodes.USER_BANNED_OTHER, f, p);
      }
      throw new apiErrorHandler.ApiError({
        message: f,
        code: String(g),
        httpStatus: o || String(i),
        logId: p,
        response: t,
        requestConfig: u
      });
    }
    if (i === 200) {
      return {
        ...t,
        _meta: {
          logId: p
        }
      };
    }
  };
  let d = (e, t) => {
    let {
      headers: i,
      data: o
    } = e.response ?? {};
    let l = r(i);
    return t === 401 && (chatErrorEventManager.chatEventEmitter.emit(chatErrorEventManager.chatErrorCodes.UNAUTHORIZED, o == null ? undefined : o.msg, l), true);
  };
  require.d(exports, {
    handleUnauthorized: function () {
      return d;
    },
    processChatResponse: function () {
      return c;
    },
    validateChatError: function () {
      return u;
    }
  });
}