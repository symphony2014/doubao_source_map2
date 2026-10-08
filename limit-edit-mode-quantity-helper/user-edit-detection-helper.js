// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'collaborativeEditingFlowSyncModule'
// - Resolved require(756448) to 'collaborative-editing-flow-sync-module'
// - Renamed variable 'n' to 'deltaSetChangesetConverter_1'
// - Resolved require(193797) to 'delta-set-changeset-converter_1'
// - Renamed variable 'o' to 'contentStateManager'
// - Resolved require(519638) to 'content-state-manager'
// - Renamed variable 'l' to 'flowSyncDeltaOperations'
// - Resolved require(539974) to 'flow-sync-delta-operations'
// - Renamed variable 'u' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 's' to 'editorModuleConstantsConfig'
// - Resolved require(414567) to 'editor-module-constants-config'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'sZ' to 'isEasysyncSubtype' (module 539974)
// - Updated imported property '$$' to 'convertToEasysyncOp' (module 539974)
// - Updated imported property 'cE' to 'changesetToDeltaSet' (module 539974)
// - Updated imported property 'cA' to 'attributedTextToDeltaSet' (module 193797)
// - Updated imported property 'Z' to 'ContentStateManager' (module 519638)
// - Updated imported property 'OY' to 'editorModuleManager' (module 414567)
// - Updated imported property 'gW' to 'isListUpdateOperation' (module 756448)
// - Updated imported property 'XM' to 'isCreateOperation' (module 756448)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: limit-edit-mode-quantity-helper.b768f868.js
         * chunkId: 97207
         * moduleId: 395342
         */
module.exports = function (module, exports, require) {
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var contentStateManager = require("content-state-manager") /*id: 519638*/;
  var flowSyncDeltaOperations = require("flow-sync-delta-operations") /*id: 539974*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  let c = /^[\s\n]*$/;
  let a = ["author", "comment-id-", "flow-comment-id-"];
  function d(t, e = false) {
    let {
      options: i,
      recordOps: c
    } = t;
    if (!t || i.from !== collaborativeEditingFlowSyncModule.kq.LOCAL) {
      return false;
    }
    let a = [];
    let d = [];
    let b = c.some(t => {
      let i = false;
      let c = false;
      let b = t.ops.some(b => {
        let {
          p: [h]
        } = b;
        switch (h) {
          case "text":
            {
              let {
                hasChangeTextLength: i,
                isUserEdit: r
              } = function (t, e = false, i) {
                let r = e && (i == null ? undefined : i.type) !== docBlockTypeConstants.blockTypeConstants.CODE;
                let c = [];
                let a = false;
                let d = false;
                let b = false;
                let h = false;
                let m = false;
                let p = t;
                if (!flowSyncDeltaOperations.isEasysyncSubtype(t) && r) {
                  try {
                    p = flowSyncDeltaOperations.convertToEasysyncOp(t);
                  } catch (t) {}
                }
                if (flowSyncDeltaOperations.isEasysyncSubtype(p)) {
                  let {
                    ops: t,
                    zoneId: e
                  } = flowSyncDeltaOperations.changesetToDeltaSet(p).deltas[0];
                  let u = 0;
                  if (t != null) {
                    t.forEach(t => {
                      d = !(t == null ? undefined : t.retain);
                      if (r) {
                        if (t == null ? undefined : t.retain) {
                          b = !f(Object.keys(t.attributes ?? {}));
                        }
                        u += (t == null ? undefined : t.retain) ?? 0;
                        if (t == null ? undefined : t.insert) {
                          let e = v(t == null ? undefined : t.insert);
                          let i = f(e ? Object.keys(t.attributes ?? {}) : undefined);
                          h = !e || !i;
                        }
                        u += (t == null ? undefined : t.insert?.length) ?? 0;
                        if ((t == null ? undefined : t.delete) && i) {
                          m = function (t, e, i, r) {
                            var n;
                            if (!r) {
                              return true;
                            }
                            let l = v(((n = r.getZoneState(i)) === null || n === undefined ? undefined : n.getModelText().slice(t, e)) ?? "");
                            let u = f(l ? r.getAttributes({
                              line: 0,
                              zoneId: i,
                              offset: t
                            }, {
                              line: 0,
                              zoneId: i,
                              offset: e
                            }).map(t => t[0]) : undefined);
                            return !l || !u;
                          }(u, u + t.delete, e, function (t) {
                            let e = t == null ? undefined : t.text;
                            let i = e ? deltaSetChangesetConverter_1.attributedTextToDeltaSet(e.initialAttributedTexts, e.apool) : undefined;
                            if (i) {
                              return new contentStateManager.ContentStateManager({
                                deltaSet: i,
                                modulesContainer: editorModuleConstantsConfig.editorModuleManager
                              });
                            } else {
                              return undefined;
                            }
                          }(i));
                        }
                        u += (t == null ? undefined : t.delete) ?? 0;
                      }
                    });
                  }
                  a = b || h || m;
                } else {
                  let t;
                  d = Object.values(p.action).some(e => {
                    let {
                      initialAttributedTexts: i
                    } = e;
                    let r = i.text["0"].length;
                    if (t === undefined) {
                      t = r;
                    }
                    return a = t !== r;
                  });
                }
                return {
                  hasChangeTextLength: d,
                  isUserEdit: r ? a : d
                };
              }(b, e, t.snapshotBeforeApply);
              c = i;
              return r;
            }
          case "comments":
            i = true;
            return false;
          case "children":
            {
              if (!e || !collaborativeEditingFlowSyncModule.isListUpdateOperation(b)) {
                return true;
              }
              let {
                li: t
              } = b.action;
              if (t) {
                d.push(String(t));
                return false;
              }
              return true;
            }
          case "folded":
            return !e;
          case undefined:
            {
              if (!e || !collaborativeEditingFlowSyncModule.isCreateOperation(b)) {
                return true;
              }
              let {
                oi: i
              } = b.action;
              let {
                od: n
              } = b.action;
              if ((i == null ? undefined : i.type) !== "text" || i && n) {
                return true;
              }
              if (function (t) {
                var i;
                let o = v((t == null ? undefined : (i = t.text) === null || i === undefined ? undefined : i.initialAttributedTexts?.text)[0]);
                let l = o ? t == null ? undefined : t.text?.apool : undefined;
                let u = f(Object.values((l == null ? undefined : l.numToAttrib) ?? {}).map(t => t[0]));
                return o && u;
              }(i)) {
                a.push(t.id);
              }
              return false;
            }
          default:
            return true;
        }
      });
      return (!i || !!c) && b;
    });
    let h = d.some(t => !a.includes(t));
    return !!b || !!h;
  }
  function v(t = "") {
    return Object.values(t).every(t => !!t.match(c) || !t);
  }
  function f(t) {
    return !t || !(t.length > 0) || !t.some(t => !a.some(e => t.includes(e)));
  }
  require.r(exports);
  require.d(exports, {
    getIsUserEdit: function () {
      return d;
    }
  });
}