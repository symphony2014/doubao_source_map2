// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'WV' to 'primitiveComponents'
// - Renamed export 'jH' to 'dispatchEventSync'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 301296
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactSlotUtils = require("react-slot-utils") /*id: 293688*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
    let n = reactSlotUtils.createSlot(`Primitive.${t}`);
    let i = reactCoreLibraryReexport.forwardRef((e, r) => {
      let {
        asChild: i,
        ...o
      } = e;
      if (typeof window != "undefined") {
        window[Symbol.for("radix-ui")] = true;
      }
      return reactJsxRuntimeCoreReexport.jsx(i ? n : t, {
        ...o,
        ref: r
      });
    });
    i.displayName = `Primitive.${t}`;
    return {
      ...e,
      [t]: i
    };
  }, {});
  function u(e, t) {
    if (e) {
      reactDomEntryWrapper.flushSync(() => e.dispatchEvent(t));
    }
  }
  require.d(exports, {
    primitiveComponents: function () {
      return s;
    },
    dispatchEventSync: function () {
      return u;
    }
  });
}