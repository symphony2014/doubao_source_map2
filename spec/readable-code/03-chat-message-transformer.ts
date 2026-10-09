/** Human-readable reconstruction of chat/chat-message-transformer.js. */

export interface ServerMessage {
  content?: string;
  content_block?: Array<{ block_type: string; block_id?: string; parent_block_id?: string; content?: unknown; meta_infos?: unknown[] }>;
  conversation_id: string;
  local_conversation_id?: string;
  bot_id?: string;
  ext?: Record<string, string>;
}

export async function transformMessage(raw: ServerMessage, localInfo?: object) {
  const message: any = {
    ...raw,
    local_info: localInfo,
    content_obj: safeJsonParse(raw.content),
  };

  Object.assign(message, {
    conversation_type: localInfo?.["conversation_type"] ?? getConversationType(raw.conversation_id, raw.local_conversation_id),
    bot_id: raw.bot_id ?? getConversationBotId(raw.conversation_id, raw.local_conversation_id),
    is_finish: raw.ext?.is_finish === "1",
    is_regen: raw.ext?.regen === "1",
    regen_active: raw.ext?.regen_active === "1",
    has_suggest: raw.ext?.has_suggest === "1",
    security_archive_state: raw.ext?.archive_state,
    stream_id: Number(raw.ext?.crowd_test_msg_index ?? "0"),
    ext: raw.ext,
    final_status: createFinalStatus(raw.ext),
    verbose: createVerboseMetadata(raw.ext),
  });

  const sourceBlocks = (raw.content_block ?? []).filter(block => block.block_type !== "SamanthaSuggest");
  message.content_blocks = sourceBlocks.map(block => ({
    id: block.block_id ?? "",
    parent_id: block.parent_block_id ?? "0",
    block_type: block.block_type,
    content_obj: typeof block.content === "string" ? safeJsonParse(block.content) : firstDefinedValue(block.content),
    meta_infos: block.meta_infos ?? [],
    is_delta: false,
    is_finish: true,
    is_deleted: false,
  }));
  message.content_blocks_tree = buildContentBlockTree(message.content_blocks);

  message.async_task = safeJsonParse(raw.ext?.async_task);
  message.attachments = mapAttachments(message);
  message.references = mapReferences(message);
  message.thinking = extractThinking(message.content_blocks);

  // A matching plugin can replace this baseline mapping for skill-specific protocols.
  const customTransformer = await loadMatchingProtocolTransformer(message);
  if (customTransformer) return customTransformer(message, raw, localInfo);

  return omit(message, ["content", "content_block"]);
}

declare function safeJsonParse(value: unknown): any;
declare function getConversationType(remoteId?: string, localId?: string): string | undefined;
declare function getConversationBotId(remoteId?: string, localId?: string): string | undefined;
declare function createFinalStatus(ext?: Record<string, string>): object;
declare function createVerboseMetadata(ext?: Record<string, string>): object;
declare function firstDefinedValue(value: unknown): unknown;
declare function buildContentBlockTree(blocks: unknown[]): unknown;
declare function mapAttachments(message: unknown): unknown[];
declare function mapReferences(message: unknown): unknown[];
declare function extractThinking(blocks: unknown[]): unknown;
declare function loadMatchingProtocolTransformer(message: unknown): Promise<undefined | ((message: unknown, raw: unknown, localInfo: unknown) => unknown)>;
declare function omit<T>(value: T, keys: string[]): T;
