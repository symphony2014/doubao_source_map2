// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$U' to 'fileNodeTypeMap'
// - Renamed export 'Zd' to 'crossTenantPermission'
// - Renamed export 'my' to 'iconType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 144238
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var fileNodeConstants = require("file-node-constants") /*id: 356793*/;
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  let c = {
    [fileNodeConstants.FileNodeTypes.FOLDER]: fileTypeConstants.ObjectType.FOLDER,
    [fileNodeConstants.FileNodeTypes.DOC]: fileTypeConstants.ObjectType.DOC,
    [fileNodeConstants.FileNodeTypes.DOCS]: fileTypeConstants.ObjectType.DOC,
    [fileNodeConstants.FileNodeTypes.DOCX]: fileTypeConstants.ObjectType.DOCX,
    [fileNodeConstants.FileNodeTypes.SYNCED]: fileTypeConstants.ObjectType.SYNCED,
    [fileNodeConstants.FileNodeTypes.SHEET]: fileTypeConstants.ObjectType.SHEET,
    [fileNodeConstants.FileNodeTypes.SHEETS]: fileTypeConstants.ObjectType.SHEET,
    [fileNodeConstants.FileNodeTypes.SLIDES]: fileTypeConstants.ObjectType.SLIDES,
    [fileNodeConstants.FileNodeTypes.SPREADSHEET]: fileTypeConstants.ObjectType.SHEET,
    [fileNodeConstants.FileNodeTypes.BITABLE]: fileTypeConstants.ObjectType.BITABLE,
    [fileNodeConstants.FileNodeTypes.BASE]: fileTypeConstants.ObjectType.BITABLE,
    [fileNodeConstants.FileNodeTypes.RECORD]: fileTypeConstants.ObjectType.RECORD,
    [fileNodeConstants.FileNodeTypes.BASE_ADD]: fileTypeConstants.ObjectType.BASE_ADD,
    [fileNodeConstants.FileNodeTypes.MINDNOTE]: fileTypeConstants.ObjectType.MINDNOTE,
    [fileNodeConstants.FileNodeTypes.MINDNOTES]: fileTypeConstants.ObjectType.MINDNOTE,
    [fileNodeConstants.FileNodeTypes.FILE]: fileTypeConstants.ObjectType.FILE,
    [fileNodeConstants.FileNodeTypes.WIKI]: fileTypeConstants.ObjectType.WIKI,
    [fileNodeConstants.FileNodeTypes.ISV]: fileTypeConstants.ObjectType.ISV,
    [fileNodeConstants.FileNodeTypes.CATALOG]: fileTypeConstants.ObjectType.CATALOG
  };
  (i = {})[i.UNSET = 0] = "UNSET";
  i[i.EMOJI = 1] = "EMOJI";
  i[i.IMAGE = 2] = "IMAGE";
  let _ = i;
  (o = {})[o.NOT_CROSS_TENANT = 0] = "NOT_CROSS_TENANT";
  o[o.SUPPORT_CROSS_TENANT_WITH_READ_PERM = 1] = "SUPPORT_CROSS_TENANT_WITH_READ_PERM";
  o[o.UNSUPPORT_CROSS_TENANT_WITH_READ_PERM = 2] = "UNSUPPORT_CROSS_TENANT_WITH_READ_PERM";
  let l = o;
  require.d(exports, {
    fileNodeTypeMap: function () {
      return c;
    },
    crossTenantPermission: function () {
      return l;
    },
    iconType: function () {
      return _;
    }
  });
}