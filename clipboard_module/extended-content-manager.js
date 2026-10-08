// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'ExtendedContentManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 479288
         */
module.exports = function (module, exports, require) {
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var contentStateManager = require("content-state-manager") /*id: 519638*/;
  var richTextSchemaResolverFactory = require("rich-text-schema-resolver-factory") /*id: 873026*/;
  var editorZoneStateExtended = require("editor-zone-state-extended") /*id: 132405*/;
  class c extends contentStateManager.ContentStateManager {
    addZone(e, n) {
      if (this.content.get(e)) {
        return this.content.get(e);
      }
      let r = n || new contentStructureDelta.ContentDelta({
        zoneId: e
      }).insertEnter();
      if (r.zoneId !== e) {
        r = new contentStructureDelta.ContentDelta({
          zoneId: e,
          ops: r.ops
        });
      }
      let i = new editorZoneStateExtended.ExtendedEditorZoneState(e, r, richTextSchemaResolverFactory.richTextSchemaResolver);
      this.content.set(e, i);
      return i;
    }
    removeZone(e) {
      if (this.getZoneState(e)) {
        this.content.delete(e);
      }
    }
  }
  require.d(exports, {
    ExtendedContentManager: function () {
      return c;
    }
  });
}