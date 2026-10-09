// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'HighlightController'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 22007.b9e6c706.js
         * chunkId: 22007
         * moduleId: 63599
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var codeBlockHighlightjsConstants = require("code-block-highlightjs-constants") /*id: 433332*/;
  var highlightjsLanguageAliases = require("highlightjs-language-aliases") /*id: 807150*/;
  var codeBlockHighlightUtils = require("code-block-highlight-utils") /*id: 873866*/;
  var requestIdleCallbackPolyfill = require("request-idle-callback-polyfill") /*id: 847959*/;
  var u = function () {
    function e(e) {
      var t = this;
      this.applYhighlightStart = 0;
      this.handleCompositionEnd = function (e) {
        if (e.data === "" && t.highlightInterruptedZones.size) {
          t.highlightInterruptedZones.forEach(function (e) {
            t.addHighlightRICTask(e);
          });
        }
        t.highlightInterruptedZones.clear();
      };
      this.handleContentChange = function (e) {
        if ((n = e.options.extra) === null || n === undefined || !n.foldAction) {
          var n;
          var o = t.diffContentChanges(e);
          var i = o.highlightZones;
          var r = o.identifyZoneIds;
          i.forEach(function (e) {
            var n = e.async;
            var o = e.zoneId;
            if (n) {
              t.highlightZone(o);
            } else {
              t.addHighlightRICTask(o);
            }
          });
          r.forEach(function (e) {
            t.identifyLanguage(e).then(function (e) {
              t.onLanguageIdentified(e);
            });
          });
        }
      };
      this.onLanguageIdentified = function (e) {
        var n = e.zoneId;
        var o = e.localMarks;
        var i = e.language;
        var r = t.editor.getContentState().getZoneState(n);
        if (r && t.isCodeBlockZoneState(r)) {
          var a = r.getModelText();
          if (i) {
            t.applyLanguage(n, i, true);
            t.applyLocalMarksRIC(n, o, a);
          }
        }
      };
      var n = e.editor;
      this.editor = n;
      this.zoneIdToApplyLocalMarksRICHandler = new Map();
      this.identifiedZones = new Map();
      this.highlightRICTaskMap = new Map();
      this.highlightInterruptedZones = new Set();
      this.bindEvents();
    }
    var t = e.prototype;
    t.bindEvents = function () {
      this.editor.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
      this.editor.on(editorEventConstants.editorEventTypes.COMPOSITION_END, this.handleCompositionEnd);
    };
    t.unBindEvents = function () {
      this.editor.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
      this.editor.off(editorEventConstants.editorEventTypes.COMPOSITION_END, this.handleCompositionEnd);
    };
    t.isCodeBlockZoneState = function (e) {
      return codeBlockHighlightUtils.isCodeBlockEntity(e);
    };
    t.getLanguage = function (e) {
      return codeBlockHighlightUtils.getCodeBlockLang(e);
    };
    t.getFolded = function (e) {
      return codeBlockHighlightUtils.isCodeBlockFolded(e);
    };
    t.getHighlightApplyExtra = function () {
      var e;
      (e = {
        shouldCollab: false
      })[codeBlockHighlightjsConstants.highlightActionName] = true;
      return e;
    };
    t.diffContentChanges = function (e) {
      var t = this;
      var n = e.changes;
      var o = e.previous;
      var i = e.current;
      var r = e.options.type;
      return Object.keys(n).reduce(function (e, a) {
        var s = i.getZoneState(a);
        var c = o.getZoneState(a);
        if (r && ["setAttributes", "undo"].includes(r)) {
          n[a].forEach(function (t) {
            var n = t.deletes;
            t.inserts.forEach(function (t, o) {
              if (codeBlockHighlightUtils.isCodeBlockType(t) && n[o].getAttributes().toMap().language !== t.getAttributes().toMap().language) {
                var i = codeBlockHighlightUtils.getCodeBlockZoneIds(t).map(function (e) {
                  return {
                    async: false,
                    zoneId: e
                  };
                });
                e.highlightZones = e.highlightZones.concat(i);
              }
            });
          });
        }
        if (!s || !t.isCodeBlockZoneState(s) || r !== "applyPaste" && (c == null ? undefined : c.getModelText()) === s.getModelText()) {
          return e;
        }
        if (r === "applyPaste" && c && c.isEmpty() && t.getLanguage(s) === t.defaultLanguage && !t.identifiedZones.get(a)) {
          t.identifiedZones.set(a, true);
          e.identifyZoneIds.push(a);
          return e;
        }
        var u = s.getModelText().length < codeBlockHighlightjsConstants.maxCodeLength;
        e.highlightZones.push({
          zoneId: a,
          async: u
        });
        return e;
      }, {
        highlightZones: [],
        identifyZoneIds: []
      });
    };
    t.onLocalMarksReady = function (e) {
      return e;
    };
    t.highlightRICFinished = function (e) {
      return e;
    };
    t.getLanguageToHighlight = function (e) {
      var o = this.getLanguage(e);
      return highlightjsLanguageAliases.shellAliases.find(function (e) {
        return e[0] === o.toLowerCase();
      })?.[1] ?? o;
    };
    t.highlightZone = function (e) {
      if (this.editor.getStatus("isComposing")) {
        this.highlightInterruptedZones.add(e);
        return;
      }
      this.codeWorkerManager.clearHighlightTask(e);
      var t = this.editor.getContentState().getZoneState(e);
      if (t) {
        var n = this.getLanguageToHighlight(t);
        var o = t.getModelText();
        var i = new contentStructureDelta.ContentDelta({
          zoneId: e
        });
        var a = o.length > 0 ? o.length - 1 : 0;
        var l = this.getClearHighlightDelta(0, a, e);
        var s = this.getHighlightDelta(n, 0, a, e);
        i = i.compose(l).compose(s);
        this.applyDelta(e, i);
      }
    };
    t.clearZoneHighlight = function (e) {
      var t;
      var n = this.editor.getContentState();
      var o = (t = n.getZoneState(e)) === null || t === undefined ? undefined : t.getModelText();
      if (o) {
        var i = this.getClearHighlightDelta(0, o.length, e);
        n.apply(i, {
          type: "clearZoneHighlight",
          extra: this.getHighlightApplyExtra(),
          nonundoable: true
        });
      }
    };
    t.cancelApplyLocalMarksRIC = function (e) {
      var t = this.zoneIdToApplyLocalMarksRICHandler.get(e);
      if (t !== undefined) {
        requestIdleCallbackPolyfill.cancelIdleCallback(t);
      }
    };
    t.identifyLanguage = function (e) {
      return typescriptHelpers.asyncWrapper(this, undefined, undefined, function () {
        var t = this;
        return typescriptHelpers.generatorHelper(this, function (n) {
          return [2, new Promise(function (n) {
            var o = t.editor.getContentState().getZoneState(e);
            if (!o) {
              return n({
                zoneId: e,
                localMarks: [],
                language: t.defaultLanguage,
                rankList: []
              });
            }
            if (!t.isCodeBlockZoneState(o)) {
              n({
                zoneId: e,
                localMarks: [],
                language: t.defaultLanguage,
                rankList: []
              });
            }
            var i = o.getModelText();
            var r = t.getLanguage(o);
            t.codeWorkerManager.addIdentifyLanguageTask({
              code: i,
              zoneId: e,
              onLanguageIdentified: function (o) {
                var i = o.localMarks;
                var r = o.language;
                var a = o.rankList;
                n({
                  zoneId: e,
                  localMarks: i,
                  language: t.sortedLanguageList.find(function (e) {
                    return e.toLocaleLowerCase() === r;
                  }) || codeBlockHighlightjsConstants.plainTextLabel,
                  rankList: a
                });
              },
              language: r
            });
          })];
        });
      });
    };
    t.applyLanguage = function (e, t, n = false) {
      var o;
      var i;
      var r;
      var a;
      var s;
      var d = this.editor.getContentState().getZoneState(e);
      if (d && this.isCodeBlockZoneState(d) && t) {
        var c = this.editor.getContentState();
        var u = (s = (o = (a = (r = this.editor.getContentState()).getZoneState(e)) == null ? undefined : a.parent) === null || o === undefined ? undefined : o.getZoneId()) && ((i = r.getZoneState(s)) === null || i === undefined ? undefined : i.getEntities([["zoneId", e]])[0]) || null;
        if (u) {
          var h = {
            start: u.start,
            end: u.end
          };
          try {
            localStorage.setItem(codeBlockHighlightjsConstants.lastLanguageStorageKey, t);
          } catch (e) {}
          c.setAttributes(h, {
            language: t
          }, {
            nonundoable: n,
            internalZonesIncluded: false
          });
        }
      }
    };
    t.getHighlightMarksLimitPerLine = function () {
      return codeBlockHighlightjsConstants.debounceDelay;
    };
    t.applyLocalMarksRIC = function (e, t, n, i) {
      var a = this;
      this.applYhighlightStart = performance.now();
      this.cancelApplyLocalMarksRIC(e);
      if (!t.length) {
        this.clearZoneHighlight(e);
      }
      var s = 0;
      var d = 0;
      function u(h) {
        if (!t.length) {
          a.cancelApplyLocalMarksRIC(e);
          if (i) {
            i();
          }
          return;
        }
        while (h.timeRemaining() > 0 && !a.editor.getStatus("isComposing")) {
          var f = codeBlockHighlightjsConstants.defaultTabSize;
          var g = new contentStructureDelta.ContentDelta({
            zoneId: e
          });
          var p = new contentStructureDelta.ContentDelta().retain(0);
          var v = 0;
          for (s = d; f-- > 0 && t.length;) {
            var m = t.shift();
            var C = typescriptHelpers.iteratorToArray(m.range, 2);
            var y = C[0];
            var S = C[1];
            p.retain(y - v).retain(S - y, m.mark);
            d = S;
            v = S;
          }
          if (t.length === 0) {
            d = n.length;
          }
          var b = a.getClearHighlightDelta(s, d, e);
          g = g.compose(b).compose(p);
          a.editor.getContentState().apply(g, {
            type: "highlightCodeBlock",
            extra: a.getHighlightApplyExtra(),
            nonundoable: true,
            noLayoutUpdate: true
          });
          if (t.length === 0 && i) {
            i();
          }
        }
        var E = requestIdleCallbackPolyfill.requestIdleCallback(u);
        a.zoneIdToApplyLocalMarksRICHandler.set(e, E);
      }
      var h = requestIdleCallbackPolyfill.requestIdleCallback(u);
      this.zoneIdToApplyLocalMarksRICHandler.set(e, h);
    };
    t.addHighlightRICTask = function (e) {
      this.highlightRICTaskMap.set(e, this.highlightZoneWithRIC(e));
    };
    t.isExceedMarksLength = function (e, t) {
      var n;
      var i;
      var r = 0;
      var a = e.indexOf("\n");
      try {
        var l = typescriptHelpers.createIterator(t);
        var s = l.next();
        for (; !s.done; s = l.next()) {
          var d = s.value;
          if (r > this.getHighlightMarksLimitPerLine()) {
            return true;
          }
          if (d.range[1] < a) {
            r += 1;
          } else {
            r = 1;
            a = e.indexOf("\n", a + 1);
          }
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          if (s && !s.done && (i = l.return)) {
            i.call(l);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      return false;
    };
    t.highlightZoneWithRIC = function (e) {
      var t = this;
      this.cancelApplyLocalMarksRIC(e);
      var n = this.editor.getContentState().getZoneState(e);
      return new Promise(function (o) {
        if (!n) {
          o();
          t.highlightRICTaskMap.delete(e);
          return;
        }
        if (t.editor.getStatus("isComposing")) {
          t.highlightInterruptedZones.add(e);
          return;
        }
        var i = t.getLanguageToHighlight(n);
        var r = n.getModelText();
        function a() {
          o();
          var n = performance.now() - t.applYhighlightStart;
          t.highlightRICFinished(n);
          t.highlightRICTaskMap.delete(e);
        }
        t.codeWorkerManager.addHighlightTask({
          code: r,
          language: i,
          zoneId: e,
          onLocalMarksReady: function (n) {
            t.onLocalMarksReady(n);
            if (t.isExceedMarksLength(r, n)) {
              t.clearZoneHighlight(e);
              a();
              return;
            }
            if (n.length < codeBlockHighlightjsConstants.defaultTabSize) {
              t.applyLocalMarks(e, n, a);
            } else {
              t.applyLocalMarksRIC(e, n, r, a);
            }
          }
        });
      });
    };
    t.awaitHighlightRICFinished = function () {
      var e = this;
      return new Promise(function (t) {
        Promise.all(Array.from(e.highlightRICTaskMap.values())).then(t).catch(t);
      });
    };
    t.getClearHighlightDelta = function (e, t, n) {
      var i;
      var a;
      var s;
      var d = new contentStructureDelta.ContentDelta({
        zoneId: n
      });
      var c = this.editor.getContentState().getZoneState(n);
      if (!c) {
        return d;
      }
      var u = c.getEntities({
        start: c.offsetToPoint(e),
        end: c.offsetToPoint(t)
      }, function (e) {
        return e === codeBlockHighlightjsConstants.clientSideHighlightFlag;
      });
      var h = 0;
      try {
        var f = typescriptHelpers.createIterator(u);
        var g = f.next();
        for (; !g.done; g = f.next()) {
          var p = g.value;
          var v = c.pointToOffset(p.start);
          var m = c.pointToOffset(p.end);
          if (typeof v == "number" && typeof m == "number") {
            d.retain(v - h).retain(m - v, ((s = {})[codeBlockHighlightjsConstants.clientSideHighlightFlag] = "", s));
            h = m;
          }
        }
      } catch (e) {
        i = {
          error: e
        };
      } finally {
        try {
          if (g && !g.done && (a = f.return)) {
            a.call(f);
          }
        } finally {
          if (i) {
            throw i.error;
          }
        }
      }
      return d;
    };
    t.getHighlightDelta = function (e, t, n, i) {
      var a;
      var l;
      var s = new contentStructureDelta.ContentDelta({
        zoneId: i
      }).retain(t);
      var d = this.highlight;
      if (!d || !e || e === this.defaultLanguage || this.languageMap[e] === this.defaultLanguage) {
        return s;
      }
      var c = this.editor.getContentState().getZoneState(i);
      if (!c) {
        return s;
      }
      var u = c.getModelText().slice(t, n);
      try {
        var h = d(u, e);
        var f = 0;
        try {
          var g = typescriptHelpers.createIterator(h);
          var p = g.next();
          for (; !p.done; p = g.next()) {
            var v = p.value;
            var m = typescriptHelpers.iteratorToArray(v.range, 2);
            var C = m[0];
            var y = m[1];
            s.retain(C - f).retain(y - C, v.mark);
            f = y;
          }
        } catch (e) {
          a = {
            error: e
          };
        } finally {
          try {
            if (p && !p.done && (l = g.return)) {
              l.call(g);
            }
          } finally {
            if (a) {
              throw a.error;
            }
          }
        }
      } catch (e) {}
      return s;
    };
    t.applyLocalMarks = function (e, t, n) {
      var i;
      var a;
      var l = this.editor.getContentState().getZoneState(e);
      if (l) {
        var s = l.getModelText();
        var d = s.length > 0 ? s.length - 1 : 0;
        var c = this.getClearHighlightDelta(0, d, e);
        var u = new contentStructureDelta.ContentDelta({
          zoneId: e
        }).retain(0);
        var h = new contentStructureDelta.ContentDelta({
          zoneId: e
        });
        var f = 0;
        try {
          var g = typescriptHelpers.createIterator(t);
          var p = g.next();
          for (; !p.done; p = g.next()) {
            var v = p.value;
            var m = typescriptHelpers.iteratorToArray(v.range, 2);
            var C = m[0];
            var y = m[1];
            u.retain(C - f).retain(y - C, v.mark);
            f = y;
          }
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            if (p && !p.done && (a = g.return)) {
              a.call(g);
            }
          } finally {
            if (i) {
              throw i.error;
            }
          }
        }
        h = h.compose(c).compose(u);
        this.applyDelta(e, h, n);
      }
    };
    t.applyDelta = function (e, t, n) {
      var o = this;
      if (deltaSetCore.isEmptyOps(t)) {
        if (n) {
          n();
        }
      } else {
        this.applyHighlightDeltaTimer = window.setTimeout(function () {
          if (o.editor.getStatus("isComposing")) {
            o.highlightInterruptedZones.add(e);
            return;
          }
          o.editor.getContentState().apply(t, {
            type: "highlightZone",
            extra: o.getHighlightApplyExtra(),
            nonundoable: true
          });
          if (n) {
            n();
          }
        });
      }
    };
    t.reset = function () {
      var e = this;
      this.zoneIdToApplyLocalMarksRICHandler.forEach(function (t, n) {
        requestIdleCallbackPolyfill.cancelIdleCallback(t);
        e.codeWorkerManager.clearHighlightTask(n);
        e.codeWorkerManager.clearIdentifyLanguageTask(n);
      });
      this.zoneIdToApplyLocalMarksRICHandler.clear();
      this.identifiedZones.clear();
      this.highlightRICTaskMap.clear();
      this.highlightInterruptedZones.clear();
      if (this.applyHighlightDeltaTimer) {
        clearTimeout(this.applyHighlightDeltaTimer);
      }
    };
    t.destroy = function () {
      var e = this;
      this.zoneIdToApplyLocalMarksRICHandler.forEach(function (t, n) {
        requestIdleCallbackPolyfill.cancelIdleCallback(t);
        e.codeWorkerManager.clearHighlightTask(n);
        e.codeWorkerManager.clearIdentifyLanguageTask(n);
      });
      this.zoneIdToApplyLocalMarksRICHandler.clear();
      this.identifiedZones.clear();
      this.highlightRICTaskMap.clear();
      this.highlightInterruptedZones.clear();
      if (this.applyHighlightDeltaTimer) {
        clearTimeout(this.applyHighlightDeltaTimer);
      }
      this.unBindEvents();
      this.codeWorkerManager.destroy();
    };
    return e;
  }();
  require.d(exports, {
    HighlightController: function () {
      return u;
    }
  });
}