// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'encodeBase64'
// - Renamed export 't' to 'decodeBase64'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-alice.a1dd235d.js
         * chunkId: 20105
         * moduleId: 152465
         */
module.exports = function (module, exports, require) {
  let i;
  let r;
  let a;
  function o(e) {
    let t = function () {
      if (!a) {
        a = [];
        let e = l("std");
        for (let t = 0; t < e.length; t++) {
          a[e[t].charCodeAt(0)] = t;
        }
        a["-".charCodeAt(0)] = e.indexOf("+");
        a["_".charCodeAt(0)] = e.indexOf("/");
      }
      return a;
    }();
    let n = e.length * 3 / 4;
    if (e[e.length - 2] == "=") {
      n -= 2;
    } else if (e[e.length - 1] == "=") {
      n -= 1;
    }
    let i = new Uint8Array(n);
    let r = 0;
    let o = 0;
    let s;
    let u = 0;
    for (let n = 0; n < e.length; n++) {
      if ((s = t[e.charCodeAt(n)]) === undefined) {
        switch (e[n]) {
          case "=":
            o = 0;
          case "\n":
          case "\r":
          case "\t":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string");
        }
      }
      switch (o) {
        case 0:
          u = s;
          o = 1;
          break;
        case 1:
          i[r++] = u << 2 | (s & 48) >> 4;
          u = s;
          o = 2;
          break;
        case 2:
          i[r++] = (u & 15) << 4 | (s & 60) >> 2;
          u = s;
          o = 3;
          break;
        case 3:
          i[r++] = (u & 3) << 6 | s;
          o = 0;
      }
    }
    if (o == 1) {
      throw Error("invalid base64 string");
    }
    return i.subarray(0, r);
  }
  function s(e, t = "std") {
    let n = l(t);
    let i = t == "std";
    let r = "";
    let a = 0;
    let o;
    let u = 0;
    for (let t = 0; t < e.length; t++) {
      o = e[t];
      switch (a) {
        case 0:
          r += n[o >> 2];
          u = (o & 3) << 4;
          a = 1;
          break;
        case 1:
          r += n[u | o >> 4];
          u = (o & 15) << 2;
          a = 2;
          break;
        case 2:
          r += n[u | o >> 6];
          r += n[o & 63];
          a = 0;
      }
    }
    if (a) {
      r += n[u];
      if (i) {
        r += "=";
        if (a == 1) {
          r += "=";
        }
      }
    }
    return r;
  }
  function l(e) {
    if (!i) {
      r = (i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("")).slice(0, -2).concat("-", "_");
    }
    if (e == "url") {
      return r;
    } else {
      return i;
    }
  }
  require.d(exports, {
    encodeBase64: function () {
      return s;
    },
    decodeBase64: function () {
      return o;
    }
  });
}