// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'DocxImageCaptionBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 134800
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var docxCaptionTextCheck_1 = require("docx-caption-text-check_1") /*id: 289941*/;
  var blockMaskManagerBaseClass = require("block-mask-manager-base-class") /*id: 471875*/;
  var docxCaptionTextResolver = require("docx-caption-text-resolver") /*id: 811941*/;
  function a(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  let c = `${t("doc_base_doubao_doc_title_suffix")} - ${t("LarkCCM_Docs_Menu_Image")}`;
  class d extends blockMaskManagerBaseClass.BlockMaskManagerBase {
    get caption() {
      if (!this.isShortcut || !this.props.recursionProps.shouldRenderPlainText) {
        return objectPathGetDefault.getObjectPathDefault(this.record.snapshot, this.snapshotPath);
      }
    }
    get isEmptyCaption() {
      return docxCaptionTextCheck_1.isCaptionTextEmpty(this.caption);
    }
    get isCaptionBlock() {
      return true;
    }
    getAltText() {
      try {
        return docxCaptionTextResolver.getCaptionText(this.caption).slice(0, -1).replaceAll("\n", " ") || c;
      } catch (e) {
        return c;
      }
    }
    get captionTooltip() {
      if (this.isEmptyCaption) {
        return t("LarkCCM_Docx_Image_AddDescrip_Tooltip");
      } else {
        return t("LarkCCM_Docx_Image_EditDescrip_Tooltip");
      }
    }
    blockViewWillUnmount() {
      this.captionInstance = null;
      super.blockViewWillUnmount();
    }
    constructor(...e) {
      super(...e);
      a(this, "captionInstance", undefined);
      a(this, "snapshotPath", ["caption"]);
    }
  }
  require.d(exports, {
    DocxImageCaptionBlock: function () {
      return d;
    }
  });
}