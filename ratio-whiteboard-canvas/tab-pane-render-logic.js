// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'TabPane'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47996.8a642cb0.js
         * chunkId: 47996
         * moduleId: 764827
         */
module.exports = function (module, exports, require) {
  var o;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var tabsContextProvider = require("tabs-context-provider") /*id: 728667*/;
  (o = {}).discard = "discard";
  o.active = "active";
  o.cache = "cache";
  var u = o;
  require("empty-module-shim_1") /*id: 636500*/;
  function s(e) {
    var t = e.style;
    var n = e.className;
    var o = e.children;
    var s = e.internalKey;
    var l = e.forceRender;
    var d = e.destroyOnHide;
    var _ = tabsContextProvider.useTabsContext();
    var f = _.activeKey;
    var p = _.rootCssScope;
    var m = function (e) {
      var t = e.forceRender;
      var n = e.destroyOnHide;
      var o = e.active;
      var r = reactCoreLibraryReexport.useRef(u.discard);
      var a = u.discard;
      if (o !== undefined && o) {
        a = u.active;
      } else if (n) {
        a = u.discard;
      } else if (t) {
        a = u.cache;
      } else {
        switch (r.current) {
          case u.active:
            a = u.cache;
            break;
          case u.cache:
          case u.discard:
            a = r.current;
            break;
          default:
            throw Error("[UD useRenderStatus]: unrecognized render status type");
        }
      }
      reactCoreLibraryReexport.useEffect(function () {
        r.current = a;
      }, [a]);
      return a;
    }({
      active: f === s,
      forceRender: l !== undefined && l,
      destroyOnHide: d !== undefined && d
    });
    if (m === u.discard) {
      return null;
    }
    var C = conditionalClassnames.default(p("__pane"), objectPropertySetter.setObjectProperty({}, p("__pane--inactive"), m === u.cache), n);
    return reactCoreLibraryReexport.createElement("div", {
      style: t,
      className: C
    }, o);
  }
  Object.assign(s, objectPropertySetter.setObjectProperty({}, tabsContextProvider.tabPaneIdKey, true));
  require.d(exports, {
    TabPane: function () {
      return s;
    }
  });
}