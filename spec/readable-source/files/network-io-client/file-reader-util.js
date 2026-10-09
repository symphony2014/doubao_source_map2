// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'promisifyHelper'
// - Resolved require(418188) to 'promisify-helper'
// - Resolved require(571968) to 'safe-require-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 192782
         */
module.exports = function (module, exports, require) {
  module.exports = s;
  var promisifyHelper = require("promisify-helper") /*id: 418188*/;
  var i = require("safe-require-helper") /*id: 571968*/("fs");
  function s(e, t, r) {
    if (typeof t == "function") {
      r = t;
      t = {};
    } else {
      t ||= {};
    }
    if (r) {
      if (!t.xhr && i && i.readFile) {
        return i.readFile(e, function (n, i) {
          if (n && typeof XMLHttpRequest != "undefined") {
            return s.xhr(e, t, r);
          } else if (n) {
            return r(n);
          } else {
            return r(null, t.binary ? i : i.toString("utf8"));
          }
        });
      } else {
        return s.xhr(e, t, r);
      }
    } else {
      return promisifyHelper(s, this, e, t);
    }
  }
  s.xhr = function (e, t, r) {
    var n = new XMLHttpRequest();
    n.onreadystatechange = function () {
      if (n.readyState === 4) {
        if (n.status !== 0 && n.status !== 200) {
          return r(Error("status " + n.status));
        }
        if (t.binary) {
          var e = n.response;
          if (!e) {
            e = [];
            for (var i = 0; i < n.responseText.length; ++i) {
              e.push(n.responseText.charCodeAt(i) & 255);
            }
          }
          return r(null, typeof Uint8Array != "undefined" ? new Uint8Array(e) : e);
        }
        return r(null, n.responseText);
      }
    };
    if (t.binary) {
      if ("overrideMimeType" in n) {
        n.overrideMimeType("text/plain; charset=x-user-defined");
      }
      n.responseType = "arraybuffer";
    }
    n.open("GET", e);
    n.send();
  };
}