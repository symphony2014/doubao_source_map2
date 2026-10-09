// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q5' to 'processHistoryData'
// - Renamed export 'R8' to 'fetchDocHistory'
// - Renamed export 'de' to 'resolveBlockInfo'
// - Renamed export 'eV' to 'fetchClientVars'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72566.6916328b.js
         * chunkId: 72566
         * moduleId: 273692
         */
module.exports = function (module, exports, require) {
  var r;
  var n;
  var fetchSyncConstants = require("fetch-sync-constants") /*id: 290082*/;
  var docxClientvarFetchManager = require("docx-clientvar-fetch-manager") /*id: 691508*/;
  var documentHistoryService = require("document-history-service") /*id: 837313*/;
  var flowDocConstants = require("flow-doc-constants") /*id: 41369*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var docxBlockValidatorUtils = require("docx-block-validator-utils") /*id: 713166*/;
  var docxFetchConcurrencyConfig = require("docx-fetch-concurrency-config") /*id: 858864*/;
  var errorStatusCodes = require("error-status-codes") /*id: 187285*/;
  var docxApiConstantsExports = require("docx-api-constants-exports") /*id: 81404*/;
  var docxHistoryConstants = require("docx-history-constants") /*id: 995012*/;
  var docLoggerSymbol = require("doc-logger-symbol") /*id: 192564*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var docBlockConstants_1 = require("doc-block-constants_1") /*id: 329056*/;
  function C(t, e) {
    let i = new Set();
    if (e.id === t) {
      return e;
    }
    let r = (t, e) => {
      if (i.has(e.id)) {
        return null;
      }
      i.add(e.id);
      if (e.children) {
        for (let i of e.children) {
          if (i.id === t) {
            return i;
          }
          {
            let e = r(t, i);
            if (e) {
              return e;
            }
          }
        }
      }
      return null;
    };
    let n = (t, e) => {
      if (!e || i.has(e.id)) {
        return null;
      }
      if (e.id === t) {
        return e;
      }
      i.add(e.id);
      if (e.children) {
        for (let i of e.children) {
          if (i.id === t) {
            return i;
          }
          let e = r(t, i);
          if (e) {
            return e;
          }
        }
      }
      if (e.parent) {
        return n(t, e.parent);
      } else {
        return null;
      }
    };
    let o = n(t, e);
    return o || null;
  }
  function S(t, e, i, r) {
    let n = [];
    let o = e;
    for (o = e; o < i.length; o++) {
      if (i[o][r] === t[r] && i[o].userId === t.userId) {
        n.push(i[o].id);
        continue;
      }
      break;
    }
    return {
      index: o,
      sameChangeDetail: {
        id: t.id,
        siblings: n,
        recordId: t.id
      }
    };
  }
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  function I(t) {
    let e = t.nodeData.text;
    if (!(e == null ? undefined : e.apool) || !(e == null ? undefined : e.apool.numToAttrib) || !e.initialAttributedTexts.text || !e.initialAttributedTexts.attribs) {
      return {
        deleted: [],
        added: []
      };
    }
    let i = deltaSetChangesetConverter_1.attributedTextToDeltaSet(e.initialAttributedTexts, e.apool);
    let r = {
      deleted: [],
      added: []
    };
    i.get(zeroConstantModule_1.versionValue).forEach(t => {
      if (!t.insert) {
        return;
      }
      let n = t.attributes?.inlineblock;
      if (n) {
        if (t.attributes?.__edit_del) {
          r.deleted.push(n);
          return;
        }
        r.added.push(n);
      }
    });
    return r;
  }
  function B(t, e, i) {
    var r;
    if ((e = typeof (r = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var i = t[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(t, e || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? r : r + "") in t) {
      Object.defineProperty(t, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = i;
    }
    return t;
  }
  class N {
    push(t, e, i) {
      if (!Object.getOwnPropertyDescriptor(this.from, t)) {
        this.from[t] = e;
      }
      this.to[t] = i;
    }
    getChanges() {
      let t = Object.keys(this.from);
      let e = Object.keys(this.to);
      if (t.length === 0 && e.length === 0) {
        return null;
      } else {
        t.filter(t => e.includes(t)).forEach(t => {
          if (this.from[t] === this.to[t] || !this.from[t] && !this.to[t]) {
            delete this.from[t];
            delete this.to[t];
          }
        });
        if (Object.keys(this.from).length === 0 && Object.keys(this.to).length === 0) {
          return null;
        } else {
          return {
            from: this.from,
            to: this.to
          };
        }
      }
    }
    constructor() {
      B(this, "from", {});
      B(this, "to", {});
    }
  }
  class D {
    values() {
      return this._children;
    }
    addChild(t, e) {
      let i = 0;
      let r = 0;
      let n = false;
      for (let o = 0; o < this._children.length; o++) {
        if (!this._children[o].isDeleted) {
          if (t === r) {
            n = true;
            this._children.splice(i, 0, e);
            break;
          }
          r++;
        }
        i++;
      }
      if (!n) {
        this._children.push(e);
      }
    }
    get(t) {
      let e = 0;
      for (let i = 0; i < this._children.length; i++) {
        if (t === e && !this._children[i].isDeleted) {
          return this._children[i];
        }
        if (!this._children[i].isDeleted) {
          e++;
        }
      }
      return null;
    }
    getIndex(t) {
      let e = 0;
      for (let i = 0; i < this._children.length && this._children[i].id !== t; i++) {
        if (!this._children[i].isDeleted) {
          e++;
        }
      }
      return e;
    }
    removeChild(t) {
      let e = this._children.findIndex(e => e.id === t);
      if (e !== -1) {
        this._children.splice(e, 1);
      }
      return null;
    }
    removeAllChildren() {
      this._children.length = 0;
    }
    constructor() {
      var t;
      var e;
      var i;
      e = [];
      if ((t = typeof (i = function (t, e) {
        if (typeof t != "object" || !t) {
          return t;
        }
        var i = t[Symbol.toPrimitive];
        if (i !== undefined) {
          var r = i.call(t, e || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (e === "string" ? String : Number)(t);
      }(t = "_children", "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, t, {
          value: e,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = e;
      }
    }
  }
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  class w {
    get data() {
      return this._data;
    }
    set data(t) {
      this._data = t;
    }
    patchProperty(t, e) {
      if (t.length === 0) {
        this.data = e;
      } else {
        (function t(e, i, r) {
          if (e.length === 1) {
            let t = e.shift();
            if (t) {
              if (i !== undefined) {
                r[t] = i;
                return;
              }
              if (Array.isArray(r)) {
                r.splice(parseInt(t), 1);
              } else {
                delete r[t];
              }
            }
          } else {
            let n = e.shift();
            if (!n) {
              return;
            }
            r[n] ||= {};
            t(e, i, r[n]);
          }
        })(deepCloneWrapper_1.deepClone(t), e, this.data);
      }
    }
    patchListChange(t, e, i) {
      let r = deepCloneWrapper_1.deepClone(t);
      let n = r.pop();
      if (!isNumberUtil.isNumber(n)) {
        return;
      }
      let o = objectPathGetDefault.getObjectPathDefault(this.data, r, undefined);
      if (arrayIsArrayUtil.isArray(o)) {
        if (e) {
          o.splice(n, 0, e);
        } else if (i) {
          o.splice(n, 1);
        }
      }
    }
    constructor() {
      var t;
      var e;
      var i;
      e = {};
      if ((t = typeof (i = function (t, e) {
        if (typeof t != "object" || !t) {
          return t;
        }
        var i = t[Symbol.toPrimitive];
        if (i !== undefined) {
          var r = i.call(t, e || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (e === "string" ? String : Number)(t);
      }(t = "_data", "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, t, {
          value: e,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = e;
      }
    }
  }
  function O(t, e, i) {
    var r;
    if ((e = typeof (r = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var i = t[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(t, e || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? r : r + "") in t) {
      Object.defineProperty(t, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = i;
    }
    return t;
  }
  class M {
    get nodeData() {
      return this._nodeData.data;
    }
    set nodeData(t) {
      this._nodeData.data = t;
    }
    get children() {
      return this._childrenManager.values();
    }
    get userId() {
      return this.nodeData.user_id;
    }
    addChild(t, e) {
      this._childrenManager.addChild(t, e);
    }
    removeChild(t) {
      return this._childrenManager.removeChild(t);
    }
    getBlockIdsByChildren() {
      return this.children.filter(t => !t.isInlineBlock).map(t => t.id);
    }
    getSnapshotData() {
      var e;
      var i;
      var r;
      let o = this.children.map(t => t.getSnapshotData()).flat();
      let s = {};
      for (let t in this.commonBlockNodeProps) {
        if (t in this.nodeData) {
          let e = this.commonBlockNodeProps[t];
          s[t] = e;
        }
      }
      return Object.assign({}, {
        [this.id]: {
          id: this.id,
          version: this.version,
          data: {
            ...this.nodeData,
            ...s,
            parent_id: this.parent?.id || "",
            children: this.getBlockIdsByChildren(),
            _error: this.isError,
            [docBlockConstants_1.editTypeConstants.add]: ((e = this.parent) === null || e === undefined || !e.isDeleted) && ((i = this.parent) === null || i === undefined || !i.isAdded) && this.isAdded,
            [docBlockConstants_1.editTypeConstants.del]: ((r = this.parent) === null || r === undefined || !r.isDeleted) && this.isDeleted,
            [docBlockConstants_1.editTypeConstants.change]: this.parent?.isDeleted || this.isDeleted ? null : this._changeManager.getChanges(),
            [docBlockConstants_1.originIdKey]: this.originId
          }
        }
      }, ...o);
    }
    getChangeDetail() {
      let t = [];
      if (this._changeManager.getChanges() || this.isAdded || this.isDeleted) {
        t.push({
          id: this.id,
          siblings: [],
          recordId: this.id
        });
      }
      t.push(...this.contentChangeDetail);
      if (this.isAdded || this.isDeleted) {
        return t;
      }
      for (let o = 0; o < this.children.length; o++) {
        var e;
        var i;
        var r;
        var n;
        let s = this.children[o];
        if (!((i = s.parent) === null || i === undefined ? undefined : (e = i.addedInlineBlock) === null || e === undefined ? undefined : e.has(s.id)) && !((n = s.parent) === null || n === undefined ? undefined : (r = n.deletedInlineBlock) === null || r === undefined ? undefined : r.has(s.id))) {
          if (s.isAdded) {
            let {
              index: e,
              sameChangeDetail: i
            } = S(s, o + 1, this.children, "isAdded");
            t.push(i);
            o = e - 1;
          } else if (s.isDeleted) {
            let {
              index: e,
              sameChangeDetail: i
            } = S(s, o + 1, this.children, "isDeleted");
            o = e - 1;
            t.push(i);
          } else {
            let e = s.getChangeDetail();
            t.push(...e);
          }
        }
      }
      return t;
    }
    patchChanges(t, e) {
      if (!this.isPatched) {
        this.isPatched = true;
        let r = this.getCurrentNodeChanges(t);
        while ((r == null ? undefined : r.length) > 0) {
          if (this.isError) {
            break;
          }
          let {
            change: n,
            user_id: o = ""
          } = r.pop();
          let {
            ops: s,
            revision: a
          } = n;
          if (this.version >= a) {
            break;
          }
          let l = e[this.originId];
          let h = l == null ? undefined : l.data?.author;
          this.patchProperty(["user_id"], h || o);
          this.version = a;
          this.handleOps(s, t, e, o);
        }
      }
      if (!this.isError) {
        this.children.forEach(i => {
          i.patchChanges(t, e);
        });
      }
    }
    handleOtherOp(t, e, i) {
      let {
        p: r,
        action: n
      } = t;
      let {
        oi: o
      } = n;
      if (this.isAdded) {
        this.patchProperty(r, o);
      }
    }
    getCurrentNodeChanges(t) {
      let {
        originId: e
      } = this;
      let i = t && t[e];
      if (i) {
        return deepCloneWrapper_1.deepClone(i).sort((t, e) => e.change.revision - t.change.revision);
      } else {
        return [];
      }
    }
    judgeActionType(t, e) {
      let i = flowDocConstants.ChangeTypes.UnKnow;
      switch (t.length) {
        case 0:
          i = flowDocConstants.ChangeTypes.ComplexPropertyChange;
          break;
        case 1:
        case 2:
          i = this.getActionType(t.length, t, e);
          break;
        default:
          i = isUndefinedCheck.isUndefined(e.li) && isUndefinedCheck.isUndefined(e.ld) ? flowDocConstants.ChangeTypes.ComplexPropertyChange : flowDocConstants.ChangeTypes.ListChange;
      }
      return i;
    }
    getActionType(t, e, i) {
      let r = e[0];
      let n = flowDocConstants.ChangeTypes.NormalPropertyChange;
      if (r === "children") {
        switch (t) {
          case 1:
            n = flowDocConstants.ChangeTypes.InsertChildrenNodes;
            break;
          case 2:
            if (i.li) {
              n = flowDocConstants.ChangeTypes.InsertChildNode;
            } else if (i.ld) {
              n = flowDocConstants.ChangeTypes.DeleteNode;
            }
        }
      }
      if (r === "text") {
        n = flowDocConstants.ChangeTypes.TextChange;
      }
      if (r === "columns_id" || r === "rows_id") {
        n = flowDocConstants.ChangeTypes.UnKnow;
      }
      if (r === "option_ids" && (!isUndefinedCheck.isUndefined(i.li) || !isUndefinedCheck.isUndefined(i.ld))) {
        n = flowDocConstants.ChangeTypes.ListChange;
      }
      return n;
    }
    patchProperty(t, e) {
      this._nodeData.patchProperty(t, e);
    }
    patchListChange(t, e, i) {
      this._nodeData.patchListChange(t, e, i);
    }
    handleOps(t, e, i, r) {
      while (t.length > 0) {
        let n = t.shift();
        let {
          p: o,
          action: s
        } = n;
        let {
          oi: a,
          od: h,
          li: d,
          ld: c
        } = s || {};
        switch (this.judgeActionType(o, s)) {
          case flowDocConstants.ChangeTypes.ComplexPropertyChange:
            this.handleComplexPropertyChange({
              od: h,
              oi: a,
              p: o,
              changes: e,
              newBlocks: i,
              userId: r
            });
            break;
          case flowDocConstants.ChangeTypes.InsertChildNode:
            this.handleInsertNode({
              index: parseInt(o[1]) || 0,
              insertBlockId: d,
              changes: e,
              newBlocks: i,
              userId: r
            });
            break;
          case flowDocConstants.ChangeTypes.InsertChildrenNodes:
            if (Array.isArray(a)) {
              a.forEach((t, n) => this.handleInsertNode({
                index: n,
                insertBlockId: t,
                changes: e,
                newBlocks: i,
                userId: r
              }));
            }
            break;
          case flowDocConstants.ChangeTypes.DeleteNode:
            this.handleDeleteNode(parseInt(o[1]), c, r);
            break;
          case flowDocConstants.ChangeTypes.NormalPropertyChange:
            this.handleNormalPropertyChange({
              prop: o,
              od: h,
              oi: a,
              changes: e,
              newBlocks: i,
              userId: r
            });
            break;
          case flowDocConstants.ChangeTypes.ListChange:
            this.handleListChange(n);
            break;
          default:
            this.handleOtherOp(n, e, r);
        }
      }
    }
    handleComplexPropertyChange(t) {
      let {
        od: e,
        oi: i,
        p: r,
        changes: n = {},
        newBlocks: o = {},
        userId: s
      } = t;
      if (typeof e == "string" || typeof e == "boolean" || typeof i == "string" || typeof i == "boolean") {
        this.handleNormalPropertyChange({
          prop: [...r],
          od: e,
          oi: i
        });
        this.patchProperty(["user_id"], s);
        return;
      }
      new Set(Object.keys(e || {}).concat(Object.keys(i || {}))).forEach(t => {
        let a = e && e[t];
        let l = i && i[t];
        if (!deepEqualUtil_1.deepEqual(a, l)) {
          this.handleNormalPropertyChange({
            prop: [...r, t],
            od: a,
            oi: l,
            changes: n,
            newBlocks: o,
            userId: s
          });
        }
      });
      this.patchProperty(["user_id"], s);
    }
    handleInsertNode(t) {
      let e;
      let {
        index: i,
        insertBlockId: r,
        changes: n,
        newBlocks: o,
        userId: s,
        isInlineBlock: a = false
      } = t;
      let l = C(r, this) || C(`${this.id}-${r}`, this);
      if (!l) {
        l = C(`${r}-del`, this);
        let t = this._childrenManager.getIndex(`${r}-del`);
        if (l && l.parent.id === this.id && t === i) {
          l.id = r;
          l.isDeleted = false;
          return l;
        }
      }
      if (l) {
        if (l.parent.id === this.id && l.id === `${this.id}-${r}`) {
          return l;
        }
        e = M.generateBlockNode(l.type);
        let t = l.version;
        e.handleNodeInit({
          id: `${this.id}-${r}`,
          nodeData: deepCloneWrapper_1.deepClone(l.nodeData),
          parent: this,
          isAdded: true,
          originId: r,
          node: e,
          changes: n,
          newBlocks: o,
          userId: s,
          commonBlockNodeProps: this.commonBlockNodeProps,
          isInlineBlock: a,
          version: t
        });
      } else {
        let t = deepCloneWrapper_1.deepClone(o[r]);
        t ||= {
          id: r,
          version: -1,
          data: {
            id: r,
            parent_id: this.id,
            page_id: "",
            version: -1,
            children: [],
            type: "unknow"
          }
        };
        let {
          data: i
        } = t;
        (e = M.generateBlockNode((i == null ? undefined : i.type) || "unknow")).handleNodeInit({
          id: `${this.id}-${r}`,
          nodeData: i,
          parent: this,
          isAdded: true,
          originId: r,
          node: e,
          changes: n,
          newBlocks: o,
          userId: s,
          commonBlockNodeProps: this.commonBlockNodeProps,
          isInlineBlock: a
        });
      }
      this.addChild(i, e);
      return e;
    }
    handleDeleteNode(t, e, i) {
      let r;
      if (isNaN(t)) {
        if (r = C(`${this.id}-${e}`, this)) {
          e = `${this.id}-${e}`;
        } else {
          r = C(e, this);
        }
      } else {
        r = this._childrenManager.get(t);
      }
      if (r) {
        if (r == null ? undefined : r.isAdded) {
          r.isAdded = false;
          this.removeChild(r.id);
        } else if (r.parent.type === docBlockTypeConstants.blockTypeConstants.QUOTE) {
          this.removeChild(r.id);
        } else {
          if (!r) {
            return;
          }
          r.id = `${e}-del`;
          r.isDeleted = true;
          r.isAdded = false;
          r.patchProperty(["user_id"], i);
        }
      }
    }
    handleListChange(t) {
      this._nodeData.data;
      let {
        li: i,
        ld: r
      } = t.action;
      if (!this.isAdded && !this.parent?.isDeleted) {
        if (i) {
          this._changeManager.push(t.p.join("."), undefined, i);
        } else {
          this._changeManager.push(t.p.join("."), r, undefined);
        }
      }
      this.patchListChange(t.p, i, r);
    }
    handleNormalPropertyChange(t) {
      var e;
      var i;
      var r;
      var n;
      let {
        prop: s,
        od: a,
        oi: l
      } = t;
      if (!((i = this.parent) === null || i === undefined ? undefined : (e = i.addedInlineBlock) === null || e === undefined ? undefined : e.has(this.id)) && !((n = this.parent) === null || n === undefined ? undefined : (r = n.deletedInlineBlock) === null || r === undefined ? undefined : r.has(this.id)) && !this.isAdded && !this.parent?.isDeleted && !M.ignoreProps.includes(s[s.length - 1])) {
        this._changeManager.push(s[s.length - 1], a, l);
      }
      if (s.length === 1 && s[0] === "type" && l === docBlockTypeConstants.blockTypeConstants.QUOTE) {
        this._childrenManager.removeAllChildren();
      }
      this.patchProperty(s, l);
    }
    handleNodeInit(t) {
      var e;
      let {
        id: i,
        nodeData: r,
        parent: n,
        isAdded: o,
        originId: s,
        node: a,
        changes: l,
        newBlocks: h,
        userId: d,
        commonBlockNodeProps: c = {},
        isInlineBlock: u = false,
        version: p
      } = t;
      let {
        type: _
      } = r;
      a.id = i;
      a.originId = s;
      a.type = _;
      a.isAdded = o;
      a.parent = n;
      a.nodeData = r;
      a.version = isUndefinedCheck.isUndefined(p) ? -1 : p;
      if ((e = r.children) !== null && e !== undefined) {
        e.forEach((t, e) => {
          a.handleInsertNode({
            index: e,
            insertBlockId: t,
            changes: l,
            newBlocks: h,
            userId: d
          });
        });
      }
      let f = I(a);
      if (f.added.length) {
        f.added.forEach(t => a.handleInsertNode({
          index: a.children.length,
          insertBlockId: t,
          changes: l,
          newBlocks: h,
          userId: d,
          isInlineBlock: true
        }));
      }
      a.patchProperty(["type"], _);
      a.patchProperty(["user_id"], d);
      a.isInlineBlock = u;
      a.commonBlockNodeProps = c;
    }
    constructor() {
      O(this, "_nodeData", new w());
      O(this, "_childrenManager", new D());
      O(this, "_changeManager", new N());
      O(this, "contentChangeDetail", []);
      O(this, "isError", false);
      O(this, "id", "");
      O(this, "originId", "");
      O(this, "type", "");
      O(this, "version", -1);
      O(this, "isAdded", false);
      O(this, "isDeleted", false);
      O(this, "isPatched", false);
      O(this, "parent", undefined);
      O(this, "commonBlockNodeProps", {});
      O(this, "isInlineBlock", false);
    }
  }
  O(M, "ignoreProps", []);
  O(M, "generateBlockNode", undefined);
  let P = () => new M();
  class L extends M {
    handleOps(t, e, i, r) {
      while (t.length > 0) {
        let {
          p: n,
          action: o
        } = t.shift();
        let {
          oi: s,
          od: a,
          li: l,
          ld: h
        } = o;
        this.handlePropertyChange({
          od: a,
          oi: s,
          ld: h,
          li: l,
          p: n,
          changes: e,
          newBlocks: i,
          userId: r
        });
      }
    }
    handlePropertyChange(t) {
      let {
        od: e,
        oi: i,
        ld: r,
        li: n,
        p: o,
        changes: s,
        newBlocks: a,
        userId: l
      } = t;
      this.handleNormalPropertyChange({
        prop: [...o],
        od: e || r,
        oi: i || n,
        changes: s,
        newBlocks: a,
        userId: l
      });
      this.patchProperty(["user_id"], l);
    }
  }
  let j = () => new L();
  class R extends M {
    patchChanges(t, e) {
      super.patchChanges(t, e);
      if (this.isAdjusted) {
        return;
      }
      this.isAdjusted = true;
      let i = [];
      let r = 1;
      this.children.forEach(t => {
        if (t.isDeleted) {
          r -= t.nodeData.width_ratio || 0;
        } else {
          i.push(t);
        }
      });
      if (r !== 1) {
        i.forEach(t => {
          let e = t.nodeData.width_ratio;
          if (e) {
            t.patchProperty(["width_ratio"], e * r);
          }
        });
      }
    }
    constructor(...t) {
      var e;
      var i;
      super(...t);
      if ((e = typeof (i = function (t, e) {
        if (typeof t != "object" || !t) {
          return t;
        }
        var i = t[Symbol.toPrimitive];
        if (i !== undefined) {
          var r = i.call(t, e || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (e === "string" ? String : Number)(t);
      }(e = "isAdjusted", "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, e, {
          value: false,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = false;
      }
    }
  }
  let G = () => new R();
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  var cellChangeCalculator = require("cell-change-calculator") /*id: 199925*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  class Z extends M {
    patchProperty(t, e) {
      if (e !== undefined) {
        super.patchProperty(t, e);
      }
    }
    handleComplexPropertyChange(t) {
      let {
        od: e,
        oi: i,
        p: r,
        changes: n = {},
        newBlocks: o = {},
        userId: s
      } = t;
      this.handleNormalPropertyChange({
        prop: r,
        od: e,
        oi: i,
        changes: n,
        newBlocks: o,
        userId: s
      });
      this.patchProperty(["user_id"], s);
    }
    handleNormalPropertyChange(t) {
      let {
        prop: i,
        od: r,
        oi: n,
        changes: o = {},
        newBlocks: s = {},
        userId: a = ""
      } = t;
      if (i.length === 0 && n && !r) {
        let t = n.cell_set;
        for (let e in t) {
          if (Object.prototype.hasOwnProperty.call(t, e)) {
            this.handleNormalPropertyChange({
              prop: ["cell_set", e],
              od: r,
              oi: t[e],
              changes: o,
              newBlocks: s,
              userId: a
            });
          }
        }
      }
      if (i.length === 2 && i[0] === "cell_set" && n && !r) {
        let {
          block_id: t
        } = n;
        if (s[t] && !s[t].data.children) {
          s[t].data.children = [];
        }
        let e = this.handleInsertNode({
          index: 0,
          insertBlockId: t,
          changes: o,
          newBlocks: s,
          userId: a
        });
        if (n) {
          n.block_id = e.id;
        }
      }
      if (!this.isAdded && !this.parent?.isDeleted && !M.ignoreProps.includes(i[i.length - 1])) {
        this._changeManager.push(i.join("."), r, n);
      }
      this.patchProperty(i, n);
    }
    handleOtherOp(t, e, i) {
      let {
        p: r,
        action: n
      } = t;
      if (r.length !== 2) {
        return super.handleOtherOp(t, e, i);
      }
      let {
        li: o,
        ld: s
      } = n;
      if (!o && !s) {
        return super.handleOtherOp(t, e, i);
      }
      if (o) {
        let [t, e] = r;
        let i = t.split("s_id")[0];
        let n = this.nodeData[`${i}s_id`].indexOf(o);
        if (n > -1) {
          this.nodeData[`${i}s_id`].splice(Number(n), 1);
          this._changeManager.push(r.join("."), undefined, o);
        }
        this.nodeData[`${i}s_id`].splice(Number(e), 0, o);
        return;
      }
      if (s) {
        let t = this._changeManager.getChanges();
        let e = t == null ? undefined : t.from;
        for (let t in e) {
          if (Object.prototype.hasOwnProperty.call(e, t)) {
            let i = e[t];
            if (i !== undefined) {
              safeObjectSetWrapper.safeObjectSet(this.nodeData, t, i);
            }
          }
        }
        return;
      }
    }
    getChangeDetail() {
      let t = this._changeManager.getChanges();
      if (!t) {
        return super.getChangeDetail();
      }
      let {
        changedCellBlockIds: e,
        isAddCell: i,
        isDelCell: r,
        isMerge: n
      } = cellChangeCalculator.calculateCellChanges(t);
      if (!i && !r && !n) {
        return super.getChangeDetail();
      }
      if (n) {
        let t = super.getChangeDetail();
        return this.filterHideCellData(t);
      }
      {
        let [t, ...i] = e;
        return [{
          id: t,
          siblings: i,
          recordId: t
        }];
      }
    }
    getBlockIdByChildren() {
      return [];
    }
    getSnapshotData() {
      let t = super.getSnapshotData();
      let e = t[this.id];
      this.transformTableData(this.id, e.data);
      let {
        rows_id: i,
        columns_id: r,
        cell_set: n
      } = e.data;
      let o = this.checkTableCellSetIntegrity(i, r, n);
      if (!o.length) {
        return t;
      }
      let s = this.generateCellInfoByCellId(o);
      let a = this.generatePatchTableCellSet(s);
      let l = this.generatePatchTableBlockSnapshot(s.map(t => {
        let {
          blockId: e
        } = t;
        return e;
      }));
      return Object.assign(t, {
        [this.id]: {
          ...e,
          data: {
            ...e.data,
            cell_set: {
              ...n,
              ...a
            }
          }
        }
      }, l);
    }
    transformTableData(t, e) {
      let {
        rows_id: i,
        columns_id: r,
        cell_set: n,
        column_set: o
      } = e;
      let s = {};
      let a = {};
      let l = i.map(e => `${e}-${t}`);
      let h = r.map(e => `${e}-${t}`);
      Object.keys(n).forEach(e => {
        let [i, r] = docxTableLayoutUtils.splitCellId(e);
        s[`${i}-${t}${r}-${t}`] = n[e];
      });
      Object.keys(o).forEach(e => {
        a[`${e}-${t}`] = o[e];
      });
      e = Object.assign(e, {
        rows_id: l,
        columns_id: h,
        cell_set: s,
        column_set: a
      });
      delete e.children;
    }
    generateCellInfoByCellId(t) {
      return t.map(t => ({
        cellId: t,
        blockId: docTokenHelperUtils.generateDocToken()
      }));
    }
    generatePatchTableCellSet(t) {
      return t.reduce((t, e) => {
        let {
          cellId: i,
          blockId: r
        } = e;
        t[i] = {
          block_id: r,
          merge_info: {
            row_span: 1,
            col_span: 1
          }
        };
        return t;
      }, {});
    }
    generatePatchTableBlockSnapshot(t) {
      return t.reduce((t, e) => {
        let i = {
          type: docBlockTypeConstants.blockTypeConstants.CELL,
          id: e,
          parent_id: this.id,
          page_id: "",
          author: this.userId,
          version: 1,
          children: [],
          comments: []
        };
        let r = M.generateBlockNode(docBlockTypeConstants.blockTypeConstants.CELL);
        this.handleNodeInit({
          id: e,
          nodeData: i,
          parent: this,
          isAdded: true,
          originId: e,
          node: r,
          changes: {},
          newBlocks: {},
          userId: this.userId
        });
        Object.assign(t, r.getSnapshotData());
        return t;
      }, {});
    }
    checkTableCellSetIntegrity(t, e, i) {
      return t.reduce((t, r) => {
        e.forEach(e => {
          let n = `${r}${e}`;
          if (!(n in i)) {
            t.push(n);
          }
        });
        return t;
      }, []);
    }
    filterHideCellData(t) {
      let e = this.nodeData;
      let i = docxTableLayoutUtils.getTableLayoutInfo(e);
      let r = [];
      i.forEach(t => {
        t.forEach(t => {
          if (t.sourceCellId !== t.cellId) {
            r.push(t.cellRecordId);
          }
        });
      });
      return t.filter(t => {
        let e = false;
        if (t.recordId.indexOf("-del") > -1) {
          e = true;
        }
        if (!e) {
          r.forEach(i => {
            if (t.recordId.indexOf(i) > -1) {
              e = true;
            }
          });
        }
        return !e;
      });
    }
    handleNodeInit(t) {
      let {
        id: e,
        nodeData: i,
        parent: r,
        isAdded: n,
        originId: o,
        node: s,
        changes: a,
        newBlocks: l,
        userId: h
      } = t;
      let {
        type: d
      } = i;
      s.id = e;
      s.originId = o;
      s.type = d;
      s.isAdded = n;
      s.parent = r;
      s.nodeData = i;
      let c = d === docBlockTypeConstants.blockTypeConstants.TABLE ? Object.values(i.cell_set || {}).map(t => {
        let {
          block_id: e
        } = t;
        return e;
      }) : i.children || [];
      if (c != null) {
        c.forEach((t, e) => {
          s.handleInsertNode({
            index: e,
            insertBlockId: t,
            changes: a,
            newBlocks: l,
            userId: h
          });
        });
      }
      s.patchProperty(["type"], d);
      s.patchProperty(["user_id"], h);
    }
    handleInsertNode(t) {
      let {
        index: e,
        insertBlockId: i,
        changes: r,
        newBlocks: n,
        userId: o
      } = t;
      let s = super.handleInsertNode({
        index: e,
        insertBlockId: i,
        changes: r,
        newBlocks: n,
        userId: o
      });
      let a = Object.values(this.nodeData.cell_set || {}).find(t => {
        let {
          block_id: e
        } = t;
        return e === i;
      }) || n[i];
      if (a) {
        a.block_id = s.id;
      }
      return s;
    }
  }
  let Q = () => new Z();
  var changesetOperationsCore = require("changeset-operations-core") /*id: 378584*/;
  let $ = ["comment-id-", "flow-comment-id-"];
  function z(t, e) {
    t = t.filter(t => {
      let [e] = t;
      return !$.some(t => e.includes(t));
    });
    e = e.filter(t => {
      let [e] = t;
      return !$.some(t => e.includes(t));
    });
    if (t.length !== e.length) {
      return false;
    }
    let i = new Map();
    t.forEach(t => i.set(t[0], t[1]));
    let r = true;
    for (let t of e) {
      if (i.get(t[0])) {
        if (i.get(t[0]) !== t[1]) {
          r = false;
          break;
        }
      } else {
        r = false;
        break;
      }
    }
    return r;
  }
  function V(t) {
    return t.replace(/\|[a-z0-9]+/g, "");
  }
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  let J = () => `change_id_${uuidGeneratorUtil.generateUuid()}`;
  let Y = ["link", "bold", "strikethrough", "italic", "underline", "textHighlightBackground", "inlineCode"];
  function tt(t, e, i) {
    var r;
    if ((e = typeof (r = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var i = t[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(t, e || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? r : r + "") in t) {
      Object.defineProperty(t, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = i;
    }
    return t;
  }
  class te {
    diffAttribute(t, e, i, r) {
      let n = t + i;
      let o = e + i;
      for (let i = t, s = e; i < n && s < o; i++, s++) {
        let t = this.getCurrentIndexAttribute(i);
        let e = r.getCurrentIndexAttribute(s);
        let a = z(t, e);
        let l = this.findLastCommonAttributeLength(t, e, i, s, n, o, r);
        if (!a) {
          let r = this.getChangeDetail();
          let n = [];
          for (let o = i; o < i + l; o++) {
            this.attributeIndexes[o] ||= [];
            let i = e.some(t => t[0] === docBlockConstants_1.editTypeConstants.del);
            if (i) {
              e = e.filter(t => t[0] !== docBlockConstants_1.editTypeConstants.del && t[0] !== te.CHANGE_ID_TAG);
            }
            let s = function (t, e, i = Y) {
              let r = new Map();
              t.forEach(t => {
                if (!i.includes(t[0])) {
                  r.set(t[0], t[1]);
                }
              });
              for (let [n, o] of e) {
                r.set(n, o);
              }
              return Array.from(r);
            }(e, t);
            for (let [t, e] of s) {
              if (t === te.CHANGE_ID_TAG) {
                continue;
              }
              let i = this.getAttributeIndex([t, e]);
              n.push(i);
            }
            if (!s.some(t => t[0] === docBlockConstants_1.editTypeConstants.add) && !i) {
              te.removeAttributeByIndex(o, te.CHANGE_TAG[0], this);
              let t = this.getAttributeIndex(te.CHANGE_TAG);
              n.push(t);
            }
            if (!i || !z(t, e)) {
              te.removeAttributeByIndex(o, te.CHANGE_TAG[0], this);
              let t = n.findIndex(t => {
                return this.attributeMap.get(t)?.[0] === "author";
              });
              if (t !== -1) {
                n.splice(t, 1);
              }
              let e = this.getAttributeIndex(te.CHANGE_TAG);
              n.push(e);
              n.push(r);
            }
            this.attributeIndexes[o] = Array.from(new Set(n)).sort();
          }
        }
        i += l - 1;
        s += l - 1;
      }
    }
    addDeleteAttribute(t, e, i, r) {
      let n = this.getChangeDetail();
      let o = t;
      let {
        length: s
      } = i;
      let a = "";
      for (let t = e; t < e + s; t++) {
        var l;
        if (r.getCurrentIndexAttributeMap(t).has(docBlockConstants_1.editTypeConstants.add)) {
          continue;
        }
        a += i[t - e];
        te.removeAttributeByIndex(t, te.ADD_TAG[0], r);
        te.removeAttributeByIndex(t, te.DELETE_TAG[0], r);
        te.removeAttributeByIndex(t, te.CHANGE_ID_TAG, r);
        te.removeAttributeByIndex(t, "author", r);
        let s = (l = r.getCurrentIndexAttribute(t)) === null || l === undefined ? undefined : l.map(t => this.getAttributeIndex(t));
        let h = this.getAttributeIndex(te.DELETE_TAG);
        s.push(h);
        s.push(n);
        this.attributeIndexes.splice(o, 0, s.sort());
        o += 1;
      }
      return a;
    }
    addInsertAttribute(t, e, i) {
      let r;
      let {
        length: n
      } = e;
      let o = "";
      if (i !== tp.easysync) {
        r = this.getChangeDetail();
      }
      for (let s = t; s < t + n; s++) {
        if (!r || i === tp.easysync) {
          r = this.getChangeDetail();
        }
        this.attributeIndexes[s] ||= [];
        if (this.getCurrentIndexAttributeMap(s).has(docBlockConstants_1.editTypeConstants.del)) {
          continue;
        }
        o += e[s - t];
        te.removeAttributeByIndex(s, te.ADD_TAG[0], this);
        te.removeAttributeByIndex(s, te.DELETE_TAG[0], this);
        te.removeAttributeByIndex(s, te.CHANGE_ID_TAG, this);
        let n = this.getAttributeIndex(te.ADD_TAG);
        this.attributeIndexes[s].push(n);
        this.attributeIndexes[s].push(r);
      }
      return o;
    }
    getFinalAttributes(t, e, i, r) {
      let n = "";
      let o = 0;
      let s = {};
      this.changeDetail = [];
      let a = this.getAttributeIndex(["author", e]);
      let l = [];
      for (let e = 0; e < this.attributeIndexes.length; e++) {
        let h = this.attributeIndexes[e] || [];
        let d = this.getCurrentIndexAttributeMap(e);
        if (d.has(docBlockConstants_1.editTypeConstants.del) && d.has(docBlockConstants_1.editTypeConstants.add)) {
          continue;
        }
        let c = this.getSerialAttribute(d, e + 1);
        if ((d = this.getCurrentIndexAttributeMap(e)).has(te.CHANGE_ID_TAG)) {
          this.changeDetail.push({
            recordId: this.id,
            siblings: [],
            id: d.get(te.CHANGE_ID_TAG)
          });
        }
        if (!d.has("author")) {
          if (d.has(docBlockConstants_1.editTypeConstants.del)) {
            l.push(e);
          }
          if (d.has(docBlockConstants_1.editTypeConstants.del) && i === tp.easysync && r[e]) {
            let t = ["author", r[e]];
            h.push(this.getAttributeIndex(t));
          } else {
            h.push(a);
          }
        }
        s[o++] = {
          count: c,
          attributes: `*${h.map(t => t.toString(36)).join("*")}`
        };
        n += t.substr(e, c);
        e += c - 1;
      }
      let h = {};
      this.attributeMap.forEach((t, e) => {
        h[e] = t;
      });
      return {
        deleteIndexArr: l,
        textSnapshot: {
          apool: {
            nextNum: this.attributeMap.size,
            numToAttrib: h
          },
          initialAttributedTexts: {
            attribs: {
              0: Object.values(s).map(t => `${t.attributes}+${t.count.toString(36)}`).join("")
            },
            text: {
              0: n
            }
          }
        }
      };
    }
    getAllChangeDetail() {
      return this.changeDetail;
    }
    getSerialAttribute(t, e) {
      if (e < this.attributeIndexes.length) {
        let i = this.getCurrentIndexAttributeMap(e);
        if (i.size !== t.size) {
          return 1;
        }
        if (i.has(te.CHANGE_ID_TAG) && t.has(te.CHANGE_ID_TAG)) {
          i.delete(te.CHANGE_ID_TAG);
          t.delete(te.CHANGE_ID_TAG);
        }
        if (z(Array.from(i), Array.from(t))) {
          let i = this.getCurrentIndexAttributeMap(e);
          let r = 1;
          for (let n = e; n < this.attributeIndexes.length; n++) {
            let e = this.getCurrentIndexAttributeMap(n);
            if (!function (t, e, i) {
              if (t.size !== e.size) {
                return false;
              }
              for (let [r, n] of t) {
                if ((i == null || !i.includes(r)) && e.get(r) !== n) {
                  return false;
                }
              }
              return true;
            }(e, i, [te.CHANGE_ID_TAG])) {
              break;
            }
            if (e.has(te.CHANGE_ID_TAG) && t.has(te.CHANGE_ID_TAG)) {
              e.delete(te.CHANGE_ID_TAG);
              t.delete(te.CHANGE_ID_TAG);
            }
            r++;
          }
          return r;
        }
      }
      return 1;
    }
    getCurrentIndexAttribute(t) {
      let e = this.attributeIndexes[t];
      if (e) {
        let t = [];
        for (let i of e) {
          t.push(this.attributeMap.get(i));
        }
        return t;
      }
      return [];
    }
    getCurrentIndexAttributeMap(t) {
      let e = new Map();
      return this.getCurrentIndexAttribute(t).reduce((t, e) => t.set(e[0], e[1]), e);
    }
    static removeAttributeByIndex(t, e, i) {
      let r = i.attributeIndexes[t].findIndex(t => {
        return i.attributeMap.get(t)?.[0] === e;
      });
      if (r !== -1) {
        i.attributeIndexes[t].splice(r, 1);
      }
    }
    static getChangeDetailObj(t) {
      return {
        id: J(),
        children: [],
        recordId: t
      };
    }
    findLastCommonAttributeLength(t, e, i, r, n, o, s) {
      let a = 0;
      while (i < n && r < o) {
        let n = this.getCurrentIndexAttribute(i);
        let o = s.getCurrentIndexAttribute(r);
        if (z(t, n) && z(o, e)) {
          i++;
          r++;
          a++;
          continue;
        }
        break;
      }
      return a;
    }
    init(t, e) {
      var i;
      let r = V(t).match(/(\*[a-z0-9]+)*\+[a-z0-9]+/g);
      let n = 0;
      if (r != null) {
        r.forEach(t => {
          var i;
          var r;
          var o;
          let {
            attributes: s,
            num: a
          } = {
            attributes: (r = (i = V(i = t)).match(/(\*[a-z0-9]+)/g)) === null || r === undefined ? undefined : r.map(t => t.split("*").filter(t => t.length > 0)).flat(),
            num: parseInt(((o = i.match(/\+[a-z0-9]+/g)) === null || o === undefined ? undefined : o.shift()) || "0", 36)
          };
          for (let t = n; t < a + n; t++) {
            let t = [];
            if (s != null) {
              s.forEach(i => {
                if (i) {
                  let r = e[parseInt(i, 36)];
                  let n = this.getAttributeIndex(r);
                  t.push(n);
                }
              });
            }
            this.attributeIndexes.push(t);
          }
          n += a;
        });
      }
    }
    getChangeDetail() {
      let t = te.getChangeDetailObj(this.id);
      this.changeDetail.push(t);
      return this.getAttributeIndex(["change_id", t.id]);
    }
    getAttributeIndex(t) {
      for (let [e, i] of this.attributeMap.entries()) {
        if (i.join("") === t.join("")) {
          return e;
        }
      }
      let e = this.attributeMap.size;
      this.attributeMap.set(e, t);
      return e;
    }
    constructor(t, e, i) {
      tt(this, "attributeMap", new Map());
      tt(this, "changeDetail", []);
      tt(this, "attributeIndexes", []);
      tt(this, "id", undefined);
      this.init(t, e);
      this.id = i;
    }
  }
  tt(te, "ADD_TAG", [docBlockConstants_1.editTypeConstants.add, "true"]);
  tt(te, "DELETE_TAG", [docBlockConstants_1.editTypeConstants.del, "true"]);
  tt(te, "CHANGE_TAG", [docBlockConstants_1.editTypeConstants.change, "true"]);
  tt(te, "CHANGE_ID_TAG", "change_id");
  var operationalTransformCore = require("operational-transform-core") /*id: 379386*/;
  function tr(t, e, i) {
    try {
      let i = new operationalTransformCore.DocNode(null, e);
      i.apply(t);
      return i.getSnapshot();
    } catch (t) {
      if (typeof i == "function") {
        i(t);
      }
    }
  }
  function tn(t) {
    let {
      snapshot: e,
      baseLength: i,
      baseLines: r,
      recordId: n,
      userId: o,
      attribute: s,
      pushChangeDetail: a
    } = t;
    let {
      opText: l,
      attribs: h,
      opApool: d
    } = function (t) {
      let {
        initialAttributedTexts: {
          text: e,
          attribs: i
        },
        apool: r
      } = t;
      let n = e["0"];
      let o = new changesetOperationsCore.AttribPool();
      o.fromJsonable(r);
      return {
        opText: n,
        attribs: i,
        opApool: o
      };
    }(e);
    let c = d.putAttrib(s).toString(36);
    let u = te.getChangeDetailObj(n);
    let p = d.putAttrib(["change_id", u.id]).toString(36);
    let _ = d.putAttrib(["author", o]).toString(36);
    a(u);
    let f = changesetOperationsCore.buildChangeset(i, "Z", "0");
    f.keep(i, r);
    let b = changesetOperationsCore.createOpIterator(h["0"]);
    let g = 0;
    while (b.hasNext()) {
      var m;
      let t = b.next();
      let e = g + t.chars;
      let i = `${t.attribs}*${c}*${p}`;
      if (!((m = t.getAttribute) === null || m === undefined ? undefined : m.call(t, "author", d)) || s === te.DELETE_TAG) {
        i += `*${_}`;
      }
      f.insert(l.slice(g, e), i, d);
      g = e;
    }
    e.apool = d.toJsonable();
    return f;
  }
  function to(t, e, i) {
    var r;
    if ((e = typeof (r = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var i = t[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(t, e || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? r : r + "") in t) {
      Object.defineProperty(t, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = i;
    }
    return t;
  }
  (r = ts || {})[r.DIFF_DELETE = -1] = "DIFF_DELETE";
  r[r.DIFF_INSERT = 1] = "DIFF_INSERT";
  r[r.DIFF_EQUAL = 0] = "DIFF_EQUAL";
  var ts = r;
  class ta {
    toString() {
      return `${this.op},${this.text}`;
    }
    constructor(t, e) {
      this.op = t;
      this.text = e;
    }
  }
  var tl = new class {
    generateV(t) {
      let e = Array(t);
      let i = Array(t);
      for (let r = 0; r < t; r++) {
        e[r] = -1;
        i[r] = -1;
      }
      return {
        v1: e,
        v2: i
      };
    }
    constructor() {
      to(this, "diff", (t, e) => {
        if (t === null || e === null) {
          throw Error("Null input. (diff)");
        }
        if (t === e) {
          if (t) {
            return [new ta(ts.DIFF_EQUAL, t)];
          } else {
            return [];
          }
        }
        let i = this.diffCommonPrefix(t, e);
        let r = t.substring(0, i);
        t = t.substring(i);
        e = e.substring(i);
        i = this.diffCommonSuffix(t, e);
        let n = t.substring(t.length - i);
        t = t.substring(0, t.length - i);
        e = e.substring(0, e.length - i);
        let o = this.diffCompute(t, e);
        if (r) {
          o.unshift(new ta(ts.DIFF_EQUAL, r));
        }
        if (n) {
          o.push(new ta(ts.DIFF_EQUAL, n));
        }
        this.diffMerge(o);
        return o;
      });
      to(this, "diffCommonPrefix", (t, e) => {
        if (!t || !e || t.charAt(0) !== e.charAt(0)) {
          return 0;
        }
        let i = 0;
        let r = Math.min(t.length, e.length);
        let n = r;
        let o = 0;
        while (i < n) {
          if (t.substring(o, n) === e.substring(o, n)) {
            o = i = n;
          } else {
            r = n;
          }
          n = Math.floor((r - i) / 2 + i);
        }
        return n;
      });
      to(this, "diffCommonSuffix", (t, e) => {
        let i = t.length;
        let r = e.length;
        if (!t || !e || t.charAt(i - 1) !== e.charAt(r - 1)) {
          return 0;
        }
        let n = 0;
        let o = Math.min(i, r);
        let s = o;
        let a = 0;
        while (n < s) {
          if (t.substring(t.length - s, t.length - a) === e.substring(e.length - s, e.length - a)) {
            a = n = s;
          } else {
            o = s;
          }
          s = Math.floor((o - n) / 2 + n);
        }
        return s;
      });
      to(this, "diffCompute", (t, e) => {
        let i = [];
        if (!t) {
          return [new ta(ts.DIFF_INSERT, e)];
        }
        if (!e) {
          return [new ta(ts.DIFF_DELETE, t)];
        }
        let r = t.length > e.length ? t : e;
        let n = t.length > e.length ? e : t;
        let o = r.indexOf(n);
        if (o !== -1) {
          i.push(new ta(ts.DIFF_INSERT, r.substring(0, o)), new ta(ts.DIFF_EQUAL, n), new ta(ts.DIFF_INSERT, r.substring(o + n.length)));
          if (t.length > e.length) {
            i[0].op = ts.DIFF_DELETE;
            i[2].op = ts.DIFF_DELETE;
          }
          return i;
        }
        if (n.length === 1) {
          return [new ta(ts.DIFF_DELETE, t), new ta(ts.DIFF_INSERT, e)];
        }
        let s = this.diffHalfMatch(t, e);
        if (s) {
          let t = s[0] || "";
          let e = s[1] || "";
          let i = s[2] || "";
          let r = s[3] || "";
          let n = s[4] || "";
          let o = this.diff(t, i);
          let a = this.diff(e, r);
          return o.concat([new ta(ts.DIFF_EQUAL, n)], a);
        }
        return this.diffBisect(t, e);
      });
      to(this, "diffBisect", (t, e) => {
        let i = t.length;
        let r = e.length;
        let n = Math.ceil((i + r) / 2);
        let o = n * 2;
        let {
          v1: s,
          v2: a
        } = this.generateV(o);
        s[n + 1] = 0;
        a[n + 1] = 0;
        let l = 0;
        let h = 0;
        let d = i - r;
        let c = d % 2 != 0;
        let u = 0;
        let p = 0;
        for (let _ = 0; _ < n; _++) {
          for (let u = -_ + l; u <= _ - h; u += 2) {
            let p;
            let f = n + u;
            let b = (p = u === -_ || u !== _ && s[f - 1] < s[f + 1] ? s[f + 1] : s[f - 1] + 1) - u;
            while (p < i && b < r && t.charAt(p) === e.charAt(b)) {
              p++;
              b++;
            }
            s[f] = p;
            if (p > i) {
              h += 2;
            } else if (b > r) {
              l += 2;
            } else if (c) {
              let r = n + d - u;
              if (r >= 0 && r < o && a[r] !== -1 && p >= i - a[r]) {
                return this.diffBisectSplit(t, e, p, b);
              }
            }
          }
          for (let l = -_ + u; l <= _ - p; l += 2) {
            let h;
            let f = n + l;
            let b = (h = l === -_ || l !== _ && a[f - 1] < a[f + 1] ? a[f + 1] : a[f - 1] + 1) - l;
            while (h < i && b < r && t.charAt(i - h - 1) === e.charAt(r - b - 1)) {
              h++;
              b++;
            }
            a[f] = h;
            if (h > i) {
              p += 2;
            } else if (b > r) {
              u += 2;
            } else if (!c) {
              let r = n + d - l;
              if (r >= 0 && r < o && s[r] !== -1) {
                let o = s[r];
                let a = n + o - r;
                if (o >= (h = i - h)) {
                  return this.diffBisectSplit(t, e, o, a);
                }
              }
            }
          }
        }
        return [new ta(ts.DIFF_DELETE, t), new ta(ts.DIFF_INSERT, e)];
      });
      to(this, "diffBisectSplit", (t, e, i, r) => {
        let n = t.substring(0, i);
        let o = e.substring(0, r);
        let s = t.substring(i);
        let a = e.substring(r);
        let l = this.diff(n, o);
        let h = this.diff(s, a);
        return l.concat(h);
      });
      to(this, "diffHalfMatch", (t, e) => {
        let i;
        let r = t.length > e.length ? t : e;
        let n = t.length > e.length ? e : t;
        if (r.length < 4 || n.length * 2 < r.length) {
          return null;
        }
        let o = this.diff_halfMatchI_(r, n, Math.ceil(r.length / 4));
        let s = this.diff_halfMatchI_(r, n, Math.ceil(r.length / 2));
        if (!o && !s) {
          return null;
        }
        i = s ? o && o[4].length > s[4].length ? o : s : o;
        let a = null;
        let l = null;
        let h = null;
        let d = null;
        if (t.length > e.length) {
          a = i && i[0];
          l = i && i[1];
          h = i && i[2];
          d = i && i[3];
        } else {
          h = i && i[0];
          d = i && i[1];
          a = i && i[2];
          l = i && i[3];
        }
        return [a, l, h, d, i && i[4]];
      });
      to(this, "diff_halfMatchI_", (t, e, i) => {
        let r = t.substring(i, i + Math.floor(t.length / 4));
        let n = -1;
        let o = "";
        let s = "";
        let a = "";
        let l = "";
        let h = "";
        while ((n = e.indexOf(r, n + 1)) !== -1) {
          let r = this.diffCommonPrefix(t.substring(i), e.substring(n));
          let d = this.diffCommonSuffix(t.substring(0, i), e.substring(0, n));
          if (o.length < d + r) {
            o = e.substring(n - d, n) + e.substring(n, n + r);
            s = t.substring(0, i - d) || "";
            a = t.substring(i + r) || "";
            l = e.substring(0, n - d) || "";
            h = e.substring(n + r) || "";
          }
        }
        if (o.length * 2 >= t.length) {
          return [s, a, l, h, o];
        } else {
          return null;
        }
      });
      to(this, "diffMerge", t => {
        let e;
        t.push(new ta(ts.DIFF_EQUAL, ""));
        let i = 0;
        let r = 0;
        let n = 0;
        let o = "";
        let s = "";
        while (i < t.length) {
          switch (t[i].op) {
            case ts.DIFF_INSERT:
              n++;
              s += t[i].text;
              i++;
              break;
            case ts.DIFF_DELETE:
              r++;
              o += t[i].text;
              i++;
              break;
            case ts.DIFF_EQUAL:
              if (r + n > 1) {
                if (r !== 0 && n !== 0) {
                  if ((e = this.diffCommonPrefix(s, o)) !== 0) {
                    if (i - r - n > 0 && t[i - r - n - 1].op === ts.DIFF_EQUAL) {
                      t[i - r - n - 1].text += s.substring(0, e);
                    } else {
                      t.splice(0, 0, new ta(ts.DIFF_EQUAL, s.substring(0, e)));
                      i++;
                    }
                    s = s.substring(e);
                    o = o.substring(e);
                  }
                  if ((e = this.diffCommonSuffix(s, o)) !== 0) {
                    t[i].text = s.substring(s.length - e) + t[i].text;
                    s = s.substring(0, s.length - e);
                    o = o.substring(0, o.length - e);
                  }
                }
                i -= r + n;
                t.splice(i, r + n);
                if (o.length) {
                  t.splice(i, 0, new ta(ts.DIFF_DELETE, o));
                  i++;
                }
                if (s.length) {
                  t.splice(i, 0, new ta(ts.DIFF_INSERT, s));
                  i++;
                }
                i++;
              } else if (i !== 0 && t[i - 1].op === ts.DIFF_EQUAL) {
                t[i - 1].text += t[i].text;
                t.splice(i, 1);
              } else {
                i++;
              }
              n = 0;
              r = 0;
              o = "";
              s = "";
          }
        }
        if (t[t.length - 1].text === "") {
          t.pop();
        }
        let a = false;
        for (i = 1; i < t.length - 1;) {
          if (t[i - 1].op === ts.DIFF_EQUAL && t[i + 1].op === ts.DIFF_EQUAL) {
            if (t[i].text.substring(t[i].text.length - t[i - 1].text.length) === t[i - 1].text) {
              t[i].text = t[i - 1].text + t[i].text.substring(0, t[i].text.length - t[i - 1].text.length);
              t[i + 1].text = t[i - 1].text + t[i + 1].text;
              t.splice(i - 1, 1);
              a = true;
            } else if (t[i].text.substring(0, t[i + 1].text.length) === t[i + 1].text) {
              t[i - 1].text += t[i + 1].text;
              t[i].text = t[i].text.substring(t[i + 1].text.length) + t[i + 1].text;
              t.splice(i + 1, 1);
              a = true;
            }
          }
          i++;
        }
        if (a) {
          this.diffMerge(t);
        }
      });
    }
  }();
  var docxEventCollectorWrapper = require("docx-event-collector-wrapper") /*id: 954913*/;
  function td(t, e, i, r) {
    if (t.type === docBlockTypeConstants.blockTypeConstants.TABLE) {
      e = function (t) {
        let e = [];
        let i = t.nodeData.cell_set;
        let r = t.nodeData.rows_id;
        let n = t.nodeData.columns_id;
        if (Array.isArray(r) && Array.isArray(n)) {
          r.forEach(t => {
            n.forEach(r => {
              let o = i[`${t}${r}`]?.block_id;
              if (o) {
                e.push(o);
              }
            });
          });
        }
        return e;
      }(t);
    }
    e.forEach((e, n) => {
      tc({
        node: t,
        index: n,
        childId: e,
        snapshots: i,
        commonBlockNodeProps: r
      });
    });
    if (t instanceof t_) {
      let e = I(t);
      if (e.added.length) {
        e.added.forEach(e => tc({
          node: t,
          index: t.children.length,
          childId: e,
          snapshots: i,
          commonBlockNodeProps: r,
          isInlineBlock: true
        }));
      }
    }
  }
  function tc(t) {
    let {
      node: e,
      index: i,
      childId: r,
      snapshots: n,
      commonBlockNodeProps: o,
      isInlineBlock: s = false
    } = t;
    let a = n[r];
    if (!a) {
      return null;
    }
    let {
      id: l,
      version: h,
      data: d
    } = a;
    let c = tb(d.type);
    c.id = l;
    c.originId = l;
    c.parent = e;
    c.nodeData = deepCloneWrapper_1.deepClone(d);
    c.version = h;
    c.type = d.type;
    c.commonBlockNodeProps = o;
    c.isInlineBlock = s;
    e.addChild(i, c);
    td(c, d.children || [], n, o);
    return c;
  }
  function tu(t, e, i) {
    var r;
    if ((e = typeof (r = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var i = t[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(t, e || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? r : r + "") in t) {
      Object.defineProperty(t, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = i;
    }
    return t;
  }
  (n = {}).easysync = "easysync";
  n.normal = "normal";
  let tp = n;
  class t_ extends M {
    patchChanges(t, e) {
      super.patchChanges(t, e);
      if (!this.nodeData.text) {
        return;
      }
      let i = this.nodeData.text;
      if (this.getHasBigChange()) {
        let t = this.fullChanges[this.fullChanges.length - 1];
        this.fullChanges = [];
        let {
          clientVars: e,
          changeDetail: r
        } = function (t, e, i) {
          let {
            op: r,
            userId: n
          } = e;
          let o = t.initialAttributedTexts.text["0"];
          let s = [];
          function a(t) {
            s.push(t);
          }
          let l = function (t) {
            let {
              ops: e
            } = tn({
              ...t,
              attribute: te.DELETE_TAG
            }).toUnpacked();
            return e;
          }({
            snapshot: t,
            baseLength: 0,
            baseLines: 0,
            recordId: i,
            userId: n,
            pushChangeDetail: a
          });
          t.initialAttributedTexts.attribs["0"] = l;
          let h = tn({
            snapshot: r,
            baseLength: o.length,
            baseLines: o.split("\n").length - 1,
            recordId: i,
            userId: n,
            pushChangeDetail: a,
            attribute: te.ADD_TAG
          }).toChangeset();
          return {
            clientVars: tr([{
              p: ["text"],
              subType: {
                o: {
                  apool: r.apool,
                  zone_changesets: {
                    0: h
                  }
                },
                t: "easysync"
              }
            }], {
              text: t
            }).text,
            changeDetail: s
          };
        }(i, t, this.id);
        this.patchProperty(["text"], e);
        this.contentChangeDetail = r;
      } else {
        while (this.fullChanges.length > 0) {
          let {
            op: t,
            userId: e,
            changeType: r
          } = this.fullChanges.shift();
          this.handleTextChangeAction(t, i, e, r);
        }
      }
      let r = new Set(this.children.map(t => t.originId));
      let n = I(this);
      n.added = n.added.filter(t => !r.has(t));
      n.added.reduce((t, i) => {
        let r = tc({
          node: this,
          index: this.children.length,
          childId: i,
          snapshots: e,
          commonBlockNodeProps: this.commonBlockNodeProps,
          isInlineBlock: true
        });
        if (r) {
          t.push(r);
        }
        return t;
      }, []).forEach(i => {
        this.addedInlineBlock.add(i.id);
        i.patchChanges(t, e);
      });
      n.deleted.forEach(t => this.deletedInlineBlock.add(t));
    }
    handleOtherOp(t, e, i) {
      let {
        p: o,
        action: s
      } = t;
      let a = s == null ? undefined : s.oi;
      let l = false;
      if (!a && t.subType) {
        if (t.subType.t === tp.easysync) {
          l = true;
        }
        let e = this.originalClientVars || this.nodeData.text;
        a = tr([t], {
          text: e
        }, i => {
          var n;
          var o;
          var l;
          var h;
          this.isError = true;
          let d = (o = t.subType) === null || o === undefined ? undefined : (n = o.o) === null || n === undefined ? undefined : n.zone_changesets?.["0"];
          docxEventCollectorWrapper.wrapEventCollector("docx_history_dev", {
            action: "line_edit_exception",
            data: {
              message: i.message,
              stack: JSON.stringify(i.stack),
              oldLen: e.initialAttributedTexts.text["0"]?.length,
              cs: d == null ? undefined : d.slice(0, d == null ? undefined : d.indexOf("$")),
              nextNum: (h = t.subType) === null || h === undefined ? undefined : (l = h.o) === null || l === undefined ? undefined : l.apool?.nextNum
            }
          });
        })?.text;
      }
      if (!a) {
        this.isError = true;
        docxEventCollectorWrapper.wrapEventCollector("docx_history_dev", {
          action: "exception",
          data: {
            message: "oi is empty"
          }
        });
        return;
      }
      this.originalClientVars = deepCloneWrapper_1.deepClone(a);
      if (this.isAdded || this.parent?.isDeleted) {
        this.patchProperty(o, a);
      } else {
        this.fullChanges.push({
          op: a,
          userId: i,
          changeType: l ? tp.easysync : tp.normal
        });
      }
    }
    getHasBigChange() {
      return !(this.fullChanges.length <= 0) && [{
        op: this.nodeData.text
      }, ...this.fullChanges].some(t => this.getText(t.op).length > 10000);
    }
    handleTextChangeAction(t, e, i, r) {
      let n = this.getText(t);
      let o = this.getText(e);
      let s = this.getNumAttributes(t);
      let a = this.getNumAttributes(e);
      let l = this.getAttribs(t);
      let h = this.getAttribs(e);
      let d = new te(l, s, this.id);
      let c = new te(h, a, this.id);
      let u = tl.diff(o, n);
      let p = "";
      let _ = 0;
      let f = 0;
      u.forEach(t => {
        if (t.op === 0) {
          d.diffAttribute(_, f, t.text.length, c);
          _ += t.text.length;
          f += t.text.length;
          p += t.text;
        } else if (t.op === -1) {
          let e = d.addDeleteAttribute(_, f, t.text, c);
          p += e;
          f += t.text.length;
          _ += e.length;
        } else if (t.op === 1) {
          let e = d.addInsertAttribute(_, t.text, r);
          _ += t.text.length;
          p += e;
        }
      });
      let {
        textSnapshot: b,
        deleteIndexArr: g
      } = d.getFinalAttributes(p, i, r, this.deleteIndexAuthorMap);
      if (r === tp.easysync) {
        g.forEach(t => {
          this.deleteIndexAuthorMap[t] ||= i;
        });
      }
      this.patchProperty(["text"], b);
      d.getAllChangeDetail();
      this.contentChangeDetail = d.getAllChangeDetail();
    }
    getText(t) {
      return t.initialAttributedTexts.text["0"];
    }
    getNumAttributes(t) {
      return t.apool.numToAttrib;
    }
    getAttribs(t) {
      return t.initialAttributedTexts.attribs["0"];
    }
    constructor(...t) {
      super(...t);
      tu(this, "fullChanges", []);
      tu(this, "originalClientVars", null);
      tu(this, "deleteIndexAuthorMap", {});
      tu(this, "addedInlineBlock", new Set());
      tu(this, "deletedInlineBlock", new Set());
    }
  }
  let tf = () => new t_();
  function tb(t) {
    let e = null;
    switch (t) {
      case docBlockTypeConstants.blockTypeConstants.TEXT:
      case docBlockTypeConstants.blockTypeConstants.PAGE:
      case docBlockTypeConstants.blockTypeConstants.HEADING1:
      case docBlockTypeConstants.blockTypeConstants.HEADING2:
      case docBlockTypeConstants.blockTypeConstants.HEADING3:
      case docBlockTypeConstants.blockTypeConstants.HEADING4:
      case docBlockTypeConstants.blockTypeConstants.HEADING5:
      case docBlockTypeConstants.blockTypeConstants.HEADING6:
      case docBlockTypeConstants.blockTypeConstants.HEADING7:
      case docBlockTypeConstants.blockTypeConstants.HEADING8:
      case docBlockTypeConstants.blockTypeConstants.HEADING9:
      case docBlockTypeConstants.blockTypeConstants.HEADINGN:
      case docBlockTypeConstants.blockTypeConstants.TODO:
      case docBlockTypeConstants.blockTypeConstants.ORDERED:
      case docBlockTypeConstants.blockTypeConstants.BULLET:
      case docBlockTypeConstants.blockTypeConstants.CODE:
      case docBlockTypeConstants.blockTypeConstants.QUOTE:
      case docBlockTypeConstants.blockTypeConstants.CELL:
      case docBlockTypeConstants.blockTypeConstants.OBJECTIVE:
      case docBlockTypeConstants.blockTypeConstants.KEY_RESULT:
      case docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_TITLE:
      case docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE:
        e = tf();
        break;
      case docBlockTypeConstants.blockTypeConstants.TABLE:
        e = Q();
        break;
      case docBlockTypeConstants.blockTypeConstants.DIAGRAM:
        e = j();
        break;
      case docBlockTypeConstants.blockTypeConstants.GRID:
        e = G();
        break;
      default:
        e = P();
    }
    return e;
  }
  function tg(t, e, i) {
    var r;
    if ((e = typeof (r = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var i = t[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(t, e || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? r : r + "") in t) {
      Object.defineProperty(t, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = i;
    }
    return t;
  }
  let tm = [docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.BASE_REFER, docBlockTypeConstants.blockTypeConstants.SHEET];
  class tv {
    buildSnapshotTree(t) {
      this._snapshotData = t;
      let e = function (t) {
        let e = Object.values(t).filter(t => {
          return (t == null ? undefined : t.data?.type) === "page";
        });
        if (e && e[0]) {
          return e[0];
        } else {
          return null;
        }
      }(t);
      if (!e) {
        throw Error("快照信息不全，查找不到根节点快照信息!!!");
      }
      let {
        version: i,
        id: r,
        data: n
      } = e;
      this._rootBlockNode = tb(n.type);
      this._rootBlockNode.id = r;
      this._rootBlockNode.originId = r;
      this._rootBlockNode.nodeData = n;
      this._rootBlockNode.version = i;
      this._rootBlockNode.type = n.type;
      this._rootBlockNode.commonBlockNodeProps = this._commonBlockNodeProps;
      td(this._rootBlockNode, n.children || [], t, this._commonBlockNodeProps);
    }
    buildChangeTree(t, e = []) {
      if (!t) {
        diContainerInstance.diContainer.get(docLoggerSymbol.docLoggerSymbol).persist.info({
          eventName: "Unexpect_HistoryDiffAlgorithm_BuildChangeTree"
        });
        return;
      }
      M.ignoreProps = e;
      M.generateBlockNode = tb;
      let {
        changes: i,
        new_blocks: r
      } = t;
      let n = Object.keys(this._snapshotData);
      let o = Object.keys(i);
      n.filter(t => o.includes(t)).forEach(t => {
        let e = C(t, this._rootBlockNode);
        if (!(e == null ? undefined : e.isPatched) && e != null) {
          e.patchChanges(i, r || {});
        }
      });
    }
    getSnapshotDatas() {
      return {
        block_map: this.tagDraggingForSnapshotDatas(this._rootBlockNode.getSnapshotData()),
        id: this._rootBlockNode.id
      };
    }
    tagDraggingForSnapshotDatas(t) {
      let e = Object.keys(t);
      e.forEach(i => {
        if (!tm.includes(t[i].data.type)) {
          return;
        }
        let r = i.endsWith("-del");
        let n = (() => {
          let e = t[i].data.parent_id;
          while (e) {
            if (e.endsWith("-del")) {
              return true;
            }
            e = t[e].data.parent_id;
          }
          return false;
        })();
        if (!r && !n) {
          return;
        }
        let o = i.replace(/-del$/, "");
        let s = e.find(t => {
          if (i === t) {
            return false;
          }
          let e = t.split("-");
          return e[e.length - 1] === o;
        });
        if (!s) {
          return;
        }
        let a = t[i];
        a.data.type = docxHistoryConstants.HistoryDragConsts.HISTROY_DRAG_PLACEHOLDER;
        a.data.isDragged = true;
        a.data.draggedTarget = s;
      });
      return t;
    }
    getChangeDetail() {
      return this._rootBlockNode.getChangeDetail();
    }
    setCommonBlockNodeProps(t) {
      this._commonBlockNodeProps = t;
    }
    constructor() {
      tg(this, "_rootBlockNode", undefined);
      tg(this, "_snapshotData", undefined);
      tg(this, "_commonBlockNodeProps", {});
    }
  }
  var alwaysTrueFunction = require("always-true-function") /*id: 835008*/;
  var otterDocApiServiceDi = require("otter-doc-api-service-di") /*id: 53616*/;
  let tC = docxFetchConcurrencyConfig.getFetchConfig();
  async function tS(t, e, i, r) {
    let n = new docxClientvarFetchManager.InteractionModule();
    return new Promise((s, a) => {
      n.start({
        token: e,
        stage: "history",
        version: t,
        blockId: i,
        mode: i ? fetchSyncConstants.fetchModes.SPECIFIC : fetchSyncConstants.fetchModes.AroundV2,
        concurrency: tC.concurrency,
        noUseWorker: true,
        extraParams: {
          open_type: 1,
          auth_token: r,
          auth_type: r ? otterDocApiServiceDi.getOtterDocService().otter_doc_common.AuthType.ResourceAuthToken : undefined
        },
        fallbackFetch: docxApiConstantsExports.docxApiService.fetchClientVarSlicedWithAnyParams,
        errorHandler: t => a(t),
        finishCb: (t, e) => {
          let i = e();
          s({
            code: 0,
            msg: "",
            data: docxBlockValidatorUtils.mergeBlockMaps(i)
          });
        }
      });
    }).catch(t => t).finally(() => {
      n.destroy();
    });
  }
  async function tA(t, e, i) {
    let r = {
      id: e,
      version: t,
      open_type: 1,
      auth_token: i,
      auth_type: i ? otterDocApiServiceDi.getOtterDocService().otter_doc_common.AuthType.ResourceAuthToken : undefined
    };
    return await documentHistoryService.historyService.fetchHistorySnapshot(r).catch(t => t);
  }
  async function tx(t, e, i) {
    let r = {
      page_id: e,
      from_ver: t.page_info.from_ver,
      to_ver: t.page_info.to_ver,
      auth_token: i,
      auth_type: i ? otterDocApiServiceDi.getOtterDocService().otter_doc_common.AuthType.ResourceAuthToken : undefined
    };
    return await documentHistoryService.historyService.fetchChanges(r).catch(t => t);
  }
  function tI(t, e, i, r) {
    let n = t.data.block_map;
    Object.values(n).forEach(t => {
      let i = t == null ? undefined : t.data?.text;
      if (i && contentDeltaUtilityFunctions.S(i)) {
        t.data.text = contentDeltaUtilityFunctions.O(i).clientVars;
      }
    });
    let o = new tv();
    o.setCommonBlockNodeProps({
      folded: false
    });
    o.buildSnapshotTree(n);
    if (i) {
      let t = e == null ? undefined : e.data;
      o.buildChangeTree(t, ["comments", ...(r ?? [])]);
    }
    return {
      clientVar: {
        ...t.data,
        ...o.getSnapshotDatas()
      },
      historyChangeDetail: o.getChangeDetail()
    };
  }
  function tB(t) {
    if (t.parentVersion) {
      return t.external_block_info;
    } else {
      return function (t) {
        let e = t.minor_history;
        let i = {};
        e.forEach(t => {
          let e = t.external_block_info;
          for (let t in e) {
            if (Object.prototype.hasOwnProperty.call(e, t)) {
              let r = e[t];
              if (i[t]) {
                let e = i[t];
                e.from_ver = Math.min(e.from_ver, r.from_ver);
                e.to_ver = Math.max(e.to_ver, r.to_ver);
              } else {
                i[t] = {
                  ...r
                };
              }
            }
          }
        });
        return i;
      }(t);
    }
  }
  async function tN(t, e, i, r) {
    let n;
    let {
      from_ver: o,
      to_ver: s
    } = t.page_info;
    let a = e && o !== s;
    let h = a ? o : s;
    let d = alwaysTrueFunction.alwaysTrue() ? tS(h, i, undefined, r) : tA(h, i, r);
    let c = a && tx(t, i, r);
    let p = await d;
    let _ = (await c) || null;
    n = false;
    let f = (p instanceof Error ? n = true : _ instanceof Error ? n = true : p.data ? _ && !_.data ? n = true : p.code ? n = true : _ && _.code && (n = true) : n = true, p.code === errorStatusCodes.ErrorCode.KEY_INVALID || _ && _.code === errorStatusCodes.ErrorCode.KEY_INVALID) ? flowDocConstants.SyncStatus.NO_SECRET : n ? flowDocConstants.SyncStatus.FAILED : null;
    if (f) {
      return {
        errorType: f
      };
    } else {
      return tI(p, _, a);
    }
  }
  require.d(exports, {
    processHistoryData: function () {
      return tI;
    },
    fetchDocHistory: function () {
      return tN;
    },
    resolveBlockInfo: function () {
      return tB;
    },
    fetchClientVars: function () {
      return tS;
    }
  });
}