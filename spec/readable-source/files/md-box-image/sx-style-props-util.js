// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'sxStyleProcessor'
// - Resolved require(232869) to 'sx-style-processor'
// - Renamed variable 'i' to 'stylePropsMerge'
// - Resolved require(151183) to 'style-props-merge'
// - Renamed variable 'o' to 'stylePropsConfig'
// - Resolved require(584416) to 'style-props-config'
// - Updated imported property 'Z' to 'processSxStyles' (module 232869)
// - Updated imported property 'n' to 'createSxProcessor' (module 232869)
// - Updated imported property 'Z' to 'mergeStyleProps' (module 151183)
// - Updated imported property 'Z' to 'stylePropsConfig' (module 584416)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 27746
         */
module.exports = function (module, exports, require) {
  var sxStyleProcessor = require("sx-style-processor") /*id: 232869*/;
  var stylePropsMerge = require("style-props-merge") /*id: 151183*/;
  var stylePropsConfig = require("style-props-config") /*id: 584416*/;
  require.r(exports);
  require.d(exports, {
    default: function () {
      return sxStyleProcessor.processSxStyles;
    },
    extendSxProp: function () {
      return stylePropsMerge.mergeStyleProps;
    },
    unstable_createStyleFunctionSx: function () {
      return sxStyleProcessor.createSxProcessor;
    },
    unstable_defaultSxConfig: function () {
      return stylePropsConfig.stylePropsConfig;
    }
  });
}