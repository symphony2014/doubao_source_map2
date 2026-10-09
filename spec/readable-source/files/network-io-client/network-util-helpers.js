// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Eu' to 'generateHashId'
// - Renamed export 'PU' to 'checkByteLength'
// - Renamed export 'X8' to 'buildWebSocketUrl'
// - Renamed export 'hZ' to 'safeStringify'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 374407
         */
module.exports = function (module, exports, require) {
  var urlParseFormatUtils = require("url-parse-format-utils") /*id: 224643*/;
  var md5HashUtil_1 = require("md5-hash-util_1") /*id: 773120*/;
  var s = md5HashUtil_1;
  let o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(e = 20) {
    let t = "";
    for (let r = 0; r < e; r++) {
      let e = Math.floor(Math.random() * o.length);
      t += o[e];
    }
    return t;
  }
  function c(e) {
    let t = a(32);
    let r = s(e + t);
    let n = parseInt(r = l(r = r.slice(8, 24)), 16);
    return Number(`${n}`.slice(0, 14));
  }
  function l(e) {
    return Math.floor(Math.random() * 6) + 1 + e.slice(1);
  }
  function h(e) {
    let {
      url: t,
      query: r,
      path: i = null
    } = e;
    let s = urlParseFormatUtils.parse(location.href, true);
    let o = urlParseFormatUtils.parse(t, true);
    if (!/\/\//.test(t)) {
      o.href = `${s.protocol}//${t}`;
      o.hostname = t;
    }
    o.protocol = o.protocol || (s.protocol === "http:" ? "ws:" : "wss:");
    o.query = Object.assign(o.query, r, {
      stamp: Date.now()
    });
    o.query = Object.assign(o.query, r);
    o.path = i;
    return urlParseFormatUtils.format(o);
  }
  function u(e) {
    let t = typeof e;
    return e != null && (t === "object" || t === "function");
  }
  function f(e) {
    try {
      let t = new WeakSet();
      return JSON.stringify(e, (e, r) => u(r) ? t.has(r) ? "[Circular]" : (t.add(r), r instanceof Error) ? String(r.message) : r : r);
    } catch (t) {
      return String(e);
    }
  }
  function p(e, t, r) {
    r = r ? r.toLowerCase() : "";
    let n = 0;
    let i = r === "utf-16" || r === "utf16" ? d : y;
    for (let r = 0, s = e.length; r < s; r += 1) {
      if ((n += i(e.charCodeAt(r))) > t) {
        return true;
      }
    }
    return false;
  }
  function d(e) {
    if (e <= 65535) {
      return 2;
    } else {
      return 4;
    }
  }
  function y(e) {
    if (e <= 127) {
      return 1;
    } else if (e <= 2047) {
      return 2;
    } else if (e <= 65535) {
      return 3;
    } else {
      return 4;
    }
  }
  require.d(exports, {
    generateHashId: function () {
      return c;
    },
    checkByteLength: function () {
      return p;
    },
    buildWebSocketUrl: function () {
      return h;
    },
    safeStringify: function () {
      return f;
    }
  });
}