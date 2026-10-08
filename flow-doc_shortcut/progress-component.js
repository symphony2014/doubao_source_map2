// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'ProgressComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 222624
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var succeedFilledIcon = require("succeed-filled-icon") /*id: 836516*/;
  var errorFilledIcon = require("error-filled-icon") /*id: 205797*/;
  var u = ["success", "exception", "normal"];
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  function f(e) {
    var i = e.percent;
    var n = e.format;
    var r = e.status;
    var a = reactContextUtilsHooks.useComponentClass("progress");
    var f = iterableToArrayUtil_1_1.iterableToArray(u, 3);
    var v = f[0];
    var m = f[1];
    var g = f[2];
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, function () {
      var e;
      switch (r) {
        case v:
          e = reactCoreLibraryReexport.createElement("span", {
            className: conditionalClassnames.default([a("__icon"), a("__icon--success")])
          }, reactCoreLibraryReexport.createElement(succeedFilledIcon.SucceedFilledIcon, null));
          break;
        case m:
          e = reactCoreLibraryReexport.createElement("span", {
            className: conditionalClassnames.default([a("__icon"), a("__icon--error")])
          }, reactCoreLibraryReexport.createElement(errorFilledIcon.ErrorFilledIcon, null));
          break;
        case g:
          e = domElementWindowUtils.isFunction(n) ? n(i) : `${i}%`;
      }
      return e;
    }());
  }
  function v(e) {
    var i = e.percent;
    var n = e.strokeColor;
    var r = n === undefined ? "" : n;
    var c = e.strokeWidth;
    var d = e.status;
    var h = e.trailColor;
    var u = e.showInfo;
    var p = u === undefined || u;
    var v = e.infoPosition;
    var m = v === undefined ? "right" : v;
    var g = e.format;
    var _ = d || "normal";
    if (_ === "normal" && i >= 100) {
      _ = "success";
    }
    var w = reactContextUtilsHooks.useComponentClass("progress");
    function b() {
      return reactCoreLibraryReexport.createElement("span", {
        className: w("--steps")
      }, reactCoreLibraryReexport.createElement(f, {
        percent: i,
        status: _,
        format: g
      }));
    }
    var E = conditionalClassnames.default([w(), w("--line-bg"), w(`--line-bg-${_}`)]);
    var x = objectPropertySetter.setObjectProperty({
      width: `${i}%`
    }, r && "backgroundColor", r);
    var y = conditionalClassnames.default([w(), w("--line-inner"), objectPropertySetter.setObjectProperty({}, w(`--line-inner-with-${m}-info`), p)]);
    var S = {
      height: c === undefined ? 4 : c
    };
    if (h) {
      S.backgroundColor = h;
    }
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, p && m === "left" && b(), reactCoreLibraryReexport.createElement("div", {
      className: y,
      style: S
    }, reactCoreLibraryReexport.createElement("div", {
      className: E,
      style: x
    })), p && m === "right" && b());
  }
  function m(e) {
    var i;
    var n;
    var r;
    var f;
    var v;
    var m = e.percent;
    var g = e.showInfo;
    var _ = g === undefined || g;
    var w = e.infoPosition;
    var b = w === undefined ? "left" : w;
    var E = e.strokeWidth;
    var x = E === undefined ? 2 : E;
    var y = e.width;
    var S = y === undefined ? 16 : y;
    var C = e.status;
    var R = e.strokeColor;
    var P = e.trailColor;
    var T = e.format;
    var k = reactContextUtilsHooks.useComponentClass("progress");
    var N = iterableToArrayUtil_1_1.iterableToArray(u, 3);
    var I = N[0];
    var j = N[1];
    var F = N[2];
    var M = C || F;
    i = (S - x) / 2;
    n = `
  M ${S / 2} ${S / 2}
  m 0 ${-i}

  A ${i} ${i} 0 0 1 ${S / 2} ${S - x / 2}
  A ${i} ${i} 0 0 1 ${S / 2} ${x / 2}
  `;
    r = Math.PI * 2 * i;
    var O = {
      pathString: n,
      pathStyle: {
        strokeDasharray: `${m / 100 * (r - 0)}px ${r}px`,
        strokeDashoffset: `-${0}px`
      }
    };
    var A = O.pathString;
    var L = O.pathStyle;
    function D() {
      var e;
      var i = conditionalClassnames.default([k("--circle--steps"), (e = {}, objectPropertySetter.setObjectProperty(e, k("--circle--steps--left"), b === "left"), objectPropertySetter.setObjectProperty(e, k("--circle--steps--right"), b === "right"), e)]);
      return reactCoreLibraryReexport.createElement("span", {
        className: i
      }, domElementWindowUtils.isFunction(T) ? T(m) : `${m}%`);
    }
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, _ && b === "left" && D(), reactCoreLibraryReexport.createElement("span", {
      style: {
        position: "relative",
        display: "flex"
      }
    }, reactCoreLibraryReexport.createElement("svg", {
      width: `${S}`,
      height: `${S}`,
      fill: "none",
      color: R,
      viewBox: `0 0 ${S} ${S}`
    }, reactCoreLibraryReexport.createElement("path", {
      d: A,
      fill: "none",
      stroke: P,
      strokeWidth: x,
      strokeLinecap: "round",
      className: conditionalClassnames.default([k("--circle--path--bg"), (f = {}, objectPropertySetter.setObjectProperty(f, `${k("--circle--path--success")}`, M === I), objectPropertySetter.setObjectProperty(f, `${k("--circle--path--exception")}`, M === j), f)])
    }), reactCoreLibraryReexport.createElement("path", {
      d: A,
      fill: "none",
      stroke: R,
      strokeLinecap: m === 0 ? "butt" : "round",
      strokeWidth: x,
      style: L,
      className: conditionalClassnames.default([k("--circle--path"), (v = {}, objectPropertySetter.setObjectProperty(v, `${k("--circle--path--success")}`, M === I), objectPropertySetter.setObjectProperty(v, `${k("--circle--path--exception")}`, M === j), v)])
    })), reactCoreLibraryReexport.createElement("span", {
      className: conditionalClassnames.default([k("--circle--icon"), k("--circle--icon--success")]),
      style: {
        opacity: +(M === I),
        fontSize: `${S}px`
      }
    }, reactCoreLibraryReexport.createElement(succeedFilledIcon.SucceedFilledIcon, {
      style: {
        verticalAlign: "10px"
      }
    })), reactCoreLibraryReexport.createElement("span", {
      className: conditionalClassnames.default([k("--circle--icon"), k("--circle--icon--exception")]),
      style: {
        opacity: +(M === j),
        fontSize: `${S}px`
      }
    }, reactCoreLibraryReexport.createElement(errorFilledIcon.ErrorFilledIcon, {
      style: {
        verticalAlign: 0
      }
    }))), _ && b === "right" && D());
  }
  require("module-no-op") /*id: 116324*/;
  function g(e) {
    var i = e.type;
    var n = i === undefined ? "line" : i;
    var a = e.percent;
    var c = a === undefined ? 0 : a;
    var d = e.className;
    var h = e.style;
    var u = 0;
    u = c > 100 ? 100 : c < 0 ? 0 : c;
    var p = reactContextUtilsHooks.useComponentClass("progress");
    return reactCoreLibraryReexport.createElement("div", {
      style: h,
      className: conditionalClassnames.default(p(), p(`--${n}`), d)
    }, reactCoreLibraryReexport.createElement("div", {
      className: p(`--${n}-wrapper`)
    }, function () {
      var i;
      switch (n) {
        case "line":
          i = reactCoreLibraryReexport.createElement(v, objectAssignUtil.objectAssign({}, e, {
            percent: u
          }));
          break;
        case "circle":
          i = reactCoreLibraryReexport.createElement(m, objectAssignUtil.objectAssign({}, e, {
            percent: u
          }));
      }
      return i;
    }()));
  }
  require.d(exports, {
    ProgressComponent: function () {
      return g;
    }
  });
}