// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'useToolButtonSize'
// - Renamed export 'a' to 'toolButtonThreshold'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-skill-guidance-page.b074653e.js
         * chunkId: 25336
         * moduleId: 726818
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var responsiveScreenHooks = require("responsive-screen-hooks") /*id: 221846*/;
  let o = 480;
  let s = false;
  let u = () => {
    let t = responsiveScreenHooks.useIsNarrowScreen();
    let n = reactCoreLibraryReexport.useRef(null);
    let u = useElementSizeHook_2.useElementSize(n)?.width;
    let c = t || (isNullishCheck.isNil(u) || u === 0 ? s : u < o);
    s = c;
    return {
      isToolButtonSmall: c,
      inputWidthDivRef: n
    };
  };
  require.d(exports, {
    useToolButtonSize: function () {
      return u;
    },
    toolButtonThreshold: function () {
      return o;
    }
  });
}