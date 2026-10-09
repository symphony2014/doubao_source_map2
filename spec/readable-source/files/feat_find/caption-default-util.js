// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'getCaptionDefault'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_replace-all.b695287c.js
         * chunkId: 1472
         * moduleId: 341053
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var docxCaptionTextCheck_1 = require("docx-caption-text-check_1") /*id: 289941*/;
  function r(e) {
    let l = t("LarkCCM_GPE_CodeBlock_Common");
    let n = {
      text: {
        apool: {
          nextNum: 0,
          numToAttrib: {}
        },
        initialAttributedTexts: {
          attribs: {
            0: `|1+${l.length + 1}`
          },
          text: {
            0: `${l}
`
          }
        }
      }
    };
    let r = objectPathGetDefault.getObjectPathDefault(e, ["caption"]);
    if (docxCaptionTextCheck_1.isCaptionTextEmpty(r)) {
      return n;
    } else {
      return r;
    }
  }
  require.d(exports, {
    getCaptionDefault: function () {
      return r;
    }
  });
}