// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Card'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 73666.a038b33c.js
         * chunkId: 73666
         * moduleId: 654098
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var a = propTypesFactoryWrapper;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let c = {
    PREFIX: `${semiIdentifier.semiIdentifier}-card`
  };
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  function h(e, t) {
    var n = {};
    for (var r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
        n[r] = e[r];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var i = 0;
      var r = Object.getOwnPropertySymbols(e);
      for (; i < r.length; i++) {
        if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
          n[r[i]] = e[r[i]];
        }
      }
    }
    return n;
  }
  let u = c.PREFIX;
  class g extends reactCoreLibraryReexport.PureComponent {
    render() {
      let e = this.props;
      let {
        avatar: t,
        className: n,
        description: r,
        style: i,
        title: s
      } = e;
      let a = h(e, ["avatar", "className", "description", "style", "title"]);
      let l = d(`${u}-meta`, n);
      let c = t && reactCoreLibraryReexport.createElement("div", {
        className: `${u}-meta-avatar`
      }, t);
      let p = s && reactCoreLibraryReexport.createElement("div", {
        className: `${u}-meta-wrapper-title`
      }, s);
      let g = r && reactCoreLibraryReexport.createElement("div", {
        className: `${u}-meta-wrapper-description`
      }, r);
      let f = s || r ? reactCoreLibraryReexport.createElement("div", {
        className: `${u}-meta-wrapper`
      }, p, g) : null;
      return reactCoreLibraryReexport.createElement("div", Object.assign({}, a, {
        className: l,
        style: i
      }), c, f);
    }
  }
  g.propTypes = {
    avatar: a.node,
    className: a.string,
    description: a.node,
    style: a.object,
    title: a.node
  };
  var skeletonComponent = require("skeleton-component") /*id: 619442*/;
  var typographyWrapperModule = require("typography-wrapper-module") /*id: 954330*/;
  var spaceLayoutComponent = require("space-layout-component") /*id: 765807*/;
  function y(e, t) {
    var n = {};
    for (var r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
        n[r] = e[r];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var i = 0;
      var r = Object.getOwnPropertySymbols(e);
      for (; i < r.length; i++) {
        if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
          n[r[i]] = e[r[i]];
        }
      }
    }
    return n;
  }
  let v = c.PREFIX;
  class O extends reactCoreLibraryReexport.PureComponent {
    constructor() {
      super(...arguments);
      this.renderHeader = () => {
        let {
          title: e,
          headerExtraContent: t,
          header: n,
          headerLine: i,
          headerStyle: s
        } = this.props;
        let a = d(`${v}-header`, {
          [`${v}-header-bordered`]: !!i
        });
        let l = d(`${v}-header-wrapper`);
        let c = d(`${v}-header-wrapper-title`, {
          [`${v}-header-wrapper-spacing`]: !!t
        });
        if (n || t || e) {
          return reactCoreLibraryReexport.createElement("div", {
            style: s,
            className: a
          }, n || reactCoreLibraryReexport.createElement("div", {
            className: l
          }, t && reactCoreLibraryReexport.createElement("div", {
            className: `${v}-header-wrapper-extra`,
            "x-semi-prop": "headerExtraContent"
          }, t), e && reactCoreLibraryReexport.createElement("div", {
            className: c
          }, isStringTypeCheck.isString(e) ? reactCoreLibraryReexport.createElement(typographyWrapperModule.TypographyWrapper.Title, {
            heading: 6,
            ellipsis: {
              showTooltip: true,
              rows: 1
            },
            "x-semi-prop": "title"
          }, e) : e)));
        } else {
          return null;
        }
      };
      this.renderCover = () => {
        let {
          cover: e
        } = this.props;
        let t = d(`${v}-cover`);
        return e && reactCoreLibraryReexport.createElement("div", {
          className: t,
          "x-semi-prop": "cover"
        }, e);
      };
      this.renderBody = () => {
        let {
          bodyStyle: e,
          children: t,
          actions: n,
          loading: r
        } = this.props;
        let i = d(`${v}-body`);
        let s = d(`${v}-body-actions`);
        let a = d(`${v}-body-actions-item`);
        let l = reactCoreLibraryReexport.createElement("div", null, reactCoreLibraryReexport.createElement(skeletonComponent.Skeleton.Title, null), reactCoreLibraryReexport.createElement("br", null), reactCoreLibraryReexport.createElement(skeletonComponent.Skeleton.Paragraph, {
          rows: 3
        }));
        return reactCoreLibraryReexport.createElement("div", {
          style: e,
          className: i
        }, t && reactCoreLibraryReexport.createElement(skeletonComponent.Skeleton, {
          placeholder: l,
          loading: r,
          active: true
        }, t), Array.isArray(n) && reactCoreLibraryReexport.createElement("div", {
          className: s
        }, reactCoreLibraryReexport.createElement(spaceLayoutComponent.Space, {
          spacing: 12
        }, n.map((e, t) => reactCoreLibraryReexport.createElement("div", {
          key: t,
          className: a,
          "x-semi-prop": `actions.${t}`
        }, e)))));
      };
      this.renderFooter = () => {
        let {
          footer: e,
          footerLine: t,
          footerStyle: n
        } = this.props;
        let r = d(`${v}-footer`, {
          [`${v}-footer-bordered`]: t
        });
        return e && reactCoreLibraryReexport.createElement("div", {
          style: n,
          className: r,
          "x-semi-prop": "footer"
        }, e);
      };
    }
    render() {
      let e = this.props;
      let {
        bordered: t,
        shadows: n,
        style: r,
        className: s
      } = e;
      let a = y(e, ["bordered", "shadows", "style", "className"]);
      let l = throttledOmitPathStringify.omitPathStringify(a, ["actions", "bodyStyle", "cover", "headerExtraContent", "footer", "footerLine", "footerStyle", "header", "headerLine", "headerStyle", "loading", "title"]);
      let c = d(v, s, {
        [`${v}-bordered`]: t,
        [`${v}-shadows`]: n,
        [`${v}-shadows-${n}`]: n
      });
      return reactCoreLibraryReexport.createElement("div", Object.assign({}, l, {
        "aria-busy": this.props.loading,
        className: c,
        style: r
      }), this.renderHeader(), this.renderCover(), this.renderBody(), this.renderFooter());
    }
  }
  O.Meta = g;
  O.propTypes = {
    actions: a.array,
    bodyStyle: a.object,
    bordered: a.bool,
    children: a.node,
    className: a.string,
    cover: a.node,
    footer: a.node,
    footerLine: a.bool,
    footerStyle: a.object,
    header: a.node,
    headerExtraContent: a.node,
    headerLine: a.bool,
    headerStyle: a.object,
    loading: a.bool,
    shadows: a.oneOf(["hover", "always"]),
    style: a.object,
    title: a.node,
    "aria-label": a.string
  };
  O.defaultProps = {
    bordered: true,
    footerLine: false,
    headerLine: true,
    loading: false
  };
  var E = O;
  require.d(exports, {
    Card: function () {
      return E;
    }
  });
}