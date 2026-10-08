// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'isChatCodingRoute'
// - Renamed export 'G4' to 'isCodeChatRoute'
// - Renamed export 'GB' to 'isCodeLaunchRoute'
// - Renamed export 'HS' to 'chatCodingPath'
// - Renamed export 'Ps' to 'buildingRenderPath'
// - Renamed export 'Yy' to 'isCodeChatGeneral'
// - Renamed export 'fH' to 'isCodePage'
// - Renamed export 'gJ' to 'codeChatPath'
// - Renamed export 'mQ' to 'isCodeChatRoot'
// - Renamed export 'vQ' to 'isCodeShareNew'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 983618
         */
module.exports = function (module, exports, require) {
  let i = () => {
    if (typeof window == "undefined") {
      return false;
    }
    let {
      pathname: e
    } = window.location;
    return !!e && !!e.startsWith("/code");
  };
  let r = () => {
    let {
      location: e
    } = window;
    return !!e && /^\/chat\/coding\/?$/.test(e.pathname);
  };
  let o = e => /\/code\/chat(\/(local_|main)?\d*)?(\?.*)?$/.test(e);
  let l = () => {
    let {
      location: e
    } = window;
    return !!e && o(e.pathname);
  };
  let a = () => {
    let {
      location: e
    } = window;
    return !!e && (/\/code\/share(\/\d*)?$/.test(e.pathname) || /\/code\/chat\/new(\/\d*)?$/.test(e.pathname) || /\/code\/chat\/new-thread\/create-by-share\/?$/.test(e.pathname) || /\/code\/chat\/new-doc\/?$/.test(e.pathname));
  };
  let s = () => {
    let {
      location: e
    } = window;
    return !!e && !o(e.pathname) && /\/code\/chat\/.*$/.test(e.pathname);
  };
  let c = () => {
    let {
      location: e
    } = window;
    return !!e && /^\/code\/chat\/?$/.test(e.pathname);
  };
  let d = () => {
    let {
      location: e
    } = window;
    return !!e && e.pathname.startsWith("/code/launch");
  };
  let u = "/code/chat";
  let p = "/building/render";
  let h = "/chat/coding";
  require.d(exports, {
    isChatCodingRoute: function () {
      return r;
    },
    isCodeChatRoute: function () {
      return l;
    },
    isCodeLaunchRoute: function () {
      return d;
    },
    chatCodingPath: function () {
      return h;
    },
    buildingRenderPath: function () {
      return p;
    },
    isCodeChatGeneral: function () {
      return s;
    },
    isCodePage: function () {
      return i;
    },
    codeChatPath: function () {
      return u;
    },
    isCodeChatRoot: function () {
      return c;
    },
    isCodeShareNew: function () {
      return a;
    }
  });
}