// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Tag'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 406406
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var s = propTypesFactoryWrapper;
  var tagAvatarConstants = require("tag-avatar-constants") /*id: 580307*/;
  var avatarComponent = require("avatar-component") /*id: 16165*/;
  var closeIconComponent = require("close-icon-component") /*id: 111418*/;
  var uiFocusNavigation = require("ui-focus-navigation") /*id: 152428*/;
  function h(e, t) {
    var n = {};
    for (var i in e) {
      if (Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0) {
        n[i] = e[i];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var i = Object.getOwnPropertySymbols(e);
      for (; r < i.length; r++) {
        if (t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) {
          n[i[r]] = e[i[r]];
        }
      }
    }
    return n;
  }
  let m = tagAvatarConstants.tagConfig.PREFIX;
  let f = tagAvatarConstants.tagAvatarOptions.TAG_COLOR;
  let g = tagAvatarConstants.tagAvatarOptions.TAG_SIZE;
  let v = tagAvatarConstants.tagAvatarOptions.TAG_TYPE;
  let b = tagAvatarConstants.tagAvatarOptions.AVATAR_SHAPE;
  class y extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      this.state = {
        visible: true
      };
      this.close = this.close.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    static getDerivedStateFromProps(e) {
      if ("visible" in e) {
        return {
          visible: e.visible
        };
      } else {
        return null;
      }
    }
    setVisible(e) {
      if (!("visible" in this.props)) {
        this.setState({
          visible: e
        });
      }
    }
    close(e, t, n) {
      let {
        onClose: i
      } = this.props;
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      if (i) {
        i(t, e, n);
      }
      if (!e.defaultPrevented) {
        this.setVisible(false);
      }
    }
    handleKeyDown(e) {
      let {
        closable: t,
        onClick: n,
        onKeyDown: i
      } = this.props;
      switch (e.key) {
        case "Backspace":
        case "Delete":
          if (t) {
            this.close(e, this.props.children, this.props.tagKey);
          }
          uiFocusNavigation.suppressEvent(e);
          break;
        case "Enter":
          n(e);
          uiFocusNavigation.suppressEvent(e);
          break;
        case "Escape":
          e.target.blur();
      }
      if (i) {
        i(e);
      }
    }
    renderAvatar() {
      let {
        avatarShape: e,
        avatarSrc: t
      } = this.props;
      return reactCoreLibraryReexport.createElement(avatarComponent.AvatarComponent, {
        src: t,
        shape: e
      });
    }
    render() {
      let e = this.props;
      let {
        tagKey: t,
        children: n,
        size: o,
        color: a,
        closable: s,
        visible: c,
        onClose: d,
        onClick: p,
        className: f,
        type: g,
        shape: v,
        avatarSrc: b,
        avatarShape: x,
        tabIndex: w,
        prefixIcon: A,
        suffixIcon: _
      } = e;
      let k = h(e, ["tagKey", "children", "size", "color", "closable", "visible", "onClose", "onClick", "className", "type", "shape", "avatarSrc", "avatarShape", "tabIndex", "prefixIcon", "suffixIcon"]);
      let {
        visible: S
      } = this.state;
      let C = p !== y.defaultProps.onClick || s;
      let $ = {
        role: "button",
        tabIndex: w || 0,
        onKeyDown: this.handleKeyDown
      };
      let E = Object.assign(Object.assign({}, k), {
        onClick: p,
        tabIndex: w,
        className: l(m, {
          [`${m}-default`]: o === "default",
          [`${m}-small`]: o === "small",
          [`${m}-large`]: o === "large",
          [`${m}-square`]: v === "square",
          [`${m}-circle`]: v === "circle",
          [`${m}-${g}`]: g,
          [`${m}-${a}-${g}`]: a && g,
          [`${m}-closable`]: s,
          [`${m}-invisible`]: !S,
          [`${m}-avatar-${x}`]: b
        }, f)
      });
      let R = C ? Object.assign(Object.assign({}, E), $) : E;
      let T = s ? reactCoreLibraryReexport.createElement("div", {
        className: `${m}-close`,
        onClick: e => this.close(e, n, t)
      }, reactCoreLibraryReexport.createElement(closeIconComponent.CloseIcon, {
        size: "small"
      })) : null;
      let N = isStringTypeCheck.isString(n);
      let j = l(`${m}-content`, `${m}-content-${N ? "ellipsis" : "center"}`);
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        "aria-label": this.props["aria-label"] || N ? `${s ? "Closable " : ""}Tag: ${n}` : ""
      }, R), A ? reactCoreLibraryReexport.createElement("div", {
        className: `${m}-prefix-icon`
      }, A) : null, b ? this.renderAvatar() : null, reactCoreLibraryReexport.createElement("div", {
        className: j
      }, n), _ ? reactCoreLibraryReexport.createElement("div", {
        className: `${m}-suffix-icon`
      }, _) : null, T);
    }
  }
  y.defaultProps = {
    size: g[0],
    color: f[0],
    closable: false,
    type: v[0],
    onClose: () => undefined,
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    style: {},
    className: "",
    shape: "square",
    avatarShape: "square",
    prefixIcon: null,
    suffixIcon: null
  };
  y.propTypes = {
    children: s.node,
    tagKey: s.oneOfType([s.string, s.number]),
    size: s.oneOf(g),
    color: s.oneOf(f),
    type: s.oneOf(v),
    closable: s.bool,
    visible: s.bool,
    onClose: s.func,
    onClick: s.func,
    prefixIcon: s.node,
    suffixIcon: s.node,
    style: s.object,
    className: s.string,
    avatarSrc: s.string,
    avatarShape: s.oneOf(b),
    "aria-label": s.string
  };
  require.d(exports, {
    Tag: function () {
      return y;
    }
  });
}