// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'UdFontIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 743964
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  function s(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; r < n.length; r++) {
        if (t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r])) {
          i[n[r]] = e[n[r]];
        }
      }
    }
    return i;
  }
  let l = e => {
    let {
      icon: t,
      size: i,
      color: r,
      className: l
    } = e;
    let a = s(e, ["icon", "size", "color", "className"]);
    if (!t) {
      return null;
    }
    let c = o(["udfont-icon", l]);
    let u = typeof i == "number" ? `${i}px` : undefined;
    return reactCoreLibraryReexport.createElement("span", Object.assign({
      className: c
    }, a, {
      style: {
        width: u,
        height: u
      }
    }), reactCoreLibraryReexport.createElement("i", {
      className: `ud-icon_${t}`,
      style: {
        fontSize: u,
        color: r
      }
    }));
  };
  require.d(exports, {
    UdFontIcon: function () {
      return l;
    }
  });
}