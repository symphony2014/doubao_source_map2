// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SpinIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 982867
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var nullCheckUtil_1 = require("null-check-util_1") /*id: 179154*/;
  function s(e, t) {
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
  let a = -1;
  exports.SpinIcon = function (e = {}) {
    let {
      id: t,
      className: n
    } = e;
    let o = s(e, ["id", "className"]);
    let l = t;
    if (nullCheckUtil_1.isNil(l)) {
      l = ++a;
    }
    let u = `linearGradient-${l}`;
    return reactCoreLibraryReexport.createElement("svg", Object.assign({}, o, {
      className: n,
      width: "48",
      height: "48",
      viewBox: "0 0 36 36",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": true,
      "data-icon": "spin"
    }), reactCoreLibraryReexport.createElement("defs", null, reactCoreLibraryReexport.createElement("linearGradient", {
      x1: "0%",
      y1: "100%",
      x2: "100%",
      y2: "100%",
      id: u
    }, reactCoreLibraryReexport.createElement("stop", {
      stopColor: "currentColor",
      stopOpacity: "0",
      offset: "0%"
    }), reactCoreLibraryReexport.createElement("stop", {
      stopColor: "currentColor",
      stopOpacity: "0.50",
      offset: "39.9430698%"
    }), reactCoreLibraryReexport.createElement("stop", {
      stopColor: "currentColor",
      offset: "100%"
    }))), reactCoreLibraryReexport.createElement("g", {
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, reactCoreLibraryReexport.createElement("rect", {
      fillOpacity: "0.01",
      fill: "none",
      x: "0",
      y: "0",
      width: "36",
      height: "36"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M34,18 C34,9.163444 26.836556,2 18,2 C11.6597233,2 6.18078805,5.68784135 3.59122325,11.0354951",
      stroke: `url(#${u})`,
      strokeWidth: "4",
      strokeLinecap: "round"
    })));
  };
}