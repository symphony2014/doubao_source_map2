// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'queryContextStore'
// - Resolved require(988837) to 'query-context-store'
// - Renamed variable 'r' to 'imageConfigConstants'
// - Resolved require(362452) to 'image-config-constants'
// - Renamed variable 'l' to 'aiSkillConstants'
// - Resolved require(670242) to 'ai-skill-constants'
// - Renamed variable 'a' to 'creationSkillChatFlag'
// - Resolved require(734713) to 'creation-skill-chat-flag'
// - Renamed variable 'o' to 'skillConstantsEnum'
// - Resolved require(791429) to 'skill-constants-enum'
// - Renamed variable 'u' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 's' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'c' to 'chatFieldTypes'
// - Resolved require(660462) to 'chat-field-types'
// - Renamed variable 'd' to 'inputToolConverter'
// - Resolved require(352793) to 'input-tool-converter'
// - Renamed variable 'p' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable '_' to 'getFileExtension'
// - Resolved require(256745) to 'get-file-extension'
// - Renamed variable 'f' to 'fileTypeDetectionUtils'
// - Resolved require(393072) to 'file-type-detection-utils'
// - Renamed variable 'v' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'm' to 'storageWrapperWithFallback'
// - Resolved require(319763) to 'storage-wrapper-with-fallback'
// - Renamed variable 'g' to 'imageSkillStoreHook'
// - Resolved require(310175) to 'image-skill-store-hook'
// - Renamed variable 'y' to 'chatFieldProcessor'
// - Resolved require(880637) to 'chat-field-processor'
// - Updated imported property 'Fd' to 'getEditorValue' (module 411117)
// - Updated imported property 'YC' to 'getActionValue' (module 411117)
// - Updated imported property 'Z6' to 'extractText' (module 352793)
// - Updated imported property 'f' to 'getFieldTypes' (module 660462)
// - Updated imported property 'W5' to 'initializeImageSkillStore' (module 310175)
// - Updated imported property 'g9' to 'getStyleValue' (module 880637)
// - Updated imported property 'Fd' to 'getRatioValue' (module 880637)
// - Updated imported property 'wF' to 'findOptionValue' (module 880637)
// - Updated imported property 'Ie' to 'SessionStorageWrapper' (module 319763)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'qX' to 'queryContextStore' (module 988837)
// - Updated imported property 'oU' to 'styleKeys' (module 362452)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'p' to 'SkillActionTypes' (module 670242)
// - Updated imported property 'l' to 'getFileExtension' (module 256745)
// - Updated imported property 'lx' to 'getSkillActionClass' (module 361602)
// - Updated imported property 'JB' to 'getFileCategory' (module 393072)
// - Updated imported property 'Ux' to 'UploadSource' (module 791429)
// - Updated imported property 'j' to 'isCreationSkillNext' (module 734713)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 109829
         */
