// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createPlaceholder'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 589315
         */
module.exports = function (module, exports, require) {
  var throttledArgStringUtil = require("throttled-arg-string-util") /*id: 293873*/;
  var lodashFunctionArityWrapper = require("lodash-function-arity-wrapper") /*id: 300746*/;
  var placeholderGetter = require("placeholder-getter") /*id: 611701*/;
  var lodashPlaceholderIndices = require("lodash-placeholder-indices") /*id: 158322*/;
  var c = throttledArgStringUtil.throttledStringify(function (t, e, r) {
    var n = 1;
    if (r.length) {
      var u = lodashPlaceholderIndices.findPlaceholderIndices(r, placeholderGetter.getPlaceholder(c));
      n |= 32;
    }
    return lodashFunctionArityWrapper.createArityWrapper(t, n, e, r, u);
  });
  c.placeholder = {};
  exports.createPlaceholder = c;
}