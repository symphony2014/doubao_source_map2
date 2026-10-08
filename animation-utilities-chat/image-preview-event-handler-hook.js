// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L5' to 'useImagePreviewEvents'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 810587
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var fileSaverUtility = require("file-saver-utility") /*id: 888334*/;
  var l = fileSaverUtility;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var imagePreviewGroup = require("image-preview-group") /*id: 428656*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var semiDividerComponent = require("semi-divider-component") /*id: 384623*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var y = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 22,
    height: 22,
    fill: "none",
    viewBox: "0 0 22 22",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#fff",
      d: "M3.289 9.878q0-1.311.49-2.457a6.2 6.2 0 0 1 1.36-2.017 6.4 6.4 0 0 1 2.018-1.362 6.1 6.1 0 0 1 2.457-.498q1.32 0 2.465.498 1.146.49 2.017 1.362a6.2 6.2 0 0 1 1.361 2.017q.49 1.146.49 2.457 0 1.046-.323 2a6.1 6.1 0 0 1-.914 1.727l3.71 3.719q.142.158.217.348.075.192.074.39 0 .307-.132.54a.95.95 0 0 1-.366.374 1 1 0 0 1-.53.14 1.2 1.2 0 0 1-.408-.074.9.9 0 0 1-.348-.216l-3.736-3.744a6.4 6.4 0 0 1-1.668.83q-.905.3-1.91.3a6.2 6.2 0 0 1-2.456-.49A6.4 6.4 0 0 1 5.14 14.36a6.4 6.4 0 0 1-1.362-2.017 6.2 6.2 0 0 1-.49-2.465m1.51 0q0 .996.374 1.876A4.9 4.9 0 0 0 6.21 13.29q.665.656 1.536 1.029a4.7 4.7 0 0 0 1.868.373 4.7 4.7 0 0 0 1.867-.373 4.8 4.8 0 0 0 1.536-1.03 4.75 4.75 0 0 0 1.411-3.412q0-.995-.373-1.867a4.7 4.7 0 0 0-1.038-1.535 4.7 4.7 0 0 0-1.536-1.038 4.7 4.7 0 0 0-1.867-.374 4.7 4.7 0 0 0-1.868.374A4.9 4.9 0 0 0 6.21 6.475q-.663.656-1.037 1.535a4.7 4.7 0 0 0-.374 1.868m2.798.598a.595.595 0 0 1-.424-1.013.58.58 0 0 1 .424-.183h4.042q.249 0 .424.183a.595.595 0 0 1-.423 1.013z"
    })
  }), {}));
  var S = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 22,
    height: 22,
    fill: "none",
    viewBox: "0 0 22 22",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#fff",
      d: "M3.289 9.878q0-1.311.49-2.457a6.2 6.2 0 0 1 1.36-2.017 6.4 6.4 0 0 1 2.018-1.362 6.1 6.1 0 0 1 2.457-.498q1.32 0 2.465.498 1.146.49 2.017 1.362a6.2 6.2 0 0 1 1.361 2.017q.49 1.146.49 2.457 0 1.046-.323 2a6.1 6.1 0 0 1-.914 1.727l3.71 3.719q.142.158.217.348.075.192.074.39 0 .307-.132.54a.95.95 0 0 1-.366.374 1 1 0 0 1-.53.14 1.2 1.2 0 0 1-.408-.074.9.9 0 0 1-.348-.216l-3.736-3.744a6.4 6.4 0 0 1-1.668.83q-.905.3-1.91.3a6.2 6.2 0 0 1-2.456-.49A6.4 6.4 0 0 1 5.14 14.36a6.4 6.4 0 0 1-1.362-2.017 6.2 6.2 0 0 1-.49-2.465m1.51 0q0 .996.374 1.876A4.9 4.9 0 0 0 6.21 13.29q.665.656 1.536 1.029a4.7 4.7 0 0 0 1.868.373 4.7 4.7 0 0 0 1.867-.373 4.8 4.8 0 0 0 1.536-1.03 4.75 4.75 0 0 0 1.411-3.412q0-.995-.373-1.867a4.7 4.7 0 0 0-1.038-1.535 4.7 4.7 0 0 0-1.536-1.038 4.7 4.7 0 0 0-1.867-.374 4.7 4.7 0 0 0-1.868.374A4.9 4.9 0 0 0 6.21 6.475q-.663.656-1.037 1.535a4.7 4.7 0 0 0-.374 1.868m2.2 0q0-.249.174-.423a.58.58 0 0 1 .424-.175h1.42V7.86q0-.248.173-.423a.57.57 0 0 1 .432-.182q.249 0 .415.183a.58.58 0 0 1 .174.423v1.42h1.428q.249 0 .424.174a.58.58 0 0 1 .174.423.58.58 0 0 1-.175.423.58.58 0 0 1-.423.175h-1.428v1.427a.58.58 0 0 1-.174.424.56.56 0 0 1-.415.166.6.6 0 0 1-.432-.166.58.58 0 0 1-.174-.424v-1.427h-1.42a.58.58 0 0 1-.423-.175A.58.58 0 0 1 7 9.878"
    })
  }), {}));
  var b = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 22,
    height: 22,
    fill: "none",
    viewBox: "0 0 22 22",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#fff",
      d: "M10.992 4.35q.348 0 .564.224.224.216.224.572v7.596l-.074 1.66 2.224-2.424 1.685-1.66a.8.8 0 0 1 .25-.166.8.8 0 0 1 .315-.067q.33 0 .54.225a.74.74 0 0 1 .215.547.7.7 0 0 1-.066.3 1 1 0 0 1-.191.281l-5.097 5.08a.8.8 0 0 1-.274.191.77.77 0 0 1-.63 0 .9.9 0 0 1-.275-.19l-5.096-5.08a1.2 1.2 0 0 1-.191-.283.7.7 0 0 1-.067-.299q0-.33.216-.547a.73.73 0 0 1 .548-.225q.158 0 .307.067.15.058.257.166l1.686 1.66 2.216 2.432-.075-1.668V5.146q0-.356.224-.572a.77.77 0 0 1 .565-.224M5.746 16.76H16.23q.331 0 .547.223a.74.74 0 0 1 .216.548.78.78 0 0 1-.216.565.73.73 0 0 1-.547.224H5.746a.72.72 0 0 1-.54-.224.78.78 0 0 1-.216-.565q0-.332.216-.548a.72.72 0 0 1 .54-.224"
    })
  }), {}));
  var E = {
    "icon-wrapper": "icon-wrapper-Do9ktU",
    iconWrapper: "icon-wrapper-Do9ktU",
    "button-icon": "button-icon-Knx0dc",
    buttonIcon: "button-icon-Knx0dc",
    "zoom-wrapper": "zoom-wrapper-FP683L",
    zoomWrapper: "zoom-wrapper-FP683L",
    divider: "divider-zOMhyI"
  };
  let w = e => t => !!t && [t.image_thumb, t.image_thumb_ori, t.image_thumb_raw, t.image_ori, t.image_raw, t.image_ori_raw, t.preview_img, t.image_preview].some(t => (t == null ? undefined : t.url) === e);
  let T = e => {
    let {
      image_preview: t,
      preview_img: n
    } = e || {};
    if (t == null ? undefined : t.url) {
      return t;
    } else {
      return n;
    }
  };
  let k = e => {
    let {
      onZoomOut: t,
      onZoomIn: n,
      onDownload: i,
      disableDownload: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: E["zoom-wrapper"],
      children: [reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
        className: E["button-icon"],
        icon: reactJsxRuntimeCoreReexport.jsx(y, {
          className: E["icon-wrapper"]
        }),
        type: "tertiary",
        onClick: () => {
          if (t != null) {
            t();
          }
        }
      }), reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
        className: E["button-icon"],
        icon: reactJsxRuntimeCoreReexport.jsx(S, {
          className: E["icon-wrapper"]
        }),
        type: "tertiary",
        onClick: () => {
          if (n != null) {
            n();
          }
        }
      }), !!i && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(semiDividerComponent.Divider, {
          layout: "vertical",
          className: E.divider
        }), reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
          className: E["button-icon"],
          icon: reactJsxRuntimeCoreReexport.jsx(b, {
            className: E["icon-wrapper"]
          }),
          type: "tertiary",
          onClick: i,
          disabled: r
        })]
      })]
    });
  };
  let O = e => {
    var t;
    var n;
    let i = e.split("?")[0];
    let r = i.substring(i.lastIndexOf(".") + 1);
    if (e.startsWith("blob")) {
      if ((t = l.saveAs) !== null && t !== undefined) {
        t.call(l, e, `${new Date().getTime()}.png`);
      }
    } else if ((n = l.saveAs) !== null && n !== undefined) {
      n.call(l, e, `${new Date().getTime()}.${r}`);
    }
  };
  let M = function (e, t, n) {
    let {
      conversationId: o,
      messageId: l,
      botId: m,
      chatType: g,
      conversationType: _,
      skillId: y
    } = e;
    let S = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let {
      reportImageShow: b = true,
      onDownload: M
    } = S;
    let [I, N] = reactCoreLibraryReexport.useState([]);
    let [C, A] = reactCoreLibraryReexport.useState();
    let x = reactCoreLibraryReexport.useRef(null);
    let L = reactCoreLibraryReexport.useRef(0);
    let P = reactCoreLibraryReexport.useMemo(() => I.map(e => {
      let s = t == null ? undefined : t.find(w(e));
      return T(s)?.url || (s == null ? undefined : s.image_thumb?.url) || (s == null ? undefined : s.image_ori?.url) || e;
    }), [I, t]);
    let {
      run: D
    } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
      if (!isEmptyUtil.isEmpty(t)) {
        teaAnalyticsEventTracker.trackEvent("pinch", {
          pic_id: t[Number(C)]?.key,
          bot_id: m,
          enter_picture_method: n === chatCoreConstants.MessageActions.NotMessage ? "template_detail" : "chat",
          message_id: l,
          conversation_id: o,
          request_id: t[L.current]?.request_id
        });
      }
    }, {
      trailing: true,
      leading: false,
      wait: 1000
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (isNumberUtil.isNumber(C)) {
        x.current = Date.now();
      }
    }, [isNumberUtil.isNumber(C)]);
    let R = reactCoreLibraryReexport.useCallback(e => {
      if (!e) {
        if (!isEmptyUtil.isEmpty(t)) {
          teaAnalyticsEventTracker.trackEvent("leave_picture_detail", {
            pic_id: String(t[Number(C)]?.key),
            bot_id: m,
            message_id: l,
            conversation_id: o,
            request_id: t[L.current]?.request_id,
            duration: x.current ? Date.now() - x.current : undefined
          });
        }
        A(undefined);
      }
    }, [A, C]);
    let $ = e => {
      if (e.code === "ArrowLeft" && Number(C) - 1 >= 0 && I[Number(C) - 1]) {
        A(Number(C) - 1);
        j("left", Number(C) - 1);
      }
      if (e.code === "ArrowRight" && Number(C) + 1 < I.length && I[Number(C) + 1]) {
        A(Number(C) + 1);
        j("right", Number(C) + 1);
      }
    };
    let j = (e, i) => {
      if (!isEmptyUtil.isEmpty(t)) {
        teaAnalyticsEventTracker.trackEvent("slide", {
          status: e,
          pic_id: t[i].key,
          bot_id: m,
          enter_picture_method: n === chatCoreConstants.MessageActions.NotMessage ? "template_detail" : "chat",
          message_id: l,
          request_id: t[i]?.request_id,
          conversation_id: o
        });
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      window.addEventListener("keydown", $);
      return () => {
        window.removeEventListener("keydown", $);
      };
    }, [C, I]);
    let Z = reactCoreLibraryReexport.useCallback(e => {
      var r;
      var a;
      let {
        disableDownload: c,
        onZoomIn: d,
        onZoomOut: h
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(k, {
        onZoomIn: d,
        onZoomOut: h,
        onDownload: (a = ((r = t[Number(C)]) === null || r === undefined ? undefined : r.image_ori?.url) || I[Number(C)], c ? () => undefined : () => {
          if (!isEmptyUtil.isEmpty(t)) {
            teaAnalyticsEventTracker.trackEvent("picture_download", {
              pic_id: String(t[Number(C)]?.key),
              bot_id: m,
              click_method: "detail_click",
              enter_picture_method: n === chatCoreConstants.MessageActions.NotMessage ? "template_detail" : "chat",
              message_id: l,
              conversation_id: o,
              enter_from: I[L.current],
              request_id: t[L.current]?.request_id
            });
          }
          teaAnalyticsEventTracker.trackEvent("download", {
            conversation_id: o,
            bot_id: m,
            skill_id: y,
            message_id: l,
            content_type: "image",
            click_form: "image_full_screen"
          });
          O(a);
          if (M != null) {
            M();
          }
        }),
        disableDownload: c
      });
    }, [C, I]);
    return {
      imageEventCallbacks: {
        onImageRender: e => {
          var r;
          var h;
          var S;
          if (n === chatCoreConstants.MessageActions.NotMessage) {
            return;
          }
          let E = t == null ? undefined : t.findIndex(w(e));
          let T = ((r = t[E]) === null || r === undefined ? undefined : r.image_thumb?.url) || ((h = t[E]) === null || h === undefined ? undefined : h.image_ori?.url) || e;
          if (!isEmptyUtil.isEmpty(t) && b) {
            teaAnalyticsEventTracker.trackEvent("picture_message_show", {
              bot_id: m,
              pic_id: t[E]?.key,
              conversation_id: o,
              message_id: l,
              request_id: t[E]?.request_id,
              original_content_source: n,
              chatType: (((S = chatStoreManager.getStoreState("chatViewCoreStore")) === null || S === undefined ? undefined : S.currentChatViewConfig?.chatType) === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : g) || "other_default",
              conversation_type: _
            }, {
              key: `${l}`
            });
          }
          N(e => e.length < 4 ? [...e, T] : e);
        },
        onImageClick: (e, i) => {
          var a;
          var p;
          var T;
          let k = t == null ? undefined : t.findIndex(w(i));
          let O = ((a = t[k]) === null || a === undefined ? undefined : a.image_thumb?.url) || ((p = t[k]) === null || p === undefined ? undefined : p.image_ori?.url) || i;
          L.current = k;
          teaAnalyticsEventTracker.trackEvent("enter_picture_detail", {
            pic_position: String(k + 1),
            pic_id: String(t[k]?.key),
            bot_id: m,
            message_id: l,
            enter_from: n === chatCoreConstants.MessageActions.NotMessage ? "template_detail" : "chat",
            conversation_id: o,
            request_id: t[k]?.request_id
          });
          if (n === chatCoreConstants.MessageActions.NotMessage) {
            A(k);
            N(t == null ? undefined : t.map(e => {
              return e.image_thumb?.url || e.image_ori?.url || "";
            }));
          } else {
            N(e => e.includes(O) ? (A(e.indexOf(O)), e) : (A(e.length), [...e, O]));
            if (!isEmptyUtil.isEmpty(t)) {
              teaAnalyticsEventTracker.trackEvent("picture_message_click", {
                pic_position: String(k + 1),
                pic_id: t[k]?.key,
                bot_id: m,
                message_id: l,
                conversation_id: o,
                request_id: t[k]?.request_id,
                is_onboarding: 0,
                chatType: (((T = chatStoreManager.getStoreState("chatViewCoreStore")) === null || T === undefined ? undefined : T.currentChatViewConfig?.chatType) === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : g) || "other_default",
                conversation_type: _
              });
            }
          }
          e.stopPropagation();
          e.preventDefault();
        }
      },
      renderImagePreview: () => I.length && isNumberUtil.isNumber(C) ? reactJsxRuntimeCoreReexport.jsx(imagePreviewGroup.ImagePreviewGroup, {
        onZoomIn: D,
        onZoomOut: D,
        zoomStep: 0.2,
        className: E["chat-image-preview"],
        previewCls: "flow-image-preview",
        renderPreviewMenu: Z,
        src: xssContentSanitizer.sanitizeUrl(P, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTWs1dldWaFJkRmx0%m5w-$$6bHpZ$mRKZEZreWFHa*tRekZxWWpJe*RHSXlOSFpqTTBwc$RESk9kb%pZ%W5aaWJWWjFaR%01-0dKWFJtNWF$ek-zWTIx$01tRlhWak5NTW14M$drZFdORXh1$W5wbFIwWj$Xak5XZWc9PQ"
        }),
        visible: isNumberUtil.isNumber(C),
        onVisibleChange: R,
        currentIndex: C,
        onChange: A,
        onPrev: e => j("left", e),
        onNext: e => j("right", e)
      }) : null
    };
  };
  require.d(exports, {
    useImagePreviewEvents: function () {
      return M;
    }
  });
}