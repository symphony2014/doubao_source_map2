// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'jp' to 'BodyScrollLock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 336717
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactStyleInjector = require("react-style-injector") /*id: 989764*/;
  var scrollBarConstants = require("scroll-bar-constants") /*id: 314373*/;
  var a = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
  };
  function c(e) {
    return parseInt(e || "", 10) || 0;
  }
  function u(e) {
    var t = window.getComputedStyle(document.body);
    var n = t[e === "padding" ? "paddingLeft" : "marginLeft"];
    var r = t[e === "padding" ? "paddingTop" : "marginTop"];
    var o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [c(n), c(r), c(o)];
  }
  function s(e = "margin") {
    if (typeof window == "undefined") {
      return a;
    }
    var t = u(e);
    var n = document.documentElement.clientWidth;
    var r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0])
    };
  }
  var l = reactStyleInjector.styleInjector();
  var f = "data-scroll-locked";
  function d(e, t, n, r) {
    var o = e.left;
    var a = e.top;
    var c = e.right;
    var u = e.gap;
    if (n === undefined) {
      n = "margin";
    }
    return `
  .${scrollBarConstants.scrollBarsHidden} {
   overflow: hidden ${r};
   padding-right: ${u}px ${r};
  }
  body[${f}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[t && `position: relative ${r};`, n === "margin" && `
    padding-left: ${o}px;
    padding-top: ${a}px;
    padding-right: ${c}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${u}px ${r};
    `, n === "padding" && `padding-right: ${u}px ${r};`].filter(Boolean).join("")}
  }
  
  .${scrollBarConstants.scrollBarPosition} {
    right: ${u}px ${r};
  }
  
  .${scrollBarConstants.widthBeforeScroll} {
    margin-right: ${u}px ${r};
  }
  
  .${scrollBarConstants.scrollBarPosition} .${scrollBarConstants.scrollBarPosition} {
    right: 0 ${r};
  }
  
  .${scrollBarConstants.widthBeforeScroll} .${scrollBarConstants.widthBeforeScroll} {
    margin-right: 0 ${r};
  }
  
  body[${f}] {
    ${scrollBarConstants.scrollBarSizeVar}: ${u}px;
  }
`;
  }
  function m() {
    var e = parseInt(document.body.getAttribute(f) || "0", 10);
    if (isFinite(e)) {
      return e;
    } else {
      return 0;
    }
  }
  function _() {
    reactCoreLibraryReexport.useEffect(function () {
      document.body.setAttribute(f, (m() + 1).toString());
      return function () {
        var e = m() - 1;
        if (e <= 0) {
          document.body.removeAttribute(f);
        } else {
          document.body.setAttribute(f, e.toString());
        }
      };
    }, []);
  }
  function p(e) {
    var t = e.noRelative;
    var n = e.noImportant;
    var o = e.gapMode;
    var i = o === undefined ? "margin" : o;
    _();
    var a = reactCoreLibraryReexport.useMemo(function () {
      return s(i);
    }, [i]);
    return reactCoreLibraryReexport.createElement(l, {
      styles: d(a, !t, i, n ? "" : "!important")
    });
  }
  require.d(exports, {
    BodyScrollLock: function () {
      return p;
    }
  });
}