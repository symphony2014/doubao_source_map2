// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'docxToolboxBlockIconMapping'
// - Resolved require(773648) to 'docx-toolbox-block-icon-mapping'
// - Renamed variable 'o' to 'docxBlockUtils_1'
// - Resolved require(138224) to 'docx-block-utils_1'
// - Renamed variable 'i' to 'blockTypeIconMapping'
// - Resolved require(265784) to 'block-type-icon-mapping'
// - Renamed variable 'l' to 'iframePlatformGroupingConstants'
// - Resolved require(148183) to 'iframe-platform-grouping-constants'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property '$U' to 'blockTypeIconMap' (module 773648)
// - Updated imported property 'tD' to 'getBlockTypeLabel' (module 773648)
// - Updated imported property 'AI' to 'blockIcons' (module 265784)
// - Updated imported property 'E$' to 'getBlockTypeDisplayName' (module 138224)
// - Updated imported property 'BC' to 'iframePlatformGrouping' (module 148183)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83583.e90c4c76.js
         * chunkId: 83583
         * moduleId: 234613
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var docxToolboxBlockIconMapping = require("docx-toolbox-block-icon-mapping") /*id: 773648*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var blockTypeIconMapping = require("block-type-icon-mapping") /*id: 265784*/;
  var iframePlatformGroupingConstants = require("iframe-platform-grouping-constants") /*id: 148183*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function s(e) {
    let {
      blockType: a
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [docxToolboxBlockIconMapping.blockTypeIconMap[a] || blockTypeIconMapping.blockIcons[a], docxToolboxBlockIconMapping.getBlockTypeLabel(a) || docxBlockUtils_1.getBlockTypeDisplayName(a) || function (e) {
        for (let a of iframePlatformGroupingConstants.iframePlatformGrouping) {
          if (a.name === e) {
            return a.text;
          }
        }
      }(a)]
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return s;
    }
  });
}