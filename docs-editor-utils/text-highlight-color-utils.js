// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B6' to 'resolveThemeColor'
// - Renamed export 'Fs' to 'collectHighlightColorsFromEntities'
// - Renamed export 'gN' to 'getDefaultHighlightBgColor'
// - Renamed export 'kp' to 'getHighlightColorFromStorage'
// - Renamed export 'pf' to 'getHighlightColorFromSelection'
// - Renamed export 'ug' to 'getHighlightColorFromText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 229338
         */
module.exports = function (module, exports, require) {
  var themeColorManagerFacade = require("theme-color-manager-facade") /*id: 552375*/;
  var uiThemeColorDefinitions = require("ui-theme-color-definitions") /*id: 434278*/;
  var uiThemeConstants = require("ui-theme-constants") /*id: 541237*/;
  var themeColorUtils = require("theme-color-utils") /*id: 191810*/;
  var editorFormatRevisionUtils = require("editor-format-revision-utils") /*id: 63043*/;
  var textHighlightColors = require("text-highlight-colors") /*id: 514350*/;
  let s = () => themeColorManagerFacade.getLightThemeMap(uiThemeConstants.basicTheme.Background).get(uiThemeColorDefinitions.colorConstants.COLOR_YELLOW_LIGHT_BACKGROUND) || "rgba(255, 246, 122, 0.8)";
  function d(e) {
    let n = {
      [textHighlightColors.highlightColors.COLOR]: "",
      [textHighlightColors.highlightColors.BACKGROUND_COLOR]: s()
    };
    if (e) {
      let r = _(e);
      if (Object.values(r).some(e => !!e)) {
        n = r;
      }
    }
    return n;
  }
  function f(e) {
    let n = e.filter(e => !e.model.isEmpty);
    let r = {
      [textHighlightColors.highlightColors.COLOR]: "",
      [textHighlightColors.highlightColors.BACKGROUND_COLOR]: ""
    };
    if (!n.length || !n[0]) {
      return r;
    }
    let o = editorFormatRevisionUtils.getTextEditorSelection(n[0]);
    let i = n[0].model.getAttributes(o.start, o.end).toMap();
    let l = i[textHighlightColors.textHighlight];
    let c = i[textHighlightColors.textHighlightBg];
    if (l) {
      r[textHighlightColors.highlightColors.COLOR] = l;
    }
    if (c) {
      r[textHighlightColors.highlightColors.BACKGROUND_COLOR] = c;
    }
    return r;
  }
  function h(e) {
    let n = e.filter(e => !e.model.isEmpty);
    let r = {
      [textHighlightColors.highlightColors.COLOR]: new Set([]),
      [textHighlightColors.highlightColors.BACKGROUND_COLOR]: new Set([])
    };
    if (!n.length || !n[0]) {
      return r;
    }
    let o = editorFormatRevisionUtils.getTextEditorSelection(n[0]);
    n[0].model.zoneState.getEntities(o).forEach(e => {
      let n = e.attributes[textHighlightColors.textHighlight];
      let o = e.attributes[textHighlightColors.textHighlightBg];
      if (n) {
        r[textHighlightColors.highlightColors.COLOR].add(n);
      }
      if (o) {
        r[textHighlightColors.highlightColors.BACKGROUND_COLOR].add(o);
      }
    });
    return r;
  }
  function _(e) {
    var n;
    let r = (n = window.localStorage.getItem(`${e}_TEXTHIGHLIGHT_COLOR`)) ? n.startsWith("{") ? JSON.parse(n) : {
      [textHighlightColors.highlightColors.COLOR]: n,
      [textHighlightColors.highlightColors.BACKGROUND_COLOR]: ""
    } : {
      [textHighlightColors.highlightColors.COLOR]: "",
      [textHighlightColors.highlightColors.BACKGROUND_COLOR]: ""
    };
    if ((r == null ? undefined : r.backgroundColor) === "var(--ccmtoken-doc-highlightcolor-sunflower-soft)") {
      r.backgroundColor = s();
    }
    return r;
  }
  function p(e, n) {
    if (!n) {
      return n;
    }
    let r = themeColorManagerFacade.getLightThemeMap(e);
    let i = themeColorUtils.findThemeKey(r, n);
    return i && themeColorManagerFacade.getThemeToken(e).get(i) || n;
  }
  require.d(exports, {
    resolveThemeColor: function () {
      return p;
    },
    collectHighlightColorsFromEntities: function () {
      return h;
    },
    getDefaultHighlightBgColor: function () {
      return s;
    },
    getHighlightColorFromStorage: function () {
      return _;
    },
    getHighlightColorFromSelection: function () {
      return d;
    },
    getHighlightColorFromText: function () {
      return f;
    }
  });
}