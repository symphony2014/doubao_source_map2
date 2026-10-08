// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'u' to 'stringFormatConversionUtils'
// - Resolved require(708138) to 'string-format-conversion-utils'
// - Renamed variable 'i' to 'universalButtonWrapper'
// - Resolved require(299462) to 'universal-button-wrapper'
// - Renamed variable 'a' to 'docxInputNumberComponent'
// - Resolved require(453756) to 'docx-input-number-component'
// - Renamed variable 'c' to 'docxEditorBlockMetadataUtils'
// - Resolved require(501598) to 'docx-editor-block-metadata-utils'
// - Renamed variable 'l' to 'diProviderCollectEvent'
// - Resolved require(308105) to 'di-provider-collect-event'
// - Renamed variable 's' to 'docxBlockSelectionHandler_1'
// - Resolved require(801350) to 'docx-block-selection-handler_1'
// - Renamed variable 'f' to 'orderedBlockConstants'
// - Resolved require(976830) to 'ordered-block-constants'
// - Renamed variable 'd' to 'orderedListSequenceUpdateHandler'
// - Resolved require(34474) to 'ordered-list-sequence-update-handler'
// - Renamed variable 'p' to 'orderedBlockUtils'
// - Resolved require(5008) to 'ordered-block-utils'
// - Renamed variable 'm' to 'editorRevisionUtilities'
// - Resolved require(80308) to 'editor-revision-utilities'
// - Renamed variable 'v' to 'editorFormatRevisionUtils_1'
// - Resolved require(638641) to 'editor-format-revision-utils_1'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'E' to 'numberedListContinuedIcon'
// - Resolved require(497705) to 'numbered-list-continued-icon'
// - Renamed variable 'y' to 'numberedListNewOutlined'
// - Resolved require(848992) to 'numbered-list-new-outlined'
// - Renamed variable 'x' to 'numberedListRestartOutlined'
// - Resolved require(223814) to 'numbered-list-restart-outlined'
// - Renamed variable 'w' to 'reactMenuComponent'
// - Resolved require(821060) to 'react-menu-component'
// - Updated imported property 'Jy' to 'intToRoman' (module 708138)
// - Updated imported property 'A3' to 'romanToInt' (module 708138)
// - Updated imported property 'rm' to 'numToExcelCol' (module 708138)
// - Updated imported property 'oS' to 'excelColToNum' (module 708138)
// - Updated imported property 'Mv' to 'getBlockOrderInfo' (module 5008)
// - Updated imported property 'WO' to 'findNextOrderedBlock' (module 5008)
// - Updated imported property 'm2' to 'hasNoSequence' (module 5008)
// - Updated imported property 'KM' to 'OrderDirection' (module 976830)
// - Updated imported property 'Rd' to 'orderPriorityMax' (module 976830)
// - Updated imported property 'Xq' to 'getThrottledBlockPath' (module 501598)
// - Updated imported property 'V' to 'collectEventName' (module 308105)
// - Updated imported property 'Be' to 'getBlockFormatRev' (module 638641)
// - Updated imported property 'BY' to 'syncFormatRevision' (module 638641)
// - Updated imported property 'GV' to 'addRevisionContext' (module 80308)
// - Updated imported property 'mj' to 'clearUnorderedBlocks' (module 34474)
// - Updated imported property 'RT' to 'blockTypes' (module 801350)
// - Updated imported property 'Fs' to 'commandTypes' (module 801350)
// - Updated imported property 'Z' to 'InputNumber' (module 453756)
// - Updated imported property 'zx' to 'UniversalButton' (module 299462)
// - Updated imported property 'Z' to 'ListContinuedIcon' (module 497705)
// - Updated imported property 'Z' to 'NumberedListIcon' (module 848992)
// - Updated imported property 'Z' to 'NumberedListRestart' (module 223814)
// - Updated imported property 'v' to 'Menu' (module 821060)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: list-or-heading-modify-panel.840ddcd1.js
         * chunkId: 87195
         * moduleId: 393163
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var stringFormatConversionUtils = require("string-format-conversion-utils") /*id: 708138*/;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var docxInputNumberComponent = require("docx-input-number-component") /*id: 453756*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var orderedBlockConstants = require("ordered-block-constants") /*id: 976830*/;
  var orderedListSequenceUpdateHandler = require("ordered-list-sequence-update-handler") /*id: 34474*/;
  var orderedBlockUtils = require("ordered-block-utils") /*id: 5008*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var editorFormatRevisionUtils_1 = require("editor-format-revision-utils_1") /*id: 638641*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = "list-modify-input";
  let b = [{
    formatter: stringFormatConversionUtils.intToRoman,
    parser: stringFormatConversionUtils.romanToInt,
    checker: e => /^[ivxlcdm]*$/i.test(e)
  }, {
    formatter: e => `${e}`,
    parser: e => parseInt(e, 10),
    checker: e => /^[0-9]*$/.test(e)
  }, {
    formatter: stringFormatConversionUtils.numToExcelCol,
    parser: stringFormatConversionUtils.excelColToNum,
    checker: e => /^[a-zA-Z]*$/.test(e)
  }];
  function g(e) {
    let {
      blockManager: r,
      blockId: n,
      recordId: u,
      updateVisible: g,
      SelectionAPI: E
    } = e;
    let y = reactCoreLibraryReexport.useMemo(() => orderedBlockUtils.getBlockOrderInfo(r, n), [r, n]);
    let x = ((y == null ? undefined : y.level) || 1) % 3;
    let w = reactCoreLibraryReexport.useMemo(() => orderedBlockUtils.findNextOrderedBlock(r, n, orderedBlockConstants.OrderDirection.UP), [r, n]);
    let N = reactCoreLibraryReexport.useRef((y == null ? undefined : y.order) || 1);
    let Z = reactCoreLibraryReexport.useCallback(e => {
      N.current = e;
    }, []);
    let M = reactCoreLibraryReexport.useCallback(() => {
      let e = docxEditorBlockMetadataUtils.getThrottledBlockPath(n, r);
      r.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_ordered_set_number_click", e, {
        click: "click_confirm_edit_number",
        sub_view: "ordered"
      });
    }, [r, n]);
    let C = reactCoreLibraryReexport.useCallback(async e => {
      if (N.current !== undefined && N.current !== (y == null ? undefined : y.order)) {
        var o;
        if (e != null && (o = e.stopPropagation) !== null && o !== undefined) {
          o.call(e);
        }
        let i = w && N.current === w.order + 1 ? "auto" : String(N.current);
        let a = {};
        let c = r.getBlockModelByBlockId(n);
        let l = editorFormatRevisionUtils_1.getBlockFormatRev(r, [c]);
        if (l) {
          let {
            revisionId: e,
            type: r
          } = l;
          editorRevisionUtilities.addRevisionContext(a, {
            revisionId: e,
            type: r
          });
        }
        await r.applyTransaction("list:modify:update", e => {
          editorFormatRevisionUtils_1.syncFormatRevision(r, e, c, l, [["seq", i]], c.snapshot);
          e.replace(u, ["seq"], i);
          orderedListSequenceUpdateHandler.clearUnorderedBlocks(n, e, r);
        }, a);
      }
      g(false);
      let i = r.getBlockModelByBlockId(n).getText().length - 1;
      E.setSelection([{
        id: n,
        type: docxBlockSelectionHandler_1.blockTypes.TEXT,
        selection: {
          start: i,
          end: i
        }
      }], {
        source: docxBlockSelectionHandler_1.commandTypes.ModifySequence
      });
      M();
    }, [r, n, y == null ? undefined : y.order, M, w]);
    let I = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (I.current) {
        I.current.select();
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `${_}`,
      children: [reactJsxRuntimeCoreReexport.jsx("span", {
        className: `${_}-titile`,
        children: t("doc.list.the_new_number_is")
      }), reactJsxRuntimeCoreReexport.jsx(docxInputNumberComponent.InputNumber, {
        defaultValue: y == null ? undefined : y.order,
        min: 1,
        max: orderedBlockConstants.orderPriorityMax,
        formatter: b[x].formatter,
        parser: b[x].parser,
        checker: b[x].checker,
        onChange: Z,
        onPressEnter: C
      }), reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
        className: `${_}-btn`,
        type: "primary",
        onClick: C,
        children: t("common.determine")
      })]
    });
  }
  var numberedListContinuedIcon = require("numbered-list-continued-icon") /*id: 497705*/;
  var numberedListNewOutlined = require("numbered-list-new-outlined") /*id: 848992*/;
  var numberedListRestartOutlined = require("numbered-list-restart-outlined") /*id: 223814*/;
  var reactMenuComponent = require("react-menu-component") /*id: 821060*/;
  let N = "list-modify-menu";
  function Z(e) {
    let {
      blockManager: r,
      blockId: n,
      recordId: u,
      updateCanShowInput: i,
      updateVisible: a
    } = e;
    let s = reactCoreLibraryReexport.useMemo(() => orderedBlockUtils.getBlockOrderInfo(r, n), [r, n]);
    let {
      continueEnable: _,
      createEnable: b
    } = reactCoreLibraryReexport.useMemo(() => ({
      continueEnable: !!orderedBlockUtils.findNextOrderedBlock(r, n, orderedBlockConstants.OrderDirection.UP) && (!!(s == null ? undefined : s.isHeader) || !!orderedBlockUtils.hasNoSequence(r.getBlockModelByBlockId(n)) && (s == null ? undefined : s.order) === 1),
      createEnable: (s == null ? undefined : s.order) !== 1
    }), [r, n, s]);
    let g = reactCoreLibraryReexport.useCallback(async () => {
      let e = r.getBlockModelByBlockId(n);
      let o = {};
      let i = editorFormatRevisionUtils_1.getBlockFormatRev(r, [e]);
      if (i) {
        let {
          revisionId: e,
          type: r
        } = i;
        editorRevisionUtilities.addRevisionContext(o, {
          revisionId: e,
          type: r
        });
      }
      await r.applyTransaction("list:modify:continue", o => {
        editorFormatRevisionUtils_1.syncFormatRevision(r, o, e, i, [["seq", "auto"]], e.snapshot);
        o.replace(u, ["seq"], "auto");
        orderedListSequenceUpdateHandler.clearUnorderedBlocks(n, o, r);
      }, o);
      a(false);
    }, [r, n]);
    let Z = reactCoreLibraryReexport.useCallback(async () => {
      let e = r.getBlockModelByBlockId(n);
      let o = {};
      let i = editorFormatRevisionUtils_1.getBlockFormatRev(r, [e]);
      if (i) {
        let {
          revisionId: e,
          type: r
        } = i;
        editorRevisionUtilities.addRevisionContext(o, {
          revisionId: e,
          type: r
        });
      }
      await r.applyTransaction("list:modify:create", o => {
        editorFormatRevisionUtils_1.syncFormatRevision(r, o, e, i, [["seq", "1"]], e.snapshot);
        o.replace(u, ["seq"], "1");
        orderedListSequenceUpdateHandler.clearUnorderedBlocks(n, o, r);
      }, o);
      a(false);
    }, [r, n]);
    let M = reactCoreLibraryReexport.useCallback(() => {
      i(true);
    }, []);
    let C = reactCoreLibraryReexport.useCallback(e => {
      let o = docxEditorBlockMetadataUtils.getThrottledBlockPath(n, r);
      r.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_ordered_set_number_click", o, {
        click: {
          continue: "click_continue_number",
          create: "click_create_number",
          renumber: "click_edit_number"
        }[e],
        target: "none",
        sub_view: "ordered"
      });
    }, [r, n]);
    let I = reactCoreLibraryReexport.useCallback(e => {
      var r;
      let {
        key: n,
        domEvent: o
      } = e;
      if (o != null && (r = o.stopPropagation) !== null && r !== undefined) {
        r.call(o);
      }
      if (n === "continue") {
        g();
      } else if (n === "create") {
        Z();
      } else if (n === "renumber") {
        M();
      }
      C(n);
    }, [g, Z, M, C]);
    let S = [{
      key: "continue",
      disabled: !_,
      Icon: numberedListContinuedIcon.ListContinuedIcon,
      text: t("doc.list.continue_numbering")
    }, {
      key: "create",
      disabled: !b,
      Icon: numberedListNewOutlined.NumberedListIcon,
      text: t("doc.list.start_a_new_list")
    }, {
      key: "renumber",
      disabled: false,
      Icon: numberedListRestartOutlined.NumberedListRestart,
      text: t("doc.list.restart_numbering")
    }];
    reactCoreLibraryReexport.useEffect(() => {
      let e = docxEditorBlockMetadataUtils.getThrottledBlockPath(n, r);
      r.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageView("ccm_doc_ordered_set_number_view", e, {
        is_support_continue_number: _ ? "true" : "false",
        is_support_create_number: b ? "true" : "false",
        is_support_edit_number: "true",
        sub_view: "ordered"
      });
    }, [r, n, _, b]);
    return reactJsxRuntimeCoreReexport.jsx(reactMenuComponent.Menu, {
      selectable: false,
      className: `${N}`,
      mode: "normal",
      onClick: I,
      children: S.map(e => {
        let {
          key: r,
          disabled: n,
          Icon: o,
          text: u
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(reactMenuComponent.Menu.Item, {
          className: `${N}-item`,
          icon: reactJsxRuntimeCoreReexport.jsx(o, {
            className: `${N}-icon`
          }),
          disabled: n,
          children: u
        }, r);
      })
    });
  }
  function M(e) {
    let [r, n] = reactCoreLibraryReexport.useState(false);
    let {
      blockManager: u,
      blockId: i,
      recordId: a,
      updateVisible: c,
      SelectionAPI: l
    } = e;
    if (r) {
      return reactJsxRuntimeCoreReexport.jsx(g, {
        SelectionAPI: l,
        blockManager: u,
        blockId: i,
        recordId: a,
        updateVisible: c
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(Z, {
        blockManager: u,
        blockId: i,
        recordId: a,
        updateCanShowInput: n,
        updateVisible: c
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return M;
    }
  });
}