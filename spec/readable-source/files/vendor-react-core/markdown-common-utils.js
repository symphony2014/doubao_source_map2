// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'u' to 'htmlEntitiesMapReexport'
// - Resolved require(849606) to 'html-entities-map-reexport'
// - Renamed variable 'm' to 'unicodePunctuationRegex'
// - Resolved require(175976) to 'unicode-punctuation-regex'
// - Resolved require(411352) to 'url-encode-decode-util'
// - Resolved require(695732) to 'unicode-regex-category-map'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 708770
         */
module.exports = function (module, exports, require) {
  var n = Object.prototype.hasOwnProperty;
  function i(t, e) {
    return n.call(t, e);
  }
  function o(t) {
    return (!(t >= 55296) || !(t <= 57343)) && (!(t >= 64976) || !(t <= 65007)) && (t & 65535) != 65535 && (t & 65535) != 65534 && (!(t >= 0) || !(t <= 8)) && t !== 11 && (!(t >= 14) || !(t <= 31)) && (!(t >= 127) || !(t <= 159)) && !(t > 1114111) && true;
  }
  function s(t) {
    if (t > 65535) {
      return String.fromCharCode(55296 + ((t -= 65536) >> 10), 56320 + (t & 1023));
    } else {
      return String.fromCharCode(t);
    }
  }
  var a = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
  var c = RegExp(a.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi");
  var l = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
  var htmlEntitiesMapReexport = require("html-entities-map-reexport") /*id: 849606*/;
  var h = /[&<>"]/;
  var p = /[&<>"]/g;
  var f = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;"
  };
  function d(t) {
    return f[t];
  }
  var g = /[.?*+^$[\]\\(){}|-]/g;
  var unicodePunctuationRegex = require("unicode-punctuation-regex") /*id: 175976*/;
  exports.lib = {};
  exports.lib.mdurl = require("url-encode-decode-util") /*id: 411352*/;
  exports.lib.ucmicro = require("unicode-regex-category-map") /*id: 695732*/;
  exports.assign = function (t) {
    var e = Array.prototype.slice.call(arguments, 1);
    e.forEach(function (e) {
      if (e) {
        if (typeof e != "object") {
          throw TypeError(e + "must be object");
        }
        Object.keys(e).forEach(function (r) {
          t[r] = e[r];
        });
      }
    });
    return t;
  };
  exports.isString = function (t) {
    return Object.prototype.toString.call(t) === "[object String]";
  };
  exports.has = i;
  exports.unescapeMd = function (t) {
    if (t.indexOf("\\") < 0) {
      return t;
    } else {
      return t.replace(a, "$1");
    }
  };
  exports.unescapeAll = function (t) {
    if (t.indexOf("\\") < 0 && t.indexOf("&") < 0) {
      return t;
    } else {
      return t.replace(c, function (t, e, r) {
        var n;
        if (e) {
          return e;
        } else {
          n = 0;
          if (i(htmlEntitiesMapReexport, r)) {
            return htmlEntitiesMapReexport[r];
          } else if (r.charCodeAt(0) === 35 && l.test(r) && o(n = r[1].toLowerCase() === "x" ? parseInt(r.slice(2), 16) : parseInt(r.slice(1), 10))) {
            return s(n);
          } else {
            return t;
          }
        }
      });
    }
  };
  exports.isValidEntityCode = o;
  exports.fromCodePoint = s;
  exports.escapeHtml = function (t) {
    if (h.test(t)) {
      return t.replace(p, d);
    } else {
      return t;
    }
  };
  exports.arrayReplaceAt = function (t, e, r) {
    return [].concat(t.slice(0, e), r, t.slice(e + 1));
  };
  exports.isSpace = function (t) {
    switch (t) {
      case 9:
      case 32:
        return true;
    }
    return false;
  };
  exports.isWhiteSpace = function (t) {
    if (t >= 8192 && t <= 8202) {
      return true;
    }
    switch (t) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return true;
    }
    return false;
  };
  exports.isMdAsciiPunct = function (t) {
    switch (t) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return true;
      default:
        return false;
    }
  };
  exports.isPunctChar = function (t) {
    return unicodePunctuationRegex.test(t);
  };
  exports.escapeRE = function (t) {
    return t.replace(g, "\\$&");
  };
  exports.normalizeReference = function (t) {
    return (t = t.trim().replace(/\s+/g, " ")).toLowerCase().toUpperCase();
  };
}