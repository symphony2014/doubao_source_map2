// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'encryptPasteContent'
// - Renamed export 'Wb' to 'generateUniqueId'
// - Renamed export 'M1' to 'getSupportedLanguage'
// - Renamed export 'on' to 'checkWebpSupport'
// - Renamed export 'pH' to 'copyWithProtection'
// - Renamed export 'iA' to 'safeJsonStringify'
// - Renamed export 'Kk' to 'requestIdleCallback'
// - Renamed export 'N0' to 'checkPrintable'
// - Renamed export 'dr' to 'extractObjectValues'
// - Renamed export 'JF' to 'getPermissionChanges'
// - Renamed export 'Xy' to 'numbersEqual'
// - Renamed export 'Ic' to 'clampNumber'
// - Renamed export 'H1' to 'checkActionPermission'
// - Renamed export 'r0' to 'handleCopyAction'
// - Renamed export 'IO' to 'requestFullscreen'
// - Renamed export 'MQ' to 'getAvailablePreviewTypes'
// - Renamed export 'V$' to 'isValidMessageEvent'
// - Renamed export 'ph' to 'getPreviewScene'
// - Renamed export 'WM' to 'translateWithParams'
// - Renamed export 'ej' to 'getCookie'
// - Renamed export 'kW' to 'safeJsonParse'
// - Renamed export 'w1' to 'getCustomComponent'
// - Renamed export 'Qx' to 'checkFullscreenSupport'
// - Renamed export 'x9' to 'buildQueryString'
// - Renamed export 'JP' to 'checkCopyable'
// - Renamed export 'Qd' to 'convertRadicalToChar'
// - Renamed export 'DX' to 'isSpecialDocType'
// - Renamed export 'zs' to 'generateRandomString'
// - Renamed export 'GK' to 'cancelIdleCallback'
// - Renamed export 'V7' to 'exitFullscreen'
// - Renamed export '_A' to 'normalizeFunctionOrBoolean'
// - Renamed export 'Qf' to 'formatFileSize'
// - Renamed export 'Yj' to 'handlePrintAction'
// - Renamed export 'xH' to 'roundNumber'
// - Renamed export 'L4' to 'calculateWheelDelta'
// - Renamed export 'fm' to 'postMessageToWindow'
// - Renamed export 'l9' to 'copyToClipboard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17043.439c2bd3.js
         * chunkId: 17043
         * moduleId: 116443
         */
