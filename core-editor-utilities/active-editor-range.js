// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'ActiveEditorRange'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 466344
         */
module.exports = function (module, exports, require) {
  var classInheritanceHelper = require("class-inheritance-helper") /*id: 897927*/;
  var o = function (e) {
    function t(t) {
      var r = e.call(this, t) || this;
      var n = t.isActive;
      r.isActive = n === undefined || n;
      return r;
    }
    classInheritanceHelper.inherits(t, e);
    return t;
  }(require("editor-range-class") /*id: 172613*/.EditorRange);
  require.d(exports, {
    ActiveEditorRange: function () {
      return o;
    }
  });
}