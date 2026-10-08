// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'ContentContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 96973.4032f564.js
         * chunkId: 96973
         * moduleId: 773878
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlExitIcon = require("rtl-exit-icon") /*id: 569004*/;
  var rtlArrowLeftIcon = require("rtl-arrow-left-icon") /*id: 31280*/;
  var rtlIconComponent_1_2 = require("rtl-icon-component_1_2") /*id: 734871*/;
  var noteOutlinedIcon = require("note-outlined-icon") /*id: 356739*/;
  var p = "item-Vk8gno";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = e => {
    let {
      className: t,
      style: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a("container-PCwg7n", t),
      style: n,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: a(p, "title-ZYqNr0")
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: p
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: p
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: p
      })]
    });
  };
  var samanthaLoadingToastHook = require("samantha-loading-toast-hook") /*id: 170954*/;
  var y = {
    container: "container-JACx1D",
    header: "header-qCHeMy",
    "hide-actions": "hide-actions-f0zNRh",
    inner: "inner-RVa9wE",
    raw: "raw-ZFcV6r",
    title: "title-tXmHot",
    icon: "icon-WNd8e8",
    text: "text-y53l58",
    "edit-button": "edit-button-sB1z27",
    blank: "blank-zsoU6Y",
    headerIcon: "headerIcon-dgfzCc",
    "fit-width": "fit-width-dgIRyd",
    content: "content-H4aWtB",
    hidden: "hidden-BuNGyp"
  };
  let _ = e => {
    let {
      className: t,
      hideActions: n,
      style: o,
      loading: p = false,
      mountWhenLoading: _ = true,
      actions: b,
      title: w,
      preview: S = false,
      children: k,
      onCopy: x,
      onEdit: C,
      onEditButtonShow: E
    } = e;
    let {
      loadingRef: T,
      setLoading: R
    } = samanthaLoadingToastHook.useLoadingToast({
      text: "复制中",
      closeWhenUnmount: false
    });
    let [A, I] = reactIntersectionObserver_1.useInView({
      initialInView: false
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (I) {
        if (E != null) {
          E();
        }
      }
    }, [I]);
    let P = async () => {
      if (T.current) {
        return;
      }
      let e = x == null ? undefined : x();
      if (promiseAsyncUtilities.isPromiseLike(e)) {
        try {
          R(true);
          await e;
        } finally {
          R(false);
        }
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a(y.container, t),
      style: o,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: a(y.header, {
          [y["hide-actions"]]: n
        }),
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: y.inner,
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: y.raw,
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: y.title,
              children: w && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
                children: [reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_1_2.RtlIcon, {
                  className: y.icon
                }), reactJsxRuntimeCoreReexport.jsx("div", {
                  className: y.text,
                  children: w
                })]
              })
            }), n ? null : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
              children: [reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
                newIcon: true,
                size: "small",
                color: "deep-grey",
                tooltip: "复制",
                disabled: !x,
                onClick: P,
                className: y.headerIcon,
                children: reactJsxRuntimeCoreReexport.jsx(noteOutlinedIcon.NoteOutlinedIcon, {})
              }), b == null ? undefined : b.map((e, t) => reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Fragment, {
                children: e
              }, t)), reactJsxRuntimeCoreReexport.jsx("div", {
                ref: A,
                children: S ? reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
                  newIcon: true,
                  size: "small",
                  color: "deep-grey",
                  title: "查看",
                  disabled: !C,
                  onClick: C ?? undefined,
                  className: a(y.headerIcon, y["fit-width"]),
                  children: reactJsxRuntimeCoreReexport.jsx(rtlExitIcon.RtlExitIcon, {})
                }) : reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
                  className: y["edit-button"],
                  type: "primary",
                  size: "medium",
                  onClick: C ?? undefined,
                  disabled: !C,
                  icon: reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}),
                  children: "编辑文档"
                })
              })]
            })]
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: y.blank
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: y.content,
        children: [(_ || !p) && reactJsxRuntimeCoreReexport.jsx("div", {
          className: a(y.inner, {
            [y.hidden]: p
          }),
          children: k
        }), p && reactJsxRuntimeCoreReexport.jsx(g, {})]
      })]
    });
  };
  require.d(exports, {
    ContentContainer: function () {
      return _;
    }
  });
}