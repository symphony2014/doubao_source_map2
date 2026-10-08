// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Divider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 384623
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let s = {
    PREFIX: `${semiIdentifier.semiIdentifier}`
  };
  function l(e, t) {
    var n = {};
    for (var i in e) {
      if (Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0) {
        n[i] = e[i];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var i = Object.getOwnPropertySymbols(e);
      for (; r < i.length; r++) {
        if (t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) {
          n[i[r]] = e[i[r]];
        }
      }
    }
    return n;
  }
  let c = s.PREFIX;
  var d = e => {
    let {
      layout: t = "horizontal",
      dashed: n,
      align: r = "center",
      className: a,
      margin: s,
      style: d,
      children: u
    } = e;
    let h = l(e, ["layout", "dashed", "align", "className", "margin", "style", "children"]);
    let f = o(`${c}-divider`, a, {
      [`${c}-divider-horizontal`]: t === "horizontal",
      [`${c}-divider-vertical`]: t === "vertical",
      [`${c}-divider-dashed`]: !!n,
      [`${c}-divider-with-text`]: u && t === "horizontal",
      [`${c}-divider-with-text-${r}`]: u && t === "horizontal"
    });
    let p = {};
    if (s !== undefined) {
      if (t === "vertical") {
        p = {
          marginLeft: s,
          marginRight: s
        };
      } else if (t === "horizontal") {
        p = {
          marginTop: s,
          marginBottom: s
        };
      }
    }
    return reactCoreLibraryReexport.createElement("div", Object.assign({}, h, {
      className: f,
      style: Object.assign(Object.assign({}, p), d)
    }), u && t === "horizontal" ? typeof u == "string" ? reactCoreLibraryReexport.createElement("span", {
      className: `${c}-divider_inner-text`,
      "x-semi-prop": "children"
    }, u) : u : null);
  };
  require.d(exports, {
    Divider: function () {
      return d;
    }
  });
}