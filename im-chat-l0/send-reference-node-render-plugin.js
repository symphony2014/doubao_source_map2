// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'attachmentConstants'
// - Resolved require(373585) to 'attachment-constants'
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'a' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'u' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'c' to 'refContentWrapperComponent'
// - Resolved require(15351) to 'ref-content-wrapper-component'
// - Renamed variable 'd' to 'pdfChatMessageHandler'
// - Resolved require(502659) to 'pdf-chat-message-handler'
// - Renamed variable 'v' to 'chatInputRefUtils'
// - Resolved require(859718) to 'chat-input-ref-utils'
// - Renamed variable 'f' to 'messageContextDefinition'
// - Resolved require(786528) to 'message-context-definition'
// - Renamed variable 'p' to 'urlExtensionDetectionUtils'
// - Resolved require(12177) to 'url-extension-detection-utils'
// - Renamed variable '_' to 'lazyFileIconWrapper'
// - Resolved require(312448) to 'lazy-file-icon-wrapper'
// - Renamed variable 'm' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'h' to 'fileTypeDetectionUtils'
// - Resolved require(393072) to 'file-type-detection-utils'
// - Renamed variable 'g' to 'getFileExtension'
// - Resolved require(256745) to 'get-file-extension'
// - Renamed variable 'k' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'S' to 'referenceBlockTypes'
// - Resolved require(499949) to 'reference-block-types'
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property 'lW' to 'ReferenceType' (module 373585)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'UD' to 'useMessage' (module 786528)
// - Updated imported property 'XR' to 'joinTruthyStrings' (module 859718)
// - Updated imported property 'mh' to 'getFileListSummary' (module 859718)
// - Updated imported property 'qi' to 'useUrlExtension' (module 12177)
// - Updated imported property 'LW' to 'imageExtensions' (module 393072)
// - Updated imported property 'l' to 'getFileExtension' (module 256745)
// - Updated imported property 'n' to 'handlePdfChatMessage' (module 502659)
// - Updated imported property 's' to 'RefContentWrapper' (module 15351)
// - Updated imported property 'aA' to 'lazyFileIcon' (module 312448)
// - Updated imported property 'W' to 'referenceBlockTypes' (module 499949)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 273873
         */
module.exports = function (module, exports, require) {
  let l = e => {
    let {
      isFirstReferenceImBlock: t
    } = e;
    if (t) {
      return "flex justify-end";
    } else {
      return "hidden";
    }
  };
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let o = (e, t) => {
    let o = (e.contentBlocks ?? []).filter(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_REFERENCE).filter(e => {
      return e.content?.reference_block !== undefined;
    }).filter(e => {
      var n;
      return ((n = e.content) === null || n === undefined ? undefined : n.reference_block?.type) !== attachmentConstants.ReferenceType.ReferenceTypePPTTemplate;
    });
    let a = t.block_id === o[0]?.block_id;
    return {
      referenceBlocks: o.map(e => e.content.reference_block),
      isFirstReferenceImBlock: a
    };
  };
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var refContentWrapperComponent = require("ref-content-wrapper-component") /*id: 15351*/;
  var pdfChatMessageHandler = require("pdf-chat-message-handler") /*id: 502659*/;
  var chatInputRefUtils = require("chat-input-ref-utils") /*id: 859718*/;
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  var urlExtensionDetectionUtils = require("url-extension-detection-utils") /*id: 12177*/;
  var lazyFileIconWrapper = require("lazy-file-icon-wrapper") /*id: 312448*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  let y = {};
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = (e, t) => {
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
  let x = (e, t) => {
    if (e.type === attachmentConstants.ReferenceType.ReferenceTypeText) {
      return b(e, t);
    } else if (e.type === attachmentConstants.ReferenceType.ReferenceTypeFile) {
      return e.file?.name;
    } else if (e.type === attachmentConstants.ReferenceType.ReferenceTypeLink) {
      return e.link?.link_url;
    } else if (e.type === attachmentConstants.ReferenceType.ReferenceTypeLarkDoc) {
      return e.lark_doc?.title;
    } else {
      return undefined;
    }
  };
  let C = reactCoreLibraryReexport.memo(e => {
    var t;
    let {
      referenceBlocks: n,
      isFirstReferenceImBlock: l
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let o = messageContextDefinition.useMessage();
    let u = n.filter(e => e.type === attachmentConstants.ReferenceType.ReferenceTypeText).map(e => x(e, r)).filter(e => e !== undefined);
    let b = n.filter(e => e.type !== attachmentConstants.ReferenceType.ReferenceTypeText).map(e => x(e, r)).filter(e => e !== undefined);
    let C = u.length > 0 ? chatInputRefUtils.joinTruthyStrings(u) : b.length > 0 ? chatInputRefUtils.getFileListSummary(b, r) : "";
    let S = n.find(e => e.type !== attachmentConstants.ReferenceType.ReferenceTypeText);
    let w = S ? x(S, r) : "";
    let {
      ext: T
    } = urlExtensionDetectionUtils.useUrlExtension((S == null ? undefined : S.type) === attachmentConstants.ReferenceType.ReferenceTypeLink && w ? w : "", fileTypeDetectionUtils.imageExtensions);
    let R = (S == null ? undefined : S.type) === attachmentConstants.ReferenceType.ReferenceTypeLink ? T : getFileExtension.getFileExtension(w || "");
    let I = pdfChatMessageHandler.handlePdfChatMessage({
      message: o
    });
    let N = ((t = y.checkHasLocalPath) === null || t === undefined ? undefined : t.call(y, n)) || {};
    let E = reactCoreLibraryReexport.useMemo(() => (N == null ? undefined : N.onClick) || (I == null ? undefined : I.onClick), [I, N]);
    if (C && n.length && l) {
      return reactJsxRuntimeCoreReexport.jsx(refContentWrapperComponent.RefContentWrapper, {
        text: C,
        className: "mb-8 max-w-full",
        onClickClassName: "hover:bg-s-color-bg-trans-primary active:bg-s-color-bg-trans-primary cursor-pointer",
        onClick: E,
        allowMultiLine: n.every(e => e.type === attachmentConstants.ReferenceType.ReferenceTypeText),
        icon: (() => {
          if (!S) {
            return null;
          }
          let e = S.type === attachmentConstants.ReferenceType.ReferenceTypeLarkDoc;
          return reactJsxRuntimeCoreReexport.jsx(lazyFileIconWrapper.lazyFileIcon, {
            className: s("ml-4 shrink-0", e ? "!text-12" : "text-20"),
            ext: R,
            link: S.type === attachmentConstants.ReferenceType.ReferenceTypeLink,
            larkDoc: e
          });
        })()
      });
    } else {
      return null;
    }
  });
  var referenceBlockTypes = require("reference-block-types") /*id: 499949*/;
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
      w(this, "nodeTypes", referenceBlockTypes.referenceBlockTypes);
      w(this, "Content", C);
      w(this, "usePropsSelector", o);
      w(this, "useNodeWrapperClassName", l);
    }
  }
  require.r(exports);
  require.d(exports, {
    SendReferenceNodeRenderPlugin: function () {
      return T;
    }
  });
}