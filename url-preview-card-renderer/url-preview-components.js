// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v6' to 'ColoredSvgImage'
// - Renamed export 'Od' to 'UrlPreviewTag'
// - Renamed export 'Kh' to 'RichTextRenderer'
// - Renamed export 'EO' to 'IconComponent'
// - Renamed export 'Bi' to 'UserProfilePopover'
// - Renamed export 'fO' to 'UrlPreviewCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 909577
         */
module.exports = function (module, exports, require) {
  var iconComponent = require("icon-component") /*id: 932319*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var toastNotificationManagerWrapper = require("toast-notification-manager-wrapper") /*id: 314333*/;
  var contextMenuService = require("context-menu-service") /*id: 304826*/;
  var uiMenuComponent = require("ui-menu-component") /*id: 879406*/;
  var tooltipComponentModule = require("tooltip-component-module") /*id: 91247*/;
  var copyOutlinedIcon = require("copy-outlined-icon") /*id: 515436*/;
  var urlPreviewCacheUtilityModule = require("url-preview-cache-utility-module") /*id: 779458*/;
  var optionalFunctionCall = require("optional-function-call") /*id: 698252*/;
  function I({
    content: e = "",
    link: t = "",
    config: n
  }, r) {
    var I;
    if (!e || !t) {
      return;
    }
    r.preventDefault();
    r.stopPropagation();
    r.nativeEvent.stopImmediatePropagation();
    let A = [{
      id: "copy",
      title: optionalFunctionCall.callIfFunction(n.lang.UrlPreview.Lark_Legacy_Copy),
      role: "copy",
      icon: copyOutlinedIcon.CopyOutlinedIcon,
      onClick: async () => {
        await urlPreviewCacheUtilityModule.copyToClipboard(e);
        toastNotificationManagerWrapper.toastManagerWrapper.success(optionalFunctionCall.callIfFunction(n.lang.UrlPreview.Lark_Chat_CopyDocsURL));
      }
    }];
    if (e && e !== t) {
      A.unshift({
        id: "copy_link",
        title: optionalFunctionCall.callIfFunction(n.lang.UrlPreview.Lark_Chat_CopyLink),
        role: "copy_link",
        icon: copyOutlinedIcon.CopyOutlinedIcon,
        onClick: async () => {
          await urlPreviewCacheUtilityModule.copyToClipboard(t);
          toastNotificationManagerWrapper.toastManagerWrapper.success(optionalFunctionCall.callIfFunction(n.lang.UrlPreview.Lark_Chat_CopyDocsURL));
        }
      });
    }
    contextMenuService.contextMenuService.open({
      menu: (I = A, reactCoreLibraryReexport.createElement(uiMenuComponent.Menu, {
        className: `${urlPreviewCacheUtilityModule.componentName}__context-menu`
      }, I.map((e, t) => {
        let n = reactCoreLibraryReexport.createElement(uiMenuComponent.Menu.Item, {
          key: e.id || t,
          icon: e.icon && reactCoreLibraryReexport.createElement(e.icon, null),
          onMouseDown: e => e.preventDefault(),
          onClick: e.onClick
        }, e.title);
        if (e.tooltip) {
          return reactCoreLibraryReexport.createElement(tooltipComponentModule.TooltipComponent, Object.assign({
            key: e.id || t
          }, e.tooltip), n);
        } else {
          return n;
        }
      }))),
      position: [r.pageX, r.pageY]
    });
  }
  var errorConstantsCodes = require("error-constants-codes") /*id: 850732*/;
  var reactHookUtilities = require("react-hook-utilities") /*id: 306319*/;
  let u = reactCoreLibraryReexport.createContext(null);
  function d() {
    return reactCoreLibraryReexport.useContext(u);
  }
  var richTextElementProcessor = require("rich-text-element-processor") /*id: 386172*/;
  let N = `${urlPreviewCacheUtilityModule.componentName}-element-richtext__tag-paragraph`;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var C = classnamesUtils;
  let L = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/;
  let p = `${urlPreviewCacheUtilityModule.componentName}-element-richtext__tag-text`;
  var localeContextHocWrappers = require("locale-context-hoc-wrappers") /*id: 945449*/;
  let f = e => {
    let {
      imageUrl: t,
      width: n,
      height: r,
      className: o,
      color: _
    } = e;
    let a = urlPreviewCacheUtilityModule.generateRandomId();
    let [E, l] = reactCoreLibraryReexport.useState(false);
    if (E || !_) {
      return null;
    }
    let T = /^rgb/.test(_) ? urlPreviewCacheUtilityModule.rgbToHex(_) : _;
    return reactCoreLibraryReexport.createElement("svg", {
      className: `base-component__dye-image ${o}`,
      viewBox: `0 0 ${n} ${r}`,
      width: n,
      height: r
    }, reactCoreLibraryReexport.createElement("filter", {
      id: `${a}`
    }, reactCoreLibraryReexport.createElement("feColorMatrix", {
      in: "SourceGraphic",
      colorInterpolationFilters: "sRGB",
      type: "matrix",
      values: urlPreviewCacheUtilityModule.hexToColorMatrix(T)
    })), reactCoreLibraryReexport.createElement("image", {
      xlinkHref: t,
      x: "0",
      y: "0",
      width: n,
      height: r,
      filter: `url(#${a})`,
      onError: () => l(true)
    }));
  };
  var globalLinkOutlinedIcon = require("global-link-outlined-icon") /*id: 70621*/;
  var docxUiTagComponent = require("docx-ui-tag-component") /*id: 840665*/;
  require("empty-module-stub_8") /*id: 917647*/;
  let D = `${urlPreviewCacheUtilityModule.componentName}-inline`;
  class P extends reactCoreLibraryReexport.PureComponent {
    constructor(e) {
      super(e);
      this.titleRef = reactCoreLibraryReexport.createRef();
      this.offThemeStateListener = () => {};
      this.onContextMenu = e => {
        let {
          title: t,
          url: n
        } = this.props;
        I({
          content: t,
          link: n,
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
          iconSize: n,
          iconColor: r
        } = t;
        if (e.iconSize !== n || e.iconColor !== r) {
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
      let n = e.color;
      if (n) {
        return {
          iconSize: t,
          iconColor: urlPreviewCacheUtilityModule.rgbToHex(n)
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
          className: `${D}__icon ${D}__icon--default`
        });
      }
      if (e.type === "UD_ICON") {
        return reactCoreLibraryReexport.createElement(t, {
          icon: e.key,
          className: `${D}__icon`
        });
      }
      if (e.type === "SERVER_ICON" && e.url) {
        let {
          iconSize: t,
          iconColor: n
        } = this.state;
        return reactCoreLibraryReexport.createElement(f, {
          className: `${D}__icon ${D}__icon--dye-image`,
          imageUrl: e.url,
          width: t,
          height: t,
          color: n
        });
      }
      return null;
    }
    renderContent() {
      let {
        title: e
      } = this.props;
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, this.renderIcon(), reactCoreLibraryReexport.createElement("span", {
        className: `${D}__title`,
        ref: this.titleRef
      }, e));
    }
    renderAnchor() {
      let {
        url: e,
        tabIndex: t,
        onClick: n
      } = this.props;
      if (e) {
        return reactCoreLibraryReexport.createElement("a", {
          className: `${D}__anchor`,
          rel: "noopener noreferrer",
          target: "_blank",
          href: e,
          tabIndex: t,
          onClick: n,
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
          className: `${D}__tag`,
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
        className: C(D, e)
      }, this.renderAnchor(), this.renderTag());
    }
  }
  let m = localeContextHocWrappers.withLocaleConfig(P);
  let U = `${urlPreviewCacheUtilityModule.componentName}-comp-link`;
  var b = e => {
    var t;
    let {
      contentEditable: n = false,
      to: r,
      className: o,
      linkContent: _,
      style: a,
      elementId: E = "",
      urlPreviewIcon: l,
      hasUrlPreview: c,
      iconClass: T,
      udFontIcon: I,
      onContextMenu: A,
      onClick: s = () => {},
      urlPreviewExtInfo: u
    } = e;
    let d = /^[\w\-]+:/.test(r) ? r : /^[^/]*@/.test(r) ? `mailto:${r}` : `http://${r}`;
    let g = C(o, {
      [U]: true,
      [`${U}--disabled`]: !(t = d) || typeof t != "string" || !RegExp("^((http|https|ftp|lark)://|mailto:)").test(t),
      [`${U}--with-title`]: _ && (!_ || typeof _ != "string" || !RegExp(`^${/https?:\/\/[-a-zA-Z0-9@:%._+~#=]{2,256}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/g.source}$`).test(_))
    });
    let N = _ || r;
    return reactCoreLibraryReexport.createElement("a", {
      contentEditable: n,
      rel: "noopener noreferrer",
      target: "_blank",
      className: g,
      href: r && d,
      onClick: e => s(e, r),
      onCopy: e => {
        (function (e, {
          content: t,
          link: n
        }) {
          var r;
          let i = ((r = window.getSelection()) === null || r === undefined ? undefined : r.toString()) || "";
          if (n && i !== n && i === t) {
            e.preventDefault();
            e.stopPropagation();
            e.clipboardData.setData("text/plain", n);
          }
        })(e, {
          content: _,
          link: r
        });
      },
      style: a,
      "data-eleid": E,
      onContextMenu: A
    }, c && reactCoreLibraryReexport.createElement(m, {
      icon: l,
      title: N,
      udFontIcon: I,
      extInfo: u
    }), !c && reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, T && reactCoreLibraryReexport.createElement("i", {
      className: T,
      style: {
        marginRight: "4px"
      }
    }), N));
  };
  let v = `${urlPreviewCacheUtilityModule.componentName}-element-richtext__tag-anchor`;
  var y = localeContextHocWrappers.withLocaleConfig(function (e) {
    let {
      richTextElement: o,
      elementId: _ = "",
      onElementClick: a
    } = e;
    let {
      platform: E,
      udFontIcon: l
    } = d();
    let c = reactCoreLibraryReexport.useCallback((e, t) => {
      e.stopPropagation();
      if (a) {
        a(e, {
          tag: errorConstantsCodes.HSs.A,
          property: o.property.anchor,
          payload: {
            link: t
          }
        });
      }
    }, [a, o]);
    let T = richTextElementProcessor.useInlinePreviewEntity(o.urlPreviewHangPoint?.previewId);
    if (!(o == null ? undefined : o.property)?.anchor) {
      return null;
    }
    let {
      pcHref: s,
      href: u,
      textContent: N,
      content: S,
      isCustom: C
    } = o.property.anchor;
    let L = E === "web" ? u || s || "" : s || u || "";
    let p = N || S || "";
    return reactCoreLibraryReexport.createElement(b, {
      className: `${v} __anchor-intercept-flag__`,
      to: L,
      originalUrl: L,
      style: richTextElementProcessor.normalizeTextStyles(o.style),
      elementId: _,
      linkContent: C ? p : (T == null ? undefined : T.title) ?? p,
      hasUrlPreview: !!T,
      urlPreviewIcon: T == null ? undefined : T.icon,
      urlPreviewExtInfo: T == null ? undefined : T.extInfo,
      udFontIcon: l,
      onClick: c,
      onContextMenu: t => I({
        content: p || L,
        link: L,
        config: e.config
      }, t)
    });
  });
  var appConfigExtendedInitializer = require("app-config-extended-initializer") /*id: 806887*/;
  let G = `${urlPreviewCacheUtilityModule.componentName}-comp-flatAt`;
  function w(e) {
    let t = reactCoreLibraryReexport.useRef(null);
    let {
      id: n,
      chatId: r,
      content: o = "",
      anonymousId: _,
      type: a,
      isAnonymous: E,
      currentUserId: l,
      style: c = {},
      onAvatarClick: T,
      source: I,
      sourceName: A,
      sourceId: s
    } = e;
    if (l) {
      if (n === "all") {
        c.cursor = "default";
      }
      return reactCoreLibraryReexport.createElement("span", {
        ref: t,
        style: c,
        className: C({
          [`${G}`]: !E && l !== n && !a,
          [`${G}--my-mention`]: (l === n || _ && _ === n) && !a,
          [`${G}--gray`]: a === "gray",
          [`${G}--all-mention`]: n === "all" && !a
        }),
        onClick: function () {
          if (!t.current || n === "all") {
            return;
          }
          let e = t.current.getBoundingClientRect();
          if (T != null) {
            T({
              chatId: r,
              userId: n,
              avatarRect: e,
              source: I,
              sourceName: A,
              sourceId: s
            });
          }
        }
      }, o);
    } else {
      return null;
    }
  }
  function k(e) {
    let {
      children: t,
      userId: n
    } = e;
    let {
      UserProfile: r
    } = d();
    return reactCoreLibraryReexport.createElement(F, {
      userProfile: r,
      chatterId: n,
      popoverProps: {
        trigger: "click"
      }
    }, reactCoreLibraryReexport.createElement("span", {
      onClick: e => {
        e.stopPropagation();
      }
    }, t));
  }
  let H = (e, t) => {
    let {
      styleKeys: n
    } = e;
    if (t && n && n.length) {
      return t(n, e);
    } else {
      return "";
    }
  };
  let x = {
    [errorConstantsCodes.HSs.P]: function (e) {
      let {
        elementId: t
      } = e;
      let {
        tags: n
      } = d();
      return reactCoreLibraryReexport.createElement("div", {
        className: N,
        style: {
          minHeight: "15px"
        },
        "data-eleid": t
      }, richTextElementProcessor.renderChildElements(e, n));
    },
    [errorConstantsCodes.HSs.A]: y,
    [errorConstantsCodes.HSs.TEXT]: function (e) {
      let {
        richTextElement: t,
        elementId: n = ""
      } = e;
      if (!t) {
        return null;
      }
      let {
        property: r,
        style: o = {}
      } = t;
      let _ = r.text && r.text.content;
      if (!_) {
        return null;
      }
      let a = richTextElementProcessor.normalizeTextStyles(o);
      let E = C({
        [p]: true,
        [`${p}--font-italic}`]: a.fontStyle === "italic",
        [`${p}--end-emoji-polyfill`]: _ && L.test(_.slice(-2))
      });
      return reactCoreLibraryReexport.createElement("span", {
        style: a,
        className: E,
        "data-eleid": n
      }, _);
    },
    [errorConstantsCodes.HSs.AT]: function (e) {
      let {
        richTextElement: t
      } = e;
      let {
        MentionWrapper: n = k
      } = d();
      let r = t.property.at;
      if (!r) {
        return null;
      }
      let {
        userId: o,
        content: _,
        isOuter: a,
        isAnonymous: E,
        displayName: l
      } = r;
      let c = l || _ || "";
      let T = c.indexOf("@") === 0 ? c : `@${c}`;
      let I = appConfigExtendedInitializer.extendedAppConfig.getByKey("user");
      return reactCoreLibraryReexport.createElement(n, {
        userId: o && o !== "all" ? o : ""
      }, reactCoreLibraryReexport.createElement(w, {
        id: o,
        style: richTextElementProcessor.normalizeTextStyles(t.style),
        currentUserId: I == null ? undefined : I.id,
        content: T,
        type: a && !E ? "gray" : "",
        isAnonymous: E
      }));
    },
    [errorConstantsCodes.HSs.EMOTION]: function (e) {
      let {
        richTextElement: r
      } = e;
      let {
        Emoji: o
      } = d();
      let _ = (r == null ? undefined : r.property)?.emotion?.key;
      if (_ && o) {
        return reactCoreLibraryReexport.createElement(o, {
          code: _,
          size: 24
        });
      } else {
        return null;
      }
    }
  };
  let j = reactCoreLibraryReexport.memo(e => {
    let {
      tags: t
    } = d();
    let {
      start: n,
      end: r,
      richText: o,
      parseStyleKeys: _
    } = e;
    let {
      elementIds: a,
      elements: E
    } = o;
    let l = [];
    let c = Math.min(r, a.length);
    for (let r = n; r < c; r++) {
      let n = a[r];
      let o = E[n];
      if (!o) {
        continue;
      }
      let c = H(o, _);
      let T = t[o.tag];
      if (T) {
        l.push(reactCoreLibraryReexport.createElement(T, Object.assign({}, e, {
          key: n,
          richTextElement: o,
          richTextElements: E,
          elementId: n,
          className: c
        })));
      }
    }
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, l);
  }, (e, t) => e.renderKey === t.renderKey);
  function B(e) {
    let {
      richText: n,
      overrideTags: r = {},
      frozen: o,
      platform: _,
      udFontIcon: a,
      UserProfile: E,
      Emoji: l,
      MentionWrapper: c
    } = e;
    let T = reactCoreLibraryReexport.useRef(0);
    let I = reactCoreLibraryReexport.useRef([]);
    let {
      requestTimer: A,
      cancelTimer: d
    } = reactHookUtilities.useIdleTimer(2000);
    let g = reactHookUtilities.useIsFirstRender();
    let N = reactHookUtilities.useForceUpdate();
    let S = reactCoreLibraryReexport.useRef(0);
    let C = reactCoreLibraryReexport.useMemo(() => Object.assign(Object.assign({}, x), r), [r]);
    let {
      elementIds: L = [],
      elements: p = {}
    } = n || {};
    let M = Math.floor((L.length - 1) / 200);
    let f = () => {
      if (!L.length || S.current > M) {
        return;
      }
      let t = S.current * 200;
      let n = `${T.current}-${S.current}`;
      let r = reactCoreLibraryReexport.createElement(j, Object.assign({}, e, {
        key: n,
        renderKey: n,
        start: t,
        end: t + 200
      }));
      I.current[S.current] = r;
      S.current += 1;
    };
    let O = () => {
      if (L.length && !(S.current > M)) {
        A(() => {
          f();
          N();
          if (!o || S.current <= I.current.length) {
            O();
          }
        });
      }
    };
    reactCoreLibraryReexport.useMemo(() => {
      f();
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (!g) {
        T.current += 1;
        S.current = 0;
        if (I.current.length - 1 > M) {
          I.current = I.current.slice(0, M + 1);
        }
        O();
      }
    }, [n, L, p]);
    reactCoreLibraryReexport.useEffect(() => {
      if (o) {
        d();
      } else {
        O();
      }
    }, [o]);
    if ((n == null ? undefined : n.elementIds)?.length && (n == null ? undefined : n.elements)) {
      return reactCoreLibraryReexport.createElement(u.Provider, {
        value: {
          tags: C,
          platform: _,
          udFontIcon: a,
          UserProfile: E,
          Emoji: l,
          MentionWrapper: c
        }
      }, I.current);
    } else {
      return null;
    }
  }
  var reactScrollLock = require("react-scroll-lock") /*id: 184007*/;
  var archiveBoxPopover = require("archive-box-popover") /*id: 102490*/;
  let F = e => {
    let {
      chatterId: t,
      children: n,
      popoverProps: r,
      userProfile: o
    } = e;
    let _ = o && t ? reactCoreLibraryReexport.createElement(reactScrollLock.BodyScrollLock, {
      removeScrollBar: false,
      enabled: true,
      forwardProps: true
    }, reactCoreLibraryReexport.createElement(o, {
      userId: t
    })) : null;
    let a = (r == null ? undefined : r.trigger) || "hover";
    let E = (r == null ? undefined : r.placement) || "rightTop";
    let l = !_ || (r == null ? undefined : r.disabled);
    return reactCoreLibraryReexport.createElement(archiveBoxPopover.archiveBoxPopover, {
      overlayClassName: "larkw-url-preview-user-profile-popover",
      mode: "pure",
      trigger: a,
      placement: E,
      disabled: l,
      content: _,
      showArrow: false,
      offset: 7
    }, n);
  };
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var docxUrlPreviewExports = require("docx-url-preview-exports") /*id: 777722*/;
  var larkUrlPreviewTypographyStyles = require("lark-url-preview-typography-styles") /*id: 622376*/;
  require("empty-module_9") /*id: 932644*/;
  require("empty-module-wrapper_2") /*id: 703182*/;
  var uiEventConstants = require("ui-event-constants") /*id: 132555*/;
  var larkLoggerTracingUtils = require("lark-logger-tracing-utils") /*id: 944519*/;
  class X extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      this.logger = larkLoggerTracingUtils.startSpan(larkUrlPreviewTypographyStyles.moduleTitle);
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
        let n = t && t.states[t.currentStateId].cardUrl;
        if (n) {
          window.open(n.pc || n.url, "_blank");
        }
      };
      this.trackPageClick = ({
        clickType: e = "page_click",
        componentId: t = "none",
        actionId: n
      }) => {
        let {
          urlPreviewEntity: a,
          isOldPreview: E
        } = this.props;
        this.logger.event(uiEventConstants.jQC, {
          attributes: {
            target: "none",
            click: e,
            url_id: E ? "none" : a.previewId,
            url_domain_path: a.url?.url ? docxUrlPreviewExports.cleanUrl(a.url?.url) : "",
            component_id: t,
            action_id: n,
            app_id: a.appInfo?.appId,
            scene_type: a.appInfo?.sceneType
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
      if ((e = docxUrlPreviewExports.urlPreviewManager.logging) !== null && e !== undefined) {
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
      if ((e = docxUrlPreviewExports.urlPreviewManager.logging) !== null && e !== undefined) {
        e.error(`${larkUrlPreviewTypographyStyles.moduleTitle} componentDidCatch error`, t.previewId);
      }
    }
    async doAction(e, t = false) {
      var n;
      var r;
      let {
        previewBody: i
      } = this.props.urlPreviewEntity;
      if (!i) {
        return;
      }
      let {
        states: o,
        currentStateId: _
      } = i;
      let a = o[_].actions;
      if (!(a == null ? undefined : a[e])) {
        if ((n = docxUrlPreviewExports.urlPreviewManager.logging) !== null && n !== undefined) {
          n.error(`${larkUrlPreviewTypographyStyles.moduleTitle} action not exist`, e);
        }
        return;
      }
      let E = a[e];
      try {
        return await docxUrlPreviewExports.UrlPreviewApi.doUrlPreviewAction({
          actionId: e,
          action: E,
          switchState: this.switchState,
          copyUrlText: optionalFunctionCall.callIfFunction(this.props.config.lang.UrlPreview.Lark_Chat_CopyDocsURL)
        });
      } catch (e) {
        if ((r = docxUrlPreviewExports.urlPreviewManager.logging) !== null && r !== undefined) {
          r.error(`${larkUrlPreviewTypographyStyles.moduleTitle} do action error: `, e);
        }
        if (!t && E.fallbackActionId) {
          return await this.doAction(E.fallbackActionId, true);
        }
      }
    }
    render() {
      var e;
      var n;
      var r;
      if (this.props.urlPreviewClosable && this.state.isClosed) {
        if ((e = docxUrlPreviewExports.urlPreviewManager.logging) !== null && e !== undefined) {
          e.info(`${larkUrlPreviewTypographyStyles.moduleTitle} preview closed`);
        }
        return null;
      }
      if (!this.props.urlPreviewEntity?.previewBody) {
        return null;
      }
      let _ = this.props.urlPreviewEntity;
      let {
        previewBody: a
      } = _;
      if (!(a == null ? undefined : a.states) || !(a == null ? undefined : a.currentStateId)) {
        if ((n = docxUrlPreviewExports.urlPreviewManager.logging) !== null && n !== undefined) {
          n.error(`${larkUrlPreviewTypographyStyles.moduleTitle} previewBody states or currentStateId not exist`);
        }
        return null;
      }
      let E = a.states[this.state.currentStateId || a.currentStateId];
      let {
        template: l
      } = E;
      if (!l || !l.elements || !l.rootComponentId) {
        if ((r = docxUrlPreviewExports.urlPreviewManager.logging) !== null && r !== undefined) {
          r.error(`${larkUrlPreviewTypographyStyles.moduleTitle} previewBody template not exist`);
        }
        return null;
      }
      let {
        elements: c,
        rootComponentId: T
      } = l;
      let I = C(`${docxUrlPreviewExports.previewClassName}-card`, {
        [`${docxUrlPreviewExports.previewClassName}-card--clickable`]: E.cardUrl?.url
      });
      return reactCoreLibraryReexport.createElement("div", {
        className: this.props.className
      }, reactCoreLibraryReexport.createElement("div", {
        className: I
      }, reactCoreLibraryReexport.createElement(docxUrlPreviewExports.PreviewElement, Object.assign({}, this.props, {
        key: T,
        element: c[T],
        elementId: T,
        elementEntity: l,
        urlPreviewEntity: _,
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
  X.defaultProps = {
    urlPreviewClosable: true
  };
  let J = localeContextHocWrappers.withLocaleConfig(X);
  let $ = reactCoreLibraryReexport.memo(e => e.urlPreviewEntity ? reactCoreLibraryReexport.createElement(J, Object.assign({}, e, {
    urlPreviewEntity: e.urlPreviewEntity
  })) : null);
  require.d(exports, {
    ColoredSvgImage: function () {
      return f;
    },
    UrlPreviewTag: function () {
      return m;
    },
    RichTextRenderer: function () {
      return B;
    },
    IconComponent: function () {
      return iconComponent.iconComponent;
    },
    UserProfilePopover: function () {
      return F;
    },
    UrlPreviewCard: function () {
      return $;
    }
  });
}