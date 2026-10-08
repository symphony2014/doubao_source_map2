// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'defaultBorderStyle'
// - Renamed export 'D' to 'deleteSourceTypes'
// - Renamed export 'E' to 'magicObjectTypes'
// - Renamed export 'F' to 'defaultInsertPos'
// - Renamed export 'G' to 'cornerPositions'
// - Renamed export 'H' to 'tableConstants'
// - Renamed export 'I' to 'insertTableCmd'
// - Renamed export 'J' to 'minTableSize'
// - Renamed export 'K' to 'tableWidthConst'
// - Renamed export 'L' to 'tableHeightConst'
// - Renamed export 'M' to 'tablePaddingConst'
// - Renamed export 'N' to 'tableTypeAce'
// - Renamed export 'O' to 'minCellSize'
// - Renamed export 'P' to 'ignoreDomFlag'
// - Renamed export 'Q' to 'tableActionTypes'
// - Renamed export 'R' to 'zeroString'
// - Renamed export 'S' to 'tableEventTypes'
// - Renamed export 'T' to 'TableAttrCollector'
// - Renamed export 'U' to 'tableEventNames'
// - Renamed export 'W' to 'widthFixedConst'
// - Renamed export 'Z' to 'tableCommands'
// - Renamed export 'a' to 'mathMin'
// - Renamed export 'a0' to 'colCountChangeEvent'
// - Renamed export 'a1' to 'uuidPrefix'
// - Renamed export 'a2' to 'tableCellType'
// - Renamed export 'a4' to 'editorShortcuts'
// - Renamed export 'a6' to 'tableSelectors'
// - Renamed export 'a7' to 'shortcutCode1'
// - Renamed export 'a8' to 'shortcutCode2'
// - Renamed export 'aa' to 'tablePropTypes'
// - Renamed export 'ad' to 'formatTypes'
// - Renamed export 'b' to 'deepCloneOrReturn'
// - Renamed export 'c' to 'clearSelection'
// - Renamed export 'd' to 'safeCallFunction'
// - Renamed export 'e' to 'safariMouseHandler'
// - Renamed export 'f' to 'findCellIndices'
// - Renamed export 'i' to 'isObjectType'
// - Renamed export 'm' to 'mathMax'
// - Renamed export 'n' to 'processTableStruct'
// - Renamed export 'o' to 'cleanDomNodes'
// - Renamed export 's' to 'checkLineCondition'
// - Renamed export 'v' to 'widthConstValue'
// - Renamed export 'w' to 'removeCustomAttrs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 447337
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var throttledArrayIntersection = require("throttled-array-intersection") /*id: 832949*/;
  var userAgentDetect = require("user-agent-detect") /*id: 68901*/;
  var colorThemeConstants = require("color-theme-constants") /*id: 561108*/;
  var editorFormatShortcuts = require("editor-format-shortcuts") /*id: 80260*/;
  var tableCellIdUtils = require("table-cell-id-utils") /*id: 693152*/;
  var reactPropTypesCore = require("react-prop-types-core") /*id: 165964*/;
  var g = function () {
    function e() {
      this.rowIndex = -1;
      this.colGroupIndex = -1;
      this.tempColAttribs = [];
      this.colIndex = -1;
      this.rowsZoneId = null;
      this.colsZoneId = null;
      this.rowIds = [];
      this.colIds = [];
      this.rowAttribs = [];
      this.colAttribs = [];
      this.dummyCellIds = [];
      this.currentMovement = 1;
    }
    var t = e.prototype;
    t.setColAttrib = function (e, t) {
      this.colAttribs[e] = this.colAttribs[e] || {};
      Object.assign(this.colAttribs[e], t);
    };
    t.setRowAttrib = function (e, t) {
      this.rowAttribs[e] = this.rowAttribs[e] || {};
      Object.assign(this.rowAttribs[e], t);
    };
    t.collect = function (e) {
      if (e instanceof HTMLTableColElement) {
        this.collectCol(e);
      }
      if (e instanceof HTMLTableCellElement) {
        this.collectCell(e);
        this.collectWidth(e);
        this.collectHeight(e);
        this.collectMergeCellAttrs(e);
        this.collectBackgroundColor(e);
        this.collectBorder(e);
        this.collectVAlign(e);
        this.collectPadding(e);
      }
      if (e instanceof HTMLTableRowElement) {
        this.collectHeight(e);
        this.carriageReturn();
      }
    };
    t.collectWidth = function (e) {
      var t = e.getAttribute("width");
      var r = this.colIndex;
      var n = this.colAttribs[r] || {};
      var i = this.tempColAttribs[r] || {
        mergeCol: this.currentMovement
      };
      var a = typescriptHelpers_1.assign({}, n);
      if (t && !a.colWidth && i.mergeCol === 1) {
        a.colWidth = t;
        this.setColAttrib(r, a);
        this.tempColAttribs[r] = typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, i), {
          mergeCol: this.currentMovement
        });
      }
    };
    t.collectHeight = function (e) {
      var t = parseInt(e.style.height || e.getAttribute("height") || "");
      var r = +(e.getAttribute("rowspan") || "1");
      if (t && !(r > 1)) {
        var n = this.rowIndex;
        var i = this.rowAttribs[n] || {};
        if (!(+i.rowHeight > t)) {
          var a = typescriptHelpers_1.assign({}, i);
          if (t) {
            a.rowHeight = "" + t;
            this.setRowAttrib(n, a);
          }
        }
      }
    };
    t.collectCell = function (e) {
      var n = this;
      if (this.rowIndex === -1) {
        this.carriageReturn();
      }
      this.colIndex++;
      while (this.rowAttribs[this.rowIndex]?.mergeCellID && this.colAttribs[this.colIndex]?.mergeCellID && this.colAttribs[this.colIndex].mergeCellID.split(",").filter(Boolean).some(function (e) {
        return (n.rowAttribs[n.rowIndex]?.mergeCellID).split(",").includes(e);
      })) {
        this.colIndex++;
      }
      var i = e.getAttribute("colspan") ? Number(e.getAttribute("colspan")) : 1;
      this.currentMovement = isNaN(i) ? 1 : i;
      if (this.currentMovement) {
        this.rowsZoneId ||= tableCellIdUtils.generateRowSessionId();
        this.colsZoneId ||= tableCellIdUtils.getMergeCellState();
        if (!this.rowIds[this.rowIndex]) {
          this.rowIds.push(tableCellIdUtils.createRowId());
        }
        if (!this.colIds[this.colIndex]) {
          this.colIds.push(tableCellIdUtils.createColId());
        }
      }
    };
    t.collectMergeCellAttrs = function (e) {
      var t;
      var r;
      var n = e.getAttribute("rowspan");
      var i = e.getAttribute("colspan");
      var o = n ? Number(n) : 0;
      var a = i ? Number(i) : 0;
      if (o > 1 || a > 1) {
        o = Math.max(o, 1);
        a = Math.max(a, 1);
        var l = tableCellIdUtils.generateRandomString(8);
        var u = 0;
        for (; u < o; u++) {
          this.setRowAttrib(this.rowIndex + u, ((t = {})[$.MERGE_CELL_ID] = this.getFinalMergeId(l, documentOperationConstants.structureTypes.Row, this.rowIndex + u), t));
          for (var c = 0; c < a; c++) {
            this.setColAttrib(this.colIndex + c, ((r = {})[$.MERGE_CELL_ID] = this.getFinalMergeId(l, documentOperationConstants.structureTypes.Column, this.colIndex + c), r));
            if (!this.rowIds[this.rowIndex + u]) {
              this.rowIds.push(tableCellIdUtils.createRowId());
            }
            if (!this.colIds[this.colIndex + c]) {
              this.colIds.push(tableCellIdUtils.createColId());
            }
            if (u !== 0 || c !== 0) {
              this.dummyCellIds.push(tableCellIdUtils.createCellId(this.rowIds[this.rowIndex + u], this.colIds[this.colIndex + c]));
            }
          }
        }
      }
    };
    t.collectBorder = function (e) {
      var t;
      var r;
      var n;
      var i;
      var l = e.style;
      var u = l.borderLeftWidth;
      var c = l.borderLeftStyle;
      var h = l.borderLeftColor;
      var d = l.borderLeft;
      var A = l.borderRightWidth;
      var g = l.borderRightStyle;
      var p = l.borderRightColor;
      var m = l.borderRight;
      var y = l.borderTopWidth;
      var v = l.borderTopStyle;
      var b = l.borderTopColor;
      var w = l.borderTop;
      var C = l.borderBottomWidth;
      var E = l.borderBottomStyle;
      var I = l.borderBottomColor;
      var B = l.borderBottom;
      var x = u && c && h ? u + " " + c + " " + h : d;
      var D = A && g && p ? A + " " + g + " " + p : m;
      var S = y && v && b ? y + " " + v + " " + b : w;
      var k = C && E && I ? C + " " + E + " " + I : B;
      var _ = tableCellIdUtils.generateRandomString(8);
      if (x || D || S || k) {
        var T = JSON.parse(this.rowAttribs[this.rowIndex]?.[$.BORDER] || "{}");
        this.setRowAttrib(this.rowIndex, ((t = {})[$.BORDER] = JSON.stringify(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, T), ((r = {})[_] = {
          left: x,
          right: D,
          top: S,
          bottom: k
        }, r))), t));
        var Q = JSON.parse(this.colAttribs[this.colIndex]?.[$.BORDER] || "{}");
        this.setColAttrib(this.colIndex, ((n = {})[$.BORDER] = JSON.stringify(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, Q), ((i = {})[_] = {
          left: x,
          right: D,
          top: S,
          bottom: k
        }, i))), n));
      }
    };
    t.collectCellAttribute = function (e, t) {
      var r;
      var n;
      var i;
      var a;
      var u = tableCellIdUtils.generateRandomString(8);
      var c = JSON.parse(this.rowAttribs[this.rowIndex]?.[e] || "{}");
      this.setRowAttrib(this.rowIndex, ((r = {})[e] = JSON.stringify(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, c), ((n = {})[u] = t, n))), r));
      var h = JSON.parse(this.colAttribs[this.colIndex]?.[e] || "{}");
      this.setColAttrib(this.colIndex, ((i = {})[e] = JSON.stringify(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, h), ((a = {})[u] = t, a))), i));
    };
    t.collectBackgroundColor = function (e) {
      var t = e.style.backgroundColor;
      this.collectCellAttribute($.BACKGROUND_COLOR, t);
    };
    t.collectVAlign = function (e) {
      var t = e.style.verticalAlign || e.getAttribute("valign");
      if (t) {
        this.collectCellAttribute($.V_ALIGN, t);
      }
    };
    t.collectPadding = function (e) {
      var t = e.style;
      var r = t.paddingLeft;
      var n = t.paddingRight;
      var i = t.paddingTop;
      var o = t.paddingBottom;
      if (r || n || i || o) {
        var a = (i || "0px") + " " + (n || "0px") + " " + (o || "0px") + " " + (r || "0px");
        this.collectCellAttribute($.PADDING, a);
      }
    };
    t.getFinalMergeId = function (e, t, r) {
      var i = t === documentOperationConstants.structureTypes.Row ? this.rowAttribs : this.colAttribs;
      if (i[r]?.mergeCellID) {
        return i[r].mergeCellID + "," + e;
      } else {
        return e;
      }
    };
    t.carriageReturn = function () {
      this.colIndex = -1;
      this.rowIndex++;
    };
    t.collectCol = function (e) {
      var r = this.colGroupIndex + Number(e.getAttribute("span") ?? 1);
      var n = e.width;
      if (n) {
        while (this.colGroupIndex < r) {
          this.colGroupIndex++;
          this.setColAttrib(this.colGroupIndex, {
            colWidth: n
          });
        }
      }
    };
    t.getCurrentZoneId = function () {
      return tableCellIdUtils.createCellId(this.rowIds[this.rowIndex], this.colIds[this.colIndex]);
    };
    t.flush = function () {
      this.rowIndex = -1;
      this.colIndex = -1;
      this.colGroupIndex = -1;
      this.colsZoneId = null;
      this.rowsZoneId = null;
      this.rowIds = [];
      this.colIds = [];
      this.rowAttribs = [];
      this.colAttribs = [];
      this.dummyCellIds = [];
      this.currentMovement = 1;
      this.tempColAttribs = [];
    };
    return e;
  }();
  function p() {
    window.getSelection().removeAllRanges();
  }
  function m(e) {
    return Math.max.apply(Math, typescriptHelpers_1.spreadArray(e));
  }
  function y(e) {
    return Math.min.apply(Math, typescriptHelpers_1.spreadArray(e));
  }
  function v(e, t, r) {
    var n = -1;
    var i = -1;
    var o = e;
    for (; o >= 0 && n === -1; o--) {
      for (var a = t; a >= 0 && i === -1; a--) {
        var s = r[o][a];
        if (s.colspan === undefined || s.colspan && s.colspan > 0) {
          i = a;
        }
      }
      var l = r[o][i];
      if (l.rowspan === undefined || l.rowspan && l.rowspan > 0) {
        n = o;
      }
    }
    return {
      rowIndex: n === -1 ? e : n,
      colIndex: i === -1 ? t : i
    };
  }
  function b(e, t) {
    return Object.prototype.toString.apply(e).toLowerCase() === "[object " + t.toLowerCase() + "]";
  }
  function w(e, t) {
    if (b(e, "object") && b(t, "object")) {
      return throttledDeepCloneUtil.throttledDeepClone(e, t);
    } else {
      return t;
    }
  }
  function C(e, t, r) {
    var n = t && t[e];
    if (n) {
      try {
        return n(r);
      } catch (e) {}
    }
  }
  var E = new (function () {
    function e() {
      this.isRealMousedown = false;
      this.invalidMousedown = false;
      this.bindEvent();
    }
    e.prototype.bindEvent = function () {
      var e = this;
      if (userAgentDetect.userAgentInfo.isSafari) {
        document.addEventListener("mousedown", function () {
          e.isRealMousedown = true;
        });
        document.addEventListener("mouseup", function () {
          if (!e.isRealMousedown) {
            e.invalidMousedown = true;
          }
          e.isRealMousedown = false;
        });
      }
    };
    return e;
  }())();
  function I(e, t, r) {
    var n = [];
    e.forEach(function (e, r) {
      var i = e.insert.id;
      var o = e.attributes || {};
      n[r] = [];
      var a = o[$.ROW_HEIGHT];
      var s = B(e);
      var l = JSON.parse(o[$.BORDER] || "{}");
      var c = JSON.parse(o[$.BACKGROUND_COLOR] || "{}");
      var h = JSON.parse(o[$.V_ALIGN] || "{}");
      var d = JSON.parse(o[$.PADDING] || "{}");
      var A = JSON.parse(o[$.FONT_FAMILY] || "{}");
      var g = JSON.parse(o[$.FONT_SIZE] || "{}");
      var p = JSON.parse(o[$.FONT_WEIGHT] || "{}");
      t.forEach(function (e, t) {
        var o;
        var y = e.insert.id;
        var v = tableCellIdUtils.createCellId(i, y);
        var b = B(e);
        var w = e.attributes || {};
        var C = (e == null ? undefined : e.attributes)?.colWidth;
        var E = JSON.parse(w[$.BACKGROUND_COLOR] || "{}");
        var I = JSON.parse(w[$.V_ALIGN] || "{}");
        var x = JSON.parse(w[$.PADDING] || "{}");
        var D = JSON.parse(w[$.BORDER] || "{}");
        var S = throttledArrayIntersection.throttledIntersect(Object.keys(E), Object.keys(c))[0];
        var k = throttledArrayIntersection.throttledIntersect(Object.keys(I), Object.keys(h))[0];
        var _ = throttledArrayIntersection.throttledIntersect(Object.keys(D), Object.keys(l))[0];
        var T = throttledArrayIntersection.throttledIntersect(Object.keys(x), Object.keys(d))[0];
        n[r][t] = ((o = {
          zoneId: v,
          rowHeight: a,
          backgroundColor: c[S],
          valign: h[k],
          border: l[_],
          fontFamily: A[v],
          fontSize: g[v],
          fontWeight: p[v],
          padding: d[T],
          colSpan: 1,
          rowSpan: 1,
          colWidth: C,
          constantRowNums: 1,
          constantColNums: 1
        })[$.MERGE_CELL_ID] = "", o);
        var Q = throttledArrayIntersection.throttledIntersect(b, s);
        if (Q.length > 0) {
          n[r][t][$.MERGE_CELL_ID] = Q[0];
        }
      });
    });
    (function (e, t) {
      e.forEach(function (r, n) {
        r.forEach(function (r, i) {
          var s = e[n][i];
          var l = s[$.MERGE_CELL_ID];
          var u = e[n]?.[i - 1];
          var c = e[n - 1]?.[i];
          var h = l && (u == null ? undefined : u[$.MERGE_CELL_ID]) === l;
          var d = l && (c == null ? undefined : c[$.MERGE_CELL_ID]) === l;
          if (h) {
            e[n][i - u.constantColNums].colSpan = u.constantColNums + 1;
            var f = e[n][i - u.constantColNums].colWidth;
            var A = f ? Number(f) : t;
            var g = Number(s.colWidth ? Number(s.colWidth) : t);
            e[n][i - u.constantColNums].colWidth = String(A + g);
            s.constantColNums = u.constantColNums + 1;
            s.colSpan = 0;
          }
          if (d) {
            e[n - c.constantRowNums][i].rowSpan = c.constantRowNums + 1;
            s.constantRowNums = c.constantRowNums + 1;
            s.rowSpan = 0;
          }
        });
      });
    })(n, r);
    return n;
  }
  function B(e) {
    var r = (e == null ? undefined : e.attributes)?.[$.MERGE_CELL_ID];
    if (r) {
      return r.split(",");
    } else {
      return [];
    }
  }
  var x = ["author", "lmkr", "lineguid", "insertorder"];
  function D(e, t, r) {
    if (t.line === 0) {
      return true;
    }
    if (t.offset === 0) {
      return false;
    }
    if (!e.version.includes(editorConstantsKeycodes.editorKit)) {
      return true;
    }
    var n;
    var i = (n = e.getContentState().getZoneState(r)) === null || n === undefined ? undefined : n.getLine(t.line);
    var o = +(i != null && !!i.hasLineMarker);
    return t.offset !== o || !(i == null ? undefined : i.getLineAttributes().every(function (e) {
      return x.includes(e[0]);
    }));
  }
  function S(e, t) {
    e.forEach(function (e) {
      if (e.zoneType !== documentOperationConstants.structureTypes.Content) {
        e.forEach(function (e) {
          if (e.attributes) {
            Object.entries({
              isCustomBorder: [$.BORDER],
              isCustomValign: [$.V_ALIGN],
              isCustomPadding: [$.PADDING],
              isCustomBackgroundColor: [$.BACKGROUND_COLOR],
              isCustomFont: [$.FONT_FAMILY, $.FONT_SIZE, $.FONT_WEIGHT]
            }).forEach(function (r) {
              var n = typescriptHelpers_1.readIterator(r, 2);
              var i = n[0];
              var a = n[1];
              if (!(t == null ? undefined : t[i])) {
                a.forEach(function (t) {
                  if (e.attributes[t]) {
                    delete e.attributes[t];
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  function k(e) {
    var t;
    var r;
    var n;
    var i;
    try {
      var a = typescriptHelpers_1.getValues(e);
      var s = a.next();
      for (; !s.done; s = a.next()) {
        var l = s.value;
        try {
          n = undefined;
          var u = typescriptHelpers_1.getValues(Array.from(l.childNodes));
          var c = u.next();
          for (; !c.done; c = u.next()) {
            var h = c.value;
            if (h.nodeType !== Node.ELEMENT_NODE && (h.nodeType !== Node.TEXT_NODE || h.textContent && /^[\r\n\s]+$/.test(h.textContent))) {
              h.parentNode.removeChild(h);
            }
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            if (c && !c.done && (i = u.return)) {
              i.call(u);
            }
          } finally {
            if (n) {
              throw n.error;
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
        if (s && !s.done && (r = a.return)) {
          r.call(a);
        }
      } finally {
        if (t) {
          throw t.error;
        }
      }
    }
  }
  var _ = editorFormatShortcuts.heading1;
  var T = editorFormatShortcuts.heading2;
  var Q = editorFormatShortcuts.heading3;
  var R = editorFormatShortcuts.bold;
  var F = editorFormatShortcuts.italic;
  var L = editorFormatShortcuts.underline;
  var O = editorFormatShortcuts.backColor;
  var N = editorFormatShortcuts.checkbox;
  var M = editorFormatShortcuts.blockquote;
  var P = editorFormatShortcuts.insertOrderedList;
  var U = editorFormatShortcuts.insertUnorderedList;
  var z = editorFormatShortcuts.alignLeft;
  var H = editorFormatShortcuts.alignCenter;
  var G = editorFormatShortcuts.alignRight;
  var Z = editorFormatShortcuts.insertCodeList;
  var W = 4;
  var j = {
    BUTTON: "click_delete_button",
    KEYBOARD: "delete_keyboard"
  };
  var Y = "insertTable";
  var K = ["magicObject", "aceTable"];
  var q = "aceTable";
  var V = "width_fixed";
  var J = {
    x: 2,
    y: 2
  };
  (n = i ||= {}).TOP_LEFT = "TOP_LEFT";
  n.TOP_RIGHT = "TOP_RIGHT";
  n.BOTTOM_LEFT = "BOTTOM_LEFT";
  n.BOTTOM_RIGHT = "BOTTOM_RIGHT";
  var X = "0";
  var $ = {
    SEPARATOR: "|",
    M_SEPARATOR: ",",
    SEMICOLON_SEPARATOR: ";",
    ROW_HEIGHT: "rowHeight",
    COL_WIDTH: "colWidth",
    MERGE_CELL_ID: "mergeCellID",
    COL_SPAN: "colspan",
    ROW_SPAN: "rowspan",
    BORDER: "border",
    BACKGROUND_COLOR: "backgroundColor",
    FONT_FAMILY: "fontFamily",
    FONT_SIZE: "fontSize",
    FONT_WEIGHT: "fontWeight",
    COL_MIN_WIDTH: "colMinWidth",
    V_ALIGN: "valign",
    PADDING: "padding"
  };
  var ee = 100;
  var et = 40;
  var er = 50;
  var en = 40;
  var ei = 20;
  var eo = "ignore-dom";
  var ea = {
    UPDATE_CELL_SELECT: "UPDATE_CELL_SELECT",
    OVERLAY_CHANGE: "OVERLAY_CHANGE",
    CONTEXT_CHANGE: "CONTEXT_CHANGE",
    CUT: "TABLE_CUT",
    COPY: "TABLE_COPY"
  };
  var es = {
    MOVE: "move",
    CLICK: "click",
    OTHER: ""
  };
  var el = {
    EDITABLE_CHANGE: "ace-table-editable-change",
    SELECT_CHANGED: "table-selected-changed",
    KEY_EVENT: "ace-key-event",
    BEFORE_TABLE_KEY_EVENT: "before_table_inner_keydown",
    HORZ_REISZE: "table_horz_resize",
    SCROLLABLE: "table_scrollable",
    DELETE_COL: "delete_col_atIndex",
    TABLE_REGISTER_ZONE_END: "tableRegisterZoneEnd",
    DELETE_TABLE_ON_MAIN_ZONE: "delete_table_on_main_zone"
  };
  var eu = {
    TABLE_FULL_WIDTH: "tableFullWidth",
    PASTE_CELLS_ONTO_TABLE: "paste-cells-onto-table",
    TABLE_COL_WIDTH: "tableColWidth",
    TABLE_CELL_FOCUS: "tableCellFocus",
    TABLE_DRAG: "tableDrag",
    ADD_ROW: "addRow",
    DELETE_ROW: "deleteRow",
    ADD_COL: "addCol",
    DELETE_COL: "deleteCol",
    CHECK_IS_FOCUSED: "checkIsFocused",
    ADD_LINE_BETWEEN_TABLES: "addLineBetweenTables",
    TABLE_MERGE_CELL: "mergeCell",
    TABLE_UNMERGE_CELL: "unmergeCell",
    DELETE_TABLE: "deleteTable",
    ZONE_FOCUS: "zoneFocus",
    APPLY_VECTOR_CHANGESET: "applyVectorChangeset",
    CLEAR_ZONE_CONTENT: "clearZoneContent",
    REPLACE_VECTOR_RANGE: "replaceVectorRange",
    APPLY_ATTRIBUTES_TO_ROW_OR_COL: "applyAttributesToRowOrCol"
  };
  var ec = "1px solid " + colorThemeConstants.lightBgColor;
  var eh = "colCountsChange";
  var ed = "at-uuid_";
  var ef = "TABLE_CELL";
  var eA = [_, T, Q, R, F, L, O, N, M, P, U, z, H, G, Z];
  var eg = {
    SELECTION_POPUP: ".selection-popup",
    TABLE_HEADER: ".ace-table-toolbars",
    TABLE_SPECIAL_SELECTION: ".table-special-selection",
    ACE_TABLE_TOOLBAR_POPOVER_CLASS: ".ace-table-toolbar-popover"
  };
  var ep = 9;
  var em = 8;
  var ey = {
    innerZoneEditor: reactPropTypesCore.PropTypes.object,
    innerZoneIdToInitialHTML: reactPropTypesCore.PropTypes.object.isRequired
  };
  var ev = ["bold", "italic", "underline", "strikethrough", "heading", "align", "list", "backgroundcolor", "fontcolor", "fontsize", "blockquote", "fontfamily"];
  require.d(exports, {
    defaultBorderStyle: function () {
      return ec;
    },
    deleteSourceTypes: function () {
      return j;
    },
    magicObjectTypes: function () {
      return K;
    },
    defaultInsertPos: function () {
      return J;
    },
    cornerPositions: function () {
      return i;
    },
    tableConstants: function () {
      return $;
    },
    insertTableCmd: function () {
      return Y;
    },
    minTableSize: function () {
      return ee;
    },
    tableWidthConst: function () {
      return et;
    },
    tableHeightConst: function () {
      return er;
    },
    tablePaddingConst: function () {
      return en;
    },
    tableTypeAce: function () {
      return q;
    },
    minCellSize: function () {
      return ei;
    },
    ignoreDomFlag: function () {
      return eo;
    },
    tableActionTypes: function () {
      return ea;
    },
    zeroString: function () {
      return X;
    },
    tableEventTypes: function () {
      return es;
    },
    TableAttrCollector: function () {
      return g;
    },
    tableEventNames: function () {
      return el;
    },
    widthFixedConst: function () {
      return V;
    },
    tableCommands: function () {
      return eu;
    },
    mathMin: function () {
      return y;
    },
    colCountChangeEvent: function () {
      return eh;
    },
    uuidPrefix: function () {
      return ed;
    },
    tableCellType: function () {
      return ef;
    },
    editorShortcuts: function () {
      return eA;
    },
    tableSelectors: function () {
      return eg;
    },
    shortcutCode1: function () {
      return ep;
    },
    shortcutCode2: function () {
      return em;
    },
    tablePropTypes: function () {
      return ey;
    },
    formatTypes: function () {
      return ev;
    },
    deepCloneOrReturn: function () {
      return w;
    },
    clearSelection: function () {
      return p;
    },
    safeCallFunction: function () {
      return C;
    },
    safariMouseHandler: function () {
      return E;
    },
    findCellIndices: function () {
      return v;
    },
    isObjectType: function () {
      return b;
    },
    mathMax: function () {
      return m;
    },
    processTableStruct: function () {
      return I;
    },
    cleanDomNodes: function () {
      return k;
    },
    checkLineCondition: function () {
      return D;
    },
    widthConstValue: function () {
      return W;
    },
    removeCustomAttrs: function () {
      return S;
    }
  });
}