// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SyncedBlockAuthorizationManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 870887
         */
module.exports = function (module, exports, require) {
  var o;
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  require("doc-token-helper-utils") /*id: 740758*/;
  var apiClientInstance = require("api-client-instance") /*id: 22981*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  (o = {})[o.success = 0] = "success";
  o[o.notExist = 3] = "notExist";
  o[o.noPermission = 4] = "noPermission";
  o[o.deleted = 1002] = "deleted";
  let u = o;
  function a(e, n, r) {
    docxUtilityHelpers.captureException(`${e} failed, code: ${n}, msg: ${r}`);
  }
  let s = async (e, n) => {
    try {
      let {
        data: r,
        code: o,
        msg: c
      } = await apiClientInstance.apiClient.post("/platform/user_features", {
        token: e,
        obj_type: fileTypeConstants.BasicFileType.SYNCED,
        features: [n]
      }, {
        baseURL: "/space/api",
        shouldRetry: true,
        retryMaxCount: 5,
        retryDelay: 1000
      });
      if (o === u.success) {
        return r;
      }
      a("[syncedBlock] fetchSyncedBlockOwnerFG", o, c);
    } catch (e) {
      a("[syncedBlock] fetchSyncedBlockOwnerFG", e == null ? undefined : e.code, e == null ? undefined : e.msg);
    }
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
    async fetchSyncedBlockFg(e) {
      let r;
      if (this.srcBlockIdToFG.has(e)) {
        return this.srcBlockIdToFG.has(e);
      }
      if (this.fetchFgTaskMap.has(e)) {
        r = await this.fetchFgTaskMap.get(e);
      } else {
        let n = s(e, this.key);
        this.fetchFgTaskMap.set(e, n);
        r = await n;
        this.fetchFgTaskMap.delete(e);
      }
      let o = !!(r == null ? undefined : r.has_features?.[this.key]);
      this.srcBlockIdToFG.set(e, o);
      return this.isOwnerInFg(e);
    }
    constructor() {
      d(this, "srcBlockIdToFG", new Map());
      d(this, "fetchFgTaskMap", new Map());
      d(this, "key", "synced_block_authorization");
      d(this, "isOwnerInFg", e => !!this.srcBlockIdToFG.get(e));
      d(this, "destroy", () => {
        this.srcBlockIdToFG.clear();
        this.fetchFgTaskMap.clear();
        f.instance = null;
      });
    }
  }
  d(f, "instance", undefined);
  d(f, "getInstance", () => {
    f.instance ||= new f();
    return f.instance;
  });
  var h = f;
  require.d(exports, {
    SyncedBlockAuthorizationManager: function () {
      return h;
    }
  });
}