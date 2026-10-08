// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'CodeHighlight'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 127099
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var codeBlockHighlightUtils_1 = require("code-block-highlight-utils_1") /*id: 463090*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var codeBlockConstants_1 = require("code-block-constants_1") /*id: 881225*/;
  var u = function (e) {
    function t(t) {
      var r = e.call(this) || this;
      r.name = "CodeHighlight";
      var n = t.editor;
      r.editor = n;
      return r;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.isCodeBlockZoneState = function (e) {
      return codeBlockHighlightUtils_1.isParentCodeBlock(e);
    };
    r.match = function (e) {
      return e === t.KEY;
    };
    r.render = function (e) {
      e.class = a(e.class, e.attributes[codeBlockConstants_1.clientHighlightId]);
      return e.children;
    };
    t.KEY = codeBlockConstants_1.clientHighlightId;
    return t;
  }(baseRendererClass.BaseRenderer);
  var codeLanguageDefinitions = require("code-language-definitions") /*id: 862192*/;
  var h = null;
  var d = function () {
    function e() {
      var e = this;
      this.onmessage = function (t) {
        var r = t.data;
        switch (r.type) {
          case codeBlockConstants_1.featureFlags.HIGHLIGHT:
            e.onHighlightTaskFinished(r.data);
            break;
          case codeBlockConstants_1.featureFlags.AUTO_IDENTIFY_LANGUAGE:
            e.onIdentifyLanguageTaskFinished(r.data);
        }
      };
      this.highlightTasks = new Map();
      this.identifyLanguageTasks = new Map();
      this.worker = null;
      this.getWorkerPromise = null;
      this.initEvents();
    }
    var t = e.prototype;
    e.getInstance = function () {
      e.instance ||= new e();
      return e.instance;
    };
    t.initEvents = function () {
      var e = this;
      this.getWorker().then(function (t) {
        t.addEventListener("message", e.onmessage);
      });
    };
    t.getWorker = function () {
      return typescriptHelpers_1.awaiter(this, undefined, undefined, function () {
        var e = this;
        return typescriptHelpers_1.generator(this, function (t) {
          if (this.worker) {
            return [2, this.worker];
          } else {
            this.getWorkerPromise ||= new Promise(function (t) {
              require.e("inlineCodeWorker") /*id: 45452*/.then(require.bind(require, "inline-code-worker_1") /*id: 32470*/).then(function (r) {
                e.worker = r.default;
                t(e.worker);
              });
            });
            return [2, this.getWorkerPromise];
          }
        });
      });
    };
    t.onHighlightTaskFinished = function (e) {
      var t = e.zoneId;
      var r = e.localMarks;
      var n = this.highlightTasks.get(t);
      if (n == null ? undefined : n.length) {
        var i = n.shift().onLocalMarksReady;
        if (n.length === 0) {
          i(r);
          this.highlightTasks.delete(t);
        } else {
          this.runHighlightTask(t);
        }
      }
    };
    t.onIdentifyLanguageTaskFinished = function (e) {
      var t = e.zoneId;
      var r = e.localMarks;
      var n = e.language;
      var i = e.rankList;
      var o = this.identifyLanguageTasks.get(t);
      if (o == null ? undefined : o.length) {
        var a = o.shift().onLanguageIdentified;
        if (o.length === 0) {
          a({
            localMarks: r,
            language: n,
            rankList: i
          });
          this.identifyLanguageTasks.delete(t);
        } else {
          this.runIdentifyLanguageTask(t);
        }
      }
    };
    t.runHighlightByWorker = function (e) {
      var t = e.zoneId;
      var r = e.code;
      var n = e.language;
      return this.getWorker().then(function (e) {
        e.postMessage({
          type: codeBlockConstants_1.featureFlags.HIGHLIGHT,
          payload: {
            zoneId: t,
            code: r,
            language: n
          }
        });
      });
    };
    t.runHighlightTask = function (e) {
      var t = this.highlightTasks.get(e);
      if (t == null ? undefined : t[0]) {
        var r = t[0];
        var n = r.code;
        var i = r.language;
        this.runHighlightByWorker({
          zoneId: e,
          code: n,
          language: i
        });
      }
    };
    t.runIdentifyLanguageTask = function (e) {
      var t = this.identifyLanguageTasks.get(e);
      if (t == null ? undefined : t[0]) {
        var r = t[0];
        var n = r.code;
        var i = r.zoneId;
        var o = r.language;
        this.getWorker().then(function (e) {
          e.postMessage({
            type: codeBlockConstants_1.featureFlags.AUTO_IDENTIFY_LANGUAGE,
            payload: {
              code: n,
              zoneId: i,
              language: o
            }
          });
        });
      }
    };
    t.addHighlightTask = function (e) {
      var t = e.zoneId;
      var r = {
        code: e.code,
        language: e.language,
        onLocalMarksReady: e.onLocalMarksReady
      };
      var n = this.highlightTasks.get(t);
      if (n) {
        this.highlightTasks.set(t, [n.shift(), r]);
      } else {
        this.highlightTasks.set(t, [r]);
        this.runHighlightTask(t);
      }
    };
    t.addIdentifyLanguageTask = function (e) {
      var t = e.zoneId;
      var r = {
        code: e.code,
        onLanguageIdentified: e.onLanguageIdentified,
        zoneId: t,
        language: e.language
      };
      var n = this.identifyLanguageTasks.get(t);
      if (n) {
        this.identifyLanguageTasks.set(t, [n.shift(), r]);
      } else {
        this.identifyLanguageTasks.set(t, [r]);
        this.runIdentifyLanguageTask(t);
      }
    };
    t.clearHighlightTask = function (e) {
      this.highlightTasks.delete(e);
    };
    t.clearIdentifyLanguageTask = function (e) {
      this.identifyLanguageTasks.delete(e);
    };
    t.destroy = function () {
      var t = this;
      this.highlightTasks.clear();
      this.identifyLanguageTasks.clear();
      this.getWorker().then(function () {
        t.worker = null;
        t.getWorkerPromise = null;
      });
      e.instance = null;
    };
    return e;
  }();
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var zoneEntityResolver = require("zone-entity-resolver") /*id: 702095*/;
  var idleCallbackPolyfill = require("idle-callback-polyfill") /*id: 162788*/;
  var y = function (e) {
    function t(t) {
      return e.call(this, {
        editor: t.editor
      }) || this;
    }
    typescriptHelpers_1.inherits(t, e);
    var i = t.prototype;
    t.loadHighlightJs = function () {
      return function () {
        return typescriptHelpers_1.awaiter(this, undefined, undefined, function () {
          var e;
          return typescriptHelpers_1.generator(this, function (t) {
            switch (t.label) {
              case 0:
                if (h) {
                  return [2];
                }
                t.label = 1;
              case 1:
                t.trys.push([1, 3,, 4]);
                return [4, require.e("highlightjs") /*id: 23471*/.then(require.bind(require, "code-syntax-highlighter") /*id: 648637*/)];
              case 2:
                h = (e = t.sent()).highlight;
                e.lowlight;
                return [3, 4];
              case 3:
                t.sent();
                return [3, 4];
              case 4:
                return [2];
            }
          });
        });
      }();
    };
    Object.defineProperty(i, "highlight", {
      get: function () {
        return h;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(i, "codeWorkerManager", {
      get: function () {
        return d.getInstance();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(i, "languageMap", {
      get: function () {
        return codeLanguageDefinitions.languageLabels;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(i, "sortedLanguageList", {
      get: function () {
        return codeLanguageDefinitions.languageNameList;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(i, "defaultLanguage", {
      get: function () {
        return codeBlockConstants_1.defaultLanguageName;
      },
      enumerable: false,
      configurable: true
    });
    return t;
  }(function () {
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
        if ((r = e.options.extra) === null || r === undefined || !r.foldAction) {
          var r;
          var n = t.diffContentChanges(e);
          var i = n.highlightZones;
          var o = n.identifyZoneIds;
          i.forEach(function (e) {
            var r = e.async;
            var n = e.zoneId;
            if (r) {
              t.highlightZone(n);
            } else {
              t.addHighlightRICTask(n);
            }
          });
          o.forEach(function (e) {
            t.identifyLanguage(e).then(function (e) {
              t.onLanguageIdentified(e);
            });
          });
        }
      };
      this.onLanguageIdentified = function (e) {
        var r = e.zoneId;
        var n = e.localMarks;
        var i = e.language;
        var o = t.editor.getContentState().getZoneState(r);
        if (o && t.isCodeBlockZoneState(o)) {
          var a = o.getModelText();
          if (i) {
            t.applyLanguage(r, i, true);
            t.applyLocalMarksRIC(r, n, a);
          }
        }
      };
      var r = e.editor;
      this.editor = r;
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
      return codeBlockHighlightUtils_1.isParentCodeBlock(e);
    };
    t.getLanguage = function (e) {
      return codeBlockHighlightUtils_1.getParentLanguage(e);
    };
    t.getFolded = function (e) {
      return codeBlockHighlightUtils_1.isCodeBlockFolded(e);
    };
    t.getHighlightApplyExtra = function () {
      var e;
      (e = {
        shouldCollab: false
      })[codeBlockConstants_1.highlightClassName] = true;
      return e;
    };
    t.diffContentChanges = function (e) {
      var t = this;
      var r = e.changes;
      var n = e.previous;
      var o = e.current;
      var a = e.options.type;
      return Object.keys(r).reduce(function (e, s) {
        var u = o.getZoneState(s);
        var c = n.getZoneState(s);
        if (a && ["setAttributes", "undo"].includes(a)) {
          r[s].forEach(function (t) {
            var r = t.deletes;
            t.inserts.forEach(function (t, n) {
              if (codeBlockHighlightUtils_1.isCodeBlockEntity(t) && r[n].getAttributes().toMap().language !== t.getAttributes().toMap().language) {
                var o = codeBlockHighlightUtils_1.getCodeBlockZoneIds(t).map(function (e) {
                  return {
                    async: false,
                    zoneId: e
                  };
                });
                e.highlightZones = e.highlightZones.concat(o);
              }
            });
          });
        }
        if (!u || !t.isCodeBlockZoneState(u) || a !== "applyPaste" && (c == null ? undefined : c.getModelText()) === u.getModelText()) {
          return e;
        }
        if (a === "applyPaste" && c && c.isEmpty() && t.getLanguage(u) === t.defaultLanguage && !t.identifiedZones.get(s)) {
          t.identifiedZones.set(s, true);
          e.identifyZoneIds.push(s);
          return e;
        }
        var h = u.getModelText().length < codeBlockConstants_1.maxCharacters;
        e.highlightZones.push({
          zoneId: s,
          async: h
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
      var n = this.getLanguage(e);
      return codeLanguageDefinitions.languageAliases.find(function (e) {
        return e[0] === n.toLowerCase();
      })?.[1] ?? n;
    };
    t.highlightZone = function (e) {
      if (this.editor.getStatus("isComposing")) {
        this.highlightInterruptedZones.add(e);
        return;
      }
      this.codeWorkerManager.clearHighlightTask(e);
      var t = this.editor.getContentState().getZoneState(e);
      if (t) {
        var r = this.getLanguageToHighlight(t);
        var n = t.getModelText();
        var i = new contentStructureDelta.ContentDelta({
          zoneId: e
        });
        var o = n.length > 0 ? n.length - 1 : 0;
        var a = this.getClearHighlightDelta(0, o, e);
        var s = this.getHighlightDelta(r, 0, o, e);
        i = i.compose(a).compose(s);
        this.applyDelta(e, i);
      }
    };
    t.clearZoneHighlight = function (e) {
      var t;
      var r = this.editor.getContentState();
      var n = (t = r.getZoneState(e)) === null || t === undefined ? undefined : t.getModelText();
      if (n) {
        var i = this.getClearHighlightDelta(0, n.length, e);
        r.apply(i, {
          type: "clearZoneHighlight",
          extra: this.getHighlightApplyExtra(),
          nonundoable: true
        });
      }
    };
    t.cancelApplyLocalMarksRIC = function (e) {
      var t = this.zoneIdToApplyLocalMarksRICHandler.get(e);
      if (t !== undefined) {
        idleCallbackPolyfill.cancelIdleCallback(t);
      }
    };
    t.identifyLanguage = function (e) {
      return typescriptHelpers_1.awaiter(this, undefined, undefined, function () {
        var t = this;
        return typescriptHelpers_1.generator(this, function (r) {
          return [2, new Promise(function (r) {
            var n = t.editor.getContentState().getZoneState(e);
            if (!n) {
              return r({
                zoneId: e,
                localMarks: [],
                language: t.defaultLanguage,
                rankList: []
              });
            }
            if (!t.isCodeBlockZoneState(n)) {
              r({
                zoneId: e,
                localMarks: [],
                language: t.defaultLanguage,
                rankList: []
              });
            }
            var i = n.getModelText();
            var o = t.getLanguage(n);
            t.codeWorkerManager.addIdentifyLanguageTask({
              code: i,
              zoneId: e,
              onLanguageIdentified: function (n) {
                var i = n.localMarks;
                var o = n.language;
                var a = n.rankList;
                r({
                  zoneId: e,
                  localMarks: i,
                  language: t.sortedLanguageList.find(function (e) {
                    return e.toLocaleLowerCase() === o;
                  }) || codeBlockConstants_1.defaultLanguageName,
                  rankList: a
                });
              },
              language: o
            });
          })];
        });
      });
    };
    t.applyLanguage = function (e, t, r = false) {
      var n = this.editor.getContentState().getZoneState(e);
      if (n && this.isCodeBlockZoneState(n) && t) {
        var i = this.editor.getContentState();
        var o = zoneEntityResolver.getZoneEntity(this.editor, e);
        if (o) {
          var a = {
            start: o.start,
            end: o.end
          };
          try {
            localStorage.setItem(codeBlockConstants_1.lastLangStorageKey, t);
          } catch (e) {}
          i.setAttributes(a, {
            language: t
          }, {
            nonundoable: r,
            internalZonesIncluded: false
          });
        }
      }
    };
    t.getHighlightMarksLimitPerLine = function () {
      return codeBlockConstants_1.timeoutDuration;
    };
    t.applyLocalMarksRIC = function (e, t, r, i) {
      var o = this;
      this.applYhighlightStart = performance.now();
      this.cancelApplyLocalMarksRIC(e);
      if (!t.length) {
        this.clearZoneHighlight(e);
      }
      var a = 0;
      var s = 0;
      function u(c) {
        if (!t.length) {
          o.cancelApplyLocalMarksRIC(e);
          if (i) {
            i();
          }
          return;
        }
        while (c.timeRemaining() > 0 && !o.editor.getStatus("isComposing")) {
          var h = codeBlockConstants_1.debounceDelay;
          var d = new contentStructureDelta.ContentDelta({
            zoneId: e
          });
          var f = new contentStructureDelta.ContentDelta().retain(0);
          var g = 0;
          for (a = s; h-- > 0 && t.length;) {
            var p = t.shift();
            var y = typescriptHelpers_1.readIterator(p.range, 2);
            var v = y[0];
            var b = y[1];
            f.retain(v - g).retain(b - v, p.mark);
            s = b;
            g = b;
          }
          if (t.length === 0) {
            s = r.length;
          }
          var w = o.getClearHighlightDelta(a, s, e);
          d = d.compose(w).compose(f);
          o.editor.getContentState().apply(d, {
            type: "highlightCodeBlock",
            extra: o.getHighlightApplyExtra(),
            nonundoable: true,
            noLayoutUpdate: true
          });
          if (t.length === 0 && i) {
            i();
          }
        }
        var C = idleCallbackPolyfill.requestIdleCallback(u);
        o.zoneIdToApplyLocalMarksRICHandler.set(e, C);
      }
      var c = idleCallbackPolyfill.requestIdleCallback(u);
      this.zoneIdToApplyLocalMarksRICHandler.set(e, c);
    };
    t.addHighlightRICTask = function (e) {
      this.highlightRICTaskMap.set(e, this.highlightZoneWithRIC(e));
    };
    t.isExceedMarksLength = function (e, t) {
      var r;
      var i;
      var o = 0;
      var a = e.indexOf("\n");
      try {
        var s = typescriptHelpers_1.getValues(t);
        var l = s.next();
        for (; !l.done; l = s.next()) {
          var u = l.value;
          if (o > this.getHighlightMarksLimitPerLine()) {
            return true;
          }
          if (u.range[1] < a) {
            o += 1;
          } else {
            o = 1;
            a = e.indexOf("\n", a + 1);
          }
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
      return false;
    };
    t.highlightZoneWithRIC = function (e) {
      var t = this;
      this.cancelApplyLocalMarksRIC(e);
      var r = this.editor.getContentState().getZoneState(e);
      return new Promise(function (n) {
        if (!r) {
          n();
          t.highlightRICTaskMap.delete(e);
          return;
        }
        if (t.editor.getStatus("isComposing")) {
          t.highlightInterruptedZones.add(e);
          return;
        }
        var i = t.getLanguageToHighlight(r);
        var o = r.getModelText();
        function a() {
          n();
          var r = performance.now() - t.applYhighlightStart;
          t.highlightRICFinished(r);
          t.highlightRICTaskMap.delete(e);
        }
        t.codeWorkerManager.addHighlightTask({
          code: o,
          language: i,
          zoneId: e,
          onLocalMarksReady: function (r) {
            t.onLocalMarksReady(r);
            if (t.isExceedMarksLength(o, r)) {
              t.clearZoneHighlight(e);
              a();
              return;
            }
            if (r.length < codeBlockConstants_1.debounceDelay) {
              t.applyLocalMarks(e, r, a);
            } else {
              t.applyLocalMarksRIC(e, r, o, a);
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
    t.getClearHighlightDelta = function (e, t, r) {
      var i;
      var o;
      var a;
      var s = new contentStructureDelta.ContentDelta({
        zoneId: r
      });
      var u = this.editor.getContentState().getZoneState(r);
      if (!u) {
        return s;
      }
      var c = u.getEntities({
        start: u.offsetToPoint(e),
        end: u.offsetToPoint(t)
      }, function (e) {
        return e === codeBlockConstants_1.clientHighlightId;
      });
      var h = 0;
      try {
        var d = typescriptHelpers_1.getValues(c);
        var f = d.next();
        for (; !f.done; f = d.next()) {
          var g = f.value;
          var p = u.pointToOffset(g.start);
          var m = u.pointToOffset(g.end);
          if (typeof p == "number" && typeof m == "number") {
            s.retain(p - h).retain(m - p, ((a = {})[codeBlockConstants_1.clientHighlightId] = "", a));
            h = m;
          }
        }
      } catch (e) {
        i = {
          error: e
        };
      } finally {
        try {
          if (f && !f.done && (o = d.return)) {
            o.call(d);
          }
        } finally {
          if (i) {
            throw i.error;
          }
        }
      }
      return s;
    };
    t.getHighlightDelta = function (e, t, r, i) {
      var o;
      var a;
      var s = new contentStructureDelta.ContentDelta({
        zoneId: i
      }).retain(t);
      var l = this.highlight;
      if (!l || !e || e === this.defaultLanguage || this.languageMap[e] === this.defaultLanguage) {
        return s;
      }
      var u = this.editor.getContentState().getZoneState(i);
      if (!u) {
        return s;
      }
      var c = u.getModelText().slice(t, r);
      try {
        var h = l(c, e);
        var d = 0;
        try {
          var f = typescriptHelpers_1.getValues(h);
          var g = f.next();
          for (; !g.done; g = f.next()) {
            var p = g.value;
            var m = typescriptHelpers_1.readIterator(p.range, 2);
            var y = m[0];
            var v = m[1];
            s.retain(y - d).retain(v - y, p.mark);
            d = v;
          }
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            if (g && !g.done && (a = f.return)) {
              a.call(f);
            }
          } finally {
            if (o) {
              throw o.error;
            }
          }
        }
      } catch (e) {}
      return s;
    };
    t.applyLocalMarks = function (e, t, r) {
      var i;
      var o;
      var a = this.editor.getContentState().getZoneState(e);
      if (a) {
        var s = a.getModelText();
        var l = s.length > 0 ? s.length - 1 : 0;
        var u = this.getClearHighlightDelta(0, l, e);
        var c = new contentStructureDelta.ContentDelta({
          zoneId: e
        }).retain(0);
        var h = new contentStructureDelta.ContentDelta({
          zoneId: e
        });
        var d = 0;
        try {
          var f = typescriptHelpers_1.getValues(t);
          var g = f.next();
          for (; !g.done; g = f.next()) {
            var p = g.value;
            var m = typescriptHelpers_1.readIterator(p.range, 2);
            var y = m[0];
            var v = m[1];
            c.retain(y - d).retain(v - y, p.mark);
            d = v;
          }
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            if (g && !g.done && (o = f.return)) {
              o.call(f);
            }
          } finally {
            if (i) {
              throw i.error;
            }
          }
        }
        h = h.compose(u).compose(c);
        this.applyDelta(e, h, r);
      }
    };
    t.applyDelta = function (e, t, r) {
      var n = this;
      if (deltaSetCore.isEmptyOps(t)) {
        if (r) {
          r();
        }
      } else {
        this.applyHighlightDeltaTimer = window.setTimeout(function () {
          if (n.editor.getStatus("isComposing")) {
            n.highlightInterruptedZones.add(e);
            return;
          }
          n.editor.getContentState().apply(t, {
            type: "highlightZone",
            extra: n.getHighlightApplyExtra(),
            nonundoable: true
          });
          if (r) {
            r();
          }
        });
      }
    };
    t.reset = function () {
      var e = this;
      this.zoneIdToApplyLocalMarksRICHandler.forEach(function (t, r) {
        idleCallbackPolyfill.cancelIdleCallback(t);
        e.codeWorkerManager.clearHighlightTask(r);
        e.codeWorkerManager.clearIdentifyLanguageTask(r);
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
      this.zoneIdToApplyLocalMarksRICHandler.forEach(function (t, r) {
        idleCallbackPolyfill.cancelIdleCallback(t);
        e.codeWorkerManager.clearHighlightTask(r);
        e.codeWorkerManager.clearIdentifyLanguageTask(r);
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
  }());
  var v = function (e) {
    function t(t) {
      var r = e.call(this, t) || this;
      r.handleEditorMount = function () {
        var e = r.editor.getContentState().getContent();
        Array.from(e.keys()).forEach(function (t) {
          var n = e.get(t);
          if (n && r.isCodeBlockZoneState(n)) {
            r.highlightController.addHighlightRICTask(t);
          }
        });
      };
      var n = t.editor;
      r.highlightController = new y({
        editor: n
      });
      y.loadHighlightJs();
      return r;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.isCodeBlockZoneState = function (e) {
      return codeBlockHighlightUtils_1.isParentCodeBlock(e);
    };
    r.editorDidMount = function () {
      this.handleEditorMount();
    };
    r.reset = function () {
      this.highlightController.reset();
    };
    r.destroy = function () {
      this.highlightController.destroy();
    };
    return t;
  }(u);
  require.d(exports, {
    CodeHighlight: function () {
      return v;
    }
  });
}