// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'useAcademicCitationDialog'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 703881
         */
module.exports = function (module, exports, require) {
  var n;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var o = clipboardCopyHelper;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var radioGroupComponent = require("radio-group-component") /*id: 579832*/;
  var radioComponentExport = require("radio-component-export") /*id: 423497*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var noteOutlinedIcon = require("note-outlined-icon") /*id: 356739*/;
  var g = {
    modal: "modal-w7Qkga",
    title: "title-IhThdB",
    close: "close-WR6gHU",
    btn: "btn-wY77Us",
    inner: "inner-LNvigX",
    format: "format-rrFDNS",
    content: "content-kCdbmT"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  (n = {}).MLA = "MLA";
  n.APA = "APA";
  n.Chicago = "Chicago";
  n.Harvard = "Harvard";
  let b = n;
  let y = e => {
    let {
      visible: i,
      className: n,
      citationDatas: a,
      url: l,
      t: y,
      onClose: k,
      onTrackEvent: x
    } = e;
    let [w, C] = reactCoreLibraryReexport.useState(chatAppEnums.CitationFormatType.MLA);
    let [S, $] = reactCoreLibraryReexport.useState((a == null ? undefined : a[0].citation) ?? "");
    let T = reactCoreLibraryReexport.useMemo(() => a == null ? undefined : a.map(e => {
      return {
        format: e.format ?? chatAppEnums.CitationFormatType.MLA,
        citation: (e == null ? undefined : e.citation) ?? ""
      };
    }), [a]);
    let R = e => {
      switch (e) {
        case chatAppEnums.CitationFormatType.MLA:
          return b.MLA;
        case chatAppEnums.CitationFormatType.APA:
          return b.APA;
        case chatAppEnums.CitationFormatType.Chicago:
          return b.Chicago;
        case chatAppEnums.CitationFormatType.Harvard:
          return b.Harvard;
        default:
          return "";
      }
    };
    if (i) {
      return reactJsxRuntimeCoreReexport.jsx(modalDialogComponent.Modal, {
        visible: i,
        header: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex items-center justify-center",
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            className: g.title,
            children: y("skill_search_citedpaper")
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: g.close,
            onClick: () => {
              if (k != null) {
                k({
                  visible: false
                });
              }
            },
            children: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
              className: "text-16"
            })
          })]
        }),
        className: s(g.modal, n),
        footer: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "flex justify-center text-center",
          children: reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
            theme: "solid",
            className: g.btn,
            icon: reactJsxRuntimeCoreReexport.jsx(noteOutlinedIcon.NoteOutlinedIcon, {
              className: "text-18"
            }),
            onClick: () => {
              o(String(S));
              semiToastNotification.toastInstance.success(y("skill_copliotreading_copy_success"));
              if (x != null) {
                x("search_get_reference", {
                  search_type: "academic_search",
                  search_url: l,
                  type: w
                });
              }
            },
            disabled: String(S) === "",
            children: y("skill_search_copytext")
          })
        }),
        centered: true,
        maskClosable: false,
        zIndex: 2000,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: g.inner,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            children: reactJsxRuntimeCoreReexport.jsx(radioGroupComponent.RadioGroup, {
              onChange: e => {
                e.stopPropagation();
                C(e.target.value);
                let i = T == null ? undefined : T.find(t => t.format === e.target.value);
                $((i == null ? undefined : i.citation) ?? "");
              },
              value: w,
              type: "button",
              children: T == null ? undefined : T.map(e => reactJsxRuntimeCoreReexport.jsx(radioComponentExport.RadioComponent, {
                value: e.format,
                className: g.format,
                children: R(e.format)
              }))
            })
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: g.content,
            children: S
          })]
        })
      });
    } else {
      return null;
    }
  };
  let k = e => {
    let {
      t,
      onTrackEvent: i
    } = e;
    let [n, a] = reactCoreLibraryReexport.useState({
      visible: false,
      onTrackEvent: i
    });
    let o = e => {
      let {
        visible: t,
        citationDatas: i,
        url: r
      } = e;
      a({
        ...n,
        visible: t,
        citationDatas: i,
        url: r
      });
    };
    return {
      onAcademicQuoteClick: o,
      renderAcademicQuoteDialog: function (e = {}) {
        let {
          className: r
        } = e;
        return (n == null ? undefined : n.visible) && reactJsxRuntimeCoreReexport.jsx("div", {
          onClick: e => e.stopPropagation(),
          children: reactJsxRuntimeCoreReexport.jsx(y, {
            t: t,
            url: n == null ? undefined : n.url,
            className: r,
            visible: n.visible,
            onClose: o,
            citationDatas: n.citationDatas,
            onTrackEvent: i
          })
        });
      }
    };
  };
  require.d(exports, {
    useAcademicCitationDialog: function () {
      return k;
    }
  });
}