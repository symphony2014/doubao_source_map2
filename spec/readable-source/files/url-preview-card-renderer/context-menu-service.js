// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'contextMenuService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 304826
         */
module.exports = function (module, exports, require) {
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var domElementEventUtils = require("dom-element-event-utils") /*id: 791124*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var uiDefaultContextProvider = require("ui-default-context-provider") /*id: 792028*/;
  var createContextModule = require("create-context-module") /*id: 2998*/;
  require("empty-module-shim-init") /*id: 596430*/;
  function I(e) {
    var t = e.position;
    var n = e.onClose;
    var o = e.overlay;
    var c = reactCoreLibraryReexport.useRef(null);
    var I = reactCoreLibraryReexport.useRef(null);
    var A = uiConfigContextHooks.useClassName("context-menu");
    domElementEventUtils.useOutsideListener("click", {
      listener: reactCoreLibraryReexport.useCallback(function () {
        if (n) {
          n();
        }
      }, [n]),
      elements: reactCoreLibraryReexport.useMemo(function () {
        return [c];
      }, [])
    });
    reactRefEffectUtils.useLayoutEffect(function () {
      if (I.current && c.current) {
        var e = iterableToArrayUtil_1_1.iterableToArray(t, 2);
        var n = e[0];
        var i = e[1];
        var o = {
          left: n,
          top: i
        };
        var _ = c.current;
        var a = I.current;
        var E = _.clientHeight;
        var l = _.clientWidth;
        if (E + i > a.clientHeight) {
          o.top = o.top - E;
          if (o.top < 0) {
            o.top = 0;
          }
        }
        if (l + n > a.clientWidth) {
          o.left = n - l;
          if (o.left < 0) {
            o.left = 0;
          }
        }
        c.current.style.left = `${o.left}px`;
        c.current.style.top = `${o.top}px`;
      }
    }, [t]);
    var s = reactCoreLibraryReexport.useMemo(function () {
      if (domTypeUtils_1.isFunction(o)) {
        return o();
      } else {
        return o;
      }
    }, [o]);
    return reactCoreLibraryReexport.createElement(createContextModule.createContext.Provider, {
      value: reactCoreLibraryReexport.useMemo(function () {
        return {};
      }, [])
    }, reactCoreLibraryReexport.createElement("div", {
      ref: I,
      className: A("__wrap"),
      onContextMenu: function (e) {
        return e.stopPropagation();
      }
    }, reactCoreLibraryReexport.createElement("div", {
      ref: c,
      className: A("__overlay"),
      onClick: n
    }, s)));
  }
  var A = {
    open: function (e) {
      var t = e.menu;
      var n = e.position;
      var r = e.getPopupContainer;
      var _ = e.onClose;
      var a = r ? r() : document.body;
      var E = document.createElement("div");
      a.appendChild(E);
      reactDomEntryWrapper.render(reactCoreLibraryReexport.createElement(uiDefaultContextProvider.UiProviderWrapper, null, reactCoreLibraryReexport.createElement(I, {
        overlay: t,
        position: n,
        onClose: function () {
          if (reactDomEntryWrapper.unmountComponentAtNode(E) && E.parentNode) {
            E.parentNode.removeChild(E);
            if (_) {
              _();
            }
          }
        }
      })), E);
    }
  };
  require.d(exports, {
    contextMenuService: function () {
      return A;
    }
  });
}