// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'validateArtifact'
// - Renamed export 'c' to 'validateConversation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-excelairead-url-parse-pre-plugin.aee79fcf.js
         * chunkId: 11567
         * moduleId: 120749
         */
module.exports = function (module, exports, require) {
  var zodSchemaValidation = require("zod-schema-validation") /*id: 225502*/;
  let i = zodSchemaValidation.zod.object({
    conversationId: zodSchemaValidation.zod.string(),
    sharedId: zodSchemaValidation.zod.string()
  });
  let a = n => i.safeParse(n).success;
  let r = zodSchemaValidation.zod.object({
    message_id: zodSchemaValidation.zod.string(),
    conversation_id: zodSchemaValidation.zod.string(),
    artifact_key: zodSchemaValidation.zod.string(),
    artifact_id: zodSchemaValidation.zod.string().optional(),
    resource_type: zodSchemaValidation.zod.number(),
    resource_id: zodSchemaValidation.zod.string(),
    version: zodSchemaValidation.zod.number(),
    status: zodSchemaValidation.zod.number().optional(),
    block_id: zodSchemaValidation.zod.string().optional(),
    artifact_meta: zodSchemaValidation.zod.object({}).optional(),
    artifact_meta_list: zodSchemaValidation.zod.array(zodSchemaValidation.zod.object({})).optional()
  });
  let l = n => r.safeParse(n).success;
  require.d(exports, {
    validateArtifact: function () {
      return l;
    },
    validateConversation: function () {
      return a;
    }
  });
}