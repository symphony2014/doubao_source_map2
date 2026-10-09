// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatRouteSkillMapper'
// - Resolved require(467072) to 'chat-route-skill-mapper'
// - Renamed variable 'r' to 'chatRouteConstants'
// - Resolved require(323118) to 'chat-route-constants'
// - Renamed variable 'o' to 'loginUrlParamHandlers'
// - Resolved require(804250) to 'login-url-param-handlers'
// - Renamed variable 's' to 'useLocationWrapper'
// - Resolved require(999635) to 'use-location-wrapper'
// - Renamed variable 'l' to 'useLoaderDataResolver'
// - Resolved require(240680) to 'use-loader-data-resolver'
// - Updated imported property 'T' to 'useLocationWrapper' (module 999635)
// - Updated imported property 'fU' to 'routeChatRoot' (module 323118)
// - Updated imported property 'g9' to 'routeChatMain' (module 323118)
// - Updated imported property 'M5' to 'routeNewThread' (module 323118)
// - Updated imported property 'nL' to 'routeChatUrlAction' (module 323118)
// - Updated imported property '$C' to 'extractLoginSuccessBackUrl' (module 804250)
// - Updated imported property 'O' to 'useLoaderDataHook' (module 240680)
// - Updated imported property 'o4' to 'routePathMap' (module 467072)
// - Updated imported property 'rF' to 'skillTypeKeys' (module 467072)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 291863
         */
module.exports = function (module, exports, require) {
  var chatRouteSkillMapper = require("chat-route-skill-mapper") /*id: 467072*/;
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var loginUrlParamHandlers = require("login-url-param-handlers") /*id: 804250*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var useLoaderDataResolver = require("use-loader-data-resolver") /*id: 240680*/;
  let a = e => /\/chat(\/\d*)?$/.test(e);
  let c = () => {
    let {
      pathname: e,
      search: t,
      hash: n
    } = useLocationWrapper.useLocationWrapper();
    let i = chatRouteConstants.routeChatRoot;
    let l = loginUrlParamHandlers.extractLoginSuccessBackUrl() || i;
    return l ?? `${e === chatRouteConstants.routeChatMain ? chatRouteConstants.routeChatRoot : e}${t}${n}`;
  };
  let u = () => {
    let {
      accountInfo: e
    } = useLoaderDataResolver.useLoaderDataHook();
    return {
      data: e.data,
      success: e.message === "success"
    };
  };
  let d = [chatRouteConstants.routeChatRoot, chatRouteConstants.routeNewThread, chatRouteConstants.routeChatMain, chatRouteConstants.routeChatUrlAction, chatRouteSkillMapper.routePathMap[chatRouteSkillMapper.skillTypeKeys.Search], chatRouteSkillMapper.routePathMap[chatRouteSkillMapper.skillTypeKeys.Write], chatRouteSkillMapper.routePathMap[chatRouteSkillMapper.skillTypeKeys.Image], chatRouteSkillMapper.routePathMap[chatRouteSkillMapper.skillTypeKeys.Pdf], chatRouteSkillMapper.routePathMap[chatRouteSkillMapper.skillTypeKeys.Coding], chatRouteSkillMapper.routePathMap[chatRouteSkillMapper.skillTypeKeys.AiPPT]];
  let p = e => {
    let t = e.endsWith("/") ? e.slice(0, e.length - 1) : e;
    if (d.includes(e) || d.includes(t) || a(e)) {
      return "logout_but_stay";
    } else {
      return "redirect";
    }
  };
  require.r(exports);
  require.d(exports, {
    authFailedAction: function () {
      return p;
    },
    useSuccessNavigatePath: function () {
      return c;
    },
    useUserInfo: function () {
      return u;
    }
  });
}