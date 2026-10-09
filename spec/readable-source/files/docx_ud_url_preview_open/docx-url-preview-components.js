// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v6' to 'dyeImageSvg'
// - Renamed export 'Od' to 'urlPreviewInline'
// - Renamed export 'Kh' to 'richTextRenderer'
// - Renamed export 'EO' to 'UdFontIcon'
// - Renamed export 'Bi' to 'userProfilePopover'
// - Renamed export 'fO' to 'urlPreviewCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 75487
         */
module.exports = function (module, exports, require) {
  var udFontIconComponent = require("ud-font-icon-component") /*id: 743964*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var toastNotificationManagerWrapper = require("toast-notification-manager-wrapper") /*id: 314333*/;
  var contextMenuService = require("context-menu-service") /*id: 304826*/;
  var uiMenuComponent = require("ui-menu-component") /*id: 879406*/;
  var tooltipComponentModule = require("tooltip-component-module") /*id: 91247*/;
  var copyOutlinedIcon = require("copy-outlined-icon") /*id: 515436*/;
  var docxLarkUrlPreviewUtils = require("docx-lark-url-preview-utils") /*id: 146261*/;
  var docxPreviewResolver = require("docx-preview-resolver") /*id: 413984*/;
  function M({
    content: e = "",
    link: t = "",
    config: i
  }, n) {
    var M;
    if (!e || !t) {
      return;
    }
    n.preventDefault();
    n.stopPropagation();
    n.nativeEvent.stopImmediatePropagation();
    let d = [{
      id: "copy",
      title: docxPreviewResolver.resolvePreview(i.lang.UrlPreview.Lark_Legacy_Copy),
      role: "copy",
      icon: copyOutlinedIcon.CopyOutlinedIcon,
      onClick: async () => {
        await docxLarkUrlPreviewUtils.copyToClipboard(e);
        toastNotificationManagerWrapper.toastManagerWrapper.success(docxPreviewResolver.resolvePreview(i.lang.UrlPreview.Lark_Chat_CopyDocsURL));
      }
    }];
    if (e && e !== t) {
      d.unshift({
        id: "copy_link",
        title: docxPreviewResolver.resolvePreview(i.lang.UrlPreview.Lark_Chat_CopyLink),
        role: "copy_link",
        icon: copyOutlinedIcon.CopyOutlinedIcon,
        onClick: async () => {
          await docxLarkUrlPreviewUtils.copyToClipboard(t);
          toastNotificationManagerWrapper.toastManagerWrapper.success(docxPreviewResolver.resolvePreview(i.lang.UrlPreview.Lark_Chat_CopyDocsURL));
        }
      });
    }
    contextMenuService.contextMenuService.open({
      menu: (M = d, reactCoreLibraryReexport.createElement(uiMenuComponent.Menu, {
        className: `${docxLarkUrlPreviewUtils.componentName}__context-menu`
      }, M.map((e, t) => {
        let i = reactCoreLibraryReexport.createElement(uiMenuComponent.Menu.Item, {
          key: e.id || t,
          icon: e.icon && reactCoreLibraryReexport.createElement(e.icon, null),
          onMouseDown: e => e.preventDefault(),
          onClick: e.onClick
        }, e.title);
        if (e.tooltip) {
          return reactCoreLibraryReexport.createElement(tooltipComponentModule.TooltipComponent, Object.assign({
            key: e.id || t
          }, e.tooltip), i);
        } else {
          return i;
        }
      }))),
      position: [n.pageX, n.pageY]
    });
  }
  var errorConstantsCodes = require("error-constants-codes") /*id: 850732*/;
  var reactHooksUtilities = require("react-hooks-utilities") /*id: 810817*/;
  let p = reactCoreLibraryReexport.createContext(null);
  function y() {
    return reactCoreLibraryReexport.useContext(p);
  }
  var docxUrlPreviewUtils = require("docx-url-preview-utils") /*id: 217188*/;
  let N = `${docxLarkUrlPreviewUtils.componentName}-element-richtext__tag-paragraph`;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var C = classnamesUtils;
  let A = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/;
  let f = `${docxLarkUrlPreviewUtils.componentName}-element-richtext__tag-text`;
  var withLocaleConfig = require("with-locale-config") /*id: 466930*/;
  let v = e => {
    let {
      imageUrl: t,
      width: i,
      height: n,
      className: o,
      color: s
    } = e;
    let l = docxLarkUrlPreviewUtils.generateRandomId();
    let [a, c] = reactCoreLibraryReexport.useState(false);
    if (a || !s) {
      return null;
    }
    let g = /^rgb/.test(s) ? docxLarkUrlPreviewUtils.rgbToHex(s) : s;
    return reactCoreLibraryReexport.createElement("svg", {
      className: `base-component__dye-image ${o}`,
      viewBox: `0 0 ${i} ${n}`,
      width: i,
      height: n
    }, reactCoreLibraryReexport.createElement("filter", {
      id: `${l}`
    }, reactCoreLibraryReexport.createElement("feColorMatrix", {
      in: "SourceGraphic",
      colorInterpolationFilters: "sRGB",
      type: "matrix",
      values: docxLarkUrlPreviewUtils.colorToMatrixString(g)
    })), reactCoreLibraryReexport.createElement("image", {
      xlinkHref: t,
      x: "0",
      y: "0",
      width: i,
      height: n,
      filter: `url(#${l})`,
      onError: () => c(true)
    }));
  };
  var globalLinkOutlinedIcon = require("global-link-outlined-icon") /*id: 70621*/;
  var docxUiTagComponent = require("docx-ui-tag-component") /*id: 840665*/;
  require("docx-url-preview-open") /*id: 974086*/;
  let T = `${docxLarkUrlPreviewUtils.componentName}-inline`;
  class E extends reactCoreLibraryReexport.PureComponent {
    constructor(e) {
      super(e);
      this.titleRef = reactCoreLibraryReexport.createRef();
      this.offThemeStateListener = () => {};
      this.onContextMenu = e => {
        let {
          title: t,
          url: i
        } = this.props;
        M({
          content: t,
          link: i,
          config: this.props.config
        }, e);
      };
      this.state = {
        iconSize: 14,
        iconColor: ""
      };
    }
    componentDidMount() {
      let e = this.getIconState();
      if (e) {
        this.setState(e);
      }
    }
    componentDidUpdate(e, t) {
      if (e.className !== this.props.className) {
        let e = this.getIconState();
        if (!e) {
          return;
        }
        let {
          iconSize: i,
          iconColor: n
        } = t;
        if (e.iconSize !== i || e.iconColor !== n) {
          this.setState(e);
        }
      }
    }
    componentWillUnmount() {
      this.offThemeStateListener();
    }
    getIconState() {
      if (!this.titleRef.current) {
        return;
      }
      let e = window.getComputedStyle(this.titleRef.current);
      let t = parseInt(e.fontSize, 10) || 14;
      let i = e.color;
      if (i) {
        return {
          iconSize: t,
          iconColor: docxLarkUrlPreviewUtils.rgbToHex(i)
        };
      } else {
        return {
          iconSize: t,
          iconColor: ""
        };
      }
    }
    renderIcon() {
      let {
        icon: e,
        udFontIcon: t
      } = this.props;
      if (!e || e.type === "LOCAL_ICON") {
        return reactCoreLibraryReexport.createElement(globalLinkOutlinedIcon.GlobalLinkOutlined, {
          className: `${T}__icon ${T}__icon--default`
        });
      }
      if (e.type === "UD_ICON") {
        return reactCoreLibraryReexport.createElement(t, {
          icon: e.key,
          className: `${T}__icon`
        });
      }
      if (e.type === "SERVER_ICON" && e.url) {
        let {
          iconSize: t,
          iconColor: i
        } = this.state;
        return reactCoreLibraryReexport.createElement(v, {
          className: `${T}__icon ${T}__icon--dye-image`,
          imageUrl: e.url,
          width: t,
          height: t,
          color: i
        });
      }
      return null;
    }
    renderContent() {
      let {
        title: e
      } = this.props;
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, this.renderIcon(), reactCoreLibraryReexport.createElement("span", {
        className: `${T}__title`,
        ref: this.titleRef
      }, e));
    }
    renderAnchor() {
      let {
        url: e,
        tabIndex: t,
        onClick: i
      } = this.props;
      if (e) {
        return reactCoreLibraryReexport.createElement("a", {
          className: `${T}__anchor`,
          rel: "noopener noreferrer",
          target: "_blank",
          href: e,
          tabIndex: t,
          onClick: i,
          onContextMenu: this.onContextMenu
        }, this.renderContent());
      } else {
        return this.renderContent();
      }
    }
    renderTag() {
      let {
        tag: e
      } = this.props;
      if (e) {
        return reactCoreLibraryReexport.createElement(docxUiTagComponent.DocxTag, {
          className: `${T}__tag`,
          color: "blue"
        }, e);
      } else {
        return null;
      }
    }
    render() {
      let {
        className: e
      } = this.props;
      return reactCoreLibraryReexport.createElement("span", {
        className: C(T, e)
      }, this.renderAnchor(), this.renderTag());
    }
  }
  let z = withLocaleConfig.withLocaleConfig(E);
  let O = `${docxLarkUrlPreviewUtils.componentName}-comp-link`;
  var b = e => {
    var t;
    let {
      contentEditable: i = false,
      to: n,
      className: o,
      linkContent: s,
      style: l,
      elementId: a = "",
      urlPreviewIcon: c,
      hasUrlPreview: u,
      iconClass: g,
      udFontIcon: M,
      onContextMenu: d,
      onClick: I = () => {},
      urlPreviewExtInfo: p
    } = e;
    let y = /^[\w\-]+:/.test(n) ? n : /^[^/]*@/.test(n) ? `mailto:${n}` : `http://${n}`;
    let h = C(o, {
      [O]: true,
      [`${O}--disabled`]: !(t = y) || typeof t != "string" || !RegExp("^((http|https|ftp|lark)://|mailto:)").test(t),
      [`${O}--with-title`]: s && (!s || typeof s != "string" || !RegExp(`^${/https?:\/\/[-a-zA-Z0-9@:%._+~#=]{2,256}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/g.source}$`).test(s))
    });
    let N = s || n;
    return reactCoreLibraryReexport.createElement("a", {
      contentEditable: i,
      rel: "noopener noreferrer",
      target: "_blank",
      className: h,
      href: n && y,
      onClick: e => I(e, n),
      onCopy: e => {
        (function (e, {
          content: t,
          link: i
        }) {
          var n;
          let r = ((n = window.getSelection()) === null || n === undefined ? undefined : n.toString()) || "";
          if (i && r !== i && r === t) {
            e.preventDefault();
            e.stopPropagation();
            e.clipboardData.setData("text/plain", i);
          }
        })(e, {
          content: s,
          link: n
        });
      },
      style: l,
      "data-eleid": a,
      onContextMenu: d
    }, u && reactCoreLibraryReexport.createElement(z, {
      icon: c,
      title: N,
      udFontIcon: M,
      extInfo: p
    }), !u && reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, g && reactCoreLibraryReexport.createElement("i", {
      className: g,
      style: {
        marginRight: "4px"
      }
    }), N));
  };
  let L = `${docxLarkUrlPreviewUtils.componentName}-element-richtext__tag-anchor`;
  var x = withLocaleConfig.withLocaleConfig(function (e) {
    let {
      richTextElement: o,
      elementId: s = "",
      onElementClick: l
    } = e;
    let {
      platform: a,
      udFontIcon: c
    } = y();
    let u = reactCoreLibraryReexport.useCallback((e, t) => {
      e.stopPropagation();
      if (l) {
        l(e, {
          tag: errorConstantsCodes.HSs.A,
          property: o.property.anchor,
          payload: {
            link: t
          }
        });
      }
    }, [l, o]);
    let g = docxUrlPreviewUtils.useUrlPreview(o.urlPreviewHangPoint?.previewId);
    if (!(o == null ? undefined : o.property)?.anchor) {
      return null;
    }
    let {
      pcHref: I,
      href: p,
      textContent: N,
      content: m,
      isCustom: C
    } = o.property.anchor;
    let A = a === "web" ? p || I || "" : I || p || "";
    let f = N || m || "";
    return reactCoreLibraryReexport.createElement(b, {
      className: `${L} __anchor-intercept-flag__`,
      to: A,
      originalUrl: A,
      style: docxUrlPreviewUtils.parseElementStyle(o.style),
      elementId: s,
      linkContent: C ? f : (g == null ? undefined : g.title) ?? f,
      hasUrlPreview: !!g,
      urlPreviewIcon: g == null ? undefined : g.icon,
      urlPreviewExtInfo: g == null ? undefined : g.extInfo,
      udFontIcon: c,
      onClick: u,
      onContextMenu: t => M({
        content: f || A,
        link: A,
        config: e.config
      }, t)
    });
  });
  var webCoreConfigManager = require("web-core-config-manager") /*id: 406357*/;
  let _ = `${docxLarkUrlPreviewUtils.componentName}-comp-flatAt`;
  function S(e) {
    let t = reactCoreLibraryReexport.useRef(null);
    let {
      id: i,
      chatId: n,
      content: o = "",
      anonymousId: s,
      type: l,
      isAnonymous: a,
      currentUserId: c,
      style: u = {},
      onAvatarClick: g,
      source: M,
      sourceName: d,
      sourceId: I
    } = e;
    if (c) {
      if (i === "all") {
        u.cursor = "default";
      }
      return reactCoreLibraryReexport.createElement("span", {
        ref: t,
        style: u,
        className: C({
          [`${_}`]: !a && c !== i && !l,
          [`${_}--my-mention`]: (c === i || s && s === i) && !l,
          [`${_}--gray`]: l === "gray",
          [`${_}--all-mention`]: i === "all" && !l
        }),
        onClick: function () {
          if (!t.current || i === "all") {
            return;
          }
          let e = t.current.getBoundingClientRect();
          if (g != null) {
            g({
              chatId: n,
              userId: i,
              avatarRect: e,
              source: M,
              sourceName: d,
              sourceId: I
            });
          }
        }
      }, o);
    } else {
      return null;
    }
  }
  function P(e) {
    let {
      children: t,
      userId: i
    } = e;
    let {
      UserProfile: n
    } = y();
    return reactCoreLibraryReexport.createElement(G, {
      userProfile: n,
      chatterId: i,
      popoverProps: {
        trigger: "click"
      }
    }, reactCoreLibraryReexport.createElement("span", {
      onClick: e => {
        e.stopPropagation();
      }
    }, t));
  }
  let U = (e, t) => {
    let {
      styleKeys: i
    } = e;
    if (t && i && i.length) {
      return t(i, e);
    } else {
      return "";
    }
  };
  let Q = {
    [errorConstantsCodes.HSs.P]: function (e) {
      let {
        elementId: t
      } = e;
      let {
        tags: i
      } = y();
      return reactCoreLibraryReexport.createElement("div", {
        className: N,
        style: {
          minHeight: "15px"
        },
        "data-eleid": t
      }, docxUrlPreviewUtils.renderRichText(e, i));
    },
    [errorConstantsCodes.HSs.A]: x,
    [errorConstantsCodes.HSs.TEXT]: function (e) {
      let {
        richTextElement: t,
        elementId: i = ""
      } = e;
      if (!t) {
        return null;
      }
      let {
        property: n,
        style: o = {}
      } = t;
      let s = n.text && n.text.content;
      if (!s) {
        return null;
      }
      let l = docxUrlPreviewUtils.parseElementStyle(o);
      let a = C({
        [f]: true,
        [`${f}--font-italic}`]: l.fontStyle === "italic",
        [`${f}--end-emoji-polyfill`]: s && A.test(s.slice(-2))
      });
      return reactCoreLibraryReexport.createElement("span", {
        style: l,
        className: a,
        "data-eleid": i
      }, s);
    },
    [errorConstantsCodes.HSs.AT]: function (e) {
      let {
        richTextElement: t
      } = e;
      let {
        MentionWrapper: i = P
      } = y();
      let n = t.property.at;
      if (!n) {
        return null;
      }
      let {
        userId: o,
        content: s,
        isOuter: l,
        isAnonymous: a,
        displayName: c
      } = n;
      let u = c || s || "";
      let g = u.indexOf("@") === 0 ? u : `@${u}`;
      let M = webCoreConfigManager.configManager.getByKey("user");
      return reactCoreLibraryReexport.createElement(i, {
        userId: o && o !== "all" ? o : ""
      }, reactCoreLibraryReexport.createElement(S, {
        id: o,
        style: docxUrlPreviewUtils.parseElementStyle(t.style),
        currentUserId: M == null ? undefined : M.id,
        content: g,
        type: l && !a ? "gray" : "",
        isAnonymous: a
      }));
    },
    [errorConstantsCodes.HSs.EMOTION]: function (e) {
      let {
        richTextElement: n
      } = e;
      let {
        Emoji: o
      } = y();
      let s = (n == null ? undefined : n.property)?.emotion?.key;
      if (s && o) {
        return reactCoreLibraryReexport.createElement(o, {
          code: s,
          size: 24
        });
      } else {
        return null;
      }
    }
  };
  let Y = reactCoreLibraryReexport.memo(e => {
    let {
      tags: t
    } = y();
    let {
      start: i,
      end: n,
      richText: o,
      parseStyleKeys: s
    } = e;
    let {
      elementIds: l,
      elements: a
    } = o;
    let c = [];
    let u = Math.min(n, l.length);
    for (let n = i; n < u; n++) {
      let i = l[n];
      let o = a[i];
      if (!o) {
        continue;
      }
      let u = U(o, s);
      let g = t[o.tag];
      if (g) {
        c.push(reactCoreLibraryReexport.createElement(g, Object.assign({}, e, {
          key: i,
          richTextElement: o,
          richTextElements: a,
          elementId: i,
          className: u
        })));
      }
    }
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, c);
  }, (e, t) => e.renderKey === t.renderKey);
  function Z(e) {
    let {
      richText: i,
      overrideTags: n = {},
      frozen: o,
      platform: s,
      udFontIcon: l,
      UserProfile: a,
      Emoji: c,
      MentionWrapper: u
    } = e;
    let g = reactCoreLibraryReexport.useRef(0);
    let M = reactCoreLibraryReexport.useRef([]);
    let {
      requestTimer: d,
      cancelTimer: y
    } = reactHooksUtilities.useIdleTimer(2000);
    let h = reactHooksUtilities.useFirstRender();
    let N = reactHooksUtilities.useForceUpdate();
    let m = reactCoreLibraryReexport.useRef(0);
    let C = reactCoreLibraryReexport.useMemo(() => Object.assign(Object.assign({}, Q), n), [n]);
    let {
      elementIds: A = [],
      elements: f = {}
    } = i || {};
    let j = Math.floor((A.length - 1) / 200);
    let v = () => {
      if (!A.length || m.current > j) {
        return;
      }
      let t = m.current * 200;
      let i = `${g.current}-${m.current}`;
      let n = reactCoreLibraryReexport.createElement(Y, Object.assign({}, e, {
        key: i,
        renderKey: i,
        start: t,
        end: t + 200
      }));
      M.current[m.current] = n;
      m.current += 1;
    };
    let D = () => {
      if (A.length && !(m.current > j)) {
        d(() => {
          v();
          N();
          if (!o || m.current <= M.current.length) {
            D();
          }
        });
      }
    };
    reactCoreLibraryReexport.useMemo(() => {
      v();
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (!h) {
        g.current += 1;
        m.current = 0;
        if (M.current.length - 1 > j) {
          M.current = M.current.slice(0, j + 1);
        }
        D();
      }
    }, [i, A, f]);
    reactCoreLibraryReexport.useEffect(() => {
      if (o) {
        y();
      } else {
        D();
      }
    }, [o]);
    if ((i == null ? undefined : i.elementIds)?.length && (i == null ? undefined : i.elements)) {
      return reactCoreLibraryReexport.createElement(p.Provider, {
        value: {
          tags: C,
          platform: s,
          udFontIcon: l,
          UserProfile: a,
          Emoji: c,
          MentionWrapper: u
        }
      }, M.current);
    } else {
      return null;
    }
  }
  var reactScrollLock = require("react-scroll-lock") /*id: 184007*/;
  var archiveBoxPopover = require("archive-box-popover") /*id: 102490*/;
  let G = e => {
    let {
      chatterId: t,
      children: i,
      popoverProps: n,
      userProfile: o
    } = e;
    let s = o && t ? reactCoreLibraryReexport.createElement(reactScrollLock.BodyScrollLock, {
      removeScrollBar: false,
      enabled: true,
      forwardProps: true
    }, reactCoreLibraryReexport.createElement(o, {
      userId: t
    })) : null;
    let l = (n == null ? undefined : n.trigger) || "hover";
    let a = (n == null ? undefined : n.placement) || "rightTop";
    let c = !s || (n == null ? undefined : n.disabled);
    return reactCoreLibraryReexport.createElement(archiveBoxPopover.archiveBoxPopover, {
      overlayClassName: "larkw-url-preview-user-profile-popover",
      mode: "pure",
      trigger: l,
      placement: a,
      disabled: c,
      content: s,
      showArrow: false,
      offset: 7
    }, i);
  };
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var docxUrlPreviewExports_1 = require("docx-url-preview-exports_1") /*id: 637556*/;
  var larkUrlPreviewConfig = require("lark-url-preview-config") /*id: 347671*/;
  require("empty-module_9") /*id: 932644*/;
  require("empty-module-wrapper_2") /*id: 703182*/;
  var uiEventConstants = require("ui-event-constants") /*id: 132555*/;
  var larkWidgetLogger = require("lark-widget-logger") /*id: 360994*/;
  class J extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      this.logger = larkWidgetLogger.startSpan(larkUrlPreviewConfig.moduleTag);
      this.closeUrlPreview = e => {
        e.stopPropagation();
        this.setState({
          isClosed: true
        });
      };
      this.switchState = e => {
        this.setState({
          currentStateId: e
        });
      };
      this.onClickHandler = () => {
        let {
          urlPreviewEntity: e
        } = this.props;
        if (!e) {
          return;
        }
        let {
          previewBody: t
        } = e;
        let i = t && t.states[t.currentStateId].cardUrl;
        if (i) {
          window.open(i.pc || i.url, "_blank");
        }
      };
      this.trackPageClick = ({
        clickType: e = "page_click",
        componentId: t = "none",
        actionId: i
      }) => {
        let {
          urlPreviewEntity: l,
          isOldPreview: a
        } = this.props;
        this.logger.event(uiEventConstants.jQC, {
          attributes: {
            target: "none",
            click: e,
            url_id: a ? "none" : l.previewId,
            url_domain_path: l.url?.url ? docxUrlPreviewExports_1.stripUrlSearchParam(l.url?.url) : "",
            component_id: t,
            action_id: i,
            app_id: l.appInfo?.appId,
            scene_type: l.appInfo?.sceneType
          }
        });
        this.logger.flush();
      };
      this.state = {
        isClosed: false,
        currentStateId: ""
      };
    }
    componentDidMount() {
      var e;
      if ((e = docxUrlPreviewExports_1.previewConfig.logging) !== null && e !== undefined) {
        e.info("whm UrlPreviewCard didMount");
      }
    }
    componentDidUpdate(e) {
      if (!deepEqualUtil_1.deepEqual(e.urlPreviewEntity, this.props.urlPreviewEntity) && this.state.currentStateId) {
        this.setState({
          currentStateId: ""
        });
      }
    }
    componentDidCatch() {
      var e;
      let {
        urlPreviewEntity: t
      } = this.props;
      if ((e = docxUrlPreviewExports_1.previewConfig.logging) !== null && e !== undefined) {
        e.error(`${larkUrlPreviewConfig.moduleTag} componentDidCatch error`, t.previewId);
      }
    }
    async doAction(e, t = false) {
      var i;
      var n;
      let {
        previewBody: r
      } = this.props.urlPreviewEntity;
      if (!r) {
        return;
      }
      let {
        states: o,
        currentStateId: s
      } = r;
      let l = o[s].actions;
      if (!(l == null ? undefined : l[e])) {
        if ((i = docxUrlPreviewExports_1.previewConfig.logging) !== null && i !== undefined) {
          i.error(`${larkUrlPreviewConfig.moduleTag} action not exist`, e);
        }
        return;
      }
      let a = l[e];
      try {
        return await docxUrlPreviewExports_1.Xn.doUrlPreviewAction({
          actionId: e,
          action: a,
          switchState: this.switchState,
          copyUrlText: docxPreviewResolver.resolvePreview(this.props.config.lang.UrlPreview.Lark_Chat_CopyDocsURL)
        });
      } catch (e) {
        if ((n = docxUrlPreviewExports_1.previewConfig.logging) !== null && n !== undefined) {
          n.error(`${larkUrlPreviewConfig.moduleTag} do action error: `, e);
        }
        if (!t && a.fallbackActionId) {
          return await this.doAction(a.fallbackActionId, true);
        }
      }
    }
    render() {
      var e;
      var i;
      var n;
      if (this.props.urlPreviewClosable && this.state.isClosed) {
        if ((e = docxUrlPreviewExports_1.previewConfig.logging) !== null && e !== undefined) {
          e.info(`${larkUrlPreviewConfig.moduleTag} preview closed`);
        }
        return null;
      }
      if (!this.props.urlPreviewEntity?.previewBody) {
        return null;
      }
      let s = this.props.urlPreviewEntity;
      let {
        previewBody: l
      } = s;
      if (!(l == null ? undefined : l.states) || !(l == null ? undefined : l.currentStateId)) {
        if ((i = docxUrlPreviewExports_1.previewConfig.logging) !== null && i !== undefined) {
          i.error(`${larkUrlPreviewConfig.moduleTag} previewBody states or currentStateId not exist`);
        }
        return null;
      }
      let a = l.states[this.state.currentStateId || l.currentStateId];
      let {
        template: c
      } = a;
      if (!c || !c.elements || !c.rootComponentId) {
        if ((n = docxUrlPreviewExports_1.previewConfig.logging) !== null && n !== undefined) {
          n.error(`${larkUrlPreviewConfig.moduleTag} previewBody template not exist`);
        }
        return null;
      }
      let {
        elements: u,
        rootComponentId: g
      } = c;
      let M = C(`${docxUrlPreviewExports_1.previewClassName}-card`, {
        [`${docxUrlPreviewExports_1.previewClassName}-card--clickable`]: a.cardUrl?.url
      });
      return reactCoreLibraryReexport.createElement("div", {
        className: this.props.className
      }, reactCoreLibraryReexport.createElement("div", {
        className: M
      }, reactCoreLibraryReexport.createElement(docxUrlPreviewExports_1.PreviewElement, Object.assign({}, this.props, {
        key: g,
        element: u[g],
        elementId: g,
        elementEntity: c,
        urlPreviewEntity: s,
        doAction: this.doAction.bind(this),
        closeUrlPreview: this.closeUrlPreview,
        urlPreviewClosable: this.props.urlPreviewClosable,
        theme: this.props.theme,
        trackPageClick: this.trackPageClick,
        style: {
          overflow: "hidden"
        },
        onLoaded: this.props.onLoaded,
        onHeightDidUpdate: this.props.onHeightDidUpdate,
        onOpenImageViewer: this.props.onOpenImageViewer,
        onFromChatClick: this.onClickHandler
      }))));
    }
  }
  J.defaultProps = {
    urlPreviewClosable: true
  };
  let $ = withLocaleConfig.withLocaleConfig(J);
  let X = reactCoreLibraryReexport.memo(e => e.urlPreviewEntity ? reactCoreLibraryReexport.createElement($, Object.assign({}, e, {
    urlPreviewEntity: e.urlPreviewEntity
  })) : null);
  require.d(exports, {
    dyeImageSvg: function () {
      return v;
    },
    urlPreviewInline: function () {
      return z;
    },
    richTextRenderer: function () {
      return Z;
    },
    UdFontIcon: function () {
      return udFontIconComponent.UdFontIcon;
    },
    userProfilePopover: function () {
      return G;
    },
    urlPreviewCard: function () {
      return X;
    }
  });
}