// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'AvatarGroup'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72645.b0fb9881.js
         * chunkId: 72645
         * moduleId: 261602
         */
module.exports = function (module, exports, require) {
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var c = propTypesFactoryWrapper;
  var avatarComponent = require("avatar-component") /*id: 16165*/;
  var avatarComponentConfig = require("avatar-component-config") /*id: 831970*/;
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
  let p = avatarComponentConfig.avatarConstants.SIZE;
  let g = avatarComponentConfig.avatarConstants.SHAPE;
  let y = avatarComponentConfig.avatarConstants.OVERLAP_FROM;
  let m = avatarComponentConfig.avatarPrefixConfig.PREFIX;
  class v extends reactCoreLibraryReexport.PureComponent {
    getAllAvatars() {
      let {
        children: e
      } = this.props;
      if (e) {
        if (Array.isArray(e)) {
          return reactCoreLibraryReexport.Children.toArray(e);
        } else {
          return [e];
        }
      } else {
        return [];
      }
    }
    getMergeAvatars(e) {
      let {
        maxCount: t
      } = this.props;
      let n = e;
      let r = e.length - t;
      let i = e.slice(0, t);
      let o = e.slice(t);
      if (r > 0) {
        let e = this.renderMoreAvatar(r, o);
        i.push(e);
        n = i;
      }
      return n;
    }
    renderMoreAvatar(e, t) {
      let {
        renderMore: n
      } = this.props;
      let r = l(`${m}-item-more`);
      let o = t == null ? undefined : t.reduce((e, t) => {
        let {
          children: n,
          alt: r
        } = t.props;
        let i = r ?? (typeof n == "string" ? n : "");
        if (i.length === 0) {
          return e;
        } else if (e.length > 0) {
          return `${e},${i}`;
        } else {
          return i;
        }
      }, "");
      let s = ` Number of remaining Avatars\u{FF1A}${e},${o}`;
      let u = reactCoreLibraryReexport.createElement(avatarComponent.AvatarComponent, {
        className: r,
        key: "_+n",
        alt: s
      }, `+${e}`);
      if (isFunctionUtil_1.isFunction(n)) {
        u = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
          key: "_+n"
        }, n(e, t));
      }
      return u;
    }
    render() {
      let e;
      let t = this.props;
      let {
        children: n,
        maxCount: i,
        overlapFrom: s,
        size: u,
        shape: c,
        renderMore: d
      } = t;
      let f = h(t, ["children", "maxCount", "overlapFrom", "size", "shape", "renderMore"]);
      let p = l({
        [`${m}-group`]: true
      });
      if (n) {
        let t = this.getAllAvatars();
        e = (isNumberUtil.isNumber(i) ? this.getMergeAvatars(t) : t).map((e, t) => {
          let n = l(objectPathGetDefault.getObjectPathDefault(e.props, "className"), {
            [`${m}-item-start-${t}`]: s === "start",
            [`${m}-item-end-${t}`]: s === "end"
          });
          return reactCoreLibraryReexport.cloneElement(e, Object.assign(Object.assign({}, f), {
            className: n,
            size: u,
            shape: c,
            key: t
          }));
        });
      }
      return reactCoreLibraryReexport.createElement("div", {
        className: p,
        role: "list"
      }, e);
    }
  }
  v.defaultProps = {
    size: "medium",
    shape: "circle",
    overlapFrom: "start"
  };
  v.propTypes = {
    children: c.node,
    shape: c.oneOf(g),
    size: c.oneOf(p),
    maxCount: c.number,
    renderMore: c.func,
    overlapFrom: c.oneOf(y)
  };
  require.d(exports, {
    AvatarGroup: function () {
      return v;
    }
  });
}