module.exports = function (module, exports, require) {
  var queryStringUtils_4 = require("query-string-utils_4") /*id: 690064*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var nameExtensionUtils = require("name-extension-utils") /*id: 146008*/;
  var filePreviewTypeUtils = require("file-preview-type-utils") /*id: 732557*/;
  var boxPreviewI18nEnUs = require("box-preview-i18n-en-us") /*id: 175316*/;
  var filePreviewSdkConstants = require("file-preview-sdk-constants") /*id: 842643*/;
  var fileTypeConstants_1 = require("file-type-constants_1") /*id: 331664*/;
  var driveSdkPreviewConstants = require("drive-sdk-preview-constants") /*id: 395351*/;
  var boxPreviewEventConstants = require("box-preview-event-constants") /*id: 654234*/;
  var _ = {
    "%u2F00": "一",
    "%u2F01": "丨",
    "%u2F02": "丶",
    "%u2F03": "丿",
    "%u2F04": "乙",
    "%u2F05": "亅",
    "%u2F06": "二",
    "%u2F07": "亠",
    "%u2F08": "人",
    "%u2F09": "儿",
    "%u2F0A": "入",
    "%u2F0B": "八",
    "%u2F0C": "冂",
    "%u2F0D": "冖",
    "%u2F0E": "冫",
    "%u2F0F": "几",
    "%u2F10": "凵",
    "%u2F11": "刀",
    "%u2F12": "力",
    "%u2F13": "勹",
    "%u2F14": "匕",
    "%u2F15": "匚",
    "%u2F16": "匸",
    "%u2F17": "十",
    "%u2F18": "卜",
    "%u2F19": "卩",
    "%u2F1A": "厂",
    "%u2F1B": "厶",
    "%u2F1C": "又",
    "%u2F1D": "口",
    "%u2F1E": "囗",
    "%u2F1F": "土",
    "%u2F20": "士",
    "%u2F21": "夂",
    "%u2F22": "夊",
    "%u2F23": "夕",
    "%u2F24": "大",
    "%u2F25": "女",
    "%u2F26": "子",
    "%u2F27": "宀",
    "%u2F28": "寸",
    "%u2F29": "小",
    "%u2F2A": "尢",
    "%u2F2B": "尸",
    "%u2F2C": "屮",
    "%u2F2D": "山",
    "%u2F2E": "巛",
    "%u2F2F": "工",
    "%u2F30": "己",
    "%u2F31": "巾",
    "%u2F32": "干",
    "%u2F33": "幺",
    "%u2F34": "广",
    "%u2F35": "廴",
    "%u2F36": "廾",
    "%u2F37": "弋",
    "%u2F38": "弓",
    "%u2F39": "彐",
    "%u2F3A": "彡",
    "%u2F3B": "彳",
    "%u2F3C": "心",
    "%u2F3D": "戈",
    "%u2F3E": "戶",
    "%u2F3F": "手",
    "%u2F40": "支",
    "%u2F41": "攴",
    "%u2F42": "文",
    "%u2F43": "斗",
    "%u2F44": "斤",
    "%u2F45": "方",
    "%u2F46": "无",
    "%u2F47": "日",
    "%u2F48": "曰",
    "%u2F49": "月",
    "%u2F4A": "木",
    "%u2F4B": "欠",
    "%u2F4C": "止",
    "%u2F4D": "歹",
    "%u2F4E": "殳",
    "%u2F4F": "毋",
    "%u2F50": "比",
    "%u2F51": "毛",
    "%u2F52": "氏",
    "%u2F53": "气",
    "%u2F54": "水",
    "%u2F55": "火",
    "%u2F56": "爪",
    "%u2F57": "父",
    "%u2F58": "爻",
    "%u2F59": "爿",
    "%u2EA6": "丬",
    "%u2F5A": "片",
    "%u2F5B": "牙",
    "%u2F5C": "牛",
    "%u2F5D": "犬",
    "%u2F5E": "玄",
    "%u2F5F": "玉",
    "%u2F60": "瓜",
    "%u2F61": "瓦",
    "%u2F62": "甘",
    "%u2F63": "生",
    "%u2F64": "用",
    "%u2F65": "田",
    "%u2F66": "疋",
    "%u2F67": "疒",
    "%u2F68": "癶",
    "%u2F69": "白",
    "%u2F6A": "皮",
    "%u2F6B": "皿",
    "%u2F6C": "目",
    "%u2F6D": "矛",
    "%u2F6E": "矢",
    "%u2F6F": "石",
    "%u2F70": "示",
    "%u2F71": "禸",
    "%u2F72": "禾",
    "%u2F73": "穴",
    "%u2F74": "立",
    "%u2F75": "竹",
    "%u2F76": "米",
    "%u2F77": "糸",
    "%u2EB0": "纟",
    "%u2F78": "缶",
    "%u2F79": "网",
    "%u2F7A": "羊",
    "%u2F7B": "羽",
    "%u2F7C": "老",
    "%u2F7D": "而",
    "%u2F7E": "耒",
    "%u2F7F": "耳",
    "%u2F80": "聿",
    "%u2F81": "肉",
    "%u2F82": "臣",
    "%u2F83": "自",
    "%u2F84": "至",
    "%u2F85": "臼",
    "%u2F86": "舌",
    "%u2F87": "舛",
    "%u2F88": "舟",
    "%u2F89": "艮",
    "%u2F8A": "色",
    "%u2F8B": "艸",
    "%u2F8C": "虍",
    "%u2F8D": "虫",
    "%u2F8E": "血",
    "%u2F8F": "行",
    "%u2F90": "衣",
    "%u2F91": "襾",
    "%u2F92": "見",
    "%u2EC5": "见",
    "%u2F93": "角",
    "%u2F94": "言",
    "%u2EC8": "讠",
    "%u2F95": "谷",
    "%u2F96": "豆",
    "%u2F97": "豕",
    "%u2F98": "豸",
    "%u2F99": "貝",
    "%u2EC9": "贝",
    "%u2F9A": "赤",
    "%u2F9B": "走",
    "%u2F9C": "足",
    "%u2F9D": "身",
    "%u2F9E": "車",
    "%u2ECB": "车",
    "%u2F9F": "辛",
    "%u2FA0": "辰",
    "%u2FA1": "辵",
    "%u2ECC": "辶",
    "%u2FA2": "邑",
    "%u2FA3": "酉",
    "%u2FA4": "釆",
    "%u2FA5": "里",
    "%u2FA6": "金",
    "%u2ED0": "钅",
    "%u2FA7": "長",
    "%u2ED3": "长",
    "%u2FA8": "門",
    "%u2ED4": "门",
    "%u2FA9": "阜",
    "%u2FAA": "隶",
    "%u2FAB": "隹",
    "%u2FAC": "雨",
    "%u2FAD": "靑",
    "%u2FAE": "非",
    "%u2FAF": "面",
    "%u2FB0": "革",
    "%u2FB1": "韋",
    "%u2ED9": "韦",
    "%u2FB2": "韭",
    "%u2FB3": "音",
    "%u2FB4": "頁",
    "%u2EDA": "页",
    "%u2FB5": "風",
    "%u2EDB": "风",
    "%u2FB6": "飛",
    "%u2EDC": "飞",
    "%u2FB7": "食",
    "%u2EE0": "饣",
    "%u2FB8": "首",
    "%u2FB9": "香",
    "%u2FBA": "馬",
    "%u2EE2": "马",
    "%u2FBB": "骨",
    "%u2FBC": "高",
    "%u2FBD": "髟",
    "%u2FBE": "鬥",
    "%u2FBF": "鬯",
    "%u2FC0": "鬲",
    "%u2FC1": "鬼",
    "%u2FC2": "魚",
    "%u2EE5": "鱼",
    "%u2FC3": "鳥",
    "%u2EE6": "鸟",
    "%u2FC4": "鹵",
    "%u2EE7": "卤",
    "%u2FC5": "鹿",
    "%u2FC6": "麥",
    "%u2EE8": "麦",
    "%u2FC7": "麻",
    "%u2FC8": "黃",
    "%u2EE9": "黄",
    "%u2FC9": "黍",
    "%u2FCA": "黑",
    "%u2FCB": "黹",
    "%u2FCC": "黽",
    "%u2EEA": "黾",
    "%u2FCD": "鼎",
    "%u2FCE": "鼓",
    "%u2FCF": "鼠",
    "%u2FD0": "鼻",
    "%u2FD1": "齊",
    "%u2EEC": "齐",
    "%u2FD2": "齒",
    "%u2EEE": "齿",
    "%u2FD3": "龍",
    "%u2EF0": "龙",
    "%u2FD4": "龜",
    "%u2EF3": "龟",
    "%u2FD5": "龠"
  };
  var cryptoJsBundle_1 = require("crypto-js-bundle_1") /*id: 435350*/;
  var wordArrayArraybufferSupport = require("word-array-arraybuffer-support") /*id: 368188*/;
  var m = wordArrayArraybufferSupport;
  var cryptoJsBase64Encoding = require("crypto-js-base64-encoding") /*id: 726240*/;
  var g = cryptoJsBase64Encoding;
  var cryptoAesCipher = require("crypto-aes-cipher") /*id: 842465*/;
  var I = cryptoAesCipher;
  var cryptoJsUtf8Encoder = require("crypto-js-utf8-encoder") /*id: 975336*/;
  var C = cryptoJsUtf8Encoder;
  let T = "lark-paste-protect";
  let F = C.parse("_larkcustomdata_");
  function w(e) {
    let t = typeof e == "string" ? new Uint8Array(e) : e;
    return m.create(t);
  }
  function b(e, t, i) {
    let n = w(e);
    let o = JSON.stringify({
      key: n.toString(g),
      content: t
    });
    let r = function (e, t) {
      let i = e instanceof Uint8Array ? w(e) : e;
      let {
        ciphertext: n
      } = I.encrypt(t, i, {
        iv: F,
        mode: cryptoJsBundle_1.mode.CBC
      });
      return n.toString(g);
    }(n, o);
    return `<${T} data-content="${r}"${i ? " data-with-entity-id=\"true\"" : ""}></${T}>`;
  }
  function R(e, t) {
    if (!e) {
      return [];
    }
    let i = nameExtensionUtils.getObjectExtension(e);
    return (e.available_preview_type || []).filter(n => {
      let o = filePreviewSdkConstants.previewTypeCatMap.get(n);
      return !t(e).includes(o) && filePreviewTypeUtils.getPreviewTypes(i).includes(n);
    });
  }
  function O(e, t = 2) {
    let i = e;
    if (i < 0) {
      return "";
    } else if (i < 1024) {
      return `${i}B`;
    } else if ((i /= 1024) < 1024) {
      return `${i.toFixed(t)}KB`;
    } else if ((i /= 1024) < 1024) {
      return `${i.toFixed(t)}MB`;
    } else if ((i /= 1024) < 1024) {
      return `${i.toFixed(t)}GB`;
    } else {
      i /= 1024;
      return `${i.toFixed(t)}TB`;
    }
  }
  function y(e, t) {
    return e != null && !!e.source && t != null && !!t.contentWindow && typeof e.data == "object" && e.source === t.contentWindow;
  }
  function N(e, t, i) {
    if ((e == null ? undefined : e.contentWindow) && t && i) {
      e.contentWindow.postMessage(i, "*");
    }
  }
  let S = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function L(e = 20) {
    let t = "";
    for (let i = 0; i < e; i++) {
      let e = Math.floor(Math.random() * S.length);
      t += S[e];
    }
    return t;
  }
  let x = 0;
  function A() {
    x++;
    return `${L(6)}-${x}`;
  }
  function V() {
    let e;
    let t = document.documentElement;
    let i = document;
    e = !!t.requestFullscreen || !!t.mozRequestFullScreen || !!t.webkitRequestFullScreen || !!t.msRequestFullscreen;
    if (i.fullscreenEnabled === false || i.mozFullScreenEnabled === false || i.webkitFullscreenEnabled === false || i.msFullscreenEnabled === false) {
      e = false;
    }
    return e;
  }
  function k() {
    var e;
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "?";
    if (e = queryStringUtils_4.stringify(t)) {
      return `${i}${e}`;
    } else {
      return "";
    }
  }
  function M(e) {
    let {
      prevFileToken: t,
      prevVersion: i,
      prevForceUpdateSeed: n,
      prevIsInEditMode: o,
      curPreviewComponent: r,
      curFileToken: s,
      curVersion: l,
      curForceUpdateSeed: a,
      curIsInEditMode: u
    } = e;
    if (t !== s) {
      return filePreviewSdkConstants.tokenKeys.FILE_TOKEN;
    } else if (i !== l) {
      return filePreviewSdkConstants.tokenKeys.VERSION;
    } else if (n !== a) {
      return filePreviewSdkConstants.tokenKeys.SEED;
    } else if (!!o != !!u) {
      if (r === fileTypeConstants_1.fileCategories.LARKDOC) {
        return null;
      } else {
        return filePreviewSdkConstants.tokenKeys.IS_IN_EDIT_MODE;
      }
    } else {
      return null;
    }
  }
  function B(e) {
    if (!e) {
      return null;
    }
    try {
      return JSON.parse(e);
    } catch (e) {
      return null;
    }
  }
  function U(e) {
    return {
      scene: "ccm",
      location: e && driveSdkPreviewConstants.fileTypeCreationMap[e.type] || driveSdkPreviewConstants.fileTypeCreationMap.default
    };
  }
  function G(e, t, i) {
    let n = "";
    try {
      n = JSON.stringify(e, t, i);
    } catch {}
    return n;
  }
  function j(e) {
    if (!e) {
      return false;
    }
    let {
      type: t
    } = e;
    return t === fileTypeConstants_1.docSourceTypes.EMAIL || t === fileTypeConstants_1.docSourceTypes.CALENDAR || t === fileTypeConstants_1.docSourceTypes.LARK || t === fileTypeConstants_1.docSourceTypes.APPBUILDER;
  }
  function W(e) {
    if (e) {
      if (e.requestFullscreen) {
        e.requestFullscreen();
      } else if (e.mozRequestFullScreen) {
        e.mozRequestFullScreen();
      } else if (e.webkitRequestFullscreen) {
        e.webkitRequestFullscreen();
      } else if (e.msRequestFullscreen) {
        e.msRequestFullscreen();
      }
    }
  }
  function H() {
    let e = document;
    if (e.exitFullscreen) {
      e.exitFullscreen();
    } else if (e.msExitFullscreen) {
      e.msExitFullscreen();
    } else if (e.mozCancelFullScreen) {
      e.mozCancelFullScreen();
    } else if (e.webkitExitFullscreen) {
      e.webkitExitFullscreen();
    }
  }
  function $(e, t) {
    var i = arguments.length;
    var n = Array(i > 2 ? i - 2 : 0);
    var o = 2;
    for (; o < i; o++) {
      n[o - 2] = arguments[o];
    }
    let r = e[t] || boxPreviewI18nEnUs[t] || "";
    if (r && n && n.length > 0) {
      n.forEach((e, t) => {
        let i = RegExp(`\\$\\{${t + 1}\\}`, "g");
        r = r.replace(i, e);
      });
    }
    return r;
  }
  function Z(e, t) {
    let {
      fixedContextValue: i
    } = e;
    let {
      customComponents: n = {}
    } = i;
    if (!t) {
      return;
    }
    let o = n[t];
    if (typeof o == "function") {
      return o;
    } else {
      return null;
    }
  }
  function J(e, t) {
    return !!isNumberUtil.isNumber(e) && !!isNumberUtil.isNumber(t) && Math.abs(e - t) < 0.000001;
  }
  function z(e, t, i) {
    return Math.max(Math.min(t, e), i);
  }
  function K(e) {
    return parseFloat(e.toFixed(6));
  }
  function Y(e) {
    if (!document.cookie) {
      return "";
    }
    let t = document.cookie.match(RegExp(`(?:^|;)\\s*${e}=([^;]+)`));
    return window.decodeURIComponent(t ? t[1] : "");
  }
  function q(e) {
    if (window.requestIdleCallback) {
      return window.requestIdleCallback(e);
    }
    let t = Date.now();
    return setTimeout(() => {
      e({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
      });
    });
  }
  function X(e) {
    if (window.cancelIdleCallback) {
      return window.cancelIdleCallback(e);
    } else {
      return clearTimeout(e);
    }
  }
  async function Q() {
    let e = new Image();
    return new Promise((t, i) => {
      try {
        e.onload = function () {
          let i = e.width > 0 && e.height > 0;
          t(i);
        };
        e.onerror = function () {
          t(false);
        };
        e.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA";
      } catch (e) {
        i(false);
      }
    });
  }
  function ee(e) {
    let t = Math.sqrt(e.deltaX * e.deltaX + e.deltaY * e.deltaY);
    let i = Math.atan2(e.deltaY, e.deltaX);
    if (Math.PI * -0.25 < i && i < Math.PI * 0.75) {
      t = -t;
    }
    if (e.deltaMode === 0) {
      t /= 900;
    } else if (e.deltaMode === 1) {
      t /= 30;
    }
    return t;
  }
  function et(e) {
    if (typeof navigator.clipboard.writeText == "function") {
      return navigator.clipboard.writeText(e);
    } else {
      return new Promise((t, i) => {
        let n = document.createElement("textarea");
        n.setAttribute("readonly", "readonly");
        n.value = e;
        document.body.appendChild(n);
        n.select();
        n.setSelectionRange(0, 99999);
        try {
          document.execCommand("copy");
          t(undefined);
        } catch (e) {
          i(e);
        }
        document.body.removeChild(n);
      });
    }
  }
  function ei(e) {
    let t = RegExp(`[${/\u2F00-\u2FD5/.source + /\u2FD5\u2EA6\u2EB0\u2EC5\u2EC8\u2EC9\u2ECB/.source + /\u2ECC\u2ED0\u2ED3\u2ED4\u2ED9\u2EDA\u2EDB/.source + /\u2EDC\u2EE0\u2EE2\u2EE5\u2EE6\u2EE7\u2EE8/.source + /\u2EE9\u2EEA\u2EEC\u2EEE\u2EF0\u2EF3/.source}]`, "g");
    return e.replace(t, e => _[escape(e)]);
  }
  function en(e) {
    let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    if (isFunctionUtil_1.isFunction(e) || isBooleanUtil.isBoolean(e)) {
      return e;
    } else {
      return t;
    }
  }
  function eo(e, t) {
    let i = {};
    t.forEach(t => {
      if (isFunctionUtil_1.isFunction(e[t])) {
        i[t] = e[t]();
      } else {
        i[t] = e[t];
      }
    });
    return i;
  }
  function er(e, t) {
    let {
      authority: i,
      permission: n
    } = e.dynamicContextValue;
    let {
      copyable: o
    } = eo(i, ["copyable"]);
    let r = !!n.copyable && !!o;
    if (t) {
      return !!r && !!el(e, filePreviewSdkConstants.permissionKeys.FILECONTENTCOPY, false);
    } else {
      return r;
    }
  }
  function es(e, t) {
    let {
      authority: i,
      permission: n
    } = e.dynamicContextValue;
    let {
      printable: o
    } = eo(i, ["printable"]);
    let r = !!(n.printable !== undefined ? n.printable : n.exportable) && !!o;
    if (t) {
      return !!r && !!el(e, filePreviewSdkConstants.permissionKeys.FILEPRINT, false);
    } else {
      return r;
    }
  }
  function el(e, t, i) {
    let n;
    if (!e.fixedContextValue.actionManager) {
      return true;
    }
    try {
      n = e.fixedContextValue.actionManager.checkAction(t, {
        showToast: i
      });
    } catch (e) {
      n = true;
    }
    return n;
  }
  function ea(e, t = {}) {
    let {
      fixedContextValue: i,
      dynamicContextValue: n
    } = e;
    let {
      i18n: o,
      eventBus: r,
      getToast: s,
      showCopyFailedTips: l
    } = i;
    let {
      authority: a
    } = n;
    let {
      e: u,
      data: c,
      secret: h,
      withEntityId: _,
      showEncryptToast: f,
      isMobile: E,
      isReferBlock: m
    } = t;
    if (!el(e, filePreviewSdkConstants.permissionKeys.FILECONTENTCOPY, true)) {
      r.safelyEmit(boxPreviewEventConstants.previewEventConstants.OPERATION, {
        type: "text",
        operationType: boxPreviewEventConstants.previewActionConstants.COPY,
        operationExtraData: {
          copyable: false
        }
      });
      if (u) {
        u.preventDefault();
        u.stopPropagation();
      }
      return false;
    }
    let v = er(e);
    let g = h && typeof _ == "boolean";
    if (v) {
      if (c) {
        if (u) {
          u.preventDefault();
          u.stopPropagation();
        }
        if (h && typeof _ == "boolean" && u instanceof ClipboardEvent) {
          var P;
          var I;
          if (E) {
            if ((I = u.clipboardData) !== null && I !== undefined) {
              I.setData("text/plain", " ");
            }
          }
          if ((P = u.clipboardData) !== null && P !== undefined) {
            P.setData("text/html", b(h, {
              "text/plain": c
            }, _));
          }
        } else if (!ed({
          data: c,
          secret: h,
          withEntityId: _,
          isMobile: E,
          isReferBlock: m
        })) {
          if (typeof l == "function") {
            l();
          } else if (s != null) {
            s().error({
              content: o["common.can_not_copy"],
              key: filePreviewSdkConstants.actionStatuses.COPY_FAILED
            });
          }
        }
      }
    } else {
      if (u) {
        u.preventDefault();
        u.stopPropagation();
      }
      if (typeof l == "function") {
        l();
      } else {
        let {
          copyable: e
        } = eo(a, ["copyable"]);
        let t = e ? o["common.can_not_copy"] : o["common.no_authority"];
        if (s != null) {
          s().error({
            content: t,
            key: filePreviewSdkConstants.actionStatuses.COPY_FAILED
          });
        }
      }
    }
    r.safelyEmit(boxPreviewEventConstants.previewEventConstants.OPERATION, {
      type: "text",
      operationType: boxPreviewEventConstants.previewActionConstants.COPY,
      operationExtraData: {
        showEncryptToast: f || g,
        copyable: v
      }
    });
    return v;
  }
  function eu(e, t) {
    let i = es(e);
    let n = el(e, filePreviewSdkConstants.permissionKeys.FILEPRINT, false);
    let o = i && n;
    if (!o && t) {
      t.preventDefault();
    }
    e.fixedContextValue.eventBus.safelyEmit(boxPreviewEventConstants.previewEventConstants.OPERATION, {
      operationType: boxPreviewEventConstants.previewActionConstants.PRINT,
      operationExtraData: {
        printable: o
      }
    });
    return o;
  }
  function ed(e) {
    let {
      data: t,
      secret: i,
      withEntityId: n,
      isMobile: o,
      isReferBlock: r
    } = e;
    if (!t) {
      return;
    }
    let s = true;
    let l = document.createElement("textarea");
    try {
      l.setAttribute("readonly", "readonly");
      l.setAttribute("class", filePreviewSdkConstants.noCopyPermDomClass);
      l.value = t;
      l.addEventListener("copy", e => {
        if (r) {
          e.stopPropagation();
        }
        if (i && typeof n == "boolean" && e instanceof ClipboardEvent) {
          var s;
          var l;
          e.stopPropagation();
          e.preventDefault();
          if (o) {
            if ((l = e.clipboardData) !== null && l !== undefined) {
              l.setData("text/plain", " ");
            }
          }
          if ((s = e.clipboardData) !== null && s !== undefined) {
            s.setData("text/html", b(i, {
              "text/plain": t
            }, n));
          }
        }
      });
      document.body.appendChild(l);
      l.select();
      l.setSelectionRange(0, t.length);
      s = document.execCommand("copy");
    } catch (e) {
      s = false;
    } finally {
      document.body.removeChild(l);
    }
    return s;
  }
  function ec(e, t) {
    let i = {};
    let n = {
      copyable: er(t),
      printable: es(t)
    };
    for (let t in n) {
      if (n[t] !== e[t]) {
        i[t] = n[t];
      }
    }
    if (Object.keys(i).length) {
      return i;
    } else {
      return undefined;
    }
  }
  function eh(e) {
    if (filePreviewSdkConstants.supportedLanguages.includes(e)) {
      return filePreviewSdkConstants.languages.ZH;
    } else {
      return filePreviewSdkConstants.languages.EN;
    }
  }
  require.d(exports, {
    encryptPasteContent: function () {
      return M;
    },
    generateUniqueId: function () {
      return A;
    },
    getSupportedLanguage: function () {
      return eh;
    },
    checkWebpSupport: function () {
      return Q;
    },
    copyWithProtection: function () {
      return ed;
    },
    safeJsonStringify: function () {
      return G;
    },
    requestIdleCallback: function () {
      return q;
    },
    checkPrintable: function () {
      return es;
    },
    extractObjectValues: function () {
      return eo;
    },
    getPermissionChanges: function () {
      return ec;
    },
    numbersEqual: function () {
      return J;
    },
    clampNumber: function () {
      return z;
    },
    checkActionPermission: function () {
      return el;
    },
    handleCopyAction: function () {
      return ea;
    },
    requestFullscreen: function () {
      return W;
    },
    getAvailablePreviewTypes: function () {
      return R;
    },
    isValidMessageEvent: function () {
      return y;
    },
    getPreviewScene: function () {
      return U;
    },
    translateWithParams: function () {
      return $;
    },
    getCookie: function () {
      return Y;
    },
    safeJsonParse: function () {
      return B;
    },
    getCustomComponent: function () {
      return Z;
    },
    checkFullscreenSupport: function () {
      return V;
    },
    buildQueryString: function () {
      return k;
    },
    checkCopyable: function () {
      return er;
    },
    convertRadicalToChar: function () {
      return ei;
    },
    isSpecialDocType: function () {
      return j;
    },
    generateRandomString: function () {
      return L;
    },
    cancelIdleCallback: function () {
      return X;
    },
    exitFullscreen: function () {
      return H;
    },
    normalizeFunctionOrBoolean: function () {
      return en;
    },
    formatFileSize: function () {
      return O;
    },
    handlePrintAction: function () {
      return eu;
    },
    roundNumber: function () {
      return K;
    },
    calculateWheelDelta: function () {
      return ee;
    },
    postMessageToWindow: function () {
      return N;
    },
    copyToClipboard: function () {
      return et;
    }
  });
}