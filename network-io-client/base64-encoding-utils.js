// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 825153
         */
module.exports = function (module, exports, require) {
  (function (e, t) {
    module.exports = t(e);
  })(typeof self != "undefined" ? self : typeof window != "undefined" ? window : require.g !== undefined ? require.g : this, function (global) {
    "use strict";

    var buffer;
    var _Base64 = global.Base64;
    var version = "2.4.9";
    if (module.exports) {
      try {
        buffer = eval("require('buffer').Buffer");
      } catch (err) {
        buffer = undefined;
      }
    }
    var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var b64tab = function (e) {
      var t = {};
      var r = 0;
      var n = e.length;
      for (; r < n; r++) {
        t[e.charAt(r)] = r;
      }
      return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    function cb_utob(e) {
      if (e.length < 2) {
        var t = e.charCodeAt(0);
        if (t < 128) {
          return e;
        } else if (t < 2048) {
          return fromCharCode(t >>> 6 | 192) + fromCharCode(t & 63 | 128);
        } else {
          return fromCharCode(t >>> 12 & 15 | 224) + fromCharCode(t >>> 6 & 63 | 128) + fromCharCode(t & 63 | 128);
        }
      }
      var t = 65536 + (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320);
      return fromCharCode(t >>> 18 & 7 | 240) + fromCharCode(t >>> 12 & 63 | 128) + fromCharCode(t >>> 6 & 63 | 128) + fromCharCode(t & 63 | 128);
    }
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    function utob(e) {
      return e.replace(re_utob, cb_utob);
    }
    function cb_encode(e) {
      var t = [0, 2, 1][e.length % 3];
      var r = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
      return [b64chars.charAt(r >>> 18), b64chars.charAt(r >>> 12 & 63), t >= 2 ? "=" : b64chars.charAt(r >>> 6 & 63), t >= 1 ? "=" : b64chars.charAt(r & 63)].join("");
    }
    var btoa = global.btoa ? function (e) {
      return global.btoa(e);
    } : function (e) {
      return e.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    var _encode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function (e) {
      return (e.constructor === buffer.constructor ? e : buffer.from(e)).toString("base64");
    } : function (e) {
      return (e.constructor === buffer.constructor ? e : new buffer(e)).toString("base64");
    } : function (e) {
      return btoa(utob(e));
    };
    function encode(e, t) {
      if (t) {
        return _encode(String(e)).replace(/[+\/]/g, function (e) {
          if (e == "+") {
            return "-";
          } else {
            return "_";
          }
        }).replace(/=/g, "");
      } else {
        return _encode(String(e));
      }
    }
    function encodeURI(e) {
      return encode(e, true);
    }
    var re_btou = RegExp("[À-ß][-¿]|[à-ï][-¿]{2}|[ð-÷][-¿]{3}", "g");
    function cb_btou(e) {
      switch (e.length) {
        case 4:
          var t = ((e.charCodeAt(0) & 7) << 18 | (e.charCodeAt(1) & 63) << 12 | (e.charCodeAt(2) & 63) << 6 | e.charCodeAt(3) & 63) - 65536;
          return fromCharCode((t >>> 10) + 55296) + fromCharCode((t & 1023) + 56320);
        case 3:
          return fromCharCode((e.charCodeAt(0) & 15) << 12 | (e.charCodeAt(1) & 63) << 6 | e.charCodeAt(2) & 63);
        default:
          return fromCharCode((e.charCodeAt(0) & 31) << 6 | e.charCodeAt(1) & 63);
      }
    }
    function btou(e) {
      return e.replace(re_btou, cb_btou);
    }
    function cb_decode(e) {
      var t = e.length;
      var r = t % 4;
      var n = (t > 0 ? b64tab[e.charAt(0)] << 18 : 0) | (t > 1 ? b64tab[e.charAt(1)] << 12 : 0) | (t > 2 ? b64tab[e.charAt(2)] << 6 : 0) | (t > 3 ? b64tab[e.charAt(3)] : 0);
      var i = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 255), fromCharCode(n & 255)];
      i.length -= [0, 0, 2, 1][r];
      return i.join("");
    }
    var atob = global.atob ? function (e) {
      return global.atob(e);
    } : function (e) {
      return e.replace(/[\s\S]{1,4}/g, cb_decode);
    };
    var _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function (e) {
      return (e.constructor === buffer.constructor ? e : buffer.from(e, "base64")).toString();
    } : function (e) {
      return (e.constructor === buffer.constructor ? e : new buffer(e, "base64")).toString();
    } : function (e) {
      return btou(atob(e));
    };
    function decode(e) {
      return _decode(String(e).replace(/[-_]/g, function (e) {
        if (e == "-") {
          return "+";
        } else {
          return "/";
        }
      }).replace(/[^A-Za-z0-9\+\/]/g, ""));
    }
    function noConflict() {
      var e = global.Base64;
      global.Base64 = _Base64;
      return e;
    }
    global.Base64 = {
      VERSION: version,
      atob: atob,
      btoa: btoa,
      fromBase64: decode,
      toBase64: encode,
      utob: utob,
      encode: encode,
      encodeURI: encodeURI,
      btou: btou,
      decode: decode,
      noConflict: noConflict,
      __buffer__: buffer
    };
    if (typeof Object.defineProperty == "function") {
      function noEnum(e) {
        return {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        };
      }
      global.Base64.extendString = function () {
        Object.defineProperty(String.prototype, "fromBase64", noEnum(function () {
          return decode(this);
        }));
        Object.defineProperty(String.prototype, "toBase64", noEnum(function (e) {
          return encode(this, e);
        }));
        Object.defineProperty(String.prototype, "toBase64URI", noEnum(function () {
          return encode(this, true);
        }));
      };
    }
    if (global.Meteor) {
      Base64 = global.Base64;
    }
    if (module.exports) {
      module.exports.Base64 = global.Base64;
    } else if (typeof define == "function" && define.amd) {
      define([], function () {
        return global.Base64;
      });
    }
    return {
      Base64: global.Base64
    };
  });
}