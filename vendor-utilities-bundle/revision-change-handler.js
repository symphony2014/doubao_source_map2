// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'hv' to 'revisionChangeHandler'
// - Renamed export 'ZH' to 'applyRevisionChanges'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40789.cd567674.js
         * chunkId: 40789
         * moduleId: 420391
         */
module.exports = function (module, exports, require) {
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var contentDeltaClass_1 = require("content-delta-class_1") /*id: 564245*/;
  var toEntriesUtil = require("to-entries-util") /*id: 537539*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  let m = e => {
    let {
      p: a,
      action: i
    } = e;
    return a.length === 0 && getOwnKeys.getOwnKeys(i).length === 1 && !!(i == null ? undefined : i.oi);
  };
  class d {
    getOps(e) {
      var i;
      let n = this.getIdBySelector(e);
      return ((i = this.value[n]) == null ? undefined : i.payload.ops) ?? null;
    }
    addOps(e, ...a) {
      if (a.length === 0) {
        throw Error("Cannot add zero ops when addOps");
      }
      let i = this.getIdBySelector(e);
      this.value[i] ||= {
        id: i,
        payload: {
          ops: []
        }
      };
      let n = this.value[i];
      let {
        ops: o
      } = n.payload;
      if (a.filter(m).length > 1) {
        throw Error("Cannot create block multi times");
      }
      let s = a.findIndex(m);
      if (s !== -1) {
        if (o.length) {
          throw Error("Cannot create block when ops exists");
        }
        if (s !== 0) {
          throw Error("Create block op must be the first one");
        }
        n.newly = true;
      }
      o.push(...a);
    }
    compose(e) {
      for (let [i, n] of toEntriesUtil.toEntries(e)) {
        if (i in this.value) {
          var a;
          this.value[i].payload.ops.push(...n.payload.ops);
          if ((a = this.value[i]).newly == null) {
            a.newly = n.newly;
          }
        } else {
          this.value[i] = n;
        }
      }
    }
    constructor(e = {}) {
      let {
        initialValue: a = {}
      } = e;
      this.value = deepCloneWrapper_1.deepClone(a);
    }
  }
  class x extends d {
    getIdBySelector(e) {
      return e;
    }
  }
  var utilityHelpers = require("utility-helpers") /*id: 317609*/;
  var deltaTypeCheckers = require("delta-type-checkers") /*id: 914545*/;
  var changesetDeltaUtilities = require("changeset-delta-utilities") /*id: 803911*/;
  var assertErrorHandler = require("assert-error-handler") /*id: 262641*/;
  var blockTreeUtilities = require("block-tree-utilities") /*id: 183833*/;
  var easysyncJson0Text0OperationalTransform = require("easysync-json0-text0-operational-transform") /*id: 176294*/;
  let w = e => {
    var a;
    var i;
    if (!e.p.length && ((a = e.action) == null ? undefined : a.od)) {
      if ((i = e.action) == null) {
        return undefined;
      } else {
        return i.od;
      }
    } else {
      return null;
    }
  };
  let k = e => !!w(e);
  let j = ({
    snapshot: e,
    changeSet: a,
    removeOd: i = true,
    keepVersion: n = true
  }) => {
    let o = {};
    for (let t of getOwnKeys.getOwnKeys(a)) {
      let c = deepCloneWrapper_1.deepClone(a[t]);
      let r = utilityHelpers.getProperty(e, t);
      if (i) {
        c.payload.ops = c.payload.ops.filter(e => !k(e));
      }
      if (n) {
        c.version = (r == null ? undefined : r.version) ?? 0;
      }
      if (c.payload.ops.length) {
        o[t] = c;
      }
    }
    return o;
  };
  let T = e => !!e.find(e => {
    var a;
    return e.type === "delete" || e.type === "replace" && ((a = e.details) == null ? undefined : a.subType) === "replace_delete";
  });
  let A = e => !!e.find(e => {
    var a;
    return e.type === "add" || e.type === "replace" && ((a = e.details) == null ? undefined : a.subType) === "replace_add";
  });
  let S = ({
    id: e,
    content: a,
    parentId: i,
    index: o,
    type: s = "reject"
  }) => {
    let c = new x();
    let {
      data: r
    } = a;
    let p = r.revisions ?? [];
    let l = "noop";
    let u = A(p) && s === "reject" || T(p) && s === "accept";
    let m = T(p) && s === "reject" || A(p) && s === "accept";
    let d = utilityHelpers.invokeFunction(() => {
      if (r.type === "table_cell") {
        return false;
      }
      if (collectionIncludesUtil.includes(["ordered", "bullet", "todo"], r.type)) {
        var e;
        return !((e = r.children) == null ? undefined : e.length);
      }
      return true;
    });
    if (u) {
      if (d && i !== null && o !== null) {
        c.addOps(i, {
          p: ["children", o],
          action: {
            ld: e
          }
        });
        c.addOps(e, {
          p: [],
          action: {
            od: r
          }
        });
        l = "delete_block";
      }
    } else if (m) {
      for (let a of p) {
        c.addOps(e, {
          p: ["revisions", 0],
          action: {
            ld: a
          }
        });
      }
      l = "delete_revision";
    }
    return {
      value: c.value,
      type: l
    };
  };
  let _ = ({
    type: e = "reject",
    text: a,
    allowedIds: i = true
  }) => {
    let l = deltaTypeCheckers.isContentDelta(a) ? a : changesetDeltaUtilities.getContentDelta(a);
    let u = new contentDeltaClass_1.ContentDelta();
    let m = e => isBooleanUtil.isBoolean(i) ? i : isStringTypeCheck.isString(i) ? e === i : isFunctionUtil_1.isFunction(i) ? i(e) : collectionIncludesUtil.includes(i, e);
    for (let a of l.ops) {
      let i = a.attributes ?? {};
      let n = getOwnKeys.getOwnKeys(i).filter(e => {
        var a;
        let i = e.match(/^revision-id-(?<id>.*)$/);
        if (!i) {
          return false;
        }
        let n = (a = i.groups) == null ? undefined : a.id;
        assertErrorHandler.assertError(!isUndefinedCheck.isUndefined(n));
        return m(n);
      });
      let o = n.map(e => i[e]).map(e => utilityHelpers.safeJsonParse(e)).filter(Boolean);
      if (!isStringTypeCheck.isString(a.insert)) {
        throw Error("Erasing text op is not string insert op");
      }
      let t = e === "reject" && A(o) || e === "accept" && T(o);
      let p = e === "reject" && T(o) || e === "accept" && A(o);
      if (t) {
        u.delete(a.insert.length);
      } else if (p) {
        let e = Object.fromEntries(n.map(e => [e, ""]));
        u.retain(a.insert.length, n.length ? e : undefined);
      } else {
        u.retain(a.insert.length);
      }
    }
    if (changesetDeltaUtilities.isClientSideOnly(u)) {
      return null;
    } else if (deltaTypeCheckers.isContentDelta(a)) {
      return u;
    } else {
      return changesetDeltaUtilities.createChangeset({
        base: a,
        delta: u
      });
    }
  };
  let E = ({
    id: e,
    content: a,
    type: i
  }) => {
    let n = new x();
    let {
      data: {
        text: o
      }
    } = a;
    if (!o) {
      return n.value;
    }
    let s = _({
      text: o,
      type: i
    });
    if (s) {
      let {
        cs: a,
        apool: i
      } = s;
      n.addOps(e, {
        p: ["text"],
        subType: {
          t: "easysync",
          o: {
            zone_changesets: {
              0: a
            },
            apool: i
          }
        }
      });
    }
    return n.value;
  };
  let O = ({
    snapshot: e,
    type: a
  }) => {
    let i = new x();
    let o = getOwnKeys.getOwnKeys(e).filter(a => !e[a].data.parent_id).map(e => ({
      parentId: null,
      index: null,
      id: e
    }));
    while (o.length) {
      let s = o.pop();
      assertErrorHandler.assertError(s);
      let {
        id: t,
        parentId: c,
        index: r
      } = s;
      let p = e[t];
      if (!p) {
        if (c && collectionIncludesUtil.includes(["page", "table"], e[c].data.type)) {
          continue;
        }
        throw Error(`Cannot find related record id of ${t}`);
      }
      let {
        value: l,
        type: u
      } = S({
        id: t,
        content: p,
        parentId: c,
        index: r,
        type: a
      });
      i.compose(l);
      if (u === "delete_block") {
        continue;
      }
      let m = E({
        id: t,
        content: p,
        type: a
      });
      i.compose(m);
      let d = blockTreeUtilities.getBlockChildrenIds(p.data);
      o.push(...d.map((e, a) => ({
        parentId: t,
        index: a,
        id: e
      })));
    }
    return i.value;
  };
  let L = ({
    snapshot: e,
    type: a,
    purify: i = true,
    normalize: n = false
  }) => {
    let o = O({
      snapshot: e,
      type: a
    });
    let s = new easysyncJson0Text0OperationalTransform.EasysyncJson0Text0OT({
      initial: e,
      purify: false
    });
    s.apply(o, {
      purify: false
    });
    if (i) {
      s.purify();
    }
    return {
      changeSet: utilityHelpers.invokeFunction(() => n ? j({
        snapshot: e,
        changeSet: o
      }) : o),
      snapshot: s.value
    };
  };
  require.d(exports, {
    revisionChangeHandler: function () {
      return _;
    },
    applyRevisionChanges: function () {
      return L;
    }
  });
}