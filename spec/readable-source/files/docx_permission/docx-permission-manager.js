// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'deepEqualUtil_1'
// - Resolved require(702050) to 'deep-equal-util_1'
// - Updated imported property 'Z' to 'deepEqual' (module 702050)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_permission.09b6a3f1.js
         * chunkId: 79036
         * moduleId: 594489
         */
module.exports = function (module, exports, require) {
  var r;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  function n(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  (r = {})[r.View = 1] = "View";
  r[r.Edit = 2] = "Edit";
  r[r.Comment = 3] = "Comment";
  r[r.Export = 4] = "Export";
  r[r.Copy = 5] = "Copy";
  r[r.Duplicate = 6] = "Duplicate";
  r[r.Transfer = 7] = "Transfer";
  r[r.Manage = 8] = "Manage";
  r[r.ViewHistory = 9] = "ViewHistory";
  r[r.Delete = 10] = "Delete";
  let o = r;
  class m {
    get state() {
      return null;
    }
    get embedWithPerm() {
      return new Map();
    }
    collectChangeEvent(e) {}
    addPermissionFromMeta(e) {
      if (e == null ? undefined : e.length) {
        e.forEach(e => {
          this.embedPermMap.set(e.token, e.action_list);
        });
        this.onPermissionChange(e.map(e => this.formatDoubaoEmbedPermission({
          action_list: e.action_list,
          token: e.token,
          type: e.type,
          title: e.title
        })));
      }
    }
    addEmbedObjs(e) {
      let t = [];
      e.forEach(e => {
        if (!this.findEmbedObj(this.embedObjList, e)) {
          t.push(e);
          this.embedObjList.push(e);
        }
      });
    }
    removeEmbedObjs(e) {
      let t = [];
      this.embedObjList.forEach(i => {
        if (!this.findEmbedObj(e, i)) {
          t.push(i);
        }
      });
      this.embedObjList = t;
    }
    getEmbedObjs() {
      return this.embedObjList;
    }
    getEmbedObjAllBoolPermByToken(e) {
      return null;
    }
    destroy() {
      this.embedObjList = [];
      if (this.unsubscribePermission) {
        this.unsubscribePermission();
      }
    }
    getOwnerByToken(e) {
      return null;
    }
    updateEmbedObjList(e) {
      if (!deepEqualUtil_1.deepEqual(this.embedObjList, e)) {
        this.addEmbedObjs(e);
      }
    }
    fetchNoPermUser(e, t) {
      return null;
    }
    throttleFetchNoPermUser(e, t) {
      return null;
    }
    fetchUserPermission(e) {
      if (e) {
        return Promise.resolve({});
      } else {
        return Promise.reject(Error("embedObj required"));
      }
    }
    checkApplyEmbed(e) {
      let {
        token: t,
        type: i,
        title: r
      } = e;
      let s = this.embedPermMap.get(t);
      if (!s) {
        return;
      }
      let n = this.formatDoubaoEmbedPermission({
        action_list: s,
        token: t,
        type: i,
        title: r
      });
      this.onPermissionChange([n]);
    }
    formatDoubaoEmbedPermission(e) {
      let {
        action_list: t,
        token: i,
        type: r,
        title: s
      } = e;
      let n = {
        readable: t.indexOf(o.View) >= 0,
        commentable: t.indexOf(o.Comment) >= 0,
        editable: t.indexOf(o.Edit) >= 0,
        shareable: t.indexOf(o.Export) >= 0
      };
      return {
        token: i,
        type: r,
        permission: 0,
        userPermissions: n,
        embedPermission: {
          applyable: true,
          code: (n.readable, "ALLOW")
        },
        ...(s ? {
          title: s
        } : {}),
        noPermMemberNum: 0
      };
    }
    findEmbedObj(e, t) {
      return e.find(e => e.token === t.token);
    }
    bulkGrantPermission(e) {
      let {
        embedObj: t,
        onGrantPermission: i
      } = e;
      if (t) {
        if (i != null) {
          i("SUCCEED");
        }
      }
    }
    constructor(e) {
      n(this, "embedObjList", []);
      n(this, "embedPermMap", new Map());
      n(this, "oldPermissionChangeData", []);
      n(this, "onPermissionChange", undefined);
      n(this, "token", undefined);
      n(this, "type", undefined);
      n(this, "unsubscribePermission", undefined);
      this.onPermissionChange = t => {
        t.forEach(e => {
          let t = this.oldPermissionChangeData.findIndex(t => t.token === e.token);
          if (t >= 0) {
            this.oldPermissionChangeData[t] = e;
          } else {
            this.oldPermissionChangeData.push(e);
          }
        });
        if (e.onPermissionChange) {
          e.onPermissionChange(t);
        }
      };
      this.token = e.token;
      this.type = e.type;
      if (this.token) {
        this.type;
      }
    }
  }
  let a = e => {};
  require.r(exports);
  require.d(exports, {
    EmbedObjPermissionManager: function () {
      return m;
    },
    initPermissionServices: function () {
      return a;
    }
  });
}