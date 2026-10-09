// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(540568) to 'flexbox-layout-wrapper'
// - Renamed variable 'a' to 'flexboxLayoutEnums'
// - Resolved require(388917) to 'flexbox-layout-enums'
// - Renamed variable 's' to 'yogaLayoutWasmModule'
// - Resolved require(815656) to 'yoga-layout-wasm-module'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 782832
         */
module.exports = function (module, exports, require) {
  var n;
  var i = {
    loadYoga: true
  };
  exports.loadYoga = l;
  var o = (n = require("flexbox-layout-wrapper") /*id: 540568*/) && n.__esModule ? n : {
    default: n
  };
  var flexboxLayoutEnums = require("flexbox-layout-enums") /*id: 388917*/;
  Object.keys(flexboxLayoutEnums).forEach(function (e) {
    if (e !== "default" && e !== "__esModule" && !Object.prototype.hasOwnProperty.call(i, e)) {
      if (!(e in exports) || exports[e] !== flexboxLayoutEnums[e]) {
        Object.defineProperty(exports, e, {
          enumerable: true,
          get: function () {
            return flexboxLayoutEnums[e];
          }
        });
      }
    }
  });
  let yogaLayoutWasmModule = require("yoga-layout-wasm-module") /*id: 815656*/;
  async function l() {
    return o.default(await yogaLayoutWasmModule());
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}