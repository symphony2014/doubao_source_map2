// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'typescriptHelpers'
// - Resolved require(45459) to 'typescript-helpers'
// - Renamed variable 'a' to 'cssDisplayTypes'
// - Resolved require(226292) to 'css-display-types'
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Updated imported property 'v' to 'displayTypes' (module 226292)
// - Updated imported property 'a' to 'iteratorToArray' (module 45459)
// - Updated imported property '_' to 'asyncWrapper' (module 45459)
// - Updated imported property 'b' to 'generatorHelper' (module 45459)
// - Updated imported property 'i' to 'createTemplateObj' (module 45459)
// - Updated imported property 'g' to 'assignObject' (module 45459)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_equation_view.34d076e0.js
         * chunkId: 59870
         * moduleId: 527705
         */
module.exports = function (module, exports, require) {
  var i;
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var cssDisplayTypes = require("css-display-types") /*id: 226292*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var s = reactCoreLibraryReexport.forwardRef(function (e, n) {
    var r = e.getKatex;
    var s = e.outerClass;
    var c = e.counterIndex;
    var u = e.value;
    var d = e.placeholder;
    var h = e.errorPlaceholder;
    var f = e.viewDisplay;
    var m = f === undefined ? cssDisplayTypes.displayTypes.inline : f;
    var p = e.forceDisplayStyle;
    var v = p === undefined || p;
    var y = e.onClick;
    var g = e.onTouchStart;
    var C = e.onTouchEnd;
    var _ = e.onTouchMove;
    var E = e.onMouseEnter;
    var k = e.onMouseLeave;
    var b = e.onDidRender;
    var S = e.onMouseDown;
    var K = reactCoreLibraryReexport.useRef(null);
    var w = reactCoreLibraryReexport.useRef(null);
    var A = typescriptHelpers.iteratorToArray(reactCoreLibraryReexport.useState({}), 2);
    var T = A[0];
    var D = A[1];
    var O = typescriptHelpers.iteratorToArray(reactCoreLibraryReexport.useState(false), 2);
    var I = O[0];
    var M = O[1];
    var P = typescriptHelpers.iteratorToArray(reactCoreLibraryReexport.useState(""), 2);
    var L = P[0];
    var B = P[1];
    var x = typescriptHelpers.iteratorToArray(reactCoreLibraryReexport.useState(null), 2);
    var Z = x[0];
    var R = x[1];
    reactCoreLibraryReexport.useEffect(function () {
      if (r) {
        r().then(function (e) {
          R(e);
        });
      }
    }, [r]);
    var N = reactCoreLibraryReexport.useCallback(function () {
      var e = K.current;
      var n = e == null ? undefined : e.querySelector(".editor-kit-equation-view-content");
      var r = e == null ? undefined : e.querySelector(".katex-display .base");
      var i = e == null ? undefined : e.querySelector(".katex-display .tag");
      if (e && n) {
        var o = e.closest(".ace-line");
        var a = ((o == null ? undefined : o.offsetWidth) || 0) - 4;
        var l = 0;
        var s = false;
        if (r && i) {
          s = a < (l = r.offsetWidth + i.offsetWidth) + i.offsetWidth;
        }
        var c = Math.max(l, (r || n).offsetWidth || 0);
        if (a > 0 && c >= 0) {
          var u = Math.min(a / (c + 1), 1);
          D({
            transform: "scale(" + u + ")"
          });
          M(u < 1 || s);
          if (b != null) {
            b();
          }
        }
      }
    }, [b]);
    reactCoreLibraryReexport.useImperativeHandle(n, function () {
      return {
        getViewElement: function () {
          return K.current;
        },
        resize: function () {
          N();
        }
      };
    }, [N]);
    var H = reactCoreLibraryReexport.useCallback(function () {
      return typescriptHelpers.asyncWrapper(undefined, undefined, undefined, function () {
        return typescriptHelpers.generatorHelper(this, function (e) {
          return [2, new Promise(function (e) {
            function n(n = 1000) {
              setTimeout(function () {
                e(true);
              }, n);
            }
            if (document.fonts) {
              var r = new Date().valueOf();
              document.fonts.ready.then(function () {
                if (new Date().valueOf() - r > 100) {
                  n();
                } else {
                  e(true);
                }
              });
            } else {
              n();
            }
          })];
        });
      });
    }, []);
    var F = reactCoreLibraryReexport.useRef(null);
    var U = reactCoreLibraryReexport.useCallback(function () {
      if (Z) {
        if (F.current) {
          clearTimeout(F.current);
          F.current = null;
        }
        F.current = setTimeout(function () {
          return typescriptHelpers.asyncWrapper(undefined, undefined, undefined, function () {
            return typescriptHelpers.generatorHelper(this, function (e) {
              switch (e.label) {
                case 0:
                  e.trys.push([0, 3,, 4]);
                  if (!u || !u.trim() || !w.current) {
                    return [3, 2];
                  }
                  return [4, H()];
                case 1:
                  e.sent();
                  Z.render("" + (v ? String.raw(i ||= typescriptHelpers.createTemplateObj(["displaystyle "], ["\\displaystyle "])) : "") + u.trim(), w.current, {
                    displayMode: m === "block",
                    leqno: false,
                    fleqn: false,
                    throwOnError: true,
                    strict: "warn",
                    trust: false,
                    output: "html"
                  });
                  B("");
                  e.label = 2;
                case 2:
                  setTimeout(N);
                  if (b != null) {
                    b();
                  }
                  return [3, 4];
                case 3:
                  B(e.sent().message);
                  if (b != null) {
                    b();
                  }
                  return [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }, 100);
      }
    }, [u, Z, m, v, N, b, H]);
    reactCoreLibraryReexport.useEffect(function () {
      U();
    }, [U]);
    var V = reactCoreLibraryReexport.useMemo(function () {
      return !u || !u.trim();
    }, [u]);
    var W = reactCoreLibraryReexport.useMemo(function () {
      return !!L;
    }, [L]);
    var X = reactCoreLibraryReexport.useMemo(function () {
      return V || W;
    }, [V, W]);
    var z = !V && W;
    return reactCoreLibraryReexport.createElement("div", {
      ref: K,
      className: "editor-kit-equation-view " + (s === undefined ? "" : s) + " " + (X ? "placeholder" : "") + " " + (I ? "overflow-numbering" : ""),
      style: typescriptHelpers.assignObject(typescriptHelpers.assignObject(typescriptHelpers.assignObject({}, m !== "block" || I ? {} : {
        width: "100%"
      }), c !== undefined ? {
        counterReset: "katexEqnNo " + c
      } : {}), z ? {} : T),
      onClick: y,
      onMouseDown: S,
      onTouchStart: g,
      onTouchEnd: C,
      onTouchMove: _,
      onMouseEnter: E,
      onMouseLeave: k
    }, reactCoreLibraryReexport.createElement("div", {
      ref: w,
      className: "editor-kit-equation-view-content",
      style: typescriptHelpers.assignObject({}, X ? {
        width: 0,
        height: 0,
        display: "none"
      } : {})
    }), reactCoreLibraryReexport.createElement("div", {
      className: "editor-kit-equation-view-placeholder"
    }, V && d, z && h));
  });
  require.r(exports);
  require.d(exports, {
    default: function () {
      return s;
    }
  });
}