// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'iA' to 'getMarginValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 628830
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var syntheticEventUtilities = require("synthetic-event-utilities") /*id: 97252*/;
  var virtualListConstants = require("virtual-list-constants") /*id: 951136*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  function u() {
    return function (e, t, r) {
      var n = r.value;
      r.value = function () {
        var e = this;
        var t = [];
        var r = 0;
        for (; r < arguments.length; r++) {
          t[r] = arguments[r];
        }
        this.editor.undoModule.batchedUndo(function () {
          n.apply(e, t);
        });
      };
      return r;
    };
  }
  var editorClipboardManager = require("editor-clipboard-manager") /*id: 797119*/;
  var editorRangeZoneClass = require("editor-range-zone-class") /*id: 731872*/;
  var treeNodeTypes = require("tree-node-types") /*id: 676821*/;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var zoneDeltaClasses = require("zone-delta-classes") /*id: 240236*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var throttledArrayIntersection = require("throttled-array-intersection") /*id: 832949*/;
  var throttledArrayDiffUtil = require("throttled-array-diff-util") /*id: 222302*/;
  var throttledArgStringifyUtil = require("throttled-arg-stringify-util") /*id: 15104*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var throttledArrayIntersection_1 = require("throttled-array-intersection_1") /*id: 766812*/;
  var numericRangeUtil = require("numeric-range-util") /*id: 685991*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var keyboardEventUtils = require("keyboard-event-utils") /*id: 623958*/;
  require("user-agent-parser_1") /*id: 757289*/;
  var userAgentDetect = require("user-agent-detect") /*id: 68901*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  require("jquery-core-library") /*id: 775150*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  require("classnames-utils") /*id: 946565*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var editorFormatShortcuts = require("editor-format-shortcuts") /*id: 80260*/;
  var keyboardShortcutConstants = require("keyboard-shortcut-constants") /*id: 159910*/;
  var tableCellIdUtils = require("table-cell-id-utils") /*id: 693152*/;
  var instanceDecoratorUtil = require("instance-decorator-util") /*id: 317038*/;
  function P(e, t, r, n, i = {}) {
    var o = document.querySelector(e);
    Object.assign(i, {
      capture: true
    });
    if (o && t && r && n) {
      function a(e) {
        if ((e && e.target).matches(t)) {
          n(e);
        }
      }
      o.addEventListener(r, a, i);
      return function () {
        return o.removeEventListener(r, a, i);
      };
    }
    return null;
  }
  var editorTableUtils = require("editor-table-utils") /*id: 447337*/;
  function z(e) {
    return "table-id-" + e.replace(" ", "-");
  }
  function H(e) {
    if (e[editorTableUtils.tableConstants.MERGE_CELL_ID]) {
      return e[editorTableUtils.tableConstants.MERGE_CELL_ID].split(editorTableUtils.tableConstants.M_SEPARATOR);
    } else {
      return [];
    }
  }
  function G(e, t) {
    var r = t.rAttr;
    var n = t.cAttr;
    try {
      var i = r[e] ? JSON.parse(r[e]) : {};
      var o = n[e] ? JSON.parse(n[e]) : {};
      var a = throttledArrayIntersection.throttledIntersect(Object.keys(i), Object.keys(o))[0];
      return i[a];
    } catch (e) {}
  }
  function Z(e) {
    var t = e.rowIndex;
    var r = e.colIndex;
    var n = e.cellAttribs;
    var i = objectPathGetDefault.getObjectPathDefault(n, [t, r, editorTableUtils.tableConstants.BORDER], {});
    if (r !== 0) {
      var o = objectPathGetDefault.getObjectPathDefault(n, [t, r - 1, editorTableUtils.tableConstants.BORDER]);
      if (o && o.right) {
        i.left = o.right;
      }
    }
    if (t !== 0) {
      var o = objectPathGetDefault.getObjectPathDefault(n, [t - 1, r, editorTableUtils.tableConstants.BORDER]);
      if (o && o.bottom) {
        i.top = o.bottom;
      }
    }
    return i;
  }
  function W(e, t) {
    return Object.keys(e).reduce(function (r, n) {
      var i = t[n];
      try {
        i = JSON.parse(i);
      } catch (e) {}
      var o = editorTableUtils.deepCloneOrReturn(i, e[n]);
      r[n] = editorTableUtils.isObjectType(o, "object") ? JSON.stringify(o) : o;
      return r;
    }, {});
  }
  function j(e, t) {
    var r = e.colIds;
    var n = e.colAttribs;
    return r.map(function (e, r) {
      if (n[r]) {
        return n[r][editorTableUtils.tableConstants.COL_WIDTH];
      } else {
        return t || null;
      }
    }).filter(function (e) {
      return e !== null;
    });
  }
  (n = i ||= {}).TOP = "top";
  n.LEFT = "left";
  n.BOTTOM = "bottom";
  n.RIGHT = "right";
  n.ALL = "all";
  var Y = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.getChildContext = function () {
        var e = t.props;
        return {
          innerZoneEditor: e.editor,
          innerZoneIdToInitialHTML: e.zoneIdToInitialHTML
        };
      };
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    t.prototype.render = function () {
      return reactCoreLibraryReexport.Children.only(this.props.children);
    };
    t.childContextTypes = editorTableUtils.tablePropTypes;
    return t;
  }(reactCoreLibraryReexport.Component);
  function K(e) {
    var t;
    var r;
    var n;
    var i;
    var s = {};
    try {
      var l = typescriptHelpers_1.getValues(e.getContent().entries());
      var u = l.next();
      for (; !u.done; u = l.next()) {
        var c = typescriptHelpers_1.readIterator(u.value, 2);
        var h = c[0];
        var d = c[1];
        if (d.getType() !== documentOperationConstants.structureTypes.Content) {
          s[h] = s[h] || {
            forRow: d.getType() === documentOperationConstants.structureTypes.Row,
            vectorIds: []
          };
          var f = d.getContent().ops;
          try {
            n = undefined;
            var A = typescriptHelpers_1.getValues(f);
            var g = A.next();
            for (; !g.done; g = A.next()) {
              var p = g.value;
              var m = p.insert?.id;
              if (m) {
                s[h].vectorIds.push(m);
              }
              if (p.attributes) {
                s[h].attributes = p.attributes;
              }
            }
          } catch (e) {
            n = {
              error: e
            };
          } finally {
            try {
              if (g && !g.done && (i = A.return)) {
                i.call(A);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        if (u && !u.done && (r = l.return)) {
          r.call(l);
        }
      } finally {
        if (t) {
          throw t.error;
        }
      }
    }
    return s;
  }
  function q(e, t) {
    var r;
    var n;
    var a = e.getZoneState(t);
    if (!a) {
      return [];
    }
    var s = a.getContent().ops;
    var l = [];
    try {
      var u = typescriptHelpers_1.getValues(s);
      var c = u.next();
      for (; !c.done; c = u.next()) {
        var h = c.value;
        var d = h.insert?.id;
        if (d) {
          l.push(d);
        }
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        if (c && !c.done && (n = u.return)) {
          n.call(u);
        }
      } finally {
        if (r) {
          throw r.error;
        }
      }
    }
    return l;
  }
  var V = editorFormatShortcuts.matchShortcut;
  var J = keyboardShortcutConstants.isUndoRedoEvent;
  var X = keyboardShortcutConstants.copyPasteKeys;
  var $ = tableCellIdUtils.parseCellId;
  var ee = tableCellIdUtils.checkMergeCellState;
  var et = function (e) {
    function t(t) {
      var n = e.call(this, t) || this;
      n.isComponentMounted = false;
      n.isMouseDown = false;
      n.isMouseTableSelectionMoreThanOne = false;
      n.tableIframeRef = null;
      n.tableHeaderRef = null;
      n.arrowKeyTimer = null;
      n.currentHoverOfZone = null;
      n.tableColsWidth = [];
      n.tableWidth = 0;
      n.currentStack = "";
      n.attributesApplyingQueue = {};
      n.updateCallStack = [];
      n.isInBuffer = true;
      n.minDragWidths = [];
      n.idleTimer = 0;
      n.contentEditable = false;
      n.blockIdToZoneId = {};
      n.zoneBlockMinWidthMap = {};
      n.tableRectInfo = null;
      n.customStatus = {};
      n.invalidMouseDown = false;
      n.instanceName = "ACE_TABLE";
      n.shouldRetain = true;
      n.calcUpdateTableRectInfo = function () {
        var e = n.props.editor;
        n.tableRectInfo ||= new Map(Object.entries({
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }));
        var t = n.tableWrapperOuterRef.closest(".ace-line");
        if (t) {
          var r = syntheticEventUtilities.createSelectionRange(t, e);
          if (r) {
            var i = r.start.line;
            var o = e.rectModule.getLineRect({
              zoneId: zeroConstantModule_1.versionValue,
              line: i
            });
            var s = o.top;
            var l = o.left;
            var u = o.bottom;
            var c = n.tableRectInfo.get("top");
            var h = n.tableRectInfo.get("bottom");
            var d = n.tableRectInfo.get("left");
            return (c !== s || h !== u || d !== l) && (n.tableRectInfo.clear(), n.tableRectInfo.set("top", s), n.tableRectInfo.set("bottom", u), n.tableRectInfo.set("left", l), true);
          }
        }
      };
      n.setSelectionInFirstCellOfSelectedCells = function () {
        var e = n.getSelectedZonesWithVisible();
        if (e.length) {
          n.setSelectionOntoCell(e[0], {
            start: [0, 0],
            end: [-1, -1]
          });
        }
      };
      n.setCursorInFirstCellOfSelectedCells = function () {
        var e = n.getSelectedZonesWithVisible();
        if (e.length) {
          n.setSelectionOntoCell(e[0], {
            start: [0, 0],
            end: [0, -1]
          });
        }
      };
      n.bindEvents = function () {
        var e = n.props.editor;
        e.on("inner-zone-focus", n.handleInnerZoneFocus);
        e.on("ace-focus", n.handleAceFocus);
        e.on("ace-blur", n.handleAceBlur);
        e.on("ace-table-editable-change", n.setContentEditable);
        e.on("ace-mousedown", n.handleAceMouseDown);
        e.on(editorTableUtils.tableActionTypes.UPDATE_CELL_SELECT, n.selectedCellsChange);
        e.on("set-zone-block-min-width", n.setZoneBlockMinWidth);
        e.on("remove-zone-block-min-width", n.removeZoneBlockMinWidth);
        e.on(virtualListConstants.virtualListEvent, n.handleVirtualListBufferChange);
      };
      n.removeEvents = function () {
        var e = n.props.editor;
        e.off("inner-zone-focus", n.handleInnerZoneFocus);
        e.off("ace-focus", n.handleAceFocus);
        e.off("ace-blur", n.handleAceBlur);
        e.off("ace-table-editable-change", n.setContentEditable);
        e.off("ace-mousedown", n.handleAceMouseDown);
        e.off(editorTableUtils.tableActionTypes.UPDATE_CELL_SELECT, n.selectedCellsChange);
        e.off("set-zone-block-min-width", n.setZoneBlockMinWidth);
        e.off("remove-zone-block-min-width", n.removeZoneBlockMinWidth);
        e.off(virtualListConstants.virtualListEvent, n.handleVirtualListBufferChange);
      };
      n.getTableId = function () {
        return n.tableId;
      };
      n.getDocbodyRect = function () {
        var e = n.props.editor.getRect();
        var t = e.right;
        return {
          width: e.width,
          right: t,
          left: e.left
        };
      };
      n.handleToolbarShown = function () {
        n.setState({
          addRemoveIsShown: true
        });
      };
      n.handleToolbarHidden = function () {
        n.setState({
          addRemoveIsShown: false
        });
      };
      n.getRect = function (e) {
        if (!!e && !!e.parentNode && !!n.props.editor.getContainer() && !((t = e.closest(".ace-line")) === null || t === undefined ? undefined : t.classList.contains("ace-line-collapsed"))) {
          var t;
          var r = e.getBoundingClientRect();
          var i = r.width;
          var o = r.left;
          var a = r.right;
          var s = r.top;
          return {
            bottom: r.bottom,
            height: r.height,
            left: o,
            right: a,
            top: s,
            width: i
          };
        }
      };
      n.triggerArrorKeyAMomentAgo = function () {
        if (n.arrowKeyTimer) {
          clearTimeout(n.arrowKeyTimer);
        }
        n.arrowKeyTimer = window.setTimeout(function () {
          n.arrowKeyTimer = null;
        }, 100);
      };
      n.handleHeaderMouseDown = function (e, t, r, i = false) {
        if (!!(e.target instanceof HTMLElement) && (!!((o = e.target) === null || o === undefined ? undefined : o.closest(".ace-table-col-select")) || !!((a = e.target) === null || a === undefined ? undefined : a.closest(".ace-table-row-select"))) && !n.isEmpty() && !(e.button > 1)) {
          var o;
          var a;
          function s(e) {
            n.updateSelectedCellsViaHeader(e, r, i);
          }
          function l(e) {
            document.removeEventListener("mouseup", l);
            document.removeEventListener("mousemove", s);
            n.disposeTableMouseSelection();
            n.selectedCellsChange();
            var t = n.props.editor;
            var r = t.getScrollContainer().scrollTop || 0;
            if (e.target instanceof HTMLElement && !e.target.classList.contains("dmc-button")) {
              t.scrollTo({
                top: r
              });
            }
          }
          n.props.editor.call("headerMouseDown", n);
          n.disposeTableMouseSelection();
          document.addEventListener("mouseup", l);
          document.addEventListener("mousemove", s);
          n.isMouseDown = true;
          n.updateCurrentHoverHeader(t, r);
          var u = r ? t : 0;
          var c = r ? 0 : t;
          if (!J(e)) {
            if (e.shiftKey) {
              if (n.state.currentRowAnchor !== -1 && n.state.currentColAnchor !== -1) {
                var h = r ? n.state.currentRowAnchor : 0;
                var d = r ? 0 : n.state.currentColAnchor;
                var f = r ? u : n.getRowCount() - 1;
                var A = r ? n.getColCount() - 1 : c;
                if (i) {
                  var g = n.getFocusIndices({
                    currentRowAnchor: h,
                    currentColAnchor: d,
                    currentRowFocus: f,
                    currentColFocus: A
                  });
                  if (n.em) {
                    n.em.emit("tableToolbarsMouseDownWithShift", {
                      selectCellIds: g,
                      position: r ? "left" : "top"
                    });
                  }
                }
                n.setFocusIndices({
                  currentRowAnchor: h,
                  currentColAnchor: d,
                  currentRowFocus: f,
                  currentColFocus: A
                });
              }
            } else {
              n.setState({
                currentRowAnchor: u,
                currentColAnchor: c,
                isSelectRowOrCol: true,
                forRows: r
              }, function () {});
            }
          }
        }
      };
      n.handleKeyDown = function (e) {
        var t = n.props.editor;
        var r = n.state.selectedCellIds;
        var i = e.evt.nativeEvent;
        var o = i.target;
        if (!!o.closest(".ace-table-mount-point") && !editorTableUtils.safeCallFunction("KeyDownEvent", n.props.tableOptions, {
          tableInstance: n,
          evt: i
        })) {
          t.call(editorTableUtils.tableEventNames.BEFORE_TABLE_KEY_EVENT, {
            target: o
          });
          if (!["Control", "Meta", "Alt", "Shift", "Backspace", "Delete"].includes(i.key)) {
            if (!X(i) && !editorTableUtils.editorShortcuts.includes(V(i)) && r.length !== 0) {
              n.setState({
                selectedCellIds: []
              });
            }
          }
        }
      };
      n.findMergeCellBorder = function (e) {
        var t = n.state.cellAttribs;
        var r = [e];
        var i = [];
        var o = 0;
        for (; o < t.length + 1; o++) {
          i[o] = [];
        }
        while (r.length) {
          var a = r.pop();
          if (a) {
            var s = a.rowIndex;
            var l = a.colIndex;
            var u = a.mergeId;
            if (!(s < 0) && !(s > t.length) && !(l < 0) && !(l > t[0].length)) {
              var c = objectPathGetDefault.getObjectPathDefault(t, [s, l, editorTableUtils.tableConstants.ROW_SPAN]);
              if (objectPathGetDefault.getObjectPathDefault(t, [s, l, editorTableUtils.tableConstants.COL_SPAN]) || c) {
                return Z({
                  rowIndex: s,
                  colIndex: l,
                  cellAttribs: t
                });
              }
              if (i[s + 1] && !i[s + 1][l] && objectPathGetDefault.getObjectPathDefault(t, [s + 1, l, editorTableUtils.tableConstants.MERGE_CELL_ID]) === u) {
                r.push({
                  rowIndex: s + 1,
                  colIndex: l,
                  mergeId: u
                });
              }
              if (i[s - 1] && !i[s - 1][l] && objectPathGetDefault.getObjectPathDefault(t, [s - 1, l, editorTableUtils.tableConstants.MERGE_CELL_ID]) === u) {
                r.push({
                  rowIndex: s - 1,
                  colIndex: l,
                  mergeId: u
                });
              }
              if (i[s] && !i[s][l + 1] && objectPathGetDefault.getObjectPathDefault(t, [s, l + 1, editorTableUtils.tableConstants.MERGE_CELL_ID]) === u) {
                r.push({
                  rowIndex: s,
                  colIndex: l + 1,
                  mergeId: u
                });
              }
              if (i[s] && !i[s][l - 1] && objectPathGetDefault.getObjectPathDefault(t, [s, l - 1, editorTableUtils.tableConstants.MERGE_CELL_ID]) === u) {
                r.push({
                  rowIndex: s,
                  colIndex: l - 1,
                  mergeId: u
                });
              }
            }
          }
        }
        return {};
      };
      n.updateSelectedCells = function (e) {
        if (n.isMouseDown) {
          if (n.isEmpty()) {
            n.setState({
              selectedCellIds: [],
              selectType: editorTableUtils.tableEventTypes.MOVE
            });
          }
          var t = n.state;
          var r = t.currentRowAnchor;
          var i = t.currentColAnchor;
          var o = n.getRowAndColIndexOfCurrentFocusZone();
          var a = o.rowIndex;
          var s = o.colIndex;
          if (a !== -1 && s !== -1 && r !== -1 && i !== -1) {
            n.setFocusIndices({
              currentRowAnchor: r,
              currentColAnchor: i,
              currentRowFocus: a,
              currentColFocus: s,
              isUpdateCaret: !n.contentEditable,
              selectType: editorTableUtils.tableEventTypes.MOVE
            });
          }
        }
      };
      n.updateSelectedCellsViaHeader = function (e, t, r) {
        if (!J(e) && n.isMouseDown) {
          if (n.isEmpty()) {
            if (!r) {
              n.setState({
                selectedCellIds: []
              });
            }
          }
          var i = n.state;
          var o = i.rowHeaderHeights;
          var a = i.colHeaderWidths;
          var s = n.state;
          var l = s.currentRowAnchor;
          var u = s.currentColAnchor;
          var c = n.currentHoverOfRowHeader;
          var h = n.currentHoverOfColHeader;
          var d = [];
          var f = 0;
          var A = 0;
          var g = 0;
          var p = 0;
          if (t && c !== -1) {
            var m = c;
            var y = n.getColCount() - 1;
            if (r) {
              d = n.getFocusIndices({
                currentRowAnchor: l,
                currentColAnchor: u,
                currentRowFocus: m,
                currentColFocus: y,
                isNeat: false
              }).selectedCellIds;
            } else {
              n.setFocusIndices({
                currentRowAnchor: l,
                currentColAnchor: u,
                currentRowFocus: m,
                currentColFocus: y,
                isNeat: false
              });
            }
            var v = Math.min(l, m);
            var b = Math.max(l, m);
            var w = v;
            for (; w <= b; w++) {
              A += o[w];
            }
            g = 1;
            p = o.slice(0, v).reduce(function (e, t) {
              return e + t;
            }, 1);
            f = a.slice(0).reduce(function (e, t) {
              return e + t;
            });
          }
          if (!t && h !== -1) {
            var m = n.getRowCount() - 1;
            var y = h;
            if (r) {
              d = n.getFocusIndices({
                currentRowAnchor: l,
                currentColAnchor: u,
                currentRowFocus: m,
                currentColFocus: y,
                isNeat: false
              }).selectedCellIds;
            } else {
              n.setFocusIndices({
                currentRowAnchor: l,
                currentColAnchor: u,
                currentRowFocus: m,
                currentColFocus: y,
                isNeat: false
              });
            }
            var C = Math.min(u, y);
            var E = Math.max(u, y);
            var w = C;
            for (; w <= E; w++) {
              f += a[w];
            }
            p = 1;
            g = a.slice(0, C).reduce(function (e, t) {
              return e + t;
            }, 1);
            A = o.slice(0).reduce(function (e, t) {
              return e + t;
            });
          }
          if (r && n.em) {
            n.em.emit("tableToolbarsMouseMove", {
              selectedCellIds: d,
              position: {
                x: g,
                y: p
              },
              rect: {
                width: f,
                height: A
              },
              positionType: t ? "left" : "top"
            });
          }
        }
      };
      n.tableWillDelete = function (e = editorTableUtils.deleteSourceTypes.BUTTON) {
        editorTableUtils.safeCallFunction("tableDeleted", n.props.tableOptions, {
          type: e,
          tableId: n.tableId,
          tableInstance: n
        });
      };
      n.getDeleteInnerZoneDeltaSet = function () {
        var e = n.props.editor;
        var t = typescriptHelpers_1.readIterator(n.getAllChildZones());
        var r = t[0];
        var i = t[1];
        var a = t.slice(2);
        var s = e.getContentState();
        var l = new deltaSetCore.DeltaSet();
        a.filter(function (e, t) {
          return a.indexOf(e) === t;
        }).forEach(function (e) {
          var t = s.getZoneState(e);
          if (t && t.getModelText() !== "\n") {
            var r = new contentStructureDelta.ContentDelta({
              zoneId: e
            }).delete(t.totalWidth() - 1);
            l = l.compose(r);
          }
        });
        var u = new zoneDeltaClasses.RowDelta({
          zoneId: r
        }).delete(n.getRowCount());
        l = l.compose(u);
        var c = new zoneDeltaClasses.ColumnDelta({
          zoneId: i
        }).delete(n.getColCount());
        return l = l.compose(c);
      };
      n.copyTable = function () {
        n.props.editor.call(editorTableUtils.tableActionTypes.COPY);
      };
      n.cutTable = function () {
        n.props.editor.call(editorTableUtils.tableActionTypes.CUT);
      };
      n.handleHorzResizeStart = function (e) {
        n.setState({
          columnBeingResized: e
        });
        n.props.editor.call("horzResizeStart");
        var t = Number(n.state.colAttribs[e][editorTableUtils.tableConstants.COL_WIDTH]);
        t ||= n.calColHeaderWidths().colHeaderWidths[e];
        var r = Math.max(n.getColMinWidth(e), n.getCellMinWidth());
        if (t < r) {
          n.setColumnWidth(e, r);
        }
      };
      n.handleToggleSelectTable = function (e) {
        if (e) {
          n.selectAll();
          n.focusAndCollapseSelectionOntoCell(0, 0, [0, 0], false);
        } else {
          n.unselectAll();
          n.props.editor.focus();
          n.focusAndCollapseSelectionOntoCell(0, 0);
        }
      };
      n.notifySelectCol = function (e, t) {
        e.preventDefault();
        editorTableUtils.clearSelection();
        if (!Array.isArray(t)) {
          t = [t];
        }
        var r;
        var i;
        var a = [];
        if (!e.shiftKey) {
          try {
            var s = typescriptHelpers_1.getValues(t);
            var l = s.next();
            for (; !l.done; l = s.next()) {
              var u = l.value;
              a.push.apply(a, typescriptHelpers_1.spreadArray(n.getColZones(n.state.rowIds[u], J(e))));
            }
          } catch (e) {
            r = {
              error: e
            };
          } finally {
            try {
              if (l && !l.done && (i = s.return)) {
                i.call(s);
              }
            } finally {
              if (r) {
                throw r.error;
              }
            }
          }
        }
        if (n.em) {
          n.em.emit("tableToolbarsClick", {
            indices: t,
            selectedCellIds: a,
            positionType: "top"
          });
        }
      };
      n.notifySelectRow = function (e, t) {
        e.preventDefault();
        editorTableUtils.clearSelection();
        var r;
        var i;
        var a = [];
        if (!Array.isArray(t)) {
          t = [t];
        }
        if (!e.shiftKey) {
          try {
            var s = typescriptHelpers_1.getValues(t);
            var l = s.next();
            for (; !l.done; l = s.next()) {
              var u = l.value;
              a.push.apply(a, typescriptHelpers_1.spreadArray(n.getRowZones(n.state.rowIds[u], J(e))));
            }
          } catch (e) {
            r = {
              error: e
            };
          } finally {
            try {
              if (l && !l.done && (i = s.return)) {
                i.call(s);
              }
            } finally {
              if (r) {
                throw r.error;
              }
            }
          }
        }
        if (n.em) {
          n.em.emit("tableToolbarsClick", {
            indices: t,
            selectedCellIds: a,
            positionType: "left"
          });
        }
      };
      n.handleSelectCol = function (e, t) {
        if (!Array.isArray(t)) {
          t = [t];
        }
        if (n.props.tableOptions?.autoFocus) {
          n.focusAndCollapseSelectionOntoCell(0, t[0]);
        } else {
          setTimeout(function () {
            editorTableUtils.clearSelection();
          });
        }
        e.preventDefault();
        if (!e.shiftKey) {
          var i = t.map(function (e) {
            return n.state.colIds[e];
          });
          n.selectCol(i, J(e));
        }
      };
      n.handleSelectRow = function (e, t) {
        if (!Array.isArray(t)) {
          t = [t];
        }
        if (n.props.tableOptions?.autoFocus) {
          n.focusAndCollapseSelectionOntoCell(t[0], 0);
        } else {
          editorTableUtils.clearSelection();
        }
        e.preventDefault();
        if (!e.shiftKey) {
          var i = t.map(function (e) {
            return n.state.rowIds[e];
          });
          n.selectRow(i, J(e));
        }
      };
      n.getRowCount = function () {
        return n.state.rowIds.length;
      };
      n.getColCount = function () {
        return n.state.colIds.length;
      };
      n.getRowIds = function () {
        return n.state.rowIds.slice(0);
      };
      n.getColIds = function () {
        return n.state.colIds.slice(0);
      };
      n.getCellIds = function () {
        var e = [];
        var t = n.getRowIds();
        var r = n.getColIds();
        var i = 0;
        for (; i < t.length; i++) {
          var o = t[i];
          var a = 0;
          for (; a < r.length; a++) {
            var s = r[a];
            e.push(tableCellIdUtils.createCellId(o, s));
          }
        }
        return e;
      };
      n.getTableBorder = function () {
        return n.state.aceTableBorder;
      };
      n.getRowsZoneId = function () {
        return n.state.rowsZoneId;
      };
      n.getColsZoneId = function () {
        return n.state.colsZoneId;
      };
      n.isEmpty = function () {
        return n.state.rowIds.length === 0 || n.state.colIds.length === 0;
      };
      n.getTable = function () {
        return n.tableRef;
      };
      n.getTableWrapper = function () {
        return n.tableWrapperRef;
      };
      n.getTableInnerWrapper = function () {
        return n.tableWrapperInnerRef;
      };
      n.getScrollable = function () {
        return n.tableWrapperInnerRef.scrollableRef;
      };
      n.getSelectedZonesForSpecialSelection = function () {
        return n.state.selectedCellIds.slice(0);
      };
      n.getEditor = function () {
        return n.props.editor;
      };
      n.setHintRowsToDelete = function (e, t) {
        n.setState({
          hintRowsToDeleteStartIndex: e,
          hintRowsToDeleteCount: t
        });
      };
      n.setHintColsToDelete = function (e, t) {
        n.setState({
          hintColsToDeleteStartIndex: e,
          hintColsToDeleteCount: t
        });
      };
      n.deleteZoneContents = function (e) {
        var t = n.props.editor.getContentState();
        var r = t.getZoneState(e);
        if (r && r.getLine(r.length() - 1)) {
          var i = new contentStructureDelta.ContentDelta({
            zoneId: e
          }).delete(r.totalWidth() - 1);
          t.apply(i, {
            type: editorTableUtils.tableCommands.CLEAR_ZONE_CONTENT
          });
        }
      };
      n.getRowIdsFromRegions = function (e) {
        return n.state.rowIds.slice(e[0], e[1]);
      };
      n.getColIdsFromRegions = function (e) {
        return n.state.colIds.slice(e[0], e[1]);
      };
      n.getWhollySelectedRegions = function (e) {
        var t = {
          rows: {},
          cols: {}
        };
        var r = e || n.getSelectedZonesForSpecialSelection();
        var i = 0;
        for (; i < r.length; i++) {
          var o = n.getRowAndColIndicesForCellId(r[i]);
          if (o) {
            t.rows[o.rowIndex] = (t.rows[o.rowIndex] || 0) + 1;
            t.cols[o.colIndex] = (t.cols[o.colIndex] || 0) + 1;
          }
        }
        var a = [];
        var s = [];
        var l = n.getRowCount();
        var u = n.getColCount();
        var i = 0;
        for (; i < l; ++i) {
          if (t.rows[i] === u) {
            a.push(i);
          }
        }
        for (var i = 0; i < u; ++i) {
          if (t.cols[i] === l) {
            s.push(i);
          }
        }
        return {
          rows: a,
          cols: s,
          entireTable: a.length === l && s.length === u
        };
      };
      n.getPartiallySelectedRegions = function () {
        var e = {};
        var t = {};
        var r = n.getSelectedZonesForSpecialSelection();
        var i = 0;
        for (; i < r.length; i++) {
          var o = n.getRowAndColIndicesForCellId(r[i]);
          if (o) {
            e[o.rowIndex] = true;
            t[o.colIndex] = true;
          }
        }
        return {
          partialRows: Object.keys(e).map(function (e) {
            return parseInt(e, 10);
          }),
          partialCols: Object.keys(t).map(function (e) {
            return parseInt(e, 10);
          })
        };
      };
      n.hasSelectedZonesForSpecialSelection = function () {
        return n.state.selectedCellIds.length > 0;
      };
      n.getIsSelectAll = function () {
        return n.state.isSelectAll;
      };
      n.getSelectStatus = function () {
        return n.state.selectedCellIds;
      };
      n.select = function (e) {
        n.setState({
          selectedCellIds: e
        });
      };
      n.selectAll = function () {
        n.setState({
          selectedCellIds: n.getCellIds(),
          currentRowAnchor: 0,
          currentColAnchor: 0,
          currentRowFocus: n.state.rowIds.length - 1,
          currentColFocus: n.state.colIds.length - 1,
          isSelectAll: true,
          selectType: editorTableUtils.tableEventTypes.CLICK
        });
      };
      n.unselectAll = function () {
        if (n.isComponentMounted) {
          n.setState({
            selectedCellIds: [],
            currentRowAnchor: -1,
            currentColAnchor: -1,
            currentRowFocus: null,
            currentColFocus: null,
            isSelectAll: false
          });
        }
      };
      n.updateBorderHighlightStatus = function (e, t) {
        if (e) {
          if (t) {
            e.classList.add("ace-table-is-highlight");
          } else {
            e.classList.remove("ace-table-is-highlight");
          }
        }
      };
      n.toggleBorderHighlight = function (e) {
        var t = n.getTableOuterWrapperRef();
        if (e === undefined) {
          n.updateBorderHighlightStatus(t, !n.isHighlight);
          n.isHighlight = !n.isHighlight;
          return;
        }
        n.updateBorderHighlightStatus(t, e);
        n.isHighlight = !n.isHighlight;
      };
      n.selectCol = function (e, t) {
        var r;
        var i;
        var a;
        var s;
        var l = n.state.colIds;
        e = Array.isArray(e) ? e : [e];
        var u = l.indexOf(e[e.length - 1]);
        var c = n.getRowIds();
        var h = [];
        try {
          var d = typescriptHelpers_1.getValues(e);
          var f = d.next();
          for (; !f.done; f = d.next()) {
            var A = f.value;
            try {
              a = undefined;
              var g = typescriptHelpers_1.getValues(c);
              var p = g.next();
              for (; !p.done; p = g.next()) {
                var m = p.value;
                h.push(tableCellIdUtils.createCellId(m, A));
              }
            } catch (e) {
              a = {
                error: e
              };
            } finally {
              try {
                if (p && !p.done && (s = g.return)) {
                  s.call(g);
                }
              } finally {
                if (a) {
                  throw a.error;
                }
              }
            }
          }
        } catch (e) {
          r = {
            error: e
          };
        } finally {
          try {
            if (f && !f.done && (i = d.return)) {
              i.call(d);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
        var y = {
          selectedCellIds: t ? throttledArrayIntersection.throttledIntersect(n.state.selectedCellIds, h).length === h.length ? throttledArrayDiffUtil.throttledArrayDiff(n.state.selectedCellIds, h) : throttledArgStringifyUtil.throttledStringify(h, n.state.selectedCellIds) : h,
          currentRowAnchor: 0,
          currentColAnchor: u,
          currentRowFocus: c.length - 1,
          currentColFocus: u,
          selectType: editorTableUtils.tableEventTypes.CLICK
        };
        n.setState(y);
      };
      n.getAllChildZones = function () {
        return [n.state.rowsZoneId, n.state.colsZoneId].concat(n.getCellIds());
      };
      n._getTableScrollWidth = function (e, t) {
        var r = t || editorTableUtils.minTableSize;
        return n.state.colHeaderWidths.reduce(function (t, n, i) {
          if (i !== e) {
            t += n + 1;
          } else {
            t += r + 1;
          }
          return t;
        }, 1);
      };
      n.setContentEditable = function (e) {
        n.contentEditable = e;
      };
      n.isEditingDisabled = function () {
        return !n.contentEditable || n.isEmpty();
      };
      n.getRowAndColIndicesForNode = function (e, t = false) {
        var r = e.closest("tr");
        var i = e.closest("td");
        var o = n.tbodyRef;
        var a = -1;
        var s = -1;
        if (r && i) {
          a = Array.from(o.querySelectorAll("tr")).indexOf(r);
          s = Array.from(r.querySelectorAll("td")).indexOf(i);
        } else if (t) {
          return n.getRowAndColIndicesForHeaderNode(e);
        }
        return {
          rowIndex: a,
          colIndex: s
        };
      };
      n.getRowAndColIndicesForHeaderNode = function (e) {
        var t;
        var r;
        var n = -1;
        var i = -1;
        var o = e.closest("button.ace-table-row-select");
        var a = e.closest("button.ace-table-col-select");
        if (o) {
          n = Array.from(((t = e.closest(".ace-table-row-headers")) === null || t === undefined ? undefined : t.querySelectorAll(".ace-table-row-select")) || []).indexOf(o);
        } else if (a) {
          i = Array.from(((r = e.closest(".ace-table-col-headers")) === null || r === undefined ? undefined : r.querySelectorAll(".ace-table-col-select")) || []).indexOf(a);
        }
        return {
          rowIndex: n,
          colIndex: i
        };
      };
      n.getIsNearCellEdge = function (e, t, r) {
        var i = n.tableWrapperRef.querySelector("tr:nth-child(" + (t + 1) + ")");
        if (!i) {
          return false;
        }
        var o = i.querySelector("td:nth-child(" + (r + 1) + ")");
        if (!o) {
          return false;
        }
        var a = o.querySelector(".tb-resizable-grippy");
        if (!a) {
          return false;
        }
        var s = a.getBoundingClientRect().left - e.clientX;
        return s > 0 && s <= editorTableUtils.widthConstValue;
      };
      n.getRowAndColIndicesForCellId = function (e) {
        var t = $(e);
        var r = t.rowId;
        var i = t.colId;
        var o = n.state.rowIds.indexOf(r);
        var a = n.state.colIds.indexOf(i);
        if (o === -1 || a === -1) {
          return null;
        } else {
          return {
            rowIndex: o,
            colIndex: a
          };
        }
      };
      n.focusAndSelectCellContents = function (e) {
        var t = e.rowIndex;
        var r = e.colIndex;
        var i = e.cellId;
        if (!i && t !== undefined && r !== undefined && t >= 0 && r >= 0 && t <= n.state.rowIds.length && r <= n.state.colIds.length) {
          i = n.getZoneIdFromRowAndColIndex(t, r);
        }
        if (i) {
          var o = n.props.editor;
          var a = o.getContentState().getZoneState(i);
          if (a) {
            var s = a.length() - 1;
            var l = a.getLine(s);
            if (l) {
              o.selection.setSelection({
                start: {
                  zoneId: i,
                  line: 0,
                  offset: 0
                },
                end: {
                  zoneId: i,
                  line: s,
                  offset: l.length() - 1
                },
                zoneId: i
              }, true);
            }
          }
        }
      };
      n.disposeTableMouseSelection = function () {
        n.setCurrentHoverOfZone(null);
        n.updateCurrentHoverHeader(-1, true);
        n.updateCurrentHoverHeader(-1, false);
        n.isMouseDown = false;
        n.isMouseTableSelectionMoreThanOne = false;
        document.removeEventListener("mouseup", n.handleTableMouseUpAfterMove);
        document.removeEventListener("mousemove", n.updateSelectedCells);
        n.setHighlightColumn(null);
        n.setHighlightRow(null);
      };
      n.getPointOfCurrentTable = function () {
        var e = n.tablePlugin.instanceManager.getInstanceById(n.tableId);
        if (!e) {
          return null;
        }
        var t = n.tablePlugin.instanceManager.getLineStateByInstance(e);
        if (t) {
          return {
            zoneId: t.parent.getZoneId(),
            line: t.index,
            offset: t.length()
          };
        } else {
          return null;
        }
      };
      n.setHighlightColumn = function (e) {
        n.setState({
          columnWithRightBorderHighlighted: e
        });
      };
      n.setHighlightRow = function (e) {
        n.setState({
          rowWithBottomBorderHighlighted: e
        });
      };
      n.getDropDestination = function (e, t) {
        if (t === -1) {
          return e;
        } else if (t < e) {
          return t - 1;
        } else {
          return t;
        }
      };
      n.getSelectionBoundingRect = function (e) {
        var t = n.props.editor;
        var r = e.start;
        var i = e.end;
        if (r.zoneId !== i.zoneId || r.line !== i.line || r.offset !== i.offset) {
          return null;
        } else {
          return {
            left: t.rectModule.getCaretRect(r).left,
            width: 0
          };
        }
      };
      n.horizontalScrollToZone = function (e) {
        var t = e.start.zoneId;
        if (t === editorTableUtils.zeroString) {
          return;
        }
        var r = n.getSelectionBoundingRect(e);
        if (!r) {
          return;
        }
        var i = r.left;
        var o = r.width;
        var a = n.getRowAndColIndicesForCellId(t);
        if (a) {
          var s = a.colIndex;
          var l = 0;
          var u = s - 1;
          for (; u >= 0; u--) {
            l += n.state.colHeaderWidths[u];
          }
          var c = l + i;
          var h = n.tablePlugin.instanceManager.getInstanceBySubZoneId(t);
          if (h) {
            var d = h.getScrollable();
            if (d) {
              var f = 0;
              if (d.style.marginLeft) {
                c += -parseInt(d.style.marginLeft, 10);
              }
              var A = d.scrollLeft;
              var g = c + o;
              if (A > g) {
                d.scrollLeft = g;
              }
            }
          }
        }
      };
      n.setFocusIndices = function (e) {
        var t = e.currentRowAnchor;
        var r = e.currentRowFocus;
        var i = e.currentColAnchor;
        var o = e.currentColFocus;
        var a = e.isUpdateCaret;
        var s = e.selectType;
        var l = s === undefined ? editorTableUtils.tableEventTypes.OTHER : s;
        var u = e.isNeat;
        if (!deepEqualUtil_1.deepEqual([r, o, t, i, l], [n.state.currentRowFocus, n.state.currentColFocus, n.state.currentRowAnchor, n.state.currentColAnchor, n.state.selectType])) {
          var c = n.getFocusIndices({
            currentRowAnchor: t,
            currentRowFocus: r,
            currentColAnchor: i,
            currentColFocus: o,
            isNeat: u === undefined || u
          }).selectedCellIds;
          if (c.length > 1 || n.isMouseTableSelectionMoreThanOne) {
            n.isMouseTableSelectionMoreThanOne = true;
            if (a !== undefined && a) {
              n.focusAndCollapseSelectionOntoCell(r, o, [0, 0], false);
            }
            n.setState({
              selectedCellIds: c,
              currentRowFocus: r,
              currentColFocus: o,
              currentRowAnchor: t,
              currentColAnchor: i,
              selectType: l
            });
          }
        }
      };
      n.moveFocusCell = function (e, t) {
        if (!n.isEmpty()) {
          var r = undefined;
          var i = undefined;
          var o = undefined;
          var a = undefined;
          if (n.state.selectedCellIds.length) {
            o = n.state.currentRowAnchor;
            a = n.state.currentColAnchor;
            r = n.state.currentRowFocus;
            i = n.state.currentColFocus;
          } else {
            var s = n.props.editor.getContentState().getActiveZone().getZoneId();
            if (!s) {
              return;
            }
            var l = n.getRowAndColIndicesForCellId(s);
            if (!l) {
              return;
            }
            o = r = l.rowIndex;
            a = i = l.colIndex;
          }
          r = Math.max(0, Math.min(n.getRowCount() - 1, r + e));
          i = Math.max(0, Math.min(n.getColCount() - 1, i + t));
          n.setFocusIndices({
            currentRowAnchor: o,
            currentColAnchor: a,
            currentRowFocus: r,
            currentColFocus: i
          });
        }
      };
      n.selectEntireCell = function (e) {
        var t = e.cellId;
        var r = e.withMergedCell;
        var i = n.getRowAndColIndicesForCellId(t);
        if (i) {
          var o = n.state;
          var a = o.cellAttribs;
          var s = o.colIds;
          var l = o.rowIds;
          var u = i.rowIndex;
          var c = i.colIndex;
          var h = [t];
          var d = c;
          var f = u;
          if (r !== undefined && r) {
            var A = a[u][c];
            if (A[editorTableUtils.tableConstants.COL_SPAN] > 1) {
              d = c + A[editorTableUtils.tableConstants.COL_SPAN] - 1;
            }
            if (A[editorTableUtils.tableConstants.ROW_SPAN] > 1) {
              f = u + A[editorTableUtils.tableConstants.ROW_SPAN] - 1;
            }
            for (var g = u; g <= f; g++) {
              for (var p = c; p <= d; p++) {
                var m = tableCellIdUtils.createCellId(l[g], s[p]);
                if (m !== t) {
                  h.push(m);
                }
              }
            }
          }
          n.setState({
            selectedCellIds: h,
            currentRowAnchor: u,
            currentColAnchor: c,
            currentRowFocus: f,
            currentColFocus: d,
            selectType: editorTableUtils.tableEventTypes.MOVE
          });
          n.focusAndCollapseSelectionOntoCell(u, c, [0, 0], false);
        }
      };
      n.ensureValidCurrentIndices = function (e = n.getRowCount(), t = n.getColCount()) {
        var r = n.state;
        var i = r.currentRowAnchor;
        var o = r.currentColAnchor;
        var a = r.currentRowFocus;
        var s = r.currentColFocus;
        if (i && i >= e) {
          n.setState({
            currentRowAnchor: e - 1
          });
        }
        if (o && o >= t) {
          n.setState({
            currentColAnchor: t - 1
          });
        }
        if (a && a >= e) {
          n.setState({
            currentRowFocus: e - 1
          });
        }
        if (s && s >= t) {
          n.setState({
            currentColFocus: t - 1
          });
        }
      };
      n.insertRowAtIndex = function (e) {
        if (e >= 0 && e <= n.getRowCount()) {
          n.replaceVectorRange({
            forRow: true,
            zoneId: n.state.rowsZoneId,
            replaceRangeStart: e,
            replaceRangeEnd: e,
            newCount: 1
          });
        }
      };
      n.getExtendStyleOptions = function (e) {
        var t = n.props.tableOptions;
        var r = t == null ? undefined : t.extendStyle;
        if (isBooleanUtil.isBoolean(e) && e) {
          return {
            border: e,
            backgroundColor: e
          };
        } else {
          return r;
        }
      };
      n.finalizeDeletionOfHighlightedRows = function () {
        if (n.state.hintRowsToDeleteCount) {
          if (n.state.hintRowsToDeleteStartIndex === 0 && n.state.hintRowsToDeleteCount === n.getRowCount()) {
            n.deleteTable();
          } else {
            var e = n.getWhollySelectedRegions().rows || [];
            n.groupConsecutiveIndices(e).reverse().forEach(function (e) {
              return n.deleteRowAtIndex(e.index, e.count);
            });
            n.setState({
              hintRowsToDeleteStartIndex: -1,
              hintRowsToDeleteCount: 0
            }, function () {
              n.props.editor.focus();
            });
          }
        }
      };
      n.setCellStyle = function (e, t) {
        var r = n.state.tableStyle;
        r[e] = t;
        n.setState({
          tableStyle: r
        });
      };
      n.getCellStyle = function (e) {
        return reactDomEntryWrapper.findDOMNode(n.cellRefs["cell-" + e]).style || "";
      };
      n.deleteColAtIndex = function (e, t = 1) {
        var r = n.props.editor;
        var i = n.getTableInfo();
        n.currentStack = editorTableUtils.colCountChangeEvent;
        n.tableWidth = n.tableWidth || i && i.width;
        if (e !== 0 || t !== n.getColCount()) {
          n.focusAndCollapseSelectionOntoCell(0, e === n.state.colIds.length - t ? e - 1 : e + t);
          n.ensureValidCurrentIndices(0, n.getColCount() - t);
          var o = new zoneDeltaClasses.ZoneDelta({
            zoneId: n.state.colsZoneId,
            zoneType: documentOperationConstants.structureTypes.Column
          }).retain(e).delete(t);
          r.getContentState().apply(o, {
            type: editorTableUtils.tableCommands.DELETE_COL
          });
        } else {
          n.deleteTable(editorTableUtils.deleteSourceTypes.BUTTON);
        }
        n.currentStack = "";
      };
      n.finalizeDeletionOfHighlightedCols = function () {
        var e = n.state;
        var t = e.hintColsToDeleteCount;
        var r = e.hintColsToDeleteStartIndex;
        if (t) {
          if (r === 0 && t === n.getColCount()) {
            n.deleteTable();
          } else {
            var i = n.getWhollySelectedRegions().cols || [];
            n.groupConsecutiveIndices(i).reverse().forEach(function (e) {
              return n.deleteColAtIndex(e.index, e.count);
            });
            n.setState({
              hintColsToDeleteStartIndex: -1,
              hintColsToDeleteCount: 0
            });
          }
        }
      };
      n.groupConsecutiveIndices = function (e) {
        return e.reduce(function (e, t) {
          var r = e[e.length - 1];
          if (r && r.index + r.count === t) {
            r.count++;
          } else {
            e.push({
              index: t,
              count: 1
            });
          }
          return e;
        }, []);
      };
      n.updateFocus = function (e) {
        n.setState({
          isFocused: e
        });
      };
      n.updateHover = function (e) {
        n.setState({
          isHovered: e
        });
      };
      n.checkIsFocused = function () {
        var e = n.props.editor;
        return e.isFocus() && n.getCellIds().includes(e.getContentState().getActiveZone().getZoneId());
      };
      n.calColHeaderWidths = function () {
        var o = n.state;
        var a = o.rowIds;
        var s = o.colIds;
        var l = o.cellAttribs;
        var u = o.colAttribs;
        var c = o.rowAttribs;
        var h = [];
        var d = [];
        if (!s[0] || !l[0].length || !u.length || !c.length) {
          return {
            colHeaderWidths: h,
            colHeaderTypes: d
          };
        }
        for (var f = 0; f < s.length; f++) {
          (function (o) {
            var u = -1;
            var c = 0;
            for (; c < a.length; c++) {
              var f = l[c][o];
              if (!Number.isInteger(f[editorTableUtils.tableConstants.COL_SPAN])) {
                var A = tableCellIdUtils.createCellId(a[c], s[o]);
                var g = reactDomEntryWrapper.findDOMNode(n.cellRefs["cell-" + A]);
                if (g) {
                  var p = g.getClientRects()?.[0];
                  var m = +(o !== 0);
                  var y = (p == null ? undefined : p.width) ?? g.clientWidth + m;
                  h[o] = y;
                }
                break;
              }
              if (f[editorTableUtils.tableConstants.COL_SPAN] === 0) {
                var v = l[c][o + 1];
                if (u === -1 && (!v || v[editorTableUtils.tableConstants.COL_SPAN] !== 0)) {
                  u = c;
                }
                continue;
              }
            }
            if (u !== -1) {
              var b = s.map(function (e, t) {
                return l[u][t][editorTableUtils.tableConstants.COL_SPAN] > 1;
              }).lastIndexOf(true, o);
              if (b !== -1) {
                var w = h.slice(b);
                var A = tableCellIdUtils.createCellId(a[u], s[b]);
                var g = reactDomEntryWrapper.findDOMNode(n.cellRefs["cell-" + A]);
                if (g) {
                  var p = g.getClientRects()?.[0];
                  var y = (p == null ? undefined : p.width) ?? g.clientWidth + 1;
                  var C = y;
                  var E = h.length;
                  for (; E <= o; E++) {
                    var I = w.reduce(function (e, t) {
                      return e + Number(t);
                    }, 0);
                    h[E] = (C - I) / (o - b + 1 - w.length);
                    d[E] = E !== o ? "colMerged" : "";
                  }
                }
              }
            }
          })(f);
        }
        return {
          colHeaderWidths: h,
          colHeaderTypes: d
        };
      };
      n.scrollLeftTo = function (e) {
        n.getScrollable().scrollLeft = e;
      };
      n.findCellOffsetToTable = function (e) {
        var t = reactDomEntryWrapper.findDOMNode(n.cellRefs["cell-" + e]).parentElement;
        if (t) {
          var r = t.clientHeight;
          return {
            top: function (e, t) {
              if (!e) {
                return null;
              }
              var r = e;
              var n = 0;
              while (r !== t && r !== null) {
                n += r.offsetTop;
                var i = r.offsetParent;
                if (!(i instanceof HTMLElement)) {
                  return null;
                }
                r = i;
              }
              return n;
            }(t, reactDomEntryWrapper.findDOMNode(n.tableRef)),
            height: r
          };
        }
      };
      n.getColMinWidth = function (e) {
        return Object.keys(n.zoneBlockMinWidthMap).reduce(function (t, r) {
          var i = n.getRowAndColIndicesForCellId(r);
          if (!i || e !== i.colIndex) {
            return t;
          }
          var a = Object.values(n.zoneBlockMinWidthMap[r]);
          return Math.max.apply(Math, typescriptHelpers_1.spreadArray([t], a));
        }, 0) + 16;
      };
      n.setZoneBlockMinWidth = function (e) {
        var t = e.zoneId;
        var r = e.blockId;
        var i = e.minWidth;
        n.zoneBlockMinWidthMap[t] = n.zoneBlockMinWidthMap[t] || {};
        n.zoneBlockMinWidthMap[t][r] = i;
      };
      n.removeZoneBlockMinWidth = function (e) {
        var t = e.zoneId;
        var r = e.blockId;
        if (n.zoneBlockMinWidthMap[t] && n.zoneBlockMinWidthMap[t][r]) {
          delete n.zoneBlockMinWidthMap[t][r];
        }
      };
      var i = n.props;
      var l = i.contentEditable;
      var u = i.rowsZoneId;
      var c = i.colsZoneId;
      var h = i.rowIds;
      var d = i.colIds;
      var f = i.rowAttribs;
      var A = i.colAttribs;
      var B = i.adit;
      var x = i.toolBarScale;
      var D = i.rangeDom;
      var S = i.isResponsiveWidth;
      var k = i.aceTableBorder;
      n.editor = n.props.editor;
      if (B && B.getSDKBus) {
        n.em = B.getSDKBus();
      }
      n.tableId = tableCellIdUtils.createTableClassName(u, c);
      n.tablePlugin = n.props.editor.pluginManager.getPlugin(ey.KEY);
      var _ = n.getCellAttribsFromRowAndColAttribs(f, A, h, d).cellAttribs;
      var T = A.map(function (e) {
        var t = e[editorTableUtils.tableConstants.COL_WIDTH];
        if (S) {
          if (t) {
            return Number(t) + 1;
          } else {
            return t;
          }
        } else {
          return Number(t || editorTableUtils.minTableSize) + 1;
        }
      });
      var R = n.props.tableOptions?.customContext;
      editorTableUtils.safeCallFunction("tableWillMount", n.props.tableOptions, {
        editor: n.props.editor,
        customContext: R
      });
      n.state = {
        colHeaderWidths: T,
        colMinWidths: [],
        colHeaderTypes: [],
        rowHeaderHeights: [],
        rowContentHeights: [],
        rowBeingResizedHeights: [],
        scrollLeft: 0,
        currentRowAnchor: 0,
        currentColAnchor: 0,
        currentRowFocus: 0,
        currentColFocus: 0,
        currentRowHovered: -1,
        currentColHovered: -1,
        columnBeingResized: -1,
        rowBeingResized: -1,
        columnWithRightBorderHighlighted: null,
        rowWithBottomBorderHighlighted: null,
        selectedCellIds: [],
        selectedCellColor: null,
        addRemoveIsShown: false,
        hintRowsToDeleteStartIndex: -1,
        hintRowsToDeleteCount: 0,
        hintColsToDeleteStartIndex: -1,
        hintColsToDeleteCount: 0,
        isFocused: false,
        isHovered: false,
        isSelectAll: false,
        rowsZoneId: u,
        colsZoneId: c,
        rowIds: h.slice(0),
        colIds: d.slice(0),
        rowAttribs: f,
        colAttribs: A,
        cellAttribs: _,
        selectType: editorTableUtils.tableEventTypes.OTHER,
        horzResizeDiff: 0,
        vertResizeDiff: 0,
        toolBarScale: x,
        tableStyle: {},
        isSelectRowOrCol: false,
        forRows: false,
        customContext: R || {},
        aceTableBorder: k
      };
      n.cellRefs = {};
      n.minDragWidths = A.map(function () {
        return n.colMinWidth;
      });
      n.rangeDom = D;
      n.tableColsWidth = j({
        colIds: d,
        colAttribs: A
      }, S ? undefined : n.colDefaultWidth);
      n.contentEditable = l;
      n.props.editor.on("contentchange", n.handleContentChange);
      return n;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.handleContentChange = function (e) {
      var t;
      var r;
      var n;
      var i;
      var a;
      var s;
      var l;
      var u;
      var c;
      var h;
      var d;
      var f;
      var A = this.props;
      var g = A.colsZoneId;
      var p = A.rowsZoneId;
      var m = A.editor;
      var y = e.deltaSet.deltas;
      if (y[g] || y[p]) {
        var v = m.getContentState();
        var b = v.getZoneState(p);
        var w = v.getZoneState(g);
        if (b && w) {
          var C = b.getLine(0);
          var E = w.getLine(0);
          var I = [];
          var B = [];
          var x = [];
          var D = [];
          if (C) {
            try {
              var S = typescriptHelpers_1.getValues(C);
              var k = S.next();
              for (; !k.done; k = S.next()) {
                var _ = k.value;
                I.push(_.insert.id);
                x.push(_.attributes || {});
              }
            } catch (e) {
              t = {
                error: e
              };
            } finally {
              try {
                if (k && !k.done && (r = S.return)) {
                  r.call(S);
                }
              } finally {
                if (t) {
                  throw t.error;
                }
              }
            }
          }
          if (E) {
            try {
              var T = typescriptHelpers_1.getValues(E);
              var R = T.next();
              for (; !R.done; R = T.next()) {
                var _ = R.value;
                B.push(_.insert.id);
                D.push(_.attributes || {});
              }
            } catch (e) {
              n = {
                error: e
              };
            } finally {
              try {
                if (R && !R.done && (i = T.return)) {
                  i.call(T);
                }
              } finally {
                if (n) {
                  throw n.error;
                }
              }
            }
          }
          var F = [];
          try {
            var L = typescriptHelpers_1.getValues(I);
            var O = L.next();
            for (; !O.done; O = L.next()) {
              var M = O.value;
              try {
                l = undefined;
                var P = typescriptHelpers_1.getValues(B);
                var U = P.next();
                for (; !U.done; U = P.next()) {
                  var z = U.value;
                  F.push(tableCellIdUtils.createCellId(M, z));
                }
              } catch (e) {
                l = {
                  error: e
                };
              } finally {
                try {
                  if (U && !U.done && (u = P.return)) {
                    u.call(P);
                  }
                } finally {
                  if (l) {
                    throw l.error;
                  }
                }
              }
            }
          } catch (e) {
            a = {
              error: e
            };
          } finally {
            try {
              if (O && !O.done && (s = L.return)) {
                s.call(L);
              }
            } finally {
              if (a) {
                throw a.error;
              }
            }
          }
          var H = this.getCellIds();
          var G = (d = v == null ? undefined : v.getZoneManager) === null || d === undefined ? undefined : d.call(v);
          try {
            var Z = typescriptHelpers_1.getValues(F);
            var W = Z.next();
            for (; !W.done; W = Z.next()) {
              var j = W.value;
              if (!H.includes(j) && !v.getZoneState(j)) {
                v.addZone(j);
              }
              var Y = v.getZoneState(j);
              if (Y && !Y.parent) {
                var K = b.parent || w.parent || null;
                if (K) {
                  if (G != null) {
                    G.update(j, K);
                  }
                }
              }
            }
          } catch (e) {
            c = {
              error: e
            };
          } finally {
            try {
              if (W && !W.done && (h = Z.return)) {
                h.call(Z);
              }
            } finally {
              if (c) {
                throw c.error;
              }
            }
          }
          this.setRep(p, g, I, B, x, D);
          var q = (f = this.editor.virtualListManager) === null || f === undefined ? undefined : f.getVirtualListModuleOfZone(zeroConstantModule_1.versionValue);
          if (q && q.isEnabled) {
            q.handleChildZoneContentChange(g);
          }
        }
      }
    };
    r.getColAndROWIds = function () {
      var e = this.state;
      return {
        colIds: e.colIds,
        rowIds: e.rowIds
      };
    };
    r.calcCellPoint = function (e) {
      var t = $(e);
      var r = t.rowId;
      var n = t.colId;
      var i = this.state;
      var o = i.colIds;
      return {
        x: i.rowIds.indexOf(r),
        y: o.indexOf(n)
      };
    };
    r.getTableColsWidth = function () {
      return this.tableColsWidth;
    };
    r.getComponentMounted = function () {
      return this.isComponentMounted;
    };
    r.getTableRectInfo = function () {
      if (!this.tableRectInfo) {
        this.calcUpdateTableRectInfo();
      }
      return this.tableRectInfo;
    };
    r.componentDidMount = function () {
      this.isComponentMounted = true;
      this.bindEvents();
      this.calcTableContentRectInfo();
      var e = {
        tableInstance: this,
        tableId: this.tableId,
        setCustomContext: this.setCustomContext,
        getCustomContext: this.getCustomContext,
        isInBuffer: this.isInBuffer,
        idleTimer: this.idleTimer,
        editor: this.props.editor
      };
      editorTableUtils.safeCallFunction("tableDidMount", this.props.tableOptions, e);
      this.props.editor.on("keydown", this.handleKeyDown);
      this.tableWrapperInnerRef.handleContentResize();
    };
    r.getCellLayoutWidth = function (e) {
      var n = this.cellRefs["cell-" + e];
      var i = this.getRowAndColIndicesForCellId(e);
      if (!n || !i) {
        return null;
      }
      var o = this.getScrollable();
      var a = o ? o.scrollLeft : 0;
      var s = this.state;
      var l = s.cellAttribs;
      var u = s.colAttribs;
      var c = this.props.isResponsiveWidth;
      this.tableRef.style["table-layout"] = "auto";
      var h = n.clientWidth + 1;
      this.tableRef.style["table-layout"] = "";
      if (o) {
        o.scrollLeft = a;
      }
      var d = this.getMergedCellIdForZoneId(e);
      var f = i.rowIndex;
      var A = i.colIndex;
      var g = l[f][A]?.colspan;
      var p = c ? 0 : editorTableUtils.minTableSize;
      if (d && g) {
        h -= u.slice(A + 1, A + g).reduce(function (e, t) {
          return e + (Number(t.colWidth) || p);
        }, 0);
      }
      return Math.max(h, u[A]?.colWidth || p);
    };
    r.on = function (e, t) {
      var r = this.props.editor;
      if (e === "CONTEXT_CHANGE" || e === "colHorzResize" || e === "scroll" || e === "removeColOrRow") {
        r.on(e, t);
      }
    };
    r.off = function (e, t) {
      var r = this.props.editor;
      if (e === "CONTEXT_CHANGE" || e === "colHorzResize" || e === "scroll" || e === "removeColOrRow") {
        r.off(e, t);
      }
    };
    r.getCustomContext = function () {
      return this.state.customContext;
    };
    r.setCustomContext = function (e, t) {
      this.setState(function (t) {
        return {
          customContext: Object.assign({}, t.customContext, e)
        };
      }, t);
    };
    r.getRectOfZone = function (e) {
      var t = this;
      var r = this.state;
      var n = r.rowIds;
      var i = r.colIds;
      var a = r.cellAttribs;
      var s = r.scrollLeft;
      var l = r.rowHeaderHeights;
      var u = r.colHeaderWidths;
      var c = r.horzResizeDiff;
      var h = r.columnBeingResized;
      var d = r.rowBeingResized;
      var f = r.vertResizeDiff;
      var A = [];
      var g = [];
      var p = [];
      var m = [];
      var y = new Map();
      var v = this.getTableRectInfo();
      tableCellIdUtils.convertIdsToIndices(n, i, e).forEach(function (r, n) {
        var i = typescriptHelpers_1.readIterator(typescriptHelpers_1.spreadArray(r), 2);
        var b = i[0];
        var w = i[1];
        if (b !== -1 && w !== -1 && !m.includes(b + "|" + w)) {
          var C = a[b][w];
          var E = C.mergeCellID;
          var I = C.colspan;
          var B = C.rowspan;
          var x = E && I !== 0 && B !== 0;
          var D = !x && E && (I === 0 || B === 0);
          var S = D ? 0 : Math.floor(a[b][w][editorTableUtils.tableConstants.COL_WIDTH]);
          var k = D ? 0 : Math.floor(a[b][w][editorTableUtils.tableConstants.ROW_HEIGHT]);
          if (h !== -1 && h === w) {
            S += c;
          }
          if (h !== -1 && h === w - 1) {
            S -= c;
          }
          if (d !== -1 && d === b) {
            k += f;
          }
          if (d !== -1 && d === b - 1) {
            k -= f;
          }
          if (!x && !D) {
            k = Math.max(k, l[b]);
          }
          if (x) {
            k = Math.max(k, reactDomEntryWrapper.findDOMNode(t.cellRefs["cell-" + e[n]]).clientHeight);
          }
          var _ = u.slice(0, w).reduce(function (e, t) {
            return e + t;
          }, 1);
          A.push(_ + v.get("left") - s);
          var T = l.slice(0, b).reduce(function (e, t) {
            return e + t;
          }, 1);
          g.push(T + v.get("top"));
          p.push(T + v.get("top") + k);
          if (y.has(b)) {
            var Q = y.get(b) + Number(S);
            y.set(b, Q);
          } else {
            y.set(b, Number(S));
          }
          if (x && B !== 0) {
            for (var R = 1; R < B; R++) {
              var L = b + R;
              if (y.has(L)) {
                var O = y.get(L) + Number(S);
                y.set(L, O);
              } else {
                y.set(L, Number(S));
              }
            }
          }
          m.push(b + "|" + w);
        }
      });
      var b = Array.from(y.values());
      return {
        left: editorTableUtils.mathMin(A) || null,
        bottom: editorTableUtils.mathMax(p) || null,
        top: editorTableUtils.mathMin(g) || null,
        width: editorTableUtils.mathMax(b) || null
      };
    };
    r.isToolbarShown = function () {
      return this.state.isFocused;
    };
    r.shouldComponentUpdate = function (e, t) {
      return !deepEqualUtil_1.deepEqual(e, this.props) || !deepEqualUtil_1.deepEqual(t, this.state);
    };
    r.componentDidUpdate = function (e, t) {
      var r = this.state;
      var n = r.selectedCellIds;
      var i = r.isSelectAll;
      var o = r.selectType;
      if (t.selectedCellIds.length !== n.length && t.isSelectAll === i) {
        this.setState({
          isSelectAll: false
        });
      }
      var a = {
        prevState: t,
        prevProps: e,
        nextState: this.state,
        nextProps: this.props,
        setCustomContext: this.setCustomContext,
        getCustomContext: this.getCustomContext
      };
      editorTableUtils.safeCallFunction("tableDidUpdate", this.props.tableOptions, a);
      if (t.selectType !== o && this.contentEditable) {
        this.selectedCellsChange();
      }
    };
    r.getRectOfZoneInEditor = function (e) {
      var t = this.props.editor;
      var r = this.state;
      var n = r.rowIds;
      var i = r.colIds;
      var a = r.cellAttribs;
      var s = r.colAttribs;
      var l = r.scrollLeft;
      var u = [];
      var c = [];
      var h = [];
      var d = tableCellIdUtils.convertIdsToIndices(n, i, e);
      var f = new Map();
      var A = this.getTableRectInfo();
      d.forEach(function (e) {
        var t = typescriptHelpers_1.readIterator(typescriptHelpers_1.spreadArray(e), 2);
        var r = t[0];
        var n = t[1];
        var i = a[r][n][editorTableUtils.tableConstants.COL_WIDTH];
        var c = s.slice(0, n).reduce(function (e, t) {
          if (t.colWidth) {
            return e + Number(t[editorTableUtils.tableConstants.COL_WIDTH]);
          } else {
            return e + 100;
          }
        }, 1);
        u.push(c + A.get("left") - l);
        if (f.has(r)) {
          var h = f.get(r) + Number(i);
          f.set(r, h);
        } else {
          f.set(r, Number(i));
        }
      });
      var g = Array.from(f.values());
      e.forEach(function (e, r) {
        if (!tableCellIdUtils.checkMergeCellState(e, n, i, a)) {
          var o = t.rectModule.getLineRect({
            zoneId: e,
            line: 0
          }).top;
          if (o) {
            c.push(o - editorTableUtils.shortcutCode1);
          }
          var s = t.getContentState().getZoneState(e);
          if (s) {
            var l = t.rectModule.getLineRect({
              zoneId: e,
              line: s.length() - 1
            });
            var u = l.bottom;
            var d = l.height;
            if (u) {
              h.push(u + d + editorTableUtils.shortcutCode2);
            }
          }
        }
      });
      return {
        left: editorTableUtils.mathMin(u) || null,
        bottom: editorTableUtils.mathMax(h) || null,
        top: editorTableUtils.mathMin(c) || null,
        width: editorTableUtils.mathMax(g) || null
      };
    };
    r.selectedCellsChange = function () {
      var e = this.props.editor;
      var t = this.state;
      var r = t.selectedCellIds;
      var n = t.cellAttribs;
      var i = t.rowIds;
      var o = t.colIds;
      var a = t.selectType;
      var s = this.getCellIds();
      var l = r.filter(function (e) {
        return s.includes(e);
      });
      var u = tableCellIdUtils.getCellDataByIds(i, o, l, n);
      if (u) {
        var c = tableCellIdUtils.getMergeDisabledState(u, i, o, l);
        var h = this.getRectOfZoneInEditor(l);
        e.call("specialSelectionChange", {
          rect: h,
          selectedCellIds: l,
          mergeStatus: a === editorTableUtils.tableEventTypes.MOVE ? c : null,
          selectType: editorTableUtils.tableCellType
        });
      }
    };
    r.getSelectedCellStatus = function (e) {
      var t = e || this.state.selectedCellIds;
      var r = this.state;
      var n = r.cellAttribs;
      var i = r.rowIds;
      var o = r.colIds;
      var a = tableCellIdUtils.getCellDataByIds(i, o, t, n);
      if (a) {
        return tableCellIdUtils.getMergeDisabledState(a, i, o, t);
      } else {
        return "";
      }
    };
    r.setRangeOnRangeDom = function () {
      if (this.contentEditable) {
        var e = this.rangeDom;
        var t = window.getSelection();
        if (t.focusNode !== e) {
          t.removeAllRanges();
          if (e) {
            var r = new Range();
            r.selectNode(e);
            t.addRange(r);
          }
        }
      }
    };
    r.componentWillUnmount = function () {
      var e = this.props.editor;
      this.disposeTableMouseSelection();
      this.isComponentMounted = false;
      clearTimeout(this.blurTimeout);
      this.removeEvents();
      var t = {
        tableInstance: this,
        tableId: this.tableId,
        setCustomContext: this.setCustomContext,
        getCustomContext: this.getCustomContext,
        editor: e
      };
      editorTableUtils.safeCallFunction("tableWillUnMount", this.props.tableOptions, t);
      e.off("keydown", this.handleKeyDown);
      e.off("contentchange", this.handleContentChange);
    };
    r.isTableMounted = function () {
      return this.isComponentMounted;
    };
    r.handleVirtualListBufferChange = function (e) {
      var t;
      var r;
      var n;
      var i;
      var a;
      var s;
      var l = e.zoneId;
      var u = e.insertRangeList;
      var c = e.removeRangeList;
      if (l === zeroConstantModule_1.versionValue) {
        var h = (s = (a = this.editor.getContentState()).getZoneManager) === null || s === undefined ? undefined : s.call(a);
        if (h) {
          var d = h.getMatchedAncestorLine(this.getRowsZoneId(), zeroConstantModule_1.versionValue);
          if (d) {
            var f = d.index;
            try {
              var A = typescriptHelpers_1.getValues(u);
              var g = A.next();
              for (; !g.done; g = A.next()) {
                var p = g.value;
                if (f >= p.startLine && f <= p.endLine) {
                  this.enterBuffer();
                  return;
                }
              }
            } catch (e) {
              t = {
                error: e
              };
            } finally {
              try {
                if (g && !g.done && (r = A.return)) {
                  r.call(A);
                }
              } finally {
                if (t) {
                  throw t.error;
                }
              }
            }
            try {
              var m = typescriptHelpers_1.getValues(c);
              var y = m.next();
              for (; !y.done; y = m.next()) {
                var v = y.value;
                if (f >= v.startLine && f <= v.endLine) {
                  this.leaveBuffer();
                  return;
                }
              }
            } catch (e) {
              n = {
                error: e
              };
            } finally {
              try {
                if (y && !y.done && (i = m.return)) {
                  i.call(m);
                }
              } finally {
                if (n) {
                  throw n.error;
                }
              }
            }
          }
        }
      }
    };
    r.enterBuffer = function () {
      this.isInBuffer = true;
      if (this.getTableInnerWrapper()) {
        if ((t = this.tableIframeRef?.contentWindow) !== null && t !== undefined) {
          t.addEventListener("resize", this.handleContentResize);
        }
        var t;
        var r = {
          tableId: this.tableId,
          isInBuffer: this.isInBuffer,
          idleTimer: this.idleTimer,
          tableInstance: this,
          setCustomContext: this.setCustomContext,
          getCustomContext: this.getCustomContext
        };
        editorTableUtils.safeCallFunction("enterBuffer", this.props.tableOptions, r);
      }
    };
    r.leaveBuffer = function () {
      this.isInBuffer = false;
      var t;
      var r = this.getTableInnerWrapper();
      if (r) {
        r.cancelIdleHandleContentResize();
      }
      var n = {
        isInBuffer: this.isInBuffer,
        idleTimer: this.idleTimer
      };
      if ((t = this.tableIframeRef?.contentWindow) !== null && t !== undefined) {
        t.removeEventListener("resize", this.handleContentResize);
      }
      editorTableUtils.safeCallFunction("leaveBuffer", this.props.tableOptions, n);
    };
    r.handleBlockDidCreate = function (e) {
      var t;
      var r;
      var n = (r = (t = document.querySelector(".block-id-" + e)) === null || t === undefined ? undefined : t.closest(".ace-editor")) === null || r === undefined ? undefined : r.getAttribute("data-zone-id");
      if (n && this.getCellIds().includes(n)) {
        this.blockIdToZoneId[e] = n;
      }
    };
    r.handleBlockDelete = function (e) {
      var t = this;
      if (this.blockIdToZoneId[e]) {
        setTimeout(function () {
          delete t.blockIdToZoneId[e];
        });
      }
    };
    r.focusAndCollapseSelectionOntoCell = function (e, t, r = [0, 0], n = true, i = true) {
      if (!(e < 0) && !(t < 0) && !(e >= this.state.rowIds.length) && !(t >= this.state.colIds.length)) {
        var o = this.getZoneIdFromRowAndColIndex(e, t);
        this.focusAndCollapseSelectionOntoCellByZoneId(o, r, n, i);
      }
    };
    r.focusAndCollapseSelectionOntoCellByZoneId = function (e, t = [0, 0], r = true, n = true) {
      this.setSelectionOntoCell(e, {
        start: t,
        end: t
      }, n);
      this.handleInnerZoneFocus({
        zoneId: e
      });
      var i = this.state.selectedCellIds;
      if (r && i.length) {
        this.setState({
          selectedCellIds: []
        });
      }
    };
    r.setSelectionOntoCell = function (e, t, r = true) {
      var n = this.getEditor();
      var i = n.getContentState().getZoneState(e);
      if (i) {
        var a = typescriptHelpers_1.readIterator(t.start, 2);
        var s = a[0];
        var l = a[1];
        var u = typescriptHelpers_1.readIterator(t.end, 2);
        var c = u[0];
        var h = u[1];
        if (s === -1) {
          s = i.length() - 1;
        }
        if (c === -1) {
          c = i.length() - 1;
        }
        if (l === 0) {
          var d = i.getLine(s);
          if (!d) {
            return;
          }
          l = d.getLineMarker();
        }
        if (l === -1) {
          var d = i.getLine(s);
          if (!d) {
            return;
          }
          l = d.length() - 1;
        }
        if (h === 0) {
          var d = i.getLine(c);
          if (!d) {
            return;
          }
          h = d.getLineMarker();
        }
        if (h === -1) {
          var d = i.getLine(c);
          if (!d) {
            return;
          }
          h = d.length() - 1;
        }
        var f = {
          start: {
            zoneId: e,
            line: s,
            offset: l
          },
          end: {
            zoneId: e,
            line: c,
            offset: h
          }
        };
        n.selection.setSelection(f, r);
        this.getCellHost(e).focus();
      }
    };
    r.handleTableMouseUpAfterMove = function () {
      this.disposeTableMouseSelection();
      this.setSelectionInFirstCellOfSelectedCells();
      if (this.contentEditable) {
        this.selectedCellsChange();
      }
    };
    r.handleMouseSelection = function () {
      this.disposeTableMouseSelection();
      document.addEventListener("mouseup", this.handleTableMouseUpAfterMove);
      document.addEventListener("mousemove", this.updateSelectedCells);
    };
    r.handleTableMouseDown = function (e) {
      if (editorTableUtils.safariMouseHandler.invalidMousedown) {
        editorTableUtils.safariMouseHandler.invalidMousedown = false;
        editorTableUtils.safariMouseHandler.isRealMousedown = false;
        return;
      }
      if (e.target) {
        var t = e.target;
        if (!t.closest(".tb-resizable-grippy") && !t.closest(".hpx-button") && !t.closest(".tb-scrollable-scrollbar") && !this.isEmpty() && !(e.button > 1) && !t.closest(".gallery") && !t.closest(".new-gallery")) {
          this.handleMouseSelection();
          this.isMouseDown = true;
          var r = this.getRowAndColIndicesForNode(e.target);
          var n = r.rowIndex;
          var i = r.colIndex;
          if (n !== -1 && i !== -1) {
            if (J(e)) {
              e.preventDefault();
              var o = this.getZoneIdFromRowAndColIndex(n, i);
              if (!o) {
                return;
              }
              var a = this.state.selectedCellIds.indexOf(o);
              var s = this.state.selectedCellIds.slice(0);
              if (a !== -1) {
                s.splice(a, 1);
              } else {
                s.push(o);
              }
              this.setState({
                selectedCellIds: s
              });
            } else if (e.shiftKey) {
              var l = this.state;
              var u = l.currentRowAnchor;
              var c = l.currentColAnchor;
              if (u !== -1 && c !== -1) {
                this.setFocusIndices({
                  currentRowAnchor: u,
                  currentColAnchor: c,
                  currentRowFocus: n,
                  currentColFocus: i,
                  isUpdateCaret: !this.contentEditable
                });
              }
            } else {
              this.setState({
                currentRowAnchor: n,
                currentColAnchor: i,
                currentColFocus: i,
                currentRowFocus: n,
                selectedCellIds: []
              });
            }
          } else {
            if (!this.contentEditable) {
              return;
            }
            if (this.props.isInsertLineBetweenTable) {
              this.addLineBetweenTables(e);
            }
          }
        }
      }
    };
    r.addLineBetweenTables = function (e) {
      e.preventDefault();
      var t;
      var n = this.props.editor;
      var i = this.tableRef.getBoundingClientRect().top;
      var a = e.clientY <= i;
      var s = this.getPointOfCurrentTable();
      if (s) {
        var l = typescriptHelpers_1.assign({}, s);
        var u = -1;
        if (a) {
          if (this.tablePlugin.instanceManager.getInstanceByLineNum(s.zoneId, s.line - 1) || s.line === 0 && s.zoneId === zeroConstantModule_1.versionValue) {
            u = s.line;
            l.offset = 0;
          }
        } else {
          var c = n.getContentState().getZoneState(s.zoneId);
          if (!c) {
            return;
          }
          var h = c.length() - 1;
          var d = this.tablePlugin.instanceManager.getInstanceByLineNum(s.zoneId, s.line + 1);
          if (s.line < h && d) {
            u = s.line + 1;
          }
        }
        if (u !== -1) {
          var f = ((t = n.getContentState().getZoneState(l.zoneId)) === null || t === undefined ? undefined : t.pointToOffset(l)) ?? null;
          if (f === null) {
            return;
          }
          var A = new contentStructureDelta.ContentDelta({
            zoneId: l.zoneId
          }).retain(f).insertEnter();
          n.getContentState().apply(A);
          n.selection.setSelection({
            start: {
              zoneId: l.zoneId,
              line: u,
              offset: 0
            },
            end: {
              zoneId: l.zoneId,
              line: u,
              offset: 0
            }
          });
        }
      }
    };
    r.ontHeaderTriangleClick = function (e, t, r) {
      e.preventDefault();
      editorTableUtils.clearSelection();
      var n = r ? t : 0;
      var i = r ? 0 : t;
      this.setState({
        currentRowAnchor: n,
        currentColAnchor: i,
        isSelectRowOrCol: true,
        forRows: r
      });
      var o = r ? this.getRowZones(this.state.rowIds[t], J(e)) : this.getColZones(this.state.colIds[t], J(e));
      if (this.em) {
        this.em.emit("tableToolbarTriangleClick", {
          index: t,
          selectedCellIds: o,
          positionType: r ? "left" : "top"
        });
      }
    };
    r.updateCurrentHoverHeader = function (e, t) {
      if (this.isMouseDown) {
        if (t) {
          this.currentHoverOfRowHeader = e;
        } else {
          this.currentHoverOfColHeader = e;
        }
      }
    };
    r.getSelectionRange = function (e) {
      var t = this;
      var r = (e || this.getSelectedZonesForSpecialSelection()).map(function (e) {
        return t.getRowAndColIndicesForCellId(e);
      });
      var n = r.map(function (e) {
        return e.colIndex;
      });
      var i = [editorTableUtils.mathMin(n), editorTableUtils.mathMax(n)];
      var o = r.map(function (e) {
        return e.rowIndex;
      });
      return {
        colRange: i,
        rowRange: [editorTableUtils.mathMin(o), editorTableUtils.mathMax(o)]
      };
    };
    r.getZoneIdWhichContentShouldCompose = function (e) {
      var t = e.rowIndex;
      var r = e.colIndex;
      var n = e.rowRange;
      var i = e.colRange;
      var o = this.getZoneIdFromRowAndColIndex(t, r);
      if (!o) {
        return null;
      }
      var a = this.getEditor().getContentState().getZoneState(o);
      if (!a) {
        return null;
      }
      var s = a.getLine(0);
      if (t === (n === undefined ? [] : n)[0] && r === (i === undefined ? [] : i)[0] || s && (a.length() !== 1 || s.length() !== s.getLineMarker() + 1)) {
        return o;
      } else {
        return null;
      }
    };
    r.getMergedCellIdForZoneId = function (e) {
      var t = this.getRowAndColIndicesForCellId(e);
      if (t) {
        var r = t.rowIndex;
        var n = t.colIndex;
        var i = this.state.cellAttribs[r][n];
        return i && i.mergeCellID;
      }
    };
    r.updateRowAndColRangeOfPasteOntoTable = function (e) {
      var t = e.minRow;
      var r = e.minCol;
      var n = e.rowIdsOfPaste;
      var i = e.colIdsOfPaste;
      var o = this.state;
      var a = o.rowIds;
      var s = o.colIds;
      var l = o.rowsZoneId;
      var u = o.colsZoneId;
      var c = t + n.length - a.length;
      if (c > 0) {
        this.replaceVectorRange({
          forRow: true,
          zoneId: l,
          replaceRangeStart: a.length,
          replaceRangeEnd: a.length,
          newCount: c
        });
      }
      var h = r + i.length - s.length;
      if (h > 0) {
        this.replaceVectorRange({
          forRow: false,
          zoneId: u,
          replaceRangeStart: s.length,
          replaceRangeEnd: s.length,
          newCount: h
        });
      }
    };
    r.updateRowAndColAttributeOfPasteOntoTable = function (e) {
      var t = this;
      var r = e.minRow;
      var n = e.minCol;
      var i = e.rowIds;
      var a = e.colIds;
      var s = e.colAttribs;
      var l = e.rowAttribs;
      var u = {};
      var c = {};
      var h = {};
      var d = {};
      var f = {};
      var A = {};
      function g(e) {
        for (var t = 0; t < a.length; t++) {
          (function (t) {
            var o = p.getZoneIdFromRowAndColIndex(r + e, n + t);
            var g = tableCellIdUtils.createCellId(i[e], a[t]);
            if (o) {
              var m = l[e];
              var y = s[t];
              var v = Object.keys(m);
              var w = Object.keys(y);
              var C = JSON.parse(m[editorTableUtils.tableConstants.BORDER] || "{}");
              var I = JSON.parse(y[editorTableUtils.tableConstants.BORDER] || "{}");
              if (C && I && C[g] && deepEqualUtil_1.deepEqual(I[g], C[g])) {
                h[o] = C[g];
              }
              var x = throttledArrayIntersection_1.throttledIntersect(v, w, function (e, t) {
                return e.indexOf("font") === 0 && e === t;
              });
              if (x.length) {
                x.forEach(function (t) {
                  if (t.indexOf("fontSize") === 0) {
                    f[o] = JSON.parse(l[e][t])[g];
                  }
                  if (t.indexOf("fontWeight") === 0) {
                    A[o] = JSON.parse(l[e][t])[g];
                  }
                  if (t.indexOf("fontFamily") === 0) {
                    d[o] = JSON.parse(l[e][t])[g];
                  }
                });
              }
              var D = m[editorTableUtils.tableConstants.MERGE_CELL_ID];
              var S = y[editorTableUtils.tableConstants.MERGE_CELL_ID];
              if (D && S) {
                var k = D.split(editorTableUtils.tableConstants.M_SEPARATOR);
                var _ = S.split(editorTableUtils.tableConstants.M_SEPARATOR);
                var T = throttledArrayIntersection.throttledIntersect(k, _)[0];
                if (T) {
                  u[T] = u[T] || new Set();
                  u[T].add(o);
                }
              }
              var Q = JSON.parse(m[editorTableUtils.tableConstants.BACKGROUND_COLOR] || "{}");
              var R = JSON.parse(y[editorTableUtils.tableConstants.BACKGROUND_COLOR] || "{}");
              if (Q && R && Q[g] && Q[g] === R[g]) {
                var F = Q[g];
                c[F] = c[F] || new Set();
                c[F].add(o);
              }
            }
          })(t);
        }
      }
      var p = this;
      var m = 0;
      for (; m < i.length; m++) {
        g(m);
      }
      Object.values(u).forEach(function (e) {
        t.mergeCells(typescriptHelpers_1.spreadArray(e));
      });
      Object.entries(c).forEach(function (e) {
        var r = typescriptHelpers_1.readIterator(e, 2);
        var n = r[0];
        var i = r[1];
        t.setBackgroundColor({
          color: n,
          cellIds: typescriptHelpers_1.spreadArray(i)
        });
      });
      Object.entries(f).forEach(function (e) {
        var r = typescriptHelpers_1.readIterator(e, 2);
        var n = r[0];
        var i = r[1];
        try {
          var a = i;
          if (!new RegExp(/\D/).test(i)) {
            a += "px";
          }
          t.setFontAttribute(editorTableUtils.tableConstants.FONT_SIZE, a, [n]);
        } catch (e) {}
      });
      Object.entries(A).forEach(function (e) {
        var r = typescriptHelpers_1.readIterator(e, 2);
        var n = r[0];
        var i = r[1];
        try {
          var a = parseInt(i, 10);
          t.setFontAttribute(editorTableUtils.tableConstants.FONT_WEIGHT, a, [n]);
        } catch (e) {}
      });
      Object.entries(d).forEach(function (e) {
        var r = typescriptHelpers_1.readIterator(e, 2);
        var n = r[0];
        var i = r[1];
        try {
          t.setFontAttribute(editorTableUtils.tableConstants.FONT_FAMILY, i, [n]);
        } catch (e) {}
      });
      Object.entries(h).forEach(function (e) {
        var r = typescriptHelpers_1.readIterator(e, 2);
        var n = r[0];
        var i = r[1];
        try {
          t.setBorderStyle(typescriptHelpers_1.assign({
            zoneId: n
          }, i));
        } catch (e) {}
      });
      this.applyAttributesOfZone();
    };
    r.updateCellContentOfPasteOntoTable = function (e) {
      var t = e.minRow;
      var r = e.minCol;
      var n = e.rowIds;
      var i = e.colIds;
      var o = e.deltaSet;
      var a = this.state;
      var s = a.rowIds;
      var l = a.colIds;
      var u = this.props.editor;
      var c = [];
      var h = u.getContentState();
      var d = new deltaSetCore.DeltaSet();
      var f = 0;
      for (; f < n.length; f++) {
        for (var A = 0; A < i.length; A++) {
          var m = tableCellIdUtils.createCellId(n[f], i[A]);
          var y = tableCellIdUtils.createCellId(s[t + f], l[r + A]);
          var v = o.get(m);
          var b = h.getZoneState(y);
          if (b && v && v instanceof contentStructureDelta.ContentDelta) {
            d = d.compose(new contentStructureDelta.ContentDelta({
              zoneId: y
            }).delete(b.totalWidth() - 1)).compose(new contentStructureDelta.ContentDelta({
              zoneId: y,
              ops: v.ops
            }));
          }
          c.push(y);
        }
      }
      u.getContentState().apply(d);
      this.setState({
        selectedCellIds: c
      });
    };
    r.getBackgroundColor = function (e) {
      var t = this.getRowAndColIndicesForCellId(e);
      if (!t) {
        return null;
      }
      var r = this.state.cellAttribs;
      var n = t.rowIndex;
      var i = t.colIndex;
      return objectPathGetDefault.getObjectPathDefault(r, [n, i, editorTableUtils.tableConstants.BACKGROUND_COLOR], "");
    };
    r.getFontAttribute = function (e) {
      var t = this.getRowAndColIndicesForCellId(e);
      if (!t) {
        return {};
      }
      var r = this.state.cellAttribs;
      var n = t.rowIndex;
      var i = t.colIndex;
      var o = objectPathGetDefault.getObjectPathDefault(r, [n, i, editorTableUtils.tableConstants.FONT_FAMILY], undefined);
      var a = objectPathGetDefault.getObjectPathDefault(r, [n, i, editorTableUtils.tableConstants.FONT_WEIGHT], undefined);
      var s = objectPathGetDefault.getObjectPathDefault(r, [n, i, editorTableUtils.tableConstants.FONT_SIZE], undefined);
      var l = {};
      if (o) {
        l.fontFamily = o;
      }
      if (s) {
        l.fontSize = s;
      }
      if (a) {
        l.fontWeight = a;
      }
      return l;
    };
    r.setFontAttribute = function (e, t, r) {
      var n = this;
      if (r === undefined) {
        r = [];
      }
      var i = this.state.cellAttribs;
      if (!([editorTableUtils.tableConstants.FONT_FAMILY, editorTableUtils.tableConstants.FONT_SIZE, editorTableUtils.tableConstants.FONT_WEIGHT].indexOf(e) < 0)) {
        r.forEach(function (o) {
          n.performDocumentApplyAttributesToZone({
            zoneId: o,
            attributes: ((a = {})[e] = t, a)
          });
          var a;
          var s = n.getRowAndColIndicesForCellId(o);
          if (s) {
            var l = s.rowIndex;
            var u = s.colIndex;
            var c = objectPathGetDefault.getObjectPathDefault(i, [l, u, editorTableUtils.tableConstants.COL_SPAN]);
            var h = objectPathGetDefault.getObjectPathDefault(i, [l, u, editorTableUtils.tableConstants.ROW_SPAN]);
            var d = [];
            if (c > 1) {
              numericRangeUtil.createRange(u + 1, u + c).forEach(function (e) {
                var t = n.getZoneIdFromRowAndColIndex(l, e);
                if (t && r.indexOf(t) < 0) {
                  d.push(t);
                }
              });
            }
            if (h > 1) {
              numericRangeUtil.createRange(l + 1, l + h).forEach(function (e) {
                var t = n.getZoneIdFromRowAndColIndex(e, u);
                if (t && r.indexOf(t) < 0) {
                  d.push(t);
                }
              });
            }
            if (d.length) {
              n.setFontAttribute(e, t, d);
            }
          }
        });
      }
    };
    r.setBackgroundColor = function (e) {
      var t;
      var r;
      var n = this;
      var i = e.color;
      var a = e.cellIds;
      var s = a === undefined ? [] : a;
      var l = this.state.cellAttribs;
      var u = this;
      try {
        var c = typescriptHelpers_1.getValues(s.values());
        var h = c.next();
        for (; !h.done; h = c.next()) {
          var d = h.value;
          (function (e) {
            u.performDocumentApplyAttributesToZone({
              zoneId: e,
              attributes: ((t = {})[editorTableUtils.tableConstants.BACKGROUND_COLOR] = i, t)
            });
            var t;
            var r = u.getRowAndColIndicesForCellId(e);
            if (r) {
              var o = r.rowIndex;
              var a = r.colIndex;
              var c = objectPathGetDefault.getObjectPathDefault(l, [o, a, editorTableUtils.tableConstants.COL_SPAN]);
              var h = objectPathGetDefault.getObjectPathDefault(l, [o, a, editorTableUtils.tableConstants.ROW_SPAN]);
              var d = [];
              if (c > 1) {
                numericRangeUtil.createRange(a + 1, a + c).forEach(function (e) {
                  var t = n.getZoneIdFromRowAndColIndex(o, e);
                  if (t && s.indexOf(t) < 0) {
                    d.push(t);
                  }
                });
              }
              if (h > 1) {
                numericRangeUtil.createRange(o + 1, o + h).forEach(function (e) {
                  var t = n.getZoneIdFromRowAndColIndex(e, a);
                  if (t && s.indexOf(t) < 0) {
                    d.push(t);
                  }
                });
              }
              if (d.length) {
                u.setBackgroundColor({
                  color: i,
                  cellIds: d
                });
              }
            }
          })(d);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (h && !h.done && (r = c.return)) {
            r.call(c);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
    };
    r.getBorderAttributeByCellId = function (e) {
      var t = this.getRowAndColIndicesForCellId(e);
      if (!t) {
        return null;
      }
      var r = this.state.cellAttribs;
      var n = t.rowIndex;
      var i = t.colIndex;
      var o = objectPathGetDefault.getObjectPathDefault(r, [n, i, editorTableUtils.tableConstants.MERGE_CELL_ID]);
      if (o) {
        return this.findMergeCellBorder({
          mergeId: o,
          rowIndex: n,
          colIndex: i
        });
      } else {
        return Z({
          rowIndex: n,
          colIndex: i,
          cellAttribs: r
        });
      }
    };
    r.updateBackgroundStylesOfMergeCell = function (e) {
      var t = e.colRange;
      var r = e.rowRange;
      var n = this.state;
      var i = n.rowIds;
      var o = n.colIds;
      var a = tableCellIdUtils.createCellId(i[r[0]], o[t[0]]);
      var s = this.getBackgroundColor(a) || "";
      var l = [];
      var u = r[0];
      for (; u <= r[1]; u++) {
        for (var c = t[0]; c <= t[1]; c++) {
          if (u !== r[0] || c !== t[0]) {
            var h = tableCellIdUtils.createCellId(i[u], o[c]);
            l.push(h);
          }
        }
      }
      this.setBackgroundColor({
        color: s,
        cellIds: l
      });
      this.applyAttributesOfZone();
    };
    r.updateFontStyleOfMergeCell = function (e) {
      var t = this;
      var r = e.colRange;
      var n = e.rowRange;
      var i = this.state;
      var o = i.rowIds;
      var a = i.colIds;
      var s = tableCellIdUtils.createCellId(o[n[0]], a[r[0]]);
      var l = this.getFontAttribute(s) || {};
      var u = [];
      var c = n[0];
      for (; c <= n[1]; c++) {
        for (var h = r[0]; h <= r[1]; h++) {
          if (c !== n[0] || h !== r[0]) {
            var d = tableCellIdUtils.createCellId(o[c], a[h]);
            u.push(d);
          }
        }
      }
      if (u.length) {
        Object.keys(l).forEach(function (e) {
          t.setFontAttribute(e, l[e], u);
        });
        this.applyAttributesOfZone();
      }
    };
    r.updateBorderStyleOfMergeCell = function (e) {
      var t = e.colRange;
      var r = e.rowRange;
      var n = this.state;
      var a = n.rowIds;
      var s = n.colIds;
      var l = typescriptHelpers_1.readIterator(r, 2);
      var u = l[0];
      var c = l[1];
      var h = typescriptHelpers_1.readIterator(t, 2);
      var d = h[0];
      var f = h[1];
      var A = this.getZoneIdFromRowAndColIndex(u, d);
      var g = this.getZoneIdFromRowAndColIndex(c, f);
      if (A && g) {
        var p = this.getBorderAttributeByCellId(A) || {};
        var m = this.getBorderAttributeByCellId(g) || {};
        var y = p.top;
        var v = p.left;
        var b = p.right;
        var w = p.bottom;
        var C = m.right;
        var E = m.bottom;
        C = C || b;
        E = E || w;
        for (var I = u; I <= c; I++) {
          for (var B = d; B <= f; B++) {
            var x = this.getZoneIdFromRowAndColIndex(I, B);
            if (x) {
              this.removeBorderStyle({
                zoneId: x,
                borders: [i.ALL]
              });
            }
            if (y && I === u && I > 0) {
              var D = this.getZoneIdFromRowAndColIndex(I - 1, B);
              if (D) {
                this.setBorderStyle({
                  zoneId: D,
                  bottom: y,
                  isRecursion: false
                });
              }
            }
            if (E && I === c && I < a.length - 1) {
              var S = this.getZoneIdFromRowAndColIndex(I + 1, B);
              if (S) {
                this.setBorderStyle({
                  zoneId: S,
                  top: E,
                  isRecursion: false
                });
              }
            }
            if (v && B === d && B > 0) {
              var D = this.getZoneIdFromRowAndColIndex(I, B - 1);
              if (D) {
                this.setBorderStyle({
                  zoneId: D,
                  right: v,
                  isRecursion: false
                });
              }
            }
            if (C && B === f && B < s.length - 1) {
              var S = this.getZoneIdFromRowAndColIndex(I, B + 1);
              if (S) {
                this.setBorderStyle({
                  zoneId: S,
                  left: C,
                  isRecursion: false
                });
              }
            }
          }
        }
        this.setBorderStyle({
          zoneId: A,
          top: y,
          bottom: E,
          left: v,
          right: C
        });
        this.applyAttributesOfZone();
      }
    };
    r.updateBorderStyleOfUnMergeCell = function (e) {
      var t = e.colRange;
      var r = e.rowRange;
      var n = this.state;
      var a = n.rowIds;
      var s = n.colIds;
      var l = typescriptHelpers_1.readIterator(r, 2);
      var u = l[0];
      var c = l[1];
      var h = typescriptHelpers_1.readIterator(t, 2);
      var d = h[0];
      var f = h[1];
      var A = tableCellIdUtils.createCellId(a[u], s[d]);
      var g = this.getBorderAttributeByCellId(A) || {};
      var p = g.top;
      var m = g.left;
      var y = g.right;
      var v = g.bottom;
      var b = u;
      for (; b <= c; b++) {
        for (var w = d; w <= f; w++) {
          var C = tableCellIdUtils.createCellId(a[b], s[w]);
          this.removeBorderStyle({
            zoneId: C,
            borders: [i.ALL]
          });
          if (b === c && v) {
            this.setBorderStyle({
              zoneId: C,
              bottom: v
            });
          }
          if (w === f && y) {
            this.setBorderStyle({
              zoneId: C,
              right: y
            });
          }
        }
      }
      this.setBorderStyle({
        zoneId: A,
        top: p,
        left: m
      });
      this.applyAttributesOfZone();
    };
    r.mergeCells = function (e) {
      var t;
      var r;
      var n;
      var i;
      var a = this.props.tableOptions;
      var s = this.state;
      var l = s.rowAttribs;
      var u = s.colAttribs;
      var c = s.cellAttribs;
      var h = this.getSelectionRange(e);
      var d = h.colRange;
      var f = h.rowRange;
      var A = tableCellIdUtils.generateRandomString(8);
      var g = [];
      if (a == null ? undefined : a.isCustomBorder) {
        this.updateBorderStyleOfMergeCell({
          colRange: d,
          rowRange: f
        });
      }
      if (a == null ? undefined : a.isCustomFont) {
        this.updateFontStyleOfMergeCell({
          colRange: d,
          rowRange: f
        });
      }
      if (a == null ? undefined : a.isCustomBackgroundColor) {
        this.updateBackgroundStylesOfMergeCell({
          colRange: d,
          rowRange: f
        });
      }
      for (var p = f[0]; p <= f[1]; p++) {
        var m = this;
        var y = d[0];
        for (; y <= d[1]; y++) {
          (function (e) {
            var t;
            var r;
            var n = c[p][e][editorTableUtils.tableConstants.MERGE_CELL_ID];
            if (n) {
              l[p] = typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, l[p]), ((t = {})[editorTableUtils.tableConstants.MERGE_CELL_ID] = l[p][editorTableUtils.tableConstants.MERGE_CELL_ID].split(editorTableUtils.tableConstants.M_SEPARATOR).filter(function (e) {
                return e !== n;
              }).join(editorTableUtils.tableConstants.M_SEPARATOR), t));
              u[e] = typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, u[e]), ((r = {})[editorTableUtils.tableConstants.MERGE_CELL_ID] = u[e][editorTableUtils.tableConstants.MERGE_CELL_ID].split(editorTableUtils.tableConstants.M_SEPARATOR).filter(function (e) {
                return e !== n;
              }).join(editorTableUtils.tableConstants.M_SEPARATOR), r));
            }
            var i = m.getZoneIdWhichContentShouldCompose({
              rowIndex: p,
              colIndex: e,
              rowRange: f,
              colRange: d
            });
            if (i) {
              g.push(i);
            }
          })(y);
        }
      }
      for (var p = f[0]; p <= f[1]; p++) {
        var v = l[p][editorTableUtils.tableConstants.MERGE_CELL_ID] || "";
        var b = v ? "" + v + editorTableUtils.tableConstants.M_SEPARATOR + A : A;
        this.performDocumentApplyAttributesToVectorRange(true, this.state.rowsZoneId, p, p + 1, ((t = {})[editorTableUtils.tableConstants.MERGE_CELL_ID] = b, t), editorTableUtils.tableCommands.TABLE_MERGE_CELL);
      }
      for (var y = d[0]; y <= d[1]; y++) {
        var v = u[y][editorTableUtils.tableConstants.MERGE_CELL_ID] || "";
        var b = v ? "" + v + editorTableUtils.tableConstants.M_SEPARATOR + A : A;
        this.performDocumentApplyAttributesToVectorRange(false, this.state.colsZoneId, y, y + 1, ((r = {})[editorTableUtils.tableConstants.MERGE_CELL_ID] = b, r), editorTableUtils.tableCommands.TABLE_MERGE_CELL);
      }
      var w = this.composeContentOfMultiZone(g);
      var C = this.editor.getContentState();
      C.apply(w);
      var E = C.getZoneState(g[0]);
      if (E) {
        try {
          var I = typescriptHelpers_1.getValues(E);
          var B = I.next();
          for (; !B.done; B = I.next()) {
            var x = B.value;
            C.setLineAttributes(g[0], x.index, {
              align: "center"
            });
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            if (B && !B.done && (i = I.return)) {
              i.call(I);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
      }
      this.focusAndCollapseSelectionOntoCell(f[0], d[0], [-1, -1], true, false);
      return true;
    };
    r.unMergeCells = function (e) {
      var t;
      var r;
      var n;
      var i;
      var a = this.state;
      var s = a.rowAttribs;
      var l = a.colAttribs;
      var u = a.cellAttribs;
      var c = this.getSelectionRange(e);
      var h = c.colRange;
      var d = c.rowRange;
      var f = u[d[0]][h[0]];
      var A = f[editorTableUtils.tableConstants.MERGE_CELL_ID];
      h[1] = h[0] + (f[editorTableUtils.tableConstants.COL_SPAN] || 1) - 1;
      d[1] = d[0] + (f[editorTableUtils.tableConstants.ROW_SPAN] || 1) - 1;
      this.updateBorderStyleOfUnMergeCell({
        colRange: h,
        rowRange: d
      });
      for (var g = d[0]; g <= d[1]; g++) {
        for (var p = h[0]; p <= h[1]; p++) {
          s[g] = typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, s[g]), ((t = {})[editorTableUtils.tableConstants.MERGE_CELL_ID] = s[g][editorTableUtils.tableConstants.MERGE_CELL_ID].split(editorTableUtils.tableConstants.M_SEPARATOR).filter(function (e) {
            return e !== A;
          }).join(editorTableUtils.tableConstants.M_SEPARATOR), t));
          l[p] = typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, l[p]), ((r = {})[editorTableUtils.tableConstants.MERGE_CELL_ID] = l[p][editorTableUtils.tableConstants.MERGE_CELL_ID].split(editorTableUtils.tableConstants.M_SEPARATOR).filter(function (e) {
            return e !== A;
          }).join(editorTableUtils.tableConstants.M_SEPARATOR), r));
        }
      }
      for (var g = d[0]; g <= d[1]; g++) {
        var m = s[g][editorTableUtils.tableConstants.MERGE_CELL_ID] || "";
        this.performDocumentApplyAttributesToVectorRange(true, this.state.rowsZoneId, g, g + 1, ((n = {})[editorTableUtils.tableConstants.MERGE_CELL_ID] = m, n), editorTableUtils.tableCommands.TABLE_UNMERGE_CELL);
      }
      for (var p = h[0]; p <= h[1]; p++) {
        var m = l[p][editorTableUtils.tableConstants.MERGE_CELL_ID] || "";
        this.performDocumentApplyAttributesToVectorRange(false, this.state.colsZoneId, p, p + 1, ((i = {})[editorTableUtils.tableConstants.MERGE_CELL_ID] = m, i), editorTableUtils.tableCommands.TABLE_UNMERGE_CELL);
      }
      return true;
    };
    r.getMergeStatusByCellIds = function (e) {
      var t = this;
      var r = this.state.cellAttribs;
      return e.map(function (e) {
        var n = t.getRowAndColIndicesForCellId(e);
        if (!n) {
          return null;
        }
        var i = n.rowIndex;
        var o = n.colIndex;
        if (!objectPathGetDefault.getObjectPathDefault(r, [i, o, editorTableUtils.tableConstants.MERGE_CELL_ID])) {
          return null;
        }
        var a = objectPathGetDefault.getObjectPathDefault(r, [i, o, editorTableUtils.tableConstants.COL_SPAN]);
        var s = objectPathGetDefault.getObjectPathDefault(r, [i, o, editorTableUtils.tableConstants.ROW_SPAN]);
        if (a === 0 || s === 0 || a === undefined && s === undefined) {
          return null;
        } else {
          return {
            cellId: e,
            colSpan: a || 1,
            rowSpan: s || 1
          };
        }
      }).filter(Boolean);
    };
    r.setToolBarScale = function (e) {
      this.setState({
        toolBarScale: e
      });
    };
    r.setTableStyle = function (e) {
      this.setState({
        tableStyle: e
      });
    };
    r.composeContentOfMultiZone = function (e) {
      var t;
      var r;
      var n = this.props.editor;
      var i = new deltaSetCore.DeltaSet();
      if (!e.length) {
        return i;
      }
      var a = typescriptHelpers_1.readIterator(e);
      var s = a[0];
      var l = a.slice(1);
      var u = n.getContentState();
      var c = u.getZoneState(s);
      if (!c) {
        return i;
      }
      var h = new contentStructureDelta.ContentDelta({
        zoneId: s
      }).retain(c.totalWidth() - 1);
      i.add(s, h);
      try {
        var d = typescriptHelpers_1.getValues(l);
        var f = d.next();
        for (; !f.done; f = d.next()) {
          var A = f.value;
          var m = u.getZoneState(A);
          if (m) {
            var y = m.getContent();
            if (y instanceof contentStructureDelta.ContentDelta) {
              var v = new contentStructureDelta.ContentDelta(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, y), {
                zoneId: s
              }));
              v = v.compose(new contentStructureDelta.ContentDelta({
                zoneId: s
              }).retain(v.length() - 1).delete(1));
              var b = new contentStructureDelta.ContentDelta({
                zoneId: s
              }).insertEnter().concat(v);
              i = i.concat(b).compose(new contentStructureDelta.ContentDelta({
                zoneId: A
              }).delete(m.totalWidth() - 1));
            }
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (f && !f.done && (r = d.return)) {
            r.call(d);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return i;
    };
    r.handleTabKey = function (e) {
      var t;
      var r = this;
      var n = this.props.editor;
      var i = this.state;
      var o = i.colIds;
      var a = i.rowIds;
      var s = n.getContentState().getActiveZone().getZoneId();
      var l = this.getRowAndColIndicesForCellId(s);
      if (!l) {
        return false;
      }
      var u = n.selection.getSelection().start.line;
      var c = (t = n.getContentState().getZoneState(s)) === null || t === undefined ? undefined : t.getLine(u);
      if (c == null ? undefined : c.getEntities([["list", undefined]]).length) {
        return false;
      }
      var h = e.shiftKey;
      var d = l.rowIndex;
      var f = l.colIndex + (h ? -1 : 1);
      if (f >= o.length) {
        d += 1;
        f = 0;
      }
      if (f < 0) {
        d -= 1;
        f = o.length - 1;
      }
      if (d >= a.length) {
        this.addRowAtIndex({
          index: d,
          cb: function () {
            r.focusAndCollapseSelectionOntoCell(d, f);
          }
        });
      } else if (d < 0) {
        d = 0;
        f = o.length - 1;
        this.addRowAtIndex({
          index: 0,
          cb: function () {
            r.focusAndCollapseSelectionOntoCell(d, f);
          }
        });
      } else {
        this.focusAndCollapseSelectionOntoCell(d, f);
      }
      return true;
    };
    r.handleArrowKey = function (e) {
      var n;
      var i;
      var o;
      var a;
      var s;
      var c;
      var h;
      var d;
      var f;
      var A;
      var g = this;
      var p = e.keyCode;
      var m = this.props.editor;
      var y = m.selection.getSelection();
      var v = y.start;
      var b = v.zoneId;
      var w = v.line;
      var C = v.offset;
      if (!y.isCollapsed()) {
        return false;
      }
      var E = this.getRowAndColIndicesForCellId(b);
      if (!E) {
        return false;
      }
      var I = m.getContentState().getZoneState(b);
      if (!I) {
        return false;
      }
      var B = this.getRowCount();
      var x = this.getColCount();
      var D = I.getLine(w);
      if (!D) {
        return false;
      }
      function S(e, t, r) {
        if (e !== -1 && t !== -1) {
          g.focusAndCollapseSelectionOntoCell(e, t, r);
        }
      }
      var k = false;
      switch (p) {
        case keyboardEventUtils.KeyCode.Up:
          k = function () {
            var r = m.rectModule.getCaretRect({
              zoneId: b,
              line: w,
              offset: 0
            }).top;
            var n = m.rectModule.getCaretRect({
              zoneId: b,
              line: w,
              offset: C
            }).top;
            var i = E.rowIndex - 1;
            var o = E.colIndex;
            if (g.state.cellAttribs[i]?.[o]?.[editorTableUtils.tableConstants.ROW_SPAN] === 0) {
              var a = editorTableUtils.findCellIndices(i, o, g.state.cellAttribs);
              var s = a.rowIndex;
              var l = a.colIndex;
              i = s;
              o = l;
            }
            return n === r && w === 0 && (i >= 0 ? S(i, o, [-1, 0]) : g.setOutOfTable(-1), true);
          }();
          break;
        case keyboardEventUtils.KeyCode.Down:
          n = m.rectModule.getCaretRect({
            zoneId: b,
            line: w,
            offset: D.length()
          }).top;
          i = m.rectModule.getCaretRect({
            zoneId: b,
            line: w,
            offset: C
          }).top;
          o = E.rowIndex + 1;
          a = E.colIndex;
          if ((s = g.state.cellAttribs[E.rowIndex]?.[E.colIndex]?.[editorTableUtils.tableConstants.ROW_SPAN]) && s > 1) {
            o += s - 1;
          }
          k = i === n && !!(w >= I.length() - 1) && (o < B ? S(o, a) : g.setOutOfTable(1), true);
          break;
        case keyboardEventUtils.KeyCode.Left:
          k = function () {
            var r = D.getLineMarker();
            var n = E.rowIndex;
            var i = E.colIndex - 1;
            if (g.state.cellAttribs[n]?.[i]?.[editorTableUtils.tableConstants.COL_SPAN] === 0) {
              var o = editorTableUtils.findCellIndices(n, i, g.state.cellAttribs);
              var a = o.rowIndex;
              var s = o.colIndex;
              n = a;
              i = s;
            }
            if (C <= r && w === 0 && i >= 0) {
              S(n, i, [-1, -1]);
              return true;
            } else {
              return C <= r && w === 0 && i < 0 && (n - 1 >= 0 ? S(n - 1, x - 1, [-1, -1]) : g.setOutOfTable(-1), true);
            }
          }();
          break;
        case keyboardEventUtils.KeyCode.Right:
          c = C >= D.length() - 1;
          h = w >= I.length() - 1;
          d = E.rowIndex;
          f = E.colIndex + 1;
          if ((A = g.state.cellAttribs[E.rowIndex]?.[E.colIndex]?.[editorTableUtils.tableConstants.COL_SPAN]) && A > 1) {
            f += A - 1;
          }
          k = c && h && f < x ? (S(d, f), true) : !!c && !!h && f >= x && (d + 1 < B ? S(d + 1, 0) : g.setOutOfTable(1), true);
      }
      this.triggerArrorKeyAMomentAgo();
      return k;
    };
    r.setOutOfTable = function (e) {
      var t;
      var r = this.getPointOfCurrentTable();
      if (r) {
        r.line += e;
        var n = (t = this.editor.getContentState().getZoneState(r.zoneId)) === null || t === undefined ? undefined : t.getLine(r.line);
        if (n) {
          r.offset = e === 1 ? n.getLineMarker() : n.length() - 1;
        }
        this.editor.selection.setSelection({
          start: r,
          end: r
        }, true);
      }
    };
    r.handleTableZoom = function (e) {
      var t = this;
      var r = this.state;
      var n = r.colAttribs;
      var i = r.rowAttribs;
      var o = r.rowHeaderHeights;
      var a = this.props;
      var s = a.minCellWidth;
      var l = a.defaultCellHeight;
      if (e.x !== 1) {
        var u = n.map(function (r) {
          return Math.max(Number(r[editorTableUtils.tableConstants.COL_WIDTH] || t.colDefaultWidth) * e.x, s || editorTableUtils.tableHeightConst);
        });
        var c = 0;
        u.forEach(function (e, r) {
          t.setColumnWidth(r, e);
          c += Math.floor(e);
        });
        if (c) {
          this.tableWidth = c;
        }
      }
      if (e.y !== 1) {
        i.map(function (t, r) {
          return (o[r] || Number(t[editorTableUtils.tableConstants.ROW_HEIGHT]) || l || editorTableUtils.tableWidthConst) * e.y;
        }).forEach(function (e, r) {
          t.setRowHeight(r, e);
        });
      }
    };
    r.getRowAndColIndexOfCurrentFocusZone = function () {
      if (!this.currentHoverOfZone) {
        return {
          rowIndex: -1,
          colIndex: -1
        };
      }
      var e = this.getRowAndColIndicesForCellId(this.currentHoverOfZone);
      return e || {
        rowIndex: -1,
        colIndex: -1
      };
    };
    r.deleteTable = function (e) {
      var r = this.props.editor;
      this.tableWillDelete(e);
      var n = r.getContentState();
      var i = n.getZoneState(this.getAllChildZones()[0])?.parent;
      if (i) {
        var o = i.getZoneId();
        var a = i.index;
        var s = {
          line: a,
          offset: i.getLineMarker(),
          zoneId: o
        };
        n.deleteText({
          start: s,
          end: {
            line: a,
            offset: i.length() - 1,
            zoneId: o
          }
        }, {
          type: editorTableUtils.tableCommands.DELETE_TABLE
        });
        r.selection.setSelection({
          start: s,
          end: s
        }, true);
      }
    };
    r.handleInnerZoneFocus = function (e) {
      var t = e.zoneId;
      clearTimeout(this.blurTimeout);
      var r = this.getCellIds().includes(t);
      this.updateFocus(r);
      if (!r) {
        this.unselectAll();
      }
    };
    r.toggleTableFocus = function (e) {
      var t = this;
      clearTimeout(this.blurTimeout);
      this.blurTimeout = window.setTimeout(function () {
        t.updateFocus(e);
      }, 250);
    };
    r.handleAceFocus = function () {
      var e = this;
      clearTimeout(this.blurTimeout);
      this.blurTimeout = window.setTimeout(function () {
        e.updateFocus(false);
        e.unselectAll();
      }, 250);
    };
    r.handleAceBlur = function () {
      var e = this;
      this.props.editor.call("aceBlur", this);
      clearTimeout(this.blurTimeout);
      this.blurTimeout = window.setTimeout(function () {
        e.updateFocus(false);
      }, 250);
    };
    r.handleAceMouseDown = function (e) {
      if (!this.editor.isEditable() && !this.getTableWrapper().contains(e.target)) {
        this.unselectAll();
      }
    };
    r.handleHorzResizeEnd = function (e, t) {
      var r = this;
      var n = this.state;
      var i = n.colAttribs;
      var o = n.colIds;
      var a = n.rowIds;
      this.setState({
        columnBeingResized: -1,
        horzResizeDiff: 0,
        columnWithRightBorderHighlighted: null
      }, function () {
        if (e === o.length - 1) {
          var t = r.getScrollable();
          t.scrollLeft = t.scrollWidth;
        }
      });
      var s = tableCellIdUtils.createCellId(a[0], o[e]);
      var l = reactDomEntryWrapper.findDOMNode(this.cellRefs["cell-" + s]);
      var u = Number(i[e][editorTableUtils.tableConstants.COL_WIDTH]) || l.clientWidth;
      var c = u + t;
      var h = Math.max(c < this.minDragWidths[e] ? this.minDragWidths[e] : c, this.colMinWidth, this.getColMinWidth(e));
      this.setColumnWidth(e, h);
      this.props.editor.call("horzResizeEnd", {
        cellWidth: h,
        originWidth: u
      });
    };
    r.handleResizeEnter = function (e, t) {
      if (t) {
        this.setHighlightRow(e);
      } else {
        this.setHighlightColumn(e);
      }
    };
    r.handleResizeLeave = function (e) {
      if (e) {
        this.setHighlightRow(null);
      } else {
        this.setHighlightColumn(null);
      }
    };
    r.handleHorzResize = function (e, t, r) {
      var n = this;
      var i = this.props.editor;
      var o = this.state;
      var a = o.colAttribs;
      var s = o.rowIds;
      var l = o.colIds;
      this.handleContentResize();
      if (e === l.length - 1) {
        var u = this.getScrollable();
        u.scrollLeft = u.scrollWidth - u.clientWidth;
      }
      this.setState({
        horzResizeDiff: r
      }, function () {
        if (n.em) {
          n.em.emit("colOrRowMoving");
        }
      });
      var c = this.arrowKeyTimer;
      var h = Number(a[e][editorTableUtils.tableConstants.COL_WIDTH]);
      h ||= this.calColHeaderWidths().colHeaderWidths[e];
      var d = s.map(function (t, r) {
        return n.getZoneIdFromRowAndColIndex(r, e);
      });
      var f = {
        isCellIdBelongToTableId: function () {
          var e = i.getContentState().getActiveZone().getZoneId();
          return tableCellIdUtils.checkVectorCellContains(e, n.tableId, K(i.getContentState()));
        },
        getOffsetOfCellLeftToTableLeft: this.getOffsetOfCellLeftToTableLeft,
        getTableScrollWidth: this.getTableScrollWidth,
        eventType: c ? "keydown" : "mouseclick",
        tableId: this.tableId,
        setCustomContext: this.setCustomContext,
        getCustomContext: this.getCustomContext,
        diffX: r,
        colWidth: h,
        colCellIds: d,
        editor: i
      };
      i.call("colHorzResize", f);
    };
    r.getCellMinWidth = function () {
      var e = this.props.minCellWidth;
      if (e && e > editorTableUtils.minCellSize) {
        return e;
      } else {
        return editorTableUtils.minCellSize;
      }
    };
    r.handleVertResizeStart = function (e) {
      var t = this.state.rowContentHeights;
      this.setState({
        rowBeingResized: e,
        rowBeingResizedHeights: t
      });
    };
    r.handleVertResizeEnd = function (e, t) {
      var r = this.state;
      var n = r.rowAttribs;
      var i = r.rowBeingResizedHeights;
      var o = this.props.defaultCellHeight;
      this.setState({
        rowBeingResized: -1,
        vertResizeDiff: 0
      });
      var a = Math.max(i[e], Number(n[e][editorTableUtils.tableConstants.ROW_HEIGHT])) || o || editorTableUtils.tableWidthConst;
      this.setRowHeight(e, a + t);
    };
    r.handleVertResize = function (e, t, r) {
      var n = this;
      if (e === this.state.rowIds.length - 1) {
        var i = this.getScrollable();
        i.scrollTo({
          top: i.scrollHeight - i.clientHeight
        });
      }
      this.setState({
        rowBeingResized: e,
        vertResizeDiff: r
      }, function () {
        if (n.em) {
          n.em.emit("colOrRowMoving");
        }
      });
    };
    r.handleScrollableScroll = function (e, t, r, n, i, o) {
      var a = this;
      this.setState({
        scrollLeft: i,
        showLeftShadow: e,
        showRightShadow: t,
        leftShadowWidth: r,
        rightShadowWidth: n
      });
      var s = this.arrowKeyTimer;
      var l = this.props.editor;
      var u = {
        isCellIdBelongToTableId: function () {
          var e = l.getContentState().getActiveZone().getZoneId();
          return tableCellIdUtils.checkVectorCellContains(e, a.tableId, K(l.getContentState()));
        },
        getOffsetOfCellLeftToTableLeft: this.getOffsetOfCellLeftToTableLeft,
        getTableScrollWidth: this.getTableScrollWidth,
        setCustomContext: this.setCustomContext,
        getCustomContext: this.getCustomContext,
        eventType: s ? "keydown" : "mouseclick",
        scrollLeft: i,
        scrollDirection: o,
        tableId: this.tableId,
        editor: l
      };
      l.call("scroll", u);
    };
    r.getOffsetOfCellLeftToTableLeft = function () {
      var e = this.props.editor;
      var t = this.state;
      var r = t.colHeaderWidths;
      var n = t.scrollLeft;
      var i = e.getContentState().getActiveZone().getZoneId();
      var o = this.getRowAndColIndicesForCellId(i);
      if (!o) {
        return false;
      }
      var a = o.colIndex;
      return r.slice(0, a).reduce(function (e, t) {
        return e = e + t + 1;
      }, 1) - n;
    };
    r.getSelectedZonesWithVisible = function () {
      var e = this;
      var t = this.state.cellAttribs;
      return this.state.selectedCellIds.slice(0).filter(function (r) {
        var n = e.getRowAndColIndicesForCellId(r);
        if (!n) {
          return false;
        }
        var i = t[n.rowIndex][n.colIndex];
        return !i || i[editorTableUtils.tableConstants.COL_SPAN] !== 0 && i[editorTableUtils.tableConstants.ROW_SPAN] !== 0;
      });
    };
    r.handleScrollableResize = function (e, t, r, n) {
      if (!this.isEmpty()) {
        var i = this.calcToolbarsSize();
        var o = i.colHeaderWidths;
        var a = i.rowHeaderHeights;
        var s = i.colHeaderTypes;
        var l = this.calcMaxContentHeightOfRow();
        var u = this.getScrollable().scrollLeft;
        this.setState({
          colHeaderWidths: o,
          rowHeaderHeights: a,
          scrollLeft: u,
          showLeftShadow: e,
          colHeaderTypes: s,
          showRightShadow: t,
          leftShadowWidth: r,
          rightShadowWidth: n,
          rowContentHeights: l
        });
      }
    };
    r.detectTableResizeImmediately = function () {
      var e = this.tableRef;
      if (e) {
        var t = e.offsetHeight;
        var r = e.offsetWidth;
        var n = e.getAttribute("data-ace-table-last-height");
        var i = e.getAttribute("data-ace-table-last-width");
        var o = Number(n || -1);
        var a = Number(i || -1);
        if ((o || a) && (o !== t || a !== r) && this.em) {
          this.em.emit("tableSizeChange", {
            prev: {
              height: o,
              width: a
            },
            next: {
              height: t,
              width: r
            }
          });
        }
        if (e["data-ace-table-last-height"] !== t) {
          e.setAttribute("data-ace-table-last-height", String(t));
          e["data-ace-table-last-height"] = t;
        }
        if (e["data-ace-table-last-width"] !== r) {
          e.setAttribute("data-ace-table-last-width", String(r));
          e["data-ace-table-last-width"] = r;
        }
      }
    };
    r.getTableInfo = function () {
      var e = this.tableRef;
      if (e) {
        var t = e.getAttribute("data-ace-table-last-height");
        return {
          width: Number(e.getAttribute("data-ace-table-last-width") || e.clientHeight),
          height: Number(t || e.clientWidth)
        };
      }
    };
    r.calcTableContentRectInfo = function () {
      var e = this.calcToolbarsSize();
      var t = e.colHeaderWidths;
      var r = e.rowHeaderHeights;
      var n = e.colHeaderTypes;
      var i = this.calcMaxContentHeightOfRow();
      this.setState({
        colHeaderWidths: t,
        rowHeaderHeights: r,
        rowContentHeights: i,
        colHeaderTypes: n
      });
    };
    r.calcMaxContentHeightOfRow = function () {
      var e = [];
      var t = this.state;
      var r = t.rowIds;
      var n = t.colIds;
      var i = t.cellAttribs;
      var o = t.colAttribs;
      var a = t.rowAttribs;
      var s = this.props.minCellHeight;
      if (!n[0] || !i[0].length || !o.length || !a.length) {
        return e;
      }
      for (var l = 0; l < r.length; l++) {
        var u = s || editorTableUtils.tablePaddingConst;
        var c = 0;
        for (; c < n.length; c++) {
          var h = tableCellIdUtils.createCellId(r[l], n[c]);
          var d = reactDomEntryWrapper.findDOMNode(this.cellRefs["cell-" + h]);
          var f = i[l][c];
          var A = f.mergeCellID;
          var g = f.colspan;
          var p = f.rowspan;
          var m = A && g && p;
          if (d && u < Number(d.clientHeight) && !m) {
            u = Number(d.clientHeight);
          }
        }
        e[l] = u;
      }
      return e;
    };
    r.notifySelectAll = function () {
      if (this.em) {
        this.em.emit("tableToolbarsClick", {
          selectedCellIds: this.getCellIds(),
          positionType: "left-top"
        });
      }
    };
    r.getColRect = function (e) {
      var t = this.state;
      var r = t.colHeaderWidths;
      var n = t.rowHeaderHeights;
      var i = r[e];
      return {
        position: {
          x: r.slice(0, e).reduce(function (e, t) {
            return e + t;
          }, 1),
          y: 1
        },
        rect: {
          width: i,
          height: n.slice(0).reduce(function (e, t) {
            return e + t;
          })
        }
      };
    };
    r.getRowRect = function (e) {
      var t = this.state;
      var r = t.colHeaderWidths;
      var n = t.rowHeaderHeights;
      var i = n[e];
      return {
        position: {
          x: 1,
          y: n.slice(0, e).reduce(function (e, t) {
            return e + t;
          }, 1)
        },
        rect: {
          width: r.slice(0).reduce(function (e, t) {
            return e + t;
          }),
          height: i
        }
      };
    };
    r.getZoneIdFromRowAndColIndex = function (e, t) {
      var r = this.getRowIds()[e];
      var n = this.getColIds()[t];
      if (r && n) {
        return tableCellIdUtils.createCellId(r, n);
      } else {
        return null;
      }
    };
    r.getVisibleZoneIdFromRowAndCol = function (e, t) {
      var r = this.getRowIds()[e];
      var n = this.getColIds()[t];
      if (!r || !n) {
        return null;
      }
      var i = this.state.cellAttribs;
      var o = objectPathGetDefault.getObjectPathDefault(i, [e, t, editorTableUtils.tableConstants.COL_SPAN]);
      var a = objectPathGetDefault.getObjectPathDefault(i, [e, t, editorTableUtils.tableConstants.ROW_SPAN]);
      if (o === 0 || a === 0) {
        var s = editorTableUtils.findCellIndices(e, t, i);
        var l = s.rowIndex;
        var u = s.colIndex;
        r = this.getRowIds()[l];
        n = this.getColIds()[u];
        if (!r || !n) {
          return null;
        }
      }
      return tableCellIdUtils.createCellId(r, n);
    };
    r.getFirstCellIndiesOfSelection = function () {
      var e = {
        rowIdx: 0,
        colIdx: 0
      };
      var t = this.state;
      var r = t.selectedCellIds;
      var n = t.currentRowAnchor;
      var i = t.currentRowFocus;
      var o = t.currentColAnchor;
      var a = t.currentColFocus;
      if (r.length > 0) {
        e.rowIdx = Math.min(n || 0, i || 0);
        e.colIdx = Math.min(o || 0, a || 0);
        return e;
      }
      var s = this.getEditor().getContentState().getActiveZone().getZoneId();
      var l = this.getRowAndColIndicesForCellId(s);
      if (l) {
        e.rowIdx = l.rowIndex;
        e.colIdx = l.colIndex;
      }
      return e;
    };
    r.pasteCellsOntoTable = function (e, t, r) {
      if (!this.isEmpty()) {
        var n;
        var i;
        var a;
        var s;
        var u;
        var c;
        var h;
        var d;
        var E = e.get(t).ops.find(function (e) {
          return e.insert === "*" && e.attributes?.aceTable;
        });
        if (E) {
          var I = new deltaSetCore.DeltaSet();
          var B = typescriptHelpers_1.readIterator(E.attributes.aceTable.trim().split(" "), 2);
          var x = B[0];
          var D = B[1];
          var S = this.state;
          var k = S.rowsZoneId;
          var _ = S.colsZoneId;
          var T = S.rowIds;
          var Q = S.colIds;
          var R = this.getFirstCellIndiesOfSelection();
          var F = R.rowIdx;
          var L = R.colIdx;
          var O = e.get(x).ops;
          var M = e.get(D).ops;
          var P = [];
          var U = [];
          var z = [];
          try {
            var H = typescriptHelpers_1.getValues(O.entries());
            var G = H.next();
            for (; !G.done; G = H.next()) {
              var Z = typescriptHelpers_1.readIterator(G.value, 2);
              var W = Z[0];
              var j = Z[1];
              if (j.insert?.id) {
                var Y = W + F;
                if (Y >= T.length) {
                  I = I.compose(new zoneDeltaClasses.RowDelta({
                    zoneId: k
                  }).retain(T.length + P.length).push(j));
                  P.push(j.insert.id);
                }
                try {
                  a = undefined;
                  var K = typescriptHelpers_1.getValues(M.entries());
                  var q = K.next();
                  for (; !q.done; q = K.next()) {
                    var V = typescriptHelpers_1.readIterator(q.value, 2);
                    var J = V[0];
                    var X = V[1];
                    if (X.insert?.id) {
                      var $ = J + L;
                      if (W === 0 && $ >= Q.length) {
                        I = I.compose(new zoneDeltaClasses.ColumnDelta({
                          zoneId: _
                        }).retain(Q.length + U.length).push(X));
                        U.push(X.insert.id);
                      }
                      var ee = this.getZoneIdFromRowAndColIndex(Y, $);
                      var et = tableCellIdUtils.createCellId(j.insert.id, X.insert.id);
                      var er = e.get(et);
                      (er ? er.ops.reduce(function (e, t) {
                        if (t.attributes?.zoneType) {
                          e.push(t.attributes?.zoneId);
                        }
                        return e;
                      }, []) : []).forEach(function (t) {
                        var r = e.get(t);
                        if (r) {
                          (function (e) {
                            var t;
                            var r = e.ops.pop();
                            if ((t = r == null ? undefined : r.insert) === null || t === undefined ? undefined : t.endsWith("\n")) {
                              r.insert = r.insert.slice(0, -1);
                            }
                            if (r == null ? undefined : r.insert) {
                              e.ops.push(r);
                            }
                          })(r);
                          I = I.compose(r);
                        }
                      });
                      var en = tableCellIdUtils.createCellId(T[Y] || j.insert.id, Q[$] || X.insert.id);
                      if (ee) {
                        var ei = this.getEditor().getContentState().getZoneState(ee).getContent().length();
                        var eo = new contentStructureDelta.ContentDelta({
                          zoneId: ee
                        }).delete(ei - 1).concat(er || new contentStructureDelta.ContentDelta());
                        var ea = eo.ops[eo.ops.length - 1];
                        if ((ea == null ? undefined : ea.insert) === "\n") {
                          eo.ops.pop();
                        } else if (typeof (ea == null ? undefined : ea.insert) == "string" && (ea == null ? undefined : ea.insert.endsWith("\n"))) {
                          ea.insert = ea.insert.slice(0, -1);
                        }
                        I = I.compose(eo);
                        z.push(ee);
                      } else {
                        if (er) {
                          I = I.compose(new contentStructureDelta.ContentDelta({
                            zoneId: en,
                            ops: er.ops
                          }));
                        }
                        z.push(en);
                      }
                    }
                  }
                } catch (e) {
                  a = {
                    error: e
                  };
                } finally {
                  try {
                    if (q && !q.done && (s = K.return)) {
                      s.call(K);
                    }
                  } finally {
                    if (a) {
                      throw a.error;
                    }
                  }
                }
              }
            }
          } catch (e) {
            n = {
              error: e
            };
          } finally {
            try {
              if (G && !G.done && (i = H.return)) {
                i.call(H);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
          var es = this.getEditor().getContentState();
          var el = this.state.cellAttribs[F][L]?.mergeCellID || "";
          var eu = new zoneDeltaClasses.RowDelta({
            zoneId: k
          }).retain(F);
          var ec = es.getZoneState(k);
          try {
            var eh = typescriptHelpers_1.getValues(O.entries());
            var ed = eh.next();
            for (; !ed.done; ed = eh.next()) {
              var ef = typescriptHelpers_1.readIterator(ed.value, 2);
              var W = ef[0];
              var j = ef[1];
              var eA = ec == null ? undefined : ec.getContent().ops[F + W];
              var eg = j.attributes?.mergeCellID || "";
              var ep = (eA == null ? undefined : eA.attributes)?.mergeCellID || "";
              if (eg || ep) {
                j.attributes = typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, j.attributes), {
                  mergeCellID: eg.split(",").concat(ep.split(",").filter(function (e) {
                    return e !== el;
                  })).filter(Boolean).join(",")
                });
              }
              eu.retain(1, j.attributes);
            }
          } catch (e) {
            u = {
              error: e
            };
          } finally {
            try {
              if (ed && !ed.done && (c = eh.return)) {
                c.call(eh);
              }
            } finally {
              if (u) {
                throw u.error;
              }
            }
          }
          var em = new zoneDeltaClasses.ColumnDelta({
            zoneId: _
          }).retain(L);
          var ey = es.getZoneState(_);
          try {
            var ev = typescriptHelpers_1.getValues(M.entries());
            var eb = ev.next();
            for (; !eb.done; eb = ev.next()) {
              var ew = typescriptHelpers_1.readIterator(eb.value, 2);
              var J = ew[0];
              var X = ew[1];
              var eA = ey == null ? undefined : ey.getContent().ops[L + J];
              var eg = X.attributes?.mergeCellID || "";
              var ep = (eA == null ? undefined : eA.attributes)?.mergeCellID || "";
              if (eg || ep) {
                X.attributes = typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, X.attributes), {
                  mergeCellID: eg.split(",").concat(ep.split(",").filter(function (e) {
                    return e !== el;
                  })).filter(Boolean).join(",")
                });
              }
              em.retain(1, X.attributes);
            }
          } catch (e) {
            h = {
              error: e
            };
          } finally {
            try {
              if (eb && !eb.done && (d = ev.return)) {
                d.call(ev);
              }
            } finally {
              if (h) {
                throw h.error;
              }
            }
          }
          var eC = eu.ops.length - 1;
          var eE = em.ops.length - 1;
          while (eC >= 0 && !eu.ops[eC].attributes) {
            eu.ops.pop();
            eC--;
          }
          while (eE >= 0 && !em.ops[eE].attributes) {
            em.ops.pop();
            eE--;
          }
          I = (I = I.compose(eu)).compose(em);
          this.getEditor().getContentState().apply(I);
          this.getEditor().call(editorEventConstants.editorEventTypes.DID_PASTE, {
            deltaSet: I,
            UNSAFE_text: "",
            isInternalPaste: r
          });
          this.setState({
            selectedCellIds: z
          });
        }
      }
    };
    r.deleteSelectedZones = function (e, t) {
      var r = this;
      if (e === undefined) {
        e = false;
      }
      var n = this.getSelectedZonesForSpecialSelection();
      var i = this.props.editor;
      var o = i.getContentState();
      var a = true;
      if (!e) {
        a = n.every(function (e) {
          var t = o.getZoneState(e);
          return !t || t.isEmpty();
        });
      }
      if (a) {
        var s = this.getWhollySelectedRegions();
        var l = s.entireTable;
        var u = s.rows;
        var c = s.cols;
        if (l) {
          return this.deleteTable();
        }
        if (u.length || c.length) {
          this.deleteRowsOrColsAtIndices(u, true);
          this.deleteRowsOrColsAtIndices(c, false);
        } else if (n.length) {
          n.forEach(function (e) {
            r.deleteZoneContents(e);
          });
        }
        var h = {
          tableId: this.tableId,
          rows: u,
          cols: c
        };
        i.call("removeColOrRow", h);
        return h;
      }
      n.forEach(function (e) {
        r.deleteZoneContents(e);
      });
      if (t) {
        t();
      }
    };
    r.deleteRowsOrColsAtIndices = function (e, t) {
      for (var r = 0; r < e.length - 1; r++) {
        if (e[r] === e[r + 1]) {
          throw Error("indices must be distinct");
        }
      }
      for (var r = e.length - 1; r >= 0;) {
        var n = r;
        var i = r;
        while (i > 0 && e[i - 1] + 1 === e[i]) {
          i--;
        }
        if (t) {
          this.deleteRowAtIndex(e[i], n - i + 1);
        } else {
          this.deleteColAtIndex(e[i], n - i + 1);
        }
        r = i - 1;
      }
    };
    r.getRowZones = function (e, t, r) {
      var n = this.state;
      var i = n.rowIds;
      var o = n.cellAttribs;
      var a = this.getColIds();
      var s = [];
      a.forEach(function (t, n) {
        var l = tableCellIdUtils.createCellId(e, t);
        var u = ee(l, i, a, o);
        if (!u) {
          s.push(l);
        }
        if (r && u) {
          s.push(l);
        }
      });
      if (t) {
        if (throttledArrayIntersection.throttledIntersect(this.state.selectedCellIds, s).length === s.length) {
          return throttledArrayDiffUtil.throttledArrayDiff(this.state.selectedCellIds, s);
        } else {
          return throttledArgStringifyUtil.throttledStringify(s, this.state.selectedCellIds);
        }
      } else {
        return s;
      }
    };
    r.getColZones = function (e, t, r) {
      var n = this.state;
      var i = n.colIds;
      var o = n.cellAttribs;
      var a = this.getRowIds();
      var s = [];
      a.forEach(function (t, n) {
        var l = tableCellIdUtils.createCellId(t, e);
        var u = ee(l, a, i, o);
        if (!u) {
          s.push(l);
        }
        if (r && u) {
          s.push(l);
        }
      });
      if (t) {
        if (throttledArrayIntersection.throttledIntersect(this.state.selectedCellIds, s).length === s.length) {
          return throttledArrayDiffUtil.throttledArrayDiff(this.state.selectedCellIds, s);
        } else {
          return throttledArgStringifyUtil.throttledStringify(s, this.state.selectedCellIds);
        }
      } else {
        return s;
      }
    };
    r.selectRow = function (e, t) {
      var r;
      var n;
      var i;
      var a;
      var s = this.state.rowIds;
      e = Array.isArray(e) ? e : [e];
      var l = s.indexOf(e[e.length - 1]);
      var u = [];
      var c = this.getColIds();
      try {
        var h = typescriptHelpers_1.getValues(e);
        var d = h.next();
        for (; !d.done; d = h.next()) {
          var f = d.value;
          try {
            i = undefined;
            var A = typescriptHelpers_1.getValues(c);
            var g = A.next();
            for (; !g.done; g = A.next()) {
              var p = g.value;
              u.push(tableCellIdUtils.createCellId(f, p));
            }
          } catch (e) {
            i = {
              error: e
            };
          } finally {
            try {
              if (g && !g.done && (a = A.return)) {
                a.call(A);
              }
            } finally {
              if (i) {
                throw i.error;
              }
            }
          }
        }
      } catch (e) {
        r = {
          error: e
        };
      } finally {
        try {
          if (d && !d.done && (n = h.return)) {
            n.call(h);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
      var m = {
        selectedCellIds: t ? throttledArrayIntersection.throttledIntersect(this.state.selectedCellIds, u).length === u.length ? throttledArrayDiffUtil.throttledArrayDiff(this.state.selectedCellIds, u) : throttledArgStringifyUtil.throttledStringify(u, this.state.selectedCellIds) : u,
        currentRowAnchor: l,
        currentColAnchor: 0,
        currentRowFocus: l,
        currentColFocus: c.length - 1,
        selectType: editorTableUtils.tableEventTypes.CLICK
      };
      this.setState(m);
    };
    r.setRep = function (e, t, r, n, i, a) {
      var s;
      var l;
      var u = this;
      if (dataProcessor.processData(n).length === n.length && dataProcessor.processData(r).length === r.length && this.isComponentMounted && n.length === a.length && r.length === i.length) {
        var c = this.props.isResponsiveWidth;
        try {
          var h = typescriptHelpers_1.getValues(this.getCellIds());
          var d = h.next();
          for (; !d.done; d = h.next()) {
            var f = d.value;
            this.tablePlugin.instanceManager.unregisterInstanceOfSubZoneId(f);
          }
        } catch (e) {
          s = {
            error: e
          };
        } finally {
          try {
            if (d && !d.done && (l = h.return)) {
              l.call(h);
            }
          } finally {
            if (s) {
              throw s.error;
            }
          }
        }
        var A = this.getCellAttribsFromRowAndColAttribs(i, a, r, n).cellAttribs;
        this.setState({
          rowsZoneId: e,
          colsZoneId: t,
          rowIds: r.slice(0),
          colIds: n.slice(0),
          rowAttribs: i,
          colAttribs: a,
          cellAttribs: A
        }, function () {
          var e;
          var t;
          var r = u.state;
          var n = r.colIds;
          var i = r.rowIds;
          var a = u.updateCallStack.pop();
          if (a) {
            a({
              colIds: n,
              rowIds: i
            });
          }
          try {
            var s = typescriptHelpers_1.getValues(u.getCellIds());
            var l = s.next();
            for (; !l.done; l = s.next()) {
              var c = l.value;
              u.tablePlugin.instanceManager.registerInstanceOfSubZoneId(c, u);
            }
          } catch (t) {
            e = {
              error: t
            };
          } finally {
            try {
              if (l && !l.done && (t = s.return)) {
                t.call(s);
              }
            } finally {
              if (e) {
                throw e.error;
              }
            }
          }
        });
        this.tableColsWidth = j({
          colIds: n,
          colAttribs: a
        }, c ? undefined : this.colDefaultWidth);
      }
    };
    r.setRowHeight = function (e, t) {
      var r;
      var n = this.props.minCellHeight;
      if (Number(this.state.rowAttribs[e][editorTableUtils.tableConstants.ROW_HEIGHT]) !== Number(t)) {
        t = Math.max(t, n || editorTableUtils.tablePaddingConst);
        this.performDocumentApplyAttributesToVectorRange(true, this.state.rowsZoneId, e, e + 1, ((r = {})[editorTableUtils.tableConstants.ROW_HEIGHT] = String(t), r), "tableSizeChange");
      }
    };
    r.setColumnWidth = function (e, t) {
      var r;
      var n = this.getCellMinWidth();
      if (Number(this.state.colAttribs[e][editorTableUtils.tableConstants.COL_WIDTH]) !== Number(t)) {
        t = Math.max(t, n);
        this.performDocumentApplyAttributesToVectorRange(false, this.state.colsZoneId, e, e + 1, ((r = {})[editorTableUtils.tableConstants.COL_WIDTH] = String(t), r), "tableSizeChange");
      }
    };
    r.performDocumentApplyAttributesToVectorRange = function (e, t, r, n, i, o) {
      var a = this.getEditor().getContentState();
      var s = new zoneDeltaClasses.ZoneDelta({
        zoneId: t,
        zoneType: e ? documentOperationConstants.structureTypes.Row : documentOperationConstants.structureTypes.Column
      });
      s.retain(r).retain(n - r, i);
      a.apply(s, {
        type: o || editorTableUtils.tableCommands.APPLY_ATTRIBUTES_TO_ROW_OR_COL
      });
    };
    r.replaceVectorRange = function (e) {
      var t = e.forRow;
      var r = e.zoneId;
      var n = e.replaceRangeStart;
      var i = e.replaceRangeEnd;
      var o = e.newCount;
      var a = e.type;
      var s = this.getEditor().getContentState();
      var l = new zoneDeltaClasses.ZoneDelta({
        zoneId: r,
        zoneType: t ? documentOperationConstants.structureTypes.Row : documentOperationConstants.structureTypes.Column
      }).retain(n).delete(i - n);
      var u = 0;
      for (; u < o; u++) {
        var c = t ? tableCellIdUtils.createRowId() : tableCellIdUtils.createColId();
        l.insert(c);
      }
      s.apply(l, {
        type: a || editorTableUtils.tableCommands.REPLACE_VECTOR_RANGE
      });
    };
    r.performDocumentApplyAttributesToZone = function (e) {
      var t = e.zoneId;
      var r = e.attributes;
      var n = this.attributesApplyingQueue[t];
      if (n) {
        this.attributesApplyingQueue[t] = editorTableUtils.deepCloneOrReturn(n, r);
      } else {
        this.attributesApplyingQueue[t] = r;
      }
    };
    r.applyAttributesOfZone = function () {
      var e;
      var t;
      var r;
      var n;
      var i;
      var a;
      var s;
      var l;
      var u;
      var c;
      var h = this.state;
      var d = h.cellAttribs;
      var f = h.colsZoneId;
      var A = h.rowsZoneId;
      var p = h.colAttribs;
      var v = h.rowAttribs;
      var b = [];
      var w = [];
      try {
        var C = typescriptHelpers_1.getValues(Object.entries(this.attributesApplyingQueue));
        var E = C.next();
        for (; !E.done; E = C.next()) {
          var I = typescriptHelpers_1.readIterator(E.value, 2);
          var B = I[0];
          var x = I[1];
          var D = this.getRowAndColIndicesForCellId(B);
          if (D) {
            var S = D.rowIndex;
            var k = D.colIndex;
            b[S] = b[S] || {};
            w[k] = w[k] || {};
            var _ = d[S][k];
            try {
              r = undefined;
              var T = typescriptHelpers_1.getValues(Object.keys(x));
              var Q = T.next();
              for (; !Q.done; Q = T.next()) {
                var R = Q.value;
                if (_[R]) {
                  x[R] = editorTableUtils.deepCloneOrReturn(_[R], x[R]);
                }
                var F = b[S][R] = b[S][R] || {};
                var L = w[k][R] = w[k][R] || {};
                Object.assign(F, ((i = {})[B] = x[R], i));
                Object.assign(L, ((a = {})[B] = x[R], a));
              }
            } catch (e) {
              r = {
                error: e
              };
            } finally {
              try {
                if (Q && !Q.done && (n = T.return)) {
                  n.call(T);
                }
              } finally {
                if (r) {
                  throw r.error;
                }
              }
            }
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (E && !E.done && (t = C.return)) {
            t.call(C);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      var O = this.getEditor().getContentState();
      var N = new deltaSetCore.DeltaSet();
      try {
        var M = typescriptHelpers_1.getValues(b.entries());
        var P = M.next();
        for (; !P.done; P = M.next()) {
          var z = typescriptHelpers_1.readIterator(P.value, 2);
          var H = z[0];
          var G = z[1];
          if (G) {
            var Z = W(G, v[H]);
            var j = new zoneDeltaClasses.ZoneDelta({
              zoneId: A,
              zoneType: documentOperationConstants.structureTypes.Row
            }).retain(H).retain(1, Z);
            N = N.compose(j);
          }
        }
      } catch (e) {
        s = {
          error: e
        };
      } finally {
        try {
          if (P && !P.done && (l = M.return)) {
            l.call(M);
          }
        } finally {
          if (s) {
            throw s.error;
          }
        }
      }
      try {
        var Y = typescriptHelpers_1.getValues(w.entries());
        var K = Y.next();
        for (; !K.done; K = Y.next()) {
          var q = typescriptHelpers_1.readIterator(K.value, 2);
          var H = q[0];
          var G = q[1];
          if (G) {
            var Z = W(G, p[H]);
            var j = new zoneDeltaClasses.ZoneDelta({
              zoneId: f,
              zoneType: documentOperationConstants.structureTypes.Column
            }).retain(H).retain(1, Z);
            N = N.compose(j);
          }
        }
      } catch (e) {
        u = {
          error: e
        };
      } finally {
        try {
          if (K && !K.done && (c = Y.return)) {
            c.call(Y);
          }
        } finally {
          if (u) {
            throw u.error;
          }
        }
      }
      O.apply(N, {
        type: editorTableUtils.tableCommands.APPLY_VECTOR_CHANGESET
      });
      this.attributesApplyingQueue = {};
    };
    r.getMaxRowAndColIndexOfSelection = function (e, t) {
      var r = this.state.cellAttribs;
      var n = typescriptHelpers_1.readIterator(e, 2);
      var i = n[0];
      var a = n[1];
      var s = typescriptHelpers_1.readIterator(t, 2);
      var l = s[0];
      var u = s[1];
      var c = i;
      for (; c <= l; c++) {
        var h = r[c];
        var d = a;
        for (; d <= u; d++) {
          var f = h[d];
          if (f[editorTableUtils.tableConstants.ROW_SPAN] > 1) {
            l = Math.max(c + f[editorTableUtils.tableConstants.ROW_SPAN] - 1, l);
          }
        }
      }
      for (var d = a; d <= u; d++) {
        for (var c = i; c <= l; c++) {
          var h = r[c];
          var f = h[d];
          if (f[editorTableUtils.tableConstants.COL_SPAN] > 1) {
            u = Math.max(d + f[editorTableUtils.tableConstants.COL_SPAN] - 1, u);
          }
        }
      }
      for (var c = l; c >= i; c--) {
        var h = r[c];
        function A(e) {
          if (h[e][editorTableUtils.tableConstants.ROW_SPAN] === 0) {
            var t = numericRangeUtil.createRange(c, -1).find(function (t) {
              return r[t] && r[t][e][editorTableUtils.tableConstants.ROW_SPAN] > 1;
            });
            if (t !== undefined) {
              i = Math.min(i, Math.max(t, 0));
            }
          }
        }
        var d = u;
        for (; d >= a; d--) {
          A(d);
        }
      }
      for (var d = u; d >= a; d--) {
        for (var c = l; c >= i; c--) {
          (function (e) {
            var t = r[e];
            if (t[d][editorTableUtils.tableConstants.COL_SPAN] === 0) {
              var n = numericRangeUtil.createRange(d, -1).find(function (e) {
                return t[e] && t[e][editorTableUtils.tableConstants.COL_SPAN] > 1;
              });
              if (n !== undefined) {
                a = Math.min(a, Math.max(n, 0));
              }
            }
          })(c);
        }
      }
      if (i !== e[0] || l !== t[0] || a !== e[1] || u !== t[1]) {
        return this.getMaxRowAndColIndexOfSelection([i, a], [l, u]);
      } else {
        return {
          minRow: i,
          maxRow: l,
          minCol: a,
          maxCol: u
        };
      }
    };
    r.getFocusIndices = function (e) {
      var t = e.currentRowAnchor;
      var r = e.currentRowFocus;
      var n = e.currentColAnchor;
      var i = e.currentColFocus;
      var o = e.isNeat;
      var a = o === undefined || o;
      var s = this.getRowIds();
      var l = this.getColIds();
      var u = [];
      var c = Math.min(t, r);
      var h = Math.min(n, i);
      var d = Math.max(t, r);
      var f = Math.max(n, i);
      if (c === d && h === f) {
        var A = this.state.cellAttribs[c][f];
        var g = A.mergeCellID;
        var p = A.colspan;
        var m = A.rowspan;
        if (!g || p === 0 || m === 0) {
          a = false;
        }
      }
      if (a) {
        var y = this.getMaxRowAndColIndexOfSelection([c, h], [d, f]);
        var v = y.maxRow;
        var b = y.maxCol;
        var w = y.minRow;
        var C = y.minCol;
        var E = w;
        for (; E <= v; E++) {
          for (var I = C; I <= b; I++) {
            var B = tableCellIdUtils.createCellId(s[E], l[I]);
            u.push(B);
          }
        }
      } else {
        for (var E = c; E <= d; E++) {
          for (var I = h; I <= f; I++) {
            var B = tableCellIdUtils.createCellId(s[E], l[I]);
            u.push(B);
          }
        }
      }
      return {
        selectedCellIds: u
      };
    };
    r.addRowAtIndex = function (e) {
      var t = this;
      var r = e.index;
      var n = e.counts;
      var i = n === undefined ? 1 : n;
      var a = e.extendStyle;
      var s = e.isTop;
      var l = s !== undefined && s;
      var u = e.cb;
      var c = this.state;
      var h = c.colIds;
      var d = c.rowIds;
      var f = c.cellAttribs;
      var A = c.rowsZoneId;
      var g = l ? this.getAttribs(r, true) : this.getAttribs(r - 1, true);
      var p = this.getExtendStyleOptions(a);
      var m = isObjectOrFunction_1_1.isObjectOrFunction(p);
      var y = [];
      var v = [];
      var b = [];
      var w = l ? this.getRowZones(d[r], false, true) : this.getRowZones(d[r - 1], false, true);
      if (m) {
        var C = (p == null ? undefined : p.backgroundColor) ? g.filter(function (e) {
          return e[0] === editorTableUtils.tableConstants.BACKGROUND_COLOR;
        }) : [];
        var E = (p == null ? undefined : p.border) ? g.filter(function (e) {
          return e[0] === editorTableUtils.tableConstants.BORDER;
        }) : [];
        w.forEach(function (e) {
          b.push(t.getFontAttribute(e));
        });
        if (C && C.length) {
          w.forEach(function (e) {
            y.push(t.getBackgroundColor(e));
          });
        }
        if (E && E.length) {
          w.forEach(function (e) {
            v.push(t.getBorderAttributeByCellId(e));
          });
        }
        this.updateCallStack.push(function () {
          return t.editor.undoModule.batchedUndo(function () {
            var e = t.state;
            var n = e.colIds;
            var a = e.rowIds;
            function s(e) {
              for (var s = r; s < r + i; s++) {
                (function (r) {
                  var i = tableCellIdUtils.createCellId(a[r], n[e]);
                  if (i && y[e]) {
                    t.setBackgroundColor({
                      cellIds: [i],
                      color: y[e]
                    });
                  }
                  if (i && v[e]) {
                    t.setBorderStyle(typescriptHelpers_1.assign({
                      zoneId: i
                    }, v[e]));
                  }
                  if (i && b[e]) {
                    Object.keys(b[e]).forEach(function (r) {
                      t.setFontAttribute(r, b[e][r], [i]);
                    });
                  }
                })(s);
              }
            }
            var l = 0;
            for (; l < n.length; l++) {
              s(l);
            }
            t.applyAttributesOfZone();
          });
        });
      }
      this.replaceVectorRange({
        forRow: true,
        zoneId: this.state.rowsZoneId,
        replaceRangeStart: r,
        replaceRangeEnd: r,
        newCount: i || 1
      });
      if (m && (g = g.filter(function (e) {
        return e[0] !== editorTableUtils.tableConstants.MERGE_CELL_ID && e[0] !== editorTableUtils.tableConstants.BACKGROUND_COLOR && e[0] !== editorTableUtils.tableConstants.BORDER;
      })).length) {
        this.performDocumentApplyAttributesToVectorRange(true, A, r, r + i, g.reduce(function (e, t) {
          e[t[0]] = t[1];
          return e;
        }, {}));
      }
      if (r < d.length) {
        h.forEach(function (e, n) {
          var i;
          var o = f[r][n][editorTableUtils.tableConstants.MERGE_CELL_ID];
          var a = f[r][n][editorTableUtils.tableConstants.ROW_SPAN];
          if (o && a === 0) {
            t.performDocumentApplyAttributesToVectorRange(true, A, r, r + 1, ((i = {})[editorTableUtils.tableConstants.MERGE_CELL_ID] = o, i));
          }
        });
      }
      setTimeout(function () {
        if (u) {
          u();
        }
      });
    };
    r.deleteRowAtIndex = function (e, t = 1) {
      if (e !== 0 || t !== this.getRowCount()) {
        this.focusAndCollapseSelectionOntoCell(e === this.state.rowIds.length - t ? e - 1 : e + t, 0);
        this.ensureValidCurrentIndices(this.getRowCount() - t);
        this.replaceVectorRange({
          forRow: true,
          zoneId: this.state.rowsZoneId,
          replaceRangeStart: e,
          replaceRangeEnd: e + t,
          newCount: 0,
          type: "deleteRow"
        });
      } else {
        this.deleteTable();
      }
    };
    r.getAttribs = function (e, t) {
      var r = this.state;
      var n = r.colAttribs;
      var i = r.rowAttribs;
      var o = [];
      if (t) {
        for (var a in i[e]) {
          if (i[e].hasOwnProperty(a)) {
            o.push([a, i[e][a]]);
          }
        }
      } else {
        for (var a in n[e]) {
          if (n[e].hasOwnProperty(a)) {
            o.push([a, n[e][a]]);
          }
        }
      }
      return o;
    };
    r.addColAtIndex = function (e) {
      var t = this;
      var r = e.index;
      var n = e.counts;
      var i = n === undefined ? 1 : n;
      var a = e.extendStyle;
      var s = e.isLeft;
      var l = s !== undefined && s;
      var u = e.cb;
      var c = this.state;
      var h = c.cellAttribs;
      var d = c.colIds;
      var f = c.rowIds;
      var A = c.colsZoneId;
      var g = this.getTableInfo();
      this.tableWidth = this.tableWidth || g && g.width;
      this.currentStack = editorTableUtils.colCountChangeEvent;
      var p = l ? this.getAttribs(r, false) : this.getAttribs(r - 1, false);
      var m = this.getExtendStyleOptions(a);
      var y = [];
      var v = [];
      var b = [];
      var w = isObjectOrFunction_1_1.isObjectOrFunction(m);
      if (w) {
        var C = l ? this.getColZones(d[r], false, true) : this.getColZones(d[r - 1], false, true);
        var E = (m == null ? undefined : m.backgroundColor) ? p.filter(function (e) {
          return e[0] === editorTableUtils.tableConstants.BACKGROUND_COLOR;
        }) : [];
        var I = (m == null ? undefined : m.border) ? p.filter(function (e) {
          return e[0] === editorTableUtils.tableConstants.BORDER;
        }) : [];
        C.forEach(function (e) {
          b.push(t.getFontAttribute(e));
        });
        if (E && E.length) {
          C.forEach(function (e) {
            y.push(t.getBackgroundColor(e));
          });
        }
        if (I && I.length) {
          C.forEach(function (e) {
            v.push(t.getBorderAttributeByCellId(e));
          });
        }
        this.updateCallStack.push(function () {
          return t.editor.undoModule.batchedUndo(function () {
            var e = t.state;
            var n = e.colIds;
            var a = e.rowIds;
            function s(e) {
              for (var s = r; s < r + i; s++) {
                (function (r) {
                  var i = tableCellIdUtils.createCellId(a[e], n[r]);
                  if (i && y[e]) {
                    t.setBackgroundColor({
                      cellIds: [i],
                      color: y[e]
                    });
                  }
                  if (i && v[e]) {
                    t.setBorderStyle(typescriptHelpers_1.assign({
                      zoneId: i
                    }, v[e]));
                  }
                  if (i && b[e]) {
                    Object.keys(b[e]).forEach(function (r) {
                      t.setFontAttribute(r, b[e][r], [i]);
                    });
                  }
                })(s);
              }
            }
            var l = 0;
            for (; l < a.length; l++) {
              s(l);
            }
            t.applyAttributesOfZone();
          });
        });
      }
      this.replaceVectorRange({
        forRow: false,
        zoneId: this.state.colsZoneId,
        replaceRangeStart: r,
        replaceRangeEnd: r,
        newCount: i || 1
      });
      if (w && (p = p.filter(function (e) {
        return e[0] !== editorTableUtils.tableConstants.MERGE_CELL_ID && e[0] !== editorTableUtils.tableConstants.BACKGROUND_COLOR && e[0] !== editorTableUtils.tableConstants.BORDER;
      })).length) {
        this.performDocumentApplyAttributesToVectorRange(false, A, r, r + i, p.reduce(function (e, t) {
          e[t[0]] = t[1];
          return e;
        }, {}));
      }
      if (r < d.length) {
        f.forEach(function (e, n) {
          var o;
          var a = h[n][r][editorTableUtils.tableConstants.MERGE_CELL_ID];
          var s = h[n][r][editorTableUtils.tableConstants.COL_SPAN];
          if (a && s === 0) {
            t.performDocumentApplyAttributesToVectorRange(false, A, r, r + i, ((o = {})[editorTableUtils.tableConstants.MERGE_CELL_ID] = a, o));
          }
        });
      }
      if (this.currentStack.length) {
        this.currentStack = "";
      }
      setTimeout(function () {
        if (u) {
          u();
        }
      });
    };
    r.calcToolbarsSize = function () {
      var i = this.state;
      var o = i.rowIds;
      var a = i.colIds;
      var s = i.cellAttribs;
      var l = i.colAttribs;
      var u = i.rowAttribs;
      var c = [];
      var h = a[0];
      var d = this.calColHeaderWidths();
      var f = d.colHeaderWidths;
      var A = d.colHeaderTypes;
      var g = {
        colHeaderWidths: f,
        rowHeaderHeights: c,
        colHeaderTypes: A
      };
      if (!h || !s[0].length || !l.length || !u.length) {
        return g;
      }
      var p = this;
      var m = 0;
      for (; m < o.length; m++) {
        var y = function (i) {
          var l = -1;
          var u = 0;
          for (; u < a.length; u++) {
            var h = s[i][u];
            if (!Number.isInteger(h[editorTableUtils.tableConstants.ROW_SPAN])) {
              var d = tableCellIdUtils.createCellId(o[i], a[u]);
              var f = reactDomEntryWrapper.findDOMNode(p.cellRefs["cell-" + d]);
              if (f) {
                var A = f.getClientRects()?.[0];
                c[i] = (A == null ? undefined : A.height) ?? f.clientHeight + 1;
              }
              break;
            }
            if (h[editorTableUtils.tableConstants.ROW_SPAN] === 0) {
              var m = s[i + 1] && s[i + 1][u];
              if (l === -1 && (!m || m[editorTableUtils.tableConstants.ROW_SPAN] !== 0)) {
                l = u;
              }
              continue;
            }
          }
          if (l !== -1) {
            var y = o.map(function (e, t) {
              return s[t][l][editorTableUtils.tableConstants.ROW_SPAN] > 1;
            }).lastIndexOf(true, i);
            if (y !== -1) {
              var v = c.slice(y);
              var d = tableCellIdUtils.createCellId(o[y], a[l]);
              var f = reactDomEntryWrapper.findDOMNode(p.cellRefs["cell-" + d]);
              if (!f) {
                return {
                  value: g
                };
              }
              var A = f.getClientRects()?.[0];
              var b = (A == null ? undefined : A.height) ?? f.clientHeight + 1;
              var w = c.length;
              for (; w <= i; w++) {
                var C = v.reduce(function (e, t) {
                  return e + Number(t);
                }, 0);
                c[w] = (b - C) / (i - y + 1 - v.length);
              }
            }
          }
        }(m);
        if (typeof y == "object") {
          return y.value;
        }
      }
      return {
        colHeaderWidths: f,
        rowHeaderHeights: c,
        colHeaderTypes: A
      };
    };
    r.setTableInstanceWidth = function (e) {
      this.tableWidth = e;
    };
    r.getTableInstanceWidth = function () {
      return this.tableWidth || 0;
    };
    Object.defineProperty(r, "colMinWidth", {
      get: function () {
        return this.props.minCellWidth || editorTableUtils.tableHeightConst;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(r, "colDefaultWidth", {
      get: function () {
        return this.props.defaultCellWidth || editorTableUtils.minTableSize;
      },
      enumerable: false,
      configurable: true
    });
    r.getCellAttribsFromRowAndColAttribs = function (e, t, r, n) {
      var i;
      var a;
      var s;
      var l;
      var u;
      var c;
      var h;
      var d;
      var f;
      var A;
      var g;
      var p;
      var m = this.props;
      var y = m.defaultCellHeight;
      var v = m.defaultCellWidth;
      var w = m.minCellWidth;
      var C = m.tableOptions;
      var E = [];
      i = 0;
      a = 0;
      function I(e) {
        var t;
        var r;
        var n;
        var o = e.rAttr;
        var s = e.cAttr;
        var l = e.rIndex;
        var u = e.cIndex;
        var c = e.cellAttribs;
        var h = e.colsFitWidth;
        var d = e.defaultCellWidth;
        var f = e.defaultCellHeight;
        var A = e.minCellWidth;
        var g = c[l][u] = ((t = {})[editorTableUtils.tableConstants.COL_WIDTH] = h && h.length ? h[u] : Number(s[editorTableUtils.tableConstants.COL_WIDTH]) ? Math.max(Number(s[editorTableUtils.tableConstants.COL_WIDTH]), A) : d || editorTableUtils.minTableSize, t[editorTableUtils.tableConstants.ROW_HEIGHT] = Number(o[editorTableUtils.tableConstants.ROW_HEIGHT]) || f || editorTableUtils.tableWidthConst, t);
        var p = H(s);
        var m = H(o);
        var y = throttledArrayIntersection.throttledIntersect(m, p)[0];
        if (y) {
          g[editorTableUtils.tableConstants.MERGE_CELL_ID] = y;
          var v = c[l][u - 1] || null;
          if (!v || v[editorTableUtils.tableConstants.MERGE_CELL_ID] !== y) {
            i = u;
            a = 0;
          }
          a++;
          var w = c[l][i];
          if (i !== u) {
            Object.assign(w, ((r = {})[editorTableUtils.tableConstants.COL_SPAN] = a, r[editorTableUtils.tableConstants.COL_WIDTH] = Number(w[editorTableUtils.tableConstants.COL_WIDTH]) + Number(g[editorTableUtils.tableConstants.COL_WIDTH]), r));
            Object.assign(g, ((n = {})[editorTableUtils.tableConstants.COL_SPAN] = 0, n[editorTableUtils.tableConstants.COL_WIDTH] = 0, n));
          }
        }
      }
      s = 0;
      l = 0;
      function B(e) {
        var t = e.rAttr;
        var r = e.cAttr;
        var n = e.rIndex;
        var i = e.cIndex;
        var o = e.cellAttribs;
        var a = H(r);
        var u = H(t);
        var c = throttledArrayIntersection.throttledIntersect(u, a)[0];
        if (c) {
          var h = o[n - 1] || null;
          if (!h || !h[i] || h[i][editorTableUtils.tableConstants.MERGE_CELL_ID] !== c) {
            s = n;
            l = 0;
          }
          l++;
          if (s !== n) {
            o[s][i][editorTableUtils.tableConstants.ROW_SPAN] = l;
            o[n][i][editorTableUtils.tableConstants.ROW_SPAN] = 0;
          }
        }
      }
      try {
        var x = typescriptHelpers_1.getValues(e.entries());
        var D = x.next();
        for (; !D.done; D = x.next()) {
          var S = typescriptHelpers_1.readIterator(D.value, 2);
          var k = S[0];
          var _ = S[1];
          E[k] = [];
          try {
            h = undefined;
            var T = typescriptHelpers_1.getValues(t.entries());
            var Q = T.next();
            for (; !Q.done; Q = T.next()) {
              var R = typescriptHelpers_1.readIterator(Q.value, 2);
              var F = R[0];
              var L = R[1];
              (function (e, t) {
                var i = undefined;
                if (r[k] && n[e]) {
                  i = tableCellIdUtils.createCellId(r[k], n[e]);
                }
                var a = {
                  cAttr: t,
                  rAttr: _,
                  cIndex: e,
                  rIndex: k,
                  cellAttribs: E,
                  defaultCellHeight: y,
                  defaultCellWidth: v,
                  cId: n[e],
                  rId: r[k],
                  cellId: i
                };
                I(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, a), {
                  minCellWidth: w
                }));
                if (C == null ? undefined : C.isCustomBorder) {
                  (function (e) {
                    var t = e.rAttr;
                    var r = e.cAttr;
                    var n = e.rIndex;
                    var i = e.cIndex;
                    var o = e.cellAttribs;
                    if (e.cellId) {
                      var a = G(editorTableUtils.tableConstants.BORDER, {
                        rAttr: t,
                        cAttr: r
                      });
                      if (a) {
                        o[n][i][editorTableUtils.tableConstants.BORDER] = a;
                      }
                    }
                  })(a);
                }
                if (C == null ? undefined : C.isCustomBackgroundColor) {
                  (function (e) {
                    var t = e.rAttr;
                    var r = e.cAttr;
                    var n = e.rIndex;
                    var i = e.cIndex;
                    var o = e.cellAttribs;
                    var a = G(editorTableUtils.tableConstants.BACKGROUND_COLOR, {
                      rAttr: t,
                      cAttr: r
                    });
                    if (a) {
                      o[n][i][editorTableUtils.tableConstants.BACKGROUND_COLOR] = a;
                    }
                  })(a);
                }
                if (C == null ? undefined : C.isCustomValign) {
                  (function (e) {
                    var t = e.rAttr;
                    var r = e.cAttr;
                    var n = e.rIndex;
                    var i = e.cIndex;
                    var o = e.cellAttribs;
                    var a = G(editorTableUtils.tableConstants.V_ALIGN, {
                      rAttr: t,
                      cAttr: r
                    });
                    if (a) {
                      o[n][i][editorTableUtils.tableConstants.V_ALIGN] = a;
                    }
                  })(a);
                }
                if (C == null ? undefined : C.isCustomPadding) {
                  (function (e) {
                    var t = e.rAttr;
                    var r = e.cAttr;
                    var n = e.rIndex;
                    var i = e.cIndex;
                    var o = e.cellAttribs;
                    var a = G(editorTableUtils.tableConstants.PADDING, {
                      rAttr: t,
                      cAttr: r
                    });
                    if (a) {
                      o[n][i][editorTableUtils.tableConstants.PADDING] = a;
                    }
                  })(a);
                }
                if (C == null ? undefined : C.isCustomFont) {
                  (function (e) {
                    var t = e.rAttr;
                    var r = e.cAttr;
                    var n = e.rIndex;
                    var i = e.cIndex;
                    var o = e.cellAttribs;
                    var a = e.cellId;
                    if (a) {
                      try {
                        var s = t[editorTableUtils.tableConstants.FONT_SIZE] ? JSON.parse(t[editorTableUtils.tableConstants.FONT_SIZE]) : {};
                        var l = r[editorTableUtils.tableConstants.FONT_SIZE] ? JSON.parse(r[editorTableUtils.tableConstants.FONT_SIZE]) : {};
                        if (s[a] && s[a] === l[a]) {
                          o[n][i][editorTableUtils.tableConstants.FONT_SIZE] = s[a];
                        }
                        var u = t[editorTableUtils.tableConstants.FONT_WEIGHT] ? JSON.parse(t[editorTableUtils.tableConstants.FONT_WEIGHT]) : {};
                        var c = r[editorTableUtils.tableConstants.FONT_WEIGHT] ? JSON.parse(r[editorTableUtils.tableConstants.FONT_WEIGHT]) : {};
                        if (u[a] && u[a] === c[a]) {
                          o[n][i][editorTableUtils.tableConstants.FONT_WEIGHT] = u[a];
                        }
                        var h = t[editorTableUtils.tableConstants.FONT_FAMILY] ? JSON.parse(t[editorTableUtils.tableConstants.FONT_FAMILY]) : {};
                        var d = r[editorTableUtils.tableConstants.FONT_FAMILY] ? JSON.parse(r[editorTableUtils.tableConstants.FONT_FAMILY]) : {};
                        if (h[a] && h[a] === d[a]) {
                          o[n][i][editorTableUtils.tableConstants.FONT_FAMILY] = h[a];
                        }
                      } catch (e) {}
                    }
                  })(a);
                }
                if (C == null ? undefined : C.customCellAttributes) {
                  C.customCellAttributes.forEach(function (e) {
                    (function (e, t) {
                      var r = e.rAttr;
                      var n = e.cAttr;
                      var i = e.rIndex;
                      var o = e.cIndex;
                      var a = e.cellAttribs;
                      if (e.cellId) {
                        var s = G(t, {
                          rAttr: r,
                          cAttr: n
                        });
                        if (s) {
                          a[i][o][t] = s;
                        }
                      }
                    })(a, e);
                  });
                }
              })(F, L);
            }
          } catch (e) {
            h = {
              error: e
            };
          } finally {
            try {
              if (Q && !Q.done && (d = T.return)) {
                d.call(T);
              }
            } finally {
              if (h) {
                throw h.error;
              }
            }
          }
        }
      } catch (e) {
        u = {
          error: e
        };
      } finally {
        try {
          if (D && !D.done && (c = x.return)) {
            c.call(x);
          }
        } finally {
          if (u) {
            throw u.error;
          }
        }
      }
      try {
        var O = typescriptHelpers_1.getValues(t.entries());
        var M = O.next();
        for (; !M.done; M = O.next()) {
          var P = typescriptHelpers_1.readIterator(M.value, 2);
          var F = P[0];
          var L = P[1];
          try {
            g = undefined;
            var z = typescriptHelpers_1.getValues(e.entries());
            var Z = z.next();
            for (; !Z.done; Z = z.next()) {
              var W = typescriptHelpers_1.readIterator(Z.value, 2);
              var k = W[0];
              var _ = W[1];
              var j = {
                cAttr: L,
                rAttr: _,
                cIndex: F,
                rIndex: k,
                cellAttribs: E
              };
              B(j);
            }
          } catch (e) {
            g = {
              error: e
            };
          } finally {
            try {
              if (Z && !Z.done && (p = z.return)) {
                p.call(z);
              }
            } finally {
              if (g) {
                throw g.error;
              }
            }
          }
        }
      } catch (e) {
        f = {
          error: e
        };
      } finally {
        try {
          if (M && !M.done && (A = O.return)) {
            A.call(O);
          }
        } finally {
          if (f) {
            throw f.error;
          }
        }
      }
      return {
        cellAttribs: E
      };
    };
    r.removeBorderStyle = function (e) {
      var r = e.zoneId;
      var n = e.borders;
      var o = {
        zoneId: r
      };
      var a = this.props.tableOptions?.defaultBorderStyle;
      if (n.includes(i.ALL)) {
        o.style = a || editorTableUtils.defaultBorderStyle;
      } else {
        n.forEach(function (e) {
          o[e] = a || editorTableUtils.defaultBorderStyle;
        });
      }
      this.setBorderStyle(o);
      this.applyAttributesOfZone();
    };
    r.getZondIdfromSelectedRange = function () {
      var e = this.state;
      var t = e.colIds;
      var r = e.rowIds;
      var n = this.getSelectionRange();
      var i = n.colRange;
      var o = n.rowRange;
      var a = [];
      var s = 0;
      for (; s < o.length; s++) {
        for (var l = 0; l < i.length; l++) {
          a.push(tableCellIdUtils.createCellId(r[s], t[l]));
        }
      }
      return a;
    };
    r.setBorderStyle = function (e) {
      var t;
      var r = e.zoneId;
      var n = e.top;
      var i = e.bottom;
      var o = e.left;
      var a = e.right;
      var s = e.style;
      var l = e.isRecursion;
      var u = l === undefined || l;
      if (n || i || o || a || s) {
        var c = this.getRowAndColIndicesForCellId(r);
        if (c) {
          var h = c.rowIndex;
          var d = c.colIndex;
          var f = this.state;
          var A = f.cellAttribs;
          var g = f.rowIds;
          var p = f.colIds;
          var m = n || s;
          var y = i || s;
          var b = o || s;
          var w = a || s;
          var C = {};
          if (m) {
            C.top = m;
          }
          if (y) {
            C.bottom = y;
          }
          if (b) {
            C.left = b;
          }
          if (w) {
            C.right = w;
          }
          if (u) {
            if (d !== 0 && b) {
              var E = this.getVisibleZoneIdFromRowAndCol(h, d - 1);
              if (E && r !== E) {
                this.setBorderStyle({
                  zoneId: E,
                  right: b,
                  isRecursion: false
                });
              }
            }
            if (d !== p.length - 1 && w) {
              var I = this.getVisibleZoneIdFromRowAndCol(h, d + 1);
              if (I && r !== I) {
                this.setBorderStyle({
                  zoneId: I,
                  left: w,
                  isRecursion: false
                });
              }
            }
            if (h !== 0 && m) {
              var B = this.getVisibleZoneIdFromRowAndCol(h - 1, d);
              if (B && r !== B) {
                this.setBorderStyle({
                  zoneId: B,
                  bottom: m,
                  isRecursion: false
                });
              }
            }
            if (h !== g.length - 1 && y) {
              var x = this.getVisibleZoneIdFromRowAndCol(h + 1, d);
              if (x && r !== x) {
                this.setBorderStyle({
                  zoneId: x,
                  top: y,
                  isRecursion: false
                });
              }
            }
          }
          if (u) {
            var D = objectPathGetDefault.getObjectPathDefault(A, [h, d, editorTableUtils.tableConstants.COL_SPAN]) || 0;
            var S = objectPathGetDefault.getObjectPathDefault(A, [h, d, editorTableUtils.tableConstants.ROW_SPAN]) || 0;
            var k = h;
            for (; k < h + S; k++) {
              for (var _ = d; _ < d + D; _++) {
                if (k !== h || _ !== d) {
                  var T = this.getZoneIdFromRowAndColIndex(k, _);
                  if (T) {
                    if (k === h && m) {
                      this.setBorderStyle({
                        zoneId: T,
                        top: m
                      });
                    }
                    if (k === h + S - 1 && y) {
                      this.setBorderStyle({
                        zoneId: T,
                        bottom: y
                      });
                    }
                    if (_ === d && b) {
                      this.setBorderStyle({
                        zoneId: T,
                        left: b
                      });
                    }
                    if (_ === d + D - 1 && w) {
                      this.setBorderStyle({
                        zoneId: T,
                        right: w
                      });
                    }
                  }
                }
              }
            }
          }
          this.performDocumentApplyAttributesToZone({
            zoneId: r,
            attributes: ((t = {})[editorTableUtils.tableConstants.BORDER] = C, t)
          });
        }
      }
    };
    r.setTableOuterWrapperRef = function (e) {
      if (e) {
        this.tableWrapperOuterRef = e;
      }
    };
    r.getTableOuterWrapperRef = function () {
      return this.tableWrapperOuterRef;
    };
    r.setTableWrapperRef = function (e) {
      this.tableWrapperRef = e;
    };
    r.setTableWrapperInnerRef = function (e) {
      this.tableWrapperInnerRef = e;
    };
    r.setTableRef = function (e) {
      this.tableRef = e;
    };
    r.setTbodyRef = function (e) {
      this.tbodyRef = e;
    };
    r.setTableIframeRef = function (e) {
      this.tableIframeRef = e;
    };
    r.setCellRef = function (e, t) {
      this.cellRefs[e] = t;
    };
    r.setTableHeaderRef = function (e) {
      this.tableHeaderRef = e;
    };
    r.getTableHeaderRef = function () {
      return this.tableHeaderRef;
    };
    r.setCurrentHoverOfZone = function (e) {
      if (this.isMouseDown) {
        this.currentHoverOfZone = e;
      }
    };
    r.setCellContentEditable = function (e, t) {
      var r = this;
      e.forEach(function (e) {
        r.getCellHost(e).setAttribute("contentEditable", t ? "true" : "false");
      });
    };
    r.getCellHost = function (e) {
      var t = this.cellRefs["cell-" + e].innerZone.innerZoneRef;
      return t && t.querySelector(".zoneId-" + e);
    };
    r.getTableScrollWidth = function () {
      return this.state.colHeaderWidths.reduce(function (e, t) {
        return e + t;
      }, 2);
    };
    r.resetSelectRowOrColStatus = function () {
      this.setState({
        isSelectRowOrCol: false
      });
    };
    r.handleContentResize = function () {
      this.calcUpdateTableRectInfo();
      return this.tableWrapperInnerRef.handleContentResize();
    };
    r.render = function () {
      var e = this.props;
      var t = e.editor;
      var r = e.zoneIdToInitialHTML;
      return reactCoreLibraryReexport.createElement(Y, {
        editor: t,
        zoneIdToInitialHTML: r
      }, editorTableUtils.safeCallFunction("render", this.props.tableOptions, this));
    };
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator], t.prototype, "handleContentChange", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getColAndROWIds", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "calcCellPoint", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getTableColsWidth", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getComponentMounted", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getTableRectInfo", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "componentDidMount", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getCellLayoutWidth", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "on", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "off", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getCustomContext", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setCustomContext", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getRectOfZone", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "isToolbarShown", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getRectOfZoneInEditor", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "selectedCellsChange", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getSelectedCellStatus", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setRangeOnRangeDom", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleVirtualListBufferChange", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "enterBuffer", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "leaveBuffer", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleBlockDidCreate", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleBlockDelete", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "focusAndCollapseSelectionOntoCell", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "focusAndCollapseSelectionOntoCellByZoneId", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleTableMouseUpAfterMove", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleMouseSelection", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator(), u()], t.prototype, "handleTableMouseDown", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "addLineBetweenTables", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "ontHeaderTriangleClick", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "updateCurrentHoverHeader", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getZoneIdWhichContentShouldCompose", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator(), u()], t.prototype, "updateRowAndColRangeOfPasteOntoTable", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "updateRowAndColAttributeOfPasteOntoTable", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "updateCellContentOfPasteOntoTable", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getBackgroundColor", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getFontAttribute", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator(), u()], t.prototype, "setFontAttribute", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator(), u()], t.prototype, "setBackgroundColor", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "updateBackgroundStylesOfMergeCell", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "updateFontStyleOfMergeCell", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "updateBorderStyleOfMergeCell", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "updateBorderStyleOfUnMergeCell", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator(), u()], t.prototype, "mergeCells", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator(), u()], t.prototype, "unMergeCells", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getMergeStatusByCellIds", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setToolBarScale", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setTableStyle", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setOutOfTable", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleTableZoom", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator(), u()], t.prototype, "deleteTable", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleInnerZoneFocus", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "toggleTableFocus", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleAceFocus", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleAceBlur", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleAceMouseDown", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleHorzResizeEnd", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleResizeEnter", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleResizeLeave", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleHorzResize", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getCellMinWidth", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleVertResizeStart", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleVertResizeEnd", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleVertResize", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleScrollableScroll", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getOffsetOfCellLeftToTableLeft", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getSelectedZonesWithVisible", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleScrollableResize", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "detectTableResizeImmediately", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getTableInfo", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "calcTableContentRectInfo", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "calcMaxContentHeightOfRow", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "notifySelectAll", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getColRect", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getRowRect", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getZoneIdFromRowAndColIndex", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getVisibleZoneIdFromRowAndCol", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator(), u()], t.prototype, "pasteCellsOntoTable", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator(), u()], t.prototype, "deleteSelectedZones", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator(), u()], t.prototype, "deleteRowsOrColsAtIndices", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getRowZones", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getColZones", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "selectRow", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setRep", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setRowHeight", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setColumnWidth", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "performDocumentApplyAttributesToZone", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getFocusIndices", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator(), u()], t.prototype, "addRowAtIndex", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator(), u()], t.prototype, "deleteRowAtIndex", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getAttribs", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator(), u()], t.prototype, "addColAtIndex", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "calcToolbarsSize", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setTableInstanceWidth", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getTableInstanceWidth", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getCellAttribsFromRowAndColAttribs", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "removeBorderStyle", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getZondIdfromSelectedRange", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setBorderStyle", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setTableOuterWrapperRef", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getTableOuterWrapperRef", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setTableWrapperRef", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setTableWrapperInnerRef", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setTableRef", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setTbodyRef", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setTableIframeRef", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setCellRef", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setTableHeaderRef", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getTableHeaderRef", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setCurrentHoverOfZone", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "setCellContentEditable", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getCellHost", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getTableScrollWidth", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "resetSelectRowOrColStatus", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleContentResize", null);
    return t;
  }(reactCoreLibraryReexport.Component);
  var er = tableCellIdUtils.generateRowSessionId;
  var en = tableCellIdUtils.getMergeCellState;
  var ei = tableCellIdUtils.generateCellIds;
  var eo = tableCellIdUtils.parseTableClassName;
  var ea = tableCellIdUtils.extractIdsFromText;
  var es = tableCellIdUtils.getVectorCellIds;
  var el = tableCellIdUtils.createTableClassName;
  var eu = tableCellIdUtils.parseSpaceSeparatedIds;
  var ec = tableCellIdUtils.isValidCellId;
  var eh = tableCellIdUtils.parseCellId;
  var ed = tableCellIdUtils.createColId;
  var ef = tableCellIdUtils.createRowId;
  var eA = tableCellIdUtils.generateRandomString;
  var eg = keyboardShortcutConstants.directionKeys;
  var ep = keyboardShortcutConstants.isUndoRedoEvent;
  var em = function () {
    function e(e) {
      this.editor = e;
      this.lineStateToTableInstance = new Map();
      this.instanceToLineState = new WeakMap();
      this.tableIdToTableInstance = new Map();
      this.subZoneIdToTableInstance = new Map();
    }
    var t = e.prototype;
    t.registerInstance = function (e, t) {
      this.lineStateToTableInstance.set(t, e);
      this.tableIdToTableInstance.set(e.tableId, e);
      this.instanceToLineState.set(e, t);
    };
    t.unregisterInstance = function (e) {
      if (e instanceof et) {
        var t = this.instanceToLineState.get(e);
        if (t) {
          this.lineStateToTableInstance.delete(t);
        }
        this.instanceToLineState.delete(e);
      } else {
        var r = this.lineStateToTableInstance.get(e);
        if (r) {
          this.instanceToLineState.delete(r);
        }
        this.lineStateToTableInstance.delete(e);
      }
    };
    t.registerInstanceOfSubZoneId = function (e, t) {
      this.subZoneIdToTableInstance.set(e, t);
    };
    t.unregisterInstanceOfSubZoneId = function (e) {
      this.subZoneIdToTableInstance.delete(e);
    };
    t.getInstanceByLineState = function (e) {
      return this.lineStateToTableInstance.get(e) || null;
    };
    t.getInstanceByLineNum = function (e, t) {
      var r;
      var n = (r = this.editor.getContentState().getZoneState(e)) === null || r === undefined ? undefined : r.getLine(t);
      if (n) {
        return this.getInstanceByLineState(n);
      } else {
        return null;
      }
    };
    t.getInstanceById = function (e) {
      return this.tableIdToTableInstance.get(e) || null;
    };
    t.getInstanceBySubZoneId = function (e) {
      return this.subZoneIdToTableInstance.get(e) || null;
    };
    t.getInstanceWithSelected = function () {
      var e;
      var t;
      try {
        var r = typescriptHelpers_1.getValues(this.lineStateToTableInstance.values());
        var n = r.next();
        for (; !n.done; n = r.next()) {
          var i = n.value;
          if (i.getSelectStatus().length) {
            return i;
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (n && !n.done && (t = r.return)) {
            t.call(r);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return null;
    };
    t.getInstancesWithHighlight = function () {
      var e;
      var t;
      var r = [];
      try {
        var n = typescriptHelpers_1.getValues(this.lineStateToTableInstance.values());
        var i = n.next();
        for (; !i.done; i = n.next()) {
          var a = i.value;
          if (a.isHighlight) {
            r.push(a);
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (t = n.return)) {
            t.call(n);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return r;
    };
    t.getInstancesInSelection = function (e) {
      var t;
      var r;
      var n = [];
      var i = this.editor.getContentState().getEntities(e);
      try {
        var a = typescriptHelpers_1.getValues(i);
        var s = a.next();
        for (; !s.done; s = a.next()) {
          var l = s.value;
          if (editorTableUtils.tableTypeAce in l.attributes) {
            var u = this.getInstanceByLineNum(l.start.zoneId, l.start.line);
            if (u) {
              n.push(u);
            }
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (s && !s.done && (r = a.return)) {
            r.call(a);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return n;
    };
    t.getLineStateByInstance = function (e) {
      return this.instanceToLineState.get(e) || null;
    };
    t.clear = function () {
      this.lineStateToTableInstance.clear();
      this.instanceToLineState = new WeakMap();
      this.tableIdToTableInstance.clear();
      this.subZoneIdToTableInstance.clear();
    };
    return e;
  }();
  var ey = function (e) {
    function t(r) {
      var n = e.call(this) || this;
      n.options = r;
      n.lineOfTableWillPaste = 0;
      n.tablePropsMap = {};
      n.rangeDom = null;
      n.nonSelectTimer = null;
      n.name = t.KEY;
      n.adapterKey = "table";
      n.tableSpanClsCollect = [];
      n.tableSpanClsCollectPersist = [];
      n.highlightIns = [];
      n.undelegateTableMouseList = [];
      n.getTableInstance = function (e, t) {
        return n.instanceManager.getInstanceByLineNum(e, t);
      };
      n.doInsertTable = function (e, t, r) {
        var i;
        var o;
        var s;
        var l = e.rect;
        var u = e.uuid;
        var c = e.autoFocus;
        var h = e.fromAPanel;
        if (t === undefined) {
          t = false;
        }
        if (r === undefined) {
          r = false;
        }
        var d = n.editor;
        var f = d.selection.getSelection();
        var A = f.start;
        var g = f.end;
        var m = A.zoneId;
        var y = er();
        var v = en();
        if (!n.options.isNested && m !== "0" || r) {
          return;
        }
        var b = d.getContentState();
        var w = (o = b.getZoneState(m)) === null || o === undefined ? undefined : o.getLine(A.line);
        if (w) {
          var C = editorTableUtils.checkLineCondition(d, A, m);
          var E = w && A.offset === w.length() - 1;
          if (!l) {
            l = editorTableUtils.defaultInsertPos;
            s = "shortKey";
          }
          if (u) {
            var I = document.querySelector("." + editorTableUtils.uuidPrefix + u);
            var B = syntheticEventUtilities.createSelectionRange(I, d);
            if (!B) {
              return;
            }
            A = B.start;
            g = B.end;
          }
          var x = b.getZoneState(m);
          if (x) {
            var D = x.pointToOffset(A);
            var S = x.pointToOffset(g);
            if (D !== null && S !== null) {
              var k = new contentStructureDelta.ContentDelta({
                zoneId: m
              }).retain(D).delete(S - D);
              if (C) {
                k.insertEnter();
              }
              k.insert("*", ((i = {})[editorTableUtils.tableTypeAce] = y + " " + v, i));
              if (!E || !t) {
                k.insertEnter();
              }
              var _ = n.replaceVectorRange(false, v, 0, 0, l.x);
              var T = n.replaceVectorRange(true, y, 0, 0, l.y);
              var Q = b.apply(k, {
                type: editorTableUtils.insertTableCmd
              });
              n.editor.undoModule.mergeRecords(Q, _, T);
              var R = el(y, v);
              if (c === undefined || c) {
                setTimeout(function () {
                  var e = n.instanceManager.getInstanceById(R);
                  if (e) {
                    e.focusAndCollapseSelectionOntoCell(0, 0);
                  }
                });
              }
              d.call("insertTable", {
                from: s,
                rect: l,
                blockId: R,
                fromAPanel: h,
                editor: d
              });
            }
          }
        }
      };
      n.removeEvents = function () {
        var e = n.editor;
        e.off(editorTableUtils.tableActionTypes.COPY, n.copyTable);
        e.off(editorTableUtils.tableActionTypes.CUT, n.cutTable);
        e.off(editorEventConstants.editorEventTypes.WILL_DELETE_FROM_CUT, n.handleWillDeleteFromCut);
        e.off(editorEventConstants.editorEventTypes.PASTE, n.handlePaste);
        e.off(editorEventConstants.editorEventTypes.DID_PASTE, n.handleDidPaste);
        e.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, n.handleContentChange);
        e.off(editorEventConstants.editorEventTypes.KEYDOWN, n.handleKeyDown);
        e.off(editorEventConstants.editorEventTypes.EXEC_COMMAND, n.handleTriggerCommand);
        e.off(editorEventConstants.editorEventTypes.SELECTION_CHANGE, n.handleSelectionChanged);
        document.removeEventListener("mousedown", n.handleSelectTableMouseDown);
        document.removeEventListener("mouseup", n.handleSelectTableMouseUp);
        e.off("mousedown", n.documentEventHandler);
        e.off("focus", n.documentEventHandler);
        e.off("blur", n.documentEventHandler);
        n.removeIpadSafariEvents();
        e.off("deleteWordBackward", n.handleDeleteWordBackward);
      };
      n.documentEventHandler = function (e) {
        if (e.type === "mousedown" && e.target instanceof HTMLElement && e.target.classList.contains("dmc-button")) {
          e.preventDefault();
        }
        n.editor.call("ace-" + e.type, e);
      };
      n.lineTrackerUpdate = function (e, t) {
        var r = t.isCollapsed;
        var i = t.dirtyLines;
        if (!r) {
          i.forEach(function (e) {
            var t = e.lineNum;
            var r = n.instanceManager.getInstanceByLineNum(zeroConstantModule_1.versionValue, t);
            if (r) {
              r.handleContentResize();
            }
          });
        }
      };
      n.handleWillDeleteFromCut = function (e) {
        n.aceCutReplaceSelection(e);
      };
      n.aceAttribsToClasses = function (e, t) {
        var r = t.key;
        var n = t.value;
        var i = [];
        if (r.indexOf(editorTableUtils.magicObjectTypes["0"]) > -1) {
          i.push(editorTableUtils.magicObjectTypes["0"]);
        }
        if (r.indexOf(editorTableUtils.widthFixedConst) > -1) {
          i.push(editorTableUtils.widthFixedConst);
        }
        if (r.indexOf(editorTableUtils.tableTypeAce) > -1) {
          i.push(r + "-" + n);
          i.push("ace-table-mount-point");
          i.push(z(n));
        }
        return i.join(" ");
      };
      n.listener = function (e) {
        if (n.editor) {
          e.stopPropagation();
          e.stopImmediatePropagation();
          var t = e.type;
          if (t === editorEventConstants.editorEventTypes.CUT) {
            n.editor.clipboard.onCut(e);
          } else if (t === editorEventConstants.editorEventTypes.COPY) {
            n.editor.clipboard.onCopy(e);
          }
          e.preventDefault();
        }
      };
      n.handleResetSpecialSelection = function (e) {
        for (var t in editorTableUtils.tableSelectors) {
          if (editorTableUtils.tableSelectors.hasOwnProperty(t)) {
            var r;
            var i;
            var o = editorTableUtils.tableSelectors[t];
            if (e.target.closest(o)) {
              return;
            }
          }
        }
        var a = (i = (r = e.target.closest(".ace-table-mount-point")) === null || r === undefined ? undefined : r.querySelector("td [data-zone-id]")) === null || i === undefined ? undefined : i.getAttribute("data-zone-id");
        if (a) {
          var s = n.instanceManager.getInstanceBySubZoneId(a);
          if (s && s.getSelectStatus().length) {
            s.unselectAll();
            s.focusAndCollapseSelectionOntoCellByZoneId(a);
          }
        }
      };
      n.handleSelectTableMouseDown = function (e) {
        if (e.which !== 3) {
          n.bindTableMouseEvent();
        }
      };
      n.bindTableMouseEvent = function () {
        var e = {
          passive: true
        };
        var t = ".ace-table-wrapper-outer";
        [{
          parent: "body",
          child: t,
          event: "mouseenter",
          handle: n.handleSelectTableMouseEnter.bind(n),
          eventOptions: e
        }, {
          parent: "body",
          child: t,
          event: "mouseleave",
          handle: n.handleSelectTableMouseLeave.bind(n),
          eventOptions: e
        }].forEach(function (e) {
          var t = P(e.parent, e.child, e.event, e.handle, e.eventOptions);
          if (t) {
            n.undelegateTableMouseList.push(t);
          }
        });
      };
      n.handleSelectTableMouseEnter = function (e) {
        if (n.editor) {
          if (e.currentTarget) {
            e.currentTarget.classList.add("tableNonSelectable");
          }
          n.editor.call("tableStatusInSelecting", false);
        }
      };
      n.handleSelectTableMouseLeave = function () {
        var e = document.getElementsByClassName("ace-table-wrapper-outer tableNonSelectable");
        var t = 0;
        for (; t < e.length; t++) {
          e[t].classList.remove("tableNonSelectable");
        }
        n.editor.call("tableStatusInSelecting", true);
      };
      n.handleTableOuterMouseDown = function (e) {
        if (e.target.querySelector(".ace-table")) {
          var t = e.target.closest(".ace-table-mount-point");
          if (!t.classList.contains("non-select")) {
            t.classList.add("non-select");
          }
        }
      };
      n.handleTableOuterMouseUp = function (e) {
        if (e.target.querySelector(".ace-table")) {
          var t = e.target.closest(".ace-table-mount-point");
          if (t.classList.contains("non-select")) {
            if (n.nonSelectTimer) {
              clearTimeout(n.nonSelectTimer);
            }
            n.nonSelectTimer = setTimeout(function () {
              t.classList.remove("non-select");
            }, 300);
          }
          var r = n.editor;
          var i = n.editor.selection.getSelection();
          var o = i.start;
          var a = i.end;
          r.selection.setSelection({
            start: o,
            end: a
          }, true);
        }
      };
      n.handleSelectTableMouseUp = function () {
        n.unBindTableMouseEvent();
        n.handleSelectTableMouseLeave();
      };
      n.mountTable = function (e) {
        var t = n.options;
        var r = t.isResponsiveWidth;
        var i = t.defaultHeight;
        var a = t.defaultWidth;
        var s = t.cellMinHeight;
        var l = t.cellMinWidth;
        var u = t.isInsertLineBetweenTable;
        var c = n.tablePropsMap[e.getKey()];
        if (!c) {
          return false;
        }
        delete n.tablePropsMap[e.getKey()];
        var h = c.aceTableBorder;
        (c = n.getPropsByTableId({
          rowId: c.rowsZoneId,
          colId: c.colsZoneId
        })).aceTableBorder = h === undefined ? "" : h;
        var d = ei(c.rowIds, c.colIds).map(function (e) {
          return e;
        });
        return reactCoreLibraryReexport.createElement(et, typescriptHelpers_1.assign({
          isResponsiveWidth: r,
          defaultCellHeight: i,
          defaultCellWidth: a,
          minCellWidth: l,
          minCellHeight: s,
          isInsertLineBetweenTable: u == null || u
        }, c, {
          rangeDom: n.rangeDom,
          ref: function (t) {
            if (t) {
              n.instanceManager.registerInstance(t, e);
              typescriptHelpers_1.spreadArray([c.rowsZoneId, c.colsZoneId], d).forEach(function (e) {
                n.instanceManager.registerInstanceOfSubZoneId(e, t);
              });
            }
          }
        }));
      };
      n.tableWillDelete = function (e, t, r) {
        if (r === editorTableUtils.zeroString) {
          var i = n.editor.getContentState().getZoneState(r);
          if (i) {
            for (var o = e; o < t; o++) {
              var a = i.getLine(o);
              if (a) {
                var s = n.getTableInstance(r, o);
                if (s) {
                  s.tableWillDelete(editorTableUtils.deleteSourceTypes.KEYBOARD);
                }
                n.instanceManager.unregisterInstance(a);
              }
            }
          }
        }
      };
      n.UNSAFE_editorNormalizePasteNode = function (e) {
        var t = e.data;
        var r = t.node;
        var i = t.UNSAFE_HTML;
        var a = n.editor;
        var s = a.selection.getSelection();
        var l = s.start;
        var u = l.zoneId;
        var c = l.line;
        var h = l.offset;
        var d = s.end;
        var f = d.line;
        var A = d.offset;
        if (ec(u)) {
          Array.from(r.querySelectorAll("table tr")).forEach(function (e) {
            Array.from(e.childNodes).forEach(function (e) {
              if (e.nodeType === Node.TEXT_NODE) {
                e.parentNode.removeChild(e);
              }
            });
          });
        }
        var g = typescriptHelpers_1.spreadArray(Array.from(r.querySelectorAll("table")), Array.from(r.querySelectorAll("tbody")), Array.from(r.querySelectorAll("tr")), Array.from(r.querySelectorAll("td")), Array.from(r.querySelectorAll("colgroup")));
        if (i.includes("xmlns:x=\"urn:schemas-microsoft-com:office:excel\"") || i.includes("xmlns:w=\"urn:schemas-microsoft-com:office:word\"")) {
          g.unshift(r);
        }
        editorTableUtils.cleanDomNodes(g);
        if (!n.options.isNested) {
          r.querySelectorAll("table table").forEach(function (e) {
            var t;
            var r = e.closest("td,th");
            if (r) {
              e.querySelectorAll("td,th").forEach(function (e) {
                e.childNodes.forEach(function (e) {
                  r.appendChild(e);
                });
              });
              if ((t = e.parentNode) !== null && t !== undefined) {
                t.removeChild(e);
              }
            }
          });
        }
        if (r.innerHTML.indexOf(editorTableUtils.tableTypeAce) !== -1) {
          var p = a.getContentState().getZoneState(u);
          if (p) {
            var m = p.getLine(c);
            var y = p.getLine(f);
            if (m && y) {
              var v = h === m.getLineMarker();
              n.lineOfTableWillPaste = v ? c : c + 1;
              if (n.isTableLine(u, f) && h >= m.length() - 1 && c + 1 <= f) {
                a.selection.setSelection({
                  start: {
                    zoneId: u,
                    line: c + 1,
                    offset: m.getLineMarker()
                  },
                  end: {
                    zoneId: u,
                    line: f,
                    offset: A
                  }
                }, true);
              }
              if (n.isTableLine(u, f) && A <= y.getLineMarker() && f - 1 >= c) {
                a.selection.setSelection({
                  start: {
                    zoneId: u,
                    line: c,
                    offset: h
                  },
                  end: {
                    zoneId: u,
                    line: f - 1,
                    offset: y.length() - 1
                  }
                }, true);
              }
            }
          }
        }
      };
      n.updateTableIdsIfNecessary = function (e, t) {
        var r = e.get(t);
        var i = new contentStructureDelta.ContentDelta({
          zoneId: t
        });
        var a = new Map();
        function s(e, t, r = "") {
          var n = throttledArrayIntersection.throttledIntersect(e.split(","), t.split(",")).find(Boolean);
          if (!n) {
            return r;
          }
          var i = a.get(n);
          if (!i) {
            i = eA(8);
            a.set(n, i);
          }
          return typescriptHelpers_1.spreadArray(new Set((r + "," + i).split(","))).filter(Boolean).join(",");
        }
        r.forEach(function (t) {
          if (t.insert === "*" && t.attributes?.aceTable) {
            var a = er();
            var l = new zoneDeltaClasses.RowDelta({
              zoneId: a
            });
            var u = en();
            var c = new zoneDeltaClasses.ColumnDelta({
              zoneId: u
            });
            i.insert("*", typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, t.attributes), {
              aceTable: a + " " + u
            }));
            var h = eu(t.attributes.aceTable);
            var d = h.rowId;
            var f = h.colId;
            e.get(d).forEach(function (t) {
              var r = ef();
              var i = typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, t.attributes), {
                mergeCellID: ""
              });
              e.get(f).forEach(function (a, l) {
                var g = c.ops[l]?.insert?.id || ed();
                var p = c.ops[l]?.attributes || typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, a.attributes), {
                  mergeCellID: ""
                });
                if (a.attributes?.mergeCellID && t.attributes?.mergeCellID) {
                  p.mergeCellID = s(t.attributes.mergeCellID, a.attributes.mergeCellID, p.mergeCellID);
                  i.mergeCellID = s(t.attributes.mergeCellID, a.attributes.mergeCellID, i.mergeCellID);
                }
                if (!c.ops[l]) {
                  c.insert(g, p);
                }
                var m = n.getCellIdFromRowAndCol(t.insert.id, a.insert.id);
                var y = e.get(m);
                if (y) {
                  var v = y.create(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, y), {
                    zoneId: n.getCellIdFromRowAndCol(r, g)
                  }));
                  e.replace(m, v);
                }
              });
              l.insert(r, i);
            });
            e.replace(d, l);
            e.replace(f, c);
          } else {
            i.push(t);
          }
        });
        e.replace(t, i);
      };
      n.normalizeTableDelta = function (e, t) {
        e.get(t).forEach(function (t) {
          if (t.insert === "*" && t.attributes?.aceTable) {
            var i = eu(t.attributes.aceTable);
            var o = i.rowId;
            var a = i.colId;
            e.get(o).forEach(function (t) {
              e.get(a).forEach(function (r) {
                var i = n.getCellIdFromRowAndCol(t.insert.id, r.insert.id);
                var o = e.get(i);
                if (o && o.ops.length === 1 && o.ops[0].insert === "\n") {
                  e.delete(i);
                }
              });
            });
          }
        });
      };
      n.handleKeyDown = function (e) {
        if (!n.editor.isFocusOnBlock()) {
          editorTableUtils.safeCallFunction("beforeKeyDown", n.options);
          n.editor.call(editorTableUtils.tableEventNames.KEY_EVENT, e);
          var t = e.keyCode;
          var r = false;
          if (ep(e.nativeEvent) && t === keyboardEventUtils.KeyCode.C && !e.shiftKey) {
            r = n.handleCopy();
          } else if (ep(e.nativeEvent) && t === keyboardEventUtils.KeyCode.X && !e.shiftKey) {
            r = n.handleCut();
          } else if (t === keyboardEventUtils.KeyCode.BackSpace) {
            r = n.handleBackspacKey(e);
          } else if (t === keyboardEventUtils.KeyCode.Delete) {
            r = n.handleDeleteKey(e);
          } else if (eg.includes(t)) {
            r = n.handleArrowKeys(e);
          } else if (t === keyboardEventUtils.KeyCode.Tab) {
            r = n.handleTabKey(e);
          }
          if (r) {
            e.stopEvent();
            e.stopPropagation();
            e.preventEvent();
            e.preventDefault();
          }
        }
      };
      n.handleDeleteWordBackward = function (e) {
        if (n.handleBackspacKey(e)) {
          e.stopEvent();
          e.stopPropagation();
          e.preventEvent();
          e.preventDefault();
        }
      };
      n.doDeleteTableCellText = function (e) {
        var t;
        var r;
        var i = n.editor;
        var a = new deltaSetCore.DeltaSet();
        var s = i.getContentState();
        try {
          var l = typescriptHelpers_1.getValues(e);
          var u = l.next();
          for (; !u.done; u = l.next()) {
            var c = u.value;
            var h = new contentStructureDelta.ContentDelta({
              zoneId: c
            });
            var d = s.getZoneState(c);
            if (d) {
              h.delete(d.totalWidth() - 1);
            }
            a.add(c, h);
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (u && !u.done && (r = l.return)) {
              r.call(l);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        s.apply(a);
      };
      n.handleDeleteTableOnMainZone = function (e) {
        var t = n.editor;
        var r = t.selection.getSelection();
        var i = r.start;
        var o = r.end;
        var a = i.line;
        var s = o.line;
        var l = i.zoneId;
        var u = t.getContentState();
        var c = u.getZoneState(l);
        if (!c) {
          return false;
        }
        var h = c.getLine(a);
        var d = c.getLine(s);
        if (!h || !d) {
          return false;
        }
        var f = n.isTableLine(l, a) && n.isTableLine(l, s);
        if (f) {
          var A = n.getTableInstance(l, a);
          if (A) {
            A.deleteTable(editorTableUtils.deleteSourceTypes.KEYBOARD);
          }
          e.preventDefault();
          return true;
        }
        var g = s - 1;
        if (n.isTableLine(l, s) && o.offset === d.getLineMarker() && g >= a) {
          var m = r.toPosition();
          var y = new contentStructureDelta.ContentDelta({
            zoneId: l
          }).retain(m.start).delete(m.len - d.getLineMarker());
          u.apply(y);
          e.preventDefault();
          return true;
        }
        var v = n.isTableLine(l, a - 1);
        if (n.isSkipLine(l, a) || !v && !f || v && (!r.isCollapsed() || i.offset !== h.getLineMarker())) {
          return false;
        }
        if (v) {
          if ((i.line !== o.line || i.line !== c.length() - 1) && h.isTextEmpty()) {
            var b = u.rangePointToOffset({
              line: a,
              offset: 0,
              zoneId: l
            });
            if (b !== null) {
              var y = new contentStructureDelta.ContentDelta({
                zoneId: l
              }).retain(b).delete(h.length());
              u.apply(y);
            }
          }
          var w = c.getLine(a - 1);
          t.selection.setSelection({
            start: {
              zoneId: l,
              line: a - 1,
              offset: w.getLineMarker()
            },
            end: {
              zoneId: l,
              line: a - 1,
              offset: w.length() - 1
            }
          }, true);
          t.call(editorTableUtils.tableEventNames.DELETE_TABLE_ON_MAIN_ZONE, {
            editor: t,
            prevLineIsTable: v,
            startLine: a
          });
          e.preventDefault();
          return true;
        }
        return false;
      };
      n.handleCut = function () {
        return !!n.instanceManager.getInstanceWithSelected() && n.cutTable();
      };
      n.handleBackspacKey = function (e) {
        var t = n.instanceManager.getInstanceWithSelected();
        if (t) {
          return n.handleDeleteTableText(t);
        } else {
          return n.handleDeleteTableOnMainZone(e);
        }
      };
      n.handleDeleteKey = function (e) {
        var t = n.editor;
        var r = t.getContentState().getActiveZone();
        var i = t.selection.getSelection();
        var o = i.start;
        var a = i.end;
        var s = o.line = a.line;
        var l = o.line;
        var u = r.getLine(l);
        if (!u) {
          return false;
        }
        var c = o.offset === u.length() - 1;
        var h = l + 1;
        var d = r.getLine(h);
        var f = n.isTableLine(o.zoneId, l);
        var A = n.isTableLine(o.zoneId, h);
        if (i.isCollapsed() && c && d && A) {
          t.selection.setSelection({
            start: {
              zoneId: o.zoneId,
              line: h,
              offset: d.getLineMarker()
            },
            end: {
              zoneId: o.zoneId,
              line: h,
              offset: d.length() - 1
            }
          }, true);
          e.preventDefault();
          return true;
        }
        if (f && s) {
          var g = n.instanceManager.getInstanceByLineState(u);
          if (g) {
            g.deleteTable(editorTableUtils.deleteSourceTypes.KEYBOARD);
          }
          e.preventDefault();
          return true;
        }
        return false;
      };
      n.handleArrowKeys = function (e) {
        var t = n.editor.selection.getSelection();
        if (!t.isCollapsed()) {
          return false;
        }
        var r = n.handleCursorIntoTable(e.keyCode);
        if (r) {
          return r;
        }
        var i = t.start.zoneId;
        if (!ec(i)) {
          return false;
        }
        var o = n.instanceManager.getInstanceBySubZoneId(i);
        return !!o && o.handleArrowKey(e);
      };
      n.stepIntoTable = function (e, t, r) {
        if (!n.isTableLine(e, t)) {
          return false;
        }
        var i = n.getTableInstance(e, t);
        if (!i) {
          return false;
        }
        var o = i.getRowIds();
        var a = i.getColIds();
        var s = 0;
        var l = 0;
        var u = [0, 0];
        switch (r) {
          case editorTableUtils.cornerPositions.TOP_LEFT:
            s = 0;
            l = 0;
            break;
          case editorTableUtils.cornerPositions.TOP_RIGHT:
            s = 0;
            l = a.length - 1;
            u = [0, -1];
            break;
          case editorTableUtils.cornerPositions.BOTTOM_LEFT:
            s = o.length - 1;
            l = 0;
            u = [-1, -1];
            break;
          case editorTableUtils.cornerPositions.BOTTOM_RIGHT:
            s = o.length - 1;
            l = a.length - 1;
            u = [-1, -1];
        }
        var c = n.editor.getScrollContainer();
        var h = (c == null ? undefined : c.scrollTop) || 0;
        window.requestAnimationFrame(function () {
          c.scrollTo(0, h);
        });
        setTimeout(function () {
          if (userAgentDetect.userAgentInfo.isSafari) {
            c.scrollTo(0, h);
          }
          i.focusAndCollapseSelectionOntoCell(s, l, u);
        });
        return true;
      };
      n.handleAceCutReplaceSelection = function (e) {
        var t = e.getWhollySelectedRegions();
        var r = t.cols;
        var i = t.rows;
        if (t.entireTable) {
          e.deleteTable(editorTableUtils.deleteSourceTypes.KEYBOARD);
        } else if (r.length || i.length) {
          if (r.length) {
            e.deleteColAtIndex(r[0], r.length);
          } else if (i.length) {
            e.deleteRowAtIndex(i[0], i.length);
          }
        } else {
          n.doDeleteTableCellText(e.getSelectStatus());
        }
      };
      n.aceCutReplaceSelection = function (e) {
        var t = n.instanceManager.getInstanceWithSelected();
        if (t) {
          n.handleAceCutReplaceSelection(t);
          e.preventEvent();
        }
      };
      n.editorSizeChange = debounceUtilWrapper.createDebounce(function () {
        n.editor.call(editorTableUtils.tableActionTypes.CONTEXT_CHANGE);
      }, 50);
      n.pluginReadOnly = function () {
        n.editor.call(editorTableUtils.tableEventNames.EDITABLE_CHANGE, false);
      };
      n.pluginReadWrite = function () {
        n.editor.call(editorTableUtils.tableEventNames.EDITABLE_CHANGE, true);
      };
      n.handleSelectionChanged = function (e, t) {
        var r = n.instanceManager.getInstancesInSelection(n.editor.selection.getSelection());
        var i = n.highlightIns.filter(function (e) {
          return !r.includes(e);
        });
        i.forEach(function (e) {
          return e.toggleBorderHighlight(false);
        });
        r.forEach(function (e) {
          return e.toggleBorderHighlight(true);
        });
        n.editor.call(editorTableUtils.tableEventNames.SELECT_CHANGED, {
          lineManagersWillUnselected: i,
          lineManagersSelected: r
        });
        n.highlightIns = r;
      };
      n.destroy = function () {
        n.unBindTableMouseEvent();
        n.tableSpanClsCollectPersist.forEach(function (e) {
          var t = eo(e);
          if (t) {
            var r = tableCellIdUtils.createTableClassName(t.rowId, t.colId);
            var i = n.instanceManager.getInstanceById(r);
            var o = i == null ? undefined : i.getTableOuterWrapperRef().parentElement;
            if (i && o) {
              reactDomEntryWrapper.unmountComponentAtNode(o);
            }
          }
        });
        editorTableUtils.safeCallFunction("destroy", n.options, {
          tablePlugin: n,
          editor: n.editor
        });
        n.removeEvents();
        if (n.rangeDom) {
          document.body.removeChild(n.rangeDom);
        }
        n.rangeDom = null;
        n.editor = null;
        n.tablePropsMap = null;
        n.instanceManager.clear();
      };
      n.pickRowColDelta = function (e, t, r) {
        var i;
        var o = new zoneDeltaClasses.ZoneDelta({
          zoneType: e,
          zoneId: t
        });
        var a = (i = n.editor.getContentState().getZoneState(t)) === null || i === undefined ? undefined : i.getContent();
        if (a) {
          a.forEach(function (e) {
            var n = (e == null ? undefined : e.insert)?.id;
            if (n && r.has(n)) {
              o.push(e);
            }
          });
        }
        return o;
      };
      n.handleContentChange = function (e) {
        var t;
        var r = e.changes;
        var i = e.deltaSet;
        var a = e.options.isRemote;
        var s = r[zeroConstantModule_1.versionValue];
        if (s && !a) {
          var l = n.editor;
          var u = [];
          var c = [];
          var h = l.getContentState();
          var d = (t = h == null ? undefined : h.getZoneManager) === null || t === undefined ? undefined : t.call(h);
          s.forEach(function (e) {
            var t;
            var r;
            var i = e.deletes;
            var a = e.inserts;
            function s(e) {
              var t = e.getOps().find(function (e) {
                return e.attributes && editorTableUtils.tableTypeAce in e.attributes;
              });
              if (!t) {
                return "continue";
              }
              var r = typescriptHelpers_1.readIterator(t.attributes[editorTableUtils.tableTypeAce].split(" "), 2);
              var n = r[0];
              var i = r[1];
              u.push(tableCellIdUtils.createTableClassName(n, i));
              var a = e.getAttributes();
              ((d == null ? undefined : d.getZoneIdsByAttributes(a)) || []).forEach(function (t) {
                var r = h.getZoneState(t);
                if (!r) {
                  h.addZone(t);
                }
                if (!(r == null ? undefined : r.parent) && d != null) {
                  d.update(t, e);
                }
              });
            }
            try {
              var l = typescriptHelpers_1.getValues(a);
              var f = l.next();
              for (; !f.done; f = l.next()) {
                var A = f.value;
                s(A);
              }
            } catch (e) {
              t = {
                error: e
              };
            } finally {
              try {
                if (f && !f.done && (r = l.return)) {
                  r.call(l);
                }
              } finally {
                if (t) {
                  throw t.error;
                }
              }
            }
            c.push.apply(c, typescriptHelpers_1.spreadArray(n.getTableInstanceOfLines(i)));
          });
          var f = new deltaSetCore.DeltaSet();
          if (c.length) {
            c.forEach(function (e) {
              if (!u.includes(e.getTableId()) && e) {
                e.getDeleteInnerZoneDeltaSet().forEach(function (e, t) {
                  if (!i.get(t)) {
                    f = f.compose(e);
                  }
                });
              }
            });
            if (Object.keys(f.deltas).length) {
              n.editor.getContentState().apply(f);
            }
          }
        }
      };
      n.editor = r.editor;
      n.getTdContentNode = r.getTdContentNode;
      n.registerZoneRule();
      editorTableUtils.safeCallFunction("tableInit", r, n);
      n.tableCollector = new editorTableUtils.TableAttrCollector();
      n.bindEvents();
      n.createRangeDom();
      n.instanceManager = new em(n.editor);
      n.editor.registerCommand(t.KEY, function () {
        n.doInsertTable({});
      });
      n.onAlinesInited();
      return n;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.match = function (e) {
      return e === "aceTable";
    };
    r.createRangeDom = function () {
      this.rangeDom = document.createElement("div");
      this.rangeDom.innerText = "rangeDom";
      this.rangeDom.style.height = "0";
      this.rangeDom.style.overflow = "hidden";
      document.body.appendChild(this.rangeDom);
    };
    r.on = function (e, t) {
      var r = this.editor;
      if (e === "afterPasteInsert" || e === "afterCopy" || e === "insertTable" || e === "horzResizeStart" || e === "horzResizeEnd" || e === "removeColOrRow" || e === "aceBlur" || e === "headerMouseDown") {
        r.on(e, t);
      }
    };
    r.off = function (e, t) {
      var r = this.editor;
      if (e === "afterPasteInsert" || e === "afterCopy" || e === "insertTable" || e === "horzResizeStart" || e === "horzResizeEnd" || e === "removeColOrRow" || e === "aceBlur" || e === "headerMouseDown") {
        r.off(e, t);
      }
    };
    r.isInSameMergedCell = function (e) {
      var t = this;
      if (e.length <= 1) {
        return false;
      }
      var r = e.map(function (e) {
        var r = t.instanceManager.getInstanceBySubZoneId(e);
        return r && r.getMergedCellIdForZoneId(e);
      });
      return r.every(function (e) {
        return !!e && e === r[0];
      });
    };
    r.isMergedCell = function (e) {
      var t = this.instanceManager.getInstanceBySubZoneId(e);
      return !!t && !!t.getMergedCellIdForZoneId(e);
    };
    r.doMergeCell = function () {
      var e = this.instanceManager.getInstanceWithSelected();
      if (e) {
        e.mergeCells();
      }
    };
    r.doUnMergeCell = function () {
      var e = this.instanceManager.getInstanceWithSelected();
      if (e) {
        e.unMergeCells();
      }
    };
    r.copyTable = function () {
      if (!userAgentDetect.userAgentInfo.isIPad || !userAgentDetect.userAgentInfo.isBytedanceApp) {
        this.triggerCopyCutEventManual("copy");
      }
      this.editor.call("afterCopy", this.options);
      return true;
    };
    r.cutTable = function () {
      if (!userAgentDetect.userAgentInfo.isIPad || !userAgentDetect.userAgentInfo.isBytedanceApp) {
        this.triggerCopyCutEventManual("cut");
      }
      return true;
    };
    r.triggerCopyCutEventManual = function (e) {
      var t = this.editor;
      var r = document.createElement("textarea");
      var n = userAgentDetect.userAgentInfo.isIPad ? t.getOuterContainer() : document.body;
      n.appendChild(r);
      r.addEventListener(e, this.listener);
      r.style.opacity = "0";
      r.value = " ";
      r.focus();
      r.select();
      document.execCommand(e);
      r.removeEventListener(e, this.listener);
      n.removeChild(r);
    };
    r.registerZoneRule = function () {
      var e = this.editor.getContentState();
      e.getZoneManager().registerZoneRule(editorTableUtils.tableTypeAce, function (t) {
        var r;
        var n;
        var i = eu(t);
        if (!i) {
          return [];
        }
        var a = i.rowId;
        var s = i.colId;
        var l = (r = e.getZoneState(a)) === null || r === undefined ? undefined : r.getContent();
        var u = (n = e.getZoneState(s)) === null || n === undefined ? undefined : n.getContent();
        if (!l || !u) {
          return [];
        }
        var c = ei(l.ops.map(function (e) {
          return e.insert?.id || "";
        }).filter(Boolean), u.ops.map(function (e) {
          return e.insert?.id || "";
        }).filter(Boolean));
        return typescriptHelpers_1.spreadArray([a, s], c);
      });
    };
    r.replaceVectorRange = function (e, t, r, n, i) {
      var o = new zoneDeltaClasses.ZoneDelta({
        zoneId: t,
        zoneType: e ? documentOperationConstants.structureTypes.Row : documentOperationConstants.structureTypes.Column
      }).retain(r).delete(n - r);
      var a = 0;
      for (; a < i; a++) {
        o.insert(e ? tableCellIdUtils.createRowId() : tableCellIdUtils.createColId(), {
          colWidth: "" + editorTableUtils.minTableSize
        });
      }
      return this.editor.getContentState().apply(o);
    };
    r.bindEvents = function () {
      var e = this.editor;
      e.on(editorTableUtils.tableActionTypes.COPY, this.copyTable);
      e.on(editorTableUtils.tableActionTypes.CUT, this.cutTable);
      e.on(editorEventConstants.editorEventTypes.WILL_DELETE_FROM_CUT, this.handleWillDeleteFromCut);
      e.on(editorEventConstants.editorEventTypes.DID_PASTE, this.handleDidPaste);
      e.on(editorEventConstants.editorEventTypes.PASTE, this.handlePaste);
      e.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
      e.on(editorEventConstants.editorEventTypes.KEYDOWN, this.handleKeyDown, 100);
      e.on(editorEventConstants.editorEventTypes.EXEC_COMMAND, this.handleTriggerCommand);
      e.on(editorEventConstants.editorEventTypes.SELECTION_CHANGE, this.handleSelectionChanged);
      document.addEventListener("mousedown", this.handleSelectTableMouseDown);
      document.addEventListener("mouseup", this.handleSelectTableMouseUp);
      e.on("mousedown", this.documentEventHandler);
      e.on("focus", this.documentEventHandler);
      e.on("blur", this.documentEventHandler);
      this.bindIpadSafariEvents();
      e.on("deleteWordBackward", this.handleDeleteWordBackward);
    };
    r.bindIpadSafariEvents = function () {
      if (userAgentDetect.userAgentInfo.isIPad) {
        document.addEventListener("mousedown", this.handleTableOuterMouseDown);
        document.addEventListener("mouseup", this.handleTableOuterMouseUp);
      }
    };
    r.removeIpadSafariEvents = function () {
      if (userAgentDetect.userAgentInfo.isIPad) {
        document.removeEventListener("mousedown", this.handleTableOuterMouseDown);
        document.removeEventListener("mouseup", this.handleTableOuterMouseUp);
      }
    };
    r.aceRegisterNonScrollableEditEvents = function () {
      return Object.values(editorTableUtils.tableCommands);
    };
    r.onAlinesInited = function () {
      var e;
      var t;
      var r = this.editor.getContentState();
      var n = r.getZoneState(zeroConstantModule_1.versionValue);
      var i = [];
      try {
        var a = typescriptHelpers_1.getValues(n);
        var s = a.next();
        for (; !s.done; s = a.next()) {
          var l = s.value;
          (function (e) {
            var t = e.getAttributes().toMap();
            if (editorTableUtils.tableTypeAce in t) {
              var n = t[editorTableUtils.tableTypeAce];
              var a = typescriptHelpers_1.readIterator(n.split(" "), 2);
              var s = a[0];
              var l = a[1];
              q(r, s).forEach(function (e) {
                q(r, l).forEach(function (t) {
                  var r = tableCellIdUtils.createCellId(e, t);
                  i.push(r);
                });
              });
            }
          })(l);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (s && !s.done && (t = a.return)) {
            t.call(a);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      this.editor.call(editorTableUtils.tableEventNames.TABLE_REGISTER_ZONE_END, i);
    };
    r.renderLine = function (e) {
      if (e.lineState.getEntities([["aceTable", undefined]]).length) {
        e.editable = false;
      }
      return null;
    };
    r.render = function (e) {
      var t;
      var r = e.children;
      var n = e.attributes;
      var i = e.index;
      var a = e.zoneId;
      var s = editorTableUtils.tableTypeAce + "-" + n.aceTable;
      this.tableSpanClsCollect.push(s);
      this.tableSpanClsCollectPersist.push(s);
      var l = n.aceTableBorder;
      var u = eo(s);
      var c = (t = this.editor.getContentState().getZoneState(a)) === null || t === undefined ? undefined : t.getLine(i);
      if (!u || !c) {
        return e.children;
      }
      var h = c.getKey();
      var d = this.getPropsByTableId(u);
      this.tablePropsMap[h] = typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, d), {
        aceTableBorder: l === undefined ? "" : l
      });
      var f = [];
      if (n[editorTableUtils.magicObjectTypes["0"]]) {
        f.push(n[editorTableUtils.magicObjectTypes["0"]]);
      }
      if (n[editorTableUtils.widthFixedConst] !== undefined) {
        f.push(editorTableUtils.widthFixedConst);
      }
      var A = n[editorTableUtils.tableTypeAce];
      f.push(editorTableUtils.tableTypeAce + "-" + A);
      f.push("ace-table-mount-point");
      f.push(z(A));
      e.class += " " + f.join(" ");
      if (this.tablePropsMap[h]) {
        return this.mountTable(c);
      } else {
        return r;
      }
    };
    r.getPropsByTableId = function (e) {
      var t;
      var r;
      var n;
      var i;
      var c = this.editor;
      var h = this.options;
      var d = [];
      var f = [];
      var A = [];
      var g = [];
      var p = c.getContentState();
      var m = p.getZoneState(e.rowId);
      try {
        var y = typescriptHelpers_1.getValues(m.getContent().ops);
        var v = y.next();
        for (; !v.done; v = y.next()) {
          var b = v.value;
          var w = b?.insert?.id;
          if (w) {
            d.push(w);
          }
          A.push((b == null ? undefined : b.attributes) || {});
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (v && !v.done && (r = y.return)) {
            r.call(y);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      var C = p.getZoneState(e.colId);
      try {
        var E = typescriptHelpers_1.getValues(C.getContent().ops);
        var I = E.next();
        for (; !I.done; I = E.next()) {
          var b = I.value;
          var w = b?.insert?.id;
          if (w) {
            f.push(w);
          }
          g.push((b == null ? undefined : b.attributes) || {});
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          if (I && !I.done && (i = E.return)) {
            i.call(E);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      var B = h.width;
      var x = h.height;
      var D = h.isScrollable;
      var S = h.cellMinHeight;
      var k = h.toolBarScale;
      var _ = h.cellMinWidth;
      var T = h.defaultWidth;
      var Q = h.defaultHeight;
      var R = h.disableHorzResize;
      var F = h.disableVertResize;
      return {
        contentEditable: c.isEditable(),
        scrollable: D || false,
        zoneIdToInitialHTML: {},
        rowsZoneId: e.rowId,
        colsZoneId: e.colId,
        rowIds: d,
        colIds: f,
        rowAttribs: A,
        colAttribs: g,
        isDiff: false,
        diffAttribs: [],
        editor: this.editor,
        width: B,
        height: x,
        toolBarScale: k || 1,
        minCellWidth: _ || editorTableUtils.tableHeightConst,
        minCellHeight: S || editorTableUtils.tablePaddingConst,
        defaultCellHeight: Q,
        defaultCellWidth: T,
        disableHorzResize: R || false,
        disableVertResize: F || false,
        rangeDom: this.rangeDom,
        tableOptions: h
      };
    };
    r.unBindTableMouseEvent = function () {
      this.undelegateTableMouseList.forEach(function (e) {
        return e && e();
      });
      this.undelegateTableMouseList = [];
    };
    r.unmountTables = function (e, t) {
      var r;
      var n;
      var i = this;
      if (t === undefined) {
        t = false;
      }
      if (e.some(function (e) {
        return i.instanceManager.getInstanceByLineState(e);
      })) {
        this.editor.call("table:delete", {
          isRemote: t
        });
        try {
          var a = typescriptHelpers_1.getValues(e);
          var s = a.next();
          for (; !s.done; s = a.next()) {
            var l = s.value;
            var u = this.instanceManager.getInstanceByLineState(l);
            if (u && (this.instanceManager.unregisterInstance(l), !u.isTableMounted())) {
              continue;
            }
          }
        } catch (e) {
          r = {
            error: e
          };
        } finally {
          try {
            if (s && !s.done && (n = a.return)) {
              n.call(a);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
      }
    };
    r.lineDidMount = function (e) {
      var t;
      var r = e.lineState;
      if (editorTableUtils.tableTypeAce in r.getAttributes().toMap()) {
        var n = this.instanceManager.getInstanceByLineState(r);
        if (n) {
          try {
            this.editor.call("tableDidRender", {
              element: (t = r._node) === null || t === undefined ? undefined : t.querySelector(".ace-table-mount-point"),
              zoneIds: n.getAllChildZones(),
              lineState: r
            });
          } catch (e) {}
        }
      }
    };
    r.lineDidUpdate = function (e) {
      var t = e.data;
      var r = t.prev;
      var n = t.curr;
      var i = editorTableUtils.tableTypeAce in n.getAttributes().toMap();
      var o = editorTableUtils.tableTypeAce in r.getAttributes().toMap();
      if ((o || i) && o && !i) {
        return this.unmountTables([r]);
      }
    };
    r.lineWillUnmount = function (e) {
      var t = e.lineState;
      if (editorTableUtils.tableTypeAce in t.getAttributes().toMap()) {
        return this.unmountTables([t]);
      }
    };
    r.handleDidPaste = function () {
      if (this.isTableLine(this.editor.getContentState().getActiveZone().getZoneId(), this.lineOfTableWillPaste)) {
        this.lineOfTableWillPaste = 0;
        this.editor.call("afterPasteInsert");
      }
    };
    r.handlePaste = function () {
      this.tableCollector.flush();
    };
    r.deserialize = function (e) {
      var t;
      var r;
      var n;
      var i;
      var a = e.node;
      var s = e.deltaSet;
      if (!(a instanceof HTMLElement)) {
        return s;
      }
      var l = a.tagName.toLowerCase();
      if (["td", "tr", "col", "colgroup", "th"].includes(l)) {
        this.tableCollector.collect(a);
      }
      if (["td", "th"].includes(l) && this.tableCollector.currentMovement) {
        var u = [];
        var h = this.tableCollector.getCurrentZoneId();
        var d = s.get(zeroConstantModule_1.versionValue);
        if (d && d instanceof contentStructureDelta.ContentDelta) {
          s.delete(zeroConstantModule_1.versionValue);
          u.push.apply(u, typescriptHelpers_1.spreadArray(d.ops));
        }
        if (!u.length) {
          return new deltaSetCore.DeltaSet().concat(new contentStructureDelta.ContentDelta({
            zoneId: h
          }).insertEnter());
        }
        var f = s.concat(new contentStructureDelta.ContentDelta({
          zoneId: h,
          ops: u
        }));
        if (l === "th") {
          return editorClipboardManager.addAttrsToDelta(f, h, {
            bold: "true"
          });
        } else {
          return f;
        }
      }
      if (l === "table") {
        var A = this.tableCollector;
        var y = A.colsZoneId;
        var v = A.rowsZoneId;
        var b = A.colIds;
        var w = A.rowIds;
        var C = A.colAttribs;
        var E = A.rowAttribs;
        var I = this.options.isCustomBorder;
        if (!y || !v) {
          return s;
        }
        var B = a.style.border;
        var x = a.getAttribute("border");
        var D = new contentStructureDelta.ContentDelta().insert("*", {
          aceTable: v + " " + y,
          aceTableBorder: !I || B !== "none" && (B || x !== "0" && x) ? "" : "none"
        });
        s = s.compose(D);
        var S = new zoneDeltaClasses.ColumnDelta({
          zoneId: y
        });
        try {
          var k = typescriptHelpers_1.getValues(b.entries());
          var _ = k.next();
          for (; !_.done; _ = k.next()) {
            var T = typescriptHelpers_1.readIterator(_.value, 2);
            var R = T[0];
            var F = T[1];
            S.insert(F, typescriptHelpers_1.assign({}, C[R]));
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (_ && !_.done && (r = k.return)) {
              r.call(k);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        s = s.compose(S);
        var L = new zoneDeltaClasses.RowDelta({
          zoneId: v
        });
        try {
          var O = typescriptHelpers_1.getValues(w.entries());
          var N = O.next();
          for (; !N.done; N = O.next()) {
            var M = typescriptHelpers_1.readIterator(N.value, 2);
            var R = M[0];
            var P = M[1];
            L.insert(P, typescriptHelpers_1.assign({}, E[R]));
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            if (N && !N.done && (i = O.return)) {
              i.call(O);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
        s = s.compose(L);
        this.tableCollector.dummyCellIds.forEach(function (e) {
          s = s.concat(new contentStructureDelta.ContentDelta({
            zoneId: e
          }).insertEnter());
        });
        this.tableCollector.flush();
      }
      return s;
    };
    r.editorWillPaste = function (e) {
      var n = this.editor.selection.getSelection();
      var i = n.toPosition();
      this.updateTableIdsIfNecessary(e.deltaSet, e.zoneId);
      this.normalizeTableDelta(e.deltaSet, e.zoneId);
      if (!ec(i.zoneId)) {
        var a = e.deltaSet.get(e.zoneId);
        if (a.ops[a.length() - 1]?.attributes?.aceTable) {
          a.insertEnter();
        }
        editorTableUtils.removeCustomAttrs(e.deltaSet, this.options);
        return e.deltaSet;
      }
      var s = false;
      var l = false;
      var u = e.deltaSet;
      var c = e.zoneId;
      var h = u.get(c);
      function d(e) {
        if (e.insert) {
          return e.insert === "*" && e.attributes?.aceTable;
        }
      }
      h.forEach(function (e, t) {
        if (e.insert) {
          if (d(e)) {
            s = true;
          } else if (!e.attributes?.lmkr || !h.ops[t + 1] || !d(h.ops[t + 1])) {
            l = true;
          }
        }
      });
      if (!s) {
        return e.deltaSet;
      }
      if (l) {
        var f = h.reduce(function (e, t) {
          if (d(t)) {
            return e;
          } else {
            return e.push(t);
          }
        }, new contentStructureDelta.ContentDelta({
          zoneId: c
        }));
        return new deltaSetCore.DeltaSet().concat(f);
      }
      e.preventDefault();
      var A = this.instanceManager.getInstanceBySubZoneId(i.zoneId);
      if (A) {
        A.pasteCellsOntoTable(u, c, e.isInternalPaste);
      }
      var m = n.start.zoneId;
      var y = this.editor.getContentState().getZoneState(m);
      if (y) {
        var v = y.totalWidth() - 1;
        var b = y.offsetToPoint(v);
        var w = typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, b), {
          zoneId: m
        });
        this.editor.selection.setSelection({
          start: w,
          end: w
        });
      }
      return e.deltaSet;
    };
    r.handleTriggerCommand = function (e) {
      var t;
      var r;
      var n;
      var i;
      var a;
      var l;
      var h;
      var A = this.instanceManager.getInstanceWithSelected();
      var g = e.name;
      var p = e.data;
      if (editorTableUtils.formatTypes.includes(g) && A && (p == null || !p.isTriggerByTable) && p) {
        var m = A.getSelectStatus();
        var y = true;
        var v = {};
        var b = this.editor.getContentState().schema.get(g)?.lmkr;
        var w = p.value;
        try {
          var C = typescriptHelpers_1.getValues(m);
          var E = C.next();
          for (; !E.done; E = C.next()) {
            var I = E.value;
            var B = undefined;
            var x = true;
            v[I] = true;
            var D = (l = this.editor.getContentState().getZoneState(I)) === null || l === undefined ? undefined : l.getContent();
            var S = (D == null ? undefined : D.ops) || [];
            var k = 0;
            for (; k < S.length; k++) {
              var _ = S[k];
              var T = _.insert === "\n" || _.attributes?.lmkr;
              if (b) {
                var Q = !_.attributes?.[g] || !((h = _.attributes) === null || h === undefined ? undefined : h[g].includes(w));
                var R = !_.attributes?.lmkr;
                x = x && R;
                var F = k === S.length - 1 && x;
                if (R && !F) {
                  continue;
                }
                if (Q || F) {
                  y = false;
                  v[I] = false;
                  break;
                }
              } else {
                if (T) {
                  continue;
                }
                var L = _.attributes?.[g];
                if (w) {
                  if (w !== L) {
                    y = false;
                    v[I] = false;
                    break;
                  }
                } else {
                  if (B !== undefined && B !== L) {
                    y = false;
                    v[I] = false;
                    break;
                  }
                  B = L || "";
                }
              }
            }
            if (B === "") {
              y = false;
              v[I] = false;
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (E && !E.done && (r = C.return)) {
              r.call(C);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        var O = null;
        var N = [];
        var M = this.editor.undoModule;
        try {
          var P = typescriptHelpers_1.getValues(m);
          var z = P.next();
          for (; !z.done; z = P.next()) {
            var I = z.value;
            if (!v[I] && !y || v[I] && y) {
              w ||= y ? "false" : "true";
              A.setSelectionOntoCell(I, {
                start: [0, 0],
                end: [-1, -1]
              }, false);
              this.editor.execCommand(g, typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, p), {
                value: w,
                isTriggerByTable: true
              }));
              var H = M.getNthUndoRecordFromTop(0);
              if (H) {
                if (O) {
                  N.push(H);
                } else {
                  O = M.getNthUndoRecordFromTop(0);
                }
              }
            }
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            if (z && !z.done && (i = P.return)) {
              i.call(P);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
        if (O && N.length > 0) {
          (a = this.editor.undoModule).mergeRecords.apply(a, typescriptHelpers_1.spreadArray([O], N));
        }
        e.preventEvent();
      }
    };
    r.handleTabKey = function (e) {
      var t = this.editor.selection.getSelection().start.zoneId;
      if (!ec(t)) {
        return false;
      }
      var r = this.instanceManager.getInstanceBySubZoneId(t);
      return !!r && r.handleTabKey(e);
    };
    r.handleDeleteTableText = function (e) {
      var t = e.getSelectStatus();
      this.doDeleteTableCellText(t);
      return true;
    };
    r.isTableLine = function (e, t) {
      var r;
      var n = (r = this.editor.getContentState().getZoneState(e)) === null || r === undefined ? undefined : r.getLine(t);
      return n && editorTableUtils.tableTypeAce in n.getAttributes().toMap();
    };
    r.isSkipLine = function (e, t) {
      var r;
      var n = (r = this.editor.getContentState().getZoneState(e)) === null || r === undefined ? undefined : r.getLine(t);
      var i = (n == null ? undefined : n.getAttributes().toMap()) || {};
      return n && ["list", "blockquote", "text-indent"].find(function (e) {
        return i[e];
      });
    };
    r.handleCopy = function () {
      return !!this.instanceManager.getInstanceWithSelected() && this.copyTable();
    };
    r.handleCursorIntoTable = function (e) {
      var t = this.editor;
      var r = t.selection.getSelection().start;
      var n = r.line;
      var i = r.offset;
      var o = r.zoneId;
      var a = t.getContentState().getZoneState(o);
      if (!a) {
        return false;
      }
      if (e === keyboardEventUtils.KeyCode.Down) {
        var s = n + 1;
        return !(s >= a.length()) && this.stepIntoTable(o, s, editorTableUtils.cornerPositions.TOP_LEFT);
      }
      if (e === keyboardEventUtils.KeyCode.Up) {
        var s = n - 1;
        return !(s < 0) && this.stepIntoTable(o, s, editorTableUtils.cornerPositions.BOTTOM_LEFT);
      }
      if (e === keyboardEventUtils.KeyCode.Right) {
        var l = i >= a.getLine(n).length() - 1;
        var s = n + 1;
        return !!l && !(s >= a.length()) && this.stepIntoTable(o, s, editorTableUtils.cornerPositions.TOP_LEFT);
      }
      if (e === keyboardEventUtils.KeyCode.Left) {
        var s = n - 1;
        return i === 0 && !(s < 0) && this.stepIntoTable(o, s, editorTableUtils.cornerPositions.BOTTOM_RIGHT);
      }
      return false;
    };
    r.getCellIdFromRowAndCol = function (e, t) {
      return tableCellIdUtils.createCellId(e, t);
    };
    r.getRowAndColIdFromAttributeValue = function (e) {
      return eu(e);
    };
    r.getRowAndColIdFromTableValue = function (e) {
      return ea(e);
    };
    r.getSortedTableCellIdsByTableIdFromVectorReps = function (e, t) {
      return es(e, t);
    };
    r.sliceZone = function (e) {
      var t = e.deltaSet;
      var r = e.range;
      var n = r.start;
      var i = r.end;
      if (n.zoneId === zeroConstantModule_1.versionValue) {
        var a = this.editor.getContentState();
        var s = a.getZoneState(n.zoneId);
        if (!s) {
          return t;
        }
        s.getEntities({
          start: n,
          end: i
        }, function (e, t) {
          return e === "aceTable" && !!t;
        }).forEach(function (e) {
          var r = typescriptHelpers_1.readIterator(e.attributes.aceTable.split(" "), 2);
          var n = r[0];
          var i = r[1];
          var s = a.getZoneState(n);
          var l = a.getZoneState(i);
          if (s && l) {
            var u = s.getContent().ops;
            var h = l.getContent().ops;
            function d(e) {
              return e.map(function (e) {
                return {
                  insert: e.insert ? typescriptHelpers_1.assign({}, e.insert) : undefined,
                  attributes: e.attributes ? typescriptHelpers_1.assign({}, e.attributes) : undefined
                };
              });
            }
            var f = new zoneDeltaClasses.ZoneDelta({
              zoneType: documentOperationConstants.structureTypes.Row,
              zoneId: s.getZoneId(),
              ops: d(u)
            });
            var A = new zoneDeltaClasses.ZoneDelta({
              zoneType: documentOperationConstants.structureTypes.Column,
              zoneId: l.getZoneId(),
              ops: d(h)
            });
            t.add(s.getZoneId(), f);
            t.add(l.getZoneId(), A);
            var g = a._getRowColIds(n, i);
            var v = g.rowIds;
            var b = g.colIds;
            v.forEach(function (e) {
              b.forEach(function (r) {
                var n = "x" + e + "x" + r;
                var i = a.getZoneState(n);
                if (i) {
                  var o = i.length() - 1;
                  var s = i.getLine(o).getModelText().length;
                  t.add(n, new contentStructureDelta.ContentDelta({
                    zoneId: n,
                    ops: editorClipboardManager.sliceLineContent(i, {
                      zoneId: n,
                      line: 0,
                      offset: 0
                    }, {
                      zoneId: n,
                      line: o,
                      offset: s
                    })
                  }));
                }
              });
            });
          }
        });
      }
      return t;
    };
    r.editorWillCopy = function (e) {
      e.deltaSet = this.sliceZone(e);
      if (e.deltaSet.get(zeroConstantModule_1.versionValue)) {
        this.updateTableIdsIfNecessary(e.deltaSet, zeroConstantModule_1.versionValue);
      }
      var t = this.editor;
      var r = this.instanceManager.getInstanceWithSelected();
      if (r) {
        var n = r.getSelectStatus();
        if (n && n.length > 0) {
          var i = new deltaSetCore.DeltaSet();
          var o = new Set();
          var a = new Set();
          n.forEach(function (e) {
            var r;
            var n = eh(e);
            var s = n.rowId;
            var l = n.colId;
            o.add(s);
            a.add(l);
            var u = (r = t.getContentState().getZoneState(e)) === null || r === undefined ? undefined : r.getContent();
            if (u) {
              i = i.compose(u);
            }
          });
          var s = r.getRowsZoneId();
          var l = this.pickRowColDelta(documentOperationConstants.structureTypes.Row, s, o);
          i = i.compose(l);
          var u = r.getColsZoneId();
          var c = this.pickRowColDelta(documentOperationConstants.structureTypes.Column, u, a);
          i = i.compose(c);
          var d = r.getTableBorder();
          var f = new contentStructureDelta.ContentDelta({
            zoneId: zeroConstantModule_1.versionValue
          }).insert("*", {
            aceTable: s + " " + u,
            aceTableBorder: d
          });
          i = i.compose(f);
          this.updateTableIdsIfNecessary(i, zeroConstantModule_1.versionValue);
          e.deltaSet = i;
          e.range = new editorRangeZoneClass.EditorRangeZone({
            editor: this.editor,
            start: {
              line: 0,
              offset: 0,
              zoneId: zeroConstantModule_1.versionValue
            },
            end: {
              line: 0,
              offset: 0,
              zoneId: zeroConstantModule_1.versionValue
            }
          });
        }
      }
    };
    r.serialize = function (e) {
      var i = this;
      var a = this.options;
      var s = a.isResponsiveWidth;
      var l = a.cellMinHeight;
      var u = a.cellMinWidth;
      var c = a.defaultWidth;
      var h = e.type;
      var f = e.op;
      var A = e.deltaSet;
      var g = e.zoneId;
      var p = (f == null ? undefined : f.attributes)?.aceTable;
      var m = (f == null ? undefined : f.attributes)?.aceTableBorder === "none";
      if (h === treeNodeTypes.nodeTypes.LEAF && p) {
        var y = document.createElement("table");
        y.style.borderCollapse = "collapse";
        y.style.wordBreak = "break-word";
        var v = (f == null ? undefined : f.attributes)?.author;
        y.classList.add("ace-table");
        var b = s;
        if (v) {
          y.classList.add(v ? "author-" + v.replace(/[^a-y0-9]/g, function (e) {
            if (e === ".") {
              return "-";
            } else {
              return "z" + e.charCodeAt(0) + "z";
            }
          }) : "");
        }
        y.dataset.aceTableColWidths = "";
        var w = typescriptHelpers_1.readIterator(p.split(" "), 2);
        var C = w[0];
        var E = w[1];
        var I = A.get(E);
        var B = A.get(C);
        var x = [];
        I.forEach(function (e) {
          x.push((e == null ? undefined : e.attributes)?.colWidth || "");
          if ((e == null ? undefined : e.attributes)?.colWidth) {
            b = false;
          }
        });
        y.style.width = b ? "100%" : "auto";
        if (b) {
          y.setAttribute("width", "100%");
        }
        var D = document.createElement("colgroup");
        if (!b) {
          x.forEach(function (e) {
            var t = document.createElement("col");
            var r = c ? String(c) : "";
            t.setAttribute("width", e || r || String(editorTableUtils.minTableSize));
            D.appendChild(t);
            y.dataset.aceTableColWidths += e + ";";
          });
        }
        if (!b) {
          y.appendChild(D);
        }
        if (m) {
          y.setAttribute("border", "0");
        } else {
          y.setAttribute("border", "1");
          y.style.border = this.options.defaultBorderStyle || editorTableUtils.defaultBorderStyle;
        }
        editorTableUtils.processTableStruct(B, I, c ?? editorTableUtils.minTableSize).forEach(function (t) {
          var r = y.insertRow();
          var n = (t[0] || {}).rowHeight || l || editorTableUtils.tablePaddingConst;
          r.style.height = n + "px";
          t.forEach(function (t) {
            var n;
            var a = t.zoneId;
            var s = t.colSpan;
            var h = t.rowSpan;
            var d = t.backgroundColor;
            var f = t.fontFamily;
            var A = t.fontWeight;
            var g = t.fontSize;
            var p = t.border;
            var y = t.rowHeight;
            var v = t.colWidth;
            var w = t.valign;
            var C = t.padding;
            if (s !== 0 && h !== 0) {
              e.zoneId = a;
              var E = typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, e), {
                customParams: Object.assign({}, e == null ? undefined : e.customParams, {
                  isInTd: true
                })
              });
              n = i.getTdContentNode ? i.getTdContentNode(E) : i.editor.clipboard.serialize(E).node;
              var I = r.insertCell();
              if (s !== 1) {
                I.colSpan = s;
              }
              if (h !== 1) {
                I.rowSpan = h;
              }
              if (y) {
                I.style.height = y + "px";
              }
              if (d) {
                I.style["background-color"] = d;
              }
              if (f) {
                I.style["font-family"] = f;
              }
              if (A) {
                I.style["font-weight"] = A;
              }
              if (g) {
                I.style["font-size"] = g;
              }
              if (!b) {
                I.style["min-width"] = (v || u || editorTableUtils.tableHeightConst) + "px";
              }
              if (!b) {
                I.style.width = (v || c || editorTableUtils.minTableSize) + "px";
              }
              I.style["min-height"] = (y || l || editorTableUtils.tablePaddingConst) + "px";
              I.style.boxSizing = "border-box";
              I.style.padding = C || "9px 8px";
              I.style.verticalAlign = w || "top";
              if (p) {
                Object.keys(p).forEach(function (e) {
                  I.style["border-" + e] = p[e];
                });
              } else if (!m) {
                I.style.border = i.options.defaultBorderStyle || editorTableUtils.defaultBorderStyle;
              }
              I.appendChild(n);
            }
          });
        });
        return Object.assign(e, {
          node: y,
          zoneId: g
        });
      }
      return e;
    };
    r.getTableInstanceOfLines = function (e) {
      var t;
      var r;
      var n = [];
      try {
        var i = typescriptHelpers_1.getValues(e);
        var a = i.next();
        for (; !a.done; a = i.next()) {
          var s = a.value;
          var l = this.instanceManager.getInstanceByLineState(s);
          if (l) {
            n.push(l);
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (a && !a.done && (r = i.return)) {
            r.call(i);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return n;
    };
    t.KEY = "table";
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "createRangeDom", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "on", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "off", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "doMergeCell", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "doUnMergeCell", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "copyTable", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "cutTable", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "triggerCopyCutEventManual", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "replaceVectorRange", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "bindEvents", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "renderLine", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "render", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "getPropsByTableId", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleDidPaste", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handlePaste", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "deserialize", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator(), editorPluginManager.createPriority(9999)], t.prototype, "editorWillPaste", null);
    typescriptHelpers_1.decorate([instanceDecoratorUtil.instanceDecorator()], t.prototype, "handleTriggerCommand", null);
    typescriptHelpers_1.decorate([editorPluginManager.createPriority(0)], t.prototype, "editorWillCopy", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    getMarginValue: function () {
      return ey;
    }
  });
}