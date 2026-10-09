// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocxToolboxMenu'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 399229
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var editorMenuNormalizeUtil = require("editor-menu-normalize-util") /*id: 43746*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var docxEditorMenuConstants = require("docx-editor-menu-constants") /*id: 121350*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  function u(e) {
    switch (e.type) {
      case editorConstantsEnums.MenuItemTypes.MenuItemNormal:
        return docxEditorMenuConstants.iconSize;
      case editorConstantsEnums.MenuItemTypes.SubmenuItemWithChildren:
      case editorConstantsEnums.MenuItemTypes.SubmenuItemWithComponent:
        if (e.notShowArrow) {
          return docxEditorMenuConstants.submenuIconSize;
        } else {
          return docxEditorMenuConstants.menuItemHeight;
        }
      case editorConstantsEnums.MenuItemTypes.Divider:
        return docxEditorMenuConstants.menuItemType;
      default:
        return 0;
    }
  }
  function s(e) {
    return {
      ...e,
      text: e.text ?? e.altText,
      tipPlacement: e.tip ? "right" : e.tipPlacement
    };
  }
  function d(e) {
    return e.type === editorConstantsEnums.MenuItemTypes.Divider;
  }
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docxAiMenuUtils = require("docx-ai-menu-utils") /*id: 154715*/;
  var docxAiMenuComponent = require("docx-ai-menu-component") /*id: 604848*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function v(e) {
    let {
      blocks: n,
      blockManager: r,
      selectionAPI: v,
      onClose: b,
      onClick: y,
      onRefresh: _,
      menuProps: E = {},
      vertical: C = false,
      keyboard: k = false,
      type: w,
      rpSource: I,
      rpEvent: S,
      items: T = [],
      showDivider: B,
      showGroupTitle: M,
      source: R,
      autoSelect: O,
      autoShrink: A,
      boundaryWidth: Z,
      maxHeight: L,
      boundary: x,
      onMenuMouseEnter: N,
      onMenuMouseLeave: P,
      toolbarDirection: D
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (n.length !== 0) {
        docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorConstantsConfig.toolBoxShowEvent, {
          event: S,
          source: I,
          block_id: n[0].id,
          blockManager: r
        });
      }
    }, [n]);
    let H = reactCoreLibraryReexport.useMemo(() => {
      let e = editorMenuNormalizeUtil.normalizeMenuItems(T, {
        showDivider: B,
        showGroupTitle: M
      });
      if (A) {
        return function (e, n) {
          let r = e.reduce((e, n) => e + u(n) + docxEditorMenuConstants.menuItemSpacing, docxEditorMenuConstants.menuItemSpacing + docxEditorMenuConstants.submenuLevel);
          if (n >= r) {
            return e;
          } else {
            return function (e, n, r) {
              let o;
              let i;
              let h;
              let f = e.findIndex(e => e.type === editorConstantsEnums.MenuItemTypes.SubmenuItemWithChildren && e.name === docxEditorMenuConstants.moreMenuName);
              if (f > -1) {
                o = deepCloneWrapper_1.deepClone(e[f]);
                h = e.slice(f + 1);
                i = e.slice(0, f);
              } else {
                o = deepCloneWrapper_1.deepClone(docxEditorMenuConstants.moreMenuItemConfig);
                n += docxEditorMenuConstants.menuItemSpacing + u(o);
                [i, h] = function (e) {
                  let n = e.findIndex(e => docxEditorMenuConstants.commentRelatedMenuItems.includes(e.name));
                  if (n > -1) {
                    return [e.slice(0, n), e.slice(n)];
                  } else {
                    return [e, []];
                  }
                }(e);
              }
              o.extra.isShrinked = true;
              return function (e, n, r, o) {
                e = [...e];
                let i = [];
                let l = [];
                while (r > o) {
                  let n = e.findIndex(e => e.name && docxEditorMenuConstants.mergeCellMenuItems.includes(e.name));
                  if (n === -1) {
                    break;
                  }
                  let o = e.splice(n, 1)[0];
                  i.push(o);
                  r -= docxEditorMenuConstants.menuItemSpacing + u(o);
                  let l = e[n];
                  if (l && d(l) && (n === 0 || n === e.length - 1 || d(e[n - 1]))) {
                    r -= u(e.splice(n, 1)[0]);
                  }
                }
                n.children.unshift(...i.map(s));
                let c = e.length - 1;
                for (; c >= 0; c--) {
                  if (r > o) {
                    let o = e[c];
                    if (c === e.length - 1 && d(o)) {
                      l.unshift(o);
                      continue;
                    }
                    if (o.name && docxEditorMenuConstants.highlightSubmenuItems.includes(o.name)) {
                      l.unshift(s(o));
                      continue;
                    }
                    if (!d(o)) {
                      n.children.unshift(s(o));
                    }
                    r -= docxEditorMenuConstants.menuItemSpacing + u(o);
                  } else {
                    break;
                  }
                }
                return [...e.slice(0, c + 1), ...l, n];
              }(i, o, n, r).concat(h);
            }(e, r, n);
          }
        }(e, Z ?? Infinity);
      } else {
        return e;
      }
    }, [T, B, M, A, Z]);
    let K = reactCoreLibraryReexport.useCallback((e, o) => {
      if (!v.isFocus()) {
        v.restoreFocus();
      }
      if (e.closeBeforeClick) {
        if (b != null) {
          b(true);
        }
      }
      if (docxAiMenuUtils.hasAction(e)) {
        e.action(o, e, R);
      }
      if (y != null) {
        y(e, o);
      }
      if (!e.closeBeforeClick && e.closeAfterClick !== false && b) {
        setTimeout(() => b(true));
      }
      if (n.length) {
        docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorConstantsConfig.toggleAttribute, {
          operation_method: docxEditorConstantsConfig.inputTypeConstants.MOUSE,
          source: w,
          action: e.name,
          block_id: n[0].id,
          blockManager: r
        });
      }
    }, [v, R, y, b, n, r, w]);
    let U = reactCoreLibraryReexport.useCallback(() => {
      if (N != null) {
        N();
      }
    }, [N]);
    let j = reactCoreLibraryReexport.useCallback(() => {
      if (P != null) {
        P();
      }
    }, [P]);
    let F = reactCoreLibraryReexport.useCallback(e => {
      if (docxAiMenuUtils.isSubmenuItem(e) && R) {
        var n;
        if ((n = e.onHover) !== null && n !== undefined) {
          n.call(e, R);
        }
      }
    }, [R]);
    if (H.length === 0) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(docxAiMenuComponent.DocxAiMenu, {
        className: "toolbox",
        items: H,
        onItemClick: K,
        onItemActive: F,
        onRefresh: _,
        onMouseEnter: U,
        onMouseLeave: j,
        onClose: b,
        keyboard: k,
        vertical: C,
        autoSelect: O,
        blockManager: r,
        selectionAPI: v,
        boundary: x,
        block: n[0],
        maxHeight: L,
        toolbarDirection: D,
        ...E
      });
    }
  }
  require.d(exports, {
    DocxToolboxMenu: function () {
      return v;
    }
  });
}