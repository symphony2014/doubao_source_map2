// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BU' to 'isInQuoteContainer'
// - Renamed export 'GC' to 'expandFoldedBlocks'
// - Renamed export 'Lo' to 'checkBlockHierarchy'
// - Renamed export 'NT' to 'isBlockAncestor'
// - Renamed export 'TG' to 'isWikiV3Enabled'
// - Renamed export 'Vh' to 'getToolboxBlockIcon'
// - Renamed export 'kC' to 'getGridColumnClass'
// - Renamed export 'mI' to 'isTranslatableCallout'
// - Renamed export 'v6' to 'isInGridColumn'
// - Renamed export 'wf' to 'isWithinBounds'
// - Renamed export 'wj' to 'isInTableCell'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 675608
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  require("docx-block-utils_1") /*id: 138224*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docCommentUtils = require("doc-comment-utils") /*id: 315488*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  require("grid-column-layout-utils") /*id: 139275*/;
  require("docx-synced-block-utils") /*id: 791402*/;
  require("synced-block-feature-flags") /*id: 711756*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var lazyConsumerToken = require("lazy-consumer-token") /*id: 103465*/;
  var docxToolboxConstants_3 = require("docx-toolbox-constants_3") /*id: 42034*/;
  var moduleSettingToken = require("module-setting-token") /*id: 907937*/;
  var syncedTranslationBlockUtils = require("synced-translation-block-utils") /*id: 956836*/;
  var docxToolboxConstants = require("docx-toolbox-constants") /*id: 507565*/;
  let p = async (e, n) => {
    let r = n.getBlockModelByBlockId(e.id);
    let o = [];
    for (let e of r.children) {
      for (let r of e.children) {
        await n.layoutManager.renderNodeById(r.id);
        o.push(n.getBlockViewByBlockId(r.id));
      }
    }
    return o;
  };
  let g = async (e, n, r, o, i) => {
    let l = [];
    let c = Array.isArray(e) ? e : [e];
    c.forEach(e => {
      let {
        snapshot: {
          folded: n,
          type: o
        }
      } = e.record;
      if ((r.isFolded(e.id) || n) && o.includes("heading")) {
        l = l.concat(r.findFoldedBlocks(e.id));
      }
    });
    if (l.length < 1) {
      if (o != null) {
        o(c);
      }
      return;
    }
    let s = [];
    for (let e of l) {
      if (i) {
        let r = n.editorAPI.getService(lazyConsumerToken.lazyConsumerToken);
        let o = n.getRecordByBlockId(e);
        if (o) {
          r.setStartId(o.id, true);
        }
      }
      if (!n.hasBlockViewByBlockId(e)) {
        await n.layoutManager.renderNodeById(e);
      }
      let r = n.getBlockViewByBlockId(e);
      if (r && r.type === docBlockTypeConstants.blockTypeConstants.GRID) {
        s.push(p(r, n));
      } else {
        s.push(Promise.resolve([r]));
      }
    }
    let d = await Promise.all(s);
    if (o != null) {
      o(d.reduce((e, n) => {
        e.push(...n);
        return e;
      }, c));
    }
  };
  function m(e, n) {
    if (e && e.parentId) {
      return [docCommentUtils.checkBlockHierarchy(e, n, true), docCommentUtils.checkBlockHierarchy(e, n, false)];
    } else {
      return [false, false];
    }
  }
  function v(e, n) {
    if (!e || !e.props.cellInfo) {
      return false;
    }
    let {
      cellId: r
    } = e.props.cellInfo;
    if (!r) {
      return false;
    }
    let o = e.props.parentId;
    if (!o) {
      return false;
    }
    let i = n.getRecordByBlockId(o);
    if (!i) {
      return false;
    }
    let l = i.snapshot.columns_id;
    let [, a] = docxTableLayoutUtils.splitCellId(r);
    return a === l[0];
  }
  function b(e, n) {
    if (!e || !e.parentId) {
      return false;
    }
    let r = function (e, n) {
      let r = n.getBlockModelByBlockIdNotCheck(e);
      if (!r) {
        return null;
      }
      let o = _(r);
      if ((o == null ? undefined : o.type) === docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER) {
        o = o.parent;
      }
      return o;
    }(e.id, n);
    return !!r && r.type === docBlockTypeConstants.blockTypeConstants.CELL && v(n.getBlockViewByBlockId(r.id), n);
  }
  function y(e, n) {
    if (!e || !e.parentId) {
      return docxToolboxConstants.gridColumnClasses.None;
    }
    let {
      parentId: r
    } = e;
    let o = n.getBlockModelByBlockId(r);
    if (o.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
      let e = n.getBlockModelByBlockId(r).parent;
      let i = n.getBlockViewByBlockId(e.id);
      let l = e.parent.id;
      let a = v(n.getBlockViewByBlockId(l), n);
      let c = i.hostElement.querySelectorAll(".grid-vertical").length;
      let u = o.id;
      let s = e.children[0].id;
      if (!c && u !== s) {
        return docxToolboxConstants.gridColumnClasses.NormalGridColumn;
      }
      if (a) {
        return docxToolboxConstants.gridColumnClasses.FirstGridColumn;
      }
    }
    return docxToolboxConstants.gridColumnClasses.None;
  }
  function _(e) {
    let {
      parent: n
    } = e;
    if ((n == null ? undefined : n.type) === docBlockTypeConstants.blockTypeConstants.VIEW) {
      return n.parent;
    } else {
      return n;
    }
  }
  function E(e) {
    if (!e || !e.model.parent) {
      return false;
    }
    let n = _(e.model);
    return (n == null ? undefined : n.type) === docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER;
  }
  function C(e) {
    if (!e || !e.model.parent) {
      return false;
    }
    let n = _(e.model);
    if (n && n.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
      let e = n.parent;
      if (e.children[0].id === n.id && e.parent?.type === docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER) {
        return true;
      }
    }
    return false;
  }
  function k(e) {
    let {
      block: n,
      parent: r,
      blockManager: o
    } = e;
    if (!r || !n) {
      return false;
    }
    let i = o.getBlockModelByBlockIdNotCheck(n.id);
    while (i) {
      if (i.id === r.id) {
        return true;
      }
      i = i.parent;
    }
    return false;
  }
  function w(e) {
    let {
      block: n,
      specialBlock: r
    } = e;
    return !!r && !!n && !!syncedTranslationBlockUtils.hasModelTranslate(r) && n.type === docBlockTypeConstants.blockTypeConstants.CALLOUT;
  }
  function I(e, n) {
    let {
      orgX: r,
      orgY: o,
      dirX: i,
      dirY: l
    } = e;
    let {
      minX: a,
      minY: c,
      maxX: u,
      maxY: s
    } = n;
    return (i === 0 || i > 0 && r + i <= u || i < 0 && r + i >= a) && (l === 0 || l > 0 && o + l <= s || l < 0 && o + l >= c);
  }
  function S() {
    return (platformDocUtils.SHQ() || platformDocUtils.WZW()) && docxFeatureFlags.isWikiV3Enabled();
  }
  function T() {
    return {
      isMatch: false,
      matchCondition: () => false,
      CustomBlockIconContent: () => null,
      isDisplayBlockPanel: e => e
    };
  }
  function B(e) {
    let {
      block: n,
      blockManager: r
    } = e;
    let o = r.editorAPI.getService(moduleSettingToken.moduleSettingToken, {
      optional: true
    });
    if (!o) {
      return T();
    }
    let i = (o.get(docxToolboxConstants_3.toolboxCommands.TOOL_BOX_BLOCK_ICON_CONTENT_SETTING) || []).find(e => n && e.matchCondition(n));
    if (i) {
      return {
        ...i,
        isMatch: true
      };
    } else {
      return T();
    }
  }
  require.d(exports, {
    isInQuoteContainer: function () {
      return E;
    },
    expandFoldedBlocks: function () {
      return g;
    },
    checkBlockHierarchy: function () {
      return m;
    },
    isBlockAncestor: function () {
      return k;
    },
    isWikiV3Enabled: function () {
      return S;
    },
    getToolboxBlockIcon: function () {
      return B;
    },
    getGridColumnClass: function () {
      return y;
    },
    isTranslatableCallout: function () {
      return w;
    },
    isInGridColumn: function () {
      return C;
    },
    isWithinBounds: function () {
      return I;
    },
    isInTableCell: function () {
      return b;
    }
  });
}