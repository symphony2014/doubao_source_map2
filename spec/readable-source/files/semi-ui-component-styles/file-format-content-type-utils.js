// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'isAudioFormat'
// - Renamed export 'Qs' to 'getContentTypeByFormat'
// - Renamed export 'X9' to 'getCanvasParamsFromContentBlock'
// - Renamed export 'nj' to 'getFileFormatFromBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 559499
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var taskStatusConstants_1 = require("task-status-constants_1") /*id: 324746*/;
  var superTaskAiPptCanvasHandler = require("super-task-ai-ppt-canvas-handler") /*id: 291217*/;
  var filePreviewConfigs = require("file-preview-configs") /*id: 576123*/;
  function o(e) {
    return [taskStatusConstants_1.fileFormats.Mp3, taskStatusConstants_1.fileFormats.Wav].includes(e);
  }
  function s(e) {
    let t = {
      content_type: "",
      content_sec_type: ""
    };
    if ([taskStatusConstants_1.fileFormats.File, taskStatusConstants_1.fileFormats.Zip, taskStatusConstants_1.fileFormats.CSV, taskStatusConstants_1.fileFormats.XLSX, taskStatusConstants_1.fileFormats.PDF, taskStatusConstants_1.fileFormats.PPT, taskStatusConstants_1.fileFormats.PPTX, taskStatusConstants_1.fileFormats.DOCX, taskStatusConstants_1.fileFormats.Doc].includes(e)) {
      t.content_type = "file";
    }
    if ([taskStatusConstants_1.fileFormats.Web, taskStatusConstants_1.fileFormats.Html].includes(e)) {
      t.content_type = "web";
    }
    if (o(e)) {
      t.content_type = "audio";
    }
    if ([taskStatusConstants_1.fileFormats.Mp4, taskStatusConstants_1.fileFormats.M4V].includes(e)) {
      t.content_type = "video";
    }
    t.content_sec_type = e;
    return t;
  }
  function c(e, t, a) {
    var i;
    if (e.block_type === chatConstantsEnum.messageContentType.BLOCK_CLIENT_FOLDER) {
      return taskStatusConstants_1.fileFormats.LocalFolder;
    }
    let l = (t == null ? undefined : (i = t.trim()) === null || i === undefined ? undefined : i.toLowerCase()) || "";
    if (l) {
      if (Object.values(taskStatusConstants_1.fileFormats).find(e => l === e) === undefined) {
        if (a == null ? undefined : a.includes(l)) {
          return taskStatusConstants_1.fileFormats.SUPPORTED;
        } else {
          return taskStatusConstants_1.fileFormats.UNSUPPORTED;
        }
      } else {
        return l || taskStatusConstants_1.fileFormats.Web;
      }
    } else {
      return taskStatusConstants_1.fileFormats.Web;
    }
  }
  function d(e) {
    let {
      contentBlock: t
    } = e;
    let {
      type: a = "",
      name: n = "",
      uri: r = "",
      url: o = ""
    } = t.content_obj || {};
    let s = filePreviewConfigs.filePreviewConfigs[a];
    if (!(s == null ? undefined : s.getCanvasParams)) {
      return;
    }
    let c = {
      ...e,
      productInfo: {
        type: a,
        name: n,
        uri: r,
        url: o
      }
    };
    let d = s.getCanvasParams(c);
    if (d) {
      superTaskAiPptCanvasHandler.openSuperTaskCanvas(d, {
        contentBlockId: t == null ? undefined : t.id
      });
    }
  }
  require.d(exports, {
    isAudioFormat: function () {
      return o;
    },
    getContentTypeByFormat: function () {
      return s;
    },
    getCanvasParamsFromContentBlock: function () {
      return d;
    },
    getFileFormatFromBlock: function () {
      return c;
    }
  });
}