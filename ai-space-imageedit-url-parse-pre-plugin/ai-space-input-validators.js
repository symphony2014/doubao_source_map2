// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$s' to 'validateImages'
// - Renamed export 'U3' to 'validateLinks'
// - Renamed export 'qH' to 'validateFiles'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-excelairead-url-parse-pre-plugin.aee79fcf.js
         * chunkId: 11567
         * moduleId: 900956
         */
module.exports = function (module, exports, require) {
  var zodSchemaValidation = require("zod-schema-validation") /*id: 225502*/;
  let i = zodSchemaValidation.zod.object({
    files: zodSchemaValidation.zod.array(zodSchemaValidation.zod.object({
      name: zodSchemaValidation.zod.string(),
      uri: zodSchemaValidation.zod.string(),
      size: zodSchemaValidation.zod.number().optional().or(zodSchemaValidation.zod.null()),
      nodeId: zodSchemaValidation.zod.string().optional(),
      conversationId: zodSchemaValidation.zod.string().optional(),
      mediaType: zodSchemaValidation.zod.string().optional(),
      codeType: zodSchemaValidation.zod.string().optional(),
      isOtherShare: zodSchemaValidation.zod.boolean().optional(),
      codingSkillEnable: zodSchemaValidation.zod.boolean().optional()
    })),
    shareId: zodSchemaValidation.zod.string().optional(),
    prompt: zodSchemaValidation.zod.string().optional(),
    needBindConversation: zodSchemaValidation.zod.boolean().optional(),
    isSpaceNext: zodSchemaValidation.zod.boolean().optional()
  });
  let a = n => i.safeParse(n).success;
  let r = zodSchemaValidation.zod.object({
    images: zodSchemaValidation.zod.array(zodSchemaValidation.zod.object({
      name: zodSchemaValidation.zod.string(),
      uri: zodSchemaValidation.zod.string(),
      width: zodSchemaValidation.zod.number().optional(),
      height: zodSchemaValidation.zod.number().optional(),
      size: zodSchemaValidation.zod.number().optional().or(zodSchemaValidation.zod.null()),
      nodeId: zodSchemaValidation.zod.string().optional(),
      conversationId: zodSchemaValidation.zod.string().optional(),
      initialEditTool: zodSchemaValidation.zod.string().optional(),
      needBindConversation: zodSchemaValidation.zod.boolean().optional(),
      shareId: zodSchemaValidation.zod.string().optional()
    })),
    needBindConversation: zodSchemaValidation.zod.boolean().optional(),
    isSpaceNext: zodSchemaValidation.zod.boolean().optional()
  });
  let l = n => r.safeParse(n).success;
  let s = zodSchemaValidation.zod.object({
    links: zodSchemaValidation.zod.array(zodSchemaValidation.zod.object({
      url: zodSchemaValidation.zod.string(),
      nodeId: zodSchemaValidation.zod.string().optional(),
      conversationId: zodSchemaValidation.zod.string().optional()
    })),
    prompt: zodSchemaValidation.zod.string().optional(),
    shareId: zodSchemaValidation.zod.string().optional(),
    needBindConversation: zodSchemaValidation.zod.boolean().optional(),
    isSpaceNext: zodSchemaValidation.zod.boolean().optional()
  });
  let _ = n => s.safeParse(n).success;
  require.d(exports, {
    validateImages: function () {
      return l;
    },
    validateLinks: function () {
      return _;
    },
    validateFiles: function () {
      return a;
    }
  });
}