// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'skillChatImgUploadBtn'
// - Resolved require(907496) to 'skill-chat-img-upload-btn'
// - Renamed variable 'r' to 'checkVideoUploadMultiplePic'
// - Resolved require(472580) to 'check-video-upload-multiple-pic'
// - Renamed variable 'a' to 'videoGenerationAttachment_1'
// - Resolved require(642912) to 'video-generation-attachment_1'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'S' to 'useVideoFileUpload' (module 642912)
// - Updated imported property 'f' to 'checkVideoUploadMultiplePic' (module 472580)
// - Updated imported property 'Q' to 'skillChatImgBtn' (module 907496)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 676264
         */
module.exports = function (module, exports, require) {
  var skillChatImgUploadBtn = require("skill-chat-img-upload-btn") /*id: 907496*/;
  var checkVideoUploadMultiplePic = require("check-video-upload-multiple-pic") /*id: 472580*/;
  var videoGenerationAttachment_1 = require("video-generation-attachment_1") /*id: 642912*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => {
    let {
      submitFiles: t
    } = videoGenerationAttachment_1.useVideoFileUpload(e);
    let n = checkVideoUploadMultiplePic.checkVideoUploadMultiplePic();
    return reactJsxRuntimeCoreReexport.jsx(skillChatImgUploadBtn.skillChatImgBtn, {
      ...e,
      onImageSubmit: t,
      enableMultiple: n
    });
  };
  class s {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = l;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    VideoActionUploadFileTool: function () {
      return l;
    },
    VideoActionUploadFileToolButtonPlugin: function () {
      return s;
    }
  });
}