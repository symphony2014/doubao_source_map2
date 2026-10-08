// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$$' to 'convertToEasysyncOp'
// - Renamed export 'G6' to 'formatAttribsToString'
// - Renamed export 'Jt' to 'compareAttributeTexts'
// - Renamed export 'K_' to 'hasCarriageReturn'
// - Renamed export 'Ml' to 'formatOpsForDisplay'
// - Renamed export 'PV' to 'escapeDollarSigns'
// - Renamed export 'VN' to 'editWithLineManager'
// - Renamed export 'Z$' to 'buildNumToAttribMap'
// - Renamed export 'cE' to 'changesetToDeltaSet'
// - Renamed export 'pZ' to 'deltaSetToChangeset'
// - Renamed export 'sZ' to 'isEasysyncSubtype'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 539974
         */
module.exports = function (module, exports, require) {
  var changesetOperationsCore = require("changeset-operations-core") /*id: 378584*/;
  var operationalTransformCore = require("operational-transform-core") /*id: 379386*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var docxEditorLineEditableManager = require("docx-editor-line-editable-manager") /*id: 996925*/;
  function d(e, n, r) {
    let {
      snapshot: o
    } = n;
    let {
      text: i
    } = o;
    let l = (r == null ? undefined : r.apool) || i.apool;
    let c = (r == null ? undefined : r.zone_changesets) || i.initialAttributedTexts.text;
    let s = r == null ? undefined : r.toChangeSetOptions;
    let d = deltaSetChangesetConverter_1.deltaSetToChangeset({
      deltaSet: e,
      apool: l,
      texts: c,
      options: s
    });
    return {
      zone_changesets: {
        [zeroConstantModule_1.versionValue]: d
      },
      apool: l
    };
  }
  function f(e) {
    let {
      subType: n
    } = e;
    let {
      o: r
    } = n;
    let {
      zone_changesets: o,
      apool: i
    } = r;
    return deltaSetChangesetConverter_1.changesetToDeltaSet(o[zeroConstantModule_1.versionValue], i);
  }
  function h(e) {
    return operationalTransformCore.easysyncUtils.convertToEasysyncOp(e);
  }
  function _(e, n) {
    let r = {};
    let o = 0;
    let i = new Set();
    let l = Object.keys(e.deltas);
    let c = Object.values(e.deltas);
    for (let e = 0; e < l.length; e++) {
      for (let l of c[e].ops) {
        if (l.attributes) {
          for (let [e, c] of Object.entries(l.attributes)) {
            if ((n == null ? undefined : n.filterLocalAttributes) && e.startsWith("clientside-")) {
              continue;
            }
            let l = `${e},${c}`;
            if (!i.has(l)) {
              i.add(l);
              r[o++] = [e, c];
            }
          }
        }
      }
    }
    return {
      numToAttrib: r,
      nextNum: o
    };
  }
  function p(e) {
    return "subType" in e && e.subType.t === "easysync";
  }
  function g(e, n, r) {
    if (docxEditorLineEditableManager.LineEditableManager.lineEditable) {
      let o = h(new collaborativeEditingFlowSyncModule.OperationBuilder(n).replace(["text"], r).ops[0]);
      let i = f(o).get(zeroConstantModule_1.versionValue);
      if (!i || !deltaSetCore.isEmptyOps(i)) {
        e.edit(n.id, ["text"], o.subType.o);
      }
    } else {
      e.replace(n.id, ["text"], r);
    }
  }
  function E(e) {
    if (e) {
      return e.replace(/\$([\s\S]*)/g, function (e) {
        return `$${e.length - 1}`;
      });
    } else {
      return "none";
    }
  }
  function m(e) {
    return Object.values(e).map(e => e[0].slice(0, 10)).join(",");
  }
  function b(e) {
    let n = [];
    e.forEach(e => {
      let {
        ops: r
      } = e;
      let o = r.map(e => Object.keys(e).map(n => {
        let r;
        switch (n) {
          case "insert":
            r = e[n]?.length;
            break;
          case "delete":
          case "retain":
            r = e[n];
            break;
          default:
            r = "***";
        }
        return `${n}:${r}`;
      }).join(" ; ")).join(" | ");
      n.push(o);
    });
    return n.join(" == ");
  }
  function v(e) {
    return /\r/.test(e);
  }
  function T(e, n) {
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let l = e == null ? undefined : e.toAttributeText();
    let c = n == null ? undefined : n.snapshot?.text;
    if (!l && !c) {
      return true;
    }
    let u = l.initialAttributedTexts.text[zeroConstantModule_1.versionValue];
    let s = c.initialAttributedTexts.text[zeroConstantModule_1.versionValue];
    if (u !== s) {
      i.reason = `text unequal ${u.length} : ${s.length}`;
      return false;
    }
    let d = new changesetOperationsCore.AttribPool().fromJsonable(l.apool);
    let f = l.initialAttributedTexts.attribs[zeroConstantModule_1.versionValue];
    let h = changesetOperationsCore.mapAttribs(c.initialAttributedTexts.attribs[zeroConstantModule_1.versionValue], new changesetOperationsCore.AttribPool().fromJsonable(c.apool), d);
    if (f !== h) {
      i.reason = `attrib unequal ${f} : ${h}`;
    }
    return f === h;
  }
  require.d(exports, {
    convertToEasysyncOp: function () {
      return h;
    },
    formatAttribsToString: function () {
      return m;
    },
    compareAttributeTexts: function () {
      return T;
    },
    hasCarriageReturn: function () {
      return v;
    },
    formatOpsForDisplay: function () {
      return b;
    },
    escapeDollarSigns: function () {
      return E;
    },
    editWithLineManager: function () {
      return g;
    },
    buildNumToAttribMap: function () {
      return _;
    },
    changesetToDeltaSet: function () {
      return f;
    },
    deltaSetToChangeset: function () {
      return d;
    },
    isEasysyncSubtype: function () {
      return p;
    }
  });
}