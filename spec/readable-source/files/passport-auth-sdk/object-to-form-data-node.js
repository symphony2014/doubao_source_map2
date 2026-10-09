// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'utilsTypeCheckHelpers'
// - Resolved require(998785) to 'utils-type-check-helpers'
// - Renamed variable 'o' to 'objectToFormDataUtil'
// - Resolved require(406663) to 'object-to-form-data-util'
// - Renamed variable 'i' to 'webPolyfillConfigWrapper'
// - Resolved require(341545) to 'web-polyfill-config-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 678038
         */
module.exports = function (module, exports, require) {
  var utilsTypeCheckHelpers = require("utils-type-check-helpers") /*id: 998785*/;
  var objectToFormDataUtil = require("object-to-form-data-util") /*id: 406663*/;
  var webPolyfillConfigWrapper = require("web-polyfill-config-wrapper") /*id: 341545*/;
  module.exports = function (e, t) {
    return objectToFormDataUtil(e, new webPolyfillConfigWrapper.classes.URLSearchParams(), Object.assign({
      visitor: function (e, t, r, o) {
        if (webPolyfillConfigWrapper.isNode && utilsTypeCheckHelpers.isBuffer(e)) {
          this.append(t, e.toString("base64"));
          return false;
        } else {
          return o.defaultVisitor.apply(this, arguments);
        }
      }
    }, t));
  };
}