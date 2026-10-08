// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'CodeBlockPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 22007.b9e6c706.js
         * chunkId: 22007
         * moduleId: 590725
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var reactinxStaticText = require("reactinx-static-text") /*id: 594747*/;
  var reactinxDomContextExports = require("reactinx-dom-context-exports") /*id: 327577*/;
  var reactinxDomReconciler = require("reactinx-dom-reconciler") /*id: 454385*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var codeBlockHighlightjsConstants = require("code-block-highlightjs-constants") /*id: 433332*/;
  var editorConstantTypes = require("editor-constant-types") /*id: 392244*/;
  var contentFoldOperations = require("content-fold-operations") /*id: 849924*/;
  var codeBlockHighlightUtils = require("code-block-highlight-utils") /*id: 873866*/;
  var requestIdleCallbackPolyfill = require("request-idle-callback-polyfill") /*id: 847959*/;
  var eventEmitterClass_2 = require("event-emitter-class_2") /*id: 114194*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  var moduleReExportWrapper = require("module-re-export-wrapper") /*id: 71973*/;
  var deepEqualityCheck_1 = require("deep-equality-check_1") /*id: 956585*/;
  function S(e, t) {
    var n;
    var i;
    var r;
    var a;
    var l = [t];
    if (!e.length) {
      return l;
    }
    try {
      var s = typescriptHelpers.createIterator(e);
      var d = s.next();
      for (; !d.done; d = s.next()) {
        var c = d.value;
        var u = [];
        try {
          r = undefined;
          var h = typescriptHelpers.createIterator(l);
          var f = h.next();
          for (; !f.done; f = h.next()) {
            var g = f.value;
            if (g.end < c.start || g.start > c.end) {
              u.push(g);
            } else {
              if (g.start < c.start) {
                u.push({
                  start: g.start,
                  end: c.start - 1
                });
              }
              if (g.end > c.end) {
                u.push({
                  start: c.end + 1,
                  end: g.end
                });
              }
            }
          }
        } catch (e) {
          r = {
            error: e
          };
        } finally {
          try {
            if (f && !f.done && (a = h.return)) {
              a.call(h);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
        l = u;
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        if (d && !d.done && (i = s.return)) {
          i.call(s);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return l;
  }
  var contentDeltaOpsUtil = require("content-delta-ops-util") /*id: 444706*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var L = function () {
    function e() {
      var e = this;
      this.worker = null;
      this.getWorkerPromise = null;
      this.tasks = new Map();
      this.onMessage = function (t) {
        var n = t.data;
        if (n.type === editorConstantTypes.ActionTypes.Fold) {
          e.handleCalcFoldFinished(n.payload);
        }
      };
      this.handleCalcFoldFinished = function (t) {
        var n = t.key;
        var o = e.tasks.get(n);
        if (o == null ? undefined : o.length) {
          o.shift().onFinish(t);
          if (o.length === 0) {
            e.tasks.delete(n);
          } else {
            e.runTask(n);
          }
        }
      };
      this.runTask = function (t) {
        var n = e.tasks.get(t);
        var o = n == null ? undefined : n[0];
        if (o) {
          var i = {
            key: o.key,
            code: o.code,
            lines: o.lines,
            language: o.language,
            changeRangesList: o.changeRangesList
          };
          return e.getWorker().then(function (e) {
            return e.postMessage({
              type: editorConstantTypes.ActionTypes.Fold,
              payload: i
            });
          });
        }
      };
      this.addTask = function (t) {
        var n = t.key;
        return new Promise(function (i) {
          var r = typescriptHelpers.assignObject(typescriptHelpers.assignObject({}, t), {
            onFinish: i
          });
          var a = e.tasks.get(n);
          if (a) {
            a.push(r);
          } else {
            e.tasks.set(n, [r]);
            e.runTask(n);
          }
        });
      };
      this.getWorker().then(function (t) {
        t.addEventListener("message", e.onMessage);
      });
    }
    var t = e.prototype;
    e.getInstance = function () {
      e.instance ||= new e();
      return e.instance;
    };
    t.getWorker = function () {
      return typescriptHelpers.asyncWrapper(this, undefined, undefined, function () {
        var e = this;
        return typescriptHelpers.generatorHelper(this, function (t) {
          if (this.worker) {
            return [2, this.worker];
          } else {
            this.getWorkerPromise ||= new Promise(function (t) {
              require.e("code-fold-worker") /*id: 52808*/.then(require.bind(require, "code-fold-worker_1") /*id: 92941*/).then(function (n) {
                e.worker = n.default;
                t(e.worker);
              });
            });
            return [2, this.getWorkerPromise];
          }
        });
      });
    };
    t.clearTask = function (e) {
      this.tasks.delete(e);
      this.getWorker().then(function (t) {
        t.postMessage({
          type: editorConstantTypes.ActionTypes.Clear,
          payload: {
            key: e
          }
        });
      });
    };
    t.destroy = function () {
      var e = this;
      this.getWorker().then(function (t) {
        t.postMessage({
          type: editorConstantTypes.ActionTypes.ClearAll
        });
        e.worker = null;
        e.getWorkerPromise = null;
      });
    };
    return e;
  }();
  function w(e, t, n, i, r) {
    var a = this;
    this.editor = e;
    this.zoneId = t;
    this.language = n;
    this.onChange = i;
    this.onError = r;
    this.key = contentDeltaOpsUtil.generateRandomId();
    this.initPromise = null;
    this.updatePromise = null;
    this.pendingUpdateQueue = [];
    this.timer = null;
    this.destroied = false;
    this.foldableLines = [];
    this.inited = false;
    this.getZoneState = function () {
      return a.editor.getContentState().getZoneState(a.zoneId);
    };
    this.getCode = function () {
      var e = a.getZoneState();
      if (e) {
        return e.getModelText();
      } else {
        return "";
      }
    };
    this.getZoneLines = function () {
      var e = a.getZoneState();
      if (e) {
        return e.lines.map(function (e) {
          return {
            index: e.index,
            range: e.getOffset()
          };
        });
      } else {
        return [];
      }
    };
    this.init = function () {
      return typescriptHelpers.asyncWrapper(a, undefined, undefined, function () {
        var e;
        var t;
        var n;
        return typescriptHelpers.generatorHelper(this, function (o) {
          switch (o.label) {
            case 0:
              e = this.getCode();
              t = this.getZoneLines();
              this.initPromise = this.handleTask({
                code: e,
                lines: t,
                language: this.language
              });
              return [4, this.initPromise];
            case 1:
              n = o.sent();
              this.initPromise = null;
              this.inited = true;
              this.handleFoldResult(n, editorConstantTypes.ZoneFoldEvents.FoldInit);
              return [2];
          }
        });
      });
    };
    this.handleUpdate = function () {
      return typescriptHelpers.asyncWrapper(a, undefined, undefined, function () {
        var e;
        var t;
        var n;
        return typescriptHelpers.generatorHelper(this, function (o) {
          e = this.pendingUpdateQueue.map(function (e) {
            return contentFoldOperations.getDiffRanges(e);
          });
          this.pendingUpdateQueue = [];
          t = this.getCode();
          n = this.getZoneLines();
          return [2, this.handleTask({
            code: t,
            lines: n,
            language: this.language,
            changeRangesList: e
          })];
        });
      });
    };
    this.handleTimeout = function () {
      var e;
      if ((e = a.onError) === null || e === undefined) {
        return undefined;
      } else {
        return e.call(a, a.zoneId);
      }
    };
    this.handleTask = function (e) {
      return typescriptHelpers.asyncWrapper(a, undefined, undefined, function () {
        var t;
        return typescriptHelpers.generatorHelper(this, function (n) {
          switch (n.label) {
            case 0:
              if (this.timer) {
                clearTimeout(this.timer);
              }
              this.timer = window.setTimeout(this.handleTimeout, 5000);
              return [4, L.getInstance().addTask(typescriptHelpers.assignObject(typescriptHelpers.assignObject({}, e), {
                key: this.key
              }))];
            case 1:
              t = n.sent();
              clearTimeout(this.timer);
              return [2, t];
          }
        });
      });
    };
    this.isCodeChanged = function (e) {
      var t = e.code;
      var n = e.lines;
      var o = a.getCode();
      var i = a.getZoneLines();
      return t !== o || n.length !== i.length || n.some(function (e, t) {
        return !deepEqualUtil_1.deepEqual(e, i[t]);
      });
    };
    this.handleFoldResult = function (e, t) {
      if (!a.destroied) {
        var n;
        var o = a.getZoneState();
        if (!!o && !a.isCodeChanged(e)) {
          var i = e.foldableLines;
          a.foldableLines = i.map(function (e) {
            var t = e.index;
            return {
              range: e.foldRange,
              line: o.lines[t]
            };
          }).filter(contentFoldOperations.hasContentAfter.bind(null, o));
          if ((n = a.onChange) !== null && n !== undefined) {
            n.call(a, a.zoneId, t);
          }
        }
      }
    };
    this.update = function (e) {
      return typescriptHelpers.asyncWrapper(a, undefined, undefined, function () {
        var t;
        return typescriptHelpers.generatorHelper(this, function (n) {
          switch (n.label) {
            case 0:
              this.pendingUpdateQueue.push(e);
              if (!this.initPromise) {
                return [3, 2];
              }
              return [4, this.initPromise];
            case 1:
              n.sent();
              n.label = 2;
            case 2:
              if (!this.updatePromise) {
                return [3, 4];
              }
              return [4, this.updatePromise];
            case 3:
              n.sent();
              n.label = 4;
            case 4:
              this.updatePromise = this.handleUpdate();
              return [4, this.updatePromise];
            case 5:
              t = n.sent();
              this.handleFoldResult(t, editorConstantTypes.ZoneFoldEvents.FoldUpdate);
              this.updatePromise = null;
              return [2];
          }
        });
      });
    };
    this.destroy = function () {
      a.destroied = true;
      a.onError = undefined;
      a.onChange = undefined;
      a.foldableLines = [];
      if (a.timer) {
        clearTimeout(a.timer);
      }
      L.getInstance().clearTask(a.key);
    };
    this.init();
  }
  function I(e) {
    var t = this;
    this.editor = e;
    this.zoneMap = new Map();
    this.eventEmitter = new eventEmitterClass_2.EventEmitter();
    this.zoneCollapsedChanges = {};
    this.zoneFoldRangeInfo = {};
    this.isCodeZoneState = function (e) {
      var n = t.editor.pluginManager.getPlugin(codeBlockHighlightjsConstants.codeBlockType);
      if (n == null) {
        return undefined;
      } else {
        return n.isCodeBlockZoneState(e);
      }
    };
    this.inRange = function (e, t) {
      return t.start <= e && e <= t.end;
    };
    this.getFoldableLineNum = function (e) {
      return Math.max(0, e.start - 1);
    };
    this.handleContentChange = function (e) {
      t.handleUpdateZoneFold(e);
      t.handleFoldAction(e);
      t.flushChanges();
    };
    this.handleUpdateZoneFold = function (e) {
      var n;
      var i = e.deltaSet;
      var r = e.options;
      if ((n = r == null ? undefined : r.extra) === null || n === undefined || !n[codeBlockHighlightjsConstants.highlightActionName]) {
        Object.entries(i.deltas).forEach(function (e) {
          var n = typescriptHelpers.iteratorToArray(e, 2);
          var i = n[0];
          var r = n[1];
          var a = t.editor.getContentState().getZoneState(i);
          if (a && t.isCodeZoneState(a)) {
            t.updateZoneFold(i, r);
          }
        });
      }
    };
    this.handleFoldAction = function (e) {
      var i = e.changes;
      var r = e.options;
      if (r.extra?.foldAction) {
        var a = r.extra.foldAction === contentFoldOperations.FoldAction.fold;
        Object.entries(i).forEach(function (e) {
          var n = typescriptHelpers.iteratorToArray(e, 2);
          var i = n[0];
          var r = n[1];
          var l = t.editor.getContentState().getZoneState(i);
          if (!l || t.isCodeZoneState(l) && r.length !== 0) {
            r.forEach(function (e) {
              var n = e.inserts;
              var o = e.deletes;
              if (!codeBlockHighlightUtils.compareRanges(n, o)) {
                t.editor.error({
                  level: editorConstantsKeycodes.LogLevel.FATAL,
                  message: "[code-block] changes length not equal when fold action"
                });
                return;
              }
              var r = a ? "unfold" : "folded";
              var l = n.map(function (e) {
                var n;
                if ((n = t.zoneFoldRangeInfo[i]) === null || n === undefined) {
                  return undefined;
                } else {
                  return n[r].find(function (t) {
                    return t.start === e.index + 1;
                  });
                }
              }).filter(Boolean);
              t.updateZoneFoldRanges(i, "folded", l, a ? "add" : "delete", true);
              t.updateZoneFoldRanges(i, "unfold", l, a ? "delete" : "add", false);
            });
          }
        });
      }
    };
    this.updateZoneFoldRanges = function (e, n, i, r, a) {
      t.zoneFoldRangeInfo[e] ||= {
        folded: [],
        unfold: []
      };
      var l = t.editor.getContentState().getZoneState(e);
      i.forEach(function (i) {
        var s = t.zoneFoldRangeInfo[e][n];
        var d = [];
        if (a && r === "add") {
          d = S(s, i);
        }
        t.zoneFoldRangeInfo[e][n] = function (e, t, n) {
          var i;
          var r;
          var a = [];
          var l = false;
          try {
            var s = typescriptHelpers.createIterator(e);
            var d = s.next();
            for (; !d.done; d = s.next()) {
              var c = d.value;
              if (t.start !== c.start || t.end !== c.end || (l = true, n !== "delete")) {
                a.push(c);
              }
            }
          } catch (e) {
            i = {
              error: e
            };
          } finally {
            try {
              if (d && !d.done && (r = s.return)) {
                r.call(s);
              }
            } finally {
              if (i) {
                throw i.error;
              }
            }
          }
          if (l || n !== "delete") {
            if (!l && n === "add") {
              a.push(t);
            }
          }
          return a.sort(function (e, t) {
            return e.start - t.start;
          });
        }(s, i, r);
        if (a && r === "delete") {
          d = S(t.zoneFoldRangeInfo[e][n], i);
        }
        if (a) {
          d.forEach(function (n) {
            var o = n.start;
            var i = Array(n.end - o + 1).fill(0).map(function (e, t) {
              if (l == null) {
                return undefined;
              } else {
                return l.getLine(o + t);
              }
            }).filter(Boolean);
            t.addCollapsedChangeEvent(e, i, r === "add");
          });
        }
      });
    };
    this.handleContentChangeAction = function (e) {
      Object.entries(e.changes).forEach(function (e) {
        var n = typescriptHelpers.iteratorToArray(e, 2);
        var i = n[0];
        var r = n[1];
        t.updateCollapsedLineRanges(i, r);
      });
    };
    this.updateCollapsedLineRanges = function (e, n) {
      for (var o = n.length - 1; o >= 0; o--) {
        var i = n[o];
        var r = i.start;
        var a = i.deletes;
        var l = i.inserts;
        var s = new Set(l.map(function (e) {
          return e.getKey();
        }));
        var d = new Set();
        var c = 0;
        var u = 0;
        for (; u < a.length; u++) {
          var h = a[u];
          var f = h.getKey();
          if (s.has(f)) {
            c++;
            d.add(f);
            continue;
          }
          var g = r + c;
          t.transformCollapsedLineRanges(e, g, h, -1);
        }
        for (var u = 0; u < l.length; u++) {
          var h = l[u];
          if (!d.has(h.getKey())) {
            var g = r + u;
            t.transformCollapsedLineRanges(e, g, h, 1);
          }
        }
      }
    };
    this.transformCollapsedLineRanges = function (e, n, o, i) {
      var r;
      var a;
      function l(r) {
        return function (a) {
          var l = a.start;
          var s = a.end;
          if (l >= n) {
            a.start += i;
          }
          var d = s + +(i > 0) >= n;
          if (d) {
            a.end += i;
          }
          if (r && l < n && d) {
            t.addCollapsedChangeEvent(e, [o], i === 1);
          }
        };
      }
      if ((r = t.zoneFoldRangeInfo[e]) !== null && r !== undefined) {
        r.folded.forEach(l(true));
      }
      if ((a = t.zoneFoldRangeInfo[e]) !== null && a !== undefined) {
        a.unfold.forEach(l(false));
      }
    };
    this.onError = function (e) {
      var n = t.zoneMap.get(e);
      if (n) {
        t.clearZoneFoldAndExpand(n.zoneId);
        t.initZoneFold(n.zoneId, n.language);
      }
    };
    this.onChange = function (e, n) {
      if (t.editor.getContentState().getZoneState(e)) {
        var o = t.zoneFoldRangeInfo[e];
        t.refreshCollapsedRanges(e);
        t.autoFixUnfoldLines(e);
        t.eventEmitter.trigger(n, [e]);
        if (!deepEqualityCheck_1.deepEqual(o, t.zoneFoldRangeInfo[e])) {
          t.forceRefreshZone(e);
        }
      }
    };
    this.refreshCollapsedRanges = function (e) {
      var n;
      var i = t.zoneMap.get(e);
      var r = t.editor.getContentState().getZoneState(e);
      if (i && r) {
        var a = new Set((n = t.zoneFoldRangeInfo[e]) === null || n === undefined ? undefined : n.folded.reduce(function (e, t) {
          for (var n = t.start; n <= t.end; n++) {
            var o = r.getLine(n);
            if (o) {
              e.push(o);
            }
          }
          return e;
        }, []));
        t.zoneFoldRangeInfo[e] = {
          folded: [],
          unfold: []
        };
        var l = new Set(i.foldableLines.reduce(function (n, i) {
          var r = i.line;
          var a = t.getCollapsableLines(e, r);
          if (!(a == null ? undefined : a.length)) {
            return n;
          }
          var l = {
            start: a[0].index,
            end: a[a.length - 1].index
          };
          if (contentFoldOperations.isLineFolded(r)) {
            n.push.apply(n, typescriptHelpers.spreadArguments(a));
            t.zoneFoldRangeInfo[e].folded.push(l);
          } else {
            t.zoneFoldRangeInfo[e].unfold.push(l);
          }
          return n;
        }, []));
        a.forEach(function (n) {
          if (l.has(n)) {
            l.delete(n);
          } else {
            t.addCollapsedChangeEvent(e, [n], false);
          }
        });
        l.forEach(function (n) {
          t.addCollapsedChangeEvent(e, [n], true);
        });
        t.flushChanges();
      }
    };
    this.getCollapsableLines = function (e, n) {
      var i = t.zoneMap.get(e);
      var r = t.editor.getContentState().getZoneState(e);
      if (!i || !r) {
        return null;
      }
      var a = typeof n == "number" ? r.getLine(n) : n;
      var l = i.foldableLines.find(function (e) {
        return e.line.index === (a == null ? undefined : a.index);
      })?.range;
      if (a && l) {
        return contentFoldOperations.getLinesInRange(r, a, l);
      } else {
        return null;
      }
    };
    this.addCollapsedChangeEvent = function (e, n, i) {
      var r;
      var a;
      var l;
      var s;
      t.zoneCollapsedChanges[e] ||= {
        expandLines: [],
        collapsedLines: []
      };
      if (i) {
        if ((l = t.zoneCollapsedChanges[e]) !== null && l !== undefined) {
          (r = l.collapsedLines).push.apply(r, typescriptHelpers.spreadArguments(n));
        }
      } else if ((s = t.zoneCollapsedChanges[e]) !== null && s !== undefined) {
        (a = s.expandLines).push.apply(a, typescriptHelpers.spreadArguments(n));
      }
    };
    this.expandAllCollapsedLines = function (e) {
      var o = t.zoneFoldRangeInfo[e]?.folded;
      if (o) {
        var i = o.reduce(function (n, o) {
          var i = t.editor.getContentState().getZoneState(e);
          Array(o.end - o.start + 1).fill(0).forEach(function (e, t) {
            var r = i == null ? undefined : i.getLine(o.start + t);
            if (r) {
              n.add(r);
            }
          });
          return n;
        }, new Set());
        t.addCollapsedChangeEvent(e, Array.from(i), false);
        t.flushChanges();
      }
    };
    this.autoFixUnfoldLines = function (e, n) {
      if (n = n || t.zoneMap.get(e)?.foldableLines) {
        var i = t.editor.getContentState().getZoneState(e);
        if (i) {
          contentFoldOperations.autoFixFold(t.editor, i, n);
        }
      }
    };
    this.deleteZoneFold = function (e) {
      var n;
      if (t.zoneMap.has(e)) {
        if ((n = t.zoneMap.get(e)) !== null && n !== undefined) {
          n.destroy();
        }
        t.zoneMap.delete(e);
      }
    };
    this.clearZoneFoldAndExpand = function (e) {
      t.expandAllCollapsedLines(e);
      t.clearZoneFold(e);
      t.autoFixUnfoldLines(e, []);
      t.forceRefreshZone(e);
    };
    this.flushChanges = function () {
      var e = t.zoneCollapsedChanges;
      t.eventEmitter.trigger(editorConstantTypes.ZoneFoldEvents.CollapsedChange, [e]);
      t.zoneCollapsedChanges = {};
    };
    this.forceRefreshZone = function (e) {
      var n;
      var o;
      if ((o = (n = t.editor.virtualListManager) === null || n === undefined ? undefined : n.getVirtualListModuleOfZone(e)) !== null && o !== undefined) {
        o.rerender();
      }
    };
    this.isZoneInit = function (e) {
      return !!t.zoneMap.get(e)?.inited;
    };
    this.isFoldableLine = function (e, n) {
      var o = t.zoneFoldRangeInfo[e];
      if (!o) {
        return false;
      }
      var i = typeof n == "number" ? n : n.index;
      function r(e) {
        return t.getFoldableLineNum(e) === i;
      }
      return o.folded.some(r) || o.unfold.some(r);
    };
    this.isCollapsedLine = function (e, n) {
      var o = t.zoneFoldRangeInfo[e];
      if (!o) {
        return false;
      }
      var i = typeof n == "number" ? n : n.index;
      return o.folded.some(function (e) {
        return t.inRange(i, e);
      });
    };
    this.has = function (e) {
      return t.zoneMap.has(e);
    };
    this.findFoldableLineForPosition = function (e, n) {
      var i = t.zoneMap.get(e);
      if (!i) {
        return null;
      }
      var r = i.foldableLines.sort(function (e, t) {
        return e.range.from - t.range.from;
      });
      return moduleReExportWrapper.wrappedModule(r, function (e) {
        var t = e.range;
        return t.from <= n && t.to >= n;
      })?.line || null;
    };
    this.getCollapseFoldLines = function (e, n) {
      var o = t.zoneFoldRangeInfo[e];
      if (!o) {
        return [];
      }
      var i = typeof n == "number" ? n : n.index;
      var r = [];
      function a(e) {
        if (t.inRange(i, e)) {
          r.push(t.getFoldableLineNum(e));
        }
      }
      o.folded.forEach(a);
      o.unfold.forEach(a);
      return r.sort(function (e, t) {
        return e - t;
      });
    };
    this.getFoldedLines = function (e) {
      return (t.zoneFoldRangeInfo[e]?.folded || []).map(function (e) {
        return t.getFoldableLineNum(e);
      });
    };
    this.initZoneFold = function (e, n) {
      n = n.toLowerCase();
      if (!!contentFoldOperations.isSupportedLanguage(n) && !t.zoneMap.has(e)) {
        var o = new w(t.editor, e, n, t.onChange, t.onError);
        t.zoneMap.set(e, o);
      }
    };
    this.rebuildZoneFold = function (e, n) {
      if (!contentFoldOperations.isSupportedLanguage(n.toLowerCase())) {
        t.clearZoneFoldAndExpand(e);
        return;
      }
      t.deleteZoneFold(e);
      return t.initZoneFold(e, n);
    };
    this.clearZoneFold = function (e) {
      t.deleteZoneFold(e);
      if (t.zoneFoldRangeInfo[e]) {
        delete t.zoneFoldRangeInfo[e];
      }
      if (t.zoneCollapsedChanges[e]) {
        delete t.zoneCollapsedChanges[e];
      }
    };
    this.updateZoneFold = function (e, n) {
      var o = t.zoneMap.get(e);
      if (o) {
        o.update(n);
      }
    };
    this.on = function (e, n) {
      t.eventEmitter.on(e, n);
    };
    this.off = function (e, n) {
      t.eventEmitter.off(e, n);
    };
    this.destroy = function () {
      t.zoneFoldRangeInfo = {};
      t.zoneCollapsedChanges = {};
      t.zoneMap.forEach(function (e) {
        return e.destroy();
      });
      t.zoneMap.clear();
      t.eventEmitter.reset();
      t.editor.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, t.handleContentChange);
      t.editor.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, t.handleContentChangeAction);
    };
    this.editor.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
    this.editor.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChangeAction, 99);
  }
  function k() {
    return contentDeltaOpsUtil.generateRandomId(10).toLowerCase();
  }
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var reactDomContextDecorator = require("react-dom-context-decorator") /*id: 955275*/;
  var T = function (e) {
    function t(t) {
      var n = t.editor;
      var o = e.call(this) || this;
      o.register = function () {
        return [];
      };
      o.editor = n;
      return o;
    }
    typescriptHelpers.extendClass(t, e);
    var n = t.prototype;
    n.match = function (e, t) {
      return e === "type" && t === this.type;
    };
    n.renderCustomZoneView = function (e) {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, e.children);
    };
    n.render = function (e) {
      return reactCoreLibraryReexport.createElement("div", {
        className: "zone-wrapper",
        contentEditable: "false"
      }, this.renderCustomZoneView(e));
    };
    typescriptHelpers.applyDecorators([reactDomContextDecorator.withContextConsumer()], t.prototype, "render", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var Z = classnamesUtils;
  require("empty-module_5") /*id: 563429*/;
  var userAgentDetector_1 = require("user-agent-detector_1") /*id: 277160*/;
  var D = function () {
    function e(e) {
      var t = this;
      this.tabSize = 4;
      this.handleKeyDown = function (e) {
        var n = t.editor.getContentState().getActiveZone();
        var o = userAgentDetector_1.uaDetector.isMac ? e.metaKey : e.ctrlKey;
        var i = !e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey;
        var r = e.keyCode === codeBlockHighlightjsConstants.keyCodeEnum.ENTER && i;
        if (t.codeBlockPlugin.isCodeBlockZoneState(n)) {
          t.handleFoldKeyDownEvent(e);
          if (r) {
            return t.handleEnter(e);
          } else if (e.keyCode === codeBlockHighlightjsConstants.keyCodeEnum.ENTER && o && !e.altKey) {
            return t.handleMetaEnter(e);
          } else if (e.keyCode === codeBlockHighlightjsConstants.keyCodeEnum.TAB && i) {
            return t.handleTab(e);
          } else if (e.keyCode !== codeBlockHighlightjsConstants.keyCodeEnum.TAB || e.ctrlKey || e.metaKey || e.altKey || !e.shiftKey) {
            return undefined;
          } else {
            return t.handleUnTab(e);
          }
        } else {
          return undefined;
        }
      };
      this.handleEnter = function (e) {
        t.preventKeyDownEvent(e);
        var n = t.editor;
        var o = n.selection.getSelection();
        var i = o.start;
        var r = i.line;
        var a = i.offset;
        var l = i.zoneId;
        var d = n.getContentState();
        var c = n.getContentState().getActiveZone().getLine(r);
        if (c) {
          var u = c.getText();
          var h = /^\s+/.exec(u);
          var f = Math.min((h ? h[0] : "").length, a);
          var g = d.getZoneState(l);
          if (g) {
            var p = new contentStructureDelta.ContentDelta({
              zoneId: l
            });
            var v = g.pointToOffset(o.start);
            var m = g.pointToOffset(o.end);
            var C = m === v;
            if (v !== null && m !== null) {
              p.retain(v);
              if (!C) {
                p.delete(m - v);
              }
              p.insertEnter().insert("" + " ".repeat(f));
              d.apply(p, {
                type: "codeBlockEnter"
              });
              t.editor.selection.setSelection({
                zoneId: l,
                start: v + 1 + f,
                len: 0
              });
            }
          }
        }
      };
      this.handleTab = function (e) {
        t.preventKeyDownEvent(e);
        var n;
        var o = t.editor;
        var i = t.tabSize;
        var r = o.selection.getSelection();
        var a = Array(i).fill(" ").join("");
        var l = o.getContentState();
        var d = l.getActiveZone();
        var c = r.start;
        var u = r.end;
        var h = c.line === u.line ? -c.offset : 0;
        var f = new contentStructureDelta.ContentDelta({
          zoneId: u.zoneId
        });
        var g = c.line === u.line && h !== 0 ? (n = t.editor.inputModel) === null || n === undefined ? undefined : n._getInheritAttributesAndsetStatus() : undefined;
        var p = c.line;
        for (; p <= u.line; p++) {
          var v = d.getLine(p).getOffset();
          f = f.retain(v.start - h).insert(a, g);
          h = v.start;
        }
        l.apply(f);
      };
      this.handleUnTab = function (e) {
        t.preventKeyDownEvent(e);
        var n = t.editor;
        var o = t.tabSize;
        var i = n.getContentState();
        var r = i.getActiveZone();
        var a = n.selection.getSelection();
        var l = a.start;
        var d = a.end;
        var c = new RegExp(` {1,${o.toString()}}\$`);
        var u = new contentStructureDelta.ContentDelta({
          zoneId: d.zoneId
        });
        var h = 0;
        var f = l.line;
        for (; f <= d.line; f++) {
          var g = r.getLine(f).getOffset();
          var p = r.getLine(f).getModelText();
          if (l.line === d.line) {
            p = p.slice(0, l.offset);
          } else {
            c = new RegExp(`^ {1,${o.toString()}}`);
          }
          var v = p.match(c);
          if (v) {
            var m = v[0].length;
            if (l.line === d.line) {
              h = -(l.offset - m);
            }
            u = u.retain(g.start - h).delete(m);
            h = g.start + m;
          }
        }
        i.apply(u);
      };
      this.handleMetaEnter = function (e) {
        t.preventKeyDownEvent(e);
        var n;
        var o;
        var i = e.shiftKey;
        var r = t.editor.selection.getSelection().end;
        var a = r.line;
        var l = r.offset;
        var d = r.zoneId;
        var c = t.editor.getContentState();
        var u = c.getActiveZone().getLine(a);
        if (u) {
          var h = u.getText();
          var f = /^\s+/.exec(h);
          var g = Math.min((f ? f[0] : "").length, l);
          var p = new contentStructureDelta.ContentDelta({
            zoneId: d
          });
          var v = u.getOffset();
          var m = v.start;
          var C = v.end;
          if (i) {
            o = n = m + g;
          } else {
            n = C - 1;
            o = C + g;
          }
          p.retain(n).insertEnter().insert("" + " ".repeat(g));
          c.apply(p);
          t.editor.selection.setSelection({
            zoneId: d,
            start: o,
            len: 0
          });
        }
      };
      this.handleFoldKeyDownEvent = function (e) {
        var n = e.keyCode;
        var o = t.editor.selection.getSelection();
        var i = t.codeBlockPlugin.foldModule;
        if ((n === codeBlockHighlightjsConstants.keyCodeEnum.DELETE || n === codeBlockHighlightjsConstants.keyCodeEnum.ENTER) && !!i && !!o.isCollapsed()) {
          var r = n === codeBlockHighlightjsConstants.keyCodeEnum.DELETE;
          var a = o.toPosition().start;
          var l = o.start;
          var s = l.zoneId;
          var d = l.offset;
          if (t.editor.getContentState().getZoneState(s)) {
            var c = i.findFoldableLineForPosition(s, a);
            var h = r && i.findFoldableLineForPosition(s, a - 1);
            if ((c || h) && (e.keyCode !== codeBlockHighlightjsConstants.keyCodeEnum.DELETE || !d || !c && h)) {
              var f = (c || h).index;
              t.codeBlockPlugin.foldZoneLine({
                zoneId: s,
                index: f,
                unFold: true
              });
            }
          }
        }
      };
      var n = e.editor;
      var o = e.tabSize;
      var r = e.codeBlockPlugin;
      this.editor = n;
      this.codeBlockPlugin = r;
      if (o) {
        this.tabSize = o;
      }
      this.editor.on(editorEventConstants.editorEventTypes.KEYDOWN, this.handleKeyDown, 999);
    }
    var t = e.prototype;
    t.preventKeyDownEvent = function (e) {
      e.preventDefault();
      e.preventEvent();
      e.stopPropagation();
      e.stopEvent();
    };
    t.destroy = function () {
      this.editor = null;
      this.editor.off(editorEventConstants.editorEventTypes.KEYDOWN, this.handleKeyDown);
    };
    return e;
  }();
  var A = "code-block-fold-controller";
  var P = "code-block-fold-indicator";
  var F = function (e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    typescriptHelpers.extendClass(t, e);
    t.prototype.render = function () {
      var e = this.props;
      var t = e.children;
      var n = e.lineNum;
      var o = e.style;
      var i = Z("code-line-wrapper");
      return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.DivSymbol, {
        className: i,
        style: o,
        "data-line-num": n
      }, t);
    };
    return t;
  }(reactinxDomContextExports.ReactInXExports.Component);
  var O = function (e) {
    function t(n) {
      var i = e.call(this, n) || this;
      i.type = codeBlockHighlightjsConstants.codeBlockComponentName;
      i.name = codeBlockHighlightjsConstants.codeBlockType;
      i.tabSize = 4;
      i.foldable = false;
      i.handleLanguageChange = function (e, t) {
        if (i.isFoldEnable(e)) {
          var n = i.editor.getContentState().getZoneState(e);
          if (n && i.isCodeBlockZoneState(n)) {
            i.foldModule.rebuildZoneFold(e, t);
          }
        }
      };
      i.buildZoneFold = function (e) {
        if (i.isFoldEnable(e)) {
          var t = i.editor.getContentState().getZoneState(e);
          if (t && i.isCodeBlockZoneState(t)) {
            i.foldModule.initZoneFold(e, i.getLanguage(t));
          }
        }
      };
      i.setRef = function (e, t) {
        i.zoneIdToCodeView.set(t, e);
      };
      i.onCodeViewUnMount = function (e) {
        i.zoneIdToCodeView.delete(e);
      };
      i.insertCodeBlock = function (e) {
        var t;
        var n;
        var r;
        var a = e.range;
        var l = i.editor;
        var c = (a = a || l.selection.getSelection()).start;
        var h = a.end;
        var f = c.zoneId;
        var p = l.getContentState();
        var v = p.getZoneState(f);
        if (v) {
          var m = v.getLine(c.line);
          if (m) {
            if (!i.canInsertCodeBlock(v)) {
              return;
            }
            var C;
            var y;
            var S;
            var b = v.pointToOffset(c);
            var E = v.pointToOffset(h);
            if (b === null || E === null) {
              return;
            }
            var L = new contentStructureDelta.ContentDelta({
              zoneId: f
            });
            var w = v.slice(c, h);
            var I = "";
            try {
              var M = typescriptHelpers.createIterator(w);
              var R = M.next();
              for (; !R.done; R = M.next()) {
                var T = R.value;
                I += T.getText();
              }
            } catch (e) {
              t = {
                error: e
              };
            } finally {
              try {
                if (R && !R.done && (n = M.return)) {
                  n.call(M);
                }
              } finally {
                if (t) {
                  throw t.error;
                }
              }
            }
            I += "\n";
            var x = k();
            C = I;
            y = x || k();
            S = new contentStructureDelta.ContentDelta({
              zoneId: y
            });
            if (C) {
              S.insert(C);
            } else {
              S.insert("\n");
            }
            var Z = S;
            L.retain(b).delete(E - b);
            if (codeBlockHighlightUtils.shouldUpdateHighlight(l, c, f)) {
              L.insertEnter();
            }
            L.insert(" ", {
              type: codeBlockHighlightjsConstants.codeBlockComponentName,
              language: codeBlockHighlightUtils.getHighlightLanguage(),
              zoneId: x,
              wrap: String(codeBlockHighlightjsConstants.isAutoHighlightEnabled),
              parentZoneId: f
            });
            if (m.index === v.lines.length - 1) {
              L.insertEnter();
            }
            var z = new deltaSetCore.DeltaSet(((r = {})[f] = L, r[x] = Z, r));
            i.editor.undoModule.batchedUndo(function () {
              p.apply(z);
              var e = p.getZoneState(x);
              if (e) {
                var t = e.totalWidth() - 1;
                l.selection.setSelection({
                  zoneId: x,
                  start: t,
                  len: 0
                });
              }
            });
          }
        }
      };
      i.handleSelectionChange = function (e) {
        var t = e.current;
        var n = t.start;
        var o = t.end;
        var r = t.isCollapsed();
        var a = i.editor.getContentState();
        var l = [];
        if (!r) {
          l = a.getEntities({
            start: n,
            end: o
          }, function (e, t) {
            return e === "type" && t === codeBlockHighlightjsConstants.codeBlockComponentName;
          }).reduce(function (e, t) {
            var n = t.attributes.zoneId;
            e.push(n);
            return e;
          }, []);
        }
        i.zoneIdToCodeView.forEach(function (e) {
          e.onSelectedChange(l);
        });
      };
      i.handleContentChange = function (e) {
        Object.entries(e.changes).forEach(function (e) {
          var t = typescriptHelpers.iteratorToArray(e, 2);
          var n = t[0];
          var r = t[1];
          var a = i.editor.getContentState().getZoneState(n);
          if (!a || i.isCodeBlockZoneState(a) && r.length !== 0) {
            var l = Number.MAX_SAFE_INTEGER;
            r.forEach(function (e) {
              var t = e.inserts;
              var o = e.deletes;
              if (!codeBlockHighlightUtils.compareRanges(t, o)) {
                t.forEach(function (e) {
                  l = Math.min(e.index, l);
                });
                o.forEach(function (e) {
                  l = Math.min(e.index, l);
                });
                var r = i.zoneIdToDirtyLineIndex.get(n);
                if (r !== undefined) {
                  i.zoneIdToDirtyLineIndex.set(n, Math.min(l, r));
                } else {
                  i.zoneIdToDirtyLineIndex.set(n, l);
                }
              }
            });
          }
        });
        if (i.zoneIdToDirtyLineIndex.size) {
          i.updateLineGutters();
        }
      };
      i.internalHandleCollapsedChange = i.handleCollapsedChange.bind(i);
      i.calcLineGutterRICCb = function (e) {
        if (i.zoneIdToDirtyLineIndex.size) {
          var t = codeBlockHighlightjsConstants.debounceThreshold;
          if (e.timeRemaining() > codeBlockHighlightjsConstants.maxUndoStackSize) {
            i.zoneIdToDirtyLineIndex.forEach(function (e, n) {
              if (!(t <= 0)) {
                var o = i.editor.getContentState().getZoneState(n);
                if (!o) {
                  i.zoneIdToDirtyLineIndex.delete(n);
                  return;
                }
                var r = o.lines;
                o.lines.forEach(function (o) {
                  var a;
                  if (o.index >= e) {
                    if (t <= 0) {
                      return;
                    }
                    var l = (a = o._node) === null || a === undefined ? undefined : a.querySelector(".code-line-wrapper");
                    if (l) {
                      l.setAttribute("data-line-num", (o.index + 1).toString());
                      if (o.index === r.length - 1) {
                        i.zoneIdToDirtyLineIndex.delete(n);
                      } else {
                        i.zoneIdToDirtyLineIndex.set(n, o.index);
                      }
                      t--;
                    }
                  }
                });
              }
            });
          }
          i.calcLineGutterRICHandler = requestIdleCallbackPolyfill.requestIdleCallback(i.calcLineGutterRICCb);
        }
      };
      i.updateLineGutters = function () {
        requestIdleCallbackPolyfill.cancelIdleCallback(i.calcLineGutterRICHandler);
        i.calcLineGutterRICCb({
          timeRemaining: function () {
            return Number.MAX_SAFE_INTEGER;
          }
        });
        i.calcLineGutterRICHandler = requestIdleCallbackPolyfill.requestIdleCallback(i.calcLineGutterRICCb);
      };
      var r = n.i18n;
      var a = n.tabSize;
      var l = n.foldable;
      var c = n.register;
      i.i18n = r;
      if (c) {
        i.register = c;
      }
      if (a) {
        i.tabSize = a;
      }
      var h = i.getCodeBlockKeyboard();
      i.keyboardModule = new h({
        editor: i.editor,
        tabSize: a,
        codeBlockPlugin: i
      });
      i.foldable = l;
      i.foldModule = new I(i.editor);
      i.zoneIdToDirtyLineIndex = new Map();
      i.zoneIdToCodeView = new Map();
      i.calcLineGutterRICHandler = -1;
      i.editor.registerCommand(t.KEY, function () {
        i.insertCodeBlock({});
      });
      i.bindEvents();
      return i;
    }
    typescriptHelpers.extendClass(t, e);
    var n = t.prototype;
    n.zoneDidMount = function (e) {
      this.buildZoneFold(e.zoneId);
    };
    n.zoneWillUnmount = function (e) {
      this.foldModule.clearZoneFold(e.zoneId);
    };
    n.getCodeBlockKeyboard = function () {
      return D;
    };
    n.isFoldEnable = function (e) {
      return this.foldable;
    };
    n.isCodeBlockZoneState = function (e) {
      return codeBlockHighlightUtils.isCodeBlockEntity(e);
    };
    n.getLanguage = function (e) {
      return codeBlockHighlightUtils.getCodeBlockLang(e);
    };
    n.getFoldModule = function () {
      return this.foldModule;
    };
    n.foldZoneLine = function (e) {
      var t = e.zoneId;
      var n = e.index;
      var o = e.unFold;
      var i = e.isLocal;
      var r = i !== undefined && i;
      var a = e.applyOptions;
      var l = this.editor.getContentState().getZoneState(t);
      if (l && this.isCodeBlockZoneState(l)) {
        if (o !== undefined && o) {
          contentFoldOperations.unfoldLines(this.editor, l, n, r, a);
        } else {
          contentFoldOperations.foldLines(this.editor, l, n, r, a);
        }
      }
    };
    n.isFoldableLanguage = function (e) {
      return contentFoldOperations.isSupportedLanguage(e);
    };
    n.canInsertCodeBlock = function (e) {
      return !this.isCodeBlockZoneState(e);
    };
    n.bindEvents = function () {
      this.editor.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
      this.editor.on(editorEventConstants.editorEventTypes.SELECTION_CHANGE, this.handleSelectionChange);
      this.foldModule.on(editorConstantTypes.ZoneFoldEvents.CollapsedChange, this.internalHandleCollapsedChange);
    };
    n.unBindEvents = function () {
      this.editor.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
      this.editor.off(editorEventConstants.editorEventTypes.SELECTION_CHANGE, this.handleSelectionChange);
      this.foldModule.off(editorConstantTypes.ZoneFoldEvents.CollapsedChange, this.internalHandleCollapsedChange);
    };
    n.handleCollapsedChange = function (e) {
      var t = this;
      Object.entries(e).forEach(function (e) {
        var n;
        var i = typescriptHelpers.iteratorToArray(e, 2);
        var r = i[0];
        var a = i[1];
        var l = (n = t.editor.virtualListManager) === null || n === undefined ? undefined : n.getVirtualListModuleOfZone(r);
        if (l == null ? undefined : l.isEnabled) {
          l.getInvisibleLinesModule().setLinesVisibleState(a.expandLines, true);
          l.getInvisibleLinesModule().setLinesVisibleState(a.collapsedLines, false);
        }
      });
    };
    n.isFoldableLine = function (e, t) {
      return !!this.foldModule.isFoldableLine(e, t.index);
    };
    n.isFoldedLine = function (e) {
      return contentFoldOperations.isLineFolded(e);
    };
    n.getFoldControllerClassName = function (e, t) {
      var n;
      return Z(A, ((n = {})[A + "--folded"] = e, n));
    };
    n.getLineWrapperStyle = function (e) {};
    n.clearSelection = function (e) {
      var t = window.getSelection();
      if (t && t.rangeCount) {
        var n = t.getRangeAt(0);
        var o = this.editor.getContentState().getZoneState(e);
        if (n && (o == null ? undefined : o._node) && o._node.contains(n.commonAncestorContainer)) {
          this.editor.blur();
          t.removeAllRanges();
        }
      }
    };
    n.renderLine = function (e) {
      var t = this;
      var n = e.lineState;
      var i = e.children;
      var s = n.getZoneId();
      var d = this.editor.getContentState().getZoneState(s);
      var c = this.isFoldableLine(s, n);
      var u = this.isFoldedLine(n) && !!d && contentFoldOperations.isSupportedLanguage(this.getLanguage(d));
      var h = this.getLineWrapperStyle(n);
      var g = n.parent;
      var p = n.index;
      var v = n.getKey();
      if (!g || !this.isCodeBlockZoneState(g)) {
        return i;
      }
      var m = this.getFoldControllerClassName(u, n);
      return reactinxDomContextExports.ReactInXExports.createElement(F, {
        editor: this.editor,
        lineNum: p + 1,
        style: h
      }, typescriptHelpers.spreadArguments([c && reactinxDomContextExports.ReactInXExports.createElement(reactinxStaticText.StaticText, {
        editor: this.editor,
        wrapperCls: A + "--wrapper"
      }, reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.DivSymbol, {
        className: m,
        onClick: function (e) {
          t.clearSelection(s);
          e.preventDefault();
          var n = t.editor.getContentState().getZoneState(s);
          var o = n == null ? undefined : n.lines.find(function (e) {
            return e.getKey() === v;
          });
          if (o) {
            t.foldZoneLine({
              zoneId: s,
              index: o.index,
              unFold: contentFoldOperations.isLineFolded(o),
              isByClick: true
            });
          }
        }
      }))], i, [u && reactinxDomContextExports.ReactInXExports.createElement(reactinxStaticText.StaticText, {
        editor: this.editor,
        wrapperCls: P + "--wrapper"
      }, reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.DivSymbol, {
        className: P,
        onClick: function (e) {
          t.clearSelection(s);
          e.preventDefault();
          var n = t.editor.getContentState().getZoneState(s);
          var o = n == null ? undefined : n.lines.find(function (e) {
            return e.getKey() === v;
          });
          if (o) {
            t.foldZoneLine({
              zoneId: s,
              index: o.index,
              unFold: true,
              isByClick: true
            });
          }
        }
      }))]).filter(Boolean));
    };
    n.shouldForceRenderLine = function (e) {
      var t = e.lineState.parent;
      return !!t && !!this.isCodeBlockZoneState(t);
    };
    n.reset = function () {
      this.zoneIdToDirtyLineIndex.clear();
      requestIdleCallbackPolyfill.cancelIdleCallback(this.calcLineGutterRICHandler);
    };
    n.destroy = function () {
      this.keyboardModule.destroy();
      this.unBindEvents();
      this.zoneIdToDirtyLineIndex.clear();
      this.foldModule.destroy();
      requestIdleCallbackPolyfill.cancelIdleCallback(this.calcLineGutterRICHandler);
    };
    t.KEY = codeBlockHighlightjsConstants.codeBlockComponentName;
    return t;
  }(T);
  require.d(exports, {
    CodeBlockPlugin: function () {
      return O;
    }
  });
}