// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'oV' to 'getHelpCenterUrl'
// - Renamed export 'pK' to 'getEnvHelpUrl'
// - Renamed export 'tF' to 'helpCenterLinks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 338838
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  let l = () => {
    let e = objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.domain.helpcenter");
    if (/^\w*\.\w*$/.exec(e)) {
      return `www.${e}`;
    } else {
      return e;
    }
  };
  let s = (e, i) => {
    let r = objectPathGetDefault.getObjectPathDefault(window, "materialConfig.brand_docs_helpcenter_home");
    if (r) {
      return r;
    }
    i ||= e;
    let s = userEnvironmentUtils.isLarkProduct() ? i : e;
    let a = l();
    let c = /\/\/(www\.feishu\.cn|www\.larksuite\.com)/.exec(s);
    if (a && c && c[1]) {
      s = s.replace(c[1], a);
    }
    return s;
  };
  let a = e => s(e.FEISHU, e.LARK);
  let c = (e, i) => ({
    FEISHU: e,
    LARK: i
  });
  let d = {
    BACKREF_ERENCE: c(t("LarkCCM_Docs_BiDirectionalLink_HelpCenterLink_Feishu"), t("LarkCCM_Docs_BiDirectionalLink_HelpCenterLink_Lark")),
    WEB_PAGE_CARD: c(t("LarkCCM_DocX_HelpCenter_webCard_Feishu"), t("LarkCCM_DocX_HelpCenter_webCard_Lark")),
    LATEX: c(t("LarkCCM_DocX_HelpCenter_LaTex_Feishu"), t("LarkCCM_DocX_HelpCenter_LaTex_Lark")),
    FIND_REPLACE_MENT: c(t("CreationDoc_DocX_FindReplace_HelpURL"), t("CreationDoc_DocX_FindReplace_HelpURL_Lark")),
    WIDTH_MODE_GUIDE: c(t("LarkCCM_DocX_WiderPage_HC_Feishu"), t("LarkCCM_DocX_WiderPage_HC_Lark")),
    SYNC_GUIDE_PANEL: c(t("LarkCM_Docs_SyncBlock_HelpCenterLink_Feishu"), t("LarkCM_Docs_SyncBlock_HelpCenterLink_Lark")),
    EDIT_HISTORY: c(t("LarkCCM_Docs_EditHistory_HelpCenterLink_Feishu"), t("LarkCCM_Docs_EditHistory_HelpCenterLink_Lark")),
    EXAMPLE_LINK: c("https://www.feishu.cn/", "https://www.larksuite.com/")
  };
  require.d(exports, {
    getHelpCenterUrl: function () {
      return s;
    },
    getEnvHelpUrl: function () {
      return a;
    },
    helpCenterLinks: function () {
      return d;
    }
  });
}