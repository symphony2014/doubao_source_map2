// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CL' to 'isDocumentsCategory'
// - Renamed export 'EC' to 'isConversationFiles'
// - Renamed export 'FS' to 'isCodeArtifact'
// - Renamed export 'Fg' to 'isDirectoryType'
// - Renamed export 'P1' to 'isCreationCategory'
// - Renamed export 'te' to 'isMeetingMinutes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 960082
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  function r(e) {
    if (!e) {
      return false;
    }
    let {
      nodeType: t
    } = e || {};
    let r = e.content?.directoryType;
    return !isUndefinedCheck.isUndefined(r) && t === businessLayoutConstants.ItemType.Directory && r !== businessLayoutConstants.ViewCategory.Default;
  }
  function o(e) {
    return (e == null ? undefined : e.content?.directoryType) === businessLayoutConstants.ViewCategory.Documents;
  }
  function s(e) {
    return (e == null ? undefined : e.content?.directoryType) === businessLayoutConstants.ViewCategory.ConversationFiles;
  }
  function l(e) {
    return (e == null ? undefined : e.content?.directoryType) === businessLayoutConstants.ViewCategory.MeetingMinutes;
  }
  function c(e) {
    return (e == null ? undefined : e.content?.directoryType) === businessLayoutConstants.ViewCategory.CodeArtifact;
  }
  function d(e) {
    return (e == null ? undefined : e.content?.directoryType) === businessLayoutConstants.ViewCategory.Creation;
  }
  require.d(exports, {
    isDocumentsCategory: function () {
      return o;
    },
    isConversationFiles: function () {
      return s;
    },
    isCodeArtifact: function () {
      return c;
    },
    isDirectoryType: function () {
      return r;
    },
    isCreationCategory: function () {
      return d;
    },
    isMeetingMinutes: function () {
      return l;
    }
  });
}