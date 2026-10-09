// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$I' to 'getFolderTabInfo'
// - Renamed export 'Ev' to 'getFileType'
// - Renamed export 'rm' to 'getSourceCategory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 88691
         */
module.exports = function (module, exports, require) {
  var fileExtensionUtils = require("file-extension-utils") /*id: 165880*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var businessLayoutDirectoryChecks = require("business-layout-directory-checks") /*id: 960082*/;
  function o(e) {
    let i = e.getState();
    let t = i.currentPathStack[0];
    if (!t) {
      return "self_created";
    }
    if (t === "recent") {
      return "latest";
    }
    let n = i.nodeInfoMap[t];
    if (businessLayoutDirectoryChecks.isDocumentsCategory(n)) {
      return "writing";
    } else if (businessLayoutDirectoryChecks.isConversationFiles(n)) {
      return "file_from_chat";
    } else if (businessLayoutDirectoryChecks.isMeetingMinutes(n)) {
      return "file_from_meeting_record";
    } else if (businessLayoutDirectoryChecks.isCodeArtifact(n)) {
      return "coding";
    } else if (businessLayoutDirectoryChecks.isCreationCategory(n)) {
      return "ai_creation";
    } else {
      return "self_created";
    }
  }
  function s(e) {
    let i;
    let t;
    if (!e) {
      return {};
    }
    let {
      activeTab: n
    } = e.getState();
    if (!n) {
      return {
        sec_folder_tab: "",
        folder_tab: ""
      };
    }
    if (n !== "myUpload") {
      i = "latest";
      switch (n) {
        case "recentAll":
          t = "aispace_tab_all";
          break;
        case "recentCodeArtifact":
          t = "aispace_tab_projects";
          break;
        case "recentDoc":
          t = "aispace_tab_docs";
          break;
        case "recentExcel":
          t = "aispace_tab_tables";
          break;
        case "recentMedia":
          t = "aispace_tab_media";
          break;
        case "recentOther":
          t = "aispace_tab_other";
          break;
        case "recentPPT":
          t = "aispace_tab_slides";
          break;
        case "recentPic":
          t = "aispace_tab_images";
          break;
        case "recentMettingMinutes":
          t = "aispace_tab_meetingNotes";
          break;
        default:
          t = undefined;
      }
    } else {
      i = "my_upload";
    }
    return {
      sec_folder_tab: t,
      folder_tab: i
    };
  }
  function l(e) {
    if (!e) {
      return "";
    }
    let i = getFileExtension.getFileExtension(e);
    let t = fileExtensionUtils.isWordDoc(i);
    let r = fileExtensionUtils.isExcelFile(i);
    let o = fileExtensionUtils.isPptFile(i);
    let s = fileExtensionUtils.isPdfFile(i);
    let l = fileExtensionUtils.isTextFile(i);
    let c = fileExtensionUtils.isCsvFile(i);
    let d = fileExtensionUtils.isArchive(i);
    if (t) {
      return "doc";
    }
    if (r) {
      return "xlsx";
    }
    if (o) {
      return "ppt";
    }
    if (s) {
      return "pdf";
    }
    if (l) {
      return "txt";
    } else if (c) {
      return "csv";
    } else if (d) {
      return "archive";
    }
    return i;
  }
  require.d(exports, {
    getFolderTabInfo: function () {
      return s;
    },
    getFileType: function () {
      return l;
    },
    getSourceCategory: function () {
      return o;
    }
  });
}