module.exports = function (module, exports, require) {
  var queryContextStore = require("query-context-store") /*id: 988837*/;
  var imageConfigConstants = require("image-config-constants") /*id: 362452*/;
  var aiSkillConstants = require("ai-skill-constants") /*id: 670242*/;
  var creationSkillChatFlag = require("creation-skill-chat-flag") /*id: 734713*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var imageSkillStoreHook = require("image-skill-store-hook") /*id: 310175*/;
  var chatFieldProcessor = require("chat-field-processor") /*id: 880637*/;
  let h = () => {
    let e = chatInputStoreHelpers.getEditorValue();
    return inputToolConverter.extractText(e.data, {
      stringifyItem: e => {
        if (e.type === chatFieldTypes.getFieldTypes.Select) {
          return `\u{300C}${e.value}\u{300D}`;
        }
      }
    });
  };
  let S = e => e ? Object.entries(e).reduce((e, t) => {
    let [i, n] = t;
    if (n === undefined || typeof n == "string" || typeof n == "number" || typeof n == "boolean") {
      e[i] = n;
    }
    return e;
  }, {}) : {};
  let k = {
    id: "biz-image:input-submit-workflow",
    submitNodes: [{
      id: "image-generation:input-skill-node",
      execute: e => {
        var i;
        var c;
        let I = chatInputStoreHelpers.getEditorValue();
        let {
          inputOptionsMap: N
        } = imageSkillStoreHook.initializeImageSkillStore().getState();
        let A = chatFieldProcessor.getStyleValue(I);
        let x = chatFieldProcessor.getRatioValue(I);
        let C = chatInputStoreHelpers.getActionValue("image_creation_style");
        let O = chatInputStoreHelpers.getActionValue("image_creation_ratio");
        let L = chatInputStoreHelpers.getActionValue("image_creation_model");
        let M = C ?? chatFieldProcessor.findOptionValue(A, N.style) ?? A;
        let D = O ?? chatFieldProcessor.findOptionValue(x, N.ratio) ?? x;
        let F = N == null ? undefined : (c = N.model) === null || c === undefined ? undefined : (i = c.options) === null || i === undefined ? undefined : i.find(e => e.is_default)?.value;
        let U = storageWrapperWithFallback.SessionStorageWrapper.getItem("image_gen_model");
        let W = U === null ? U : safeJsonUtils.safeParse(U, U);
        let K = L ?? W ?? F ?? undefined;
        let {
          abilityType: $
        } = e.content;
        let Z = {
          skill_id: $ == null ? undefined : $.toString(),
          skill_type: $,
          variables: {
            style: M,
            ratio: D,
            model: K,
            template_type: "placeholder"
          }
        };
        let G = e.content.attachmentStates ?? [];
        let {
          refContents: z
        } = e.content;
        let B = (z == null ? undefined : z.find(e => e.type === "image")) || undefined;
        let H = B == null ? undefined : B.fileKey;
        let j = (B == null ? undefined : B.identifier) ?? "";
        let {
          queryContext: J
        } = queryContextStore.queryContextStore.getState();
        let V = {
          ...J,
          ...(G.length ? {
            ref_images: G.map(e => {
              return {
                image_token: e.fileKey || e.localKey,
                refer_types: imageConfigConstants.styleKeys.overall,
                identifier: e.localKey ?? ""
              };
            })
          } : H ? {
            edit_image_url: j,
            edit_image_token: H
          } : {})
        };
        let q = h().trim();
        let Q = i18nTranslationUtils.i18nextTranslate("skill_image_message_prefix");
        let X = Q ? `${Q}${q ? "：" : ""}${q}` : q;
        let Y = X && !X.endsWith("\n") ? `${X}
` : X;
        e.content.text = X;
        e.content.abilityParams = {
          ability_type: aiSkillConstants.SkillActionTypes.IMAGE_GENERATE,
          ability_param: {
            style: M,
            ratio: D,
            model: K
          }
        };
        let ee = M ? String(M) : undefined;
        let et = D ? String(D) : undefined;
        let ei = K ? String(K) : undefined;
        let en = S(e.content.reportParams);
        let er = typeof en.image_category == "string" ? en.image_category : undefined;
        let el = G.length;
        let ea = G.map(e => getFileExtension.getFileExtension(e.fileName || "")).filter(Boolean);
        let eo = !!H;
        let eu = {
          sec_scene: en.sec_scene ? String(en.sec_scene) : $ === undefined ? undefined : skillTypeMappings.getSkillActionClass($),
          styles: ee,
          ratio: et,
          image_genre: ee,
          image_category: er,
          scene: "chat_action_bar",
          images_generation_model: ei,
          image_generation_mode: imageConfigConstants.styleKeys.overall,
          upload_file_cnt: el,
          ...(el ? {
            is_upload_file: 1,
            upload_file_type: ea.map(e => fileTypeDetectionUtils.getFileCategory(e)).join(","),
            upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_PLUS_BUTTON,
            upload_file_size: G.map(e => e.size).join(","),
            upload_collection_way: el > 1 ? "multi" : "single"
          } : {
            is_upload_file: 0
          }),
          edit_image_function: eo ? "continue_edit" : undefined,
          is_quote: +!!eo,
          quote_file_cnt: +!!eo,
          quote_type: eo ? "Image" : undefined,
          quote_from: eo ? "image_continue_edit" : "",
          use_template: 0,
          use_template_show_scene: "",
          use_template_type: "",
          ...en
        };
        e.content.reportParams = eu;
        let es = (G.length !== 0 || !eo) && creationSkillChatFlag.isCreationSkillNext();
        let ec = {
          ...e.content.extra,
          answer_with_suggest: e.content.extra?.answer_with_suggest ?? "0"
        };
        let ed = {
          ...ec,
          input_skill: JSON.stringify(Z),
          samantha_context: JSON.stringify({
            query_context: V
          })
        };
        if (es) {
          e.content.extra = ec;
          e.payload = undefined;
        } else {
          e.content.extra = ec;
          e.payload = [{
            text: Y,
            reportParams: eu,
            extraExt: ed
          }];
        }
        return Promise.resolve(e);
      }
    }],
    afterSubmitNodes: []
  };
  require.r(exports);
  require.d(exports, {
    InputSubmitPipeline: function () {
      return k;
    }
  });
}