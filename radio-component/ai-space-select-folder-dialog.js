// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SelectFolderDialog'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 584973
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var reactTreeComponent = require("react-tree-component") /*id: 460649*/;
  var typographyWrapperModule = require("typography-wrapper-module") /*id: 954330*/;
  var fileReviewStatusUtils = require("file-review-status-utils") /*id: 282595*/;
  var emptyStateUploadComponent = require("empty-state-upload-component") /*id: 674618*/;
  var fileIconRendererComponent = require("file-icon-renderer-component") /*id: 744632*/;
  var fileEntityTypeConstants = require("file-entity-type-constants") /*id: 567257*/;
  var successDialogComponent = require("success-dialog-component") /*id: 825396*/;
  var p = {
    "file-tree-wrapper": "file-tree-wrapper-utViNW",
    "file-tree": "file-tree-lX3fHk",
    "file-tree-item-label-text": "file-tree-item-label-text-sfegwI"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = (e, t) => {
    for (let n of t) {
      if (n.value === e) {
        return n;
      }
      if (n.children?.length) {
        let t = m(e, n.children);
        if (t) {
          return t;
        }
      }
    }
  };
  function h(e) {
    let {
      t: i,
      title: l,
      okText: h,
      cancelText: f,
      initialTreeData: v = [],
      onLoadTreeData: g,
      onSelectedNodeIdChange: y,
      onConfirm: b,
      onCancel: w,
      closeOnEsc: x
    } = e;
    let [k, S] = reactCoreLibraryReexport.useState(v);
    let E = v[0]?.key;
    let [j, N] = reactCoreLibraryReexport.useState(E || "");
    let T = reactCoreLibraryReexport.useMemo(() => m(j, k), [j, k]);
    async function C(e) {
      if (!e) {
        return;
      }
      let {
        key: t,
        children: i
      } = e;
      if (!t || i) {
        return;
      }
      let n = await g(e);
      if (n.length !== 0) {
        S(e => function e(t, i, n) {
          return t.map(t => t.key === i ? {
            ...t,
            children: n
          } : t.children ? {
            ...t,
            children: e(t.children, i, n)
          } : t);
        }(e, t, n));
      }
    }
    return reactJsxRuntimeCoreReexport.jsx(successDialogComponent.SuccessDialog, {
      t: i,
      width: 600,
      title: l,
      okText: h,
      cancelText: f,
      visible: true,
      okButtonProps: {
        "data-testid": "ai_space_select_folder_dialog_confirm_btn",
        disabled: !T
      },
      onOk: () => {
        if (T) {
          if (b != null) {
            b(T);
          }
        }
      },
      onCancel: w,
      closeOnEsc: !!x,
      "data-testid": "ai_space_select_folder_dialog",
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: p["file-tree-wrapper"],
        children: k.length ? reactJsxRuntimeCoreReexport.jsx(reactTreeComponent.TreeComponent, {
          className: p["file-tree"],
          defaultExpandedKeys: E ? [E] : undefined,
          expandAction: "click",
          icon: reactJsxRuntimeCoreReexport.jsx(fileIconRendererComponent.FileIconRenderer, {
            className: "text-20",
            file: {
              name: "",
              type: fileEntityTypeConstants.fileEntityTypes.Directory
            }
          }),
          renderLabel: e => reactJsxRuntimeCoreReexport.jsx(typographyWrapperModule.TypographyWrapper.Text, {
            "data-testid": "ai_space_select_folder_dialog_item_name",
            className: p["file-tree-item-label-text"],
            ellipsis: {
              showTooltip: true
            },
            children: e
          }),
          loadData: C,
          treeData: k,
          value: j,
          onChange: e => {
            if (isStringTypeCheck.isString(e)) {
              N(e);
              if (y != null) {
                y(e);
              }
            }
          }
        }) : reactJsxRuntimeCoreReexport.jsx(emptyStateUploadComponent.EmptyStateUpload, {
          t: i,
          readonly: true,
          title: i("aispace_no_content_currently")
        })
      })
    });
  }
  h.show = e => {
    let {
      t,
      title: i,
      okText: n,
      cancelText: a,
      initialTreeData: r,
      onSelectedNodeIdChange: o,
      onLoadTreeData: s,
      onCancel: c,
      onConfirm: d,
      getPopupContainer: u,
      closeOnEsc: p
    } = e;
    return fileReviewStatusUtils.mountReactElement(reactJsxRuntimeCoreReexport.jsx(h, {
      t: t,
      initialTreeData: r,
      onSelectedNodeIdChange: o,
      onLoadTreeData: s,
      onCancel: c,
      onConfirm: d,
      title: i,
      okText: n,
      cancelText: a,
      closeOnEsc: p
    }), {
      getPopupContainer: u
    });
  };
  require.d(exports, {
    SelectFolderDialog: function () {
      return h;
    }
  });
}