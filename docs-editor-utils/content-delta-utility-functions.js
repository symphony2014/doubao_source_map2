// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CU' to 'R'
// - Renamed export 'Hu' to 'S'
// - Renamed export 'Il' to 'v'
// - Renamed export 'KJ' to 'D'
// - Renamed export 'KT' to 'T'
// - Renamed export 'OE' to 'L'
// - Renamed export 'Ql' to 'w'
// - Renamed export 'VB' to 'toNumber'
// - Renamed export 'Z' to 'N'
// - Renamed export '_1' to 'A'
// - Renamed export 'dN' to 'y'
// - Renamed export 'j9' to 'b'
// - Renamed export 'k0' to 'O'
// - Renamed export 'qF' to 'k'
// - Renamed export 'sb' to 'B'
// - Renamed export 'tM' to 'C'
// - Renamed export 'vT' to 'toString'
// - Renamed export 'zb' to 'I'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 348536
         */
module.exports = function (module, exports, require) {
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var contentStateManager = require("content-state-manager") /*id: 519638*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var contentDeltaUtilities = require("content-delta-utilities") /*id: 160217*/;
  var richTextSchemaResolverFactory = require("rich-text-schema-resolver-factory") /*id: 873026*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var primitiveConverters = require("primitive-converters") /*id: 383327*/;
  function b(e, n) {
    let r = {};
    let o = e.getEntities(n);
    if (o.length === 0) {
      return r;
    }
    let i = {};
    Object.keys(r = {
      ...o.shift().attributes
    }).forEach(e => {
      if (r[e]) {
        i[e] = 1;
      }
    });
    let l = 1;
    o.forEach(e => {
      let {
        attributes: n
      } = e;
      let o = ++l;
      if (e.text === documentOperationConstants.newlineChar) {
        Object.keys(i).forEach(e => i[e]++);
        return;
      }
      Object.keys(n).forEach(e => {
        if (n[e] === r[e]) {
          i[e] = i[e] + 1;
        }
        if (i[e] !== o && r[e]) {
          delete r[e];
        }
      });
    });
    return r;
  }
  function v(e, n) {
    let r = {};
    let o = e.getEntities(n);
    if (o.length !== 0) {
      r = {
        ...o.shift().attributes
      };
      o.some(e => {
        let n = Object.keys(r);
        if (!n.length) {
          return true;
        }
        if (e.text === documentOperationConstants.newlineChar) {
          return false;
        }
        let {
          attributes: o
        } = e;
        n.forEach(e => {
          if (!o[e]) {
            delete r[e];
          }
        });
        return false;
      });
    }
    return r;
  }
  function T(e, n, r) {
    let o = deltaSetChangesetConverter_1.attributedTextToDeltaSet(e.initialAttributedTexts, e.apool);
    let u = new contentStateManager.ContentStateManager({
      deltaSet: o,
      schema: richTextSchemaResolverFactory.richTextSchemaResolver,
      modulesContainer: editorModuleConstantsConfig.editorModuleManager
    });
    u.setAttributes({
      start: {
        ...n.start,
        zoneId: zeroConstantModule_1.versionValue
      },
      end: {
        ...n.end,
        zoneId: zeroConstantModule_1.versionValue
      }
    }, r);
    return u.getZoneState(zeroConstantModule_1.versionValue).toAttributeText();
  }
  function C(e) {
    let n = O(e).clientVars;
    let r = deltaSetChangesetConverter_1.attributedTextToDeltaSet(n.initialAttributedTexts, n.apool);
    (function (e) {
      if (e.get(zeroConstantModule_1.versionValue)) {
        e.get(zeroConstantModule_1.versionValue).insert("\n", {
          fixEnter: "true"
        });
      } else {
        let n = new contentStructureDelta.ContentDelta().insertEnter({
          fixEnter: "true"
        });
        e.add(n);
      }
    })(r);
    return r;
  }
  function k(e) {
    let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : zeroConstantModule_1.versionValue;
    let {
      ops: o
    } = e.get(r);
    let l = o.length - 1;
    if (o[l].insert === "\n" && o[l].attributes?.fixEnter) {
      e = new deltaSetCore.DeltaSet({
        [r]: new contentStructureDelta.ContentDelta({
          zoneId: r,
          ops: o.slice(0, -1)
        })
      });
    }
    return e;
  }
  function I(e, n, r) {
    if (!e.apool) {
      return;
    }
    let {
      apool: o
    } = e;
    let {
      nextNum: i,
      numToAttrib: l
    } = o;
    if (i) {
      for (let e of Object.keys(l)) {
        let [o, i] = l[e];
        if (o === n && r(i) === false) {
          return;
        }
      }
    }
  }
  function R(e, n) {
    if (!e.apool) {
      return;
    }
    let {
      apool: r
    } = e;
    let {
      nextNum: o,
      numToAttrib: i
    } = r;
    if (o) {
      for (let e of Object.keys(i)) {
        let [r, o] = i[e];
        if (n(r, o) === false) {
          return;
        }
      }
    }
  }
  function y(e, n) {
    let {
      apool: r
    } = e;
    if (!r) {
      return false;
    }
    let {
      nextNum: o,
      numToAttrib: i
    } = r;
    return !!o && Object.keys(i).some(e => i[e][0] === n);
  }
  function O(e) {
    if (!e.apool || !e.initialAttributedTexts) {
      return {
        clientVars: e,
        hasInlineBlock: false
      };
    }
    let {
      apool: n,
      initialAttributedTexts: r
    } = e;
    let {
      nextNum: i,
      numToAttrib: l
    } = n;
    let {
      attribs: c
    } = r;
    let u = [displayTypeConstants.displayInlineBlock, inlineComponentConstants.componentType];
    let a = {};
    let s = {};
    let d = {};
    let _ = 0;
    let p = false;
    Object.keys(l).forEach(e => {
      let n = Number(e);
      let r = l[e][0] + l[e][1];
      if (!p && u.includes(l[e][0])) {
        p = true;
      }
      if (l[e][0] === "inline-component" && s[r] !== undefined) {
        d[n] = s[r];
        _++;
        return;
      }
      d[n] = n - _;
      a[n - _] = l[e];
      s[r] = n - _;
    });
    if (!_) {
      return {
        clientVars: e,
        hasInlineBlock: p
      };
    }
    let g = deepCloneWrapper_1.deepClone(e);
    let m = c[0].replace(/\*[0-9a-z\*]+\+/g, e => {
      let n = {};
      return e.replace(/\*[0-9a-z]+/g, e => {
        let r = d[parseInt(e.slice(1), 36)].toString(36);
        if (n[r]) {
          return "";
        } else {
          n[r] = true;
          return `*${r}`;
        }
      });
    });
    g.apool.numToAttrib = a;
    g.apool.nextNum = i - _;
    g.initialAttributedTexts.attribs[0] = m;
    docxEventCollector.wrappedCollector("ccm_diagram_block_log_dev", {
      action: "remove_inline_attributes",
      text: `delNum: ${_}, old: ${Object.keys(l).length}, new: ${Object.keys(a).length}old attr: ${e.initialAttributedTexts.attribs[0]}, new attr: ${m}`
    });
    return {
      clientVars: g,
      hasInlineBlock: p
    };
  }
  function S(e) {
    if (!e.apool?.numToAttrib) {
      return false;
    }
    let {
      apool: r
    } = e;
    let {
      numToAttrib: o
    } = r;
    let i = false;
    let l = {};
    Object.keys(o).forEach(e => {
      let n = o[e][0] + o[e][1];
      if (o[e][0] === "inline-component" && l[n]) {
        i = true;
      }
      l[n] = o[e];
    });
    return i;
  }
  function A(e, n) {
    let r = C(e);
    return contentDeltaUtilities.processContentDelta(r, n);
  }
  function L(e) {
    let n = [];
    e.forEach(e => {
      if (e.insert) {
        if (e.attributes?.inlineCode) {
          n.push(Array(e.insert.length).fill("Z").join(""));
        } else {
          n.push(e.insert);
        }
      }
    });
    return n;
  }
  function N(e, n) {
    return e.length() === n.length() && e.ops.every((e, r) => {
      let o = n.ops[r];
      if (o === undefined || e.insert !== o.insert) {
        return false;
      }
      let i = e.attributes || {};
      let l = o.attributes || {};
      let c = Object.keys(i);
      let u = Object.keys(l);
      return c.length === u.length && c.every(e => i[e] === l[e] || (i[e] && i[e], false));
    });
  }
  function B(e, n) {
    let {
      ops: r
    } = e.getContent();
    let o = 0;
    let i = [0, 0];
    let l = false;
    for (let e of r) {
      if (deltaSetCore.isInsertString(e) && (i = [o, o += e.insert.length], e === n)) {
        l = true;
        break;
      }
    }
    if (!l) {
      throw Error("node not found");
    }
    return i;
  }
  function D(e) {
    if (deltaSetCore.isInsertString(e)) {
      return e;
    } else {
      return {
        insert: e.text,
        attributes: e.mark
      };
    }
  }
  function w(e) {
    let {
      nonundoable: n,
      isRemote: r,
      extra: o
    } = e;
    let i = {};
    if (n !== undefined) {
      i.undoable = !n;
    }
    if (r) {
      i.from = collaborativeEditingFlowSyncModule.kq.REMOTE;
    }
    if (o) {
      i.extra = o;
    }
    if (o == null ? undefined : o.mergeMode) {
      i.mergeMode = o.mergeMode;
    }
    return i;
  }
  require.d(exports, {
    R: function () {
      return R;
    },
    S: function () {
      return S;
    },
    v: function () {
      return v;
    },
    D: function () {
      return D;
    },
    T: function () {
      return T;
    },
    L: function () {
      return L;
    },
    w: function () {
      return w;
    },
    toNumber: function () {
      return primitiveConverters.toNumber;
    },
    N: function () {
      return N;
    },
    A: function () {
      return A;
    },
    y: function () {
      return y;
    },
    b: function () {
      return b;
    },
    O: function () {
      return O;
    },
    k: function () {
      return k;
    },
    B: function () {
      return B;
    },
    C: function () {
      return C;
    },
    toString: function () {
      return primitiveConverters.toString;
    },
    I: function () {
      return I;
    }
  });
}