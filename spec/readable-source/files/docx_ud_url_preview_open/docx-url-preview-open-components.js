// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'xv' to 'TextElement'
// - Renamed export 'kJ' to 'SpinButtonElement'
// - Renamed export 'zx' to 'ButtonElement'
// - Renamed export 'Ee' to 'ImageElement'
// - Renamed export 'lP' to 'ChattersPreviewElement'
// - Renamed export 'zW' to 'RichTextElement'
// - Renamed export 'wQ' to 'RichTextUpdateTime'
// - Renamed export 'qp' to 'LinearLayoutElement'
// - Renamed export 'd9' to 'ChattersPreviewList'
// - Renamed export 'qE' to 'AvatarElement'
// - Renamed export 'HY' to 'EmptyElement'
// - Renamed export 'Ho' to 'HeaderElement'
// - Renamed export 'YF' to 'HeaderElementWithLocale'
// - Renamed export 'mf' to 'VideoElement'
// - Renamed export 'PS' to 'TagListElement'
// - Renamed export 'nk' to 'ChattersPreviewItem'
// - Renamed export 'yU' to 'IconButtonElement'
// - Renamed export '$T' to 'VideoElementWrapper'
// - Renamed export 'ZB' to 'IconButtonStyleParser'
// - Renamed export 'h4' to 'HeaderWrapper'
// - Renamed export 'hU' to 'ImageElementWrapper'
// - Renamed export '_L' to 'CardContainerElement'
// - Renamed export 'Cv' to 'TextStyleParser'
// - Renamed export 'W_' to 'BaseElement'
// - Renamed export 'bj' to 'LinearLayoutOrientationMap'
// - Renamed export 'Ah' to 'RichTextActionHandler'
// - Renamed export 'In' to 'VideoStyleParser'
// - Renamed export 'TZ' to 'DocImageElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 822132
         */
