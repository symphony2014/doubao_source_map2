// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'rfc3986UriRegex'
// - Resolved require(256471) to 'rfc3986-uri-regex'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 806899
         */
module.exports = function (module, exports, require) {
  var rfc3986UriRegex = require("rfc3986-uri-regex") /*id: 256471*/;
  var o = {
    Uri: {
      createUriRegex: function (e) {
        if (typeof (e = e || {}) != "object" || Array.isArray(e)) {
          throw Error("options must be an object");
        }
        var t = "";
        if (e.scheme) {
          if (!Array.isArray(e.scheme)) {
            e.scheme = [e.scheme];
          }
          if (e.scheme.length <= 0) {
            throw Error("scheme must have at least 1 scheme specified");
          }
          for (var r = 0; r < e.scheme.length; ++r) {
            var o = e.scheme[r];
            if (!(o instanceof RegExp) && typeof o != "string") {
              throw Error("scheme must only contain Regular Expressions or Strings");
            }
            t += t ? "|" : "";
            if (o instanceof RegExp) {
              t += o.source;
            } else {
              if (!/[a-zA-Z][a-zA-Z0-9+-\.]*/.test(o)) {
                throw Error("scheme at position " + r + " must be a valid scheme");
              }
              t += o.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, "\\$&");
            }
          }
        }
        return RegExp("^(?:(?:" + (t || rfc3986UriRegex.scheme) + "):" + rfc3986UriRegex.hierPart + ")(?:\\?" + rfc3986UriRegex.query + ")?(?:#" + rfc3986UriRegex.fragment + ")?$");
      },
      uriRegex: new RegExp(rfc3986UriRegex.uri)
    }
  };
  o.Uri.isValid = function (e) {
    return o.Uri.uriRegex.test(e);
  };
  module.exports = {
    createUriRegex: o.Uri.createUriRegex,
    uriRegex: o.Uri.uriRegex,
    isValid: o.Uri.isValid
  };
}