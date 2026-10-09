// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(170612) to 'parse-css-declarations'
// - Renamed variable 'o' to 'cssPropertyCamelcaseUtil'
// - Resolved require(424847) to 'css-property-camelcase-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 649506
         */
module.exports = function (module, exports, require) {
  var r = this && this.__importDefault || function (e) {
    if (e && e.__esModule) {
      return e;
    } else {
      return {
        default: e
      };
    }
  };
  exports.__esModule = true;
  var i = r(require("parse-css-declarations") /*id: 170612*/);
  var cssPropertyCamelcaseUtil = require("css-property-camelcase-util") /*id: 424847*/;
  exports.default = function (e, t) {
    var n = {};
    if (e && typeof e == "string") {
      i.default(e, function (e, r) {
        if (e && r) {
          n[cssPropertyCamelcaseUtil.camelCase(e, t)] = r;
        }
      });
    }
    return n;
  };
}