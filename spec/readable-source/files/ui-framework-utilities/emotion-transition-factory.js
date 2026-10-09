// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'styledTransition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 592980
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var cssTransitionComponent = require("css-transition-component") /*id: 160074*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var emotionStylesheetFactory = require("emotion-stylesheet-factory") /*id: 992521*/;
  var emotionStylesheetManager = require("emotion-stylesheet-manager") /*id: 399882*/;
  var stringHashMurmur3 = require("string-hash-murmur3") /*id: 138302*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var d = {};
  var p = emotionStylesheetFactory.createEmotionSheet({
    key: "universe-design"
  });
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var h = ["transitions", "extraProps"];
  function y(e) {
    var o = e.name;
    var i = e.timeout;
    var a = 0;
    var u = 0;
    var c = 0;
    if (i) {
      if (typeof i == "number") {
        a = i;
        u = i;
        c = i;
      } else {
        a = i.appear ?? 0;
        u = i.enter ?? 0;
        c = i.exit ?? 0;
      }
    }
    return {
      classNames: reactContextUtilsHooks.useComponentClass(o)(`-${a}-${u}-${c}`),
      timeout: {
        appear: a,
        enter: u,
        exit: c
      }
    };
  }
  function Z(e) {
    return function (n) {
      var t = n.transitions;
      var c = n.extraProps;
      var m = objectOmitHelper_1.omitWithSymbols(n, h);
      var Z = y({
        timeout: n.timeout,
        name: function () {
          if (domElementWindowUtils.isFunction(e.name)) {
            if (!c) {
              throw Error("`config.name` is function, but extraProps is undefined.");
            }
            return e.name(c);
          }
          return e.name;
        }()
      });
      var g = Z.classNames;
      var x = Z.timeout;
      var E = function () {
        if (domElementWindowUtils.isFunction(e.styles)) {
          if (!c) {
            throw Error("`config.styles` is function, but extraProps is undefined.");
          }
          return e.styles(c);
        }
        return e.styles;
      }();
      (function (e, n = {}) {
        var t = n.disabled;
        var r = t !== undefined && t;
        var o = n.atLeastOne;
        var a = o !== undefined && o;
        var c = reactCoreLibraryReexport.useMemo(function () {
          if (r) {
            return {
              name: "",
              styles: ""
            };
          } else {
            return {
              name: stringHashMurmur3.murmurHash32(e),
              styles: e
            };
          }
        }, [e, r]);
        var v = reactCoreLibraryReexport.useCallback(function () {
          if (!r) {
            var e = `${p.key}-global`;
            if (!d[c.name]) {
              var n = new emotionStylesheetManager.StyleSheetManager({
                key: e,
                nonce: p.sheet.nonce,
                container: p.sheet.container,
                speedy: p.sheet.isSpeedy
              });
              d[c.name] = {
                injectedCount: 0,
                sheet: n
              };
              if (p.sheet.tags.length) {
                var t = iterableToArrayUtil_1_1.iterableToArray(p.sheet.tags, 1);
                n.before = t[0];
              }
              p.insert("", c, n, false);
            }
          }
        }, [r, c]);
        v();
        reactRefEffectUtils.useLayoutEffect(function () {
          if (!r) {
            v();
            var e = d[c.name];
            var n = e.sheet;
            e.injectedCount += 1;
            return function () {
              e.injectedCount -= 1;
              if (e.injectedCount === 0 && !a) {
                n.flush();
                delete d[c.name];
              }
            };
          }
        }, [a, r, v, c.name]);
      })(`
  .${g}-appear {
    ${E.appear}
  }
  .${g}-enter {
    ${E.enter}
  }
  .${g}-exit-done {
    ${E.exitDone}
  }
  
  .${g}-enter-active {
    ${E.enterActive}
    transition: ${e.transitions.enterActive(x.enter)}${t != null && t.enterActive ? `, ${t.enterActive(x.enter)}` : ""};
  }
  .${g}-appear-active {
    ${E.appearActive}
    transition: ${e.transitions.appearActive(x.appear)}${t != null && t.appearActive ? `, ${t.appearActive(x.appear)}` : ""};
  }

  .${g}-appear-done {
    ${E.appearDone}
  }
  .${g}-enter-done {
    ${E.enterDone}
  }
  .${g}-exit {
    ${E.exit}
  }
  
  .${g}-exit-active {
    ${E.exitActive}
    transition: ${e.transitions.exitActive(x.exit)}${t != null && t.exitActive ? `, ${t.exitActive(x.exit)}` : ""};
  }`, {
        atLeastOne: true
      });
      return reactCoreLibraryReexport.createElement(cssTransitionComponent.CssTransition, objectAssignUtil.objectAssign({}, m, {
        classNames: g,
        timeout: x
      }));
    };
  }
  require.d(exports, {
    styledTransition: function () {
      return Z;
    }
  });
}