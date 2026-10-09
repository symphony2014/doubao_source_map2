// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'HeadingOrderManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 703122
         */
module.exports = function (module, exports, require) {
  require("heading-order-context-wrapper") /*id: 350443*/;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var editorDeltaTextUtils = require("editor-delta-text-utils") /*id: 728515*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var mobileUiEventTokens = require("mobile-ui-event-tokens") /*id: 763596*/;
  var docListOpsHandler = require("doc-list-ops-handler") /*id: 691963*/;
  var editorActionConstants = require("editor-action-constants") /*id: 216889*/;
  var orderedBlockManager = require("ordered-block-manager") /*id: 107278*/;
  var orderedBlockUtils = require("ordered-block-utils") /*id: 5008*/;
  var editorUiConstants = require("editor-ui-constants") /*id: 455663*/;
  var docEditorConstants_1 = require("doc-editor-constants_1") /*id: 2607*/;
  var flowHeadingFoldUtils = require("flow-heading-fold-utils") /*id: 451530*/;
  function b(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  class y extends orderedBlockManager.OrderedBlockManager {
    destroy() {
      var e;
      super.destroy();
      this.blockManager.removeListener(editorUiConstants.editorMountClass, this.handleEditorMount);
      if ((e = this.sub) !== null && e !== undefined) {
        e.unsubscribe();
      }
    }
    get dataReady() {
      return this.isDataReady;
    }
    hasOrderedHeading() {
      return Array.from(this.headingMap).some(e => {
        let [i, r] = e;
        return r.some(e => e.size > 0);
      });
    }
    getOrderText(e) {
      let i = this.getOrder(e);
      if (i) {
        if (i.length === 1) {
          return `${i[0]}.`;
        } else {
          return i.join(".");
        }
      } else {
        return null;
      }
    }
    getHeadingText(e) {
      let r = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      let n = arguments.length > 2 ? arguments[2] : undefined;
      if (syncUrlBlockUtils.isSyncingActive() && n && n.snapshot.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE && !n.snapshot?.text) {
        return "";
      }
      let o = this.blockManager.getBlockIdsByRecordId(e)[0];
      let d = this.getOrderText(e);
      let u = d ? `${d} ` : "";
      if (r) {
        let e = this.blockManager.getBlockModelByBlockIdNotCheck(o);
        if (e && editorTextBlockUtilities.isTextBlock(e)) {
          let i = e.zoneState.getContent().ops.map(e => ({
            ...e,
            text: e.insert.replace(/\n/g, " \n")
          })).map(e => editorDeltaTextUtils.getDeltaLength(e, this.blockManager.editorAPI.modelService, true));
          return `${u}${i.join("")}`;
        }
      }
      let h = "";
      if (n) {
        h = editorDeltaTextUtils.getDeltaText(n.snapshot, this.blockManager.editorAPI.modelService);
      } else {
        let e = this.blockManager.getBlockModelByBlockIdNotCheck(o);
        if (e) {
          h = editorDeltaTextUtils.getDeltaText(e.record.snapshot, this.blockManager.editorAPI.modelService);
        }
      }
      return `${u}${h.trim()}`;
    }
    getMarkdownAfterInsertInfo(e, i) {
      let r = parseInt(i[i.length - 2], 10);
      let n = i.length - 1;
      let {
        position: o,
        seq: l,
        seqLevel: s
      } = this.getInsertPosition(e, r);
      let a = this.blockManager.getBlockStructByBlockId(e);
      if (!a) {
        return null;
      }
      let c = flowHeadingFoldUtils.parseHeadingLevel(a.type);
      let d = this.hasParent(a);
      let u = "auto";
      let h = "auto";
      if (o === "top") {
        if (n === 1) {
          u = r;
          h = c !== 1 && d ? 1 : "auto";
        } else {
          u = r;
          h = "auto";
        }
      } else if (o === "bottom") {
        if (r === 1) {
          u = r;
          h = n === 1 && c !== 1 && d ? 1 : "auto";
        } else {
          u = "auto";
          h = "auto";
        }
      } else if (o === "merge") {
        u = l || "auto";
        h = s || "auto";
      } else if (r === 1) {
        u = r;
        h = n === 1 && c !== 1 && d ? 1 : "auto";
      } else {
        u = "auto";
        h = "auto";
      }
      return {
        seq: u,
        seqLevel: h
      };
    }
    getInsertPosition(e, i) {
      let r = this.blockManager.getBlockStructByBlockId(e);
      let n = {
        position: "top"
      };
      if (!r) {
        return n;
      }
      let o = this.getSiblingBlocks(r, docEditorConstants_1.directionTypes.DOWN);
      let l = this.getSiblingBlocks(r, docEditorConstants_1.directionTypes.UP);
      if (l.length === 0 && o.length === 0) {
        n.position = "top";
      } else if (l.length > 0 && o.length === 0) {
        n.position = "bottom";
      } else if (l.length === 0 && o.length > 0) {
        n.position = "top";
      } else {
        let e = o[0];
        let r = e.record.get(["seq"]);
        let l = e.record.get(["seq_level"]) || "auto";
        if (r !== "auto") {
          if (r - 1 === i) {
            n.position = "merge";
            n.seq = r - 1;
            n.seqLevel = l;
          } else {
            n.position = "bottom";
          }
        } else {
          n.position = "between";
        }
      }
      return n;
    }
    hasParent(e) {
      let i = this.findClosestHeading(e, docEditorConstants_1.directionTypes.DOWN);
      let r = this.findClosestHeading(e, docEditorConstants_1.directionTypes.UP);
      return i.parent || r.parent;
    }
    hasSameHeading(e, i) {
      let r = this.blockManager.getBlockStructByBlockId(e);
      if (!r) {
        return false;
      }
      let n = flowHeadingFoldUtils.parseHeadingLevel(r.type);
      if (!n) {
        return false;
      }
      let o = this.getIterator(r, i);
      let l = o.next();
      while (l) {
        if (l) {
          let e = flowHeadingFoldUtils.parseHeadingLevel(l.type) || flowHeadingFoldUtils.parseHeadingLevel(l.record.snapshot.type);
          if (!e) {
            l = o.next();
            continue;
          }
          if (n === e) {
            return l;
          }
          if (n > e) {
            break;
          }
          l = o.next();
          continue;
        }
        l = o.next();
      }
      return false;
    }
    getSiblingBlocks(e, i = docEditorConstants_1.directionTypes.DOWN) {
      let r = flowHeadingFoldUtils.parseHeadingLevel(e.type);
      let n = this.getContainer(e);
      if (!r) {
        return [];
      }
      let o = this.getIterator(e, i);
      let l = o.next();
      if (l && flowHeadingFoldUtils.parseHeadingLevel(l.type) === r && this.getContainer(l) === n) {
        return [l];
      }
      while (l) {
        if (l) {
          let e = flowHeadingFoldUtils.parseHeadingLevel(l.type);
          if (this.getContainer(l) !== n) {
            return [];
          }
          if (!e || e > r) {
            l = o.next();
            continue;
          }
          if (e === r) {
            return [l];
          }
          break;
        }
        l = o.next();
      }
      return [];
    }
    match(e) {
      let i = e.record.get(["seq"]);
      return (this.matchType(e.type) || this.matchType(e.record.snapshot.type)) && this.isValidSeq(i);
    }
    matchType(e) {
      return typeof e == "string" && docBlockTypeConstants.headingTypeArray.includes(e);
    }
    forceUpdate(e) {
      var i;
      let r = this.blockManager.getBlockIdsByRecordId(e)[0];
      this.blockManager.dispatch(docEditorConstants_1.updateFlags.FORCE_UPDATE, e, r);
      this.layoutManager.notifyNodeHeightChange(r);
      let n = (i = this.selectionAPI) === null || i === undefined ? undefined : i.getSelection();
      if (n == null ? undefined : n.some(e => {
        let {
          id: i
        } = e;
        return i === r;
      })) {
        let e = this.blockManager.editorAPI.getService(mobileUiEventTokens.mobileToolbarToken, {
          optional: true
        });
        if (e != null) {
          e.update();
        }
      }
    }
    getOrderLevelMap(e) {
      let i = new Map();
      let {
        seqLevel: r
      } = e[0];
      let n = [];
      for (let e = 0; e < 9; e++) {
        n.push(new Set());
      }
      for (let i of e) {
        let e = flowHeadingFoldUtils.parseHeadingLevel(i.blockType);
        if (n && e) {
          n[e - 1].add(i.recordId);
        }
      }
      for (let e = 0, o = r === "auto" ? 1 : r; e < n.length; e++) {
        let r = e + 1;
        if (n[e].size > 0) {
          i.set(r, o);
          o++;
        }
      }
      if (i.size > 0) {
        return i;
      } else {
        return null;
      }
    }
    getContainer(e) {
      let i = e.parent;
      while (i) {
        if (docEditorConstants_1.blockTypeList.includes(i.type)) {
          return i;
        }
        i = i.parent;
      }
      return this.blockManager.getBlockStructByBlockId(this.blockManager.rootBlockId);
    }
    getIterator(e, i) {
      let r = this.getContainer(e);
      let n = e;
      let o = () => {
        if (i === docEditorConstants_1.directionTypes.DOWN) {
          while (n && docEditorConstants_1.blockTypeList.includes(n.type)) {
            while (n && n.children.length > 0) {
              n = n.children[n.children.length - 1];
            }
            n = n.next;
          }
          if (n && this.getContainer(n) !== r) {
            n = null;
          }
        } else if (i === docEditorConstants_1.directionTypes.UP) {
          while (n && this.getContainer(n) !== r) {
            let e = this.getContainer(n);
            if (e) {
              n = e.previous;
            }
          }
        }
      };
      let l = () => {
        while (n && (i === docEditorConstants_1.directionTypes.DOWN ? n && docEditorConstants_1.blockTypeList.includes(n.type) ? o() : n = n.next : i === docEditorConstants_1.directionTypes.UP && (n = n.previous, o()), !!n && !this.match(n)));
        return n;
      };
      return {
        latest: () => !n || this.match(n) ? n : l(),
        next: l
      };
    }
    findClosestHeading(e, i = docEditorConstants_1.directionTypes.UP, r) {
      let n = {
        closest: null,
        parent: null
      };
      let o = r === undefined ? flowHeadingFoldUtils.parseHeadingLevel(e.type) : r;
      if (o == null) {
        return n;
      }
      let l = this.getIterator(e, i);
      n.closest = l.next();
      let s = n.closest;
      while (s) {
        let e = flowHeadingFoldUtils.parseHeadingLevel(s.type);
        if (!e || e === 1 && o === 1) {
          break;
        }
        if (e < o) {
          n.parent = s;
          break;
        }
        s = l.next();
      }
      return n;
    }
    collectHeadings(e, i = docEditorConstants_1.directionTypes.DOWN, r) {
      let n = [];
      let o = r === undefined ? flowHeadingFoldUtils.parseHeadingLevel(e.type) : r;
      if (o == null) {
        return [];
      }
      let l = this.getIterator(e, i);
      let s = l.latest();
      while (s) {
        let i = flowHeadingFoldUtils.parseHeadingLevel(s.type);
        if (!i) {
          break;
        }
        if (i > o && this.getContainer(s) === this.getContainer(e)) {
          n.push({
            recordId: s.record.id,
            blockType: s.type,
            seq: s.record.get(["seq"]),
            seqLevel: s.record.get(["seq_level"]) || "auto",
            isDeleted: orderedBlockUtils.isBlockDeleted(s),
            isCopy: s.record.snapshot.seq === "copy"
          });
        } else {
          break;
        }
        s = l.next();
      }
      return n;
    }
    initHeadingOrder(e) {
      let i = e.children[0];
      if (i) {
        let e = this.collectHeadings(i, docEditorConstants_1.directionTypes.DOWN, 0);
        let r = this.calOrderQueue(e);
        this.calcOrder(r);
      }
    }
    batchUpdateContainer(e = []) {
      let i = new Map();
      e.forEach(e => {
        let r = this.blockManager.getBlockStructsByRecordId(e)[0];
        let n = this.getContainer(r);
        if (n && i.get(n.recordId) === undefined) {
          i.set(n.recordId, r);
        }
      });
      for (let r of i.values()) {
        this.renumber(r, true);
      }
    }
    renumber(e, i = false, r) {
      let n = this.getContainer(e);
      if (i && n) {
        return this.initHeadingOrder(n);
      }
      let {
        closest: o,
        parent: l
      } = this.findClosestHeading(e, docEditorConstants_1.directionTypes.UP, r);
      let s = l ? flowHeadingFoldUtils.parseHeadingLevel(l.type) : 0;
      let a = o ? this.orderMap.get(o.record.id) : [];
      let c = this.collectHeadings(e, docEditorConstants_1.directionTypes.DOWN, s || 0);
      let d = this.calOrderQueue(c);
      this.calcOrder(d, a);
    }
    initContainer(e) {
      if (!this.containerList.includes(e)) {
        this.containerList.push(e);
      }
    }
    calOrderQueue(e, i = false) {
      let r = [];
      let n = 0;
      for (let o of e) {
        let {
          seqLevel: e,
          blockType: l,
          seq: s
        } = o;
        let a = flowHeadingFoldUtils.parseHeadingLevel(l) || 0;
        if (e !== "auto" || r.length === 0 || i && s !== "auto") {
          r.push([o]);
          n = r.length - 1;
        } else {
          for (let e = n; e >= 0; e--) {
            let i = r[e][0];
            let l = flowHeadingFoldUtils.parseHeadingLevel(i.blockType) || 0;
            if (i.isDeleted && !o.isDeleted) {
              if (e === 0) {
                r.push([o]);
                n = r.length - 1;
                break;
              }
              continue;
            }
            if (a >= l || a < l && i.seqLevel === "auto") {
              if (a === l && i.seqLevel !== "auto" && s !== "auto" && s !== "copy") {
                if (e === 0) {
                  r.push([o]);
                  n = r.length - 1;
                  break;
                }
                continue;
              }
              r[e].push(o);
              n = e;
              break;
            }
            if (e === 0) {
              r.push([o]);
              n = r.length - 1;
            }
          }
        }
      }
      return r;
    }
    async batchModifySeqIfNecessary(e) {
      let i = [];
      let {
        recordOpsType: r,
        recordOps: n,
        targetRecordOpTypes: l,
        targetRecordOps: s,
        shouldCollab: a = true
      } = e;
      let {
        insertRecordOps: c
      } = docListOpsHandler.splitInsertRemoveOps(s, l);
      switch (r) {
        case editorActionConstants.operationTypes.MARKDOWN:
          let d = this.blockManager.getBlockStructsByRecordId(n[0].id)[0];
          let f = this.getSiblingBlocks(d);
          let p = this.getSiblingBlocks(d, docEditorConstants_1.directionTypes.UP);
          if (f.length > 0 && p.length > 0) {
            let e = f[0].record.get(["seq"]);
            if (e !== "auto" && e - 1 !== parseInt(d.record.get(["seq"]), 10)) {
              this.handleInsert(d);
              break;
            }
          }
          if (a) {
            await this.blockManager.applyTransaction(`heading:${r}:modifySeq`, e => {
              f.forEach(i => {
                e.replace(i.recordId, ["seq"], "auto");
                e.replace(i.recordId, ["seq_level"], "auto");
              });
            }, {
              mergeMode: collaborativeEditingFlowSyncModule.CollabMode.MERGE
            });
          }
          this.handleInsert(d);
          break;
        case editorActionConstants.operationTypes.PASTE:
        case editorActionConstants.operationTypes.MOVE:
          let b = new Set();
          if (c.length > 0 || r === editorActionConstants.operationTypes.MOVE && s.length > 0) {
            (r === editorActionConstants.operationTypes.MOVE ? s : c).forEach(e => {
              let i = flowHeadingFoldUtils.getHeadingInsert(this.blockManager, e).recordIds;
              let n = r === editorActionConstants.operationTypes.PASTE ? flowHeadingFoldUtils.getHeadingRemove(this.blockManager, e).recordIds : [];
              i.forEach(e => {
                if (!n.includes(e)) {
                  b.add(e);
                }
              });
            });
            if ((i = [...b].filter(e => {
              let i = this.blockManager.getBlockStructsByRecordId(e)[0];
              return i && this.match(i);
            })).length === 0 && r === editorActionConstants.operationTypes.MOVE) {
              b.forEach(e => {
                let i = this.blockManager.getBlockStructsByRecordId(e)[0];
                if (docEditorConstants_1.blockTypeList.includes(i.type)) {
                  this.initHeadingOrder(i);
                }
              });
              break;
            }
            if (r === editorActionConstants.operationTypes.PASTE) {
              s.forEach(e => {
                e.ops.forEach(e => {
                  let n = e == null ? undefined : e.action?.oi;
                  if (n && n.children) {
                    n.children.forEach(e => {
                      if (this.blockManager.hasRecordByRecordId(e)) {
                        let r = this.blockManager.getBlockStructsByRecordId(e)[0];
                        if (this.match(r)) {
                          i.push(e);
                        }
                      }
                    });
                  }
                });
              });
            }
            if (!i.length) {
              break;
            }
            let e = this.blockManager.getBlockStructsByRecordId(i[0])[0];
            let n = this.blockManager.getBlockStructsByRecordId(i[i.length - 1])[0];
            let l = e.record.get(["seq"]);
            let a = this.getSiblingBlocks(n, docEditorConstants_1.directionTypes.DOWN);
            let d = a[0] && a[0].record.get(["seq"]);
            let u = a[0] && a[0].record.get(["seq_level"]);
            let f = this.getSiblingBlocks(e, docEditorConstants_1.directionTypes.UP);
            if (a.length > 0 && f.length > 0 && d !== "auto") {
              if (i.length === 1) {
                if (l !== "auto" && parseInt(l, 10) + 1 === parseInt(d, 10)) {
                  setTimeout(async () => {
                    await this.blockManager.applyTransaction(`heading:${r}:modifySeq`, i => {
                      i.replace(e.recordId, ["seq_level"], u ? u.toString() : "auto");
                      i.replace(a[0].recordId, ["seq"], "auto");
                      i.replace(a[0].recordId, ["seq_level"], "auto");
                    }, {
                      mergeMode: collaborativeEditingFlowSyncModule.CollabMode.MERGE
                    });
                  });
                } else {
                  setTimeout(async () => {
                    await this.blockManager.applyTransaction(`heading:${r}:modifySeq`, i => {
                      i.replace(e.recordId, ["seq_level"], "auto");
                      i.replace(e.recordId, ["seq"], "auto");
                    }, {
                      mergeMode: collaborativeEditingFlowSyncModule.CollabMode.MERGE
                    });
                  });
                }
              } else {
                let e = i.map(e => {
                  let i = this.blockManager.getBlockStructsByRecordId(e)[0];
                  return {
                    recordId: i.record.id,
                    blockType: i.type,
                    seq: i.record.get(["seq"]),
                    seqLevel: i.record.get(["seq_level"]) || "auto",
                    isDeleted: orderedBlockUtils.isBlockDeleted(i),
                    isCopy: i.record.get(["seq"]) === "copy"
                  };
                });
                let n = this.calOrderQueue(e, true);
                if (n.length >= 1) {
                  setTimeout(async () => {
                    await this.blockManager.applyTransaction(`heading:${r}:modifySeq`, e => {
                      n[0].forEach(i => {
                        e.replace(i.recordId, ["seq"], "auto");
                        e.replace(i.recordId, ["seq_level"], "auto");
                      });
                      if (n.length - 1 != 0) {
                        let i = n[n.length - 1];
                        e.replace(i[0].recordId, ["seq"], "1");
                        e.replace(i[0].recordId, ["seq_level"], "auto");
                        e.replace(a[0].recordId, ["seq"], "auto");
                        e.replace(a[0].recordId, ["seq_level"], "auto");
                      }
                    }, {
                      mergeMode: collaborativeEditingFlowSyncModule.CollabMode.MERGE
                    });
                  });
                }
              }
            } else if (i.length > 0) {
              setTimeout(async () => {
                await this.blockManager.applyTransaction(`heading:${r}:modifySeq`, e => {
                  for (let r = 0; r < i.length; r++) {
                    let n = this.blockManager.getBlockModelsByRecordId(i[r])[0];
                    if (r === 0) {
                      e.replace(i[r], ["seq"], "auto");
                    }
                    if (n && !n.record.get(["seq_level"])) {
                      e.insert(i[r], ["seq_level"], "auto");
                    } else if (r === 0) {
                      e.replace(i[r], ["seq_level"], "auto");
                    }
                  }
                }, {
                  mergeMode: collaborativeEditingFlowSyncModule.CollabMode.MERGE
                });
              });
            }
            this.batchUpdateContainer(i);
          }
          break;
        case editorActionConstants.operationTypes.INSERT:
          c.forEach(e => {
            i.push(...flowHeadingFoldUtils.getHeadingInsert(this.blockManager, e).recordIds);
          });
          i = i.filter(e => {
            let i = this.blockManager.getBlockStructsByRecordId(e)[0];
            if (i && docEditorConstants_1.blockTypeList.includes(i.type) && i.children.length > 0) {
              this.initHeadingOrder(i);
              return false;
            } else {
              return i && this.match(i);
            }
          });
          this.batchUpdateContainer(i);
      }
    }
    constructor(e) {
      var i;
      var r;
      super(e);
      i = this;
      b(this, "blockTypes", [...docBlockTypeConstants.headingTypeArray]);
      b(this, "containerType", [...docEditorConstants_1.blockTypeList]);
      b(this, "headingMap", new Map());
      b(this, "containerList", []);
      b(this, "sub", undefined);
      b(this, "calcOrder", function (e, r = []) {
        let n = [...r];
        let o = [...n];
        let l = [...n];
        let s = false;
        for (let r of e) {
          let e = i.getOrderLevelMap(r);
          if (e) {
            n = [...o];
            s = false;
            for (let a of r) {
              let r = flowHeadingFoldUtils.parseHeadingLevel(a.blockType);
              if (!r) {
                continue;
              }
              if (a.seqLevel !== "auto") {
                s = true;
              }
              if (!a.isDeleted && !a.isCopy) {
                n = s ? [...l] : [...o];
              }
              let c = e.get(r);
              if (!c) {
                continue;
              }
              if (n.length === c) {
                n[c - 1]++;
              } else if (n.length < c) {
                for (let e = n.length; e < c; e++) {
                  n.push(1);
                }
              } else {
                let e = n.length;
                for (let i = c; i < e; i++) {
                  n.pop();
                }
                n[c - 1]++;
              }
              if (a.seq === "copy") {
                n[c - 1]--;
              } else if (a.seq !== "auto") {
                n[c - 1] = parseInt(a.seq.toString(), 10);
              }
              let d = i.orderMap.get(a.recordId);
              if (!d || d.join(",") !== n.join(",")) {
                i.updateOrder(a.recordId, [...n]);
                i.blockManager.dispatch(docEditorConstants_1.updateFlags.FORCE_UPDATE, a.recordId);
              }
              if (!a.isDeleted && !a.isCopy) {
                if (s) {
                  l = [...n];
                } else {
                  o = [...n];
                }
              }
            }
          }
        }
      });
      b(this, "SHOULD_NOT_SKIP_TRANSACTIONS", [docxEditorCore.REPLACE_PENDING, "undo", "redo"]);
      b(this, "handleInsert", e => {
        if (this.match(e)) {
          this.renumber(e, true);
          this.asyncUpdateView();
        }
      });
      b(this, "handleRemove", async function (e, r) {
        let n = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        let l = r ? flowHeadingFoldUtils.parseHeadingLevel(r) : flowHeadingFoldUtils.parseHeadingLevel(e.type);
        let s = i.orderMap.get(e.record.id);
        i.orderMap.delete(e.record.id);
        i.pendingSet.add(e.record.id);
        i.asyncUpdateView();
        let a = i.getSiblingBlocks(e)[0];
        let c = i.getSiblingBlocks(e, docEditorConstants_1.directionTypes.UP);
        let d = e.parent;
        setTimeout(() => {
          if (s && a && n) {
            if (c[0] && !i.blockManager.getBlockModelByBlockIdNotCheck(c[0].id)) {
              return;
            }
            let r = "auto";
            let n = s[s.length - 1];
            let l = i.hasParent(e);
            let d = c[0] ? i.orderMap.get(c[0].record.id) : "auto";
            if (d && d !== "auto") {
              r = d[d.length - 1] === n - 1 ? "auto" : n;
            }
            let u = l && s.length === 1 ? "1" : "auto";
            if (r !== "auto") {
              i.blockManager.applyTransaction("heading:remove:modifySeq", e => {
                e.replace(a.recordId, ["seq"], r.toString());
                e.replace(a.recordId, ["seq_level"], u);
              }, {
                mergeMode: collaborativeEditingFlowSyncModule.CollabMode.MERGE
              });
            }
          }
          if (d === e.parent) {
            if (l) {
              i.renumber(e, true, l);
            }
          } else {
            let e = (a == null ? undefined : a.id) || c[0]?.id;
            let n = e && i.blockManager.getBlockStructByBlockId(e);
            if (n && l) {
              i.renumber(n, true, l);
            }
          }
        });
      });
      b(this, "handleEditorMount", () => {
        if (this.env === orderedBlockManager.RenderEnvEnum.HISTORY) {
          this.handleDataReady();
        }
      });
      b(this, "handleDataReady", () => {
        this.isDataReady = true;
        if (this.containerList.length === 0) {
          this.asyncUpdateView();
          return;
        }
        for (let e of this.containerList) {
          let i = this.blockManager.getBlockIdsByRecordId(e)[0];
          let r = this.blockManager.getBlockStructByBlockId(i);
          if (r) {
            this.initHeadingOrder(r);
          }
        }
      });
      this.init();
      this.blockManager.addListener(editorUiConstants.editorMountClass, this.handleEditorMount);
      this.sub = (r = this.blockManager.lazyRecordStatus) === null || r === undefined ? undefined : r.applyAllDone$.subscribe(this.handleDataReady);
    }
  }
  var S = y;
  require.d(exports, {
    HeadingOrderManager: function () {
      return S;
    }
  });
}