// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'GridBlockSelectionManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 967288
         */
module.exports = function (module, exports, require) {
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var docxSelectionBlockUtils = require("docx-selection-block-utils") /*id: 43039*/;
  function c(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  class u {
    getWidthRatio(e) {
      let n = this.blockManager.getRecord(e);
      if (n.snapshot.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
        let e = n.snapshot.width_ratio;
        if (isNumberUtil.isNumber(e)) {
          return e;
        } else {
          return 0;
        }
      }
      return 0;
    }
    shouldSkip(e) {
      let n = this.blockManager.getBlockModelByBlockIdNotCheck(e);
      if (!n) {
        return true;
      }
      let r = n.parent;
      return !!r && (r.type === docBlockTypeConstants.blockTypeConstants.GRID || r.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) && this.blockChildrenSet.has(r.id) && !this.blockChildrenSet.get(r.id).has(n.id);
    }
    hasPartial() {
      return !!Object.keys(this.partialRecordMap).length || !!this.destructedBlockIds.size;
    }
    getBlockIds() {
      return this.blockIds;
    }
    getRecordIds() {
      return this.blockIds.map(e => {
        return this.blockManager.getRecordByBlockId(e)?.id;
      }).filter(Boolean);
    }
    getRecordMap() {
      return Object.assign({}, this.dataRecordMap, this.partialRecordMap);
    }
    constructor(e, n, r, o = false) {
      this.blockManager = e;
      c(this, "dataRecordMap", {});
      c(this, "partialRecordMap", {});
      c(this, "destructedBlockIds", new Set());
      c(this, "blockChildrenSet", new Map());
      c(this, "blockIds", undefined);
      c(this, "sortBlockIds", e => {
        let n = {};
        let r = e => {
          if (n[e]) {
            return n[e];
          }
          let r = [];
          let o = this.blockManager.getBlockModelByBlockId(e);
          while (o == null ? undefined : o.parent) {
            r.push(o == null ? undefined : o.position);
            o = this.blockManager.getBlockModelByBlockId(o.parent.id);
          }
          r.reverse();
          n[e] = r;
          return r;
        };
        let o = (e, n) => {
          let o = r(e);
          let i = r(n);
          for (let e = 0; e < o.length && e < i.length; e++) {
            if (o[e] < i[e]) {
              return -1;
            }
            if (o[e] > i[e]) {
              return 1;
            }
          }
          if (o.length === i.length) {
            return 0;
          } else {
            return o.length - i.length;
          }
        };
        return e.sort((e, n) => o(e, n));
      });
      c(this, "sendChildrenToParentForOneColumnGrid", e => {
        var n;
        let r = e.parent;
        let o = this.dataRecordMap[r.record.id];
        if (!o) {
          return;
        }
        let {
          position: i
        } = e;
        let l = Array.from(this.blockChildrenSet.get(e.children[0].id)).map(e => this.blockManager.getRecordByBlockId(e).id);
        delete this.partialRecordMap[e.recordId];
        if ((n = o.snapshot.children) !== null && n !== undefined) {
          n.splice(i, 1, ...l);
        }
      });
      let u = n.map(e => e.id);
      let s = editorSelectionUtilities.hasTextSelection(n);
      let d = {};
      for (let [n, o] of Object.entries(r)) {
        if (d[n]) {
          let r = e.getRecordByBlockId(Number(n)).id;
          Object.assign(this.partialRecordMap, {
            [r]: d[n]
          });
        }
        Object.assign(this.dataRecordMap, o);
      }
      if (s) {
        let {
          newSelectedBlockIds: r,
          blockIdMap: o
        } = docxSelectionBlockUtils.createBlockSelectionMap(e, n, true, n => {
          let r = e.getBlockModelByBlockId(n);
          return !!r.parent && [docBlockTypeConstants.blockTypeConstants.GRID, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN].includes(r.parent.type);
        });
        Object.assign(d, o);
        Object.assign(this.dataRecordMap, Object.values(o).reduce((e, n) => {
          e[n.id] = n;
          return e;
        }, {}));
        u = r;
      }
      u.forEach(n => {
        let r = e.getBlockModelByBlockId(n);
        let o = r == null ? undefined : r.parent;
        let l = o == null ? undefined : o.parent;
        if (o && l && o.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN && l.type === docBlockTypeConstants.blockTypeConstants.GRID) {
          if (!this.blockChildrenSet.has(l.id)) {
            this.blockChildrenSet.set(l.id, new Set());
          }
          if (!this.blockChildrenSet.has(o.id)) {
            this.blockChildrenSet.set(o.id, new Set());
          }
          this.blockChildrenSet.get(l.id).add(o.id);
          this.blockChildrenSet.get(o.id).add(r.id);
        }
      });
      u = [...u, ...Array.from(this.blockChildrenSet.keys())].filter(n => {
        let r = e.getBlockModelByBlockId(n);
        if (r.type === docBlockTypeConstants.blockTypeConstants.GRID) {
          let e = this.blockChildrenSet.get(r.id);
          if (o) {
            return !e || e.size > 1;
          } else {
            return e && e.size > 1;
          }
        }
        if (r.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
          return false;
        }
        let l = r.parent;
        if (!l || l.type !== docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
          return true;
        }
        let a = l.parent;
        let c = this.blockChildrenSet.get(a.id);
        return !c || c.size <= 1;
      }).map(Number);
      this.blockChildrenSet.forEach((n, r) => {
        if (e.getBlockModelByBlockId(r).type === docBlockTypeConstants.blockTypeConstants.GRID && !(n.size > 1)) {
          this.destructedBlockIds.add(r);
        }
      });
      let h = {};
      this.blockChildrenSet.forEach((n, r) => {
        let o = e.getBlockModelByBlockId(r);
        if (o.type !== docBlockTypeConstants.blockTypeConstants.GRID_COLUMN && o.type !== docBlockTypeConstants.blockTypeConstants.GRID) {
          return;
        }
        if (this.destructedBlockIds.has(r)) {
          this.sendChildrenToParentForOneColumnGrid(o);
          return;
        }
        let {
          record: l
        } = o;
        if (l.snapshot.children.length === n.size) {
          this.dataRecordMap[l.id] = {
            id: l.id,
            snapshot: {
              ...l.snapshot
            }
          };
          if (h[l.id]) {
            this.dataRecordMap[l.id].snapshot.width_ratio = h[l.id];
          }
          return;
        }
        let a = Array.from(n).map(n => e.getBlockModelByBlockId(n).recordId);
        this.partialRecordMap[l.id] = {
          id: l.id,
          snapshot: {
            ...l.snapshot,
            children: a
          }
        };
        if (h[l.id]) {
          this.partialRecordMap[l.id].snapshot.width_ratio = h[l.id];
        }
        if (o.type === docBlockTypeConstants.blockTypeConstants.GRID) {
          let e = a.reduce((e, n) => e + this.getWidthRatio(n), 0);
          if (e > 0) {
            a.forEach(n => {
              let r = this.getWidthRatio(n);
              h[n] = r / e;
            });
          }
        }
      });
      let f = this.sortBlockIds(u);
      if (s) {
        f = docxSelectionBlockUtils.filterSelectedBlockIds(e, f);
      }
      this.blockIds = f;
    }
  }
  require.d(exports, {
    GridBlockSelectionManager: function () {
      return u;
    }
  });
}