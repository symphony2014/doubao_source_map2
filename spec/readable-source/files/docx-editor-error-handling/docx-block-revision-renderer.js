// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerBlockRevisionRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 337358
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectMatchUtil = require("object-match-util") /*id: 941914*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  var docxRevisionActionUtils = require("docx-revision-action-utils") /*id: 741606*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docColorUtils = require("doc-color-utils") /*id: 986243*/;
  let m = e => {
    var i;
    if ((i = e.hostElement) === null || i === undefined ? undefined : i.querySelector("canvas")) {
      return {
        "render-success": true
      };
    }
  };
  let v = {
    [docBlockTypeConstants.blockTypeConstants.BITABLE]: m,
    [docBlockTypeConstants.blockTypeConstants.BASE_REFER]: m,
    [docBlockTypeConstants.blockTypeConstants.SHEET]: m
  };
  let b = function (e, i = "transparent") {
    let r = lastElementHelper.getLastElement(throttledOrderByUtil.throttledOrderBy(e, ["createTime"]));
    if (r) {
      return docColorUtils.getDocColorWithAlpha(r.userId);
    } else {
      return i;
    }
  };
  let y = (e, i) => {
    let r = v[i.type];
    if (!r) {
      return;
    }
    let n = e.getBlockViewByBlockIdNotCheck(i.id);
    if (n) {
      return r(n);
    }
  };
  let S = e => {
    let {
      recordId: i,
      blockManager: r
    } = e;
    try {
      var o;
      let [e] = i ? r.getBlockIdsByRecordId(i) : [];
      if (!e) {
        return null;
      }
      let l = r.getBlockModelByBlockIdNotCheck(e);
      if (!l) {
        return null;
      }
      let s = r.getBlockViewByBlockIdNotCheck(e);
      let a = l == null ? undefined : l.snapshot?.parent_id;
      let [c] = r.getBlockIdsByRecordId(a);
      let d = r.getBlockModelByBlockIdNotCheck(c);
      let u = r.getBlockViewByBlockIdNotCheck(d.id);
      let h = (o = u.hostElement) === null || o === undefined ? undefined : o.querySelector("table");
      let f = s.hostElement.getBoundingClientRect();
      let g = h == null ? undefined : h.getBoundingClientRect();
      return {
        left: f.left - g.left,
        top: f.top - g.top,
        width: f.width,
        height: f.height
      };
    } catch (e) {
      return null;
    }
  };
  let k = e => e.type === "table";
  let E = e => {
    let {
      struct: i,
      blockManager: r,
      scrollRect: n,
      revisions: o
    } = e;
    let {
      snapshot: l
    } = i;
    if (!k(l)) {
      return null;
    }
    let s = l.cell_set;
    let a = l.columns_id;
    let c = l.rows_id;
    let d = r.getBlockViewByBlockIdNotCheck(i.id);
    if (_(o)) {
      return null;
    }
    let u = [];
    o.map(e => {
      let {
        details: i
      } = e;
      let {
        actions: o = []
      } = i ?? {};
      let l = o.map(e => {
        let {
          selector: i,
          action: o
        } = e;
        let [l] = i ?? [];
        if (docxRevisionActionUtils.validateListInsert(e) || docxRevisionActionUtils.validateListDelete(e)) {
          let i = docxRevisionActionUtils.validateListDelete(e);
          let g = o.listDelete || o.listInsert;
          let m = {
            "--revision-border-color": i ? docColorUtils.getTextOrBgColor() : docColorUtils.getBrandColorWithAlpha(),
            "--revision-hover-section-bg": R(i),
            "--revision-table-section-bg": I(i)
          };
          if (l === "rows_id") {
            let e = S({
              recordId: s[`${g}${a[0]}`]?.block_id,
              blockManager: r
            });
            if (e) {
              return {
                ...m,
                top: e.top + 1,
                bottom: "unset",
                left: 1,
                right: 6,
                height: e.height
              };
            } else {
              return null;
            }
          }
          if (l === "columns_id") {
            let e = S({
              recordId: s[`${c[0]}${g}`]?.block_id,
              blockManager: r
            });
            let i = d.hostElement.getBoundingClientRect();
            let o = n.left - i.left;
            if (e) {
              return {
                ...m,
                left: e.left + o + 1,
                right: "unset",
                top: 1,
                bottom: 1,
                width: e.width
              };
            } else {
              return null;
            }
          }
        }
        return null;
      }).filter(e => !!e);
      u = [...u, ...l];
    });
    return u;
  };
  let C = e => {
    let {
      struct: i
    } = e;
    let {
      snapshot: r
    } = i;
    return !!k(r) && (r.revisions || []).some(e => {
      let {
        details: i
      } = e;
      let {
        actions: n
      } = i ?? {};
      return !n || n.every(e => docxRevisionActionUtils.validateRevisionPath({
        snapshot: r,
        revisionAction: e
      }));
    });
  };
  let _ = e => e.some(e => {
    return !(e == null ? undefined : e.details) || !(e == null ? undefined : e.details?.actions) || isEmptyUtil.isEmpty(e == null ? undefined : e.details?.actions);
  });
  let R = e => e ? "var(--s-color-bg-trans)" : "var(--s-color-brand-primary-transparent-1)";
  let I = e => e ? "var(--s-color-bg-trans)" : "transparent";
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var docxOverlayPositionSync = require("docx-overlay-position-sync") /*id: 662835*/;
  var tableLayoutConstants_1 = require("table-layout-constants_1") /*id: 673543*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let P = e => {
    let {
      style: i,
      className: r,
      blockManager: n,
      struct: o,
      revision: s
    } = e;
    let c = n.getBlockViewByBlockIdNotCheck(o.id);
    let u = c == null ? undefined : c.hostElement;
    let h = reactCoreLibraryReexport.useMemo(() => (u == null ? undefined : u.querySelector(`.${tableLayoutConstants_1.tableClassNames.SCROLLABLE_CONTENT}`)) || null, [c]);
    let f = reactCoreLibraryReexport.useMemo(() => (u == null ? undefined : u.querySelector("table")) || null, [c]);
    let g = docxOverlayPositionSync.useOverlayPosition(f, n, true, {
      scrollContainer: h
    });
    let p = E({
      blockManager: n,
      struct: o,
      scrollRect: g,
      revisions: [s]
    });
    if (!p || isEmptyUtil.isEmpty(p)) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: p == null ? undefined : p.map((e, n) => reactJsxRuntimeCoreReexport.jsx("div", {
          style: {
            ...i,
            ...e
          },
          className: d(r, "table-revision-section"),
          contentEditable: false,
          suppressContentEditableWarning: true,
          "data-revision-highlight": "false",
          "data-revision-id": s.revisionId
        }, n))
      });
    }
  };
  let L = e => {
    let {
      blockManager: i,
      struct: r
    } = e;
    let n = r.snapshot.revisions || [];
    let o = C({
      struct: r
    });
    if (!n.length || !o) {
      return null;
    }
    let l = b(n);
    let a = objectMatchUtil.checkObjectMatch(n, editorRevisionUtilities.isDeleteOperation);
    let c = _(n);
    let u = {
      "--revision-color": l,
      "--revision-border-color": a ? docColorUtils.getTextOrBgColor() : docColorUtils.getBrandColorWithAlpha()
    };
    let h = y(i, r) || {};
    let f = d("block-revision", `${r.type}-block-revision`, `${r.recordId}-block-revision`, {
      "delete-revision": a && c,
      ...h
    });
    if (c) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        style: u,
        className: f,
        contentEditable: false,
        suppressContentEditableWarning: true,
        "data-revision-highlight": "false"
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "table-revision-container",
        contentEditable: false,
        suppressContentEditableWarning: true,
        children: n.map(e => reactJsxRuntimeCoreReexport.jsx(P, {
          style: u,
          className: f,
          blockManager: i,
          struct: r,
          revision: e
        }, e.revisionId))
      });
    }
  };
  var docxRevisionSignals = require("docx-revision-signals") /*id: 196153*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var useReducerDispatch = require("use-reducer-dispatch") /*id: 289070*/;
  let D = e => {
    let {
      blockManager: i,
      struct: r
    } = e;
    let n = r.snapshot.revisions || [];
    if (!n.length) {
      return null;
    }
    let o = b(n);
    let l = objectMatchUtil.checkObjectMatch(n, editorRevisionUtilities.isDeleteOperation);
    let a = {
      "--revision-color": o,
      "--revision-border-color": l ? docColorUtils.getTextOrBgColor() : docColorUtils.getBrandColorWithAlpha()
    };
    let c = y(i, r) || {};
    return reactJsxRuntimeCoreReexport.jsx("div", {
      style: a,
      className: d("block-revision", `${r.type}-block-revision`, `${r.recordId}-block-revision`, {
        "delete-revision": l,
        ...c
      }),
      contentEditable: false,
      suppressContentEditableWarning: true,
      "data-revision-highlight": "false"
    });
  };
  let x = e => {
    let {
      blockManager: i,
      struct: r
    } = e;
    let {
      type: n
    } = r;
    let s = useReducerDispatch.useReducerDispatch();
    let a = i.getBlockViewByBlockIdNotCheck(r.id);
    let c = a == null ? undefined : a.containerElement;
    reactCoreLibraryReexport.useEffect(() => {
      let e = i.getBlockViewByBlockIdNotCheck(r.id);
      if (e == null ? undefined : e.containerElement) {
        s();
      }
      let n = i.editorAPI.getService(docxRevisionSignals.setRevisionExt).subscribe(e => e.has(r.id) && s());
      return () => n.unsubscribe();
    }, [r, s, i]);
    if (c) {
      if (n === "table") {
        return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx(L, {
          ...e
        }), c);
      } else {
        return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx(D, {
          ...e
        }), c);
      }
    } else {
      return null;
    }
  };
  class F extends editorContextFacade.EditorContextFacade {
    getWrapper(e) {
      return i => {
        let {
          struct: r
        } = i;
        let n = reactCoreLibraryReexport.useCallback((e, i) => {
          var n;
          let o = this.blockManager.getBlockViewByBlockIdNotCheck(r.id);
          if (!o) {
            return;
          }
          let l = (n = o.hostElement) === null || n === undefined ? undefined : n.querySelectorAll(`.${r.recordId}-block-revision`);
          if (!isEmptyUtil.isEmpty(l)) {
            l.forEach(r => {
              let n = r.getAttribute("data-revision-id");
              if (i) {
                if (n && n !== e) {
                  return;
                }
                r.setAttribute("data-revision-highlight", "true");
              } else {
                r.removeAttribute("data-revision-highlight");
              }
            });
          }
        }, [r]);
        return reactJsxRuntimeCoreReexport.jsx(e, {
          ...i,
          toggleRevisionHighlight: n
        });
      };
    }
    getAfterSlot() {
      return e => {
        let {
          struct: i
        } = e;
        if ((i.snapshot.revisions || []).length) {
          return reactJsxRuntimeCoreReexport.jsx(x, {
            blockManager: this.blockManager,
            struct: i
          });
        } else {
          return null;
        }
      };
    }
  }
  var docxBlockRevisionProvider = require("docx-block-revision-provider") /*id: 728098*/;
  function $() {
    docxEditorCore.registerViewExt(docxBlockRevisionProvider.blockRevisionName, F);
  }
  require.d(exports, {
    registerBlockRevisionRenderer: function () {
      return $;
    }
  });
}