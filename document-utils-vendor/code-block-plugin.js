// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'CodeBlockPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 337472
         */
module.exports = function (module, exports, require) {
  let n;
  let i;
  var o;
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
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var editorModuleConstants = require("editor-module-constants") /*id: 21060*/;
  var virtualListModule = require("virtual-list-module") /*id: 727271*/;
  var reactZeroWidthSpace = require("react-zero-width-space") /*id: 285939*/;
  var alignRendererPlugin = require("align-renderer-plugin") /*id: 385107*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var editorClipboardManager = require("editor-clipboard-manager") /*id: 797119*/;
  var treeNodeTypes = require("tree-node-types") /*id: 676821*/;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var reactinxDomContextExports = require("reactinx-dom-context-exports") /*id: 327577*/;
  var reactinxDomReconciler = require("reactinx-dom-reconciler") /*id: 454385*/;
  var S = function (e) {
    function t(r) {
      var n = r.editor;
      var i = r.customizedAttributeKey;
      var o = e.call(this) || this;
      o.name = "BackgroundColor";
      o.attributeKey = i || t.KEY;
      n.registerCommand(o.attributeKey, function (e) {
        var t = e.value;
        n.toggleAttribute(o.attributeKey, t);
      });
      return o;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.match = function (e) {
      return e === this.attributeKey;
    };
    r.render = function (e) {
      var t = e.attributes;
      var r = e.children;
      var n = {};
      if (t[this.attributeKey]) {
        n.backgroundColor = t[this.attributeKey];
      }
      return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.TextSymbol, {
        style: n
      }, r);
    };
    r.deserialize = function (e) {
      var t;
      var r = e.node;
      var n = e.deltaSet;
      var i = e.zoneId;
      if (r instanceof HTMLElement && r.style.backgroundColor) {
        return editorClipboardManager.addAttrsToDelta(n, i, ((t = {})[this.attributeKey] = r.style.backgroundColor, t), false);
      } else {
        return n;
      }
    };
    r.serialize = function (e) {
      var t = e.type;
      var r = e.node;
      var n = e.op;
      if (n && n.attributes) {
        var i = n.attributes[this.attributeKey];
        if (t === treeNodeTypes.nodeTypes.LEAF && i) {
          var o = document.createElement("span");
          o.appendChild(r);
          o.style["background-color"] = i;
          return Object.assign(e, {
            node: o
          });
        }
      }
      return e;
    };
    t.KEY = "backgroundcolor";
    typescriptHelpers_1.decorate([editorPluginManager.createPriority(9998)], t.prototype, "render", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  var editorBoldPlugin = require("editor-bold-plugin") /*id: 13270*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var codeBlockConstants_1 = require("code-block-constants_1") /*id: 881225*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var codeBlockHighlightUtils_1 = require("code-block-highlight-utils_1") /*id: 463090*/;
  var contentDeltaOpsUtil = require("content-delta-ops-util") /*id: 444706*/;
  function N() {
    return contentDeltaOpsUtil.generateRandomId(10).toLowerCase();
  }
  function M(e, t) {
    var r = e || N();
    var n = new contentStructureDelta.ContentDelta({
      zoneId: r
    });
    if (t) {
      n.insert(t);
    } else {
      n.insert("\n");
    }
    return n;
  }
  function P(e) {
    var t = e.ops.pop();
    if (t && t.insert) {
      if (typeof t.insert == "string" && t.insert.endsWith("\n")) {
        t.insert = t.insert.slice(0, -1);
      }
      if (t.insert) {
        e.ops.push(t);
      }
    }
  }
  function U(e) {
    return function (e) {
      function t() {
        var t = e !== null && e.apply(this, arguments) || this;
        t.UNSAFE_editorNormalizePasteNode_priority = 500;
        return t;
      }
      typescriptHelpers_1.inherits(t, e);
      t.prototype.editorWillCopy = function (e) {
        var t;
        var r;
        var n;
        var i;
        var o;
        var a = this;
        t = e.deltaSet;
        r = this.editor;
        n = codeBlockHighlightUtils_1.isCodeBlockInsert;
        i = false;
        o = new Set();
        t.forEach(function (e) {
          if (e instanceof contentStructureDelta.ContentDelta) {
            e.forEach(function (e) {
              if (n(e)) {
                i = true;
                o.add(e.attributes.zoneId);
              }
            });
          }
        });
        if (i) {
          o.forEach(function (e) {
            var n;
            var i = (n = r.getContentState().getZoneState(e)) === null || n === undefined ? undefined : n.getContent();
            if (i) {
              t.add(i);
            }
          });
        }
        e.deltaSet.forEach(function (t) {
          var r = t.zoneId;
          var n = a.editor.getContentState().getZoneState(r);
          if (n && a.isCodeBlockZoneState(n)) {
            var i = e.deltaSet.get(r);
            if (!(i instanceof contentStructureDelta.ContentDelta)) {
              return;
            }
            var o = i.reduce(function (e, t) {
              var r = typescriptHelpers_1.assign({}, t.attributes);
              delete r[codeBlockConstants_1.clientHighlightId];
              return e.push(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, t), {
                attributes: r
              }));
            }, new contentStructureDelta.ContentDelta({
              zoneId: i.zoneId
            }));
            e.deltaSet.delete(r);
            e.deltaSet.add(r, o);
          }
        });
      };
      t.prototype.serialize = function (e) {
        var t = e.type;
        var r = e.op;
        var n = (r == null ? undefined : r.attributes) || {};
        var i = n.type === codeBlockConstants_1.componentName;
        if (t === treeNodeTypes.nodeTypes.LEAF && i) {
          var o = n.zoneId;
          var a = document.createElement("pre");
          var s = document.createElement("code");
          var l = n.word_wrap;
          var u = n.lang;
          if (u) {
            a.classList.add("language-" + encodeURIComponent(u));
          }
          if (l) {
            a.dataset.wrap = l;
          }
          var c = e.zoneId;
          e.zoneId = o;
          var h = this.editor.clipboard.serialize(e).node;
          s.appendChild(h);
          a.appendChild(s);
          return Object.assign(e, {
            node: a,
            zoneId: c
          });
        }
        return e;
      };
      t.prototype.UNSAFE_editorNormalizePasteNode = function (e) {
        var t = e.data;
        if (this.isCodeBlockZoneState(this.editor.getContentState().getActiveZone())) {
          t.text = t.text.replace(/\t/g, Array(this.tabSize).fill(" ").join(""));
          Array.from(t.node.querySelectorAll("table")).forEach(function (e) {
            Array.from(e.querySelectorAll("tr")).forEach(function (e) {
              var t = document.createElement("div");
              t.innerHTML = e.innerHTML;
              e.parentElement.replaceChild(t, e);
            });
            var t = document.createElement("pre");
            t.innerHTML = e.innerHTML;
            e.parentElement.innerHTML = t.outerHTML;
          });
        }
        Array.from(t.node.querySelectorAll("pre > code")).forEach(function (e) {
          e.textContent = e.textContent || "";
        });
      };
      t.prototype.deserialize = function (e) {
        var t = e.node;
        var r = e.zoneId;
        var n = e.deltaSet;
        if (!(t instanceof HTMLElement)) {
          return n;
        }
        var i = t.tagName;
        var o = t.style;
        if (i.toLowerCase() !== "code") {
          return n;
        }
        var a = o.display === "block";
        if (t.parentElement && t.parentElement.tagName.toLowerCase() === "pre" || a) {
          var s = n.get(r);
          var l = N();
          n.replace(r, s.create(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, s), {
            zoneId: l
          })));
          var u = t.parentElement || t;
          var c = codeBlockHighlightUtils_1.getLanguageInfo(u).lang;
          n = n.concat(new contentStructureDelta.ContentDelta({
            zoneId: zeroConstantModule_1.versionValue
          }).insert(" ", {
            type: codeBlockConstants_1.componentName,
            zoneId: l,
            language: c
          }));
        }
        return n;
      };
      t.prototype.editorWillPaste = function (e) {
        var t;
        var r;
        var n;
        var i;
        var o = this;
        var a = this.replaceZoneInDeltaSet(e.deltaSet, true);
        var s = this.editor.selection.getSelection().start.zoneId;
        var l = this.editor.getContentState().getZoneState(s);
        if (l && this.isCodeBlockZoneState(l)) {
          t = a;
          r = codeBlockHighlightUtils_1.isCodeBlockInsert;
          n = [];
          t = t.reduce(function (e, i) {
            if (!(i instanceof contentStructureDelta.ContentDelta)) {
              return e.concat(i);
            }
            var o = i.reduce(function (e, i) {
              if (!r(i)) {
                return e.push(i);
              }
              var o = t.get(i.attributes.zoneId);
              n.push(o.zoneId);
              return e.concat(o);
            }, new contentStructureDelta.ContentDelta({
              zoneId: i.zoneId
            }));
            return e.concat(o);
          }, new deltaSetCore.DeltaSet());
          n.forEach(function (e) {
            return t.delete(e);
          });
          a = (a = t).reduce(function (e, t) {
            if (!(t instanceof contentStructureDelta.ContentDelta) || (r = t.zoneId) !== zeroConstantModule_1.versionValue && r.length !== 10) {
              return e;
            }
            var r;
            var n = t.reduce(function (e, t) {
              if (t.attributes && (0, t.attributes.lmkr)) {
                return e.insertLineMarker();
              } else {
                return e.push(t);
              }
            }, new contentStructureDelta.ContentDelta({
              zoneId: t.zoneId
            }));
            P(n);
            return e.concat(n);
          }, new deltaSetCore.DeltaSet());
        }
        var u = [];
        a.forEach(function (e) {
          e.forEach(function (e) {
            if (e.attributes?.type === codeBlockConstants_1.componentName) {
              u.push(e.attributes.zoneId);
            }
          });
        });
        u.forEach(function (e) {
          if (!o.editor.getContentState().getZoneState(e)) {
            var t = a.get(e);
            if (!editorClipboardManager.endsWithString(t, "\n")) {
              t.insert("\n");
            }
          }
        });
        return a;
      };
      t.prototype.replaceZoneInDeltaSet = function (e, t = false) {
        var r = [];
        var n = [];
        var i = e.reduce(function (e, t) {
          if (!(t instanceof contentStructureDelta.ContentDelta)) {
            return e.concat(t);
          }
          var i = t.reduce(function (e, t) {
            if (!codeBlockHighlightUtils_1.isCodeBlockInsert(t)) {
              return e.push(t);
            }
            var i = t.attributes.zoneId;
            var o = N();
            r.push(i);
            n.push(o);
            return e.push(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, t), {
              attributes: typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, t.attributes), {
                zoneId: o
              })
            }));
          }, new contentStructureDelta.ContentDelta({
            zoneId: t.zoneId
          }));
          return e.concat(i);
        }, new deltaSetCore.DeltaSet());
        r.forEach(function (e, r) {
          var o = i.get(e);
          if (o) {
            var a = o.create(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, o), {
              zoneId: n[r]
            }));
            if (t) {
              P(a);
            }
            i.replace(e, a);
          }
        });
        return i;
      };
      t.prototype.maybeCopyPartOfCodeBlock = function (e, t) {
        var r = this.editor.getContentState().getZoneState(e);
        if (!r || !this.isCodeBlockZoneState(r)) {
          return null;
        }
        var n = r.parent;
        if (!n) {
          return null;
        }
        var i = n.getEntities([["zoneId", e]])[0].attributes;
        return t.concat(new deltaSetCore.DeltaSet().concat(new contentStructureDelta.ContentDelta({
          zoneId: n.getZoneId()
        }).insert(" ", typescriptHelpers_1.assign({}, i))));
      };
      return t;
    }(e);
  }
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var H = classnamesUtils;
  require("empty-module_5") /*id: 563429*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var reactinxStaticText = require("reactinx-static-text") /*id: 594747*/;
  (o = d ||= {}).Fold = "fold";
  o.Clear = "clear";
  o.ClearAll = "clear_all";
  (a = f ||= {}).Json = "json";
  a.Python = "python";
  a.Java = "java";
  a.C = "c";
  a.Cpp = "cpp";
  a.Cpp2 = "c++";
  a.Javascript = "javascript";
  a.Typescript = "typescript";
  a.Go = "go";
  a.XML = "xml";
  a.HTML = "html";
  a.SQL = "sql";
  a.BASH = "bash";
  a.SHELL = "shell";
  a.YAML = "yaml";
  var W = Object.values(f);
  (s = A ||= {}).FoldInit = "zone_fold_init";
  s.FoldUpdate = "zone_fold_update";
  s.CollapsedChange = "collapsed_change";
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  var clientsidePrefixConstant = require("clientside-prefix-constant") /*id: 888035*/;
  var K = "folded";
  var q = "" + clientsidePrefixConstant.clientsidePrefix + K;
  var V = clientsidePrefixConstant.clientsidePrefix + "unfold";
  (l = g ||= {}).fold = "fold";
  l.unfold = "unfold";
  function J(e) {
    return W.includes(e.toLowerCase());
  }
  function X(e) {
    var t = [];
    var r = {
      fromA: 0,
      toA: 0,
      fromB: 0,
      toB: 0
    };
    var n = null;
    e.ops.forEach(function (e) {
      var i = deltaSetCore.getOpLength(e);
      if (deltaSetCore.isRetainOp(e)) {
        if (n && !deltaSetCore.isRetainOp(n)) {
          t.push(typescriptHelpers_1.assign({}, r));
          r = {
            fromA: r.toA,
            toA: r.toA,
            fromB: r.toB,
            toB: r.toB
          };
        }
        r.fromA += i;
        r.toA += i;
        r.fromB += i;
        r.toB += i;
      } else if (deltaSetCore.isDeleteOp(e)) {
        r.toA += i;
      } else if (deltaSetCore.isInsertOp(e)) {
        r.toB += i;
      }
      n = e;
    });
    if (r.fromA !== r.toA || r.fromB !== r.toB) {
      t.push(r);
    }
    return t;
  }
  function $(e, t) {
    var r = e.getOffset();
    var n = e.getModelText();
    var i = n[n.length - 1] === documentOperationConstants.newlineChar ? r.end - 1 : r.end;
    return r.start > t.from && i <= t.to;
  }
  function ee(e) {
    var i = e.getOps();
    var o = i[i.length - 1];
    return o && o.insert === documentOperationConstants.newlineChar && o.attributes?.[V] !== "true" && (o.attributes?.[K] === "true" || o.attributes?.[q] === "true");
  }
  function et(e, t, r) {
    return (t = Array.isArray(t) ? t.sort(function (e, t) {
      return e - t;
    }) : [t]).filter(function (t) {
      if (r) {
        return !ee(e.lines[t]);
      } else {
        return ee(e.lines[t]);
      }
    }).map(function (t) {
      return e.lines[t];
    });
  }
  function er(e, t, r, n, i, o = {}) {
    var a;
    var s;
    var l = new contentStructureDelta.ContentDelta({
      zoneId: t.getZoneId()
    });
    var u = {
      start: 0,
      end: 0
    };
    try {
      var c = typescriptHelpers_1.getValues(r);
      var h = c.next();
      for (; !h.done; h = c.next()) {
        var d = h.value.getOffset();
        l.retain(d.end - u.end - 1);
        l.retain(1, n);
        u = d;
      }
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        if (h && !h.done && (s = c.return)) {
          s.call(c);
        }
      } finally {
        if (a) {
          throw a.error;
        }
      }
    }
    if (l.length()) {
      return e.getContentState().apply(l, typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, o), {
        extra: typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, (o == null ? undefined : o.extra) || {}), {
          foldAction: i
        }),
        preventScrolling: true
      }));
    } else {
      return null;
    }
  }
  function en(e, t, r, n = false, i) {
    var o;
    var a = et(t, r, true);
    if (!a.length) {
      return null;
    }
    var s = n ? q : K;
    return er(e, t, a, ((o = {})[s] = "true", o[V] = "", o), g.fold, i);
  }
  function ei(e, t, r, n = false, i) {
    var o;
    var a = et(t, r, false);
    if (!a.length) {
      return null;
    }
    (o = {})[q] = "";
    var s = o;
    if (!n) {
      s[K] = "";
    }
    if (n) {
      s[V] = "true";
    }
    return er(e, t, a, s, g.unfold, i);
  }
  function eo(e, t, r) {
    if (e.isEditable()) {
      var n = [];
      t.lines.forEach(function (e) {
        if (ee(e) && r.every(function (t) {
          return t.line.key !== e.key;
        })) {
          n.push(e.index);
        }
      });
      var i = e.undoModule.getNthUndoRecordFromTop();
      var o = {
        fromCodeFoldAutoFix: true
      };
      var a = ei(e, t, n, false, i ? {
        extra: o
      } : {
        nonundoable: true,
        extra: o
      });
      if (i && a) {
        e.undoModule.mergeRecords(i, a);
      }
    }
  }
  function ea(e, t, r) {
    var n = [];
    var i = e.lines;
    var o = t.index + 1;
    for (; o < i.length; o++) {
      var a = i[o];
      if ($(a, r)) {
        n.push(a);
        continue;
      }
      break;
    }
    return n;
  }
  function es(e, t) {
    var r = t.line;
    var n = t.range;
    var i = e.getLine(r.index + 1);
    return !!i && !!$(i, n);
  }
  var idleCallbackPolyfill = require("idle-callback-polyfill") /*id: 162788*/;
  var eventEmitterClass_2 = require("event-emitter-class_2") /*id: 114194*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  var moduleReExportWrapper = require("module-re-export-wrapper") /*id: 71973*/;
  var deepEqualityCheck_1 = require("deep-equality-check_1") /*id: 956585*/;
  function ef(e, t) {
    var r;
    var n;
    var i;
    var o;
    var a = [t];
    if (!e.length) {
      return a;
    }
    try {
      var s = typescriptHelpers_1.getValues(e);
      var l = s.next();
      for (; !l.done; l = s.next()) {
        var u = l.value;
        var c = [];
        try {
          i = undefined;
          var h = typescriptHelpers_1.getValues(a);
          var d = h.next();
          for (; !d.done; d = h.next()) {
            var f = d.value;
            if (f.end < u.start || f.start > u.end) {
              c.push(f);
            } else {
              if (f.start < u.start) {
                c.push({
                  start: f.start,
                  end: u.start - 1
                });
              }
              if (f.end > u.end) {
                c.push({
                  start: u.end + 1,
                  end: f.end
                });
              }
            }
          }
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            if (d && !d.done && (o = h.return)) {
              o.call(h);
            }
          } finally {
            if (i) {
              throw i.error;
            }
          }
        }
        a = c;
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        if (l && !l.done && (n = s.return)) {
          n.call(s);
        }
      } finally {
        if (r) {
          throw r.error;
        }
      }
    }
    return a;
  }
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var eg = function () {
    function e() {
      var e = this;
      this.worker = null;
      this.getWorkerPromise = null;
      this.tasks = new Map();
      this.onMessage = function (t) {
        var r = t.data;
        if (r.type === d.Fold) {
          e.handleCalcFoldFinished(r.payload);
        }
      };
      this.handleCalcFoldFinished = function (t) {
        var r = t.key;
        var n = e.tasks.get(r);
        if (n == null ? undefined : n.length) {
          n.shift().onFinish(t);
          if (n.length === 0) {
            e.tasks.delete(r);
          } else {
            e.runTask(r);
          }
        }
      };
      this.runTask = function (t) {
        var r = e.tasks.get(t);
        var n = r == null ? undefined : r[0];
        if (n) {
          var i = {
            key: n.key,
            code: n.code,
            lines: n.lines,
            language: n.language,
            changeRangesList: n.changeRangesList
          };
          return e.getWorker().then(function (e) {
            return e.postMessage({
              type: d.Fold,
              payload: i
            });
          });
        }
      };
      this.addTask = function (t) {
        var r = t.key;
        return new Promise(function (n) {
          var i = typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, t), {
            onFinish: n
          });
          var o = e.tasks.get(r);
          if (o) {
            o.push(i);
          } else {
            e.tasks.set(r, [i]);
            e.runTask(r);
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
      return typescriptHelpers_1.awaiter(this, undefined, undefined, function () {
        var e = this;
        return typescriptHelpers_1.generator(this, function (t) {
          if (this.worker) {
            return [2, this.worker];
          } else {
            this.getWorkerPromise ||= new Promise(function (t) {
              require.e("code-fold-worker") /*id: 52808*/.then(require.bind(require, "code-fold-worker_2") /*id: 771370*/).then(function (r) {
                e.worker = r.default;
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
          type: d.Clear,
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
          type: d.ClearAll
        });
        e.worker = null;
        e.getWorkerPromise = null;
      });
    };
    return e;
  }();
  function ep(e, t, r, n, i) {
    var o = this;
    this.editor = e;
    this.zoneId = t;
    this.language = r;
    this.onChange = n;
    this.onError = i;
    this.key = contentDeltaOpsUtil.generateRandomId();
    this.initPromise = null;
    this.updatePromise = null;
    this.pendingUpdateQueue = [];
    this.timer = null;
    this.destroied = false;
    this.foldableLines = [];
    this.inited = false;
    this.getZoneState = function () {
      return o.editor.getContentState().getZoneState(o.zoneId);
    };
    this.getCode = function () {
      var e = o.getZoneState();
      if (e) {
        return e.getModelText();
      } else {
        return "";
      }
    };
    this.getZoneLines = function () {
      var e = o.getZoneState();
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
      return typescriptHelpers_1.awaiter(o, undefined, undefined, function () {
        var e;
        var t;
        var r;
        return typescriptHelpers_1.generator(this, function (n) {
          switch (n.label) {
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
              r = n.sent();
              this.initPromise = null;
              this.inited = true;
              this.handleFoldResult(r, A.FoldInit);
              return [2];
          }
        });
      });
    };
    this.handleUpdate = function () {
      return typescriptHelpers_1.awaiter(o, undefined, undefined, function () {
        var e;
        var t;
        var r;
        return typescriptHelpers_1.generator(this, function (n) {
          e = this.pendingUpdateQueue.map(function (e) {
            return X(e);
          });
          this.pendingUpdateQueue = [];
          t = this.getCode();
          r = this.getZoneLines();
          return [2, this.handleTask({
            code: t,
            lines: r,
            language: this.language,
            changeRangesList: e
          })];
        });
      });
    };
    this.handleTimeout = function () {
      var e;
      if ((e = o.onError) === null || e === undefined) {
        return undefined;
      } else {
        return e.call(o, o.zoneId);
      }
    };
    this.handleTask = function (e) {
      return typescriptHelpers_1.awaiter(o, undefined, undefined, function () {
        var t;
        return typescriptHelpers_1.generator(this, function (r) {
          switch (r.label) {
            case 0:
              if (this.timer) {
                clearTimeout(this.timer);
              }
              this.timer = window.setTimeout(this.handleTimeout, 5000);
              return [4, eg.getInstance().addTask(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, e), {
                key: this.key
              }))];
            case 1:
              t = r.sent();
              clearTimeout(this.timer);
              return [2, t];
          }
        });
      });
    };
    this.isCodeChanged = function (e) {
      var t = e.code;
      var r = e.lines;
      var n = o.getCode();
      var i = o.getZoneLines();
      return t !== n || r.length !== i.length || r.some(function (e, t) {
        return !deepEqualUtil_1.deepEqual(e, i[t]);
      });
    };
    this.handleFoldResult = function (e, t) {
      if (!o.destroied) {
        var r;
        var n = o.getZoneState();
        if (!!n && !o.isCodeChanged(e)) {
          var i = e.foldableLines;
          o.foldableLines = i.map(function (e) {
            var t = e.index;
            return {
              range: e.foldRange,
              line: n.lines[t]
            };
          }).filter(es.bind(null, n));
          if ((r = o.onChange) !== null && r !== undefined) {
            r.call(o, o.zoneId, t);
          }
        }
      }
    };
    this.update = function (e) {
      return typescriptHelpers_1.awaiter(o, undefined, undefined, function () {
        var t;
        return typescriptHelpers_1.generator(this, function (r) {
          switch (r.label) {
            case 0:
              this.pendingUpdateQueue.push(e);
              if (!this.initPromise) {
                return [3, 2];
              }
              return [4, this.initPromise];
            case 1:
              r.sent();
              r.label = 2;
            case 2:
              if (!this.updatePromise) {
                return [3, 4];
              }
              return [4, this.updatePromise];
            case 3:
              r.sent();
              r.label = 4;
            case 4:
              this.updatePromise = this.handleUpdate();
              return [4, this.updatePromise];
            case 5:
              t = r.sent();
              this.handleFoldResult(t, A.FoldUpdate);
              this.updatePromise = null;
              return [2];
          }
        });
      });
    };
    this.destroy = function () {
      o.destroied = true;
      o.onError = undefined;
      o.onChange = undefined;
      o.foldableLines = [];
      if (o.timer) {
        clearTimeout(o.timer);
      }
      eg.getInstance().clearTask(o.key);
    };
    this.init();
  }
  function em(e) {
    var t = this;
    this.editor = e;
    this.zoneMap = new Map();
    this.eventEmitter = new eventEmitterClass_2.EventEmitter();
    this.zoneCollapsedChanges = {};
    this.zoneFoldRangeInfo = {};
    this.isCodeZoneState = function (e) {
      var r = t.editor.pluginManager.getPlugin(codeBlockConstants_1.componentClassName);
      if (r == null) {
        return undefined;
      } else {
        return r.isCodeBlockZoneState(e);
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
      var r;
      var n = e.deltaSet;
      var i = e.options;
      if ((r = i == null ? undefined : i.extra) === null || r === undefined || !r[codeBlockConstants_1.highlightClassName]) {
        Object.entries(n.deltas).forEach(function (e) {
          var r = typescriptHelpers_1.readIterator(e, 2);
          var n = r[0];
          var i = r[1];
          var o = t.editor.getContentState().getZoneState(n);
          if (o && t.isCodeZoneState(o)) {
            t.updateZoneFold(n, i);
          }
        });
      }
    };
    this.handleFoldAction = function (e) {
      var n = e.changes;
      var i = e.options;
      if (i.extra?.foldAction) {
        var o = i.extra.foldAction === g.fold;
        Object.entries(n).forEach(function (e) {
          var r = typescriptHelpers_1.readIterator(e, 2);
          var n = r[0];
          var i = r[1];
          var a = t.editor.getContentState().getZoneState(n);
          if (!a || t.isCodeZoneState(a) && i.length !== 0) {
            i.forEach(function (e) {
              var r = e.inserts;
              var i = e.deletes;
              if (!codeBlockHighlightUtils_1.compareEntityIndices(r, i)) {
                t.editor.error({
                  level: editorConstantsKeycodes.LogLevel.FATAL,
                  message: "[code-block] changes length not equal when fold action"
                });
                return;
              }
              var a = o ? "unfold" : "folded";
              var s = r.map(function (e) {
                var r;
                if ((r = t.zoneFoldRangeInfo[n]) === null || r === undefined) {
                  return undefined;
                } else {
                  return r[a].find(function (t) {
                    return t.start === e.index + 1;
                  });
                }
              }).filter(Boolean);
              t.updateZoneFoldRanges(n, "folded", s, o ? "add" : "delete", true);
              t.updateZoneFoldRanges(n, "unfold", s, o ? "delete" : "add", false);
            });
          }
        });
      }
    };
    this.updateZoneFoldRanges = function (e, r, n, i, o) {
      t.zoneFoldRangeInfo[e] ||= {
        folded: [],
        unfold: []
      };
      var a = t.editor.getContentState().getZoneState(e);
      n.forEach(function (n) {
        var s = t.zoneFoldRangeInfo[e][r];
        var l = [];
        if (o && i === "add") {
          l = ef(s, n);
        }
        t.zoneFoldRangeInfo[e][r] = function (e, t, r) {
          var n;
          var i;
          var o = [];
          var a = false;
          try {
            var s = typescriptHelpers_1.getValues(e);
            var l = s.next();
            for (; !l.done; l = s.next()) {
              var u = l.value;
              if (t.start !== u.start || t.end !== u.end || (a = true, r !== "delete")) {
                o.push(u);
              }
            }
          } catch (e) {
            n = {
              error: e
            };
          } finally {
            try {
              if (l && !l.done && (i = s.return)) {
                i.call(s);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
          if (a || r !== "delete") {
            if (!a && r === "add") {
              o.push(t);
            }
          }
          return o.sort(function (e, t) {
            return e.start - t.start;
          });
        }(s, n, i);
        if (o && i === "delete") {
          l = ef(t.zoneFoldRangeInfo[e][r], n);
        }
        if (o) {
          l.forEach(function (r) {
            var n = r.start;
            var o = Array(r.end - n + 1).fill(0).map(function (e, t) {
              if (a == null) {
                return undefined;
              } else {
                return a.getLine(n + t);
              }
            }).filter(Boolean);
            t.addCollapsedChangeEvent(e, o, i === "add");
          });
        }
      });
    };
    this.handleContentChangeAction = function (e) {
      Object.entries(e.changes).forEach(function (e) {
        var r = typescriptHelpers_1.readIterator(e, 2);
        var n = r[0];
        var i = r[1];
        t.updateCollapsedLineRanges(n, i);
      });
    };
    this.updateCollapsedLineRanges = function (e, r) {
      for (var n = r.length - 1; n >= 0; n--) {
        var i = r[n];
        var o = i.start;
        var a = i.deletes;
        var s = i.inserts;
        var l = new Set(s.map(function (e) {
          return e.getKey();
        }));
        var u = new Set();
        var c = 0;
        var h = 0;
        for (; h < a.length; h++) {
          var d = a[h];
          var f = d.getKey();
          if (l.has(f)) {
            c++;
            u.add(f);
            continue;
          }
          var A = o + c;
          t.transformCollapsedLineRanges(e, A, d, -1);
        }
        for (var h = 0; h < s.length; h++) {
          var d = s[h];
          if (!u.has(d.getKey())) {
            var A = o + h;
            t.transformCollapsedLineRanges(e, A, d, 1);
          }
        }
      }
    };
    this.transformCollapsedLineRanges = function (e, r, n, i) {
      var o;
      var a;
      function s(o) {
        return function (a) {
          var s = a.start;
          var l = a.end;
          if (s >= r) {
            a.start += i;
          }
          var u = l + +(i > 0) >= r;
          if (u) {
            a.end += i;
          }
          if (o && s < r && u) {
            t.addCollapsedChangeEvent(e, [n], i === 1);
          }
        };
      }
      if ((o = t.zoneFoldRangeInfo[e]) !== null && o !== undefined) {
        o.folded.forEach(s(true));
      }
      if ((a = t.zoneFoldRangeInfo[e]) !== null && a !== undefined) {
        a.unfold.forEach(s(false));
      }
    };
    this.onError = function (e) {
      var r = t.zoneMap.get(e);
      if (r) {
        t.clearZoneFoldAndExpand(r.zoneId);
        t.initZoneFold(r.zoneId, r.language);
      }
    };
    this.onChange = function (e, r) {
      if (t.editor.getContentState().getZoneState(e)) {
        var n = t.zoneFoldRangeInfo[e];
        t.refreshCollapsedRanges(e);
        t.autoFixUnfoldLines(e);
        t.eventEmitter.trigger(r, [e]);
        if (!deepEqualityCheck_1.deepEqual(n, t.zoneFoldRangeInfo[e])) {
          t.forceRefreshZone(e);
        }
      }
    };
    this.refreshCollapsedRanges = function (e) {
      var r;
      var n = t.zoneMap.get(e);
      var i = t.editor.getContentState().getZoneState(e);
      if (n && i) {
        var o = new Set((r = t.zoneFoldRangeInfo[e]) === null || r === undefined ? undefined : r.folded.reduce(function (e, t) {
          for (var r = t.start; r <= t.end; r++) {
            var n = i.getLine(r);
            if (n) {
              e.push(n);
            }
          }
          return e;
        }, []));
        t.zoneFoldRangeInfo[e] = {
          folded: [],
          unfold: []
        };
        var a = new Set(n.foldableLines.reduce(function (r, n) {
          var i = n.line;
          var o = t.getCollapsableLines(e, i);
          if (!(o == null ? undefined : o.length)) {
            return r;
          }
          var a = {
            start: o[0].index,
            end: o[o.length - 1].index
          };
          if (ee(i)) {
            r.push.apply(r, typescriptHelpers_1.spreadArray(o));
            t.zoneFoldRangeInfo[e].folded.push(a);
          } else {
            t.zoneFoldRangeInfo[e].unfold.push(a);
          }
          return r;
        }, []));
        o.forEach(function (r) {
          if (a.has(r)) {
            a.delete(r);
          } else {
            t.addCollapsedChangeEvent(e, [r], false);
          }
        });
        a.forEach(function (r) {
          t.addCollapsedChangeEvent(e, [r], true);
        });
        t.flushChanges();
      }
    };
    this.getCollapsableLines = function (e, r) {
      var i = t.zoneMap.get(e);
      var o = t.editor.getContentState().getZoneState(e);
      if (!i || !o) {
        return null;
      }
      var a = typeof r == "number" ? o.getLine(r) : r;
      var s = i.foldableLines.find(function (e) {
        return e.line.index === (a == null ? undefined : a.index);
      })?.range;
      if (a && s) {
        return ea(o, a, s);
      } else {
        return null;
      }
    };
    this.addCollapsedChangeEvent = function (e, r, n) {
      var i;
      var o;
      var a;
      var s;
      t.zoneCollapsedChanges[e] ||= {
        expandLines: [],
        collapsedLines: []
      };
      if (n) {
        if ((a = t.zoneCollapsedChanges[e]) !== null && a !== undefined) {
          (i = a.collapsedLines).push.apply(i, typescriptHelpers_1.spreadArray(r));
        }
      } else if ((s = t.zoneCollapsedChanges[e]) !== null && s !== undefined) {
        (o = s.expandLines).push.apply(o, typescriptHelpers_1.spreadArray(r));
      }
    };
    this.expandAllCollapsedLines = function (e) {
      var n = t.zoneFoldRangeInfo[e]?.folded;
      if (n) {
        var i = n.reduce(function (r, n) {
          var i = t.editor.getContentState().getZoneState(e);
          Array(n.end - n.start + 1).fill(0).forEach(function (e, t) {
            var o = i == null ? undefined : i.getLine(n.start + t);
            if (o) {
              r.add(o);
            }
          });
          return r;
        }, new Set());
        t.addCollapsedChangeEvent(e, Array.from(i), false);
        t.flushChanges();
      }
    };
    this.autoFixUnfoldLines = function (e, r) {
      if (r = r || t.zoneMap.get(e)?.foldableLines) {
        var i = t.editor.getContentState().getZoneState(e);
        if (i) {
          eo(t.editor, i, r);
        }
      }
    };
    this.deleteZoneFold = function (e) {
      var r;
      if (t.zoneMap.has(e)) {
        if ((r = t.zoneMap.get(e)) !== null && r !== undefined) {
          r.destroy();
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
      t.eventEmitter.trigger(A.CollapsedChange, [e]);
      t.zoneCollapsedChanges = {};
    };
    this.forceRefreshZone = function (e) {
      var r;
      var n;
      if ((n = (r = t.editor.virtualListManager) === null || r === undefined ? undefined : r.getVirtualListModuleOfZone(e)) !== null && n !== undefined) {
        n.rerender();
      }
    };
    this.isZoneInit = function (e) {
      return !!t.zoneMap.get(e)?.inited;
    };
    this.isFoldableLine = function (e, r) {
      var n = t.zoneFoldRangeInfo[e];
      if (!n) {
        return false;
      }
      var i = typeof r == "number" ? r : r.index;
      function o(e) {
        return t.getFoldableLineNum(e) === i;
      }
      return n.folded.some(o) || n.unfold.some(o);
    };
    this.isCollapsedLine = function (e, r) {
      var n = t.zoneFoldRangeInfo[e];
      if (!n) {
        return false;
      }
      var i = typeof r == "number" ? r : r.index;
      return n.folded.some(function (e) {
        return t.inRange(i, e);
      });
    };
    this.has = function (e) {
      return t.zoneMap.has(e);
    };
    this.findFoldableLineForPosition = function (e, r) {
      var i = t.zoneMap.get(e);
      if (!i) {
        return null;
      }
      var o = i.foldableLines.sort(function (e, t) {
        return e.range.from - t.range.from;
      });
      return moduleReExportWrapper.wrappedModule(o, function (e) {
        var t = e.range;
        return t.from <= r && t.to >= r;
      })?.line || null;
    };
    this.getCollapseFoldLines = function (e, r) {
      var n = t.zoneFoldRangeInfo[e];
      if (!n) {
        return [];
      }
      var i = typeof r == "number" ? r : r.index;
      var o = [];
      function a(e) {
        if (t.inRange(i, e)) {
          o.push(t.getFoldableLineNum(e));
        }
      }
      n.folded.forEach(a);
      n.unfold.forEach(a);
      return o.sort(function (e, t) {
        return e - t;
      });
    };
    this.getFoldedLines = function (e) {
      return (t.zoneFoldRangeInfo[e]?.folded || []).map(function (e) {
        return t.getFoldableLineNum(e);
      });
    };
    this.initZoneFold = function (e, r) {
      if (!!J(r = r.toLowerCase()) && !t.zoneMap.has(e)) {
        var n = new ep(t.editor, e, r, t.onChange, t.onError);
        t.zoneMap.set(e, n);
      }
    };
    this.rebuildZoneFold = function (e, r) {
      if (!J(r.toLowerCase())) {
        t.clearZoneFoldAndExpand(e);
        return;
      }
      t.deleteZoneFold(e);
      return t.initZoneFold(e, r);
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
    this.updateZoneFold = function (e, r) {
      var n = t.zoneMap.get(e);
      if (n) {
        n.update(r);
      }
    };
    this.on = function (e, r) {
      t.eventEmitter.on(e, r);
    };
    this.off = function (e, r) {
      t.eventEmitter.off(e, r);
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
  var reactDomContextDecorator = require("react-dom-context-decorator") /*id: 955275*/;
  var ev = function (e) {
    function t(t) {
      var r = t.editor;
      var n = e.call(this) || this;
      n.register = function () {
        return [];
      };
      n.editor = r;
      return n;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.match = function (e, t) {
      return e === "type" && t === this.type;
    };
    r.renderCustomZoneView = function (e) {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, e.children);
    };
    r.render = function (e) {
      return reactCoreLibraryReexport.createElement("div", {
        className: "zone-wrapper",
        contentEditable: "false"
      }, this.renderCustomZoneView(e));
    };
    typescriptHelpers_1.decorate([reactDomContextDecorator.withContextConsumer()], t.prototype, "render", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  var userAgentDetect = require("user-agent-detect") /*id: 68901*/;
  var ew = function () {
    function e(e) {
      var t = this;
      this.tabSize = 4;
      this.handleKeyDown = function (e) {
        var r = t.editor.getContentState().getActiveZone();
        var n = userAgentDetect.userAgentInfo.isMac ? e.metaKey : e.ctrlKey;
        var i = !e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey;
        var o = e.keyCode === codeBlockConstants_1.keyCodeEnum.ENTER && i;
        if (t.codeBlockPlugin.isCodeBlockZoneState(r)) {
          t.handleFoldKeyDownEvent(e);
          if (o) {
            return t.handleEnter(e);
          } else if (e.keyCode === codeBlockConstants_1.keyCodeEnum.ENTER && n && !e.altKey) {
            return t.handleMetaEnter(e);
          } else if (e.keyCode === codeBlockConstants_1.keyCodeEnum.TAB && i) {
            return t.handleTab(e);
          } else if (e.keyCode !== codeBlockConstants_1.keyCodeEnum.TAB || e.ctrlKey || e.metaKey || e.altKey || !e.shiftKey) {
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
        var r = t.editor;
        var n = r.selection.getSelection();
        var i = n.start;
        var o = i.line;
        var a = i.offset;
        var s = i.zoneId;
        var l = r.getContentState();
        var u = r.getContentState().getActiveZone().getLine(o);
        if (u) {
          var c = u.getText();
          var h = /^\s+/.exec(c);
          var d = Math.min((h ? h[0] : "").length, a);
          var f = l.getZoneState(s);
          if (f) {
            var A = new contentStructureDelta.ContentDelta({
              zoneId: s
            });
            var g = f.pointToOffset(n.start);
            var p = f.pointToOffset(n.end);
            var m = p === g;
            if (g !== null && p !== null) {
              A.retain(g);
              if (!m) {
                A.delete(p - g);
              }
              A.insertEnter().insert("" + " ".repeat(d));
              l.apply(A, {
                type: "codeBlockEnter"
              });
              t.editor.selection.setSelection({
                zoneId: s,
                start: g + 1 + d,
                len: 0
              });
            }
          }
        }
      };
      this.handleTab = function (e) {
        t.preventKeyDownEvent(e);
        var r;
        var n = t.editor;
        var i = t.tabSize;
        var o = n.selection.getSelection();
        var a = Array(i).fill(" ").join("");
        var s = n.getContentState();
        var l = s.getActiveZone();
        var u = o.start;
        var c = o.end;
        var h = u.line === c.line ? -u.offset : 0;
        var d = new contentStructureDelta.ContentDelta({
          zoneId: c.zoneId
        });
        var f = u.line === c.line && h !== 0 ? (r = t.editor.inputModel) === null || r === undefined ? undefined : r._getInheritAttributesAndsetStatus() : undefined;
        var A = u.line;
        for (; A <= c.line; A++) {
          var g = l.getLine(A).getOffset();
          d = d.retain(g.start - h).insert(a, f);
          h = g.start;
        }
        s.apply(d);
      };
      this.handleUnTab = function (e) {
        t.preventKeyDownEvent(e);
        var r = t.editor;
        var n = t.tabSize;
        var i = r.getContentState();
        var o = i.getActiveZone();
        var a = r.selection.getSelection();
        var s = a.start;
        var l = a.end;
        var u = new RegExp(` {1,${n.toString()}}\$`);
        var c = new contentStructureDelta.ContentDelta({
          zoneId: l.zoneId
        });
        var h = 0;
        var d = s.line;
        for (; d <= l.line; d++) {
          var f = o.getLine(d).getOffset();
          var A = o.getLine(d).getModelText();
          if (s.line === l.line) {
            A = A.slice(0, s.offset);
          } else {
            u = new RegExp(`^ {1,${n.toString()}}`);
          }
          var g = A.match(u);
          if (g) {
            var p = g[0].length;
            if (s.line === l.line) {
              h = -(s.offset - p);
            }
            c = c.retain(f.start - h).delete(p);
            h = f.start + p;
          }
        }
        i.apply(c);
      };
      this.handleMetaEnter = function (e) {
        t.preventKeyDownEvent(e);
        var r;
        var n;
        var i = e.shiftKey;
        var o = t.editor.selection.getSelection().end;
        var a = o.line;
        var s = o.offset;
        var l = o.zoneId;
        var u = t.editor.getContentState();
        var c = u.getActiveZone().getLine(a);
        if (c) {
          var h = c.getText();
          var d = /^\s+/.exec(h);
          var f = Math.min((d ? d[0] : "").length, s);
          var A = new contentStructureDelta.ContentDelta({
            zoneId: l
          });
          var g = c.getOffset();
          var p = g.start;
          var m = g.end;
          if (i) {
            n = r = p + f;
          } else {
            r = m - 1;
            n = m + f;
          }
          A.retain(r).insertEnter().insert("" + " ".repeat(f));
          u.apply(A);
          t.editor.selection.setSelection({
            zoneId: l,
            start: n,
            len: 0
          });
        }
      };
      this.handleFoldKeyDownEvent = function (e) {
        var r = e.keyCode;
        var n = t.editor.selection.getSelection();
        var i = t.codeBlockPlugin.foldModule;
        if ((r === codeBlockConstants_1.keyCodeEnum.DELETE || r === codeBlockConstants_1.keyCodeEnum.ENTER) && !!i && !!n.isCollapsed()) {
          var o = r === codeBlockConstants_1.keyCodeEnum.DELETE;
          var a = n.toPosition().start;
          var s = n.start;
          var l = s.zoneId;
          var u = s.offset;
          if (t.editor.getContentState().getZoneState(l)) {
            var c = i.findFoldableLineForPosition(l, a);
            var h = o && i.findFoldableLineForPosition(l, a - 1);
            if ((c || h) && (e.keyCode !== codeBlockConstants_1.keyCodeEnum.DELETE || !u || !c && h)) {
              var d = (c || h).index;
              t.codeBlockPlugin.foldZoneLine({
                zoneId: l,
                index: d,
                unFold: true
              });
            }
          }
        }
      };
      var r = e.editor;
      var n = e.tabSize;
      var i = e.codeBlockPlugin;
      this.editor = r;
      this.codeBlockPlugin = i;
      if (n) {
        this.tabSize = n;
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
  var eC = "code-block-fold-controller";
  var eE = "code-block-fold-indicator";
  var eI = function (e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    typescriptHelpers_1.inherits(t, e);
    t.prototype.render = function () {
      var e = this.props;
      var t = e.children;
      var r = e.lineNum;
      var n = e.style;
      var i = H("code-line-wrapper");
      return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.DivSymbol, {
        className: i,
        style: n,
        "data-line-num": r
      }, t);
    };
    return t;
  }(reactinxDomContextExports.ReactInXExports.Component);
  var eB = function (e) {
    function t(r) {
      var n = e.call(this, r) || this;
      n.type = codeBlockConstants_1.componentName;
      n.name = codeBlockConstants_1.componentClassName;
      n.tabSize = 4;
      n.foldable = false;
      n.handleLanguageChange = function (e, t) {
        if (n.isFoldEnable(e)) {
          var r = n.editor.getContentState().getZoneState(e);
          if (r && n.isCodeBlockZoneState(r)) {
            n.foldModule.rebuildZoneFold(e, t);
          }
        }
      };
      n.buildZoneFold = function (e) {
        if (n.isFoldEnable(e)) {
          var t = n.editor.getContentState().getZoneState(e);
          if (t && n.isCodeBlockZoneState(t)) {
            n.foldModule.initZoneFold(e, n.getLanguage(t));
          }
        }
      };
      n.setRef = function (e, t) {
        n.zoneIdToCodeView.set(t, e);
      };
      n.onCodeViewUnMount = function (e) {
        n.zoneIdToCodeView.delete(e);
      };
      n.insertCodeBlock = function (e) {
        var t;
        var r;
        var i;
        var o = e.range;
        var a = n.editor;
        var s = (o = o || a.selection.getSelection()).start;
        var l = o.end;
        var u = s.zoneId;
        var c = a.getContentState();
        var h = c.getZoneState(u);
        if (h) {
          var d = h.getLine(s.line);
          if (d) {
            if (!n.canInsertCodeBlock(h)) {
              return;
            }
            var f = h.pointToOffset(s);
            var A = h.pointToOffset(l);
            if (f === null || A === null) {
              return;
            }
            var g = new contentStructureDelta.ContentDelta({
              zoneId: u
            });
            var p = h.slice(s, l);
            var y = "";
            try {
              var v = typescriptHelpers_1.getValues(p);
              var b = v.next();
              for (; !b.done; b = v.next()) {
                var w = b.value;
                y += w.getText();
              }
            } catch (e) {
              t = {
                error: e
              };
            } finally {
              try {
                if (b && !b.done && (r = v.return)) {
                  r.call(v);
                }
              } finally {
                if (t) {
                  throw t.error;
                }
              }
            }
            y += "\n";
            var C = N();
            var E = M(C, y);
            g.retain(f).delete(A - f);
            if (codeBlockHighlightUtils_1.checkLineMarker(a, s, u)) {
              g.insertEnter();
            }
            g.insert(" ", {
              type: codeBlockConstants_1.componentName,
              language: codeBlockHighlightUtils_1.getDefaultLanguage(),
              zoneId: C,
              wrap: String(codeBlockConstants_1.highlightEnabled),
              parentZoneId: u
            });
            if (d.index === h.lines.length - 1) {
              g.insertEnter();
            }
            var I = new deltaSetCore.DeltaSet(((i = {})[u] = g, i[C] = E, i));
            n.editor.undoModule.batchedUndo(function () {
              c.apply(I);
              var e = c.getZoneState(C);
              if (e) {
                var t = e.totalWidth() - 1;
                a.selection.setSelection({
                  zoneId: C,
                  start: t,
                  len: 0
                });
              }
            });
          }
        }
      };
      n.handleSelectionChange = function (e) {
        var t = e.current;
        var r = t.start;
        var i = t.end;
        var o = t.isCollapsed();
        var a = n.editor.getContentState();
        var s = [];
        if (!o) {
          s = a.getEntities({
            start: r,
            end: i
          }, function (e, t) {
            return e === "type" && t === codeBlockConstants_1.componentName;
          }).reduce(function (e, t) {
            var r = t.attributes.zoneId;
            e.push(r);
            return e;
          }, []);
        }
        n.zoneIdToCodeView.forEach(function (e) {
          e.onSelectedChange(s);
        });
      };
      n.handleContentChange = function (e) {
        Object.entries(e.changes).forEach(function (e) {
          var t = typescriptHelpers_1.readIterator(e, 2);
          var r = t[0];
          var i = t[1];
          var o = n.editor.getContentState().getZoneState(r);
          if (!o || n.isCodeBlockZoneState(o) && i.length !== 0) {
            var a = Number.MAX_SAFE_INTEGER;
            i.forEach(function (e) {
              var t = e.inserts;
              var i = e.deletes;
              if (!codeBlockHighlightUtils_1.compareEntityIndices(t, i)) {
                t.forEach(function (e) {
                  a = Math.min(e.index, a);
                });
                i.forEach(function (e) {
                  a = Math.min(e.index, a);
                });
                var o = n.zoneIdToDirtyLineIndex.get(r);
                if (o !== undefined) {
                  n.zoneIdToDirtyLineIndex.set(r, Math.min(a, o));
                } else {
                  n.zoneIdToDirtyLineIndex.set(r, a);
                }
              }
            });
          }
        });
        if (n.zoneIdToDirtyLineIndex.size) {
          n.updateLineGutters();
        }
      };
      n.internalHandleCollapsedChange = n.handleCollapsedChange.bind(n);
      n.calcLineGutterRICCb = function (e) {
        if (n.zoneIdToDirtyLineIndex.size) {
          var t = codeBlockConstants_1.scrollDelay;
          if (e.timeRemaining() > codeBlockConstants_1.maxLangSuggestions) {
            n.zoneIdToDirtyLineIndex.forEach(function (e, r) {
              if (!(t <= 0)) {
                var i = n.editor.getContentState().getZoneState(r);
                if (!i) {
                  n.zoneIdToDirtyLineIndex.delete(r);
                  return;
                }
                var o = i.lines;
                i.lines.forEach(function (i) {
                  var a;
                  if (i.index >= e) {
                    if (t <= 0) {
                      return;
                    }
                    var s = (a = i._node) === null || a === undefined ? undefined : a.querySelector(".code-line-wrapper");
                    if (s) {
                      s.setAttribute("data-line-num", (i.index + 1).toString());
                      if (i.index === o.length - 1) {
                        n.zoneIdToDirtyLineIndex.delete(r);
                      } else {
                        n.zoneIdToDirtyLineIndex.set(r, i.index);
                      }
                      t--;
                    }
                  }
                });
              }
            });
          }
          n.calcLineGutterRICHandler = idleCallbackPolyfill.requestIdleCallback(n.calcLineGutterRICCb);
        }
      };
      n.updateLineGutters = function () {
        idleCallbackPolyfill.cancelIdleCallback(n.calcLineGutterRICHandler);
        n.calcLineGutterRICCb({
          timeRemaining: function () {
            return Number.MAX_SAFE_INTEGER;
          }
        });
        n.calcLineGutterRICHandler = idleCallbackPolyfill.requestIdleCallback(n.calcLineGutterRICCb);
      };
      var i = r.i18n;
      var o = r.tabSize;
      var a = r.foldable;
      var s = r.register;
      n.i18n = i;
      if (s) {
        n.register = s;
      }
      if (o) {
        n.tabSize = o;
      }
      var l = n.getCodeBlockKeyboard();
      n.keyboardModule = new l({
        editor: n.editor,
        tabSize: o,
        codeBlockPlugin: n
      });
      n.foldable = a;
      n.foldModule = new em(n.editor);
      n.zoneIdToDirtyLineIndex = new Map();
      n.zoneIdToCodeView = new Map();
      n.calcLineGutterRICHandler = -1;
      n.editor.registerCommand(t.KEY, function () {
        n.insertCodeBlock({});
      });
      n.bindEvents();
      return n;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.zoneDidMount = function (e) {
      this.buildZoneFold(e.zoneId);
    };
    r.zoneWillUnmount = function (e) {
      this.foldModule.clearZoneFold(e.zoneId);
    };
    r.getCodeBlockKeyboard = function () {
      return ew;
    };
    r.isFoldEnable = function (e) {
      return this.foldable;
    };
    r.isCodeBlockZoneState = function (e) {
      return codeBlockHighlightUtils_1.isParentCodeBlock(e);
    };
    r.getLanguage = function (e) {
      return codeBlockHighlightUtils_1.getParentLanguage(e);
    };
    r.getFoldModule = function () {
      return this.foldModule;
    };
    r.foldZoneLine = function (e) {
      var t = e.zoneId;
      var r = e.index;
      var n = e.unFold;
      var i = e.isLocal;
      var o = i !== undefined && i;
      var a = e.applyOptions;
      var s = this.editor.getContentState().getZoneState(t);
      if (s && this.isCodeBlockZoneState(s)) {
        if (n !== undefined && n) {
          ei(this.editor, s, r, o, a);
        } else {
          en(this.editor, s, r, o, a);
        }
      }
    };
    r.isFoldableLanguage = function (e) {
      return J(e);
    };
    r.canInsertCodeBlock = function (e) {
      return !this.isCodeBlockZoneState(e);
    };
    r.bindEvents = function () {
      this.editor.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
      this.editor.on(editorEventConstants.editorEventTypes.SELECTION_CHANGE, this.handleSelectionChange);
      this.foldModule.on(A.CollapsedChange, this.internalHandleCollapsedChange);
    };
    r.unBindEvents = function () {
      this.editor.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
      this.editor.off(editorEventConstants.editorEventTypes.SELECTION_CHANGE, this.handleSelectionChange);
      this.foldModule.off(A.CollapsedChange, this.internalHandleCollapsedChange);
    };
    r.handleCollapsedChange = function (e) {
      var t = this;
      Object.entries(e).forEach(function (e) {
        var r;
        var n = typescriptHelpers_1.readIterator(e, 2);
        var i = n[0];
        var o = n[1];
        var a = (r = t.editor.virtualListManager) === null || r === undefined ? undefined : r.getVirtualListModuleOfZone(i);
        if (a == null ? undefined : a.isEnabled) {
          a.getInvisibleLinesModule().setLinesVisibleState(o.expandLines, true);
          a.getInvisibleLinesModule().setLinesVisibleState(o.collapsedLines, false);
        }
      });
    };
    r.isFoldableLine = function (e, t) {
      return !!this.foldModule.isFoldableLine(e, t.index);
    };
    r.isFoldedLine = function (e) {
      return ee(e);
    };
    r.getFoldControllerClassName = function (e, t) {
      var r;
      return H(eC, ((r = {})[eC + "--folded"] = e, r));
    };
    r.getLineWrapperStyle = function (e) {};
    r.clearSelection = function (e) {
      var t = window.getSelection();
      if (t && t.rangeCount) {
        var r = t.getRangeAt(0);
        var n = this.editor.getContentState().getZoneState(e);
        if (r && (n == null ? undefined : n._node) && n._node.contains(r.commonAncestorContainer)) {
          this.editor.blur();
          t.removeAllRanges();
        }
      }
    };
    r.renderLine = function (e) {
      var t = this;
      var r = e.lineState;
      var n = e.children;
      var i = r.getZoneId();
      var o = this.editor.getContentState().getZoneState(i);
      var a = this.isFoldableLine(i, r);
      var s = this.isFoldedLine(r) && !!o && J(this.getLanguage(o));
      var l = this.getLineWrapperStyle(r);
      var u = r.parent;
      var c = r.index;
      var h = r.getKey();
      if (!u || !this.isCodeBlockZoneState(u)) {
        return n;
      }
      var d = this.getFoldControllerClassName(s, r);
      return reactinxDomContextExports.ReactInXExports.createElement(eI, {
        editor: this.editor,
        lineNum: c + 1,
        style: l
      }, typescriptHelpers_1.spreadArray([a && reactinxDomContextExports.ReactInXExports.createElement(reactinxStaticText.StaticText, {
        editor: this.editor,
        wrapperCls: eC + "--wrapper"
      }, reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.DivSymbol, {
        className: d,
        onClick: function (e) {
          t.clearSelection(i);
          e.preventDefault();
          var r = t.editor.getContentState().getZoneState(i);
          var n = r == null ? undefined : r.lines.find(function (e) {
            return e.getKey() === h;
          });
          if (n) {
            t.foldZoneLine({
              zoneId: i,
              index: n.index,
              unFold: ee(n),
              isByClick: true
            });
          }
        }
      }))], n, [s && reactinxDomContextExports.ReactInXExports.createElement(reactinxStaticText.StaticText, {
        editor: this.editor,
        wrapperCls: eE + "--wrapper"
      }, reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.DivSymbol, {
        className: eE,
        onClick: function (e) {
          t.clearSelection(i);
          e.preventDefault();
          var r = t.editor.getContentState().getZoneState(i);
          var n = r == null ? undefined : r.lines.find(function (e) {
            return e.getKey() === h;
          });
          if (n) {
            t.foldZoneLine({
              zoneId: i,
              index: n.index,
              unFold: true,
              isByClick: true
            });
          }
        }
      }))]).filter(Boolean));
    };
    r.shouldForceRenderLine = function (e) {
      var t = e.lineState.parent;
      return !!t && !!this.isCodeBlockZoneState(t);
    };
    r.reset = function () {
      this.zoneIdToDirtyLineIndex.clear();
      idleCallbackPolyfill.cancelIdleCallback(this.calcLineGutterRICHandler);
    };
    r.destroy = function () {
      this.keyboardModule.destroy();
      this.unBindEvents();
      this.zoneIdToDirtyLineIndex.clear();
      this.foldModule.destroy();
      idleCallbackPolyfill.cancelIdleCallback(this.calcLineGutterRICHandler);
    };
    t.KEY = codeBlockConstants_1.componentName;
    return t;
  }(ev);
  var perfectScrollbar = require("perfect-scrollbar") /*id: 524625*/;
  var resizeObserverPolyfill_1 = require("resize-observer-polyfill_1") /*id: 767395*/;
  var editorRangeZoneClass = require("editor-range-zone-class") /*id: 731872*/;
  var zoneEntityResolver = require("zone-entity-resolver") /*id: 702095*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var themeContextProvider = require("theme-context-provider") /*id: 274284*/;
  let eF = () => typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined ? document.body : {};
  let eL = reactCoreLibraryReexport.createContext(null);
  let eO = eL.Provider;
  let eN = () => {
    return reactCoreLibraryReexport.useContext(eL) ?? eF;
  };
  var isObjectOrFunctionCheck_1 = require("is-object-or-function-check_1") /*id: 8406*/;
  var throttledDeepCloneUtil_2 = require("throttled-deep-clone-util_2") /*id: 739988*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  function ez() {
    return typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined;
  }
  let eH = {
    rootPrefixCls: "ud",
    locale: {
      global: {
        placeholder: "Please select...",
        notFoundContent: "No results found",
        noOptions: "No options available",
        selectAll: "Select all",
        okText: "Done",
        cancelText: "Cancel",
        more: "More",
        search: "Search",
        colon: ":"
      },
      components: {
        modal: {
          okText: "Done",
          cancelText: "Cancel"
        },
        popconfirm: {
          okText: "Done",
          cancelText: "Cancel"
        },
        colorPicker: {
          moreColor: "More colors"
        },
        rate: {
          descriptions: ["Rate your experience", "Very dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very satisfied"]
        },
        pagination: {
          items_per_page: "/ page",
          jump_to: "Go to",
          jump_to_confirm: "Confirm",
          page: "page",
          prev_page: "Previous page",
          next_page: "Next page",
          prev_5: "Previous 5 pages",
          next_5: "Next 5 pages",
          prev_3: "Previous 3 pages",
          next_3: "Next 3 pages"
        },
        table: {
          filterTitle: "Filter menu",
          filterConfirm: "Done",
          filterReset: "Reset",
          filterEmptyText: "No filters",
          emptyText: "No data",
          selectAll: "Select current page",
          selectInvert: "Invert select this page",
          selectionAll: "Select all pages",
          sortTitle: "Sort",
          expand: "Expand row",
          collapse: "Collapse row",
          triggerDesc: "High to low",
          triggerAsc: "Low to high",
          cancelSort: "Clear sorting"
        },
        tabs: {
          more: "More"
        },
        datePicker: {
          placeholder: "Select date",
          yearPlaceholder: "Select year",
          quarterPlaceholder: "Select quarter",
          monthPlaceholder: "Select month",
          ok: "Done",
          rangePlaceholder: ["Start date", "End date"],
          rangeYearPlaceholder: ["Start year", "End year"],
          rangeMonthPlaceholder: ["Start month", "End month"],
          today: "Today",
          month: "",
          year: "",
          yesterday: "Yesterday",
          thisWeek: "This week",
          thisMonth: "This month",
          thisBimonthly: "These two months",
          weekdaysMin: ["S", "M", "T", "W", "T", "F", "S"],
          monthsMin: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          currentTime: "Current Time",
          monthYearSelector: {
            f: e => [e.month("MMMM"), " ", e.year("YYYY")]
          },
          longMonthFormat: "MM/YYYY",
          longDateFormat: "MM/DD/YYYY",
          weekNumber: {
            f: e => "Week " + e.num
          }
        },
        picker: {
          morning: "AM",
          afternoon: "PM",
          timePlaceholder: "Select time",
          hour: "hr",
          minute: "min",
          second: "sec"
        },
        empty: {
          description: "No data"
        },
        form: {
          defaultValidateMessage: {
            default: {
              f: e => "Field validation error for " + e.label
            },
            required: {
              f: e => "Please enter " + e.label
            },
            enum: {
              f: e => e.label + " must be one of [" + e.enum + "]"
            },
            whitespace: {
              f: e => e.label + " cannot be a blank character"
            },
            date: {
              format: {
                f: e => e.label + " date format is invalid"
              },
              parse: {
                f: e => e.label + " cannot be converted to a date"
              },
              invalid: {
                f: e => e.label + " is an invalid date"
              }
            },
            types: {
              string: {
                f: e => e.label + " is not a valid " + e.type
              },
              method: {
                f: e => e.label + " is not a valid " + e.type
              },
              array: {
                f: e => e.label + " is not a valid " + e.type
              },
              object: {
                f: e => e.label + " is not a valid " + e.type
              },
              number: {
                f: e => e.label + " is not a valid " + e.type
              },
              date: {
                f: e => e.label + " is not a valid " + e.type
              },
              boolean: {
                f: e => e.label + " is not a valid " + e.type
              },
              integer: {
                f: e => e.label + " is not a valid " + e.type
              },
              float: {
                f: e => e.label + " is not a valid " + e.type
              },
              regexp: {
                f: e => e.label + " is not a valid " + e.type
              },
              email: {
                f: e => e.label + " is not a valid " + e.type
              },
              url: {
                f: e => e.label + " is not a valid " + e.type
              },
              hex: {
                f: e => e.label + " is not a valid " + e.type
              }
            },
            string: {
              len: {
                f: e => e.label + " must be " + e.len + " characters"
              },
              min: {
                f: e => e.label + " must be at least " + e.min + " characters"
              },
              max: {
                f: e => e.label + " must be at most " + e.max + " characters"
              },
              range: {
                f: e => e.label + " must be between " + e.min + "-" + e.max + " characters"
              }
            },
            number: {
              len: {
                f: e => e.label + " must be equal to " + e.len
              },
              min: {
                f: e => e.label + " must be minimum " + e.min
              },
              max: {
                f: e => e.label + " must be maximum " + e.max
              },
              range: {
                f: e => e.label + " must be between " + e.min + "-" + e.max
              }
            },
            array: {
              len: {
                f: e => "Must be " + e.len + " " + e.label
              },
              min: {
                f: e => "At least " + e.min + " " + e.label
              },
              max: {
                f: e => "At most " + e.max + " " + e.label
              },
              range: {
                f: e => "The amount of " + e.label + " must be between " + e.min + "-" + e.max
              }
            },
            pattern: {
              mismatch: {
                f: e => e.label + " does not match the pattern " + e.pattern
              }
            }
          }
        },
        upload: {
          unknownSize: "Unknown size",
          waiting: "To be uploaded",
          download: "Download",
          delete: "Delete",
          preview: "Preview",
          uploadAgain: "Upload again",
          failed: "Unable to upload",
          downloading: "Downloading",
          downloadFailed: "Unable to download"
        },
        transfer: {
          noOptions: "No options",
          noSearchResult: "No results found",
          noOptionsSelected: "No options selected",
          selected: {
            f: e => "Selected (" + e.selected + ")"
          },
          selectAll: {
            f: e => "All (" + e.selected + "/" + e.total + ")"
          },
          clear: "Clear"
        },
        expandableText: {
          show: "Show",
          fold: "Hide"
        },
        imageViewer: {
          prevArrow: "Previous",
          nextArrow: "Next",
          zoomOut: "Zoom out",
          zoomIn: "Zoom in",
          originSize: "Original size",
          bestFit: "Fit to window",
          rotate: "Rotate",
          download: "Download"
        }
      },
      locale: "en-US"
    },
    direction: "ltr",
    getPopupContainer: eF,
    getTargetContainer: () => ez() ? window : {},
    toast: {
      top: 32
    },
    theme: "light",
    componentSize: "medium"
  };
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  let eZ = e => {
    let t = e;
    let r = new Set();
    return {
      set: e => {
        if (t !== e) {
          t = e;
          r.forEach(e => e(t));
        }
      },
      get: () => t,
      subscribe: e => r.has(e) ? emptyExportFunction.emptyFunction : (r.add(e), () => {
        r.delete(e);
      })
    };
  };
  let eW = eZ(eH);
  function ej(e) {
    return typeof e == "function";
  }
  let eY = ez() ? reactCoreLibraryReexport.useLayoutEffect : emptyExportFunction.emptyFunction;
  var reactContextSelector = require("react-context-selector") /*id: 65860*/;
  let eq = reactContextSelector.createContext(eH);
  let eV = e => {
    let {
      parentContext: t = eH,
      isOutermost: r,
      locale: n = t.locale,
      prefixCls: i = t.rootPrefixCls,
      direction: o = t.direction,
      getTargetContainer: a = t.getTargetContainer,
      toast: s = t.toast,
      theme: l = t.theme,
      textOverflowPopperSidecar: u = t.textOverflowPopperSidecar,
      useLocaleFontFamily: c = false,
      componentSize: h = t.componentSize,
      children: d,
      PopperSidecar: f = t.PopperSidecar,
      timezone: A = t.timezone
    } = e;
    let g = reactCoreLibraryReexport.useMemo(() => throttledDeepCloneUtil_2.throttledCloneDeep({}, t.locale, n, (e, t) => {
      if (Array.isArray(e)) {
        return t;
      }
    }), [n, t.locale]);
    let p = eN();
    let m = reactCoreLibraryReexport.useMemo(() => ({
      rootPrefixCls: i,
      locale: g,
      direction: o,
      getPopupContainer: p,
      getTargetContainer: a,
      toast: s,
      theme: l,
      componentSize: h,
      textOverflowPopperSidecar: u,
      PopperSidecar: f,
      timezone: A
    }), [i, g, o, p, a, s, l, h, u, f, A]);
    (function (e) {
      let t = reactCoreLibraryReexport.useRef(true);
      let r = reactCoreLibraryReexport.useRef();
      let n = reactCoreLibraryReexport.useRef();
      if (t.current || n.current !== e) {
        if (ej(r.current)) {
          r.current();
        }
        r.current = e();
        n.current = e;
      }
      t.current &&= false;
      eY(() => () => {
        if (ej(r.current)) {
          r.current();
          r.current = undefined;
        }
        n.current = undefined;
      }, []);
    })(reactCoreLibraryReexport.useCallback(() => {
      if (!r || !ez() || !c || !n.locale) {
        return;
      }
      let e = n.locale.split("-")[0];
      if (!e) {
        return;
      }
      let t = `${i}__lang-${e}`;
      let o = () => document.body.className.split(/\s+/);
      document.body.className = dataProcessor.processData([...o(), t]).join(" ");
      return () => {
        document.body.className = o().filter(e => e !== t).join(" ");
      };
    }, [r, n.locale, i, c]));
    reactCoreLibraryReexport.useEffect(() => {
      if (r) {
        eW.set(m);
      }
    }, [r, m]);
    return reactCoreLibraryReexport.createElement(themeContextProvider.ThemeProvider, {
      mode: m.theme
    }, reactCoreLibraryReexport.createElement(eq.Provider, {
      value: m
    }, d));
  };
  let eJ = e => {
    let {
      children: t
    } = e;
    let r = isObjectOrFunctionCheck_1.useSyncExternalStore(eW.subscribe, eW.get, eW.get);
    let n = reactCoreLibraryReexport.createElement(eV, {
      parentContext: r,
      isOutermost: false
    }, t);
    if (r.getPopupContainer) {
      return reactCoreLibraryReexport.createElement(eO, {
        value: r.getPopupContainer
      }, n);
    } else {
      return n;
    }
  };
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  let e1 = "props";
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var arrayFlattenUtil_3 = require("array-flatten-util_3") /*id: 737816*/;
  var invariantCheck = require("invariant-check") /*id: 415427*/;
  let e4 = e => !!e;
  let e6 = (e, t) => {
    for (let r of Object.values(e)) {
      if (typeof r == "string") {
        t(r);
        continue;
      }
      e6(r, t);
    }
  };
  let e8 = function () {
    var e = arguments.length;
    var t = Array(e);
    var r = 0;
    for (; r < e; r++) {
      t[r] = arguments[r];
    }
    let n = arrayFlattenUtil_3.flattenArray(t);
    let i = n.filter(e4).map(e => e.alias).filter(e4).join(" ");
    let o = e8.compose(...n);
    let a = i ? [i] : [];
    e6(o[e1], e => {
      a.push(e);
    });
    return a.join(" ");
  };
  e8.create = () => {
    invariantCheck.invariant(false);
  };
  e8.compose = function () {
    let e = {};
    var t = arguments.length;
    var r = Array(t);
    var n = 0;
    for (; n < t; n++) {
      r[n] = arguments[n];
    }
    for (let t of arrayFlattenUtil_3.flattenArray(r)) {
      if (t) {
        throttledDeepCloneUtil.throttledDeepClone(e, t[e1]);
      }
    }
    return {
      props: e
    };
  };
  let e7 = {
    props: {
      Bhrd7zp: "u1hd9hm2"
    }
  };
  e7.alias = "ud-font-medium";
  let e9 = {
    props: {
      Bhrd7zp: "u71fsbu"
    }
  };
  e9.alias = "ud-font-regular";
  let te = e8.compose({
    props: {
      Be2twd7: "uses1vf",
      Bg96gwp: "u82itaf"
    }
  }, e9);
  te.alias = "ud-typography-body-0";
  let tt = e8.compose(te, e7);
  tt.alias = "ud-typography-headline";
  var errorFilledIcon = require("error-filled-icon") /*id: 205797*/;
  var closeOutlinedIcon = require("close-outlined-icon") /*id: 96742*/;
  var infoFilledIcon = require("info-filled-icon") /*id: 963341*/;
  var warningFilledIcon = require("warning-filled-icon") /*id: 681337*/;
  var succeedFilledIcon = require("succeed-filled-icon") /*id: 836516*/;
  function ts(e) {
    let t = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      t.current = e;
    });
    return t.current;
  }
  let tl = e => e !== undefined;
  let tu = (e, t) => e === t;
  function tc(e, t, r = {}) {
    let {
      onChange: n,
      isEqual: i = tu,
      isControlledOverride: o
    } = r;
    let a = reactCoreLibraryReexport.useCallback(e => o !== undefined ? o : tl(e), [o]);
    let s = ts(t);
    let l = ts(a);
    let [u, c] = reactCoreLibraryReexport.useState(a(t) ? t : e);
    let h = u;
    if (a(t)) {
      h = t;
    } else if (l != null && l(s) && !a(t)) {
      h = s;
    }
    eY(() => {
      if (l != null && l(s) && !a(t)) {
        c(s);
      }
    }, [t, a, s, l]);
    let d = reactCoreLibraryReexport.useCallback((e, t) => {
      let r = ej(e) ? e(h) : e;
      if (!i(h, r)) {
        c(r);
        if (ej(t)) {
          t(r);
        }
        if (ej(n)) {
          n(r);
        }
      }
    }, [i, n, h]);
    return [h, d];
  }
  function th() {
    return reactContextSelector.useContextSelector(eq, e => e.rootPrefixCls);
  }
  function td(e, t, r) {
    return function (n = "") {
      if (r) {
        return `${r}${n}`;
      } else {
        return `${e}__${t}${n}`;
      }
    };
  }
  function tf(e, t) {
    let r = th();
    return reactCoreLibraryReexport.useMemo(() => td(r, e, t), [r, t, e]);
  }
  let tA = {};
  let tg = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: r,
      ...n
    } = e;
    let i = tf("svg");
    let o = conditionalClassnames.default(i(), i("-spin-loading"), r);
    return reactCoreLibraryReexport.createElement("div", objectAssignUtil.objectAssign({
      className: o
    }, tA), reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "100%",
      height: "100%",
      viewBox: "0 0 100 100",
      ref: t
    }, n), reactCoreLibraryReexport.createElement("circle", objectAssignUtil.objectAssign({
      cx: "50",
      cy: "50",
      r: "35",
      stroke: "currentColor",
      strokeWidth: "11",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      fill: "none"
    }, tA))));
  });
  let tp = ["large", "medium", "small"];
  let tm = ["extra-large", "extra-small"];
  let ty = {
    "extra-large": "xl",
    large: "lg",
    medium: "md",
    small: "sm",
    "extra-small": "xs"
  };
  var reactIsTypeCheckersReexport = require("react-is-type-checkers-reexport") /*id: 547283*/;
  let tb = new WeakMap();
  function tw(e, t) {
    if (typeof e == "function") {
      e(t);
    } else {
      e.current = t;
    }
  }
  function tC(e, t) {
    if (e && t) {
      let r = tb.get(e) || new WeakMap();
      tb.set(e, r);
      let n = r.get(t) || (r => {
        tw(e, r);
        tw(t, r);
      });
      r.set(t, n);
      return n;
    }
    return e || t;
  }
  function tE() {
    var e = arguments.length;
    var t = Array(e);
    var r = 0;
    for (; r < e; r++) {
      t[r] = arguments[r];
    }
    if (t.length === 2) {
      return tC(t[0], t[1]) || null;
    } else {
      return t.slice(1).reduce((e, t) => tC(e, t), t[0]) || null;
    }
  }
  function tI(e) {
    return Object.defineProperty(e, "__DISABLEDABLE_FORM_COMP", {
      value: true,
      configurable: false,
      writable: false
    });
  }
  let tB = new Set(["icon"]);
  let tx = tI(reactCoreLibraryReexport.forwardRef((e, t) => {
    var r;
    let {
      prefixCls: n,
      className: i,
      children: o,
      shape: a,
      htmlType: s = "button",
      type: l = "outlined",
      size: u,
      color: c = "default",
      selected: h = false,
      loading: d = false,
      delay: f,
      icon: A,
      endIcon: g,
      block: p = false,
      noMinWidth: m = false,
      onClick: y,
      danger: v,
      info: b,
      ...w
    } = e;
    let C = tf("button");
    let E = n || C();
    let [I] = function (e) {
      let {
        loading: t,
        delay: r
      } = e;
      let [n, i] = reactCoreLibraryReexport.useState(!r && t);
      let o = reactCoreLibraryReexport.useRef();
      reactCoreLibraryReexport.useEffect(() => {
        if (r && t) {
          o.current = window.setTimeout(() => {
            i(t);
          }, r);
        } else {
          i(t);
        }
        return () => clearTimeout(o.current);
      }, [r, t]);
      return [n];
    }({
      loading: d,
      delay: f
    });
    let B = reactContextSelector.useContextSelector(eq, e => e.componentSize);
    let x = reactCoreLibraryReexport.useRef();
    let D = reactCoreLibraryReexport.useMemo(() => tE(t, x), [t, x]);
    let S = function (e) {
      if (tp.includes(e) || tm.includes(e)) {
        return ty[e];
      }
    }(u || B || "medium");
    let k = l;
    if (l === "primary") {
      k = "filled";
    }
    if (l === "default") {
      k = "outlined";
    }
    let T = c;
    if (T === "default" && v) {
      T = "danger";
    }
    if (T === "default" && b) {
      T = "primary";
    }
    let Q = conditionalClassnames.default(E, {
      [C(`--${k}`)]: k,
      [C(`--${k}-${T}`)]: T,
      [C(`--${k}-${T}-loading`)]: I,
      [C(`--${k}-${T}-selected`)]: h,
      [C("--loading")]: I,
      [C("--selected")]: h,
      [C(`--${a}`)]: a,
      [C(`--${r = k, tB.has(r) ? `${r}-size` : "size"}-${S}`)]: S,
      [C("--disabled")]: w.disabled,
      [C("--block")]: p,
      [C("--autowidth")]: m
    }, i);
    let R = A;
    let F = g;
    if (R && o) {
      R = reactCoreLibraryReexport.createElement("span", {
        className: conditionalClassnames.default(C("__icon-inline"), C("__icon-inline-start"))
      }, R);
    }
    if (F && o) {
      F = reactCoreLibraryReexport.createElement("span", {
        className: conditionalClassnames.default(C("__icon-inline"), C("__icon-inline-end"))
      }, F);
    }
    if (I && !w.disabled) {
      R = reactCoreLibraryReexport.createElement("span", {
        className: conditionalClassnames.default(C("__loading-icon"), C("__icon-inline"), o && C("__icon-inline-start"))
      }, reactCoreLibraryReexport.createElement(tg, null));
    }
    let L = reactCoreLibraryReexport.useCallback(e => {
      if (I || w.disabled) {
        e.stopPropagation();
        e.preventDefault();
      } else if (y) {
        y(e);
      }
    }, [I, w.disabled, y]);
    if (w.href !== undefined) {
      return reactCoreLibraryReexport.createElement("a", objectAssignUtil.objectAssign({}, w, {
        ref: D,
        onClick: L,
        className: Q
      }), R, o, F);
    } else {
      return reactCoreLibraryReexport.createElement("button", objectAssignUtil.objectAssign({}, w, {
        type: s,
        ref: D,
        onClick: L,
        className: Q
      }), R, o, F);
    }
  }));
  function tD(e, t) {
    let r = Object.assign({}, e);
    for (let e = 0; e < t.length; e += 1) {
      let n = t[e];
      delete r[n];
    }
    return r;
  }
  tx.__UD_BUTTON = true;
  let tS = function () {
    var e = arguments.length;
    var t = Array(e);
    var r = 0;
    for (; r < e; r++) {
      t[r] = arguments[r];
    }
    return t;
  }("children", "type", "size", "endIcon", "block", "noMinWidth");
  let tk = e => tD(e, tS);
  let t_ = tI(reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      style: r = {},
      size: n
    } = e;
    let i = {
      ...r
    };
    let o = n;
    if (typeof n == "number") {
      i = {
        ...i,
        fontSize: `${e.size}px`
      };
      o = undefined;
    }
    return reactCoreLibraryReexport.createElement(tx, objectAssignUtil.objectAssign({}, e, {
      size: o,
      style: i,
      type: "icon",
      ref: t
    }));
  }));
  let tT = reactCoreLibraryReexport.forwardRef((e, t) => e.type === "icon" ? reactCoreLibraryReexport.createElement(t_, objectAssignUtil.objectAssign({}, tk(e), {
    size: e.size,
    ref: t
  })) : reactCoreLibraryReexport.createElement(tx, objectAssignUtil.objectAssign({}, e, {
    ref: t
  })));
  tT.__UD_BUTTON = true;
  let tQ = {
    success: succeedFilledIcon.SucceedFilledIcon,
    warning: warningFilledIcon.WarningFilledIcon,
    error: errorFilledIcon.ErrorFilledIcon,
    loading: tg,
    info: infoFilledIcon.InfoFilledIcon
  };
  let tR = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: r,
      closable: n = false,
      align: i = "left",
      type: o = "info",
      theme: a = "filled",
      message: s,
      description: l,
      action: u,
      visible: c,
      banner: h = false,
      onClose: d,
      closeText: f,
      afterClose: A,
      showIcon: g = true,
      role: p = "alert",
      icon: m,
      prefixCls: y,
      maxLine: v,
      ...b
    } = e;
    let w = tf("notice", y);
    let [C, E] = tc(true, c);
    let I = reactCoreLibraryReexport.useRef(null);
    let B = s && !l;
    let x = null;
    if (g && (m && (x = reactCoreLibraryReexport.createElement("div", {
      className: w("__statusIcon")
    }, m)), !x)) {
      let e = tQ[o] || tQ.info;
      x = reactCoreLibraryReexport.createElement(e, {
        className: w("__statusIcon")
      });
    }
    let D = !!f || n;
    let S = reactCoreLibraryReexport.useCallback(e => {
      E(false);
      if (d) {
        d(e);
      }
    }, [E, d]);
    let k = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, f ? reactCoreLibraryReexport.createElement("span", {
      className: w("__close"),
      onClick: S
    }, f) : reactCoreLibraryReexport.createElement(tT, {
      className: w("__close"),
      icon: reactCoreLibraryReexport.createElement(closeOutlinedIcon.CloseOutlinedIcon, null),
      size: "small",
      type: "icon",
      onClick: S
    }));
    if (C) {
      return reactCoreLibraryReexport.createElement("div", objectAssignUtil.objectAssign({
        ref: t,
        className: conditionalClassnames.default(w(), w(`-${o === "loading" ? "info" : o}`), i === "center" && B && w("-align-center"), n && w("-closable"), h && w("-banner"), x && w("-showIcon"), u && w("-has-action"), s && l && w("-has-title"), w(`--${a}`), r),
        role: p
      }, b), x, reactCoreLibraryReexport.createElement("div", {
        className: conditionalClassnames.default(w("__main"), B && w("__main--no-title"))
      }, s && l && reactCoreLibraryReexport.createElement("div", {
        className: w("__title")
      }, reactCoreLibraryReexport.createElement("div", {
        className: conditionalClassnames.default(w("__title__content"), e8(tt))
      }, s), D && k), (l || B) && reactCoreLibraryReexport.createElement("div", {
        ref: I,
        className: w("__description")
      }, reactCoreLibraryReexport.createElement("div", {
        className: w("__description-content"),
        style: v ? {
          WebkitLineClamp: v
        } : undefined
      }, l || s), u && reactCoreLibraryReexport.createElement("div", {
        className: w("__description-action")
      }, u)), D && B && k));
    } else {
      return null;
    }
  });
  var cssTransitionComponent = require("css-transition-component") /*id: 160074*/;
  var reactContextDefinition_4 = require("react-context-definition_4") /*id: 208719*/;
  var transitionGroupChildUtils = require("transition-group-child-utils") /*id: 661201*/;
  function tN(e, t) {
    return e && e[`.$${t}`];
  }
  let tM = e => e;
  class tP extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      objectPropertySetter.setObjectProperty(this, "mounted", false);
      objectPropertySetter.setObjectProperty(this, "handleExited", (e, t) => {
        let {
          children: r
        } = this.props;
        let n = transitionGroupChildUtils.indexChildrenByKey(r);
        if (!e.key || !(e.key in n)) {
          if (e.props.onExited) {
            e.props.onExited(t);
          }
          if (this.mounted) {
            this.setState(t => {
              let r = {
                ...t.children
              };
              if (e.key) {
                delete r[e.key];
              }
              return {
                children: r
              };
            });
          }
        }
      });
      this.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: this.handleExited,
        firstRender: true,
        childrenSort: [],
        children: {}
      };
    }
    static getDerivedStateFromProps(e, t) {
      let {
        children: r,
        handleExited: n,
        firstRender: i,
        childrenSort: o
      } = t;
      return {
        childrenSort: function (e, t, r) {
          let n = r instanceof Array ? r : [r];
          let i = (e || []).filter(e => function (e, t) {
            let r = tN(e, t);
            return r && r.props && r.props.in;
          }(t, e));
          let o = i[0];
          let a = !!n.find(e => !!reactCoreLibraryReexport.isValidElement(e) && e.key !== o);
          for (let e = 0; e < n.length; e++) {
            let t = n[e];
            if (t && reactCoreLibraryReexport.isValidElement(t) && t.key) {
              if (i.find(e => e === t.key)) {
                if (o === t.key) {
                  a = true;
                }
                continue;
              }
              if (a) {
                i.push(t.key);
              } else {
                i.unshift(t.key);
              }
            }
          }
          return i;
        }(o, r, e.children),
        children: i ? transitionGroupChildUtils.cloneTransitionItems(e, n) : transitionGroupChildUtils.mergeTransitionMaps(e, r, n),
        firstRender: false
      };
    }
    componentDidMount() {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false
        }
      });
    }
    componentWillUnmount() {
      this.mounted = false;
    }
    render() {
      let {
        component: e = "div",
        childFactory: t = tM,
        ...r
      } = this.props;
      let {
        contextValue: n,
        childrenSort: i,
        children: o
      } = this.state;
      let a = i.map(e => t(tN(o, e)));
      delete r.appear;
      delete r.enter;
      delete r.exit;
      if (e === null) {
        return reactCoreLibraryReexport.createElement(reactContextDefinition_4.reactContext.Provider, {
          value: n
        }, a);
      } else {
        return reactCoreLibraryReexport.createElement(reactContextDefinition_4.reactContext.Provider, {
          value: n
        }, reactCoreLibraryReexport.createElement(e, r, a));
      }
    }
  }
  let tU = 0;
  let tz = e => {
    let t = th();
    let r = reactContextSelector.useContextSelector(eq, e => e.toast);
    return e.children({
      managerGlobalRootPrefixCls: t,
      managerGlobalToast: r
    });
  };
  function tH(e) {
    return e === null || e === 0;
  }
  function tG() {
    return {
      topRight: [],
      topLeft: [],
      bottomRight: [],
      bottomLeft: [],
      top: []
    };
  }
  function tZ(e) {
    let {
      prefixCls: t,
      duration: r,
      startTimer: n,
      stopTimer: i,
      children: o
    } = e;
    let a = reactCoreLibraryReexport.useRef(null);
    let s = function (e) {
      let t = reactCoreLibraryReexport.useRef(e);
      eY(() => {
        t.current = e;
      });
      return reactCoreLibraryReexport.useCallback(function () {
        var e;
        var r = arguments.length;
        var n = Array(r);
        var i = 0;
        for (; i < r; i++) {
          n[i] = arguments[i];
        }
        if ((e = t.current) === null || e === undefined) {
          return undefined;
        } else {
          return e.apply(undefined, n);
        }
      }, []);
    }(n);
    reactCoreLibraryReexport.useEffect(() => {
      if (a.current && !tH(r)) {
        s(r);
      }
    }, [r, s]);
    return reactCoreLibraryReexport.createElement("div", {
      ref: a,
      className: `${t}-item`,
      onMouseEnter: i,
      onMouseLeave: () => s()
    }, o);
  }
  class tW extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      objectPropertySetter.setObjectProperty(this, "timers", {});
      objectPropertySetter.setObjectProperty(this, "containerRef", reactCoreLibraryReexport.createRef());
      objectPropertySetter.setObjectProperty(this, "classPrefix", "");
      objectPropertySetter.setObjectProperty(this, "startTimer", (e, t) => {
        if (tH(t)) {
          return;
        }
        let r = this.timers[e];
        if (r) {
          window.clearTimeout(r);
        }
        this.timers[e] = window.setTimeout(() => this.remove(e), t ?? 3000);
        return r;
      });
      objectPropertySetter.setObjectProperty(this, "stopTimer", e => {
        let t = this.timers[e];
        if (t) {
          window.clearTimeout(t);
        }
        delete this.timers[e];
      });
      this.state = {
        destroied: false,
        messages: tG()
      };
    }
    get config() {
      return Object.assign({}, tW.config, this.props);
    }
    getMessageConfig(e, t, r) {
      let n;
      let i = e.key || (tU += 1, `ud-msg-manager-${tU}`);
      let o = e.placement || r;
      let {
        transitionProps: a,
        duration: s
      } = this.config;
      let {
        messages: l
      } = this.state;
      let u = l[o][t];
      return {
        key: i,
        duration: e.duration !== undefined ? e.duration : (u == null ? undefined : u.duration) !== undefined ? u.duration : s,
        placement: r,
        transitionProps: e.transitionProps || (u == null ? undefined : u.transitionProps) || a,
        onClose: e.onClose || (u == null ? undefined : u.onClose),
        renderMessage: e.renderMessage || (u == null ? undefined : u.renderMessage)
      };
    }
    updateTimers(e) {
      let {
        maxCount: t
      } = this.config;
      if (e) {
        e.map((e, r) => {
          if (t) {
            if (t > r) {
              if (!this.timers[e.key]) {
                this.startTimer(e.key, e.duration);
              }
            } else {
              this.stopTimer(e.key);
            }
          } else if (!this.timers[e.key]) {
            this.startTimer(e.key, e.duration);
          }
          return null;
        });
      }
    }
    add(e) {
      let {
        messages: t
      } = this.state;
      let {
        placement: r = "topRight",
        maxCount: n
      } = this.config;
      let i = e.placement || r;
      let o = -1;
      if (e.key) {
        o = t[i].findIndex(t => t.key === e.key);
      }
      let a = this.getMessageConfig(e, o, i);
      let {
        key: s
      } = a;
      let l = t[i].concat();
      if (o > -1) {
        this.stopTimer(a.key);
        l[o] = a;
      } else {
        l.push(a);
        if (n && l.length > n) {
          l.shift();
        }
      }
      t[i] = l;
      this.setState({
        messages: t
      }, () => this.updateTimers(l));
      return s;
    }
    remove(e) {
      let {
        messages: t
      } = this.state;
      let r = null;
      let n = tG();
      let i = Object.keys(t);
      for (let o = 0; o < i.length; o++) {
        let a = i[o];
        let s = t[a];
        let l = s == null ? undefined : s.find(t => t.key === e);
        if (l) {
          r = l;
          n[a] = s.filter(t => t.key !== e);
        } else {
          n[a] = s;
        }
      }
      if (r) {
        let {
          placement: t
        } = r;
        this.stopTimer(e);
        this.setState({
          messages: n
        }, () => t && this.updateTimers(n[t]));
      }
    }
    destroy() {
      Object.keys(this.timers).forEach(e => this.stopTimer(e));
      this.setState({
        messages: tG(),
        destroied: true
      });
    }
    handleClose(e) {
      if (e.key) {
        this.remove(e.key);
      }
    }
    renderMessage(e, t) {
      let {
        key: r,
        duration: n,
        renderMessage: i,
        onClose: o,
        transitionProps: a
      } = e;
      let {
        transitionProps: s,
        className: l
      } = this.config;
      let u = {
        timeout: 300,
        ...s,
        ...a
      };
      let c = e => this.startTimer(r, e || n);
      let h = () => this.stopTimer(r);
      return reactCoreLibraryReexport.createElement(cssTransitionComponent.CssTransition, objectAssignUtil.objectAssign({}, u, {
        key: function (e) {
          if (typeof e != "string") {
            return e;
          }
          let t = new Uint16Array(e.length);
          for (let r = 0; r < t.length; r++) {
            t[r] = e.charCodeAt(r);
          }
          return btoa(String.fromCharCode(...new Uint8Array(t.buffer))).replace(/=/g, "-");
        }(r),
        onEnter: e => {
          e.style.height = "";
        },
        onExit: e => {
          e.style.height = `${e.scrollHeight}px`;
        },
        onExiting: e => {
          e.style.height = "0";
        },
        onExited: () => {
          if (o) {
            o();
          }
        }
      }), r => reactCoreLibraryReexport.createElement(tZ, {
        prefixCls: this.classPrefix,
        stopTimer: h,
        startTimer: c,
        duration: n
      }, i({
        close: () => this.handleClose(e),
        transitionStatus: r,
        startTimer: c,
        stopTimer: h,
        rootPrefixCls: t,
        toastConfigCls: l
      })));
    }
    renderManager(e) {
      let {
        messages: t
      } = this.state;
      let r = t[e];
      let {
        className: n,
        style: i,
        top: o,
        bottom: a,
        prefixCls: s,
        getContainer: l
      } = this.config;
      let u = l == null ? undefined : l();
      let c = {
        ...i,
        top: o,
        bottom: a
      };
      return reactCoreLibraryReexport.createElement(tz, {
        key: e
      }, t => {
        let {
          managerGlobalToast: i,
          managerGlobalRootPrefixCls: o
        } = t;
        this.classPrefix ||= td(o, "msg-manager", s)();
        let a = conditionalClassnames.default(n, this.classPrefix, `${this.classPrefix}--${e}`, {
          [`${this.classPrefix}--sticky`]: !u
        });
        return reactCoreLibraryReexport.createElement("div", {
          ref: this.containerRef,
          className: a,
          style: `${e}` == "top" ? throttledDeepCloneUtil.throttledDeepClone({
            top: i == null ? undefined : i.top
          }, c) : c
        }, reactCoreLibraryReexport.createElement(tP, null, r.map(e => this.renderMessage(e, o))));
      });
    }
    render() {
      let {
        messages: e = []
      } = this.state;
      let {
        getContainer: t
      } = this.config;
      let r = t == null ? undefined : t();
      let n = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, Object.keys(e).map(e => this.renderManager(e)));
      if (r) {
        return reactDomEntryWrapper.createPortal(n, r);
      } else {
        return n;
      }
    }
  }
  objectPropertySetter.setObjectProperty(tW, "config", {});
  let tj = ["className", "prefixCls", "duration", "transitionProps", "maxCount", "getContainer", "top"];
  class tY extends reactCoreLibraryReexport.PureComponent {
    constructor() {
      super(...arguments);
      objectPropertySetter.setObjectProperty(this, "managerRef", reactCoreLibraryReexport.createRef());
    }
    get _config() {
      return Object.assign({}, tY.globalConfig, this.props);
    }
    open(e) {
      return new Promise(t => {
        var r;
        let n = e.onClose;
        e.onClose = () => {
          if (n) {
            n();
          }
          t(undefined);
        };
        if ((r = this.managerRef.current) !== null && r !== undefined) {
          r.add(this._getManagerConfig(e));
        }
      });
    }
    info(e, t, r) {
      return this._open("info", e, t, r);
    }
    success(e, t, r) {
      return this._open("success", e, t, r);
    }
    warning(e, t, r) {
      return this._open("warning", e, t, r);
    }
    warn(e, t, r) {
      return this.warning(e, t, r);
    }
    error(e, t, r) {
      return this._open("error", e, t, r);
    }
    loading(e, t, r) {
      return this._open("loading", e, t, r);
    }
    config(e) {
      tY.globalConfig = Object.assign(tY.globalConfig, e);
      this.forceUpdate();
    }
    destroy(e) {
      var t;
      var r;
      if (e) {
        if ((t = this.managerRef.current) !== null && t !== undefined) {
          t.remove(e);
        }
      } else if ((r = this.managerRef.current) !== null && r !== undefined) {
        r.destroy();
      }
    }
    render() {
      return reactCoreLibraryReexport.createElement(tW, objectAssignUtil.objectAssign({
        ref: this.managerRef,
        placement: "top",
        transitionProps: {
          timeout: 300,
          classNames: "toast--animation"
        },
        duration: 3000
      }, throttledPathFilterStringify.throttledPathStr(this._config, tj)));
    }
    _getManagerConfig(e) {
      return function (e) {
        var t;
        let {
          content: r,
          key: n,
          duration: i,
          onClose: o,
          className: a,
          type: s,
          showCloseIcon: l,
          newStyle: u = true,
          ...c
        } = e;
        let h = l !== undefined ? l : tH(i);
        return {
          key: n,
          duration: (t = c.action, i !== undefined ? i : t ? 6000 : undefined),
          renderMessage: e => {
            let {
              close: t,
              rootPrefixCls: n,
              toastConfigCls: i
            } = e;
            return reactCoreLibraryReexport.createElement(tR, objectAssignUtil.objectAssign({}, c, {
              closable: h,
              visible: true,
              className: conditionalClassnames.default(`${n}__toast`, a, i || ""),
              theme: u ? "outlined" : "plain",
              message: reactCoreLibraryReexport.createElement("div", {
                className: e8(tt)
              }, r),
              type: s,
              onClose: t,
              banner: false
            }));
          },
          onClose: o
        };
      }({
        ...Object.assign({}, throttledOmitPathStringify.omitPathStringify(this._config, tj)),
        ...e
      });
    }
    _open(e, t, r, n) {
      if (t && typeof t == "object" && "content" in t) {
        return this.open({
          ...t,
          type: e
        });
      }
      {
        let i = typeof r == "function" ? r() : r;
        return this.open({
          type: e,
          content: t,
          duration: i,
          onClose: n
        });
      }
    }
  }
  function tK() {
    let e = document.createElement("div");
    document.body.appendChild(e);
    return e;
  }
  function tq(e) {
    if (e) {
      n = e;
    }
  }
  objectPropertySetter.setObjectProperty(tY, "globalConfig", {});
  class tV extends reactCoreLibraryReexport.Component {
    constructor() {
      super(...arguments);
      objectPropertySetter.setObjectProperty(this, "div", undefined);
      objectPropertySetter.setObjectProperty(this, "isDefaultContainer", true);
      objectPropertySetter.setObjectProperty(this, "getContainer", () => {
        if (!this.div) {
          var e;
          var t;
          let r = (e = (t = tY.globalConfig).getContainer) === null || e === undefined ? undefined : e.call(t);
          this.div = r || tK();
          if (r) {
            this.isDefaultContainer = false;
          }
        }
        return this.div;
      });
    }
    componentWillUnmount() {
      n = undefined;
      if (this.isDefaultContainer && this.div) {
        this.div.remove();
        this.div = undefined;
      }
    }
    render() {
      return reactCoreLibraryReexport.createElement(tY, objectAssignUtil.objectAssign({}, this.props, {
        ref: tq,
        getContainer: this.getContainer
      }));
    }
  }
  u = function () {
    if (n) {
      return Promise.resolve(n);
    } else {
      return i ||= new Promise(e => {
        let t = tK();
        reactDomEntryWrapper.render(reactCoreLibraryReexport.createElement(eJ, null, reactCoreLibraryReexport.createElement(tV, {
          ref: () => {
            if (n) {
              i = undefined;
              e(n);
            }
          },
          getContainer: () => t
        })), t);
      });
    }
  };
  let tJ = {
    open: e => u().then(t => t.open(e) || ""),
    info: (e, t, r) => u().then(n => n.info(e, t, r)),
    success: (e, t, r) => u().then(n => n.success(e, t, r)),
    warning: (e, t, r) => u().then(n => n.warning(e, t, r)),
    warn: (e, t, r) => u().then(n => n.warn(e, t, r)),
    error: (e, t, r) => u().then(n => n.error(e, t, r)),
    loading: (e, t, r) => u().then(n => n.loading(e, t, r)),
    config(e) {
      tY.globalConfig = Object.assign(tY.globalConfig, e);
    },
    destroy(e) {
      u().then(t => t.destroy(e));
    }
  };
  var browserDetectUtils = require("browser-detect-utils") /*id: 749406*/;
  var editorZoneRenderer = require("editor-zone-renderer") /*id: 566183*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var debounceMaxWaitUtil = require("debounce-max-wait-util") /*id: 869149*/;
  var autoBindMethodDescriptor = require("auto-bind-method-descriptor") /*id: 969612*/;
  function t5() {
    return (t5 = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) {
          if (Object.prototype.hasOwnProperty.call(r, n)) {
            e[n] = r[n];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  var t3 = ({
    styles: e = {},
    ...t
  }) => reactCoreLibraryReexport.createElement("svg", t5({
    width: "22",
    height: "22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), reactCoreLibraryReexport.createElement("path", {
    d: "M6.188 8.25v8.25h6.875V8.25H6.186zm8.25-.688v9.702c0 .337-.288.611-.642.611H5.454c-.354 0-.641-.274-.641-.611V7.486c0-.337.287-.611.641-.611h8.296c.38 0 .688.308.688.688zm2.548-3.236a.685.685 0 01.201.487v8.593c0 .19-.153.344-.343.344h-.688a.344.344 0 01-.343-.344V5.5H9.28a.344.344 0 01-.344-.344V4.47c0-.19.154-.344.344-.344H16.5c.19 0 .362.077.486.201z",
    fill: "#646A73"
  }));
  function t4() {
    return (t4 = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) {
          if (Object.prototype.hasOwnProperty.call(r, n)) {
            e[n] = r[n];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  var t6 = ({
    styles: e = {},
    ...t
  }) => reactCoreLibraryReexport.createElement("svg", t4({
    width: "16",
    height: "4",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), reactCoreLibraryReexport.createElement("path", {
    d: "M.667 1.334c0-.369.298-.667.666-.667h1.334c.368 0 .666.298.666.667v1.333a.667.667 0 01-.666.667H1.333a.667.667 0 01-.666-.667V1.334zM6.667 1.334c0-.369.298-.667.666-.667h1.334c.368 0 .666.298.666.667v1.333a.667.667 0 01-.666.667H7.333a.667.667 0 01-.666-.667V1.334zM15.333 1.334a.667.667 0 00-.666-.667h-1.334a.667.667 0 00-.666.667v1.333c0 .368.298.667.666.667h1.334a.667.667 0 00.666-.667V1.334z",
    fill: "#646A73"
  }));
  function t8() {
    return (t8 = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) {
          if (Object.prototype.hasOwnProperty.call(r, n)) {
            e[n] = r[n];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  var t7 = ({
    styles: e = {},
    ...t
  }) => reactCoreLibraryReexport.createElement("svg", t8({
    width: "22",
    height: "22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), reactCoreLibraryReexport.createElement("path", {
    d: "M4.583 4.95c0-.202.165-.367.367-.367h.642c.202 0 .367.165.367.367v12.1a.367.367 0 01-.367.367H4.95a.367.367 0 01-.367-.367V4.95zM16.409 4.583a.367.367 0 00-.367.367v12.1c0 .203.164.367.366.367h.642a.367.367 0 00.367-.367V4.95a.367.367 0 00-.367-.367h-.642zM7.61 11.516c.902 0 1.856-.001 3.197-.007v1.444c0 .427.492.667.829.405l2.775-2.159a.513.513 0 000-.81l-2.775-2.16a.513.513 0 00-.829.406v1.497H7.61a.412.412 0 00-.412.412v.56c0 .227.184.412.412.412z",
    fill: "#646A73"
  }));
  function t9() {
    return (t9 = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) {
          if (Object.prototype.hasOwnProperty.call(r, n)) {
            e[n] = r[n];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  var re = ({
    styles: e = {},
    ...t
  }) => reactCoreLibraryReexport.createElement("svg", t9({
    width: "22",
    height: "22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), reactCoreLibraryReexport.createElement("path", {
    d: "M4.583 4.95c0-.202.164-.367.367-.367h.642c.202 0 .366.165.366.367v12.1a.367.367 0 01-.366.367H4.95a.367.367 0 01-.367-.367V4.95zM7.792 6.783c0-.202.164-.366.366-.366h2.056c2.46 0 4.453 1.847 4.453 4.125 0 2.03-1.583 3.717-3.667 4.06v1.444a.513.513 0 01-.829.405l-2.775-2.158a.513.513 0 010-.81l2.775-2.16a.513.513 0 01.829.406v1.497c1.311-.275 2.292-1.372 2.292-2.684 0-1.52-1.314-2.75-2.934-2.75h-2.2a.367.367 0 01-.366-.367v-.642zM16.408 4.583a.367.367 0 00-.366.367v12.1c0 .203.164.367.366.367h.642a.367.367 0 00.367-.367V4.95a.367.367 0 00-.367-.367h-.642z",
    fill: "#646A73"
  }));
  function rt() {
    return (rt = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) {
          if (Object.prototype.hasOwnProperty.call(r, n)) {
            e[n] = r[n];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  var rr = ({
    styles: e = {},
    ...t
  }) => reactCoreLibraryReexport.createElement("svg", rt({
    width: "22",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), reactCoreLibraryReexport.createElement("path", {
    d: "M13.31 1.082a1 1 0 00-1.115.87L9.758 21.805a1 1 0 001.985.243l2.437-19.85a1 1 0 00-.87-1.115zM8.207 5.293a1 1 0 010 1.414L2.414 12.5l5.793 5.793a1 1 0 11-1.414 1.414l-6.5-6.5a1 1 0 010-1.414l6.5-6.5a1 1 0 011.414 0zm7.586 0a1 1 0 000 1.414l5.793 5.793-5.793 5.793a1 1 0 001.414 1.414l6.5-6.5a1 1 0 000-1.414l-6.5-6.5a1 1 0 00-1.414 0z",
    fill: "#2B2F36"
  }));
  function rn() {
    return (rn = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) {
          if (Object.prototype.hasOwnProperty.call(r, n)) {
            e[n] = r[n];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  var ri = ({
    styles: e = {},
    ...t
  }) => reactCoreLibraryReexport.createElement("svg", rn({
    width: "12",
    height: "12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), reactCoreLibraryReexport.createElement("path", {
    d: "M5.61 9.23a.5.5 0 00.78 0l4.153-5.167a.5.5 0 00-.39-.813H1.847a.5.5 0 00-.39.813L5.61 9.23z",
    fill: "#646A73"
  }));
  function ro() {
    return (ro = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) {
          if (Object.prototype.hasOwnProperty.call(r, n)) {
            e[n] = r[n];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  var ra = ({
    styles: e = {},
    ...t
  }) => reactCoreLibraryReexport.createElement("svg", ro({
    width: "14",
    height: "14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), reactCoreLibraryReexport.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 9.204l4.744-4.744a.292.292 0 01.412 0l.413.413a.292.292 0 010 .412l-5.156 5.156a.583.583 0 01-.825 0L1.432 5.285a.292.292 0 010-.412l.412-.413a.292.292 0 01.413 0L7 9.204z",
    fill: "#8F959E"
  }));
  var codeLanguageDefinitions = require("code-language-definitions") /*id: 862192*/;
  var rl = {
    isMobile: userAgentDetect.userAgentInfo.isMobile || userAgentDetect.userAgentInfo.isIPad && userAgentDetect.userAgentInfo.isLark
  };
  var flattenReactChildrenUtil_1 = require("flatten-react-children-util_1") /*id: 697377*/;
  function rc(e, t) {
    return flattenReactChildrenUtil_1.default(e).map((e, r) => {
      if (reactCoreLibraryReexport.isValidElement(e)) {
        let {
          key: o
        } = e;
        let a = e.props?.eventKey ?? o;
        if (a == null) {
          a = `tmp_key-${[...t, r].join("-")}`;
        }
        let s = {
          key: a,
          eventKey: a
        };
        return reactCoreLibraryReexport.cloneElement(e, s);
      }
      return e;
    });
  }
  var useCachedValueHook_1 = require("use-cached-value-hook_1") /*id: 825031*/;
  var shallowEqualUtil = require("shallow-equal-util") /*id: 181980*/;
  let rf = reactCoreLibraryReexport.createContext(null);
  function rA(e) {
    let {
      children: t,
      locked: r,
      ...n
    } = e;
    let i = reactCoreLibraryReexport.useContext(rf);
    let o = useCachedValueHook_1.default(() => function (e, t) {
      let r = {
        ...e
      };
      Object.entries(t).forEach(e => {
        let [t, n] = e;
        if (n !== undefined) {
          r[t] = n;
        }
      });
      return r;
    }(i, n), [i, n], (e, t) => !r && (e[0] !== t[0] || !shallowEqualUtil.shallowEqual(e[1], t[1])));
    return reactCoreLibraryReexport.createElement(rf.Provider, {
      value: o
    }, t);
  }
  let rg = reactCoreLibraryReexport.createContext(null);
  function rp() {
    return reactCoreLibraryReexport.useContext(rg);
  }
  let rm = reactCoreLibraryReexport.createContext([]);
  function ry(e) {
    let t = reactCoreLibraryReexport.useContext(rm);
    return reactCoreLibraryReexport.useMemo(() => e !== undefined ? [...t, e] : t, [t, e]);
  }
  let rv = reactCoreLibraryReexport.createContext(null);
  let rb = e => {
    let {
      className: t,
      title: r,
      eventKey: n,
      children: i,
      ...o
    } = e;
    let {
      prefixCls: a
    } = reactCoreLibraryReexport.useContext(rf);
    let s = `${a}-item-group`;
    return reactCoreLibraryReexport.createElement("li", objectAssignUtil.objectAssign({}, o, {
      onClick: e => e.stopPropagation(),
      className: conditionalClassnames.default(s, t)
    }), reactCoreLibraryReexport.createElement("div", {
      className: `${s}-title`,
      title: typeof r == "string" ? r : undefined
    }, r), reactCoreLibraryReexport.createElement("ul", {
      className: `${s}-list`
    }, i));
  };
  function rw(e) {
    let {
      children: t,
      ...r
    } = e;
    let n = rc(t, ry(r.eventKey));
    if (rp()) {
      return n;
    } else {
      return reactCoreLibraryReexport.createElement(rb, r, n);
    }
  }
  function rC(e) {
    let {
      className: t,
      style: r
    } = e;
    let {
      prefixCls: n
    } = reactCoreLibraryReexport.useContext(rf);
    if (rp()) {
      return null;
    } else {
      return reactCoreLibraryReexport.createElement("li", {
        className: conditionalClassnames.default(`${n}-item-divider`, t),
        style: r
      });
    }
  }
  var rightBoldOutlinedIcon = require("right-bold-outlined-icon") /*id: 971784*/;
  var useControlledStateHook_2 = require("use-controlled-state-hook_2") /*id: 900767*/;
  require("empty-module-stub_8_1") /*id: 958386*/;
  var responsiveOverflowList = require("responsive-overflow-list") /*id: 249548*/;
  var keyboardKeyCodes_1_1 = require("keyboard-key-codes_1_1") /*id: 940513*/;
  var objectOmitKeysUtil = require("object-omit-keys-util") /*id: 354420*/;
  function rS(e, t, r, n) {
    let {
      activeKey: i,
      onActive: o,
      onInactive: a
    } = reactCoreLibraryReexport.useContext(rf);
    let s = {
      active: i === e && e !== undefined
    };
    if (!t) {
      s.onMouseEnter = t => {
        if (r != null) {
          r({
            key: e,
            domEvent: t
          });
        }
        o(e);
      };
      s.onMouseLeave = t => {
        if (n != null) {
          n({
            key: e,
            domEvent: t
          });
        }
        a(e);
      };
    }
    return s;
  }
  function rk(e) {
    let {
      item: t,
      ...r
    } = e;
    Object.defineProperty(r, "item", {
      get: () => t
    });
    return r;
  }
  function r_(e) {
    let t;
    let {
      icon: r,
      props: n,
      children: i
    } = e;
    return (typeof r == "function" ? reactCoreLibraryReexport.createElement(r, {
      ...n
    }) : r) || i || null;
  }
  function rT(e) {
    let {
      mode: t,
      rtl: r,
      inlineIndent: n
    } = reactCoreLibraryReexport.useContext(rf);
    if (t !== "inline") {
      return {};
    }
    let i = 16 + (e - 1) * n;
    if (r) {
      return {
        paddingRight: i
      };
    } else {
      return {
        paddingLeft: i
      };
    }
  }
  let rQ = reactCoreLibraryReexport.createContext(null);
  function rR(e, t) {
    if (e === undefined) {
      return null;
    } else {
      return `${e}-${t}`;
    }
  }
  function rF(e) {
    return rR(reactCoreLibraryReexport.useContext(rQ), e);
  }
  class rL extends reactCoreLibraryReexport.Component {
    render() {
      let {
        title: e,
        attribute: t,
        elementRef: r,
        ...n
      } = this.props;
      let i = objectOmitKeysUtil.default(n, ["eventKey"]);
      return reactCoreLibraryReexport.createElement(responsiveOverflowList.Overflow.Item, objectAssignUtil.objectAssign({}, t, {
        title: typeof e == "string" ? e : undefined
      }, i, {
        ref: r
      }));
    }
  }
  let rO = e => {
    let {
      style: t,
      className: r,
      eventKey: n,
      warnKey: i,
      disabled: o,
      itemIcon: a,
      children: s,
      role: l,
      onMouseEnter: u,
      onMouseLeave: c,
      onClick: h,
      onKeyDown: d,
      onFocus: f,
      ...A
    } = e;
    let g = rF(n);
    let {
      prefixCls: p,
      onItemClick: m,
      disabled: y,
      overflowDisabled: v,
      itemIcon: b,
      selectedKeys: w,
      onActive: C
    } = reactCoreLibraryReexport.useContext(rf);
    let E = `${p}-item`;
    let I = reactCoreLibraryReexport.useRef();
    let B = reactCoreLibraryReexport.useRef();
    let x = !!y || !!o;
    let D = ry(n);
    let S = e => ({
      key: n,
      keyPath: [...D].reverse(),
      item: I.current,
      domEvent: e
    });
    let {
      active: k,
      ...T
    } = rS(n, x, u, c);
    let Q = w.includes(n);
    let R = rT(D.length);
    let F = {};
    if (e.role === "option") {
      F["aria-selected"] = Q;
    }
    return reactCoreLibraryReexport.createElement(rL, objectAssignUtil.objectAssign({
      ref: I,
      elementRef: B,
      role: l === null ? "none" : l || "menuitem",
      tabIndex: o ? null : -1,
      "data-menu-id": v && g ? null : g
    }, A, T, F, {
      component: "li",
      "aria-disabled": o,
      style: {
        ...R,
        ...t
      },
      className: conditionalClassnames.default(E, {
        [`${E}-active`]: k,
        [`${E}-selected`]: Q,
        [`${E}-disabled`]: x
      }, r),
      onClick: e => {
        if (x) {
          return;
        }
        let t = S(e);
        if (h != null) {
          h(rk(t));
        }
        m(t);
      },
      onKeyDown: e => {
        if (d != null) {
          d(e);
        }
        if (e.which === keyboardKeyCodes_1_1.default.ENTER) {
          let t = S(e);
          if (h != null) {
            h(rk(t));
          }
          m(t);
        }
      },
      onFocus: e => {
        C(n);
        if (f != null) {
          f(e);
        }
      }
    }), s, reactCoreLibraryReexport.createElement(r_, {
      props: {
        ...e,
        isSelected: Q
      },
      icon: a || b
    }));
  };
  function rN(e) {
    let {
      eventKey: t
    } = e;
    let r = rp();
    let n = ry(t);
    reactCoreLibraryReexport.useEffect(() => {
      if (r) {
        r.registerPath(t, n);
        return () => {
          r.unregisterPath(t, n);
        };
      }
    }, [n]);
    if (r) {
      return null;
    } else {
      return reactCoreLibraryReexport.createElement(rO, e);
    }
  }
  function rM(e) {
    let t = reactCoreLibraryReexport.useRef(e);
    t.current = e;
    let r = reactCoreLibraryReexport.useCallback(function () {
      var e;
      var r = arguments.length;
      var n = Array(r);
      var i = 0;
      for (; i < r; i++) {
        n[i] = arguments[i];
      }
      if ((e = t.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.call(t, ...n);
      }
    }, []);
    if (e) {
      return r;
    } else {
      return undefined;
    }
  }
  let rP = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      className: r,
      children: n,
      ...i
    } = e;
    let {
      prefixCls: o,
      mode: a
    } = reactCoreLibraryReexport.useContext(rf);
    return reactCoreLibraryReexport.createElement("ul", objectAssignUtil.objectAssign({
      className: conditionalClassnames.default(o, `${o}-sub`, `${o}-${a === "inline" ? "inline" : "vertical"}`, r)
    }, i, {
      "data-menu-list": true,
      ref: t
    }), n);
  });
  rP.displayName = "SubMenuList";
  var popupTriggerCore = require("popup-trigger-core") /*id: 956311*/;
  var delayedExecutionUtil = require("delayed-execution-util") /*id: 944867*/;
  let rH = {
    adjustX: 1,
    adjustY: 1
  };
  let rG = {
    topLeft: {
      points: ["bl", "tl"],
      overflow: rH,
      offset: [0, -7]
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: rH,
      offset: [0, 7]
    },
    leftTop: {
      points: ["tr", "tl"],
      overflow: rH,
      offset: [-4, 0]
    },
    rightTop: {
      points: ["tl", "tr"],
      overflow: rH,
      offset: [4, 0]
    }
  };
  let rZ = {
    topLeft: {
      points: ["bl", "tl"],
      overflow: rH,
      offset: [0, -7]
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: rH,
      offset: [0, 7]
    },
    rightTop: {
      points: ["tr", "tl"],
      overflow: rH,
      offset: [-4, 0]
    },
    leftTop: {
      points: ["tl", "tr"],
      overflow: rH,
      offset: [4, 0]
    }
  };
  function rW(e, t, r) {
    return t || (r ? r[e] || r.other : undefined);
  }
  let rj = {
    horizontal: "bottomLeft",
    vertical: "rightTop",
    "vertical-left": "rightTop",
    "vertical-right": "leftTop"
  };
  function rY(e) {
    let {
      prefixCls: t,
      visible: r,
      children: n,
      popup: i,
      popupClassName: o,
      popupOffset: a,
      disabled: s,
      mode: l,
      onVisibleChange: u
    } = e;
    let {
      getPopupContainer: c,
      rtl: h,
      subMenuOpenDelay: d,
      subMenuCloseDelay: f,
      builtinPlacements: A,
      triggerSubMenuAction: g,
      forceSubMenuRender: p,
      motion: m,
      defaultMotions: y
    } = reactCoreLibraryReexport.useContext(rf);
    let [v, b] = reactCoreLibraryReexport.useState(false);
    let w = h ? {
      ...rZ,
      ...A
    } : {
      ...rG,
      ...A
    };
    let C = rj[l];
    let E = {
      ...rW(l, m, y),
      leavedClassName: `${t}-hidden`,
      removeOnLeave: false,
      motionAppear: true
    };
    let I = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      I.current = delayedExecutionUtil.default(() => {
        b(r);
      });
      return () => {
        delayedExecutionUtil.default.cancel(I.current);
      };
    }, [r]);
    return reactCoreLibraryReexport.createElement(popupTriggerCore.Trigger, {
      prefixCls: t,
      popupClassName: conditionalClassnames.default(`${t}-popup`, {
        [`${t}-rtl`]: h
      }, o),
      stretch: l === "horizontal" ? "minWidth" : undefined,
      getPopupContainer: c,
      builtinPlacements: w,
      popupPlacement: C,
      popupVisible: v,
      popup: i,
      popupAlign: a && {
        offset: a
      },
      action: s ? [] : g && [g],
      mouseEnterDelay: d,
      mouseLeaveDelay: f,
      onPopupVisibleChange: u,
      forceRender: p,
      popupMotion: E
    }, n);
  }
  var cssMotionAnimationUtil = require("css-motion-animation-util") /*id: 663888*/;
  function rq(e) {
    let {
      id: t,
      open: r,
      keyPath: n,
      children: i
    } = e;
    let o = "inline";
    let {
      prefixCls: a,
      forceSubMenuRender: s,
      motion: l,
      defaultMotions: u,
      mode: c
    } = reactCoreLibraryReexport.useContext(rf);
    let h = reactCoreLibraryReexport.useRef(false);
    h.current = c === o;
    let [d, f] = reactCoreLibraryReexport.useState(!h.current);
    let A = !!h.current && r;
    reactCoreLibraryReexport.useEffect(() => {
      if (h.current) {
        f(false);
      }
    }, [c]);
    let g = {
      ...rW(o, l, u)
    };
    if (n.length > 1) {
      g.motionAppear = false;
    }
    let p = g.onVisibleChanged;
    g.onVisibleChanged = e => {
      if (!h.current && !e) {
        f(true);
      }
      if (p == null) {
        return undefined;
      } else {
        return p(e);
      }
    };
    if (d) {
      return null;
    } else {
      return reactCoreLibraryReexport.createElement(rA, {
        mode: o,
        locked: !h.current
      }, reactCoreLibraryReexport.createElement(cssMotionAnimationUtil.CSSMotion, objectAssignUtil.objectAssign({
        visible: A
      }, g, {
        forceRender: s,
        removeOnLeave: false,
        leavedClassName: `${a}-hidden`
      }), e => {
        let {
          className: r,
          style: n
        } = e;
        return reactCoreLibraryReexport.createElement(rP, {
          id: t,
          className: r,
          style: n
        }, i);
      }));
    }
  }
  let rV = e => {
    let {
      style: t,
      className: r,
      title: n,
      eventKey: i,
      warnKey: o,
      disabled: a,
      internalPopupClose: s,
      children: l,
      itemIcon: u,
      expandIcon: c,
      popupClassName: h,
      popupOffset: d,
      onClick: f,
      onMouseEnter: A,
      onMouseLeave: g,
      onTitleClick: p,
      onTitleMouseEnter: m,
      onTitleMouseLeave: y,
      ...v
    } = e;
    let b = rF(i) || undefined;
    let {
      prefixCls: w,
      mode: C,
      openKeys: E,
      disabled: I,
      overflowDisabled: B,
      activeKey: x,
      selectedKeys: D,
      itemIcon: S,
      expandIcon: k,
      onItemClick: T,
      onOpenChange: Q,
      onActive: R
    } = reactCoreLibraryReexport.useContext(rf);
    let {
      isSubPathKey: F
    } = reactCoreLibraryReexport.useContext(rv);
    let L = ry();
    let O = `${w}-submenu`;
    let N = !!I || !!a;
    let M = reactCoreLibraryReexport.useRef(null);
    let P = reactCoreLibraryReexport.useRef(null);
    let U = c || k;
    let z = E.includes(i);
    let H = !B && z;
    let G = F(D, i);
    let {
      active: Z,
      ...W
    } = rS(i, N, m, y);
    let [j, Y] = reactCoreLibraryReexport.useState(false);
    let K = e => {
      if (!N) {
        Y(e);
      }
    };
    let q = reactCoreLibraryReexport.useMemo(() => Z || C !== "inline" && (j || F([x], i)), [C, Z, x, j, i, F]);
    let V = rT(L.length);
    let J = rM(e => {
      if (f != null) {
        f(rk(e));
      }
      T(e);
    });
    let X = b && `${b}-popup`;
    let $ = reactCoreLibraryReexport.createElement("div", objectAssignUtil.objectAssign({
      role: "menuitem",
      style: V,
      className: `${O}-title`,
      tabIndex: N ? undefined : -1,
      ref: M,
      title: typeof n == "string" ? n : undefined,
      "data-menu-id": B && b ? null : b,
      "aria-expanded": H,
      "aria-haspopup": true,
      "aria-controls": X,
      "aria-disabled": N,
      onClick: e => {
        if (!N) {
          if (p != null) {
            p({
              key: i,
              domEvent: e
            });
          }
          if (C === "inline") {
            Q(i, !z);
          }
        }
      },
      onFocus: () => {
        R(i);
      }
    }, W), n, reactCoreLibraryReexport.createElement(r_, {
      icon: C !== "horizontal" ? U : null,
      props: {
        ...e,
        isOpen: H,
        isSubMenu: true
      }
    }, reactCoreLibraryReexport.createElement("i", {
      className: `${O}-arrow`
    })));
    let ee = reactCoreLibraryReexport.useRef(C);
    if (C !== "inline") {
      ee.current = L.length > 1 ? "vertical" : C;
    }
    if (!B) {
      let e = ee.current;
      $ = reactCoreLibraryReexport.createElement(rY, {
        mode: e,
        prefixCls: O,
        visible: !s && H && C !== "inline",
        popupClassName: h,
        popupOffset: d,
        popup: reactCoreLibraryReexport.createElement(rA, {
          mode: e === "horizontal" ? "vertical" : e
        }, reactCoreLibraryReexport.createElement(rP, {
          id: X || undefined,
          ref: P
        }, l)),
        disabled: N,
        onVisibleChange: e => {
          if (C !== "inline") {
            Q(i, e);
          }
        }
      }, $);
    }
    return reactCoreLibraryReexport.createElement(rA, {
      onItemClick: J,
      mode: C === "horizontal" ? "vertical" : C,
      itemIcon: u || S,
      expandIcon: U
    }, reactCoreLibraryReexport.createElement(responsiveOverflowList.Overflow.Item, objectAssignUtil.objectAssign({
      role: "none"
    }, v, {
      component: "li",
      style: t,
      className: conditionalClassnames.default(O, `${O}-${C}`, r, {
        [`${O}-open`]: H,
        [`${O}-active`]: q,
        [`${O}-selected`]: G,
        [`${O}-disabled`]: N
      }),
      onMouseEnter: e => {
        K(true);
        if (A != null) {
          A({
            key: i,
            domEvent: e
          });
        }
      },
      onMouseLeave: e => {
        K(false);
        if (g != null) {
          g({
            key: i,
            domEvent: e
          });
        }
      }
    }), $, !B && reactCoreLibraryReexport.createElement(rq, {
      id: X,
      open: H,
      keyPath: L
    }, l)));
  };
  function rJ(e) {
    let t;
    let {
      eventKey: r,
      children: n
    } = e;
    let i = ry(r);
    let o = rc(n, i);
    let a = rp();
    reactCoreLibraryReexport.useEffect(() => {
      if (a) {
        a.registerPath(r, i);
        return () => {
          a.unregisterPath(r, i);
        };
      }
    }, [i]);
    t = a ? o : reactCoreLibraryReexport.createElement(rV, e, o);
    return reactCoreLibraryReexport.createElement(rm.Provider, {
      value: i
    }, t);
  }
  var focusNodeListUtil = require("focus-node-list-util") /*id: 923622*/;
  let {
    LEFT: r$,
    RIGHT: r0,
    UP: r1,
    DOWN: r2,
    ENTER: r5,
    ESC: r3
  } = keyboardKeyCodes_1_1.default;
  let r4 = [r1, r2, r$, r0];
  function r6(e, t, r, n = 1) {
    if (!e) {
      return null;
    }
    let i = focusNodeListUtil.getFocusNodeList(e, true).filter(e => t.has(e));
    let o = i.length;
    let a = i.findIndex(e => r === e);
    if (n < 0) {
      if (a === -1) {
        a = o - 1;
      } else {
        a -= 1;
      }
    } else if (n > 0) {
      a += 1;
    }
    return i[a = (a + o) % o];
  }
  let r8 = Math.random().toFixed(5).toString().slice(2);
  let r7 = 0;
  let r9 = "__RC_UTIL_PATH_SPLIT__";
  let ne = e => e.join(r9);
  let nt = e => e.split(r9);
  let nr = "rc-menu-more";
  let nn = [];
  let ni = e => {
    let r = tf("internal-menu");
    let {
      prefixCls: n = r(),
      style: i,
      className: o,
      tabIndex: a = 0,
      children: s,
      direction: l,
      id: u,
      mode: c = "vertical",
      inlineCollapsed: h,
      disabled: d,
      disabledOverflow: f,
      subMenuOpenDelay: A = 0.1,
      subMenuCloseDelay: g = 0.1,
      forceSubMenuRender: p,
      defaultOpenKeys: m,
      openKeys: y,
      activeKey: v,
      defaultActiveFirst: b,
      selectable: w = true,
      multiple: C = false,
      defaultSelectedKeys: E,
      selectedKeys: I,
      onSelect: B,
      onDeselect: x,
      inlineIndent: D = 28,
      motion: S,
      defaultMotions: k,
      triggerSubMenuAction: T = "hover",
      builtinPlacements: Q,
      itemIcon: R,
      expandIcon: F,
      overflowedIndicator: L = "...",
      getPopupContainer: O,
      onClick: N,
      onOpenChange: M,
      onKeyDown: P,
      openAnimation: U,
      openTransitionName: z,
      ...H
    } = e;
    let G = rc(s, nn);
    let [Z, W] = reactCoreLibraryReexport.useState(false);
    let j = reactCoreLibraryReexport.useRef(null);
    let Y = function (e) {
      let [t, r] = useControlledStateHook_2.default(e, {
        value: e
      });
      reactCoreLibraryReexport.useEffect(() => {
        r7 += 1;
        let e = `${r8}-${r7}`;
        r(`rc-menu-uuid-${e}`);
      }, []);
      return t;
    }(u);
    let K = l === "rtl";
    let [q, V] = useControlledStateHook_2.default(m, {
      value: y,
      postState: e => e || nn
    });
    let J = function (e, t = false) {
      function r() {
        V(e);
        if (M != null) {
          M(e);
        }
      }
      if (t) {
        reactDomEntryWrapper.flushSync(r);
      } else {
        r();
      }
    };
    let [X, $] = reactCoreLibraryReexport.useState(q);
    let ee = reactCoreLibraryReexport.useRef(false);
    let [et, er] = reactCoreLibraryReexport.useMemo(() => (c === "inline" || c === "vertical") && h ? ["vertical", h] : [c, false], [c, h]);
    let en = et === "inline";
    let [ei, eo] = reactCoreLibraryReexport.useState(et);
    let [ea, es] = reactCoreLibraryReexport.useState(er);
    reactCoreLibraryReexport.useEffect(() => {
      eo(et);
      es(er);
      if (!ee.current) {
        ee.current = true;
        return;
      }
      if (en) {
        V(X);
      } else {
        J(nn);
      }
    }, [et, er]);
    let [el, eu] = reactCoreLibraryReexport.useState(0);
    let ec = el >= G.length - 1 || ei !== "horizontal" || f;
    reactCoreLibraryReexport.useEffect(() => {
      if (en) {
        $(q);
      }
    }, [q]);
    let {
      registerPath: eh,
      unregisterPath: ed,
      refreshOverflowKeys: ef,
      isSubPathKey: eA,
      getKeyPath: eg,
      getKeys: ep,
      getSubPathKeys: em
    } = function () {
      let [, e] = reactCoreLibraryReexport.useState({});
      let t = reactCoreLibraryReexport.useRef(new Map());
      let r = reactCoreLibraryReexport.useRef(new Map());
      let [n, i] = reactCoreLibraryReexport.useState([]);
      let o = reactCoreLibraryReexport.useRef(0);
      let a = reactCoreLibraryReexport.useRef(false);
      let s = () => {
        if (!a.current) {
          e({});
        }
      };
      let l = reactCoreLibraryReexport.useCallback((e, n) => {
        var i;
        let a = ne(n);
        r.current.set(a, e);
        t.current.set(e, a);
        o.current += 1;
        let l = o.current;
        i = () => {
          if (l === o.current) {
            s();
          }
        };
        Promise.resolve().then(i);
      }, []);
      let u = reactCoreLibraryReexport.useCallback((e, n) => {
        let i = ne(n);
        r.current.delete(i);
        t.current.delete(e);
      }, []);
      let c = reactCoreLibraryReexport.useCallback(e => {
        i(e);
      }, []);
      let h = reactCoreLibraryReexport.useCallback((e, r) => {
        let i = nt(t.current.get(e) || "");
        if (r && n.includes(i[0])) {
          i.unshift(nr);
        }
        return i;
      }, [n]);
      let d = reactCoreLibraryReexport.useCallback((e, t) => e.some(e => h(e, true).includes(t)), [h]);
      let f = reactCoreLibraryReexport.useCallback(e => {
        let n = `${t.current.get(e)}${r9}`;
        let i = new Set();
        [...r.current.keys()].forEach(e => {
          if (e.startsWith(n)) {
            i.add(r.current.get(e));
          }
        });
        return i;
      }, []);
      reactCoreLibraryReexport.useEffect(() => () => {
        a.current = true;
      }, []);
      return {
        registerPath: l,
        unregisterPath: u,
        refreshOverflowKeys: c,
        isSubPathKey: d,
        getKeyPath: h,
        getKeys: () => {
          let e = [...t.current.keys()];
          if (n.length) {
            e.push(nr);
          }
          return e;
        },
        getSubPathKeys: f
      };
    }();
    let ey = reactCoreLibraryReexport.useMemo(() => ({
      registerPath: eh,
      unregisterPath: ed
    }), [eh, ed]);
    let ev = reactCoreLibraryReexport.useMemo(() => ({
      isSubPathKey: eA
    }), [eA]);
    reactCoreLibraryReexport.useEffect(() => {
      ef(ec ? nn : G.slice(el + 1).map(e => e.key));
    }, [el, ec]);
    let [eb, ew] = useControlledStateHook_2.default(v || b && G[0]?.key, {
      value: v
    });
    let eC = rM(e => {
      ew(e);
    });
    let eE = rM(() => {
      ew(undefined);
    });
    let [eI, eB] = useControlledStateHook_2.default(E || [], {
      value: I,
      postState: e => Array.isArray(e) ? e : e == null ? nn : [e]
    });
    let ex = e => {
      if (w) {
        let t;
        let {
          key: r
        } = e;
        let n = eI.includes(r);
        eB(t = C ? n ? eI.filter(e => e !== r) : [...eI, r] : [r]);
        let i = {
          ...e,
          selectedKeys: t
        };
        if (n) {
          if (x != null) {
            x(i);
          }
        } else if (B != null) {
          B(i);
        }
      }
      if (!C && q != null && q.length && ei !== "inline") {
        J(nn);
      }
    };
    let eD = rM(e => {
      if (N != null) {
        N(rk(e));
      }
      ex(e);
    });
    let eS = rM((e, t) => {
      let r = (q == null ? undefined : q.filter(t => t !== e)) || [];
      if (t) {
        r.push(e);
      } else if (ei !== "inline") {
        let t = em(e);
        r = r.filter(e => !t.has(e));
      }
      if (!shallowEqualUtil.shallowEqual(q, r)) {
        J(r, true);
      }
    });
    let ek = rM(O);
    let eT = function (e, t, r, n, i, o, a, s, l, u) {
      let c = reactCoreLibraryReexport.useRef();
      let h = reactCoreLibraryReexport.useRef();
      h.current = t;
      let d = () => {
        if (c.current) {
          delayedExecutionUtil.default.cancel(c.current);
        }
      };
      reactCoreLibraryReexport.useEffect(() => () => {
        d();
      }, []);
      return f => {
        let {
          which: A
        } = f;
        if ([...r4, r5, r3].includes(A)) {
          let u = new Set();
          let g = new Map();
          let p = new Map();
          let m = () => {
            u = new Set();
            g = new Map();
            p = new Map();
            o().forEach(e => {
              let t = document.querySelector(`[data-menu-id='${rR(n, e)}']`);
              if (t) {
                u.add(t);
                p.set(t, e);
                g.set(e, t);
              }
            });
            return u;
          };
          m();
          let y = function (e, t) {
            let r = e || document.activeElement;
            while (r) {
              if (t.has(r)) {
                return r;
              }
              r = r.parentElement;
            }
            return null;
          }(g.get(t), u);
          let v = p.get(y);
          if (v === undefined) {
            return;
          }
          let b = function (e, t, r, n) {
            let o = "prev";
            let a = "next";
            let s = "children";
            let l = "parent";
            if (e === "inline" && n === r5) {
              return {
                inlineTrigger: true
              };
            }
            let u = {
              [r1]: o,
              [r2]: a
            };
            let c = {
              [r1]: o,
              [r2]: a,
              [r5]: s,
              [r3]: l,
              [r$]: r ? s : l,
              [r0]: r ? l : s
            };
            switch ({
              inline: u,
              horizontal: {
                [r$]: r ? a : o,
                [r0]: r ? o : a,
                [r2]: s,
                [r5]: s
              },
              vertical: c,
              inlineSub: u,
              horizontalSub: c,
              verticalSub: c
            }[`${e}${t ? "" : "Sub"}`]?.[n]) {
              case o:
                return {
                  offset: -1,
                  sibling: true
                };
              case a:
                return {
                  offset: 1,
                  sibling: true
                };
              case l:
                return {
                  offset: -1,
                  sibling: false
                };
              default:
                return {
                  offset: 1,
                  sibling: false
                };
            }
          }(e, a(v, true).length === 1, r, A);
          if (!b) {
            return;
          }
          if (r4.includes(A)) {
            f.preventDefault();
          }
          let w = e => {
            if (e) {
              let t = e;
              let r = e.querySelector("a");
              if (r != null && r.getAttribute("href")) {
                t = r;
              }
              let n = p.get(e);
              s(n);
              d();
              c.current = delayedExecutionUtil.default(() => {
                if (h.current === n) {
                  t.focus();
                }
              });
            }
          };
          if (b.sibling || !y) {
            let t;
            w(r6(y && e !== "inline" ? function (e) {
              let t = e;
              while (t) {
                if (t.getAttribute("data-menu-list")) {
                  return t;
                }
                t = t.parentElement;
              }
              return null;
            }(y) : i.current, u, y, b.offset));
          } else if (b.inlineTrigger) {
            l(v);
          } else if (b.offset && b.offset > 0) {
            l(v, true);
            d();
            c.current = delayedExecutionUtil.default(() => {
              m();
              let e = y.getAttribute("aria-controls");
              w(r6(document.getElementById(e), u));
            }, 5);
          } else if (b.offset && b.offset < 0) {
            let e = a(v, true);
            let t = e[e.length - 2];
            let r = g.get(t);
            l(t, false);
            w(r);
          }
        }
        if (u != null) {
          u(f);
        }
      };
    }(ei, eb, K, Y, j, ep, eg, ew, (e, t) => {
      let r = t ?? (q == null || !q.includes(e));
      eS(e, r);
    }, P);
    reactCoreLibraryReexport.useEffect(() => {
      W(true);
    }, []);
    let eR = ei !== "horizontal" || f ? G : G.map((e, t) => reactCoreLibraryReexport.createElement(rA, {
      key: e.key,
      overflowDisabled: t > el
    }, e));
    let eF = reactCoreLibraryReexport.createElement(responsiveOverflowList.Overflow, objectAssignUtil.objectAssign({
      id: u,
      ref: j,
      prefixCls: `${n}-overflow`,
      component: "ul",
      itemComponent: rN,
      className: conditionalClassnames.default(n, `${n}-root`, `${n}-${ei}`, o, {
        [`${n}-inline-collapsed`]: ea,
        [`${n}-rtl`]: K
      }),
      dir: l,
      style: i,
      role: "menu",
      tabIndex: a,
      data: eR,
      renderRawItem: e => e,
      renderRawRest: e => {
        let t = e.length;
        let r = t ? G.slice(-t) : null;
        return reactCoreLibraryReexport.createElement(rJ, {
          eventKey: nr,
          title: L,
          disabled: ec,
          internalPopupClose: t === 0
        }, r);
      },
      maxCount: ei !== "horizontal" || f ? responsiveOverflowList.Overflow.INVALIDATE : responsiveOverflowList.Overflow.RESPONSIVE,
      ssr: "full",
      "data-menu-list": true,
      onVisibleChange: e => {
        eu(e);
      },
      onKeyDown: eT
    }, H));
    return reactCoreLibraryReexport.createElement(rQ.Provider, {
      value: Y
    }, reactCoreLibraryReexport.createElement(rA, {
      prefixCls: n,
      mode: ei,
      openKeys: q,
      rtl: K,
      disabled: d,
      motion: Z ? S : undefined,
      defaultMotions: Z ? k : undefined,
      activeKey: eb,
      onActive: eC,
      onInactive: eE,
      selectedKeys: eI,
      inlineIndent: D,
      subMenuOpenDelay: A,
      subMenuCloseDelay: g,
      forceSubMenuRender: p,
      builtinPlacements: Q,
      triggerSubMenuAction: T,
      getPopupContainer: ek,
      itemIcon: R,
      expandIcon: F,
      onItemClick: eD,
      onOpenChange: eS
    }, reactCoreLibraryReexport.createElement(rv.Provider, {
      value: ev
    }, eF), reactCoreLibraryReexport.createElement("div", {
      style: {
        display: "none"
      },
      "aria-hidden": true
    }, reactCoreLibraryReexport.createElement(rg.Provider, {
      value: ey
    }, G))));
  };
  ni.Item = rN;
  ni.SubMenu = rJ;
  ni.ItemGroup = rw;
  ni.Divider = rC;
  let no = reactCoreLibraryReexport.createContext(null);
  let na = reactCoreLibraryReexport.createContext({
    prefixCls: "",
    inlineCollapsed: false,
    textOverflow: true,
    firstLevel: true,
    showCheckmark: true,
    selectable: true
  });
  let ns = () => ({
    height: 0,
    opacity: 0
  });
  let nl = e => ({
    height: e.scrollHeight,
    opacity: 1
  });
  let nu = e => ({
    height: e.offsetHeight
  });
  let nc = (e, t) => t.propertyName === "height";
  let nh = e => ({
    motionName: `${e}-motion-collapse`,
    onAppearStart: ns,
    onEnterStart: ns,
    onAppearActive: nl,
    onEnterActive: nl,
    onLeaveStart: nu,
    onLeaveActive: ns,
    onAppearEnd: nc,
    onEnterEnd: nc,
    onLeaveEnd: nc,
    motionDeadline: 500
  });
  let nd = (e, t) => {
    let r = {};
    if (typeof e == "number") {
      r.subMenuOpenDelay = e / 1000;
    }
    if (typeof t == "number") {
      r.subMenuCloseDelay = t / 1000;
    }
    return r;
  };
  let nf = e => {
    return e.type?.isSubMenu;
  };
  function nA(e) {
    return e != null;
  }
  let ng = reactCoreLibraryReexport.createContext(null);
  var iconDownBoldOutlined = require("icon-down-bold-outlined") /*id: 851606*/;
  let nm = () => {
    let {
      mode: e,
      prefixCls: t
    } = reactCoreLibraryReexport.useContext(na);
    if (e === "horizontal") {
      return reactCoreLibraryReexport.createElement("div", {
        className: `${t}-item__ink`
      });
    } else {
      return null;
    }
  };
  let ny = () => {
    let e = reactContextSelector.useContextSelector(eq, e => e.locale);
    return reactCoreLibraryReexport.createElement("span", null, e.global.more);
  };
  var nv = () => {
    let {
      prefixCls: e
    } = reactCoreLibraryReexport.useContext(na);
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(ny, null), reactCoreLibraryReexport.createElement(iconDownBoldOutlined.DownBoldOutlined, {
      className: `${e}-overflow-expandIcon`
    }), reactCoreLibraryReexport.createElement(nm, null));
  };
  function nb(e) {
    let t;
    switch (e) {
      case "horizontal":
        t = [0, -10];
        break;
      case "vertical":
      case "inline":
        t = [8, -10];
        break;
      case "normal":
        t = [3, -4];
    }
    return t;
  }
  var nw = "ui64zpg";
  var translateOutlinedIcon_1 = require("translate-outlined-icon_1") /*id: 977617*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  let nI = (e, t) => {
    let {
      disabled: r
    } = t;
    let {
      action: n,
      hideAction: i,
      showAction: o
    } = e;
    return [{
      ...e,
      action: r ? [] : n,
      showAction: r ? [] : o,
      hideAction: r ? [] : i
    }];
  };
  let nB = e => {
    let {
      childSize: t,
      popupSize: r,
      arrow: n,
      popup: i,
      prefixCls: o
    } = e;
    let a = `${o}__arrow`;
    let s = nA(n);
    let {
      size: l = 8,
      safeMarginX: u = 8,
      safeMarginY: c = 8,
      content: h
    } = n ?? {};
    let d = (() => {
      let e = e => (e < 0 ? Math.PI * 2 + e : e) / Math.PI * 180;
      let n = e(Math.atan2(-((t.y + t.height / 2 - (r.y + r.height / 2)) * 1), t.x + t.width / 2 - (r.x + r.width / 2)));
      let i = {
        tr: e(Math.atan2(r.height, r.width)),
        tl: e(Math.atan2(r.height, -r.width)),
        bl: e(Math.atan2(-r.height, -r.width)),
        br: e(Math.atan2(-r.height, r.width))
      };
      if (n >= i.tr && n < i.tl) {
        return "top";
      } else if (n >= i.tl && n < i.bl) {
        return "left";
      } else if (n >= i.bl && n < i.br) {
        return "bottom";
      } else {
        return "right";
      }
    })();
    let f = ej(h) ? h({
      placement: d
    }) : nA(h) ? reactCoreLibraryReexport.createElement("div", {
      className: `${a}__content`,
      style: {
        width: l * Math.SQRT2,
        height: l * Math.SQRT2
      }
    }) : h;
    let A = s ? reactCoreLibraryReexport.createElement("div", {
      className: conditionalClassnames.default(a, `${a}-${d}`),
      style: (() => {
        let e = {};
        if (["bottom", "top"].includes(d)) {
          e.left = t.left + t.width / 2 - r.left;
          e.width = l * 2;
          e.height = l;
          if (e.left - l - u < 0) {
            e.left = l + u;
          } else if (e.left + l + u > r.width) {
            e.left = r.width - l - u;
          }
        } else if (["left", "right"].includes(d)) {
          e.top = t.top + t.height / 2 - r.top;
          e.width = l;
          e.height = l * 2;
          if (e.top - l - c < 0) {
            e.top = l + c;
          } else if (e.top + l + c > r.height) {
            e.top = r.height - l - c;
          }
        }
        return e;
      })()
    }, f) : null;
    let g = reactCoreLibraryReexport.useMemo(() => ej(i) ? i() : i, [i]);
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, g, A);
  };
  function nx(e) {
    let {
      popupAlign: t,
      arrow: r,
      prefixCls: n,
      childSize: i,
      popupSize: o,
      viewPointRect: a,
      enablePopupOverflowAuto: s = false
    } = e;
    let {
      popup: l
    } = e;
    let u = reactCoreLibraryReexport.useMemo(() => {
      var e;
      var r;
      var n;
      var l;
      let u = {};
      if (s && ((e = t.overflow) === null || e === undefined || !e.adjustX || (r = t.overflow) === null || r === undefined || !r.adjustY) && a) {
        u.overflow = "auto";
        if ((n = t.overflow) === null || n === undefined || !n.adjustX) {
          if (i.right < o.left) {
            u.maxWidth = a.right - o.left;
          } else if (i.left > o.right) {
            u.maxWidth = o.right - a.left;
          }
        }
        if ((l = t.overflow) === null || l === undefined || !l.adjustY) {
          if (i.bottom < o.top) {
            u.maxHeight = a.bottom - o.top;
          } else if (i.top > o.bottom) {
            u.maxHeight = o.bottom - a.top;
          }
        }
        return u;
      }
    }, [t, a, o, i, s]);
    l = ej(l) ? l() : l;
    return l = nB({
      childSize: i,
      popupSize: o,
      arrow: r,
      popup: l = reactCoreLibraryReexport.isValidElement(l) && nA(u) ? reactCoreLibraryReexport.cloneElement(l, {
        style: {
          ...u,
          ...l.props.style
        }
      }) : l,
      prefixCls: n
    });
  }
  var domElementAlignUtil = require("dom-element-align-util") /*id: 984082*/;
  function nS(e) {
    if (!e) {
      return window;
    }
    if (e.toString() !== "[object Window]") {
      let {
        ownerDocument: t
      } = e;
      return t && t.defaultView || window;
    }
    return e;
  }
  function nk(e) {
    let t = nS(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function n_(e) {
    if (e) {
      return (e.nodeName || "").toLowerCase();
    } else {
      return null;
    }
  }
  function nT(e) {
    if (n_(e) === "html") {
      return e;
    } else {
      return e.assignedSlot || e.parentNode || (!function (e) {
        if (typeof ShadowRoot == "undefined") {
          return false;
        }
        let t = nS(e).ShadowRoot;
        return e instanceof t || e instanceof ShadowRoot;
      }(e) ? null : e.host) || ((nk(e) ? e.ownerDocument : e.document) || window.document).documentElement;
    }
  }
  function nQ(e) {
    let {
      overflow: t,
      overflowX: r,
      overflowY: n
    } = nS(e).getComputedStyle(e);
    return /auto|scroll|overlay|hidden/.test(t + n + r);
  }
  function nR(e) {
    let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    let n = function e(t) {
      if (["html", "body", "#document"].indexOf(n_(t)) >= 0) {
        return t.ownerDocument.body;
      } else if (function (e) {
        let t = nS(e).HTMLElement;
        return e instanceof t || e instanceof HTMLElement;
      }(t) && nQ(t)) {
        return t;
      } else {
        return e(nT(t));
      }
    }(e);
    let i = n === e.ownerDocument?.body;
    let o = nS(n);
    let a = i ? [o].concat(o.visualViewport || [], nQ(n) ? n : []) : n;
    let s = r.concat(a);
    if (i) {
      return s;
    } else {
      return s.concat(nR(nT(a)));
    }
  }
  let nF = {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    x: 0,
    y: 0
  };
  let nL = e => {
    let t = Math.floor(e.left);
    let r = Math.floor(e.top);
    let n = Math.floor(e.width);
    let i = Math.floor(e.height);
    return {
      left: t,
      top: r,
      x: t,
      y: r,
      width: n,
      height: i,
      right: n + t,
      bottom: i + r
    };
  };
  let nO = domElementAlignUtil.alignElement.__getVisibleRectForElement;
  let nN = e => {
    let {
      popupAlign: t,
      triggerRef: r,
      readyObserver: n,
      enablePopupOverflowAuto: i = false,
      enableforcePopupAlign: o = false
    } = e;
    let [a, s] = reactCoreLibraryReexport.useState(nF);
    let [l, u] = reactCoreLibraryReexport.useState(nF);
    let [c, h] = reactCoreLibraryReexport.useState(null);
    let d = reactCoreLibraryReexport.useCallback(() => {
      var e;
      var n;
      let o = (e = r.current) === null || e === undefined ? undefined : e.getRootDomNode();
      let d = (n = r.current) === null || n === undefined ? undefined : n.getPopupDomNode();
      if (o && d) {
        reactDomEntryWrapper.unstable_batchedUpdates(() => {
          let e = nL(d.getBoundingClientRect());
          let r = nL(o.getBoundingClientRect());
          if (!deepEqualUtil_1.deepEqual(e, a)) {
            s(e);
          }
          if (!deepEqualUtil_1.deepEqual(r, l)) {
            u(r);
          }
          if (i) {
            let e = nO(d, !!t.overflow?.alwaysByViewport);
            if (!deepEqualUtil_1.deepEqual(e, c)) {
              h(e);
            }
          }
        });
      }
    }, [t, r, a, l, c, i]);
    eY(() => {
      var e;
      var t;
      if (!n) {
        return;
      }
      let i = {
        passive: true
      };
      let a = (e = r.current) === null || e === undefined ? undefined : e.getRootDomNode();
      let s = (t = r.current) === null || t === undefined ? undefined : t.getPopupDomNode();
      if (!a || !s) {
        return;
      }
      d();
      let l = () => {
        var e;
        if ((e = r.current) !== null && e !== undefined) {
          e.forcePopupAlign();
        }
      };
      let u = [];
      if (o) {
        (u = [...new Set([...(nk(a) ? nR(a) : []), ...(nk(s) ? nR(s) : [])])]).forEach(e => {
          e.addEventListener("scroll", l, i);
        });
        window.addEventListener("resize", l, i);
      }
      let c = new MutationObserver(e => {
        let t = ["left", "top", "bottm", "right"];
        let r = new Map();
        for (let n of e) {
          if (n.type === "attributes" && n.attributeName === "style") {
            let e = e => e.trim();
            if (typeof n.oldValue == "string") {
              n.oldValue.split(";").map(e).filter(Boolean).map(t => t.split(":").map(e)).forEach(e => {
                let [n, i] = e;
                if (!!t.includes(n) && !r.has(n)) {
                  r.set(n, i);
                }
              });
            }
          }
        }
        let n = false;
        r.forEach((e, t) => {
          if (e !== s.style[t]) {
            n = true;
          }
        });
        if (n) {
          d();
        }
      });
      c.observe(s, {
        attributes: true,
        childList: false,
        subtree: false,
        attributeOldValue: true,
        attributeFilter: ["style"]
      });
      return () => {
        if (o) {
          u.forEach(e => {
            e.removeEventListener("scroll", l, !i.passive);
          });
          window.removeEventListener("resize", l, !i.passive);
        }
        c.disconnect();
      };
    }, [n, d, r, o]);
    return [l, a, c];
  };
  function nM(e) {
    return e.scrollWidth > e.clientWidth;
  }
  let nP = e => e.clientHeight < e.scrollHeight;
  function nU(e) {
    return nM(e) || nP(e);
  }
  let nz = {
    keepParent: false
  };
  let nH = {};
  let nG = reactCoreLibraryReexport.forwardRef((e, t) => {
    let r = th();
    let {
      prefixCls: n = `${r}-trigger`,
      disabled: i = false,
      popupMotion: o = "slide-up",
      arrow: a,
      mouseEnterDelay: s = 100,
      mouseLeaveDelay: l = 100,
      popupPlacement: u,
      popupAlign: c = nH,
      builtinPlacements: h,
      modifiers: d = {},
      destroyOnHide: f = nz,
      visible: A,
      checkOverflow: g = false,
      defaultVisible: p = false,
      onVisibleChange: m,
      openClassName: y = `${n}-open`,
      className: v,
      udTriggerRef: b,
      getPopupContainer: w,
      popupClassName: C,
      children: E,
      __screenshotAlwaysOpenEnabled: I = false,
      ...B
    } = e;
    let {
      popupOverflowAuto: x = false,
      forcePopupAlign: D = false
    } = d;
    let S = eN();
    let k = reactCoreLibraryReexport.useMemo(() => u && h ? function (e, t, r) {
      let n = e[t] || {};
      return throttledDeepCloneUtil.throttledDeepClone(deepCloneWrapper_1.deepClone(n), r);
    }(h, u, c) : c, [h, c, u]);
    let [T, Q] = tc(p, A, {
      onChange: m
    });
    let R = reactCoreLibraryReexport.useRef(null);
    let F = reactCoreLibraryReexport.useCallback(e => {
      if (e && g) {
        var t;
        let e = (t = R.current) === null || t === undefined ? undefined : t.getRootDomNode();
        let r = typeof g == "function" ? g : nU;
        if (!e || !r(e)) {
          Q(false);
          return;
        }
      }
      Q(e);
    }, [g, Q]);
    let L = false;
    let O = false;
    if (typeof f == "boolean") {
      L = f;
    } else if (f && typeof f == "object") {
      let {
        keepParent: e
      } = f;
      L = e === true;
      O = e === false;
    }
    let N = {
      ...B,
      children: ej(E) ? E({
        visible: T
      }) : E,
      popupClassName: conditionalClassnames.default(C, l === 0 && `${n}-no-entry`),
      destroyPopupOnHide: L,
      autoDestroy: O,
      mouseEnterDelay: s / 1000,
      mouseLeaveDelay: l / 1000,
      prefixCls: n,
      popupMotion: {
        motionName: `${r}-${o}`
      },
      popupAlign: k,
      builtinPlacements: h,
      popupPlacement: u,
      popupVisible: T,
      onPopupVisibleChange: F,
      getPopupContainer: w ?? S
    };
    let [M] = nI(N, {
      disabled: i
    });
    reactCoreLibraryReexport.useImperativeHandle(b, () => ({
      visible: T,
      setVisible: Q,
      forcePopupAlign: () => {
        var e;
        if (R != null && (e = R.current) !== null && e !== undefined) {
          e.forcePopupAlign();
        }
      }
    }), [T, Q]);
    let [P, U] = reactCoreLibraryReexport.useState(false);
    let z = reactCoreLibraryReexport.useCallback(() => U(true), []);
    let [H, G, Z] = nN({
      triggerRef: R,
      popupAlign: k,
      readyObserver: P,
      enableforcePopupAlign: D,
      enablePopupOverflowAuto: x
    });
    eY(() => {
      if (!T && P) {
        U(false);
      }
    }, [T, P]);
    let W = reactCoreLibraryReexport.useMemo(() => tE(R, t), [R, t]);
    if (i) {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, N.children);
    } else {
      M.children = reactCoreLibraryReexport.cloneElement(M.children, throttledPathFilterStringify.throttledPathStr(M, ["eventKey"]));
      return reactCoreLibraryReexport.createElement(popupTriggerCore.Trigger, objectAssignUtil.objectAssign({}, M, {
        popup: reactCoreLibraryReexport.createElement(nx, {
          enablePopupOverflowAuto: x,
          childSize: H,
          popupSize: G,
          viewPointRect: Z,
          prefixCls: M.prefixCls,
          popup: M.popup,
          triggerRef: R,
          popupAlign: k,
          arrow: a
        }),
        className: conditionalClassnames.default(v, T && y),
        popupVisible: T,
        onPopupAlign: z,
        ref: W
      }));
    }
  });
  let nZ = e => {
    let {
      className: t,
      style: r,
      direction: n = "horizontal",
      hasStroke: i = false
    } = e;
    return reactCoreLibraryReexport.createElement("svg", {
      width: n === "horizontal" ? 16 : 8,
      height: n === "horizontal" ? 8 : 16,
      viewBox: n === "horizontal" ? "0 0 16 8" : "0 0 8 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: t,
      style: r
    }, reactCoreLibraryReexport.createElement("path", {
      className: `${t}__content`,
      d: n === "horizontal" ? i ? "M8-.5H0v1c1.553 0 3.033.664 4.065 1.825l2.814 3.166a1.5 1.5 0 002.242 0l2.814-3.166A5.438 5.438 0 0116 .5v-1H8z" : "M4.438 1.993L7.253 5.16a1 1 0 001.494 0l2.815-3.166A5.938 5.938 0 0116 0H0c1.696 0 3.311.725 4.438 1.993z" : i ? "M-.5 8v8h1c0-1.553.664-3.033 1.825-4.065l3.166-2.814a1.5 1.5 0 000-2.242L2.325 4.065A5.438 5.438 0 01.5 0h-1v8z" : "M1.993 11.562L5.16 8.747a1 1 0 000-1.494L1.993 4.438A5.938 5.938 0 010 0v16c0-1.696.725-3.311 1.993-4.438z"
    }));
  };
  let nW = {
    x: 8,
    y: 6
  };
  let {
    useConfig: nj
  } = ((e, t) => {
    let r = reactCoreLibraryReexport.createContext(undefined);
    let {
      set: n,
      get: i,
      subscribe: o
    } = eZ(t);
    return {
      ConfigProvider: r.Provider,
      useConfig: e => {
        let t = reactCoreLibraryReexport.useContext(r);
        return isObjectOrFunctionCheck_1.useSyncExternalStore(o, reactCoreLibraryReexport.useCallback(() => {
          let n = i();
          return e ?? t ?? n;
        }, [t, e]));
      },
      GlobalConfigProvider: e => {
        let {
          value: t
        } = e;
        eY(() => {
          n(t);
        }, [t]);
        return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, undefined);
      },
      setGlobal: n
    };
  })(0, false);
  let nY = e => {
    let {
      offset: t,
      defaultOffset: r
    } = e;
    let n = t;
    if (n === undefined || typeof n != "number") {
      n = r;
    }
    let i = {
      targetOffset: [0, 0],
      ignoreShake: true
    };
    let o = {
      adjustX: true,
      adjustY: true,
      alwaysByViewport: false
    };
    let a = {
      points: ["cr", "cl"],
      overflow: o,
      offset: [-n, 0],
      ...i
    };
    let s = {
      points: ["cl", "cr"],
      overflow: o,
      offset: [n, 0],
      ...i
    };
    let l = {
      points: ["bc", "tc"],
      overflow: o,
      offset: [0, -n],
      ...i
    };
    let u = {
      points: ["tc", "bc"],
      overflow: o,
      offset: [0, n],
      ...i
    };
    let c = {
      points: ["bl", "tl"],
      overflow: o,
      offset: [0, -n],
      ...i
    };
    let h = {
      points: ["tr", "tl"],
      overflow: o,
      offset: [-n, 0],
      ...i
    };
    let d = {
      points: ["br", "tr"],
      overflow: o,
      offset: [0, -n],
      ...i
    };
    let f = {
      points: ["tl", "tr"],
      overflow: o,
      offset: [n, 0],
      ...i
    };
    let A = {
      points: ["tr", "br"],
      overflow: o,
      offset: [0, n],
      ...i
    };
    let g = {
      points: ["bl", "br"],
      overflow: o,
      offset: [n, 0],
      ...i
    };
    return {
      leftCenter: a,
      rightCenter: s,
      topCenter: l,
      bottomCenter: u,
      left: a,
      right: s,
      top: l,
      bottom: u,
      topLeft: c,
      leftTop: h,
      topRight: d,
      rightTop: f,
      bottomRight: A,
      rightBottom: g,
      bottomLeft: {
        points: ["tl", "bl"],
        overflow: o,
        offset: [0, n],
        ...i
      },
      leftBottom: {
        points: ["br", "bl"],
        overflow: o,
        offset: [-n, 0],
        ...i
      }
    };
  };
  let nK = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      action: r,
      popupPlacement: n,
      showArrow: i,
      arrowHasStroke: o,
      popupMotion: a,
      defaultMainAxisOffsetWithoutArrow: s,
      prefixCls: l,
      enableAnimation: u,
      offset: c,
      flip: h,
      shift: d,
      ...f
    } = e;
    let A = reactCoreLibraryReexport.useMemo(() => nY({
      offset: c,
      defaultOffset: (i ? nW.y : 0) + s
    }), [s, c, i]);
    let g = reactCoreLibraryReexport.useMemo(() => i ? {
      size: nW.x,
      safeMarginX: 8,
      safeMarginY: 8,
      content: e => {
        let {
          placement: t
        } = e;
        return reactCoreLibraryReexport.createElement(nZ, {
          className: `${l}__arrow__streamline`,
          style: {
            position: "absolute",
            ...(t === "top" ? {
              transform: "rotate(180deg)",
              left: 0,
              bottom: 0
            } : t === "bottom" ? {
              left: 0,
              top: 0
            } : t === "left" ? {
              transform: "rotate(180deg)",
              right: 0
            } : t === "right" ? {
              left: 0
            } : undefined)
          },
          direction: ["left", "right"].includes(t) ? "vertical" : "horizontal",
          hasStroke: o
        });
      }
    } : undefined, [o, l, i]);
    let p = !nj(nA(u) ? !u : undefined);
    return reactCoreLibraryReexport.createElement(nG, objectAssignUtil.objectAssign({
      ref: t,
      prefixCls: l,
      popupPlacement: n,
      builtinPlacements: A,
      action: r,
      arrow: g,
      popupMotion: p ? a : "noop"
    }, f));
  });
  function nq() {
    return reactContextSelector.useContextSelector(eq, e => e.PopperSidecar) ?? nK;
  }
  let nV = (e, t) => {
    let r = {};
    let n = {
      ...e
    };
    t.forEach(t => {
      if (e && t in e) {
        r[t] = e[t];
        delete n[t];
      }
    });
    return {
      picked: r,
      omitted: n
    };
  };
  let nJ = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      prefixCls: r,
      title: n,
      overlay: i,
      trigger: o = "hover",
      placement: a = "top",
      overlayStyle: s,
      overlayClassName: l,
      hideArrow: u = false,
      showArrow: c = true,
      children: h,
      onOverlayMouseEnter: d,
      onOverlayMouseLeave: f,
      mouseLeaveDelay: A = 0,
      wrapDisabledChildren: g = false,
      arrowHasStroke: p = false,
      ...m
    } = e;
    let y = tf("tooltip", r);
    let v = nq();
    let b = reactCoreLibraryReexport.useCallback(e => {
      if (!e.props.disabled) {
        return e;
      }
      let {
        picked: t,
        omitted: r
      } = nV(e.props.style, ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]);
      let n = {
        display: "inline-block",
        ...t,
        cursor: "not-allowed",
        width: e.props.block ? "100%" : null
      };
      let i = {
        ...r,
        pointerEvents: "none"
      };
      let o = reactCoreLibraryReexport.cloneElement(e, {
        style: i,
        className: null
      });
      return reactCoreLibraryReexport.createElement("span", {
        style: n,
        className: conditionalClassnames.default(e.props.className, `${y()}-disabled-compatible-wrapper`)
      }, o);
    }, [y]);
    let w = reactCoreLibraryReexport.useMemo(() => reactCoreLibraryReexport.isValidElement(h) ? g ? b(h) : h : reactCoreLibraryReexport.createElement("span", {
      className: y("__invalid-children-wrapper")
    }, h), [h, y, b, g]);
    let C = reactCoreLibraryReexport.useMemo(() => reactCoreLibraryReexport.createElement("div", {
      onMouseEnter: d,
      onMouseLeave: f,
      className: y("-content"),
      role: "tooltip"
    }, n ?? i), [y, d, f, i, n]);
    if (n ?? i) {
      return reactCoreLibraryReexport.createElement(v, objectAssignUtil.objectAssign({
        ref: t,
        prefixCls: y(),
        popupPlacement: a,
        action: o,
        popup: C,
        children: w,
        showArrow: "hideArrow" in e ? !u : c,
        arrowHasStroke: p,
        popupMotion: "tooltip-zoom",
        popupStyle: s,
        popupClassName: l,
        mouseLeaveDelay: A,
        defaultMainAxisOffsetWithoutArrow: 4
      }, m, {
        __screenshotAlwaysOpenEnabled: true
      }));
    } else {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, h);
    }
  });
  var nX = "u14t3ns0";
  let n$ = function (e, t) {
    var r = arguments.length;
    var n = Array(r > 2 ? r - 2 : 0);
    var i = 2;
    for (; i < r; i++) {
      n[i - 2] = arguments[i];
    }
    if (t == null || !t.sx || typeof e != "string") {
      return reactCoreLibraryReexport.createElement(e, t, ...n);
    }
    let {
      sx: o,
      className: a,
      ...s
    } = t;
    return reactCoreLibraryReexport.createElement(e, {
      className: conditionalClassnames.default(a, e8(o)),
      ...s
    }, ...n);
  };
  var n0 = "uhuq1gn";
  let n1 = {
    props: {
      Be2twd7: "uag92jf",
      Bg96gwp: "u1qho9m7",
      Bhrd7zp: n0
    }
  };
  n1.alias = "ud-typography-title-0";
  let n2 = {
    props: {
      Be2twd7: "u1rt2boy",
      Bg96gwp: "u1h5fybs",
      Bhrd7zp: n0
    }
  };
  n2.alias = "ud-typography-title-1";
  let n5 = e8.compose(e7, {
    props: {
      Be2twd7: "ue5j1ua",
      Bg96gwp: "upfng1i"
    }
  });
  n5.alias = "ud-typography-title-2";
  let n3 = e8.compose(e7, {
    props: {
      Be2twd7: "ug38ndl",
      Bg96gwp: "u336tjw"
    }
  });
  n3.alias = "ud-typography-title-3";
  var n4 = "u4ybsrx";
  var n6 = "u8xlz6g";
  let n8 = e8.compose(e7, {
    props: {
      Be2twd7: n4,
      Bg96gwp: n6
    }
  });
  n8.alias = "ud-typography-title-4";
  let n7 = e8.compose(e9, {
    props: {
      Be2twd7: n4,
      Bg96gwp: n6
    }
  });
  n7.alias = "ud-typography-title-5";
  var n9 = "u1ugzwwg";
  let ie = e8.compose({
    props: {
      Be2twd7: n9,
      Bg96gwp: "u1n95isl"
    }
  }, e9);
  ie.alias = "ud-typography-body-2";
  let it = e8.compose(ie, e7);
  it.alias = "ud-typography-caption-0";
  let ir = e8.compose({
    props: {
      Be2twd7: "unmn6fi",
      Bg96gwp: "u104wqfl"
    }
  }, e7);
  ir.alias = "ud-typography-caption-1";
  let ii = e8.compose({
    props: {
      Be2twd7: n9,
      Bg96gwp: "ul9ro5r",
      Bsolrrw: "uee9c6b",
      o2r97i: "u1hsvuyd"
    }
  }, e7);
  ii.alias = "ud-typography-caption-1";
  var io = "u1a3p1vp";
  var ia = "u1cmbuwj";
  let is = {
    props: {
      Biipf1f: "uiy7161",
      Huce71: "uz5stix",
      Bpg54ce: io,
      ygn44y: ia
    }
  };
  let il = {
    props: {
      Bpg54ce: io,
      ygn44y: ia,
      mc9l5x: "u1rvi9lw",
      Bqc2kz9: "ui1h9r9",
      Huce71: "u6juhto",
      Biipf1f: "u1bftd5k"
    }
  };
  let iu = reactCoreLibraryReexport.forwardRef;
  let ic = reactCoreLibraryReexport.forwardRef;
  let ih = e => {
    let {
      title: t,
      ...r
    } = e;
    return reactCoreLibraryReexport.createElement(nJ, objectAssignUtil.objectAssign({
      title: t,
      checkOverflow: true
    }, r));
  };
  let id = (e, t) => ({
    ...e,
    className: conditionalClassnames.default(t.className, e.className),
    style: reactCoreLibraryReexport.useMemo(() => ({
      ...t.style,
      ...e.style
    }), [t.style, e.style]),
    sx: reactCoreLibraryReexport.useMemo(() => [t.sx, e.sx], [t.sx, e.sx])
  });
  let iA = {
    title0: n1,
    title1: n2,
    title2: n5,
    title3: n3,
    title4: n8,
    title5: n7,
    headline: tt,
    caption0: it,
    caption1: ir,
    caption1Hack: ii,
    body0: te,
    body2: ie
  };
  let ig = ic((e, t) => {
    let {
      as: n = "span",
      variant: i = "body0",
      lineClamp: o,
      disabled: a = false,
      tooltipProps: s,
      alignment: l,
      italic: u = false,
      ...c
    } = e;
    let {
      children: h
    } = c;
    let d = !nA(o);
    let f = !d && o <= 1;
    let A = !f && !d;
    let g = tf("text");
    let p = reactContextSelector.useContextSelector(eq, e => e.textOverflowPopperSidecar) ?? ih;
    let m = id(c, {
      className: g(),
      sx: reactCoreLibraryReexport.useMemo(() => [{
        props: {
          onut5h: "uhx3js9",
          Btd35i7: "uokg9q4"
        }
      }, i !== "plain" && iA[i], n === "span" && f && {
        props: {
          mc9l5x: nX
        }
      }, f ? is : A ? il : undefined, l && {
        start: {
          props: {
            fsow6f: "upgzoln"
          }
        },
        center: {
          props: {
            fsow6f: "u17mccla"
          }
        },
        end: {
          props: {
            fsow6f: "u12ymhq5"
          }
        },
        justify: {
          props: {
            fsow6f: "u1j59e10"
          }
        }
      }[l], u && {
        props: {
          B80ckks: "u1j4dglz"
        }
      }, a && {
        props: {
          sj55zd: "uns1q8e",
          Bceei9c: "udrzuqr",
          famaaq: "u1xqy1su"
        }
      }], [n, l, a, u, A, f, i]),
      style: {
        WebkitLineClamp: A ? o : undefined
      }
    });
    let y = n$(n, objectAssignUtil.objectAssign({
      ref: t
    }, m));
    if (d) {
      return y;
    } else {
      return n$(p, objectAssignUtil.objectAssign({
        title: h,
        checkOverflow: f ? nM : nP
      }, s), y);
    }
  });
  let ip = {
    props: {
      Bg96gwp: "u1qumt79",
      Bhrd7zp: "uf5ikls",
      Be2twd7: "ujoy568",
      Bh6795r: "uqerorx",
      Bf4jedk: "u10tiqix"
    }
  };
  let im = e => {
    let {
      showEllipsis: t,
      title: r,
      style: n
    } = e;
    let {
      mode: i
    } = reactCoreLibraryReexport.useContext(rf);
    let {
      prefixCls: o
    } = reactCoreLibraryReexport.useContext(na);
    if (t) {
      return reactCoreLibraryReexport.createElement(ig, {
        as: "div",
        className: conditionalClassnames.default(`${o}-item-title-content`, `${o}-item-title-content-text-overflow`),
        style: n,
        sx: [ip],
        lineClamp: i === "vertical" || i === "inline" ? 2 : 1
      }, r);
    } else {
      return reactCoreLibraryReexport.createElement(ig, {
        as: "div",
        style: n,
        className: `${o}-item-title-content`,
        sx: [ip]
      }, r);
    }
  };
  var iy = "u1guyajx";
  let iv = e8.compose({
    props: {
      B7ck84d: "u1ewtqcl",
      B6of3ja: "u1lmfglv",
      t21cq0: "uibjyge",
      jrapky: "u1abmfm4",
      Frg6f3: "u9yszdx",
      z8tnut: "u1nbblvp",
      z189sj: "uifp7yv",
      Byoj8tv: "u1ov4xf1",
      uwmqm3: "u1asdtw4"
    }
  }, {
    props: {
      mc9l5x: "u22iagw"
    }
  });
  let ib = iu((e, t) => n$("span", objectAssignUtil.objectAssign({
    ref: t
  }, id(e, {
    className: tf("empty-inline-element")(""),
    sx: [{
      props: {
        a9b677: "u1j7mq28",
        Bpg54ce: io,
        mc9l5x: nX
      }
    }]
  })), "\xA0"));
  let iw = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      beforeProps: r,
      children: n,
      className: i,
      sx: o = [],
      ...a
    } = e;
    let s = (() => {
      if (!r) {
        return null;
      }
      let {
        className: e,
        children: t,
        sx: n = [],
        ...i
      } = r;
      return n$("div", objectAssignUtil.objectAssign({
        className: conditionalClassnames.default(e, e8(iv, {
          props: {
            Bt984gj: iy,
            Bh6795r: "u1jhi6b8",
            Bnnss6s: nw,
            xawz: "u1rmlqtg"
          }
        }, ...n))
      }, i), t, n$(ib, null));
    })();
    return n$("div", objectAssignUtil.objectAssign({
      className: conditionalClassnames.default(i, e8(iv, {
        props: {
          Bt984gj: iy
        }
      }, ...o)),
      ref: t
    }, a), s, n, n$(ib, null));
  });
  let iC = e => {
    let {
      isSelected: t
    } = e;
    let {
      prefixCls: r,
      mode: n,
      inlineCollapsed: i,
      showCheckmark: o,
      selectable: a
    } = reactCoreLibraryReexport.useContext(na);
    if (a && o && n === "normal" && !i) {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement("span", {
        className: e8({
          props: {
            a9b677: "u64fuq3",
            Bnnss6s: nw
          }
        })
      }), t && reactCoreLibraryReexport.createElement(translateOutlinedIcon_1.TranslateOutlinedIcon, {
        className: `${r}-item-suffix-icon`
      }));
    } else {
      return null;
    }
  };
  let iE = e => {
    let {
      mode: t,
      inlineCollapsed: r = false,
      className: n,
      prefixCls: i,
      expandIcon: o,
      textOverflow: a = t !== "normal",
      getPopupContainer: s = () => document.body,
      subMenuCloseDelay: l,
      subMenuOpenDelay: u,
      inlineIndent: c = 28,
      showCheckmark: h = true,
      onClick: d,
      selectable: f,
      builtinPlacements: A,
      overflowedIndicator: g,
      selectedKeys: p,
      defaultSelectedKeys: m
    } = e;
    let y = th();
    let v = reactCoreLibraryReexport.useContext(no);
    let b = reactCoreLibraryReexport.useContext(ng);
    let w = reactCoreLibraryReexport.useMemo(() => nA(t) ? t : b ? "normal" : "vertical", [b, t]);
    let C = reactCoreLibraryReexport.useMemo(() => A || function (e) {
      let t = nb(e);
      let r = {
        targetOffset: [0, 0],
        ignoreShake: true,
        overflow: {
          adjustX: 1,
          adjustY: 1,
          alwaysByViewport: true
        }
      };
      return {
        topLeft: {
          points: ["bl", "tl"],
          offset: t,
          ...r
        },
        bottomLeft: {
          points: ["tl", "bl"],
          offset: t,
          ...r
        },
        leftTop: {
          points: ["tr", "tl"],
          offset: t,
          ...r
        },
        rightTop: {
          points: ["tl", "tr"],
          offset: t,
          ...r
        },
        left: {
          points: ["cr", "cl"],
          offset: t,
          ...r
        },
        right: {
          points: ["cl", "cr"],
          offset: t,
          ...r
        },
        top: {
          points: ["bc", "tc"],
          offset: t,
          ...r
        },
        bottom: {
          points: ["tc", "bc"],
          offset: t,
          ...r
        },
        topRight: {
          points: ["br", "tr"],
          offset: t,
          ...r
        },
        bottomRight: {
          points: ["tr", "br"],
          offset: t,
          ...r
        },
        rightBottom: {
          points: ["bl", "br"],
          offset: t,
          ...r
        },
        leftBottom: {
          points: ["br", "bl"],
          offset: t,
          ...r
        }
      };
    }(w), [A, w]);
    let E = reactCoreLibraryReexport.useMemo(() => nA(f) ? f : !!nA(p) || !!nA(m) || !b, [m, b, f, p]);
    let I = tf(w === "normal" ? "menu-normal" : "menu");
    let B = i || I();
    let x = v ? v.siderCollapsed : r;
    let {
      children: D
    } = e;
    let S = reactCoreLibraryReexport.Children.toArray(D).find(nf);
    let k = conditionalClassnames.default(n, b == null ? undefined : b.className, {
      [`${B}-inline-collapsed`]: x,
      [`${B}-include-subMenu`]: S
    }, "ud-scrollbar");
    let T = {
      horizontal: {
        motionName: `${y}-slide-up`
      },
      inline: nh(y),
      other: {
        motionName: `${y}-zoom-big`
      }
    };
    let Q = w === "normal" ? "vertical" : w;
    return reactCoreLibraryReexport.createElement(na.Provider, {
      value: reactCoreLibraryReexport.useMemo(() => ({
        prefixCls: B,
        inlineCollapsed: x,
        mode: w,
        selectable: E,
        textOverflow: a,
        firstLevel: true,
        showCheckmark: h
      }), [x, w, E, B, h, a])
    }, reactCoreLibraryReexport.createElement(ni, objectAssignUtil.objectAssign({
      builtinPlacements: C,
      getPopupContainer: s
    }, tD(e, ["showCheckmark", "textOverflow"]), {
      overflowedIndicator: g ?? reactCoreLibraryReexport.createElement(nv, null),
      onClick: reactCoreLibraryReexport.useCallback(e => {
        if (ej(d)) {
          d(e);
        }
        if (ej(b == null ? undefined : b.onClick)) {
          if (b != null) {
            b.onClick(e);
          }
        }
      }, [b, d]),
      mode: Q,
      selectable: E,
      inlineCollapsed: x,
      className: k,
      prefixCls: B,
      direction: "ltr",
      expandIcon: () => reactCoreLibraryReexport.createElement("span", {
        className: `${B}-submenu-arrow`
      }, o || reactCoreLibraryReexport.createElement(rightBoldOutlinedIcon.RightBoldOutlined, {
        className: `${B}-submenu-arrow-icon`
      })),
      defaultMotions: T
    }, nd(l, u), {
      inlineIndent: c
    })));
  };
  iE.Item = e => {
    let {
      className: t,
      children: r,
      title: n,
      icon: i,
      textOverflow: o,
      disabled: a,
      ...s
    } = e;
    let {
      prefixCls: l,
      inlineCollapsed: u,
      textOverflow: c,
      firstLevel: h,
      mode: d
    } = reactCoreLibraryReexport.useContext(na);
    let f = n;
    if (n === undefined) {
      f = h ? r : "";
    } else if (n === false) {
      f = "";
    }
    let A = {
      title: f
    };
    if (!u) {
      A.visible = false;
    }
    let g = function e(t, r = {}) {
      let {
        keepEmpty: n = false
      } = r;
      let i = [];
      reactCoreLibraryReexport.Children.forEach(t, t => {
        if (t != null || n) {
          if (Array.isArray(t)) {
            i = i.concat(e(t));
          } else if (reactIsTypeCheckersReexport.isFragment(t) && t.props) {
            i = i.concat(e(t.props.children));
          } else {
            i.push(t);
          }
        }
      });
      return i;
    }(r).length;
    let p = conditionalClassnames.default(t, `${l}-item--root-${d}`, {
      [`${l}-item-only-child`]: (i ? g + 1 : g) === 1
    }, e8(d === "normal" && te));
    return reactCoreLibraryReexport.createElement(nJ, objectAssignUtil.objectAssign({}, A, {
      overlayClassName: `${l}-inline-collapsed-tooltip`,
      placement: "right"
    }), reactCoreLibraryReexport.createElement(rN, objectAssignUtil.objectAssign({}, s, {
      className: p,
      title: typeof n == "string" ? n : undefined,
      itemIcon: iC,
      disabled: a
    }), i && reactCoreLibraryReexport.createElement("div", {
      className: conditionalClassnames.default(`${l}-icon-wrap`, a && `${l}-icon-wrap-disabled`)
    }, i), (() => {
      let e = u && h;
      if (e && !i && typeof r == "string") {
        return reactCoreLibraryReexport.createElement("div", {
          className: `${l}-inline-collapsed-noicon`
        }, r.charAt(0));
      } else {
        return reactCoreLibraryReexport.createElement(im, {
          style: e ? {
            width: 0,
            overflow: "hidden"
          } : {},
          showEllipsis: !e && (o ?? c),
          title: r
        });
      }
    })(), reactCoreLibraryReexport.createElement(ib, null), reactCoreLibraryReexport.createElement(nm, null)));
  };
  iE.SubMenu = e => {
    let {
      icon: t,
      title: r,
      className: n,
      popupClassName: i,
      children: o,
      textOverflow: a,
      disabled: s,
      popupOffset: l
    } = e;
    let u = reactCoreLibraryReexport.useContext(na);
    let {
      mode: c
    } = reactCoreLibraryReexport.useContext(rf);
    let {
      inlineCollapsed: h,
      textOverflow: d,
      prefixCls: f,
      mode: A
    } = u;
    let g = ry();
    let p = conditionalClassnames.default(n, `${f}__submenu--root-${A}`, A === "normal" && e8(te));
    let m = nb(A === "normal" ? "normal" : c);
    let y = reactCoreLibraryReexport.Children.toArray(o).find(nf);
    let v = conditionalClassnames.default(f, {
      [`${f}-submenu-popup-include-subMenu`]: y
    }, i, `${f}__submenu--root-${A}`);
    return reactCoreLibraryReexport.createElement(na.Provider, {
      value: reactCoreLibraryReexport.useMemo(() => ({
        ...u,
        firstLevel: false
      }), [u])
    }, reactCoreLibraryReexport.createElement(rJ, objectAssignUtil.objectAssign({}, tD(e, ["icon", "textOverflow", "className"]), {
      popupOffset: l ?? m,
      title: reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, t && reactCoreLibraryReexport.createElement("div", {
        className: conditionalClassnames.default(`${f}-icon-wrap`, s && `${f}-icon-wrap-disabled`)
      }, t), !h || g.length ? reactCoreLibraryReexport.createElement(im, {
        showEllipsis: a ?? d,
        title: r
      }) : t ? null : typeof r == "string" ? reactCoreLibraryReexport.createElement("div", {
        className: `${f}-inline-collapsed-noicon`
      }, r.charAt(0)) : undefined, reactCoreLibraryReexport.createElement(ib, null), reactCoreLibraryReexport.createElement(nm, null)),
      className: p,
      popupClassName: v
    })));
  };
  iE.Divider = rC;
  iE.ItemGroup = e => {
    let {
      title: t,
      ...r
    } = e;
    return reactCoreLibraryReexport.createElement(rw, objectAssignUtil.objectAssign({
      title: reactCoreLibraryReexport.createElement("div", {
        className: conditionalClassnames.default(e8(tt))
      }, t)
    }, r));
  };
  iE.__UD_MENU = true;
  var emotionStylesheetManager = require("emotion-stylesheet-manager") /*id: 399882*/;
  var stringHashMurmur3 = require("string-hash-murmur3") /*id: 138302*/;
  let ix = require("emotion-stylesheet-factory") /*id: 992521*/.createEmotionSheet({
    key: "universe-design"
  });
  let iD = reactCoreLibraryReexport.createContext(ix);
  let iS = () => reactCoreLibraryReexport.useContext(iD);
  let ik = {};
  let i_ = e => {
    let {
      name: t,
      timeout: r,
      useCssScope: n
    } = e;
    let i = 0;
    let o = 0;
    let a = 0;
    if (r) {
      if (typeof r == "number") {
        i = r;
        o = r;
        a = r;
      } else {
        i = r.appear ?? 0;
        o = r.enter ?? 0;
        a = r.exit ?? 0;
      }
    }
    return {
      classNames: n(t)(`-${i}-${o}-${a}`),
      timeout: {
        appear: i,
        enter: o,
        exit: a
      }
    };
  };
  let iT = "cubic-bezier(0.34, 0.69, 0.1, 1)";
  c = {
    name: e => {
      let {
        placement: t
      } = e;
      return `slide-up-down-${t}`;
    },
    styles: e => {
      let {
        placement: t
      } = e;
      let [r, n] = t.split("-");
      let i = "0";
      if (r === "bottom" || r.match(/right|left/) && n === "start") {
        i = "-8px";
      } else if (r === "top" || r.match(/right|left/) && n === "end") {
        i = "8px";
      }
      return {
        appear: `opacity: 0;transform: translateY(${i});`,
        appearActive: "opacity: 1;transform: translateY(0);",
        appearDone: "opacity: 1;transform: translateY(0);",
        enter: `opacity: 0;transform: translateY(${i});`,
        enterActive: "opacity: 1;transform: translateY(0);",
        enterDone: "opacity: 1;transform: translateY(0);",
        exit: "opacity: 1;transform: translateY(0);pointer-events: none;",
        exitActive: `opacity: 0;transform: translateY(${i});`,
        exitDone: `opacity: 0;transform: translateY(${i});pointer-events: auto;`
      };
    },
    transitions: {
      appearActive: e => `opacity ${e}ms ${iT}, transform ${e}ms ${iT}`,
      enterActive: e => `opacity ${e}ms ${iT}, transform ${e}ms ${iT}`,
      exitActive: e => `opacity ${e}ms ${iT}, transform ${e}ms ${iT}`
    },
    useCssScope: tf
  };
  let iQ = e => {
    let {
      transitions: t,
      extraProps: r,
      ...n
    } = e;
    let {
      timeout: i
    } = e;
    let {
      classNames: o,
      timeout: a
    } = i_({
      timeout: i,
      name: (() => {
        if (ej(c.name)) {
          if (!r) {
            throw Error("`config.name` is function, but extraProps is undefined.");
          }
          return c.name(r);
        }
        return c.name;
      })(),
      useCssScope: c.useCssScope
    });
    let s = (() => {
      if (ej(c.styles)) {
        if (!r) {
          throw Error("`config.styles` is function, but extraProps is undefined.");
        }
        return c.styles(r);
      }
      return c.styles;
    })();
    (function (e, {
      disabled: t = false,
      atLeastOne: r = false
    } = {}) {
      let n = reactCoreLibraryReexport.useMemo(() => t ? {
        name: "",
        styles: ""
      } : {
        name: stringHashMurmur3.murmurHash32(e),
        styles: e
      }, [e, t]);
      let i = iS();
      let o = reactCoreLibraryReexport.useCallback(() => {
        if (t) {
          return;
        }
        let e = `${i.key}-global`;
        if (!ik[n.name]) {
          let t = new emotionStylesheetManager.StyleSheetManager({
            key: e,
            nonce: i.sheet.nonce,
            container: i.sheet.container,
            speedy: i.sheet.isSpeedy
          });
          ik[n.name] = {
            injectedCount: 0,
            sheet: t
          };
          if (i.sheet.tags.length) {
            [t.before] = i.sheet.tags;
          }
          i.insert("", n, t, false);
        }
      }, [i, t, n]);
      o();
      eY(() => {
        if (t) {
          return;
        }
        o();
        let e = ik[n.name];
        let {
          sheet: i
        } = e;
        e.injectedCount += 1;
        return () => {
          e.injectedCount -= 1;
          if (e.injectedCount === 0 && !r) {
            i.flush();
            delete ik[n.name];
          }
        };
      }, [r, t, o, n.name]);
    })(`
  .${o}-appear {
    ${s.appear}
  }
  .${o}-enter {
    ${s.enter}
  }
  .${o}-exit-done {
    ${s.exitDone}
  }
  
  .${o}-enter-active {
    ${s.enterActive}
    transition: ${c.transitions.enterActive(a.enter)}${t != null && t.enterActive ? `, ${t.enterActive(a.enter)}` : ""};
  }
  .${o}-appear-active {
    ${s.appearActive}
    transition: ${c.transitions.appearActive(a.appear)}${t != null && t.appearActive ? `, ${t.appearActive(a.appear)}` : ""};
  }

  .${o}-appear-done {
    ${s.appearDone}
  }
  .${o}-enter-done {
    ${s.enterDone}
  }
  .${o}-exit {
    ${s.exit}
  }
  
  .${o}-exit-active {
    ${s.exitActive}
    transition: ${c.transitions.exitActive(a.exit)}${t != null && t.exitActive ? `, ${t.exitActive(a.exit)}` : ""};
  }`, {
      atLeastOne: true
    });
    return reactCoreLibraryReexport.createElement(cssTransitionComponent.CssTransition, objectAssignUtil.objectAssign({}, n, {
      classNames: o,
      timeout: a
    }));
  };
  let iR = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      prefixCls: r,
      align: n,
      placement: i = "bottomLeft",
      showAction: o,
      hideAction: a,
      overlayClassName: s,
      overlayStyle: l,
      trigger: u = "hover",
      disabled: c = false,
      onOverlayClick: h,
      overlay: d,
      children: f,
      udTriggerRef: A,
      ...g
    } = e;
    let p = tf("dropdown");
    let m = nq();
    let y = r || p();
    let v = reactCoreLibraryReexport.useRef(null);
    let b = reactCoreLibraryReexport.useMemo(() => tE(v, A), [v, A]);
    let w = reactCoreLibraryReexport.useMemo(() => ej(d) ? d() : d, [d]);
    let C = reactCoreLibraryReexport.useCallback(e => {
      var t;
      if (ej(h)) {
        h(e);
      }
      if (!e || !("domEvent" in e) || !e.domEvent.isDefaultPrevented()) {
        if ((t = v.current) !== null && t !== undefined) {
          t.setVisible(false);
        }
      }
    }, [h]);
    let E = reactCoreLibraryReexport.createElement(ng.Provider, {
      value: reactCoreLibraryReexport.useMemo(() => ({
        className: `${y}__overlay`,
        onClick: C
      }), [C, y])
    }, w);
    let I = u.indexOf("contextMenu") !== -1;
    return reactCoreLibraryReexport.createElement(m, objectAssignUtil.objectAssign({}, g, {
      disabled: c,
      alignPoint: I,
      prefixCls: y,
      ref: t,
      udTriggerRef: b,
      popupClassName: s,
      popupStyle: l,
      action: u,
      showAction: o,
      hideAction: a,
      popupPlacement: i,
      popupAlign: n,
      popupMotion: "slide-up",
      popup: E,
      showArrow: false,
      arrowHasStroke: false,
      Transition: iQ,
      defaultMainAxisOffsetWithoutArrow: 4,
      __screenshotAlwaysOpenEnabled: true
    }), reactCoreLibraryReexport.useCallback(e => {
      let {
        visible: t
      } = e;
      if ("selected" in f.props) {
        return f;
      } else {
        return reactCoreLibraryReexport.cloneElement(f, {
          selected: t
        });
      }
    }, [f]));
  });
  var moreOutlinedIconComponent = require("more-outlined-icon-component") /*id: 8155*/;
  iR.Button = e => {
    let {
      type: t,
      disabled: r,
      htmlType: n,
      children: i,
      overlay: o,
      trigger: a,
      align: s,
      visible: l,
      defaultVisible: u,
      placement: c = "bottomRight",
      href: h,
      icon: d = reactCoreLibraryReexport.createElement(moreOutlinedIconComponent.MoreOutlinedIcon, null),
      title: f,
      className: A,
      style: g,
      getPopupContainer: p,
      onVisibleChange: m,
      buttonsRender: y,
      onClick: v,
      size: b,
      ...w
    } = e;
    let C = tf("dropdown-button");
    let E = {
      align: s,
      overlay: o,
      disabled: r,
      visible: l,
      defaultVisible: u,
      placement: c,
      trigger: a,
      onVisibleChange: m,
      getPopupContainer: p,
      ...w
    };
    let I = reactCoreLibraryReexport.createElement(tT, {
      size: b,
      type: t,
      disabled: r,
      onClick: v,
      htmlType: n,
      href: h,
      title: f
    }, i);
    let B = reactCoreLibraryReexport.createElement(tT, {
      size: b,
      disabled: r,
      type: t,
      shape: "square",
      icon: d
    });
    let [x, D] = y ? y([I, B]) : [I, B];
    return reactCoreLibraryReexport.createElement("div", {
      style: g,
      className: conditionalClassnames.default(C(), A)
    }, x, reactCoreLibraryReexport.createElement(iR, E, D));
  };
  function iL(e, t = 0) {
    if (e instanceof MouseEvent) {
      return e;
    } else if (e.type.startsWith("touch") && e instanceof TouchEvent) {
      return e.changedTouches[t];
    } else {
      return iL(e.nativeEvent, t);
    }
  }
  function iO(e) {
    var t = e.sharkOffset;
    var r = t === undefined ? 5 : t;
    var n = e.ButtonComponent;
    var i = typescriptHelpers_1.restObject(e, ["sharkOffset", "ButtonComponent"]);
    var o = typescriptHelpers_1.readIterator(reactCoreLibraryReexport.useState(), 2);
    var a = o[0];
    var s = o[1];
    var l = typescriptHelpers_1.readIterator(reactCoreLibraryReexport.useState(), 2);
    var u = l[0];
    var c = l[1];
    var h = typescriptHelpers_1.readIterator(reactCoreLibraryReexport.useState(false), 2);
    var d = h[0];
    var f = h[1];
    var A = typescriptHelpers_1.readIterator(reactCoreLibraryReexport.useState(), 2);
    var g = A[0];
    var p = A[1];
    var y = n || tT;
    var v = i.hideMobileHoverBg;
    var b = v === undefined || v;
    function w(e) {
      var t = iL(e);
      var r = t.clientX;
      var n = t.clientY;
      s(r);
      c(n);
      if (rl.isMobile && b) {
        f(false);
      }
    }
    function C(e) {
      var t = iL(e);
      var n = t.clientX;
      var i = t.clientY;
      if (a && Math.abs(a - n) > r || u && Math.abs(u - i) > r) {
        p(true);
        s(undefined);
        c(undefined);
      }
    }
    function E() {
      p(undefined);
      s(undefined);
      c(undefined);
      if (rl.isMobile && b) {
        f(true);
      }
    }
    return reactCoreLibraryReexport.createElement(y, typescriptHelpers_1.assign({}, i, {
      className: H(i.className, "ghost-btn", {
        disabled: g,
        "hover-bg-hidden": d
      }),
      onTouchStart: w,
      onTouchMove: C,
      onTouchEnd: E,
      onMouseDown: w,
      onMouseMove: C,
      onMouseUp: E
    }));
  }
  var keyboardEventUtils = require("keyboard-event-utils") /*id: 623958*/;
  var debounceUtil = require("debounce-util") /*id: 783084*/;
  let iP = e => e ? typeof e == "function" ? e() : e : null;
  let iU = {
    success: succeedFilledIcon.SucceedFilledIcon,
    warning: warningFilledIcon.WarningFilledIcon,
    info: infoFilledIcon.InfoFilledIcon,
    error: errorFilledIcon.ErrorFilledIcon
  };
  let iz = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      mode: r = "normal",
      prefixCls: n,
      title: i,
      content: o,
      overlayClassName: a,
      icon: s,
      mouseLeaveDelay: l = 100,
      ...u
    } = e;
    let c = tf("popover", n);
    let h = c("__overlay-content");
    let d = reactCoreLibraryReexport.useMemo(() => {
      if (!s) {
        return;
      }
      let e = {
        props: {
          z189sj: "u19lj068"
        }
      };
      let t = {
        props: {
          Be2twd7: n4,
          Bg96gwp: "uez10in",
          qb2dma: "u7nlbp4"
        }
      };
      if (typeof s == "string" && (s === "success" || s === "warning" || s === "info" || s === "error")) {
        let r = iU[s];
        return {
          className: `${c()}-icon-${s}`,
          sx: [e],
          children: reactCoreLibraryReexport.createElement(r, {
            className: e8(t)
          })
        };
      }
      return {
        className: `${c()}-icon-customer`,
        sx: [e],
        children: reactCoreLibraryReexport.createElement("span", {
          className: conditionalClassnames.default(`${c()}-icon-customer-wrapper`, e8(t))
        }, s)
      };
    }, [c, s]);
    let f = reactCoreLibraryReexport.useMemo(() => i || o ? r === "pure" ? o && reactCoreLibraryReexport.createElement("div", {
      className: h
    }, iP(o)) : reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, i && reactCoreLibraryReexport.createElement(iw, {
      className: c("__overlay-title"),
      sx: [iv, tt, {
        props: {
          Bt984gj: iy
        }
      }],
      beforeProps: d
    }, iP(i)), o && reactCoreLibraryReexport.createElement("div", {
      className: h
    }, iP(o))) : null, [o, h, c, r, i, d]);
    return reactCoreLibraryReexport.createElement(nJ, objectAssignUtil.objectAssign({
      ref: t,
      prefixCls: c(),
      overlay: f,
      overlayClassName: conditionalClassnames.default(a, c(`--mode-${r}`)),
      mouseLeaveDelay: l,
      arrowHasStroke: true
    }, u));
  });
  function iH(e) {
    var t;
    var r;
    var n = e.value;
    var i = e.editable;
    var o = e.active;
    var a = e.ArrowIcon;
    var s = e.eventBind;
    var l = e.setButtonRef;
    var u = H(codeBlockConstants_1.codeBlockClassNames.HEADER_BTN, ((t = {})[codeBlockConstants_1.codeBlockClassNames.HEADER_BTN + "-disable"] = !i, t));
    var c = H(codeBlockConstants_1.codeBlockClassNames.HEADER_BTN + "-icon", ((r = {})[codeBlockConstants_1.codeBlockClassNames.HEADER_BTN + "-icon-active"] = o, r));
    return reactCoreLibraryReexport.createElement("button", typescriptHelpers_1.assign({
      className: u,
      ref: l,
      type: "button"
    }, i ? s : {}), reactCoreLibraryReexport.createElement("span", null, decodeURI(n) || codeBlockConstants_1.defaultLanguageName), i && reactCoreLibraryReexport.createElement(a, {
      className: c
    }));
  }
  function iG() {
    return (iG = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) {
          if (Object.prototype.hasOwnProperty.call(r, n)) {
            e[n] = r[n];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  var iZ = ({
    styles: e = {},
    ...t
  }) => reactCoreLibraryReexport.createElement("svg", iG({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "data-icon": "SearchOutlineOutlined"
  }, t), reactCoreLibraryReexport.createElement("path", {
    d: "M16.473 17.887A9.46 9.46 0 0110.5 20a9.5 9.5 0 119.5-9.5 9.46 9.46 0 01-2.113 5.973l3.773 3.773a.996.996 0 01-.007 1.407.996.996 0 01-1.407.007l-3.773-3.773zM18 10.5a7.5 7.5 0 10-15 0 7.5 7.5 0 0015 0z",
    fill: "currentColor"
  }));
  function iW() {
    return (iW = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) {
          if (Object.prototype.hasOwnProperty.call(r, n)) {
            e[n] = r[n];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  var ij = ({
    styles: e = {},
    ...t
  }) => reactCoreLibraryReexport.createElement("svg", iW({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "data-icon": "ListCheckBoldOutlined"
  }, t), reactCoreLibraryReexport.createElement("path", {
    d: "M4 11.293a1 1 0 011.414 0l4.072 4.07 9.07-9.07a1 1 0 011.415 0l.706.707a1 1 0 010 1.414L10.193 18.9a1 1 0 01-1.415 0l-5.485-5.485a1 1 0 010-1.414L4 11.293z",
    fill: "currentColor"
  }));
  (h = p ||= {})[h.Normal = 0] = "Normal";
  h[h.Small = 1] = "Small";
  var iY = {
    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
    wheelSpeed: 1,
    wheelPropagation: false,
    swipeEasing: true,
    scrollingThreshold: 1000,
    useBothWheelAxes: false,
    suppressScrollX: false,
    suppressScrollY: false,
    scrollXMarginOffset: 0,
    scrollYMarginOffset: 0,
    minScrollbarLength: 20
  };
  var iK = {
    "ps-scroll-y": "onScrollY",
    "ps-scroll-x": "onScrollX",
    "ps-scroll-up": "onScrollUp",
    "ps-scroll-down": "onScrollDown",
    "ps-scroll-left": "onScrollLeft",
    "ps-scroll-right": "onScrollRight",
    "ps-y-reach-start": "onYReachStart",
    "ps-y-reach-end": "onYReachEnd",
    "ps-x-reach-start": "onXReachStart",
    "ps-x-reach-end": "onXReachEnd"
  };
  Object.freeze(iK);
  var iq = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.ps = null;
      t.bindDragStart = function () {
        if (t.container) {
          var e = t.container.querySelector(".ps__thumb-y");
          if (e) {
            e.addEventListener("mousedown", t.handleYDragStart);
            e.addEventListener("touchstart", t.handleYDragStart);
          }
        }
      };
      t.unbindDragStart = function () {
        if (t.container) {
          var e = t.container.querySelector(".ps__thumb-y");
          if (e) {
            e.removeEventListener("mousedown", t.handleYDragStart);
            e.removeEventListener("touchstart", t.handleYDragStart);
          }
        }
      };
      t.bindDragEnd = function () {
        document.addEventListener("mouseup", t.handleYDragEnd);
        document.addEventListener("touchend", t.handleYDragEnd);
      };
      t.unbindDragEnd = function () {
        document.removeEventListener("mouseup", t.handleYDragEnd);
        document.removeEventListener("touchend", t.handleYDragEnd);
      };
      t.handleRef = function (e) {
        t.container = e;
        if (t.props.containerRef) {
          t.props.containerRef(e);
        }
      };
      t.handleYDragStart = function (e) {
        var r = t.props.onYDragStart;
        if (r) {
          r(e);
        }
        t.bindDragEnd();
        e.stopPropagation();
      };
      t.handleYDragEnd = function (e) {
        var r = t.props.onYDragEnd;
        if (r) {
          r(e);
        }
        t.unbindDragEnd();
      };
      t.updateEventHook = function (e = {}) {
        Object.keys(iK).forEach(function (r) {
          var n = t.props[iK[r]];
          var i = e[iK[r]];
          if (i !== n && t.container) {
            if (i) {
              t.container.removeEventListener(r, i, false);
            }
            if (n) {
              t.container.addEventListener(r, n, false);
            }
          }
        });
      };
      t.handleScroll = function (e) {
        var r = t.props;
        var n = r.onScrollX;
        var i = r.onScrollY;
        if (n) {
          n(e);
        }
        if (i) {
          i(e);
        }
      };
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.componentDidMount = function () {
      this.ps = new perfectScrollbar.default(this.container, typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, iY), this.props.options));
      this.bindDragStart();
    };
    r.componentDidUpdate = function (e = {}) {
      this.updateEventHook(e);
      if (this.ps && typeof this.ps.update == "function") {
        this.ps.update();
      }
    };
    r.componentWillUnmount = function () {
      var e = this;
      this.unbindDragStart();
      Object.keys(iK).forEach(function (t) {
        var r = e.props[iK[t]];
        if (r && typeof r == "function" && e.container) {
          e.container.removeEventListener(t, r, false);
        }
      });
      if (this.ps && typeof this.ps.destroy == "function") {
        this.ps.destroy();
      }
      this.ps = null;
    };
    r.render = function () {
      var e = this.props;
      var t = e.id;
      var r = e.children;
      var n = e.className;
      var i = e.style;
      var o = e.tabIndex;
      var a = e.size;
      var s = e.onContextMenu;
      var l = e.onDoubleClick;
      var u = e.onWheel;
      return reactCoreLibraryReexport.createElement("div", {
        id: t,
        className: H("scrollbar-container " + n, {
          "scrollbar-container-small": a === p.Small
        }),
        style: i,
        onWheel: u,
        tabIndex: o,
        ref: this.handleRef,
        onScroll: this.handleScroll,
        onContextMenu: s,
        onDoubleClick: l
      }, r);
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  var iV = "No result";
  var iJ = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.ref = null;
      t.compositionFlag = false;
      t.autoFocusTimer = null;
      t.setRef = function (e) {
        return t.ref = e;
      };
      t.setInputRef = function (e) {
        if (!userAgentDetect.userAgentInfo.isSafari) {
          if (e) {
            e.focus({
              preventScroll: true
            });
          }
          return;
        }
        if (t.autoFocusTimer) {
          clearTimeout(t.autoFocusTimer);
        }
        if (e) {
          t.autoFocusTimer = window.setTimeout(function () {
            e.focus({
              preventScroll: true
            });
            t.autoFocusTimer = null;
          }, 500);
        }
      };
      t.onHandleKeyDown = function (e) {
        return t.props.onKeyDown && t.props.onKeyDown(e);
      };
      t.handleStart = function () {
        t.compositionFlag = true;
      };
      t.handleEnd = function (e) {
        t.props.onSearchChange(e.currentTarget.value);
        t.compositionFlag = false;
      };
      t.handleChange = function (e) {
        if (!t.compositionFlag) {
          t.props.onSearchChange(e.currentTarget.value);
        }
      };
      t.renderSearchField = function () {
        return reactCoreLibraryReexport.createElement("div", {
          className: codeBlockConstants_1.codeBlockClassNames.LANG_PICKER + "-search"
        }, reactCoreLibraryReexport.createElement("span", {
          className: "universe-icon " + codeBlockConstants_1.codeBlockClassNames.LANG_PICKER + "-search-icon"
        }, reactCoreLibraryReexport.createElement(iZ, null)), reactCoreLibraryReexport.createElement("input", {
          ref: t.setInputRef,
          className: codeBlockConstants_1.codeBlockClassNames.LANG_PICKER + "-search-input",
          placeholder: t.props.i18n["codeblock.search"],
          onChange: t.handleChange,
          onCompositionStart: t.handleStart,
          onCompositionEnd: t.handleEnd
        }));
      };
      t.renderItemList = function () {
        var e = t.props;
        var r = e.languageList;
        var n = r === undefined ? [] : r;
        var i = e.activeIndex;
        var o = e.value;
        var a = e.onItemHover;
        return (n.length ? n : [iV]).map(function (e, r) {
          var n;
          var s = e === iV;
          var l = o === e;
          return reactCoreLibraryReexport.createElement(iE.Item, {
            key: e,
            disabled: s,
            onMouseOver: function () {
              return a(r);
            },
            className: H(codeBlockConstants_1.codeBlockClassNames.LANG_PICKER + "-list-item", ((n = {})[codeBlockConstants_1.codeBlockClassNames.LANG_PICKER + "-list-item-active"] = r === i && !s, n[codeBlockConstants_1.codeBlockClassNames.LANG_PICKER + "-list-item-disable"] = s, n[codeBlockConstants_1.codeBlockClassNames.LANG_PICKER + "-list-item-selected"] = l, n))
          }, reactCoreLibraryReexport.createElement("span", {
            className: "lang-text"
          }, s ? t.props.i18n["codeblock.search_placeholder"] : e), l && reactCoreLibraryReexport.createElement("span", {
            className: "universe-icon select-icon"
          }, reactCoreLibraryReexport.createElement(ij, null), " "));
        });
      };
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.componentDidMount = function () {
      if (this.ref) {
        this.ref.addEventListener("keydown", this.onHandleKeyDown);
      }
    };
    r.componentWillUnmount = function () {
      if (this.ref) {
        this.ref.removeEventListener("keydown", this.onHandleKeyDown);
      }
    };
    r.render = function () {
      var e = this.props;
      var t = e.style;
      var r = e.onItemClick;
      var n = e.scrollRef;
      var i = e.onMenuLeave;
      return reactCoreLibraryReexport.createElement("div", {
        style: t,
        ref: this.setRef,
        className: codeBlockConstants_1.codeBlockClassNames.LANG_PICKER + "-content"
      }, this.renderSearchField(), reactCoreLibraryReexport.createElement(iq, {
        containerRef: n,
        size: p.Small,
        options: {
          suppressScrollX: true
        },
        className: codeBlockConstants_1.codeBlockClassNames.LANG_PICKER + "-list-container"
      }, reactCoreLibraryReexport.createElement(iE, {
        selectable: false,
        onClick: r,
        className: codeBlockConstants_1.codeBlockClassNames.LANG_PICKER + "-list",
        onMouseLeave: i
      }, this.renderItemList())));
    };
    return t;
  }(reactCoreLibraryReexport.PureComponent);
  var iX = function (e) {
    function t(t) {
      var r = e.call(this, t) || this;
      r.triggerRef = null;
      r.listContainerRef = null;
      r.showDropdown = function () {
        r.setState({
          visible: true
        });
      };
      r.hideDropdown = function () {
        r.setState({
          visible: false
        });
      };
      r.setTriggerRef = function (e) {
        r.triggerRef = e;
      };
      r.setListContainerRef = function (e) {
        r.listContainerRef = e;
        setTimeout(function () {
          if (r.listContainerRef) {
            var e = r.props;
            var t = e.languageList;
            var n = e.value;
            var i = t.indexOf(n) - codeBlockConstants_1.minLines;
            if (i > 0) {
              r.listContainerRef.scrollTop = i * codeBlockConstants_1.lineHeight + codeBlockConstants_1.indentSize;
            }
          }
        }, 50);
      };
      r.handleBtnClick = function () {
        var e = r.showDropdown;
        var t = r.hideDropdown;
        if (!r.state.visible && e) {
          e();
        } else if (t) {
          t();
        }
      };
      r.handleMenuItemClick = function (e) {
        if (r.props.onSelect) {
          r.props.onSelect(e.key);
        }
        if (r.hideDropdown) {
          r.hideDropdown();
        }
      };
      r.handleMenuKeydown = function (e) {
        if (e.which === keyboardEventUtils.KeyCode.Esc && r.hideDropdown) {
          r.hideDropdown();
          r.preventDefault(e);
        } else if (e.which === keyboardEventUtils.KeyCode.Down) {
          r.updateActiveIndex(1);
          r.preventDefault(e);
        } else if (e.which === keyboardEventUtils.KeyCode.Up) {
          r.updateActiveIndex(-1);
          r.preventDefault(e);
        } else if (e.which === keyboardEventUtils.KeyCode.Enter) {
          var t = r.state.filteredLanguageList;
          var n = t.length === 1 ? 0 : r.state.activeIndex;
          var i = r.props;
          var o = i.value;
          var a = i.onSelect;
          var s = n === null ? o : t[n];
          if (a && s) {
            a(s);
          }
          if (r.hideDropdown) {
            r.hideDropdown();
          }
          r.preventDefault(e);
        }
      };
      r.handleSearchFieldChange = function (e) {
        var t;
        var n;
        var i = [];
        try {
          var o = typescriptHelpers_1.getValues(codeLanguageDefinitions.languageDefinitions);
          var a = o.next();
          for (; !a.done; a = o.next()) {
            var s = typescriptHelpers_1.readIterator(a.value, 2);
            var l = s[0];
            var u = s[1];
            if (typescriptHelpers_1.spreadArray([l], u).find(function (t) {
              return e.toLowerCase() === t.toLowerCase();
            })) {
              i.push(l);
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (a && !a.done && (n = o.return)) {
              n.call(o);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        var c = RegExp("^" + e.split("").map(function (e) {
          return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }).join(""), "i");
        var h = r.props.languageList.filter(function (e) {
          return c.test(r.trimLanguage(e));
        });
        var d = RegExp(e.split("").map(function (e) {
          return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }).join(".*"), "i");
        var f = r.props.languageList.filter(function (e) {
          return d.test(r.trimLanguage(e));
        });
        var A = Array.from(new Set(typescriptHelpers_1.spreadArray(i, h, f)));
        r.setState({
          activeIndex: A.length > 0 ? 0 : null,
          filteredLanguageList: A
        });
      };
      r.handleVisibleChange = function (e) {
        var t = r.triggerRef;
        if (e && t) {
          var n = t.getBoundingClientRect().bottom;
          var i = window.innerHeight - n - codeBlockConstants_1.versionCode - codeBlockConstants_1.fontSize;
          var o = codeBlockConstants_1.maxHeight;
          r.setState({
            maxHeight: Math.max(o, i),
            placement: i >= o ? "bottomLeft" : "topLeft"
          });
        }
        r.setState({
          visible: e,
          activeIndex: null,
          filteredLanguageList: r.props.languageList
        });
      };
      r.handleItemHover = debounceUtil.debounce(function (e) {
        r.setState({
          activeIndex: e
        });
      }, 300, {
        leading: true,
        trailing: true
      });
      r.handleMenuLeave = function () {
        r.setState({
          activeIndex: null
        });
      };
      r.renderPopoverContent = function () {
        var e = r.props.value;
        var t = r.state;
        var n = t.maxHeight;
        var i = t.activeIndex;
        var o = t.filteredLanguageList;
        return reactCoreLibraryReexport.createElement(iJ, {
          value: e,
          style: {
            maxHeight: n
          },
          activeIndex: i,
          onKeyDown: r.handleMenuKeydown,
          onItemHover: r.handleItemHover,
          onMenuLeave: r.handleMenuLeave,
          languageList: o,
          scrollRef: r.setListContainerRef,
          onItemClick: r.handleMenuItemClick,
          onSearchChange: r.handleSearchFieldChange,
          i18n: r.props.i18n
        });
      };
      r.state = {
        maxHeight: codeBlockConstants_1.maxHeight,
        placement: "bottomLeft",
        visible: false,
        activeIndex: null,
        filteredLanguageList: t.languageList
      };
      return r;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.trimLanguage = function (e) {
      return e.toLowerCase().replace(/\s/g, "");
    };
    r.componentDidUpdate = function () {
      var e = this.state.activeIndex;
      if (e !== null && this.listContainerRef) {
        var t = this.listContainerRef;
        var r = t.scrollTop;
        var n = t.offsetHeight;
        var i = [r, r + n];
        var o = [e * codeBlockConstants_1.lineHeight + codeBlockConstants_1.indentSize, (e + 1) * codeBlockConstants_1.lineHeight + codeBlockConstants_1.indentSize];
        if (i[0] > o[0]) {
          this.listContainerRef.scrollTop = o[0];
        } else if (i[1] < o[1]) {
          this.listContainerRef.scrollTop = o[1] - n;
        }
      }
    };
    r.updateActiveIndex = function (e) {
      if (this.listContainerRef) {
        var t = this.state;
        var r = t.activeIndex;
        var n = t.filteredLanguageList;
        var i = r === null ? Math.floor(this.listContainerRef.scrollTop / codeBlockConstants_1.lineHeight) : r + e;
        if (!(i < 0) && !(i > n.length - 1)) {
          this.setState({
            activeIndex: i
          });
        }
      }
    };
    r.preventDefault = function (e) {
      e.preventDefault();
      e.stopPropagation();
    };
    r.UNSAFE_componentWillReceiveProps = function (e) {
      if (this.props.editable && !e.editable) {
        this.hideDropdown();
      }
    };
    r.render = function () {
      var e = this.props;
      var t = e.value;
      var r = e.editable;
      var n = e.getPopupContainer;
      var i = e.isPlain;
      var o = this.state;
      var a = o.visible;
      var s = o.placement;
      if (i) {
        return this.renderPopoverContent();
      } else {
        return reactCoreLibraryReexport.createElement(iz, {
          overlayClassName: codeBlockConstants_1.codeBlockClassNames.LANG_PICKER,
          content: this.renderPopoverContent(),
          placement: s,
          trigger: "click",
          adjustOverflow: true,
          visible: a,
          onVisibleChange: this.handleVisibleChange,
          destroyOnHide: true,
          showArrow: false,
          disabled: !r,
          getPopupContainer: n
        }, reactCoreLibraryReexport.createElement(nJ, {
          title: this.props.i18n["codeblock.change_language"],
          placement: "top",
          disabled: !r,
          hideAction: ["click", "mouseLeave"]
        }, reactCoreLibraryReexport.createElement("span", {
          className: "" + codeBlockConstants_1.codeBlockClassNames.HEADER_BTN_CON
        }, reactCoreLibraryReexport.createElement(iH, {
          value: t,
          ArrowIcon: ra,
          active: a,
          editable: r,
          eventBind: {
            onClick: this.handleBtnClick
          },
          setButtonRef: this.setTriggerRef
        }))));
      }
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  var i$ = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.setLanguage = function (e) {
        try {
          localStorage.setItem(codeBlockConstants_1.lastLangStorageKey, e);
        } catch (e) {}
        var r = t.props;
        var n = r.zoneId;
        var i = r.editor;
        var o = zoneEntityResolver.getZoneEntity(i, n);
        if (o) {
          var a = {
            start: o.start,
            end: o.end
          };
          i.getContentState().setAttributes(a, {
            language: e
          }, {
            internalZonesIncluded: false
          });
          var s = i.pluginManager.getPlugin(codeBlockConstants_1.componentClassName);
          if (s != null) {
            s.handleLanguageChange(n, e);
          }
        }
      };
      t.handleLanguageChange = function (e) {
        t.setLanguage(e);
      };
      t.handleWrapChange = function () {
        var e = t.props;
        var r = e.zoneId;
        var n = e.editor;
        var i = zoneEntityResolver.getZoneEntity(n, r);
        if (i) {
          var o = {
            start: i.start,
            end: i.end
          };
          if (t.getWrap() === true) {
            n.getContentState().setAttributes(o, {
              wrap: ""
            });
          } else {
            n.getContentState().setAttributes(o, {
              wrap: "true"
            });
          }
        }
      };
      t.handleCopy = function () {
        var e = t.props;
        var r = e.zoneId;
        var n = e.editor;
        var i = n.getContentState().getZoneState(r);
        if (i) {
          var o = new editorRangeZoneClass.EditorRangeZone({
            editor: n,
            start: {
              line: 0,
              offset: 0,
              zoneId: r
            },
            end: {
              line: i.length() - 1,
              offset: i.lines[i.length() - 1].length(),
              zoneId: r
            }
          });
          n.clipboard.copyRange(o);
          tJ.success({
            type: "success",
            content: t.translate("common.copied")
          });
        }
      };
      t.toggleFoldedStatus = function () {
        var e = t.props;
        var r = e.zoneId;
        var n = e.editor;
        var i = zoneEntityResolver.getZoneEntity(n, r);
        if (i) {
          var o = {
            start: i.start,
            end: i.end
          };
          if (t.folded) {
            n.getContentState().setAttributes(o, {
              folded: ""
            });
          } else {
            n.getContentState().setAttributes(o, {
              folded: "true"
            });
          }
        }
      };
      t.handleScroll = function () {};
      t.showMobileLanguagePicker = function () {};
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    return t;
  }(function (e) {
    function t(t) {
      var r = e.call(this, t) || this;
      r.remainSpaceRef = reactCoreLibraryReexport.createRef();
      r.fullSpaceRef = reactCoreLibraryReexport.createRef();
      r.languagePickerRef = reactCoreLibraryReexport.createRef();
      r.containerRef = reactCoreLibraryReexport.createRef();
      r.scrollerRef = reactCoreLibraryReexport.createRef();
      r.headerRef = reactCoreLibraryReexport.createRef();
      r.isMouseEnter = false;
      r.scrollTimer = null;
      r.handleContainerScroll = function () {
        if (r.containerRef.current && r.folded) {
          r.containerRef.current.scrollTop = 0;
        }
      };
      r.toggleScrollEvent = function (e) {
        var t;
        var n;
        var i = r.props.enableFolded;
        var o = r.scroller;
        if (o) {
          if (i == null || i) {
            if ((t = o == null ? undefined : o[e ? "addEventListener" : "removeEventListener"]) !== null && t !== undefined) {
              t.call(o, editorEventConstants.editorEventTypes.SCROLL, r.handleScroll);
            }
          } else if ((n = o == null ? undefined : o[e ? "on" : "off"]) !== null && n !== undefined) {
            n.call(o, editorEventConstants.editorEventTypes.SCROLL, r.handleScroll);
          }
        }
      };
      r.handleResize = debounceMaxWaitUtil.createDebounce(function () {
        r.toggleIsWidthMin();
      }, 100);
      r.handleHeaderResize = debounceMaxWaitUtil.createDebounce(function () {
        var t = r.headerRef.current?.offsetWidth;
        var n = r.state.hiddenBtns;
        var i = r.props.enableFolded;
        var o = [];
        if (r.props.copyable && t && t < (i ? 400 : 300)) {
          o.push("copy");
        }
        if (r.props.editable && t && t < (i ? 500 : 400)) {
          o.push("wrap");
        }
        if (t && t < (i ? 320 : 180)) {
          o.push("language");
        }
        if (!deepEqualUtil_1.deepEqual(o, n)) {
          r.setState({
            hiddenBtns: o
          });
        }
      }, 100);
      r.onSelectedChange = function (e) {
        var t = r.props.zoneId;
        var n = !!e.find(function (e) {
          return e === t;
        });
        if (n !== r.state.selected) {
          r.setState({
            selected: n
          });
        }
      };
      r.onMouseEnter = function () {
        r.handleResizeLanguage();
        r.isMouseEnter = true;
        r.setState({
          headerVisible: true
        });
      };
      r.onMouseMove = debounceUtil_1_1.debounce(function () {
        if (!r.isMouseEnter) {
          r.handleResizeLanguage();
          r.isMouseEnter = true;
          r.setState({
            headerVisible: true
          });
        }
      }, 100);
      r.onMouseLeave = function () {
        setTimeout(function () {
          r.isMouseEnter = false;
          r.setState({
            headerVisible: r.isMouseEnter,
            isDropdownVisible: r.isMouseEnter
          });
        }, 200);
      };
      r.handleResizeLanguage = function () {
        var e = r.containerRef.current;
        if (e) {
          var t = Math.floor((e.offsetWidth - 65 - 2) / 14);
          var n = e.querySelector("." + codeBlockConstants_1.codeBlockClassNames.HEADER_BTN + " span");
          if (n) {
            n.style.maxWidth = t + "em";
          }
        }
      };
      r.handleRemainWindowResizeThrottled = debounceMaxWaitUtil.createDebounce(function () {
        r.handleRemainWindowResize();
      }, 100);
      r.isShowCopy = function () {
        return !r.state.hiddenBtns.includes("copy") && !!r.props.copyable;
      };
      r.onDropdownChange = function (e) {
        var t;
        var n;
        r.setState({
          isDropdownVisible: e
        });
        if ((n = (t = r.props).onDropdownChange) !== null && n !== undefined) {
          n.call(t, e);
        }
      };
      r.onMouseDownHeader = function (e) {
        e.stopPropagation();
        e.preventDefault();
      };
      r.handleClickFoldedBtn = function () {
        r.toggleFoldedStatus();
      };
      r.onScroll = debounceMaxWaitUtil.createDebounce(function () {
        r.setState({
          scrolling: true
        });
        if (r.scrollTimer) {
          clearTimeout(r.scrollTimer);
        }
        r.scrollTimer = setTimeout(function () {
          r.setState({
            scrolling: false
          });
        }, 2000);
      }, 100);
      r.state = {
        languages: codeLanguageDefinitions.languageNameList,
        headerVisible: false,
        scrolling: false,
        isWidthMin: false,
        isNewCodeBlockWidthMin: false,
        isDropdownVisible: false,
        hiddenBtns: []
      };
      return r;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.getWrap = function () {
      return codeBlockHighlightUtils_1.parseBoolValue(this.props.wrap);
    };
    r.getLanguage = function () {
      return this.props.language || "";
    };
    Object.defineProperty(r, "folded", {
      get: function () {
        return codeBlockHighlightUtils_1.parseBoolValue(this.props.folded);
      },
      enumerable: false,
      configurable: true
    });
    r.componentDidMount = function () {
      this.bindEvent(true);
      this.handleRemainWindowResizeThrottled();
    };
    r.componentWillUnmount = function () {
      var e = this.props;
      var t = e.zoneId;
      var r = e.onUnMount;
      this.bindEvent(false);
      if (r) {
        r(t);
      }
    };
    r.componentDidUpdate = function (e) {
      if ((e.copyable !== this.props.copyable || e.editable !== this.props.editable) && this.props.enableFolded) {
        this.handleHeaderResize();
      }
    };
    Object.defineProperty(r, "scroller", {
      get: function () {
        var e = this.props;
        var t = e.editor;
        var r = e.enableFolded;
        var n = this.scrollerRef.current;
        if (r) {
          return n || t;
        } else {
          return (n == null ? undefined : n.querySelector(".code-block-zone-container")) || t;
        }
      },
      enumerable: false,
      configurable: true
    });
    r.bindEvent = function (e) {
      var r;
      var n;
      var i;
      var o;
      var s;
      var l;
      var u = this;
      if (e) {
        this.remainSpaceResizeObserver = new resizeObserverPolyfill_1.ResizeObserver(function () {
          u.handleRemainWindowResizeThrottled();
        });
        this.fullSpaceResizeObserver = new resizeObserverPolyfill_1.ResizeObserver(function () {
          u.handleResize();
        });
        this.headerResizeObserver = new resizeObserverPolyfill_1.ResizeObserver(function () {
          u.handleHeaderResize();
        });
        if (this.remainSpaceRef.current) {
          this.remainSpaceResizeObserver.observe(this.remainSpaceRef.current);
        }
        if (this.fullSpaceRef.current) {
          this.fullSpaceResizeObserver.observe(this.fullSpaceRef.current);
        }
        if (this.headerRef.current) {
          this.headerResizeObserver.observe(this.headerRef.current);
        }
        if ((r = this.containerRef?.current) !== null && r !== undefined) {
          r.addEventListener("scroll", this.handleContainerScroll);
        }
        if (browserDetectUtils.platformInfo.android) {
          if ((n = this.scrollerRef.current) !== null && n !== undefined) {
            n.addEventListener("scroll", this.onScroll);
          }
        }
      } else {
        if ((i = this.remainSpaceResizeObserver) !== null && i !== undefined) {
          i.disconnect();
        }
        if (this.fullSpaceResizeObserver) {
          this.fullSpaceResizeObserver.disconnect();
        }
        if ((o = this.headerResizeObserver) !== null && o !== undefined) {
          o.disconnect();
        }
        if ((s = this.containerRef?.current) !== null && s !== undefined) {
          s.removeEventListener("scroll", this.handleContainerScroll);
        }
        if (browserDetectUtils.platformInfo.android) {
          if ((l = this.scrollerRef.current) !== null && l !== undefined) {
            l.removeEventListener("scroll", this.onScroll);
          }
        }
      }
      this.toggleScrollEvent(e);
    };
    r.getInitData = function () {};
    Object.defineProperty(r, "isNewCodeShowDropdown", {
      get: function () {
        return this.state.hiddenBtns.length > 0;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(r, "borderColor", {
      get: function () {
        var e = this.state.selected;
        var t = this.props;
        var r = t.syncCursorSelected;
        var n = t.syncCursorBorderColor;
        if (!e && r) {
          return n;
        } else {
          return undefined;
        }
      },
      enumerable: false,
      configurable: true
    });
    r.handleRemainWindowResize = function () {
      this.toggleIsWidthMin();
    };
    r.toggleIsWidthMin = function () {
      var r = this.fullSpaceRef.current?.offsetWidth;
      var n = this.languagePickerRef.current?.offsetWidth;
      this.setState({
        isWidthMin: !!r && !!n && r - n < codeBlockConstants_1.animationDuration
      });
    };
    r.translate = function (e) {
      var t = this.props.i18n;
      if (t == null ? undefined : t[e]) {
        return t[e];
      } else {
        return e;
      }
    };
    r.renderFoldedBtn = function () {
      return reactCoreLibraryReexport.createElement("div", {
        className: H("fold-wrapper", {
          folded: this.folded
        }),
        contentEditable: !!userAgentDetect.userAgentInfo.isIOS && "inherit",
        suppressContentEditableWarning: true,
        onClick: this.handleClickFoldedBtn
      }, reactCoreLibraryReexport.createElement("div", {
        className: "fold-btn"
      }, reactCoreLibraryReexport.createElement(ri, null)));
    };
    r.renderLanguageBtn = function () {
      var e = this;
      var t = this.getLanguage();
      var r = this.props;
      var n = r.editable;
      var i = r.ButtonComponent;
      var o = rl.isMobile;
      var a = userAgentDetect.userAgentInfo.isIPad;
      var s = userAgentDetect.userAgentInfo.isLark;
      function l(r) {
        return reactCoreLibraryReexport.createElement(iX, {
          languageList: codeLanguageDefinitions.languageNameList,
          value: t,
          editable: codeBlockHighlightUtils_1.parseBoolValue(n),
          onSelect: e.handleLanguageChange,
          getPopupContainer: function () {
            return e.props.popupContainer || document.body;
          },
          i18n: e.props.i18n,
          isPlain: r
        });
      }
      if (o || a && s) {
        if (this.isNewCodeShowDropdown && this.state.hiddenBtns.includes("language")) {
          return reactCoreLibraryReexport.createElement(iE.Item, {
            onClick: this.showMobileLanguagePicker
          }, reactCoreLibraryReexport.createElement("span", null, reactCoreLibraryReexport.createElement(rr, {
            className: "code-menu-languge-icon"
          }), this.translate("codeblock.change_language")));
        } else {
          return reactCoreLibraryReexport.createElement(iO, {
            type: "text",
            onClick: this.showMobileLanguagePicker,
            className: codeBlockConstants_1.codeBlockClassNames.HEADER_BTN + " mobile-code-block-language-btn",
            disabled: !n || userAgentDetect.userAgentInfo.isH5,
            ButtonComponent: i
          }, reactCoreLibraryReexport.createElement("span", null, t || codeBlockConstants_1.defaultLanguageName), n && !userAgentDetect.userAgentInfo.isH5 ? reactCoreLibraryReexport.createElement(ra, null) : null);
        }
      } else if (this.isNewCodeShowDropdown && this.state.hiddenBtns.includes("language")) {
        return reactCoreLibraryReexport.createElement(iE.SubMenu, {
          popupClassName: "code-menu-popup " + codeBlockConstants_1.codeBlockClassNames.LANG_PICKER,
          icon: reactCoreLibraryReexport.createElement(rr, {
            className: "code-menu-languge-icon"
          }),
          title: this.translate("codeblock.change_language")
        }, l(true));
      } else {
        return l(false);
      }
    };
    r.renderHeader = function () {
      var e = this.props;
      var t = e.enableFolded;
      var r = e.editable;
      var n = e.ButtonComponent;
      var i = e.captionComponent;
      var o = this.state;
      var a = o.headerVisible;
      var s = o.isWidthMin;
      var l = o.isDropdownVisible;
      var u = o.hiddenBtns;
      var c = rl.isMobile;
      var h = userAgentDetect.userAgentInfo.isIPad;
      var d = this.getWrap();
      var f = c || a;
      var A = reactCoreLibraryReexport.createElement(iE, {
        className: c || h ? "code-menu-mobile" : "code-menu"
      }, !!this.isNewCodeShowDropdown && this.state.hiddenBtns.includes("language") && this.renderLanguageBtn(), !!this.isNewCodeShowDropdown && r && this.state.hiddenBtns.includes("wrap") && reactCoreLibraryReexport.createElement(iE.Item, {
        onClick: this.handleWrapChange
      }, reactCoreLibraryReexport.createElement("span", null, d ? reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(t7, null), " ", this.translate("codeblock.cancel_auto_wrap")) : reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(re, null), " ", this.translate("codeblock.auto_wrap")))), !!this.isNewCodeShowDropdown && this.props.copyable && this.state.hiddenBtns.includes("copy") && reactCoreLibraryReexport.createElement(iE.Item, {
        onClick: this.handleCopy
      }, reactCoreLibraryReexport.createElement("span", null, reactCoreLibraryReexport.createElement(t3, null), this.translate("codeblock.copy"))));
      var g = "code-block-header";
      if (!r) {
        g += " uneditable";
      }
      var p = "code-wrap";
      if (!this.isShowCopy() && !this.isNewCodeShowDropdown) {
        p += " hide-divider";
      }
      if (f) {
        g += " header-visible";
      }
      var m = "code-copy";
      if (this.isNewCodeShowDropdown) {
        m += " show-divider";
      }
      var y = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement("div", {
        className: "full-space",
        ref: this.fullSpaceRef
      }), reactCoreLibraryReexport.createElement("div", {
        className: "remain-space",
        ref: this.remainSpaceRef
      }));
      var v = !!i && reactCoreLibraryReexport.createElement("div", {
        className: "code-block-caption"
      }, i);
      return reactCoreLibraryReexport.createElement("div", {
        contentEditable: !!userAgentDetect.userAgentInfo.isIOS && "inherit",
        className: "" + g,
        suppressContentEditableWarning: true,
        onMouseDown: this.onMouseDownHeader,
        ref: this.headerRef
      }, !!t && reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, (f || this.folded) && this.renderFoldedBtn(), v), reactCoreLibraryReexport.createElement("div", {
        className: "code-block-header-toolbar"
      }, !u.includes("language") && this.renderLanguageBtn(), !t && y, r && !u.includes("wrap") ? reactCoreLibraryReexport.createElement(iO, {
        type: "link",
        onClick: this.handleWrapChange,
        className: p,
        style: {
          visibility: s ? "hidden" : "inherit"
        },
        ButtonComponent: n
      }, d ? reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(t7, null), " ", this.translate("codeblock.cancel_auto_wrap")) : reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(re, null), " ", this.translate("codeblock.auto_wrap"))) : "", this.isShowCopy() && reactCoreLibraryReexport.createElement(iO, {
        type: "link",
        onClick: this.handleCopy,
        className: m,
        ButtonComponent: n
      }, reactCoreLibraryReexport.createElement(t3, null), (t && !u.includes("copy") || !t) && reactCoreLibraryReexport.createElement("span", null, this.translate("codeblock.copy"))), this.isNewCodeShowDropdown && reactCoreLibraryReexport.createElement(iR, {
        overlay: A,
        placement: "bottomRight",
        trigger: ["click"],
        visible: l && f,
        onVisibleChange: this.onDropdownChange
      }, reactCoreLibraryReexport.createElement(iO, {
        hideMobileHoverBg: false,
        className: H("code-dropdown", {
          hover: l && a
        }),
        ButtonComponent: n
      }, reactCoreLibraryReexport.createElement(t6, null)))));
    };
    r.renderComponent = function () {
      var e = this.props;
      var t = e.containerClassName;
      var r = e.syncCursorBgColor;
      var n = e.enableFolded;
      var i = e.scrollerStyle;
      var o = this.state;
      var a = o.selected;
      var s = o.headerVisible;
      var l = o.scrolling;
      var u = rl.isMobile;
      var c = userAgentDetect.userAgentInfo.isIPad;
      var h = userAgentDetect.userAgentInfo.isSafari;
      var d = this.getWrap();
      var f = this.getSyncBackgroundStyle();
      var A = typescriptHelpers_1.assign(typescriptHelpers_1.assign({
        borderColor: this.borderColor
      }, n ? f : {
        backgroundColor: r
      }), this.getFoldStyle());
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement("div", {
        className: H("editor-kit-code-block code-block", t, {
          "code-fold-block": n,
          "code-mobile-block": u || c,
          "is-safari": h,
          selected: a,
          folded: this.folded
        }),
        spellCheck: false,
        style: A,
        ref: this.containerRef,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onMouseMove: this.onMouseMove
      }, reactCoreLibraryReexport.createElement("div", {
        contentEditable: false,
        suppressContentEditableWarning: true,
        style: {
          userSelect: "none"
        },
        className: "ignore-dom"
      }, this.renderHeader()), reactCoreLibraryReexport.createElement("div", {
        className: H("code-block-content", {
          "is-firefox": browserDetectUtils.platformInfo.isFF,
          "code-wrap-content": d,
          "is-hover": !browserDetectUtils.platformInfo.android && s,
          scrolling: l,
          "is-mobile": rl.isMobile,
          "show-fold-controller": rl.isMobile || s
        }),
        style: n ? i : {},
        ref: this.scrollerRef
      }, n && reactCoreLibraryReexport.createElement("div", {
        className: "code-block-line",
        contentEditable: "false",
        style: f
      }), this.renderZone())));
    };
    r.getEditableStyle = function () {
      var e = {};
      if (this.folded) {
        e.overflow = "hidden";
      }
      return e;
    };
    r.getFoldStyle = function () {
      if (this.props.enableFolded) {
        return Object.assign(this.folded ? {
          height: 40,
          minHeight: 40,
          overflowY: "hidden"
        } : {});
      } else {
        return {};
      }
    };
    r.getSyncBackgroundStyle = function () {
      var e = this.props;
      var t = e.syncCursorBgColor;
      var r = e.enableFolded;
      if (t && r) {
        return {
          backgroundImage: "linear-gradient(180deg, " + t + ", " + t + ")"
        };
      } else {
        return {};
      }
    };
    r.renderZone = function () {
      var e;
      var t = this.props.className;
      var r = this.state.headerVisible;
      var n = {
        getScrollerPadding: this.getScrollerPadding
      };
      if (browserDetectUtils.platformInfo.isIOS) {
        n.scrollListenEventConfigs = [{
          type: editorEventConstants.editorEventTypes.SELECTION_CHANGE_AND_DOM_UPDATE,
          overideConfig: {
            onlyScrollWhenCollapsed: true
          }
        }];
      }
      return reactCoreLibraryReexport.createElement(editorZoneRenderer.ZoneRenderer, typescriptHelpers_1.assign({}, this.props, {
        style: this.getEditableStyle(),
        className: H((t || "") + " " + codeBlockConstants_1.codeBlockClassNames.ZONE_CONTAINER, {
          "is-hover": r,
          "is-mobile": rl.isMobile
        }),
        scroller: this.props.enableFolded && (e = this.scrollerRef.current) !== null && e !== undefined ? e : undefined,
        scrollerOptions: n
      }));
    };
    r.getScrollerPadding = function () {
      return {
        left: 57,
        top: 27,
        right: 20,
        bottom: 24
      };
    };
    r.render = function () {
      return this.renderComponent();
    };
    typescriptHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], t.prototype, "getScrollerPadding", null);
    return t;
  }(reactCoreLibraryReexport.Component));
  var italicAttributeRenderer = require("italic-attribute-renderer") /*id: 675703*/;
  var editorUnderlinePlugin = require("editor-underline-plugin") /*id: 368359*/;
  var codeHighlightRenderer = require("code-highlight-renderer") /*id: 127099*/;
  var normalizeCodeLanguageName = require("normalize-code-language-name") /*id: 74381*/;
  var i3 = function (e) {
    function t(t) {
      var r = e.call(this, t) || this;
      r.handleKeyDownInvolveOtherZone = function (e) {
        var t = r.editor.getContentState().getActiveZone();
        var n = !e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey;
        var i = e.keyCode === codeBlockConstants_1.keyCodeEnum.ENTER && n;
        var o = e.keyCode === codeBlockConstants_1.keyCodeEnum.DELETE && n;
        var a = e.keyCode === codeBlockConstants_1.keyCodeEnum.ARROW_LEFT && n;
        var s = e.keyCode === codeBlockConstants_1.keyCodeEnum.ARROW_RIGHT && n;
        var l = e.keyCode === codeBlockConstants_1.keyCodeEnum.ARROW_DOWN && n;
        var u = e.keyCode === codeBlockConstants_1.keyCodeEnum.ARROW_UP && n;
        if (!r.codeBlockPlugin.isCodeBlockZoneState(t)) {
          if (i) {
            return r.handleMarkDownEnter(e);
          }
          if (o) {
            return r.handleDeleteOutSideCodeBlock(e);
          }
        }
        if (s) {
          return r.handleArrowRight(e);
        } else if (a) {
          return r.handleArrowLeft(e);
        } else if (l) {
          return r.handleArrowDown(e);
        } else if (u) {
          return r.handleArrowUp(e);
        } else {
          return undefined;
        }
      };
      r.handleDeleteOutSideCodeBlock = function (e) {
        var t = r.editor;
        var n = t.selection.getSelection();
        var i = n.start;
        var o = i.line;
        var a = i.offset;
        var s = i.zoneId;
        var l = n.end.line;
        var u = t.getContentState();
        var c = u.getActiveZone();
        var h = u.getActiveZone().getLine(o);
        var d = h && a === +!!h.hasLineMarker();
        if (n.isCollapsed() && h && d && o > 0 && !r.isSkipLine(h)) {
          var f = t.getContentState().getActiveZone().getLine(o - 1);
          if (f) {
            var A = codeBlockHighlightUtils_1.getCodeBlockZoneIds(f);
            if (A.length) {
              if ((o !== l || o !== c.length() - 1) && h.isTextEmpty()) {
                var g = u.rangePointToOffset({
                  line: o,
                  offset: 0,
                  zoneId: s
                });
                if (g !== null) {
                  var p = new contentStructureDelta.ContentDelta({
                    zoneId: s
                  }).retain(g).delete(h.length());
                  u.apply(p);
                }
              }
              var m = f.getEntities([["zoneId", A.pop()]])[0];
              var y = m.start;
              var v = m.end;
              t.selection.setSelection({
                start: y,
                end: v
              }, true);
              r.preventKeyDownEvent(e);
            }
          }
        }
      };
      r.isSkipLine = function (e) {
        if (!e) {
          return false;
        }
        var t = e.getAttributes().toMap() || {};
        return ["list", "blockquote", "text-indent"].find(function (e) {
          return t[e];
        });
      };
      r.handleArrowUp = function (e) {
        var t = r.editor;
        var n = t.selection.getSelection();
        if (n.isCollapsed()) {
          var i = n.start.line;
          var o = t.getContentState().getActiveZone();
          if (r.codeBlockPlugin.isCodeBlockZoneState(o)) {
            r.jumpOutFromCodeBlockfirstLine(e, o, i);
          } else {
            r.jumpInToCodeBlockLastLine(e, o, i);
          }
        }
      };
      r.handleArrowDown = function (e) {
        var t = r.editor;
        var n = t.selection.getSelection();
        if (n.isCollapsed()) {
          var i = n.start.line;
          var o = t.getContentState().getActiveZone();
          if (r.codeBlockPlugin.isCodeBlockZoneState(o)) {
            r.jumpOutFromCodeBlockLastLine(e, o, i);
          } else {
            r.jumpInToCodeBlockFirstLine(e, o, i);
          }
        }
      };
      r.handleArrowLeft = function (e) {
        var t = r.editor;
        var n = t.selection.getSelection().start;
        var i = n.line;
        var o = n.offset;
        var a = t.getContentState().getActiveZone();
        var s = a.getLine(i);
        var l = s && o === +!!s.hasLineMarker();
        if (r.codeBlockPlugin.isCodeBlockZoneState(a)) {
          if (s && l && i === 0) {
            r.jumpOutFromCodeBlockfirstLine(e, a, i);
          }
        } else if (s && l && i > 0) {
          r.jumpInToCodeBlockLastLine(e, a, i);
        }
      };
      r.handleArrowRight = function (e) {
        var t = r.editor;
        var n = t.selection.getSelection().start;
        var i = n.line;
        var o = n.offset;
        var a = t.getContentState();
        var s = a.getActiveZone().getLine(i);
        var l = a.getActiveZone().getLine(i + 1);
        var u = s && o === s.length() - 1;
        var c = a.getActiveZone();
        var h = u && r.codeBlockPlugin.isCodeBlockZoneState(c) && i === c.length() - 1;
        if (r.codeBlockPlugin.isCodeBlockZoneState(c)) {
          if (!c.parent || !c.parent.parent) {
            return;
          }
          if (h) {
            r.jumpOutFromCodeBlockLastLine(e, c, i);
          }
        } else if (s && l && u) {
          r.jumpInToCodeBlockFirstLine(e, c, i);
        }
      };
      r.handleMarkDownEnter = function (e) {
        var t = r.editor;
        var n = t.selection.getSelection();
        var i = n.end;
        var o = i.line;
        var a = i.offset;
        var s = i.zoneId;
        var l = t.getContentState();
        var u = l.getActiveZone().getLine(o);
        if (u) {
          var c = u.getModelText();
          var h = u.getText();
          var d = /^```([a-zA-Z0-9+#]*)\n$/.exec(h);
          var f = a === c.length - 1;
          var A = o !== 0 || s !== zeroConstantModule_1.versionValue;
          if (d && f && A) {
            var g = normalizeCodeLanguageName.normalizeLanguageName(d[1]);
            r.preventKeyDownEvent(e);
            var p = typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, n.end), {
              offset: 0
            });
            var y = l.getZoneState(s);
            if (!y) {
              return;
            }
            var v = y.pointToOffset(p);
            var b = y.pointToOffset(n.end);
            if (v === null || b === null) {
              return;
            }
            var w = N();
            r.editor.undoModule.batchedUndo(function () {
              var e;
              var r = t.getContentState().getActiveZone().getZoneId();
              var n = new contentStructureDelta.ContentDelta({
                zoneId: r
              });
              var i = M(w);
              n.retain(v).delete(b - v);
              n.insert(" ", {
                type: codeBlockConstants_1.componentName,
                language: g,
                zoneId: w,
                wrap: String(codeBlockConstants_1.highlightEnabled),
                parentZoneId: r
              });
              var o = new deltaSetCore.DeltaSet(((e = {})[w] = i, e[r] = n, e));
              l.apply(o);
              t.selection.setSelection({
                zoneId: w,
                start: 0,
                len: 0
              });
            });
          }
        }
      };
      r.editor.on(editorEventConstants.editorEventTypes.KEYDOWN, r.handleKeyDownInvolveOtherZone, 999);
      return r;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.jumpInToCodeBlockFirstLine = function (e, t, r) {
      var n = t.getLine(r + 1);
      if (n && codeBlockHighlightUtils_1.isCodeBlockEntity(n)) {
        var i = codeBlockHighlightUtils_1.getCodeBlockZoneIds(n)[0];
        var o = this.editor.getContentState().getZoneState(i);
        if (o) {
          this.editor.selection.setSelection({
            zoneId: i,
            start: +!!o.getLine(0).hasLineMarker(),
            len: 0
          }, true);
          this.preventKeyDownEvent(e);
        }
      }
    };
    r.jumpInToCodeBlockLastLine = function (e, t, r) {
      var n = t.getLine(r - 1);
      if (n && codeBlockHighlightUtils_1.isCodeBlockEntity(n)) {
        var i = codeBlockHighlightUtils_1.getCodeBlockZoneIds(n)[0];
        var o = this.editor.getContentState().getZoneState(i);
        if (o) {
          var a = o.getModelText().length - 1;
          this.editor.selection.setSelection({
            zoneId: i,
            start: a,
            len: 0
          }, true);
          this.preventKeyDownEvent(e);
        }
      }
    };
    r.jumpOutFromCodeBlockfirstLine = function (e, t, r) {
      if (r === 0) {
        var n;
        var i = t.parent;
        if (i) {
          var o = i.index - 1;
          var a = i.getZoneId();
          var s = (n = this.editor.getContentState().getZoneState(a)) === null || n === undefined ? undefined : n.getLine(o);
          if (s) {
            var l = {
              zoneId: a,
              line: o,
              offset: s.length() - 1
            };
            this.editor.selection.setSelection({
              start: l,
              end: l
            }, true);
            this.preventKeyDownEvent(e);
          }
        }
      }
    };
    r.jumpOutFromCodeBlockLastLine = function (e, t, r) {
      if (r === t.lines.length - 1) {
        var n;
        var i = t.parent;
        if (i) {
          var o = i.index + 1;
          var a = i.getZoneId();
          var s = (n = this.editor.getContentState().getZoneState(a)) === null || n === undefined ? undefined : n.getLine(o);
          if (s) {
            var l = {
              zoneId: a,
              line: o,
              offset: +!!s.hasLineMarker()
            };
            this.editor.selection.setSelection({
              start: l,
              end: l
            }, true);
            this.preventKeyDownEvent(e);
          }
        }
      }
    };
    r.destroy = function () {
      e.prototype.destroy.call(this);
      this.editor.off(editorEventConstants.editorEventTypes.KEYDOWN, this.handleKeyDownInvolveOtherZone);
    };
    return t;
  }(ew);
  var i4 = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.register = function () {
        var e = t.editor;
        return [[editorBoldPlugin.BoldPlugin, {
          editor: e
        }], [alignRendererPlugin.AlignRenderer, {
          editor: e
        }], [S, {
          editor: e
        }], [italicAttributeRenderer.ItalicRenderer, {
          editor: e
        }], [editorUnderlinePlugin.UnderlinePlugin, {
          editor: e
        }], [codeHighlightRenderer.CodeHighlight, {
          editor: e
        }]];
      };
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.getCodeBlockKeyboard = function () {
      return i3;
    };
    r.getScroller = function (e) {
      var t = document.querySelector("[data-zone-id=\"" + e + "\"]");
      var r = t == null ? undefined : t.parentNode;
      var n = document.getElementById("root") || window;
      return r ?? n;
    };
    r.getOuterScroller = function (e) {
      var t = document.querySelector("[data-zone-id=\"" + e + "\"]");
      var r = t == null ? undefined : t.parentNode;
      var n = document.getElementById("root") || window;
      if (r) {
        return n;
      } else {
        return [];
      }
    };
    r.getVirtualListModuleConfig = function (e) {
      var t;
      (t = {})[editorModuleConstants.virtualListConsts.VirtualListModule] = [virtualListModule.VirtualListModule, {
        useIdleModule: true,
        useViewportLockModule: false,
        defaultLineHeight: 22,
        bufferHeight: function () {
          return 300;
        },
        virtualListScroller: this.getScroller.bind(this, e),
        outerScroller: this.getOuterScroller.bind(this, e)
      }];
      return t;
    };
    r.renderCaption = function () {
      return reactCoreLibraryReexport.createElement("div", {
        className: "code-caption"
      });
    };
    r.renderCustomZoneView = function (e) {
      var t = this;
      var r = this.editor;
      var n = e.attributes;
      var i = n.zoneId;
      var o = n.wrap;
      var a = n.language;
      var s = n.folded;
      e.key = i;
      var l = codeBlockConstants_1.codeBlockClassNames.ZONE_CONTAINER;
      var u = {
        editor: r,
        zoneId: i,
        wrap: o,
        folded: s,
        enableFolded: true,
        captionComponent: this.renderCaption(),
        language: a,
        className: l,
        i18n: this.i18n,
        copyable: r.copyable,
        editable: this.editor.isEditable(),
        scrollerStyle: {
          maxHeight: 600
        },
        modules: this.getVirtualListModuleConfig(i),
        register: this.register
      };
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(reactZeroWidthSpace.ZeroWidthSpace, {
        style: {
          position: "absolute",
          display: "inline-block",
          width: 0,
          height: 0
        }
      }), reactCoreLibraryReexport.createElement(i$, typescriptHelpers_1.assign({}, u, {
        onUnMount: this.onCodeViewUnMount,
        ref: function (e) {
          t.setRef(e, i);
        }
      })));
    };
    return t = typescriptHelpers_1.decorate([U], t);
  }(eB);
  require.d(exports, {
    CodeBlockPlugin: function () {
      return i4;
    }
  });
}