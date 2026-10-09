// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Resolved require(649506) to 'parse-css-declarations-to-object'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 210414
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i = require("parse-css-declarations-to-object") /*id: 649506*/.default;
  var o = {
    reactCompat: true
  };
  var a = reactCoreLibraryReexport.version.split(".")[0] >= 16;
  var l = new Set(["tr", "tbody", "thead", "tfoot", "colgroup", "table", "head", "html", "frameset"]);
  module.exports = {
    PRESERVE_CUSTOM_ATTRIBUTES: a,
    invertObject: function (e, t) {
      if (!e || typeof e != "object") {
        throw TypeError("First argument must be an object");
      }
      var n;
      var r;
      var i = typeof t == "function";
      var o = {};
      var a = {};
      for (n in e) {
        r = e[n];
        if (i && (o = t(n, r)) && o.length === 2) {
          a[o[0]] = o[1];
          continue;
        }
        if (typeof r == "string") {
          a[r] = n;
        }
      }
      return a;
    },
    isCustomComponent: function (e, t) {
      if (e.indexOf("-") === -1) {
        return t && typeof t.is == "string";
      }
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    },
    setStyleProp: function (e, t) {
      if (e != null) {
        try {
          t.style = i(e, o);
        } catch (e) {
          t.style = {};
        }
      }
    },
    canTextBeChildOfNode: function (e) {
      return !l.has(e.name);
    },
    elementsWithNoTextChildren: l
  };
}