// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'ListPlugin'
// - Renamed export 'J' to 'updateDeltaSetAttributes'
// - Renamed export 'm' to 'getListTypeForIndent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 656274
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var o;
  var a;
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var editorRangeZoneClass = require("editor-range-zone-class") /*id: 731872*/;
  var editorClipboardManager = require("editor-clipboard-manager") /*id: 797119*/;
  var contentDeltaOpsUtil = require("content-delta-ops-util") /*id: 444706*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var treeNodeTypes = require("tree-node-types") /*id: 676821*/;
  var editorKitConstants = require("editor-kit-constants") /*id: 71435*/;
  var editorLineModel = require("editor-line-model") /*id: 136973*/;
  var editorZoneDeltaState = require("editor-zone-delta-state") /*id: 800502*/;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var reactinxDomContextExports = require("reactinx-dom-context-exports") /*id: 327577*/;
  var reactinxDomReconciler = require("reactinx-dom-reconciler") /*id: 454385*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var throttledArrayIntersection_1 = require("throttled-array-intersection_1") /*id: 766812*/;
  var indentDirectionConstants = require("indent-direction-constants") /*id: 277000*/;
  var keyboardEventUtils = require("keyboard-event-utils") /*id: 623958*/;
  var editorListIndentUtil = require("editor-list-indent-util") /*id: 505604*/;
  var userAgentDetect = require("user-agent-detect") /*id: 68901*/;
  var S = /(?:^| )ol-id([0-9a-zA-Z]+)/;
  var k = /^[0-9a-zA-Z]+$/;
  var _ = /(number)([0-9]+)/;
  var T = /([a-z]+)([0-9]+)/;
  (n = o ||= {})[n.UP = 0] = "UP";
  n[n.DOWN = 1] = "DOWN";
  var Q = ["lang", "start", "origin-start", "ol-id", "text-indent"];
  var R = ["bold", "italic", "underline", "strikethrough", "fontsize", "fontcolor", "fontfamily", "fontweight", "backgroundcolor"].map(function (e) {
    return "list-" + e;
  });
  var jqueryCoreLibrary = require("jquery-core-library") /*id: 775150*/;
  var L = jqueryCoreLibrary;
  var O = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;"
  };
  var N = /[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF]/gm;
  function M(e) {
    return e && e.replace(N, function (e) {
      return O[e] || "&#x" + ("00" + e.charCodeAt(0).toString(16)).slice(-2) + ";";
    });
  }
  var randomStringGenerator = require("random-string-generator") /*id: 62944*/;
  function U(e) {
    var t = {};
    return function (r) {
      var n = t[r];
      if (n == null) {
        n = t[r] = e(r);
      }
      return n;
    };
  }
  var z = U(function (e) {
    if (e < 1) {
      return "";
    } else {
      return function (e) {
        var t = "";
        while (e >= 0) {
          t = String.fromCharCode(e % 26 + 65) + t;
          e = Math.floor(e / 26) - 1;
        }
        return t;
      }(e - 1).toLowerCase();
    }
  });
  var H = U(function (e) {
    if (e < 1) {
      return "";
    }
    if (e > 10000) {
      return String(e);
    }
    var t;
    var r;
    var n = {
      m: 1000,
      cm: 900,
      d: 500,
      cd: 400,
      c: 100,
      xc: 90,
      l: 50,
      xl: 40,
      x: 10,
      ix: 9,
      v: 5,
      iv: 4,
      i: 1
    };
    var i = "";
    try {
      var o = typescriptHelpers_1.getValues(Object.keys(n));
      var a = o.next();
      for (; !a.done; a = o.next()) {
        for (var l = a.value; e >= n[l];) {
          i += l;
          e -= n[l];
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        if (a && !a.done && (r = o.return)) {
          r.call(o);
        }
      } finally {
        if (t) {
          throw t.error;
        }
      }
    }
    return i;
  });
  function G() {
    return randomStringGenerator.createRandomString(8);
  }
  var Z = "bullet";
  var W = "number";
  (i = a ||= {})[i.BULLET = 0] = "BULLET";
  i[i.ORDER = 1] = "ORDER";
  i[i.INDENT = 2] = "INDENT";
  var j = "clientside-remove-text-indent";
  var Y = function (e) {
    function t(r) {
      var n = e.call(this) || this;
      n.name = "List";
      n.pasteLineNum = -1;
      n.willRenumberArr = [];
      n.needRenumberList = false;
      n.olIdMap = {};
      n.deserializeOlID = "";
      n.serializeOlID = "";
      n.prevListType = -1;
      n.prefixAttributes = R;
      n.relativeAttrKeys = Q.concat(R);
      n.zoneShouldRemoveTextIndent = null;
      n.handleDeleteKey = function (e) {
        var t = e.isBackward;
        var r = n.editor.selection.getSelection();
        var i = r.start;
        var o = n.editor.getContentState().getActiveZone().getLine(i.line);
        if (o) {
          var a = o.getLineAttributes().toMap();
          if (t && r.isCollapsed() && a.list && r.start.offset === o.getLineMarker()) {
            n.handleEditorWillDoDeleteKey();
            e.stopEvent();
            e.preventEvent();
            e.e.preventDefault();
          }
        }
      };
      n.handleWillDeleteFromCut = function (e) {
        var t = n.editor;
        var r = t.selection.getSelection();
        var i = r.start;
        var o = r.end;
        var a = i.zoneId;
        var s = "";
        var l = "";
        s = q(t, a, i.line);
        var u = t.getContentState().getZoneState(a);
        if (u && i.line !== u.length() - 1) {
          l = q(t, a, o.line + 1);
        }
        if (s || l) {
          n.cutList();
          e.preventEvent();
        }
      };
      n.cutList = function () {
        var e = n.editor;
        e.undoModule.batchedUndo(function () {
          var t = n.renumberList;
          var r = n.deleteNumberList;
          var i = e.selection.getSelection();
          var o = i.start;
          var a = i.end;
          var s = o.line;
          var u = e.getContentState();
          var c = +!!u.hasLineMarker(o);
          var h = o;
          if (function (e, t) {
            var r = e.zoneId;
            var n = e.line;
            var i = e.offset;
            if (i < 1) {
              return false;
            }
            var o = t.getZoneState(r);
            if (!o) {
              throw Error("isEndOfLine execute error: zoneId " + r + " does not exist.");
            }
            var a = o.getLine(n);
            if (!a) {
              throw Error("isEndOfLine execute error: zoneId " + r + " line " + n + " does not exist.");
            }
            return i + 1 === a.length();
          }(a, u) && function (e, t) {
            var r = e.zoneId;
            var n = e.line;
            var i = e.offset;
            if (i > 1) {
              return false;
            }
            var o = t.getZoneState(r);
            if (!o) {
              throw Error("isStartOfLine execute error: zoneId " + r + " does not exist.");
            }
            var a = o.getLine(n);
            if (!a) {
              throw Error("isStartOfLine execute error: zoneId " + r + " line " + n + " does not exist.");
            }
            return i === +!!a.hasLineMarker();
          }(o, u)) {
            h = {
              zoneId: o.zoneId,
              line: s,
              offset: c
            };
          }
          var d = r(new editorRangeZoneClass.EditorRangeZone({
            start: h,
            end: a,
            editor: e
          }));
          e.getContentState().deleteText({
            start: h,
            end: a
          });
          var f = e.selection.getSelection().start;
          var A = f.zoneId;
          var g = f.line;
          if (g !== -1) {
            d.forEach(function (e) {
              if (typeof e == "number" && t(A, g + 1) === null) {
                t(A, g);
              } else {
                t(A, g, e, false);
              }
            });
          }
        });
      };
      n.caretColumn = function () {
        return n.editor.selection.getSelection().start.offset;
      };
      n.deleteNumberList = function (e, t = []) {
        var r = n.editor;
        var i = (e = e || r.selection.getSelection()).start;
        var o = e.end;
        var a = i.zoneId;
        var s = i.line;
        var l = o.line;
        var u = r.getContentState().getZoneState(a);
        if (!u) {
          return t;
        }
        var c = u.getLine(s);
        if (e.isCollapsed() && n.caretColumn() === +!!c.hasLineMarker()) {
          var h = e.start.line > 1 ? q(r, a, e.start.line - 1) : "";
          var d = e.start.line < u.length() ? q(r, a, e.start.line + 1) : "";
          if (h.indexOf("code") > -1 && d.indexOf("code") > -1) {
            t.push(Number(e.start.line));
            return t;
          }
        }
        for (var f = s; f <= l; f++) {
          var A = q(r, a, f);
          if (A.indexOf("code") !== -1) {
            t.push(Number(f));
            continue;
          }
          if (A.indexOf(W) !== -1) {
            var g = u.getLine(f).getLineAttributes().toMap()["ol-id"];
            if (g && !t.includes(g)) {
              t.push(g);
            } else if (!g) {
              var p = G();
              n.renumberList(a, f, p, true);
              t.push(p);
            }
          }
        }
        return t;
      };
      n.handleDidPaste = function () {
        if (n.zoneShouldRemoveTextIndent) {
          var e;
          var t;
          var r;
          var i;
          var o = n.editor.getContentState();
          var a = (i = o.getZoneState(n.zoneShouldRemoveTextIndent)) === null || i === undefined ? undefined : i.getEntities([[j, "true"]]);
          if (a) {
            try {
              var l = typescriptHelpers_1.getValues(a);
              var u = l.next();
              for (; !u.done; u = l.next()) {
                var c = u.value;
                o.setLineAttributes(c.start.zoneId, c.start.line, ((r = {
                  "text-indent": ""
                })[j] = "", r));
              }
            } catch (t) {
              e = {
                error: t
              };
            } finally {
              try {
                if (u && !u.done && (t = l.return)) {
                  t.call(l);
                }
              } finally {
                if (e) {
                  throw e.error;
                }
              }
            }
          }
          n.zoneShouldRemoveTextIndent = null;
        }
        var h = n.editor.selection.getSelection();
        var d = h.start;
        var f = h.end;
        n.doFixNewInsertNodeListError(n.pasteLineNum, Math.max(d.line - n.pasteLineNum, 1));
        n.mergeListIfNecessary(d.zoneId, d.line, f.line);
        n.renumberList(d.zoneId, n.pasteLineNum);
      };
      n.handleContentChange = function (e) {
        var t = e.changes;
        var r = e.options;
        if (!r.isRemote && r.type !== "setContent" && n.needRenumberList) {
          Object.values(t).forEach(function (e) {
            var t = 0;
            e.forEach(function (r) {
              var i = r.start;
              var o = r.inserts;
              var a = r.deletes;
              if (o.length > 1 || a.length > 1 || e.length > 1) {
                n.doFixNewInsertNodeListError(i + t, o.length);
              }
              if (a.length) {
                a.forEach(function (e) {
                  var t;
                  if ((t = e.getLineAttributes().toMap().list) === null || t === undefined ? undefined : t.includes("number")) {
                    n.handleDeleteListLine(e.index);
                  }
                });
              }
              t += o.length - a.length;
            });
          });
        }
      };
      n.handleCompositionEnd = function (e) {
        var r;
        var i = n.editor.selection.getSelection();
        if (!(e.data.length > 0) && !!i.isCollapsed()) {
          var o = i.start;
          var a = o.zoneId;
          var s = o.line;
          var l = n.editor.getContentState();
          var u = (r = l.getZoneState(a)) === null || r === undefined ? undefined : r.getLine(s);
          if (u == null ? undefined : u.isTextEmpty()) {
            var c = u.getLineAttributes().toMap();
            if (t.KEY in c) {
              l._forceRefresh(a, [s]);
            }
          }
        }
      };
      n.doFixNewInsertNodeListError = function (e, t) {
        if (n.needRenumberList) {
          var r;
          var i;
          var o = n.renumberList;
          var a = n.editor.getContentState().getActiveZone().getZoneId();
          var s = "";
          var l = "";
          var u = 0;
          for (; u < t; ++u) {
            var c = e + u;
            var h = q(n.editor, a, c);
            var d = q(n.editor, a, c + 1);
            var f = h.indexOf(W) > -1;
            var A = h.indexOf("code") > -1;
            var g = d.indexOf("code") > -1;
            var p = f && ((i = (r = n.editor.getContentState().getZoneState(a)) === null || r === undefined ? undefined : r.getLine(c)) === null || i === undefined ? undefined : i.getLineAttributes().toMap()["ol-id"]) || "";
            if (f && p !== s) {
              var m = p === "" ? s : "";
              var y = n.needRenumberList;
              n.needRenumberList = false;
              if (m) {
                o(a, c, m, true);
              } else {
                o(a, c);
              }
              n.needRenumberList = y;
            }
            var v = l.indexOf("code") > -1;
            if (A && !v) {
              o(a, c);
            }
            if (!A && g) {
              o(a, c + 1);
            }
            l = h;
            s = p;
          }
        }
      };
      n.doInsertOrderedList = function () {
        n.editor.undoModule.batchedUndo(function () {
          n.doInsertList({
            attribKey: "list",
            attribValue: W
          });
        });
      };
      n.doInsertUnorderedList = function () {
        n.editor.undoModule.batchedUndo(function () {
          n.doInsertList({
            attribKey: "list",
            attribValue: Z
          });
        });
      };
      n.doInsertList = function (e) {
        var t = e.attribKey;
        var r = e.attribValue;
        var i = e.range;
        var o = e.isAllHasAttrib;
        var a = e.clickZone;
        var s = n.editor;
        i = i || s.selection.getSelection();
        if (o === undefined) {
          var l;
          var u;
          var c;
          var h;
          var d;
          l = s;
          u = [i];
          c = t;
          h = r;
          d = l.getContentState();
          var f = u.every(function (e) {
            var t = e.start;
            var r = e.end;
            var n = t.zoneId;
            var i = t.line;
            var o = r.line;
            var a = i;
            for (; a <= o; a++) {
              var s = d.getLineAttributes(n, a).toMap()[c];
              if (!s || s.slice(0, h.length) !== h) {
                var l = d.getZoneState(n);
                if (!l) {
                  return false;
                }
                var u = l.getLine(a).getAttributes();
                var f = false;
                var A = 0;
                var g = u.length;
                for (; A < g; ++A) {
                  var p = u[A][0];
                  if (p === "sheet-id" || p === "horizontal-line" || p === "aceTable") {
                    f = true;
                    break;
                  }
                }
                if (f) {
                  continue;
                }
                return false;
              }
            }
            return true;
          });
          return n.doInsertList({
            attribKey: t,
            attribValue: r,
            range: i,
            isAllHasAttrib: f,
            clickZone: a
          });
        }
        var A = i.start;
        var g = i.end;
        var p = r.replace(/^([a-z]+)\d*$/g, "$1");
        var m = A.line;
        var y = g.line;
        var v = A.zoneId;
        var b = [];
        var w = n.getClosetListNumberId(v, p, i) || G();
        var C = s.getContentState().getZoneState(v);
        if (C) {
          for (var E = m; E <= y; E++) {
            if (p === "code") {
              b.push([E, o ? "" : "code1", ""]);
              continue;
            }
            var I = 0;
            var B = "";
            var x = C.getLine(E).getLineAttributes().toMap()["text-indent"];
            var D = q(s, v, E);
            var S = X(D);
            if (S) {
              B = S[1];
              I = Number(S[2]);
            }
            if (x) {
              I += 2;
            }
            B = D || x;
            if (o) {
              I -= 1;
            }
            if (S && S[1] === "indent" && !x) {
              I += 1;
            }
            var k = B ? p + I : p + "1";
            var T = I > 0 ? "indent" + I : "";
            var Q = o && !a ? T : k;
            b.push([E, Q, x, w]);
          }
          var R = b.filter(function (e) {
            var r = e[0];
            var n = C.getLine(r)?._node;
            return !n || !(n.className.indexOf("IGNORE_LIST") > -1);
          }).map(function (e) {
            return e[0];
          });
          var F = b.reduce(function (e, t) {
            e[t[0]] = t[1];
            return e;
          }, {});
          var L = b[0][1];
          if (_.exec(L)) {
            n.bulkInsertOList(v, R, F);
          } else {
            n.setMultiLinesListType(v, R, F, w);
          }
          var O = b.filter(function (e) {
            return e[2];
          }).map(function (e) {
            return e[0];
          });
          n.setAttributeOnMultiLines(v, O, {
            "text-indent": ""
          });
          n.renumberList(v, y + 1);
        }
      };
      n.registerCommand = function () {
        var e = n.editor;
        e.registerCommand(t.KEY, function (e) {
          var t = e.value;
          if (t === W) {
            n.doInsertOrderedList();
          } else if (t === Z) {
            n.doInsertUnorderedList();
          }
        });
        e.registerCommand(indentDirectionConstants.indentConstants.INDENT_LEFT, function () {
          editorListIndentUtil.adjustListIndent(e, W, false);
          editorListIndentUtil.adjustListIndent(e, Z, false);
          var t = n.indexOfListLineInRange();
          var r = n.editor.selection.getSelection().start;
          var i = r.zoneId;
          var o = r.line;
          if (t > -1) {
            n.renumberList(i, t);
          } else {
            n.renumberList(i, o + 1);
          }
        });
        e.registerCommand(indentDirectionConstants.indentConstants.INDENT_RIGHT, function () {
          editorListIndentUtil.adjustListIndent(e, W, true);
          editorListIndentUtil.adjustListIndent(e, Z, true);
          var t = n.indexOfListLineInRange();
          if (t > -1) {
            var r = n.editor.selection.getSelection().start;
            n.renumberList(r.zoneId, t);
          }
        });
      };
      n.deserialize = function (e) {
        var t;
        var r;
        var i = e.node;
        var o = e.deltaSet;
        var a = e.zoneId;
        var s = o;
        if (i instanceof HTMLElement) {
          var l = i.tagName;
          var c = i.className;
          var h = S.exec(c);
          if (h) {
            s = editorClipboardManager.transformDeltaAttrs(s, a, {
              "ol-id": h[1]
            });
          }
          if (l.toLowerCase() === "ol" && (((t = i.parentElement) === null || t === undefined ? undefined : t.tagName.toLowerCase()) === "body" || !((r = i.parentElement) === null || r === undefined ? undefined : r.closest("ol")))) {
            n.deserializeOlID = G();
          }
          if (l.toLowerCase() === "li") {
            var d = function (e) {
              var t = null;
              var r = e;
              var n = e.dataset.list;
              if (e.tagName === "LI" && n) {
                if (/bullet/.test(n)) {
                  return "bullet";
                }
                if (/number/.test(n)) {
                  return "number";
                }
              }
              while (r) {
                if (r.tagName === "UL") {
                  t = "bullet";
                  break;
                }
                if (r.tagName === "OL") {
                  t = "number";
                  break;
                }
                r = r.parentElement;
              }
              return t;
            }(i);
            var f = function (e) {
              var t = 0;
              var r = e.parentElement;
              if (e.tagName === "LI" && e.dataset.list && /number/.test(e.dataset.list)) {
                var n = ea(e.dataset.list);
                if (n) {
                  return n;
                }
              }
              while (r) {
                if (["OL", "UL"].includes(r.tagName)) {
                  t++;
                }
                r = r.parentElement;
              }
              return t;
            }(i);
            var A = String(function (e) {
              var t = e.parentElement;
              if (t && t.tagName === "OL" && e.tagName === "LI") {
                return (t.start || 1) + Array.from(t.children).filter(function (e) {
                  return e.tagName === "LI";
                }).indexOf(e);
              }
              while (t) {
                if (t.tagName === "OL" && t.start) {
                  return t.start;
                }
                t = t.parentElement;
              }
              return 1;
            }(i));
            var g = i.getAttribute("data-ol-id");
            var p = n.deserializeOlID;
            if (g) {
              n.olIdMap[g] ||= G();
              p = n.olIdMap[g];
            }
            var m = function (e) {
              var t = null;
              var r = e;
              while (r) {
                var n = /(?:^| )list-([a-z]+[0-9]+)\b/.exec(r.className);
                if (n && n[1]) {
                  t = n[1];
                  break;
                }
                r = r.parentElement;
              }
              var i = "";
              var o = "";
              if (e && e.tagName === "LI") {
                var a = e.dataset.list;
                var s = a === undefined ? "" : a;
                if (/bullet/.test(s)) {
                  i = "bullet";
                } else if (/number/.test(s)) {
                  i = "number";
                }
                var l = s.match(/\d+/);
                if (l) {
                  if (!i) {
                    return null;
                  }
                  t = i + (o = l[0]);
                }
              }
              if (i && t && !o) {
                var l = t.match(/\d+/);
                if (l) {
                  t = i + l[0];
                }
              }
              return t;
            }(i);
            if (f >= 1 && d || m) {
              ec(s, a, {
                list: m || "" + d + f,
                start: A,
                "origin-start": A
              });
            }
            if (d === "number") {
              ec(s, a, {
                "ol-id": p
              });
            }
          }
        }
        return s;
      };
      n.UNSAFE_editorNormalizePasteNode = function (e) {
        var t;
        var r;
        var i = e.data.node;
        var a = n.editor;
        var s = a.selection.getSelection().start;
        var l = s.line;
        var u = s.offset;
        var c = L(i).find(">:not(meta)");
        var h = c.length === 1;
        var d = L(i).find("ul, ol");
        if (u > 0 && h && d[0] && c.hasClass("list-div")) {
          var f = L("<div/>");
          f.html(d.html());
          for (var A = 0; A < d[0].attributes.length; A++) {
            var g = d[0].attributes[A];
            f.attr(g.name, g.value);
          }
          f.removeClass("bullet1 number1");
          f.html(f.find("li")[0].innerHTML);
          d.replaceWith(f);
        }
        Array.from(i.querySelectorAll("ul,ol")).forEach(function (e) {
          Array.from(e.childNodes).forEach(function (e) {
            if (e.nodeType === Node.TEXT_NODE && e.parentNode) {
              e.parentNode.removeChild(e);
            }
          });
        });
        var p = L(i).find("ol");
        if (!(p.length <= 0)) {
          var m = p[0];
          var y = p[0];
          while (m.previousSibling && eh(m.previousSibling) !== "meta") {
            m = m.previousSibling;
          }
          while (y.nextSibling) {
            y = y.nextSibling;
          }
          if (m && y) {
            var v = a.getContentState().getZoneState(s.zoneId);
            if (v) {
              var b = (t = v.getLine(l - 1)) === null || t === undefined ? undefined : t.getLineAttributes().toMap()["ol-id"];
              var w = v.getLine(l).getLineAttributes().toMap()["ol-id"];
              var C = (r = v.getLine(l + 1)) === null || r === undefined ? undefined : r.getLineAttributes().toMap()["ol-id"];
              var E = eh(m) === "ol";
              var I = eh(y) === "ol";
              if (!E && !I) {
                n.assignListId(p, G());
                return;
              }
              if (E && (b || w)) {
                n.assignListId(p, b || w);
              } else if (I && C) {
                n.assignListId(p, C, true);
              } else {
                var B = n.getLevelAndOrderFromOl(m);
                var x = B.level;
                var D = B.order;
                var S = en(a, l).upwardClosestOListInfo;
                if (S) {
                  n.assignListId(p, S.listId);
                } else {
                  var k = er(a, o.UP, l, x, D);
                  if (k) {
                    n.assignListId(p, k.listId);
                    return;
                  }
                  n.assignListId(p, G());
                }
              }
            }
          }
        }
      };
      n.editorWillPaste = function (e) {
        var t;
        var r;
        var i;
        var a;
        var l;
        var h;
        var d = e.deltaSet;
        var f = e.zoneId;
        var A = e.isInternalPaste;
        var g = e.lineState;
        var p = n.editor.selection.getSelection().start;
        var m = n.editor.getContentState().getActiveZone();
        var y = p.line;
        n.pasteLineNum = y;
        var v = n.editor.getContentState().schema;
        var w = d.get(f);
        var C = w.ops[0];
        var E = C && contentDeltaOpsUtil.validateDocOps(C.attributes, v);
        var I = C && (C.attributes || {}).lmkr;
        var B = I && (C.attributes.list || C.attributes.blockquote);
        if (g && g.getLineAttributes().toMap()["text-indent"] && I && C.attributes.list && !C.attributes["text-indent"]) {
          n.zoneShouldRemoveTextIndent = p.zoneId;
          C.attributes[j] = "true";
        }
        if (g && n.isListLine(g) && !editorClipboardManager.startsWithString(w, "\n")) {
          if (E || B) ;else {
            var x = new contentStructureDelta.ContentDelta({
              zoneId: f
            });
            w.eachLine(function (e, t, r) {
              if (r === 0) {
                x = x.concat(e);
                return;
              }
              var n = t.lmkr ? t : {};
              var i = t.lmkr ? e.ops.slice(1) : e.ops;
              x = x.insertLineMarker(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, n), g.getLineAttributes().toMap())).concat(new contentStructureDelta.ContentDelta({
                zoneId: f,
                ops: i
              }));
            });
            d.replace(f, x);
          }
        }
        if (A) {
          var D = false;
          var S = null;
          var k = false;
          var T = null;
          d.forEach(function (e) {
            if (e.zoneId === f && e instanceof contentStructureDelta.ContentDelta) {
              var t = 0;
              e.eachLine(function (e, r, n) {
                t = n;
              });
              e.eachLine(function (e, r, n) {
                if (r["ol-id"]) {
                  if (n === 0) {
                    D = true;
                    S = r;
                  }
                  if (n === t) {
                    k = true;
                    T = r;
                  }
                }
              });
            }
          });
          var Q = (l = m.getLine(y - 1)) === null || l === undefined ? undefined : l.getLineAttributes().toMap()["ol-id"];
          var R = m.getLine(y).getLineAttributes().toMap()["ol-id"];
          var F = (h = m.getLine(y + 1)) === null || h === undefined ? undefined : h.getLineAttributes().toMap()["ol-id"];
          function L(e) {
            var t = typeof e == "string" ? {} : typescriptHelpers_1.assign({}, e);
            d.forEach(function (r) {
              if (r.zoneId === f && r instanceof contentStructureDelta.ContentDelta) {
                var n = editorClipboardManager.transformAttrKeys(r, function (e) {
                  return e.key === "ol-id";
                }, function (r) {
                  var i = r.key;
                  var o = r.value;
                  var a = typeof e == "string" ? e : t[o] ?? G();
                  t[o] ||= a;
                  return {
                    key: i,
                    value: a
                  };
                });
                d.replace(f, n);
              }
            });
          }
          if (D || k) {
            if (D && (Q || R)) {
              L(((i = {})[S["ol-id"]] = Q || R, i));
            } else if (k && F) {
              L(((a = {})[T["ol-id"]] = F, a));
            } else {
              var O = S || {
                list: "number1",
                start: "1"
              };
              var N = O.list;
              var M = O.start;
              var P = parseInt(_.exec(N === undefined ? "number1" : N)[2], 10);
              var U = parseInt(M === undefined ? "1" : M, 10) || 1;
              var z = en(n.editor, y).upwardClosestOListInfo;
              if (z) {
                L(z.listId);
              } else {
                var H = er(n.editor, o.UP, y, P, U);
                L(H ? H.listId : {});
              }
            }
          } else {
            L({});
          }
        }
        t = d.get(f);
        r = {};
        t.eachLine(function (e, t, n) {
          return n !== 0 || (r = t, false);
        });
        var Z = "list" in r;
        var W = d.get(f);
        var Y = function () {
          var e = m.getLine(p.line);
          if (!e) {
            return;
          }
          var t = e.getLineAttributes().toMap().list;
          if (!!Z && !!t) {
            var r = [];
            W.eachLine(function (e, t) {
              var n = t.list && Number(t.list.slice(-1));
              if (n) {
                r.push(n);
              }
            });
            if (r.length) {
              var n = Number(t.slice(-1)) || Math.min.apply(Math, typescriptHelpers_1.spreadArray(r));
              var i = !t && n === 1;
              var o = t && n + Math.min.apply(Math, typescriptHelpers_1.spreadArray(r)) - r[0] < 1;
              if (!i && !o) {
                return [n, !!t];
              }
            }
          }
        }();
        if (Y) {
          var K = 0;
          var q = new contentStructureDelta.ContentDelta({
            zoneId: f
          });
          W.eachLine(function (e, t, r) {
            var n = X(t.list);
            var i = n && n[1];
            var o = n && Number(n[2]);
            var a = typescriptHelpers_1.readIterator(Y, 2);
            var l = a[0];
            var u = a[1];
            if (!i || !o) {
              q = q.concat(e);
              return;
            }
            var c = "";
            if (u) {
              if (r === 0) {
                K = l - o;
              }
              c = r === 0 ? "" + i + l : "" + i + (o + K);
            } else {
              if (o !== l) {
                K = o - l;
              }
              c = o === l ? i + "1" : "" + i + (K + 1);
            }
            q = q.insert("*", typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, e.ops[0].attributes), {
              list: c
            })).concat(new contentStructureDelta.ContentDelta({
              zoneId: f,
              ops: e.ops.slice(1)
            }));
          });
          d.replace(f, q);
        }
        return d;
      };
      n.addListAttrToDeltaSet = function (e, t) {
        if (!e || !n.isListLine(e)) {
          return t;
        }
        var r = new deltaSetCore.DeltaSet();
        var i = e.getLineAttributes().toMap();
        t.forEach(function (t, n) {
          if (n !== e.getZoneId() || !(t instanceof contentStructureDelta.ContentDelta)) {
            r = r.concat(t);
            return;
          }
          var o = new contentStructureDelta.ContentDelta({
            zoneId: n
          });
          t.eachLine(function (e) {
            e.ops.forEach(function (e, t) {
              if (t !== 0) {
                o.push(e);
                return;
              }
              var r = e.attributes || {};
              if (e.insert === "*" && e.attributes && e.attributes.lmkr) {
                var n = e.attributes.list;
                o.insert("*", n ? r : typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, r), i));
              } else {
                o.insertLineMarker(i).push(e);
              }
            });
          });
          r = r.concat(o);
        });
        return r;
      };
      n.isListLine = function (e) {
        return e.hasLineMarker() && e.getLineAttributes().toMap().list;
      };
      n.addListId = function (e, t) {
        if (t) {
          L(e).removeClass(function (e, t) {
            return (t.match(/ol-id([\w]{8})/g) || []).join(" ");
          });
          L(e).addClass("ol-id" + t);
        }
      };
      n.renderLine = function (e) {
        var t;
        var r;
        var i = e.children;
        var o = e.lineState;
        var a = "";
        var l = o.getLineAttributes().toMap();
        try {
          var u = typescriptHelpers_1.getValues(Object.entries(l));
          var c = u.next();
          for (; !c.done; c = u.next()) {
            var h = typescriptHelpers_1.readIterator(c.value, 2);
            var d = h[0];
            var f = h[1];
            if (["list", "start", "origin-start"].includes(d) || d === "ol-id" && k.test(f)) {
              var A = a ? " " : "";
              var g = d + ":" + f;
              a += "" + A + g;
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (c && !c.done && (r = u.return)) {
              r.call(u);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        var p = /(?:^| )list:(\S+)/.exec(a);
        var m = /(?:^| )ol-id:(\S+)/.exec(a);
        if (m) {
          var A = e.lineClass ? " " : "";
          e.lineClass += A + "ol-id" + m[1];
        }
        if (p) {
          var b = p[1];
          if (b) {
            var w = "list-div";
            var C = M(b);
            var E = /(?:^| )start:(\S+)/.exec(a) || ["start:1", "1"];
            var I = parseInt(E[1], 10);
            var B = n.getLiStyleFromLineState(o);
            var x = B.fontSize !== undefined ? "font-size-" + String(B.fontSize).replace(/\s/g, "") : undefined;
            if (C.indexOf("code") > -1) {
              w += " list-code";
              if (I === 1) {
                w += " list-code-start";
              }
              e.lineClass += " " + w;
              return reactinxDomContextExports.ReactInXExports.createElement("code", {
                start: "" + I,
                className: "list-" + C,
                spellcheck: "false"
              }, e.children);
            }
            if (C.indexOf(W) < 0) {
              if (C.indexOf("check") > -1 || C.indexOf("done") > -1) {
                return i;
              }
              e.lineClass += " " + w;
              var D = C.indexOf("indent") > -1 ? "indent" : "bullet";
              return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.UnorderedListSymbol, {
                className: "list-" + C + " r-list r-list-" + D
              }, reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.exportPassthrough, {
                style: B,
                className: x
              }, e.children));
            }
            if (!E) {
              e.lineClass += " " + w;
              return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.OrderedListSymbol, {
                className: "list-" + C + " r-list r-list-number"
              }, reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.ListItemSymbol, {
                style: B,
                className: x
              }, e.children));
            }
            if (I === 1) {
              w += " list-start-" + C;
            }
            var S = /(?:^| )origin-start:(\S+)/.exec(a);
            var _ = ed(I, Number(X(C)[2]));
            if (!S) {
              e.lineClass += " " + w;
              return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.OrderedListSymbol, {
                start: "" + I,
                "data-start": "" + I,
                className: "list-" + C + " r-list r-list-number"
              }, reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.ListItemSymbol, {
                start: "" + _,
                "data-start": "" + _,
                style: B,
                className: x
              }, e.children));
            }
            var T = M(S[1]);
            e.lineClass += " " + w;
            return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.OrderedListSymbol, {
              "data-origin-start": "" + T,
              start: "" + T,
              "data-start": "" + T,
              className: "list-" + C + " r-list r-list-number"
            }, reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.ListItemSymbol, {
              start: "" + _,
              "data-start": "" + _,
              style: B,
              className: x
            }, e.children));
          }
        }
        return i;
      };
      n.handleKeydown = function (e) {
        var t = e.evt;
        if (!n.editor) {
          return;
        }
        var r = n.editor.selection.getSelection();
        var i = r.start;
        var o = r.end;
        var a = n.editor.getContentState();
        var s = a.getActiveZone();
        var l = s.getZoneId();
        if (!!i && !!o) {
          var u = o.line;
          var c = o.offset;
          var h = s.getLine(u);
          if (t.keyCode === keyboardEventUtils.KeyCode.Delete && t.key === "Delete" && r.isCollapsed() && h && c === h.getModelText().length) {
            n.mergeList(l, u + 2, u);
          }
          var d = t.type;
          var f = t.keyCode;
          var A = t.shiftKey;
          var g = t.ctrlKey;
          var p = t.metaKey;
          if (userAgentDetect.userAgentInfo.isSafari && d === "keydown") {
            if ((f === keyboardEventUtils.KeyCode.Up || f === keyboardEventUtils.KeyCode.Down) && !g && !p) {
              var m = f === keyboardEventUtils.KeyCode.Up;
              var y = r.isBackward;
              var v = m ? Math.max(i.line - 1, 0) : Math.min((A && y ? i.line : o.line) + 1, s.length() - 1);
              if (!s.getLine(v).getLineAttributes().toMap().list) {
                return;
              }
              var b = s.getLine(v);
              var w = +!!b.hasLineMarker();
              var C = b.length() - 1;
              var E = A && !y ? i : {
                zoneId: l,
                line: v,
                offset: w
              };
              var I = A && y ? o : {
                zoneId: l,
                line: v,
                offset: w
              };
              if (C === w) {
                n.editor.selection.setSelection({
                  start: E,
                  end: I
                });
                t.preventDefault();
              }
            }
            if (a.getLineAttributes(l, i.line).toMap().list && r.isCollapsed() && f === keyboardEventUtils.KeyCode.Left && keyboardEventUtils.isModKey(t.nativeEvent)) {
              var x = +!!s.getLine(i.line).hasLineMarker();
              var v = i.line;
              var S = {
                zoneId: l,
                line: v,
                offset: x
              };
              if (t.shiftKey) {
                n.editor.selection.setSelection({
                  end: o,
                  start: S
                });
              } else {
                n.editor.selection.setSelection({
                  end: S,
                  start: S
                });
              }
              t.preventDefault();
            }
          }
        }
      };
      n.setListAttributeOnMultiLines = function (e, t, r, i = {
        type: "setLineAttributes"
      }) {
        var o = n.editor.getContentState();
        t.forEach(function (t) {
          o.setLineAttributes(e, t, {
            list: r[t]
          }, i);
        });
      };
      n.setLineListType = function (e, t, r, i) {
        var o;
        var a;
        var s;
        var l;
        var u = {};
        var c = n.editor;
        var h = n.renumberList;
        var d = c.getContentState();
        var f = c.selection.getSelection();
        if (r === "") {
          l = false;
          s = (a = (o = d.getZoneState(e)) === null || o === undefined ? undefined : o.getLine(t)) === null || a === undefined ? undefined : a.getLineAttributes().toMap()["ol-id"];
          n.relativeAttrKeys.concat("list").forEach(function (r) {
            var n;
            d.setLineAttributes(e, t, ((n = {})[r] = "", n));
          });
        } else {
          u.list = r;
          if (r.indexOf(W) > -1 && (s = i || n.getClosetListNumberId(e, r, f) || G())) {
            u["ol-id"] = s;
          }
          d.setLineAttributes(e, t, u);
        }
        h(e, t, s, l);
      };
      n.setLineListTypeWithStart = function (e, t, r, i, o, a) {
        var s;
        var l = n.editor;
        var u = l.getContentState();
        var c = u.getZoneState(e);
        if (c) {
          var h = l.selection.getSelection();
          var d = a || n.getClosetListNumberId(e, r, h) || G();
          if (!i) {
            n.setLineListType(e, t, r, d);
            return;
          }
          i = String(i);
          if (r) {
            if (o) {
              u.setLineAttributes(e, t, {
                list: r,
                start: i,
                "origin-start": i,
                "ol-id": d
              });
            } else {
              u.setLineAttributes(e, t, {
                list: r,
                start: i,
                "ol-id": d
              });
            }
          } else {
            d = c.getLine(t).getLineAttributes().toMap()["ol-id"];
            s = false;
            n.setLineListType(e, t, "");
          }
          n.renumberList(e, t, d, s);
        }
      };
      n.unNumberType = function (e) {
        return e === "indent" || e === Z || e === "check" || e === "done";
      };
      n.findClosetList = function (e, t, r) {
        var i = t;
        var o = "up";
        var a = n.editor.getContentState();
        var s = [];
        var l = a.getZoneState(e);
        if (!l) {
          return s;
        }
        var u = l.length();
        var c = q(n.editor, e, t);
        while (i - 1 >= 0 && n.compatibleList(e, i - 1, r, o, s)) {
          i--;
        }
        i = t;
        if (c && r) {
          s.push(i);
        }
        o = "down";
        while (i + 1 <= u && n.compatibleList(e, i + 1, r, o, s)) {
          i++;
        }
        return s;
      };
      n.compatibleList = function (e, t, r, i, o) {
        var a;
        var s = n.unNumberType;
        var l = q(n.editor, e, t);
        var u = false;
        if (!l) {
          return null;
        }
        var c = X(l);
        if (r === "code") {
          if (s(c[1]) || r !== c[1]) {
            return null;
          } else {
            if (i === "up") {
              o.unshift(t);
            } else if (i === "down") {
              o.push(t);
            }
            return true;
          }
        }
        if (r === "oldNumber" && c[1] === W) {
          var h = (a = n.editor.getContentState().getZoneState(e)) === null || a === undefined ? undefined : a.getLine(t);
          if (!h || h.getLineAttributes().toMap()["ol-id"]) {
            return null;
          } else {
            if (i === "up") {
              o.unshift(t);
            } else if (i === "down") {
              o.push(t);
            }
            return true;
          }
        }
        return null;
      };
      n.renumberList = function (e, t, r, i) {
        var o;
        var a = n.editor;
        var l = n.unNumberType;
        var u = [];
        var c = i === false;
        var h = "";
        var d = q(a, e, t);
        var f = !!r;
        if (!d && !f) {
          return null;
        }
        var A = X(d);
        if (f) {
          A = X("number1");
        }
        if (l(A[1]) && !c) {
          return null;
        }
        var g = (o = n.editor.getContentState().getZoneState(e)) === null || o === undefined ? undefined : o.getLine(t).getLineAttributes().toMap()["ol-id"];
        var p = r || g;
        var m = [];
        if (A[1] === "code") {
          h = "code";
        } else if (A[1] === W && !c) {
          h = "oldNumber";
        }
        if (h !== "") {
          m = n.findClosetList(e, t, h);
        }
        if (m.length !== 0 && h === "oldNumber") {
          m = m.map(function (r) {
            if (r === t) {
              if (g === p) {
                return null;
              } else {
                return r;
              }
            }
            var n = ee(a, e, r);
            if (n && n.listId === p) {
              return null;
            } else {
              return r;
            }
          }).filter(function (e) {
            return e !== null;
          }).sort(function (e, t) {
            return e - t;
          });
          n.setAttributeOnMultiLines(e, m, {
            "ol-id": p
          });
        }
        if (i) {
          a.getContentState().setLineAttributes(e, t, {
            "ol-id": p
          });
        }
        if (p) {
          var y = n.editor.getContentState().getZoneState(e);
          (y ? typescriptHelpers_1.spreadArray(Array(y.length())).map(function (t, r) {
            return ee(a, e, r);
          }) : []).forEach(function (e, t) {
            if (e && e.listType.indexOf(W) > -1 && e.listId === p) {
              u.push(t);
            }
          });
        }
        var v = [];
        if (u.length !== 0) {
          v = u;
        } else if (m.length !== 0) {
          v = m;
        }
        if (v.length) {
          n.performRenumberList(e, v, A, false);
        }
        return null;
      };
      n.performRenumberList = function (e, t, r, i) {
        var o = n.editor;
        var a = new contentStructureDelta.ContentDelta({
          zoneId: e
        });
        var s = 0;
        function l(t, i, u) {
          var c;
          var h;
          var d = t[s];
          var f = -1;
          var A = q(o, e, d);
          while (A) {
            h = Number((A = X(A))[2]);
            var g = n.editor.getContentState().getZoneState(e);
            var p = g.getLine(d).getLineAttributes().toMap();
            var m = p["text-indent"];
            var y = p.start;
            if (isNaN(h) || n.unNumberType(A[1])) {
              if (r[1] === "code" || h < i) {
                return d;
              }
              s++;
            } else if (h === i) {
              if (f === -1) {
                c = Number(p["origin-start"]);
                f = Number(u ? y : c || 1);
              }
              var v = {
                start: String(f)
              };
              if (f !== c && c) {
                v["origin-start"] = "";
              }
              if (Number(f) !== Number(y)) {
                if (m) {
                  v["text-indent"] = "";
                }
                var w = g.pointToOffset({
                  line: d,
                  offset: 0
                });
                if (w !== null) {
                  a = a.compose(new contentStructureDelta.ContentDelta({
                    zoneId: e
                  }).retain(w).retain(1, v));
                }
              }
              f = +f + 1;
              d = t[++s];
              if (s === t.length) {
                return t[s];
              }
            } else if (h < i) {
              break;
            } else {
              d = l(t, i + 1, u);
            }
            A = s < t.length ? q(o, e, t[s]) : "";
          }
          return d;
        }
        l(t, 1, i);
        n.editor.getContentState().apply(a);
      };
      n.getOlIdForNewList = function (e) {
        var t = n.editor;
        var r = (e || t.selection.getSelection()).end;
        var i = r.line + 1;
        var o = t.getContentState().getZoneState(r.zoneId);
        if (o) {
          var a = o.getLine(i).getLineAttributes().toMap().start;
          if (a === "1") {
            return a["ol-id"];
          } else {
            return undefined;
          }
        }
      };
      n.getClosetListNumberId = function (e, t, r, i, o) {
        if (t.indexOf(W) !== -1) {
          var a;
          var s;
          var l;
          var u = n.editor;
          var c = r || u.selection.getSelection();
          var h = c.start;
          var d = c.end;
          var f = h.line;
          var A = d.line;
          var g = u.getContentState().getZoneState(h.zoneId);
          if (g) {
            if (f < 1 && f === A && e === 0) {
              return "";
            } else if (i) {
              return g.getLine(f).getLineAttributes().toMap()["ol-id"];
            } else if (o && o.editOneAfterOlList) {
              return n.getOlIdForNewList(r);
            } else {
              return (f > 1 ? (a = g.getLine(f - 1)) === null || a === undefined ? undefined : a.getLineAttributes().toMap()["ol-id"] : "") || ((s = g.getLine(f + 1)) === null || s === undefined ? undefined : s.getLineAttributes().toMap()["ol-id"]) || "";
            }
          } else {
            return undefined;
          }
        }
      };
      n.editor = r.editor;
      n.registerCommand();
      n.editor.on(editorEventConstants.editorEventTypes.DID_PASTE, n.handleDidPaste);
      n.editor.on(editorEventConstants.editorEventTypes.WILL_DELETE_FROM_CUT, n.handleWillDeleteFromCut);
      n.editor.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, n.handleContentChange);
      n.editor.on(editorEventConstants.editorEventTypes.COMPOSITION_END, n.handleCompositionEnd);
      n.editor.on("keydown", n.handleKeydown);
      n.editor.on(editorEventConstants.editorEventTypes.DELETE_KEY, n.handleDeleteKey, 890);
      n.needRenumberList = r.needRenumberList || true;
      return n;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.destroy = function () {
      this.editor.off(editorEventConstants.editorEventTypes.DID_PASTE, this.handleDidPaste);
      this.editor.off(editorEventConstants.editorEventTypes.WILL_DELETE_FROM_CUT, this.handleWillDeleteFromCut);
      this.editor.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
      this.editor.off(editorEventConstants.editorEventTypes.COMPOSITION_END, this.handleCompositionEnd);
      this.editor.off("keydown", this.handleKeydown);
      this.editor.off(editorEventConstants.editorEventTypes.DELETE_KEY, this.handleDeleteKey);
      this.editor = null;
    };
    r.indexOfListLineInRange = function () {
      var e;
      var t;
      var r = this.editor;
      var n = r.selection.getSelection();
      var i = n.start;
      var o = n.end;
      var a = i.line;
      for (; a <= o.line; a++) {
        var s = r.getContentState().getLineAttributes(i.zoneId, a).toMap();
        if (((e = s.list) === null || e === undefined ? undefined : e.indexOf(W)) > -1 || ((t = s.list) === null || t === undefined ? undefined : t.indexOf(Z)) > -1) {
          return a;
        }
      }
      return -1;
    };
    r.getListWrapInfo = function (e, t) {
      var r = t.level;
      var n = t.style;
      var i = t.start;
      var o = Array.from({
        length: r
      }, function () {
        var t = {
          tag: e,
          attributes: {}
        };
        if (n) {
          t.style = typescriptHelpers_1.assign({}, n);
        }
        return t;
      });
      if (i && o[r - 1]) {
        o[r - 1].attributes.start = String(i);
      }
      return o;
    };
    r.serialize = function (e) {
      var r;
      var n;
      var i = e.zoneId;
      var o = e.type;
      var l = e.node;
      var c = e.lineAttributes;
      var h = e.lineDelta;
      var p = c && c.list || "";
      var m = ea(p);
      var y = p.split("bullet")[1];
      var v = p.split("indent")[1];
      var b = -1;
      if (o === treeNodeTypes.nodeTypes.LINE && p && (m || y || /check|done/.test(p) || v)) {
        var w;
        var C = false;
        var E = document.createElement(v ? "div" : "li");
        E.classList.add("temp-li");
        E.setAttribute(editorKitConstants.dataLineAttr, "true");
        E.style.lineHeight = "1.6";
        E.style.marginTop = "0px";
        E.style.marginBottom = "0px";
        E.style.paddingLeft = "0px";
        if (!v) {
          E.style.display = "list-item";
        }
        if (m) {
          E.style.listStyleType = es[(+m - 1) % es.length];
          b = a.ORDER;
        } else if (y) {
          E.style.listStyleType = el[(+y - 1) % el.length];
          b = a.BULLET;
        } else if (v) {
          b = a.INDENT;
        }
        if (c) {
          if (c.list) {
            E.dataset.list = c.list;
            E.classList.add(c.list);
          }
          if (c["ol-id"]) {
            E.dataset.olId = c["ol-id"];
            C = typescriptHelpers_1.readIterator(this.serializeOlID.split(":"), 1)[0] !== c["ol-id"];
            this.serializeOlID = (w = c["ol-id"], w + ":" + m);
          }
          if (c.start && m && !v) {
            E.dataset.start = ed(Number(c.start), Number(m));
          }
          if (this.prevListType !== b) {
            C = true;
          }
          this.prevListType = b;
        }
        var I = {};
        if (h) {
          var B = new editorLineModel.EditorLine(h, new editorZoneDeltaState.ZoneDeltaState(i, h, this.editor.getContentState().schema));
          I = this.getLiStyleFromLineState(B);
        }
        try {
          var x = typescriptHelpers_1.getValues(Object.entries(I));
          var D = x.next();
          for (; !D.done; D = x.next()) {
            var S = typescriptHelpers_1.readIterator(D.value, 2);
            var k = S[0];
            var _ = S[1];
            E.style[k] = _;
            if (k === "fontSize") {
              var T = String(_).replace(/\s/g, "");
              E.classList.add("font-size-" + T);
            }
          }
        } catch (e) {
          r = {
            error: e
          };
        } finally {
          try {
            if (D && !D.done && (n = x.return)) {
              n.call(x);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
        E.appendChild(l);
        var Q = function (e) {
          if (e instanceof HTMLElement) {
            var t = e.dataset.list || "";
            var r = /(number|bullet|check|done|indent)(\d+)/;
            if (r.test(t)) {
              var n = r.exec(t);
              var i = n[1];
              var o = Number(n[2]);
              if (i === "number") {
                return {
                  type: "ol",
                  level: o
                };
              } else if (i === "indent") {
                return {
                  type: "div",
                  level: o
                };
              } else {
                return {
                  type: "ul",
                  level: o
                };
              }
            }
          }
          throw Error("unkonw list node");
        }(E);
        var R = Q.type;
        var F = Q.level;
        var L = {
          margin: "0px 0px 0px 24px",
          paddingLeft: "0px"
        };
        if (v) {
          L.marginLeft = "24px";
        }
        if (!v) {
          L.listStylePosition = "inside";
        }
        var O = this.getListWrapInfo(R, {
          level: F,
          start: Number(c == null ? undefined : c.start) || 1,
          style: L
        });
        if (O.length > 0) {
          if (!v) {
            Object.assign(O[0].style, {
              margin: "0px"
            });
          }
          Object.assign(O[O.length - 1], {
            split: C
          });
        }
        return editorClipboardManager.wrapLineAttributes(Object.assign(e, {
          node: E
        }), {
          wrapNodesInfo: O,
          tagAttribute: t.KEY
        });
      }
      return e;
    };
    r.assignListId = function (e, t, r) {
      var n = this;
      if (r === undefined) {
        r = false;
      }
      (r ? L(e.get().reverse()) : e).each(function (e, r) {
        return n.addListId(r, e === 0 ? t : G());
      });
    };
    r.getLevelAndOrderFromOl = function (e) {
      var t = /list-number([0-9]+)/.exec(e.className);
      var r = L(e).attr("start");
      return {
        level: t ? parseInt(t[1], 10) : 1,
        order: r ? parseInt(r, 10) : 1
      };
    };
    r.getLiStyleFromLineState = function (e) {
      var r;
      var n;
      var i;
      var o;
      var a;
      var l;
      var u = {};
      if (e.isTextEmpty()) {
        var c = e.getZoneId();
        var h = e.getOffset().start + e.getLineMarker();
        var d = this.editor.getContentState().getInlineStyleOverride({
          zoneId: c,
          start: h
        });
        if (d) {
          try {
            var f = typescriptHelpers_1.getValues(Object.entries(d));
            var A = f.next();
            for (; !A.done; A = f.next()) {
              var g = typescriptHelpers_1.readIterator(A.value, 2);
              var p = g[0];
              var m = g[1];
              if (p in t.PREFIX_STYLE_INHERIT) {
                var y = typescriptHelpers_1.readIterator(t.PREFIX_STYLE_INHERIT[p], 2);
                var v = y[0];
                var b = y[1];
                u[v] = b || m;
              }
            }
          } catch (e) {
            r = {
              error: e
            };
          } finally {
            try {
              if (A && !A.done && (n = f.return)) {
                n.call(f);
              }
            } finally {
              if (r) {
                throw r.error;
              }
            }
          }
        }
        return u;
      }
      try {
        var w = typescriptHelpers_1.getValues(Object.entries(t.PREFIX_STYLE_INHERIT));
        var C = w.next();
        for (; !C.done; C = w.next()) {
          var E = typescriptHelpers_1.readIterator(C.value, 2);
          var I = E[0];
          var B = E[1];
          var x = e.getEntities([[I, undefined]]);
          if (x.length) {
            var D = true;
            var S = undefined;
            var k = e.length() - +!!e.getModelText().endsWith("\n");
            try {
              a = undefined;
              var _ = typescriptHelpers_1.getValues(x.entries());
              var T = _.next();
              for (; !T.done; T = _.next()) {
                var Q = typescriptHelpers_1.readIterator(T.value, 2);
                var R = Q[0];
                var F = Q[1];
                var L = "lmkr" in F.attributes ? 0 : e.getLineMarker();
                var O = F.end.offset - +!!F.text.endsWith("\n");
                if (R === 0 && F.start.offset !== L || R === x.length - 1 && O !== k || S && S.end.offset !== F.start.offset) {
                  D = false;
                  break;
                }
                S = F;
              }
            } catch (e) {
              a = {
                error: e
              };
            } finally {
              try {
                if (T && !T.done && (l = _.return)) {
                  l.call(_);
                }
              } finally {
                if (a) {
                  throw a.error;
                }
              }
            }
            if (D) {
              u[B[0]] = B[1] || x[0].attributes[I];
            }
          }
        }
      } catch (e) {
        i = {
          error: e
        };
      } finally {
        try {
          if (C && !C.done && (o = w.return)) {
            o.call(w);
          }
        } finally {
          if (i) {
            throw i.error;
          }
        }
      }
      return u;
    };
    r.shouldForceRenderLine = function (e) {
      var t = e.lineState.getLineAttributes().toMap();
      if (!t.list) {
        return false;
      }
      var r = X(t.list);
      return !![W, Z, "check", "done", "indent"].includes((r == null ? undefined : r[1]) || "");
    };
    r.editorAfterDoDeleteKey = function (e) {
      var t = this.editor.getContentState().getActiveZone().getZoneId();
      this.mergeListIfNecessary(t, e.theLine);
      this.handleDeleteListLine(e.theLine);
    };
    r.editorAfterDoReturnKey = function (e) {
      this.handleDeleteListLine(e.theLine);
    };
    r.handleDeleteListLine = function (e) {
      var t = this.editor;
      if (t) {
        var r = this.renumberList;
        var n = t.selection.getSelection().start;
        this.willRenumberArr.forEach(function (t) {
          if (typeof t == "number" && r(n.zoneId, e + 1) === null) {
            r(n.zoneId, e);
          } else {
            r(n.zoneId, e, t, false);
          }
        });
        this.willRenumberArr = [];
      }
    };
    r.editorKeyDown = function (e) {
      var t = e.evt;
      var r = t.keyCode;
      var n = this.editor.selection.getSelection();
      var i = n.start;
      var o = i.line;
      var a = i.zoneId;
      if (!t.shiftKey && r === keyboardEventUtils.KeyCode.Tab && (a !== "0" || o !== 0)) {
        this.mergeToParentListIfNecessary(n);
      }
    };
    r.bulkInsertOList = function (e, t, r, n) {
      var i;
      var a;
      var s = this.editor;
      if (s && t.length !== 0) {
        var l = this.editor.getContentState();
        t.sort(function (e, t) {
          return e - t;
        });
        var u = t[0];
        var c = t[t.length - 1];
        var h = G();
        l.setLineAttributes(e, u, {
          "origin-start": "" + (n || 1)
        });
        this.setMultiLinesListType(e, t, r, h);
        if (n === 1) {
          var d = er(s, o.UP, u);
          if (d) {
            this.mergeList(e, d.lineNum, u);
          } else {
            var f = en(s, u, c);
            var A = f.upwardClosestOListInfo;
            var g = f.downwardClosestOListInfo;
            if (A && g) {
              this.mergeList(e, u, g.lineNum);
            }
          }
          if ((a = (i = l.getZoneState(e)) === null || i === undefined ? undefined : i.getLine(c + 1)) === null || a === undefined ? undefined : a.getLineAttributes().toMap()["ol-id"]) {
            this.mergeList(e, c + 1, c);
          }
        } else {
          this.mergeListIfNecessary(e, u, c);
        }
      }
    };
    r.mergeList = function (e, t, r) {
      var n = this;
      var i = this.editor;
      if (!i) {
        return Promise.resolve(null);
      }
      var a = i.selection.getSelection();
      var l = i.getContentState();
      if (!V(i, a, t) || !V(i, a, r)) {
        return Promise.resolve(null);
      }
      var u = ee(i, e, t);
      var c = ee(i, e, r);
      if (u && c && u.listId !== c.listId) {
        var h = u.listId;
        var d = typescriptHelpers_1.spreadArray([r], eo(i, a, r, c.listId, o.UP), eo(i, a, r, c.listId, o.DOWN)).sort(function (e, t) {
          return e - t;
        });
        return new Promise(function (i) {
          if (!n.editor) {
            return i(null);
          }
          var s;
          var u;
          var c;
          var f = {
            type: "mergeList"
          };
          n.setAttributeOnMultiLines(e, d, {
            "ol-id": h
          }, f);
          if (d[0] > t) {
            l.setLineAttributes(e, d[0], {
              "origin-start": ""
            }, f);
          } else {
            l.setLineAttributes(e, t, {
              "origin-start": ""
            }, f);
            s = n.editor;
            if (!V(s, u = a, c = d[0]) || eo(s, u, c, ee(s, u.start.zoneId, c).listId, o.UP).length !== 0) {
              l.setLineAttributes(e, d[0], {
                "origin-start": ""
              }, f);
            }
          }
          n.renumberList(e, r);
          i(h);
        });
      }
      return Promise.resolve(null);
    };
    r.mergeListIfNecessary = function (e, t, r) {
      return typescriptHelpers_1.awaiter(this, undefined, undefined, function () {
        var n;
        var i;
        var a;
        var l;
        var u;
        var c;
        var h;
        var d;
        var f;
        var A;
        var g;
        var p;
        var m;
        var y;
        return typescriptHelpers_1.generator(this, function (s) {
          switch (s.label) {
            case 0:
              if (!(n = this.editor) || (i = n.selection.getSelection(), a = r || t, !V(n, i, t) || !V(n, i, a))) {
                return [2];
              }
              l = ei(n, t).listId;
              u = ei(n, t - 1);
              c = ei(n, a + 1);
              h = er(n, o.UP, t);
              d = er(n, o.DOWN, a);
              f = u || h;
              A = c || d;
              g = false;
              if (!f || f.listId === l) {
                return [3, 2];
              }
              return [4, this.mergeList(e, f.lineNum, t)];
            case 1:
              l = s.sent() || l;
              g = true;
              s.label = 2;
            case 2:
              if (!A || A.listId === l) {
                return [3, 4];
              }
              return [4, this.mergeList(e, A.lineNum, a)];
            case 3:
              l = s.sent() || l;
              g = true;
              s.label = 4;
            case 4:
              if (g) {
                return [2, Promise.resolve()];
              }
              m = (p = en(n, t, a)).upwardClosestOListInfo;
              y = p.downwardClosestOListInfo;
              if (!m || !y) {
                return [3, 7];
              }
              return [4, this.mergeList(e, m.lineNum, t)];
            case 5:
              s.sent();
              return [4, this.mergeList(e, y.lineNum, a)];
            case 6:
              s.sent();
              s.label = 7;
            case 7:
              return [2];
          }
        });
      });
    };
    r.mergeToParentListIfNecessary = function (e) {
      var t = this;
      var r = e.start;
      var n = e.end;
      var i = r.zoneId;
      var a = {};
      var l = r.line;
      for (; l <= n.line; l++) {
        var u = ee(this.editor, i, l);
        if (!!u && u.listId !== undefined && !a[u.listId] && !(J(u.listType) <= 1)) {
          a[u.listId] = l;
        }
      }
      Object.entries(a).forEach(function (e) {
        var r = typescriptHelpers_1.readIterator(e, 2);
        r[0];
        var n = r[1];
        var a = q(t.editor, i, n);
        var l = et(t.editor, n, o.UP, J(a), true, true);
        if (l) {
          t.mergeList(i, l.lineNum, n);
        }
      });
    };
    r.handleEditorWillDoDeleteKey = function () {
      var e = this.editor;
      var t = e.getContentState();
      var r = t.getActiveZone();
      var n = r.getZoneId();
      var i = e.selection.getSelection();
      var o = i.start;
      var a = r.getLine(o.line);
      var s = a.getLineAttributes().toMap();
      var l = s["ol-id"];
      if (s.list) {
        var u = i.toPosition();
        var c = u.start;
        var h = u.len;
        var d = Number(a.hasLineMarker());
        var f = X(s.list);
        if (!h && o.offset - d == 0 && f) {
          var A = new contentStructureDelta.ContentDelta({
            zoneId: n
          });
          var g = f[1];
          var p = Number(f[2]);
          if (g === W) {
            s["origin-start"] = "";
            s.start = "";
            s["ol-id"] = "";
            s.list = "indent" + p;
            A.retain(c - 1).retain(1, s);
          } else if (g === "code") {
            A.retain(c - 2).delete(2);
          } else {
            s.list = "";
            A.retain(c - 1).retain(1, s);
          }
          t.apply(A);
          this.willRenumberArr = [l];
        }
      }
    };
    r.editorWillDoReturnKey = function (e) {
      var t = e.evt;
      var r = e.delta;
      var n = e.editor;
      var i = n.getContentState();
      var o = i.getActiveZone();
      var a = o.getZoneId();
      var l = n.selection.getSelection();
      var u = l.start.line;
      var c = o.getLine(u);
      var h = c.getLineAttributes().toMap();
      var d = l.toPosition();
      var f = d.start;
      var A = d.len;
      if (h.list && !A) {
        var g = X(h.list);
        if (g) {
          var p = g[1];
          var m = Number(g[2]);
          var y = c.isTextEmpty();
          var v = l.start.offset === 1;
          var w = t.shiftKey;
          var C = new contentStructureDelta.ContentDelta({
            zoneId: a
          });
          if ([W, Z, "check", "done", "indent"].includes(p)) {
            if (y) {
              if (m === 1) {
                ["list", "start", "origin-start", "ol-id"].forEach(function (e) {
                  h[e] = "";
                });
              } else {
                h.list = p + (m - 1);
              }
              C.retain(f - 1).retain(1, h);
            } else {
              if (w) {
                h.list = "indent" + m;
                ["start", "origin-start", "ol-id"].forEach(function (e) {
                  h[e] = "";
                });
              }
              var E = this.findLastListLine(o, u);
              if (p === "indent" && !w && E) {
                var I = E.type;
                var B = E.start;
                var x = E.olId;
                if (I[1] === W) {
                  h.list = I[0];
                  h.start = String(B + 1);
                  h["ol-id"] = x;
                }
                h.list = I[1] + I[2];
              }
              C.retain(f).insertEnter().insertLineMarker(h);
              if (p === "done") {
                C = v ? C.compose(new contentStructureDelta.ContentDelta({
                  zoneId: a
                }).retain(Math.max(f - 1, 0)).retain(1, typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, h), {
                  list: "check" + m
                }))) : C.compose(new contentStructureDelta.ContentDelta({
                  zoneId: a
                }).retain(f + 1).retain(1, typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, h), {
                  list: "check" + m
                })));
              }
            }
          }
          var D = c.previousSibling();
          if (p === "code" && D) {
            if (u === 0) {
              C.retain(f).insertEnter().insertLineMarker(h);
            } else {
              var S = o.getLineIndexOfKey(D.getKey());
              var k = D.isEmpty();
              var _ = i.rangeToPosition({
                start: {
                  line: S,
                  offset: 0,
                  zoneId: a
                },
                end: {
                  line: S,
                  offset: 0,
                  zoneId: a
                }
              });
              if (_ === null) {
                return;
              }
              var T = _.start;
              var Q = D.getLineAttributes().toMap();
              var R = Q.list === "code1";
              if (y && k && R) {
                ["list", "start", "insertorder", "lang"].forEach(function (e) {
                  Q[e] = "";
                  h[e] = "";
                });
                var F = new contentStructureDelta.ContentDelta({
                  zoneId: a
                }).retain(T).retain(1, Q);
                C = C.retain(f - 1).retain(1, h).compose(F);
              } else {
                C.retain(f).insertEnter().insertLineMarker(h);
              }
            }
          }
          e.delta = r.compose(C);
          this.willRenumberArr = this.deleteNumberList(l);
        }
      }
    };
    r.findLastListLine = function (e, t) {
      var r = t;
      var n = "";
      while (r - 1 >= 0) {
        var i = e.getLine(r - 1).getLineAttributes().toMap();
        if (!(n = i.list)) {
          break;
        }
        if ((n = X(n))[1] === Z || n[1] === W || n[1] === "check" || n[1] === "done") {
          return {
            line: --r,
            type: n[1] === "done" ? {
              0: "check" + n[2],
              1: "check",
              2: n[2]
            } : n,
            start: n[1] === W ? parseInt(i.start, 10) || 1 : null,
            olId: i["ol-id"]
          };
        }
        r--;
      }
      return null;
    };
    r.setMultiLinesListType = function (e, t, r, n) {
      var i;
      var o = this;
      var a = r[t[0]];
      if (t.length && this.editor) {
        var s = this.editor.getContentState().getZoneState(e);
        if (s) {
          var l = this.editor.selection.getSelection();
          var u = new Map();
          t.forEach(function (e) {
            var t = s.getLine(e).getLineAttributes().toMap()["ol-id"];
            if (!u.has(t) && t) {
              u.set(t, true);
            }
          });
          if (a === "" || /indent/.test(a)) {
            this.setListAttributeOnMultiLines(e, t, r);
            this.setAttributeOnMultiLines(e, t, {
              start: "",
              "origin-start": "",
              lang: "",
              "ol-id": ""
            });
          } else {
            t = t.filter(function (t) {
              return eu(o.editor, e, t, [["horizontal-line", "true"], ["sheet-id", ""], ["aceTable", ""]]);
            });
            if (a.indexOf(W) > -1) {
              i = n || this.getClosetListNumberId(e, a, l) || G();
              this.setAttributeOnMultiLines(e, t, {
                "ol-id": i
              });
            } else {
              this.setAttributeOnMultiLines(e, t, {
                "ol-id": ""
              });
            }
            this.setListAttributeOnMultiLines(e, t, r);
          }
          u.forEach(function (r, n) {
            o.renumberList(e, t[0], n);
          });
          this.renumberList(e, t[0], i);
        }
      }
    };
    r.setAttributeOnMultiLines = function (e, t, r = {}, n = {
      type: "setLineAttributes"
    }) {
      if (Array.isArray(t) && t.length) {
        var i = this.editor.getContentState();
        t.forEach(function (t) {
          i.setLineAttributes(e, t, r, n);
        });
      }
    };
    t.KEY = "list";
    t.PREFIX_STYLE_INHERIT = {
      bold: ["fontWeight", "bold"],
      italic: ["fontStyle", "italic"],
      fontsize: ["fontSize"],
      fontcolor: ["fontColor"],
      fontfamily: ["fontFamily"]
    };
    typescriptHelpers_1.decorate([editorPluginManager.createPriority(1001)], t.prototype, "serialize", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  var K = function (e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    typescriptHelpers_1.inherits(t, e);
    return t;
  }(Y);
  function q(e, t, r) {
    var n;
    var i;
    var o;
    var a;
    var s;
    n = e;
    i = t;
    o = r;
    return (s = (a = n.getContentState().getZoneState(i)) === null || a === undefined ? undefined : a.getLine(o)) && s.getLineAttributes().toMap().list || "";
  }
  function V(e, t, r) {
    var n = ee(e, t.start.zoneId, r);
    return !!n && !!_.exec(n.listType);
  }
  function J(e) {
    var t = _.exec(e);
    if (t) {
      return parseInt(t[2], 10);
    } else {
      return null;
    }
  }
  function X(e) {
    var t = T.exec(e);
    return t || (e.startsWith("number") ? T.exec("number1") : e.startsWith("bullet") ? T.exec("bullet1") : t);
  }
  function $(e, t, r, n = "number1") {
    var i = function (e, t, r) {
      var n;
      var i;
      var o = t.start.zoneId;
      var a = (i = (n = e.getContentState().getZoneState(o)) === null || n === undefined ? undefined : n.getLine(r)) === null || i === undefined ? undefined : i.getLineAttributes().toMap()["text-indent"];
      if (!a) {
        return false;
      }
      var s = T.exec(q(e, o, r));
      var l = 0;
      if (s) {
        l = Number(s[2]);
      }
      if (a) {
        l += 2;
      }
      return l;
    }(e, t, r);
    if (i) {
      return "number" + i;
    } else {
      return n;
    }
  }
  function ee(e, t, r) {
    var n;
    var i = (n = e.getContentState().getZoneState(t)) === null || n === undefined ? undefined : n.getLine(r);
    if (!i) {
      return null;
    }
    var o = i.getLineAttributes().reduce(function (e, t) {
      var r = typescriptHelpers_1.readIterator(t, 2);
      var n = r[0];
      var i = r[1];
      if (n === K.KEY) {
        e.listType = i;
      } else if (n === "ol-id") {
        e.listId = i;
      }
      return e;
    }, {});
    if (o.listType) {
      return o;
    } else {
      return null;
    }
  }
  function et(e, t, r, n, i, a = false) {
    var s;
    var l;
    var u = e.getContentState().getActiveZone();
    var c = u.getZoneId();
    var h = u.length();
    (s = {})[o.UP] = -1;
    s[o.DOWN] = 1;
    var d = s;
    for (t += d[r]; t >= 0 && t < h; t += d[r]) {
      var f = ee(e, c, t);
      if (a && !f) {
        break;
      }
      var A = f || {};
      var g = A.listId;
      var p = g === undefined ? "" : g;
      var m = A.listType;
      var y = J(m === undefined ? "" : m);
      if (y) {
        if ((l = l || p) && p !== l || n && !i && y < n) {
          break;
        }
        if (n === undefined || i && y < n || !i && y === n) {
          return {
            zoneId: c,
            listId: p,
            lineNum: t,
            order: parseInt(u.getLine(t).getLineAttributes().toMap().start, 10),
            level: y
          };
        }
      }
    }
    return null;
  }
  function er(e, t, r, n, i) {
    var a;
    var s = n && i ? {
      level: n,
      order: i
    } : ei(e, r);
    if (!s) {
      return null;
    }
    var l = s.level;
    var u = s.order;
    if (l > 1 && t === o.UP) {
      var c = et(e, r, t, l, true);
      if (c || u === 1) {
        return c;
      }
    }
    var h = et(e, r, t, l);
    if (!h) {
      return null;
    }
    (a = {})[o.UP] = -1;
    a[o.DOWN] = 1;
    var d = a;
    if (h.order === u + d[t]) {
      return h;
    } else {
      return null;
    }
  }
  function en(e, t, r) {
    var n = et(e, t, o.UP);
    var i = et(e, r || t, o.DOWN);
    if (n && i && n.listId === i.listId) {
      return {
        upwardClosestOListInfo: n,
        downwardClosestOListInfo: i
      };
    } else {
      return {};
    }
  }
  function ei(e, t, r) {
    var n = e.getContentState();
    var i = r ?? n.getActiveZone().getZoneId();
    var o = n.getZoneState(i);
    if (!o) {
      return null;
    }
    var a = ee(e, i, t) || {};
    var s = a.listId;
    var l = a.listType;
    var u = _.exec(l === undefined ? "" : l);
    if (u) {
      return {
        zoneId: i,
        listId: s === undefined ? "" : s,
        lineNum: t,
        order: parseInt(o.getLine(t).getLineAttributes().toMap().start, 10),
        level: parseInt(u[2], 10)
      };
    } else {
      return null;
    }
  }
  function eo(e, t, r, n, i) {
    var a;
    var s = t.start;
    var l = e.getContentState().getZoneState(s.zoneId);
    var u = [];
    if (!l) {
      return u;
    }
    var c = /(number)([0-9]+)/;
    var h = l.length();
    (a = {})[o.UP] = -1;
    a[o.DOWN] = 1;
    var d = a;
    for (r += d[i]; r >= 0 && r <= h; r += d[i]) {
      var f = ee(e, s.zoneId, r) || {};
      var A = f.listType;
      var g = A === undefined ? "" : A;
      var p = f.listId;
      var m = p === undefined ? "" : p;
      if (c.exec(g)) {
        if (m !== n) {
          break;
        }
        u.push(r);
      }
    }
    return u;
  }
  function ea(e) {
    return e.split("number")[1];
  }
  typescriptHelpers_1.inherits(function () {
    return Y !== null && Y.apply(this, arguments) || this;
  }, Y);
  var es = ["decimal", "lower-alpha", "lower-roman"];
  var el = ["disc", "circle", "square"];
  function eu(e, t, r, n = [], i = false) {
    var o = e.getContentState().getZoneState(t).getLine(r).getAttributes();
    var a = i ? deepEqualUtil_1.deepEqual : function (e, t) {
      return e[0] === t[0];
    };
    return throttledArrayIntersection_1.throttledIntersect(n, o, a).length <= 0;
  }
  function ec(e, t, r) {
    var n = e.get(t);
    if (n instanceof contentStructureDelta.ContentDelta) {
      var i = n.ops[0];
      var o = new contentStructureDelta.ContentDelta({
        zoneId: t
      });
      if (i.insert === "*" && i.attributes && i.attributes.lmkr) {
        o.retain(1, typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, i.attributes), r));
      } else {
        o.insertLineMarker(r);
      }
      e.replace(t, n.compose(o));
    }
  }
  function eh(e) {
    return e && (e.tagName || "").toLowerCase();
  }
  function ed(e, t) {
    var r = "" + e;
    switch (t % 3) {
      case 0:
        r = H(e);
        break;
      case 2:
        r = z(e);
    }
    return r;
  }
  require.d(exports, {
    ListPlugin: function () {
      return K;
    },
    updateDeltaSetAttributes: function () {
      return ec;
    },
    getListTypeForIndent: function () {
      return $;
    }
  });
}