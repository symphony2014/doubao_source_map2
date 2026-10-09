// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'IconFactory'
// - Renamed export 'Z' to 'BaseIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 129581
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  function a(e, t) {
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
  let s = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      svg: n,
      spin: i = false,
      rotate: s,
      style: u,
      className: c,
      prefixCls: l = "semi",
      type: f,
      size: h = "default"
    } = e;
    let d = a(e, ["svg", "spin", "rotate", "style", "className", "prefixCls", "type", "size"]);
    let p = o(`${l}-icon`, {
      [`${l}-icon-extra-small`]: h === "extra-small",
      [`${l}-icon-small`]: h === "small",
      [`${l}-icon-default`]: h === "default",
      [`${l}-icon-large`]: h === "large",
      [`${l}-icon-extra-large`]: h === "extra-large",
      [`${l}-icon-spinning`]: i === true,
      [`${l}-icon-${f}`]: !!f
    }, c);
    let g = {};
    if (Number.isSafeInteger(s)) {
      g.transform = `rotate(${s}deg)`;
    }
    Object.assign(g, u);
    return reactCoreLibraryReexport.createElement("span", Object.assign({
      role: "img",
      ref: t,
      "aria-label": f,
      className: p,
      style: g
    }, d), n);
  });
  s.elementType = "Icon";
  let u = (e, t) => {
    let n = reactCoreLibraryReexport.forwardRef((n, i) => reactCoreLibraryReexport.createElement(s, Object.assign({
      svg: reactCoreLibraryReexport.createElement(e),
      type: t,
      ref: i
    }, n)));
    n.elementType = "Icon";
    return n;
  };
  var c = s;
  require.d(exports, {
    IconFactory: function () {
      return u;
    },
    BaseIcon: function () {
      return c;
    }
  });
}