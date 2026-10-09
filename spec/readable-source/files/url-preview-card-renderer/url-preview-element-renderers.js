// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'xv' to 'renderTextElement'
// - Renamed export 'kJ' to 'renderSpinButton'
// - Renamed export 'zx' to 'ButtonElement'
// - Renamed export 'Ee' to 'renderImageElement'
// - Renamed export 'lP' to 'cleanTextStyle'
// - Renamed export 'zW' to 'cleanLayoutStyle'
// - Renamed export 'wQ' to 'textWrapClassName'
// - Renamed export 'qp' to 'TimeElement'
// - Renamed export 'd9' to 'ChattersPreview'
// - Renamed export 'qE' to 'renderAvatarElement'
// - Renamed export 'HY' to 'ContainerElement'
// - Renamed export 'Ho' to 'renderRichText'
// - Renamed export 'YF' to 'LinearLayoutElement'
// - Renamed export 'mf' to 'renderEngineElement'
// - Renamed export 'PS' to 'renderTagList'
// - Renamed export 'nk' to 'renderVideoElement'
// - Renamed export 'yU' to 'buttonWrapClassName'
// - Renamed export '$T' to 'docImageWrapClass'
// - Renamed export 'ZB' to 'cleanImageStyle'
// - Renamed export 'h4' to 'PreviewHeader'
// - Renamed export 'hU' to 'IconButtonElement'
// - Renamed export '_L' to 'CardContainer'
// - Renamed export 'Cv' to 'imageWrapClassName'
// - Renamed export 'W_' to 'BaseElementRenderer'
// - Renamed export 'bj' to 'headerWrapClassName'
// - Renamed export 'Ah' to 'cleanFlexStyle'
// - Renamed export 'In' to 'cleanAvatarStyle'
// - Renamed export 'TZ' to 'renderDocImage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 634744
         */