module.exports = function (module, exports, require) {
  let n;
  var r;
  var o;
  var s;
  var l;
  var a;
  var c;
  var u;
  var g;
  var M;
  var d;
  var I;
  var p;
  var y;
  var h;
  var N;
  var m;
  var C;
  var A;
  var f;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var D = classnamesUtils;
  var errorConstantsCodes = require("error-constants-codes") /*id: 850732*/;
  var docxLarkUrlPreviewUtils = require("docx-lark-url-preview-utils") /*id: 146261*/;
  var cardPreviewLocaleConstants_1 = require("card-preview-locale-constants_1") /*id: 568860*/;
  var stringDeburrUtil_1 = require("string-deburr-util_1") /*id: 505593*/;
  let O = `${docxLarkUrlPreviewUtils.componentName}-element`;
  class b extends reactCoreLibraryReexport.PureComponent {
    parseFontLevel(e) {
      if (!e) {
        return {};
      }
      let {
        type: t = errorConstantsCodes.ani.CAPTION,
        level: i = 0
      } = e;
      let n = `${b.fontTypeMap[t]}${i}`;
      return docxLarkUrlPreviewUtils.typographyStyles[n];
    }
    parseBorder(e) {
      if (!e) {
        return {};
      }
      let {
        width: t,
        cornerRadius: i,
        colorV2: n
      } = e;
      return {
        borderStyle: "solid",
        borderWidth: t ? `${t}px` : 0,
        borderRadius: i ? `${i}px` : 0,
        borderColor: docxLarkUrlPreviewUtils.resolveColorValue(n)
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
        elementId: i
      } = this.props;
      let n = e.style;
      if (n) {
        let r = Object.assign({
          color: docxLarkUrlPreviewUtils.resolveColorValue(n.textColorV2),
          background: docxLarkUrlPreviewUtils.resolveGradient(n.backgroundColor),
          width: !n.width && n.maxWidth ? docxLarkUrlPreviewUtils.formatSizeValue(n.maxWidth) : docxLarkUrlPreviewUtils.formatSizeValue(n.width),
          height: docxLarkUrlPreviewUtils.formatSizeValue(n.height),
          maxWidth: !n.width && n.maxWidth ? "100%" : docxLarkUrlPreviewUtils.formatSizeValue(n.maxWidth),
          maxHeight: docxLarkUrlPreviewUtils.formatSizeValue(n.maxHeight),
          minWidth: docxLarkUrlPreviewUtils.formatSizeValue(n.minWidth),
          minHeight: docxLarkUrlPreviewUtils.formatSizeValue(n.minHeight),
          flexGrow: n.growWeight,
          flexShrink: n.shrinkWeight
        }, this.parseFontLevel(n.fontLevel), this.parseBorder(n.border), this.parseAspectRatio(n.aspectRatio), t);
        if (e.type === errorConstantsCodes.Cdw.LINEAR_LAYOUT) {
          r.overflow = "hidden";
        }
        if (i === "root" && !r.maxWidth) {
          r.maxWidth = b.defaultRootCardMaxWidth;
        }
        if (e.type === errorConstantsCodes.Cdw.EMPTY) {
          r.overflow = "hidden";
        }
        return r;
      }
      return t;
    }
    render() {
      var e;
      var t;
      let {
        element: i,
        elementId: n
      } = this.props;
      if (!i) {
        if ((e = docxLarkUrlPreviewUtils.previewConfig?.logging) !== null && e !== undefined) {
          e.error("[Message OpenUrlPreview] element not exist");
        }
        return null;
      }
      let r = docxLarkUrlPreviewUtils.getRegisteredModule(i.type);
      if (!r) {
        if ((t = docxLarkUrlPreviewUtils.previewConfig?.logging) !== null && t !== undefined) {
          t.error("[Message OpenUrlPreview] element module not exist");
        }
        r = docxLarkUrlPreviewUtils.getRegisteredModule(cardPreviewLocaleConstants_1.cardPreviewConstant.EMPTY);
      }
      if (!(r == null ? undefined : r.Component)) {
        return null;
      }
      let {
        Component: o,
        parseStyle: s,
        wrapClassName: l
      } = r;
      let a = D(O, l);
      let c = this.parseStyle();
      let u = Object.keys(cardPreviewLocaleConstants_1.cardPreviewConstant).find(e => cardPreviewLocaleConstants_1.cardPreviewConstant[e] === i.type);
      let g = stringDeburrUtil_1.deburrString(u);
      if (g && !this.props.element[g]) {
        this.props.element[g] = {};
      }
      return reactCoreLibraryReexport.createElement("div", {
        className: a,
        "data-element-id": n,
        style: s ? s(c) : c
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
  let L = {
    width: "100%",
    height: "100%"
  };
  class x extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      this.onClickHandler = e => {
        let i = this.props.element.empty?.actionId;
        if (i) {
          e.stopPropagation();
          this.props.doAction(i);
          this.props.trackPageClick({
            clickType: "container",
            componentId: this.props.elementId,
            actionId: i
          });
        }
      };
      this.updateStyle = e => {
        let t = {};
        if (e.background) {
          t.background = docxLarkUrlPreviewUtils.resolveColorValue(e.background);
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
        elementEntity: i
      } = this.props;
      let {
        childIds: n
      } = t;
      let {
        elements: r
      } = i;
      let o = Object.assign(Object.assign({}, this.props), {
        style: {}
      });
      let s = t.empty?.actionId ? {
        cursor: "pointer"
      } : {};
      let l = Object.assign(Object.assign(Object.assign({}, L), this.state.style), s);
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
        style: l
      }, n && r && n.map(e => reactCoreLibraryReexport.createElement(b, Object.assign({}, o, {
        key: e,
        element: r[e],
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
  var docxUrlPreviewComponents = require("docx-url-preview-components") /*id: 75487*/;
  var withLocaleConfig = require("with-locale-config") /*id: 466930*/;
  var docxPreviewResolver = require("docx-preview-resolver") /*id: 413984*/;
  let F = `${docxLarkUrlPreviewUtils.componentName}-element-header`;
  class V extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      this.titleRef = reactCoreLibraryReexport.createRef();
      this.handleClickCopyLink = e => {
        e.stopPropagation();
        let {
          urlPreviewEntity: n
        } = this.props;
        if (n.url?.url) {
          docxLarkUrlPreviewUtils.copyToClipboard(n.url?.url || "");
          toastNotificationManagerWrapper.toastManagerWrapper.success(docxPreviewResolver.resolvePreview(this.props.config.lang.UrlPreview.Lark_Chat_CopyDocsURL));
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
      }, docxPreviewResolver.resolvePreview(this.props.config.lang.UrlPreview.Lark_Chat_CopyLink)), reactCoreLibraryReexport.createElement(uiMenuComponent.Menu.Item, {
        key: "close-preview",
        icon: reactCoreLibraryReexport.createElement(visibleLockOutlinedIcon.VisibleLockOutlined, null),
        onClick: e => this.handleClickClose(e.domEvent)
      }, docxPreviewResolver.resolvePreview(this.props.config.lang.UrlPreview.Lark_Legacy_DeleteUrlPreview)));
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
          let i = (t = this.titleRef.current) === null || t === undefined ? undefined : t.querySelector(`.${F}__title-text`);
          let n = !!i && docxLarkUrlPreviewUtils.hasOverflow(i);
          let r = e[0].contentRect.width;
          this.setState({
            isWide: r > V.minTitleWidth || !n
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
        elements: i
      } = t;
      let {
        childComponentId: n
      } = e.header;
      if (!n || !i) {
        return null;
      }
      let r = Object.assign(Object.assign({}, this.props), {
        style: {}
      });
      return reactCoreLibraryReexport.createElement("div", {
        className: `${F}__element-slot`
      }, n && reactCoreLibraryReexport.createElement(b, Object.assign({}, r, {
        element: i[n]
      })));
    }
    renderToolbar() {
      let {
        element: e,
        urlPreviewClosable: t
      } = this.props;
      let {
        isNeedCopyLink: i,
        isNeedClose: n
      } = e.header;
      if (!i && !n) {
        return null;
      }
      let r = t && n;
      return reactCoreLibraryReexport.createElement("div", {
        className: `${F}__toolbar`
      }, i && !r && reactCoreLibraryReexport.createElement(tooltipComponentModule.TooltipComponent, {
        title: docxPreviewResolver.resolvePreview(this.props.config.lang.UrlPreview.Lark_Chat_CopyLink)
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${F}__toolbar-item`,
        onClick: this.handleClickCopyLink
      }, reactCoreLibraryReexport.createElement(iconButtonComponent.IconButton, {
        icon: reactCoreLibraryReexport.createElement(copyOutlinedIcon.CopyOutlinedIcon, null),
        size: "small"
      }))), r && !i && reactCoreLibraryReexport.createElement(tooltipComponentModule.TooltipComponent, {
        title: docxPreviewResolver.resolvePreview(this.props.config.lang.UrlPreview.Lark_Legacy_DeleteUrlPreview)
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${F}__toolbar-item`,
        onClick: this.handleClickClose
      }, reactCoreLibraryReexport.createElement(iconButtonComponent.IconButton, {
        icon: reactCoreLibraryReexport.createElement(visibleLockOutlinedIcon.VisibleLockOutlined, null),
        size: "small"
      }))), i && r && reactCoreLibraryReexport.createElement(dropdownComponent_2.Dropdown, {
        overlay: this.renderMoreMenu(),
        placement: "bottomRight",
        trigger: "click"
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${F}__toolbar-item`,
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
        iconUrl: i
      } = this.props;
      let {
        image: n,
        udFontIcon: r
      } = this.props;
      if (t) {
        let e = docxLarkUrlPreviewUtils.resolveColorValue(t.color);
        return reactCoreLibraryReexport.createElement("div", {
          className: `${F}__title-icon`
        }, reactCoreLibraryReexport.createElement(r, {
          icon: t.key,
          size: 16,
          color: e
        }), ";");
      }
      let o = i || null;
      let s = docxLarkUrlPreviewUtils.resolveColorValue(e, true);
      if (o) {
        return reactCoreLibraryReexport.createElement("div", {
          className: `${F}__title-icon`
        }, s ? reactCoreLibraryReexport.createElement(docxUrlPreviewComponents.dyeImageSvg, {
          imageUrl: o,
          width: 16,
          height: 16,
          color: s
        }) : reactCoreLibraryReexport.createElement(n, {
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
          className: `${F}__title-text`
        }, e));
      } else {
        return null;
      }
    }
    renderTitleTag() {
      let {
        larkTag: e,
        tagColor: t,
        tagTextColor: i,
        headerTag: n
      } = this.props.element.header;
      if (e || t && i && n) {
        if (e) {
          return reactCoreLibraryReexport.createElement("div", {
            className: `${F}__title-tag`
          });
        } else {
          return reactCoreLibraryReexport.createElement("div", {
            className: `${F}__title-tag`
          }, reactCoreLibraryReexport.createElement("div", {
            className: "ud__tag ud__tag-xs",
            style: {
              backgroundColor: docxLarkUrlPreviewUtils.resolveColorValue(t),
              color: docxLarkUrlPreviewUtils.resolveColorValue(i)
            }
          }, reactCoreLibraryReexport.createElement("div", {
            className: "ud__tag__content"
          }, n)));
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
      let i = D(F, {
        [`${F}--light`]: t.theme === errorConstantsCodes.qZn.LIGHT,
        [`${F}--dark`]: t.theme === errorConstantsCodes.qZn.DARK,
        [`${F}--normal`]: t.type === errorConstantsCodes.R0R.NORMAL,
        [`${F}--headlines`]: t.type === errorConstantsCodes.R0R.HEADLINES,
        [`${F}--title-narrow`]: !e
      });
      return reactCoreLibraryReexport.createElement("div", {
        className: i
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${F}__top`
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${F}__title`,
        ref: this.titleRef
      }, this.renderTitleIcon(), this.renderTitleText(), this.renderTitleTag()), this.renderElementSlot(), this.renderToolbar()), reactCoreLibraryReexport.createElement("div", {
        className: `${F}__sub`
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${F}__title`
      }, this.renderTitleText(), this.renderTitleTag())));
    }
  }
  V.minTitleWidth = 150;
  let K = `${F}--wrap`;
  let J = withLocaleConfig.withLocaleConfig(V);
  let $ = `${docxLarkUrlPreviewUtils.componentName}-element-linear-layout`;
  class X extends reactCoreLibraryReexport.Component {
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
      let t = X.orientationMap[e.orientation];
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
        linearLayout: i
      } = t;
      if (i.sidePadding) {
        return i.sidePadding[e];
      } else {
        return i.padding;
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
        linearLayout: i
      } = e;
      return {
        flexDirection: this.parseOrientation(i),
        justifyContent: X.justifyMap[i.mainAxisJustify],
        alignItems: t ? "stretch" : X.alignMap[i.crossAxisAlign],
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
        elementEntity: i
      } = this.props;
      let {
        childIds: n
      } = t;
      let {
        elements: r
      } = i;
      let {
        linearLayout: o
      } = t;
      let s = this.parseStyle();
      let l = {};
      if (o.spacing) {
        if (e || o.orientation === errorConstantsCodes.MCT.COLUMN || o.orientation === errorConstantsCodes.MCT.COLUMN_REVERSE) {
          l.marginTop = o.spacing;
        } else if (!e) {
          l.marginLeft = o.spacing;
        }
      }
      let a = D({
        [$]: true,
        [`${$}--${s.flexDirection}`]: true,
        [`${$}--wrapped`]: e
      });
      return reactCoreLibraryReexport.createElement("div", {
        className: a,
        style: s,
        ref: this.containerRef
      }, n && r && n.map((e, t) => reactCoreLibraryReexport.createElement(b, Object.assign({}, this.props, {
        key: e,
        element: r[e],
        elementId: e,
        style: t > 0 ? l : Object.assign(Object.assign({}, l), {
          marginLeft: 0,
          marginTop: 0
        })
      }))));
    }
  }
  X.orientationMap = {
    [errorConstantsCodes.MCT.ROW]: "row",
    [errorConstantsCodes.MCT.COLUMN]: "column",
    [errorConstantsCodes.MCT.ROW_REVERSE]: "row-reverse",
    [errorConstantsCodes.MCT.COLUMN_REVERSE]: "column-reverse"
  };
  X.justifyMap = {
    [errorConstantsCodes.upw.START]: "start",
    [errorConstantsCodes.upw.CENTER]: "center",
    [errorConstantsCodes.upw.END]: "end",
    [errorConstantsCodes.upw.SPACE_BETWEEN]: "space-between",
    [errorConstantsCodes.upw.SPACE_ARROUND]: "space-around",
    [errorConstantsCodes.upw.SPACE_EVENLY]: "space-evenly"
  };
  X.alignMap = {
    [errorConstantsCodes.Mq_.TOP]: "start",
    [errorConstantsCodes.Mq_.MIDDLE]: "center",
    [errorConstantsCodes.Mq_.BOTTOM]: "end",
    [errorConstantsCodes.Mq_.STRETCH]: "stretch",
    [errorConstantsCodes.Mq_.BASELINE]: "baseline"
  };
  var selectComponent = require("select-component") /*id: 408721*/;
  let ee = `${docxLarkUrlPreviewUtils.componentName}-element-spin-button`;
  function et(e) {
    let {
      items: t,
      selectedIndex: i
    } = e.element.spinButton;
    let n = t[i];
    let [r, o] = reactCoreLibraryReexport.useState(n);
    let [s, l] = reactCoreLibraryReexport.useState(n.actionId);
    if (r.actionId !== n.actionId) {
      o(n);
      l(n.actionId);
    }
    return reactCoreLibraryReexport.createElement("div", {
      onClick: e => e.stopPropagation()
    }, reactCoreLibraryReexport.createElement(selectComponent.Select, {
      value: s,
      bordered: false,
      size: "small",
      onChange: t => {
        if (t) {
          e.doAction(t);
          l(t);
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
  let ei = `${docxLarkUrlPreviewUtils.componentName}-element-tag-list`;
  function en(e) {
    let {
      tags: t
    } = e.element.tagList;
    let i = e.element.style;
    let n = i ? {
      color: docxLarkUrlPreviewUtils.resolveColorValue(i.textColorV2),
      background: docxLarkUrlPreviewUtils.resolveGradient(i.backgroundColor)
    } : undefined;
    return reactCoreLibraryReexport.createElement("div", {
      className: ei
    }, t == null ? undefined : t.map((e, t) => reactCoreLibraryReexport.createElement("div", {
      className: `${ei}__item`,
      style: n,
      key: t
    }, e)));
  }
  function er(e) {
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
  let es = `${docxLarkUrlPreviewUtils.componentName}-element-text`;
  function el(e) {
    let {
      text: i
    } = e.element;
    let n = i.numberOfLines ? eo(i.numberOfLines) : undefined;
    return reactCoreLibraryReexport.createElement("div", {
      className: D({
        [es]: true,
        [`${es}--clickable`]: !!i.actionId?.length
      }),
      onClick: t => {
        if (i.actionId) {
          t.stopPropagation();
          e.doAction(i.actionId);
          e.trackPageClick({
            clickType: "text",
            componentId: e.elementId
          });
        }
      },
      style: n
    }, i.text);
  }
  let ea = `${es}__wrap`;
  (r = d ||= {})[r.UNKNOWN_URL = 0] = "UNKNOWN_URL";
  r[r.BEAR = 1] = "BEAR";
  (o = I ||= {})[o.UNKNOWN_MENTION_TYPE = 0] = "UNKNOWN_MENTION_TYPE";
  o[o.HASH_TAG = 1] = "HASH_TAG";
  var docxUrlPreviewUtils = require("docx-url-preview-utils") /*id: 217188*/;
  require("docx-url-preview-open") /*id: 974086*/;
  let eu = reactCoreLibraryReexport.lazy(() => Promise.all([require.e("user-dashboard-chunk") /*id: 75994*/, require.e("ext-last-update-info") /*id: 61208*/]).then(require.bind(require, "file-last-updated-info-component") /*id: 113515*/));
  function eg(e) {
    let {
      richText: i
    } = e;
    let n = Object.values(i.elements).filter(e => {
      return e.tag === errorConstantsCodes.HSs.A && e.property?.anchor?.specialUrl === d.BEAR;
    });
    let r = n.length === 1 ? n[0].urlPreviewHangPoint?.previewId : undefined;
    let o = docxUrlPreviewUtils.useUrlPreview(r);
    if (o == null ? undefined : o.extInfo) {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Suspense, {
        fallback: ""
      }, reactCoreLibraryReexport.createElement(eu, {
        extInfo: o == null ? undefined : o.extInfo
      }));
    } else {
      return null;
    }
  }
  let eM = "//client/preview/action?actionID=";
  function ed(e) {
    let {
      element: r,
      elementId: o,
      doAction: s,
      trackPageClick: l,
      udFontIcon: a
    } = e;
    let {
      richtext: {
        richtext: c,
        numberOfLines: u,
        showUpdateTime: g
      }
    } = r;
    let M = reactCoreLibraryReexport.useMemo(() => Object.assign(Object.assign({}, u ? eo(u) : {}), {
      overflow: "hidden"
    }), [u]);
    return reactCoreLibraryReexport.createElement("div", {
      className: `${docxLarkUrlPreviewUtils.componentName}-element-richtext`,
      style: M
    }, reactCoreLibraryReexport.createElement(docxUrlPreviewComponents.richTextRenderer, {
      platform: docxLarkUrlPreviewUtils.previewConfig.platform,
      udFontIcon: a,
      richText: c,
      UserProfile: docxLarkUrlPreviewUtils.previewConfig.registeredComponents?.UserProfile,
      Emoji: docxLarkUrlPreviewUtils.previewConfig.registeredComponents?.Emoji,
      MentionWrapper: docxLarkUrlPreviewUtils.previewConfig.registeredComponents?.MentionWrapper,
      onElementClick: (e, t) => {
        if (t.tag !== errorConstantsCodes.HSs.A) {
          return;
        }
        let {
          link: i
        } = t.payload;
        if (e && i) {
          if (i.startsWith(eM)) {
            e.preventDefault();
            e.stopPropagation();
            s(i.replace(eM, ""));
          }
          if (l != null) {
            l({
              clickType: "page_click",
              componentId: o
            });
          }
        }
      }
    }), g && reactCoreLibraryReexport.createElement(eg, {
      richText: c
    }));
  }
  var loadingComponent = require("loading-component") /*id: 666260*/;
  var loadfailFilledIcon = require("loadfail-filled-icon") /*id: 741199*/;
  var globalLinkOutlinedIcon = require("global-link-outlined-icon") /*id: 70621*/;
  (s = p ||= {})[s.INIT = 0] = "INIT";
  s[s.LOADING = 1] = "LOADING";
  s[s.SUCCESS = 2] = "SUCCESS";
  s[s.ERROR = 3] = "ERROR";
  s[s.EMPTY = 4] = "EMPTY";
  let eh = `${docxLarkUrlPreviewUtils.componentName}-element-image`;
  function eN(e) {
    let [a, c] = reactCoreLibraryReexport.useState(p.INIT);
    let u = e.element?.style || {};
    let g = e.element?.image?.udIcon;
    let {
      imageUrl: M,
      loading: d
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (d) {
        c(p.LOADING);
        return;
      }
      if (!M) {
        c(p.EMPTY);
        return;
      }
      let e = new window.Image();
      e.src = M;
      c(p.LOADING);
      e.onload = () => {
        c(p.SUCCESS);
      };
      e.onerror = () => {
        c(p.ERROR);
      };
    }, [M, d]);
    if (g) {
      let t = docxLarkUrlPreviewUtils.resolveColorValue(g.color);
      let {
        udFontIcon: i
      } = e;
      return reactCoreLibraryReexport.createElement(i, {
        icon: g.key,
        color: t,
        size: Number((u == null ? undefined : u.width)?.value) || 16
      });
    }
    let I = docxLarkUrlPreviewUtils.resolveColorValue(e.element.style?.textColorV2, true);
    if (I && M && a === p.SUCCESS) {
      return reactCoreLibraryReexport.createElement(docxUrlPreviewComponents.dyeImageSvg, {
        imageUrl: M,
        width: Number(u.width?.value) || 16,
        height: Number(u.height?.value) || 16,
        color: I
      });
    }
    let y = {
      minWidth: u.width ? docxLarkUrlPreviewUtils.formatSizeValue(u.width) : null,
      minHeight: u.height ? docxLarkUrlPreviewUtils.formatSizeValue(u.height) : null
    };
    if (a === p.SUCCESS) {
      y.backgroundImage = `url(${M})`;
    }
    let h = {
      [`${eh}`]: true,
      [`${eh}--gray`]: [p.LOADING, p.ERROR].includes(a)
    };
    return reactCoreLibraryReexport.createElement("div", {
      className: D(h),
      style: y
    }, a === p.LOADING && reactCoreLibraryReexport.createElement(loadingComponent.LoadingComponent, null), a === p.ERROR && reactCoreLibraryReexport.createElement(loadfailFilledIcon.LoadfailFilled, null), a === p.EMPTY && reactCoreLibraryReexport.createElement(globalLinkOutlinedIcon.GlobalLinkOutlined, null));
  }
  let em = `${eh}__wrap`;
  let eC = `${docxLarkUrlPreviewUtils.componentName}-element-button`;
  class eA extends reactCoreLibraryReexport.PureComponent {
    constructor() {
      super(...arguments);
      this.onClickHandler = e => {
        e.stopPropagation();
        let {
          isDisable: t,
          actionId: i
        } = this.props.element.button;
        if (!t && i) {
          this.props.doAction(i);
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
        let t = docxLarkUrlPreviewUtils.resolveColorValue(e.color);
        let {
          udFontIcon: i
        } = this.props;
        return reactCoreLibraryReexport.createElement(i, {
          icon: e.key,
          color: t
        });
      };
    }
    render() {
      let {
        text: e,
        direction: t = errorConstantsCodes.ABS.RTL,
        isDisable: i
      } = this.props.element.button;
      let n = D(eC, {
        [`${eC}--disable`]: i
      });
      let {
        image: r,
        iconUrl: o
      } = this.props;
      return reactCoreLibraryReexport.createElement("div", {
        className: n,
        onClick: this.onClickHandler
      }, t === errorConstantsCodes.ABS.RTL && reactCoreLibraryReexport.createElement("span", {
        className: `${eC}__text`
      }, e), this.renderUdIcon() || o && reactCoreLibraryReexport.createElement(r, {
        src: o
      }), t === errorConstantsCodes.ABS.LTR && reactCoreLibraryReexport.createElement("span", {
        className: `${eC}__text`
      }, e));
    }
  }
  let ef = `${eC}__wrap`;
  let ej = `${docxLarkUrlPreviewUtils.componentName}-element-icon-button`;
  class ev extends reactCoreLibraryReexport.PureComponent {
    constructor() {
      super(...arguments);
      this.onClickHandler = e => {
        e.stopPropagation();
        let {
          isDisable: t,
          actionId: i
        } = this.props.element.iconButton;
        if (!t && i) {
          this.props.doAction(i);
          this.props.trackPageClick({
            clickType: "button",
            componentId: this.props.elementId
          });
        }
      };
    }
    render() {
      let n;
      let {
        isDisable: r,
        alt: o,
        udIcon: s
      } = this.props.element.iconButton;
      let {
        style: l
      } = this.props.element;
      let a = D(ej, {
        [`${ej}--disable`]: r
      });
      if (s) {
        let t = docxLarkUrlPreviewUtils.resolveColorValue(s.color);
        let {
          udFontIcon: i
        } = this.props;
        n = reactCoreLibraryReexport.createElement(i, {
          icon: s.key,
          size: Number((l == null ? undefined : l.width)?.value) || 16,
          color: t
        });
      }
      let {
        iconUrl: c
      } = this.props;
      if (!n && !c) {
        return null;
      }
      let u = docxLarkUrlPreviewUtils.resolveColorValue(l == null ? undefined : l.textColorV2, true);
      return reactCoreLibraryReexport.createElement(tooltipComponentModule.TooltipComponent, {
        title: o
      }, reactCoreLibraryReexport.createElement("div", {
        className: a,
        onClick: this.onClickHandler
      }, reactCoreLibraryReexport.createElement(iconButtonComponent.IconButton, {
        icon: n || reactCoreLibraryReexport.createElement(docxUrlPreviewComponents.dyeImageSvg, {
          imageUrl: c,
          width: Number((l == null ? undefined : l.width)?.value) || 16,
          height: Number((l == null ? undefined : l.height)?.value) || 16,
          color: u || undefined
        }),
        size: "small"
      })));
    }
  }
  function eD(e) {
    e = Object.assign({}, e);
    delete e.height;
    delete e.width;
    return e;
  }
  var webCoreConfigManager = require("web-core-config-manager") /*id: 406357*/;
  var reactHooksUtilities = require("react-hooks-utilities") /*id: 810817*/;
  (l = y ||= {}).message = "message-doc-preview";
  l.trigger = "trigger-doc-preview";
  (a = h ||= {})[a.UNKNOWN = 0] = "UNKNOWN";
  a[a.DOC = 1] = "DOC";
  a[a.SHEET = 2] = "SHEET";
  a[a.BITABLE = 3] = "BITABLE";
  a[a.MINDNOTE = 4] = "MINDNOTE";
  a[a.FILE = 5] = "FILE";
  a[a.SLIDE = 6] = "SLIDE";
  (c = N ||= {})[c.NORMAL = 1000] = "NORMAL";
  c[c.BLANK = 9009] = "BLANK";
  c[c.DELETED = 9010] = "DELETED";
  require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var eE = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDAwcHgiIGhlaWdodD0iMjA0cHgiIHZpZXdCb3g9IjAgMCA0MDAgMjA0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Ny4xICg4MzA4OCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+6KOC5Zu+5aSnPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IuijguWbvuWkpyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDQiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0iaWNvbl9wbGFjZWhvbGRlcl9JbWFnZS1mYWlsZWQtdG8tbG9hZF9ub3IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4NC4wMDAwMDAsIDg2LjAwMDAwMCkiIGZpbGw9IiM5Q0EyQTkiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjAuNzQzNzI0MSwyLjIwNjg5NjU1IEwxOS40NDk5MzEsNC40MTM3OTMxIEwyLjIwNjg5NjU1LDQuNDEzNzkzMSBMMi4yMDY4OTY1NSwxNy4xMDM0NDgzIEw3LjQ5NTcyNDE0LDExLjgxNDYyMDcgQzcuODk1ODQyMzYsMTEuNDE0NTAyNSA4LjUyNjY4NTQzLDExLjM4NTkyMjYgOC45NTk3NjQzNSwxMS43Mjg4ODExIEw5LjA1NiwxMS44MTQ2MjA3IEwxMi44NzM5MzEsMTUuNjMyNTUxNyBMNC41NzI2ODk2NiwyOS43OTMxMDM0IEwxLjEwMzQ0ODI4LDI5Ljc5MzEwMzQgQzAuNTM0OTUxNzI0LDI5Ljc5MzEwMzQgMC4wNjY0MjI2ODIsMjkuMzYyOTU0OCAwLjAwNjQ3ODc5NDM4LDI4LjgwOTkyOTQgTC0yLjEzMTYyODIxZS0xNCwyOC42ODk2NTUyIEwtMi4xMzE2MjgyMWUtMTQsMy4zMTAzNDQ4MyBDLTIuMTMxNjI4MjFlLTE0LDIuNzQxODQ4MjggMC40MzA2MjkyNzIsMi4yNzMzMTkyMyAwLjk4MzI3MDE3MSwyLjIxMzM3NTM1IEwxLjEwMzQ0ODI4LDIuMjA2ODk2NTUgTDIwLjc0MzcyNDEsMi4yMDY4OTY1NSBaIE0zMC44OTY1NTE3LDIuMjA2ODk2NTUgQzMxLjUwNTY1NTIsMi4yMDY4OTY1NSAzMiwyLjcwMTI0MTM4IDMyLDMuMzEwMzQ0ODMgTDMyLDMuMzEwMzQ0ODMgTDMyLDI4LjY4OTY1NTIgQzMyLDI5LjI5ODc1ODYgMzEuNTA1NjU1MiwyOS43OTMxMDM0IDMwLjg5NjU1MTcsMjkuNzkzMTAzNCBMMzAuODk2NTUxNywyOS43OTMxMDM0IEw5LjA0ODgyNzU5LDI5Ljc5MzEwMzQgTDE1LjY5NiwxOC40NTQ2MjA3IEwxOS44NjIwNjksMjIuNjIwNjg5NyBMMjQuNTk5MTcyNCwxNy44ODM1ODYyIEMyNS4wMzAwNjksMTcuNDUyNjg5NyAyNS43Mjg1NTE3LDE3LjQ1MjY4OTcgMjYuMTU5NDQ4MywxNy44ODM1ODYyIEwyNi4xNTk0NDgzLDE3Ljg4MzU4NjIgTDI5Ljc5MzEwMzQsMjEuNTE3MjQxNCBMMjkuNzkzMTAzNCw0LjQxMzc5MzEgTDIzLjkyNjYyMDcsNC40MTM3OTMxIEwyNS4yMjA0MTM4LDIuMjA2ODk2NTUgWiBNMjQuODI3NTg2Miw2LjYyMDY4OTY2IEMyNi4zNTE0NDgzLDYuNjIwNjg5NjYgMjcuNTg2MjA2OSw3Ljg1NTQ0ODI4IDI3LjU4NjIwNjksOS4zNzkzMTAzNCBDMjcuNTg2MjA2OSwxMC45MDMxNzI0IDI2LjM1MTQ0ODMsMTIuMTM3OTMxIDI0LjgyNzU4NjIsMTIuMTM3OTMxIEMyMy4zMDM3MjQxLDEyLjEzNzkzMSAyMi4wNjg5NjU1LDEwLjkwMzE3MjQgMjIuMDY4OTY1NSw5LjM3OTMxMDM0IEMyMi4wNjg5NjU1LDcuODU1NDQ4MjggMjMuMzAzNzI0MSw2LjYyMDY4OTY2IDI0LjgyNzU4NjIsNi42MjA2ODk2NiBaIiBpZD0i5b2i54q257uT5ZCIIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
  var ez = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDAwcHgiIGhlaWdodD0iMjA0cHgiIHZpZXdCb3g9IjAgMCA0MDAgMjA0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1OS4xICg4NjE0NCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+cGMtbGFyay3lpKflm77oi7Hmloc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMi4zMTUzNzUzLDAgTDI0LjA1Nzk2MzMsMCBDMjQuNDY3MzQ3MSwtMS4wMjQ0NTg5MmUtMTUgMjQuODU5OTYzNiwwLjE2MjYyNzA4NCAyNS4xNDk0NDE3LDAuNDUyMTA1MTUgTDMzLjUwNjczMjYsOC44MDkzOTYwNiBDMzMuNzk2MjEwNyw5LjA5ODg3NDEzIDMzLjk1ODgzNzgsOS40OTE0OTA2NCAzMy45NTg4Mzc4LDkuOTAwODc0NDUgTDMzLjk1ODgzNzgsNDAuOTA0OTYzNyBDMzMuOTU4ODM3OCw0Mi4xODM3MTAyIDMyLjkyMjIwODksNDMuMjIwMzM5IDMxLjY0MzQ2MjUsNDMuMjIwMzM5IEwyLjMxNTM3NTMsNDMuMjIwMzM5IEMxLjAzNjYyODgzLDQzLjIyMDMzOSAzLjI0MzU2NTQyZS0xNSw0Mi4xODM3MTAyIDAsNDAuOTA0OTYzNyBMMCwyLjMxNTM3NTMgQy0xLjU2NjAxMjc3ZS0xNiwxLjAzNjYyODgzIDEuMDM2NjI4ODMsLTYuNTMyNzY1MDRlLTE2IDIuMzE1Mzc1MywwIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJwYy1sYXJrLeWkp+WbvuiLseaWhyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDQiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0ibmV0d29yay1lcnJvci1ub3JtYWxfY29weSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDQiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9Iue8lue7hCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU0LjAwMDAwMCwgNjYuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uX2ZpbGVfZG9jX25vciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjkuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Imljb25fYmx1ZV8yOCI+CiAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iI0RFRTBFMyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNC42OTczMzY2LC0xLjU0MzU4MzU0IEwzNS41MDI0MjEzLDkuMjYxNTAxMjEgTDI3LjAxMjcxMTksOS4yNjE1MDEyMSBDMjUuNzMzOTY1NCw5LjI2MTUwMTIxIDI0LjY5NzMzNjYsOC4yMjQ4NzIzOCAyNC42OTczMzY2LDYuOTQ2MTI1OTEgTDI0LjY5NzMzNjYsLTEuNTQzNTgzNTQgTDI0LjY5NzMzNjYsLTEuNTQzNTgzNTQgWiIgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0JCQkZDNCIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IuefqeW9oiIgcG9pbnRzPSI0LjYzMDc1MDYxIDEzLjg5MjI1MTggMjkuMzI4MDg3MiAxMy44OTIyNTE4IDI5LjMyODA4NzIgMzguNTg5NTg4NCA0LjYzMDc1MDYxIDM4LjU4OTU4ODQiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC4yMTQyODU3LDMyLjQxNTI1NDIgQzE4LjM4NDc4NTIsMzIuNDE1MjU0MiAxOC41MjMwMDI0LDMyLjU1MzQ3MTQgMTguNTIzMDAyNCwzMi43MjM5NzA5IEwxOC41MjMwMDI0LDM0LjQyMTkxMjggQzE4LjUyMzAwMjQsMzQuNTkyNDEyNCAxOC4zODQ3ODUyLDM0LjczMDYyOTUgMTguMjE0Mjg1NywzNC43MzA2Mjk1IEw4LjAyNjYzNDM4LDM0LjczMDYyOTUgQzcuODU2MTM0ODUsMzQuNzMwNjI5NSA3LjcxNzkxNzY4LDM0LjU5MjQxMjQgNy43MTc5MTc2OCwzNC40MjE5MTI4IEw3LjcxNzkxNzY4LDMyLjcyMzk3MDkgQzcuNzE3OTE3NjgsMzIuNTUzNDcxNCA3Ljg1NjEzNDg1LDMyLjQxNTI1NDIgOC4wMjY2MzQzOCwzMi40MTUyNTQyIEwxOC4yMTQyODU3LDMyLjQxNTI1NDIgWiBNMjUuOTMyMjAzNCwyNS40NjkxMjgzIEMyNi4xMDI3MDI5LDI1LjQ2OTEyODMgMjYuMjQwOTIwMSwyNS42MDczNDU1IDI2LjI0MDkyMDEsMjUuNzc3ODQ1IEwyNi4yNDA5MjAxLDI3LjQ3NTc4NjkgQzI2LjI0MDkyMDEsMjcuNjQ2Mjg2NSAyNi4xMDI3MDI5LDI3Ljc4NDUwMzYgMjUuOTMyMjAzNCwyNy43ODQ1MDM2IEw4LjAyNjYzNDM4LDI3Ljc4NDUwMzYgQzcuODU2MTM0ODUsMjcuNzg0NTAzNiA3LjcxNzkxNzY4LDI3LjY0NjI4NjUgNy43MTc5MTc2OCwyNy40NzU3ODY5IEw3LjcxNzkxNzY4LDI1Ljc3Nzg0NSBDNy43MTc5MTc2OCwyNS42MDczNDU1IDcuODU2MTM0ODUsMjUuNDY5MTI4MyA4LjAyNjYzNDM4LDI1LjQ2OTEyODMgTDI1LjkzMjIwMzQsMjUuNDY5MTI4MyBaIE0yNS45MzIyMDM0LDE4LjUyMzAwMjQgQzI2LjEwMjcwMjksMTguNTIzMDAyNCAyNi4yNDA5MjAxLDE4LjY2MTIxOTYgMjYuMjQwOTIwMSwxOC44MzE3MTkxIEwyNi4yNDA5MjAxLDIwLjUyOTY2MSBDMjYuMjQwOTIwMSwyMC43MDAxNjA1IDI2LjEwMjcwMjksMjAuODM4Mzc3NyAyNS45MzIyMDM0LDIwLjgzODM3NzcgTDguMDI2NjM0MzgsMjAuODM4Mzc3NyBDNy44NTYxMzQ4NSwyMC44MzgzNzc3IDcuNzE3OTE3NjgsMjAuNzAwMTYwNSA3LjcxNzkxNzY4LDIwLjUyOTY2MSBMNy43MTc5MTc2OCwxOC44MzE3MTkxIEM3LjcxNzkxNzY4LDE4LjY2MTIxOTYgNy44NTYxMzQ4NSwxOC41MjMwMDI0IDguMDI2NjM0MzgsMTguNTIzMDAyNCBMMjUuOTMyMjAzNCwxOC41MjMwMDI0IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDx0ZXh0IGlkPSJCbGFuay1Eb2N1bWVudCIgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZpbGw9IiM2NDZBNzMiPgogICAgICAgICAgICAgICAgPHRzcGFuIHg9IjAiIHk9IjYyIj5CbGFuayBEb2N1bWVudDwvdHNwYW4+CiAgICAgICAgICAgIDwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
  var eO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjU4cHgiIGhlaWdodD0iMTk1cHgiIHZpZXdCb3g9IjAgMCAyNTggMTk1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1OS4xICg4NjE0NCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+cGMtbGFyay3lsI/lm77oi7Hmloc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMi4zMTUzNzUzLDAgTDI0LjA1Nzk2MzMsMCBDMjQuNDY3MzQ3MSwtMS4wMjQ0NTg5MmUtMTUgMjQuODU5OTYzNiwwLjE2MjYyNzA4NCAyNS4xNDk0NDE3LDAuNDUyMTA1MTUgTDMzLjUwNjczMjYsOC44MDkzOTYwNiBDMzMuNzk2MjEwNyw5LjA5ODg3NDEzIDMzLjk1ODgzNzgsOS40OTE0OTA2NCAzMy45NTg4Mzc4LDkuOTAwODc0NDUgTDMzLjk1ODgzNzgsNDAuOTA0OTYzNyBDMzMuOTU4ODM3OCw0Mi4xODM3MTAyIDMyLjkyMjIwODksNDMuMjIwMzM5IDMxLjY0MzQ2MjUsNDMuMjIwMzM5IEwyLjMxNTM3NTMsNDMuMjIwMzM5IEMxLjAzNjYyODgzLDQzLjIyMDMzOSAzLjI0MzU2NTQyZS0xNSw0Mi4xODM3MTAyIDAsNDAuOTA0OTYzNyBMMCwyLjMxNTM3NTMgQy0xLjU2NjAxMjc3ZS0xNiwxLjAzNjYyODgzIDEuMDM2NjI4ODMsLTYuNTMyNzY1MDRlLTE2IDIuMzE1Mzc1MywwIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJwYy1sYXJrLeWwj+WbvuiLseaWhyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjI1OCIgaGVpZ2h0PSIxOTUiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0iaWNvbl9maWxlX2RvY19ub3IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMi4wMDAwMDAsIDYyLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbl9ibHVlXzI4Ij4KICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iI0RFRTBFMyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LjY5NzMzNjYsLTEuNTQzNTgzNTQgTDM1LjUwMjQyMTMsOS4yNjE1MDEyMSBMMjcuMDEyNzExOSw5LjI2MTUwMTIxIEMyNS43MzM5NjU0LDkuMjYxNTAxMjEgMjQuNjk3MzM2Niw4LjIyNDg3MjM4IDI0LjY5NzMzNjYsNi45NDYxMjU5MSBMMjQuNjk3MzM2NiwtMS41NDM1ODM1NCBMMjQuNjk3MzM2NiwtMS41NDM1ODM1NCBaIiBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjQkJCRkM0IiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8cG9seWdvbiBpZD0i55+p5b2iIiBwb2ludHM9IjQuNjMwNzUwNjEgMTMuODkyMjUxOCAyOS4zMjgwODcyIDEzLjg5MjI1MTggMjkuMzI4MDg3MiAzOC41ODk1ODg0IDQuNjMwNzUwNjEgMzguNTg5NTg4NCI+PC9wb2x5Z29uPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjE0Mjg1NywzMi40MTUyNTQyIEMxOC4zODQ3ODUyLDMyLjQxNTI1NDIgMTguNTIzMDAyNCwzMi41NTM0NzE0IDE4LjUyMzAwMjQsMzIuNzIzOTcwOSBMMTguNTIzMDAyNCwzNC40MjE5MTI4IEMxOC41MjMwMDI0LDM0LjU5MjQxMjQgMTguMzg0Nzg1MiwzNC43MzA2Mjk1IDE4LjIxNDI4NTcsMzQuNzMwNjI5NSBMOC4wMjY2MzQzOCwzNC43MzA2Mjk1IEM3Ljg1NjEzNDg1LDM0LjczMDYyOTUgNy43MTc5MTc2OCwzNC41OTI0MTI0IDcuNzE3OTE3NjgsMzQuNDIxOTEyOCBMNy43MTc5MTc2OCwzMi43MjM5NzA5IEM3LjcxNzkxNzY4LDMyLjU1MzQ3MTQgNy44NTYxMzQ4NSwzMi40MTUyNTQyIDguMDI2NjM0MzgsMzIuNDE1MjU0MiBMMTguMjE0Mjg1NywzMi40MTUyNTQyIFogTTI1LjkzMjIwMzQsMjUuNDY5MTI4MyBDMjYuMTAyNzAyOSwyNS40NjkxMjgzIDI2LjI0MDkyMDEsMjUuNjA3MzQ1NSAyNi4yNDA5MjAxLDI1Ljc3Nzg0NSBMMjYuMjQwOTIwMSwyNy40NzU3ODY5IEMyNi4yNDA5MjAxLDI3LjY0NjI4NjUgMjYuMTAyNzAyOSwyNy43ODQ1MDM2IDI1LjkzMjIwMzQsMjcuNzg0NTAzNiBMOC4wMjY2MzQzOCwyNy43ODQ1MDM2IEM3Ljg1NjEzNDg1LDI3Ljc4NDUwMzYgNy43MTc5MTc2OCwyNy42NDYyODY1IDcuNzE3OTE3NjgsMjcuNDc1Nzg2OSBMNy43MTc5MTc2OCwyNS43Nzc4NDUgQzcuNzE3OTE3NjgsMjUuNjA3MzQ1NSA3Ljg1NjEzNDg1LDI1LjQ2OTEyODMgOC4wMjY2MzQzOCwyNS40NjkxMjgzIEwyNS45MzIyMDM0LDI1LjQ2OTEyODMgWiBNMjUuOTMyMjAzNCwxOC41MjMwMDI0IEMyNi4xMDI3MDI5LDE4LjUyMzAwMjQgMjYuMjQwOTIwMSwxOC42NjEyMTk2IDI2LjI0MDkyMDEsMTguODMxNzE5MSBMMjYuMjQwOTIwMSwyMC41Mjk2NjEgQzI2LjI0MDkyMDEsMjAuNzAwMTYwNSAyNi4xMDI3MDI5LDIwLjgzODM3NzcgMjUuOTMyMjAzNCwyMC44MzgzNzc3IEw4LjAyNjYzNDM4LDIwLjgzODM3NzcgQzcuODU2MTM0ODUsMjAuODM4Mzc3NyA3LjcxNzkxNzY4LDIwLjcwMDE2MDUgNy43MTc5MTc2OCwyMC41Mjk2NjEgTDcuNzE3OTE3NjgsMTguODMxNzE5MSBDNy43MTc5MTc2OCwxOC42NjEyMTk2IDcuODU2MTM0ODUsMTguNTIzMDAyNCA4LjAyNjYzNDM4LDE4LjUyMzAwMjQgTDI1LjkzMjIwMzQsMTguNTIzMDAyNCBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgaWQ9IkJsYW5rLURvY3VtZW50IiBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgZmlsbD0iIzY0NkE3MyI+CiAgICAgICAgICAgIDx0c3BhbiB4PSI4MyIgeT0iMTI0Ij5CbGFuayBEb2N1bWVudDwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgPC9nPgo8L3N2Zz4=";
  var eb = require.p + "static/svg/deleted-normal.1a142eee.svg";
  var eL = require.p + "static/svg/deleted-trigger.72abbc31.svg";
  let ex = {
    [N.BLANK]: {
      [y.message]: {
        en_US: ez,
        zh_CN: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDAwcHgiIGhlaWdodD0iMjA0cHgiIHZpZXdCb3g9IjAgMCA0MDAgMjA0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1OS4xICg4NjE0NCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+cGMtbGFyay3lpKflm77kuK3mloc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMi4zMTUzNzUzLDAgTDI0LjA1Nzk2MzMsMCBDMjQuNDY3MzQ3MSwtMS4wMjQ0NTg5MmUtMTUgMjQuODU5OTYzNiwwLjE2MjYyNzA4NCAyNS4xNDk0NDE3LDAuNDUyMTA1MTUgTDMzLjUwNjczMjYsOC44MDkzOTYwNiBDMzMuNzk2MjEwNyw5LjA5ODg3NDEzIDMzLjk1ODgzNzgsOS40OTE0OTA2NCAzMy45NTg4Mzc4LDkuOTAwODc0NDUgTDMzLjk1ODgzNzgsNDAuOTA0OTYzNyBDMzMuOTU4ODM3OCw0Mi4xODM3MTAyIDMyLjkyMjIwODksNDMuMjIwMzM5IDMxLjY0MzQ2MjUsNDMuMjIwMzM5IEwyLjMxNTM3NTMsNDMuMjIwMzM5IEMxLjAzNjYyODgzLDQzLjIyMDMzOSAzLjI0MzU2NTQyZS0xNSw0Mi4xODM3MTAyIDAsNDAuOTA0OTYzNyBMMCwyLjMxNTM3NTMgQy0xLjU2NjAxMjc3ZS0xNiwxLjAzNjYyODgzIDEuMDM2NjI4ODMsLTYuNTMyNzY1MDRlLTE2IDIuMzE1Mzc1MywwIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJwYy1sYXJrLeWkp+WbvuS4reaWhyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDQiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0ibmV0d29yay1lcnJvci1ub3JtYWxfY29weSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDQiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9Iue8lue7hCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTc2LjAwMDAwMCwgNjYuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uX2ZpbGVfZG9jX25vciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbl9ibHVlXzI4Ij4KICAgICAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSJNYXNrIiBmaWxsPSIjREVFMEUzIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LjY5NzMzNjYsLTEuNTQzNTgzNTQgTDM1LjUwMjQyMTMsOS4yNjE1MDEyMSBMMjcuMDEyNzExOSw5LjI2MTUwMTIxIEMyNS43MzM5NjU0LDkuMjYxNTAxMjEgMjQuNjk3MzM2Niw4LjIyNDg3MjM4IDI0LjY5NzMzNjYsNi45NDYxMjU5MSBMMjQuNjk3MzM2NiwtMS41NDM1ODM1NCBMMjQuNjk3MzM2NiwtMS41NDM1ODM1NCBaIiBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjQkJCRkM0IiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0i55+p5b2iIiBwb2ludHM9IjQuNjMwNzUwNjEgMTMuODkyMjUxOCAyOS4zMjgwODcyIDEzLjg5MjI1MTggMjkuMzI4MDg3MiAzOC41ODk1ODg0IDQuNjMwNzUwNjEgMzguNTg5NTg4NCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LjIxNDI4NTcsMzIuNDE1MjU0MiBDMTguMzg0Nzg1MiwzMi40MTUyNTQyIDE4LjUyMzAwMjQsMzIuNTUzNDcxNCAxOC41MjMwMDI0LDMyLjcyMzk3MDkgTDE4LjUyMzAwMjQsMzQuNDIxOTEyOCBDMTguNTIzMDAyNCwzNC41OTI0MTI0IDE4LjM4NDc4NTIsMzQuNzMwNjI5NSAxOC4yMTQyODU3LDM0LjczMDYyOTUgTDguMDI2NjM0MzgsMzQuNzMwNjI5NSBDNy44NTYxMzQ4NSwzNC43MzA2Mjk1IDcuNzE3OTE3NjgsMzQuNTkyNDEyNCA3LjcxNzkxNzY4LDM0LjQyMTkxMjggTDcuNzE3OTE3NjgsMzIuNzIzOTcwOSBDNy43MTc5MTc2OCwzMi41NTM0NzE0IDcuODU2MTM0ODUsMzIuNDE1MjU0MiA4LjAyNjYzNDM4LDMyLjQxNTI1NDIgTDE4LjIxNDI4NTcsMzIuNDE1MjU0MiBaIE0yNS45MzIyMDM0LDI1LjQ2OTEyODMgQzI2LjEwMjcwMjksMjUuNDY5MTI4MyAyNi4yNDA5MjAxLDI1LjYwNzM0NTUgMjYuMjQwOTIwMSwyNS43Nzc4NDUgTDI2LjI0MDkyMDEsMjcuNDc1Nzg2OSBDMjYuMjQwOTIwMSwyNy42NDYyODY1IDI2LjEwMjcwMjksMjcuNzg0NTAzNiAyNS45MzIyMDM0LDI3Ljc4NDUwMzYgTDguMDI2NjM0MzgsMjcuNzg0NTAzNiBDNy44NTYxMzQ4NSwyNy43ODQ1MDM2IDcuNzE3OTE3NjgsMjcuNjQ2Mjg2NSA3LjcxNzkxNzY4LDI3LjQ3NTc4NjkgTDcuNzE3OTE3NjgsMjUuNzc3ODQ1IEM3LjcxNzkxNzY4LDI1LjYwNzM0NTUgNy44NTYxMzQ4NSwyNS40NjkxMjgzIDguMDI2NjM0MzgsMjUuNDY5MTI4MyBMMjUuOTMyMjAzNCwyNS40NjkxMjgzIFogTTI1LjkzMjIwMzQsMTguNTIzMDAyNCBDMjYuMTAyNzAyOSwxOC41MjMwMDI0IDI2LjI0MDkyMDEsMTguNjYxMjE5NiAyNi4yNDA5MjAxLDE4LjgzMTcxOTEgTDI2LjI0MDkyMDEsMjAuNTI5NjYxIEMyNi4yNDA5MjAxLDIwLjcwMDE2MDUgMjYuMTAyNzAyOSwyMC44MzgzNzc3IDI1LjkzMjIwMzQsMjAuODM4Mzc3NyBMOC4wMjY2MzQzOCwyMC44MzgzNzc3IEM3Ljg1NjEzNDg1LDIwLjgzODM3NzcgNy43MTc5MTc2OCwyMC43MDAxNjA1IDcuNzE3OTE3NjgsMjAuNTI5NjYxIEw3LjcxNzkxNzY4LDE4LjgzMTcxOTEgQzcuNzE3OTE3NjgsMTguNjYxMjE5NiA3Ljg1NjEzNDg1LDE4LjUyMzAwMjQgOC4wMjY2MzQzOCwxOC41MjMwMDI0IEwyNS45MzIyMDM0LDE4LjUyMzAwMjQgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHRleHQgaWQ9IuepuueZveaWh+ahoyIgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZpbGw9IiM2NDZBNzMiPgogICAgICAgICAgICAgICAgPHRzcGFuIHg9IjAiIHk9IjYyIj7nqbrnmb3mlofmoaM8L3RzcGFuPgogICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",
        ja_JP: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDAwcHgiIGhlaWdodD0iMjA0cHgiIHZpZXdCb3g9IjAgMCA0MDAgMjA0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1OS4xICg4NjE0NCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+cGMtbGFyay3lpKflm77ml6Xmloc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMi4zMTUzNzUzLDAgTDI0LjA1Nzk2MzMsMCBDMjQuNDY3MzQ3MSwtMS4wMjQ0NTg5MmUtMTUgMjQuODU5OTYzNiwwLjE2MjYyNzA4NCAyNS4xNDk0NDE3LDAuNDUyMTA1MTUgTDMzLjUwNjczMjYsOC44MDkzOTYwNiBDMzMuNzk2MjEwNyw5LjA5ODg3NDEzIDMzLjk1ODgzNzgsOS40OTE0OTA2NCAzMy45NTg4Mzc4LDkuOTAwODc0NDUgTDMzLjk1ODgzNzgsNDAuOTA0OTYzNyBDMzMuOTU4ODM3OCw0Mi4xODM3MTAyIDMyLjkyMjIwODksNDMuMjIwMzM5IDMxLjY0MzQ2MjUsNDMuMjIwMzM5IEwyLjMxNTM3NTMsNDMuMjIwMzM5IEMxLjAzNjYyODgzLDQzLjIyMDMzOSAzLjI0MzU2NTQyZS0xNSw0Mi4xODM3MTAyIDAsNDAuOTA0OTYzNyBMMCwyLjMxNTM3NTMgQy0xLjU2NjAxMjc3ZS0xNiwxLjAzNjYyODgzIDEuMDM2NjI4ODMsLTYuNTMyNzY1MDRlLTE2IDIuMzE1Mzc1MywwIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJwYy1sYXJrLeWkp+WbvuaXpeaWhyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDQiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0ibmV0d29yay1lcnJvci1ub3JtYWxfY29weSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDQiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9Iue8lue7hCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcwLjAwMDAwMCwgNjYuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uX2ZpbGVfZG9jX25vciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Imljb25fYmx1ZV8yOCI+CiAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iI0RFRTBFMyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNC42OTczMzY2LC0xLjU0MzU4MzU0IEwzNS41MDI0MjEzLDkuMjYxNTAxMjEgTDI3LjAxMjcxMTksOS4yNjE1MDEyMSBDMjUuNzMzOTY1NCw5LjI2MTUwMTIxIDI0LjY5NzMzNjYsOC4yMjQ4NzIzOCAyNC42OTczMzY2LDYuOTQ2MTI1OTEgTDI0LjY5NzMzNjYsLTEuNTQzNTgzNTQgTDI0LjY5NzMzNjYsLTEuNTQzNTgzNTQgWiIgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0JCQkZDNCIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IuefqeW9oiIgcG9pbnRzPSI0LjYzMDc1MDYxIDEzLjg5MjI1MTggMjkuMzI4MDg3MiAxMy44OTIyNTE4IDI5LjMyODA4NzIgMzguNTg5NTg4NCA0LjYzMDc1MDYxIDM4LjU4OTU4ODQiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC4yMTQyODU3LDMyLjQxNTI1NDIgQzE4LjM4NDc4NTIsMzIuNDE1MjU0MiAxOC41MjMwMDI0LDMyLjU1MzQ3MTQgMTguNTIzMDAyNCwzMi43MjM5NzA5IEwxOC41MjMwMDI0LDM0LjQyMTkxMjggQzE4LjUyMzAwMjQsMzQuNTkyNDEyNCAxOC4zODQ3ODUyLDM0LjczMDYyOTUgMTguMjE0Mjg1NywzNC43MzA2Mjk1IEw4LjAyNjYzNDM4LDM0LjczMDYyOTUgQzcuODU2MTM0ODUsMzQuNzMwNjI5NSA3LjcxNzkxNzY4LDM0LjU5MjQxMjQgNy43MTc5MTc2OCwzNC40MjE5MTI4IEw3LjcxNzkxNzY4LDMyLjcyMzk3MDkgQzcuNzE3OTE3NjgsMzIuNTUzNDcxNCA3Ljg1NjEzNDg1LDMyLjQxNTI1NDIgOC4wMjY2MzQzOCwzMi40MTUyNTQyIEwxOC4yMTQyODU3LDMyLjQxNTI1NDIgWiBNMjUuOTMyMjAzNCwyNS40NjkxMjgzIEMyNi4xMDI3MDI5LDI1LjQ2OTEyODMgMjYuMjQwOTIwMSwyNS42MDczNDU1IDI2LjI0MDkyMDEsMjUuNzc3ODQ1IEwyNi4yNDA5MjAxLDI3LjQ3NTc4NjkgQzI2LjI0MDkyMDEsMjcuNjQ2Mjg2NSAyNi4xMDI3MDI5LDI3Ljc4NDUwMzYgMjUuOTMyMjAzNCwyNy43ODQ1MDM2IEw4LjAyNjYzNDM4LDI3Ljc4NDUwMzYgQzcuODU2MTM0ODUsMjcuNzg0NTAzNiA3LjcxNzkxNzY4LDI3LjY0NjI4NjUgNy43MTc5MTc2OCwyNy40NzU3ODY5IEw3LjcxNzkxNzY4LDI1Ljc3Nzg0NSBDNy43MTc5MTc2OCwyNS42MDczNDU1IDcuODU2MTM0ODUsMjUuNDY5MTI4MyA4LjAyNjYzNDM4LDI1LjQ2OTEyODMgTDI1LjkzMjIwMzQsMjUuNDY5MTI4MyBaIE0yNS45MzIyMDM0LDE4LjUyMzAwMjQgQzI2LjEwMjcwMjksMTguNTIzMDAyNCAyNi4yNDA5MjAxLDE4LjY2MTIxOTYgMjYuMjQwOTIwMSwxOC44MzE3MTkxIEwyNi4yNDA5MjAxLDIwLjUyOTY2MSBDMjYuMjQwOTIwMSwyMC43MDAxNjA1IDI2LjEwMjcwMjksMjAuODM4Mzc3NyAyNS45MzIyMDM0LDIwLjgzODM3NzcgTDguMDI2NjM0MzgsMjAuODM4Mzc3NyBDNy44NTYxMzQ4NSwyMC44MzgzNzc3IDcuNzE3OTE3NjgsMjAuNzAwMTYwNSA3LjcxNzkxNzY4LDIwLjUyOTY2MSBMNy43MTc5MTc2OCwxOC44MzE3MTkxIEM3LjcxNzkxNzY4LDE4LjY2MTIxOTYgNy44NTYxMzQ4NSwxOC41MjMwMDI0IDguMDI2NjM0MzgsMTguNTIzMDAyNCBMMjUuOTMyMjAzNCwxOC41MjMwMDI0IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDx0ZXh0IGlkPSLnmb3ntJnjga7mlofmm7giIGZvbnQtZmFtaWx5PSJQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0ibm9ybWFsIiBmaWxsPSIjNjQ2QTczIj4KICAgICAgICAgICAgICAgIDx0c3BhbiB4PSIwIiB5PSI2MiI+55m957SZ44Gu5paH5pu4PC90c3Bhbj4KICAgICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
        default: ez
      },
      [y.trigger]: {
        en_US: eO,
        zh_CN: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjU4cHgiIGhlaWdodD0iMTk1cHgiIHZpZXdCb3g9IjAgMCAyNTggMTk1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1OS4xICg4NjE0NCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+cGMtbGFyay3lsI/lm77kuK3mloc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMi4zMTUzNzUzLDAgTDI0LjA1Nzk2MzMsMCBDMjQuNDY3MzQ3MSwtMS4wMjQ0NTg5MmUtMTUgMjQuODU5OTYzNiwwLjE2MjYyNzA4NCAyNS4xNDk0NDE3LDAuNDUyMTA1MTUgTDMzLjUwNjczMjYsOC44MDkzOTYwNiBDMzMuNzk2MjEwNyw5LjA5ODg3NDEzIDMzLjk1ODgzNzgsOS40OTE0OTA2NCAzMy45NTg4Mzc4LDkuOTAwODc0NDUgTDMzLjk1ODgzNzgsNDAuOTA0OTYzNyBDMzMuOTU4ODM3OCw0Mi4xODM3MTAyIDMyLjkyMjIwODksNDMuMjIwMzM5IDMxLjY0MzQ2MjUsNDMuMjIwMzM5IEwyLjMxNTM3NTMsNDMuMjIwMzM5IEMxLjAzNjYyODgzLDQzLjIyMDMzOSAzLjI0MzU2NTQyZS0xNSw0Mi4xODM3MTAyIDAsNDAuOTA0OTYzNyBMMCwyLjMxNTM3NTMgQy0xLjU2NjAxMjc3ZS0xNiwxLjAzNjYyODgzIDEuMDM2NjI4ODMsLTYuNTMyNzY1MDRlLTE2IDIuMzE1Mzc1MywwIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJwYy1sYXJrLeWwj+WbvuS4reaWhyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjI1OCIgaGVpZ2h0PSIxOTUiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0iaWNvbl9maWxlX2RvY19ub3IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMi4wMDAwMDAsIDYyLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbl9ibHVlXzI4Ij4KICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iI0RFRTBFMyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LjY5NzMzNjYsLTEuNTQzNTgzNTQgTDM1LjUwMjQyMTMsOS4yNjE1MDEyMSBMMjcuMDEyNzExOSw5LjI2MTUwMTIxIEMyNS43MzM5NjU0LDkuMjYxNTAxMjEgMjQuNjk3MzM2Niw4LjIyNDg3MjM4IDI0LjY5NzMzNjYsNi45NDYxMjU5MSBMMjQuNjk3MzM2NiwtMS41NDM1ODM1NCBMMjQuNjk3MzM2NiwtMS41NDM1ODM1NCBaIiBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjQkJCRkM0IiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8cG9seWdvbiBpZD0i55+p5b2iIiBwb2ludHM9IjQuNjMwNzUwNjEgMTMuODkyMjUxOCAyOS4zMjgwODcyIDEzLjg5MjI1MTggMjkuMzI4MDg3MiAzOC41ODk1ODg0IDQuNjMwNzUwNjEgMzguNTg5NTg4NCI+PC9wb2x5Z29uPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjE0Mjg1NywzMi40MTUyNTQyIEMxOC4zODQ3ODUyLDMyLjQxNTI1NDIgMTguNTIzMDAyNCwzMi41NTM0NzE0IDE4LjUyMzAwMjQsMzIuNzIzOTcwOSBMMTguNTIzMDAyNCwzNC40MjE5MTI4IEMxOC41MjMwMDI0LDM0LjU5MjQxMjQgMTguMzg0Nzg1MiwzNC43MzA2Mjk1IDE4LjIxNDI4NTcsMzQuNzMwNjI5NSBMOC4wMjY2MzQzOCwzNC43MzA2Mjk1IEM3Ljg1NjEzNDg1LDM0LjczMDYyOTUgNy43MTc5MTc2OCwzNC41OTI0MTI0IDcuNzE3OTE3NjgsMzQuNDIxOTEyOCBMNy43MTc5MTc2OCwzMi43MjM5NzA5IEM3LjcxNzkxNzY4LDMyLjU1MzQ3MTQgNy44NTYxMzQ4NSwzMi40MTUyNTQyIDguMDI2NjM0MzgsMzIuNDE1MjU0MiBMMTguMjE0Mjg1NywzMi40MTUyNTQyIFogTTI1LjkzMjIwMzQsMjUuNDY5MTI4MyBDMjYuMTAyNzAyOSwyNS40NjkxMjgzIDI2LjI0MDkyMDEsMjUuNjA3MzQ1NSAyNi4yNDA5MjAxLDI1Ljc3Nzg0NSBMMjYuMjQwOTIwMSwyNy40NzU3ODY5IEMyNi4yNDA5MjAxLDI3LjY0NjI4NjUgMjYuMTAyNzAyOSwyNy43ODQ1MDM2IDI1LjkzMjIwMzQsMjcuNzg0NTAzNiBMOC4wMjY2MzQzOCwyNy43ODQ1MDM2IEM3Ljg1NjEzNDg1LDI3Ljc4NDUwMzYgNy43MTc5MTc2OCwyNy42NDYyODY1IDcuNzE3OTE3NjgsMjcuNDc1Nzg2OSBMNy43MTc5MTc2OCwyNS43Nzc4NDUgQzcuNzE3OTE3NjgsMjUuNjA3MzQ1NSA3Ljg1NjEzNDg1LDI1LjQ2OTEyODMgOC4wMjY2MzQzOCwyNS40NjkxMjgzIEwyNS45MzIyMDM0LDI1LjQ2OTEyODMgWiBNMjUuOTMyMjAzNCwxOC41MjMwMDI0IEMyNi4xMDI3MDI5LDE4LjUyMzAwMjQgMjYuMjQwOTIwMSwxOC42NjEyMTk2IDI2LjI0MDkyMDEsMTguODMxNzE5MSBMMjYuMjQwOTIwMSwyMC41Mjk2NjEgQzI2LjI0MDkyMDEsMjAuNzAwMTYwNSAyNi4xMDI3MDI5LDIwLjgzODM3NzcgMjUuOTMyMjAzNCwyMC44MzgzNzc3IEw4LjAyNjYzNDM4LDIwLjgzODM3NzcgQzcuODU2MTM0ODUsMjAuODM4Mzc3NyA3LjcxNzkxNzY4LDIwLjcwMDE2MDUgNy43MTc5MTc2OCwyMC41Mjk2NjEgTDcuNzE3OTE3NjgsMTguODMxNzE5MSBDNy43MTc5MTc2OCwxOC42NjEyMTk2IDcuODU2MTM0ODUsMTguNTIzMDAyNCA4LjAyNjYzNDM4LDE4LjUyMzAwMjQgTDI1LjkzMjIwMzQsMTguNTIzMDAyNCBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgaWQ9IuepuueZveaWh+ahoyIgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZpbGw9IiM2NDZBNzMiPgogICAgICAgICAgICA8dHNwYW4geD0iMTA1IiB5PSIxMjQiPuepuueZveaWh+ahozwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgPC9nPgo8L3N2Zz4=",
        ja_JP: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjU4cHgiIGhlaWdodD0iMTk1cHgiIHZpZXdCb3g9IjAgMCAyNTggMTk1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1OS4xICg4NjE0NCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+cGMtbGFyay3lsI/lm77ml6Xmloc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMi4zMTUzNzUzLDAgTDI0LjA1Nzk2MzMsMCBDMjQuNDY3MzQ3MSwtMS4wMjQ0NTg5MmUtMTUgMjQuODU5OTYzNiwwLjE2MjYyNzA4NCAyNS4xNDk0NDE3LDAuNDUyMTA1MTUgTDMzLjUwNjczMjYsOC44MDkzOTYwNiBDMzMuNzk2MjEwNyw5LjA5ODg3NDEzIDMzLjk1ODgzNzgsOS40OTE0OTA2NCAzMy45NTg4Mzc4LDkuOTAwODc0NDUgTDMzLjk1ODgzNzgsNDAuOTA0OTYzNyBDMzMuOTU4ODM3OCw0Mi4xODM3MTAyIDMyLjkyMjIwODksNDMuMjIwMzM5IDMxLjY0MzQ2MjUsNDMuMjIwMzM5IEwyLjMxNTM3NTMsNDMuMjIwMzM5IEMxLjAzNjYyODgzLDQzLjIyMDMzOSAzLjI0MzU2NTQyZS0xNSw0Mi4xODM3MTAyIDAsNDAuOTA0OTYzNyBMMCwyLjMxNTM3NTMgQy0xLjU2NjAxMjc3ZS0xNiwxLjAzNjYyODgzIDEuMDM2NjI4ODMsLTYuNTMyNzY1MDRlLTE2IDIuMzE1Mzc1MywwIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJwYy1sYXJrLeWwj+WbvuaXpeaWhyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjI1OCIgaGVpZ2h0PSIxOTUiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0iaWNvbl9maWxlX2RvY19ub3IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMi4wMDAwMDAsIDYyLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbl9ibHVlXzI4Ij4KICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iI0RFRTBFMyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LjY5NzMzNjYsLTEuNTQzNTgzNTQgTDM1LjUwMjQyMTMsOS4yNjE1MDEyMSBMMjcuMDEyNzExOSw5LjI2MTUwMTIxIEMyNS43MzM5NjU0LDkuMjYxNTAxMjEgMjQuNjk3MzM2Niw4LjIyNDg3MjM4IDI0LjY5NzMzNjYsNi45NDYxMjU5MSBMMjQuNjk3MzM2NiwtMS41NDM1ODM1NCBMMjQuNjk3MzM2NiwtMS41NDM1ODM1NCBaIiBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjQkJCRkM0IiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8cG9seWdvbiBpZD0i55+p5b2iIiBwb2ludHM9IjQuNjMwNzUwNjEgMTMuODkyMjUxOCAyOS4zMjgwODcyIDEzLjg5MjI1MTggMjkuMzI4MDg3MiAzOC41ODk1ODg0IDQuNjMwNzUwNjEgMzguNTg5NTg4NCI+PC9wb2x5Z29uPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjE0Mjg1NywzMi40MTUyNTQyIEMxOC4zODQ3ODUyLDMyLjQxNTI1NDIgMTguNTIzMDAyNCwzMi41NTM0NzE0IDE4LjUyMzAwMjQsMzIuNzIzOTcwOSBMMTguNTIzMDAyNCwzNC40MjE5MTI4IEMxOC41MjMwMDI0LDM0LjU5MjQxMjQgMTguMzg0Nzg1MiwzNC43MzA2Mjk1IDE4LjIxNDI4NTcsMzQuNzMwNjI5NSBMOC4wMjY2MzQzOCwzNC43MzA2Mjk1IEM3Ljg1NjEzNDg1LDM0LjczMDYyOTUgNy43MTc5MTc2OCwzNC41OTI0MTI0IDcuNzE3OTE3NjgsMzQuNDIxOTEyOCBMNy43MTc5MTc2OCwzMi43MjM5NzA5IEM3LjcxNzkxNzY4LDMyLjU1MzQ3MTQgNy44NTYxMzQ4NSwzMi40MTUyNTQyIDguMDI2NjM0MzgsMzIuNDE1MjU0MiBMMTguMjE0Mjg1NywzMi40MTUyNTQyIFogTTI1LjkzMjIwMzQsMjUuNDY5MTI4MyBDMjYuMTAyNzAyOSwyNS40NjkxMjgzIDI2LjI0MDkyMDEsMjUuNjA3MzQ1NSAyNi4yNDA5MjAxLDI1Ljc3Nzg0NSBMMjYuMjQwOTIwMSwyNy40NzU3ODY5IEMyNi4yNDA5MjAxLDI3LjY0NjI4NjUgMjYuMTAyNzAyOSwyNy43ODQ1MDM2IDI1LjkzMjIwMzQsMjcuNzg0NTAzNiBMOC4wMjY2MzQzOCwyNy43ODQ1MDM2IEM3Ljg1NjEzNDg1LDI3Ljc4NDUwMzYgNy43MTc5MTc2OCwyNy42NDYyODY1IDcuNzE3OTE3NjgsMjcuNDc1Nzg2OSBMNy43MTc5MTc2OCwyNS43Nzc4NDUgQzcuNzE3OTE3NjgsMjUuNjA3MzQ1NSA3Ljg1NjEzNDg1LDI1LjQ2OTEyODMgOC4wMjY2MzQzOCwyNS40NjkxMjgzIEwyNS45MzIyMDM0LDI1LjQ2OTEyODMgWiBNMjUuOTMyMjAzNCwxOC41MjMwMDI0IEMyNi4xMDI3MDI5LDE4LjUyMzAwMjQgMjYuMjQwOTIwMSwxOC42NjEyMTk2IDI2LjI0MDkyMDEsMTguODMxNzE5MSBMMjYuMjQwOTIwMSwyMC41Mjk2NjEgQzI2LjI0MDkyMDEsMjAuNzAwMTYwNSAyNi4xMDI3MDI5LDIwLjgzODM3NzcgMjUuOTMyMjAzNCwyMC44MzgzNzc3IEw4LjAyNjYzNDM4LDIwLjgzODM3NzcgQzcuODU2MTM0ODUsMjAuODM4Mzc3NyA3LjcxNzkxNzY4LDIwLjcwMDE2MDUgNy43MTc5MTc2OCwyMC41Mjk2NjEgTDcuNzE3OTE3NjgsMTguODMxNzE5MSBDNy43MTc5MTc2OCwxOC42NjEyMTk2IDcuODU2MTM0ODUsMTguNTIzMDAyNCA4LjAyNjYzNDM4LDE4LjUyMzAwMjQgTDI1LjkzMjIwMzQsMTguNTIzMDAyNCBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgaWQ9IueZvee0meOBruaWh+abuCIgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZpbGw9IiM2NDZBNzMiPgogICAgICAgICAgICA8dHNwYW4geD0iOTkiIHk9IjEyNCI+55m957SZ44Gu5paH5pu4PC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg==",
        default: eO
      }
    },
    [N.DELETED]: {
      [y.message]: {
        default: eb
      },
      [y.trigger]: {
        default: eL
      }
    }
  };
  (u = m ||= {})[u.NORMAL = 1000] = "NORMAL";
  u[u.BLANK = 9009] = "BLANK";
  u[u.DELETED = 9010] = "DELETED";
  let ek = "request_img_fail";
  let e_ = "decrypt_fail";
  async function eS() {
    let e = webCoreConfigManager.configManager.getByKey("user");
    let t = (e == null ? undefined : e.id) || docxLarkUrlPreviewUtils.generateRandomId(6);
    return `${docxLarkUrlPreviewUtils.generateRandomId(12)}-${t}`;
  }
  (g = C ||= {})[g.NORMAL = 100] = "NORMAL";
  g[g.NO_SUPPORT = 101] = "NO_SUPPORT";
  g[g.NO_KEY = 102] = "NO_KEY";
  g[g.NO_URL = 103] = "NO_URL";
  g[g.DATA_ERROR = 104] = "DATA_ERROR";
  g[g.BUFFER_ERROR = 105] = "BUFFER_ERROR";
  g[g.NO_TYPE = 106] = "NO_TYPE";
  g[g.REQUEST_ERROR = 107] = "REQUEST_ERROR";
  (A ||= {})["SHA-256"] = "SHA-256";
  (M = f ||= {})["AES-GCM"] = "AES-GCM";
  M["AES-CBC"] = "AES-CBC";
  let eP = ["", f["AES-GCM"], f["AES-CBC"]];
  let eU = "access-new-default-thumbnail";
  let eQ = !!window.crypto && !!window.crypto.subtle;
  async function eY(e, t) {
    var i;
    var n;
    let r = {};
    try {
      r = (await ((i = webCoreConfigManager.configManager.getByKey("getExtraHeaders")) === null || i === undefined ? undefined : i({
        url: e,
        method: "GET"
      }))) || {};
    } catch (e) {}
    try {
      let i;
      let n = await fetch(e, {
        method: "GET",
        headers: Object.assign(Object.assign({}, t), r),
        credentials: "include"
      });
      let o = n.headers;
      let s = o.get("Content-Type");
      try {
        i = s === "image/png" || s === "image/jpeg" ? await n.arrayBuffer() : await n.json();
      } catch (e) {}
      return {
        body: i,
        httpStatusCode: n.status,
        type: s,
        headers: o
      };
    } catch (t) {
      if ((n = docxLarkUrlPreviewUtils.previewConfig.logging) !== null && n !== undefined) {
        n.info("doc thumbnail failed to fetch, url:", e, "reason:", t);
      }
      return {
        failed: true
      };
    }
  }
  async function eZ(e, t) {
    var i;
    let n = {
      locale: (i = webCoreConfigManager.configManager.getByKey("locale")) === null || i === undefined ? undefined : i.replace("-", "_"),
      "use-new-default-thumbnail": "true",
      "Content-Type": "application/x-www-form-urlencoded",
      "request-id": t
    };
    if (docxLarkUrlPreviewUtils.previewConfig.jssdkSession) {
      n["jssdk-session"] = docxLarkUrlPreviewUtils.previewConfig.jssdkSession;
    }
    return eY(e, n);
  }
  function eR(e, t, i, n) {
    return Object.assign(Object.assign({
      status: e
    }, n || {}), {
      statusCode: `${t}_${i}`
    });
  }
  function eB(e) {
    if (!(e.byteLength > 0)) {
      return "";
    }
    {
      let t = function (e) {
        let t = e.slice(0, 4);
        t = new Uint8Array(t);
        let i = [];
        for (let e = 0; e < t.byteLength; e++) {
          i.push(t[e].toString(16));
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
        }(i.join("").toUpperCase());
      }(e);
      let i = new Blob([new DataView(e)], {
        type: t || "image/jpeg"
      });
      return URL.createObjectURL(i);
    }
  }
  function eG(e) {
    let t = window.atob(e);
    let i = t.length;
    let n = new Uint8Array(i);
    for (let e = 0; e < i; e++) {
      n[e] = t.charCodeAt(e);
    }
    return n;
  }
  async function eH(e) {
    if (eQ) {
      let t = new TextEncoder().encode(e);
      return new Uint8Array(await crypto.subtle.digest(A["SHA-256"], t)).slice(0, 32);
    }
  }
  async function eW(e, t, i, n) {
    let r = {
      data: i && e || e.slice(16),
      key: i && eG(t || "") || (await eH(t || "")),
      iv: i && eG(i) || e.slice(0, 16),
      algorithm: eP[n]
    };
    if (r.algorithm) {
      return eB(await function (e) {
        let {
          data: t,
          key: i,
          algorithm: n,
          iv: r
        } = e;
        return new Promise(async (e, o) => {
          if (eQ && t.byteLength > 0 && i && r.byteLength > 0) {
            let s = new Uint8Array(r);
            let l = new Uint8Array(t);
            crypto.subtle.importKey("raw", i, n, false, ["decrypt"]).then(e => crypto.subtle.decrypt({
              name: n,
              iv: s
            }, e, l)).then(e).catch(o);
          } else {
            o({
              errorCode: C.NO_SUPPORT
            });
          }
        });
      }(r));
    } else {
      return eB(e);
    }
  }
  let eF = `${docxLarkUrlPreviewUtils.componentName}-element-docImage__thumbnail`;
  function eV(e) {
    let {
      docInfo: t,
      showDocDetail: i = true,
      source: n
    } = e;
    let r = reactHooksUtilities.useIsUnmounted();
    let [o, s] = reactCoreLibraryReexport.useState("");
    let [l, a] = reactCoreLibraryReexport.useState(false);
    let c = reactCoreLibraryReexport.useRef({});
    let [u, g] = reactCoreLibraryReexport.useState(false);
    let M = reactCoreLibraryReexport.useRef("");
    function d(e) {
      e.preventDefault();
      if (e.nativeEvent) {
        e.nativeEvent.stopImmediatePropagation();
      }
    }
    function I(e) {
      e.target.src = eE;
    }
    async function p(e, t, i) {
      var s;
      let l = {};
      let a = false;
      let u = false;
      let g = {};
      if (i) {
        try {
          if ((l = JSON.parse(t)).thumbnailUrlPc && l.thumbnailUrlPc !== M.current) {
            M.current = l.thumbnailUrlPc;
            try {
              u = (g = await (s = l, new Promise(async (e, t) => {
                let i;
                let {
                  decryptKeyPc: n,
                  thumbnailUrlPc: r,
                  cipherType: o,
                  decryptNoncePc: l
                } = s;
                let a = await eS();
                if (!n || !r || !o) {
                  let e = n && C.NO_KEY || r && C.NO_URL || C.NO_TYPE;
                  t(eR("request_param_fail", m.NORMAL, e, {
                    requestId: a
                  }));
                  return;
                }
                try {
                  if (!((i = await function (e, t) {
                    let i = Date.now();
                    return eZ(e, t).then(e => {
                      var n;
                      var r;
                      var o;
                      var s;
                      let l;
                      let a = e.headers?.[eU] === "true" || ((r = (n = e.headers) === null || n === undefined ? undefined : n.get) === null || r === undefined ? undefined : r.call(n, eU)) === "true";
                      let c = ((s = (o = e == null ? undefined : e.headers) === null || o === undefined ? undefined : o.get) === null || s === undefined ? undefined : s.call(o, "x-tt-logid")) || "";
                      let u = Date.now() - i;
                      if (e.body && e.body.code) {
                        l = e.body.code;
                      }
                      if (l || !e.body) {
                        return {
                          statusCode: e.httpStatusCode,
                          requestTime: u,
                          code: l
                        };
                      } else {
                        return {
                          requestTime: u,
                          img: e.body,
                          statusCode: e.httpStatusCode,
                          isNewErrorThumbnail: a,
                          ttLogId: c
                        };
                      }
                    });
                  }(r, a)).img instanceof ArrayBuffer)) {
                    t(eR(i.code ? "abnormal_img" : ek, i.statusCode, C.REQUEST_ERROR, Object.assign({
                      requestId: a
                    }, i)));
                    return;
                  }
                } catch (e) {
                  t(eR(ek, m.NORMAL, e.code, Object.assign({
                    requestId: a
                  }, e)));
                  return;
                }
                let c = {
                  decryptKey: n && (await docxLarkUrlPreviewUtils.hashWithSalt(n)),
                  resImgLength: i.img && ArrayBuffer.isView(i.img) && i.img.byteLength,
                  decryptKeyLength: n && n.length
                };
                try {
                  let r = Date.now();
                  let s = await eW(i.img, n, l, o);
                  let u = Date.now() - r;
                  let g = Object.assign({
                    requestId: a,
                    ttLogId: i.ttLogId,
                    cipherType: o,
                    decryptTime: u,
                    requestTime: i.requestTime,
                    isNewErrorThumbnail: i.isNewErrorThumbnail
                  }, c);
                  if (s) {
                    e(eR("decrypt_success", i.statusCode, C.NORMAL, Object.assign({
                      url: s
                    }, g)));
                  } else {
                    t(eR(e_, i.statusCode, C.DATA_ERROR, g));
                  }
                } catch (e) {
                  t(eR(e_, i.statusCode, C.BUFFER_ERROR, Object.assign(Object.assign({
                    requestId: a,
                    requestTime: i.requestTime,
                    cipherType: o
                  }, e), c)));
                  return;
                }
              }))).isNewErrorThumbnail || false;
            } catch (i) {
              g = i;
              let e = c.current?.source && g.code ? ex[g.code]?.[c.current.source] : undefined;
              let t = webCoreConfigManager.configManager.getByKey("locale");
              g.url = (e == null ? undefined : e[t.replace("-", "_")]) || (e == null ? undefined : e.default) || "";
            }
          } else {
            a = true;
          }
        } catch (e) {
          g.status = "json_parse_false";
        }
      }
      if (a && c.current?.file_type !== h.FILE) {
        throw Error("get same url in handleGetThumbnail");
      }
      let d = g.url || e;
      let I = d && d.match(/^(\w+):/i);
      return {
        url: d,
        report: {
          encrypt_status: g.status || "no_encrypt",
          status_code: g.statusCode,
          source_type: I ? I[1] : "static",
          request_time: g.requestTime,
          decrypt_time: g.decryptTime,
          cipher_type: g.cipherType,
          request_id: g.requestId,
          tt_logid: g.ttLogId,
          decrypt_key: g.decryptKey,
          res_img_length: g.resImgLength,
          decrypt_key_length: g.decryptKeyLength
        },
        newErrorThumbnail: u
      };
    }
    async function y() {
      var e;
      let {
        key: l,
        type: u,
        abstract: M
      } = t.doc;
      let d = t.docPermission.thumbnailDetail;
      let I = !!d;
      c.current = {
        file_token: l,
        file_type: u,
        show_doc_detail: i,
        is_encrypt: I,
        source: n
      };
      try {
        let {
          url: e,
          report: t,
          newErrorThumbnail: i
        } = await p(M, d, I);
        if (r) {
          return;
        }
        if (e && e !== o) {
          g(false);
          s(e);
          a(i);
          c.current = Object.assign(Object.assign({}, c.current), t);
        }
      } catch (t) {
        if ((e = docxLarkUrlPreviewUtils.previewConfig.logging) !== null && e !== undefined) {
          e.info("doc thubmail fetch image error:", t);
        }
      }
    }
    reactCoreLibraryReexport.useEffect(() => {
      y();
    }, [t.docPermission.thumbnailDetail, t.doc]);
    reactCoreLibraryReexport.useEffect(() => () => {
      if (t.url && t.url.startsWith("blob:")) {
        URL.revokeObjectURL(t.url);
      }
    }, [t.url]);
    if (o) {
      if (l) {
        return reactCoreLibraryReexport.createElement("div", {
          className: eF
        }, reactCoreLibraryReexport.createElement("div", {
          className: `${eF}-newImg`,
          style: {
            background: `url(${u ? eE : o}) center center no-repeat`,
            backgroundSize: "contain"
          }
        }), !u && reactCoreLibraryReexport.createElement("img", {
          src: o,
          width: "0",
          height: "0",
          style: {
            opacity: 0,
            flex: "0 0"
          },
          onError: () => g(true)
        }));
      } else {
        return function (e = `${eF}-img`) {
          return reactCoreLibraryReexport.createElement("img", {
            className: e,
            src: o,
            onContextMenu: d,
            onError: I
          });
        }();
      }
    } else {
      return null;
    }
  }
  let eK = `${docxLarkUrlPreviewUtils.componentName}-element-docImage`;
  function eJ(e) {
    let {
      docImage: i
    } = e.element;
    let n = {
      cipherType: i.secretType,
      thumbnailUrl: i.secretUrl,
      decryptKey: i.secretKey,
      decryptNonce: i.secretNonce,
      thumbnailUrlPc: i.secretUrl,
      decryptKeyPc: i.secretKey,
      decryptNoncePc: i.secretNonce
    };
    let r = {
      url: e.urlPreviewEntity.url?.url,
      doc: {
        abstract: i.thumbnailUrl,
        key: i.secretKey,
        type: i.docType
      },
      docPermission: {
        thumbnailDetail: JSON.stringify(n)
      }
    };
    return reactCoreLibraryReexport.createElement("div", {
      className: eK
    }, reactCoreLibraryReexport.createElement("div", {
      className: `${eK}-inner`
    }, reactCoreLibraryReexport.createElement(eV, {
      docInfo: r,
      showDocDetail: true,
      source: y.message
    })));
  }
  function e$(e) {
    e = Object.assign({}, e);
    delete e.height;
    delete e.width;
    return e;
  }
  let eX = `${eK}__wrap`;
  let eq = `${docxLarkUrlPreviewUtils.componentName}-element-avatar`;
  function e0(e) {
    var i;
    var r;
    let {
      chatterInfo: s
    } = e.element.avatar;
    let {
      avatarKey: l,
      chatterId: a
    } = s;
    let c = !a || a === docxLarkUrlPreviewUtils.larkVersion;
    let u = docxLarkUrlPreviewUtils.previewConfig.registeredComponents?.LarkChatterAvatar;
    if (!u) {
      if ((i = docxLarkUrlPreviewUtils.previewConfig?.logging) !== null && i !== undefined) {
        i.error("[Url Preview] LarkChatterAvatar is not registered");
      }
      return null;
    }
    let g = docxLarkUrlPreviewUtils.previewConfig.registeredComponents?.Avatar;
    if (!g) {
      if ((r = docxLarkUrlPreviewUtils.previewConfig?.logging) !== null && r !== undefined) {
        r.error("[Url Preview] Avatar is not registered");
      }
      return null;
    }
    let M = D(eq, {
      [`${eq}--anonymous`]: c
    });
    let d = docxLarkUrlPreviewUtils.previewConfig.registeredComponents?.UserProfile;
    let I = c ? reactCoreLibraryReexport.createElement(g, {
      avatarKey: l
    }) : reactCoreLibraryReexport.createElement(docxUrlPreviewComponents.userProfilePopover, {
      userProfile: d,
      chatterId: a,
      popoverProps: {
        disabled: c,
        trigger: "click"
      }
    }, reactCoreLibraryReexport.createElement("div", null, reactCoreLibraryReexport.createElement(u, {
      chatterId: a,
      avatarKey: l
    })));
    return reactCoreLibraryReexport.createElement("div", {
      className: M,
      onClick: t => {
        t.stopPropagation();
        if (!c) {
          e.trackPageClick({
            clickType: "icon",
            componentId: e.elementId
          });
        }
      }
    }, I);
  }
  var e4 = require.p + "static/image/card-title-mask-neural.a87d19bc.png";
  var e1 = require.p + "static/image/card-title-mask-neural-dm.478e3227.png";
  var e2 = require.p + "static/image/card-title-mask.93d0772d.png";
  var e3 = require.p + "static/image/card-title-mask-dm.4d599042.png";
  let e5 = `${docxLarkUrlPreviewUtils.componentName}-element-card-container`;
  class e9 extends reactCoreLibraryReexport.PureComponent {
    constructor() {
      super(...arguments);
      this.parseStyle = () => {
        let i;
        let {
          element: n
        } = this.props;
        let r = n.style;
        let o = (r == null ? undefined : r.backgroundColor)?.linear?.colorsV2;
        let s = "";
        if (o == null ? undefined : o.length) {
          i = docxLarkUrlPreviewUtils.resolveColorValue(o[0]);
          s = this.getMaskByToken(o[0].token || "");
        }
        return {
          backgroundColor: i,
          backgroundImage: `url(${s})`
        };
      };
      this.getMaskByToken = e => {
        if (!e) {
          return "";
        }
        let i = this.props.themeState?.mode || "LIGHT";
        if (e === "udtoken-message-card-bg-neutral") {
          if (i === "LIGHT") {
            return e4;
          } else {
            return e1;
          }
        } else if (i === "LIGHT") {
          return e2;
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
        childIds: i
      } = e;
      let {
        elements: n
      } = t;
      let r = this.parseStyle();
      if (n) {
        return reactCoreLibraryReexport.createElement("div", {
          className: e5,
          style: r
        }, i && i.map(e => reactCoreLibraryReexport.createElement(b, Object.assign({}, this.props, {
          key: e,
          element: n[e],
          elementId: e
        }))));
      } else {
        return null;
      }
    }
  }
  function e6(e) {
    if (e < 10) {
      return `0${e}`;
    } else {
      return e;
    }
  }
  function e8(e) {
    let {
      hours: t,
      minutes: i,
      seconds: n
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
    let r = e6(i);
    let o = e6(n);
    return [...(t ? [e6(t)] : []), r, o].join(":");
  }
  let e7 = [];
  let te = `${docxLarkUrlPreviewUtils.componentName}-element-time`;
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
        let i = Number(e.endTimeStamp) * 1000;
        let n = performance.now() - this.requestStartTimeClient;
        let r = e.isCountdown ? Math.max(this.duration - n, 0) : this.duration + n;
        let o = (e.isCountdown ? t - this.duration : t + this.duration) + n;
        this.setState({
          lastTime: e8(r)
        });
        if (!e.isCountdown && i && o >= i) {
          this.setState({
            lastTime: e8(Math.max(i - t, 0))
          });
          return this.stopTimeInterval();
        } else if (e.isCountdown && o >= t) {
          this.setState({
            lastTime: e8(0)
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
        let i = Number(e.endTimeStamp) * 1000;
        this.setState({
          lastTime: e8(Math.max(i ? i - t : this.duration, 0))
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
          if (!n) {
            (function e() {
              let t = 1000 - Date.now() % 1000;
              n = window.setTimeout(() => {
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
          window.clearTimeout(n);
          n = undefined;
        }
        this.timeInterval = false;
      }
    }
    async fetchServerDuration() {
      let e;
      let t = await this.fetchDurationFromBE();
      let i = await this.fetchDurationFromNTP();
      e = !t || Math.abs(t.duration - i.duration) < 5000 ? i : t;
      this.duration = e.duration;
      this.requestStartTimeClient = e.requestStartTimeClient;
    }
    async fetchDurationFromNTP() {
      let e = performance.now();
      let {
        startTimeStamp: t,
        isCountdown: i
      } = this.props.element.time;
      let n = Date.now();
      let r = parseInt(t, 10) * 1000;
      return {
        duration: i ? r - n : n - r,
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
      let i = !!this.props.element.style?.textColorV2;
      let n = D(te, {
        [`${te}--default`]: !i
      });
      return reactCoreLibraryReexport.createElement("div", {
        className: n
      }, t);
    }
  }
  var archiveBoxPopover = require("archive-box-popover") /*id: 102490*/;
  var virtualizedListComponent = require("virtualized-list-component") /*id: 608074*/;
  let tr = `${docxLarkUrlPreviewUtils.componentName}-element-chatters-preview-popup-list`;
  function to(e) {
    let t;
    let {
      chatterIds: i,
      mGetChatters: n
    } = e;
    let r = Math.max(Math.min(240, i.length * 36 + 6), 42);
    let [o, s] = reactCoreLibraryReexport.useState(false);
    let [l, a] = reactCoreLibraryReexport.useState([]);
    reactCoreLibraryReexport.useEffect(() => {
      if (i == null ? undefined : i.length) {
        if (t) {
          t.cancel();
        }
        (t = docxLarkUrlPreviewUtils.withTimeout(n(i))).then(e => {
          let t = [];
          i.forEach(i => {
            if (e.chatters[i]) {
              t.push(e.chatters[i]);
            }
          });
          a(t);
          s(true);
        }).finally(() => t = undefined);
        return () => t && t.cancel();
      }
    }, [i]);
    let c = reactCoreLibraryReexport.useCallback(e => e ? reactCoreLibraryReexport.createElement(ts, {
      key: e.id,
      chatter: e
    }) : null, []);
    return reactCoreLibraryReexport.createElement("div", {
      className: tr,
      style: {
        height: r
      },
      onScroll: e => e.stopPropagation()
    }, o ? reactCoreLibraryReexport.createElement(virtualizedListComponent.VirtualizedList, {
      style: {
        height: "100%"
      },
      height: r,
      numberOfRows: l.length,
      variableHeight: false,
      recordForRowAt: ({
        row: e
      }) => l[e],
      renderRow: c
    }) : reactCoreLibraryReexport.createElement(loadingComponent.LoadingComponent, null));
  }
  function ts(e) {
    var i;
    let {
      chatter: r
    } = e;
    let {
      id: o,
      name: s,
      avatarKey: l
    } = r;
    let a = docxLarkUrlPreviewUtils.previewConfig.registeredComponents?.Avatar;
    if (!a) {
      if ((i = docxLarkUrlPreviewUtils.previewConfig?.logging) !== null && i !== undefined) {
        i.error("[Url Preview] Avatar is not registered");
      }
      return null;
    }
    let c = docxLarkUrlPreviewUtils.previewConfig.registeredComponents?.UserProfile;
    let u = o === docxLarkUrlPreviewUtils.larkVersion;
    return reactCoreLibraryReexport.createElement(docxUrlPreviewComponents.userProfilePopover, {
      userProfile: c,
      chatterId: o,
      popoverProps: {
        disabled: u,
        trigger: "click"
      },
      key: o
    }, reactCoreLibraryReexport.createElement("div", {
      className: `${tr}__item`
    }, reactCoreLibraryReexport.createElement("span", {
      className: `${tr}__item-avatar`
    }, reactCoreLibraryReexport.createElement(a, {
      avatarKey: l,
      size: 24
    })), reactCoreLibraryReexport.createElement("span", {
      className: `${tr}__item-name`
    }, s)));
  }
  let tl = `${docxLarkUrlPreviewUtils.componentName}-element-chatters-preview`;
  function ta(e) {
    let t;
    let {
      elementId: i,
      getUrlPreviewChatterIds: n,
      mGetChatters: r
    } = e;
    let {
      previewId: o
    } = e.urlPreviewEntity;
    let {
      chattersCount: s = 0,
      maxShowCount: l = 5,
      theme: a,
      chattersMode: c
    } = e.element.chattersPreview;
    let u = reactHooksUtilities.useConfig();
    let g = e.element.chattersPreview.chatterInfos;
    let M = Math.min(l, g.length);
    let d = g.slice(0, M);
    let I = s - M;
    let [p, y] = reactCoreLibraryReexport.useState({});
    reactCoreLibraryReexport.useEffect(() => {
      let e = g.map(e => e.chatterId).filter(e => e !== docxLarkUrlPreviewUtils.larkVersion);
      if (e == null ? undefined : e.length) {
        if (t) {
          t.cancel();
        }
        (t = docxLarkUrlPreviewUtils.withTimeout(r(e))).then(e => {
          y((e == null ? undefined : e.chatters) || {});
        }).finally(() => t = undefined);
        return () => {
          if (t) {
            t.cancel();
          }
        };
      }
    }, [l, g]);
    let [h, N] = reactCoreLibraryReexport.useState([]);
    reactCoreLibraryReexport.useEffect(() => {
      if (c !== errorConstantsCodes.bL6.DYNAMIC) {
        return;
      }
      let e = docxLarkUrlPreviewUtils.withTimeout(n(o, i).then(e => {
        N(e);
      }).catch(() => {
        var e;
        N([]);
        if ((e = docxLarkUrlPreviewUtils.previewConfig?.logging) !== null && e !== undefined) {
          e.error("[URL-PREVIEW] chatters preview getUrlPreviewChatterIds error");
        }
      }));
      return () => {
        e.cancel();
      };
    }, [c, o, i]);
    reactCoreLibraryReexport.useEffect(() => {
      if (c === errorConstantsCodes.bL6.STATIC) {
        N(Object.values(p).map(({
          id: e
        }) => e));
      }
    }, [c, p]);
    let m = D(tl, {
      [`${tl}--light`]: a === errorConstantsCodes.qZn.LIGHT,
      [`${tl}--dark`]: a === errorConstantsCodes.qZn.DARK
    });
    let C = e.element.style;
    let A = C ? {
      color: docxLarkUrlPreviewUtils.resolveColorValue(C.textColorV2),
      background: docxLarkUrlPreviewUtils.resolveGradient(C.backgroundColor)
    } : undefined;
    let f = () => {
      e.trackPageClick({
        clickType: "icon",
        componentId: i
      });
    };
    return reactCoreLibraryReexport.createElement("div", {
      className: m,
      onClick: e => e.stopPropagation()
    }, (() => {
      var t;
      var n;
      let o = docxLarkUrlPreviewUtils.previewConfig.registeredComponents?.Avatar;
      if (!o) {
        if ((t = docxLarkUrlPreviewUtils.previewConfig?.logging) !== null && t !== undefined) {
          t.error("[Url Preview] Avatar is not registered");
        }
        return null;
      }
      let s = docxLarkUrlPreviewUtils.previewConfig.registeredComponents?.LarkChatterAvatar;
      if (!s) {
        if ((n = docxLarkUrlPreviewUtils.previewConfig?.logging) !== null && n !== undefined) {
          n.error("[Url Preview] LarkChatterAvatar is not registered");
        }
        return null;
      }
      let l = docxLarkUrlPreviewUtils.previewConfig.registeredComponents?.UserProfile;
      return d.map((e, t) => {
        let i = e.avatarKey;
        let n = e.chatterId;
        let r = p[n];
        let a = D(`${tl}__item-avatar`, {
          [`${tl}__item-avatar--full`]: I <= 0 && M - 1 === t,
          [`${tl}__item-avatar--anonymous`]: n === docxLarkUrlPreviewUtils.larkVersion
        });
        let c = n === docxLarkUrlPreviewUtils.larkVersion;
        let u = r ? reactCoreLibraryReexport.createElement(docxUrlPreviewComponents.userProfilePopover, {
          userProfile: l,
          chatterId: n,
          popoverProps: {
            disabled: c,
            trigger: "click"
          }
        }, reactCoreLibraryReexport.createElement("div", null, reactCoreLibraryReexport.createElement(s, {
          chatterId: n,
          avatarKey: i,
          size: 24,
          onClick: f
        }))) : reactCoreLibraryReexport.createElement(docxUrlPreviewComponents.userProfilePopover, {
          userProfile: l,
          chatterId: n,
          popoverProps: {
            disabled: c,
            trigger: "click"
          }
        }, reactCoreLibraryReexport.createElement("div", null, reactCoreLibraryReexport.createElement(o, {
          avatarKey: i,
          size: 24,
          onClick: f
        })));
        if (r && r.name) {
          return reactCoreLibraryReexport.createElement(tooltipComponentModule.TooltipComponent, {
            title: r.name,
            key: t
          }, reactCoreLibraryReexport.createElement("div", {
            className: a
          }, u));
        } else {
          return reactCoreLibraryReexport.createElement("div", {
            className: a,
            key: t
          }, u);
        }
      });
    })(), (() => {
      if (I <= 0) {
        return null;
      }
      let t = reactCoreLibraryReexport.createElement(tooltipComponentModule.TooltipComponent, {
        title: docxPreviewResolver.resolvePreview(u.lang.UrlPreview.Lark_View_ShowAllTip)
      }, reactCoreLibraryReexport.createElement("div", {
        className: D(`${tl}__number`, {
          [`${tl}__number-more`]: I > 99
        }),
        style: A,
        onClick: () => e.trackPageClick({
          clickType: "page_click",
          componentId: i
        })
      }, I > 99 ? "…" : `+${I}`));
      if (h == null ? undefined : h.length) {
        return reactCoreLibraryReexport.createElement(archiveBoxPopover.archiveBoxPopover, {
          content: reactCoreLibraryReexport.createElement(to, {
            chatterIds: h,
            mGetChatters: r
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
      className: `${tl}__mask-svg`
    }, reactCoreLibraryReexport.createElement("defs", null, reactCoreLibraryReexport.createElement("clipPath", {
      id: `${tl}__item-mask`
    }, reactCoreLibraryReexport.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22 5.36441C20.7363 7.26502 20 9.54653 20 12C20 14.4535 20.7363 16.735 22 18.6356C19.8502 21.869 16.1739 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C16.1739 0 19.8502 2.13102 22 5.36441Z"
    })))));
  }
  function tc(e) {
    e = Object.assign({}, e);
    delete e.color;
    delete e.background;
    return e;
  }
  let tu = reactCoreLibraryReexport.lazy(() => require.e("video-preview") /*id: 32907*/.then(require.bind(require, "docx-video-preview-component") /*id: 841697*/));
  function tg(e) {
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Suspense, {
      fallback: reactCoreLibraryReexport.createElement("div", null)
    }, reactCoreLibraryReexport.createElement(tu, Object.assign({}, e)));
  }
  let tM = `${docxLarkUrlPreviewUtils.componentName}-element-video`;
  function td(e) {
    let {
      elementId: i,
      element: n,
      urlPreviewEntity: r,
      trackPageClick: o
    } = e;
    return reactCoreLibraryReexport.createElement("div", {
      className: tM
    }, reactCoreLibraryReexport.createElement(tg, Object.assign({
      id: i,
      cid: i,
      url: r.url?.url,
      locale: webCoreConfigManager.configManager.getByKey("locale")
    }, Object.assign(Object.assign({}, n.video), {
      coverImageUrl: e.coverImageUrl
    }), {
      onVideoPlayClick: () => {
        o({
          clickType: "play_video",
          componentId: i
        });
      }
    })));
  }
  function tI(e) {
    e = Object.assign({}, e);
    delete e.height;
    return e;
  }
  var docxUrlPreviewConfig = require("docx-url-preview-config") /*id: 64452*/;
  let ty = e => {
    var t;
    let i = e.element.engine.body;
    let n = docxUrlPreviewConfig.previewConfig.registeredElements.find(e => e.type === cardPreviewLocaleConstants_1.cardPreviewConstant.ENGINE);
    if (!n || !i) {
      if ((t = docxUrlPreviewConfig.previewConfig?.logging) !== null && t !== undefined) {
        t.error("[Url Preview] Engine Element is not registered");
      }
      return reactCoreLibraryReexport.createElement("div", null, "Not found Engine Element.");
    }
    let r = n.module.Component;
    return reactCoreLibraryReexport.createElement(r, Object.assign({}, e));
  };
  require.d(exports, {
    TextElement: function () {
      return el;
    },
    SpinButtonElement: function () {
      return et;
    },
    ButtonElement: function () {
      return eA;
    },
    ImageElement: function () {
      return eN;
    },
    ChattersPreviewElement: function () {
      return tc;
    },
    RichTextElement: function () {
      return e$;
    },
    RichTextUpdateTime: function () {
      return ea;
    },
    LinearLayoutElement: function () {
      return tt;
    },
    ChattersPreviewList: function () {
      return ta;
    },
    AvatarElement: function () {
      return e0;
    },
    EmptyElement: function () {
      return x;
    },
    HeaderElement: function () {
      return ed;
    },
    HeaderElementWithLocale: function () {
      return X;
    },
    VideoElement: function () {
      return ty;
    },
    TagListElement: function () {
      return en;
    },
    ChattersPreviewItem: function () {
      return td;
    },
    IconButtonElement: function () {
      return ef;
    },
    VideoElementWrapper: function () {
      return eX;
    },
    IconButtonStyleParser: function () {
      return eD;
    },
    HeaderWrapper: function () {
      return J;
    },
    ImageElementWrapper: function () {
      return ev;
    },
    CardContainerElement: function () {
      return e9;
    },
    TextStyleParser: function () {
      return em;
    },
    BaseElement: function () {
      return b;
    },
    LinearLayoutOrientationMap: function () {
      return K;
    },
    RichTextActionHandler: function () {
      return er;
    },
    VideoStyleParser: function () {
      return tI;
    },
    DocImageElement: function () {
      return eJ;
    }
  });
}