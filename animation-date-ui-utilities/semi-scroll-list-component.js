// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ScrollList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 821094
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var semiScrolllistConstants = require("semi-scrolllist-constants") /*id: 676322*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var u = propTypesFactoryWrapper;
  var semiScrollList = require("semi-scroll-list") /*id: 777395*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  class h extends componentAdapterBaseClass.BaseAdapterClass {}
  function f(e, t) {
    var n = {};
    for (var a in e) {
      if (Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0) {
        n[a] = e[a];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var a = Object.getOwnPropertySymbols(e);
      for (; r < a.length; r++) {
        if (t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r])) {
          n[a[r]] = e[a[r]];
        }
      }
    }
    return n;
  }
  class p extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.foundation = new h(this.adapter);
    }
    render() {
      let e = this.props;
      let {
        children: t,
        header: n,
        footer: r,
        prefixCls: o,
        bodyHeight: l,
        className: u,
        style: d
      } = e;
      let c = f(e, ["children", "header", "footer", "prefixCls", "bodyHeight", "className", "style"]);
      let h = s(u, {
        [o || semiScrolllistConstants.cssClasses.PREFIX]: true
      });
      let p = s({
        [`${o || semiScrolllistConstants.cssClasses.PREFIX}-header`]: true
      });
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        className: h,
        style: d
      }, this.getDataAttr(c)), n ? reactCoreLibraryReexport.createElement("div", {
        className: p
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${p}-title`,
        "x-semi-prop": this.props["x-semi-header-alias"] || "header"
      }, n), reactCoreLibraryReexport.createElement("div", {
        className: `${h}-line`
      })) : null, reactCoreLibraryReexport.createElement("div", {
        className: `${h}-body`,
        style: {
          height: l || ""
        },
        "x-semi-prop": "children"
      }, t), r ? reactCoreLibraryReexport.createElement("div", {
        className: `${h}-footer`,
        "x-semi-prop": this.props["x-semi-footer-alias"] || "footer"
      }, r) : null);
    }
  }
  p.Item = semiScrollList.ScrollList;
  p.propTypes = {
    className: u.string,
    header: u.node,
    footer: u.node,
    children: u.node,
    bodyHeight: u.oneOfType([u.number, u.string])
  };
  var g = p;
  require.d(exports, {
    ScrollList: function () {
      return g;
    }
  });
}