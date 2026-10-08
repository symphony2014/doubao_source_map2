// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'markdownParserSerializer'
// - Resolved require(512638) to 'markdown-parser-serializer'
// - Renamed variable 'i' to 'skillMessageLifecycleTypes'
// - Resolved require(617019) to 'skill-message-lifecycle-types'
// - Renamed variable 'a' to 'asyncSkillReceiveHook'
// - Resolved require(463729) to 'async-skill-receive-hook'
// - Renamed variable 'l' to 'codemirrorScrollEndHandler'
// - Resolved require(580557) to 'codemirror-scroll-end-handler'
// - Renamed variable 'c' to 'codemirrorEditorUtils'
// - Resolved require(977017) to 'codemirror-editor-utils'
// - Renamed variable 's' to 'reactCodemirrorEditorComponent'
// - Resolved require(160872) to 'react-codemirror-editor-component'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Hs' to 'codeType' (module 617019)
// - Updated imported property 'eL' to 'parseMarkdown' (module 512638)
// - Updated imported property 'v' to 'scrollEndHandler' (module 580557)
// - Updated imported property 'Z' to 'useSkillReceive' (module 463729)
// - Updated imported property 'tD' to 'calculateTextDiff' (module 977017)
// - Updated imported property 'M' to 'CodeMirrorEditor' (module 160872)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16516.625a9212.js
         * chunkId: 16516
         * moduleId: 407427
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var markdownParserSerializer = require("markdown-parser-serializer") /*id: 512638*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var asyncSkillReceiveHook = require("async-skill-receive-hook") /*id: 463729*/;
  var codemirrorScrollEndHandler = require("codemirror-scroll-end-handler") /*id: 580557*/;
  var codemirrorEditorUtils = require("codemirror-editor-utils") /*id: 977017*/;
  var reactCodemirrorEditorComponent = require("react-codemirror-editor-component") /*id: 160872*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = "python";
  let m = e => {
    let {
      code: t,
      type: r,
      isBlockFinished: m
    } = e;
    let {
      pureCode: p,
      lang: h
    } = reactCoreLibraryReexport.useMemo(() => {
      if (r !== skillMessageLifecycleTypes.codeType.CodeType_Markdown) {
        return {
          pureCode: t,
          lang: d
        };
      }
      {
        let {
          value: e,
          lang: r
        } = markdownParserSerializer.parseMarkdown(t).children.find(e => e.type === "code") || {};
        return {
          pureCode: e,
          lang: r || d
        };
      }
    }, [t, r]);
    let g = reactCoreLibraryReexport.useRef(null);
    let [v, f] = reactCoreLibraryReexport.useState();
    let b = reactCoreLibraryReexport.useRef(!m);
    let y = reactCoreLibraryReexport.useMemo(() => codemirrorScrollEndHandler.scrollEndHandler(e => {
      if (e) {
        if (!m) {
          b.current = true;
        }
      } else {
        b.current = false;
      }
    }, {
      threshold: 12
    }), [m]);
    let w = reactCoreLibraryReexport.useMemo(() => [y], [y]);
    let {
      run: k
    } = asyncSkillReceiveHook.useSkillReceive((e, t) => {
      let r = codemirrorEditorUtils.calculateTextDiff(e.state.doc.toString(), t ?? "", {
        scrollIntoView: b.current
      });
      if (r) {
        let t = e.state.update(r);
        e.dispatch(t);
      }
    }, {
      wait: 100,
      leading: true,
      trailing: true
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (v) {
        k(v, p ?? "");
      }
    }, [v, p]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: `
        w-340 overflow-hidden rounded-10 border-[0.8px]
        border-s-color-border-tertiary bg-s-color-bg-secondary
        [&_.cm-editor]:h-auto! [&_.cm-editor]:max-h-180
        [&_.cm-editor]:bg-s-color-bg-secondary!
        [&_.cm-gutterElement]:text-s-color-text-tertiary!
        [&_.cm-gutters]:bg-s-color-bg-secondary!
        [&_.cm-line]:bg-transparent!
        [&_.cm-lineNumbers]:min-w-[27px]!
        [&_.cm-scroller]:py-10
      `,
      children: reactJsxRuntimeCoreReexport.jsx(reactCodemirrorEditorComponent.CodeMirrorEditor, {
        ref: g,
        value: "",
        language: h,
        readOnly: true,
        editable: false,
        extensions: w,
        onCreateEditor: f,
        height: "180px"
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    CodeBlockInDeepThinkingStep: function () {
      return m;
    }
  });
}