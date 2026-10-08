// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E8' to 'cleanBlockTree'
// - Renamed export 'I$' to 'SnapshotApplyError'
// - Renamed export 'T7' to 'isValidBlock'
// - Renamed export 'bT' to 'createRootBlock'
// - Renamed export 'fY' to 'isSnapshotApplyError'
// - Renamed export 'no' to 'getBlockChildrenIds'
// - Renamed export 'ql' to 'getBlockTreeHierarchy'
// - Renamed export 'yL' to 'extractChildOperationInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46252.e1de9c24.js
         * chunkId: 46252
         * moduleId: 183833
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var utilityHelpers = require("utility-helpers") /*id: 317609*/;
  var assertErrorHandler = require("assert-error-handler") /*id: 262641*/;
  let b = t => isObjectOrFunction_1_1.isObjectOrFunction(t) && "rootId" in t && "author" in t && isStringTypeCheck.isString(t.rootId) && isStringTypeCheck.isString(t.author);
  let v = (t, e) => ({
    [t]: {
      id: t,
      version: 1,
      data: {
        align: "",
        author: e,
        children: [],
        comments: null,
        doc_info: {
          deleted_editors: null,
          editors: [e],
          option_modified: null,
          options: ["editors", "create_time", "edit_time"]
        },
        hidden: false,
        locked: false,
        parent_id: "",
        revisions: null,
        text: {
          apool: {
            nextNum: 0,
            numToAttrib: {}
          },
          initialAttributedTexts: {
            attribs: {
              0: ""
            },
            text: {
              0: ""
            }
          }
        },
        type: "page"
      }
    }
  });
  let g = (t, e) => {
    let n = t[e];
    while (n) {
      if (!n.data.parent_id) {
        return n.id;
      }
      let e = n;
      if ((n = t[n.data.parent_id]) === e) {
        throw Error("Block parent cannot be itself");
      }
    }
  };
  let y = t => {
    let e = arrayFirstElement.getFirstElement(getOwnKeys.getOwnKeys(t));
    if (e) {
      return g(t, e);
    }
  };
  let m = t => {
    let e = dataProcessor.processData(objectValuesHelper.getObjectValues(t).map(t => t.data.parent_id).map(e => g(t, e)).filter(t => !!t).filter(isStringTypeCheck.isString));
    let n = [];
    for (let i of e) {
      let e = t[i];
      if (!e) {
        continue;
      }
      let {
        comment_container_id: a,
        revision_container_id: c
      } = e.data ?? {};
      let u = a && t[a];
      let l = c && t[c];
      if (u) {
        n.push(a, ...(u.data.side_comment_ids ?? []));
      }
      if (l) {
        n.push(c, ...(l.data.revision_ids ?? []));
      }
    }
    while (e.length) {
      let r = e.pop();
      assertErrorHandler.assertError(r);
      let i = t[r];
      if (!i) {
        continue;
      }
      n.push(r);
      let o = T(i.data);
      e.push(...o);
    }
    return n;
  };
  let x = t => {
    let i = t.rows_id ?? [];
    let o = t.columns_id ?? [];
    let s = !arrayIsArrayUtil.isArray(i) || isEmptyUtil.isEmpty(i);
    let a = !arrayIsArrayUtil.isArray(o) || isEmptyUtil.isEmpty(o);
    if (s || a) {
      return null;
    }
    let c = t.cell_set ?? {};
    let h = [];
    i.forEach(t => o.forEach(e => h.push(`${t}${e}`)));
    return h.map(t => {
      var e;
      if ((e = c[t]) == null) {
        return undefined;
      } else {
        return e.block_id;
      }
    }).filter(Boolean);
  };
  let T = (t, e = {}) => {
    let {
      extraBlocks: s = false
    } = e;
    let u = [];
    if (s) {
      let e = t.revision_container_id;
      if (e) {
        u.push(e);
      }
      let n = t.comment_container_id;
      if (n) {
        u.push(n);
      }
      let r = t.revision_ids ?? [];
      let s = t.side_comment_ids ?? [];
      u.push(...r, ...s);
    }
    let l = t.children ?? [];
    let h = x(t) ?? [];
    let p = utilityHelpers.invokeFunction(() => {
      var e;
      var n;
      let r = (n = t.text) == null ? undefined : (e = n.apool) == null ? undefined : e.numToAttrib;
      if (r) {
        return objectValuesHelper.getObjectValues(r).filter(t => (t == null ? undefined : t[0]) === "inlineblock").map(t => t[1]).filter(Boolean);
      } else {
        return [];
      }
    });
    u.push(...l, ...h, ...p);
    return dataProcessor.processData(u);
  };
  let w = t => {
    let e = m(t);
    for (let n of getOwnKeys.getOwnKeys(t)) {
      let i = t[n];
      if (i.data.parent_id && !e.includes(n)) {
        delete t[n];
        continue;
      }
      if (!!isObjectOrFunction_1_1.isObjectOrFunction(i.data.text) && !arrayIsArrayUtil.isArray(i.data.text)) {
        if (isObjectOrFunction_1_1.isObjectOrFunction(i.data.text.apool) && !arrayIsArrayUtil.isArray(i.data.text.apool)) {
          delete i.data.text.apool.attribToNum;
        }
        if (!!isObjectOrFunction_1_1.isObjectOrFunction(i.data.text.initialAttributedTexts) && !arrayIsArrayUtil.isArray(i.data.text.initialAttributedTexts)) {
          delete i.data.text.initialAttributedTexts.rows;
          delete i.data.text.initialAttributedTexts.cols;
        }
      }
    }
  };
  let S = t => {
    var e;
    let n = (e = t.action) == null ? undefined : e.li;
    if (t.p[0] === "children" && isNumberUtil.isNumber(t.p[1]) && isStringTypeCheck.isString(n)) {
      return {
        id: n,
        index: t.p[1]
      };
    } else {
      return null;
    }
  };
  let k = "snapshot_apply_error";
  class A extends Error {
    constructor(t, e) {
      super(t);
      this.name = k;
      this.extra = e ?? {};
    }
  }
  let N = t => t instanceof Error && objectPathGetDefault.getObjectPathDefault(t, "name") === k;
  let O = (t, e) => {
    let n = T(e.data).map(e => {
      let n = t[e];
      if (n) {
        return O(t, n);
      } else {
        return e;
      }
    });
    let r = e.id;
    if (n.length) {
      return [r, n];
    } else {
      return r;
    }
  };
  let L = t => {
    let e = y(t);
    if (!e) {
      return null;
    }
    let n = t[e];
    if (n) {
      return O(t, n);
    } else {
      return [e, []];
    }
  };
  require.d(exports, {
    cleanBlockTree: function () {
      return w;
    },
    SnapshotApplyError: function () {
      return A;
    },
    isValidBlock: function () {
      return b;
    },
    createRootBlock: function () {
      return v;
    },
    isSnapshotApplyError: function () {
      return N;
    },
    getBlockChildrenIds: function () {
      return T;
    },
    getBlockTreeHierarchy: function () {
      return L;
    },
    extractChildOperationInfo: function () {
      return S;
    }
  });
}