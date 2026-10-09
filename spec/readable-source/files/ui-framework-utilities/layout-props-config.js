// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'layoutProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 844230
         */
module.exports = function (module, exports, require) {
  var moduleExportIdentifier_1 = require("module-export-identifier_1") /*id: 298928*/;
  var obfuscatedConstantExportModule = require("obfuscated-constant-export-module") /*id: 174374*/;
  var moduleExportIdentifier_2 = require("module-export-identifier_2") /*id: 592203*/;
  var constantStringIdentifier = require("constant-string-identifier") /*id: 893270*/;
  var moduleIdentifierDef = require("module-identifier-def") /*id: 870407*/;
  var webpackChunkModuleIdConstant = require("webpack-chunk-module-id-constant") /*id: 60075*/;
  var uniqueIdentifierConstant_1 = require("unique-identifier-constant_1") /*id: 996061*/;
  var stringConstantModule_1 = require("string-constant-module_1") /*id: 931749*/;
  var uniqueIdConstant = require("unique-id-constant") /*id: 92778*/;
  var d = {
    props: {
      boxSizing: moduleExportIdentifier_1.identifier,
      marginTop: obfuscatedConstantExportModule.exportedConstant,
      marginRight: moduleExportIdentifier_2.identifier,
      marginBottom: constantStringIdentifier.stringIdentifier,
      marginLeft: moduleIdentifierDef.moduleIdentifier,
      paddingTop: webpackChunkModuleIdConstant.moduleIdHash,
      paddingRight: uniqueIdentifierConstant_1.uniqueId,
      paddingBottom: stringConstantModule_1.uniqueId,
      paddingLeft: uniqueIdConstant.uniqueId
    }
  };
  require.d(exports, {
    layoutProps: function () {
      return d;
    }
  });
}