// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DO' to 'maxRetryCount'
// - Renamed export 'Gr' to 'sessionTimeout'
// - Renamed export 'Hx' to 'apiVersion'
// - Renamed export 'M0' to 'assistantConvIdConst'
// - Renamed export 'OY' to 'heartbeatInterval'
// - Renamed export 'RM' to 'maxSessionDuration'
// - Renamed export 'UD' to 'requestTimeout'
// - Renamed export 'Ud' to 'cacheExpiryTime'
// - Renamed export 'Vb' to 'messageTimeout'
// - Renamed export 'YR' to 'onboardingMessageId'
// - Renamed export '_f' to 'thinkingTimeout'
// - Renamed export 'lf' to 'mockReplyMessageId'
// - Renamed export 'oz' to 'maxMessageLength'
// - Renamed export 's8' to 'thinkingMessageId'
// - Renamed export 'sJ' to 'streamTimeout'
// - Renamed export 'uB' to 'maxFileSize'
// - Renamed export 'xK' to 'minRetryDelay'
// - Renamed export 'yK' to 'connectionTimeout'
// - Renamed export 'z4' to 'debounceDelay'
// - Renamed export 'zE' to 'pollingInterval'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 375543
         */
module.exports = function (module, exports, require) {
  let i = 50;
  let r = 20;
  let o = "ONBOARDING_MESSAGE_ID";
  let a = 5000;
  let l = 19000;
  let s = 2000;
  let u = 10000;
  let c = 20971520;
  let d = "THINKING_MESSAGE_ID";
  let h = "MOCK_REPLY_MESSAGE_ID";
  let m = "ASSISTANT_CONV_ID_WITHOUT_CACHE";
  let g = 20;
  let f = 500;
  let p = 1;
  let _ = 10000;
  let v = 300000;
  let b = 15000;
  let S = 600000;
  let P = 300000;
  let C = 60000;
  require.d(exports, {
    maxRetryCount: function () {
      return g;
    },
    sessionTimeout: function () {
      return P;
    },
    apiVersion: function () {
      return p;
    },
    assistantConvIdConst: function () {
      return m;
    },
    heartbeatInterval: function () {
      return C;
    },
    maxSessionDuration: function () {
      return v;
    },
    requestTimeout: function () {
      return _;
    },
    cacheExpiryTime: function () {
      return S;
    },
    messageTimeout: function () {
      return u;
    },
    onboardingMessageId: function () {
      return o;
    },
    thinkingTimeout: function () {
      return a;
    },
    mockReplyMessageId: function () {
      return h;
    },
    maxMessageLength: function () {
      return i;
    },
    thinkingMessageId: function () {
      return d;
    },
    streamTimeout: function () {
      return l;
    },
    maxFileSize: function () {
      return c;
    },
    minRetryDelay: function () {
      return r;
    },
    connectionTimeout: function () {
      return b;
    },
    debounceDelay: function () {
      return s;
    },
    pollingInterval: function () {
      return f;
    }
  });
}