// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'urlValidationConstants'
// - Resolved require(422908) to 'url-validation-constants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11049.b9a4593e.js
         * chunkId: 11049
         * moduleId: 568747
         */
module.exports = function (module, exports, require) {
  exports.sanitizeUrl = undefined;
  var urlValidationConstants = require("url-validation-constants") /*id: 422908*/;
  function i(e) {
    try {
      return decodeURIComponent(e);
    } catch (t) {
      return e;
    }
  }
  exports.sanitizeUrl = function (e) {
    if (!e) {
      return urlValidationConstants.BLANK_URL;
    }
    var t;
    var r = i(e.trim());
    do {
      t = (r = i(r = r.replace(urlValidationConstants.ctrlCharactersRegex, "").replace(urlValidationConstants.htmlEntitiesRegex, function (e, t) {
        return String.fromCharCode(t);
      }).replace(urlValidationConstants.htmlCtrlEntityRegex, "").replace(urlValidationConstants.ctrlCharactersRegex, "").replace(urlValidationConstants.whitespaceEscapeCharsRegex, "").trim())).match(urlValidationConstants.ctrlCharactersRegex) || r.match(urlValidationConstants.htmlEntitiesRegex) || r.match(urlValidationConstants.htmlCtrlEntityRegex) || r.match(urlValidationConstants.whitespaceEscapeCharsRegex);
    } while (t && t.length > 0);
    var a = r;
    if (!a) {
      return urlValidationConstants.BLANK_URL;
    }
    if (urlValidationConstants.relativeFirstCharacters.indexOf(a[0]) > -1) {
      return a;
    }
    var l = a.trimStart();
    var o = l.match(urlValidationConstants.urlSchemeRegex);
    if (!o) {
      return a;
    }
    var c = o[0].toLowerCase().trim();
    if (urlValidationConstants.invalidProtocolRegex.test(c)) {
      return urlValidationConstants.BLANK_URL;
    }
    var s = l.replace(/\\/g, "/");
    if (c === "mailto:" || c.includes("://")) {
      return s;
    }
    if (c === "http:" || c === "https:") {
      if (!URL.canParse(s)) {
        return urlValidationConstants.BLANK_URL;
      }
      var u = new URL(s);
      u.protocol = u.protocol.toLowerCase();
      u.hostname = u.hostname.toLowerCase();
      return u.toString();
    }
    return s;
  };
}