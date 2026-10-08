// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'EquationView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 588269
         */
module.exports = function (module, exports, require) {
  var i;
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var cssDisplayTypes = require("css-display-types") /*id: 226292*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var l = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.getKatex;
    var l = e.outerClass;
    var s = e.counterIndex;
    var u = e.value;
    var d = e.placeholder;
    var c = e.errorPlaceholder;
    var h = e.viewDisplay;
    var f = h === undefined ? cssDisplayTypes.displayTypes.inline : h;
    var p = e.forceDisplayStyle;
    var v = p === undefined || p;
    var g = e.onClick;
    var m = e.onTouchStart;
    var y = e.onTouchEnd;
    var b = e.onTouchMove;
    var S = e.onMouseEnter;
    var E = e.onMouseLeave;
    var C = e.onDidRender;
    var R = e.onMouseDown;
    var w = reactCoreLibraryReexport.useRef(null);
    var z = reactCoreLibraryReexport.useRef(null);
    var I = typescriptHelpers_1.readIterator(reactCoreLibraryReexport.useState({}), 2);
    var M = I[0];
    var k = I[1];
    var T = typescriptHelpers_1.readIterator(reactCoreLibraryReexport.useState(false), 2);
    var x = T[0];
    var L = T[1];
    var D = typescriptHelpers_1.readIterator(reactCoreLibraryReexport.useState(""), 2);
    var A = D[0];
    var _ = D[1];
    var N = typescriptHelpers_1.readIterator(reactCoreLibraryReexport.useState(null), 2);
    var P = N[0];
    var O = N[1];
    reactCoreLibraryReexport.useEffect(function () {
      if (n) {
        n().then(function (e) {
          O(e);
        });
      }
    }, [n]);
    var H = reactCoreLibraryReexport.useCallback(function () {
      var e = w.current;
      var t = e == null ? undefined : e.querySelector(".editor-kit-equation-view-content");
      var n = e == null ? undefined : e.querySelector(".katex-display .base");
      var i = e == null ? undefined : e.querySelector(".katex-display .tag");
      if (e && t) {
        var o = e.closest(".ace-line");
        var r = ((o == null ? undefined : o.offsetWidth) || 0) - 4;
        var a = 0;
        var l = false;
        if (n && i) {
          l = r < (a = n.offsetWidth + i.offsetWidth) + i.offsetWidth;
        }
        var s = Math.max(a, (n || t).offsetWidth || 0);
        if (r > 0 && s >= 0) {
          var u = Math.min(r / (s + 1), 1);
          k({
            transform: "scale(" + u + ")"
          });
          L(u < 1 || l);
          if (C != null) {
            C();
          }
        }
      }
    }, [C]);
    reactCoreLibraryReexport.useImperativeHandle(t, function () {
      return {
        getViewElement: function () {
          return w.current;
        },
        resize: function () {
          H();
        }
      };
    }, [H]);
    var W = reactCoreLibraryReexport.useCallback(function () {
      return typescriptHelpers_1.awaiter(undefined, undefined, undefined, function () {
        return typescriptHelpers_1.generator(this, function (e) {
          return [2, new Promise(function (e) {
            function t(t = 1000) {
              setTimeout(function () {
                e(true);
              }, t);
            }
            if (document.fonts) {
              var n = new Date().valueOf();
              document.fonts.ready.then(function () {
                if (new Date().valueOf() - n > 100) {
                  t();
                } else {
                  e(true);
                }
              });
            } else {
              t();
            }
          })];
        });
      });
    }, []);
    var Z = reactCoreLibraryReexport.useRef(null);
    var V = reactCoreLibraryReexport.useCallback(function () {
      if (P) {
        if (Z.current) {
          clearTimeout(Z.current);
          Z.current = null;
        }
        Z.current = setTimeout(function () {
          return typescriptHelpers_1.awaiter(undefined, undefined, undefined, function () {
            return typescriptHelpers_1.generator(this, function (e) {
              switch (e.label) {
                case 0:
                  e.trys.push([0, 3,, 4]);
                  if (!u || !u.trim() || !z.current) {
                    return [3, 2];
                  }
                  return [4, W()];
                case 1:
                  e.sent();
                  P.render("" + (v ? String.raw(i ||= typescriptHelpers_1.template(["displaystyle "], ["\\displaystyle "])) : "") + u.trim(), z.current, {
                    displayMode: f === "block",
                    leqno: false,
                    fleqn: false,
                    throwOnError: true,
                    strict: "warn",
                    trust: false,
                    output: "html"
                  });
                  _("");
                  e.label = 2;
                case 2:
                  setTimeout(H);
                  if (C != null) {
                    C();
                  }
                  return [3, 4];
                case 3:
                  _(e.sent().message);
                  if (C != null) {
                    C();
                  }
                  return [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }, 100);
      }
    }, [u, P, f, v, H, C, W]);
    reactCoreLibraryReexport.useEffect(function () {
      V();
    }, [V]);
    var B = reactCoreLibraryReexport.useMemo(function () {
      return !u || !u.trim();
    }, [u]);
    var F = reactCoreLibraryReexport.useMemo(function () {
      return !!A;
    }, [A]);
    var K = reactCoreLibraryReexport.useMemo(function () {
      return B || F;
    }, [B, F]);
    var U = !B && F;
    return reactCoreLibraryReexport.createElement("div", {
      ref: w,
      className: "editor-kit-equation-view " + (l === undefined ? "" : l) + " " + (K ? "placeholder" : "") + " " + (x ? "overflow-numbering" : ""),
      style: typescriptHelpers_1.assign(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, f !== "block" || x ? {} : {
        width: "100%"
      }), s !== undefined ? {
        counterReset: "katexEqnNo " + s
      } : {}), U ? {} : M),
      onClick: g,
      onMouseDown: R,
      onTouchStart: m,
      onTouchEnd: y,
      onTouchMove: b,
      onMouseEnter: S,
      onMouseLeave: E
    }, reactCoreLibraryReexport.createElement("div", {
      ref: z,
      className: "editor-kit-equation-view-content",
      style: typescriptHelpers_1.assign({}, K ? {
        width: 0,
        height: 0,
        display: "none"
      } : {})
    }), reactCoreLibraryReexport.createElement("div", {
      className: "editor-kit-equation-view-placeholder"
    }, B && d, U && c));
  });
  require.d(exports, {
    EquationView: function () {
      return l;
    }
  });
}