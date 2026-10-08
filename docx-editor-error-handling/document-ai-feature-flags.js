// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L0' to 'isDocumentAIEnabled'
// - Renamed export 'VL' to 'isAIGeneralEnabled'
// - Renamed export 'be' to 'isNewImproveWritingEnabled'
// - Renamed export 'rD' to 'isImageSuperEnabled'
// - Renamed export 'si' to 'isAICoverEnabled'
// - Renamed export 'sx' to 'isAIHeaderQAEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 842304
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  let l = () => boolDefaultGetterUtil.getDefaultBool("ccm.docx.opendoc_ai", false);
  let s = () => boolDefaultGetterUtil.getDefaultBool("lark.my_ai.main_switch", false);
  let a = () => {
    if (browserEnvironmentDetectionUtils.browserDetector.isH5) {
      return false;
    }
    let e = boolDefaultGetterUtil.getDefaultBool("ccm.docs.ai.enable", false);
    if (browserEnvironmentDetectionUtils.browserDetector.isOpendoc) {
      return e && l();
    } else {
      return e;
    }
  };
  let c = () => a();
  let d = () => boolDefaultGetterUtil.getDefaultBool("ccm.docx.aigc.cover", false) && a();
  let u = () => boolDefaultGetterUtil.getDefaultBool("ccm.docx.aigc.image_super", false);
  let h = () => boolDefaultGetterUtil.getDefaultBool("ccm.docx.myai.new_improve_writing", false);
  let f = () => boolDefaultGetterUtil.getDefaultBool("ccm.docx.ai_header_qa", false) && s();
  require.d(exports, {
    isDocumentAIEnabled: function () {
      return c;
    },
    isAIGeneralEnabled: function () {
      return a;
    },
    isNewImproveWritingEnabled: function () {
      return h;
    },
    isImageSuperEnabled: function () {
      return u;
    },
    isAICoverEnabled: function () {
      return d;
    },
    isAIHeaderQAEnabled: function () {
      return f;
    }
  });
}