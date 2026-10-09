// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'createCssTransition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 697870
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var cssTransitionComponent = require("css-transition-component") /*id: 160074*/;
  var emotionGlobalStyleInjector = require("emotion-global-style-injector") /*id: 526096*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var s = ["transitions", "extraProps"];
  function f(e) {
    var r = e.name;
    var i = e.timeout;
    var u = 0;
    var a = 0;
    var c = 0;
    if (i) {
      if (typeof i == "number") {
        u = i;
        a = i;
        c = i;
      } else {
        u = i.appear ?? 0;
        a = i.enter ?? 0;
        c = i.exit ?? 0;
      }
    }
    return {
      classNames: uiConfigContextHooks.useClassName(r)(`-${u}-${a}-${c}`),
      timeout: {
        appear: u,
        enter: a,
        exit: c
      }
    };
  }
  function d(e) {
    return function (t) {
      var n = t.transitions;
      var l = t.extraProps;
      var d = objectOmitHelper_1.omitWithSymbols(t, s);
      var p = f({
        timeout: t.timeout,
        name: function () {
          if (domTypeUtils_1.isFunction(e.name)) {
            if (!l) {
              throw Error("`config.name` is function, but extraProps is undefined.");
            }
            return e.name(l);
          }
          return e.name;
        }()
      });
      var v = p.classNames;
      var m = p.timeout;
      var g = function () {
        if (domTypeUtils_1.isFunction(e.styles)) {
          if (!l) {
            throw Error("`config.styles` is function, but extraProps is undefined.");
          }
          return e.styles(l);
        }
        return e.styles;
      }();
      emotionGlobalStyleInjector.useGlobalStyle(`
  .${v}-appear {
    ${g.appear}
  }
  .${v}-enter {
    ${g.enter}
  }
  .${v}-exit-done {
    ${g.exitDone}
  }
  
  .${v}-enter-active {
    ${g.enterActive}
    transition: ${e.transitions.enterActive(m.enter)}${n != null && n.enterActive ? `, ${n.enterActive(m.enter)}` : ""};
  }
  .${v}-appear-active {
    ${g.appearActive}
    transition: ${e.transitions.appearActive(m.appear)}${n != null && n.appearActive ? `, ${n.appearActive(m.appear)}` : ""};
  }

  .${v}-appear-done {
    ${g.appearDone}
  }
  .${v}-enter-done {
    ${g.enterDone}
  }
  .${v}-exit {
    ${g.exit}
  }
  
  .${v}-exit-active {
    ${g.exitActive}
    transition: ${e.transitions.exitActive(m.exit)}${n != null && n.exitActive ? `, ${n.exitActive(m.exit)}` : ""};
  }`, {
        atLeastOne: true
      });
      return reactCoreLibraryReexport.createElement(cssTransitionComponent.CssTransition, objectAssignUtil.objectAssign({}, d, {
        classNames: v,
        timeout: m
      }));
    };
  }
  require.d(exports, {
    createCssTransition: function () {
      return d;
    }
  });
}