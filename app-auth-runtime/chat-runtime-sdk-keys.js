// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'sdkPromiseKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 165630
         */
module.exports = function (module, exports, require) {
  var i;
  (i = {}).Mssdk = "mssdkPromise";
  i.BdMsSdk = "bdmssdkPromise";
  i.MsSdkReady = "msSdkReady";
  i.TTWid = "ttwid";
  i.Launch = "launchPromise";
  i.AccountInfo = "accountInfoPromise";
  i.GuestLayoutMode = "guestLayoutModePromise";
  i.Guidance = "guidancePromise";
  i.SkillList = "skillListPromise";
  i.OpenIdPromise = "openIdPromise";
  i.WebAnonIdPromise = "webAnonIdPromise";
  let r = i;
  require.d(exports, {
    sdkPromiseKeys: function () {
      return r;
    }
  });
}