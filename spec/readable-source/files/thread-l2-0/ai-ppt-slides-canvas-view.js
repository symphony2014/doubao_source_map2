// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'AiPptSlidesView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 262633
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var disableSelectBarConst = require("disable-select-bar-const") /*id: 554633*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var slidesToolbarComponent = require("slides-toolbar-component") /*id: 356709*/;
  var chatCanvasHeaderComponent = require("chat-canvas-header-component") /*id: 468674*/;
  var aiPptSlidesApp = require("ai-ppt-slides-app") /*id: 4760*/;
  var accessStatusConstants = require("access-status-constants") /*id: 76876*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    let {
      scene: t,
      perfStartTime: n,
      docTitle: i,
      onInit: _,
      templateId: h,
      onCloseCanvas: m,
      isShareMode: g = false,
      templateType: x = 1
    } = e;
    let b = reactCoreLibraryReexport.useRef(null);
    let y = reactCoreLibraryReexport.useRef(null);
    let [w, k] = reactCoreLibraryReexport.useState(true);
    let [S, j] = reactCoreLibraryReexport.useState([]);
    let [R, C] = reactCoreLibraryReexport.useState([]);
    let {
      docToken: N,
      status: T
    } = function (e, t) {
      let [n, i] = reactCoreLibraryReexport.useState("");
      let [l, o] = reactCoreLibraryReexport.useState("loading");
      reactCoreLibraryReexport.useEffect(() => {
        let n = false;
        i("");
        o("loading");
        apiServicesCollection.AiPptTemplateFacadeApiService.AGWPPTemplateDetail({
          template_type: t,
          template_id: e
        }).then(e => {
          if (!n) {
            o("complete");
            i(objectPathGetDefault.getObjectPathDefault(e, "data.doubaoslide_presentation_id", ""));
          }
        }).catch(() => {
          o("error");
        });
        return () => {
          n = true;
          i("");
          o("loading");
        };
      }, [e]);
      return {
        docToken: n,
        status: l
      };
    }(h, x);
    reactCoreLibraryReexport.useEffect(() => {
      let e = new Set(["share", "export"]);
      let t = new Set(["presentation", "extra"]);
      j(Array.from(e));
      C(Array.from(t));
    }, [g, w]);
    let I = reactCoreLibraryReexport.useCallback(e => {
      if (_ != null) {
        _(e);
      }
      k(false);
      e.client.switchReadonlyMode(true);
    }, []);
    let E = T === "loading";
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: l("wrapper-Qg4eVI", disableSelectBarConst.disableSelectBar),
      ref: y,
      children: [reactJsxRuntimeCoreReexport.jsx(chatCanvasHeaderComponent.ChatCanvasHeader, {
        isShareMode: false,
        onClose: () => {
          m();
        },
        children: reactJsxRuntimeCoreReexport.jsx(slidesToolbarComponent.SlidesToolbar, {
          sdkLoading: w || E,
          disableActions: S,
          removeActions: R,
          getPopupContainer: () => {
            return y.current ?? document.body;
          },
          docToken: N,
          docTitle: i
        })
      }), reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
        spinning: E,
        wrapperClassName: "spin-o8Bi8t",
        children: E ? null : reactJsxRuntimeCoreReexport.jsx(aiPptSlidesApp.AiPptSlidesApp, {
          ref: b,
          onInit: I,
          scene: t,
          perfStartTime: n,
          docToken: N,
          pptStatus: T === "error" ? accessStatusConstants.AccessStatus.Error : undefined,
          onStartLoad: () => k(true)
        })
      })]
    });
  };
  require.d(exports, {
    AiPptSlidesView: function () {
      return _;
    }
  });
}