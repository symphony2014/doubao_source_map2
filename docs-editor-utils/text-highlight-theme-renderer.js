// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'TextHighlightRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 853585
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var fontColorRenderer = require("font-color-renderer") /*id: 797745*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var themeColorManagerFacade = require("theme-color-manager-facade") /*id: 552375*/;
  var uiThemeColorResolver = require("ui-theme-color-resolver") /*id: 410762*/;
  var uiThemeColorDefinitions = require("ui-theme-color-definitions") /*id: 434278*/;
  var uiThemeConstants = require("ui-theme-constants") /*id: 541237*/;
  let _ = {
    [`${themeColorManagerFacade.getLightThemeMap(uiThemeConstants.basicTheme.Text).get(uiThemeColorDefinitions.colorConstants.COLOR_PINK_TEXT)}`]: "ccmtoken-doc-textcolor-red",
    [`${themeColorManagerFacade.getLightThemeMap(uiThemeConstants.basicTheme.Text).get(uiThemeColorDefinitions.colorConstants.COLOR_ORANGE_TEXT)}`]: "ccmtoken-doc-textcolor-orange",
    [`${themeColorManagerFacade.getLightThemeMap(uiThemeConstants.basicTheme.Text).get(uiThemeColorDefinitions.colorConstants.COLOR_YELLOW_TEXT)}`]: "ccmtoken-doc-textcolor-yellow",
    [`${themeColorManagerFacade.getLightThemeMap(uiThemeConstants.basicTheme.Text).get(uiThemeColorDefinitions.colorConstants.COLOR_GREEN_TEXT)}`]: "ccmtoken-doc-textcolor-green",
    [`${themeColorManagerFacade.getLightThemeMap(uiThemeConstants.basicTheme.Text).get(uiThemeColorDefinitions.colorConstants.COLOR_BLUE_TEXT)}`]: "ccmtoken-doc-textcolor-blue",
    [`${themeColorManagerFacade.getLightThemeMap(uiThemeConstants.basicTheme.Text).get(uiThemeColorDefinitions.colorConstants.COLOR_PURPLE_TEXT)}`]: "ccmtoken-doc-textcolor-purple",
    [`${themeColorManagerFacade.getLightThemeMap(uiThemeConstants.basicTheme.Text).get(uiThemeColorDefinitions.colorConstants.COLOR_GRAY_TEXT)}`]: "ccmtoken-doc-textcolor-gray"
  };
  class p extends fontColorRenderer.FontColorRenderer {
    render(e) {
      let {
        children: n
      } = e;
      let {
        attributes: r
      } = e;
      let o = r[p.KEY];
      let i = _[o];
      let l = uiThemeColorResolver.getThemeClassConfig(uiThemeConstants.basicTheme.Text, o);
      let c = "textHighlight";
      if (l) {
        c = `${c} textHighlight-${l}`;
      }
      if (i) {
        c = `${c} textHighlight-${i}`;
      }
      e.class = a(e.class, c);
      return n;
    }
    constructor(e) {
      super({
        ...e,
        customizedAttributeKey: p.KEY
      });
    }
  }
  l = "textHighlight";
  if ((i = typeof (o = function (e, n) {
    if (typeof e != "object" || !e) {
      return e;
    }
    var r = e[Symbol.toPrimitive];
    if (r !== undefined) {
      var o = r.call(e, n || "default");
      if (typeof o != "object") {
        return o;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (n === "string" ? String : Number)(e);
  }(i = "KEY", "string")) == "symbol" ? o : o + "") in p) {
    Object.defineProperty(p, i, {
      value: l,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    p[i] = l;
  }
  require.d(exports, {
    TextHighlightRenderer: function () {
      return p;
    }
  });
}