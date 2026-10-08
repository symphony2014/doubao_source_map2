// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'popupViewApi'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 740037
         */
module.exports = function (module, exports, require) {
  var l;
  var shellApiLoggingUtils = require("shell-api-logging-utils") /*id: 191846*/;
  let o = typeof globalThis != "undefined" && (l = globalThis.neotix) !== null && l !== undefined ? l : {};
  let a = typeof window != "undefined" ? window.neotix?.popupView : o == null ? undefined : o.popupView;
  let s = {
    addViewSize: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.addViewSize(e)), "neotix.popupView.addViewSize"),
    setViewSize: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.setViewSize(e)), "neotix.popupView.setViewSize"),
    closeView: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.closeView(e)), "neotix.popupView.closeView"),
    closeViewWithParams: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.closeViewWithParams(e)), "neotix.popupView.closeViewWithParams"),
    minimizeView: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.minimizeView(e)), "neotix.popupView.minimizeView"),
    showView: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.showView(e)), "neotix.popupView.showView"),
    hideView: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.hideView(e)), "neotix.popupView.hideView"),
    setDragAreas: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.setDragAreas(e)), "neotix.popupView.setDragAreas"),
    setConfig: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.setConfig(e)), "neotix.popupView.setConfig"),
    extendViewSize: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.extendViewSize(e)), "neotix.popupView.extendViewSize"),
    setIgnoresMouseEvents: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.setIgnoresMouseEvents(e)), "neotix.popupView.setIgnoresMouseEvents"),
    enableDisableResize: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.enableDisableResize(e)), "neotix.popupView.enableDisableResize"),
    setZOrder: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.setZOrder(e)), "neotix.popupView.setZOrder"),
    activate: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.activate(e)), "neotix.popupView.activate"),
    popupWebView: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.popupWebView(e)), "neotix.popupView.popupWebView"),
    getWebContentsToken: shellApiLoggingUtils.wrapWithLogging(async () => await (a == null ? undefined : a.getWebContentsToken()), "neotix.popupView.getWebContentsToken"),
    getViewBounds: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.getViewBounds(e)), "neotix.popupView.getViewBounds"),
    getViewBoundsInScreenById: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.getViewBoundsInScreenById(e)), "neotix.popupView.getViewBoundsInScreenById"),
    preloadWebContents: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.preloadWebContents(e)), "neotix.popupView.preloadWebContents"),
    getBorder: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.getBorder(e)), "neotix.popupView.getBorder"),
    getCommonPopupInfo: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.getCommonPopupInfo(e)), "neotix.popupView.getCommonPopupInfo"),
    getCommonPopupInfoByViewID: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.getCommonPopupInfoByViewID(e)), "neotix.popupView.getCommonPopupInfoByViewID")
  };
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.addViewSize(e)), "neotix.popupView.addViewSize");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.setViewSize(e)), "neotix.popupView.setViewSize");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.closeView(e)), "neotix.popupView.closeView");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.closeViewWithParams(e)), "neotix.popupView.closeViewWithParams");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.minimizeView(e)), "neotix.popupView.minimizeView");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.showView(e)), "neotix.popupView.showView");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.hideView(e)), "neotix.popupView.hideView");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.setDragAreas(e)), "neotix.popupView.setDragAreas");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.setConfig(e)), "neotix.popupView.setConfig");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.extendViewSize(e)), "neotix.popupView.extendViewSize");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.setIgnoresMouseEvents(e)), "neotix.popupView.setIgnoresMouseEvents");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.enableDisableResize(e)), "neotix.popupView.enableDisableResize");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.setZOrder(e)), "neotix.popupView.setZOrder");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.activate(e)), "neotix.popupView.activate");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.popupWebView(e)), "neotix.popupView.popupWebView");
  shellApiLoggingUtils.wrapApiHandler(async () => await (a == null ? undefined : a.getWebContentsToken()), "neotix.popupView.getWebContentsToken");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.getViewBounds(e)), "neotix.popupView.getViewBounds");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.getViewBoundsInScreenById(e)), "neotix.popupView.getViewBoundsInScreenById");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.preloadWebContents(e)), "neotix.popupView.preloadWebContents");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.getBorder(e)), "neotix.popupView.getBorder");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.getCommonPopupInfo(e)), "neotix.popupView.getCommonPopupInfo");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.getCommonPopupInfoByViewID(e)), "neotix.popupView.getCommonPopupInfoByViewID");
  require.d(exports, {
    popupViewApi: function () {
      return s;
    }
  });
}