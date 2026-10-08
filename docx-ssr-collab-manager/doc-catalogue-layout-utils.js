// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'cs' to 'getLayoutModeConfig'
// - Renamed export 'nO' to 'isCatalogueConfig0'
// - Renamed export 'tT' to 'getAbstractBase'
// - Renamed export 'ud' to 'isCatalogueSimple'
// - Renamed export 'uv' to 'getBlockTypeByIndex'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 631241
         */
module.exports = function (module, exports, require) {
  var layoutModeConstants = require("layout-mode-constants") /*id: 498636*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docCatalogueConstants = require("doc-catalogue-constants") /*id: 512439*/;
  function a(e) {
    return e.length > 0 && e[0].sourceLevel === docCatalogueConstants.catalogueConfig0;
  }
  function l(e) {
    let i = e.length;
    let r = i === 1 && a(e);
    return i === 0 || r;
  }
  function c(e, i) {
    let {
      isBoundaryIntersection: r
    } = e;
    let {
      isHovered: n
    } = i;
    let {
      baseForceAbstract: o,
      baseIsAbstract: a
    } = h(e, i);
    let l = o || r;
    let c = layoutModeConstants.LayoutModeTypes.FULL_NORMAL;
    if (a || l) {
      c = n ? layoutModeConstants.LayoutModeTypes.FULL_FLOATING : layoutModeConstants.LayoutModeTypes.ABSTRACT;
    }
    let d = c !== layoutModeConstants.LayoutModeTypes.ABSTRACT;
    let u = c === layoutModeConstants.LayoutModeTypes.FULL_FLOATING;
    return {
      baseForceAbstract: o,
      baseIsAbstract: a,
      showMode: c,
      canShowPin: !l,
      isShowFull: d,
      floating: u
    };
  }
  function h(e, i) {
    let {
      isForceShowAbstract: r
    } = e;
    let {
      isPinned: s,
      isReady: n,
      catalogueItems: o
    } = i;
    let a = n && l(o);
    let c = r || a;
    return {
      baseForceAbstract: c,
      baseIsAbstract: c || !s
    };
  }
  function d(e) {
    if (e === 0) {
      return docBlockTypeConstants.blockTypeConstants.PAGE;
    } else {
      return docBlockTypeConstants.headingTypeArray[e - 1];
    }
  }
  require.d(exports, {
    getLayoutModeConfig: function () {
      return c;
    },
    isCatalogueConfig0: function () {
      return a;
    },
    getAbstractBase: function () {
      return h;
    },
    isCatalogueSimple: function () {
      return l;
    },
    getBlockTypeByIndex: function () {
      return d;
    }
  });
}