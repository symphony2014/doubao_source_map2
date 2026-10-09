// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'objectAssignPolyfill'
// - Resolved require(317258) to 'object-assign-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 319652
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var objectAssignPolyfill = require("object-assign-polyfill") /*id: 317258*/;
  polyfillPropertyDefiner({
    target: "Object",
    stat: true,
    arity: 2,
    forced: Object.assign !== objectAssignPolyfill
  }, {
    assign: objectAssignPolyfill
  });
}