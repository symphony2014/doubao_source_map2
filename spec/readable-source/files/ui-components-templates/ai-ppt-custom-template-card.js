// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'AIPptCustomTemplateCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 740723
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var uploadIcon = require("upload-icon") /*id: 10370*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      onFilesChange: t,
      testId: l,
      fileTypes: n = [],
      multiple: o = false
    } = e;
    let a = reactCoreLibraryReexport.useRef(null);
    let r = () => void (a.current && (a.current.value = ""));
    let d = () => {
      var e;
      if ((e = a.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.click();
      }
    };
    let u = reactCoreLibraryReexport.useMemo(() => n.map(e => `.${e}`).join(","), [n]);
    let m = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (e != null) {
        e.stopPropagation();
      }
      r();
      d();
    });
    let p = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (e.target.files) {
        if (t != null) {
          t([...e.target.files]);
        }
      }
    });
    return {
      handleClickButton: m,
      inputElement: reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx("input", {
        "data-testid": l || "",
        ref: a,
        className: "hidden",
        multiple: o,
        type: "file",
        accept: u,
        onChange: p
      }), [u, l])
    };
  };
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var fileUploadProcessor = require("file-upload-processor") /*id: 203782*/;
  var aiPptTemplateStore_1 = require("ai-ppt-template-store_1") /*id: 698449*/;
  var f = {
    cardItem: "cardItem-atwrpu",
    card: "card-vKS9WR",
    tips: "tips-rGwDTz",
    activeImg: "activeImg-y1LuFd",
    activeTxt: "activeTxt-nFgzvQ",
    animCard: "animCard-GziJX6",
    normalImg: "normalImg-k45Lky"
  };
  let b = e => {
    let {
      onFileSelected: t,
      item: l,
      onCardInView: n,
      onClick: s
    } = e;
    let b = i18nTranslationUtils.useTranslationWithFallback();
    let w = function () {
      let e = i18nTranslationUtils.useTranslationWithFallback();
      let t = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
        return e.currentChatViewConfig?.chatId;
      }) || "";
      let {
        uploadFileMaxSize: l
      } = attachmentUploadStoreHooks.getUploadConfig();
      let {
        customTempateFile: n,
        setCustomTemplateFile: o,
        setCustomTemplateUploadId: r,
        selectTemplateItem: s
      } = aiPptTemplateStore_1.aiPptTemplateStore(e => ({
        customTempateFile: e.customTempateFile,
        setCustomTemplateFile: e.setCustomTemplateFile,
        setCustomTemplateUploadId: e.setCustomTemplateUploadId,
        selectTemplateItem: e.selectTemplateItem
      }));
      let {
        addAttachment: c,
        deleteAttachment: d,
        getPreGeneratedLocalMessageId: f,
        updatePreGeneratedLocalMessageId: b
      } = attachmentUploadStoreHooks.useAttachmentHook({
        chatId: t,
        skillType: chatAppEnums.SkillType.AIPPTSlides
      });
      let w = attachmentUploadStoreHooks.subscribeAttachments({
        chatId: t,
        skillType: chatAppEnums.SkillType.AIPPTSlides
      });
      reactCoreLibraryReexport.useEffect(() => {
        let e = w.find(e => n === objectPathGetDefault.getObjectPathDefault(e, "file", ""));
        r(objectPathGetDefault.getObjectPathDefault(e, "localKey"));
      }, [w == null ? undefined : w.length, n]);
      return reactCoreLibraryReexport.useCallback(async t => {
        if (t.length !== 1) {
          return;
        }
        s();
        let i = fileUploadProcessor.isValidUploadItem([t[0]]);
        i = fileUploadProcessor.filterFilesBySize({
          files: i,
          uploadFileMaxSize: l,
          onSizeError: () => {
            samanthaToastFactory.defaultToast.error(e("file_size_exceeds_limit"));
          }
        });
        let a = w.findIndex(e => n === objectPathGetDefault.getObjectPathDefault(e, "file", ""));
        if (a >= 0) {
          d({
            index: a
          });
        }
        o(i[0]);
        await b();
        let r = await f();
        let m = fileUploadProcessor.prepareUploadItems({
          files: i,
          uploadId: r,
          preCount: 0,
          ctx: {
            from: "ai_slides_skill_custom_card_item",
            uploadFrom: "upload_pinbutton",
            uploadWay: "browse_folder"
          }
        });
        await Promise.all(m.map(async e => {
          if (fileUploadProcessor.convertToFileObjects(e)) {
            await c(e);
          }
        }));
      }, [w, n]);
    }();
    reactCoreLibraryReexport.useEffect(() => {
      if (n != null) {
        n();
      }
    }, []);
    let {
      handleClickButton: y,
      inputElement: C
    } = d({
      fileTypes: ["pptx", "ppt"],
      onFilesChange: e => {
        w(e);
        if (t != null) {
          t(e);
        }
      },
      testId: "template-custom-card-item-file-input"
    });
    let S = reactCoreLibraryReexport.useCallback(() => {
      if (s != null) {
        s();
      }
      y();
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      onPointerDown: S,
      className: o(e.className, f.cardItem, `
          h-full
          flex cursor-pointer flex-col overflow-x-hidden
          transition-all
          bg-dbx-bg-body-overlay items-center
          text-dbx-text-secondary
        `),
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        draggable: "false",
        className: o("w-full rounded-12 object-cover", f.card, f.normalImg),
        style: {
          aspectRatio: "16/9"
        },
        children: [reactJsxRuntimeCoreReexport.jsx(uploadIcon.UploadIcon, {
          className: "text-dbx-text-tertiary"
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: o(f.tips, "text-dbx-text-tertiary"),
          children: b("slides_templates_custom_placeholder", "上传 PPT 文件作为参考 ")
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: o(f.titleTxt, `
          mx-14 my-10 mt-8 line-clamp-2 flex items-center justify-center overflow-hidden
          [font-size:14px]
          leading-22
          [font-weight:400]
          whitespace-nowrap overflow-ellipsis
        `),
        children: l.title
      }), C]
    });
  };
  require.d(exports, {
    AIPptCustomTemplateCard: function () {
      return b;
    }
  });
}