// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$5' to 'validateCalloutList'
// - Renamed export 'C0' to 'isEmojiSupported'
// - Renamed export 'Eu' to 'isCalloutContext'
// - Renamed export 'S7' to 'genCalloutColors'
// - Renamed export 'YQ' to 'getCalloutBorder'
// - Renamed export 'Yu' to 'validateInsertion'
// - Renamed export 'cG' to 'filterEmojiBlocks'
// - Renamed export 'l$' to 'getDefaultColors'
// - Renamed export 'nP' to 'findCalloutParent'
// - Renamed export 'qE' to 'saveCalloutConfig'
// - Renamed export 'tw' to 'iterateChildren'
// - Renamed export 'tz' to 'hasBadDescendants'
// - Renamed export 'v1' to 'getThemeColorCss'
// - Renamed export 'vO' to 'hasDarkBgClass'
// - Renamed export 'y1' to 'insertCalloutText'
// - Renamed export 'yu' to 'hasSpecialParent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 662420
         */
module.exports = function (module, exports, require) {
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var i = debugBrowserConfig;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var colorRgbUtils = require("color-rgb-utils") /*id: 194090*/;
  var docBlockTreeUtils = require("doc-block-tree-utils") /*id: 772264*/;
  var themeColorManagerFacade = require("theme-color-manager-facade") /*id: 552375*/;
  var docCalloutColorThemes = require("doc-callout-color-themes") /*id: 309297*/;
  var themeColorUtils = require("theme-color-utils") /*id: 191810*/;
  var localStorageUtils = require("local-storage-utils") /*id: 378345*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockEmojiConstants = require("doc-block-emoji-constants") /*id: 664589*/;
  var calloutEmojiUtils = require("callout-emoji-utils") /*id: 247313*/;
  let b = i("getStruct");
  function v(e) {
    let {
      textColor: n,
      borderColor: r
    } = e;
    let o = [...themeColorManagerFacade.getThemeRgbMap(docCalloutColorThemes.colorTypeKeys.Border).light];
    let i = [...function () {
      let e = themeColorManagerFacade.getThemeRgbMap(docCalloutColorThemes.colorTypeKeys.BackgroundColor);
      let n = new Map();
      for (let [r, o] of e) {
        if (typeof docCalloutColorThemes.lightHighlightClasses[r] == "string") {
          n.set(r, o);
        }
      }
      return n;
    }()];
    if (r) {
      let e = function (e, n) {
        for (let [r, o] of e) {
          colorRgbUtils.compareColors(n, o);
        }
        return -1;
      }(o, r);
      if (e >= 0) {
        o.splice(e, 1);
        i.splice(e, 1);
      }
    }
    let l = Math.floor(Math.random() * o.length);
    return {
      background_color: i[l][1],
      border_color: o[l][1],
      text_color: n
    };
  }
  function T(e) {
    let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    let r = themeColorManagerFacade.getThemeRgbMap(docCalloutColorThemes.colorTypeKeys.Border);
    let o = n ? r.light : r.dark;
    let i = themeColorUtils.findThemeKey(o, e);
    if (i) {
      return (n ? r.dark : r.light).get(i);
    }
  }
  function C(e) {
    let n = themeColorManagerFacade.getThemeRgbMap(docCalloutColorThemes.colorTypeKeys.BackgroundColor);
    let r = themeColorUtils.findThemeKey(n, e);
    return !!r && !!docCalloutColorThemes.darkBgClasses[r];
  }
  function k(e, n) {
    switch (e) {
      case docCalloutColorThemes.colorTypeKeys.TextColor:
        {
          let r = themeColorManagerFacade.getThemeRgbMap(e);
          let o = themeColorUtils.findThemeKey(r, n);
          let i = o && themeColorManagerFacade.getThemeClassMap(e).get(o);
          return themeColorUtils.getCssRgba(i) || n;
        }
      case docCalloutColorThemes.colorTypeKeys.BackgroundColor:
        {
          let r = themeColorManagerFacade.getThemeRgbMap(e);
          let o = themeColorUtils.findThemeKey(r, n);
          if (!o && colorRgbUtils.compareColors(docCalloutColorThemes.defaultBgColor, n)) {
            o = docCalloutColorThemes.colorOptions.DarkGray;
          }
          let i = o && themeColorManagerFacade.getThemeClassMap(e).get(o);
          return themeColorUtils.getCssRgba(i) || n;
        }
      case docCalloutColorThemes.colorTypeKeys.Border:
        {
          let r;
          let o = themeColorManagerFacade.getThemeRgbMap(e);
          let i = themeColorUtils.findThemeKey(o.light, n);
          if (i) {
            r = themeColorManagerFacade.getThemeClassMap(e).light.get(i);
          } else {
            let i = themeColorUtils.findThemeKey(o.dark, n);
            r = i && themeColorManagerFacade.getThemeClassMap(e).dark.get(i);
          }
          return themeColorUtils.getCssRgba(r) || n;
        }
    }
    return n;
  }
  function I(e) {
    let n = calloutEmojiUtils.getCalloutSettings();
    ["background_color", "border_color"].forEach(r => {
      if (r in e) {
        n.attrs[r] = e[r];
      }
    });
    if (e.emoji_id) {
      n.attrs.emoji_id = e.emoji_id;
      n.recentEmojis = [e.emoji_id, ...n.recentEmojis].filter((n, r) => n !== e.emoji_id || r === 0).slice(0, docBlockEmojiConstants.emojiLimit);
    }
    localStorageUtils.setStorageItem(localStorageUtils.StorageKeys.CalloutSetting, JSON.stringify(n));
  }
  async function R(e, n) {
    let r = "";
    await n.applyTransaction("insertCalloutChildren", o => {
      [r] = documentBlockOperations.insertNewChildren(o, e, 0, [n.createSnapshot(docBlockTypeConstants.blockTypeConstants.TEXT)]);
    });
    let o = n.getBlockViewByBlockIdNotCheck(n.getBlockIdsByRecordId(r)[0]);
    if (editorTextBlockUtilities.isTextEditable(o)) {
      o.focus();
    }
    return r;
  }
  function y(e, n, r, o) {
    if (S(e, r)) {
      n = n.filter(e => {
        let n = function e(n, r, o) {
          if (o && o[n]) {
            let i = o[n];
            if (!docBlockEmojiConstants.supportedBlockTypes[i.type]) {
              return false;
            }
            let l = true;
            let {
              children: c
            } = i;
            if (c) {
              c.forEach(n => {
                l &&= e(r.getBlockIdsByRecordId(n)[0], r, o);
              });
            }
            return l;
          }
          try {
            let i = r.getBlockModelByBlockId(n);
            let l = i.record.snapshot.type;
            if (!docBlockEmojiConstants.supportedBlockTypes[l]) {
              return false;
            }
            let c = true;
            i.children.forEach(n => {
              c &&= e(n.id, r, o);
            });
            return c;
          } catch (e) {
            b("struct not found");
            return false;
          }
        }(e, r, o);
        if (!n && o) {
          delete o[e];
        }
        return n;
      });
    }
    return n;
  }
  let O = (e, n, r) => {
    let {
      children: o
    } = n.getBlockModelByBlockId(e.id);
    if (o.length) {
      Array.from(o).forEach(e => {
        let o = n.getBlockViewByBlockId(e.id);
        if (r && editorTextBlockUtilities.isEditorInstance(o)) {
          r(o);
        }
        O(o, n, r);
      });
    }
  };
  function S(e, n) {
    try {
      let r = n.getBlockModelByBlockIdNotCheck(e);
      return !!r && (D(r) || docBlockTreeUtils.hasParentOfType(r, [docBlockTypeConstants.blockTypeConstants.CALLOUT]));
    } catch (e) {
      b("struct not found");
    }
    return false;
  }
  function A(e, n) {
    try {
      let r = n.getBlockModelByBlockId(e);
      if (D(r)) {
        return r;
      } else {
        return docBlockTreeUtils.findParentByType(r, [docBlockTypeConstants.blockTypeConstants.CALLOUT]);
      }
    } catch (e) {
      b("struct not found");
    }
    return null;
  }
  function L(e) {
    let n = false;
    let r = e.every(e => D(e) ? (n = true, true) : !B(e) || N(e));
    return n && r;
  }
  function N(e) {
    return !!e.struct.findDescendant(e => !docBlockEmojiConstants.supportedBlockTypes[e.type]);
  }
  function B(e) {
    return docBlockEmojiConstants.supportedBlockTypes[e.type];
  }
  function D(e) {
    return e.type === docBlockTypeConstants.blockTypeConstants.CALLOUT;
  }
  function w(e) {
    let n = [docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.PROGRESS];
    return docBlockTreeUtils.hasParentOfType(e, browserEnvironmentDetectionUtils.browserDetector.isMobile ? n : [docBlockTypeConstants.blockTypeConstants.CALLOUT, ...n]);
  }
  function M(e) {
    return e.length !== 0 && !w(arrayFirstElement.getFirstElement(e)) && function (e) {
      let n = new Set();
      let r = false;
      return e.every(e => D(e) ? (r = true, true) : !B(e) || (n.add(e.id), !!e.parent && !!n.has(e.parent.id) || !N(e))) && (n.size > 0 || r);
    }(e);
  }
  require.d(exports, {
    validateCalloutList: function () {
      return L;
    },
    isEmojiSupported: function () {
      return B;
    },
    isCalloutContext: function () {
      return S;
    },
    genCalloutColors: function () {
      return v;
    },
    getCalloutBorder: function () {
      return T;
    },
    validateInsertion: function () {
      return M;
    },
    filterEmojiBlocks: function () {
      return y;
    },
    getDefaultColors: function () {
      return calloutEmojiUtils.getDefaultCalloutColors;
    },
    findCalloutParent: function () {
      return A;
    },
    saveCalloutConfig: function () {
      return I;
    },
    iterateChildren: function () {
      return O;
    },
    hasBadDescendants: function () {
      return N;
    },
    getThemeColorCss: function () {
      return k;
    },
    hasDarkBgClass: function () {
      return C;
    },
    insertCalloutText: function () {
      return R;
    },
    hasSpecialParent: function () {
      return w;
    }
  });
}