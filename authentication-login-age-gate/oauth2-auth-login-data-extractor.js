// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'extractAuthLoginData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-docx-guidance.7d88153e.js
         * chunkId: 48718
         * moduleId: 456014
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var authRedirectUtils = require("auth-redirect-utils") /*id: 241827*/;
  var oauth2StateHandler = require("oauth2-state-handler") /*id: 331697*/;
  let o = (e, t) => {
    let o = reactCoreLibraryReexport.useRef(t.state?.oauth2);
    o.current = oauth2StateHandler.getOAuth2State(t);
    oauth2StateHandler.clearOAuth2State(t);
    if (!authRedirectUtils.getAuthLoginType(o.current) || o.current.type !== e) {
      return;
    }
    let {
      authLoginData: l
    } = o.current;
    return l;
  };
  require.d(exports, {
    extractAuthLoginData: function () {
      return o;
    }
  });
}