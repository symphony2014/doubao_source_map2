// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'RequirementClarify'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19365.bed2e0e3.js
         * chunkId: 19365
         * moduleId: 862724
         */
module.exports = function (module, exports, require) {
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var collectionArrayGrouper = require("collection-array-grouper") /*id: 177883*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var threadLayer2Constants = require("thread-layer2-constants") /*id: 768761*/;
  var deferredPromiseFactory = require("deferred-promise-factory") /*id: 783660*/;
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  (r = {})[r.RequirementType_Outline = 0] = "RequirementType_Outline";
  r[r.RequirementType_Single_Selection = 1] = "RequirementType_Single_Selection";
  let g = r;
  let y = e => {
    if ((e == null ? undefined : e.status) === skillMessageLifecycleTypes.taskStatus.FINISH) {
      let t = deepCloneWrapper_1.deepClone(e);
      t.requirements ||= [];
      t.requirements.forEach(e => {
        if (e.type === undefined) {
          e.type = g.RequirementType_Outline;
        }
      });
      return t;
    }
    return e;
  };
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var immerProduceCore = require("immer-produce-core") /*id: 949322*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var C = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiTextareaComponent = require("semi-textarea-component") /*id: 252810*/;
  var sparkleIcon = require("sparkle-icon") /*id: 152694*/;
  var threadL2Icon = require("thread-l2-icon") /*id: 173285*/;
  var easingFunctionResolver = require("easing-function-resolver") /*id: 898748*/;
  var useLazyRefHook = require("use-lazy-ref-hook") /*id: 693163*/;
  var reactEnvironmentEffect = require("react-environment-effect") /*id: 65058*/;
  var stubFunctions = require("stub-functions") /*id: 319573*/;
  var applyVariantValuesToMotion = require("apply-variant-values-to-motion") /*id: 331813*/;
  var nodeAnimationCore = require("node-animation-core") /*id: 527160*/;
  function T(e, t) {
    [...t].reverse().forEach(n => {
      let r = e.getVariant(n);
      if (r) {
        applyVariantValuesToMotion.applyVariantValues(e, r);
      }
      if (e.variantChildren) {
        e.variantChildren.forEach(e => {
          T(e, t);
        });
      }
    });
  }
  function M() {
    let e = false;
    let t = new Set();
    let n = {
      subscribe: e => {
        t.add(e);
        return () => void t.delete(e);
      },
      start(n, r) {
        stubFunctions.noopFunc(e, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
        let i = [];
        t.forEach(e => {
          i.push(nodeAnimationCore.animateNode(e, n, {
            transitionOverride: r
          }));
        });
        return Promise.all(i);
      },
      set: n => {
        stubFunctions.noopFunc(e, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
        return t.forEach(e => {
          if (Array.isArray(n)) {
            T(e, n);
          } else if (typeof n == "string") {
            T(e, [n]);
          } else {
            applyVariantValuesToMotion.applyVariantValues(e, n);
          }
        });
      },
      stop() {
        t.forEach(e => {
          (function (e) {
            e.values.forEach(e => e.stop());
          })(e);
        });
      },
      mount: () => {
        e = true;
        return () => {
          e = false;
          n.stop();
        };
      }
    };
    return n;
  }
  let N = function () {
    let e = useLazyRefHook.useLazyRef(M);
    reactEnvironmentEffect.useEnvEffect(e.mount, []);
    return e;
  };
  var motionComponentFactory_1_1 = require("motion-component-factory_1_1") /*id: 516730*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let $ = {
    hidden: {
      opacity: 0,
      y: 8,
      scale: 0.95,
      height: 0
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };
  let I = function (e = 0, {
    skip: t = 0
  } = {}) {
    return (n, r) => Math.max(0, function (e = 0.1, {
      startDelay: t = 0,
      from: n = 0,
      ease: r
    } = {}) {
      return (i, a) => {
        let o = e * Math.abs((typeof n == "number" ? n : function (e, t) {
          if (e === "first") {
            return 0;
          }
          {
            let n = t - 1;
            if (e === "last") {
              return n;
            } else {
              return n / 2;
            }
          }
        }(n, a)) - i);
        if (r) {
          let t = a * e;
          o = easingFunctionResolver.resolveEasing(r)(o / t) * t;
        }
        return t + o;
      };
    }(e)(n, r) - t * e);
  };
  let L = e => {
    let {
      className: t,
      count: n = 0,
      renderItem: r,
      itemWrapperClassName: a,
      itemWrapperStyle: o,
      animation: s = true
    } = e;
    let l = N();
    let [c, u] = reactCoreLibraryReexport.useState(false);
    let [d, p] = reactCoreLibraryReexport.useState(0);
    let h = reactCoreLibraryReexport.useMemo(() => ({
      hidden: {
        opacity: 1
      },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: I(0.25, {
            skip: d
          })
        }
      }
    }), [d]);
    reactCoreLibraryReexport.useEffect(() => {
      (async function () {
        if (!c) {
          p(n);
          if (n > d) {
            u(true);
            await l.start("visible");
            u(false);
          }
        }
      })();
    }, [l, n, c, d]);
    return reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1_1.createMotionComponent.div, {
      className: t,
      variants: h,
      initial: s ? "hidden" : "visible",
      animate: l,
      onAnimationComplete: () => u(false),
      children: Array.from({
        length: n
      }).map((e, t) => reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1_1.createMotionComponent.div, {
        variants: $,
        className: a,
        style: {
          overflow: "hidden",
          ...o
        },
        children: r == null ? undefined : r({
          index: t
        })
      }, t))
    });
  };
  var canvasToggleButtonComponent = require("canvas-toggle-button-component") /*id: 756694*/;
  var skeletonComponent = require("skeleton-component") /*id: 619442*/;
  var D = {
    "requirement-card": "requirement-card-FCiEru",
    "requirement-card-header-title": "requirement-card-header-title-Hgq1HR",
    "requirement-card-header": "requirement-card-header-BBqbAi",
    "requirement-card-header-right": "requirement-card-header-right-L8kp6q"
  };
  let B = e => {
    let {
      children: t,
      title: n,
      actions: r,
      hoverable: i,
      enableFocusWithin: a,
      loading: o = false
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: C(D["requirement-card"], {
        hoverable: i,
        "enable-focus-within": a,
        loading: o
      }),
      "data-testid": "requirement-clarify-card",
      children: [n || r ? reactJsxRuntimeCoreReexport.jsxs("div", {
        className: D["requirement-card-header"],
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: D["requirement-card-header-title"],
          children: reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton, {
            style: {
              padding: "4px 0px",
              width: 80,
              maxWidth: "25%"
            },
            placeholder: reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Paragraph, {
              rows: 1
            }),
            loading: o,
            active: true,
            children: n
          })
        }), r ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: D["requirement-card-header-right"],
          children: reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton, {
            placeholder: reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Button, {}),
            loading: o,
            active: true,
            children: r
          })
        }) : null]
      }) : null, reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton, {
        style: {
          width: "max(300px, 60%)",
          maxWidth: "100%"
        },
        placeholder: reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Paragraph, {
          rows: 2
        }),
        loading: o,
        active: true,
        children: t
      })]
    });
  };
  var W = {
    "clarify-block-container": "clarify-block-container-Rp5EOf",
    clarifyBlockContainer: "clarify-block-container-Rp5EOf",
    "outline-editor": "outline-editor-Xfn7Ys",
    outlineEditor: "outline-editor-Xfn7Ys",
    "template-grid": "template-grid-s2foly",
    templateGrid: "template-grid-s2foly",
    "template-card": "template-card-gyhkx2",
    templateCard: "template-card-gyhkx2",
    "image-container": "image-container-tMzJm5",
    imageContainer: "image-container-tMzJm5",
    "template-image": "template-image-ohIgOz",
    templateImage: "template-image-ohIgOz",
    "hover-overlay": "hover-overlay-d75AKb",
    hoverOverlay: "hover-overlay-d75AKb",
    "card-title-wrapper": "card-title-wrapper-LuUigZ",
    cardTitleWrapper: "card-title-wrapper-LuUigZ"
  };
  let V = e => {
    let {
      requirement: t,
      onEditContent: n,
      readonly: r
    } = e;
    let i = (e, t) => {
      if (n != null) {
        n(e, t);
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(B, {
      title: t.title,
      hoverable: !r,
      enableFocusWithin: !r,
      children: t.editable ? reactJsxRuntimeCoreReexport.jsx(semiTextareaComponent.TextArea, {
        className: W["outline-editor"],
        value: t.content,
        onChange: e => i(t.key, e),
        autosize: {
          minRows: 1
        },
        disabled: r
      }) : reactJsxRuntimeCoreReexport.jsx("div", {
        children: t.content
      })
    });
  };
  let U = e => {
    let {
      requirement: t,
      onChangeSelection: n,
      onEditContent: r,
      readonly: a,
      trackEventProps: o
    } = e;
    let s = i18nTranslationUtils.useTranslationWithFallback();
    let l = reactCoreLibraryReexport.useMemo(() => t.requirement_items.find(e => e.key === t.selected_requirement_key), [t]);
    let u = reactCoreLibraryReexport.useMemo(() => t.requirement_items.find(e => e.editable), [t]);
    let d = reactCoreLibraryReexport.useMemo(() => !!(l == null ? undefined : l.editable), [l]);
    let [p, h] = reactCoreLibraryReexport.useState(d ? "custom" : "template");
    let f = t.requirement_items.find(e => e.editable);
    let m = t.requirement_items.filter(e => !e.editable);
    let g = reactCoreLibraryReexport.useCallback(e => () => {
      if (!a) {
        h(e);
        if (e === "custom" && (u == null ? undefined : u.key)) {
          if (n != null) {
            n(u == null ? undefined : u.key);
          }
          teaAnalyticsEventTracker.trackEvent("click_card", {
            card_type: "code_agent_requirement_clarification",
            button_name: "to_free_design",
            ...o
          });
        }
      }
    }, [n, u == null ? undefined : u.key, o]);
    let y = e => {
      if (n != null) {
        n(e);
      }
      teaAnalyticsEventTracker.trackEvent("click_card", {
        card_type: "code_agent_requirement_clarification",
        button_name: `to_template_${e}`,
        ...o
      });
    };
    return reactJsxRuntimeCoreReexport.jsx(B, {
      title: t.single_selection_title,
      actions: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(canvasToggleButtonComponent.CanvasToggleButton, {
          type: "outline",
          size: "small",
          icon: reactJsxRuntimeCoreReexport.jsx(sparkleIcon.SparkleIcon, {}),
          active: p === "custom",
          onActiveChange: g("custom"),
          children: s("coding_website_build_design_prompt")
        }), reactJsxRuntimeCoreReexport.jsx(canvasToggleButtonComponent.CanvasToggleButton, {
          type: "outline",
          size: "small",
          icon: reactJsxRuntimeCoreReexport.jsx(threadL2Icon.ThreadL2Icon, {}),
          active: p === "template",
          onActiveChange: g("template"),
          children: s("coding_website_build_design_template")
        })]
      }),
      hoverable: !a,
      enableFocusWithin: !a,
      children: p === "template" ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: W["template-grid"],
        children: m.map(e => reactJsxRuntimeCoreReexport.jsxs("div", {
          className: C(W["template-card"], {
            selected: t.selected_requirement_key === e.key
          }),
          onClick: () => y(e.key),
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: W["image-container"],
            tabIndex: 0,
            children: [e.template_image_url ? reactJsxRuntimeCoreReexport.jsx("img", {
              src: xssContentSanitizer.sanitizeUrl(e.template_image_url, null, {
                logType: "js.href/src",
                reportOnly: "false",
                blackConfig: "{}",
                configMode: "merge",
                isCloseSSRReport: false,
                bid: "flow_web",
                region: "cn",
                urlLimit: "-1",
                htmlLimit: "-1",
                isSaveValidUrl: false,
                isRuntimeLog: false,
                isDOMParser: true,
                escapeRule: "escape-report",
                reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                scmVersion: "1.0.4.168",
                webpackPluginVersion: "3.4.5",
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$h$0ZZ-jNSWk1qbDBZM*M1ZFZwWE5%Qmpl$*w1$2xoR01XRllTbXhp$jFaM$pFTXhhb%pI%m5saF-xbzF%RmRL-zJJe$RuSk1NMHBzWTFo$2NHTnRWblJh$np$d1R*ZE9jMWxZ%25C-WJtdDBX$zE0Z*xreWMz$mtTRTQw$1ZoS2Jt%ll%$DA9"
              }),
              alt: e.title,
              className: W["template-image"]
            }) : null, reactJsxRuntimeCoreReexport.jsx("div", {
              className: W["hover-overlay"]
            })]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: C(W["card-title-wrapper"], t.selected_requirement_key === e.key ? W["selected-text"] : W["default-text"]),
            children: e.title
          })]
        }, e.key))
      }) : reactJsxRuntimeCoreReexport.jsx(semiTextareaComponent.TextArea, {
        className: W["outline-editor"],
        value: (f == null ? undefined : f.content) || "",
        onChange: e => {
          if (f) {
            if (r != null) {
              r(f.key, e);
            }
          }
        },
        placeholder: "请输入您的创作内容...",
        autosize: {
          minRows: 1
        },
        disabled: a
      })
    });
  };
  let X = e => {
    let {
      requirement: t,
      onEditContent: n,
      onChangeSelection: r,
      readonly: i,
      trackEventProps: a
    } = e;
    if (t.type === g.RequirementType_Outline) {
      let e = t.requirement_items.find(e => e.editable);
      if (e) {
        return reactJsxRuntimeCoreReexport.jsx(V, {
          requirement: e,
          onEditContent: n,
          readonly: i
        });
      } else {
        return null;
      }
    }
    if (t.type === g.RequirementType_Single_Selection) {
      return reactJsxRuntimeCoreReexport.jsx(U, {
        requirement: t,
        onChangeSelection: r,
        onEditContent: n,
        readonly: i,
        trackEventProps: a
      });
    } else {
      return null;
    }
  };
  let H = e => {
    let {
      block: t,
      onBlockChange: n,
      loading: r = false,
      readonly: a,
      trackEventProps: o
    } = e;
    let s = reactCoreLibraryReexport.useRef(r);
    let l = reactCoreLibraryReexport.useCallback((e, r) => {
      n(immerProduceCore.produce(t, t => {
        for (let n of t.requirements) {
          let t = n.requirement_items.find(t => t.key === e);
          if (t) {
            t.content = r;
            break;
          }
        }
      }));
    }, [t, n]);
    let c = reactCoreLibraryReexport.useCallback(e => {
      n(immerProduceCore.produce(t, t => {
        for (let n of t.requirements) {
          if (n.type === g.RequirementType_Single_Selection && n.requirement_items.some(t => t.key === e)) {
            n.selected_requirement_key = e;
            break;
          }
        }
      }));
    }, [t, n]);
    let u = reactCoreLibraryReexport.useCallback(e => {
      let {
        index: n
      } = e;
      if (r) {
        return reactJsxRuntimeCoreReexport.jsx(B, {
          title: "title",
          loading: true
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx(X, {
          requirement: t.requirements[n],
          onEditContent: l,
          onChangeSelection: c,
          readonly: a,
          trackEventProps: o
        });
      }
    }, [t.requirements, l, r, c, a, o]);
    return reactJsxRuntimeCoreReexport.jsx(L, {
      className: W["clarify-block-container"],
      count: r ? 1 : t.requirements.length,
      renderItem: u,
      animation: s.current
    });
  };
  let K = e => {
    let {
      message: t,
      contentBlock: n,
      readonly: r
    } = e;
    let {
      id: m
    } = n;
    let v = reactCoreLibraryReexport.useRef(deferredPromiseFactory.createDeferredPromise());
    let b = codingSkillStoreModule.codingSkillStore(e => e.blockIdMapForClarify);
    let _ = codingSkillStoreModule.codingSkillStore(e => e.updateClarifyDebounceSaveInvokeMap);
    let C = reactCoreLibraryReexport.useMemo(() => {
      let e = b[m];
      let t = n.content_obj;
      return y(e ?? t);
    }, [b, m, n.content_obj]);
    let x = reactCoreLibraryReexport.useMemo(() => (C == null ? undefined : C.status) === skillMessageLifecycleTypes.taskStatus.PROCESSING, [C]);
    let {
      run: w,
      flush: O
    } = useDebouncedCallbackHook_1.useDebouncedCallback(e => {
      if (t.message_id && (C == null ? undefined : C.resource_key)) {
        var n;
        let r = collectionArrayGrouper.groupValuesToArray(e.requirements, "type");
        let i = (n = r[g.RequirementType_Outline]) === null || n === undefined ? undefined : n.flatMap(e => e.requirement_items);
        let o = [];
        r[g.RequirementType_Single_Selection].map(e => {
          if (e.selected_requirement_key) {
            o.push({
              key: e.key,
              selected_requirement_key: e.selected_requirement_key
            });
          }
          let t = e.requirement_items.find(e => e.editable);
          if (t) {
            i.push(t);
          }
        });
        apiServicesCollection.SamanthaApiService.UpdateCodeRequirement({
          message_id: t.message_id,
          resource_key: e.resource_key,
          requirements: i,
          single_selection_requirements: o
        }).then(() => {
          v.current.resolve(undefined);
        }).catch(e => {
          v.current.reject();
          if (e.errorOption.response.code === threadLayer2Constants.threadId5) {
            samanthaToastFactory.toastInstance.error("保存失败，需求大纲中包含敏感词");
          } else {
            throw e;
          }
        }).finally(() => {
          _(m);
        });
      }
    }, {
      wait: 3000
    });
    let E = reactCoreLibraryReexport.useMemo(() => {
      return (C == null ? undefined : C.status) === skillMessageLifecycleTypes.taskStatus.PROCESSING || !!C.requirements?.length;
    }, [C]);
    let j = reactCoreLibraryReexport.useMemo(() => {
      return {
        bot_id: t.bot_id,
        skill_id: t.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(t.skill?.skill_type_no_default),
        conversation_id: t.conversation_id,
        section_id: t.section_id,
        message_id: t.message_id
      };
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (E) {
        teaAnalyticsEventTracker.trackEvent("show_card", {
          card_type: "code_agent_requirement_clarification",
          status: "unfold",
          ...j
        });
      }
    }, [E]);
    if (E) {
      return reactJsxRuntimeCoreReexport.jsx(H, {
        block: C,
        onBlockChange: e => {
          if (r) {
            return;
          }
          codingSkillStoreModule.codingSkillStore.setState({
            blockIdMapForClarify: {
              [m]: e
            }
          });
          w(e);
          v.current.promise.catch(() => {});
          let t = deferredPromiseFactory.createDeferredPromise();
          v.current.resolve(undefined);
          v.current = t;
          _(m, {
            promise: t.promise,
            flush: O
          });
        },
        loading: x,
        readonly: r,
        trackEventProps: j
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    RequirementClarify: function () {
      return K;
    }
  });
}