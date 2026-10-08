// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'objectDefaultsUtil'
// - Resolved require(679337) to 'object-defaults-util'
// - Renamed variable 'a' to 'isBooleanUtil'
// - Resolved require(507922) to 'is-boolean-util'
// - Renamed variable 'o' to 'mathInlineComponent'
// - Resolved require(762075) to 'math-inline-component'
// - Renamed variable 's' to 'codeBlockComponent_1'
// - Resolved require(822392) to 'code-block-component_1'
// - Renamed variable 'l' to 'languageDetectionHook'
// - Resolved require(759514) to 'language-detection-hook'
// - Resolved require.e(21553) to 'katex-core-library'
// - Resolved require.bind(811377) to 'katex-core-renderer'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'h' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'p' to 'jsUtilFunctions'
// - Resolved require(266643) to 'js-util-functions'
// - Renamed variable 'y' to 'markdownRendererModule'
// - Resolved require(4463) to 'markdown-renderer-module'
// - Resolved require.e(21553) to 'katex-core-library'
// - Resolved require.e(45639) to 'katex-react-wrapper'
// - Resolved require.bind(75906) to 'react-katex-latex-renderer'
// - Resolved require.e(21553) to 'katex-core-library'
// - Resolved require.e(80332) to 'core-js-polyfills'
// - Resolved require.e(43274) to 'mathjax-tex-renderer'
// - Resolved require.e(452) to 'math-renderer'
// - Resolved require.bind(809253) to 'katex-mathjax-tex-component'
// - Resolved require.e(87107) to 'prism-syntax-highlighter'
// - Resolved require.bind(360333) to 'prism-code-block-highlighter-component'
// - Updated imported property 'C_' to 'isRootNode' (module 4463)
// - Updated imported property 'vj' to 'iconType' (module 4463)
// - Updated imported property 'U$' to 'serializeAst' (module 4463)
// - Updated imported property 'FU' to 'useSmoothText' (module 4463)
// - Updated imported property 'Ed' to 'useHopDetection' (module 4463)
// - Updated imported property 'Or' to 'isImageNode' (module 4463)
// - Updated imported property 'QJ' to 'conditionalHtmlEncode' (module 4463)
// - Updated imported property 'jH' to 'useSmoothText_1' (module 4463)
// - Updated imported property 'Xd' to 'isNodeType' (module 4463)
// - Updated imported property 'dO' to 'serializeAstToHtml' (module 4463)
// - Updated imported property 'UY' to 'hasNodeChildren' (module 4463)
// - Updated imported property 'C5' to 'retryWithDelay' (module 4463)
// - Updated imported property 'eL' to 'parseMarkdown' (module 4463)
// - Updated imported property 'Zl' to 'isClosingTag' (module 4463)
// - Updated imported property 'Un' to 'messageType' (module 4463)
// - Updated imported property 'zj' to 'serializeMarkdown' (module 4463)
// - Updated imported property 'AC' to 'hasValue' (module 4463)
// - Updated imported property 'SC' to 'useLanguageDetection' (module 4463)
// - Updated imported property 'Xy' to 'isHeadingNode' (module 4463)
// - Updated imported property 'f' to 'extractTagName' (module 4463)
// - Updated imported property 'MP' to 'PluginBase' (module 4463)
// - Updated imported property 'oh' to 'HookPhase' (module 4463)
// - Updated imported property 'XS' to 'AstPlugin' (module 4463)
// - Updated imported property 'jO' to 'hasChildren' (module 4463)
// - Updated imported property 'v2' to 'useMdBoxSlots' (module 4463)
// - Updated imported property 'wj' to 'processMarkdown' (module 4463)
// - Updated imported property 'mB' to 'extractText' (module 4463)
// - Updated imported property 'A9' to 'useMarkdownProcessor' (module 4463)
// - Updated imported property 'bI' to 'MdBoxComponent' (module 4463)
// - Updated imported property 'zu' to 'statusType' (module 4463)
// - Updated imported property 'C' to 'retryWithDelay' (module 759514)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'GR' to 'sleep' (module 266643)
// - Updated imported property 'Z' to 'MathInlineDisplay_1' (module 762075)
// - Updated imported property 'Z' to 'CodeBlock_1' (module 822392)
// - Updated imported property 'Z' to 'defaults' (module 679337)
// - Updated imported property 'Z' to 'isBoolean' (module 507922)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 880688
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var mathInlineComponent = require("math-inline-component") /*id: 762075*/;
  var codeBlockComponent_1 = require("code-block-component_1") /*id: 822392*/;
  var languageDetectionHook = require("language-detection-hook") /*id: 759514*/;
  class u extends Error {
    constructor(e, t, n) {
      super();
      this.message = e;
      this.lexer = t;
      this.position = n;
    }
  }
  let c = () => {
    let [e, t] = reactCoreLibraryReexport.useState();
    let i = reactCoreLibraryReexport.useCallback(async () => {
      if (e) {
        return;
      }
      let {
        default: r
      } = await languageDetectionHook.retryWithDelay(() => require.e("katex-core-library") /*id: 21553*/.then(require.bind(require, "katex-core-renderer") /*id: 811377*/));
      t(r);
    }, [e]);
    let a = reactCoreLibraryReexport.useMemo(() => {
      var e;
      var t;
      var n;
      var r;
      t = e = class {
        static render() {
          i();
          throw new u("DefaultKatex.render has called", {}, 0);
        }
        static renderToString() {
          i();
          throw new u("DefaultKatex.renderToString has called", {}, 0);
        }
      };
      if ((n = typeof (r = function (e, t) {
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
      }(n = "ParseError", "string")) == "symbol" ? r : r + "") in t) {
        Object.defineProperty(t, n, {
          value: u,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        t[n] = u;
      }
      return e;
    }, [i]);
    return e ?? a;
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = (e, t) => {
    let i = n => reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
      fallback: t && reactJsxRuntimeCoreReexport.jsx(t, {
        ...n
      }),
      children: reactJsxRuntimeCoreReexport.jsx(e, {
        ...n
      })
    });
    i.displayName = e.displayName ?? (t == null ? undefined : t.displayName);
    return i;
  };
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var jsUtilFunctions = require("js-util-functions") /*id: 266643*/;
  let g = async (e, t) => {
    let {
      tryTimes: n = 5,
      interval: r = 100,
      fallback: i,
      onRetryError: a
    } = t;
    for (let t = 0; t < n; t++) {
      let o = t + 1;
      try {
        return await e();
      } catch (e) {
        if (o >= n) {
          if (!isUndefinedCheck.isUndefined(i)) {
            return i;
          }
          throw e;
        }
        if (a != null) {
          a(e, t);
        }
      }
      let s = typeof r == "number" ? r : r(o);
      await jsUtilFunctions.sleep(s);
    }
    throw Error("retry times out of limit");
  };
  let m = (e, t) => function () {
    var n = arguments.length;
    var r = Array(n);
    var i = 0;
    for (; i < n; i++) {
      r[i] = arguments[i];
    }
    return g(() => e(...r), t);
  };
  let v = function (e, t, n = {}) {
    let {
      retryTimes: i = 5,
      retryInterval: a = 100
    } = n;
    return reactCoreLibraryReexport.useMemo(() => f(reactCoreLibraryReexport.lazy(m(e, {
      tryTimes: i,
      interval: a,
      fallback: {
        default: t
      }
    })), t), [i, a]);
  };
  var markdownRendererModule = require("markdown-renderer-module") /*id: 4463*/;
  let w = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      slots: r = {},
      autoFixSyntax: l = true,
      retryTimes: u = 5,
      retryInterval: f = 100,
      ...h
    } = e;
    let p = c();
    let g = v(() => Promise.all([require.e("katex-core-library") /*id: 21553*/, require.e("katex-react-wrapper") /*id: 45639*/]).then(require.bind(require, "react-katex-latex-renderer") /*id: 75906*/), mathInlineComponent.MathInlineDisplay_1, {
      retryTimes: u,
      retryInterval: f
    });
    let m = v(() => Promise.all([require.e("katex-core-library") /*id: 21553*/, require.e("core-js-polyfills") /*id: 80332*/, require.e("mathjax-tex-renderer") /*id: 43274*/, require.e("math-renderer") /*id: 452*/]).then(require.bind(require, "katex-mathjax-tex-component") /*id: 809253*/), g, {
      retryTimes: u,
      retryInterval: f
    });
    let w = v(() => require.e("prism-syntax-highlighter") /*id: 87107*/.then(require.bind(require, "prism-code-block-highlighter-component") /*id: 360333*/), codeBlockComponent_1.CodeBlock_1, {
      retryTimes: u,
      retryInterval: f
    });
    return reactJsxRuntimeCoreReexport.jsx(markdownRendererModule.MdBoxComponent, {
      ref: t,
      slots: objectDefaultsUtil.defaults(r, {
        Tex: m,
        CodeBlockHighlighter: w
      }),
      autoFixSyntax: l && {
        katex: p,
        ...(isBooleanUtil.isBoolean(l) ? {} : l)
      },
      ...h
    });
  });
  require.r(exports);
  require.d(exports, {
    isRoot: function () {
      return markdownRendererModule.isRootNode;
    },
    MdBoxCodeBlockHeaderInnerActionKey: function () {
      return markdownRendererModule.iconType;
    },
    stringifyChildren: function () {
      return markdownRendererModule.serializeAst;
    },
    useCopy: function () {
      return markdownRendererModule.useSmoothText;
    },
    useHop: function () {
      return markdownRendererModule.useHopDetection;
    },
    isImage: function () {
      return markdownRendererModule.isImageNode;
    },
    autoDisableHtmlTag: function () {
      return markdownRendererModule.conditionalHtmlEncode;
    },
    useSmoothText: function () {
      return markdownRendererModule.useSmoothText_1;
    },
    isTypeOfContent: function () {
      return markdownRendererModule.isNodeType;
    },
    MdBoxLazy: function () {
      return w;
    },
    stringifyDomNode: function () {
      return markdownRendererModule.serializeAstToHtml;
    },
    isParent: function () {
      return markdownRendererModule.hasNodeChildren;
    },
    retryLoad: function () {
      return markdownRendererModule.retryWithDelay;
    },
    parseMarkdown: function () {
      return markdownRendererModule.parseMarkdown;
    },
    isEndTagOfHtml: function () {
      return markdownRendererModule.isClosingTag;
    },
    LinkType: function () {
      return markdownRendererModule.messageType;
    },
    stringifyMarkdown: function () {
      return markdownRendererModule.serializeMarkdown;
    },
    isLiteralOfContent: function () {
      return markdownRendererModule.hasValue;
    },
    useIsRTL: function () {
      return markdownRendererModule.useLanguageDetection;
    },
    isHeading: function () {
      return markdownRendererModule.isHeadingNode;
    },
    getTagNameOfHtml: function () {
      return markdownRendererModule.extractTagName;
    },
    BaseSourcePlugin: function () {
      return markdownRendererModule.PluginBase;
    },
    AstPluginPriority: function () {
      return markdownRendererModule.HookPhase;
    },
    BaseAstPlugin: function () {
      return markdownRendererModule.AstPlugin;
    },
    isParentOfContent: function () {
      return markdownRendererModule.hasChildren;
    },
    useMdBoxSlots: function () {
      return markdownRendererModule.useMdBoxSlots;
    },
    parseMarkdownAndProcess: function () {
      return markdownRendererModule.processMarkdown;
    },
    getTextOfAst: function () {
      return markdownRendererModule.extractText;
    },
    useProcessMarkdown: function () {
      return markdownRendererModule.useMarkdownProcessor;
    },
    MdBoxLight: function () {
      return markdownRendererModule.MdBoxComponent;
    },
    ImageStatus: function () {
      return markdownRendererModule.statusType;
    }
  });
}