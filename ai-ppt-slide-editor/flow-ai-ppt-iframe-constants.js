// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'fG' to 'iframeChannelId'
// - Renamed export 'fl' to 'apiMethodNames'
// - Renamed export 'jZ' to 'pptActionTypes'
// - Renamed export 'zW' to 'uiEventNames'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58943.d2e657c6.js
         * chunkId: 58943
         * moduleId: 625035
         */
module.exports = function (module, exports, require) {
  var r;
  var n;
  var a;
  let l = "flow-ai-ppt-iframe-channel";
  (r = {}).Event = "event";
  r.getSlidesTitle = "getSlidesTitle";
  r.openFindReplacePanel = "openFindReplacePanel";
  r.exportPDF = "exportPDF";
  r.exportPPTX = "exportPPTX";
  r.openFontReplacePanel = "openFontReplacePanel";
  r.openHistoryList = "openHistoryList";
  r.startPlayFromCurrentPage = "startPlayFromCurrentPage";
  r.presentationFromBeginning = "presentationFromBeginning";
  r.toggleDarkMode = "toggleDarkMode";
  r.revertHistory = "revertHistory";
  r.historyCloseList = "historyCloseList";
  r.historyPlayNextDiff = "historyPlayNextDiff";
  r.historyPlayPrevDiff = "historyPlayPrevDiff";
  r.switchReadonlyMode = "switchReadonlyMode";
  r.getSelectedPositions = "getSelectedPositions";
  r.getStructureVersion = "getStructureVersion";
  r.getCurrentMinorVersion = "getCurrentMinorVersion";
  r.getCurrentVersionCreateTime = "getCurrentVersionCreateTime";
  r.handleReplaceImage = "handleReplaceImage";
  r.forceHideToolbox = "forceHideToolbox";
  r.clearForceHideToolbox = "clearForceHideToolbox";
  r.getElementReportParams = "getElementReportParams";
  r.getSelectedImageToken = "getSelectedImageToken";
  let s = r;
  (n = {}).onHistoryUIStateChange = "onHistoryUIStateChange";
  n.onHistoryShouldShowRecover = "onHistoryShouldShowRecover";
  n.onHistoryDisabledRecover = "onHistoryDisabledRecover";
  n.onHistoryDiffCount = "onHistoryDiffCount";
  n.onHistoryDiffIndex = "onHistoryDiffIndex";
  n.onHistoryShouldShowPlayer = "onHistoryShouldShowPlayer";
  n.onDocumentMetaChange = "onDocumentMetaChange";
  n.onMouseUpOutside = "onIframeMouseUp";
  n.onMouseDownOutside = "onIframeMouseDown";
  n.onThemeChange = "onThemeChange";
  n.onH5HeaderShowChange = "onH5HeaderShowChange";
  n.onDisabledEnterPresentation = "onDisabledEnterPresentation";
  n.onExitWideScreen = "onExitWideScreen";
  n.onActiveSlideChange = "onActiveSlideChange";
  n.onAIEditPage = "onAIEditPage";
  let o = n;
  (a = {}).Event = "event";
  a.getTmplConf = "getTmplConf";
  a.loadConfig = "loadConfig";
  a.searchPPTImages = "searchPPTImages";
  a.genPPTImages = "genPPTImages";
  a.getAuthHeadersAsync = "getAuthHeadersAsync";
  a.trackEvent = "trackEvent";
  a.persistLog = "persistLog";
  a.getSlardarContext = "getSlardarContext";
  a.sendMessage = "sendMessage";
  a.createIntelligentEditMessage = "createIntelligentEditMessage";
  a.permissionChangeToNopermission = "permissionChangeToNopermission";
  a.getTrackCommonParams = "getTrackCommonParams";
  a.getMessageId = "getMessageId";
  a.getRootTheme = "getRootTheme";
  a.openSelectBar = "openSelectBar";
  a.showToast = "showToast";
  a.hideToast = "hideToast";
  a.getPolicyEnv = "getPolicyEnv";
  a.getFGConfig = "getFGConfig";
  let d = a;
  require.d(exports, {
    iframeChannelId: function () {
      return l;
    },
    apiMethodNames: function () {
      return d;
    },
    pptActionTypes: function () {
      return s;
    },
    uiEventNames: function () {
      return o;
    }
  });
}