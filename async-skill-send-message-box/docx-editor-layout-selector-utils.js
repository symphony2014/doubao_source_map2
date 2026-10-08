// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'getLayoutSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 817118
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var musicLyricsModalWrapper = require("music-lyrics-modal-wrapper") /*id: 84330*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      lyric: t,
      onClose: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(musicLyricsModalWrapper.MusicLyricsModal, {
      className: "modal-vuRX72",
      visible: true,
      centered: true,
      onCancel: n,
      footer: null,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "w-full h-full overflow-y-scroll",
        children: reactJsxRuntimeCoreReexport.jsx("p", {
          className: "lyrics-kYLsCR",
          children: t
        })
      })
    });
  };
  var skillSendMessageBox = require("skill-send-message-box") /*id: 607110*/;
  let m = e => {
    let {
      message: n
    } = e;
    let [d, m] = reactCoreLibraryReexport.useState(false);
    let {
      prompt: f,
      lyric: g
    } = reactUseChangedRef.useChangedRef((() => {
      if (!messageContentTypeAndStatusChecker.Acz(n)) {
        return null;
      }
      let i = messageContentTypeAndStatusChecker.FFC(n);
      let r = safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(n, ["ext", "input_skill"]), {}).variables?.lyric;
      return {
        isFailed: i,
        prompt: (n == null ? undefined : n.content_obj?.text) || "",
        lyric: r
      };
    })(), deepEqualityUtil_1.isDeepEqual) ?? {};
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex flex-col items-end",
      children: [reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
        text: f
      }), (g == null ? undefined : g.length) ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(skillSendMessageBox.SkillSendMessageButton, {
          className: "mt-8",
          lyric: g,
          onClick: () => {
            m(true);
          }
        }), d ? reactJsxRuntimeCoreReexport.jsx(p, {
          lyric: g,
          onClose: () => m(false)
        }) : null]
      }) : null]
    });
  };
  require.d(exports, {
    getLayoutSelector: function () {
      return m;
    }
  });
}