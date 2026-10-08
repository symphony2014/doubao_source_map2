// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'utilsTypeCheckHelpers'
// - Resolved require(998785) to 'utils-type-check-helpers'
// - Renamed variable 'o' to 'functionBindHelper'
// - Resolved require(662641) to 'function-bind-helper'
// - Renamed variable 'i' to 'axiosCoreInstance'
// - Resolved require(107218) to 'axios-core-instance'
// - Renamed variable 'a' to 'axiosConfigMerge'
// - Resolved require(661494) to 'axios-config-merge'
// - Renamed variable 's' to 'axiosDefaultsConfig'
// - Resolved require(962818) to 'axios-defaults-config'
// - Renamed variable 'u' to 'formDataToObjectParser'
// - Resolved require(535640) to 'form-data-to-object-parser'
// - Resolved require(195120) to 'axios-canceled-error'
// - Resolved require(979463) to 'axios-cancel-token'
// - Resolved require(903440) to 'is-cancel-token'
// - Resolved require(726628) to 'package-version-info'
// - Resolved require(406663) to 'object-to-form-data-util'
// - Resolved require(24058) to 'axios-error-class'
// - Resolved require(19160) to 'apply-args-helper'
// - Resolved require(443851) to 'axios-error-check-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 991220
         */
module.exports = function (module, exports, require) {
  var utilsTypeCheckHelpers = require("utils-type-check-helpers") /*id: 998785*/;
  var functionBindHelper = require("function-bind-helper") /*id: 662641*/;
  var axiosCoreInstance = require("axios-core-instance") /*id: 107218*/;
  var axiosConfigMerge = require("axios-config-merge") /*id: 661494*/;
  var axiosDefaultsConfig = require("axios-defaults-config") /*id: 962818*/;
  var formDataToObjectParser = require("form-data-to-object-parser") /*id: 535640*/;
  var c = function e(t) {
    var r = new axiosCoreInstance(t);
    var s = functionBindHelper(axiosCoreInstance.prototype.request, r);
    utilsTypeCheckHelpers.extend(s, axiosCoreInstance.prototype, r);
    utilsTypeCheckHelpers.extend(s, r);
    s.create = function (r) {
      return e(axiosConfigMerge(t, r));
    };
    return s;
  }(axiosDefaultsConfig);
  c.Axios = axiosCoreInstance;
  c.CanceledError = require("axios-canceled-error") /*id: 195120*/;
  c.CancelToken = require("axios-cancel-token") /*id: 979463*/;
  c.isCancel = require("is-cancel-token") /*id: 903440*/;
  c.VERSION = require("package-version-info") /*id: 726628*/.version;
  c.toFormData = require("object-to-form-data-util") /*id: 406663*/;
  c.AxiosError = require("axios-error-class") /*id: 24058*/;
  c.Cancel = c.CanceledError;
  c.all = function (e) {
    return Promise.all(e);
  };
  c.spread = require("apply-args-helper") /*id: 19160*/;
  c.isAxiosError = require("axios-error-check-util") /*id: 443851*/;
  c.formToJSON = function (e) {
    return formDataToObjectParser(utilsTypeCheckHelpers.isHTMLForm(e) ? new FormData(e) : e);
  };
  module.exports = c;
  module.exports.default = c;
}