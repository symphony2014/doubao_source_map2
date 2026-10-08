// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'Portal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 535442
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactPrimitiveComponents = require("react-primitive-components") /*id: 301296*/;
  var reactUseLayoutEffectSafe = require("react-use-layout-effect-safe") /*id: 245652*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var u = reactCoreLibraryReexport.forwardRef((e, t) => {
    var u;
    let {
      container: c,
      ...l
    } = e;
    let [f, h] = reactCoreLibraryReexport.useState(false);
    reactUseLayoutEffectSafe.useLayoutEffect(() => h(true), []);
    let d = c || f && ((u = globalThis) === null || u === undefined ? undefined : u.document?.body);
    if (d) {
      return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.div, {
        ...l,
        ref: t
      }), d);
    } else {
      return null;
    }
  });
  u.displayName = "Portal";
  require.d(exports, {
    Portal: function () {
      return u;
    }
  });
}