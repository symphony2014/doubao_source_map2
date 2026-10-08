// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'ImageSkillGuidancePage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-skill-guidance-page.b074653e.js
         * chunkId: 25336
         * moduleId: 389803
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var localeDirectionCheck = require("locale-direction-check") /*id: 255854*/;
  var imageGuidanceUtils = require("image-guidance-utils") /*id: 194509*/;
  var imageTemplateConfig = require("image-template-config") /*id: 339806*/;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var useIntersectionObserver = require("use-intersection-observer") /*id: 774639*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlSettingsIconComponent = require("rtl-settings-icon-component") /*id: 996282*/;
  var imageTemplateActionBar = require("image-template-action-bar") /*id: 826884*/;
  var base64PngImageAsset = require("base64-png-image-asset") /*id: 169540*/;
  var imageSkillChatInputIcon = require("image-skill-chat-input-icon") /*id: 138803*/;
  var f = {
    "image-item": "image-item-liO_BU",
    "image-item-img-container": "image-item-img-container-QRWTte",
    "image-item-img": "image-item-img-goVfDB",
    "image-item-cover": "image-item-cover-iHxB0a",
    "image-item-cover-btn": "image-item-cover-btn-nEDOGW",
    "image-item-cover-text": "image-item-cover-text-W3g04j",
    "image-item-cover-water-mark": "image-item-cover-water-mark-hiuauj",
    "scroll-image-wrapper": "scroll-image-wrapper-rE3ObR",
    "scroll-image": "scroll-image-hGqj0t",
    intro: "intro-IEjzVu"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => {
    let {
      src: t,
      style: n = {},
      imageData: r,
      useTemplatePrompt: a,
      useTemplateImage: l,
      enterTemplate: y,
      showTemplate: k,
      t: w,
      index: b,
      categoryName: S
    } = e;
    let E = i18nextLanguageGetter.getCurrentLanguage();
    let x = reactCoreLibraryReexport.useRef(null);
    let C = reactCoreLibraryReexport.useRef(null);
    let {
      creationImageTemplateApplyV1: I
    } = imageTemplateConfig.getTemplateConfig();
    let {
      run: T
    } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
      if (y != null) {
        y(r);
      }
    }, {
      wait: 1000
    });
    let [N] = useIntersectionObserver.useIntersection(x, {
      threshold: 0.5
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (N && r.show_value && S && S !== "") {
        if (k != null) {
          k(r, b, S);
        }
      }
    }, [N, S, r]);
    let R = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (a != null) {
        a(r, b);
      }
      e.stopPropagation();
    });
    let j = reactFunctionMemoHook.useMemoizedCallback(async e => {
      e.stopPropagation();
      await (l == null ? undefined : l(r, b));
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: f["image-item"],
      style: {
        ...n
      },
      ref: x,
      onMouseEnter: T,
      "data-testid": "skill-page-image-template-item",
      children: t ? reactJsxRuntimeCoreReexport.jsxs("div", {
        className: f["image-item-img-container"],
        children: [reactJsxRuntimeCoreReexport.jsx("img", {
          ref: C,
          src: t,
          style: {
            width: "100%",
            height: "100%"
          },
          className: f["image-item-img"]
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: f["image-item-cover"],
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: f["image-item-cover-text"],
            "data-testid": "skill-page-image-template-item-title",
            children: r.show_value
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: f["image-item-cover-water-mark"],
            children: E === "en" ? reactJsxRuntimeCoreReexport.jsx("img", {
              src: imageSkillChatInputIcon,
              className: "h-17 w-56"
            }) : reactJsxRuntimeCoreReexport.jsx("img", {
              src: base64PngImageAsset,
              className: "h-17 w-38"
            })
          }), I ? reactJsxRuntimeCoreReexport.jsx(imageTemplateActionBar.ImageTemplateActionBar, {
            onApplyPrompt: R,
            onApplyImage: j
          }) : reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            className: f["image-item-cover-btn"],
            icon: reactJsxRuntimeCoreReexport.jsx(rtlSettingsIconComponent.RtlSettingsIcon, {
              className: "!text-16"
            }),
            onClick: R,
            "data-testid": "skill-page-image-template-item-apply",
            children: w == null ? undefined : w("make_the_template_style")
          })]
        })]
      }) : null
    });
  };
  var docxCreationAgentHook = require("docx-creation-agent-hook") /*id: 933686*/;
  var skillChatImageResolver = require("skill-chat-image-resolver") /*id: 771990*/;
  let b = e => {
    let {
      style: n,
      item: r,
      language: a
    } = e;
    let l = reactCoreLibraryReexport.useRef(null);
    let [o] = useIntersectionObserver.useIntersection(l, {
      threshold: 0.5
    });
    let {
      creationAgentBannerVersion: s,
      creationAgentBannerImage: c
    } = docxCreationAgentHook.useCreationAgent();
    reactCoreLibraryReexport.useEffect(() => {
      if (o) {
        var e;
        if (r != null && (e = r.onShow) !== null && e !== undefined) {
          e.call(r);
        }
      }
    }, [o]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      style: {
        ...n,
        backgroundImage: `url(${skillChatImageResolver.getSkillImageUrl(s, "waterfall", "bg", a || "", c)})`
      },
      className: f.intro,
      onClick: r.onClick,
      ref: l,
      children: reactJsxRuntimeCoreReexport.jsx("img", {
        src: r.default_image?.url,
        style: {
          width: "100%",
          height: "100%"
        }
      })
    });
  };
  let S = e => {
    let {
      listData: n,
      useTemplatePrompt: o,
      useTemplateImage: s,
      enterTemplate: u,
      showTemplate: c,
      pageType: d,
      t: p,
      categoryName: h,
      language: m
    } = e;
    let g = reactCoreLibraryReexport.useRef(null);
    let _ = reactCoreLibraryReexport.useRef([]);
    let k = useElementSizeHook_2.useElementSize(g);
    let w = (k == null ? undefined : k.width) ?? 0;
    let S = reactCoreLibraryReexport.useMemo(() => imageGuidanceUtils.getImageLevel(d, w), [w]);
    let E = reactCoreLibraryReexport.useMemo(() => (w - (S - 1) * 2) / S, [S, w]);
    let x = reactCoreLibraryReexport.useRef(0);
    let C = reactCoreLibraryReexport.useMemo(() => {
      x.current = 0;
      let e = [];
      let t = [];
      for (let i = 0; i < n.length; i++) {
        let r = Math.floor(i / S);
        let l = i % S + 1;
        let o = 0;
        let s = 9999999999;
        if (r === 0) {
          t[i] = i;
        } else {
          for (let e = 0; e < t.length; e++) {
            if (_.current[t[e]].top + _.current[t[e]].height < s) {
              o = e;
              s = _.current[t[e]].top + _.current[t[e]].height;
            }
          }
          t[o] = i;
        }
        if (_.current[i] === undefined) {
          _.current[i] = {};
        }
        if (r === 0) {
          if (l === 1) {
            _.current[i].left = 0;
          } else {
            _.current[i].left = _.current[i - 1].left + E + 2;
          }
          _.current[i].top = 0;
        } else {
          _.current[i].left = _.current[o].left;
          _.current[i].top = s + 2;
        }
        let {
          default_image: u
        } = n[i];
        let {
          width: c,
          height: d
        } = u || {};
        let p = d === 0 ? 580 : d ?? 580;
        let h = c === 0 ? 580 : c ?? 580;
        _.current[i].height = E / h * p;
        e[i] = {
          transform: `translate(${localeDirectionCheck.isRtlLanguage() ? "-" : ""}${_.current[i].left}px,${_.current[i].top}px)`,
          width: `${E}px`,
          height: _.current[i].height
        };
        x.current = Math.max(Math.ceil(_.current[i].height + _.current[i].top), x.current);
      }
      return [...e];
    }, [E, S, n]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: g,
      className: f["scroll-image-wrapper"],
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: f["scroll-image"],
        style: {
          height: `${x.current}px`
        },
        "data-testid": "waterfall-image-list",
        children: n.map((e, t) => {
          return reactJsxRuntimeCoreReexport.jsx("div", {
            children: e.isOperations ? reactJsxRuntimeCoreReexport.jsx(b, {
              item: e,
              style: C[t],
              language: m
            }) : reactJsxRuntimeCoreReexport.jsx(y, {
              useTemplatePrompt: o,
              useTemplateImage: s,
              src: e.default_image?.url,
              style: C[t],
              unitWidth: E,
              index: t,
              imageData: e,
              enterTemplate: u,
              showTemplate: c,
              t: p,
              categoryName: h
            })
          }, t);
        })
      })
    });
  };
  require.d(exports, {
    ImageSkillGuidancePage: function () {
      return S;
    }
  });
}