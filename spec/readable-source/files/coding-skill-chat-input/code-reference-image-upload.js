// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'CodeRefImageUpload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 532322
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatInputFileUploadButton = require("chat-input-file-upload-button") /*id: 333699*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var userShieldIcon = require("user-shield-icon") /*id: 746369*/;
  var codingSkillChatInputStyles_1 = require("coding-skill-chat-input-styles_1") /*id: 579930*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      isNarrow: t = false,
      isOverflow: n = false,
      handleAddReferenceImage: p,
      uploadTeaReport: h
    } = e;
    let m = i18nTranslationUtils.useTranslationWithFallback();
    let [f, _] = reactCoreLibraryReexport.useState(false);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-testid": "code-btn-add-reference-image",
      children: reactJsxRuntimeCoreReexport.jsx(chatInputFileUploadButton.ChatInputFileUpload, {
        renderIcon: () => null,
        renderCustomButton: e => {
          let {
            onClick: i
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            className: f ? "!hidden" : "",
            content: m("coding_website_build_reference_img_tooltip"),
            children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              size: t ? "small" : "medium",
              type: n ? "quartary" : "tertiary",
              onClick: async () => {
                i();
                await promiseAsyncUtilities.createDelayedPromise(300);
                _(true);
              },
              onMouseEnter: () => _(false),
              className: n ? codingSkillChatInputStyles_1.refImageStyles.overflow : "",
              icon: reactJsxRuntimeCoreReexport.jsx(userShieldIcon.UserShieldIcon, {
                className: t ? "size-14" : "size-16"
              }),
              children: m("coding_website_build_reference_img")
            })
          }, f.toString());
        },
        accept: ".png,.jpg,.jpeg,.webp",
        multiple: true,
        onFileChange: e => {
          if (h != null) {
            h("upload_pic");
          }
          if (p != null) {
            p([...((e == null ? undefined : e.target?.files) ?? [])]);
          }
        }
      })
    });
  };
  require.d(exports, {
    CodeRefImageUpload: function () {
      return p;
    }
  });
}