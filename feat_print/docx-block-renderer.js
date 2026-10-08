// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_x' to 'DocxBlockRenderer'
// - Renamed export 'cP' to 'useBlockFetchStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 984324
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxBlockLoading = require("docx-block-loading") /*id: 973751*/;
  var docxBlockLoadingRetry = require("docx-block-loading-retry") /*id: 607364*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "docx-block-loading-container docx-block-loading-container-block-loading",
    style: {
      width: "100%",
      height: "220px"
    },
    children: reactJsxRuntimeCoreReexport.jsx(docxBlockLoading.DocxBlockLoading, {
      displayMode: e.displayMode
    })
  });
  let d = e => {
    let {
      displayMode: i = docBlockTypeConstants.blockDisplayConstants.BLOCK,
      blockError: r,
      onClickRetry: n
    } = e;
    let o = i === docBlockTypeConstants.blockDisplayConstants.INLINE;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      style: {
        width: "100%",
        height: o ? undefined : "220px"
      },
      children: reactJsxRuntimeCoreReexport.jsx(docxBlockLoadingRetry.DocxBlockLoadRetry, {
        displayMode: i,
        onClickRetry: n,
        blockError: r
      })
    });
  };
  function u(e) {
    let {
      blockId: i,
      blockType: r,
      fetcher: o,
      displayMode: l = docBlockTypeConstants.blockDisplayConstants.BLOCK,
      onFetchFail: u,
      renderPlaceholder: h,
      renderErrorPlaceholder: p,
      renderComponent: f
    } = e;
    let [g, m] = reactCoreLibraryReexport.useState(o.getBlockError(r));
    let [v, b] = reactCoreLibraryReexport.useState(0);
    let y = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (o.isBlockFetched(r)) {
        y.current = true;
        return;
      }
      if (o.isBlockFetchError(r)) {
        let e = o.getBlockError(r);
        if (u != null) {
          u(e);
        }
      }
      let e = o.fetchFinish$.subscribe(r => {
        if (r.blockId === i && !y.current) {
          if (r.error) {
            m(r.error);
            if (u != null) {
              u(r.error);
            }
          } else {
            m("");
            y.current = true;
            e.unsubscribe();
          }
          b(v + 1);
        }
      });
      return () => e.unsubscribe();
    }, [i, r, o]);
    let w = reactCoreLibraryReexport.useCallback(() => {
      o.retryFetchBlock(i);
      m("");
    }, [i]);
    let k = reactCoreLibraryReexport.useMemo(() => h ? h() : reactJsxRuntimeCoreReexport.jsx(c, {
      displayMode: l
    }), [l]);
    let S = reactCoreLibraryReexport.useMemo(() => p ? p() : reactJsxRuntimeCoreReexport.jsx(d, {
      displayMode: l,
      onClickRetry: w,
      blockError: {
        id: i,
        type: r,
        errorMessage: g
      }
    }), [i, r, l, g]);
    if (o.isBlockFetchError(r)) {
      return S;
    } else if (o.isBlockFetched(r)) {
      return f(o.getBlockFetchResult(r));
    } else {
      return k;
    }
  }
  require.d(exports, {
    DocxBlockRenderer: function () {
      return d;
    },
    useBlockFetchStatus: function () {
      return u;
    }
  });
}