// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'MarkdownFeature'
// - Renamed export 'U' to 'MarkdownPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 506005
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var editorRangeZoneClass = require("editor-range-zone-class") /*id: 731872*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  require("user-agent-parser_1") /*id: 757289*/;
  var userAgentDetect = require("user-agent-detect") /*id: 68901*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  require("jquery-core-library") /*id: 775150*/;
  var richTextEditorListPlugin = require("rich-text-editor-list-plugin") /*id: 656274*/;
  var d = userAgentDetect.userAgentInfo.isEdge;
  var c = userAgentDetect.userAgentInfo.isAndroid && !userAgentDetect.userAgentInfo.isX5;
  var h = ["align", "heading", "aceTable", "list", "blockquote", "lmkr", "origin-start", "insertorder", "text-indent", "start", "origin-start", "lang"];
  var f = "horizontal-line";
  (i = o ||= {}).heading = "heading";
  i.blockQuote = "blockQuote";
  i.ul = "ul";
  i.ol = "ol";
  i.codeBlock = "codeBlock";
  i.checkbox = "checkbox";
  i.horizontal = "horizontal";
  i.bold = "bold";
  i.inlineCode = "inlineCode";
  i.italic = "italic";
  i.underline = "underline";
  i.strikethrough = "strikethrough";
  var p = function () {
    function e(e) {
      var t = this;
      this.options = e;
      this.name = "Markdown";
      this.isMarkdownMatch = false;
      this.markdownMap = {
        heading: {
          regExp: /^(#{1,3}\s)(\S*|\S+[\s\S]*)$/,
          match: function (e) {
            var t = this.regExp.exec(e);
            if (t) {
              return {
                key: "heading",
                value: "h" + (t[1].length - 1),
                type: "line",
                replaceLen: t[1].length,
                active: "heading-h" + (t[1].length - 1)
              };
            } else {
              return null;
            }
          }
        },
        blockQuote: {
          regExp: /^(>\s)(\S*|\S+[\s\S]*)$/,
          match: function (e) {
            var t = this.regExp.exec(e);
            if (t) {
              return {
                key: "blockquote",
                value: "true",
                type: "line",
                replaceLen: t[1].length,
                active: "reference"
              };
            } else {
              return null;
            }
          }
        },
        ul: {
          regExp: /^([*]+\s)(\S*|\S+[\s\S]*)$|^([-]+\s)(\S*|\S+[\s\S]*)$/,
          match: function (e) {
            var t = this.regExp.exec(e);
            if (!t) {
              return null;
            }
            var n = t[1] || t[3];
            return {
              key: "list",
              value: "bullet" + (n.length - 1),
              type: "line",
              replaceLen: n.length,
              active: "list-bullet"
            };
          }
        },
        ol: {
          regExp: /^([1-9][0-9]*\.\s)(\S*|\S+[\s\S]*)$/,
          match: function (e) {
            var t = this.regExp.exec(e);
            if (t) {
              return {
                key: "list",
                value: "number1",
                type: "line",
                replaceLen: t[1].length,
                start: parseInt(t[1], 10),
                active: "list-number"
              };
            } else {
              return null;
            }
          }
        },
        checkbox: {
          regExp: /^((\[\]\s)|(\u3010\u3011\s))(\S*|\S+[\s\S]*)$/,
          match: function (e) {
            var t = this.regExp.exec(e);
            if (t) {
              return {
                key: "list",
                value: "check1",
                type: "line",
                replaceLen: t[1].length,
                active: "checkbox"
              };
            } else {
              return null;
            }
          }
        },
        horizontal: {
          regExp: /^---$|^\*\*\*$/,
          match: function (e) {
            var t = this.regExp.exec(e);
            if (t) {
              return {
                name: f,
                value: "true",
                type: "inline",
                replaceRight: false,
                execLen: 3,
                replaceLen: t[0].length,
                startReplacePos: t.index,
                endReplacePos: t.index + t[0].length,
                textLen: 0,
                active: "insertseparator"
              };
            } else {
              return null;
            }
          },
          doInsert: function (e) {
            e.editor.execCommand(f);
          }
        },
        bold: {
          regExp: /\*\*(\S|\S.*\S)\*\*\s/,
          match: function (e) {
            var t = this.regExp.exec(e);
            if (!t) {
              return null;
            }
            var n = t[1];
            if (n && /[^_|^*]/.test(n)) {
              return {
                type: "inline",
                name: "bold",
                value: "true",
                replaceRight: true,
                execLen: 2,
                replaceLen: t.index + n.length + 5,
                startReplacePos: t.index,
                endReplacePos: t.index + n.length,
                textLen: n.length,
                active: "bold"
              };
            } else {
              return null;
            }
          }
        },
        italic: {
          regExp: /\*([^*\s]|[^*\s].*[^*\s])\*\s/,
          match: function (e) {
            var t = this.regExp.exec(e);
            if (!t) {
              return null;
            }
            var n = t[1];
            if (n && /[^_|^*]/.test(n)) {
              return {
                type: "inline",
                name: "italic",
                value: "true",
                replaceRight: true,
                execLen: 1,
                replaceLen: t.index + n.length + 3,
                startReplacePos: t.index,
                endReplacePos: t.index + n.length,
                textLen: n.length,
                active: "italic"
              };
            } else {
              return null;
            }
          }
        },
        underline: {
          regExp: /~([^\s~]|[^\s~].*[^\s~])~\s/,
          match: function (e) {
            var t = this.regExp.exec(e);
            if (!t) {
              return null;
            }
            var n = t[1];
            if (n == null ? undefined : n.length) {
              return {
                type: "inline",
                name: "underline",
                value: "true",
                replaceRight: true,
                execLen: 1,
                replaceLen: t.index + n.length + 3,
                startReplacePos: t.index,
                endReplacePos: t.index + n.length,
                textLen: n.length,
                active: "underline"
              };
            } else {
              return null;
            }
          }
        },
        strikethrough: {
          regExp: /~~(\S|\S.*\S)~~\s/,
          match: function (e) {
            var t = this.regExp.exec(e);
            if (!t) {
              return null;
            }
            var n = t[1];
            if (n && /[^~]/.test(n)) {
              return {
                type: "inline",
                name: "strikethrough",
                value: "true",
                replaceRight: true,
                execLen: 2,
                replaceLen: t.index + n.length + 5,
                startReplacePos: t.index,
                endReplacePos: t.index + n.length,
                textLen: n.length,
                active: "strikethrough"
              };
            } else {
              return null;
            }
          }
        }
      };
      this.handleInput = function (e) {
        if (t.isMarkdownMatch && e.data === " ") {
          e.preventDefault();
          e.nativeEvent.stopImmediatePropagation();
          t.isMarkdownMatch = false;
        }
      };
      this.handleKeyEventWithBatchUndo = function (e) {
        var n = e.evt;
        t.editor.undoModule.batchedUndo(function () {
          return t.handleKeyEvent({
            evt: n
          });
        });
      };
      this.handleKeyEvent = function (e) {
        var n;
        var i;
        var o;
        var l;
        var c;
        var h;
        var f;
        var p;
        var v;
        var g;
        var m;
        var y = e.evt;
        var b = t.editor;
        var S = y.keyCode;
        var E = y.key;
        var C = y.type;
        var R = b.getStatus("isComposing");
        if ((!t.options.markdownOptions.ignoreFirstLine || !t.inTitleLine()) && b.selection.getSelection().isCollapsed()) {
          var w = !R && t.lastInternationalComposition && userAgentDetect.userAgentInfo.isSafari;
          if (E === " " && (R || w) && C === "keydown") {
            t.shouldContinue = false;
            return false;
          }
          if (C === "keyup" && !t.shouldContinue) {
            t.shouldContinue = true;
            return false;
          }
          t.lastInternationalComposition = R;
          var z = "";
          t.lastKeydownStatus = t.keydownStatus;
          t.keydownStatus = t.isInKeydownStatusWithoutKeycode(y);
          if (!userAgentDetect.userAgentInfo.isSafari && t.keydownStatus || !d && R || R && d && C !== "keyup" || S === 90 || S >= 65 && S <= 90 || y.nativeEvent.which >= 37 && y.nativeEvent.which <= 40) {
            return false;
          }
          var I = t.isSpecialKey(y);
          var M = S === 32 || E === " ";
          if (!I && !M || S === 8) {
            return false;
          }
          var k = b.selection.getSelection();
          var T = k.start;
          var x = k.end;
          var L = T.zoneId;
          var D = x.offset;
          var A = "";
          if ((!t.keydownStatus && t.lastKeydownStatus || userAgentDetect.userAgentInfo.isX5) && C === "keyup") {
            if (T === null) {
              return false;
            }
            b.flushInput();
            var _ = b.selection.getSelection().start;
            m = _.line;
            if (t.getLineListType(_.zoneId, m).indexOf("code") > -1) {
              return;
            }
            if ((g = (o = b.getContentState().getZoneState(_.zoneId)) === null || o === undefined ? undefined : o.getLine(m)) && (d && R || userAgentDetect.userAgentInfo.isMobile)) {
              var N = g.getText();
              z = N.slice(0, N.length - 1);
            }
          } else {
            var P = b.selection.getSelection().start;
            if (C !== "keydown" || P === null || userAgentDetect.userAgentInfo.isX5) {
              return false;
            }
            b.flushInput();
            var O = b.selection.getSelection();
            var _ = O.start;
            var H = O.end;
            if (!H) {
              return false;
            }
            D = H.offset;
            m = _.line;
            if (t.getLineListType(_.zoneId, m).indexOf("code") > -1 || !b.selection.getSelection().isCollapsed()) {
              return;
            }
            var W = H.offset;
            z = (g = (l = b.getContentState().getZoneState(_.zoneId)) === null || l === undefined ? undefined : l.getLine(m)) ? g.getText().substr(0, W - +!!g.hasLineMarker()) + A : "";
            if (!t.isInKeydownStatusWithoutKeycode(y) || !z.endsWith(E)) {
              A = E.toLowerCase() === "spacebar" ? " " : E;
            }
            z += A;
          }
          for (var Z in t.markdownMap) {
            if (t.markdownMap.hasOwnProperty(Z)) {
              var V = t.markdownMap[Z];
              var B = V.match(z);
              if (B) {
                t.isMarkdownMatch = true;
                if (d && R) {
                  b.flushInput();
                  var F = b.selection.getSelection();
                  var K = F.start;
                  var U = F.end;
                  g = (c = b.getContentState().getZoneState(K.zoneId)) === null || c === undefined ? undefined : c.getLine(m);
                  D = U.offset;
                }
                if (A) {
                  y.preventDefault();
                  t.editor.undoModule.batchedUndo(function () {
                    t.performText(A);
                  });
                  A = "";
                }
                var Y = b.selection.getSelection();
                var j = Y.start;
                var X = Y.end;
                var q = +(g != null && !!g.hasLineMarker());
                var J = q + B.replaceLen;
                var G = X.offset > J && J > D;
                if (J !== X.offset && !G) {
                  continue;
                }
                if (B.type === "line") {
                  var $ = (f = (h = b.getContentState().getZoneState(j.zoneId)) === null || h === undefined ? undefined : h.getLine(m)) === null || f === undefined ? undefined : f.getLineAttributes().toMap()[B.key];
                  if (!$ || $ && $ !== B.value) {
                    var Q = b.selection.getSelection().start.zoneId;
                    var ee = b.pluginManager.getPlugin("List");
                    var et = {
                      start: {
                        line: m,
                        offset: q,
                        zoneId: Q
                      },
                      end: {
                        line: m,
                        offset: q + B.replaceLen,
                        zoneId: Q
                      }
                    };
                    var en = b.getContentState();
                    var ei = en.getEntities(et).reduce(function (e, t) {
                      return e = typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, e), t.attributes);
                    }, {});
                    en.deleteText(et);
                    en.setAttributes({
                      start: et.start,
                      end: et.start
                    }, ei);
                    if (B.value.indexOf("code") > -1) ;else if (B.start) {
                      var eo = t.getTabLevel(B.value, b, m);
                      if (eo) {
                        B.value = "number" + eo;
                        b.getContentState().setLineAttributes(Q, m, {
                          "text-indent": ""
                        });
                      }
                      if (!ee) {
                        return;
                      }
                      var er = richTextEditorListPlugin.getListTypeForIndent(b, b.selection.getSelection(), m);
                      ee.bulkInsertOList(Q, [m], ((i = {})[m] = er, i), B.start);
                    } else {
                      var eo = t.getTabLevel(B.value, b, m);
                      if (eo) {
                        var ea = eo + B.replaceLen - 2;
                        B.value = "bullet" + ea;
                        b.getContentState().setLineAttributes(Q, m, {
                          "text-indent": ""
                        });
                      }
                      b.getContentState().setLineAttributes(Q, m, ((n = {})[B.key] = B.value, n));
                    }
                  }
                } else if (B.type === "inline") {
                  var el = +((v = (p = b.getContentState().getZoneState(L)) === null || p === undefined ? undefined : p.getLine(m)) !== null && v !== undefined && !!v.hasLineMarker());
                  var es = [m, el + B.startReplacePos];
                  var eu = [m, el + B.endReplacePos];
                  b.getContentState().deleteText({
                    start: {
                      line: m,
                      offset: es[1],
                      zoneId: L
                    },
                    end: {
                      line: m,
                      offset: es[1] + B.execLen,
                      zoneId: L
                    }
                  });
                  if (B.replaceRight) {
                    b.getContentState().deleteText({
                      start: {
                        line: m,
                        offset: eu[1],
                        zoneId: L
                      },
                      end: {
                        line: m,
                        offset: eu[1] + B.execLen,
                        zoneId: L
                      }
                    });
                    b.toggleAttribute(B.name, "true", new editorRangeZoneClass.EditorRangeZone({
                      editor: b,
                      start: {
                        line: m,
                        offset: el + B.startReplacePos,
                        zoneId: L
                      },
                      end: {
                        line: m,
                        offset: el + B.startReplacePos + B.textLen,
                        zoneId: L
                      }
                    }));
                  } else if (V.doInsert) {
                    V.doInsert({
                      editor: b
                    });
                  }
                }
                return;
              }
            }
          }
        }
      };
      this.getLineListType = function (e, n) {
        return t.getLineAttributes(e, n, "list");
      };
      this.getLineAttributes = function (e, n, i) {
        var o;
        var r = (o = t.editor.getContentState().getZoneState(e)) === null || o === undefined ? undefined : o.getLine(n);
        return r && r.getLineAttributes().toMap()[i] || "";
      };
      var n = e.editor;
      var i = e.markdownOptions;
      var o = i.markdownMap;
      this.shouldContinue = true;
      this.lastInternationalComposition = false;
      this.lastKeydownStatus = false;
      this.keydownStatus = false;
      this.markdownMap = throttledPathFilterStringify.throttledPathStr(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, this.markdownMap), o === undefined ? {} : o), i.types);
      this.editor = n;
      this.handleKeyEventWithBatchUndo.plugin = this;
      this.handleInput.plugin = this;
      this.editor.on("keydown", this.handleKeyEventWithBatchUndo);
      this.editor.on("keyup", this.handleKeyEventWithBatchUndo);
      if (userAgentDetect.userAgentInfo.isSafari) {
        n.on("beforeinput", this.handleInput);
      }
    }
    var t = e.prototype;
    t.destroy = function () {
      this.editor.off("keydown", this.handleKeyEventWithBatchUndo);
      this.editor.off("keyup", this.handleKeyEventWithBatchUndo);
      if (userAgentDetect.userAgentInfo.isSafari) {
        this.editor.off("beforeinput", this.handleInput);
      }
    };
    t.inTitleLine = function () {
      var e = this.editor.selection.getSelection().start;
      return e.line === 0 && e.zoneId === "0";
    };
    t.isSpecialKey = function (e) {
      var t = e.key;
      var n = e.keyCode;
      if (!e.nativeEvent) {
        return false;
      }
      var i = e.nativeEvent.code;
      var o = this.editor;
      if (!o) {
        return false;
      }
      if ((d && o.getStatus("isComposing") || c) && n === 229) {
        return true;
      }
      var r = e.metaKey || e.ctrlKey;
      return t === "~" || t === "`" || n === 192 || (t === "*" || t === "8") && !r || t === "-" || n === 189 || i === "Minus";
    };
    t.isInKeydownStatusWithoutKeycode = function (e) {
      var t = e.type === "keydown";
      var n = e.keyCode === 229;
      return t && n;
    };
    t.getTabLevel = function (e, t, n) {
      var i = /bullet[0-9]+/.exec(e);
      var o = t.getContentState().getActiveZone().getZoneId();
      var r = e === "number1";
      if (!i && !r) {
        return false;
      }
      var a = this.getLineAttributes(o, n, "text-indent");
      if (!a) {
        return false;
      }
      var l = /([a-z]+)([0-9]+)/.exec(this.getLineListType(o, n));
      var s = 0;
      if (l) {
        s = Number(l[2]);
      }
      if (a) {
        s += 2;
      }
      return s;
    };
    t.performText = function (e) {
      var t = this.editor;
      var n = t.getContentState();
      var i = t.selection.getSelection();
      var o = i.start;
      var a = i.end;
      var l = a.offset;
      var s = l === 1 ? [] : n.getAttributes(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, a), {
        offset: l - 1
      }), typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, a), {
        offset: l - 1
      }));
      var u = {};
      var d = 0;
      for (; d < s.length; ++d) {
        if (!h.includes(s[d][0])) {
          u[s[d][0]] = s[d][1];
        }
      }
      n.replaceText({
        start: o,
        end: a
      }, e, u, {
        type: ""
      });
    };
    return e;
  }();
  require.d(exports, {
    MarkdownFeature: function () {
      return o;
    },
    MarkdownPlugin: function () {
      return p;
    }
  });
}