// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(574514) to 'operator-definitions'
// - Renamed variable 'n' to 'boolExpressionEvaluator'
// - Resolved require(864118) to 'bool-expression-evaluator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flowpd-card-web-runtime.26dc6be7.js
         * chunkId: 21082
         * moduleId: 412962
         */
module.exports = function (module, exports, require) {
  exports.evalBoolExpression = undefined;
  require("operator-definitions") /*id: 574514*/;
  var boolExpressionEvaluator = require("bool-expression-evaluator") /*id: 864118*/;
  Object.defineProperty(exports, "evalBoolExpression", {
    enumerable: true,
    get: function () {
      return boolExpressionEvaluator.evalBoolExpression;
    }
  });
}