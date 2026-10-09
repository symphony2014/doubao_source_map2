// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'iconComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 932319
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  function _(e, t) {
    var n = {};
    for (var r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
        n[r] = e[r];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var i = 0;
      var r = Object.getOwnPropertySymbols(e);
      for (; i < r.length; i++) {
        if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
          n[r[i]] = e[r[i]];
        }
      }
    }
    return n;
  }
  let a = e => {
    let {
      icon: t,
      size: n,
      color: i,
      className: a
    } = e;
    let E = _(e, ["icon", "size", "color", "className"]);
    if (!t) {
      return null;
    }
    let l = o(["udfont-icon", a]);
    let c = typeof n == "number" ? `${n}px` : undefined;
    return reactCoreLibraryReexport.createElement("span", Object.assign({
      className: l
    }, E, {
      style: {
        width: c,
        height: c
      }
    }), reactCoreLibraryReexport.createElement("i", {
      className: `ud-icon_${t}`,
      style: {
        fontSize: c,
        color: i
      }
    }));
  };
  require.d(exports, {
    iconComponent: function () {
      return a;
    }
  });
}