// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'Progress'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 66784.0c351d11.js
         * chunkId: 66784
         * moduleId: 629440
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var succeedFilledIcon = require("succeed-filled-icon") /*id: 836516*/;
  var errorFilledIcon = require("error-filled-icon") /*id: 205797*/;
  var f = ["success", "exception", "normal"];
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  function p(e) {
    var t = e.percent;
    var n = e.format;
    var r = e.status;
    var c = uiConfigContextHooks.useClassName("progress");
    var p = iterableToArrayUtil_1_1.iterableToArray(f, 3);
    var m = p[0];
    var v = p[1];
    var h = p[2];
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, function () {
      var e;
      switch (r) {
        case m:
          e = reactCoreLibraryReexport.createElement("span", {
            className: conditionalClassnames.default([c("__icon"), c("__icon--success")])
          }, reactCoreLibraryReexport.createElement(succeedFilledIcon.SucceedFilledIcon, null));
          break;
        case v:
          e = reactCoreLibraryReexport.createElement("span", {
            className: conditionalClassnames.default([c("__icon"), c("__icon--error")])
          }, reactCoreLibraryReexport.createElement(errorFilledIcon.ErrorFilledIcon, null));
          break;
        case h:
          e = domTypeUtils_1.isFunction(n) ? n(t) : `${t}%`;
      }
      return e;
    }());
  }
  function m(e) {
    var t = e.percent;
    var n = e.strokeColor;
    var r = n === undefined ? "" : n;
    var u = e.strokeWidth;
    var l = e.status;
    var s = e.trailColor;
    var f = e.showInfo;
    var d = f === undefined || f;
    var m = e.infoPosition;
    var v = m === undefined ? "right" : m;
    var h = e.format;
    var g = l || "normal";
    if (g === "normal" && t >= 100) {
      g = "success";
    }
    var Z = uiConfigContextHooks.useClassName("progress");
    function x() {
      return reactCoreLibraryReexport.createElement("span", {
        className: Z("--steps")
      }, reactCoreLibraryReexport.createElement(p, {
        percent: t,
        status: g,
        format: h
      }));
    }
    var w = conditionalClassnames.default([Z(), Z("--line-bg"), Z(`--line-bg-${g}`)]);
    var y = objectPropertySetter.setObjectProperty({
      width: `${t}%`
    }, r && "backgroundColor", r);
    var E = conditionalClassnames.default([Z(), Z("--line-inner"), objectPropertySetter.setObjectProperty({}, Z(`--line-inner-with-${v}-info`), d)]);
    var b = {
      height: u === undefined ? 4 : u
    };
    if (s) {
      b.backgroundColor = s;
    }
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, d && v === "left" && x(), reactCoreLibraryReexport.createElement("div", {
      className: E,
      style: b
    }, reactCoreLibraryReexport.createElement("div", {
      className: w,
      style: y
    })), d && v === "right" && x());
  }
  function v(e) {
    var t;
    var n;
    var r;
    var p;
    var m;
    var v = e.percent;
    var h = e.showInfo;
    var g = h === undefined || h;
    var Z = e.infoPosition;
    var x = Z === undefined ? "left" : Z;
    var w = e.strokeWidth;
    var y = w === undefined ? 2 : w;
    var E = e.width;
    var b = E === undefined ? 16 : E;
    var C = e.status;
    var L = e.strokeColor;
    var S = e.trailColor;
    var _ = e.format;
    var R = uiConfigContextHooks.useClassName("progress");
    var A = iterableToArrayUtil_1_1.iterableToArray(f, 3);
    var T = A[0];
    var z = A[1];
    var N = A[2];
    var k = C || N;
    t = (b - y) / 2;
    n = `
  M ${b / 2} ${b / 2}
  m 0 ${-t}

  A ${t} ${t} 0 0 1 ${b / 2} ${b - y / 2}
  A ${t} ${t} 0 0 1 ${b / 2} ${y / 2}
  `;
    r = Math.PI * 2 * t;
    var I = {
      pathString: n,
      pathStyle: {
        strokeDasharray: `${v / 100 * (r - 0)}px ${r}px`,
        strokeDashoffset: `-${0}px`
      }
    };
    var O = I.pathString;
    var M = I.pathStyle;
    function P() {
      var e;
      var t = conditionalClassnames.default([R("--circle--steps"), (e = {}, objectPropertySetter.setObjectProperty(e, R("--circle--steps--left"), x === "left"), objectPropertySetter.setObjectProperty(e, R("--circle--steps--right"), x === "right"), e)]);
      return reactCoreLibraryReexport.createElement("span", {
        className: t
      }, domTypeUtils_1.isFunction(_) ? _(v) : `${v}%`);
    }
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, g && x === "left" && P(), reactCoreLibraryReexport.createElement("span", {
      style: {
        position: "relative",
        display: "flex"
      }
    }, reactCoreLibraryReexport.createElement("svg", {
      width: `${b}`,
      height: `${b}`,
      fill: "none",
      color: L,
      viewBox: `0 0 ${b} ${b}`
    }, reactCoreLibraryReexport.createElement("path", {
      d: O,
      fill: "none",
      stroke: S,
      strokeWidth: y,
      strokeLinecap: "round",
      className: conditionalClassnames.default([R("--circle--path--bg"), (p = {}, objectPropertySetter.setObjectProperty(p, `${R("--circle--path--success")}`, k === T), objectPropertySetter.setObjectProperty(p, `${R("--circle--path--exception")}`, k === z), p)])
    }), reactCoreLibraryReexport.createElement("path", {
      d: O,
      fill: "none",
      stroke: L,
      strokeLinecap: v === 0 ? "butt" : "round",
      strokeWidth: y,
      style: M,
      className: conditionalClassnames.default([R("--circle--path"), (m = {}, objectPropertySetter.setObjectProperty(m, `${R("--circle--path--success")}`, k === T), objectPropertySetter.setObjectProperty(m, `${R("--circle--path--exception")}`, k === z), m)])
    })), reactCoreLibraryReexport.createElement("span", {
      className: conditionalClassnames.default([R("--circle--icon"), R("--circle--icon--success")]),
      style: {
        opacity: +(k === T),
        fontSize: `${b}px`
      }
    }, reactCoreLibraryReexport.createElement(succeedFilledIcon.SucceedFilledIcon, {
      style: {
        verticalAlign: "10px"
      }
    })), reactCoreLibraryReexport.createElement("span", {
      className: conditionalClassnames.default([R("--circle--icon"), R("--circle--icon--exception")]),
      style: {
        opacity: +(k === z),
        fontSize: `${b}px`
      }
    }, reactCoreLibraryReexport.createElement(errorFilledIcon.ErrorFilledIcon, {
      style: {
        verticalAlign: 0
      }
    }))), g && x === "right" && P());
  }
  require("empty-module-export_4") /*id: 530821*/;
  function h(e) {
    var t = e.type;
    var n = t === undefined ? "line" : t;
    var c = e.percent;
    var u = c === undefined ? 0 : c;
    var l = e.className;
    var s = e.style;
    var f = 0;
    f = u > 100 ? 100 : u < 0 ? 0 : u;
    var d = uiConfigContextHooks.useClassName("progress");
    return reactCoreLibraryReexport.createElement("div", {
      style: s,
      className: conditionalClassnames.default(d(), d(`--${n}`), l)
    }, reactCoreLibraryReexport.createElement("div", {
      className: d(`--${n}-wrapper`)
    }, function () {
      var t;
      switch (n) {
        case "line":
          t = reactCoreLibraryReexport.createElement(m, objectAssignUtil.objectAssign({}, e, {
            percent: f
          }));
          break;
        case "circle":
          t = reactCoreLibraryReexport.createElement(v, objectAssignUtil.objectAssign({}, e, {
            percent: f
          }));
      }
      return t;
    }()));
  }
  require.d(exports, {
    Progress: function () {
      return h;
    }
  });
}