// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 's' to 'arrayFirstElement'
// - Resolved require(255519) to 'array-first-element'
// - Renamed variable 'r' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'a' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'c' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'f' to 'fileTypeCheckers'
// - Resolved require(412342) to 'file-type-checkers'
// - Renamed variable 'd' to 'chatInputRefUtils'
// - Resolved require(859718) to 'chat-input-ref-utils'
// - Renamed variable 'u' to 'chatInputRefContentUi'
// - Resolved require(917632) to 'chat-input-ref-content-ui'
// - Renamed variable '_' to 'codeAssistantFileValidator'
// - Resolved require(771278) to 'code-assistant-file-validator'
// - Renamed variable 'x' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'm' to 'tooltipComponentExports'
// - Resolved require(341865) to 'tooltip-component-exports'
// - Renamed variable 'p' to 'buttonComponentExport'
// - Resolved require(576887) to 'button-component-export'
// - Renamed variable 'v' to 'closeIconComponent_1_1'
// - Resolved require(259726) to 'close-icon-component_1_1'
// - Renamed variable 'j' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'g' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'N' to 'lazyFileIconLoader'
// - Resolved require(525556) to 'lazy-file-icon-loader'
// - Renamed variable 'w' to 'filetypeCodeIcon_1'
// - Resolved require(58470) to 'filetype-code-icon_1'
// - Renamed variable 'y' to 'rtlIconComponent_3'
// - Resolved require(651551) to 'rtl-icon-component_3'
// - Renamed variable 'k' to 'fileFolderRtlIcon'
// - Resolved require(543040) to 'file-folder-rtl-icon'
// - Updated imported property 'Z' to 'Button' (module 576887)
// - Updated imported property 'V' to 'CloseIcon' (module 259726)
// - Updated imported property 'DG' to 'isTextType' (module 412342)
// - Updated imported property 'sV' to 'isLinkType' (module 412342)
// - Updated imported property 'xR' to 'isFileType' (module 412342)
// - Updated imported property 'jQ' to 'isImageType' (module 412342)
// - Updated imported property 'Kk' to 'isDirectoryType' (module 412342)
// - Updated imported property 'aA' to 'FileIcon' (module 525556)
// - Updated imported property 'VZ' to 'getCodeFileTypes' (module 771278)
// - Updated imported property 'Z' to 'FiletypeCodeIcon' (module 58470)
// - Updated imported property 'ys' to 'getFileLinkOrName' (module 859718)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// - Updated imported property 'Z' to 'getFirstElement' (module 255519)
// - Updated imported property 'Mr' to 'ChatInputRefContent' (module 917632)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'Z' to 'RtlIcon' (module 651551)
// - Updated imported property 'Z' to 'FileFolderRtlIcon' (module 543040)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-input-ref-content-v2.0fe48c67.js
         * chunkId: 93226
         * moduleId: 78565
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var fileTypeCheckers = require("file-type-checkers") /*id: 412342*/;
  var chatInputRefUtils = require("chat-input-ref-utils") /*id: 859718*/;
  var chatInputRefContentUi = require("chat-input-ref-content-ui") /*id: 917632*/;
  var codeAssistantFileValidator = require("code-assistant-file-validator") /*id: 771278*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var closeIconComponent_1_1 = require("close-icon-component_1_1") /*id: 259726*/;
  var h = {
    container: "container-V_HPP_",
    inline: "inline-eZuTmd",
    "ref-content": "ref-content-ZE46Q5",
    title: "title-SGYI0p",
    "addition-text": "addition-text-dw0L8S"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let C = e => {
    let n;
    let {
      filenames: l = [],
      fileIcon: i,
      closeBtnHoverText: s,
      quoteBtnHoverText: r,
      inline: a,
      t: c,
      className: f,
      fileIconWrapperClassName: d,
      closeIconClassName: u,
      onClickCloseBtn: _
    } = e;
    let [x, C] = reactCoreLibraryReexport.useMemo(() => l.length === 0 ? ["", ""] : l.length === 1 ? [l[0], ""] : [l[0], (c == null ? undefined : c("file_ref_all_files", {
      postProcess: "sprintf",
      sprintf: ["", `${l.length - 1}`]
    })) || `\u{548C}\u{5176}\u{4ED6} ${l.length - 1} \u{6587}\u{4EF6}`], [l]);
    if (x) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        "data-testid": "chat_input_ref_content",
        className: o(h.container, a && h.inline, f),
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          "data-testid": "ref-content",
          className: o(h["ref-content"], "!rounded-dbx-xl !bg-dbx-fill-trans-20 pl-8 pr-6 gap-4"),
          children: [(n = reactJsxRuntimeCoreReexport.jsx("div", {
            className: "mr-4 h-[14px] w-[3px] rounded-[10px] bg-dbx-line-10"
          }), r ? reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
            content: r,
            children: n
          }) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
            children: n
          })), i && reactJsxRuntimeCoreReexport.jsx("div", {
            className: o("size-18 text-18 flex items-center justify-center", d),
            children: i
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: `
            flex min-w-0 flex-1 truncate text-14 leading-22
            text-dbx-text-secondary
          `,
            children: [reactJsxRuntimeCoreReexport.jsx("span", {
              className: h.title,
              children: x
            }), C && reactJsxRuntimeCoreReexport.jsx("span", {
              className: h["addition-text"],
              children: C
            })]
          }), reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
            content: s,
            children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
              color: "grey-outline",
              "data-testid": "skill_header_close_button",
              onClick: _,
              size: "md",
              variant: "icon",
              children: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1_1.CloseIcon, {
                className: o("size-14 text-dbx-text-secondary", u)
              })
            })
          })]
        })
      });
    } else {
      return null;
    }
  };
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var lazyFileIconLoader = require("lazy-file-icon-loader") /*id: 525556*/;
  var filetypeCodeIcon_1 = require("filetype-code-icon_1") /*id: 58470*/;
  var rtlIconComponent_3 = require("rtl-icon-component_3") /*id: 651551*/;
  var fileFolderRtlIcon = require("file-folder-rtl-icon") /*id: 543040*/;
  let b = (e, n) => fileTypeCheckers.isTextType(e) ? null : fileTypeCheckers.isLinkType(e) ? reactJsxRuntimeCoreReexport.jsx(lazyFileIconLoader.FileIcon, {
    ext: n,
    link: true
  }) : fileTypeCheckers.isFileType(e) ? codeAssistantFileValidator.getCodeFileTypes(e.fileName) ? reactJsxRuntimeCoreReexport.jsx(filetypeCodeIcon_1.FiletypeCodeIcon, {}) : reactJsxRuntimeCoreReexport.jsx(lazyFileIconLoader.FileIcon, {
    ext: e ? chatInputRefUtils.getFileLinkOrName(e) : ""
  }) : undefined;
  let D = e => {
    var n;
    var l;
    var t;
    let r = (e == null ? undefined : (t = e.extra) === null || t === undefined ? undefined : (l = t.renderTitle) === null || l === undefined ? undefined : (n = l.split("/")) === null || n === undefined ? undefined : n.pop()) || (e == null ? undefined : e.text);
    let o = e == null ? undefined : e.extra?.rangeStart;
    let a = e == null ? undefined : e.extra?.rangeEnd;
    if (o && a) {
      return `${r} (${o}-${a})`;
    } else {
      return r;
    }
  };
  let R = e => {
    let {
      refContents: n,
      className: l,
      fileIconWrapperClassName: r,
      closeIconClassName: d
    } = e;
    let _ = i18nTranslationUtils.useTranslationWithFallback();
    let m = chatStoreManager.useStoreSelector("chatViewCoreStore", e => e.currentChatViewConfig, deepEqualityUtil.deepEqual);
    let p = (m == null ? undefined : m.chatId) || "";
    let v = reactCoreLibraryReexport.useMemo(() => n.filter(e => fileTypeCheckers.isFileType(e)), [n]);
    let h = reactCoreLibraryReexport.useMemo(() => n.map((e, n) => ({
      ...e,
      index: n
    })).filter(e => fileTypeCheckers.isImageType(e)), [n]);
    let N = reactCoreLibraryReexport.useMemo(() => n.map((e, n) => ({
      ...e,
      index: n
    })).filter(e => fileTypeCheckers.isTextType(e)), [n]);
    let w = reactCoreLibraryReexport.useMemo(() => n.map((e, n) => ({
      ...e,
      index: n
    })).filter(e => fileTypeCheckers.isDirectoryType(e)), [n]);
    let R = reactCoreLibraryReexport.useMemo(() => n.map((e, n) => ({
      ...e,
      index: n
    })).filter(e => fileTypeCheckers.isLinkType(e) && e.identifier), [n]);
    let S = reactCoreLibraryReexport.useMemo(() => arrayFirstElement.getFirstElement(h), [h]);
    let B = reactCoreLibraryReexport.useMemo(() => v.length + R.length + w.length, [v, N, R, w]);
    let I = reactCoreLibraryReexport.useMemo(() => o(l, N.length > 0 ? "max-w-[50%]" : null), [l, N.length]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex items-center",
      children: [v.length ? reactJsxRuntimeCoreReexport.jsx(chatInputRefContentUi.ChatInputRefContent, {
        refContents: v,
        className: I,
        fileIconWrapperClassName: r,
        closeIconClassName: d
      }) : null, h.length ? reactJsxRuntimeCoreReexport.jsx(C, {
        className: l,
        fileIconWrapperClassName: r,
        closeIconClassName: d,
        fileIcon: S ? b(S) : null,
        filenames: h.map(e => "fileName" in e && e.fileName ? e.fileName : ""),
        closeBtnHoverText: _("file_link_close"),
        onClickCloseBtn: () => {
          if (S) {
            chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
              if (e != null) {
                e.deleteRefContent(p, 0);
              }
            });
            teaAnalyticsEventTracker.trackEvent("input_bar_enter", {
              click_scene: "remove_reference"
            });
          }
        },
        t: _
      }) : null, R == null ? undefined : R.map(e => reactJsxRuntimeCoreReexport.jsx(C, {
        className: I,
        fileIconWrapperClassName: r,
        closeIconClassName: d,
        fileIcon: reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_3.RtlIcon, {}),
        filenames: ["fileName" in e && e.fileName ? e.fileName : "link" in e ? e.link : ""],
        closeBtnHoverText: _("file_link_close"),
        onClickCloseBtn: () => {
          chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
            if (e != null) {
              e.clearRefContents(p, {
                retainDisableRef: true
              });
            }
          });
          teaAnalyticsEventTracker.trackEvent("input_bar_enter", {
            click_scene: "remove_reference"
          });
        },
        t: _
      })), w == null ? undefined : w.map(e => reactJsxRuntimeCoreReexport.jsx(C, {
        className: I,
        fileIcon: reactJsxRuntimeCoreReexport.jsx(fileFolderRtlIcon.FileFolderRtlIcon, {}),
        fileIconWrapperClassName: r,
        closeIconClassName: d,
        filenames: ["fileName" in e && e.fileName || ""],
        closeBtnHoverText: _("file_link_close"),
        onClickCloseBtn: () => {
          chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
            if (e != null) {
              e.clearRefContents(p, {
                retainDisableRef: true
              });
            }
          });
          teaAnalyticsEventTracker.trackEvent("input_bar_enter", {
            click_scene: "remove_reference"
          });
        },
        t: _
      })), N == null ? undefined : N.map((e, n) => reactJsxRuntimeCoreReexport.jsx(C, {
        className: I,
        fileIcon: b(e),
        fileIconWrapperClassName: r,
        closeIconClassName: d,
        filenames: [D(e)],
        closeBtnHoverText: _("file_link_close"),
        onClickCloseBtn: () => {
          chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
            if (e != null) {
              e.deleteRefContent(p, B + n);
            }
          });
          teaAnalyticsEventTracker.trackEvent("input_bar_enter", {
            click_scene: "remove_reference"
          });
        },
        t: _
      }))]
    });
  };
  require.r(exports);
  require.d(exports, {
    ChatInputRefContentV2: function () {
      return R;
    }
  });
}