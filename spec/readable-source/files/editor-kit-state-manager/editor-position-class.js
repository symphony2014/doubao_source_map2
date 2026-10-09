// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'EditorPosition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 77106
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var editorModuleConstants = require("editor-module-constants") /*id: 21060*/;
  var a = function () {
    function t(t) {
      var e = t.start;
      var n = t.len;
      var r = t.zoneId;
      var o = r === undefined ? zeroConstantModule_1.versionValue : r;
      var r = t.isBackward;
      var r = r !== undefined && r;
      var t = t.editor;
      this.start = e;
      this.len = n;
      this.zoneId = o;
      this.isBackward = r;
      this.editor = t;
      Object.defineProperty(this, "editor", {
        enumerable: false
      });
    }
    var e = t.prototype;
    t.isPosition = function (e) {
      return e instanceof t;
    };
    e.toRange = function (t) {
      var e = this;
      var n = e.editor;
      var i = e.start;
      var a = e.len;
      var s = e.zoneId;
      var e = (t || n.getContentState()).getZoneState(s);
      var t = e.offsetToPoint(i);
      var a = e.offsetToPoint(i + a);
      return new (this.editor.modulesContainer.get(editorModuleConstants.editorModuleConsts.Range))({
        editor: n,
        start: typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, t), {
          zoneId: s
        }),
        end: typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, a), {
          zoneId: s
        })
      });
    };
    e.isCollapsed = function () {
      return this.len === 0;
    };
    return t;
  }();
  require.d(exports, {
    EditorPosition: function () {
      return a;
    }
  });
}