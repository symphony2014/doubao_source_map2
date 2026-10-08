// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'YO' to 'validateChatInput'
// - Renamed export 'YZ' to 'getContextVariables'
// - Renamed export '_i' to 'blurActiveElement'
// - Renamed export 'aF' to 'canvasImageToFile'
// - Renamed export 'gr' to 'isSupportedLanguage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29592.0fe385c7.js
         * chunkId: 29592
         * moduleId: 269786
         */
module.exports = function (module, exports, require) {
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var codeRouteUtils = require("code-route-utils") /*id: 983618*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatSkillInputBuilder = require("chat-skill-input-builder") /*id: 700419*/;
  let o = ["c", "cpp", "python"];
  let s = () => {
    let t = document?.activeElement;
    if (t && "blur" in t && isFunctionUtil_1.isFunction(t.blur)) {
      t.blur();
    }
  };
  let c = e => {
    let t = "";
    e.forEach(e => {
      if ("extra" in e && e.extra?.context_variables) {
        t = e.extra?.context_variables;
      }
    });
    return t;
  };
  let d = (e, t) => {
    let n = chatSkillInputBuilder.buildChatSkillInput(e, t);
    return t && (messageContentTypeAndStatusChecker.kwD(n) || messageContentTypeAndStatusChecker.ePZ(n)) || codeRouteUtils.isCodePage() && !t;
  };
  let u = e => !!e && o.includes(e);
  let _ = async function (e, t, n = "image/png") {
    let i = document.createElement("canvas");
    let l = i.getContext("2d");
    i.width = e.width;
    i.height = e.height;
    if (l != null) {
      l.putImageData(e, 0, 0);
    }
    return new Promise((e, l) => {
      i.toBlob(i => {
        if (i) {
          e(new File([i], t, {
            type: n
          }));
        } else {
          l(Error("Canvas to blob failed"));
        }
      }, n);
    });
  };
  require.d(exports, {
    validateChatInput: function () {
      return d;
    },
    getContextVariables: function () {
      return c;
    },
    blurActiveElement: function () {
      return s;
    },
    canvasImageToFile: function () {
      return _;
    },
    isSupportedLanguage: function () {
      return u;
    }
  });
}