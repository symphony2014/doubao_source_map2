// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'hasReader'
// - Renamed export 'Q' to 'consumeReader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 888197
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  function o(e) {
    return typescriptRuntimeHelpers.asyncGenerator(this, arguments, function () {
      var t;
      var n;
      var i;
      return typescriptRuntimeHelpers.generator(this, function (o) {
        switch (o.label) {
          case 0:
            t = e.getReader();
            o.label = 1;
          case 1:
            o.trys.push([1,, 9, 10]);
            o.label = 2;
          case 2:
            return [4, typescriptRuntimeHelpers.templateObject(t.read())];
          case 3:
            i = (n = o.sent()).value;
            if (!n.done) {
              return [3, 5];
            }
            return [4, typescriptRuntimeHelpers.templateObject(undefined)];
          case 4:
            return [2, o.sent()];
          case 5:
            return [4, typescriptRuntimeHelpers.templateObject(i)];
          case 6:
            return [4, o.sent()];
          case 7:
            o.sent();
            return [3, 2];
          case 8:
            return [3, 10];
          case 9:
            t.releaseLock();
            return [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function s(e) {
    return isFunctionUtil.isFunction(e == null ? undefined : e.getReader);
  }
  require.d(exports, {
    hasReader: function () {
      return s;
    },
    consumeReader: function () {
      return o;
    }
  });
}