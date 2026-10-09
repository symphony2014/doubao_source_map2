// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'ttVerifyCenterSdk'
// - Resolved require(480314) to 'tt-verify-center-sdk'
// - Renamed variable 'i' to 'tiktokVerifyCenterSdk'
// - Resolved require(245579) to 'tiktok-verify-center-sdk'
// - Renamed variable 'a' to 'dompurifyCore_1'
// - Resolved require(882291) to 'dompurify-core_1'
// - Renamed variable 's' to 'lottieAnimationCore'
// - Resolved require(728288) to 'lottie-animation-core'
// - Resolved require(80077) to 'sha256-hmac-hasher'
// - Resolved require(941049) to 'crypto-hex-encoder-util'
// - Resolved require(172136) to 'axios-core-module-proxy'
// - Resolved require(806899) to 'rfc3986-uri-validator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 51704
         */
module.exports = function (module, exports, require) {
  function n(e) {
    if (e && typeof e == "object" && "default" in e) {
      return e.default;
    } else {
      return e;
    }
  }
  var ttVerifyCenterSdk = require("tt-verify-center-sdk") /*id: 480314*/;
  var tiktokVerifyCenterSdk = require("tiktok-verify-center-sdk") /*id: 245579*/;
  var dompurifyCore_1 = require("dompurify-core_1") /*id: 882291*/;
  var lottieAnimationCore = require("lottie-animation-core") /*id: 728288*/;
  var u = n(require("sha256-hmac-hasher") /*id: 80077*/);
  var c = n(require("crypto-hex-encoder-util") /*id: 941049*/);
  var f = n(require("axios-core-module-proxy") /*id: 172136*/);
  var d = n(require("rfc3986-uri-validator") /*id: 806899*/);
  function l() {
    return (l = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) {
          if (Object.prototype.hasOwnProperty.call(r, n)) {
            e[n] = r[n];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function p(e, t) {
    e.prototype = Object.create(t.prototype);
    e.prototype.constructor = e;
    (Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      e.__proto__ = t;
      return e;
    })(e, t);
  }
  function v(e, t) {
    if (e == null) {
      return {};
    }
    var r;
    var n;
    var o = {};
    var i = Object.keys(e);
    for (n = 0; n < i.length; n++) {
      if (!(t.indexOf(r = i[n]) >= 0)) {
        o[r] = e[r];
      }
    }
    return o;
  }
  var h = {
    SEND_MOBILE_CODE: "/passport/web/send_code/",
    SEND_EMAIL_CODE: "/passport/web/email/send_code/",
    VERIFY_MOBILE_CODE: "/passport/web/validate_code/",
    VERIFY_EMAIL_CODE: "/passport/web/email/verify/",
    CHECK_MOBILE_CODE: "/passport/web/mobile/check_code/",
    CHECK_EMAIL_CODE: "/passport/web/email/check_code/",
    SMS_LOGIN: "/passport/web/sms_login/",
    SMS_LOGIN_ONLY: "/passport/web/sms_login_only/",
    SMS_LOGIN_CONTINUE: "/passport/web/sms_login_continue/",
    EMAIL_LOGIN: "/passport/web/email/login/",
    EMAIL_CODE_LOGIN: "/passport/web/email/code_login/",
    EMAIL_CODE_QUICK_LOGIN: "/passport/web/email/quick_login/",
    EMAIL_REGISTER_LOGIN: "/passport/web/email/register_verify_login/",
    EMAIL_REGISTER: "/passport/web/email/register_verify/",
    PWD_LOGIN: "/passport/web/user/login/",
    AUTH_LOGIN: "/passport/web/auth/login/",
    AUTH_LOGIN_ONLY: "/passport/web/auth/login_only/",
    AUTH_BIND_ONLY: "/passport/web/auth/bind_login/",
    MOBILE_BIND_ONLY: "/passport/web/mobile/bind_login/",
    MOBILE_EMAIL_REGISTER: "/passport/web/mobile_email_register/",
    MOBILE_REGISTER: "/passport/mobile/register/",
    MOBILE_OAUTH: "/passport/auth/show_oauth_mobile/",
    LOGOUT: "/passport/web/logout/",
    CHECK_LOGIN: "/passport/account/info/v2/",
    BIND_WITH_MOBILE_LOGIN: "/passport/web/auth/bind_with_mobile_login/",
    BIND_WITH_EMAIL_LOGIN: "/passport/web/auth/bind_with_email_login/",
    GET_QRCODE: "/passport/web/get_qrcode/",
    CHECK_QRCONNECT: "/passport/web/check_qrconnect/",
    SCAN_QRCODE: "/passport/web/scan_qrcode/",
    CONFIRM_QRCODE: "/passport/web/confirm_qrcode/",
    THIRD_AUTH: "/passport/web/web_login/",
    WEB_SHARE_LOGIN: "/passport/web/auth/share_login/",
    AUTH_LOGIN_URL: "/passport/auth/wap_login/",
    EMAIL_REGISTER_NO_VERIFY: "/passport/web/email/register/",
    EMAIL_REGISTER_NO_VERIFY_V2: "/passport/web/email/register/v2/",
    GET_QRCODE_FROM_WECHAT: "/passport/web/wechat/get_qrcode/",
    CHECK_QRCODE_FROM_WECHAT: "/passport/web/wechat/check_qrcode_status/",
    MOBILE_BIND: "/passport/web/mobile/bind/",
    EMAIL_BIND: "/passport/web/email/bind/",
    AUTH_BIND: "/passport/web/auth/bind/",
    AUTH_UNBIND: "/passport/web/auth/unbind/",
    AUTH_SWITCH_BIND: "/passport/web/auth/switch_bind/",
    MOBILE_REBIND: "/passport/web/mobile/change/",
    EMAIL_REBIND: "/passport/web/email/change/",
    RESET_PWD_BY_MOBILE: "/passport/web/password/reset/",
    RESET_PWD_BY_EMAIL: "/passport/web/email/password/reset/",
    RESET_PWD_BY_MOBILE_TICKET: "/passport/web/password/reset_by_ticket/",
    RESET_PWD_BY_EMAIL_TICKET: "/passport/web/password/reset_by_email_ticket/",
    PWD_CHANGE_BY_MOBILE: "/passport/web/password/change/",
    PWD_UPDATE: "/passport/web/password/update/",
    PWD_CHANGE_BY_EMAIL: "/passport/web/email/change_password/",
    PWD_SET: "/passport/web/password/set/",
    PWD_HAS_SET: "/passport/password/has_set/",
    PWD_HAS_SET_V2: "/passport/web/password/has_set/",
    PWD_SET_BY_EAMIL_AND_LOGIN: "/passport/web/email/password/reset_and_login/",
    ACCOUNT_VERIFY: "/passport/web/account/verify/",
    AUTH_VERIFY: "/passport/web/auth/verify/",
    SMS_AUTHORIZE: "/passport/web/sms/authorize/",
    CANCEL_VERIFY_WAY: "/passport/auth/cancel_verify_way/",
    CANCEL_CHECK: "/passport/web/cancel/check/",
    CANCEL_CONFIRM: "/passport/web/cancel/confirm/",
    CANCEL_REQUEST_CANCEL: "/passport/web/cancel/login/",
    CHECK_MOBILE_REGISTER: "/passport/web/user/check_mobile_registered/",
    CHECK_EMAIL_REGISTER: "/passport/web/user/check_email_registered",
    CHANGE_QRCODE_SUCCESS: "/passport/qrcode_twostep_verify/scan_qrcode/",
    CHANGE_QRCODE_CONFIRM: "/passport/qrcode_twostep_verify/confirm_by_ticket/",
    GET_OPEN_AUTH_INFO: "/passport/open/auth_info/v2/",
    OPEN_SEND_CODE: "/passport/open/send_code/",
    OPEN_SMS_AUTH: "/passport/open/web/sms/auth/",
    OPEN_ACCOUNT_AUTH: "/passport/open/web/account/auth/",
    OPEN_THIRD_AUTH: "/passport/open/web/third_party/auth/",
    OPEN_GET_QRCODE: "/passport/open/get_qrcode/",
    OPEN_CHECK_QRCODE: "/passport/open/check_qrcode/",
    OPEN_TO_SCAN_QRCODE: "/passport/open/to_scan_qrcode/",
    OPEN_SCAN_QRCODE: "/passport/open/scan_qrcode/",
    OPEN_CONFIRM_QRCODE: "/passport/open/confirm_qrcode/",
    OPEN_WEB_AUTH: "/passport/open/web/auth/",
    GET_OPEN_OAUTH_TOKEN: "/passport/web/auth/get_oauth_token/",
    OPEN_UPDATE_AUTHORIZE_INFO: "/passport/web/auth/update_authorize_info/",
    PLATFORM_OAUTH_CONNECT: "/platform/oauth/connect/",
    ACCOUNT_INFO: "/passport/web/account/info/",
    ACCOUNT_SET: "/passport/web/account/set/",
    OAUTH_PROFILE: "/web/user/get/oauth_profile/",
    UPLOAD_AVATAR: "/web/user/update/upload_avatar/",
    UPDATE_USERINFO: "/web/user/update/user_info/",
    CHECK_DEFAULT_INFO: "/web/user/check/default_info/",
    GET_BACKGROUND_LIST: "/web/user/settings/{aid}/default_background_image_list/",
    GET_DEFAULT_AVATAR_LIST: "/web/user/settings/{aid}/default_avatar_list/",
    GET_RECOMMEND_NAME: "/web/user/settings/recommend_name/",
    UPLOAD_PICTURE: "/web/user/upload/pic/",
    CHECK_REMAIN_TIMES: "/web/user/get/remain_update_times/",
    DOWNLOAD_IMAGE: "/user/web/download/image/",
    DOWNLOAD_IMAGE_V2: "/user/web/download/image/v2/"
  };
  var m = {
    SEND_MOBILE_CODE: "/passport/aff/web/mobile/send_code/",
    SEND_EMAIL_CODE: "/passport/aff/web/email/send_code/",
    VERIFY_MOBILE_CODE: "/passport/aff/web/mobile/validate_code/",
    VERIFY_EMAIL_CODE: "/passport/aff/web/email/verify/",
    CHECK_MOBILE_CODE: "/passport/aff/web/mobile/check_code/",
    CHECK_EMAIL_CODE: "/passport/aff/web/email/check_code/",
    SMS_LOGIN: "/passport/aff/web/mobile/sms_login/",
    EMAIL_LOGIN: "/passport/aff/web/email/code_login/",
    PWD_LOGIN: "/passport/aff/web/user/login/",
    OAUTH_LOGIN_CALL: "/passport/aff/web/oauth/login/call/",
    OAUTH_LOGIN_ONLY: "/passport/aff/web/oauth/login_only/",
    OAUTH_LOGIN: "/passport/aff/web/oauth/login/",
    SUBJECT_LOGIN_LIST: "/passport/aff/web/subject/login_list/",
    SUBJECT_LOGIN: "/passport/aff/web/subject/login/",
    LOGOUT: "/passport/aff/web/logout/",
    REGISTER_EMAIL_USER_ONLY: "/passport/aff/web/email/register/only_user/",
    REGISTER_EMAIL: "/passport/aff/web/email/register/",
    REGISTER_MOBILE_USER_ONLY: "/passport/aff/web/mobile/register/only_user/",
    REGISTER_MOBILE: "/passport/aff/web/mobile/register/",
    RESET_BY_MOBILE: "/passport/aff/web/mobile/password/reset/",
    RESET_BY_EMAIL: "/passport/aff/web/email/password/reset/",
    MOBILE_INVITE: "/passport/aff/web/invitation/mobile/invite/",
    EMAIL_INVITE: "/passport/aff/web/invitation/email/invite/",
    LARK_INVITE: "/passport/aff/web/invitation/lark/invite/",
    INVITE_LIST: "/passport/aff/web/invitation/list/",
    CANCEL_INVITE: "/passport/aff/web/invitation/cancel/",
    RESEND_INVITE: "/passport/aff/web/invitation/resend/",
    UPDATE_INVITE: "/passport/aff/web/invitation/update/",
    CHECK_INVITE_VALID: "/passport/aff/web/invitation/check/",
    ACCEPT_INVITE: "/passport/aff/web/invitation/accept/",
    CREATE_BY_USERNAME: "/passport/aff/web/subject/username/create/",
    CREATE_BY_MOBILE: "/passport/aff/web/subject/mobile/create/",
    CREATE_BY_EMAIL: "/passport/aff/web/subject/email/create/",
    SUBJECT_LIST: "/passport/aff/web/subject/all/list/",
    SUBJECT_DEPUTY_LIST: "/passport/aff/web/subject/deputy/list/",
    SUBJECT_IDENTITY_LIST: "/passport/aff/web/subject/identity/list/",
    UPDATE_DEPUTY_INFO: "/passport/aff/web/deputy/update/",
    FREEZE_DEPUTY: "/passport/aff/web/deputy/freeze/",
    DELETE_DEPUTY: "/passport/aff/web/deputy/delete/",
    UPDATE_SUBJECT_INFO: "/passport/aff/web/subject/update/",
    FREEZE_SUBJECT: "/passport/aff/web/subject/freeze/",
    RESOURCE_LIST: "/passport/aff/web/resource/list/",
    CREATE_ROLE: "/passport/aff/web/role/create/",
    UPDATE_ROLE: "/passport/aff/web/role/update/",
    BAN_ROLE: "/passport/aff/web/role/ban/",
    ROLE_LIST: "/passport/aff/web/role/list/",
    ROLE_INFO: "/passport/aff/web/role/info/",
    CREATE_USER_WITH_ROLE: "/passport/aff/web/user/create_with_role/",
    ADD_USER_ROLE: "/passport/aff/web/user_role/add/",
    DELETE_USER_ROLE: "/passport/aff/web/user_role/del/",
    USER_ROLE_LIST: "/passport/aff/web/user_role/list/",
    ALL_USER_ROLE_LIST: "/passport/aff/web/user_role/all/list/",
    USER_PERMISSIONS: "/passport/aff/web/user/permissions/",
    SUCCESSOR_SEND_CODE: "/passport/aff/web/admin/successor/send_code/",
    TRANSFER_MANAGER: "/passport/aff/web/admin/transfer/",
    MEMBER_SWITCH: "/passport/aff/web/member/switch/"
  };
  var _ = {
    MOBILE_CODE_URL: "/send_activation_code/",
    MOBILE_CODE_URL_V2: "/send_activation_code/v2/",
    EMAIL_ACTIVATE_URL: "/send_email_activate_link/",
    EMAIL_ACTIVATE_URL_V2: "/send_email_activate_link/v2/",
    EMAIL_ACTIVATE_CODE_URL: "/send_email_activate_code/",
    EMAIL_ACTIVATE_CODE_URL_V2: "/send_email_activate_code/v2/",
    CHECK_LOGIN: "/check_login/",
    MOBILE_CODE_LOGIN_URL: "/quick_login/",
    MOBILE_CODE_LOGIN_URL_V2: "/quick_login/v2/",
    MOBILE_CODE_LOGIN_ONLY_URL: "/quick_login_only/",
    ACCOUNT_LOGIN_URL: "/account_login/",
    ACCOUNT_LOGIN_URL_V2: "/account_login/v2/",
    AUTH_LOGIN_URL: "/passport/auth/wap_login/",
    BIND_WITH_MOBILE_LOGIN: "/bind_with_mobile_login/",
    AUTH_LOGIN: "/auth/login/",
    AUTH_LOGIN_ONLY: "/auth/login_only/",
    LOGOUT: "/logout/",
    EMAIL_ACTIVATE_CODE_LOGIN: "/activate_email/code_login/",
    EMAIL_REGISTER: "/activate_email/register/",
    EMAIL_REGISTER_V2: "/activate_email/register/v2/",
    MOBILE_REGISTER_WITH_EMAIL: "/register/",
    MOBILE_REGISTER_WITH_EMAIL_V2: "/register/v2/",
    SSO_EMAIL_ACTIVATE_CODE_URL: "/sso/send_email_activate_code/",
    RESET_PASSWORD: "/reset_password/",
    RESET_PASSWORD_BY_EMAIL: "/activate_email/reset_password/",
    BIND_MOBILE: "/bind_mobile/",
    CHANGE_MOBILE: "/change_mobile/",
    QUICK_AUTH: "/quick_auth/",
    GET_QRCODE: "/get_qrcode/",
    CHECK_QRCONNECT: "/check_qrconnect/",
    SCAN_QRCODE: "/scan_qrcode/",
    CONFIRM_QRCODE: "/confirm_qrcode/",
    MOBILE_EMAIL_REGISTER: "/mobile_email_register/"
  };
  function y(e) {
    var t = window.byted_acrawler;
    var r = [].concat(Object.values(h), Object.values(m), Object.values(_));
    var n = Object.values(_).map(function (e) {
      return [e, "/passport/sso" + e];
    }) || [];
    if (t) {
      t.init({
        aid: e.aid,
        isSDK: true,
        boe: e.isBoe || false,
        enablePathList: r,
        urlRewriteRules: n
      });
    }
  }
  function g(e, t) {
    var r;
    var n;
    var o;
    var i = "https://lf3-cdn-tos.bytescm.com/obj/rc-web-sdk/webmssdk.js";
    if (e === "gcp" || e === "giso") {
      i = "https://sf16-secsdk.ibytedtos.com/obj/rc-web-sdk-giso/webmssdk/1.0.0.303/webmssdk.js";
    } else if (e === "sg") {
      i = "https://sf16-secsdk.ibytedtos.com/obj/rc-web-sdk-sg/webmssdk/1.0.0.303/webmssdk.js";
    } else if (e === "va" || e === "gcs") {
      i = "https://sf16-secsdk.ibytedtos.com/obj/rc-web-sdk-gcs/webmssdk/1.0.0.303/webmssdk.js";
    }
    if (window.byted_acrawler) {
      y(t);
    } else {
      r = i;
      n = function () {
        y(t);
      };
      (o = document.createElement("script")).type = "text/javascript";
      o.src = r;
      document.getElementsByTagName("head")[0].appendChild(o);
      if (o.readyState) {
        o.onreadystatechange = function () {
          if (o.readyState === "complete" || o.readyState === "loaded") {
            o.onreadystatechange = null;
            if (n) {
              n();
            }
          }
        };
      } else {
        o.onload = function () {
          if (n) {
            n();
          }
        };
      }
    }
  }
  function b(e) {
    var t;
    var r = RegExp("(^| )" + e + "=([^;]*)(;|$)");
    if (t = document.cookie.match(r)) {
      return unescape(t[2]);
    } else {
      return "";
    }
  }
  function w(e, t, r = true) {
    if (t) {
      Object.keys(t).forEach(function (e) {});
    }
  }
  function E(e) {
    return Object.keys(e).map(function (t) {
      var r = e[t];
      if (typeof r == "object") {
        return encodeURIComponent(t) + "=" + encodeURIComponent(JSON.stringify(r));
      } else {
        return encodeURIComponent(t) + "=" + encodeURIComponent(r);
      }
    }).join("&");
  }
  var O;
  var S;
  var T;
  function C(e) {
    var t;
    var r = [];
    if (e === undefined) {
      return "";
    }
    t = function (e) {
      var t;
      var r = e.toString();
      var n = [];
      var o = 0;
      for (; o < r.length; o++) {
        if ((t = r.charCodeAt(o)) >= 0 && t <= 127) {
          n.push(t);
        } else if (t >= 128 && t <= 2047) {
          n.push(t >> 6 & 31 | 192);
          n.push(t & 63 | 128);
        } else if (t >= 2048 && t <= 55295 || t >= 57344 && t <= 65535) {
          n.push(t >> 12 & 15 | 224);
          n.push(t >> 6 & 63 | 128);
          n.push(t & 63 | 128);
        }
      }
      for (var i = 0; i < n.length; i++) {
        n[i] &= 255;
      }
      return n;
    }(e);
    var n = 0;
    var o = t.length;
    for (; n < o; ++n) {
      r.push((t[n] ^ 5).toString(16));
    }
    return r.join("");
  }
  function x(e, t) {
    var r;
    var n = 0;
    var o = 0;
    if (typeof e != "object" || !t || t.length <= 0) {
      return e;
    }
    var i = l({
      mix_mode: n
    }, e);
    var a = 0;
    var s = t.length;
    for (; a < s; ++a) {
      if ((r = i[t[a]]) !== undefined) {
        n |= 1;
        o |= 1;
        i[t[a]] = C(r);
      }
    }
    i.mix_mode = n;
    i.fixed_mix_mode = o;
    return i;
  }
  function I(e = {}, t = -1) {
    var r = Object.keys(e).sort() || [];
    if (t >= 0) {
      r.splice(t);
    }
    return {
      str: r.map(function (t) {
        var r = e[t];
        if (typeof r == "object") {
          return t + "=" + JSON.stringify(r);
        } else {
          return t + "=" + r;
        }
      }).join("&"),
      arr: r
    };
  }
  function P(e = {}, t = {}, r = "") {
    if (!r) {
      return {};
    }
    var n = I(e, 10);
    var o = n.str;
    var i = n.arr;
    var a = I(t).str;
    var s = u((o === undefined ? "" : o) + "&" + (a === undefined ? "" : a) + "&app_key=" + r);
    return {
      sign: c.stringify(s),
      qs: C((i === undefined ? [] : i).join(","))
    };
  }
  function R(e) {
    var t = "0123456789abcdefghijklmnopqrstuvwxyz";
    var r = "";
    var n = e;
    for (; n > 0; --n) {
      r += t[Math.floor(Math.random() * t.length)];
    }
    return r;
  }
  var j = {};
  var L = ["request"];
  var A = {
    aid: 0,
    iid: "0",
    did: "0"
  };
  var k = {
    sideSlide: "disabled",
    lang: "zh",
    showMode: "mask",
    region: "cn",
    app_name: ""
  };
  var D = {
    cn: ttVerifyCenterSdk,
    sg: tiktokVerifyCenterSdk,
    va: dompurifyCore_1,
    in: lottieAnimationCore
  };
  var N = [98, 111, 101, 45, 118, 101, 114, 105, 102, 121, 46, 98, 121, 116, 101, 100, 97, 110, 99, 101, 46, 110, 101, 116].map(function (e) {
    return String.fromCharCode(e);
  }).join("");
  function M(e) {
    var t = e.requestConfig;
    var r = e.verifyData;
    var n = e.requestData;
    var o = {};
    try {
      o = JSON.parse(r);
    } catch (e) {}
    return new Promise(function (e, r) {
      T.render({
        verify_data: o,
        captchaOptions: {
          successCb: function () {
            try {
              return Promise.resolve(T.getFp()).then(function (n) {
                var o;
                if ((o = O) !== null && o !== undefined) {
                  o(l({}, t, {
                    params: l({}, t.params, {
                      isResend: true,
                      fp: n,
                      verifyFp: n
                    })
                  })).then(function (t) {
                    e(t);
                  }).catch(function (e) {
                    r(e);
                  });
                }
              });
            } catch (e) {
              return Promise.reject(e);
            }
          },
          closeCb: function () {
            r("CLOSE_CAPTCHA");
          }
        },
        secondVerifyWebOptions: {
          callBack: function (o) {
            try {
              var i;
              var a = t.data || "";
              if (n) {
                a = E(l({}, function (e) {
                  if (!e) {
                    return {};
                  }
                  var t = {};
                  e.split("&").forEach(function (e) {
                    var r = e.split("=");
                    t[r[0]] = r[1];
                  });
                  return t;
                }(a), n));
              }
              if ((i = O) !== null && i !== undefined) {
                i(l({}, t, {
                  params: l({}, t.params, {
                    isResend: true
                  }),
                  data: a
                })).then(function (t) {
                  e(t);
                }).catch(function (e) {
                  r(e);
                });
              }
              return Promise.resolve();
            } catch (e) {
              return Promise.reject(e);
            }
          },
          closeCallBack: function () {
            r({
              description: "SECOND_VALID",
              requestData: n
            });
          }
        }
      });
    });
  }
  var q = ["isResend"];
  var U = {
    web: {
      respHandler: function (e) {
        return (e == null ? undefined : e.message) === "success";
      },
      successCallBack: function (e) {
        if (e == null) {
          return undefined;
        } else {
          return e.data;
        }
      },
      failCallBack: function (e) {
        if (e == null) {
          return undefined;
        } else {
          return e.data;
        }
      }
    },
    sso: {
      respHandler: function (e) {
        return (e == null ? undefined : e.error_code) === 0;
      },
      successCallBack: function (e) {
        if ((e == null ? undefined : e.message) === "success") {
          return e.data;
        } else {
          return e;
        }
      },
      failCallBack: function (e) {
        return e;
      }
    },
    app: {},
    auth: {
      respHandler: function (e) {
        return (e == null ? undefined : e.status_code) === 0;
      },
      successCallBack: function (e) {
        return e.data;
      },
      failCallBack: function (e) {
        return e;
      }
    }
  };
  function B(e) {
    var t;
    var r;
    var n;
    var o = (e == null || (t = e.config) === null || t === undefined ? undefined : t.url) || "";
    var i = (e == null || (r = e.headers) === null || r === undefined ? undefined : r["x-tt-logid"]) || "";
    var a = function (e) {
      var t;
      var r;
      var n = (e == null || (t = e.data) === null || t === undefined || (r = t.data) === null || r === undefined ? undefined : r.response) || (e == null ? undefined : e.data) || {};
      if (typeof n == "string") {
        try {
          n = JSON.parse(n);
        } catch (e) {}
      }
      return n;
    }(e);
    var s = j.initProps;
    var u = (s == null ? undefined : s.printLog) || false;
    if ((a == null ? undefined : a.message) === "success") {
      if (u) {
        w("call " + o + " result >>>>", {
          SUCCESS: a.data,
          Logid: i
        }, false);
      }
      return Promise.resolve(a.data);
    }
    if (u) {
      w("call " + o + " result >>>>", {
        ERROR: a.data,
        Logid: i
      }, false);
    }
    var c = a == null || (n = a.data) === null || n === undefined ? undefined : n.verify_center_decision_conf;
    if (s != null && s.appShowCaptcha || !c) {
      return Promise.reject(l({}, a.data, {
        log_id: i
      }));
    } else {
      return Promise.resolve(M({
        verifyData: c,
        requestConfig: e == null ? undefined : e.config
      }));
    }
  }
  function H(e, t) {
    var r;
    var n;
    var i;
    var s;
    var u;
    var c;
    var f;
    new Promise(function (t) {
      j.initProps = e;
      t(j);
    });
    this.request = new G(e, t);
    n = (r = l({}, e, {
      request: this.request
    })).request;
    i = v(r, L);
    O = n;
    s = i.isBoe;
    u = i.captchaOptions;
    c = i.secondVerifyWebOptions;
    f = {
      commonOptions: l({}, A, {
        aid: i.aid,
        did: i.did ? String(i.did) : "0",
        iid: i.iid ? String(i.iid) : "0"
      }),
      captchaOptions: l({}, k, {
        sideSlide: i.captchaSideSlide || "disabled",
        lang: i.language || "zh",
        showMode: i.captchaShowMode || "mask",
        region: i.region || "cn",
        app_name: i.appName || "",
        host: i.captchaHost || (s !== undefined && s ? "//" + N : undefined) || ""
      }, u === undefined ? {} : u),
      secondVerifyWebOptions: c
    };
    if (!(T = D[i.region || "cn"] || ttVerifyCenterSdk).init) {
      T = T?.default;
    }
    if (i.captchaConfig && typeof T.config == "function") {
      T.config(i.captchaConfig);
    }
    T.init(f, function () {}, function () {});
  }
  function G(e, t) {
    var r;
    var n;
    var o;
    var i;
    var a;
    var s;
    var u;
    var c;
    var p;
    if (t === undefined) {
      t = "web";
    }
    if ((r = j.initProps) !== null && r !== undefined && r.fetch) {
      o = (n = j.initProps || {}).isBoe;
      (i = f.create(l({}, n.axiosConfig, {
        baseURL: n.host || window && (o !== undefined && o ? "http" : "https") + "://" + window.location.hostname,
        adapter: function (e) {
          var t = e.baseURL;
          var r = e.url;
          var n = e.method;
          var o = n === undefined ? "GET" : n;
          var i = e.params;
          var a = i === undefined ? {} : i;
          var s = e.data;
          var u = s === undefined ? {} : s;
          var c = j.initProps;
          var f = c.fetch;
          var p = (c == null ? undefined : c.printLog) || false;
          var v = d.isValid(r) ? r : t + r;
          if (p) {
            w(o + " " + v + " >>>>", {
              "data >>>>": u,
              "params >>>>": a
            }, false);
          }
          return f({
            url: v,
            method: o.toUpperCase(),
            params: l({}, a, {
              is_native_h5: 1
            }),
            data: u,
            needCommonParams: true,
            header: {
              "x-tt-passport-csrf-token": b("passport_csrf_token") || b("passport_csrf_token_default") || ""
            }
          }).then(function (t) {
            return {
              data: t,
              status: 200,
              statusText: "ok",
              config: e
            };
          });
        },
        withCredentials: true,
        transformRequest: [function (e) {
          var t = e;
          if (typeof e == "string") {
            try {
              t = JSON.parse(e);
            } catch (e) {}
          }
          return t;
        }]
      }))).interceptors.response.use(B, undefined);
      return i;
    } else {
      a = function (e, t) {
        var r;
        var n = e.scene;
        var o = e.aid;
        var i = e.language;
        var a = i === undefined ? "" : i;
        var s = e.subjectAid;
        var u = e.aff_multi_login;
        var c = u === undefined ? 0 : u;
        var f = e.generalParams;
        var d = f === undefined ? {} : f;
        if (t === "web") {
          var p = {
            aid: o
          };
          if ((n === undefined ? "normal" : n) === "aff") {
            p.subject_aid = s === undefined ? 0 : s;
          }
          if (c === 1) {
            p.aff_multi_login = 1;
          }
          r = p;
        }
        if (t === "sso" || t === "auth") {
          var v = {
            aid: o
          };
          if (c === 1) {
            v.aff_multi_login = 1;
          }
          r = v;
        }
        r = l({}, r, {
          account_sdk_source: t,
          sdk_version: "2.2.11-doubao.0"
        });
        if (d) {
          try {
            r = l({}, d, r);
          } catch (e) {}
        }
        if (a) {
          r = l({}, r, {
            language: a
          });
        }
        return r;
      }(e, t);
      u = (s = j.initProps || {}).requestInterceptors;
      c = s.responseInterceptors;
      p = f.create(l({}, s.axiosConfig, {
        baseURL: s.host || window && (s.isBoe ? window.location.protocol : "https:") + "//" + window.location.hostname,
        withCredentials: true
      }));
      if (u && Array.isArray(u)) {
        u.forEach(function (e) {
          p.interceptors.request.use(function (t) {
            return e(t);
          }, undefined);
        });
      }
      if (c && Array.isArray(c)) {
        c.forEach(function (e) {
          p.interceptors.response.use(function (t) {
            return e(t);
          }, function (t) {
            return e(t);
          });
        });
      }
      p.interceptors.request.use(function (e) {
        return function (e, t = {}) {
          try {
            var r = j.initProps;
            var n = (r == null ? undefined : r.printLog) || false;
            return Promise.resolve(function () {
              if (S) {
                return Promise.resolve(S);
              }
              try {
                var e;
                var t = j.initProps;
                if (t != null && (e = t.captchaOptions) !== null && e !== undefined && e.fp) {
                  S = t.captchaOptions.fp;
                  return t.captchaOptions.fp;
                }
              } catch (e) {}
              return Promise.race([new Promise(function (e) {
                setTimeout(function () {
                  return e("");
                }, 1000);
              }), T.getFp()]).then(function (e) {
                S = e;
                return e;
              });
            }()).then(function (o) {
              var i;
              var a = (r == null ? undefined : r.appKey) || "";
              var s = e == null ? undefined : e.url;
              var u = (e == null ? undefined : e.method) || "get";
              var c = (e == null ? undefined : e.data) || {};
              var f = {
                "x-tt-passport-csrf-token": b("passport_csrf_token") || b("passport_csrf_token_default") || ""
              };
              var d = Object.assign({
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/json, text/javascript"
              }, f, e.headers || {}, {});
              e.headers = d;
              if (n) {
                w(u + " " + s + " >>>>", {
                  "%cdata >>>>": c,
                  "%ccommon params >>>>": t
                });
              }
              if ((i = e.params) !== null && i !== undefined && i.isResend) {
                var p = v(e.params, q);
                return l({}, e, {
                  params: p
                });
              }
              var h = {};
              Object.keys(c).filter(function (e) {
                return c[e] !== undefined;
              }).forEach(function (e) {
                h[e] = c[e];
              });
              if (["post", "POST"].includes(u)) {
                var m = l({}, t, {
                  verifyFp: o,
                  fp: o
                }, (e == null ? undefined : e.params) || {});
                var _ = P(m, h, a);
                e.params = l({}, m, _);
                e.data = typeof FormData != "undefined" && c instanceof FormData ? c : E(h);
              }
              if (["get", "GET"].includes(u)) {
                var y = l({}, h, t, {
                  verifyFp: o,
                  fp: o
                }, e.params);
                var g = P(y, {}, a);
                e.params = l({}, y, g);
              }
              return e;
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }(e, a);
      }, undefined);
      p.interceptors.response.use(function (e) {
        return function (e) {
          var t;
          var r;
          var n;
          var o;
          var i;
          var a;
          var c;
          var f;
          var p;
          var v = U[e.config.params.account_sdk_source];
          var h = (v == null ? undefined : v.respHandler) || function (e) {
            return (e == null ? undefined : e.message) === "success";
          };
          var m = (v == null ? undefined : v.successCallBack) || function (e) {
            if (e == null) {
              return undefined;
            } else {
              return e.data;
            }
          };
          var _ = (v == null ? undefined : v.failCallBack) || function (e) {
            if (e == null) {
              return undefined;
            } else {
              return e.data;
            }
          };
          var y = (e == null || (t = e.config) === null || t === undefined ? undefined : t.url) || "";
          var g = (e == null || (r = e.headers) === null || r === undefined ? undefined : r["x-tt-logid"]) || "";
          var b = (e == null ? undefined : e.data) || {};
          var E = j.initProps;
          var O = (E == null ? undefined : E.printLog) || false;
          if (typeof b == "string") {
            try {
              b = JSON.parse(b);
            } catch (e) {}
          }
          if (h(b)) {
            if (O) {
              w("call " + y + " result >>>>", {
                "%cSUCCESS": m(b),
                "%cLogid": g
              });
            }
            return Promise.resolve(m(b));
          }
          if (O) {
            w("call " + y + " result >>>>", {
              "%cERROR": _(b),
              "%cLogid": g
            });
          }
          var S;
          var T = ((n = b) === null || n === undefined || (o = n.data) === null || o === undefined ? undefined : o.verify_center_decision_conf) || ((i = b) === null || i === undefined || (a = i.data) === null || a === undefined ? undefined : a.verify_center_secondary_decision_conf) || b?.verify_center_decision_conf || b?.verify_center_secondary_decision_conf;
          var C = ((c = b) === null || c === undefined || (f = c.data) === null || f === undefined ? undefined : f.error_code) || b?.error_code;
          if (C === 2046 && typeof (E == null || (p = E.secondVerifyWebOptions) === null || p === undefined ? undefined : p.onValid) == "function") {
            if (E != null && (S = E.secondVerifyWebOptions) !== null && S !== undefined) {
              S.onValid();
            }
            return Promise.reject({
              description: "SECOND_VALID"
            });
          }
          if (T) {
            var x;
            var I;
            var R = ((x = b) === null || x === undefined || (I = x.data) === null || I === undefined ? undefined : I.sms_code_key) || b?.sms_code_key;
            return Promise.resolve(M({
              verifyData: T,
              requestConfig: e == null ? undefined : e.config,
              requestData: C === 2046 && R ? {
                sms_code_key: R
              } : undefined
            })).then(function (e) {
              return Promise.resolve(e);
            }).catch(function (e) {
              return Promise.reject(e);
            });
          }
          var L = _(b);
          return Promise.reject(l({}, L, {
            log_id: g
          }));
        }(e);
      }, undefined);
      return p;
    }
  }
  function F(e) {
    var t = this;
    this.sendCode = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        type: 7
      }, r === undefined ? {} : r), ["mobile", "type"]);
      return t.request({
        url: m.SEND_MOBILE_CODE,
        method: "POST",
        data: n
      });
    };
    this.smsLogin = function (e) {
      var r = e.need_frozen_user;
      var n = e.extra_params;
      var o = x(l({
        mobile: e.mobile,
        code: e.code,
        need_frozen_user: r === undefined ? 0 : r,
        type: 7
      }, n === undefined ? {} : n), ["mobile", "type", "code"]);
      return t.request({
        url: m.SMS_LOGIN,
        method: "POST",
        data: o
      });
    };
    this.sendEmailCode = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        type: 13
      }, r === undefined ? {} : r), ["email", "type"]);
      return t.request({
        url: m.SEND_EMAIL_CODE,
        method: "POST",
        data: n
      });
    };
    this.emailLogin = function (e) {
      var r = e.need_frozen_user;
      var n = e.extra_params;
      var o = x(l({
        email: e.email,
        code: e.code,
        need_frozen_user: r === undefined ? 0 : r,
        type: 13
      }, n === undefined ? {} : n), ["email", "type", "code"]);
      return t.request({
        url: m.EMAIL_LOGIN,
        method: "POST",
        data: o
      });
    };
    this.pwdLogin = function (e) {
      var r;
      var n = e.password;
      var o = e.need_frozen_user;
      var i = e.extra_params;
      var a = ["email", "username", "mobile", "account"].find(function (t) {
        return !!e[t];
      });
      if (!a) {
        return Promise.reject();
      }
      var s = x(l(((r = {
        password: n
      })[a] = e[a], r.need_frozen_user = o === undefined ? 0 : o, r), i === undefined ? {} : i), ["password", a]);
      return t.request({
        url: m.PWD_LOGIN,
        method: "POST",
        data: s
      });
    };
    this.oauthLoginCall = function (e) {
      var t = e.platform_app_id;
      var r = e.next;
      var n = e.extra_params;
      var o = j.initProps || {};
      var i = E(l({
        platform_app_id: t,
        next: r,
        aid: o.aid,
        subject_aid: o.subjectAid,
        account_sdk_source: "web"
      }, n === undefined ? {} : n));
      window.location.href = m.OAUTH_LOGIN_CALL + "?" + i;
    };
    this.oauthLogin = function (e) {
      var r = e.need_frozen_user;
      var n = e.login_only;
      var o = e.extra_params;
      return t.request({
        url: n === undefined || n ? m.OAUTH_LOGIN_ONLY : m.OAUTH_LOGIN,
        method: "POST",
        data: l({
          platform_app_id: e.platform_app_id,
          redirect_uri: e.redirect_uri,
          code: e.code,
          need_frozen_user: r === undefined ? 0 : r
        }, o === undefined ? {} : o)
      });
    };
    this.subjectLoginList = function (e = {}) {
      var r = e.extra_params;
      return t.request({
        url: m.SUBJECT_LOGIN_LIST,
        method: "GET",
        data: r === undefined ? {} : r
      });
    };
    this.subjectLogin = function (e) {
      var r = e.user_identity_id;
      var n = e.extra_params;
      var o = x(l({
        login_subject_uid: e.login_subject_uid,
        user_identity_id: r === undefined ? "0" : r
      }, n === undefined ? {} : n), ["login_subject_uid", "user_identity_id"]);
      return t.request({
        url: m.SUBJECT_LOGIN,
        method: "POST",
        data: o
      });
    };
    this.logout = function (e) {
      var r = e.next;
      var n = e.not_redirect;
      var o = j.initProps || {};
      var i = {
        account_sdk_source: "web",
        aid: o.aid,
        subject_aid: o.subjectAid,
        next: r === undefined ? "" : r
      };
      if (n !== undefined && n) {
        return t.request({
          url: m.LOGOUT,
          method: "GET",
          data: l({}, i, {
            next: encodeURIComponent(i.next)
          })
        });
      }
      window.location.href = m.LOGOUT + "?" + E(i) + "&account_sdk_source=aff&sdk_version=2.2.11-doubao.0";
    };
    this.memberSwitch = function (e) {
      var r = e.extra_params;
      return t.request({
        url: m.MEMBER_SWITCH,
        method: "POST",
        data: l({
          to_sec_member_id: e.to_sec_member_id
        }, r === undefined ? {} : r)
      });
    };
    this.request = e.request;
  }
  var V = ["extra_params", "only_user"];
  var W = ["extra_params", "only_user"];
  function z(e) {
    var t = this;
    this.sendEmailCode = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        type: 1
      }, r === undefined ? {} : r), ["email", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.SEND_EMAIL_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.verifyEmail = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        code: e.code,
        type: 1
      }, r === undefined ? {} : r), ["email", "code", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.CHECK_EMAIL_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.registerByEmail = function (e) {
      var r = e.extra_params;
      var n = e.only_user;
      var o = v(e, V);
      var i = x(l({}, o, r === undefined ? {} : r), ["base_infos", "subject_name", "password", "identity_card", "real_name"]);
      var a = n !== undefined && n ? m.REGISTER_EMAIL_USER_ONLY : m.REGISTER_EMAIL;
      return new Promise(function (e, r) {
        t.request({
          url: a,
          method: "POST",
          data: i
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.sendMobileCode = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        type: 1
      }, r === undefined ? {} : r), ["mobile", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.SEND_MOBILE_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.verifyMobile = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        code: e.code,
        type: 1
      }, r === undefined ? {} : r), ["mobile", "code", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.CHECK_MOBILE_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.registerByMobile = function (e) {
      var r = e.extra_params;
      var n = e.only_user;
      var o = v(e, W);
      var i = x(l({}, o, r === undefined ? {} : r), ["base_infos", "subject_name", "password", "identity_card", "real_name"]);
      var a = n !== undefined && n ? m.REGISTER_MOBILE_USER_ONLY : m.REGISTER_MOBILE;
      return new Promise(function (e, r) {
        t.request({
          url: a,
          method: "POST",
          data: i
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.request = e.request;
  }
  function Y(e) {
    var t = this;
    this.sendEmailCode = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        type: 4
      }, r === undefined ? {} : r), ["email", "type"]);
      return t.request({
        url: m.SEND_EMAIL_CODE,
        method: "POST",
        data: n
      });
    };
    this.sendMobileCode = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        type: 6
      }, r === undefined ? {} : r), ["mobile", "type"]);
      return t.request({
        url: m.SEND_MOBILE_CODE,
        method: "POST",
        data: n
      });
    };
    this.mobileReset = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        code: e.code,
        password: e.password
      }, r === undefined ? {} : r), ["mobile", "code", "password"]);
      return t.request({
        url: m.RESET_BY_MOBILE,
        method: "POST",
        data: n
      });
    };
    this.emailReset = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        code: e.code,
        password: e.password
      }, r === undefined ? {} : r), ["email", "code", "password"]);
      return t.request({
        url: m.RESET_BY_EMAIL,
        method: "POST",
        data: n
      });
    };
    this.request = e.request;
  }
  var J = ["extra_params"];
  var K = ["extra_params"];
  var Q = ["extra_params"];
  function X(e) {
    var t = this;
    this.mobileInvite = function (e) {
      var r = e.extra_params;
      var n = v(e, J);
      var o = x(l({}, n, r === undefined ? {} : r), ["mobile"]);
      return t.request({
        url: m.MOBILE_INVITE,
        method: "POST",
        data: o
      });
    };
    this.emailInvite = function (e) {
      var r = e.extra_params;
      var n = v(e, K);
      var o = x(l({}, n, r === undefined ? {} : r), ["email"]);
      return t.request({
        url: m.EMAIL_INVITE,
        method: "POST",
        data: o
      });
    };
    this.larkInvite = function (e) {
      var r = e.extra_params;
      var n = v(e, Q);
      var o = x(l({}, n, r === undefined ? {} : r), ["email"]);
      return t.request({
        url: m.LARK_INVITE,
        method: "POST",
        data: o
      });
    };
    this.getInvitationList = function (e) {
      var r = e.page;
      var n = r === undefined ? 1 : r;
      var o = e.page_size;
      var i = o === undefined ? 10 : o;
      var a = e.extra_params;
      var s = a === undefined ? {} : a;
      return new Promise(function (e, r) {
        t.request({
          url: "" + m.INVITE_LIST + n + "/",
          method: "GET",
          data: l({
            page_size: i
          }, s)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.cancelInvitation = function (e) {
      var r = e.invite_id;
      var n = r === undefined ? 0 : r;
      var o = e.extra_params;
      var i = o === undefined ? {} : o;
      return new Promise(function (e, r) {
        t.request({
          url: m.CANCEL_INVITE,
          method: "POST",
          data: l({
            invite_id: n
          }, i)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.resendInvitation = function (e) {
      var r = e.invite_id;
      var n = r === undefined ? 0 : r;
      var o = e.next_url;
      var i = o === undefined ? "" : o;
      var a = e.link;
      var s = a === undefined ? "" : a;
      var u = e.extra_params;
      var c = u === undefined ? {} : u;
      return new Promise(function (e, r) {
        t.request({
          url: m.RESEND_INVITE,
          method: "POST",
          data: l({
            invite_id: n,
            next_url: i,
            link: s
          }, c)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.updateInvitation = function (e) {
      var r = e.invite_id;
      var n = e.extra_params;
      var o = x(l({
        invite_id: r === undefined ? 0 : r,
        deputy_identity_id: e.deputy_identity_id,
        deputy_name: e.deputy_name
      }, n === undefined ? {} : n), ["deputy_name"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.UPDATE_INVITE,
          method: "POST",
          data: o
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.checkRegisterStatus = function (e) {
      var r = e.invite_ticket;
      var n = e.extra_params;
      var o = n === undefined ? {} : n;
      return new Promise(function (e, n) {
        t.request({
          url: m.CHECK_INVITE_VALID,
          method: "POST",
          data: l({
            invite_ticket: r
          }, o)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          n(e);
        });
      });
    };
    this.acceptInvitation = function (e) {
      var r = e.extra_params;
      var n = x(l({
        invite_ticket: e.invite_ticket,
        password: e.password,
        extra: e.extra
      }, r === undefined ? {} : r), ["password", "extra"]);
      return t.request({
        url: m.ACCEPT_INVITE,
        method: "POST",
        data: n
      });
    };
    this.request = e.request;
  }
  var Z = ["extra_params"];
  var $ = ["extra_params"];
  var ee = ["extra_params"];
  function et(e) {
    var t = this;
    this.createByUsername = function (e) {
      var r = e.extra_params;
      var n = v(e, Z);
      var o = x(l({}, n, r === undefined ? {} : r), ["subject_name", "deputy_name", "password", "username", "base_infos", "detail_infos"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.CREATE_BY_USERNAME,
          method: "POST",
          data: o
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.createByMobile = function (e) {
      var r = e.extra_params;
      var n = v(e, $);
      var o = x(l({}, n, r === undefined ? {} : r), ["subject_name", "deputy_name", "password", "mobile", "base_infos", "detail_infos"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.CREATE_BY_MOBILE,
          method: "POST",
          data: o
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.createByEmail = function (e) {
      var r = e.extra_params;
      var n = v(e, ee);
      var o = x(l({}, n, r === undefined ? {} : r), ["subject_name", "deputy_name", "password", "email", "base_infos", "detail_infos"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.CREATE_BY_EMAIL,
          method: "POST",
          data: o
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.getSubjectList = function (e) {
      var r = e.page;
      var n = r === undefined ? 1 : r;
      var o = e.page_size;
      var i = o === undefined ? 10 : o;
      var a = e.deputy_identity_id;
      var s = e.extra_params;
      var u = s === undefined ? {} : s;
      return new Promise(function (e, r) {
        t.request({
          url: "" + m.SUBJECT_LIST + n + "/",
          method: "GET",
          data: l({
            page_size: i,
            deputy_identity_id: a
          }, u)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.getSubjectDeputyList = function (e) {
      var r = e.page;
      var n = r === undefined ? 1 : r;
      var o = e.page_size;
      var i = o === undefined ? 10 : o;
      var a = e.extra_params;
      var s = a === undefined ? {} : a;
      return new Promise(function (e, r) {
        t.request({
          url: "" + m.SUBJECT_DEPUTY_LIST + n + "/",
          method: "GET",
          data: l({
            page_size: i
          }, s)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.getSubjectIdentityList = function (e) {
      var r = e.page;
      var n = r === undefined ? 1 : r;
      var o = e.page_size;
      var i = o === undefined ? 10 : o;
      var a = e.extra_params;
      var s = a === undefined ? {} : a;
      return new Promise(function (e, r) {
        t.request({
          url: "" + m.SUBJECT_IDENTITY_LIST + n + "/",
          method: "GET",
          data: l({
            page_size: i
          }, s)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.updateDeputyInfo = function (e) {
      var r = e.extra_params;
      var n = x(l({
        sec_user_id: e.sec_user_id,
        deputy_identity_id: e.deputy_identity_id,
        deputy_name: e.deputy_name,
        user_identity_id: e.user_identity_id
      }, r === undefined ? {} : r), ["deputy_name", "user_identity_id"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.UPDATE_DEPUTY_INFO,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.freezeDeputy = function (e) {
      var r = e.is_frozen;
      var n = e.extra_params;
      var o = x(l({
        sec_user_id: e.sec_user_id,
        user_identity_id: e.user_identity_id,
        is_frozen: r === undefined ? 0 : r
      }, n === undefined ? {} : n), ["sec_user_id", "user_identity_id"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.FREEZE_DEPUTY,
          method: "POST",
          data: o
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.deleteDeputy = function (e) {
      var r = e.extra_params;
      var n = x(l({
        sec_user_id: e.sec_user_id,
        user_identity_id: e.user_identity_id
      }, r === undefined ? {} : r), ["user_identity_id"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.DELETE_DEPUTY,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.updateSubjectInfo = function (e) {
      var r = e.extra_params;
      var n = x(l({
        sec_subject_uid: e.sec_subject_uid,
        subject_name: e.subject_name,
        base_infos: e.base_infos,
        detail_infos: e.detail_infos
      }, r === undefined ? {} : r), ["sec_subject_uid", "subject_name", "base_infos", "detail_infos"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.UPDATE_SUBJECT_INFO,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.freezeSubject = function (e) {
      var r = e.is_frozen;
      var n = e.extra_params;
      var o = x(l({
        sec_subject_uid: e.sec_subject_uid,
        is_frozen: r === undefined ? 0 : r
      }, n === undefined ? {} : n), ["sec_subject_uid"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.FREEZE_SUBJECT,
          method: "POST",
          data: o
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.request = e.request;
  }
  function er(e) {
    var t = this;
    this.getResourceList = function (e) {
      var r = e.page;
      var n = r === undefined ? 1 : r;
      var o = e.page_size;
      var i = o === undefined ? 10 : o;
      var a = e.subject_uid;
      var s = e.extra_params;
      var u = s === undefined ? {} : s;
      return new Promise(function (e, r) {
        t.request({
          url: "" + m.RESOURCE_LIST + n + "/",
          method: "GET",
          data: l({
            page_size: i,
            subject_uid: a
          }, u)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.request = e.request;
  }
  function en(e) {
    var t = this;
    this.createRole = function (e) {
      var r = e.role_name;
      var n = e.permissions;
      var o = e.subject_uid;
      var i = e.extra_params;
      var a = i === undefined ? {} : i;
      return new Promise(function (e, i) {
        t.request({
          url: m.CREATE_ROLE,
          method: "POST",
          data: l({
            role_name: r,
            permissions: n,
            subject_uid: o
          }, a)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          i(e);
        });
      });
    };
    this.updateRole = function (e) {
      var r = e.role_key;
      var n = e.role_name;
      var o = e.permissions;
      var i = e.description;
      var a = e.subject_uid;
      var s = e.extra_params;
      var u = s === undefined ? {} : s;
      return new Promise(function (e, s) {
        t.request({
          url: m.UPDATE_ROLE,
          method: "POST",
          data: l({
            role_key: r,
            role_name: n,
            permissions: o,
            description: i,
            subject_uid: a
          }, u)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          s(e);
        });
      });
    };
    this.banRole = function (e) {
      var r = e.role_key;
      var n = e.subject_uid;
      var o = e.extra_params;
      var i = o === undefined ? {} : o;
      return new Promise(function (e, o) {
        t.request({
          url: m.BAN_ROLE,
          method: "POST",
          data: l({
            role_key: r,
            subject_uid: n
          }, i)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          o(e);
        });
      });
    };
    this.getRoleList = function (e) {
      var r = e.subject_uid;
      var n = e.extra_params;
      var o = n === undefined ? {} : n;
      return new Promise(function (e, n) {
        t.request({
          url: m.ROLE_LIST,
          method: "GET",
          data: l({
            subject_uid: r
          }, o)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          n(e);
        });
      });
    };
    this.getRoleInfo = function (e) {
      var r = e.role_key;
      var n = e.subject_uid;
      var o = e.extra_params;
      var i = o === undefined ? {} : o;
      return new Promise(function (e, o) {
        t.request({
          url: m.ROLE_INFO,
          method: "GET",
          data: l({
            role_key: r,
            subject_uid: n
          }, i)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          o(e);
        });
      });
    };
    this.request = e.request;
  }
  function eo(e) {
    var t = this;
    this.createUserWithRole = function (e) {
      var r = e.role_key;
      var n = e.sec_user_id;
      var o = e.name;
      var i = e.identity_id;
      var a = e.subject_uid;
      var s = e.extra_params;
      var u = s === undefined ? {} : s;
      return new Promise(function (e, s) {
        t.request({
          url: m.CREATE_USER_WITH_ROLE,
          method: "POST",
          data: l({
            role_key: r,
            sec_user_id: n,
            name: o,
            identity_id: i,
            subject_uid: a
          }, u)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          s(e);
        });
      });
    };
    this.addUserRole = function (e) {
      var r = e.role_key;
      var n = e.sec_user_identity_ids;
      var o = e.subject_uid;
      var i = e.extra_params;
      var a = i === undefined ? {} : i;
      return new Promise(function (e, i) {
        t.request({
          url: m.ADD_USER_ROLE,
          method: "POST",
          data: l({
            role_key: r,
            sec_user_identity_ids: n,
            subject_uid: o
          }, a)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          i(e);
        });
      });
    };
    this.deleteUserRole = function (e) {
      var r = e.role_key;
      var n = e.sec_user_identity_ids;
      var o = e.subject_uid;
      var i = e.extra_params;
      var a = i === undefined ? {} : i;
      return new Promise(function (e, i) {
        t.request({
          url: m.DELETE_USER_ROLE,
          method: "POST",
          data: l({
            role_key: r,
            sec_user_identity_ids: n,
            subject_uid: o
          }, a)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          i(e);
        });
      });
    };
    this.getUserRoleList = function (e) {
      var r = e.subject_uid;
      var n = e.extra_params;
      var o = n === undefined ? {} : n;
      return new Promise(function (e, n) {
        t.request({
          url: m.USER_ROLE_LIST,
          method: "GET",
          data: l({
            subject_uid: r
          }, o)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          n(e);
        });
      });
    };
    this.getAllUserRoleList = function (e) {
      var r = e.subject_uid;
      var n = e.identity_id;
      var o = e.page;
      var i = o === undefined ? 1 : o;
      var a = e.page_size;
      var s = a === undefined ? 10 : a;
      var u = e.extra_params;
      var c = u === undefined ? {} : u;
      return new Promise(function (e, o) {
        t.request({
          url: "" + m.ALL_USER_ROLE_LIST + i + "/",
          method: "GET",
          data: l({
            subject_uid: r,
            identity_id: n,
            page_size: s
          }, c)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          o(e);
        });
      });
    };
    this.getUserPermissions = function (e) {
      var r = e.subject_uid;
      var n = e.extra_params;
      var o = n === undefined ? {} : n;
      return new Promise(function (e, n) {
        t.request({
          url: m.USER_PERMISSIONS,
          method: "GET",
          data: l({
            subject_uid: r
          }, o)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          n(e);
        });
      });
    };
    this.request = e.request;
  }
  var ei = ["extra_params"];
  function ea(e) {
    var t = this;
    this.sendCodeToOldManager = function (e = {}) {
      var r = e.extra_params;
      var n = x(l({
        type: 22
      }, r === undefined ? {} : r), ["type"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.SEND_MOBILE_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.sendEmailCodeToOldManager = function (e = {}) {
      var r = e.extra_params;
      var n = x(l({
        type: 6
      }, r === undefined ? {} : r), ["type"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.SEND_EMAIL_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.verifyOldManagerMobile = function (e) {
      var r = e.extra_params;
      var n = x(l({
        code: e.code,
        type: 22
      }, r === undefined ? {} : r), ["code", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.VERIFY_MOBILE_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.verifyOldManagerEmail = function (e) {
      var r = e.extra_params;
      var n = x(l({
        code: e.code,
        type: 6
      }, r === undefined ? {} : r), ["code", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.VERIFY_EMAIL_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.sendCodeToNewManager = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        verify_ticket: e.verify_ticket,
        type: 101
      }, r === undefined ? {} : r), ["mobile", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.SEND_MOBILE_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.sendEmailCodeToNewManager = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        verify_ticket: e.verify_ticket,
        type: 101
      }, r === undefined ? {} : r), ["email", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.SEND_EMAIL_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.verifyNewManagerMobile = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        code: e.code,
        type: 101
      }, r === undefined ? {} : r), ["mobile", "code", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.CHECK_MOBILE_CODE,
          method: "GET",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.verifyNewManagerEmail = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        code: e.code,
        type: 101
      }, r === undefined ? {} : r), ["email", "code", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: m.CHECK_EMAIL_CODE,
          method: "GET",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.transferManager = function (e) {
      var r = e.extra_params;
      var n = v(e, ei);
      return t.request({
        url: m.TRANSFER_MANAGER,
        method: "POST",
        data: l({}, n, r === undefined ? {} : r)
      });
    };
    this.request = e.request;
  }
  var es = ["extra_params"];
  var eu = ["extra_params"];
  var ec = ["extra_params"];
  function ef(e) {
    var t = this;
    this.sendCode = function (e) {
      var r = e.registerOnly;
      var n = e.extra_params;
      var o = x(l({
        mobile: e.mobile,
        type: r !== undefined && r ? 16 : 24
      }, n === undefined ? {} : n), ["mobile", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.SEND_MOBILE_CODE,
          method: "POST",
          data: o
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.smsLogin = function (e) {
      var r = e.login_only;
      var n = e.extra_params;
      var o = x(l({
        mobile: e.mobile,
        code: e.code
      }, n === undefined ? {} : n), ["mobile", "code"]);
      var i = r !== undefined && r ? h.SMS_LOGIN_ONLY : h.SMS_LOGIN;
      return new Promise(function (e, r) {
        t.request({
          url: i,
          method: "POST",
          data: o
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.smsLoginContinue = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        sms_code_key: e.sms_code_key
      }, r === undefined ? {} : r), ["mobile", "sms_code_key"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.SMS_LOGIN_CONTINUE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.webLogin = function (e) {
      var r = e.platform_app_id;
      var n = e.next;
      var o = e.extra_params;
      var i = o === undefined ? {} : o;
      return new Promise(function (e, o) {
        t.request({
          url: h.SMS_LOGIN_CONTINUE,
          method: "POST",
          data: l({
            platform_app_id: r,
            next: n
          }, i)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          o(e);
        });
      });
    };
    this.emailLogin = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        password: e.password
      }, r === undefined ? {} : r), ["email", "password"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.EMAIL_LOGIN,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.emailCodeLogin = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        code: e.code,
        ect_type: 13
      }, r === undefined ? {} : r), ["email", "code"]);
      return t.request({
        url: h.EMAIL_CODE_LOGIN,
        method: "POST",
        data: n
      });
    };
    this.emailCodeQuickLogin = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        code: e.code
      }, r === undefined ? {} : r), ["email", "code"]);
      return t.request({
        url: h.EMAIL_CODE_QUICK_LOGIN,
        method: "POST",
        data: n
      });
    };
    this.pwdLogin = function (e) {
      var r = e.extra_params;
      var n = x(l({
        username: e.username,
        mobile: e.mobile,
        email: e.email,
        account: e.account,
        password: e.password
      }, r === undefined ? {} : r), ["username", "mobile", "email", "account", "password"]);
      return t.request({
        url: h.PWD_LOGIN,
        method: "POST",
        data: n
      });
    };
    this.authLogin = function (e) {
      var r = e.platform_app_id;
      var n = e.code;
      var o = e.access_token;
      var i = e.access_token_secret;
      var a = e.openid;
      var s = e.profile_key;
      var u = e.login_only;
      var c = u !== undefined && u;
      var f = e.extra_params;
      var d = f === undefined ? {} : f;
      return new Promise(function (e, u) {
        t.request({
          url: c ? h.AUTH_LOGIN_ONLY : h.AUTH_LOGIN,
          method: "POST",
          data: l({
            platform_app_id: r,
            code: n,
            access_token: o,
            access_token_secret: i,
            openid: a,
            profile_key: s
          }, d)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          u(e);
        });
      });
    };
    this.webShareLogin = function (e) {
      var r = e.extra_params;
      var n = v(e, es);
      return t.request({
        url: h.WEB_SHARE_LOGIN,
        method: "POST",
        data: l({}, r === undefined ? {} : r, n)
      });
    };
    this.getOauthMobile = function (e) {
      var r = e.access_token;
      var n = e.access_token_secret;
      var o = e.code;
      var i = e.expires_in;
      var a = e.openid;
      var s = e.platform_app_id;
      var u = e.platform;
      var c = e.need_plaintext;
      var f = c !== undefined && c;
      var d = e.profile_key;
      var p = e.extra_params;
      var v = p === undefined ? {} : p;
      return new Promise(function (e, c) {
        t.request({
          url: h.MOBILE_OAUTH,
          method: "POST",
          data: l({
            access_token: r,
            access_token_secret: n,
            code: o,
            expires_in: i,
            openid: a,
            platform_app_id: s,
            platform: u,
            need_plaintext: f,
            profile_key: d
          }, v)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          c(e);
        });
      });
    };
    this.authBindLogin = function (e) {
      var r = e.extra_params;
      var n = x(l({
        platform_app_id: e.platform_app_id,
        code: e.code,
        mobile: e.mobile,
        sms_code: e.sms_code,
        sms_code_key: e.sms_code_key,
        profile_key: e.profile_key,
        state: e.state
      }, r === undefined ? {} : r), ["mobile", "sms_code"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.AUTH_BIND_ONLY,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.mobileBindLogin = function (e) {
      var r = e.extra_params;
      var n = x(l({
        code: e.code,
        mobile: e.mobile,
        profile_key: e.profile_key,
        state: e.state
      }, r === undefined ? {} : r), ["mobile", "code"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.MOBILE_BIND_ONLY,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.logout = function (e) {
      var r = e.next;
      var n = e.need_redirect;
      var o = n === undefined ? 1 : n;
      if (!o) {
        return t.request({
          url: h.LOGOUT,
          data: {
            need_redirect: o
          }
        });
      }
      var a = t.aid || j.initProps?.aid || "";
      var s = encodeURIComponent(r === undefined ? "/" : r);
      window.location.href = "" + (t.host || "") + h.LOGOUT + "?account_sdk_source=web&sdk_version=2.2.11-doubao.0&aid=" + a + "&next=" + s;
    };
    this.sendEmailCode = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        next: e.next,
        password: e.password,
        type: 1
      }, r === undefined ? {} : r), ["email", "password", "type"]);
      return t.request({
        url: h.SEND_EMAIL_CODE,
        method: "POST",
        data: n
      });
    };
    this.sendEmailLoginCode = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        next: e.next,
        type: 13
      }, r === undefined ? {} : r), ["email", "type"]);
      return t.request({
        url: h.SEND_EMAIL_CODE,
        method: "POST",
        data: n
      });
    };
    this.sendEmailQuickLoginCode = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        next: e.next,
        type: 16
      }, r === undefined ? {} : r), ["email", "type"]);
      return t.request({
        url: h.SEND_EMAIL_CODE,
        method: "POST",
        data: n
      });
    };
    this.emailRegister = function (e) {
      var r = e.ifLogin;
      var n = e.extra_params;
      var o = x(l({
        email: e.email,
        code: e.code,
        password: e.password,
        type: 1
      }, n === undefined ? {} : n), ["email", "password", "type", "code"]);
      return t.request({
        url: r !== undefined && r ? h.EMAIL_REGISTER_LOGIN : h.EMAIL_REGISTER,
        method: "POST",
        data: o
      });
    };
    this.mobileRegister = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        code: e.code,
        password: e.password,
        type: 16
      }, r === undefined ? {} : r), ["mobile", "code", "password", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.MOBILE_REGISTER,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.mobileEmailRegister = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        sms_code: e.sms_code,
        email: e.email,
        email_code: e.email_code,
        password: e.password,
        verify_ticket: e.verify_ticket,
        sms_type: 16,
        ect_type: 1
      }, r === undefined ? {} : r), ["mobile", "sms_code", "sms_type", "email", "email_code", "ect_type", "password"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.MOBILE_EMAIL_REGISTER,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.checkLogin = function (e = {}) {
      var r = e.extra_params;
      return t.request({
        url: h.CHECK_LOGIN,
        method: "GET",
        data: r === undefined ? {} : r
      });
    };
    this.bindWithMobileLogin = function (e) {
      var r = e.extra_params;
      var n = v(e, eu);
      return t.request({
        url: h.BIND_WITH_MOBILE_LOGIN,
        method: "POST",
        data: l({}, r === undefined ? {} : r, n)
      });
    };
    this.bindWithEmailLogin = function (e) {
      var r = e.extra_params;
      var n = v(e, ec);
      return t.request({
        url: h.BIND_WITH_EMAIL_LOGIN,
        method: "POST",
        data: l({}, r === undefined ? {} : r, n)
      });
    };
    this.thirdAuth = function (e) {
      var r = e.platform_app_id;
      var n = e.next;
      var o = e.use_local_host;
      var i = e.action;
      var a = e.extra_params;
      var s = a === undefined ? {} : a;
      var u = "account_sdk_source=web&aid=" + (j.initProps?.aid || "") + "&next=" + encodeURIComponent(n === undefined ? "/" : n) + "&platform_app_id=" + r + "&use_local_host=" + (o === undefined ? 0 : o) + "&action=" + i;
      for (var c in s) {
        if (c) {
          u = typeof s[c] == "string" ? u + "&" + c + "=" + encodeURIComponent(s[c]) : u + "&" + c + "=" + s[c];
        }
      }
      window.location.href = h.THIRD_AUTH + "?" + u;
    };
    this.emailRegisterNoVerifyV2 = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        password: e.password,
        next_url: e.next_url,
        recaptcha_token: e.recaptcha_token
      }, r === undefined ? {} : r), ["email", "password", "recaptcha_token"]);
      return t.request({
        url: h.EMAIL_REGISTER_NO_VERIFY_V2,
        method: "POST",
        data: n
      });
    };
    this.wapLogin = function (e) {
      var r = e.origin;
      var n = e.type;
      var o = e.use_local_host;
      var i = e.scopes;
      var a = e.url_params;
      var s = e.platform_app_id;
      var u = e.platform;
      var c = e.replace;
      var f = encodeURIComponent(e.next);
      var d = encodeURIComponent(t.host + "/auth/login_success/?service=" + f);
      var l = {
        aid: t.aid,
        type: n === undefined ? "web" : n,
        use_local_host: o,
        scopes: i === undefined ? "user_info" : i,
        next: d,
        url_params: a === undefined ? "" : a,
        platform_app_id: s,
        platform: u === undefined ? "" : u
      };
      var p = "";
      var v = Object.keys(l).length;
      Object.keys(l).forEach(function (e, t) {
        p += v === t + 1 ? e + "=" + l[e] : e + "=" + l[e] + "&";
      });
      var m = "" + (r === undefined ? "" : r) + h.AUTH_LOGIN_URL + "?" + p;
      if (c !== undefined && c) {
        window.location.href = m;
      } else {
        window.open(m, "_blank");
      }
    };
    this.bindVerifyInfo = function (e) {
      var r = e.extra_params;
      return t.request({
        url: "/passport/common/register/web/bind_verify_info/",
        method: "GET",
        data: l({
          auth_ticket: e.auth_ticket,
          verify_ticket: e.verify_ticket,
          token: e.token,
          scene: e.scene,
          user_type: e.user_type
        }, r === undefined ? {} : r)
      });
    };
    var r = e.host;
    var n = e.aid;
    this.request = e.request;
    this.host = r;
    this.aid = n;
  }
  var ed = ["extra_params"];
  var el = ["extra_params"];
  var ep = function () {
    function e(e) {
      this.request = e.request;
    }
    var t = e.prototype;
    t.getQrcode = function (e) {
      var t = e.extra_params;
      return this.request({
        url: h.GET_QRCODE + "?next=" + encodeURIComponent(e.next),
        method: "GET",
        data: t === undefined ? {} : t
      });
    };
    t.checkQrconnect = function (e) {
      var t = e.token;
      var r = e.extra_params;
      return this.request({
        url: h.CHECK_QRCONNECT + "?next=" + encodeURIComponent(e.next),
        method: "GET",
        data: l({
          token: t
        }, r)
      });
    };
    t.getQrcodeFromWechat = function (e) {
      var t = e.extra_params;
      var r = v(e, ed);
      return this.request({
        url: h.GET_QRCODE_FROM_WECHAT,
        method: "POST",
        data: l({}, t === undefined ? {} : t, r)
      });
    };
    t.checkQrcodeFromWechat = function (e) {
      var t = e.extra_params;
      var r = v(e, el);
      return this.request({
        url: h.CHECK_QRCODE_FROM_WECHAT,
        method: "POST",
        data: l({}, t === undefined ? {} : t, r)
      });
    };
    return e;
  }();
  function ev(e) {
    var t = this;
    this.sendCode = function (e) {
      var r = e.unbind_exist;
      var n = e.extra_params;
      var o = x(l({
        mobile: e.mobile,
        type: 8,
        unbind_exist: r === undefined ? 0 : r
      }, n === undefined ? {} : n), ["mobile", "type", "unbind_exist"]);
      return t.request({
        url: h.SEND_MOBILE_CODE,
        method: "POST",
        data: o
      });
    };
    this.bindMobile = function (e = {}) {
      var r = e.unbind_exist;
      var n = e.extra_params;
      var o = x(l({
        mobile: e.mobile,
        code: e.code,
        password: e.password,
        verify_ticket: e.verify_ticket,
        unbind_exist: r === undefined ? 0 : r,
        type: 8
      }, n === undefined ? {} : n), ["mobile", "code", "password", "unbind_exist", "type"]);
      return t.request({
        url: h.MOBILE_BIND,
        method: "POST",
        data: o
      });
    };
    this.sendEmailCode = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        type: 8
      }, r === undefined ? {} : r), ["email", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.SEND_EMAIL_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.bindEmail = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        code: e.code
      }, r === undefined ? {} : r), ["email", "code"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.EMAIL_BIND,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.bindAuth = function (e) {
      var r = e.platform_app_id;
      var n = e.code;
      var o = e.access_token;
      var i = e.access_token_secret;
      var a = e.openid;
      var s = e.profile_key;
      var u = e.state;
      var c = e.extra_params;
      var f = c === undefined ? {} : c;
      return new Promise(function (e, c) {
        t.request({
          url: h.AUTH_BIND,
          method: "POST",
          data: l({
            platform_app_id: r,
            code: n,
            access_token: o,
            access_token_secret: i,
            openid: a,
            profile_key: s,
            state: u
          }, f)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          c(e);
        });
      });
    };
    this.unbindAuth = function (e) {
      var r = e.platform;
      var n = e.extra_params;
      var o = n === undefined ? {} : n;
      return new Promise(function (e, n) {
        t.request({
          url: h.AUTH_UNBIND,
          method: "POST",
          data: l({
            platform: r
          }, o)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          n(e);
        });
      });
    };
    this.switchBindAuth = function (e) {
      var r = e.platform_app_id;
      var n = e.profile_key;
      var o = e.extra_params;
      var i = o === undefined ? {} : o;
      return new Promise(function (e, o) {
        t.request({
          url: h.AUTH_SWITCH_BIND,
          method: "POST",
          data: l({
            platform_app_id: r,
            profile_key: n
          }, i)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          o(e);
        });
      });
    };
    this.changeQrcodeSuccess = function (e) {
      var r = e.extra_params;
      return t.request({
        url: h.CHANGE_QRCODE_SUCCESS,
        method: "POST",
        data: l({
          token: e.token
        }, r === undefined ? {} : r)
      });
    };
    this.changeQrcodeComfirm = function (e) {
      var r = e.extra_params;
      return t.request({
        url: h.CHANGE_QRCODE_CONFIRM,
        method: "POST",
        data: l({
          token: e.token,
          verify_ticket: e.verify_ticket
        }, r === undefined ? {} : r)
      });
    };
    this.request = e.request;
  }
  function eh(e) {
    var t = this;
    this.checkMobileRegistered = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile
      }, r === undefined ? {} : r), ["mobile"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.CHECK_MOBILE_REGISTER,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.checkEmailRegistered = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email
      }, r === undefined ? {} : r), ["email"]);
      return t.request({
        url: h.CHECK_EMAIL_REGISTER,
        method: "POST",
        data: n
      });
    };
    this.request = e.request;
  }
  function em(e) {
    this.request = e.request;
  }
  function e_(e) {
    var t = this;
    this.sendCode = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        type: 6
      }, r === undefined ? {} : r), ["mobile", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.SEND_MOBILE_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.validateCode = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        code: e.code,
        type: 6
      }, r === undefined ? {} : r), ["mobile", "code", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.CHECK_MOBILE_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.resetPwdByMobile = function (e) {
      var r = e.extra_params;
      var n = x(l({
        password: e.password,
        mobile: e.mobile,
        code: e.code
      }, r === undefined ? {} : r), ["password", "mobile", "code"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.RESET_PWD_BY_MOBILE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.sendEmailCode = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        type: 4
      }, r === undefined ? {} : r), ["email", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.SEND_EMAIL_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.validateEmail = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        code: e.code,
        type: 4
      }, r === undefined ? {} : r), ["email", "code", "type"]);
      return t.request({
        url: h.CHECK_EMAIL_CODE,
        method: "POST",
        data: n
      });
    };
    this.resetPwdByEmail = function (e) {
      var r = e.extra_params;
      var n = x(l({
        password: e.password,
        email: e.email,
        code: e.code
      }, r === undefined ? {} : r), ["password", "email", "code"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.RESET_PWD_BY_EMAIL,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.resetPwdByMobileTicket = function (e) {
      var r = e.extra_params;
      var n = x(l({
        password: e.password,
        ticket: e.ticket
      }, r === undefined ? {} : r), ["password"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.RESET_PWD_BY_MOBILE_TICKET,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.resetPwdByEmailTicket = function (e) {
      var r = e.extra_params;
      var n = x(l({
        password: e.password,
        ticket: e.ticket
      }, r === undefined ? {} : r), ["password"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.RESET_PWD_BY_EMAIL_TICKET,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.request = e.request;
  }
  function ey(e) {
    var t = this;
    this.sendCodeToOldMobile = function (e) {
      var r = e.use_bind_mobile;
      var n = e.extra_params;
      var o = x(l({
        mobile: e.mobile,
        type: r === undefined || r ? 22 : 28
      }, n === undefined ? {} : n), ["mobile", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.SEND_MOBILE_CODE,
          method: "POST",
          data: o
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.validateOldMobile = function (e) {
      var r = e.use_bind_mobile;
      var n = e.extra_params;
      var o = x(l({
        code: e.code,
        type: r === undefined || r ? 22 : 28
      }, n === undefined ? {} : n), ["code", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.VERIFY_MOBILE_CODE,
          method: "POST",
          data: o
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.sendCodeToNewMobile = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        old_mobile: e.old_mobile,
        type: 20,
        ticket: e.ticket
      }, r === undefined ? {} : r), ["mobile", "old_mobile", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.SEND_MOBILE_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.rebindMobile = function (e) {
      var r = e.kick_other;
      var n = e.extra_params;
      var o = x(l({
        mobile: e.mobile,
        code: e.code,
        ticket: e.ticket,
        kick_other: r === undefined ? 0 : r
      }, n === undefined ? {} : n), ["mobile", "code"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.MOBILE_REBIND,
          method: "POST",
          data: o
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.sendCodeToOldEmail = function (e = {}) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        type: 6
      }, r === undefined ? {} : r), ["email", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.SEND_EMAIL_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.validateOldEmail = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        code: e.code,
        type: 6
      }, r === undefined ? {} : r), ["email", "code", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.VERIFY_EMAIL_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.sendCodeToNewEmail = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        ticket: e.ticket,
        type: 7
      }, r === undefined ? {} : r), ["email", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.SEND_EMAIL_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.rebindEmail = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        code: e.code,
        type: 7,
        ticket: e.ticket
      }, r === undefined ? {} : r), ["email", "code", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.EMAIL_REBIND,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.request = e.request;
  }
  function eg(e) {
    var t = this;
    this.sendCode = function (e = {}) {
      var r = e.verify_mobile_seperate;
      var n = e.extra_params;
      var o = x(l({
        type: r !== undefined && r ? 22 : 13
      }, n === undefined ? {} : n), ["type"]);
      return t.request({
        url: h.SEND_MOBILE_CODE,
        method: "POST",
        data: o
      });
    };
    this.validateMobile = function (e) {
      var r = e.extra_params;
      var n = x(l({
        code: e.code,
        type: 22
      }, r === undefined ? {} : r), ["code", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.VERIFY_MOBILE_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.changePwdByMobile = function (e) {
      var r = e.extra_params;
      var n = x(l({
        password: e.password,
        code: e.code,
        ticket: e.ticket
      }, r === undefined ? {} : r), ["password", "code"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.PWD_CHANGE_BY_MOBILE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.updatePwd = function (e) {
      var r = e.extra_params;
      var n = x(l({
        password: e.password,
        current_password: e.current_password
      }, r === undefined ? {} : r), ["password", "current_password"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.PWD_UPDATE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.sendEmailCode = function (e = {}) {
      var r = e.extra_params;
      var n = x(l({
        type: 11
      }, r === undefined ? {} : r), ["type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.SEND_EMAIL_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.validateEmail = function (e) {
      var r = e.extra_params;
      var n = x(l({
        code: e.code,
        type: 11
      }, r === undefined ? {} : r), ["code", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.VERIFY_EMAIL_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.changePwdByEmail = function (e) {
      var r = e.extra_params;
      var n = x(l({
        password: e.password,
        code: e.code,
        ticket: e.ticket
      }, r === undefined ? {} : r), ["password", "code"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.PWD_CHANGE_BY_EMAIL,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.setPassword = function (e) {
      var r = e.extra_params;
      var n = x(l({
        password: e.password
      }, r === undefined ? {} : r), ["password"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.PWD_SET,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.checkHasSetPwd = function (e = {}) {
      var r = e.extra_params;
      var n = r === undefined ? {} : r;
      return new Promise(function (e, r) {
        t.request({
          url: h.PWD_HAS_SET,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.checkWebHasSetPwd = function (e = {}) {
      var r = e.extra_params;
      return t.request({
        url: h.PWD_HAS_SET_V2,
        method: "GET",
        data: r === undefined ? {} : r
      });
    };
    this.changePwdByEmailAndLogin = function (e) {
      var r = e.extra_params;
      var n = x(l({
        password: e.password,
        code: e.code,
        email: e.email
      }, r === undefined ? {} : r), ["password", "code"]);
      return t.request({
        url: h.PWD_SET_BY_EAMIL_AND_LOGIN,
        method: "POST",
        data: n
      });
    };
    this.request = e.request;
  }
  function eb(e) {
    var t = this;
    this.notLoginSendCode = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        type: 34
      }, r === undefined ? {} : r), ["mobile", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.SEND_MOBILE_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.notLoginValidateMobile = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        code: e.code,
        type: 34
      }, r === undefined ? {} : r), ["mobile", "code", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.CHECK_MOBILE_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.notLoginSendEmailCode = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        type: 15
      }, r === undefined ? {} : r), ["email", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.SEND_EMAIL_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.notLoginValidateEmail = function (e) {
      var r = e.extra_params;
      var n = x(l({
        email: e.email,
        code: e.code,
        type: 15
      }, r === undefined ? {} : r), ["email", "code", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.CHECK_EMAIL_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.sendCode = function (e = {}) {
      var r = e.extra_params;
      var n = x(l({
        type: 22
      }, r === undefined ? {} : r), ["type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.SEND_MOBILE_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.validateMobile = function (e) {
      var r = e.extra_params;
      var n = x(l({
        code: e.code,
        type: 22
      }, r === undefined ? {} : r), ["code", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.VERIFY_MOBILE_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.sendEmailCode = function (e = {}) {
      var r = e.extra_params;
      var n = x(l({
        type: 6
      }, r === undefined ? {} : r), ["type"]);
      return t.request({
        url: h.SEND_EMAIL_CODE,
        method: "POST",
        data: n
      });
    };
    this.validateEmail = function (e) {
      var r = e.extra_params;
      var n = x(l({
        code: e.code,
        type: 6
      }, r === undefined ? {} : r), ["code", "type"]);
      return t.request({
        url: h.VERIFY_EMAIL_CODE,
        method: "POST",
        data: n
      });
    };
    this.accountVerify = function (e) {
      var r = e.extra_params;
      var n = x(l({
        account: e.account,
        password: e.password,
        user_login_version: 1
      }, r === undefined ? {} : r), ["account", "password"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.ACCOUNT_VERIFY,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.authVerify = function (e) {
      var r = e.platform_app_id;
      var n = e.code;
      var o = e.access_token;
      var i = e.access_token_secret;
      var a = e.openid;
      var s = e.profile_key;
      var u = e.extra_params;
      var c = u === undefined ? {} : u;
      return new Promise(function (e, u) {
        t.request({
          url: h.AUTH_VERIFY,
          method: "POST",
          data: l({
            platform_app_id: r,
            code: n,
            access_token: o,
            access_token_secret: i,
            openid: a,
            profile_key: s
          }, c)
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          u(e);
        });
      });
    };
    this.smsAuthorizeSendCode = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        type: 26
      }, r === undefined ? {} : r), ["mobile", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.SEND_MOBILE_CODE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.smsAuthorize = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        code: e.code,
        type: 26
      }, r === undefined ? {} : r), ["mobile", "code", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: h.SMS_AUTHORIZE,
          method: "POST",
          data: n
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.request = e.request;
  }
  function ew(e) {
    var t = this;
    this.verifyWay = function (e) {
      var r = e.extra_params;
      return t.request({
        url: h.CANCEL_VERIFY_WAY,
        method: "GET",
        data: l({
          cancel_ticket: e.cancel_ticket
        }, r === undefined ? {} : r)
      });
    };
    this.checkIfPass = function (e) {
      return t.request({
        url: h.CANCEL_CHECK,
        method: "GET",
        data: l({
          value_ticket: e.value_ticket
        }, e.extra_params)
      });
    };
    this.confirm = function (e) {
      var r = e.extra_params;
      return t.request({
        url: h.CANCEL_CONFIRM,
        method: "POST",
        data: l({
          value_ticket: e.value_ticket,
          token: e.token,
          cancel_ticket: e.cancel_ticket,
          abandon: e.abandon
        }, r === undefined ? {} : r)
      });
    };
    this.cancel = function (e) {
      return t.request({
        url: h.CANCEL_REQUEST_CANCEL,
        method: "POST",
        data: l({
          type: e.type,
          token: e.token
        }, e.extra_params)
      });
    };
    this.request = e.request;
  }
  var eE = ["extra_params"];
  var eO = ["extra_params"];
  var eS = ["extra_params"];
  var eT = ["extra_params"];
  var eC = function () {
    function e(e) {
      var t = e.isBoe;
      this.request = e.request;
      this.isBoe = t !== undefined && t;
    }
    var t = e.prototype;
    t.getAuthInfo = function (e) {
      var t = e.extra_params;
      return this.request({
        url: h.GET_OPEN_AUTH_INFO,
        method: "GET",
        data: l({
          client_key: e.client_key,
          scope: e.scope
        }, t === undefined ? {} : t)
      });
    };
    t.sendCode = function (e) {
      var t = e.extra_params;
      var r = x(l({
        mobile: e.mobile,
        type: 27
      }, t === undefined ? {} : t), ["mobile", "type"]);
      return this.request({
        url: h.OPEN_SEND_CODE,
        method: "GET",
        data: r
      });
    };
    t.smsAuth = function (e) {
      var t = e.extra_params;
      var r = x(l({
        client_key: e.client_key,
        scope: e.scope,
        source: e.source,
        redirect_uri: e.redirect_uri,
        state: e.state,
        mobile: e.mobile,
        code: e.code
      }, t === undefined ? {} : t), ["mobile", "code"]);
      return this.request({
        url: h.OPEN_SMS_AUTH,
        method: "POST",
        data: r
      });
    };
    t.accountAuth = function (e) {
      var t = e.extra_params;
      var r = x(l({
        client_key: e.client_key,
        scope: e.scope,
        source: e.source,
        redirect_uri: e.redirect_uri,
        state: e.state,
        password: e.password,
        account: e.account
      }, t === undefined ? {} : t), ["password", "account"]);
      return this.request({
        url: h.OPEN_ACCOUNT_AUTH,
        method: "POST",
        data: r
      });
    };
    t.thirdAuth = function (e) {
      var t = e.extra_params;
      var r = v(e, eE);
      return this.request({
        url: h.OPEN_THIRD_AUTH,
        method: "POST",
        data: l({}, r, t === undefined ? {} : t)
      });
    };
    t.getQRCode = function (e) {
      var t = e.extra_params;
      return this.request({
        url: h.OPEN_GET_QRCODE,
        method: "POST",
        data: l({
          client_key: e.client_key,
          scope: e.scope,
          state: e.state,
          next: e.next
        }, t === undefined ? {} : t)
      });
    };
    t.checkQRCode = function (e) {
      var t = e.extra_params;
      return this.request({
        url: h.OPEN_CHECK_QRCODE,
        method: "POST",
        data: l({
          token: e.token,
          next: e.next,
          scope: e.scope,
          client_key: e.client_key
        }, t === undefined ? {} : t)
      });
    };
    t.toScanQRCode = function (e) {
      var t = e.extra_params;
      return this.request({
        url: h.OPEN_TO_SCAN_QRCODE,
        method: "POST",
        data: l({}, t === undefined ? {} : t)
      });
    };
    t.scanQRCode = function (e) {
      var t = e.extra_params;
      return this.request({
        url: h.OPEN_SCAN_QRCODE,
        method: "POST",
        data: l({
          token: e.token
        }, t === undefined ? {} : t)
      });
    };
    t.confirmQRCode = function (e) {
      var t = e.extra_params;
      return this.request({
        url: h.OPEN_CONFIRM_QRCODE,
        method: "POST",
        data: l({
          token: e.token,
          scopes: e.scopes
        }, t === undefined ? {} : t)
      });
    };
    t.webAuth = function (e) {
      var t = e.extra_params;
      var r = v(e, eO);
      return this.request({
        url: h.OPEN_WEB_AUTH,
        method: "POST",
        data: l({}, r, t === undefined ? {} : t)
      });
    };
    t.getOauthToken = function (e) {
      var t = e.extra_params;
      var r = v(e, eS);
      return this.request({
        url: h.GET_OPEN_OAUTH_TOKEN,
        method: "GET",
        data: l({}, r, t === undefined ? {} : t)
      });
    };
    t.updateAuthorizeInfo = function (e) {
      var t = e.extra_params;
      var r = v(e, eT);
      return this.request({
        url: h.OPEN_UPDATE_AUTHORIZE_INFO,
        method: "POST",
        data: l({}, r, t === undefined ? {} : t)
      });
    };
    t.douyinOauthConnect = function (e) {
      var t = R(8) + "-" + R(4) + "-" + R(4) + "-" + R(4) + "-" + R(12);
      var r = e.optionalScope;
      var n = e.state;
      var o = n === undefined ? t : n;
      var i = e.response_type;
      var a = e.host;
      var s = "" + (a === undefined ? "https://open.douyin.com" : a) + h.PLATFORM_OAUTH_CONNECT + "?" + Object.entries({
        client_key: e.client_key,
        scope: e.scope,
        optionalScope: r === undefined ? "" : r,
        state: o,
        response_type: i === undefined ? "code" : i,
        redirect_uri: e.redirect_uri
      }).map(function (e) {
        return e[0] + "=" + encodeURIComponent(e[1]);
      }).join("&");
      var u = new Date();
      u.setTime(u.getTime() + 5184000000);
      document.cookie = "passport_open_state=" + o + "; Domain=" + window.location.host + "; Path=/; SameSite=None; Secure; expires=" + u.toUTCString();
      window.location.href = s;
    };
    return e;
  }();
  function ex(e) {
    var t = this;
    this.getAccountInfo = function (e = {}) {
      var r = e.extra_params;
      return t.request({
        url: h.ACCOUNT_INFO,
        method: "GET",
        data: r === undefined ? {} : r
      });
    };
    this.setAccount = function (e = {}) {
      var r = e.extra_params;
      var n = x(l({
        password: e.password,
        username: e.username
      }, r === undefined ? {} : r), ["password", "username"]);
      return t.request({
        url: h.ACCOUNT_SET,
        method: "POST",
        data: n
      });
    };
    this.request = e.request;
  }
  var eI = ["extra_params"];
  function eP(e) {
    var t = this;
    this.getOauthProfile = function (e) {
      var n = e.extra_params;
      return t.request({
        url: h.OAUTH_PROFILE,
        method: "GET",
        data: l({
          aid: t.props?.aid,
          access_token: e.access_token,
          access_token_secret: e.access_token_secret,
          code: e.code,
          expires_in: e.expires_in,
          openid: e.openid,
          platform_app_id: e.platform_app_id,
          platform: e.platform
        }, n === undefined ? {} : n)
      });
    };
    this.uploadAvatar = function (e) {
      var r = e.avatar;
      var n = e.extra_params;
      var o = new FormData();
      var i = new Blob([r], {
        type: r.type
      });
      o.append("avatar", i);
      return t.request({
        url: h.UPLOAD_AVATAR,
        method: "POST",
        data: o,
        params: l({}, n),
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
    };
    this.updateUserInfo = function (e) {
      var r = e.extra_params;
      var n = l({}, v(e, eI), r === undefined ? {} : r);
      return t.request({
        url: h.UPDATE_USERINFO,
        method: "POST",
        data: n
      });
    };
    this.checkDefaultInfo = function (e) {
      var r = e.extra_params;
      return t.request({
        url: h.CHECK_DEFAULT_INFO,
        method: "GET",
        params: l({
          scene: e.scene
        }, r === undefined ? {} : r)
      });
    };
    this.getDefaultImageList = function (e) {
      var r = e.extra_params;
      var n = h.GET_BACKGROUND_LIST.replace("{aid}", String(t.props.aid));
      return t.request({
        url: n,
        method: "GET",
        params: l({}, r === undefined ? {} : r)
      });
    };
    this.getDefaultAvatarList = function (e) {
      var r = e.extra_params;
      var n = h.GET_DEFAULT_AVATAR_LIST.replace("{aid}", String(t.props.aid));
      return t.request({
        url: n,
        method: "GET",
        params: l({}, r === undefined ? {} : r)
      });
    };
    this.getRecommendName = function (e) {
      var r = e.extra_params;
      return t.request({
        url: h.GET_RECOMMEND_NAME,
        method: "GET",
        params: l({}, r === undefined ? {} : r)
      });
    };
    this.checkRemainTimes = function (e) {
      var r = e.field_namespace;
      var n = e.extra_params;
      return t.request({
        url: h.CHECK_REMAIN_TIMES,
        method: "GET",
        params: l({
          field: e.field,
          field_namespace: r === undefined ? "" : r
        }, n === undefined ? {} : n)
      });
    };
    this.uploadPicture = function (e) {
      var r = e.pic;
      var n = e.is_sensitive;
      var o = e.extra_params;
      var i = new FormData();
      var a = new Blob([r], {
        type: r.type
      });
      i.append("pic", a);
      return t.request({
        url: h.UPLOAD_PICTURE,
        method: "POST",
        data: i,
        params: l({
          is_sensitive: n
        }, o === undefined ? {} : o)
      });
    };
    this.downloadImage = function (e) {
      var r = e.extra_params;
      return t.request({
        url: h.DOWNLOAD_IMAGE,
        method: "GET",
        params: l({
          key: e.key
        }, r === undefined ? {} : r)
      });
    };
    this.request = e.request;
    this.props = e;
  }
  var eR = function (e) {
    function t(t) {
      r = e.call(this, t, "web") || this;
      t.printLog;
      var r;
      var n = t.acrawler;
      var o = n === undefined ? "" : n;
      if (o) {
        g(o, t);
      }
      var i = l({}, t, {
        request: r.request
      });
      r.login = new ef(i);
      r.qrcodeLogin = new ep(i);
      r.register = new em(i);
      r.forgetPwd = new e_(i);
      r.bind = new ev(i);
      r.rebind = new ey(i);
      r.password = new eg(i);
      r.extra = new eh(i);
      r.verify = new eb(i);
      r.cancel = new ew(i);
      r.open = new eC(i);
      r.account = new ex(i);
      r.user = new eP(i);
      r.affLogin = new F(i);
      r.affRegister = new z(i);
      r.affInvite = new X(i);
      r.affSubject = new et(i);
      r.affForgetPwd = new Y(i);
      r.affResource = new er(i);
      r.affRole = new en(i);
      r.affUser = new eo(i);
      r.affSuper = new ea(i);
      return r;
    }
    p(t, e);
    return t;
  }(H);
  function ej(e) {
    var t = this;
    this.notLoginSendCode = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        type: 34
      }, r === undefined ? {} : r), ["mobile", "type"]);
      return t.request({
        url: "/passport/mobile/send_code/",
        method: "POST",
        data: n
      });
    };
    this.notLoginValidateMobile = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        code: e.code,
        type: 34
      }, r === undefined ? {} : r), ["mobile", "code", "type"]);
      return t.request({
        url: "/passport/mobile/check_code/",
        method: "POST",
        data: n
      });
    };
    this.request = e.request;
  }
  var eL = ["extra_params"];
  var eA = ["extra_params"];
  function ek(e) {
    var t = this;
    this.bindWithMobileLogin = function (e) {
      var r = e.extra_params;
      var n = v(e, eL);
      return t.request({
        url: "/passport/auth/bind_with_mobile_login/",
        method: "POST",
        data: l({}, r === undefined ? {} : r, n)
      });
    };
    this.authLogin = function (e) {
      var r = e.extra_params;
      var n = v(e, eA);
      return t.request({
        url: "/passport/auth/login/",
        method: "POST",
        data: l({}, r === undefined ? {} : r, n)
      });
    };
    this.memberSwitch = function (e) {
      return t.request({
        url: "/passport/aff/mobile/member/switch/",
        method: "POST",
        data: {
          to_sec_member_id: e.to_sec_member_id
        }
      });
    };
    this.request = e.request;
  }
  function eD(e) {
    var t = this;
    this.unbindUnusableMobile = function (e) {
      var r = e.extra_params;
      var n = x(l({
        mobile: e.mobile,
        code: e.code,
        scene: 1
      }, r === undefined ? {} : r), ["mobile", "code"]);
      return t.request({
        url: "/passport/mobile/unbind_limited_unusable_mobile/",
        method: "POST",
        data: n
      });
    };
    this.request = e.request;
  }
  var eN = function (e) {
    function t(t) {
      r = e.call(this, t, "app") || this;
      t.printLog;
      var r;
      var n = t.acrawler;
      var o = n === undefined ? "" : n;
      if (o) {
        g(o, t);
      }
      var i = l({}, t, {
        request: r.request
      });
      r.verify = new ej(i);
      r.login = new ek(i);
      r.bind = new eD(i);
      return r;
    }
    p(t, e);
    return t;
  }(H);
  var eM = ["mobile", "type"];
  var eq = ["mobile", "type"];
  var eU = ["email", "password"];
  var eB = ["email", "password"];
  var eH = ["email", "password"];
  var eG = ["email", "password"];
  function eF(e) {
    var t = this;
    this.baseSendMobileCode = function (e) {
      var r = e.mobile;
      var n = e.type;
      var o = v(e, eM);
      var i = x(l({
        mobile: r,
        type: n
      }, o), ["mobile", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: _.MOBILE_CODE_URL,
          method: "POST",
          data: i
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.baseSendMobileCodeV2 = function (e) {
      var r = e.mobile;
      var n = e.type;
      var o = v(e, eq);
      var i = x(l({
        mobile: r,
        type: n
      }, o), ["mobile", "type"]);
      return new Promise(function (e, r) {
        t.request({
          url: _.MOBILE_CODE_URL_V2,
          method: "POST",
          data: i
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.baseSendEmailLink = function (e) {
      var r = e.email;
      var n = e.password;
      var o = v(e, eU);
      var i = x(l({
        email: r,
        password: n
      }, o), ["email", "password"]);
      return new Promise(function (e, r) {
        t.request({
          url: _.EMAIL_ACTIVATE_URL,
          method: "POST",
          data: i
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.baseSendEmailLinkV2 = function (e) {
      var r = e.email;
      var n = e.password;
      var o = v(e, eB);
      var i = x(l({
        email: r,
        password: n
      }, o), ["email", "password"]);
      return new Promise(function (e, r) {
        t.request({
          url: _.EMAIL_ACTIVATE_URL_V2,
          method: "POST",
          data: i
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.baseSendEmailCode = function (e) {
      var r = e.email;
      var n = e.password;
      var o = v(e, eH);
      var i = x(l({
        email: r,
        password: n
      }, o), ["email", "password"]);
      return new Promise(function (e, r) {
        t.request({
          url: _.EMAIL_ACTIVATE_CODE_URL,
          method: "POST",
          data: i
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.baseSendEmailCodeV2 = function (e) {
      var r = e.email;
      var n = e.password;
      var o = v(e, eG);
      var i = x(l({
        email: r,
        password: n
      }, o), ["email", "password"]);
      return new Promise(function (e, r) {
        t.request({
          url: _.EMAIL_ACTIVATE_CODE_URL_V2,
          method: "POST",
          data: i
        }).then(function (t) {
          e(t);
        }).catch(function (e) {
          r(e);
        });
      });
    };
    this.request = e.request;
  }
  var eV = ["extra_params"];
  var eW = ["extra_params"];
  var ez = ["mobile", "code", "extra_params"];
  var eY = function (e) {
    function t() {
      var t;
      (t = e.apply(this, arguments) || this).sendMobileCode = function (e) {
        var r = e.extra_params;
        var n = v(e, eV);
        return t.baseSendMobileCode(l({}, n, {
          type: 8
        }, r === undefined ? {} : r));
      };
      t.sendMobileCodeV2 = function (e) {
        var r = e.extra_params;
        var n = v(e, eW);
        return t.baseSendMobileCodeV2(l({}, n, {
          type: 8
        }, r === undefined ? {} : r));
      };
      t.mobileBind = function (e) {
        var r = e.mobile;
        var n = e.code;
        var o = e.extra_params;
        var i = v(e, ez);
        var a = x(l({
          mobile: r,
          code: n
        }, i, {
          type: 8
        }, o === undefined ? {} : o), ["mobile", "type", "code"]);
        return t.request({
          url: _.BIND_MOBILE,
          method: "POST",
          data: a
        });
      };
      return t;
    }
    p(t, e);
    return t;
  }(eF);
  var eJ = ["extra_params"];
  var eK = ["extra_params"];
  var eQ = ["mobile", "code", "extra_params"];
  var eX = function (e) {
    function t() {
      var t;
      (t = e.apply(this, arguments) || this).sendMobileCode = function (e) {
        var r = e.extra_params;
        var n = v(e, eJ);
        return t.baseSendMobileCode(l({}, n, {
          type: 20
        }, r === undefined ? {} : r));
      };
      t.sendMobileCodeV2 = function (e) {
        var r = e.extra_params;
        var n = v(e, eK);
        return t.baseSendMobileCodeV2(l({}, n, {
          type: 20
        }, r === undefined ? {} : r));
      };
      t.mobileChange = function (e) {
        var r = e.mobile;
        var n = e.code;
        var o = e.extra_params;
        var i = v(e, eQ);
        var a = x(l({
          mobile: r,
          code: n
        }, i, o === undefined ? {} : o), ["mobile", "code"]);
        return t.request({
          url: _.CHANGE_MOBILE,
          method: "POST",
          data: a
        });
      };
      return t;
    }
    p(t, e);
    return t;
  }(eF);
  var eZ = ["extra_params"];
  var e$ = ["extra_params"];
  var e0 = ["extra_params"];
  var e1 = ["extra_params"];
  var e2 = ["extra_params"];
  var e6 = ["extra_params"];
  var e3 = function (e) {
    function t(t) {
      (r = e.call(this, t) || this).checkLogin = function (e) {
        var t = e.extra_params;
        var n = v(e, eZ);
        return r.request({
          url: _.CHECK_LOGIN,
          method: "GET",
          data: l({}, n, t === undefined ? {} : t)
        });
      };
      r.sendMobileCodeV2 = function (e) {
        var t = e.extra_params;
        var n = v(e, e$);
        return r.baseSendMobileCodeV2(l({}, n, {
          type: 24
        }, t === undefined ? {} : t));
      };
      r.quickAuthV2 = function (e) {
        var t = e.extra_params;
        var n = x(l({
          mobile: e.mobile,
          code: e.code,
          service: e.service
        }, t === undefined ? {} : t), ["mobile", "code", "password"]);
        return r.request({
          url: _.MOBILE_CODE_LOGIN_URL_V2,
          method: "POST",
          data: n
        });
      };
      r.quickAuthLoginOnly = function (e) {
        var t = e.extra_params;
        var n = x(l({
          mobile: e.mobile,
          code: e.code,
          service: e.service
        }, t === undefined ? {} : t), ["mobile", "code"]);
        return r.request({
          url: _.MOBILE_CODE_LOGIN_ONLY_URL,
          method: "POST",
          data: n
        });
      };
      r.accountLoginV2 = function (e) {
        var t = e.account_type;
        var n = e.extra_params;
        var o = x(l({
          account: e.account,
          password: e.password,
          account_type: t === undefined ? 0 : t,
          service: e.service
        }, n === undefined ? {} : n), ["account", "password"]);
        return r.request({
          url: _.ACCOUNT_LOGIN_URL_V2,
          method: "POST",
          data: o
        });
      };
      r.logout = function (e) {
        var t = e.service;
        var n = e.not_redirect;
        if (n !== undefined && n) {
          return new Promise(function (e, n) {
            r.request({
              url: "/csrf_token/",
              method: "POST"
            }).then(function (o) {
              var i = o.passport_csrf_token;
              r.request({
                url: _.LOGOUT,
                method: "GET",
                data: {
                  aid: r.aid,
                  service: t,
                  sso_not_redirect: 1
                },
                headers: {
                  "x-tt-passport-csrf-token": i === undefined ? "" : i
                }
              }).then(function (t) {
                e(t);
              }).catch(function (e) {
                n(e);
              });
            }).catch(function (e) {
              n(e);
            });
          });
        }
        window.location.href = "" + r.host + _.LOGOUT + "?service=" + encodeURIComponent(t) + "&account_sdk_source=sso&sdk_version=2.2.11-doubao.0";
      };
      r.wapLogin = function (e) {
        var t = e.origin;
        var n = e.type;
        var o = e.use_local_host;
        var i = e.scopes;
        var a = e.url_params;
        var s = e.platform_app_id;
        var u = e.platform;
        var c = e.replace;
        var f = encodeURIComponent(e.next);
        var d = encodeURIComponent(r.host + "/auth/login_success/?service=" + f);
        var l = {
          aid: r.aid,
          type: n === undefined ? "sso" : n,
          use_local_host: o,
          scopes: i === undefined ? "user_info" : i,
          next: d,
          url_params: a === undefined ? "" : a,
          platform_app_id: s,
          platform: u === undefined ? "" : u
        };
        var p = "";
        var v = Object.keys(l).length;
        Object.keys(l).forEach(function (e, t) {
          p += v === t + 1 ? e + "=" + l[e] : e + "=" + l[e] + "&";
        });
        var h = "" + (t === undefined ? "" : t) + _.AUTH_LOGIN_URL + "?" + p;
        if (c !== undefined && c) {
          window.location.href = h;
        } else {
          window.open(h, "_blank");
        }
      };
      r.sendEmailLink = function (e) {
        var t = e.extra_params;
        var n = v(e, e0);
        return r.baseSendEmailLink(l({}, n, {
          ect_type: 13
        }, t === undefined ? {} : t));
      };
      r.sendEmailLinkV2 = function (e) {
        var t = e.extra_params;
        var n = v(e, e1);
        return r.baseSendEmailLinkV2(l({}, n, {
          ect_type: 13
        }, t === undefined ? {} : t));
      };
      r.sendEmailCode = function (e) {
        var t = e.extra_params;
        var n = v(e, e2);
        return r.baseSendEmailCode(l({}, n, {
          ect_type: 13
        }, t === undefined ? {} : t));
      };
      r.sendEmailCodeV2 = function (e) {
        var t = e.extra_params;
        var n = v(e, e6);
        return r.baseSendEmailCodeV2(l({}, n, {
          ect_type: 13
        }, t === undefined ? {} : t));
      };
      r.bindWithMobileLogin = function (e) {
        var t = e.change_bind;
        var n = e.extra_params;
        return r.request({
          url: _.BIND_WITH_MOBILE_LOGIN,
          method: "POST",
          data: l({
            code: e.code,
            platform_app_id: e.platform_app_id,
            service: e.service,
            profile_key: e.profile_key,
            change_bind: t === undefined ? 0 : t
          }, n === undefined ? {} : n)
        });
      };
      r.authLogin = function (e) {
        var t = e.login_only;
        var n = e.extra_params;
        return r.request({
          url: t !== undefined && t ? _.AUTH_LOGIN_ONLY : _.AUTH_LOGIN,
          method: "POST",
          data: l({
            code: e.code,
            platform_app_id: e.platform_app_id,
            service: e.service,
            profile_key: e.profile_key
          }, n === undefined ? {} : n)
        });
      };
      r.mobileEmailRegister = function (e) {
        var t = e.extra_params;
        var n = x(l({
          mobile: e.mobile,
          sms_code: e.sms_code,
          email: e.email,
          email_code: e.email_code,
          password: e.password,
          verify_ticket: e.verify_ticket,
          service: e.service,
          sms_type: 16,
          ect_type: 1
        }, t === undefined ? {} : t), ["mobile", "sms_code", "sms_type", "email", "email_code", "ect_type", "password"]);
        return r.request({
          url: _.MOBILE_EMAIL_REGISTER,
          method: "POST",
          data: n
        });
      };
      r.memberSwitch = function (e) {
        var t = e.extra_params;
        return r.request({
          url: "/aff/member/switch/",
          method: "POST",
          data: l({
            to_sec_member_id: e.to_sec_member_id
          }, t === undefined ? {} : t)
        });
      };
      var r;
      var n = t.host;
      var o = t.originHost;
      r.aid = t.aid;
      r.host = n;
      r.originHost = o;
      return r;
    }
    p(t, e);
    return t;
  }(eF);
  var e5 = ["extra_params"];
  var e8 = ["extra_params"];
  var e4 = function (e) {
    function t() {
      var t;
      (t = e.apply(this, arguments) || this).sendMobileCodeV2 = function (e) {
        var r = e.check_register;
        var n = e.extra_params;
        return t.baseSendMobileCodeV2(l({
          mobile: e.mobile,
          type: r !== undefined && r ? 4 : 6
        }, n === undefined ? {} : n));
      };
      t.sendEmailCodeV2 = function (e) {
        var r = e.extra_params;
        var n = v(e, e5);
        return t.baseSendEmailCodeV2(l({}, n, {
          ect_type: 4
        }, r === undefined ? {} : r));
      };
      t.resetPassword = function (e) {
        var r = e.extra_params;
        var n = r === undefined ? {} : r;
        var o = x({
          account: e.account,
          code: e.code,
          password: e.password
        }, ["account", "code", "password"]);
        return new Promise(function (e, r) {
          t.request({
            url: _.RESET_PASSWORD,
            method: "POST",
            data: l({}, o, n)
          }).then(function (t) {
            e(t);
          }).catch(function (e) {
            r(e);
          });
        });
      };
      t.resetPasswordByEmailCode = function (e) {
        var r = e.extra_params;
        var n = x({
          email: e.email,
          code: e.code,
          password: e.password
        }, ["email", "code", "password"]);
        return t.request({
          url: _.RESET_PASSWORD_BY_EMAIL,
          method: "POST",
          data: l({}, n, {
            ect_type: 4
          }, r === undefined ? {} : r)
        });
      };
      t.sendEmailCodeModifyPassword = function (e = {}) {
        var r = e.extra_params;
        var n = v(e, e8);
        return t.baseSendEmailCodeV2(l({}, n, {
          ect_type: 11
        }, r === undefined ? {} : r));
      };
      t.modifyPasswordByEmailCode = function (e) {
        var r = e.extra_params;
        var n = x({
          email: e.email,
          code: e.code,
          password: e.password
        }, ["email", "code", "password"]);
        return t.request({
          url: _.RESET_PASSWORD_BY_EMAIL,
          method: "POST",
          data: l({}, n, {
            ect_type: 11
          }, r === undefined ? {} : r)
        });
      };
      return t;
    }
    p(t, e);
    return t;
  }(eF);
  var e9 = function (e) {
    function t() {
      var t;
      (t = e.apply(this, arguments) || this).getQrcode = function (e) {
        var r = e.extra_params;
        return t.request({
          url: _.GET_QRCODE + "?service=" + encodeURIComponent(e.service),
          method: "GET",
          data: r === undefined ? {} : r
        });
      };
      t.checkQrconnect = function (e) {
        var r = e.token;
        var n = e.extra_params;
        return t.request({
          url: _.CHECK_QRCONNECT + "?service=" + encodeURIComponent(e.service),
          method: "GET",
          data: l({
            token: r
          }, n === undefined ? {} : n)
        });
      };
      return t;
    }
    p(t, e);
    return t;
  }(eF);
  var e7 = ["extra_params"];
  var te = ["extra_params"];
  var tt = ["code", "extra_params"];
  var tr = function (e) {
    function t() {
      var t;
      (t = e.apply(this, arguments) || this).sendMobileCode = function (e) {
        var r = e.extra_params;
        var n = v(e, e7);
        return t.baseSendMobileCode(l({}, n, {
          type: 22
        }, r === undefined ? {} : r));
      };
      t.sendMobileCodeV2 = function (e) {
        var r = e.extra_params;
        var n = v(e, te);
        return t.baseSendMobileCodeV2(l({}, n, {
          type: 22
        }, r === undefined ? {} : r));
      };
      t.quickAuth = function (e) {
        var r = e.code;
        var n = e.extra_params;
        var o = v(e, tt);
        var i = x(l({
          code: r
        }, o, n === undefined ? {} : n), ["code"]);
        return t.request({
          url: _.QUICK_AUTH,
          method: "POST",
          data: i
        });
      };
      return t;
    }
    p(t, e);
    return t;
  }(eF);
  var tn = ["email", "extra_params"];
  var to = ["email", "code", "mobile", "password", "extra_params"];
  var ti = ["email", "code", "mobile", "password", "extra_params"];
  var ta = ["email", "code", "extra_params"];
  var ts = ["extra_params"];
  var tu = ["extra_params"];
  var tc = ["extra_params"];
  var tf = ["extra_params"];
  var td = ["extra_params"];
  var tl = ["extra_params"];
  var tp = function (e) {
    function t() {
      var t;
      (t = e.apply(this, arguments) || this).emailRegisterXhr = function (e) {
        return t.request({
          url: _.EMAIL_REGISTER,
          method: "POST",
          data: e
        });
      };
      t.emailRegister = function (e) {
        var r = e.email;
        var n = e.extra_params;
        var o = v(e, tn);
        var i = x(l({
          email: r
        }, o, {
          ect_type: 1
        }, n === undefined ? {} : n), ["email", "code", "password"]);
        return t.emailRegisterXhr(i);
      };
      t.emailRegisterAndBindMoblieV2 = function (e) {
        var r = e.email;
        var n = e.code;
        var o = e.mobile;
        var i = e.password;
        var a = e.extra_params;
        var s = v(e, to);
        var u = x(l({
          email: r,
          code: n,
          mobile: o,
          password: i
        }, s, a === undefined ? {} : a), ["email", "code", "mobile", "password"]);
        return t.request({
          url: _.EMAIL_REGISTER_V2,
          method: "POST",
          data: u
        });
      };
      t.mobileRegisterAndBindEmailV2 = function (e) {
        var r = e.email;
        var n = e.code;
        var o = e.mobile;
        var i = e.password;
        var a = e.extra_params;
        var s = v(e, ti);
        var u = x(l({
          email: r,
          code: n,
          mobile: o,
          password: i
        }, s, a === undefined ? {} : a), ["email", "code", "mobile", "password"]);
        return t.request({
          url: _.MOBILE_REGISTER_WITH_EMAIL,
          method: "POST",
          data: u
        });
      };
      t.emailActivateCodeLogin = function (e) {
        var r = e.email;
        var n = e.code;
        var o = e.extra_params;
        var i = v(e, ta);
        var a = x(l({
          email: r,
          code: n
        }, i, {
          ect_type: 13
        }, o === undefined ? {} : o), ["email", "code"]);
        return t.request({
          url: _.EMAIL_ACTIVATE_CODE_LOGIN,
          method: "POST",
          data: a
        });
      };
      t.sendMobileCode = function (e) {
        var r = e.extra_params;
        var n = v(e, ts);
        return t.baseSendMobileCode(l({}, n, {
          type: 16
        }, r === undefined ? {} : r));
      };
      t.sendMobileCodeV2 = function (e) {
        var r = e.extra_params;
        var n = v(e, tu);
        return t.baseSendMobileCodeV2(l({}, n, {
          type: 16
        }, r === undefined ? {} : r));
      };
      t.sendEmailLink = function (e) {
        var r = e.extra_params;
        var n = v(e, tc);
        return t.baseSendEmailLink(l({}, n, {
          ect_type: 1
        }, r === undefined ? {} : r));
      };
      t.sendEmailLinkV2 = function (e) {
        var r = e.extra_params;
        var n = v(e, tf);
        return t.baseSendEmailLinkV2(l({}, n, {
          ect_type: 1
        }, r === undefined ? {} : r));
      };
      t.sendEmailCode = function (e) {
        var r = e.extra_params;
        var n = v(e, td);
        return t.baseSendEmailCode(l({}, n, {
          ect_type: 1
        }, r === undefined ? {} : r));
      };
      t.sendEmailCodeV2 = function (e) {
        var r = e.extra_params;
        var n = v(e, tl);
        return t.baseSendEmailCodeV2(l({}, n, {
          ect_type: 1
        }, r === undefined ? {} : r));
      };
      return t;
    }
    p(t, e);
    return t;
  }(eF);
  var tv = function (e) {
    function t(t) {
      r = e.call(this, t, "sso") || this;
      var r;
      var n = t.host;
      var o = t.acrawler;
      var i = o === undefined ? "" : o;
      t.printLog;
      if (i) {
        g(i, t);
      }
      r.host = n || "";
      r.originHost = window.location.origin;
      var a = l({}, t, {
        request: r.request
      });
      r.bindMobile = new eY(a);
      r.changeMobile = new eX(a);
      r.login = new e3(l({}, a, {
        originHost: r.originHost
      }));
      r.password = new e4(a);
      r.qrcodeLogin = new e9(a);
      r.quickAuth = new tr(a);
      r.register = new tp(a);
      return r;
    }
    p(t, e);
    return t;
  }(H);
  function th(e) {
    var t = this;
    this.webSdkInit = function (e) {
      var r = e.extra_params;
      return t.request({
        url: "/user_info/common/v1/web_sdk_init/",
        method: "POST",
        data: l({
          mode: e.mode,
          scene: e.scene
        }, r === undefined ? {} : r)
      });
    };
    this.request = e.request;
  }
  var tm = {
    web: eR,
    app: eN,
    sso: tv,
    auth: function (e) {
      function t(t) {
        r = e.call(this, t, "auth") || this;
        t.printLog;
        var r;
        var n = t.acrawler;
        var o = n === undefined ? "" : n;
        if (o) {
          g(o, t);
        }
        var i = l({}, t, {
          request: r.request
        });
        r.common = new th(i);
        return r;
      }
      p(t, e);
      return t;
    }(H)
  };
  var t_ = {
    web: null,
    app: null,
    sso: null,
    auth: null
  };
  (function () {
    function e() {}
    e.createAccountSdk = function (t, r) {
      t_[t] ||= e.create(tm[t] || tm.web, r);
      return t_[t];
    };
    e.create = function (e, t) {
      return new e(t);
    };
    return e;
  })().createAccountSdk;
  exports.WebInterfaceSdk = eR;
  exports.encryptParams = x;
}