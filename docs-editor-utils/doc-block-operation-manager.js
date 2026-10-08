// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'DocBlockManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 479790
         */
module.exports = function (module, exports, require) {
  var operationalTransformCore = require("operational-transform-core") /*id: 379386*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  var throttledArrayDiffUtil = require("throttled-array-diff-util") /*id: 222302*/;
  var blockActionConstants = require("block-action-constants") /*id: 699900*/;
  var docBlockChildrenUtil = require("doc-block-children-util") /*id: 615212*/;
  let s = (e, n) => {
    let r = [];
    let o = n => {
      let i = [];
      n.forEach(n => {
        r.push(n);
        if (e[n]) {
          let r = docBlockChildrenUtil.getBlockChildren(e[n]);
          if (r == null ? undefined : r.length) {
            i.push(...r);
          }
        }
      });
      if (i.length) {
        o(i);
      }
    };
    o([n]);
    return r;
  };
  function d(e, n, r) {
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
  class f {
    get deletedBlocks() {
      return this._deletedBlocks;
    }
    constructor({
      deletedBlocks: e,
      token: n
    }) {
      d(this, "token", undefined);
      d(this, "_deletedBlocks", {});
      d(this, "deficiencyBlocks", new Set());
      d(this, "applyCacheChanges", (e, n) => {
        n.ops.forEach(n => {
          var r;
          if ((r = this.updateClientvarsMap.get(n.type)) !== null && r !== undefined) {
            r({
              clientvarsCache: e,
              data: n.data,
              blockWillApplyVersion: n.blockWillApplyVersion
            });
          }
        });
      });
      d(this, "handleNewChanges", e => {
        let {
          clientvarsCache: n,
          blockWillApplyVersion: r,
          data: o
        } = e;
        let {
          recordChange: i,
          isNewEntity: l
        } = o;
        let {
          id: c,
          ops: u
        } = i;
        this.handleMetaChange({
          clientvarsCache: n,
          data: o
        });
        return this.apply(n, c, u, l ? 1 : r);
      });
      d(this, "handleAcceptCommit", e => {
        var r;
        let {
          clientvarsCache: o,
          blockWillApplyVersion: i,
          data: l
        } = e;
        if (!l.recordOperation?.ops || ((r = l.recordOperation) === null || r === undefined ? undefined : r.ops.length) === 0) {
          throw Error("ops is empty");
        }
        this.handleMetaChange({
          clientvarsCache: o,
          data: l
        });
        return this.apply(o, l.id, l.recordOperation.ops, i);
      });
      d(this, "apply", (e, n, r, i) => {
        var l;
        let c = false;
        let u = {
          id: "",
          data: {
            type: ""
          },
          version: 0
        };
        if (e.block_map[n]) {
          u = e.block_map[n];
        } else if (this.deletedBlocks[n]) {
          u = this.deletedBlocks[n];
          c = true;
        }
        let a = u.version;
        if (i === undefined) {
          throw Error("[CVC]: recordOperations version is undefined");
        }
        if (a + 1 < i) {
          throw Error("[CVC]: apply version error");
        }
        if (a + 1 > i) {
          return e;
        }
        let d = s({
          ...this.deletedBlocks,
          ...e.block_map
        }, n);
        let f = {
          id: n,
          data: operationalTransformCore.apply(u.data, r),
          version: i
        };
        if (c) {
          this.deletedBlocks[n] = f;
          return e;
        }
        e.block_map[n] = f;
        if (this.deficiencyBlocks.has(n)) {
          this.deficiencyBlocks.delete(n);
        }
        let h = s({
          ...this.deletedBlocks,
          ...e.block_map
        }, n);
        this.deleteIfNeedBlocks(e, d, h);
        this.insertIfNeedBlocks(e, d, h);
        if ((l = e.block_map[n].data.children) !== null && l !== undefined) {
          l.forEach(n => {
            if (!e.block_map[n]) {
              this.deficiencyBlocks.add(n);
            }
          });
        }
        return e;
      });
      d(this, "handleAddBlock", e => {
        let {
          clientvarsCache: n,
          data: r
        } = e;
        Object.keys(r.block_map).forEach(e => {
          n.block_map[e] = deepCloneWrapper_1.deepClone(r.block_map[e]);
          if (this.deficiencyBlocks.has(e)) {
            this.deficiencyBlocks.delete(e);
          }
        });
        return n;
      });
      d(this, "handleVersionChange", e => {
        let {
          clientvarsCache: n,
          data: r
        } = e;
        if (n.structure_version > r) {
          throw Error("baseVersion bigger than applyVersion.");
        }
        n.structure_version = r;
        return n;
      });
      d(this, "handleMentionDocChange", e => {
        let {
          clientvarsCache: n,
          data: r
        } = e;
        let [o, i, c, u] = r;
        if (i) {
          if (c) {
            safeObjectSetWrapper.safeObjectSet(n, ["mention_page_title", o], c);
          }
          if (u) {
            safeObjectSetWrapper.safeObjectSet(n, ["external_mention_url", o], u);
          }
        } else {
          if (n.external_mention_url) {
            delete n.external_mention_url[o];
          }
          if (n.mention_page_title) {
            delete n.mention_page_title[o];
          }
        }
        return n;
      });
      d(this, "handleUserInfoChange", e => {
        let {
          clientvarsCache: o,
          data: i
        } = e;
        let [c, u] = i;
        safeObjectSetWrapper.safeObjectSet(o, ["user_map", c], {
          uid: c,
          name: u.name,
          avatar_url: u.avatar_url ?? "",
          en_name: u.en_name ?? "",
          i18n_value: u == null ? undefined : u.i18n_value
        });
        return o;
      });
      d(this, "handleMetaChange", e => {
        let {
          clientvarsCache: n,
          data: r
        } = e;
        if (r.editTime) {
          safeObjectSetWrapper.safeObjectSet(n, ["meta_map", this.token, "edit_time"], r.editTime);
        }
        return n;
      });
      d(this, "deleteIfNeedBlocks", (e, n, r) => {
        throttledArrayDiffUtil.throttledArrayDiff(n, r).forEach(n => {
          if (e.block_map[n]) {
            this.deletedBlocks[n] = e.block_map[n];
            delete e.block_map[n];
          }
        });
      });
      d(this, "insertIfNeedBlocks", (e, n, r) => {
        for (let o of throttledArrayDiffUtil.throttledArrayDiff(r, n)) {
          if (this.deletedBlocks[o]) {
            e.block_map[o] = this.deletedBlocks[o];
            delete this.deletedBlocks[o];
          }
        }
      });
      d(this, "checkHasDeficiencyBlocks", e => {
        if (this.deficiencyBlocks.size === 0) {
          return false;
        }
        for (let r of this.deficiencyBlocks) {
          for (let o of Object.keys(e.block_map)) {
            var n;
            let i = (n = e.block_map[o].data.children) === null || n === undefined ? undefined : n.includes(r);
            if ((!e.block_map[r] || !i) && i) {
              return true;
            }
            this.deficiencyBlocks.delete(r);
            break;
          }
        }
        return false;
      });
      d(this, "updateClientvarsMap", new Map([[blockActionConstants.blockActionTypes.ACCEPT_COMMIT, this.handleAcceptCommit], [blockActionConstants.blockActionTypes.NEW_CHANGES, this.handleNewChanges], [blockActionConstants.blockActionTypes.ADD_BLOCK_DATA, this.handleAddBlock], [blockActionConstants.blockActionTypes.VERSION_CHANGE, this.handleVersionChange], [blockActionConstants.blockActionTypes.MENTION_DOC_CHANGE, this.handleMentionDocChange], [blockActionConstants.blockActionTypes.MENTION_USER_CHANGE, this.handleUserInfoChange], [blockActionConstants.blockActionTypes.EDITTIME_CHANGE, this.handleMetaChange]]));
      d(this, "destroy", () => {
        this.deficiencyBlocks = new Set();
        this._deletedBlocks = {};
        this.token = "";
      });
      this._deletedBlocks = e;
      this.token = n;
    }
  }
  require.d(exports, {
    DocBlockManager: function () {
      return f;
    }
  });
}