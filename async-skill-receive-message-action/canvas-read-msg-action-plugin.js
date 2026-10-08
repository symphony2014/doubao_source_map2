// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'r' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'a' to 'chatCanvasFileHandler'
// - Resolved require(373517) to 'chat-canvas-file-handler'
// - Renamed variable 'l' to 'fileTypeDetectionUtils'
// - Resolved require(393072) to 'file-type-detection-utils'
// - Renamed variable 's' to 'getFileExtension'
// - Resolved require(256745) to 'get-file-extension'
// - Renamed variable 'd' to 'samanthaButtonComponent'
// - Resolved require(307533) to 'samantha-button-component'
// - Renamed variable 'c' to 'skillBarIconComponent'
// - Resolved require(278022) to 'skill-bar-icon-component'
// - Renamed variable 'u' to 'skillReceiveMessageAction'
// - Resolved require(14727) to 'skill-receive-message-action'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'm' to 'chatCanvasReadAction'
// - Resolved require(374646) to 'chat-canvas-read-action'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Os' to 'useCanvasFileHandler' (module 373517)
// - Updated imported property '$' to 'validateMessageData' (module 14727)
// - Updated imported property 'R' to 'SamanthaButton' (module 307533)
// - Updated imported property 'Z' to 'SkillBarIcon' (module 278022)
// - Updated imported property 'JB' to 'getFileCategory' (module 393072)
// - Updated imported property 'l' to 'getFileExtension' (module 256745)
// - Updated imported property 'n' to 'canvasReadAction' (module 374646)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 188792
         */
module.exports = function (module, exports, require) {
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var chatCanvasFileHandler = require("chat-canvas-file-handler") /*id: 373517*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var skillBarIconComponent = require("skill-bar-icon-component") /*id: 278022*/;
  var skillReceiveMessageAction = require("skill-receive-message-action") /*id: 14727*/;
  var v = {
    container: "container-UEUEN0"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    let {
      message: t,
      title: n,
      className: r
    } = e;
    let f = i18nTranslationUtils.useTranslationWithFallback();
    let {
      onOpenFileByKey: m,
      onOpenFileByLink: g
    } = chatCanvasFileHandler.useCanvasFileHandler();
    let {
      isValid: h,
      pdfFile: _,
      pdfLink: b,
      skillTypeTrack: y
    } = skillReceiveMessageAction.validateMessageData({
      message: t
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: h && reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        "data-message-action-primary-button": "1",
        "data-button-mode": "max",
        type: "ai-primary",
        size: "small",
        className: o(v.container, r),
        icon: reactJsxRuntimeCoreReexport.jsx(skillBarIconComponent.SkillBarIcon, {
          className: "p-1 !text-12"
        }),
        onClick: () => {
          let e = {
            message_id: t.message_id,
            entranceType: "click_start_immersive_reading",
            skillType: y
          };
          if (_) {
            let {
              file_name: n,
              key: i
            } = _;
            if (m != null) {
              m(i, fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(n || i)), {
                messageId: t.message_id,
                pdf: {
                  fileName: n
                },
                openFrom: "click_read_button_in_receive_message"
              }, {
                ...e,
                collectionId: i
              });
            }
          } else if (b) {
            if (g != null) {
              g(b, {
                attchmentType: "pdf",
                messageId: t.message_id,
                openFrom: "click_read_button_in_receive_message"
              }, {
                ...e,
                collectionId: b
              });
            }
          }
        },
        children: n || f("skill_readPdf_btn_immersive")
      })
    });
  };
  var chatCanvasReadAction = require("chat-canvas-read-action") /*id: 374646*/;
  function g(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let h = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx(f, {
      message: t,
      className: "!mr-0",
      title: n("copilot_enter_immersive_mode")
    });
  };
  class _ {
    constructor() {
      g(this, "pluginIdentifier", chatCanvasReadAction.canvasReadAction);
      g(this, "ButtonContentGroups", [h]);
    }
  }
  require.r(exports);
  require.d(exports, {
    CanvasReadReceiveMessageActionButtonPlugin: function () {
      return _;
    }
  });
}