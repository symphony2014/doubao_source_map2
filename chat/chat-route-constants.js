// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G5' to 'routeChatNew'
// - Renamed export 'Gc' to 'routeWaitlist'
// - Renamed export 'LZ' to 'routePcAiGuidance'
// - Renamed export 'M5' to 'routeNewThread'
// - Renamed export 'Q3' to 'routeChatBase'
// - Renamed export 'VX' to 'routeBotDiscover'
// - Renamed export 'Ve' to 'routeChatProfile'
// - Renamed export 'Xx' to 'routeSettings'
// - Renamed export 'Zd' to 'routeChatHome'
// - Renamed export '_L' to 'routesAuthCallback'
// - Renamed export 'c_' to 'routeCollection'
// - Renamed export 'f3' to 'routeBotCreate'
// - Renamed export 'fU' to 'routeChatRoot'
// - Renamed export 'fw' to 'routeProfSettings'
// - Renamed export 'g9' to 'routeChatMain'
// - Renamed export 'nL' to 'routeChatUrlAction'
// - Renamed export 'o6' to 'routeNewChat'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 323118
         */
module.exports = function (module, exports, require) {
  let i = "/chat/";
  let r = "/chat/";
  let o = "/chat/new";
  let a = "/settings";
  let l = "/settings/profile";
  let s = "/chat/";
  let u = {
    default: "/auth/callback",
    apple: "/passport/web/web_login_success",
    line: "/passport/web/web_login_success"
  };
  let c = "/chat/bot/create";
  let d = "/chat/bot/discover";
  let h = "/my-collection";
  let m = "/chat/profile";
  let g = "/waitlist";
  let f = "/chat/new";
  let p = "/chat/new-thread";
  let _ = "/chat";
  let v = "/chat/url-action";
  let b = "/chat/pc-ai-guidance";
  require.d(exports, {
    routeChatNew: function () {
      return o;
    },
    routeWaitlist: function () {
      return g;
    },
    routePcAiGuidance: function () {
      return b;
    },
    routeNewThread: function () {
      return p;
    },
    routeChatBase: function () {
      return s;
    },
    routeBotDiscover: function () {
      return d;
    },
    routeChatProfile: function () {
      return m;
    },
    routeSettings: function () {
      return a;
    },
    routeChatHome: function () {
      return i;
    },
    routesAuthCallback: function () {
      return u;
    },
    routeCollection: function () {
      return h;
    },
    routeBotCreate: function () {
      return c;
    },
    routeChatRoot: function () {
      return r;
    },
    routeProfSettings: function () {
      return l;
    },
    routeChatMain: function () {
      return _;
    },
    routeChatUrlAction: function () {
      return v;
    },
    routeNewChat: function () {
      return f;
    }
  });
}