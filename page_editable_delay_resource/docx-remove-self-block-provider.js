// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 's' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 'c' to 'diProviderRemoveSelf'
// - Resolved require(33297) to 'di-provider-remove-self'
// - Renamed variable 'd' to 'collaborativeEditingFlowSyncModule'
// - Resolved require(756448) to 'collaborative-editing-flow-sync-module'
// - Renamed variable 'u' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'h' to 'blockManagerToken'
// - Resolved require(109058) to 'block-manager-token'
// - Renamed variable 'p' to 'compatBrowserSelectionService_1'
// - Resolved require(22128) to 'compat-browser-selection-service_1'
// - Updated imported property 'DF' to 'Provide' (module 555385)
// - Updated imported property 'f3' to 'get' (module 555385)
// - Updated imported property 'c' to 'removeSelfProvider' (module 33297)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'GI' to 'CollabMode' (module 756448)
// - Updated imported property 'n' to 'blockManagerToken' (module 109058)
// - Updated imported property 'ZP' to 'selectionServiceKey' (module 22128)
// - Updated imported property 'XO' to 'registerProviders' (module 135760)
// - Updated imported property 'nc' to 'onInitHook' (module 135760)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_delay_resource.8cd7ac06.js
         * chunkId: 68859
         * moduleId: 698677
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var a;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var diProviderRemoveSelf = require("di-provider-remove-self") /*id: 33297*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  function g(e, r, i, n) {
    if (i) {
      Object.defineProperty(e, r, {
        enumerable: i.enumerable,
        configurable: i.configurable,
        writable: i.writable,
        value: i.initializer ? i.initializer.call(n) : undefined
      });
    }
  }
  function f(e, r, i) {
    var n;
    if ((r = typeof (n = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, r || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, r, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = i;
    }
    return e;
  }
  function m(e, r, i, n, o) {
    var a = {};
    Object.keys(n).forEach(function (e) {
      a[e] = n[e];
    });
    a.enumerable = !!a.enumerable;
    a.configurable = !!a.configurable;
    if ("value" in a || a.initializer) {
      a.writable = true;
    }
    a = i.slice().reverse().reduce(function (i, n) {
      return n(e, r, i) || i;
    }, a);
    if (o && a.initializer !== undefined) {
      a.value = a.initializer ? a.initializer.call(o) : undefined;
      a.initializer = undefined;
    }
    if (a.initializer === undefined) {
      Object.defineProperty(e, r, a);
      return null;
    } else {
      return a;
    }
  }
  let v = dependencyInjectionContainer.Provide(diProviderRemoveSelf.removeSelfProvider)((o = m((n = class {
    init() {
      this.subs = [this.blockManager.structService.mutation$.subscribe(this.handleMutations)];
    }
    destroy() {
      this.subs.forEach(e => e.unsubscribe());
    }
    onServiceDispose() {
      this.destroy();
    }
    constructor() {
      g(this, "blockManager", o, this);
      g(this, "selectionAPI", a, this);
      f(this, "subs", []);
      f(this, "handleMutations", e => {
        if (!this.blockManager.config.get("editPermission") || !e.isLocal()) {
          return;
        }
        let {
          blockManager: r,
          selectionAPI: i
        } = this;
        let n = new Set();
        let o = new Set();
        let a = new Set();
        for (let r of e.mutations.removed) {
          let {
            parent: e
          } = r;
          switch (e.type) {
            case docBlockTypeConstants.blockTypeConstants.GRID:
              if (b(e)) {
                n.add(e);
              }
              break;
            case docBlockTypeConstants.blockTypeConstants.GRID_COLUMN:
              if (y(e)) {
                o.add(e);
              }
              break;
            case docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER:
              if (k(e)) {
                a.add(e);
              }
          }
        }
        if (n.size) {
          (function (e, r, i) {
            let {
              currentFocusBlockId: n,
              selectionStart: o,
              selectionEnd: a
            } = function (e) {
              let r;
              let i;
              let n;
              if (e.length === 1) {
                let [o] = e;
                let {
                  selection: a,
                  type: l
                } = o;
                if (a) {
                  let {
                    start: e,
                    end: s
                  } = a;
                  if (l === "text" && a && s - e == 0) {
                    r = o.id;
                    i = e;
                    n = s;
                  }
                }
              }
              return {
                currentFocusBlockId: r,
                selectionStart: i,
                selectionEnd: n
              };
            }(r.getSelection());
            e.applyTransaction("checkRemoveSelfInGridBlock", r => {
              i.forEach(i => {
                if (!b(i)) {
                  return;
                }
                let n = e.getBlockViewByBlockIdNotCheck(i.id);
                if (n) {
                  n.setcurrentMultiBlockInLineValue(null);
                }
                let {
                  parent: o
                } = i;
                let a = o.record;
                let l = a.id;
                let s = (a.snapshot.children || []).indexOf(i.recordId);
                if (!(s < 0)) {
                  r.remove(l, ["children", s]);
                  for (let e of i.children) {
                    var c;
                    let i = ((c = e.snapshot.children) === null || c === undefined ? undefined : c.slice()) || [];
                    r.removeChildren(e.recordId, i);
                    for (let n of i) {
                      r.insert(l, ["children", s++], n);
                      r.replace(n, ["parent_id"], l);
                    }
                  }
                }
              });
            }, {
              mergeMode: collaborativeEditingFlowSyncModule.CollabMode.MERGE,
              onFinish: i => {
                if (!i) {
                  let i = r.getSelection();
                  if (!i.length || i.length === 1 && i[0].id === n) {
                    (function (e, r, i, n) {
                      if (!r) {
                        return;
                      }
                      let o = e.getBlockViewByBlockIdNotCheck(r);
                      if (o && o.isTextBlock) {
                        o.setBlockFocus(true);
                        if (i != null && n != null) {
                          o.model.setSelection({
                            start: i,
                            len: n - i
                          }, true);
                        }
                      }
                    })(e, n, o, a);
                  }
                }
              }
            });
          })(r, i, n);
        }
        if (o.size) {
          (function (e, r) {
            e.applyTransaction("removeColSelf", e => {
              let i = new Set();
              let n = new Set();
              r.forEach(r => {
                if (!y(r)) {
                  return;
                }
                let o = r.parent;
                e.removeChildren(o.recordId, [r.recordId]);
                i.add(r);
                n.add(o);
              });
              n.forEach(r => {
                let n = r.children.filter(e => !i.has(e) && e.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN);
                if (!n.length) {
                  return;
                }
                let [o, a] = r.children.reduce((e, r) => {
                  let n = r.snapshot.width_ratio || 0;
                  e[0] += n;
                  if (i.has(r)) {
                    e[1] += n;
                  }
                  return e;
                }, [0, 0]);
                n.forEach(r => {
                  let i = r.snapshot.width_ratio / (o - a);
                  e.replace(r.recordId, ["width_ratio"], i);
                });
              });
            }, {
              mergeMode: collaborativeEditingFlowSyncModule.CollabMode.MERGE
            });
          })(r, o);
        }
        if (a.size) {
          (function (e, r) {
            e.applyTransaction("QuoteContainerRemoveSelf", e => {
              r.forEach(r => {
                if (!k(r)) {
                  return;
                }
                let {
                  parent: i
                } = r;
                e.removeChildren(i.recordId, [r.recordId]);
              });
            }, {
              mergeMode: collaborativeEditingFlowSyncModule.CollabMode.MERGE
            });
          })(r, a);
        }
      });
    }
  }).prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), a = m(n.prototype, "selectionAPI", [compatBrowserSelectionService_1.selectionServiceKey], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), n)) || n;
  function b(e) {
    return e.active && e.children.length <= 1;
  }
  function y(e) {
    return e.active && !e.children.length;
  }
  function k(e) {
    return e.active && !e.children.length;
  }
  function I() {
    docxEditorCore.registerProviders([v]);
    docxEditorCore.onInitHook(() => {
      dependencyInjectionContainer.get(diProviderRemoveSelf.removeSelfProvider).init();
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return I;
    }
  });
}