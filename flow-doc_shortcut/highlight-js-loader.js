// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K7' to 'loadHighlightJs'
// - Renamed export 'p7' to 'getHighlightJs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 123513
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var o = null;
  function a() {
    return o;
  }
  function l() {
    return typescriptHelpers.asyncWrapper(this, undefined, undefined, function () {
      var e;
      return typescriptHelpers.generatorHelper(this, function (n) {
        switch (n.label) {
          case 0:
            if (o) {
              return [2];
            }
            n.label = 1;
          case 1:
            n.trys.push([1, 3,, 4]);
            return [4, require.e("highlightjs") /*id: 23471*/.then(require.bind(require, "highlightjs-language-bundle") /*id: 492411*/)];
          case 2:
            o = (e = n.sent()).highlight;
            e.lowlight;
            return [3, 4];
          case 3:
            n.sent();
            return [3, 4];
          case 4:
            return [2];
        }
      });
    });
  }
  require.d(exports, {
    loadHighlightJs: function () {
      return l;
    },
    getHighlightJs: function () {
      return a;
    }
  });
}