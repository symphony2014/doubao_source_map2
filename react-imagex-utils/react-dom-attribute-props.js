// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'domPropertyInfoConfig'
// - Resolved require(357408) to 'dom-property-info-config'
// - Renamed variable 'i' to 'reactHtmlAttributeUtils'
// - Resolved require(210414) to 'react-html-attribute-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 695247
         */
module.exports = function (module, exports, require) {
  var domPropertyInfoConfig = require("dom-property-info-config") /*id: 357408*/;
  var reactHtmlAttributeUtils = require("react-html-attribute-utils") /*id: 210414*/;
  var o = ["checked", "value"];
  var a = ["input", "select", "textarea"];
  var l = {
    reset: true,
    submit: true
  };
  function s(e) {
    return domPropertyInfoConfig.possibleStandardNames[e];
  }
  module.exports = function (e, t) {
    var n;
    var c;
    var u;
    var p;
    var h;
    var d = {};
    var A = (e = e || {}).type && l[e.type];
    for (n in e) {
      u = e[n];
      if (domPropertyInfoConfig.isCustomAttribute(n)) {
        d[n] = u;
        continue;
      }
      if (p = s(c = n.toLowerCase())) {
        h = domPropertyInfoConfig.getPropertyInfo(p);
        if (o.indexOf(p) !== -1 && a.indexOf(t) !== -1 && !A) {
          p = s("default" + c);
        }
        d[p] = u;
        switch (h && h.type) {
          case domPropertyInfoConfig.BOOLEAN:
            d[p] = true;
            break;
          case domPropertyInfoConfig.OVERLOADED_BOOLEAN:
            if (u === "") {
              d[p] = true;
            }
        }
        continue;
      }
      if (reactHtmlAttributeUtils.PRESERVE_CUSTOM_ATTRIBUTES) {
        d[n] = u;
      }
    }
    reactHtmlAttributeUtils.setStyleProp(e.style, d);
    return d;
  };
}