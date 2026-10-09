// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'reactDomAttributeProps'
// - Resolved require(695247) to 'react-dom-attribute-props'
// - Renamed variable 'o' to 'reactHtmlAttributeUtils'
// - Resolved require(210414) to 'react-html-attribute-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 287828
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomAttributeProps = require("react-dom-attribute-props") /*id: 695247*/;
  var reactHtmlAttributeUtils = require("react-html-attribute-utils") /*id: 210414*/;
  var a = reactHtmlAttributeUtils.setStyleProp;
  var l = reactHtmlAttributeUtils.canTextBeChildOfNode;
  module.exports = function e(t, n) {
    var s;
    var c;
    var u;
    var p;
    var h;
    var d;
    var A = (n = n || {}).library || reactCoreLibraryReexport;
    var f = A.cloneElement;
    var g = A.createElement;
    var m = A.isValidElement;
    var y = [];
    var b = typeof n.replace == "function";
    var x = n.trim;
    var k = 0;
    var w = t.length;
    for (; k < w; k++) {
      c = t[k];
      if (b && m(p = n.replace(c))) {
        if (w > 1) {
          p = f(p, {
            key: p.key || k
          });
        }
        y.push(p);
        continue;
      }
      if (c.type === "text") {
        if ((u = !c.data.trim().length) && c.parent && !l(c.parent) || x && u) {
          continue;
        }
        y.push(c.data);
        continue;
      }
      h = c.attribs;
      s = c;
      if (reactHtmlAttributeUtils.PRESERVE_CUSTOM_ATTRIBUTES && s.type === "tag" && reactHtmlAttributeUtils.isCustomComponent(s.name, s.attribs)) {
        a(h.style, h);
      } else {
        h &&= reactDomAttributeProps(h, c.name);
      }
      d = null;
      switch (c.type) {
        case "script":
        case "style":
          if (c.children[0]) {
            h.dangerouslySetInnerHTML = {
              __html: c.children[0].data
            };
          }
          break;
        case "tag":
          if (c.name === "textarea" && c.children[0]) {
            h.defaultValue = c.children[0].data;
          } else if (c.children && c.children.length) {
            d = e(c.children, n);
          }
          break;
        default:
          continue;
      }
      if (w > 1) {
        h.key = k;
      }
      y.push(g(c.name, h, d));
    }
    if (y.length === 1) {
      return y[0];
    } else {
      return y;
    }
  };
}