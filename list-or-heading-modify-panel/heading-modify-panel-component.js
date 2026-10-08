// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'u' to 'universalButtonWrapper'
// - Resolved require(299462) to 'universal-button-wrapper'
// - Renamed variable 'i' to 'docxInputNumberComponent'
// - Resolved require(453756) to 'docx-input-number-component'
// - Renamed variable 'a' to 'docxEditorBlockMetadataUtils'
// - Resolved require(501598) to 'docx-editor-block-metadata-utils'
// - Renamed variable 'c' to 'diProviderCollectEvent'
// - Resolved require(308105) to 'di-provider-collect-event'
// - Renamed variable 'l' to 'flowHeadingFoldUtils'
// - Resolved require(451530) to 'flow-heading-fold-utils'
// - Renamed variable 's' to 'editorRevisionUtilities'
// - Resolved require(80308) to 'editor-revision-utilities'
// - Renamed variable 'f' to 'editorFormatRevisionUtils_1'
// - Resolved require(638641) to 'editor-format-revision-utils_1'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable '_' to 'numberedListContinuedIcon'
// - Resolved require(497705) to 'numbered-list-continued-icon'
// - Renamed variable 'b' to 'numberedListNewOutlined'
// - Resolved require(848992) to 'numbered-list-new-outlined'
// - Renamed variable 'g' to 'numberedListRestartOutlined'
// - Resolved require(223814) to 'numbered-list-restart-outlined'
// - Renamed variable 'E' to 'reactMenuComponent'
// - Resolved require(821060) to 'react-menu-component'
// - Renamed variable 'y' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'w' to 'docEditorConstants_1'
// - Resolved require(2607) to 'doc-editor-constants_1'
// - Updated imported property 'Xq' to 'getThrottledBlockPath' (module 501598)
// - Updated imported property 'V' to 'collectEventName' (module 308105)
// - Updated imported property 'SP' to 'parseHeadingLevel' (module 451530)
// - Updated imported property 'Be' to 'getBlockFormatRev' (module 638641)
// - Updated imported property 'BY' to 'syncFormatRevision' (module 638641)
// - Updated imported property 'GV' to 'addRevisionContext' (module 80308)
// - Updated imported property 'Z' to 'InputNumber' (module 453756)
// - Updated imported property 'zx' to 'UniversalButton' (module 299462)
// - Updated imported property 'Nm' to 'directionTypes' (module 2607)
// - Updated imported property 'Z' to 'ListContinuedIcon' (module 497705)
// - Updated imported property 'Z' to 'NumberedListIcon' (module 848992)
// - Updated imported property 'Z' to 'NumberedListRestart' (module 223814)
// - Updated imported property 'v' to 'Menu' (module 821060)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: list-or-heading-modify-panel.840ddcd1.js
         * chunkId: 87195
         * moduleId: 216502
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var docxInputNumberComponent = require("docx-input-number-component") /*id: 453756*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var flowHeadingFoldUtils = require("flow-heading-fold-utils") /*id: 451530*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var editorFormatRevisionUtils_1 = require("editor-format-revision-utils_1") /*id: 638641*/;
  function d(e) {
    if (!e) {
      return {
        seqNumber: "",
        seqPrefix: ""
      };
    }
    let r = e.split(".");
    while (r.length > 1) {
      let e = r.pop();
      if (e) {
        return {
          seqNumber: e,
          seqPrefix: `${r.join(".")}.`
        };
      }
    }
    return {
      seqNumber: r[r.length - 1],
      seqPrefix: ""
    };
  }
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = "heading-modify-input";
  let v = "HEADING-MODIFY-INPUT";
  function h(e) {
    let {
      blockManager: r,
      headingModule: n,
      blockId: h,
      recordId: _,
      order: b,
      updateVisible: g
    } = e;
    let E = reactCoreLibraryReexport.useMemo(() => r.getBlockModelByBlockId(h), [r, h]);
    let {
      seqNumber: y,
      seqPrefix: x
    } = d(b);
    let [w, N] = reactCoreLibraryReexport.useState(y);
    let Z = reactCoreLibraryReexport.useRef(y);
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        e.stopPropagation();
      };
      let r = document.getElementById(v);
      if (r != null) {
        r.addEventListener("mousemove", e);
      }
      return () => {
        if (r != null) {
          r.removeEventListener("mousemove", e);
        }
      };
    }, [h]);
    let M = reactCoreLibraryReexport.useCallback(() => {
      let e = docxEditorBlockMetadataUtils.getThrottledBlockPath(h, r);
      r.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_ordered_set_number_click", e, {
        click: "click_confirm_edit_number",
        sub_view: "heading"
      });
    }, [r, h]);
    let C = reactCoreLibraryReexport.useCallback(async () => {
      let e = x ? `${x}${Z.current}` : `${Z.current}.`;
      if (Z.current && e && e !== b) {
        let e = flowHeadingFoldUtils.parseHeadingLevel(E.type);
        let o = n == null ? undefined : n.hasParent(E.struct);
        let u = x === "" && e !== 1 && o;
        let i = {};
        let a = editorFormatRevisionUtils_1.getBlockFormatRev(r, [E]);
        if (a) {
          let {
            revisionId: e,
            type: r
          } = a;
          editorRevisionUtilities.addRevisionContext(i, {
            revisionId: e,
            type: r
          });
        }
        await r.applyTransaction("heading:modify:update", e => {
          editorFormatRevisionUtils_1.syncFormatRevision(r, e, E, a, [["seq", `${Z.current}`], ...(u ? [["seq_level", "1"]] : [])], E.snapshot);
          e.replace(_, ["seq"], Z.current);
          if (u) {
            if (E.record.get(["seq_level"])) {
              e.replace(_, ["seq_level"], "1");
            } else {
              e.insert(_, ["seq_level"], "1");
            }
          }
          if (n != null) {
            n.renumber(E.struct, false);
          }
        }, i);
      }
      g(false);
      M();
    }, [r, h, M]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `${m}`,
      id: v,
      children: [reactJsxRuntimeCoreReexport.jsx("span", {
        className: `${m}-title`,
        children: t("CreationDoc_Docs_AutoNumberHeadings_CurrentValue")
      }), reactJsxRuntimeCoreReexport.jsxs("span", {
        className: `${m}-custom-order`,
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          children: x
        }), reactJsxRuntimeCoreReexport.jsx(docxInputNumberComponent.InputNumber, {
          defaultValue: (() => {
            let e = parseInt(w, 10);
            if (Number.isNaN(e)) {
              return 1;
            } else {
              return e;
            }
          })(),
          min: 1,
          max: 999999999,
          onChange: e => {
            N(e.toString());
            Z.current = e.toString();
          },
          onPressEnter: C,
          formatter: e => `${e}`,
          parser: e => parseInt(e, 10),
          checker: e => /^[0-9]*$/.test(e)
        })]
      }), reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
        className: `${m}-btn`,
        type: "primary",
        disabled: !w,
        onClick: C,
        children: t("common.determine")
      })]
    });
  }
  var numberedListContinuedIcon = require("numbered-list-continued-icon") /*id: 497705*/;
  var numberedListNewOutlined = require("numbered-list-new-outlined") /*id: 848992*/;
  var numberedListRestartOutlined = require("numbered-list-restart-outlined") /*id: 223814*/;
  var reactMenuComponent = require("react-menu-component") /*id: 821060*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var x = classnamesUtils;
  var docEditorConstants_1 = require("doc-editor-constants_1") /*id: 2607*/;
  let N = "heading-modify-menu";
  let Z = "HEADING-MODIFY-MENU";
  function M(e) {
    let {
      blockManager: r,
      headingModule: n,
      blockId: u,
      recordId: i,
      order: l,
      updateCanShowInput: m,
      updateVisible: v
    } = e;
    let h = reactCoreLibraryReexport.useMemo(() => r.getBlockModelByBlockId(u), [r, u]);
    let {
      seq: y,
      seq_level: M
    } = reactCoreLibraryReexport.useMemo(() => h.record.snapshot, [h]);
    let {
      seqNumber: C,
      seqPrefix: I
    } = d(l);
    let S = l === "1." || C === "1" && I === "";
    let O = reactCoreLibraryReexport.useMemo(() => {
      let e = n == null ? undefined : n.hasSameHeading(u, docEditorConstants_1.directionTypes.UP);
      let r = e && function (e, r, n) {
        if (!n) {
          return false;
        }
        let {
          recordId: o
        } = r;
        let u = e.getOrderText(o);
        let {
          seqNumber: i,
          seqPrefix: a
        } = d(n);
        let {
          seqNumber: c,
          seqPrefix: l
        } = d(u);
        return a === l && Number(i) === Number(c) + 1;
      }(n, e, l);
      return !e || r || (M === undefined || M === "auto") && y === "auto";
    }, [u]);
    let k = [{
      key: "continue",
      disabled: O,
      Icon: numberedListContinuedIcon.ListContinuedIcon,
      text: t("CreationDoc_Docs_AutoNumberHeadings_Continue")
    }, {
      key: I ? "create" : "createOne",
      disabled: S,
      Icon: numberedListNewOutlined.NumberedListIcon,
      text: t("CreationDoc_Docs_AutoNumberHeadings_Restart"),
      subMenu: I ? [{
        key: "createOne",
        disabled: S,
        text: t("CreationDoc_Docs_AutoNumberHeadings_StartFrom", {}, "", "1.")
      }, {
        key: "createOneChild",
        disabled: C === "1",
        text: t("CreationDoc_Docs_AutoNumberHeadings_StartFrom", {}, "", `${I}1`)
      }] : []
    }, {
      key: "renumber",
      disabled: false,
      Icon: numberedListRestartOutlined.NumberedListRestart,
      text: t("CreationDoc_Docs_AutoNumberHeadings_CustomValue")
    }];
    let A = reactCoreLibraryReexport.useCallback(async () => {
      let e = {};
      let o = editorFormatRevisionUtils_1.getBlockFormatRev(r, [h]);
      if (o) {
        let {
          revisionId: r,
          type: n
        } = o;
        editorRevisionUtilities.addRevisionContext(e, {
          revisionId: r,
          type: n
        });
      }
      await r.applyTransaction("heading:modify:continue", e => {
        editorFormatRevisionUtils_1.syncFormatRevision(r, e, h, o, [["seq", "auto"], ["seq_level", "auto"]], h.snapshot);
        e.replace(i, ["seq"], "auto");
        e.replace(i, ["seq_level"], "auto");
        if (n != null) {
          n.renumber(h.struct, true);
        }
      }, e);
      v(false);
    }, [r, u]);
    let P = reactCoreLibraryReexport.useCallback(async () => {
      let e = {};
      let o = editorFormatRevisionUtils_1.getBlockFormatRev(r, [h]);
      if (o) {
        let {
          revisionId: r,
          type: n
        } = o;
        editorRevisionUtilities.addRevisionContext(e, {
          revisionId: r,
          type: n
        });
      }
      await r.applyTransaction("heading:modify:createOne", e => {
        editorFormatRevisionUtils_1.syncFormatRevision(r, e, h, o, [["seq", "1"], ["seq_level", "1"]], h.snapshot);
        e.replace(i, ["seq_level"], "1");
        e.replace(i, ["seq"], "1");
        if (n != null) {
          n.renumber(h.struct, true);
        }
      }, e);
      v(false);
    }, [r, u]);
    let R = reactCoreLibraryReexport.useCallback(async () => {
      let e = {};
      let o = editorFormatRevisionUtils_1.getBlockFormatRev(r, [h]);
      if (o) {
        let {
          revisionId: r,
          type: n
        } = o;
        editorRevisionUtilities.addRevisionContext(e, {
          revisionId: r,
          type: n
        });
      }
      await r.applyTransaction("heading:modify:createOneChild", e => {
        editorFormatRevisionUtils_1.syncFormatRevision(r, e, h, o, [["seq", "1"]], h.snapshot);
        e.replace(i, ["seq"], "1");
        if (n != null) {
          n.renumber(h.struct, false);
        }
      }, e);
      v(false);
    }, [r]);
    let T = reactCoreLibraryReexport.useCallback(() => {
      m(true);
    }, []);
    let j = reactCoreLibraryReexport.useCallback(e => {
      let n = {
        createOne: "current_queue",
        createOneChild: "parent_queue"
      };
      let o = docxEditorBlockMetadataUtils.getThrottledBlockPath(u, r);
      let i = {
        click: {
          continue: "click_continue_number",
          createOne: "click_create_number",
          createOneChild: "click_create_number",
          renumber: "click_edit_number"
        }[e],
        target: "none",
        sub_view: "heading"
      };
      if (n[e]) {
        Object.assign(i, {
          sub_click: n[e]
        });
      }
      r.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_ordered_set_number_click", o, i);
    }, [r, u]);
    let B = reactCoreLibraryReexport.useCallback(e => {
      let {
        key: r
      } = e;
      switch (r) {
        case "continue":
          A();
          break;
        case "createOne":
          P();
          break;
        case "createOneChild":
          R();
          break;
        case "renumber":
          T();
      }
      j(r);
    }, [A, T, j]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        e.stopPropagation();
      };
      let r = document.getElementById(Z);
      if (r != null) {
        r.addEventListener("mousemove", e);
      }
      return () => {
        if (r != null) {
          r.removeEventListener("mousemove", e);
        }
      };
    }, [u]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = docxEditorBlockMetadataUtils.getThrottledBlockPath(u, r);
      r.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageView("ccm_doc_ordered_set_number_view", e, {
        is_support_continue_number: O ? "false" : "true",
        is_support_create_number: S ? "false" : "true",
        is_support_edit_number: "true",
        sub_view: "heading"
      });
    }, [r, u]);
    return reactJsxRuntimeCoreReexport.jsx(reactMenuComponent.Menu, {
      forceSubMenuRender: true,
      selectable: false,
      className: `${N}`,
      mode: "normal",
      onClick: B,
      id: Z,
      children: k.map(e => {
        let {
          key: r,
          disabled: n,
          Icon: o,
          text: u,
          subMenu: i
        } = e;
        if (i && i.length !== 0) {
          return reactJsxRuntimeCoreReexport.jsx(reactMenuComponent.Menu.SubMenu, {
            className: `${N}-submenu`,
            icon: reactJsxRuntimeCoreReexport.jsx(o, {
              className: `${N}-icon`
            }),
            title: u,
            disabled: n,
            children: i.map(e => {
              let {
                key: r,
                disabled: n,
                text: o
              } = e;
              let u = x("number-key", {
                disabled: n
              });
              let i = [o];
              let a = r === "createOne" ? "1." : `${I}1`;
              let c = o.split(a);
              if (c.length === 2) {
                i = [c[0], a, c[1]];
              }
              return reactJsxRuntimeCoreReexport.jsx(reactMenuComponent.Menu.Item, {
                className: `${N}-children`,
                disabled: n,
                children: i.map((e, r) => r === 1 ? reactJsxRuntimeCoreReexport.jsx("span", {
                  className: u,
                  children: e
                }, r) : reactJsxRuntimeCoreReexport.jsx("span", {
                  children: e
                }, r))
              }, r);
            })
          }, r);
        } else {
          return reactJsxRuntimeCoreReexport.jsx(reactMenuComponent.Menu.Item, {
            className: `${N}-item`,
            icon: reactJsxRuntimeCoreReexport.jsx(o, {
              className: `${N}-icon`
            }),
            disabled: n,
            children: u
          }, r);
        }
      })
    });
  }
  function C(e) {
    let [r, n] = reactCoreLibraryReexport.useState(false);
    let {
      blockManager: u,
      headingModule: i,
      blockId: a,
      recordId: c,
      order: l,
      updateVisible: s
    } = e;
    if (r) {
      return reactJsxRuntimeCoreReexport.jsx(h, {
        blockManager: u,
        headingModule: i,
        blockId: a,
        recordId: c,
        order: l,
        updateVisible: s
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(M, {
        blockManager: u,
        headingModule: i,
        blockId: a,
        recordId: c,
        order: l,
        updateCanShowInput: n,
        updateVisible: s
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return C;
    }
  });
}