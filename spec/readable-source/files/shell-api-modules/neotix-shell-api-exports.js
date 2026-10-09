// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'B' to 'neotixChannelService'
// - Resolved require(872542) to 'neotix-channel-service'
// - Renamed variable '_' to 'neotixAgentTaskApi'
// - Resolved require(971950) to 'neotix-agent-task-api'
// - Renamed variable 'N' to 'shellApiLoggingUtils'
// - Resolved require(191846) to 'shell-api-logging-utils'
// - Renamed variable 'ep' to 'neotixPinWindowApiWrapper'
// - Resolved require(774214) to 'neotix-pin-window-api-wrapper'
// - Renamed variable 'ey' to 'runtimeStorageWrapper'
// - Resolved require(950108) to 'runtime-storage-wrapper'
// - Updated imported property 'H' to 'runtimeStorageApi' (module 950108)
// - Updated imported property 'n' to 'NeotixChannel' (module 872542)
// - Updated imported property 'g' to 'pinWindowApi' (module 774214)
// - Updated imported property 's' to 'agentTaskApi' (module 971950)
// - Updated imported property 'E' to 'wrapWithLogging' (module 191846)
// - Updated imported property 'v' to 'wrapApiHandler' (module 191846)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63486.d9be366f.js
         * chunkId: 63486
         * moduleId: 856113
         */
