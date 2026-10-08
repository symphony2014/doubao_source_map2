// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SemiBanner'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 493101
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var a = propTypesFactoryWrapper;
  var semiIconButton = require("semi-icon-button") /*id: 845645*/;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let d = {
    PREFIX: `${semiIdentifier.semiIdentifier}-banner`
  };
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  class p extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign(Object.assign({}, p.defaultAdapter), e));
    }
    removeBanner(e) {
      this._adapter.notifyClose(e);
      this._adapter.setVisible();
    }
  }
  var typographyWrapperModule = require("typography-wrapper-module") /*id: 954330*/;
  var closeIconComponent = require("close-icon-component") /*id: 111418*/;
  var alertTriangleIcon = require("alert-triangle-icon") /*id: 704286*/;
  var tickCircleIcon = require("tick-circle-icon") /*id: 572060*/;
  var infoCircleIcon = require("info-circle-icon") /*id: 444518*/;
  var alertCircleIcon = require("alert-circle-icon") /*id: 287588*/;
  var pageNoopHandler = require("page-noop-handler") /*id: 73359*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  let y = d.PREFIX;
  class x extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.remove = e => {
        if (e) {
          e.stopPropagation();
        }
        this.foundation.removeBanner(e);
      };
      this.state = {
        visible: true
      };
      pageNoopHandler.noopHandler("target" in this.props, "[Semi Banner] 'target' has been deprecated, please write JSX directly instead.");
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        setVisible: () => {
          this.setState({
            visible: false
          });
        },
        notifyClose: e => {
          let {
            onClose: t
          } = this.props;
          t(e);
        }
      });
    }
    componentDidMount() {
      this.foundation = new p(this.adapter);
      this.foundation.init();
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    renderCloser() {
      let {
        closeIcon: e
      } = this.props;
      if (e === null) {
        return e;
      } else {
        return reactCoreLibraryReexport.createElement(semiIconButton.SemiIconButton, {
          className: `${y}-close`,
          onClick: this.remove,
          icon: e || reactCoreLibraryReexport.createElement(closeIconComponent.CloseIcon, {
            "x-semi-prop": "closeIcon",
            "aria-hidden": true
          }),
          theme: "borderless",
          size: "small",
          type: "tertiary",
          "aria-label": "Close"
        });
      }
    }
    renderIcon() {
      let {
        type: e,
        icon: t
      } = this.props;
      let n = {
        warning: reactCoreLibraryReexport.createElement(alertTriangleIcon.AlertTriangleIcon, {
          size: "large",
          "aria-label": "warning"
        }),
        success: reactCoreLibraryReexport.createElement(tickCircleIcon.TickCircleIcon, {
          size: "large",
          "aria-label": "success"
        }),
        info: reactCoreLibraryReexport.createElement(infoCircleIcon.InfoCircleIcon, {
          size: "large",
          "aria-label": "info"
        }),
        danger: reactCoreLibraryReexport.createElement(alertCircleIcon.AlertCircleIcon, {
          size: "large",
          "aria-label": "danger"
        })
      }[e];
      let l = r({
        [`${y}-icon`]: true
      });
      if (t !== undefined) {
        n = t;
      }
      if (n) {
        return reactCoreLibraryReexport.createElement("div", {
          className: l,
          "x-semi-prop": "icon"
        }, n);
      } else {
        return null;
      }
    }
    render() {
      let {
        children: e,
        type: t,
        className: n,
        style: l,
        bordered: o,
        title: a,
        description: s,
        fullMode: c
      } = this.props;
      let {
        visible: d
      } = this.state;
      let u = r(y, n, {
        [`${y}-${t}`]: t,
        [`${y}-full`]: c,
        [`${y}-in-container`]: !c,
        [`${y}-bordered`]: !c && o
      });
      if (d) {
        return reactCoreLibraryReexport.createElement("div", Object.assign({
          className: u,
          style: l,
          role: "alert"
        }, this.getDataAttr(this.props)), reactCoreLibraryReexport.createElement("div", {
          className: `${y}-content-wrapper`
        }, reactCoreLibraryReexport.createElement("div", {
          className: `${y}-content`
        }, this.renderIcon(), reactCoreLibraryReexport.createElement("div", {
          className: `${y}-content-body`
        }, a ? reactCoreLibraryReexport.createElement(typographyWrapperModule.TypographyWrapper.Title, {
          heading: 5,
          className: `${y}-title`,
          component: "div",
          "x-semi-prop": "title"
        }, a) : null, s ? reactCoreLibraryReexport.createElement(typographyWrapperModule.TypographyWrapper.Paragraph, {
          className: `${y}-description`,
          component: "div",
          "x-semi-prop": "description"
        }, s) : null)), this.renderCloser()), e ? reactCoreLibraryReexport.createElement("div", {
          className: `${y}-extra`,
          "x-semi-prop": "children"
        }, e) : null);
      } else {
        return null;
      }
    }
  }
  x.propTypes = {
    fullMode: a.bool,
    type: a.oneOf(["info", "success", "danger", "warning"]),
    title: a.node,
    description: a.node,
    icon: a.node,
    closeIcon: a.node,
    children: a.node,
    style: a.object,
    className: a.string,
    onClose: a.func,
    bordered: a.bool
  };
  x.defaultProps = {
    onClose: () => {},
    type: "info",
    fullMode: true
  };
  require.d(exports, {
    SemiBanner: function () {
      return x;
    }
  });
}