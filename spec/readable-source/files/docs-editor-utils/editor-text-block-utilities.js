// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$G' to 'isTextEditable'
// - Renamed export 'CM' to 'deleteSelectionByOp'
// - Renamed export 'E8' to 'getInlineDisplayMarks'
// - Renamed export 'HD' to 'stripAiExtraAttributes'
// - Renamed export 'HW' to 'insertBlockWithMarks'
// - Renamed export 'NX' to 'hasTextWithApool'
// - Renamed export 'Nz' to 'isEditorInstance'
// - Renamed export 'P0' to 'isFoldedCodeBlock'
// - Renamed export 'Qg' to 'isTextBlock'
// - Renamed export 'Rb' to 'hasTextWithApoolAlt'
// - Renamed export 'SI' to 'getModelTextWithoutTrailing'
// - Renamed export 'Ug' to 'mergeAdjacentOps'
// - Renamed export 'Yp' to 'isQuoteBlock'
// - Renamed export 'ZI' to 'isAgendaBlock'
// - Renamed export 'Zi' to 'getInheritableAttributes'
// - Renamed export 'cL' to 'getInheritableAttributesForZone'
// - Renamed export 'cZ' to 'getEquationIndent'
// - Renamed export 'cd' to 'extractFileMentionData'
// - Renamed export 'ey' to 'deleteSelection'
// - Renamed export 'g$' to 'hasEquationInText'
// - Renamed export 'hr' to 'countEquationsInBlock'
// - Renamed export 'k$' to 'hasTextWithApoolSimple'
// - Renamed export 'tb' to 'replaceInlineDisplayMarks'
// - Renamed export 'w7' to 'processDocMentionsInText'
// - Renamed export 'y7' to 'getInlineDisplayMarksFromText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 469443
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  require("create-document-node-helper") /*id: 980168*/;
  var driveDocInlineComponentUtils = require("drive-doc-inline-component-utils") /*id: 759062*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var editorRevisionConstants = require("editor-revision-constants") /*id: 835842*/;
  var editorDataManagerClass = require("editor-data-manager-class") /*id: 699568*/;
  require("editor-type-constants") /*id: 719873*/;
  var embedObjectNameAccess = require("embed-object-name-access") /*id: 223936*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorDataTextUtils = require("editor-data-text-utils") /*id: 606734*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  function b(e) {
    return e && Reflect.get(e, "isTextEditable");
  }
  function v(e) {
    return e && e.type === docBlockTypeConstants.blockTypeConstants.CODE && e.folded;
  }
  function T(e) {
    return Reflect.has(e, "editor") && e.editor;
  }
  function C(e) {
    return e.isTextBlock;
  }
  function k(e) {
    return docBlockTypeConstants.agendaBlockSet.has(e);
  }
  function I(e) {
    return docBlockTypeConstants.quoteBlockTypes.includes(e.type);
  }
  let R = [displayTypeConstants.displayInlineBlock];
  function y(e, n) {
    for (let r of R) {
      editorDataManagerClass.EditorDataManager.replaceMark(e, r, n);
    }
  }
  function O(e) {
    return !!e.text && !!e.text.apool;
  }
  function S(e) {
    return !!e.text && !!e.text.apool;
  }
  function A(e) {
    return L(e.text);
  }
  function L(e) {
    let n = [];
    editorDataManagerClass.EditorDataManager.eachMarkByKey(e, displayTypeConstants.displayInlineBlock, e => n.push(e));
    return n;
  }
  function N(e, n) {
    let r = [];
    editorDataManagerClass.EditorDataManager.eachMarkByKey(e, inlineComponentConstants.componentType, e => {
      let o;
      try {
        o = JSON.parse(e);
      } catch (e) {
        return;
      }
      if (n.includes(o.type)) {
        r.push(o);
      }
    });
    return r;
  }
  function B(e) {
    let n = 0;
    let {
      text: r
    } = e;
    let o = r.initialAttributedTexts.attribs[0];
    for (let [e, l] of Object.entries(r.apool.numToAttrib)) {
      let r = parseInt(e).toString(36);
      let [c] = l;
      if (c === displayTypeConstants.typeEquation) {
        let e = RegExp(`\\*${r}[+*]`, "g");
        let l = o.match(e)?.length;
        if (l) {
          n += l;
        }
      }
    }
    return n;
  }
  function D(e) {
    return N(e, [inlineComponentConstants.mentionTypes.FILE]).map(e => e.data);
  }
  function w(e, n, r, o) {
    let i = documentBlockOperations.createSingleBlock(e, n, o);
    A(o).forEach(n => e.replace(n, ["parent_id"], i));
    e.insertChildren(n, r, [i]);
    return i;
  }
  function M(e) {
    let n = e.getModelText();
    return n.substring(0, n.length - 1);
  }
  function P(e, n, r = []) {
    let o = e.zoneState;
    return x(e, o, n, r);
  }
  function F(e, n, r = []) {
    let o = e.getZoneState(n.start.zoneId);
    if (o) {
      return x(e, o, n, r);
    } else {
      return {};
    }
  }
  function x(e, n, r, o = []) {
    let i = n.getLine(r.start.line);
    if (!i) {
      return {};
    }
    let l = i.getLineMarker();
    let c = r.start;
    let u = r.start;
    if (l === r.start.offset && i.length() > l + 1) {
      u = {
        ...r.start,
        offset: r.start.offset + 1
      };
    } else if (r.start.offset > l) {
      c = {
        ...r.start,
        offset: r.start.offset - 1
      };
    }
    let a = function (e, n) {
      let r = e.getLine(n.start.line);
      let o = n.start;
      if (n.start.offset < r.length()) {
        let r = e.pointToOffset(n.start);
        if (r === null) {
          return {};
        }
        o = e.offsetToPoint(r + 1);
      }
      return e.getAttributes(n.start, o).toMap();
    }(n, r);
    return e.getAttributes(c, u).filter(n => {
      let [i, l] = n;
      return !i.startsWith(editorRevisionConstants.revisionIdString) && (e.schema.get(i)?.tailInherit !== false || a[i] === l && !o.includes(i));
    }).reduce((e, n) => {
      let [r, o] = n;
      e[r] = o;
      return e;
    }, {});
  }
  function U(e, n) {
    return e.reduce((e, r) => {
      if (!n.some(n => {
        let c = r.insert && r.attributes?.[n];
        let u = e[e.length - 1];
        let a = (u == null ? undefined : u.insert) && (u == null ? undefined : u.attributes?.[n]);
        return !!a && !!isStringTypeCheck.isString(u.insert) && a === c && (u.insert = u.insert + r.insert, true);
      })) {
        e.push(r);
      }
      return e;
    }, []);
  }
  function G(e, n, r) {
    var o;
    if (!e) {
      return;
    }
    let {
      zoneId: i
    } = e.model;
    if (!(n == null ? undefined : n.selection)) {
      return;
    }
    let c = editorRangeUtilities.convertRangeWithZone(e, n.selection);
    e.model.setSelection(c);
    let u = (o = e.model.getSelection()) === null || o === undefined ? undefined : o.toPosition();
    if (u && u.len > 0) {
      let n = new contentStructureDelta.ContentDelta({
        zoneId: i
      }).retain(u.start).delete(u.len);
      e.model.apply(n, {
        extra: {
          op: r
        }
      });
    }
  }
  function H(e, n) {
    var r;
    if (!e) {
      return;
    }
    let {
      zoneId: o
    } = e.model;
    let i = (r = e.model.getSelection()) === null || r === undefined ? undefined : r.toPosition();
    if (i && i.len > 0) {
      let r = new contentStructureDelta.ContentDelta({
        zoneId: o
      }).retain(i.start).delete(i.len);
      e.model.apply(r, {
        extra: {
          op: n
        }
      });
    }
  }
  function K(e, n) {
    let {
      apool: r,
      initialAttributedTexts: o
    } = e;
    if (!Object.values(r.numToAttrib).some(e => e[0] === inlineComponentConstants.componentType)) {
      return e;
    }
    let l = deltaSetChangesetConverter_1.attributedTextToDeltaSet(o, r);
    l.get(editorModuleConstantsConfig.defaultVersion).ops.forEach(e => {
      if (!e.attributes) {
        return;
      }
      let r = e.attributes[inlineComponentConstants.componentType];
      if (r) {
        try {
          let {
            data: o,
            type: i
          } = JSON.parse(r);
          if (i === inlineComponentConstants.mentionTypes.DOC) {
            let {
              file_type: r,
              title: i,
              token: l
            } = o;
            n.editorAPI.getService(embedObjectNameAccess.embedObjectName).addEmbedObjToFetchPermission({
              token: l,
              title: i,
              type: driveDocInlineComponentUtils.normalizeSuiteType(r)
            });
            let a = driveDocInlineComponentUtils.getRootToken(n);
            if (driveDocInlineComponentUtils.isNodeUnreadable(a, l)) {
              let n = Object.keys(e.attributes).reduce((n, r) => {
                if (r !== inlineComponentConstants.componentType) {
                  n[r] = e.attributes?.[r];
                }
                return n;
              }, {});
              e.attributes = n;
              e.insert = i;
            }
          }
        } catch (e) {
          return;
        }
      }
    });
    return editorDataTextUtils.getAttributedTexts(l);
  }
  function Z(e) {
    if (!e.isTextBlock) {
      return false;
    }
    let n = ["equation"];
    return Object.values(e.snapshot.text.apool.numToAttrib).some(e => n.includes(e[0]));
  }
  function $() {
    let e = browserEnvironmentDetectionUtils.browserDetector.isLarkFeed ? "0.15" : "0.2";
    return `${e}em`;
  }
  function j(e) {
    return function (e, n) {
      let {
        apool: r,
        initialAttributedTexts: o
      } = e;
      let l = deltaSetChangesetConverter_1.attributedTextToDeltaSet(o, r);
      l.get(editorModuleConstantsConfig.defaultVersion).ops.forEach(e => {
        if (!e.attributes) {
          return;
        }
        let r = Object.keys(e.attributes).reduce((r, o) => {
          if (n(o)) {
            r[o] = e.attributes?.[o];
          }
          return r;
        }, {});
        e.attributes = r;
      });
      return editorDataTextUtils.getAttributedTexts(l);
    }(e, e => !e.startsWith("ai-extra"));
  }
  require.d(exports, {
    isTextEditable: function () {
      return b;
    },
    deleteSelectionByOp: function () {
      return G;
    },
    getInlineDisplayMarks: function () {
      return L;
    },
    stripAiExtraAttributes: function () {
      return j;
    },
    insertBlockWithMarks: function () {
      return w;
    },
    hasTextWithApool: function () {
      return O;
    },
    isEditorInstance: function () {
      return T;
    },
    isFoldedCodeBlock: function () {
      return v;
    },
    isTextBlock: function () {
      return C;
    },
    hasTextWithApoolAlt: function () {
      return N;
    },
    getModelTextWithoutTrailing: function () {
      return M;
    },
    mergeAdjacentOps: function () {
      return U;
    },
    isQuoteBlock: function () {
      return I;
    },
    isAgendaBlock: function () {
      return k;
    },
    getInheritableAttributes: function () {
      return P;
    },
    getInheritableAttributesForZone: function () {
      return F;
    },
    getEquationIndent: function () {
      return $;
    },
    extractFileMentionData: function () {
      return D;
    },
    deleteSelection: function () {
      return H;
    },
    hasEquationInText: function () {
      return Z;
    },
    countEquationsInBlock: function () {
      return B;
    },
    hasTextWithApoolSimple: function () {
      return S;
    },
    replaceInlineDisplayMarks: function () {
      return y;
    },
    processDocMentionsInText: function () {
      return K;
    },
    getInlineDisplayMarksFromText: function () {
      return A;
    }
  });
}