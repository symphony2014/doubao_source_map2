// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fp' to 'processOfflineMenus'
// - Renamed export 'Vz' to 'disableOfflineMenus'
// - Renamed export 'tE' to 'getOfflineTooltip'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 22232
         */
module.exports = function (module, exports, require) {
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxOfflineFileHandler = require("docx-offline-file-handler") /*id: 308697*/;
  var docxOfflineFeatureCheck = require("docx-offline-feature-check") /*id: 821237*/;
  var docxOfflineImageFlags = require("docx-offline-image-flags") /*id: 332375*/;
  let h = new Set([editorUiComponentConstants.uiComponentConstants.DocAI, editorUiComponentConstants.uiComponentConstants.AITemplate, editorUiComponentConstants.uiComponentConstants.Data, editorUiComponentConstants.uiComponentConstants.Drawing, editorUiComponentConstants.uiComponentConstants.ProjectManage, editorUiComponentConstants.uiComponentConstants.Advanced, editorUiComponentConstants.uiComponentConstants.Application, editorUiComponentConstants.uiComponentConstants.DocMiniApp, editorUiComponentConstants.uiComponentConstants.SaveBlockTemplate, editorUiComponentConstants.uiComponentConstants.Comment, editorUiComponentConstants.uiComponentConstants.ShareTextLink, editorUiComponentConstants.uiComponentConstants.Bitable, editorUiComponentConstants.uiComponentConstants.Application, editorUiComponentConstants.uiComponentConstants.Embed, editorUiComponentConstants.uiComponentConstants.Wiki]);
  let u = new Set([editorConstantsEnums.BlockTypes.Bitable, editorConstantsEnums.BlockTypes.SyncedBlock, editorConstantsEnums.BlockTypes.Template, editorConstantsEnums.BlockTypes.Synced, editorConstantsEnums.BlockTypes.SendToIm, editorConstantsEnums.BlockTypes.Translate, editorConstantsEnums.BlockTypes.SaveBlockTemplate, editorConstantsEnums.BlockTypes.CreateLingo, editorConstantsEnums.BlockTypes.LingoUserAsk, editorConstantsEnums.BlockTypes.Comment, editorConstantsEnums.BlockTypes.CopyAnchorLink, editorConstantsEnums.BlockTypes.NewChildDoc, editorConstantsEnums.BlockTypes.NewChildDocWithContent, editorConstantsEnums.BlockTypes.SearchWeb, editorConstantsEnums.BlockTypes.LarkSearch, editorConstantsEnums.BlockTypes.SlashMentionUser, editorConstantsEnums.BlockTypes.SlashMentionChat, editorConstantsEnums.BlockTypes.SlashMentionPage, editorConstantsEnums.BlockTypes.TaskList, editorConstantsEnums.BlockTypes.SlashOkr, editorConstantsEnums.BlockTypes.SlashNewOkr, editorConstantsEnums.BlockTypes.SlashCalendarEvent, editorConstantsEnums.BlockTypes.PollBlock, editorConstantsEnums.BlockTypes.InfoCollector]);
  let p = {
    1: t("LarkCCM_Docs_OfflineNotDownloadedPreviewFail_EmptyState"),
    3: t("LarkCCM_Docs_OfflinePreviewFail_EmptyState")
  };
  let f = {
    [editorConstantsEnums.BlockTypes.Download]: t("LarkCCM_Docs_OfflineCantDownload_Tooltip")
  };
  function v(e) {
    if (offlineStatusSelectorsUtils.isDocxOfflineDisabled()) {
      for (let i = 0; i < e.length; i++) {
        let n = e[i];
        (function e(i, n = false) {
          for (let l = 0; l < i.length; l++) {
            let o = i[l];
            if (!o) {
              continue;
            }
            let s = n;
            if (s) {
              o.disabled = true;
              m(o);
            }
            if ((o.type === editorConstantsEnums.MenuItemTypes.MenuItemNormal || o.type === editorConstantsEnums.MenuItemTypes.SubmenuItemWithComponent || o.type === editorConstantsEnums.MenuItemTypes.SubmenuItemWithChildren) && o.key && u.has(o.key)) {
              o.disabled = true;
              s = true;
              m(o);
            }
            if ((o.type === editorConstantsEnums.MenuItemTypes.SubmenuItemWithChildren || o.type === editorConstantsEnums.MenuItemTypes.MenuItemWithFlattenItems) && o.children) {
              e(o.children, s);
            }
          }
        })(n.children, h.has(n.key));
      }
    }
  }
  function m(e, i) {
    if (e.disabled && e.type !== editorConstantsEnums.MenuItemTypes.MenuItemWithFlattenItems && e.disabled && e.type !== editorConstantsEnums.MenuItemTypes.Title && e.disabled && e.type !== editorConstantsEnums.MenuItemTypes.Divider && e.disabled) {
      e.forceShowTip = true;
      e.tip = e.key && (i && _(i) || f[e.key]) || offlineStatusSelectorsUtils.featureUnavailableOfflineToast;
      e.guideInfo = undefined;
    }
  }
  async function g(e, i) {
    let {
      snapshot: l = {}
    } = (i == null ? undefined : i[0]?.record) || {};
    let {
      file: o,
      type: c = ""
    } = l;
    let {
      token: d = "",
      mimeType: h = ""
    } = o || {};
    if (c === docBlockTypeConstants.blockTypeConstants.FILE && o && d) {
      for (let i = 0; i < e.length; i++) {
        let n = e[i];
        await u(n.children);
      }
    }
    async function u(e) {
      for (let i = 0; i < e.length; i++) {
        let n = e[i];
        if (!n) {
          continue;
        }
        let l = await docxOfflineFileHandler.getFileErrorCode(h)(d);
        if (n.key === editorConstantsEnums.BlockTypes.Fullscreen && l) {
          n.disabled = true;
          m(n, l);
        }
        if ((n.type === editorConstantsEnums.MenuItemTypes.SubmenuItemWithChildren || n.type === editorConstantsEnums.MenuItemTypes.MenuItemWithFlattenItems) && n.children) {
          u(n.children);
        }
      }
    }
  }
  function _(e) {
    return p[e] || t("LarkCCM_Docs_OfflineDownloadLimit_Tooltip");
  }
  if (!docxOfflineImageFlags.isImageEditEnabled) {
    u.add(editorConstantsEnums.BlockTypes.Image);
  }
  if (!docxOfflineFeatureCheck.isDocxOfflineFlag) {
    u.add(editorConstantsEnums.BlockTypes.FileBlock);
  }
  if (docxOfflineFeatureCheck.isDocxOfflineFlag) {
    u.add(editorConstantsEnums.BlockTypes.Download);
  }
  require.d(exports, {
    processOfflineMenus: function () {
      return g;
    },
    disableOfflineMenus: function () {
      return v;
    },
    getOfflineTooltip: function () {
      return _;
    }
  });
}