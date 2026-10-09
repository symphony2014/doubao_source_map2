// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Au' to 'blockHeaderPadding'
// - Renamed export 'CW' to 'blockHeaderMargin'
// - Renamed export 'Cv' to 'isDocInfoDisabled'
// - Renamed export 'Fb' to 'isFromGroup'
// - Renamed export 'Gl' to 'isTitleDisabled'
// - Renamed export 'J2' to 'isSyncedBlockOpt3'
// - Renamed export 'Lk' to 'isBottomTplDisabled'
// - Renamed export 'P5' to 'isSyncedBlockOpt'
// - Renamed export 'U3' to 'isContentFoldHidden'
// - Renamed export 'Um' to 'isRoomsAgenda'
// - Renamed export 'ak' to 'isVcAgenda'
// - Renamed export 'fL' to 'isCommentExpandOff'
// - Renamed export 'fm' to 'isImchatSyncedBlk'
// - Renamed export 'gB' to 'blockHeaderTitleCfg'
// - Renamed export 'jO' to 'isCommentPartialOff'
// - Renamed export 'm0' to 'isBlockMenuDisabled'
// - Renamed export 'q6' to 'isToolbarForwardOff'
// - Renamed export 'rS' to 'getContentMargin'
// - Renamed export 'tl' to 'isContentMarginOn'
// - Renamed export 'u7' to 'isContentCoverOff'
// - Renamed export 'uE' to 'isCalendarAgenda'
// - Renamed export 'ur' to 'isBlockShareOff'
// - Renamed export 'y1' to 'isFullscreenEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 475581
         */
module.exports = function (module, exports, require) {
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  var docComponentConfigUtils = require("doc-component-config-utils") /*id: 123085*/;
  var boolDefaultUtil = require("bool-default-util") /*id: 87573*/;
  let u = typeof window != "undefined" ? docComponentConfigUtils.getDocComponentConfig : () => ({});
  let c = () => u("extensions.comment.partial.disable");
  let _ = () => u("extensions.comment.partial.disableExpandState");
  let l = () => u("extensions.content.fold.hideFold");
  let s = () => u("extensions.fullscreenOpen.enable");
  let E = () => u("extensions.blockHeader.title", {});
  let d = () => u("extensions.blockHeader.margin");
  let T = () => u("extensions.blockHeader.padding");
  let p = () => browserEnvDetectionUtil.browserDetector.isDocComponent() && u("extensions.content.cover.disable");
  function S() {
    return browserEnvDetectionUtil.browserDetector.getDocComponent().docAppId === browserEnvDetectionUtil.componentTypes.ROOMS_AGENDA;
  }
  let f = () => browserEnvDetectionUtil.browserDetector.getDocComponent().docAppId === browserEnvDetectionUtil.componentTypes.VC_AGENDA;
  let A = () => browserEnvDetectionUtil.browserDetector.getDocComponent().docAppId === browserEnvDetectionUtil.componentTypes.CALENDAR_AGENDA;
  let m = e => browserEnvDetectionUtil.browserDetector.getDocComponent().docAppId === e;
  let I = () => m(browserEnvDetectionUtil.componentTypes.IMCHAT_SYNCEDBLOCK);
  let O = () => browserEnvDetectionUtil.browserDetector.isFromGroup(undefined, undefined);
  let R = () => u("extensions.content.margin.enable");
  let h = e => u(`extensions.content.margin.${e}`) || 0;
  let N = () => u("extensions.template.bottomTemplate.disable");
  let C = () => u("extensions.title.disable");
  let D = () => u("extensions.blockMenu.disable");
  let L = () => u("extensions.docInfo.disable");
  let b = e => {
    let r = boolDefaultUtil.getDefaultBool(e, window.local?.localhost) || /mem_perf=true/.test(location.search);
    return I() && r;
  };
  let g = () => b("ccm.docx.syncedblock_at_im_mem_optimize");
  let P = () => b("ccm.docx.syncedblock_at_im_mem_optimize_3");
  let M = () => u("extensions.toolbar.blockShare.disable");
  let v = () => u("extensions.toolbar.forward.disable");
  require.d(exports, {
    blockHeaderPadding: function () {
      return T;
    },
    blockHeaderMargin: function () {
      return d;
    },
    isDocInfoDisabled: function () {
      return L;
    },
    isFromGroup: function () {
      return O;
    },
    isTitleDisabled: function () {
      return C;
    },
    isSyncedBlockOpt3: function () {
      return P;
    },
    isBottomTplDisabled: function () {
      return N;
    },
    isSyncedBlockOpt: function () {
      return g;
    },
    isContentFoldHidden: function () {
      return l;
    },
    isRoomsAgenda: function () {
      return S;
    },
    isVcAgenda: function () {
      return f;
    },
    isCommentExpandOff: function () {
      return _;
    },
    isImchatSyncedBlk: function () {
      return I;
    },
    blockHeaderTitleCfg: function () {
      return E;
    },
    isCommentPartialOff: function () {
      return c;
    },
    isBlockMenuDisabled: function () {
      return D;
    },
    isToolbarForwardOff: function () {
      return v;
    },
    getContentMargin: function () {
      return h;
    },
    isContentMarginOn: function () {
      return R;
    },
    isContentCoverOff: function () {
      return p;
    },
    isCalendarAgenda: function () {
      return A;
    },
    isBlockShareOff: function () {
      return M;
    },
    isFullscreenEnabled: function () {
      return s;
    }
  });
}