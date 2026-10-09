// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GL' to 'entityTypes'
// - Renamed export 'Jf' to 'nonEditableBlockTypes'
// - Renamed export 'Rc' to 'targetTypes'
// - Renamed export 'UW' to 'mentionClosingSymbols'
// - Renamed export 'VS' to 'fileTypeMapping'
// - Renamed export 'dj' to 'fileTypeToContentType'
// - Renamed export 'il' to 'contentTypeEnum'
// - Renamed export 'kp' to 'agendaItemTitleBlockType'
// - Renamed export 'mm' to 'createChildDocOptionKey'
// - Renamed export 'vU' to 'mentionTriggers'
// - Renamed export 'vt' to 'mentionConfigurations'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 280127
         */
module.exports = function (module, exports, require) {
  var contentTypeEnums_1 = require("content-type-enums_1") /*id: 263557*/;
  var linkEditorConstants = require("link-editor-constants") /*id: 962583*/;
  var driveFileTypeConstants_1 = require("drive-file-type-constants_1") /*id: 944521*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var mentionTypesEnum = require("mention-types-enum") /*id: 622152*/;
  let u = ["]]", "】】", "))", "））"];
  let h = [];
  let f = h.map(e => ({
    input: e,
    identifier: mentionTypesEnum.MentionTypes.mentionAt,
    key: "@",
    validators: [e => !/\w$/.test(e), (e, n) => !Object.hasOwnProperty.call(n[0].attributes, "link"), () => !userEnvironmentUtils.isAnonymousAccess()]
  }));
  let v = [docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.CODE, docBlockTypeConstants.blockTypeConstants.PROGRESS, docBlockTypeConstants.blockTypeConstants.AI];
  let p = [docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_TITLE];
  let g = {
    [linkEditorConstants.targetTypes.USER]: [driveFileTypeConstants_1.FileType.USER],
    [linkEditorConstants.targetTypes.DOCS]: [driveFileTypeConstants_1.FileType.FILE, driveFileTypeConstants_1.FileType.SHEET, driveFileTypeConstants_1.FileType.BITABLE, driveFileTypeConstants_1.FileType.MINDNOTE, driveFileTypeConstants_1.FileType.BOX, driveFileTypeConstants_1.FileType.WIKI, driveFileTypeConstants_1.FileType.DOCX, driveFileTypeConstants_1.FileType.SLIDES],
    [linkEditorConstants.targetTypes.GROUP]: [driveFileTypeConstants_1.FileType.CHAT]
  };
  let m = {
    ALL: [...g[linkEditorConstants.targetTypes.USER], ...g[linkEditorConstants.targetTypes.DOCS], ...g[linkEditorConstants.targetTypes.GROUP]].sort((e, n) => e - n).join(","),
    INLINE: [...g[linkEditorConstants.targetTypes.USER], ...g[linkEditorConstants.targetTypes.DOCS]].sort((e, n) => e - n).join(",")
  };
  let S = {
    [driveFileTypeConstants_1.FileType.FILE]: contentTypeEnums_1.lOn.DOC,
    [driveFileTypeConstants_1.FileType.SHEET]: contentTypeEnums_1.lOn.SHEET,
    [driveFileTypeConstants_1.FileType.BITABLE]: contentTypeEnums_1.lOn.BITABLE,
    [driveFileTypeConstants_1.FileType.MINDNOTE]: contentTypeEnums_1.lOn.MINDNOTE,
    [driveFileTypeConstants_1.FileType.BOX]: contentTypeEnums_1.lOn.FILE,
    [driveFileTypeConstants_1.FileType.WIKI]: contentTypeEnums_1.lOn.WIKI,
    [driveFileTypeConstants_1.FileType.DOCX]: contentTypeEnums_1.lOn.DOCX,
    [driveFileTypeConstants_1.FileType.SLIDES]: contentTypeEnums_1.lOn.SLIDES
  };
  editorConstantsEnums.MenuItemTypes.Divider;
  let y = "phoenix_create_child_doc_option";
  require.d(exports, {
    entityTypes: function () {
      return linkEditorConstants.entityTypes;
    },
    nonEditableBlockTypes: function () {
      return v;
    },
    targetTypes: function () {
      return linkEditorConstants.targetTypes;
    },
    mentionClosingSymbols: function () {
      return u;
    },
    fileTypeMapping: function () {
      return m;
    },
    fileTypeToContentType: function () {
      return S;
    },
    contentTypeEnum: function () {
      return contentTypeEnums_1.lOn;
    },
    agendaItemTitleBlockType: function () {
      return p;
    },
    createChildDocOptionKey: function () {
      return y;
    },
    mentionTriggers: function () {
      return h;
    },
    mentionConfigurations: function () {
      return f;
    }
  });
}