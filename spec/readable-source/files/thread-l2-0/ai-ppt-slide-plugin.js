// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'messageContextDefinition'
// - Resolved require(786528) to 'message-context-definition'
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'c' to 'attachmentConstants'
// - Resolved require(373585) to 'attachment-constants'
// - Renamed variable 'd' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'u' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'f' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'p' to 'pptxColorfulIcon'
// - Resolved require(677836) to 'pptx-colorful-icon'
// - Renamed variable 'v' to 'modalConfirmDialogManager'
// - Resolved require(948195) to 'modal-confirm-dialog-manager'
// - Renamed variable '_' to 'aiPptSlidesCanvasView'
// - Resolved require(262633) to 'ai-ppt-slides-canvas-view'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'g' to 'aiPptSlidesApp'
// - Resolved require(4760) to 'ai-ppt-slides-app'
// - Renamed variable 'x' to 'aiPptTemplateStore_1'
// - Resolved require(698449) to 'ai-ppt-template-store_1'
// - Renamed variable 'b' to 'aiPptTemplateCanvasSymbol'
// - Resolved require(649721) to 'ai-ppt-template-canvas-symbol'
// - Updated imported property 'UD' to 'useMessage' (module 786528)
// - Updated imported property 'T' to 'ModalConfirmDialog' (module 948195)
// - Updated imported property 'q' to 'AiPptSlidesView' (module 262633)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'zm' to 'aiPptTemplateStore' (module 698449)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property 'lW' to 'ReferenceType' (module 373585)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'j' to 'slideSceneTypes' (module 4760)
// - Updated imported property 'k' to 'aiPptTemplateCanvas' (module 649721)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'Z' to 'ColorfulPptxIcon' (module 677836)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 540592
         */
module.exports = function (module, exports, require) {
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  let i = (e, t) => ({
    message: messageContextDefinition.useMessage(),
    block: t
  });
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var pptxColorfulIcon = require("pptx-colorful-icon") /*id: 677836*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var aiPptSlidesCanvasView = require("ai-ppt-slides-canvas-view") /*id: 262633*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    let t = e => {
      let {
        client: t
      } = e;
      t.switchReadonlyMode(true);
    };
    return reactJsxRuntimeCoreReexport.jsx(modalConfirmDialogManager.ModalConfirmDialog, {
      visible: true,
      centered: true,
      closeOnEsc: true,
      bodyStyle: {
        height: "calc(100vh - 80px)"
      },
      className: "modal-B4iNNE",
      onCancel: e.onCloseCanvas,
      footer: null,
      header: null,
      children: reactJsxRuntimeCoreReexport.jsx(aiPptSlidesCanvasView.AiPptSlidesView, {
        isShareMode: true,
        ...e,
        onInit: n => {
          var r;
          t(n);
          if ((r = e.onInit) !== null && r !== undefined) {
            r.call(e, n);
          }
        }
      })
    });
  };
  var aiPptSlidesApp = require("ai-ppt-slides-app") /*id: 4760*/;
  var aiPptTemplateStore_1 = require("ai-ppt-template-store_1") /*id: 698449*/;
  var aiPptTemplateCanvasSymbol = require("ai-ppt-template-canvas-symbol") /*id: 649721*/;
  var y = "clickable-OGkRro";
  let w = e => {
    var t;
    var i;
    var l;
    let {
      message: v,
      isSharePageMode: _
    } = e;
    let w = i18nTranslationUtils.useTranslationWithFallback();
    let {
      visible: k,
      templatePreviewModalInfo: S,
      hidePPTPreviewModal: j
    } = aiPptTemplateStore_1.aiPptTemplateStore(e => ({
      visible: e.pptPreviewModalVisible,
      templatePreviewModalInfo: e.templatePreviewModalInfo,
      hidePPTPreviewModal: e.hidePPTPreviewModal
    }));
    let R = v == null ? undefined : (t = v.content_blocks_v2) === null || t === undefined ? undefined : t.find(e => {
      if (e.block_type !== chatConstantsEnum.messageContentType.BLOCK_REFERENCE) {
        return false;
      }
      let n = e == null ? undefined : e.content;
      return !!n && ((n == null ? undefined : n.referenceBlock?.type) === attachmentConstants.ReferenceType.ReferenceTypePPTTemplate || objectPathGetDefault.getObjectPathDefault(n, "reference_block.type", undefined) === attachmentConstants.ReferenceType.ReferenceTypePPTTemplate);
    });
    let C = R == null ? undefined : R.content?.reference_block;
    if (!C) {
      return null;
    }
    let N = C.ppt_template?.template;
    let T = objectPathGetDefault.getObjectPathDefault(C, "ppt_template.user_templates", []);
    let I = !T.length;
    let E = (N == null ? undefined : N.name) || (T == null ? undefined : (l = T[0]) === null || l === undefined ? undefined : (i = l.name) === null || i === undefined ? undefined : i.replace(/\.[^.]+$/, ""));
    if (!E) {
      return null;
    }
    let A = (N == null ? undefined : N.id) || (T == null ? undefined : T[0]?.uri);
    if (!A) {
      return null;
    }
    let Z = e.message.message_id === (S == null ? undefined : S.messageId);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: s({
          "container-Rd89om": true,
          [y]: I
        }),
        onClick: I ? () => {
          let e = {
            scene: _ ? aiPptSlidesApp.slideSceneTypes.CONVERSATION_SHARE : aiPptSlidesApp.slideSceneTypes.CONVERSATION_CHAT,
            perfStartTime: Date.now(),
            exactPluginIdentifier: aiPptTemplateCanvasSymbol.aiPptTemplateCanvas,
            conversationId: (v == null ? undefined : v.conversation_id) || "",
            messageId: (v == null ? undefined : v.message_id) || "",
            docTitle: E,
            templateId: A,
            onCloseCanvas: () => {
              chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
            }
          };
          if (_) {
            aiPptTemplateStore_1.aiPptTemplateStore.setState({
              pptPreviewModalVisible: true,
              templatePreviewModalInfo: e
            });
          } else {
            chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(t => t == null ? undefined : t.openCanvasPanel(e, undefined, false));
          }
        } : undefined,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: s({
            "messageTemplateReference-peDJNc": true,
            [y]: I
          }),
          children: [reactJsxRuntimeCoreReexport.jsx(pptxColorfulIcon.ColorfulPptxIcon, {
            className: "icon-CCXZBk"
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "textContent-ZtWG0h",
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: "title-eSSNlE",
              children: E
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: "subTitle-w9RPgw",
              children: w("slides_template_tag_reference")
            })]
          })]
        })
      }), k && S && Z && reactJsxRuntimeCoreReexport.jsx(m, {
        ...S,
        onCloseCanvas: () => {
          j();
        }
      })]
    });
  };
  let k = reactCoreLibraryReexport.memo(e => {
    var t;
    let n = (t = location.pathname) === null || t === undefined ? undefined : t.includes("/thread");
    return reactJsxRuntimeCoreReexport.jsx(w, {
      ...e,
      isSharePageMode: !!n,
      mouseOver: false,
      inView: !!e.inView
    });
  });
  function S(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
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
  class j {
    constructor() {
      S(this, "nodeTypes", ["block_type:10056 | reference_block.type:7"]);
      S(this, "Content", k);
      S(this, "usePropsSelector", i);
    }
  }
  require.r(exports);
  require.d(exports, {
    Plugin: function () {
      return j;
    }
  });
}