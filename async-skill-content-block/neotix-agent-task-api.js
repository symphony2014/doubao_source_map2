// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'agentTaskApi'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 971950
         */
module.exports = function (module, exports, require) {
  var l;
  var shellApiLoggingUtils = require("shell-api-logging-utils") /*id: 191846*/;
  let o = typeof globalThis != "undefined" && (l = globalThis.neotix) !== null && l !== undefined ? l : {};
  let a = typeof window != "undefined" ? window.neotix?.agentTask : o == null ? undefined : o.agentTask;
  let s = {
    createWindow: shellApiLoggingUtils.wrapWithLogging(async () => await (a == null ? undefined : a.createWindow()), "neotix.agentTask.createWindow"),
    createAgentTask: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.createAgentTask(e)), "neotix.agentTask.createAgentTask"),
    agentNavigate: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.agentNavigate(e)), "neotix.agentTask.agentNavigate"),
    getOffscreenView: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.getOffscreenView(e)), "neotix.agentTask.getOffscreenView"),
    getLastOffscreenView: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.getLastOffscreenView(e)), "neotix.agentTask.getLastOffscreenView"),
    getAllOffscreenView: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.getAllOffscreenView(e)), "neotix.agentTask.getAllOffscreenView"),
    reloadOffscreenView: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.reloadOffscreenView(e)), "neotix.agentTask.reloadOffscreenView"),
    closeOffscreenView: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.closeOffscreenView(e)), "neotix.agentTask.closeOffscreenView"),
    agentTaskDone: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.agentTaskDone(e)), "neotix.agentTask.agentTaskDone"),
    closeAgentTask: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.closeAgentTask(e)), "neotix.agentTask.closeAgentTask"),
    getAllAgentTask: shellApiLoggingUtils.wrapWithLogging(async () => await (a == null ? undefined : a.getAllAgentTask()), "neotix.agentTask.getAllAgentTask"),
    showOffscreenView: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.showOffscreenView(e)), "neotix.agentTask.showOffscreenView"),
    showResultView: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.showResultView(e)), "neotix.agentTask.showResultView"),
    activeAndReloadChatView: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.activeAndReloadChatView(e)), "neotix.agentTask.activeAndReloadChatView"),
    switchOffscreenDisplay: shellApiLoggingUtils.wrapWithLogging(async () => await (a == null ? undefined : a.switchOffscreenDisplay()), "neotix.agentTask.switchOffscreenDisplay"),
    hideOffscreenView: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.hideOffscreenView(e)), "neotix.agentTask.hideOffscreenView"),
    sendCDPMessage: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.sendCDPMessage(e)), "neotix.agentTask.sendCDPMessage"),
    getAgentTaskTabInfo: shellApiLoggingUtils.wrapWithLogging(async () => await (a == null ? undefined : a.getAgentTaskTabInfo()), "neotix.agentTask.getAgentTaskTabInfo"),
    getAgentTaskDownloadInfo: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.getAgentTaskDownloadInfo(e)), "neotix.agentTask.getAgentTaskDownloadInfo"),
    openDownloadDir: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.openDownloadDir(e)), "neotix.agentTask.openDownloadDir"),
    renameDownloadFile: shellApiLoggingUtils.wrapWithLogging(async e => await (a == null ? undefined : a.renameDownloadFile(e)), "neotix.agentTask.renameDownloadFile")
  };
  shellApiLoggingUtils.wrapApiHandler(async () => await (a == null ? undefined : a.createWindow()), "neotix.agentTask.createWindow");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.createAgentTask(e)), "neotix.agentTask.createAgentTask");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.agentNavigate(e)), "neotix.agentTask.agentNavigate");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.getOffscreenView(e)), "neotix.agentTask.getOffscreenView");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.getLastOffscreenView(e)), "neotix.agentTask.getLastOffscreenView");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.getAllOffscreenView(e)), "neotix.agentTask.getAllOffscreenView");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.reloadOffscreenView(e)), "neotix.agentTask.reloadOffscreenView");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.closeOffscreenView(e)), "neotix.agentTask.closeOffscreenView");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.agentTaskDone(e)), "neotix.agentTask.agentTaskDone");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.closeAgentTask(e)), "neotix.agentTask.closeAgentTask");
  shellApiLoggingUtils.wrapApiHandler(async () => await (a == null ? undefined : a.getAllAgentTask()), "neotix.agentTask.getAllAgentTask");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.showOffscreenView(e)), "neotix.agentTask.showOffscreenView");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.showResultView(e)), "neotix.agentTask.showResultView");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.activeAndReloadChatView(e)), "neotix.agentTask.activeAndReloadChatView");
  shellApiLoggingUtils.wrapApiHandler(async () => await (a == null ? undefined : a.switchOffscreenDisplay()), "neotix.agentTask.switchOffscreenDisplay");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.hideOffscreenView(e)), "neotix.agentTask.hideOffscreenView");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.sendCDPMessage(e)), "neotix.agentTask.sendCDPMessage");
  shellApiLoggingUtils.wrapApiHandler(async () => await (a == null ? undefined : a.getAgentTaskTabInfo()), "neotix.agentTask.getAgentTaskTabInfo");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.getAgentTaskDownloadInfo(e)), "neotix.agentTask.getAgentTaskDownloadInfo");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.openDownloadDir(e)), "neotix.agentTask.openDownloadDir");
  shellApiLoggingUtils.wrapApiHandler(async e => await (a == null ? undefined : a.renameDownloadFile(e)), "neotix.agentTask.renameDownloadFile");
  require.d(exports, {
    agentTaskApi: function () {
      return s;
    }
  });
}