module.exports = function (module, exports, require) {
  var a;
  var l;
  var r;
  var u;
  var w;
  var g;
  var y;
  var h;
  var S;
  var b;
  var k;
  var A;
  var W;
  var L;
  var P;
  var V;
  var O;
  var M;
  var neotixChannelService = require("neotix-channel-service") /*id: 872542*/;
  var neotixAgentTaskApi = require("neotix-agent-task-api") /*id: 971950*/;
  var shellApiLoggingUtils = require("shell-api-logging-utils") /*id: 191846*/;
  let G = typeof globalThis != "undefined" && (a = globalThis.neotix) !== null && a !== undefined ? a : {};
  let H = typeof window != "undefined" ? window.neotix?.audioCapture : G == null ? undefined : G.audioCapture;
  let z = {
    createWindow: shellApiLoggingUtils.wrapWithLogging(async e => await (H == null ? undefined : H.createWindow(e)), "neotix.audioCapture.createWindow"),
    closeWindow: shellApiLoggingUtils.wrapWithLogging(async e => await (H == null ? undefined : H.closeWindow(e)), "neotix.audioCapture.closeWindow"),
    minimizeWindow: shellApiLoggingUtils.wrapWithLogging(async e => await (H == null ? undefined : H.minimizeWindow(e)), "neotix.audioCapture.minimizeWindow"),
    restoreWindow: shellApiLoggingUtils.wrapWithLogging(async e => await (H == null ? undefined : H.restoreWindow(e)), "neotix.audioCapture.restoreWindow"),
    hideWindow: shellApiLoggingUtils.wrapWithLogging(async e => await (H == null ? undefined : H.hideWindow(e)), "neotix.audioCapture.hideWindow"),
    showWindow: shellApiLoggingUtils.wrapWithLogging(async e => await (H == null ? undefined : H.showWindow(e)), "neotix.audioCapture.showWindow"),
    captureStart: shellApiLoggingUtils.wrapWithLogging(async e => await (H == null ? undefined : H.captureStart(e)), "neotix.audioCapture.captureStart"),
    capturePause: shellApiLoggingUtils.wrapWithLogging(async e => await (H == null ? undefined : H.capturePause(e)), "neotix.audioCapture.capturePause"),
    captureResume: shellApiLoggingUtils.wrapWithLogging(async e => await (H == null ? undefined : H.captureResume(e)), "neotix.audioCapture.captureResume"),
    captureStop: shellApiLoggingUtils.wrapWithLogging(async e => await (H == null ? undefined : H.captureStop(e)), "neotix.audioCapture.captureStop"),
    uploadComplete: shellApiLoggingUtils.wrapWithLogging(async e => await (H == null ? undefined : H.uploadComplete(e)), "neotix.audioCapture.uploadComplete"),
    uploadCancle: shellApiLoggingUtils.wrapWithLogging(async e => await (H == null ? undefined : H.uploadCancle(e)), "neotix.audioCapture.uploadCancle"),
    uploadRetry: shellApiLoggingUtils.wrapWithLogging(async e => await (H == null ? undefined : H.uploadRetry(e)), "neotix.audioCapture.uploadRetry"),
    readCurrentAudioData: shellApiLoggingUtils.wrapWithLogging(async () => await (H == null ? undefined : H.readCurrentAudioData()), "neotix.audioCapture.readCurrentAudioData"),
    getAudioCaptureAutoActiveGlobalEnable: shellApiLoggingUtils.wrapWithLogging(async () => await (H == null ? undefined : H.getAudioCaptureAutoActiveGlobalEnable()), "neotix.audioCapture.getAudioCaptureAutoActiveGlobalEnable"),
    setAudioCaptureAutoActiveGlobalEnable: shellApiLoggingUtils.wrapWithLogging(async e => await (H == null ? undefined : H.setAudioCaptureAutoActiveGlobalEnable(e)), "neotix.audioCapture.setAudioCaptureAutoActiveGlobalEnable"),
    captureAudio: shellApiLoggingUtils.wrapWithLogging(async e => await (H == null ? undefined : H.captureAudio(e)), "neotix.audioCapture.captureAudio"),
    getWavInfo: shellApiLoggingUtils.wrapWithLogging(async () => await (H == null ? undefined : H.getWavInfo()), "neotix.audioCapture.getWavInfo")
  };
  shellApiLoggingUtils.wrapApiHandler(async e => await (H == null ? undefined : H.createWindow(e)), "neotix.audioCapture.createWindow");
  shellApiLoggingUtils.wrapApiHandler(async e => await (H == null ? undefined : H.closeWindow(e)), "neotix.audioCapture.closeWindow");
  shellApiLoggingUtils.wrapApiHandler(async e => await (H == null ? undefined : H.minimizeWindow(e)), "neotix.audioCapture.minimizeWindow");
  shellApiLoggingUtils.wrapApiHandler(async e => await (H == null ? undefined : H.restoreWindow(e)), "neotix.audioCapture.restoreWindow");
  shellApiLoggingUtils.wrapApiHandler(async e => await (H == null ? undefined : H.hideWindow(e)), "neotix.audioCapture.hideWindow");
  shellApiLoggingUtils.wrapApiHandler(async e => await (H == null ? undefined : H.showWindow(e)), "neotix.audioCapture.showWindow");
  shellApiLoggingUtils.wrapApiHandler(async e => await (H == null ? undefined : H.captureStart(e)), "neotix.audioCapture.captureStart");
  shellApiLoggingUtils.wrapApiHandler(async e => await (H == null ? undefined : H.capturePause(e)), "neotix.audioCapture.capturePause");
  shellApiLoggingUtils.wrapApiHandler(async e => await (H == null ? undefined : H.captureResume(e)), "neotix.audioCapture.captureResume");
  shellApiLoggingUtils.wrapApiHandler(async e => await (H == null ? undefined : H.captureStop(e)), "neotix.audioCapture.captureStop");
  shellApiLoggingUtils.wrapApiHandler(async e => await (H == null ? undefined : H.uploadComplete(e)), "neotix.audioCapture.uploadComplete");
  shellApiLoggingUtils.wrapApiHandler(async e => await (H == null ? undefined : H.uploadCancle(e)), "neotix.audioCapture.uploadCancle");
  shellApiLoggingUtils.wrapApiHandler(async e => await (H == null ? undefined : H.uploadRetry(e)), "neotix.audioCapture.uploadRetry");
  shellApiLoggingUtils.wrapApiHandler(async () => await (H == null ? undefined : H.readCurrentAudioData()), "neotix.audioCapture.readCurrentAudioData");
  shellApiLoggingUtils.wrapApiHandler(async () => await (H == null ? undefined : H.getAudioCaptureAutoActiveGlobalEnable()), "neotix.audioCapture.getAudioCaptureAutoActiveGlobalEnable");
  shellApiLoggingUtils.wrapApiHandler(async e => await (H == null ? undefined : H.setAudioCaptureAutoActiveGlobalEnable(e)), "neotix.audioCapture.setAudioCaptureAutoActiveGlobalEnable");
  shellApiLoggingUtils.wrapApiHandler(async e => await (H == null ? undefined : H.captureAudio(e)), "neotix.audioCapture.captureAudio");
  shellApiLoggingUtils.wrapApiHandler(async () => await (H == null ? undefined : H.getWavInfo()), "neotix.audioCapture.getWavInfo");
  let q = typeof globalThis != "undefined" && (l = globalThis.neotix) !== null && l !== undefined ? l : {};
  let K = typeof window != "undefined" ? window.neotix?.browserWindow : q == null ? undefined : q.browserWindow;
  let j = {
    temporarilyDisableNonGlobalShortcuts: shellApiLoggingUtils.wrapWithLogging(async e => await (K == null ? undefined : K.temporarilyDisableNonGlobalShortcuts(e)), "neotix.browserWindow.temporarilyDisableNonGlobalShortcuts"),
    popupLoginWindow: shellApiLoggingUtils.wrapWithLogging(async e => await (K == null ? undefined : K.popupLoginWindow(e)), "neotix.browserWindow.popupLoginWindow"),
    resizeLoginWindow: shellApiLoggingUtils.wrapWithLogging(async e => await (K == null ? undefined : K.resizeLoginWindow(e)), "neotix.browserWindow.resizeLoginWindow"),
    setLoginWindowIgnoreResize: shellApiLoggingUtils.wrapWithLogging(async e => await (K == null ? undefined : K.setLoginWindowIgnoreResize(e)), "neotix.browserWindow.setLoginWindowIgnoreResize"),
    updateLoginWindowConfig: shellApiLoggingUtils.wrapWithLogging(async e => await (K == null ? undefined : K.updateLoginWindowConfig(e)), "neotix.browserWindow.updateLoginWindowConfig"),
    closeLoginWindow: shellApiLoggingUtils.wrapWithLogging(async () => await (K == null ? undefined : K.closeLoginWindow()), "neotix.browserWindow.closeLoginWindow"),
    popupMaskView: shellApiLoggingUtils.wrapWithLogging(async e => await (K == null ? undefined : K.popupMaskView(e)), "neotix.browserWindow.popupMaskView"),
    closeMaskView: shellApiLoggingUtils.wrapWithLogging(async e => await (K == null ? undefined : K.closeMaskView(e)), "neotix.browserWindow.closeMaskView"),
    getCurrentWindowMaskViewInfo: shellApiLoggingUtils.wrapWithLogging(async () => await (K == null ? undefined : K.getCurrentWindowMaskViewInfo()), "neotix.browserWindow.getCurrentWindowMaskViewInfo")
  };
  shellApiLoggingUtils.wrapApiHandler(async e => await (K == null ? undefined : K.temporarilyDisableNonGlobalShortcuts(e)), "neotix.browserWindow.temporarilyDisableNonGlobalShortcuts");
  shellApiLoggingUtils.wrapApiHandler(async e => await (K == null ? undefined : K.popupLoginWindow(e)), "neotix.browserWindow.popupLoginWindow");
  shellApiLoggingUtils.wrapApiHandler(async e => await (K == null ? undefined : K.resizeLoginWindow(e)), "neotix.browserWindow.resizeLoginWindow");
  shellApiLoggingUtils.wrapApiHandler(async e => await (K == null ? undefined : K.setLoginWindowIgnoreResize(e)), "neotix.browserWindow.setLoginWindowIgnoreResize");
  shellApiLoggingUtils.wrapApiHandler(async e => await (K == null ? undefined : K.updateLoginWindowConfig(e)), "neotix.browserWindow.updateLoginWindowConfig");
  shellApiLoggingUtils.wrapApiHandler(async () => await (K == null ? undefined : K.closeLoginWindow()), "neotix.browserWindow.closeLoginWindow");
  shellApiLoggingUtils.wrapApiHandler(async e => await (K == null ? undefined : K.popupMaskView(e)), "neotix.browserWindow.popupMaskView");
  shellApiLoggingUtils.wrapApiHandler(async e => await (K == null ? undefined : K.closeMaskView(e)), "neotix.browserWindow.closeMaskView");
  shellApiLoggingUtils.wrapApiHandler(async () => await (K == null ? undefined : K.getCurrentWindowMaskViewInfo()), "neotix.browserWindow.getCurrentWindowMaskViewInfo");
  let J = typeof globalThis != "undefined" && (r = globalThis.neotix) !== null && r !== undefined ? r : {};
  let Q = typeof window != "undefined" ? window.neotix?.browserSettings : J == null ? undefined : J.browserSettings;
  let X = {
    getUserSelectedSearchEngine: shellApiLoggingUtils.wrapWithLogging(async () => await (Q == null ? undefined : Q.getUserSelectedSearchEngine()), "neotix.browserSettings.getUserSelectedSearchEngine"),
    getDefaultSearchEngineInfo: shellApiLoggingUtils.wrapWithLogging(async () => await (Q == null ? undefined : Q.getDefaultSearchEngineInfo()), "neotix.browserSettings.getDefaultSearchEngineInfo"),
    setUserSelectedSearchEngine: shellApiLoggingUtils.wrapWithLogging(async e => await (Q == null ? undefined : Q.setUserSelectedSearchEngine(e)), "neotix.browserSettings.setUserSelectedSearchEngine"),
    getApplicationLocale: shellApiLoggingUtils.wrapWithLogging(async () => await (Q == null ? undefined : Q.getApplicationLocale()), "neotix.browserSettings.getApplicationLocale"),
    setApplicationLocale: shellApiLoggingUtils.wrapWithLogging(async e => await (Q == null ? undefined : Q.setApplicationLocale(e)), "neotix.browserSettings.setApplicationLocale"),
    getApplicationAutoLaunch: shellApiLoggingUtils.wrapWithLogging(async () => await (Q == null ? undefined : Q.getApplicationAutoLaunch()), "neotix.browserSettings.getApplicationAutoLaunch"),
    setApplicationAutoLaunch: shellApiLoggingUtils.wrapWithLogging(async e => await (Q == null ? undefined : Q.setApplicationAutoLaunch(e)), "neotix.browserSettings.setApplicationAutoLaunch"),
    openBrowserSettingPage: shellApiLoggingUtils.wrapWithLogging(async () => await (Q == null ? undefined : Q.openBrowserSettingPage()), "neotix.browserSettings.openBrowserSettingPage"),
    clearCachesWithRelaunchApplication: shellApiLoggingUtils.wrapWithLogging(async () => await (Q == null ? undefined : Q.clearCachesWithRelaunchApplication()), "neotix.browserSettings.clearCachesWithRelaunchApplication"),
    getAiReaderTipsFlag: shellApiLoggingUtils.wrapWithLogging(async () => await (Q == null ? undefined : Q.getAiReaderTipsFlag()), "neotix.browserSettings.getAiReaderTipsFlag"),
    setAiReaderTipsFlag: shellApiLoggingUtils.wrapWithLogging(async e => await (Q == null ? undefined : Q.setAiReaderTipsFlag(e)), "neotix.browserSettings.setAiReaderTipsFlag"),
    getColorScheme: shellApiLoggingUtils.wrapWithLogging(async () => await (Q == null ? undefined : Q.getColorScheme()), "neotix.browserSettings.getColorScheme"),
    setColorScheme: shellApiLoggingUtils.wrapWithLogging(async e => await (Q == null ? undefined : Q.setColorScheme(e)), "neotix.browserSettings.setColorScheme"),
    getApplicationShortcutSettings: shellApiLoggingUtils.wrapWithLogging(async () => await (Q == null ? undefined : Q.getApplicationShortcutSettings()), "neotix.browserSettings.getApplicationShortcutSettings"),
    setApplicationShortcut: shellApiLoggingUtils.wrapWithLogging(async e => await (Q == null ? undefined : Q.setApplicationShortcut(e)), "neotix.browserSettings.setApplicationShortcut"),
    getApplicationShortcut: shellApiLoggingUtils.wrapWithLogging(async e => await (Q == null ? undefined : Q.getApplicationShortcut(e)), "neotix.browserSettings.getApplicationShortcut"),
    setEnableEmptyModuleUrl: shellApiLoggingUtils.wrapWithLogging(async e => await (Q == null ? undefined : Q.setEnableEmptyModuleUrl(e)), "neotix.browserSettings.setEnableEmptyModuleUrl"),
    getGeneralSettings: shellApiLoggingUtils.wrapWithLogging(async () => await (Q == null ? undefined : Q.getGeneralSettings()), "neotix.browserSettings.getGeneralSettings"),
    setGeneralSettings: shellApiLoggingUtils.wrapWithLogging(async e => await (Q == null ? undefined : Q.setGeneralSettings(e)), "neotix.browserSettings.setGeneralSettings"),
    getDownloadSettings: shellApiLoggingUtils.wrapWithLogging(async () => await (Q == null ? undefined : Q.getDownloadSettings()), "neotix.browserSettings.getDownloadSettings"),
    setDownloadSettings: shellApiLoggingUtils.wrapWithLogging(async e => await (Q == null ? undefined : Q.setDownloadSettings(e)), "neotix.browserSettings.setDownloadSettings")
  };
  shellApiLoggingUtils.wrapApiHandler(async () => await (Q == null ? undefined : Q.getUserSelectedSearchEngine()), "neotix.browserSettings.getUserSelectedSearchEngine");
  shellApiLoggingUtils.wrapApiHandler(async () => await (Q == null ? undefined : Q.getDefaultSearchEngineInfo()), "neotix.browserSettings.getDefaultSearchEngineInfo");
  shellApiLoggingUtils.wrapApiHandler(async e => await (Q == null ? undefined : Q.setUserSelectedSearchEngine(e)), "neotix.browserSettings.setUserSelectedSearchEngine");
  shellApiLoggingUtils.wrapApiHandler(async () => await (Q == null ? undefined : Q.getApplicationLocale()), "neotix.browserSettings.getApplicationLocale");
  shellApiLoggingUtils.wrapApiHandler(async e => await (Q == null ? undefined : Q.setApplicationLocale(e)), "neotix.browserSettings.setApplicationLocale");
  shellApiLoggingUtils.wrapApiHandler(async () => await (Q == null ? undefined : Q.getApplicationAutoLaunch()), "neotix.browserSettings.getApplicationAutoLaunch");
  shellApiLoggingUtils.wrapApiHandler(async e => await (Q == null ? undefined : Q.setApplicationAutoLaunch(e)), "neotix.browserSettings.setApplicationAutoLaunch");
  shellApiLoggingUtils.wrapApiHandler(async () => await (Q == null ? undefined : Q.openBrowserSettingPage()), "neotix.browserSettings.openBrowserSettingPage");
  shellApiLoggingUtils.wrapApiHandler(async () => await (Q == null ? undefined : Q.clearCachesWithRelaunchApplication()), "neotix.browserSettings.clearCachesWithRelaunchApplication");
  shellApiLoggingUtils.wrapApiHandler(async () => await (Q == null ? undefined : Q.getAiReaderTipsFlag()), "neotix.browserSettings.getAiReaderTipsFlag");
  shellApiLoggingUtils.wrapApiHandler(async e => await (Q == null ? undefined : Q.setAiReaderTipsFlag(e)), "neotix.browserSettings.setAiReaderTipsFlag");
  shellApiLoggingUtils.wrapApiHandler(async () => await (Q == null ? undefined : Q.getColorScheme()), "neotix.browserSettings.getColorScheme");
  shellApiLoggingUtils.wrapApiHandler(async e => await (Q == null ? undefined : Q.setColorScheme(e)), "neotix.browserSettings.setColorScheme");
  shellApiLoggingUtils.wrapApiHandler(async () => await (Q == null ? undefined : Q.getApplicationShortcutSettings()), "neotix.browserSettings.getApplicationShortcutSettings");
  shellApiLoggingUtils.wrapApiHandler(async e => await (Q == null ? undefined : Q.setApplicationShortcut(e)), "neotix.browserSettings.setApplicationShortcut");
  shellApiLoggingUtils.wrapApiHandler(async e => await (Q == null ? undefined : Q.getApplicationShortcut(e)), "neotix.browserSettings.getApplicationShortcut");
  shellApiLoggingUtils.wrapApiHandler(async e => await (Q == null ? undefined : Q.setEnableEmptyModuleUrl(e)), "neotix.browserSettings.setEnableEmptyModuleUrl");
  shellApiLoggingUtils.wrapApiHandler(async () => await (Q == null ? undefined : Q.getGeneralSettings()), "neotix.browserSettings.getGeneralSettings");
  shellApiLoggingUtils.wrapApiHandler(async e => await (Q == null ? undefined : Q.setGeneralSettings(e)), "neotix.browserSettings.setGeneralSettings");
  shellApiLoggingUtils.wrapApiHandler(async () => await (Q == null ? undefined : Q.getDownloadSettings()), "neotix.browserSettings.getDownloadSettings");
  shellApiLoggingUtils.wrapApiHandler(async e => await (Q == null ? undefined : Q.setDownloadSettings(e)), "neotix.browserSettings.setDownloadSettings");
  let Y = typeof globalThis != "undefined" && (u = globalThis.neotix) !== null && u !== undefined ? u : {};
  let Z = typeof window != "undefined" ? window.neotix?.device : Y == null ? undefined : Y.device;
  let $ = {
    getDeviceInfo: shellApiLoggingUtils.wrapWithLogging(async () => await (Z == null ? undefined : Z.getDeviceInfo()), "neotix.device.getDeviceInfo")
  };
  shellApiLoggingUtils.wrapApiHandler(async () => await (Z == null ? undefined : Z.getDeviceInfo()), "neotix.device.getDeviceInfo");
  let ee = typeof globalThis != "undefined" && (w = globalThis.neotix) !== null && w !== undefined ? w : {};
  let ei = typeof window != "undefined" ? window.neotix?.cloudConfig : ee == null ? undefined : ee.cloudConfig;
  let en = {
    get: shellApiLoggingUtils.wrapWithLogging(async e => await (ei == null ? undefined : ei.get(e)), "neotix.cloudConfig.get"),
    get2: shellApiLoggingUtils.wrapWithLogging(async e => await (ei == null ? undefined : ei.get2(e)), "neotix.cloudConfig.get2"),
    setLocalOverrideConfig: shellApiLoggingUtils.wrapWithLogging(async e => await (ei == null ? undefined : ei.setLocalOverrideConfig(e)), "neotix.cloudConfig.setLocalOverrideConfig"),
    getRawLocalOverrideConfig: shellApiLoggingUtils.wrapWithLogging(async () => await (ei == null ? undefined : ei.getRawLocalOverrideConfig()), "neotix.cloudConfig.getRawLocalOverrideConfig"),
    getRawRemoteConfig: shellApiLoggingUtils.wrapWithLogging(async () => await (ei == null ? undefined : ei.getRawRemoteConfig()), "neotix.cloudConfig.getRawRemoteConfig")
  };
  shellApiLoggingUtils.wrapApiHandler(async e => await (ei == null ? undefined : ei.get(e)), "neotix.cloudConfig.get");
  shellApiLoggingUtils.wrapApiHandler(async e => await (ei == null ? undefined : ei.get2(e)), "neotix.cloudConfig.get2");
  shellApiLoggingUtils.wrapApiHandler(async e => await (ei == null ? undefined : ei.setLocalOverrideConfig(e)), "neotix.cloudConfig.setLocalOverrideConfig");
  shellApiLoggingUtils.wrapApiHandler(async () => await (ei == null ? undefined : ei.getRawLocalOverrideConfig()), "neotix.cloudConfig.getRawLocalOverrideConfig");
  shellApiLoggingUtils.wrapApiHandler(async () => await (ei == null ? undefined : ei.getRawRemoteConfig()), "neotix.cloudConfig.getRawRemoteConfig");
  let et = typeof globalThis != "undefined" && (g = globalThis.neotix) !== null && g !== undefined ? g : {};
  let ea = typeof window != "undefined" ? window.neotix?.defaultBrowser : et == null ? undefined : et.defaultBrowser;
  let eo = {
    requestDefaultBrowserState: shellApiLoggingUtils.wrapWithLogging(async () => await (ea == null ? undefined : ea.requestDefaultBrowserState()), "neotix.defaultBrowser.requestDefaultBrowserState"),
    setAsDefaultBrowser: shellApiLoggingUtils.wrapWithLogging(async () => await (ea == null ? undefined : ea.setAsDefaultBrowser()), "neotix.defaultBrowser.setAsDefaultBrowser"),
    onClosePrompt: shellApiLoggingUtils.wrapWithLogging(async () => await (ea == null ? undefined : ea.onClosePrompt()), "neotix.defaultBrowser.onClosePrompt")
  };
  shellApiLoggingUtils.wrapApiHandler(async () => await (ea == null ? undefined : ea.requestDefaultBrowserState()), "neotix.defaultBrowser.requestDefaultBrowserState");
  shellApiLoggingUtils.wrapApiHandler(async () => await (ea == null ? undefined : ea.setAsDefaultBrowser()), "neotix.defaultBrowser.setAsDefaultBrowser");
  shellApiLoggingUtils.wrapApiHandler(async () => await (ea == null ? undefined : ea.onClosePrompt()), "neotix.defaultBrowser.onClosePrompt");
  let el = typeof globalThis != "undefined" && (y = globalThis.neotix) !== null && y !== undefined ? y : {};
  let es = typeof window != "undefined" ? window.neotix?.fs : el == null ? undefined : el.fs;
  let er = {
    getFileUrls: shellApiLoggingUtils.wrapWithLogging(async e => await (es == null ? undefined : es.getFileUrls(e)), "neotix.fs.getFileUrls"),
    openSelectFiles: shellApiLoggingUtils.wrapWithLogging(async e => await (es == null ? undefined : es.openSelectFiles(e)), "neotix.fs.openSelectFiles"),
    openSelectFolder: shellApiLoggingUtils.wrapWithLogging(async e => await (es == null ? undefined : es.openSelectFolder(e)), "neotix.fs.openSelectFolder"),
    getDragFileUrls: shellApiLoggingUtils.wrapWithLogging(async e => await (es == null ? undefined : es.getDragFileUrls(e)), "neotix.fs.getDragFileUrls"),
    getClipboardFileUrls: shellApiLoggingUtils.wrapWithLogging(async e => await (es == null ? undefined : es.getClipboardFileUrls(e)), "neotix.fs.getClipboardFileUrls"),
    canAccessFullDisk: shellApiLoggingUtils.wrapWithLogging(async e => await (es == null ? undefined : es.canAccessFullDisk(e)), "neotix.fs.canAccessFullDisk"),
    createLocalFileMapping: shellApiLoggingUtils.wrapWithLogging(async e => await (es == null ? undefined : es.createLocalFileMapping(e)), "neotix.fs.createLocalFileMapping"),
    openLocalFileMapping: shellApiLoggingUtils.wrapWithLogging(async e => await (es == null ? undefined : es.openLocalFileMapping(e)), "neotix.fs.openLocalFileMapping")
  };
  shellApiLoggingUtils.wrapApiHandler(async e => await (es == null ? undefined : es.getFileUrls(e)), "neotix.fs.getFileUrls");
  shellApiLoggingUtils.wrapApiHandler(async e => await (es == null ? undefined : es.openSelectFiles(e)), "neotix.fs.openSelectFiles");
  shellApiLoggingUtils.wrapApiHandler(async e => await (es == null ? undefined : es.openSelectFolder(e)), "neotix.fs.openSelectFolder");
  shellApiLoggingUtils.wrapApiHandler(async e => await (es == null ? undefined : es.getDragFileUrls(e)), "neotix.fs.getDragFileUrls");
  shellApiLoggingUtils.wrapApiHandler(async e => await (es == null ? undefined : es.getClipboardFileUrls(e)), "neotix.fs.getClipboardFileUrls");
  shellApiLoggingUtils.wrapApiHandler(async e => await (es == null ? undefined : es.canAccessFullDisk(e)), "neotix.fs.canAccessFullDisk");
  shellApiLoggingUtils.wrapApiHandler(async e => await (es == null ? undefined : es.createLocalFileMapping(e)), "neotix.fs.createLocalFileMapping");
  shellApiLoggingUtils.wrapApiHandler(async e => await (es == null ? undefined : es.openLocalFileMapping(e)), "neotix.fs.openLocalFileMapping");
  let ed = typeof globalThis != "undefined" && (h = globalThis.neotix) !== null && h !== undefined ? h : {};
  let eu = typeof window != "undefined" ? window.neotix?.localStorage : ed == null ? undefined : ed.localStorage;
  let ec = {
    set: shellApiLoggingUtils.wrapWithLogging(async e => await (eu == null ? undefined : eu.set(e)), "neotix.localStorage.set"),
    get: shellApiLoggingUtils.wrapWithLogging(async e => await (eu == null ? undefined : eu.get(e)), "neotix.localStorage.get")
  };
  shellApiLoggingUtils.wrapApiHandler(async e => await (eu == null ? undefined : eu.set(e)), "neotix.localStorage.set");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eu == null ? undefined : eu.get(e)), "neotix.localStorage.get");
  let ew = typeof globalThis != "undefined" && (S = globalThis.neotix) !== null && S !== undefined ? S : {};
  let ev = typeof window != "undefined" ? window.neotix?.preload : ew == null ? undefined : ew.preload;
  let eg = {
    isPreloading: shellApiLoggingUtils.wrapWithLogging(async () => await (ev == null ? undefined : ev.isPreloading()), "neotix.preload.isPreloading"),
    ready: shellApiLoggingUtils.wrapWithLogging(async () => await (ev == null ? undefined : ev.ready()), "neotix.preload.ready")
  };
  shellApiLoggingUtils.wrapApiHandler(async () => await (ev == null ? undefined : ev.isPreloading()), "neotix.preload.isPreloading");
  shellApiLoggingUtils.wrapApiHandler(async () => await (ev == null ? undefined : ev.ready()), "neotix.preload.ready");
  var neotixPinWindowApiWrapper = require("neotix-pin-window-api-wrapper") /*id: 774214*/;
  var runtimeStorageWrapper = require("runtime-storage-wrapper") /*id: 950108*/;
  let ef = typeof globalThis != "undefined" && (b = globalThis.neotix) !== null && b !== undefined ? b : {};
  let eh = typeof window != "undefined" ? window.neotix?.screenShare : ef == null ? undefined : ef.screenShare;
  let ex = {
    startShareInChat: shellApiLoggingUtils.wrapWithLogging(async () => await (eh == null ? undefined : eh.startShareInChat()), "neotix.screenShare.startShareInChat"),
    stopShareInChat: shellApiLoggingUtils.wrapWithLogging(async () => await (eh == null ? undefined : eh.stopShareInChat()), "neotix.screenShare.stopShareInChat"),
    startShareInLauncher: shellApiLoggingUtils.wrapWithLogging(async e => await (eh == null ? undefined : eh.startShareInLauncher(e)), "neotix.screenShare.startShareInLauncher"),
    stopShareInLauncher: shellApiLoggingUtils.wrapWithLogging(async () => await (eh == null ? undefined : eh.stopShareInLauncher()), "neotix.screenShare.stopShareInLauncher"),
    createShareChatWindow: shellApiLoggingUtils.wrapWithLogging(async e => await (eh == null ? undefined : eh.createShareChatWindow(e)), "neotix.screenShare.createShareChatWindow")
  };
  shellApiLoggingUtils.wrapApiHandler(async () => await (eh == null ? undefined : eh.startShareInChat()), "neotix.screenShare.startShareInChat");
  shellApiLoggingUtils.wrapApiHandler(async () => await (eh == null ? undefined : eh.stopShareInChat()), "neotix.screenShare.stopShareInChat");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eh == null ? undefined : eh.startShareInLauncher(e)), "neotix.screenShare.startShareInLauncher");
  shellApiLoggingUtils.wrapApiHandler(async () => await (eh == null ? undefined : eh.stopShareInLauncher()), "neotix.screenShare.stopShareInLauncher");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eh == null ? undefined : eh.createShareChatWindow(e)), "neotix.screenShare.createShareChatWindow");
  let eS = typeof globalThis != "undefined" && (k = globalThis.neotix) !== null && k !== undefined ? k : {};
  let em = typeof window != "undefined" ? window.neotix?.bookmarks : eS == null ? undefined : eS.bookmarks;
  let eb = {
    showBookmarkEditorDialog: shellApiLoggingUtils.wrapWithLogging(async e => await (em == null ? undefined : em.showBookmarkEditorDialog(e)), "neotix.bookmarks.showBookmarkEditorDialog"),
    showBookmarkShareDialog: shellApiLoggingUtils.wrapWithLogging(async e => await (em == null ? undefined : em.showBookmarkShareDialog(e)), "neotix.bookmarks.showBookmarkShareDialog"),
    create: shellApiLoggingUtils.wrapWithLogging(async e => await (em == null ? undefined : em.create(e)), "neotix.bookmarks.create"),
    search: shellApiLoggingUtils.wrapWithLogging(async e => await (em == null ? undefined : em.search(e)), "neotix.bookmarks.search"),
    update: shellApiLoggingUtils.wrapWithLogging(async e => await (em == null ? undefined : em.update(e)), "neotix.bookmarks.update"),
    get: shellApiLoggingUtils.wrapWithLogging(async e => await (em == null ? undefined : em.get(e)), "neotix.bookmarks.get"),
    getSubTree: shellApiLoggingUtils.wrapWithLogging(async e => await (em == null ? undefined : em.getSubTree(e)), "neotix.bookmarks.getSubTree"),
    remove: shellApiLoggingUtils.wrapWithLogging(async e => await (em == null ? undefined : em.remove(e)), "neotix.bookmarks.remove"),
    removeTree: shellApiLoggingUtils.wrapWithLogging(async e => await (em == null ? undefined : em.removeTree(e)), "neotix.bookmarks.removeTree"),
    move: shellApiLoggingUtils.wrapWithLogging(async e => await (em == null ? undefined : em.move(e)), "neotix.bookmarks.move"),
    getNotifyInfo: shellApiLoggingUtils.wrapWithLogging(async e => await (em == null ? undefined : em.getNotifyInfo(e)), "neotix.bookmarks.getNotifyInfo"),
    getFaviconPath: shellApiLoggingUtils.wrapWithLogging(async e => await (em == null ? undefined : em.getFaviconPath(e)), "neotix.bookmarks.getFaviconPath"),
    getSyncInfo: shellApiLoggingUtils.wrapWithLogging(async () => await (em == null ? undefined : em.getSyncInfo()), "neotix.bookmarks.getSyncInfo")
  };
  shellApiLoggingUtils.wrapApiHandler(async e => await (em == null ? undefined : em.showBookmarkEditorDialog(e)), "neotix.bookmarks.showBookmarkEditorDialog");
  shellApiLoggingUtils.wrapApiHandler(async e => await (em == null ? undefined : em.showBookmarkShareDialog(e)), "neotix.bookmarks.showBookmarkShareDialog");
  shellApiLoggingUtils.wrapApiHandler(async e => await (em == null ? undefined : em.create(e)), "neotix.bookmarks.create");
  shellApiLoggingUtils.wrapApiHandler(async e => await (em == null ? undefined : em.search(e)), "neotix.bookmarks.search");
  shellApiLoggingUtils.wrapApiHandler(async e => await (em == null ? undefined : em.update(e)), "neotix.bookmarks.update");
  shellApiLoggingUtils.wrapApiHandler(async e => await (em == null ? undefined : em.get(e)), "neotix.bookmarks.get");
  shellApiLoggingUtils.wrapApiHandler(async e => await (em == null ? undefined : em.getSubTree(e)), "neotix.bookmarks.getSubTree");
  shellApiLoggingUtils.wrapApiHandler(async e => await (em == null ? undefined : em.remove(e)), "neotix.bookmarks.remove");
  shellApiLoggingUtils.wrapApiHandler(async e => await (em == null ? undefined : em.removeTree(e)), "neotix.bookmarks.removeTree");
  shellApiLoggingUtils.wrapApiHandler(async e => await (em == null ? undefined : em.move(e)), "neotix.bookmarks.move");
  shellApiLoggingUtils.wrapApiHandler(async e => await (em == null ? undefined : em.getNotifyInfo(e)), "neotix.bookmarks.getNotifyInfo");
  shellApiLoggingUtils.wrapApiHandler(async e => await (em == null ? undefined : em.getFaviconPath(e)), "neotix.bookmarks.getFaviconPath");
  shellApiLoggingUtils.wrapApiHandler(async () => await (em == null ? undefined : em.getSyncInfo()), "neotix.bookmarks.getSyncInfo");
  let eC = typeof globalThis != "undefined" && (A = globalThis.neotix) !== null && A !== undefined ? A : {};
  let ek = typeof window != "undefined" ? window.neotix?.startupMetric : eC == null ? undefined : eC.startupMetric;
  let eE = {
    setWebviewStartupEvent: shellApiLoggingUtils.wrapWithLogging(async e => await (ek == null ? undefined : ek.setWebviewStartupEvent(e)), "neotix.startupMetric.setWebviewStartupEvent")
  };
  shellApiLoggingUtils.wrapApiHandler(async e => await (ek == null ? undefined : ek.setWebviewStartupEvent(e)), "neotix.startupMetric.setWebviewStartupEvent");
  let eA = typeof globalThis != "undefined" && (W = globalThis.neotix) !== null && W !== undefined ? W : {};
  let eT = typeof window != "undefined" ? window.neotix?.system : eA == null ? undefined : eA.system;
  let eW = {
    openSystemPermissionPanel: shellApiLoggingUtils.wrapWithLogging(async e => await (eT == null ? undefined : eT.openSystemPermissionPanel(e)), "neotix.system.openSystemPermissionPanel"),
    showPermissionPrompt: shellApiLoggingUtils.wrapWithLogging(async e => await (eT == null ? undefined : eT.showPermissionPrompt(e)), "neotix.system.showPermissionPrompt"),
    hidePermissionPrompt: shellApiLoggingUtils.wrapWithLogging(async e => await (eT == null ? undefined : eT.hidePermissionPrompt(e)), "neotix.system.hidePermissionPrompt"),
    hasSystemPermission: shellApiLoggingUtils.wrapWithLogging(async e => await (eT == null ? undefined : eT.hasSystemPermission(e)), "neotix.system.hasSystemPermission"),
    getMediaDeviceAuthStatus: shellApiLoggingUtils.wrapWithLogging(async e => await (eT == null ? undefined : eT.getMediaDeviceAuthStatus(e)), "neotix.system.getMediaDeviceAuthStatus"),
    requestMediaDeviceAuth: shellApiLoggingUtils.wrapWithLogging(async e => await (eT == null ? undefined : eT.requestMediaDeviceAuth(e)), "neotix.system.requestMediaDeviceAuth"),
    openFile: shellApiLoggingUtils.wrapWithLogging(async e => await (eT == null ? undefined : eT.openFile(e)), "neotix.system.openFile"),
    pasteValueToPreWindow: shellApiLoggingUtils.wrapWithLogging(async e => await (eT == null ? undefined : eT.pasteValueToPreWindow(e)), "neotix.system.pasteValueToPreWindow"),
    getFileInfo: shellApiLoggingUtils.wrapWithLogging(async e => await (eT == null ? undefined : eT.getFileInfo(e)), "neotix.system.getFileInfo"),
    copyFileAsTemp: shellApiLoggingUtils.wrapWithLogging(async e => await (eT == null ? undefined : eT.copyFileAsTemp(e)), "neotix.system.copyFileAsTemp")
  };
  shellApiLoggingUtils.wrapApiHandler(async e => await (eT == null ? undefined : eT.openSystemPermissionPanel(e)), "neotix.system.openSystemPermissionPanel");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eT == null ? undefined : eT.showPermissionPrompt(e)), "neotix.system.showPermissionPrompt");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eT == null ? undefined : eT.hidePermissionPrompt(e)), "neotix.system.hidePermissionPrompt");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eT == null ? undefined : eT.hasSystemPermission(e)), "neotix.system.hasSystemPermission");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eT == null ? undefined : eT.getMediaDeviceAuthStatus(e)), "neotix.system.getMediaDeviceAuthStatus");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eT == null ? undefined : eT.requestMediaDeviceAuth(e)), "neotix.system.requestMediaDeviceAuth");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eT == null ? undefined : eT.openFile(e)), "neotix.system.openFile");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eT == null ? undefined : eT.pasteValueToPreWindow(e)), "neotix.system.pasteValueToPreWindow");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eT == null ? undefined : eT.getFileInfo(e)), "neotix.system.getFileInfo");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eT == null ? undefined : eT.copyFileAsTemp(e)), "neotix.system.copyFileAsTemp");
  let eD = typeof globalThis != "undefined" && (L = globalThis.neotix) !== null && L !== undefined ? L : {};
  let eL = typeof window != "undefined" ? window.neotix?.screenshot : eD == null ? undefined : eD.screenshot;
  let eF = {
    startScreenshot: shellApiLoggingUtils.wrapWithLogging(async e => await (eL == null ? undefined : eL.startScreenshot(e)), "neotix.screenshot.startScreenshot")
  };
  shellApiLoggingUtils.wrapApiHandler(async e => await (eL == null ? undefined : eL.startScreenshot(e)), "neotix.screenshot.startScreenshot");
  let eP = typeof globalThis != "undefined" && (P = globalThis.neotix) !== null && P !== undefined ? P : {};
  let eI = typeof window != "undefined" ? window.neotix?.tea : eP == null ? undefined : eP.tea;
  let eV = {
    track: shellApiLoggingUtils.wrapWithLogging(async e => await (eI == null ? undefined : eI.track(e)), "neotix.tea.track"),
    getGlobalParams: shellApiLoggingUtils.wrapWithLogging(async () => await (eI == null ? undefined : eI.getGlobalParams()), "neotix.tea.getGlobalParams"),
    setBackgroundReady: shellApiLoggingUtils.wrapWithLogging(async () => await (eI == null ? undefined : eI.setBackgroundReady()), "neotix.tea.setBackgroundReady")
  };
  shellApiLoggingUtils.wrapApiHandler(async e => await (eI == null ? undefined : eI.track(e)), "neotix.tea.track");
  shellApiLoggingUtils.wrapApiHandler(async () => await (eI == null ? undefined : eI.getGlobalParams()), "neotix.tea.getGlobalParams");
  shellApiLoggingUtils.wrapApiHandler(async () => await (eI == null ? undefined : eI.setBackgroundReady()), "neotix.tea.setBackgroundReady");
  let eR = typeof globalThis != "undefined" && (V = globalThis.neotix) !== null && V !== undefined ? V : {};
  let eO = typeof window != "undefined" ? window.neotix?.tabs : eR == null ? undefined : eR.tabs;
  let eU = {
    navigateToHomeTab: shellApiLoggingUtils.wrapWithLogging(async e => await (eO == null ? undefined : eO.navigateToHomeTab(e)), "neotix.tabs.navigateToHomeTab"),
    getHomeTabCookie: shellApiLoggingUtils.wrapWithLogging(async e => await (eO == null ? undefined : eO.getHomeTabCookie(e)), "neotix.tabs.getHomeTabCookie"),
    setHomeTabLanguageCookie: shellApiLoggingUtils.wrapWithLogging(async e => await (eO == null ? undefined : eO.setHomeTabLanguageCookie(e)), "neotix.tabs.setHomeTabLanguageCookie"),
    reloadHomeTab: shellApiLoggingUtils.wrapWithLogging(async () => await (eO == null ? undefined : eO.reloadHomeTab()), "neotix.tabs.reloadHomeTab"),
    openURLInNewTab: shellApiLoggingUtils.wrapWithLogging(async e => await (eO == null ? undefined : eO.openURLInNewTab(e)), "neotix.tabs.openURLInNewTab"),
    isStartupWithShortcutConflictCheck: shellApiLoggingUtils.wrapWithLogging(async () => await (eO == null ? undefined : eO.isStartupWithShortcutConflictCheck()), "neotix.tabs.isStartupWithShortcutConflictCheck"),
    setStartupWithShortcutConflictCheck: shellApiLoggingUtils.wrapWithLogging(async e => await (eO == null ? undefined : eO.setStartupWithShortcutConflictCheck(e)), "neotix.tabs.setStartupWithShortcutConflictCheck"),
    getLastActiveTabInfo: shellApiLoggingUtils.wrapWithLogging(async () => await (eO == null ? undefined : eO.getLastActiveTabInfo()), "neotix.tabs.getLastActiveTabInfo")
  };
  shellApiLoggingUtils.wrapApiHandler(async e => await (eO == null ? undefined : eO.navigateToHomeTab(e)), "neotix.tabs.navigateToHomeTab");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eO == null ? undefined : eO.getHomeTabCookie(e)), "neotix.tabs.getHomeTabCookie");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eO == null ? undefined : eO.setHomeTabLanguageCookie(e)), "neotix.tabs.setHomeTabLanguageCookie");
  shellApiLoggingUtils.wrapApiHandler(async () => await (eO == null ? undefined : eO.reloadHomeTab()), "neotix.tabs.reloadHomeTab");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eO == null ? undefined : eO.openURLInNewTab(e)), "neotix.tabs.openURLInNewTab");
  shellApiLoggingUtils.wrapApiHandler(async () => await (eO == null ? undefined : eO.isStartupWithShortcutConflictCheck()), "neotix.tabs.isStartupWithShortcutConflictCheck");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eO == null ? undefined : eO.setStartupWithShortcutConflictCheck(e)), "neotix.tabs.setStartupWithShortcutConflictCheck");
  shellApiLoggingUtils.wrapApiHandler(async () => await (eO == null ? undefined : eO.getLastActiveTabInfo()), "neotix.tabs.getLastActiveTabInfo");
  let eM = typeof globalThis != "undefined" && (O = globalThis.neotix) !== null && O !== undefined ? O : {};
  let eB = typeof window != "undefined" ? window.neotix?.voiceChat : eM == null ? undefined : eM.voiceChat;
  let e_ = {
    createWindow: shellApiLoggingUtils.wrapWithLogging(async e => await (eB == null ? undefined : eB.createWindow(e)), "neotix.voiceChat.createWindow"),
    closeWindow: shellApiLoggingUtils.wrapWithLogging(async e => await (eB == null ? undefined : eB.closeWindow(e)), "neotix.voiceChat.closeWindow"),
    minimizeWindow: shellApiLoggingUtils.wrapWithLogging(async () => await (eB == null ? undefined : eB.minimizeWindow()), "neotix.voiceChat.minimizeWindow"),
    restoreWindow: shellApiLoggingUtils.wrapWithLogging(async () => await (eB == null ? undefined : eB.restoreWindow()), "neotix.voiceChat.restoreWindow"),
    setUpdateVoicePageFlag: shellApiLoggingUtils.wrapWithLogging(async () => await (eB == null ? undefined : eB.setUpdateVoicePageFlag()), "neotix.voiceChat.setUpdateVoicePageFlag"),
    isUpdateVoicePage: shellApiLoggingUtils.wrapWithLogging(async () => await (eB == null ? undefined : eB.isUpdateVoicePage()), "neotix.voiceChat.isUpdateVoicePage")
  };
  shellApiLoggingUtils.wrapApiHandler(async e => await (eB == null ? undefined : eB.createWindow(e)), "neotix.voiceChat.createWindow");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eB == null ? undefined : eB.closeWindow(e)), "neotix.voiceChat.closeWindow");
  shellApiLoggingUtils.wrapApiHandler(async () => await (eB == null ? undefined : eB.minimizeWindow()), "neotix.voiceChat.minimizeWindow");
  shellApiLoggingUtils.wrapApiHandler(async () => await (eB == null ? undefined : eB.restoreWindow()), "neotix.voiceChat.restoreWindow");
  shellApiLoggingUtils.wrapApiHandler(async () => await (eB == null ? undefined : eB.setUpdateVoicePageFlag()), "neotix.voiceChat.setUpdateVoicePageFlag");
  shellApiLoggingUtils.wrapApiHandler(async () => await (eB == null ? undefined : eB.isUpdateVoicePage()), "neotix.voiceChat.isUpdateVoicePage");
  let eN = typeof globalThis != "undefined" && (M = globalThis.neotix) !== null && M !== undefined ? M : {};
  let eG = typeof window != "undefined" ? window.neotix?.builtin : eN == null ? undefined : eN.builtin;
  let eH = {
    getBrandInfo: shellApiLoggingUtils.wrapWithLogging(async () => await (eG == null ? undefined : eG.getBrandInfo()), "neotix.builtin.getBrandInfo"),
    getOSInfo: shellApiLoggingUtils.wrapWithLogging(async e => await (eG == null ? undefined : eG.getOSInfo(e)), "neotix.builtin.getOSInfo"),
    pipeStreamToUpperCase: shellApiLoggingUtils.wrapWithLogging(async () => await (eG == null ? undefined : eG.pipeStreamToUpperCase()), "neotix.builtin.pipeStreamToUpperCase"),
    sendEventToSelfNoReturn: shellApiLoggingUtils.wrapWithLogging(async e => await (eG == null ? undefined : eG.sendEventToSelfNoReturn(e)), "neotix.builtin.sendEventToSelfNoReturn")
  };
  require.d(exports, {
    ShellApiStartupMetric: function () {
      return eE;
    },
    ShellApiBookmarks: function () {
      return eb;
    },
    ShellApiBrowserSettings: function () {
      return X;
    },
    ShellApiBrowserWindow: function () {
      return j;
    },
    ShellApiBuiltin: function () {
      return eH;
    },
    ShellApiDefaultBrowser: function () {
      return eo;
    },
    ShellApiSystem: function () {
      return eW;
    },
    ShellApiCloudConfig: function () {
      return en;
    },
    ShellApiTea: function () {
      return eV;
    },
    ShellApiScreenshot: function () {
      return eF;
    },
    ShellApiVoiceChat: function () {
      return e_;
    },
    ShellApiLocalStorage: function () {
      return ec;
    },
    ShellApiRuntimeStorage: function () {
      return runtimeStorageWrapper.runtimeStorageApi;
    },
    ShellApiFs: function () {
      return er;
    },
    ShellApiScreenShare: function () {
      return ex;
    },
    ShellApiPreload: function () {
      return eg;
    },
    ShellApiTabs: function () {
      return eU;
    },
    ShellApiAudioCapture: function () {
      return z;
    },
    ClientNeotixChannel: function () {
      return neotixChannelService.NeotixChannel;
    },
    ShellApiDevice: function () {
      return $;
    },
    ShellApiPinWindow: function () {
      return neotixPinWindowApiWrapper.pinWindowApi;
    },
    ShellApiAgentTask: function () {
      return neotixAgentTaskApi.agentTaskApi;
    }
  });
}