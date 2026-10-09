// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B1' to 'isNormalMenuItem'
// - Renamed export 'EJ' to 'hasAction'
// - Renamed export 'Im' to 'createClassChecker'
// - Renamed export 'N$' to 'scrollIntoView'
// - Renamed export 'P4' to 'findClosestParent'
// - Renamed export 'PU' to 'hasBlockType'
// - Renamed export 'U_' to 'isSubmenuItem'
// - Renamed export 'WV' to 'getPositionOffset'
// - Renamed export 'ZB' to 'getSelectableIdx'
// - Renamed export 'dX' to 'isClickOutside'
// - Renamed export 'rc' to 'findNextSelectable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89647.6be961c3.js
         * chunkId: 89647
         * moduleId: 154715
         */
module.exports = function (module, exports, require) {
  var uiLayoutPositionEnums = require("ui-layout-position-enums") /*id: 463752*/;
  var docxAiMenuConstants = require("docx-ai-menu-constants") /*id: 255694*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  function a() {
    var e = arguments.length;
    var n = Array(e);
    var i = 0;
    for (; i < e; i++) {
      n[i] = arguments[i];
    }
    return function (e) {
      return e instanceof HTMLElement && n.some(n => e.classList.contains(n));
    };
  }
  function s(e, n) {
    let i = e;
    while (i) {
      if (n(i)) {
        return i;
      }
      i = i.parentElement;
    }
    return null;
  }
  function c(e, n = 8) {
    let i = e.closest(".docx-menu-wrapper");
    if (i) {
      if (i.scrollTop > e.offsetTop - n) {
        i.scrollTo(0, Math.max(e.offsetTop - n, 0));
      } else if (i.scrollTop + i.offsetHeight < e.offsetTop + e.offsetHeight + n) {
        i.scrollTo(0, e.offsetTop + e.offsetHeight + n - i.offsetHeight);
      }
    }
  }
  function u(e) {
    return e.reduce((e, n, i) => {
      if (n.canSelected !== false) {
        e.push(i);
      }
      return e;
    }, []);
  }
  function m(e) {
    switch (e) {
      case uiLayoutPositionEnums.positionAlignTypes.BottomLeft:
      case uiLayoutPositionEnums.positionAlignTypes.TopLeft:
        return [-9, 12];
      case uiLayoutPositionEnums.positionAlignTypes.BottomCenter:
      case uiLayoutPositionEnums.positionAlignTypes.TopCenter:
        return [0, 12];
      case uiLayoutPositionEnums.positionAlignTypes.BottomRight:
      case uiLayoutPositionEnums.positionAlignTypes.TopRight:
        return [1, 12];
      case uiLayoutPositionEnums.positionAlignTypes.RightCenter:
      case uiLayoutPositionEnums.positionAlignTypes.LeftCenter:
        return docxAiMenuConstants.offsetArray;
      default:
        return [0, 0];
    }
  }
  function d(e) {
    return !!(e == null ? undefined : e.action);
  }
  function h(e) {
    return !!(e == null ? undefined : e.blockType);
  }
  function v(e) {
    return e.type === editorConstantsEnums.MenuItemTypes.MenuItemNormal;
  }
  function f(e) {
    return [editorConstantsEnums.MenuItemTypes.SubmenuItemWithComponent, editorConstantsEnums.MenuItemTypes.SubmenuItemWithChildren].includes(e.type);
  }
  function p(e, n) {
    var i;
    var r;
    let l = e.target.closest(`.${docxAiMenuConstants.arrowIconClass}`);
    if (l) {
      return !((r = n.current) === null || r === undefined ? undefined : r.contains(l));
    } else if ((i = n.current) === null || i === undefined) {
      return undefined;
    } else {
      return i.contains(e.target);
    }
  }
  require.d(exports, {
    isNormalMenuItem: function () {
      return v;
    },
    hasAction: function () {
      return d;
    },
    createClassChecker: function () {
      return a;
    },
    scrollIntoView: function () {
      return c;
    },
    findClosestParent: function () {
      return s;
    },
    hasBlockType: function () {
      return h;
    },
    isSubmenuItem: function () {
      return f;
    },
    getPositionOffset: function () {
      return m;
    },
    getSelectableIdx: function () {
      return u;
    },
    isClickOutside: function () {
      return p;
    },
    findNextSelectable: function () {
      return function e(n, i, r) {
        let o = r === "prev" ? -1 : 1;
        let l = n.length;
        let a = i + o;
        if (a >= l) {
          let e = n.findIndex(e => e.canSelected !== false && e.disabled !== true);
          if (e === -1) {
            return -1;
          }
          a = e;
        } else if (a < 0) {
          let e = [...n].reverse().findIndex(e => e.canSelected !== false && e.disabled !== true);
          if (e === -1) {
            return -1;
          }
          a = l - e - 1;
        }
        if (a >= 0 && a < l && (n[a].canSelected === false || n[a].disabled === true)) {
          return e(n, a, r);
        } else {
          return a;
        }
      };
    }
  });
}