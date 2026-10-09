// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ReturnKeyHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_equation_view.34d076e0.js
         * chunkId: 59870
         * moduleId: 336730
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  require("editor-kit-dom-patch") /*id: 218425*/;
  var editorInputHandler = require("editor-input-handler") /*id: 142590*/;
  var l = function (e) {
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers_1.extends(n, e);
    n.prototype._handleReturnKey = function (e) {
      this._flushInput();
      var n = this.editor;
      var r = n.getContentState();
      var i = r.getActiveZone().getZoneId();
      var l = n.selection.getSelection();
      var s = l.start.line;
      var c = l.toPosition();
      var u = c.start;
      var l = c.len;
      var c = r.getZoneState(i).getLine(s).getLineAttributes().toMap();
      var r = {
        evt: e,
        delta: new contentStructureDelta.ContentDelta({
          zoneId: i
        }),
        editor: n
      };
      n.callAll("doReturnKey", {});
      n.pluginManager.call("editorWillDoReturnKey", r);
      i = new contentStructureDelta.ContentDelta({
        zoneId: i
      });
      if (r.delta.ops.length) {
        i = i.compose(r.delta);
      } else {
        i.retain(u).delete(l).insertEnter().insertLineMarker(c);
      }
      this._apply(i, {
        type: editorInputHandler.InputActionTypes.Return
      });
      n.callAll("editorAfterDoReturnKey", {
        theLine: s
      });
      e.preventDefault();
      this._mergeInputRecord();
      return null;
    };
    return n;
  }(editorInputHandler.EditorInputHandler);
  require.d(exports, {
    ReturnKeyHandler: function () {
      return l;
    }
  });
}