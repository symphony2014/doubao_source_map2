// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'DataAnalysisUpload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 572869
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatLoginModalManager = require("chat-login-modal-manager") /*id: 516605*/;
  var trackingEventConstants = require("tracking-event-constants") /*id: 402894*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = reactCoreLibraryReexport.useRef(null);
    let s = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let d = reactCoreLibraryReexport.useRef("upload_pinbutton");
    let {
      openLoginModal: c
    } = chatLoginModalManager.loginModalManager();
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      onClick: e => {
        if (!s) {
          c({
            trackInfo: {
              source: trackingEventConstants.trackingEvents.UPLOAD
            }
          });
          return;
        }
        d.current = e;
        if (n.current) {
          n.current.click();
        }
      }
    }));
    return reactJsxRuntimeCoreReexport.jsx("input", {
      type: "file",
      multiple: true,
      className: "input-fVDlPl",
      onChange: t => {
        var i;
        if ((i = e.onChange) !== null && i !== undefined) {
          i.call(e, t, d.current);
        }
        if (n.current) {
          n.current.value = "";
        }
      },
      ref: n,
      accept: ".xlsx,.xls,.csv"
    });
  });
  s.displayName = "DataAnalysisUpload";
  require.d(exports, {
    DataAnalysisUpload: function () {
      return s;
    }
  });
}