// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fh' to 'isValidError'
// - Renamed export 'Fu' to 'isErrorMessage'
// - Renamed export 'MP' to 'isCaptchaCloseError'
// - Renamed export 'VQ' to 'isApiError'
// - Renamed export 'W7' to 'ApiError'
// - Renamed export 'YA' to 'isCloseCaptcha'
// - Renamed export 'YM' to 'ErrorCode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40579.078245ff.js
         * chunkId: 40579
         * moduleId: 264039
         */
module.exports = function (module, exports, require) {
  var r;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  (r = {})[r.NOT_LOGGED_IN = 13] = "NOT_LOGGED_IN";
  r[r.APP_NO_ACCESS = 16] = "APP_NO_ACCESS";
  r[r.ALREADY_BIND_CONFLICT = 1041] = "ALREADY_BIND_CONFLICT";
  r[r.TARGET_BIND_CONFLICT = 1030] = "TARGET_BIND_CONFLICT";
  r[r.NO_BIND_MOBILE = 1342] = "NO_BIND_MOBILE";
  r[r.LAST_PASSPORT = 1038] = "LAST_PASSPORT";
  r[r.PHONE_BIND_CONFLICT = 1057] = "PHONE_BIND_CONFLICT";
  r[r.AUTH_VERIFY_FAIL = 1045] = "AUTH_VERIFY_FAIL";
  r[r.PHONE_ALREADY_REGISTERED = 1001] = "PHONE_ALREADY_REGISTERED";
  r[r.VERIFY_CODE_EXCEED = 1206] = "VERIFY_CODE_EXCEED";
  r[r.CSRF_TOKEN_ERROR = 2035] = "CSRF_TOKEN_ERROR";
  r[r.BIND_TOO_OFTEN = 2068] = "BIND_TOO_OFTEN";
  r[r.DOUYIN_ACCOUNT_SECONDARY_BLOCKED = 4048] = "DOUYIN_ACCOUNT_SECONDARY_BLOCKED";
  r[r.DOUBAO_NON_CN_MOBILE_REGISTRY_BAN = 4978580001] = "DOUBAO_NON_CN_MOBILE_REGISTRY_BAN";
  r[r.DOUBAO_APPLE_REGISTRY_BAN = 4978580002] = "DOUBAO_APPLE_REGISTRY_BAN";
  let i = r;
  class a extends Error {
    static from(e) {
      let r = e == null ? undefined : e.data?.description;
      let o = e == null ? undefined : e.data?.error_code;
      let i = e == null ? undefined : e.data;
      return new a(o, r ? String(r) : undefined, i);
    }
    constructor(e, t, n) {
      super(t);
      this.code = e;
      this.description = t;
      this.raw = n;
    }
  }
  let s = e => e instanceof a;
  let l = e => s(e) && e.code === 1011;
  let u = e => e === "CLOSE_CAPTCHA";
  let c = e => !isUndefinedCheck.isUndefined(e == null ? undefined : e.description) && !isUndefinedCheck.isUndefined(e == null ? undefined : e.error_code);
  let d = e => (e == null ? undefined : e.message) === "error";
  require.d(exports, {
    isValidError: function () {
      return c;
    },
    isErrorMessage: function () {
      return d;
    },
    isCaptchaCloseError: function () {
      return l;
    },
    isApiError: function () {
      return s;
    },
    ApiError: function () {
      return a;
    },
    isCloseCaptcha: function () {
      return u;
    },
    ErrorCode: function () {
      return i;
    }
  });
}