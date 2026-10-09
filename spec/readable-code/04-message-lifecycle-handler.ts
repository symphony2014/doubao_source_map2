/** Human-readable reconstruction of message-lifecycle-handler.js. */

export async function handleMessageUpdate(message: any): Promise<void> {
  if (!message.conversation_id) {
    logger.warn("message.conversation_id is empty", { message });
    return;
  }

  const normalized = { ...message, conversation_id: message.conversation_id };

  if (isAcknowledgement(normalized)) {
    await handleAcknowledgement(normalized);
    return;
  }

  // A socket message may ask the legacy Alice transport to pull an HTTP chunk stream.
  if (isSocketHttpChunk(normalized)) await pullFallbackStream(normalized);

  if (isLoadingMessage(normalized)) {
    mergeStreamingChunk(normalized);
    return;
  }

  if (!normalized.message_id) {
    logger.warn("message.message_id is empty", { message: normalized });
    return;
  }

  if (isSuggestionMessage(normalized)) {
    updateSuggestionsAndEndSessionIfNeeded(normalized);
    return;
  }

  receiveFinalMessage(normalized);
}

async function handleAcknowledgement(ack: any): Promise<void> {
  const localId = ack.local_message_id;
  if (!localId) return;
  finishOutgoingTask(localId);

  const sourceConversationId = ack.local_conversation_id || ack.conversation_id;
  const localMessage = getLocalMessage(sourceConversationId, localId);
  if (!localMessage) return;

  if (isSendError(ack)) {
    writeSendError(sourceConversationId, localId, ack);
    await dispatchMatchingSendErrorPlugins(ack);
    return;
  }

  // Acknowledge the optimistic message and create its receiving draft if absent.
  moveSessionIdentityIfConversationWasPromoted(ack);
  replaceLocalDraftWithRemoteAck(localMessage, ack);
  ensureReceivingDraft({
    conversationId: ack.conversation_id,
    replyId: ack.message_id,
    sectionId: ack.section_id,
    skillType: localMessage.skill?.skill_type,
    isRegenerate: shouldRegenerate(localMessage),
  });
  markSendingStarted(ack, localMessage);
}

function mergeStreamingChunk(chunk: any): void {
  if (!chunk.reply_id) return;
  updateMessageStore(chunk.conversation_id, state => {
    const localId = chunk.message_id || replyToStreamKey(chunk.reply_id, chunk.stream_id);
    const existing = state.draftLocalMessageMap[localId];
    if (!existing) createReceivingDraft(state, chunk, localId);
    if (existing && isChunkOlderThan(chunk, existing)) return;
    state.draftLocalMessageMap[localId] = { ...state.draftLocalMessageMap[localId], ...removeNilFields(chunk) };
  });
  notifySessionLoadingOrError(chunk);
}

declare const logger: { warn(message: string, context: object): void };
declare function isAcknowledgement(message: any): boolean;
declare function isSocketHttpChunk(message: any): boolean;
declare function pullFallbackStream(message: any): Promise<void>;
declare function isLoadingMessage(message: any): boolean;
declare function isSuggestionMessage(message: any): boolean;
declare function finishOutgoingTask(localId: string): void;
declare function getLocalMessage(conversationId: string, localId: string): any;
declare function isSendError(message: any): boolean;
declare function writeSendError(conversationId: string, localId: string, message: any): void;
declare function dispatchMatchingSendErrorPlugins(message: any): Promise<void>;
declare function moveSessionIdentityIfConversationWasPromoted(message: any): void;
declare function replaceLocalDraftWithRemoteAck(local: any, ack: any): void;
declare function ensureReceivingDraft(args: object): void;
declare function shouldRegenerate(local: any): boolean;
declare function markSendingStarted(ack: any, local: any): void;
declare function updateMessageStore(conversationId: string, update: (state: any) => void): void;
declare function replyToStreamKey(replyId: string, streamId: number): string;
declare function createReceivingDraft(state: any, chunk: any, localId: string): void;
declare function isChunkOlderThan(chunk: any, current: any): boolean;
declare function removeNilFields(value: any): any;
declare function notifySessionLoadingOrError(chunk: any): void;
declare function updateSuggestionsAndEndSessionIfNeeded(message: any): void;
declare function receiveFinalMessage(message: any): void;
