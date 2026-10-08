// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TagAvatarGroup'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 71518.fd54164e.js
         * chunkId: 71518
         * moduleId: 68674
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var l = propTypesFactoryWrapper;
  var tagAvatarConstants = require("tag-avatar-constants") /*id: 580307*/;
  var tagAvatarComponent = require("tag-avatar-component") /*id: 406406*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  let h = tagAvatarConstants.tagConfig.PREFIX;
  let d = tagAvatarConstants.tagAvatarOptions.TAG_SIZE;
  let u = tagAvatarConstants.tagAvatarOptions.AVATAR_SHAPE;
  class f extends reactCoreLibraryReexport.PureComponent {
    renderNTag(e, t) {
      let {
        size: n,
        showPopover: i,
        popoverProps: o,
        onPlusNMouseEnter: r
      } = this.props;
      let l = reactCoreLibraryReexport.createElement(tagAvatarComponent.Tag, {
        closable: false,
        size: n,
        color: "grey",
        style: {
          backgroundColor: "transparent"
        },
        key: "_+n",
        onMouseEnter: r
      }, "+", e);
      if (i) {
        l = reactCoreLibraryReexport.createElement(popoverComponent.PopoverComponent, Object.assign({
          showArrow: true,
          content: t,
          trigger: "hover",
          position: "top",
          autoAdjustOverflow: true,
          className: `${h}-rest-group-popover`
        }, o, {
          key: "_+n_Popover"
        }), l);
      }
      return l;
    }
    renderMergeTags(e) {
      let {
        maxTagCount: t,
        tagList: n,
        restCount: s
      } = this.props;
      let i = s || n.length - t;
      let o = e;
      let r = e.slice(0, t);
      let l = e.slice(t);
      let a = null;
      if (i > 0) {
        a = this.renderNTag(i, l);
        r.push(a);
        o = r;
      }
      return o;
    }
    renderAllTags() {
      let {
        tagList: e,
        size: t,
        mode: n,
        avatarShape: i,
        onTagClose: o
      } = this.props;
      return e.map(e => {
        if (n === "custom") {
          return e;
        }
        let r = Object.assign({}, e);
        r.size ||= t;
        r.avatarShape ||= i;
        if (!r.tagKey) {
          if (typeof r.children == "string" || typeof r.children == "number") {
            r.tagKey = r.children;
          } else {
            r.tagKey = Math.random();
          }
        }
        return reactCoreLibraryReexport.createElement(tagAvatarComponent.Tag, Object.assign({}, r, {
          key: r.tagKey,
          onClose: (e, t, n) => {
            if (r.onClose) {
              r.onClose(e, t, n);
            }
            if (o) {
              o(e, t, n);
            }
          }
        }));
      });
    }
    render() {
      let {
        style: e,
        className: t,
        maxTagCount: n,
        size: i
      } = this.props;
      let r = o({
        [`${h}-group`]: true,
        [`${h}-group-max`]: n,
        [`${h}-group-small`]: i === "small",
        [`${h}-group-large`]: i === "large"
      }, t);
      let l = this.renderAllTags();
      let a = n === undefined ? l : this.renderMergeTags(l);
      return reactCoreLibraryReexport.createElement("div", {
        style: e,
        className: r
      }, a);
    }
  }
  f.defaultProps = {
    style: {},
    className: "",
    size: d[0],
    avatarShape: "square",
    onTagClose: () => undefined,
    onPlusNMouseEnter: () => undefined
  };
  f.propTypes = {
    children: l.node,
    style: l.object,
    className: l.string,
    maxTagCount: l.number,
    restCount: l.number,
    tagList: l.array,
    size: l.oneOf(d),
    mode: l.string,
    onTagClose: l.func,
    showPopover: l.bool,
    popoverProps: l.object,
    avatarShape: l.oneOf(u)
  };
  require.d(exports, {
    TagAvatarGroup: function () {
      return f;
    }
  });
}