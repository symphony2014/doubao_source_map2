// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'isDoubaoOrCiciaiChatUrl'
// - Renamed export 'Q' to 'loadShellApiExports'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 216482
         */
module.exports = function (module, exports, require) {
  let n = async () => {
    let {
      ClientNeotixChannel: e,
      ShellApiBookmarks: t,
      ShellApiScreenshot: n,
      ShellApiPinWindow: a,
      ShellApiCloudConfig: r,
      ShellApiBrowserSettings: o,
      ShellApiScreenShare: l,
      ShellApiVoiceChat: s,
      ShellApiTabs: c,
      ShellApiLocalStorage: d,
      ShellApiRuntimeStorage: u,
      ShellApiDevice: p,
      ShellApiTea: _,
      ShellApiPreload: m,
      ShellApiDefaultBrowser: h,
      ShellApiBuiltin: f,
      ShellApiStartupMetric: v,
      ShellApiAudioCapture: g,
      ShellApiAgentTask: y,
      ShellApiSystem: b,
      ShellApiFs: w,
      ShellApiBrowserWindow: x
    } = await require.e("shell-api-modules") /*id: 63486*/.then(require.bind(require, "neotix-shell-api-exports") /*id: 856113*/);
    return {
      ClientNeotixChannel: e,
      ShellApiBookmarks: t,
      ShellApiScreenshot: n,
      ShellApiPinWindow: a,
      ShellApiCloudConfig: r,
      ShellApiBrowserSettings: o,
      ShellApiScreenShare: l,
      ShellApiVoiceChat: s,
      ShellApiTabs: c,
      ShellApiLocalStorage: d,
      ShellApiRuntimeStorage: u,
      ShellApiDevice: p,
      ShellApiTea: _,
      ShellApiPreload: m,
      ShellApiDefaultBrowser: h,
      ShellApiBuiltin: f,
      ShellApiStartupMetric: v,
      ShellApiAudioCapture: g,
      ShellApiAgentTask: y,
      ShellApiSystem: b,
      ShellApiFs: w,
      ShellApiBrowserWindow: x
    };
  };
  let a = e => RegExp("www.(doubao|ciciai).com/chat").test(e);
  require.d(exports, {
    isDoubaoOrCiciaiChatUrl: function () {
      return a;
    },
    loadShellApiExports: function () {
      return n;
    }
  });
}