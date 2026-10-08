// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'refContentWrapperComponent'
// - Resolved require(15351) to 'ref-content-wrapper-component'
// - Renamed variable 'a' to 'pdfChatMessageHandler'
// - Resolved require(502659) to 'pdf-chat-message-handler'
// - Renamed variable 'u' to 'attachmentConstants'
// - Resolved require(373585) to 'attachment-constants'
// - Renamed variable 's' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'c' to 'messageTextContentRenderer'
// - Resolved require(602492) to 'message-text-content-renderer'
// - Renamed variable 'd' to 'chatThemeStyleConfig'
// - Resolved require(400045) to 'chat-theme-style-config'
// - Renamed variable 'v' to 'chatInputRefUtils'
// - Resolved require(859718) to 'chat-input-ref-utils'
// - Renamed variable 'f' to 'uriImageBackground'
// - Resolved require(259456) to 'uri-image-background'
// - Renamed variable 'p' to 'messageContextDefinition'
// - Resolved require(786528) to 'message-context-definition'
// - Renamed variable '_' to 'urlExtensionDetectionUtils'
// - Resolved require(12177) to 'url-extension-detection-utils'
// - Renamed variable 'm' to 'lazyFileIconWrapper'
// - Resolved require(312448) to 'lazy-file-icon-wrapper'
// - Renamed variable 'h' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'g' to 'fileTypeDetectionUtils'
// - Resolved require(393072) to 'file-type-detection-utils'
// - Renamed variable 'y' to 'getFileExtension'
// - Resolved require(256745) to 'get-file-extension'
// - Renamed variable 'b' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'lW' to 'ReferenceType' (module 373585)
// - Updated imported property 'Or' to 'isImageFile' (module 393072)
// - Updated imported property 'LW' to 'imageExtensions' (module 393072)
// - Updated imported property 'l' to 'getFileExtension' (module 256745)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'UD' to 'useMessage' (module 786528)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property 'XR' to 'joinTruthyStrings' (module 859718)
// - Updated imported property 'mh' to 'getFileListSummary' (module 859718)
// - Updated imported property 'qi' to 'useUrlExtension' (module 12177)
// - Updated imported property 'n' to 'handlePdfChatMessage' (module 502659)
// - Updated imported property 's' to 'RefContentWrapper' (module 15351)
// - Updated imported property 'j' to 'UriImagePreview' (module 259456)
// - Updated imported property 'aA' to 'lazyFileIcon' (module 312448)
// - Updated imported property 'R' to 'renderMessageTextWithAfterNode' (module 602492)
// - Updated imported property 'o' to 'chatThemeConfig' (module 400045)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 816592
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var refContentWrapperComponent = require("ref-content-wrapper-component") /*id: 15351*/;
  var pdfChatMessageHandler = require("pdf-chat-message-handler") /*id: 502659*/;
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var chatThemeStyleConfig = require("chat-theme-style-config") /*id: 400045*/;
  var chatInputRefUtils = require("chat-input-ref-utils") /*id: 859718*/;
  var uriImageBackground = require("uri-image-background") /*id: 259456*/;
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  var urlExtensionDetectionUtils = require("url-extension-detection-utils") /*id: 12177*/;
  var lazyFileIconWrapper = require("lazy-file-icon-wrapper") /*id: 312448*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  let k = {};
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = (e, t) => {
    let l = e.text;
    if (!l) {
      return "";
    }
    let {
      text: i,
      position: r,
      starling_key: o
    } = l;
    if (o) {
      return t(o);
    }
    if (r == null ? undefined : r.artifact_position?.file) {
      let {
        start: e,
        end: t,
        file: n
      } = r.artifact_position;
      return `${n} (${e}-${t})`;
    }
    return i;
  };
  let C = (e, t, n) => {
    if (e.type === attachmentConstants.ReferenceType.ReferenceTypeText) {
      return x(e, t);
    } else if (e.type === attachmentConstants.ReferenceType.ReferenceTypeFile) {
      if (n && fileTypeDetectionUtils.isImageFile(getFileExtension.getFileExtension(e.file?.name || ""))) {
        return "";
      } else {
        return e.file?.name;
      }
    } else if (e.type === attachmentConstants.ReferenceType.ReferenceTypeLink) {
      return e.link?.link_url;
    } else if (e.type === attachmentConstants.ReferenceType.ReferenceTypeLarkDoc) {
      return e.lark_doc?.title;
    } else {
      return undefined;
    }
  };
  let S = reactCoreLibraryReexport.memo(e => {
    var t;
    var x;
    var S;
    let {
      node: w,
      theme: T = "samantha"
    } = e;
    let R = i18nTranslationUtils.useTranslationWithFallback();
    let I = messageContextDefinition.useMessage();
    let N = (T == null ? undefined : T.toLowerCase()) === "coco";
    let E = w.children.find(e => {
      return e.block?.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT;
    });
    let L = w.children.filter(e => {
      return e.block?.block_type === chatConstantsEnum.messageContentType.BLOCK_REFERENCE;
    }).filter(e => {
      var n;
      return ((n = e.block) === null || n === undefined ? undefined : n.content?.reference_block) !== undefined;
    }).filter(e => {
      var n;
      var l;
      return ((l = e.block) === null || l === undefined ? undefined : (n = l.content) === null || n === undefined ? undefined : n.reference_block?.type) !== attachmentConstants.ReferenceType.ReferenceTypePPTTemplate;
    }).map(e => {
      var n;
      if ((n = e.block) === null || n === undefined) {
        return undefined;
      } else {
        return n.content?.reference_block;
      }
    });
    let P = L.filter(e => e.type === attachmentConstants.ReferenceType.ReferenceTypeText).map(e => C(e, R, true)).filter(e => e !== undefined);
    let j = L.filter(e => e.type !== attachmentConstants.ReferenceType.ReferenceTypeText).map(e => C(e, R, true)).filter(e => e !== undefined);
    let A = P.length > 0 ? chatInputRefUtils.joinTruthyStrings(P) : j.length > 0 ? chatInputRefUtils.getFileListSummary(j, R) : "";
    let D = L.find(e => e.type !== attachmentConstants.ReferenceType.ReferenceTypeText);
    let O = D ? C(D, R) : "";
    let {
      ext: M
    } = urlExtensionDetectionUtils.useUrlExtension((D == null ? undefined : D.type) === attachmentConstants.ReferenceType.ReferenceTypeLink && O ? O : "", fileTypeDetectionUtils.imageExtensions);
    let $ = (D == null ? undefined : D.type) === attachmentConstants.ReferenceType.ReferenceTypeLink ? M : getFileExtension.getFileExtension(O || "");
    let F = pdfChatMessageHandler.handlePdfChatMessage({
      message: I
    });
    let Z = ((t = k.checkHasLocalPath) === null || t === undefined ? undefined : t.call(k, L)) || {};
    let W = reactCoreLibraryReexport.useMemo(() => (Z == null ? undefined : Z.onClick) || (F == null ? undefined : F.onClick), [F, Z]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: r(`
        w-fit min-w-0 rounded-s-radius-s bg-s-color-bg-trans px-16 py-9
        text-s-color-text-secondary s-font-base
        sm:text-15
      `, N && "!bg-[#06f] py-16"),
      children: [L.length && reactJsxRuntimeCoreReexport.jsx(refContentWrapperComponent.RefContentWrapper, {
        text: A,
        className: r("mb-8 max-w-full", N && "text-white/85"),
        refIconClassName: r(N && "[&_*]:!bg-white/85"),
        onClickClassName: "hover:bg-s-color-bg-trans-primary active:bg-s-color-bg-trans-primary cursor-pointer",
        onClick: W,
        allowMultiLine: L.every(e => e.type === attachmentConstants.ReferenceType.ReferenceTypeText),
        icon: (() => {
          if (!D) {
            return null;
          }
          if (fileTypeDetectionUtils.isImageFile($)) {
            return reactJsxRuntimeCoreReexport.jsx(uriImageBackground.UriImagePreview, {
              className: "ml-4",
              uri: D == null ? undefined : D.file?.uri
            });
          }
          let t = D.type === attachmentConstants.ReferenceType.ReferenceTypeLarkDoc;
          return reactJsxRuntimeCoreReexport.jsx(lazyFileIconWrapper.lazyFileIcon, {
            className: r("ml-4 shrink-0", t ? "!text-12" : "text-20"),
            ext: $,
            link: D.type === attachmentConstants.ReferenceType.ReferenceTypeLink,
            larkDoc: t
          });
        })()
      }), E && reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageTextWithAfterNode, {
        className: r(chatThemeStyleConfig.chatThemeConfig[T]?.sendClassNames, N && "!p-[unset] [&_*]:!text-white"),
        style: chatThemeStyleConfig.chatThemeConfig[T].cssVar,
        text: (S = E.block) === null || S === undefined ? undefined : (x = S.content) === null || x === undefined ? undefined : x.text_block?.text
      })]
    });
  });
  function w(e, t, n) {
    var l;
    if ((t = typeof (l = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var l = n.call(e, t || "default");
        if (typeof l != "object") {
          return l;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? l : l + "") in e) {
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
  class T {
    constructor() {
      w(this, "nodeTypes", ["custom_type:reference_text_node"]);
      w(this, "Content", S);
      w(this, "usePropsSelector", () => ({}));
    }
  }
  require.r(exports);
  require.d(exports, {
    SendCustomTextNodeRenderPlugin: function () {
      return T;
    }
  });
}