module.exports = function (module, exports, require) {
  let r;
  var i;
  var o;
  var _;
  var a;
  var E;
  var l;
  var c;
  var T;
  var I;
  var A;
  var s;
  var u;
  var d;
  var g;
  var N;
  var S;
  var C;
  var L;
  var p;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var O = classnamesUtils;
  var errorConstantsCodes = require("error-constants-codes") /*id: 850732*/;
  var urlPreviewCacheUtilityModule = require("url-preview-cache-utility-module") /*id: 779458*/;
  var cardPreviewLocaleConstants = require("card-preview-locale-constants") /*id: 7562*/;
  var stringDeburrUtil_1 = require("string-deburr-util_1") /*id: 505593*/;
  let U = `${urlPreviewCacheUtilityModule.componentName}-element`;
  class b extends reactCoreLibraryReexport.PureComponent {
    parseFontLevel(e) {
      if (!e) {
        return {};
      }
      let {
        type: t = errorConstantsCodes.ani.CAPTION,
        level: n = 0
      } = e;
      let r = `${b.fontTypeMap[t]}${n}`;
      return urlPreviewCacheUtilityModule.typographyStyles[r];
    }
    parseBorder(e) {
      if (!e) {
        return {};
      }
      let {
        width: t,
        cornerRadius: n,
        colorV2: r
      } = e;
      return {
        borderStyle: "solid",
        borderWidth: t ? `${t}px` : 0,
        borderRadius: n ? `${n}px` : 0,
        borderColor: urlPreviewCacheUtilityModule.resolveColorValue(r)
      };
    }
    parseAspectRatio(e) {
      if (e) {
        return {
          aspectRatio: `${e} / 100`
        };
      } else {
        return {};
      }
    }
    parseStyle() {
      let {
        element: e,
        style: t,
        elementId: n
      } = this.props;
      let r = e.style;
      if (r) {
        let i = Object.assign({
          color: urlPreviewCacheUtilityModule.resolveColorValue(r.textColorV2),
          background: urlPreviewCacheUtilityModule.resolveLinearGradient(r.backgroundColor),
          width: !r.width && r.maxWidth ? urlPreviewCacheUtilityModule.formatLengthValue(r.maxWidth) : urlPreviewCacheUtilityModule.formatLengthValue(r.width),
          height: urlPreviewCacheUtilityModule.formatLengthValue(r.height),
          maxWidth: !r.width && r.maxWidth ? "100%" : urlPreviewCacheUtilityModule.formatLengthValue(r.maxWidth),
          maxHeight: urlPreviewCacheUtilityModule.formatLengthValue(r.maxHeight),
          minWidth: urlPreviewCacheUtilityModule.formatLengthValue(r.minWidth),
          minHeight: urlPreviewCacheUtilityModule.formatLengthValue(r.minHeight),
          flexGrow: r.growWeight,
          flexShrink: r.shrinkWeight
        }, this.parseFontLevel(r.fontLevel), this.parseBorder(r.border), this.parseAspectRatio(r.aspectRatio), t);
        if (e.type === errorConstantsCodes.Cdw.LINEAR_LAYOUT) {
          i.overflow = "hidden";
        }
        if (n === "root" && !i.maxWidth) {
          i.maxWidth = b.defaultRootCardMaxWidth;
        }
        if (e.type === errorConstantsCodes.Cdw.EMPTY) {
          i.overflow = "hidden";
        }
        return i;
      }
      return t;
    }
    render() {
      var e;
      var t;
      let {
        element: n,
        elementId: r
      } = this.props;
      if (!n) {
        if ((e = urlPreviewCacheUtilityModule.urlPreviewManager?.logging) !== null && e !== undefined) {
          e.error("[Message OpenUrlPreview] element not exist");
        }
        return null;
      }
      let i = urlPreviewCacheUtilityModule.getModuleByType(n.type);
      if (!i) {
        if ((t = urlPreviewCacheUtilityModule.urlPreviewManager?.logging) !== null && t !== undefined) {
          t.error("[Message OpenUrlPreview] element module not exist");
        }
        i = urlPreviewCacheUtilityModule.getModuleByType(cardPreviewLocaleConstants.cardPreviewConstant.EMPTY);
      }
      if (!(i == null ? undefined : i.Component)) {
        return null;
      }
      let {
        Component: o,
        parseStyle: _,
        wrapClassName: a
      } = i;
      let E = O(U, a);
      let l = this.parseStyle();
      let c = Object.keys(cardPreviewLocaleConstants.cardPreviewConstant).find(e => cardPreviewLocaleConstants.cardPreviewConstant[e] === n.type);
      let T = stringDeburrUtil_1.deburrString(c);
      if (T && !this.props.element[T]) {
        this.props.element[T] = {};
      }
      return reactCoreLibraryReexport.createElement("div", {
        className: E,
        "data-element-id": r,
        style: _ ? _(l) : l
      }, reactCoreLibraryReexport.createElement(o, Object.assign({}, this.props)));
    }
  }
  b.fontTypeMap = {
    [errorConstantsCodes.ani.TITLE]: "TITLE",
    [errorConstantsCodes.ani.HEADLINE]: "HEADLINE",
    [errorConstantsCodes.ani.BODY]: "BODY",
    [errorConstantsCodes.ani.CAPTION]: "CAPTION"
  };
  b.defaultRootCardMaxWidth = "400px";
  let v = {
    width: "100%",
    height: "100%"
  };
  class y extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      this.onClickHandler = e => {
        let n = this.props.element.empty?.actionId;
        if (n) {
          e.stopPropagation();
          this.props.doAction(n);
          this.props.trackPageClick({
            clickType: "container",
            componentId: this.props.elementId,
            actionId: n
          });
        }
      };
      this.updateStyle = e => {
        let t = {};
        if (e.background) {
          t.background = urlPreviewCacheUtilityModule.resolveColorValue(e.background);
        }
        this.setState({
          style: t
        });
      };
      this.state = {
        style: {}
      };
    }
    render() {
      let {
        element: t,
        elementEntity: n
      } = this.props;
      let {
        childIds: r
      } = t;
      let {
        elements: i
      } = n;
      let o = Object.assign(Object.assign({}, this.props), {
        style: {}
      });
      let _ = t.empty?.actionId ? {
        cursor: "pointer"
      } : {};
      let a = Object.assign(Object.assign(Object.assign({}, v), this.state.style), _);
      return reactCoreLibraryReexport.createElement("div", {
        onClick: this.onClickHandler,
        onMouseDown: () => {
          return this.updateStyle({
            background: (t == null ? undefined : t.empty)?.active
          });
        },
        onMouseUp: () => this.updateStyle({}),
        onMouseEnter: () => {
          return this.updateStyle({
            background: (t == null ? undefined : t.empty)?.hover
          });
        },
        onMouseLeave: () => this.updateStyle({}),
        style: a
      }, r && i && r.map(e => reactCoreLibraryReexport.createElement(b, Object.assign({}, o, {
        key: e,
        element: i[e],
        elementId: e
      }))));
    }
  }
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var copyOutlinedIcon = require("copy-outlined-icon") /*id: 515436*/;
  var visibleLockOutlinedIcon = require("visible-lock-outlined-icon") /*id: 700898*/;
  var moreOutlinedIcon = require("more-outlined-icon") /*id: 847274*/;
  var toastNotificationManagerWrapper = require("toast-notification-manager-wrapper") /*id: 314333*/;
  var uiMenuComponent = require("ui-menu-component") /*id: 879406*/;
  var tooltipComponentModule = require("tooltip-component-module") /*id: 91247*/;
  var iconButtonComponent = require("icon-button-component") /*id: 259693*/;
  var dropdownComponent_2 = require("dropdown-component_2") /*id: 919086*/;
  var resizeObserverPolyfill = require("resize-observer-polyfill") /*id: 412454*/;
  var urlPreviewComponents = require("url-preview-components") /*id: 909577*/;
  var localeContextHocWrappers = require("locale-context-hoc-wrappers") /*id: 945449*/;
  var optionalFunctionCall = require("optional-function-call") /*id: 698252*/;
  let W = `${urlPreviewCacheUtilityModule.componentName}-element-header`;
  class Q extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      this.titleRef = reactCoreLibraryReexport.createRef();
      this.handleClickCopyLink = e => {
        e.stopPropagation();
        let {
          urlPreviewEntity: r
        } = this.props;
        if (r.url?.url) {
          urlPreviewCacheUtilityModule.copyToClipboard(r.url?.url || "");
          toastNotificationManagerWrapper.toastManagerWrapper.success(optionalFunctionCall.callIfFunction(this.props.config.lang.UrlPreview.Lark_Chat_CopyDocsURL));
          this.props.trackPageClick({
            clickType: "copy_link",
            componentId: this.props.elementId
          });
        }
      };
      this.handleClickClose = e => {
        this.props.closeUrlPreview(e, this.props.elementId);
      };
      this.renderMoreMenu = () => reactCoreLibraryReexport.createElement(uiMenuComponent.Menu, null, reactCoreLibraryReexport.createElement(uiMenuComponent.Menu.Item, {
        key: "copy-link",
        icon: reactCoreLibraryReexport.createElement(copyOutlinedIcon.CopyOutlinedIcon, null),
        onClick: e => this.handleClickCopyLink(e.domEvent)
      }, optionalFunctionCall.callIfFunction(this.props.config.lang.UrlPreview.Lark_Chat_CopyLink)), reactCoreLibraryReexport.createElement(uiMenuComponent.Menu.Item, {
        key: "close-preview",
        icon: reactCoreLibraryReexport.createElement(visibleLockOutlinedIcon.VisibleLockOutlined, null),
        onClick: e => this.handleClickClose(e.domEvent)
      }, optionalFunctionCall.callIfFunction(this.props.config.lang.UrlPreview.Lark_Legacy_DeleteUrlPreview)));
      this.handleMoreToolbarClick = e => {
        e.preventDefault();
        e.stopPropagation();
      };
      this.renderDefaultIcon = () => {
        let {
          image: e
        } = this.props;
        return reactCoreLibraryReexport.createElement(e, {
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAaKSURBVHgB7ZxPTBxVHMd/b6g1NWBWFlOha9xNQC6CjTZBvbhcrCUxJuLJYNoLXtGL6Q3oyWPL0YttYryhxiY0noBLK4k1uPWCmCxNQWIVuokpDSDzfN/ZDsy8ebP/5s3ubHc+yXb/zUz3fft7v39v+hiVIZ/niWPP0nl+QKc5UZYYJYiLR/OyzDitGW30/f4+LWa62Vqpg5nfF5Yw7TRhEn3a5IKURAhw9eCApv2EUgp0b4tPmCZNPcnCSKy1GTSV6mLX5C88At37m0+aXIjTghiMpl58nk07P3MJ1Mri2MgiHQqUv88vGERfUQwJ9/JZ5gV2Ga8tgfKbPC28+rx4maYYUDAfUiaTYQUD7wzDmlZpirFJ0DMiegvYY+vJU4yMZUUGtYnkL0ZFgk7QBaON0fsUo0TkRq8anMe+xw+UVnDSpynGj8QxagIe7RLl1sTzHqed3eJnqSSjVBdRZweFSbQFWv2T6MZt03r2wq0/+3qIhl5mNNTPKAzY3fucU8TY/pfo6wU/YdTAkibeM7RbVOQE2tgiunLdtKZVtUCc8Xcw9fRZk0ERApZTqzj2+TPXufWsi8hYkC2OanC93UQjZ5jlmE88XXTa61ucllaIln73/nxY0sVRwzo2KJFx0rO3vOJggGNvMxrMMM/nfT3MctB4zN7iLqvDdeZ/4zTyevCpFokpduNnTjlFNQh/Iosjg+iF42QWcnomRsMFWrjDae62dzDnzjDLSioBx2UH3Mc+2kOaEFykhgqEqaASB4OtdnoMD3iPR3IZlIYJ5Bex4GBH36red+A8OQfSEc0aJtCXP3qdsp3s1Uqy3f1+Z69JpxicMhJCmU/OGmHXVlVTd4GWVtRO+QMxrU4lKRDr2+73yfYmDPN+EUvlZKsBwsv+DDlSUOoqEAYh+x1YjRyxqi01cLxK+ErThFLUVaDcmncQ8DtOkBd9ftUUbQ5esVA4VhYeLRAd/qyuAq1uut/39rhDMxz37M2iiHPCkX8xa5YN1XD483e8wqN200HdBEJm6/ER3UeDgBAI/U5KFbAgl/fPwnVFw1AFcg5MNV2cg/hphfteQ5VQWk21Re85g2mmpUi1CU0glUXIwKpsMCWmPzLonGJwdnV+eN6ufxY+ltXbeg1FIHsA8Cn2IPDj5f7Mxj/ecyGUapCozg8FYW5x7esjC9fRA3ISikDOqILGlk2q030coppq6qGFIVsSBLGt6MRxUdC+4v5+9E0WShauXSA5qjgr6oGMd9Bzv6in4fAg81jDH472hTMJhFMu1zeqFa0CqaKKM8N9o9876IVc0eJkYCWDL7kHve6YknZjvpbWSDVoEwhTCq1PGWSztigY9Mhr3sEg58EyjyfL7nK/d6YKuJYqC9eNFoFsp6xqX8gONyumTl+39xpowE9+Y1qZdCl2HM45DKcso0UgVcO9VFQZf1fd1oBFOFunqgQx6TgvbHFAYIHgY/CvL1MqqmB6XPzQsOolGxwr12Vy7SZPuXoQWCC/VL9cVIFIY8PFnEe1bKyq/FOd4fobFYHWxbB2rqqiq3GcyHnkGw/8mvlD/VR3AlmQallFxyBU/ereHj39nWoJJNDGllsgTJGgg/j2prpf/XG2MesLgf5WVbEYBIR4VW8H/epGNfMjc3eHs1nmREe/OgiBBJLzkFoX6vxaI/XIlMsRSKDODm/0qWU93C8Ll/OiRhDoFwymvZ+VKxVk4JRVt72EcTtdLQQSCBFLHgTaG5WK5NdwRy8oKiusgW1Y5SPgbFUtDBtEP1hOWIuIOtFyC97MD6ZnSQfACjDYU8nigCHMxnbRalSdRDTcx89GRxygRaByyzOVoPO+Qp1oCRNB71FGOK9Hb6cWtN7lavWYheOtJpLZLdMoigNCuQ3YqsaFUKub6nuWYWmo+tGjjtr9QDKh3yeNZR+nQ4YgyY5oOeJSoB9UIApvA4FUsnnEUAEnXaAYP5YNk9MixSgxTbpriHXuZYpR8hSj71j+AU8Y+9Z/C2+VjUwqxjygjJF5jhXENLtCMS6wbQ62zClm0scJ+1TEztqGUx57CuGlJZBlRWbxgxiiNjracOmwFsNuJ2KqtbxI0CB18mijJU8Wl/+LTxmMJqn14EKcS5mTbMr5oTLNtfYS4kIk1jK7MjwQLuaSvWeQE/9N3jZ5WkxAWNN5ejJBDYoIPkM7dBl7BakOKlsoWUK1URaboIiLiZ5f3bayCKOIhggFMYYF8fj1v4d0zU8Ym/8BP8m9ms6rzksAAAAASUVORK5CYII="
        });
      };
      this.state = {
        isWide: true
      };
    }
    componentDidMount() {
      if (this.titleRef.current) {
        let e = new resizeObserverPolyfill.ResizeObserver(debounceUtil_1_1.debounce(e => {
          var t;
          let n = (t = this.titleRef.current) === null || t === undefined ? undefined : t.querySelector(`.${W}__title-text`);
          let r = !!n && urlPreviewCacheUtilityModule.hasOverflow(n);
          let i = e[0].contentRect.width;
          this.setState({
            isWide: i > Q.minTitleWidth || !r
          });
        }, 120, {
          leading: true
        }));
        e.observe(this.titleRef.current);
        this.titleObserver = e;
      }
    }
    componentWillUnmount() {
      if (this.titleObserver) {
        this.titleObserver.disconnect();
        this.titleObserver = null;
      }
    }
    renderElementSlot() {
      let {
        element: e,
        elementEntity: t
      } = this.props;
      let {
        elements: n
      } = t;
      let {
        childComponentId: r
      } = e.header;
      if (!r || !n) {
        return null;
      }
      let i = Object.assign(Object.assign({}, this.props), {
        style: {}
      });
      return reactCoreLibraryReexport.createElement("div", {
        className: `${W}__element-slot`
      }, r && reactCoreLibraryReexport.createElement(b, Object.assign({}, i, {
        element: n[r]
      })));
    }
    renderToolbar() {
      let {
        element: e,
        urlPreviewClosable: t
      } = this.props;
      let {
        isNeedCopyLink: n,
        isNeedClose: r
      } = e.header;
      if (!n && !r) {
        return null;
      }
      let i = t && r;
      return reactCoreLibraryReexport.createElement("div", {
        className: `${W}__toolbar`
      }, n && !i && reactCoreLibraryReexport.createElement(tooltipComponentModule.TooltipComponent, {
        title: optionalFunctionCall.callIfFunction(this.props.config.lang.UrlPreview.Lark_Chat_CopyLink)
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${W}__toolbar-item`,
        onClick: this.handleClickCopyLink
      }, reactCoreLibraryReexport.createElement(iconButtonComponent.IconButton, {
        icon: reactCoreLibraryReexport.createElement(copyOutlinedIcon.CopyOutlinedIcon, null),
        size: "small"
      }))), i && !n && reactCoreLibraryReexport.createElement(tooltipComponentModule.TooltipComponent, {
        title: optionalFunctionCall.callIfFunction(this.props.config.lang.UrlPreview.Lark_Legacy_DeleteUrlPreview)
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${W}__toolbar-item`,
        onClick: this.handleClickClose
      }, reactCoreLibraryReexport.createElement(iconButtonComponent.IconButton, {
        icon: reactCoreLibraryReexport.createElement(visibleLockOutlinedIcon.VisibleLockOutlined, null),
        size: "small"
      }))), n && i && reactCoreLibraryReexport.createElement(dropdownComponent_2.Dropdown, {
        overlay: this.renderMoreMenu(),
        placement: "bottomRight",
        trigger: "click"
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${W}__toolbar-item`,
        onClick: this.handleMoreToolbarClick
      }, reactCoreLibraryReexport.createElement(iconButtonComponent.IconButton, {
        icon: reactCoreLibraryReexport.createElement(moreOutlinedIcon.MoreOutlinedIcon, null),
        size: "small"
      }))));
    }
    renderTitleIcon() {
      let {
        iconColor: e,
        udIcon: t
      } = this.props.element.header;
      let {
        iconUrl: n
      } = this.props;
      let {
        image: r,
        udFontIcon: i
      } = this.props;
      if (t) {
        let e = urlPreviewCacheUtilityModule.resolveColorValue(t.color);
        return reactCoreLibraryReexport.createElement("div", {
          className: `${W}__title-icon`
        }, reactCoreLibraryReexport.createElement(i, {
          icon: t.key,
          size: 16,
          color: e
        }), ";");
      }
      let o = n || null;
      let _ = urlPreviewCacheUtilityModule.resolveColorValue(e, true);
      if (o) {
        return reactCoreLibraryReexport.createElement("div", {
          className: `${W}__title-icon`
        }, _ ? reactCoreLibraryReexport.createElement(urlPreviewComponents.ColoredSvgImage, {
          imageUrl: o,
          width: 16,
          height: 16,
          color: _
        }) : reactCoreLibraryReexport.createElement(r, {
          renderError: this.renderDefaultIcon,
          src: o
        }));
      } else {
        return null;
      }
    }
    renderTitleText() {
      let {
        title: e
      } = this.props.element.header;
      if (e) {
        return reactCoreLibraryReexport.createElement(tooltipComponentModule.TooltipComponent, {
          checkOverflow: true,
          title: e
        }, reactCoreLibraryReexport.createElement("div", {
          className: `${W}__title-text`
        }, e));
      } else {
        return null;
      }
    }
    renderTitleTag() {
      let {
        larkTag: e,
        tagColor: t,
        tagTextColor: n,
        headerTag: r
      } = this.props.element.header;
      if (e || t && n && r) {
        if (e) {
          return reactCoreLibraryReexport.createElement("div", {
            className: `${W}__title-tag`
          });
        } else {
          return reactCoreLibraryReexport.createElement("div", {
            className: `${W}__title-tag`
          }, reactCoreLibraryReexport.createElement("div", {
            className: "ud__tag ud__tag-xs",
            style: {
              backgroundColor: urlPreviewCacheUtilityModule.resolveColorValue(t),
              color: urlPreviewCacheUtilityModule.resolveColorValue(n)
            }
          }, reactCoreLibraryReexport.createElement("div", {
            className: "ud__tag__content"
          }, r)));
        }
      } else {
        return null;
      }
    }
    render() {
      let {
        isWide: e
      } = this.state;
      let {
        header: t
      } = this.props.element;
      let n = O(W, {
        [`${W}--light`]: t.theme === errorConstantsCodes.qZn.LIGHT,
        [`${W}--dark`]: t.theme === errorConstantsCodes.qZn.DARK,
        [`${W}--normal`]: t.type === errorConstantsCodes.R0R.NORMAL,
        [`${W}--headlines`]: t.type === errorConstantsCodes.R0R.HEADLINES,
        [`${W}--title-narrow`]: !e
      });
      return reactCoreLibraryReexport.createElement("div", {
        className: n
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${W}__top`
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${W}__title`,
        ref: this.titleRef
      }, this.renderTitleIcon(), this.renderTitleText(), this.renderTitleTag()), this.renderElementSlot(), this.renderToolbar()), reactCoreLibraryReexport.createElement("div", {
        className: `${W}__sub`
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${W}__title`
      }, this.renderTitleText(), this.renderTitleTag())));
    }
  }
  Q.minTitleWidth = 150;
  let Z = `${W}--wrap`;
  let X = localeContextHocWrappers.withLocaleConfig(Q);
  let J = `${urlPreviewCacheUtilityModule.componentName}-element-linear-layout`;
  class $ extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      this.containerRef = reactCoreLibraryReexport.createRef();
      this.state = {
        containerWrap: false
      };
    }
    componentDidMount() {
      let {
        wrapWidth: e
      } = this.props.element.linearLayout;
      if (this.containerRef.current && e) {
        let t = new resizeObserverPolyfill.ResizeObserver(debounceUtil_1_1.debounce(t => {
          this.setState({
            containerWrap: t[0].contentRect.width < e
          });
        }, 120, {
          leading: true
        }));
        t.observe(this.containerRef.current);
        this.containerObserver = t;
      }
    }
    componentWillUnmount() {
      if (this.containerObserver) {
        this.containerObserver.disconnect();
        this.containerObserver = null;
      }
    }
    parseOrientation(e) {
      let t = $.orientationMap[e.orientation];
      if (this.state.containerWrap) {
        if (t === "row-reverse") {
          return "column-reverse";
        } else {
          return "column";
        }
      } else {
        return t;
      }
    }
    parsePadding(e) {
      let {
        element: t
      } = this.props;
      let {
        linearLayout: n
      } = t;
      if (n.sidePadding) {
        return n.sidePadding[e];
      } else {
        return n.padding;
      }
    }
    parseStyle() {
      let {
        element: e
      } = this.props;
      let {
        containerWrap: t
      } = this.state;
      let {
        linearLayout: n
      } = e;
      return {
        flexDirection: this.parseOrientation(n),
        justifyContent: $.justifyMap[n.mainAxisJustify],
        alignItems: t ? "stretch" : $.alignMap[n.crossAxisAlign],
        paddingTop: this.parsePadding("top"),
        paddingRight: this.parsePadding("right"),
        paddingBottom: this.parsePadding("bottom"),
        paddingLeft: this.parsePadding("left")
      };
    }
    render() {
      let {
        containerWrap: e
      } = this.state;
      let {
        element: t,
        elementEntity: n
      } = this.props;
      let {
        childIds: r
      } = t;
      let {
        elements: i
      } = n;
      let {
        linearLayout: o
      } = t;
      let _ = this.parseStyle();
      let a = {};
      if (o.spacing) {
        if (e || o.orientation === errorConstantsCodes.MCT.COLUMN || o.orientation === errorConstantsCodes.MCT.COLUMN_REVERSE) {
          a.marginTop = o.spacing;
        } else if (!e) {
          a.marginLeft = o.spacing;
        }
      }
      let E = O({
        [J]: true,
        [`${J}--${_.flexDirection}`]: true,
        [`${J}--wrapped`]: e
      });
      return reactCoreLibraryReexport.createElement("div", {
        className: E,
        style: _,
        ref: this.containerRef
      }, r && i && r.map((e, t) => reactCoreLibraryReexport.createElement(b, Object.assign({}, this.props, {
        key: e,
        element: i[e],
        elementId: e,
        style: t > 0 ? a : Object.assign(Object.assign({}, a), {
          marginLeft: 0,
          marginTop: 0
        })
      }))));
    }
  }
  $.orientationMap = {
    [errorConstantsCodes.MCT.ROW]: "row",
    [errorConstantsCodes.MCT.COLUMN]: "column",
    [errorConstantsCodes.MCT.ROW_REVERSE]: "row-reverse",
    [errorConstantsCodes.MCT.COLUMN_REVERSE]: "column-reverse"
  };
  $.justifyMap = {
    [errorConstantsCodes.upw.START]: "start",
    [errorConstantsCodes.upw.CENTER]: "center",
    [errorConstantsCodes.upw.END]: "end",
    [errorConstantsCodes.upw.SPACE_BETWEEN]: "space-between",
    [errorConstantsCodes.upw.SPACE_ARROUND]: "space-around",
    [errorConstantsCodes.upw.SPACE_EVENLY]: "space-evenly"
  };
  $.alignMap = {
    [errorConstantsCodes.Mq_.TOP]: "start",
    [errorConstantsCodes.Mq_.MIDDLE]: "center",
    [errorConstantsCodes.Mq_.BOTTOM]: "end",
    [errorConstantsCodes.Mq_.STRETCH]: "stretch",
    [errorConstantsCodes.Mq_.BASELINE]: "baseline"
  };
  var selectComponent = require("select-component") /*id: 408721*/;
  let ee = `${urlPreviewCacheUtilityModule.componentName}-element-spin-button`;
  function et(e) {
    let {
      items: t,
      selectedIndex: n
    } = e.element.spinButton;
    let r = t[n];
    let [i, o] = reactCoreLibraryReexport.useState(r);
    let [_, a] = reactCoreLibraryReexport.useState(r.actionId);
    if (i.actionId !== r.actionId) {
      o(r);
      a(r.actionId);
    }
    return reactCoreLibraryReexport.createElement("div", {
      onClick: e => e.stopPropagation()
    }, reactCoreLibraryReexport.createElement(selectComponent.Select, {
      value: _,
      bordered: false,
      size: "small",
      onChange: t => {
        if (t) {
          e.doAction(t);
          a(t);
          e.trackPageClick({
            clickType: "select_item",
            componentId: e.elementId,
            actionId: t
          });
        }
      },
      allowClear: false,
      className: `${ee}__select`
    }, t.map((e, t) => reactCoreLibraryReexport.createElement(selectComponent.Select.Option, {
      key: t,
      value: e.actionId
    }, e.text))));
  }
  let en = `${urlPreviewCacheUtilityModule.componentName}-element-tag-list`;
  function er(e) {
    let {
      tags: t
    } = e.element.tagList;
    let n = e.element.style;
    let r = n ? {
      color: urlPreviewCacheUtilityModule.resolveColorValue(n.textColorV2),
      background: urlPreviewCacheUtilityModule.resolveLinearGradient(n.backgroundColor)
    } : undefined;
    return reactCoreLibraryReexport.createElement("div", {
      className: en
    }, t == null ? undefined : t.map((e, t) => reactCoreLibraryReexport.createElement("div", {
      className: `${en}__item`,
      style: r,
      key: t
    }, e)));
  }
  function ei(e) {
    e = Object.assign({}, e, {
      flexShrink: 1
    });
    delete e.background;
    return e;
  }
  function eo(e) {
    return {
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: String(e)
    };
  }
  let e_ = `${urlPreviewCacheUtilityModule.componentName}-element-text`;
  function ea(e) {
    let {
      text: n
    } = e.element;
    let r = n.numberOfLines ? eo(n.numberOfLines) : undefined;
    return reactCoreLibraryReexport.createElement("div", {
      className: O({
        [e_]: true,
        [`${e_}--clickable`]: !!n.actionId?.length
      }),
      onClick: t => {
        if (n.actionId) {
          t.stopPropagation();
          e.doAction(n.actionId);
          e.trackPageClick({
            clickType: "text",
            componentId: e.elementId
          });
        }
      },
      style: r
    }, n.text);
  }
  let eE = `${e_}__wrap`;
  (i = A ||= {})[i.UNKNOWN_URL = 0] = "UNKNOWN_URL";
  i[i.BEAR = 1] = "BEAR";
  (o = s ||= {})[o.UNKNOWN_MENTION_TYPE = 0] = "UNKNOWN_MENTION_TYPE";
  o[o.HASH_TAG = 1] = "HASH_TAG";
  var richTextElementProcessor = require("rich-text-element-processor") /*id: 386172*/;
  require("empty-module-stub_8") /*id: 917647*/;
  let ec = reactCoreLibraryReexport.lazy(() => Promise.all([require.e("user-dashboard-chunk") /*id: 75994*/, require.e("ext-info-display") /*id: 55333*/]).then(require.bind(require, "doc-last-update-info") /*id: 965717*/));
  function eT(e) {
    let {
      richText: n
    } = e;
    let r = Object.values(n.elements).filter(e => {
      return e.tag === errorConstantsCodes.HSs.A && e.property?.anchor?.specialUrl === A.BEAR;
    });
    let i = r.length === 1 ? r[0].urlPreviewHangPoint?.previewId : undefined;
    let o = richTextElementProcessor.useInlinePreviewEntity(i);
    if (o == null ? undefined : o.extInfo) {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Suspense, {
        fallback: ""
      }, reactCoreLibraryReexport.createElement(ec, {
        extInfo: o == null ? undefined : o.extInfo
      }));
    } else {
      return null;
    }
  }
  let eI = "//client/preview/action?actionID=";
  function eA(e) {
    let {
      element: i,
      elementId: o,
      doAction: _,
      trackPageClick: a,
      udFontIcon: E
    } = e;
    let {
      richtext: {
        richtext: l,
        numberOfLines: c,
        showUpdateTime: T
      }
    } = i;
    let I = reactCoreLibraryReexport.useMemo(() => Object.assign(Object.assign({}, c ? eo(c) : {}), {
      overflow: "hidden"
    }), [c]);
    return reactCoreLibraryReexport.createElement("div", {
      className: `${urlPreviewCacheUtilityModule.componentName}-element-richtext`,
      style: I
    }, reactCoreLibraryReexport.createElement(urlPreviewComponents.RichTextRenderer, {
      platform: urlPreviewCacheUtilityModule.urlPreviewManager.platform,
      udFontIcon: E,
      richText: l,
      UserProfile: urlPreviewCacheUtilityModule.urlPreviewManager.registeredComponents?.UserProfile,
      Emoji: urlPreviewCacheUtilityModule.urlPreviewManager.registeredComponents?.Emoji,
      MentionWrapper: urlPreviewCacheUtilityModule.urlPreviewManager.registeredComponents?.MentionWrapper,
      onElementClick: (e, t) => {
        if (t.tag !== errorConstantsCodes.HSs.A) {
          return;
        }
        let {
          link: n
        } = t.payload;
        if (e && n) {
          if (n.startsWith(eI)) {
            e.preventDefault();
            e.stopPropagation();
            _(n.replace(eI, ""));
          }
          if (a != null) {
            a({
              clickType: "page_click",
              componentId: o
            });
          }
        }
      }
    }), T && reactCoreLibraryReexport.createElement(eT, {
      richText: l
    }));
  }
  var loadingComponent = require("loading-component") /*id: 666260*/;
  var loadfailFilledIcon = require("loadfail-filled-icon") /*id: 741199*/;
  var globalLinkOutlinedIcon = require("global-link-outlined-icon") /*id: 70621*/;
  (_ = u ||= {})[_.INIT = 0] = "INIT";
  _[_.LOADING = 1] = "LOADING";
  _[_.SUCCESS = 2] = "SUCCESS";
  _[_.ERROR = 3] = "ERROR";
  _[_.EMPTY = 4] = "EMPTY";
  let eg = `${urlPreviewCacheUtilityModule.componentName}-element-image`;
  function eN(e) {
    let [E, l] = reactCoreLibraryReexport.useState(u.INIT);
    let c = e.element?.style || {};
    let T = e.element?.image?.udIcon;
    let {
      imageUrl: I,
      loading: A
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (A) {
        l(u.LOADING);
        return;
      }
      if (!I) {
        l(u.EMPTY);
        return;
      }
      let e = new window.Image();
      e.src = I;
      l(u.LOADING);
      e.onload = () => {
        l(u.SUCCESS);
      };
      e.onerror = () => {
        l(u.ERROR);
      };
    }, [I, A]);
    if (T) {
      let t = urlPreviewCacheUtilityModule.resolveColorValue(T.color);
      let {
        udFontIcon: n
      } = e;
      return reactCoreLibraryReexport.createElement(n, {
        icon: T.key,
        color: t,
        size: Number((c == null ? undefined : c.width)?.value) || 16
      });
    }
    let s = urlPreviewCacheUtilityModule.resolveColorValue(e.element.style?.textColorV2, true);
    if (s && I && E === u.SUCCESS) {
      return reactCoreLibraryReexport.createElement(urlPreviewComponents.ColoredSvgImage, {
        imageUrl: I,
        width: Number(c.width?.value) || 16,
        height: Number(c.height?.value) || 16,
        color: s
      });
    }
    let d = {
      minWidth: c.width ? urlPreviewCacheUtilityModule.formatLengthValue(c.width) : null,
      minHeight: c.height ? urlPreviewCacheUtilityModule.formatLengthValue(c.height) : null
    };
    if (E === u.SUCCESS) {
      d.backgroundImage = `url(${I})`;
    }
    let g = {
      [`${eg}`]: true,
      [`${eg}--gray`]: [u.LOADING, u.ERROR].includes(E)
    };
    return reactCoreLibraryReexport.createElement("div", {
      className: O(g),
      style: d
    }, E === u.LOADING && reactCoreLibraryReexport.createElement(loadingComponent.LoadingComponent, null), E === u.ERROR && reactCoreLibraryReexport.createElement(loadfailFilledIcon.LoadfailFilled, null), E === u.EMPTY && reactCoreLibraryReexport.createElement(globalLinkOutlinedIcon.GlobalLinkOutlined, null));
  }
  let eS = `${eg}__wrap`;
  let eC = `${urlPreviewCacheUtilityModule.componentName}-element-button`;
  class eL extends reactCoreLibraryReexport.PureComponent {
    constructor() {
      super(...arguments);
      this.onClickHandler = e => {
        e.stopPropagation();
        let {
          isDisable: t,
          actionId: n
        } = this.props.element.button;
        if (!t && n) {
          this.props.doAction(n);
          this.props.trackPageClick({
            clickType: "button",
            componentId: this.props.elementId
          });
        }
      };
      this.renderUdIcon = () => {
        let {
          udIcon: e
        } = this.props.element.button;
        if (!e) {
          return null;
        }
        let t = urlPreviewCacheUtilityModule.resolveColorValue(e.color);
        let {
          udFontIcon: n
        } = this.props;
        return reactCoreLibraryReexport.createElement(n, {
          icon: e.key,
          color: t
        });
      };
    }
    render() {
      let {
        text: e,
        direction: t = errorConstantsCodes.ABS.RTL,
        isDisable: n
      } = this.props.element.button;
      let r = O(eC, {
        [`${eC}--disable`]: n
      });
      let {
        image: i,
        iconUrl: o
      } = this.props;
      return reactCoreLibraryReexport.createElement("div", {
        className: r,
        onClick: this.onClickHandler
      }, t === errorConstantsCodes.ABS.RTL && reactCoreLibraryReexport.createElement("span", {
        className: `${eC}__text`
      }, e), this.renderUdIcon() || o && reactCoreLibraryReexport.createElement(i, {
        src: o
      }), t === errorConstantsCodes.ABS.LTR && reactCoreLibraryReexport.createElement("span", {
        className: `${eC}__text`
      }, e));
    }
  }
  let ep = `${eC}__wrap`;
  let eM = `${urlPreviewCacheUtilityModule.componentName}-element-icon-button`;
  class ef extends reactCoreLibraryReexport.PureComponent {
    constructor() {
      super(...arguments);
      this.onClickHandler = e => {
        e.stopPropagation();
        let {
          isDisable: t,
          actionId: n
        } = this.props.element.iconButton;
        if (!t && n) {
          this.props.doAction(n);
          this.props.trackPageClick({
            clickType: "button",
            componentId: this.props.elementId
          });
        }
      };
    }
    render() {
      let r;
      let {
        isDisable: i,
        alt: o,
        udIcon: _
      } = this.props.element.iconButton;
      let {
        style: a
      } = this.props.element;
      let E = O(eM, {
        [`${eM}--disable`]: i
      });
      if (_) {
        let t = urlPreviewCacheUtilityModule.resolveColorValue(_.color);
        let {
          udFontIcon: n
        } = this.props;
        r = reactCoreLibraryReexport.createElement(n, {
          icon: _.key,
          size: Number((a == null ? undefined : a.width)?.value) || 16,
          color: t
        });
      }
      let {
        iconUrl: l
      } = this.props;
      if (!r && !l) {
        return null;
      }
      let c = urlPreviewCacheUtilityModule.resolveColorValue(a == null ? undefined : a.textColorV2, true);
      return reactCoreLibraryReexport.createElement(tooltipComponentModule.TooltipComponent, {
        title: o
      }, reactCoreLibraryReexport.createElement("div", {
        className: E,
        onClick: this.onClickHandler
      }, reactCoreLibraryReexport.createElement(iconButtonComponent.IconButton, {
        icon: r || reactCoreLibraryReexport.createElement(urlPreviewComponents.ColoredSvgImage, {
          imageUrl: l,
          width: Number((a == null ? undefined : a.width)?.value) || 16,
          height: Number((a == null ? undefined : a.height)?.value) || 16,
          color: c || undefined
        }),
        size: "small"
      })));
    }
  }
  function eO(e) {
    e = Object.assign({}, e);
    delete e.height;
    delete e.width;
    return e;
  }
  var appConfigExtendedInitializer = require("app-config-extended-initializer") /*id: 806887*/;
  var reactHookUtilities = require("react-hook-utilities") /*id: 306319*/;
  (a = d ||= {}).message = "message-doc-preview";
  a.trigger = "trigger-doc-preview";
  (E = g ||= {})[E.UNKNOWN = 0] = "UNKNOWN";
  E[E.DOC = 1] = "DOC";
  E[E.SHEET = 2] = "SHEET";
  E[E.BITABLE = 3] = "BITABLE";
  E[E.MINDNOTE = 4] = "MINDNOTE";
  E[E.FILE = 5] = "FILE";
  E[E.SLIDE = 6] = "SLIDE";
  (l = N ||= {})[l.NORMAL = 1000] = "NORMAL";
  l[l.BLANK = 9009] = "BLANK";
  l[l.DELETED = 9010] = "DELETED";
  require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var eP = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDAwcHgiIGhlaWdodD0iMjA0cHgiIHZpZXdCb3g9IjAgMCA0MDAgMjA0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Ny4xICg4MzA4OCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+6KOC5Zu+5aSnPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IuijguWbvuWkpyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDQiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0iaWNvbl9wbGFjZWhvbGRlcl9JbWFnZS1mYWlsZWQtdG8tbG9hZF9ub3IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4NC4wMDAwMDAsIDg2LjAwMDAwMCkiIGZpbGw9IiM5Q0EyQTkiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjAuNzQzNzI0MSwyLjIwNjg5NjU1IEwxOS40NDk5MzEsNC40MTM3OTMxIEwyLjIwNjg5NjU1LDQuNDEzNzkzMSBMMi4yMDY4OTY1NSwxNy4xMDM0NDgzIEw3LjQ5NTcyNDE0LDExLjgxNDYyMDcgQzcuODk1ODQyMzYsMTEuNDE0NTAyNSA4LjUyNjY4NTQzLDExLjM4NTkyMjYgOC45NTk3NjQzNSwxMS43Mjg4ODExIEw5LjA1NiwxMS44MTQ2MjA3IEwxMi44NzM5MzEsMTUuNjMyNTUxNyBMNC41NzI2ODk2NiwyOS43OTMxMDM0IEwxLjEwMzQ0ODI4LDI5Ljc5MzEwMzQgQzAuNTM0OTUxNzI0LDI5Ljc5MzEwMzQgMC4wNjY0MjI2ODIsMjkuMzYyOTU0OCAwLjAwNjQ3ODc5NDM4LDI4LjgwOTkyOTQgTC0yLjEzMTYyODIxZS0xNCwyOC42ODk2NTUyIEwtMi4xMzE2MjgyMWUtMTQsMy4zMTAzNDQ4MyBDLTIuMTMxNjI4MjFlLTE0LDIuNzQxODQ4MjggMC40MzA2MjkyNzIsMi4yNzMzMTkyMyAwLjk4MzI3MDE3MSwyLjIxMzM3NTM1IEwxLjEwMzQ0ODI4LDIuMjA2ODk2NTUgTDIwLjc0MzcyNDEsMi4yMDY4OTY1NSBaIE0zMC44OTY1NTE3LDIuMjA2ODk2NTUgQzMxLjUwNTY1NTIsMi4yMDY4OTY1NSAzMiwyLjcwMTI0MTM4IDMyLDMuMzEwMzQ0ODMgTDMyLDMuMzEwMzQ0ODMgTDMyLDI4LjY4OTY1NTIgQzMyLDI5LjI5ODc1ODYgMzEuNTA1NjU1MiwyOS43OTMxMDM0IDMwLjg5NjU1MTcsMjkuNzkzMTAzNCBMMzAuODk2NTUxNywyOS43OTMxMDM0IEw5LjA0ODgyNzU5LDI5Ljc5MzEwMzQgTDE1LjY5NiwxOC40NTQ2MjA3IEwxOS44NjIwNjksMjIuNjIwNjg5NyBMMjQuNTk5MTcyNCwxNy44ODM1ODYyIEMyNS4wMzAwNjksMTcuNDUyNjg5NyAyNS43Mjg1NTE3LDE3LjQ1MjY4OTcgMjYuMTU5NDQ4MywxNy44ODM1ODYyIEwyNi4xNTk0NDgzLDE3Ljg4MzU4NjIgTDI5Ljc5MzEwMzQsMjEuNTE3MjQxNCBMMjkuNzkzMTAzNCw0LjQxMzc5MzEgTDIzLjkyNjYyMDcsNC40MTM3OTMxIEwyNS4yMjA0MTM4LDIuMjA2ODk2NTUgWiBNMjQuODI3NTg2Miw2LjYyMDY4OTY2IEMyNi4zNTE0NDgzLDYuNjIwNjg5NjYgMjcuNTg2MjA2OSw3Ljg1NTQ0ODI4IDI3LjU4NjIwNjksOS4zNzkzMTAzNCBDMjcuNTg2MjA2OSwxMC45MDMxNzI0IDI2LjM1MTQ0ODMsMTIuMTM3OTMxIDI0LjgyNzU4NjIsMTIuMTM3OTMxIEMyMy4zMDM3MjQxLDEyLjEzNzkzMSAyMi4wNjg5NjU1LDEwLjkwMzE3MjQgMjIuMDY4OTY1NSw5LjM3OTMxMDM0IEMyMi4wNjg5NjU1LDcuODU1NDQ4MjggMjMuMzAzNzI0MSw2LjYyMDY4OTY2IDI0LjgyNzU4NjIsNi42MjA2ODk2NiBaIiBpZD0i5b2i54q257uT5ZCIIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
  var em = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDAwcHgiIGhlaWdodD0iMjA0cHgiIHZpZXdCb3g9IjAgMCA0MDAgMjA0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1OS4xICg4NjE0NCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+cGMtbGFyay3lpKflm77oi7Hmloc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMi4zMTUzNzUzLDAgTDI0LjA1Nzk2MzMsMCBDMjQuNDY3MzQ3MSwtMS4wMjQ0NTg5MmUtMTUgMjQuODU5OTYzNiwwLjE2MjYyNzA4NCAyNS4xNDk0NDE3LDAuNDUyMTA1MTUgTDMzLjUwNjczMjYsOC44MDkzOTYwNiBDMzMuNzk2MjEwNyw5LjA5ODg3NDEzIDMzLjk1ODgzNzgsOS40OTE0OTA2NCAzMy45NTg4Mzc4LDkuOTAwODc0NDUgTDMzLjk1ODgzNzgsNDAuOTA0OTYzNyBDMzMuOTU4ODM3OCw0Mi4xODM3MTAyIDMyLjkyMjIwODksNDMuMjIwMzM5IDMxLjY0MzQ2MjUsNDMuMjIwMzM5IEwyLjMxNTM3NTMsNDMuMjIwMzM5IEMxLjAzNjYyODgzLDQzLjIyMDMzOSAzLjI0MzU2NTQyZS0xNSw0Mi4xODM3MTAyIDAsNDAuOTA0OTYzNyBMMCwyLjMxNTM3NTMgQy0xLjU2NjAxMjc3ZS0xNiwxLjAzNjYyODgzIDEuMDM2NjI4ODMsLTYuNTMyNzY1MDRlLTE2IDIuMzE1Mzc1MywwIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJwYy1sYXJrLeWkp+WbvuiLseaWhyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDQiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0ibmV0d29yay1lcnJvci1ub3JtYWxfY29weSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDQiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9Iue8lue7hCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU0LjAwMDAwMCwgNjYuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uX2ZpbGVfZG9jX25vciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjkuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Imljb25fYmx1ZV8yOCI+CiAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iI0RFRTBFMyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNC42OTczMzY2LC0xLjU0MzU4MzU0IEwzNS41MDI0MjEzLDkuMjYxNTAxMjEgTDI3LjAxMjcxMTksOS4yNjE1MDEyMSBDMjUuNzMzOTY1NCw5LjI2MTUwMTIxIDI0LjY5NzMzNjYsOC4yMjQ4NzIzOCAyNC42OTczMzY2LDYuOTQ2MTI1OTEgTDI0LjY5NzMzNjYsLTEuNTQzNTgzNTQgTDI0LjY5NzMzNjYsLTEuNTQzNTgzNTQgWiIgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0JCQkZDNCIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IuefqeW9oiIgcG9pbnRzPSI0LjYzMDc1MDYxIDEzLjg5MjI1MTggMjkuMzI4MDg3MiAxMy44OTIyNTE4IDI5LjMyODA4NzIgMzguNTg5NTg4NCA0LjYzMDc1MDYxIDM4LjU4OTU4ODQiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC4yMTQyODU3LDMyLjQxNTI1NDIgQzE4LjM4NDc4NTIsMzIuNDE1MjU0MiAxOC41MjMwMDI0LDMyLjU1MzQ3MTQgMTguNTIzMDAyNCwzMi43MjM5NzA5IEwxOC41MjMwMDI0LDM0LjQyMTkxMjggQzE4LjUyMzAwMjQsMzQuNTkyNDEyNCAxOC4zODQ3ODUyLDM0LjczMDYyOTUgMTguMjE0Mjg1NywzNC43MzA2Mjk1IEw4LjAyNjYzNDM4LDM0LjczMDYyOTUgQzcuODU2MTM0ODUsMzQuNzMwNjI5NSA3LjcxNzkxNzY4LDM0LjU5MjQxMjQgNy43MTc5MTc2OCwzNC40MjE5MTI4IEw3LjcxNzkxNzY4LDMyLjcyMzk3MDkgQzcuNzE3OTE3NjgsMzIuNTUzNDcxNCA3Ljg1NjEzNDg1LDMyLjQxNTI1NDIgOC4wMjY2MzQzOCwzMi40MTUyNTQyIEwxOC4yMTQyODU3LDMyLjQxNTI1NDIgWiBNMjUuOTMyMjAzNCwyNS40NjkxMjgzIEMyNi4xMDI3MDI5LDI1LjQ2OTEyODMgMjYuMjQwOTIwMSwyNS42MDczNDU1IDI2LjI0MDkyMDEsMjUuNzc3ODQ1IEwyNi4yNDA5MjAxLDI3LjQ3NTc4NjkgQzI2LjI0MDkyMDEsMjcuNjQ2Mjg2NSAyNi4xMDI3MDI5LDI3Ljc4NDUwMzYgMjUuOTMyMjAzNCwyNy43ODQ1MDM2IEw4LjAyNjYzNDM4LDI3Ljc4NDUwMzYgQzcuODU2MTM0ODUsMjcuNzg0NTAzNiA3LjcxNzkxNzY4LDI3LjY0NjI4NjUgNy43MTc5MTc2OCwyNy40NzU3ODY5IEw3LjcxNzkxNzY4LDI1Ljc3Nzg0NSBDNy43MTc5MTc2OCwyNS42MDczNDU1IDcuODU2MTM0ODUsMjUuNDY5MTI4MyA4LjAyNjYzNDM4LDI1LjQ2OTEyODMgTDI1LjkzMjIwMzQsMjUuNDY5MTI4MyBaIE0yNS45MzIyMDM0LDE4LjUyMzAwMjQgQzI2LjEwMjcwMjksMTguNTIzMDAyNCAyNi4yNDA5MjAxLDE4LjY2MTIxOTYgMjYuMjQwOTIwMSwxOC44MzE3MTkxIEwyNi4yNDA5MjAxLDIwLjUyOTY2MSBDMjYuMjQwOTIwMSwyMC43MDAxNjA1IDI2LjEwMjcwMjksMjAuODM4Mzc3NyAyNS45MzIyMDM0LDIwLjgzODM3NzcgTDguMDI2NjM0MzgsMjAuODM4Mzc3NyBDNy44NTYxMzQ4NSwyMC44MzgzNzc3IDcuNzE3OTE3NjgsMjAuNzAwMTYwNSA3LjcxNzkxNzY4LDIwLjUyOTY2MSBMNy43MTc5MTc2OCwxOC44MzE3MTkxIEM3LjcxNzkxNzY4LDE4LjY2MTIxOTYgNy44NTYxMzQ4NSwxOC41MjMwMDI0IDguMDI2NjM0MzgsMTguNTIzMDAyNCBMMjUuOTMyMjAzNCwxOC41MjMwMDI0IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDx0ZXh0IGlkPSJCbGFuay1Eb2N1bWVudCIgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZpbGw9IiM2NDZBNzMiPgogICAgICAgICAgICAgICAgPHRzcGFuIHg9IjAiIHk9IjYyIj5CbGFuayBEb2N1bWVudDwvdHNwYW4+CiAgICAgICAgICAgIDwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
  var eU = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjU4cHgiIGhlaWdodD0iMTk1cHgiIHZpZXdCb3g9IjAgMCAyNTggMTk1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1OS4xICg4NjE0NCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+cGMtbGFyay3lsI/lm77oi7Hmloc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMi4zMTUzNzUzLDAgTDI0LjA1Nzk2MzMsMCBDMjQuNDY3MzQ3MSwtMS4wMjQ0NTg5MmUtMTUgMjQuODU5OTYzNiwwLjE2MjYyNzA4NCAyNS4xNDk0NDE3LDAuNDUyMTA1MTUgTDMzLjUwNjczMjYsOC44MDkzOTYwNiBDMzMuNzk2MjEwNyw5LjA5ODg3NDEzIDMzLjk1ODgzNzgsOS40OTE0OTA2NCAzMy45NTg4Mzc4LDkuOTAwODc0NDUgTDMzLjk1ODgzNzgsNDAuOTA0OTYzNyBDMzMuOTU4ODM3OCw0Mi4xODM3MTAyIDMyLjkyMjIwODksNDMuMjIwMzM5IDMxLjY0MzQ2MjUsNDMuMjIwMzM5IEwyLjMxNTM3NTMsNDMuMjIwMzM5IEMxLjAzNjYyODgzLDQzLjIyMDMzOSAzLjI0MzU2NTQyZS0xNSw0Mi4xODM3MTAyIDAsNDAuOTA0OTYzNyBMMCwyLjMxNTM3NTMgQy0xLjU2NjAxMjc3ZS0xNiwxLjAzNjYyODgzIDEuMDM2NjI4ODMsLTYuNTMyNzY1MDRlLTE2IDIuMzE1Mzc1MywwIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJwYy1sYXJrLeWwj+WbvuiLseaWhyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjI1OCIgaGVpZ2h0PSIxOTUiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0iaWNvbl9maWxlX2RvY19ub3IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMi4wMDAwMDAsIDYyLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbl9ibHVlXzI4Ij4KICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iI0RFRTBFMyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LjY5NzMzNjYsLTEuNTQzNTgzNTQgTDM1LjUwMjQyMTMsOS4yNjE1MDEyMSBMMjcuMDEyNzExOSw5LjI2MTUwMTIxIEMyNS43MzM5NjU0LDkuMjYxNTAxMjEgMjQuNjk3MzM2Niw4LjIyNDg3MjM4IDI0LjY5NzMzNjYsNi45NDYxMjU5MSBMMjQuNjk3MzM2NiwtMS41NDM1ODM1NCBMMjQuNjk3MzM2NiwtMS41NDM1ODM1NCBaIiBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjQkJCRkM0IiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8cG9seWdvbiBpZD0i55+p5b2iIiBwb2ludHM9IjQuNjMwNzUwNjEgMTMuODkyMjUxOCAyOS4zMjgwODcyIDEzLjg5MjI1MTggMjkuMzI4MDg3MiAzOC41ODk1ODg0IDQuNjMwNzUwNjEgMzguNTg5NTg4NCI+PC9wb2x5Z29uPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjE0Mjg1NywzMi40MTUyNTQyIEMxOC4zODQ3ODUyLDMyLjQxNTI1NDIgMTguNTIzMDAyNCwzMi41NTM0NzE0IDE4LjUyMzAwMjQsMzIuNzIzOTcwOSBMMTguNTIzMDAyNCwzNC40MjE5MTI4IEMxOC41MjMwMDI0LDM0LjU5MjQxMjQgMTguMzg0Nzg1MiwzNC43MzA2Mjk1IDE4LjIxNDI4NTcsMzQuNzMwNjI5NSBMOC4wMjY2MzQzOCwzNC43MzA2Mjk1IEM3Ljg1NjEzNDg1LDM0LjczMDYyOTUgNy43MTc5MTc2OCwzNC41OTI0MTI0IDcuNzE3OTE3NjgsMzQuNDIxOTEyOCBMNy43MTc5MTc2OCwzMi43MjM5NzA5IEM3LjcxNzkxNzY4LDMyLjU1MzQ3MTQgNy44NTYxMzQ4NSwzMi40MTUyNTQyIDguMDI2NjM0MzgsMzIuNDE1MjU0MiBMMTguMjE0Mjg1NywzMi40MTUyNTQyIFogTTI1LjkzMjIwMzQsMjUuNDY5MTI4MyBDMjYuMTAyNzAyOSwyNS40NjkxMjgzIDI2LjI0MDkyMDEsMjUuNjA3MzQ1NSAyNi4yNDA5MjAxLDI1Ljc3Nzg0NSBMMjYuMjQwOTIwMSwyNy40NzU3ODY5IEMyNi4yNDA5MjAxLDI3LjY0NjI4NjUgMjYuMTAyNzAyOSwyNy43ODQ1MDM2IDI1LjkzMjIwMzQsMjcuNzg0NTAzNiBMOC4wMjY2MzQzOCwyNy43ODQ1MDM2IEM3Ljg1NjEzNDg1LDI3Ljc4NDUwMzYgNy43MTc5MTc2OCwyNy42NDYyODY1IDcuNzE3OTE3NjgsMjcuNDc1Nzg2OSBMNy43MTc5MTc2OCwyNS43Nzc4NDUgQzcuNzE3OTE3NjgsMjUuNjA3MzQ1NSA3Ljg1NjEzNDg1LDI1LjQ2OTEyODMgOC4wMjY2MzQzOCwyNS40NjkxMjgzIEwyNS45MzIyMDM0LDI1LjQ2OTEyODMgWiBNMjUuOTMyMjAzNCwxOC41MjMwMDI0IEMyNi4xMDI3MDI5LDE4LjUyMzAwMjQgMjYuMjQwOTIwMSwxOC42NjEyMTk2IDI2LjI0MDkyMDEsMTguODMxNzE5MSBMMjYuMjQwOTIwMSwyMC41Mjk2NjEgQzI2LjI0MDkyMDEsMjAuNzAwMTYwNSAyNi4xMDI3MDI5LDIwLjgzODM3NzcgMjUuOTMyMjAzNCwyMC44MzgzNzc3IEw4LjAyNjYzNDM4LDIwLjgzODM3NzcgQzcuODU2MTM0ODUsMjAuODM4Mzc3NyA3LjcxNzkxNzY4LDIwLjcwMDE2MDUgNy43MTc5MTc2OCwyMC41Mjk2NjEgTDcuNzE3OTE3NjgsMTguODMxNzE5MSBDNy43MTc5MTc2OCwxOC42NjEyMTk2IDcuODU2MTM0ODUsMTguNTIzMDAyNCA4LjAyNjYzNDM4LDE4LjUyMzAwMjQgTDI1LjkzMjIwMzQsMTguNTIzMDAyNCBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgaWQ9IkJsYW5rLURvY3VtZW50IiBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgZmlsbD0iIzY0NkE3MyI+CiAgICAgICAgICAgIDx0c3BhbiB4PSI4MyIgeT0iMTI0Ij5CbGFuayBEb2N1bWVudDwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgPC9nPgo8L3N2Zz4=";
  var eb = require.p + "static/svg/deleted-normal.1a142eee.svg";
  var ev = require.p + "static/svg/deleted-trigger.72abbc31.svg";
  let ey = {
    [N.BLANK]: {
      [d.message]: {
        en_US: em,
        zh_CN: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDAwcHgiIGhlaWdodD0iMjA0cHgiIHZpZXdCb3g9IjAgMCA0MDAgMjA0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1OS4xICg4NjE0NCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+cGMtbGFyay3lpKflm77kuK3mloc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMi4zMTUzNzUzLDAgTDI0LjA1Nzk2MzMsMCBDMjQuNDY3MzQ3MSwtMS4wMjQ0NTg5MmUtMTUgMjQuODU5OTYzNiwwLjE2MjYyNzA4NCAyNS4xNDk0NDE3LDAuNDUyMTA1MTUgTDMzLjUwNjczMjYsOC44MDkzOTYwNiBDMzMuNzk2MjEwNyw5LjA5ODg3NDEzIDMzLjk1ODgzNzgsOS40OTE0OTA2NCAzMy45NTg4Mzc4LDkuOTAwODc0NDUgTDMzLjk1ODgzNzgsNDAuOTA0OTYzNyBDMzMuOTU4ODM3OCw0Mi4xODM3MTAyIDMyLjkyMjIwODksNDMuMjIwMzM5IDMxLjY0MzQ2MjUsNDMuMjIwMzM5IEwyLjMxNTM3NTMsNDMuMjIwMzM5IEMxLjAzNjYyODgzLDQzLjIyMDMzOSAzLjI0MzU2NTQyZS0xNSw0Mi4xODM3MTAyIDAsNDAuOTA0OTYzNyBMMCwyLjMxNTM3NTMgQy0xLjU2NjAxMjc3ZS0xNiwxLjAzNjYyODgzIDEuMDM2NjI4ODMsLTYuNTMyNzY1MDRlLTE2IDIuMzE1Mzc1MywwIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJwYy1sYXJrLeWkp+WbvuS4reaWhyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDQiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0ibmV0d29yay1lcnJvci1ub3JtYWxfY29weSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDQiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9Iue8lue7hCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTc2LjAwMDAwMCwgNjYuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uX2ZpbGVfZG9jX25vciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbl9ibHVlXzI4Ij4KICAgICAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSJNYXNrIiBmaWxsPSIjREVFMEUzIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LjY5NzMzNjYsLTEuNTQzNTgzNTQgTDM1LjUwMjQyMTMsOS4yNjE1MDEyMSBMMjcuMDEyNzExOSw5LjI2MTUwMTIxIEMyNS43MzM5NjU0LDkuMjYxNTAxMjEgMjQuNjk3MzM2Niw4LjIyNDg3MjM4IDI0LjY5NzMzNjYsNi45NDYxMjU5MSBMMjQuNjk3MzM2NiwtMS41NDM1ODM1NCBMMjQuNjk3MzM2NiwtMS41NDM1ODM1NCBaIiBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjQkJCRkM0IiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0i55+p5b2iIiBwb2ludHM9IjQuNjMwNzUwNjEgMTMuODkyMjUxOCAyOS4zMjgwODcyIDEzLjg5MjI1MTggMjkuMzI4MDg3MiAzOC41ODk1ODg0IDQuNjMwNzUwNjEgMzguNTg5NTg4NCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LjIxNDI4NTcsMzIuNDE1MjU0MiBDMTguMzg0Nzg1MiwzMi40MTUyNTQyIDE4LjUyMzAwMjQsMzIuNTUzNDcxNCAxOC41MjMwMDI0LDMyLjcyMzk3MDkgTDE4LjUyMzAwMjQsMzQuNDIxOTEyOCBDMTguNTIzMDAyNCwzNC41OTI0MTI0IDE4LjM4NDc4NTIsMzQuNzMwNjI5NSAxOC4yMTQyODU3LDM0LjczMDYyOTUgTDguMDI2NjM0MzgsMzQuNzMwNjI5NSBDNy44NTYxMzQ4NSwzNC43MzA2Mjk1IDcuNzE3OTE3NjgsMzQuNTkyNDEyNCA3LjcxNzkxNzY4LDM0LjQyMTkxMjggTDcuNzE3OTE3NjgsMzIuNzIzOTcwOSBDNy43MTc5MTc2OCwzMi41NTM0NzE0IDcuODU2MTM0ODUsMzIuNDE1MjU0MiA4LjAyNjYzNDM4LDMyLjQxNTI1NDIgTDE4LjIxNDI4NTcsMzIuNDE1MjU0MiBaIE0yNS45MzIyMDM0LDI1LjQ2OTEyODMgQzI2LjEwMjcwMjksMjUuNDY5MTI4MyAyNi4yNDA5MjAxLDI1LjYwNzM0NTUgMjYuMjQwOTIwMSwyNS43Nzc4NDUgTDI2LjI0MDkyMDEsMjcuNDc1Nzg2OSBDMjYuMjQwOTIwMSwyNy42NDYyODY1IDI2LjEwMjcwMjksMjcuNzg0NTAzNiAyNS45MzIyMDM0LDI3Ljc4NDUwMzYgTDguMDI2NjM0MzgsMjcuNzg0NTAzNiBDNy44NTYxMzQ4NSwyNy43ODQ1MDM2IDcuNzE3OTE3NjgsMjcuNjQ2Mjg2NSA3LjcxNzkxNzY4LDI3LjQ3NTc4NjkgTDcuNzE3OTE3NjgsMjUuNzc3ODQ1IEM3LjcxNzkxNzY4LDI1LjYwNzM0NTUgNy44NTYxMzQ4NSwyNS40NjkxMjgzIDguMDI2NjM0MzgsMjUuNDY5MTI4MyBMMjUuOTMyMjAzNCwyNS40NjkxMjgzIFogTTI1LjkzMjIwMzQsMTguNTIzMDAyNCBDMjYuMTAyNzAyOSwxOC41MjMwMDI0IDI2LjI0MDkyMDEsMTguNjYxMjE5NiAyNi4yNDA5MjAxLDE4LjgzMTcxOTEgTDI2LjI0MDkyMDEsMjAuNTI5NjYxIEMyNi4yNDA5MjAxLDIwLjcwMDE2MDUgMjYuMTAyNzAyOSwyMC44MzgzNzc3IDI1LjkzMjIwMzQsMjAuODM4Mzc3NyBMOC4wMjY2MzQzOCwyMC44MzgzNzc3IEM3Ljg1NjEzNDg1LDIwLjgzODM3NzcgNy43MTc5MTc2OCwyMC43MDAxNjA1IDcuNzE3OTE3NjgsMjAuNTI5NjYxIEw3LjcxNzkxNzY4LDE4LjgzMTcxOTEgQzcuNzE3OTE3NjgsMTguNjYxMjE5NiA3Ljg1NjEzNDg1LDE4LjUyMzAwMjQgOC4wMjY2MzQzOCwxOC41MjMwMDI0IEwyNS45MzIyMDM0LDE4LjUyMzAwMjQgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHRleHQgaWQ9IuepuueZveaWh+ahoyIgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZpbGw9IiM2NDZBNzMiPgogICAgICAgICAgICAgICAgPHRzcGFuIHg9IjAiIHk9IjYyIj7nqbrnmb3mlofmoaM8L3RzcGFuPgogICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",
        ja_JP: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDAwcHgiIGhlaWdodD0iMjA0cHgiIHZpZXdCb3g9IjAgMCA0MDAgMjA0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1OS4xICg4NjE0NCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+cGMtbGFyay3lpKflm77ml6Xmloc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMi4zMTUzNzUzLDAgTDI0LjA1Nzk2MzMsMCBDMjQuNDY3MzQ3MSwtMS4wMjQ0NTg5MmUtMTUgMjQuODU5OTYzNiwwLjE2MjYyNzA4NCAyNS4xNDk0NDE3LDAuNDUyMTA1MTUgTDMzLjUwNjczMjYsOC44MDkzOTYwNiBDMzMuNzk2MjEwNyw5LjA5ODg3NDEzIDMzLjk1ODgzNzgsOS40OTE0OTA2NCAzMy45NTg4Mzc4LDkuOTAwODc0NDUgTDMzLjk1ODgzNzgsNDAuOTA0OTYzNyBDMzMuOTU4ODM3OCw0Mi4xODM3MTAyIDMyLjkyMjIwODksNDMuMjIwMzM5IDMxLjY0MzQ2MjUsNDMuMjIwMzM5IEwyLjMxNTM3NTMsNDMuMjIwMzM5IEMxLjAzNjYyODgzLDQzLjIyMDMzOSAzLjI0MzU2NTQyZS0xNSw0Mi4xODM3MTAyIDAsNDAuOTA0OTYzNyBMMCwyLjMxNTM3NTMgQy0xLjU2NjAxMjc3ZS0xNiwxLjAzNjYyODgzIDEuMDM2NjI4ODMsLTYuNTMyNzY1MDRlLTE2IDIuMzE1Mzc1MywwIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJwYy1sYXJrLeWkp+WbvuaXpeaWhyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDQiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0ibmV0d29yay1lcnJvci1ub3JtYWxfY29weSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDQiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9Iue8lue7hCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcwLjAwMDAwMCwgNjYuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uX2ZpbGVfZG9jX25vciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Imljb25fYmx1ZV8yOCI+CiAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iI0RFRTBFMyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNC42OTczMzY2LC0xLjU0MzU4MzU0IEwzNS41MDI0MjEzLDkuMjYxNTAxMjEgTDI3LjAxMjcxMTksOS4yNjE1MDEyMSBDMjUuNzMzOTY1NCw5LjI2MTUwMTIxIDI0LjY5NzMzNjYsOC4yMjQ4NzIzOCAyNC42OTczMzY2LDYuOTQ2MTI1OTEgTDI0LjY5NzMzNjYsLTEuNTQzNTgzNTQgTDI0LjY5NzMzNjYsLTEuNTQzNTgzNTQgWiIgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0JCQkZDNCIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IuefqeW9oiIgcG9pbnRzPSI0LjYzMDc1MDYxIDEzLjg5MjI1MTggMjkuMzI4MDg3MiAxMy44OTIyNTE4IDI5LjMyODA4NzIgMzguNTg5NTg4NCA0LjYzMDc1MDYxIDM4LjU4OTU4ODQiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC4yMTQyODU3LDMyLjQxNTI1NDIgQzE4LjM4NDc4NTIsMzIuNDE1MjU0MiAxOC41MjMwMDI0LDMyLjU1MzQ3MTQgMTguNTIzMDAyNCwzMi43MjM5NzA5IEwxOC41MjMwMDI0LDM0LjQyMTkxMjggQzE4LjUyMzAwMjQsMzQuNTkyNDEyNCAxOC4zODQ3ODUyLDM0LjczMDYyOTUgMTguMjE0Mjg1NywzNC43MzA2Mjk1IEw4LjAyNjYzNDM4LDM0LjczMDYyOTUgQzcuODU2MTM0ODUsMzQuNzMwNjI5NSA3LjcxNzkxNzY4LDM0LjU5MjQxMjQgNy43MTc5MTc2OCwzNC40MjE5MTI4IEw3LjcxNzkxNzY4LDMyLjcyMzk3MDkgQzcuNzE3OTE3NjgsMzIuNTUzNDcxNCA3Ljg1NjEzNDg1LDMyLjQxNTI1NDIgOC4wMjY2MzQzOCwzMi40MTUyNTQyIEwxOC4yMTQyODU3LDMyLjQxNTI1NDIgWiBNMjUuOTMyMjAzNCwyNS40NjkxMjgzIEMyNi4xMDI3MDI5LDI1LjQ2OTEyODMgMjYuMjQwOTIwMSwyNS42MDczNDU1IDI2LjI0MDkyMDEsMjUuNzc3ODQ1IEwyNi4yNDA5MjAxLDI3LjQ3NTc4NjkgQzI2LjI0MDkyMDEsMjcuNjQ2Mjg2NSAyNi4xMDI3MDI5LDI3Ljc4NDUwMzYgMjUuOTMyMjAzNCwyNy43ODQ1MDM2IEw4LjAyNjYzNDM4LDI3Ljc4NDUwMzYgQzcuODU2MTM0ODUsMjcuNzg0NTAzNiA3LjcxNzkxNzY4LDI3LjY0NjI4NjUgNy43MTc5MTc2OCwyNy40NzU3ODY5IEw3LjcxNzkxNzY4LDI1Ljc3Nzg0NSBDNy43MTc5MTc2OCwyNS42MDczNDU1IDcuODU2MTM0ODUsMjUuNDY5MTI4MyA4LjAyNjYzNDM4LDI1LjQ2OTEyODMgTDI1LjkzMjIwMzQsMjUuNDY5MTI4MyBaIE0yNS45MzIyMDM0LDE4LjUyMzAwMjQgQzI2LjEwMjcwMjksMTguNTIzMDAyNCAyNi4yNDA5MjAxLDE4LjY2MTIxOTYgMjYuMjQwOTIwMSwxOC44MzE3MTkxIEwyNi4yNDA5MjAxLDIwLjUyOTY2MSBDMjYuMjQwOTIwMSwyMC43MDAxNjA1IDI2LjEwMjcwMjksMjAuODM4Mzc3NyAyNS45MzIyMDM0LDIwLjgzODM3NzcgTDguMDI2NjM0MzgsMjAuODM4Mzc3NyBDNy44NTYxMzQ4NSwyMC44MzgzNzc3IDcuNzE3OTE3NjgsMjAuNzAwMTYwNSA3LjcxNzkxNzY4LDIwLjUyOTY2MSBMNy43MTc5MTc2OCwxOC44MzE3MTkxIEM3LjcxNzkxNzY4LDE4LjY2MTIxOTYgNy44NTYxMzQ4NSwxOC41MjMwMDI0IDguMDI2NjM0MzgsMTguNTIzMDAyNCBMMjUuOTMyMjAzNCwxOC41MjMwMDI0IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDx0ZXh0IGlkPSLnmb3ntJnjga7mlofmm7giIGZvbnQtZmFtaWx5PSJQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0ibm9ybWFsIiBmaWxsPSIjNjQ2QTczIj4KICAgICAgICAgICAgICAgIDx0c3BhbiB4PSIwIiB5PSI2MiI+55m957SZ44Gu5paH5pu4PC90c3Bhbj4KICAgICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
        default: em
      },
      [d.trigger]: {
        en_US: eU,
        zh_CN: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjU4cHgiIGhlaWdodD0iMTk1cHgiIHZpZXdCb3g9IjAgMCAyNTggMTk1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1OS4xICg4NjE0NCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+cGMtbGFyay3lsI/lm77kuK3mloc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMi4zMTUzNzUzLDAgTDI0LjA1Nzk2MzMsMCBDMjQuNDY3MzQ3MSwtMS4wMjQ0NTg5MmUtMTUgMjQuODU5OTYzNiwwLjE2MjYyNzA4NCAyNS4xNDk0NDE3LDAuNDUyMTA1MTUgTDMzLjUwNjczMjYsOC44MDkzOTYwNiBDMzMuNzk2MjEwNyw5LjA5ODg3NDEzIDMzLjk1ODgzNzgsOS40OTE0OTA2NCAzMy45NTg4Mzc4LDkuOTAwODc0NDUgTDMzLjk1ODgzNzgsNDAuOTA0OTYzNyBDMzMuOTU4ODM3OCw0Mi4xODM3MTAyIDMyLjkyMjIwODksNDMuMjIwMzM5IDMxLjY0MzQ2MjUsNDMuMjIwMzM5IEwyLjMxNTM3NTMsNDMuMjIwMzM5IEMxLjAzNjYyODgzLDQzLjIyMDMzOSAzLjI0MzU2NTQyZS0xNSw0Mi4xODM3MTAyIDAsNDAuOTA0OTYzNyBMMCwyLjMxNTM3NTMgQy0xLjU2NjAxMjc3ZS0xNiwxLjAzNjYyODgzIDEuMDM2NjI4ODMsLTYuNTMyNzY1MDRlLTE2IDIuMzE1Mzc1MywwIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJwYy1sYXJrLeWwj+WbvuS4reaWhyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjI1OCIgaGVpZ2h0PSIxOTUiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0iaWNvbl9maWxlX2RvY19ub3IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMi4wMDAwMDAsIDYyLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbl9ibHVlXzI4Ij4KICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iI0RFRTBFMyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LjY5NzMzNjYsLTEuNTQzNTgzNTQgTDM1LjUwMjQyMTMsOS4yNjE1MDEyMSBMMjcuMDEyNzExOSw5LjI2MTUwMTIxIEMyNS43MzM5NjU0LDkuMjYxNTAxMjEgMjQuNjk3MzM2Niw4LjIyNDg3MjM4IDI0LjY5NzMzNjYsNi45NDYxMjU5MSBMMjQuNjk3MzM2NiwtMS41NDM1ODM1NCBMMjQuNjk3MzM2NiwtMS41NDM1ODM1NCBaIiBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjQkJCRkM0IiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8cG9seWdvbiBpZD0i55+p5b2iIiBwb2ludHM9IjQuNjMwNzUwNjEgMTMuODkyMjUxOCAyOS4zMjgwODcyIDEzLjg5MjI1MTggMjkuMzI4MDg3MiAzOC41ODk1ODg0IDQuNjMwNzUwNjEgMzguNTg5NTg4NCI+PC9wb2x5Z29uPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjE0Mjg1NywzMi40MTUyNTQyIEMxOC4zODQ3ODUyLDMyLjQxNTI1NDIgMTguNTIzMDAyNCwzMi41NTM0NzE0IDE4LjUyMzAwMjQsMzIuNzIzOTcwOSBMMTguNTIzMDAyNCwzNC40MjE5MTI4IEMxOC41MjMwMDI0LDM0LjU5MjQxMjQgMTguMzg0Nzg1MiwzNC43MzA2Mjk1IDE4LjIxNDI4NTcsMzQuNzMwNjI5NSBMOC4wMjY2MzQzOCwzNC43MzA2Mjk1IEM3Ljg1NjEzNDg1LDM0LjczMDYyOTUgNy43MTc5MTc2OCwzNC41OTI0MTI0IDcuNzE3OTE3NjgsMzQuNDIxOTEyOCBMNy43MTc5MTc2OCwzMi43MjM5NzA5IEM3LjcxNzkxNzY4LDMyLjU1MzQ3MTQgNy44NTYxMzQ4NSwzMi40MTUyNTQyIDguMDI2NjM0MzgsMzIuNDE1MjU0MiBMMTguMjE0Mjg1NywzMi40MTUyNTQyIFogTTI1LjkzMjIwMzQsMjUuNDY5MTI4MyBDMjYuMTAyNzAyOSwyNS40NjkxMjgzIDI2LjI0MDkyMDEsMjUuNjA3MzQ1NSAyNi4yNDA5MjAxLDI1Ljc3Nzg0NSBMMjYuMjQwOTIwMSwyNy40NzU3ODY5IEMyNi4yNDA5MjAxLDI3LjY0NjI4NjUgMjYuMTAyNzAyOSwyNy43ODQ1MDM2IDI1LjkzMjIwMzQsMjcuNzg0NTAzNiBMOC4wMjY2MzQzOCwyNy43ODQ1MDM2IEM3Ljg1NjEzNDg1LDI3Ljc4NDUwMzYgNy43MTc5MTc2OCwyNy42NDYyODY1IDcuNzE3OTE3NjgsMjcuNDc1Nzg2OSBMNy43MTc5MTc2OCwyNS43Nzc4NDUgQzcuNzE3OTE3NjgsMjUuNjA3MzQ1NSA3Ljg1NjEzNDg1LDI1LjQ2OTEyODMgOC4wMjY2MzQzOCwyNS40NjkxMjgzIEwyNS45MzIyMDM0LDI1LjQ2OTEyODMgWiBNMjUuOTMyMjAzNCwxOC41MjMwMDI0IEMyNi4xMDI3MDI5LDE4LjUyMzAwMjQgMjYuMjQwOTIwMSwxOC42NjEyMTk2IDI2LjI0MDkyMDEsMTguODMxNzE5MSBMMjYuMjQwOTIwMSwyMC41Mjk2NjEgQzI2LjI0MDkyMDEsMjAuNzAwMTYwNSAyNi4xMDI3MDI5LDIwLjgzODM3NzcgMjUuOTMyMjAzNCwyMC44MzgzNzc3IEw4LjAyNjYzNDM4LDIwLjgzODM3NzcgQzcuODU2MTM0ODUsMjAuODM4Mzc3NyA3LjcxNzkxNzY4LDIwLjcwMDE2MDUgNy43MTc5MTc2OCwyMC41Mjk2NjEgTDcuNzE3OTE3NjgsMTguODMxNzE5MSBDNy43MTc5MTc2OCwxOC42NjEyMTk2IDcuODU2MTM0ODUsMTguNTIzMDAyNCA4LjAyNjYzNDM4LDE4LjUyMzAwMjQgTDI1LjkzMjIwMzQsMTguNTIzMDAyNCBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgaWQ9IuepuueZveaWh+ahoyIgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZpbGw9IiM2NDZBNzMiPgogICAgICAgICAgICA8dHNwYW4geD0iMTA1IiB5PSIxMjQiPuepuueZveaWh+ahozwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgPC9nPgo8L3N2Zz4=",
        ja_JP: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjU4cHgiIGhlaWdodD0iMTk1cHgiIHZpZXdCb3g9IjAgMCAyNTggMTk1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1OS4xICg4NjE0NCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+cGMtbGFyay3lsI/lm77ml6Xmloc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMi4zMTUzNzUzLDAgTDI0LjA1Nzk2MzMsMCBDMjQuNDY3MzQ3MSwtMS4wMjQ0NTg5MmUtMTUgMjQuODU5OTYzNiwwLjE2MjYyNzA4NCAyNS4xNDk0NDE3LDAuNDUyMTA1MTUgTDMzLjUwNjczMjYsOC44MDkzOTYwNiBDMzMuNzk2MjEwNyw5LjA5ODg3NDEzIDMzLjk1ODgzNzgsOS40OTE0OTA2NCAzMy45NTg4Mzc4LDkuOTAwODc0NDUgTDMzLjk1ODgzNzgsNDAuOTA0OTYzNyBDMzMuOTU4ODM3OCw0Mi4xODM3MTAyIDMyLjkyMjIwODksNDMuMjIwMzM5IDMxLjY0MzQ2MjUsNDMuMjIwMzM5IEwyLjMxNTM3NTMsNDMuMjIwMzM5IEMxLjAzNjYyODgzLDQzLjIyMDMzOSAzLjI0MzU2NTQyZS0xNSw0Mi4xODM3MTAyIDAsNDAuOTA0OTYzNyBMMCwyLjMxNTM3NTMgQy0xLjU2NjAxMjc3ZS0xNiwxLjAzNjYyODgzIDEuMDM2NjI4ODMsLTYuNTMyNzY1MDRlLTE2IDIuMzE1Mzc1MywwIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJwYy1sYXJrLeWwj+WbvuaXpeaWhyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjI1OCIgaGVpZ2h0PSIxOTUiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0iaWNvbl9maWxlX2RvY19ub3IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMi4wMDAwMDAsIDYyLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbl9ibHVlXzI4Ij4KICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iI0RFRTBFMyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LjY5NzMzNjYsLTEuNTQzNTgzNTQgTDM1LjUwMjQyMTMsOS4yNjE1MDEyMSBMMjcuMDEyNzExOSw5LjI2MTUwMTIxIEMyNS43MzM5NjU0LDkuMjYxNTAxMjEgMjQuNjk3MzM2Niw4LjIyNDg3MjM4IDI0LjY5NzMzNjYsNi45NDYxMjU5MSBMMjQuNjk3MzM2NiwtMS41NDM1ODM1NCBMMjQuNjk3MzM2NiwtMS41NDM1ODM1NCBaIiBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjQkJCRkM0IiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8cG9seWdvbiBpZD0i55+p5b2iIiBwb2ludHM9IjQuNjMwNzUwNjEgMTMuODkyMjUxOCAyOS4zMjgwODcyIDEzLjg5MjI1MTggMjkuMzI4MDg3MiAzOC41ODk1ODg0IDQuNjMwNzUwNjEgMzguNTg5NTg4NCI+PC9wb2x5Z29uPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjE0Mjg1NywzMi40MTUyNTQyIEMxOC4zODQ3ODUyLDMyLjQxNTI1NDIgMTguNTIzMDAyNCwzMi41NTM0NzE0IDE4LjUyMzAwMjQsMzIuNzIzOTcwOSBMMTguNTIzMDAyNCwzNC40MjE5MTI4IEMxOC41MjMwMDI0LDM0LjU5MjQxMjQgMTguMzg0Nzg1MiwzNC43MzA2Mjk1IDE4LjIxNDI4NTcsMzQuNzMwNjI5NSBMOC4wMjY2MzQzOCwzNC43MzA2Mjk1IEM3Ljg1NjEzNDg1LDM0LjczMDYyOTUgNy43MTc5MTc2OCwzNC41OTI0MTI0IDcuNzE3OTE3NjgsMzQuNDIxOTEyOCBMNy43MTc5MTc2OCwzMi43MjM5NzA5IEM3LjcxNzkxNzY4LDMyLjU1MzQ3MTQgNy44NTYxMzQ4NSwzMi40MTUyNTQyIDguMDI2NjM0MzgsMzIuNDE1MjU0MiBMMTguMjE0Mjg1NywzMi40MTUyNTQyIFogTTI1LjkzMjIwMzQsMjUuNDY5MTI4MyBDMjYuMTAyNzAyOSwyNS40NjkxMjgzIDI2LjI0MDkyMDEsMjUuNjA3MzQ1NSAyNi4yNDA5MjAxLDI1Ljc3Nzg0NSBMMjYuMjQwOTIwMSwyNy40NzU3ODY5IEMyNi4yNDA5MjAxLDI3LjY0NjI4NjUgMjYuMTAyNzAyOSwyNy43ODQ1MDM2IDI1LjkzMjIwMzQsMjcuNzg0NTAzNiBMOC4wMjY2MzQzOCwyNy43ODQ1MDM2IEM3Ljg1NjEzNDg1LDI3Ljc4NDUwMzYgNy43MTc5MTc2OCwyNy42NDYyODY1IDcuNzE3OTE3NjgsMjcuNDc1Nzg2OSBMNy43MTc5MTc2OCwyNS43Nzc4NDUgQzcuNzE3OTE3NjgsMjUuNjA3MzQ1NSA3Ljg1NjEzNDg1LDI1LjQ2OTEyODMgOC4wMjY2MzQzOCwyNS40NjkxMjgzIEwyNS45MzIyMDM0LDI1LjQ2OTEyODMgWiBNMjUuOTMyMjAzNCwxOC41MjMwMDI0IEMyNi4xMDI3MDI5LDE4LjUyMzAwMjQgMjYuMjQwOTIwMSwxOC42NjEyMTk2IDI2LjI0MDkyMDEsMTguODMxNzE5MSBMMjYuMjQwOTIwMSwyMC41Mjk2NjEgQzI2LjI0MDkyMDEsMjAuNzAwMTYwNSAyNi4xMDI3MDI5LDIwLjgzODM3NzcgMjUuOTMyMjAzNCwyMC44MzgzNzc3IEw4LjAyNjYzNDM4LDIwLjgzODM3NzcgQzcuODU2MTM0ODUsMjAuODM4Mzc3NyA3LjcxNzkxNzY4LDIwLjcwMDE2MDUgNy43MTc5MTc2OCwyMC41Mjk2NjEgTDcuNzE3OTE3NjgsMTguODMxNzE5MSBDNy43MTc5MTc2OCwxOC42NjEyMTk2IDcuODU2MTM0ODUsMTguNTIzMDAyNCA4LjAyNjYzNDM4LDE4LjUyMzAwMjQgTDI1LjkzMjIwMzQsMTguNTIzMDAyNCBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgaWQ9IueZvee0meOBruaWh+abuCIgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZpbGw9IiM2NDZBNzMiPgogICAgICAgICAgICA8dHNwYW4geD0iOTkiIHk9IjEyNCI+55m957SZ44Gu5paH5pu4PC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg==",
        default: eU
      }
    },
    [N.DELETED]: {
      [d.message]: {
        default: eb
      },
      [d.trigger]: {
        default: ev
      }
    }
  };
  (c = S ||= {})[c.NORMAL = 1000] = "NORMAL";
  c[c.BLANK = 9009] = "BLANK";
  c[c.DELETED = 9010] = "DELETED";
  let eh = "request_img_fail";
  let eG = "decrypt_fail";
  async function ew() {
    let e = appConfigExtendedInitializer.extendedAppConfig.getByKey("user");
    let t = (e == null ? undefined : e.id) || urlPreviewCacheUtilityModule.generateRandomId(6);
    return `${urlPreviewCacheUtilityModule.generateRandomId(12)}-${t}`;
  }
  (T = C ||= {})[T.NORMAL = 100] = "NORMAL";
  T[T.NO_SUPPORT = 101] = "NO_SUPPORT";
  T[T.NO_KEY = 102] = "NO_KEY";
  T[T.NO_URL = 103] = "NO_URL";
  T[T.DATA_ERROR = 104] = "DATA_ERROR";
  T[T.BUFFER_ERROR = 105] = "BUFFER_ERROR";
  T[T.NO_TYPE = 106] = "NO_TYPE";
  T[T.REQUEST_ERROR = 107] = "REQUEST_ERROR";
  (L ||= {})["SHA-256"] = "SHA-256";
  (I = p ||= {})["AES-GCM"] = "AES-GCM";
  I["AES-CBC"] = "AES-CBC";
  let ek = ["", p["AES-GCM"], p["AES-CBC"]];
  let eH = "access-new-default-thumbnail";
  let ex = !!window.crypto && !!window.crypto.subtle;
  async function ej(e, t) {
    var n;
    var r;
    let i = {};
    try {
      i = (await ((n = appConfigExtendedInitializer.extendedAppConfig.getByKey("getExtraHeaders")) === null || n === undefined ? undefined : n({
        url: e,
        method: "GET"
      }))) || {};
    } catch (e) {}
    try {
      let n;
      let r = await fetch(e, {
        method: "GET",
        headers: Object.assign(Object.assign({}, t), i),
        credentials: "include"
      });
      let o = r.headers;
      let _ = o.get("Content-Type");
      try {
        n = _ === "image/png" || _ === "image/jpeg" ? await r.arrayBuffer() : await r.json();
      } catch (e) {}
      return {
        body: n,
        httpStatusCode: r.status,
        type: _,
        headers: o
      };
    } catch (t) {
      if ((r = urlPreviewCacheUtilityModule.urlPreviewManager.logging) !== null && r !== undefined) {
        r.info("doc thumbnail failed to fetch, url:", e, "reason:", t);
      }
      return {
        failed: true
      };
    }
  }
  async function eB(e, t) {
    var n;
    let r = {
      locale: (n = appConfigExtendedInitializer.extendedAppConfig.getByKey("locale")) === null || n === undefined ? undefined : n.replace("-", "_"),
      "use-new-default-thumbnail": "true",
      "Content-Type": "application/x-www-form-urlencoded",
      "request-id": t
    };
    if (urlPreviewCacheUtilityModule.urlPreviewManager.jssdkSession) {
      r["jssdk-session"] = urlPreviewCacheUtilityModule.urlPreviewManager.jssdkSession;
    }
    return ej(e, r);
  }
  function ez(e, t, n, r) {
    return Object.assign(Object.assign({
      status: e
    }, r || {}), {
      statusCode: `${t}_${n}`
    });
  }
  function eV(e) {
    if (!(e.byteLength > 0)) {
      return "";
    }
    {
      let t = function (e) {
        let t = e.slice(0, 4);
        t = new Uint8Array(t);
        let n = [];
        for (let e = 0; e < t.byteLength; e++) {
          n.push(t[e].toString(16));
        }
        return function (e) {
          switch (e) {
            case "89504E47":
              return "image/png";
            case "47494638":
              return "image/gif";
            case "FFD8FFDB":
            case "FFD8FFE0":
            case "FFD8FFE1":
            case "FFD8FFE2":
            case "FFD8FFE3":
            case "FFD8FFE8":
              return "image/jpeg";
            case "52494646":
              return "image/webp";
            default:
              return "";
          }
        }(n.join("").toUpperCase());
      }(e);
      let n = new Blob([new DataView(e)], {
        type: t || "image/jpeg"
      });
      return URL.createObjectURL(n);
    }
  }
  function eF(e) {
    let t = window.atob(e);
    let n = t.length;
    let r = new Uint8Array(n);
    for (let e = 0; e < n; e++) {
      r[e] = t.charCodeAt(e);
    }
    return r;
  }
  async function eY(e) {
    if (ex) {
      let t = new TextEncoder().encode(e);
      return new Uint8Array(await crypto.subtle.digest(L["SHA-256"], t)).slice(0, 32);
    }
  }
  async function eK(e, t, n, r) {
    let i = {
      data: n && e || e.slice(16),
      key: n && eF(t || "") || (await eY(t || "")),
      iv: n && eF(n) || e.slice(0, 16),
      algorithm: ek[r]
    };
    if (i.algorithm) {
      return eV(await function (e) {
        let {
          data: t,
          key: n,
          algorithm: r,
          iv: i
        } = e;
        return new Promise(async (e, o) => {
          if (ex && t.byteLength > 0 && n && i.byteLength > 0) {
            let _ = new Uint8Array(i);
            let a = new Uint8Array(t);
            crypto.subtle.importKey("raw", n, r, false, ["decrypt"]).then(e => crypto.subtle.decrypt({
              name: r,
              iv: _
            }, e, a)).then(e).catch(o);
          } else {
            o({
              errorCode: C.NO_SUPPORT
            });
          }
        });
      }(i));
    } else {
      return eV(e);
    }
  }
  let eW = `${urlPreviewCacheUtilityModule.componentName}-element-docImage__thumbnail`;
  function eQ(e) {
    let {
      docInfo: t,
      showDocDetail: n = true,
      source: r
    } = e;
    let i = reactHookUtilities.useIsUnmounted();
    let [o, _] = reactCoreLibraryReexport.useState("");
    let [a, E] = reactCoreLibraryReexport.useState(false);
    let l = reactCoreLibraryReexport.useRef({});
    let [c, T] = reactCoreLibraryReexport.useState(false);
    let I = reactCoreLibraryReexport.useRef("");
    function A(e) {
      e.preventDefault();
      if (e.nativeEvent) {
        e.nativeEvent.stopImmediatePropagation();
      }
    }
    function s(e) {
      e.target.src = eP;
    }
    async function u(e, t, n) {
      var _;
      let a = {};
      let E = false;
      let c = false;
      let T = {};
      if (n) {
        try {
          if ((a = JSON.parse(t)).thumbnailUrlPc && a.thumbnailUrlPc !== I.current) {
            I.current = a.thumbnailUrlPc;
            try {
              c = (T = await (_ = a, new Promise(async (e, t) => {
                let n;
                let {
                  decryptKeyPc: r,
                  thumbnailUrlPc: i,
                  cipherType: o,
                  decryptNoncePc: a
                } = _;
                let E = await ew();
                if (!r || !i || !o) {
                  let e = r && C.NO_KEY || i && C.NO_URL || C.NO_TYPE;
                  t(ez("request_param_fail", S.NORMAL, e, {
                    requestId: E
                  }));
                  return;
                }
                try {
                  if (!((n = await function (e, t) {
                    let n = Date.now();
                    return eB(e, t).then(e => {
                      var r;
                      var i;
                      var o;
                      var _;
                      let a;
                      let E = e.headers?.[eH] === "true" || ((i = (r = e.headers) === null || r === undefined ? undefined : r.get) === null || i === undefined ? undefined : i.call(r, eH)) === "true";
                      let l = ((_ = (o = e == null ? undefined : e.headers) === null || o === undefined ? undefined : o.get) === null || _ === undefined ? undefined : _.call(o, "x-tt-logid")) || "";
                      let c = Date.now() - n;
                      if (e.body && e.body.code) {
                        a = e.body.code;
                      }
                      if (a || !e.body) {
                        return {
                          statusCode: e.httpStatusCode,
                          requestTime: c,
                          code: a
                        };
                      } else {
                        return {
                          requestTime: c,
                          img: e.body,
                          statusCode: e.httpStatusCode,
                          isNewErrorThumbnail: E,
                          ttLogId: l
                        };
                      }
                    });
                  }(i, E)).img instanceof ArrayBuffer)) {
                    t(ez(n.code ? "abnormal_img" : eh, n.statusCode, C.REQUEST_ERROR, Object.assign({
                      requestId: E
                    }, n)));
                    return;
                  }
                } catch (e) {
                  t(ez(eh, S.NORMAL, e.code, Object.assign({
                    requestId: E
                  }, e)));
                  return;
                }
                let l = {
                  decryptKey: r && (await urlPreviewCacheUtilityModule.generateUrlPreviewHash(r)),
                  resImgLength: n.img && ArrayBuffer.isView(n.img) && n.img.byteLength,
                  decryptKeyLength: r && r.length
                };
                try {
                  let i = Date.now();
                  let _ = await eK(n.img, r, a, o);
                  let c = Date.now() - i;
                  let T = Object.assign({
                    requestId: E,
                    ttLogId: n.ttLogId,
                    cipherType: o,
                    decryptTime: c,
                    requestTime: n.requestTime,
                    isNewErrorThumbnail: n.isNewErrorThumbnail
                  }, l);
                  if (_) {
                    e(ez("decrypt_success", n.statusCode, C.NORMAL, Object.assign({
                      url: _
                    }, T)));
                  } else {
                    t(ez(eG, n.statusCode, C.DATA_ERROR, T));
                  }
                } catch (e) {
                  t(ez(eG, n.statusCode, C.BUFFER_ERROR, Object.assign(Object.assign({
                    requestId: E,
                    requestTime: n.requestTime,
                    cipherType: o
                  }, e), l)));
                  return;
                }
              }))).isNewErrorThumbnail || false;
            } catch (n) {
              T = n;
              let e = l.current?.source && T.code ? ey[T.code]?.[l.current.source] : undefined;
              let t = appConfigExtendedInitializer.extendedAppConfig.getByKey("locale");
              T.url = (e == null ? undefined : e[t.replace("-", "_")]) || (e == null ? undefined : e.default) || "";
            }
          } else {
            E = true;
          }
        } catch (e) {
          T.status = "json_parse_false";
        }
      }
      if (E && l.current?.file_type !== g.FILE) {
        throw Error("get same url in handleGetThumbnail");
      }
      let A = T.url || e;
      let s = A && A.match(/^(\w+):/i);
      return {
        url: A,
        report: {
          encrypt_status: T.status || "no_encrypt",
          status_code: T.statusCode,
          source_type: s ? s[1] : "static",
          request_time: T.requestTime,
          decrypt_time: T.decryptTime,
          cipher_type: T.cipherType,
          request_id: T.requestId,
          tt_logid: T.ttLogId,
          decrypt_key: T.decryptKey,
          res_img_length: T.resImgLength,
          decrypt_key_length: T.decryptKeyLength
        },
        newErrorThumbnail: c
      };
    }
    async function d() {
      var e;
      let {
        key: a,
        type: c,
        abstract: I
      } = t.doc;
      let A = t.docPermission.thumbnailDetail;
      let s = !!A;
      l.current = {
        file_token: a,
        file_type: c,
        show_doc_detail: n,
        is_encrypt: s,
        source: r
      };
      try {
        let {
          url: e,
          report: t,
          newErrorThumbnail: n
        } = await u(I, A, s);
        if (i) {
          return;
        }
        if (e && e !== o) {
          T(false);
          _(e);
          E(n);
          l.current = Object.assign(Object.assign({}, l.current), t);
        }
      } catch (t) {
        if ((e = urlPreviewCacheUtilityModule.urlPreviewManager.logging) !== null && e !== undefined) {
          e.info("doc thubmail fetch image error:", t);
        }
      }
    }
    reactCoreLibraryReexport.useEffect(() => {
      d();
    }, [t.docPermission.thumbnailDetail, t.doc]);
    reactCoreLibraryReexport.useEffect(() => () => {
      if (t.url && t.url.startsWith("blob:")) {
        URL.revokeObjectURL(t.url);
      }
    }, [t.url]);
    if (o) {
      if (a) {
        return reactCoreLibraryReexport.createElement("div", {
          className: eW
        }, reactCoreLibraryReexport.createElement("div", {
          className: `${eW}-newImg`,
          style: {
            background: `url(${c ? eP : o}) center center no-repeat`,
            backgroundSize: "contain"
          }
        }), !c && reactCoreLibraryReexport.createElement("img", {
          src: o,
          width: "0",
          height: "0",
          style: {
            opacity: 0,
            flex: "0 0"
          },
          onError: () => T(true)
        }));
      } else {
        return function (e = `${eW}-img`) {
          return reactCoreLibraryReexport.createElement("img", {
            className: e,
            src: o,
            onContextMenu: A,
            onError: s
          });
        }();
      }
    } else {
      return null;
    }
  }
  let eZ = `${urlPreviewCacheUtilityModule.componentName}-element-docImage`;
  function eX(e) {
    let {
      docImage: n
    } = e.element;
    let r = {
      cipherType: n.secretType,
      thumbnailUrl: n.secretUrl,
      decryptKey: n.secretKey,
      decryptNonce: n.secretNonce,
      thumbnailUrlPc: n.secretUrl,
      decryptKeyPc: n.secretKey,
      decryptNoncePc: n.secretNonce
    };
    let i = {
      url: e.urlPreviewEntity.url?.url,
      doc: {
        abstract: n.thumbnailUrl,
        key: n.secretKey,
        type: n.docType
      },
      docPermission: {
        thumbnailDetail: JSON.stringify(r)
      }
    };
    return reactCoreLibraryReexport.createElement("div", {
      className: eZ
    }, reactCoreLibraryReexport.createElement("div", {
      className: `${eZ}-inner`
    }, reactCoreLibraryReexport.createElement(eQ, {
      docInfo: i,
      showDocDetail: true,
      source: d.message
    })));
  }
  function eJ(e) {
    e = Object.assign({}, e);
    delete e.height;
    delete e.width;
    return e;
  }
  let e$ = `${eZ}__wrap`;
  let eq = `${urlPreviewCacheUtilityModule.componentName}-element-avatar`;
  function e0(e) {
    var n;
    var i;
    let {
      chatterInfo: _
    } = e.element.avatar;
    let {
      avatarKey: a,
      chatterId: E
    } = _;
    let l = !E || E === urlPreviewCacheUtilityModule.version;
    let c = urlPreviewCacheUtilityModule.urlPreviewManager.registeredComponents?.LarkChatterAvatar;
    if (!c) {
      if ((n = urlPreviewCacheUtilityModule.urlPreviewManager?.logging) !== null && n !== undefined) {
        n.error("[Url Preview] LarkChatterAvatar is not registered");
      }
      return null;
    }
    let T = urlPreviewCacheUtilityModule.urlPreviewManager.registeredComponents?.Avatar;
    if (!T) {
      if ((i = urlPreviewCacheUtilityModule.urlPreviewManager?.logging) !== null && i !== undefined) {
        i.error("[Url Preview] Avatar is not registered");
      }
      return null;
    }
    let I = O(eq, {
      [`${eq}--anonymous`]: l
    });
    let A = urlPreviewCacheUtilityModule.urlPreviewManager.registeredComponents?.UserProfile;
    let s = l ? reactCoreLibraryReexport.createElement(T, {
      avatarKey: a
    }) : reactCoreLibraryReexport.createElement(urlPreviewComponents.UserProfilePopover, {
      userProfile: A,
      chatterId: E,
      popoverProps: {
        disabled: l,
        trigger: "click"
      }
    }, reactCoreLibraryReexport.createElement("div", null, reactCoreLibraryReexport.createElement(c, {
      chatterId: E,
      avatarKey: a
    })));
    return reactCoreLibraryReexport.createElement("div", {
      className: I,
      onClick: t => {
        t.stopPropagation();
        if (!l) {
          e.trackPageClick({
            clickType: "icon",
            componentId: e.elementId
          });
        }
      }
    }, s);
  }
  var e1 = require.p + "static/image/card-title-mask-neural.a87d19bc.png";
  var e2 = require.p + "static/image/card-title-mask-neural-dm.478e3227.png";
  var e5 = require.p + "static/image/card-title-mask.93d0772d.png";
  var e3 = require.p + "static/image/card-title-mask-dm.4d599042.png";
  let e4 = `${urlPreviewCacheUtilityModule.componentName}-element-card-container`;
  class e8 extends reactCoreLibraryReexport.PureComponent {
    constructor() {
      super(...arguments);
      this.parseStyle = () => {
        let n;
        let {
          element: r
        } = this.props;
        let i = r.style;
        let o = (i == null ? undefined : i.backgroundColor)?.linear?.colorsV2;
        let _ = "";
        if (o == null ? undefined : o.length) {
          n = urlPreviewCacheUtilityModule.resolveColorValue(o[0]);
          _ = this.getMaskByToken(o[0].token || "");
        }
        return {
          backgroundColor: n,
          backgroundImage: `url(${_})`
        };
      };
      this.getMaskByToken = e => {
        if (!e) {
          return "";
        }
        let n = this.props.themeState?.mode || "LIGHT";
        if (e === "udtoken-message-card-bg-neutral") {
          if (n === "LIGHT") {
            return e1;
          } else {
            return e2;
          }
        } else if (n === "LIGHT") {
          return e5;
        } else {
          return e3;
        }
      };
    }
    render() {
      let {
        element: e,
        elementEntity: t
      } = this.props;
      let {
        childIds: n
      } = e;
      let {
        elements: r
      } = t;
      let i = this.parseStyle();
      if (r) {
        return reactCoreLibraryReexport.createElement("div", {
          className: e4,
          style: i
        }, n && n.map(e => reactCoreLibraryReexport.createElement(b, Object.assign({}, this.props, {
          key: e,
          element: r[e],
          elementId: e
        }))));
      } else {
        return null;
      }
    }
  }
  function e9(e) {
    if (e < 10) {
      return `0${e}`;
    } else {
      return e;
    }
  }
  function e6(e) {
    let {
      hours: t,
      minutes: n,
      seconds: r
    } = function (e) {
      if (e < 0) {
        return {
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      let t = Math.floor(e / 3600000);
      return {
        hours: t > 999 ? 999 : t,
        minutes: Math.floor(e % 3600000 / 60000),
        seconds: Math.floor(e % 60000 / 1000)
      };
    }(e);
    let i = e9(n);
    let o = e9(r);
    return [...(t ? [e9(t)] : []), i, o].join(":");
  }
  let e7 = [];
  let te = `${urlPreviewCacheUtilityModule.componentName}-element-time`;
  class tt extends reactCoreLibraryReexport.Component {
    constructor() {
      super(...arguments);
      this.duration = 0;
      this.requestStartTimeClient = 0;
      this.timeInterval = false;
      this.state = {
        lastTime: ""
      };
      this.updateTime = () => {
        let {
          time: e
        } = this.props.element;
        if (e.isEnd) {
          this.stopTimeInterval();
          return;
        }
        let t = Number(e.startTimeStamp) * 1000;
        let n = Number(e.endTimeStamp) * 1000;
        let r = performance.now() - this.requestStartTimeClient;
        let i = e.isCountdown ? Math.max(this.duration - r, 0) : this.duration + r;
        let o = (e.isCountdown ? t - this.duration : t + this.duration) + r;
        this.setState({
          lastTime: e6(i)
        });
        if (!e.isCountdown && n && o >= n) {
          this.setState({
            lastTime: e6(Math.max(n - t, 0))
          });
          return this.stopTimeInterval();
        } else if (e.isCountdown && o >= t) {
          this.setState({
            lastTime: e6(0)
          });
          return this.stopTimeInterval();
        } else {
          return undefined;
        }
      };
    }
    async componentDidMount() {
      let {
        time: e
      } = this.props.element;
      await this.fetchServerDuration();
      if (e.isEnd) {
        let t = Number(e.startTimeStamp) * 1000;
        let n = Number(e.endTimeStamp) * 1000;
        this.setState({
          lastTime: e6(Math.max(n ? n - t : this.duration, 0))
        });
      } else {
        this.startTimeInterval();
      }
    }
    componentWillUnmount() {
      this.stopTimeInterval();
    }
    startTimeInterval() {
      var e;
      if (!this.timeInterval) {
        if (typeof (e = this.updateTime) == "function") {
          e7.push(e);
          if (!r) {
            (function e() {
              let t = 1000 - Date.now() % 1000;
              r = window.setTimeout(() => {
                e7.forEach(e => {
                  e();
                });
                e();
              }, t);
            })();
          }
        }
        this.timeInterval = true;
      }
    }
    stopTimeInterval() {
      if (this.timeInterval) {
        var e;
        e = this.updateTime;
        if ((e7 = e7.filter(t => t !== e)).length <= 0) {
          window.clearTimeout(r);
          r = undefined;
        }
        this.timeInterval = false;
      }
    }
    async fetchServerDuration() {
      let e;
      let t = await this.fetchDurationFromBE();
      let n = await this.fetchDurationFromNTP();
      e = !t || Math.abs(t.duration - n.duration) < 5000 ? n : t;
      this.duration = e.duration;
      this.requestStartTimeClient = e.requestStartTimeClient;
    }
    async fetchDurationFromNTP() {
      let e = performance.now();
      let {
        startTimeStamp: t,
        isCountdown: n
      } = this.props.element.time;
      let r = Date.now();
      let i = parseInt(t, 10) * 1000;
      return {
        duration: n ? i - r : r - i,
        requestStartTimeClient: e
      };
    }
    async fetchDurationFromBE() {
      let e = this.props.element.time.ntpActionId;
      if (!e) {
        return null;
      }
      try {
        let t = await this.props.doAction(e);
        if (!t) {
          return null;
        }
        return {
          duration: t.duration,
          requestStartTimeClient: t.serverEndTime
        };
      } catch (e) {
        return null;
      }
    }
    render() {
      let {
        lastTime: t
      } = this.state;
      let n = !!this.props.element.style?.textColorV2;
      let r = O(te, {
        [`${te}--default`]: !n
      });
      return reactCoreLibraryReexport.createElement("div", {
        className: r
      }, t);
    }
  }
  var archiveBoxPopover = require("archive-box-popover") /*id: 102490*/;
  var virtualizedListComponent = require("virtualized-list-component") /*id: 608074*/;
  let ti = `${urlPreviewCacheUtilityModule.componentName}-element-chatters-preview-popup-list`;
  function to(e) {
    let t;
    let {
      chatterIds: n,
      mGetChatters: r
    } = e;
    let i = Math.max(Math.min(240, n.length * 36 + 6), 42);
    let [o, _] = reactCoreLibraryReexport.useState(false);
    let [a, E] = reactCoreLibraryReexport.useState([]);
    reactCoreLibraryReexport.useEffect(() => {
      if (n == null ? undefined : n.length) {
        if (t) {
          t.cancel();
        }
        (t = urlPreviewCacheUtilityModule.createCancelablePromise(r(n))).then(e => {
          let t = [];
          n.forEach(n => {
            if (e.chatters[n]) {
              t.push(e.chatters[n]);
            }
          });
          E(t);
          _(true);
        }).finally(() => t = undefined);
        return () => t && t.cancel();
      }
    }, [n]);
    let l = reactCoreLibraryReexport.useCallback(e => e ? reactCoreLibraryReexport.createElement(t_, {
      key: e.id,
      chatter: e
    }) : null, []);
    return reactCoreLibraryReexport.createElement("div", {
      className: ti,
      style: {
        height: i
      },
      onScroll: e => e.stopPropagation()
    }, o ? reactCoreLibraryReexport.createElement(virtualizedListComponent.VirtualizedList, {
      style: {
        height: "100%"
      },
      height: i,
      numberOfRows: a.length,
      variableHeight: false,
      recordForRowAt: ({
        row: e
      }) => a[e],
      renderRow: l
    }) : reactCoreLibraryReexport.createElement(loadingComponent.LoadingComponent, null));
  }
  function t_(e) {
    var n;
    let {
      chatter: i
    } = e;
    let {
      id: o,
      name: _,
      avatarKey: a
    } = i;
    let E = urlPreviewCacheUtilityModule.urlPreviewManager.registeredComponents?.Avatar;
    if (!E) {
      if ((n = urlPreviewCacheUtilityModule.urlPreviewManager?.logging) !== null && n !== undefined) {
        n.error("[Url Preview] Avatar is not registered");
      }
      return null;
    }
    let l = urlPreviewCacheUtilityModule.urlPreviewManager.registeredComponents?.UserProfile;
    let c = o === urlPreviewCacheUtilityModule.version;
    return reactCoreLibraryReexport.createElement(urlPreviewComponents.UserProfilePopover, {
      userProfile: l,
      chatterId: o,
      popoverProps: {
        disabled: c,
        trigger: "click"
      },
      key: o
    }, reactCoreLibraryReexport.createElement("div", {
      className: `${ti}__item`
    }, reactCoreLibraryReexport.createElement("span", {
      className: `${ti}__item-avatar`
    }, reactCoreLibraryReexport.createElement(E, {
      avatarKey: a,
      size: 24
    })), reactCoreLibraryReexport.createElement("span", {
      className: `${ti}__item-name`
    }, _)));
  }
  let ta = `${urlPreviewCacheUtilityModule.componentName}-element-chatters-preview`;
  function tE(e) {
    let t;
    let {
      elementId: n,
      getUrlPreviewChatterIds: r,
      mGetChatters: i
    } = e;
    let {
      previewId: o
    } = e.urlPreviewEntity;
    let {
      chattersCount: _ = 0,
      maxShowCount: a = 5,
      theme: E,
      chattersMode: l
    } = e.element.chattersPreview;
    let c = reactHookUtilities.useLocaleContext();
    let T = e.element.chattersPreview.chatterInfos;
    let I = Math.min(a, T.length);
    let A = T.slice(0, I);
    let s = _ - I;
    let [u, d] = reactCoreLibraryReexport.useState({});
    reactCoreLibraryReexport.useEffect(() => {
      let e = T.map(e => e.chatterId).filter(e => e !== urlPreviewCacheUtilityModule.version);
      if (e == null ? undefined : e.length) {
        if (t) {
          t.cancel();
        }
        (t = urlPreviewCacheUtilityModule.createCancelablePromise(i(e))).then(e => {
          d((e == null ? undefined : e.chatters) || {});
        }).finally(() => t = undefined);
        return () => {
          if (t) {
            t.cancel();
          }
        };
      }
    }, [a, T]);
    let [g, N] = reactCoreLibraryReexport.useState([]);
    reactCoreLibraryReexport.useEffect(() => {
      if (l !== errorConstantsCodes.bL6.DYNAMIC) {
        return;
      }
      let e = urlPreviewCacheUtilityModule.createCancelablePromise(r(o, n).then(e => {
        N(e);
      }).catch(() => {
        var e;
        N([]);
        if ((e = urlPreviewCacheUtilityModule.urlPreviewManager?.logging) !== null && e !== undefined) {
          e.error("[URL-PREVIEW] chatters preview getUrlPreviewChatterIds error");
        }
      }));
      return () => {
        e.cancel();
      };
    }, [l, o, n]);
    reactCoreLibraryReexport.useEffect(() => {
      if (l === errorConstantsCodes.bL6.STATIC) {
        N(Object.values(u).map(({
          id: e
        }) => e));
      }
    }, [l, u]);
    let S = O(ta, {
      [`${ta}--light`]: E === errorConstantsCodes.qZn.LIGHT,
      [`${ta}--dark`]: E === errorConstantsCodes.qZn.DARK
    });
    let C = e.element.style;
    let L = C ? {
      color: urlPreviewCacheUtilityModule.resolveColorValue(C.textColorV2),
      background: urlPreviewCacheUtilityModule.resolveLinearGradient(C.backgroundColor)
    } : undefined;
    let p = () => {
      e.trackPageClick({
        clickType: "icon",
        componentId: n
      });
    };
    return reactCoreLibraryReexport.createElement("div", {
      className: S,
      onClick: e => e.stopPropagation()
    }, (() => {
      var t;
      var r;
      let o = urlPreviewCacheUtilityModule.urlPreviewManager.registeredComponents?.Avatar;
      if (!o) {
        if ((t = urlPreviewCacheUtilityModule.urlPreviewManager?.logging) !== null && t !== undefined) {
          t.error("[Url Preview] Avatar is not registered");
        }
        return null;
      }
      let _ = urlPreviewCacheUtilityModule.urlPreviewManager.registeredComponents?.LarkChatterAvatar;
      if (!_) {
        if ((r = urlPreviewCacheUtilityModule.urlPreviewManager?.logging) !== null && r !== undefined) {
          r.error("[Url Preview] LarkChatterAvatar is not registered");
        }
        return null;
      }
      let a = urlPreviewCacheUtilityModule.urlPreviewManager.registeredComponents?.UserProfile;
      return A.map((e, t) => {
        let n = e.avatarKey;
        let r = e.chatterId;
        let i = u[r];
        let E = O(`${ta}__item-avatar`, {
          [`${ta}__item-avatar--full`]: s <= 0 && I - 1 === t,
          [`${ta}__item-avatar--anonymous`]: r === urlPreviewCacheUtilityModule.version
        });
        let l = r === urlPreviewCacheUtilityModule.version;
        let c = i ? reactCoreLibraryReexport.createElement(urlPreviewComponents.UserProfilePopover, {
          userProfile: a,
          chatterId: r,
          popoverProps: {
            disabled: l,
            trigger: "click"
          }
        }, reactCoreLibraryReexport.createElement("div", null, reactCoreLibraryReexport.createElement(_, {
          chatterId: r,
          avatarKey: n,
          size: 24,
          onClick: p
        }))) : reactCoreLibraryReexport.createElement(urlPreviewComponents.UserProfilePopover, {
          userProfile: a,
          chatterId: r,
          popoverProps: {
            disabled: l,
            trigger: "click"
          }
        }, reactCoreLibraryReexport.createElement("div", null, reactCoreLibraryReexport.createElement(o, {
          avatarKey: n,
          size: 24,
          onClick: p
        })));
        if (i && i.name) {
          return reactCoreLibraryReexport.createElement(tooltipComponentModule.TooltipComponent, {
            title: i.name,
            key: t
          }, reactCoreLibraryReexport.createElement("div", {
            className: E
          }, c));
        } else {
          return reactCoreLibraryReexport.createElement("div", {
            className: E,
            key: t
          }, c);
        }
      });
    })(), (() => {
      if (s <= 0) {
        return null;
      }
      let t = reactCoreLibraryReexport.createElement(tooltipComponentModule.TooltipComponent, {
        title: optionalFunctionCall.callIfFunction(c.lang.UrlPreview.Lark_View_ShowAllTip)
      }, reactCoreLibraryReexport.createElement("div", {
        className: O(`${ta}__number`, {
          [`${ta}__number-more`]: s > 99
        }),
        style: L,
        onClick: () => e.trackPageClick({
          clickType: "page_click",
          componentId: n
        })
      }, s > 99 ? "…" : `+${s}`));
      if (g == null ? undefined : g.length) {
        return reactCoreLibraryReexport.createElement(archiveBoxPopover.archiveBoxPopover, {
          content: reactCoreLibraryReexport.createElement(to, {
            chatterIds: g,
            mGetChatters: i
          }),
          trigger: "click",
          placement: "bottomLeft",
          mode: "pure",
          showArrow: false
        }, t);
      } else {
        return t;
      }
    })(), reactCoreLibraryReexport.createElement("svg", {
      className: `${ta}__mask-svg`
    }, reactCoreLibraryReexport.createElement("defs", null, reactCoreLibraryReexport.createElement("clipPath", {
      id: `${ta}__item-mask`
    }, reactCoreLibraryReexport.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22 5.36441C20.7363 7.26502 20 9.54653 20 12C20 14.4535 20.7363 16.735 22 18.6356C19.8502 21.869 16.1739 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C16.1739 0 19.8502 2.13102 22 5.36441Z"
    })))));
  }
  function tl(e) {
    e = Object.assign({}, e);
    delete e.color;
    delete e.background;
    return e;
  }
  let tc = reactCoreLibraryReexport.lazy(() => require.e("video-preview-component") /*id: 89517*/.then(require.bind(require, "video-preview-component") /*id: 296242*/));
  function tT(e) {
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Suspense, {
      fallback: reactCoreLibraryReexport.createElement("div", null)
    }, reactCoreLibraryReexport.createElement(tc, Object.assign({}, e)));
  }
  let tI = `${urlPreviewCacheUtilityModule.componentName}-element-video`;
  function tA(e) {
    let {
      elementId: n,
      element: r,
      urlPreviewEntity: i,
      trackPageClick: o
    } = e;
    return reactCoreLibraryReexport.createElement("div", {
      className: tI
    }, reactCoreLibraryReexport.createElement(tT, Object.assign({
      id: n,
      cid: n,
      url: i.url?.url,
      locale: appConfigExtendedInitializer.extendedAppConfig.getByKey("locale")
    }, Object.assign(Object.assign({}, r.video), {
      coverImageUrl: e.coverImageUrl
    }), {
      onVideoPlayClick: () => {
        o({
          clickType: "play_video",
          componentId: n
        });
      }
    })));
  }
  function ts(e) {
    e = Object.assign({}, e);
    delete e.height;
    return e;
  }
  var urlPreviewManager = require("url-preview-manager") /*id: 69495*/;
  let td = e => {
    var t;
    let n = e.element.engine.body;
    let r = urlPreviewManager.urlPreviewManager.registeredElements.find(e => e.type === cardPreviewLocaleConstants.cardPreviewConstant.ENGINE);
    if (!r || !n) {
      if ((t = urlPreviewManager.urlPreviewManager?.logging) !== null && t !== undefined) {
        t.error("[Url Preview] Engine Element is not registered");
      }
      return reactCoreLibraryReexport.createElement("div", null, "Not found Engine Element.");
    }
    let i = r.module.Component;
    return reactCoreLibraryReexport.createElement(i, Object.assign({}, e));
  };
  require.d(exports, {
    renderTextElement: function () {
      return ea;
    },
    renderSpinButton: function () {
      return et;
    },
    ButtonElement: function () {
      return eL;
    },
    renderImageElement: function () {
      return eN;
    },
    cleanTextStyle: function () {
      return tl;
    },
    cleanLayoutStyle: function () {
      return eJ;
    },
    textWrapClassName: function () {
      return eE;
    },
    TimeElement: function () {
      return tt;
    },
    ChattersPreview: function () {
      return tE;
    },
    renderAvatarElement: function () {
      return e0;
    },
    ContainerElement: function () {
      return y;
    },
    renderRichText: function () {
      return eA;
    },
    LinearLayoutElement: function () {
      return $;
    },
    renderEngineElement: function () {
      return td;
    },
    renderTagList: function () {
      return er;
    },
    renderVideoElement: function () {
      return tA;
    },
    buttonWrapClassName: function () {
      return ep;
    },
    docImageWrapClass: function () {
      return e$;
    },
    cleanImageStyle: function () {
      return eO;
    },
    PreviewHeader: function () {
      return X;
    },
    IconButtonElement: function () {
      return ef;
    },
    CardContainer: function () {
      return e8;
    },
    imageWrapClassName: function () {
      return eS;
    },
    BaseElementRenderer: function () {
      return b;
    },
    headerWrapClassName: function () {
      return Z;
    },
    cleanFlexStyle: function () {
      return ei;
    },
    cleanAvatarStyle: function () {
      return ts;
    },
    renderDocImage: function () {
      return eX;
    }
  });
}