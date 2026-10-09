// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'composedLayoutDisplayProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 669222
         */
module.exports = function (module, exports, require) {
  var uniqueIdConstant_1 = require("unique-id-constant_1") /*id: 676402*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var layoutPropsConfig = require("layout-props-config") /*id: 844230*/;
  var a = composeClassNamesUtil.composeClassNames.compose(layoutPropsConfig.layoutProps, {
    props: {
      display: uniqueIdConstant_1.constantId
    }
  });
  require.d(exports, {
    composedLayoutDisplayProps: function () {
      return a;
    }
  });
}