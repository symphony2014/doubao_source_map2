// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'htmlEntitiesMapReexport'
// - Resolved require(849606) to 'html-entities-map-reexport'
// - Resolved require(708770) to 'markdown-common-utils'
// - Resolved require(708770) to 'markdown-common-utils'
// - Resolved require(708770) to 'markdown-common-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 720946
         */
module.exports = function (module, exports, require) {
  var htmlEntitiesMapReexport = require("html-entities-map-reexport") /*id: 849606*/;
  var i = require("markdown-common-utils") /*id: 708770*/.has;
  var o = require("markdown-common-utils") /*id: 708770*/.isValidEntityCode;
  var s = require("markdown-common-utils") /*id: 708770*/.fromCodePoint;
  var a = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
  var c = /^&([a-z][a-z0-9]{1,31});/i;
  module.exports = function (t, e) {
    var r;
    var l;
    var u = t.pos;
    var h = t.posMax;
    if (t.src.charCodeAt(u) !== 38) {
      return false;
    }
    if (u + 1 < h) {
      if (t.src.charCodeAt(u + 1) === 35) {
        if (l = t.src.slice(u).match(a)) {
          if (!e) {
            r = l[1][0].toLowerCase() === "x" ? parseInt(l[1].slice(1), 16) : parseInt(l[1], 10);
            t.pending += o(r) ? s(r) : s(65533);
          }
          t.pos += l[0].length;
          return true;
        }
      } else if ((l = t.src.slice(u).match(c)) && i(htmlEntitiesMapReexport, l[1])) {
        if (!e) {
          t.pending += htmlEntitiesMapReexport[l[1]];
        }
        t.pos += l[0].length;
        return true;
      }
    }
    if (!e) {
      t.pending += "&";
    }
    t.pos++;
    return true;
  };
}