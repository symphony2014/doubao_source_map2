// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 74368
         */
module.exports = function (module, exports, require) {
  var r = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;"
  };
  var n = /[&"'<>\/]/gm;
  var o = /[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF]/gm;
  var l = /[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF\u2028\u2029]/gm;
  function s(e) {
    return e && e.replace(l, function (e) {
      return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
    });
  }
  function a(e) {
    return e && "\"" + s(e) + "\"";
  }
  var c = /"(?:\\.|[^"])*"/gm;
  var d = /[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF]/gm;
  function u(e) {
    return e && e.replace(d, function (e) {
      return "\\" + ("000000" + e.charCodeAt(0).toString(16)).slice(-6);
    });
  }
  exports.escapeHTML = function (e) {
    return e && e.replace(n, function (e) {
      return r[e] || e;
    });
  };
  exports.escapeHTMLAttribute = function (e) {
    return e && e.replace(o, function (e) {
      return r[e] || "&#x" + ("00" + e.charCodeAt(0).toString(16)).slice(-2) + ";";
    });
  };
  exports.encodeJavaScriptIdentifier = s;
  exports.encodeJavaScriptString = a;
  exports.encodeJavaScriptData = function (e) {
    return JSON.stringify(e).replace(c, function (e) {
      return a(JSON.parse(e));
    });
  };
  exports.encodeCSSIdentifier = u;
  exports.encodeCSSString = function (e) {
    return e && "\"" + u(e) + "\"";
  };
}