// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'n' to 'debounceUtil_1_1'
// - Resolved require(887312) to 'debounce-util_1_1'
// - Renamed variable 's' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'u' to 'docxBlockSelectionHandler_1'
// - Resolved require(801350) to 'docx-block-selection-handler_1'
// - Renamed variable 'l' to 'docBlockTextExtractorAndCounter'
// - Resolved require(813142) to 'doc-block-text-extractor-and-counter'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'debounce' (module 887312)
// - Updated imported property 'RT' to 'blockTypes' (module 801350)
// - Updated imported property 'Q$' to 'extractBlockText' (module 813142)
// - Updated imported property 'sA' to 'countTextCharsAndWords' (module 813142)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_index_delay.3c55e6b1.js
         * chunkId: 82165
         * moduleId: 92051
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var docBlockTextExtractorAndCounter = require("doc-block-text-extractor-and-counter") /*id: 813142*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var _ = e => {
    let {
      selectionAPI: i,
      blockManager: r
    } = e;
    let [o, _] = reactCoreLibraryReexport.useState();
    let d = reactCoreLibraryReexport.useMemo(() => debounceUtil_1_1.debounce(() => {
      var o;
      var n;
      let s = i.getSelection();
      if (i.isCursor(s)) {
        _(0);
        return;
      }
      let c = "";
      if (s.length > 1 && i.isBlockSelection(s) || s.length === 1 && (((o = s[0]) === null || o === undefined ? undefined : o.selection?.start) !== ((n = s[0]) === null || n === undefined ? undefined : n.selection?.end) || s[0].type === docxBlockSelectionHandler_1.blockTypes.BLOCK) || i.isTextSelectionAcrossBlocks(s)) {
        c = docBlockTextExtractorAndCounter.extractBlockText(r, s);
      }
      let {
        wordCount: d
      } = docBlockTextExtractorAndCounter.countTextCharsAndWords(c);
      _(d);
    }, 100), [i, r]);
    reactCoreLibraryReexport.useEffect(() => () => d.cancel(), [d]);
    reactCoreLibraryReexport.useEffect(() => {
      i.onSelectionChange(d);
      if (i && r) {
        d();
      }
      return () => {
        i.offSelectionChange(d);
      };
    }, [i, d]);
    let p = a("rangecode-bomb-container-bottom", {
      show: !!o
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: p,
      children: reactJsxRuntimeCoreReexport.jsx("span", {
        children: `${t("LarkCCM_Docs_WordCount_Text", {
          num: o
        })}`
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    default: function () {
      return _;
    }
  });
}