/**
 * Human-readable reconstruction of the input shell and typed message-content renderer.
 * It intentionally shows ownership and boundaries, not CSS or every product-specific tool.
 */

export function ChatInputWithAttachments(props: InputProps) {
  const [editorValue, setEditorValue] = useSkillState({
    defaultValue: syncReferenceBlock(props.editorProps?.defaultValue ?? { data: [] }),
    value: props.editorProps?.value,
    onChange: props.editorProps?.onChange,
  });

  const isEmpty = extractText(editorValue.data) === "";
  const disabled = props.sendBtnProps?.disableToSend || isEmpty;
  const { handleKeyDown } = useChatInputSkillKeyHandler({
    editorValue,
    onSubmit: props.onSubmit,
    onResetEditorValue: () => setEditorValue({ data: [] }),
    onCloseSkillEvent: props.onCloseSkill,
  });
  const toolContext = { type: "editor", isToolButtonSmall: props.isToolButtonSmall, getValue: () => editorValue, onUpdateValue: setEditorValue };

  return (
    <SkillGuidanceInput
      editorProps={{ ...props.editorProps, value: editorValue, onChange: setEditorValue, onKeyDown: chain(props.editorProps?.onKeyDown, handleKeyDown) }}
      sendBtnProps={{ ...props.sendBtnProps, disableToSend: disabled, onClickSendButton: props.onSubmit }}
      leftTools={<SkillOverflowList list={renderOrderedActions(props.bottomActions, toolContext)} />}
      rightTools={renderOrderedActions(props.rightActions, toolContext)}
      customArea={props.showAttachmentArea && <AttachmentAreaLazy attachmentStates={props.attachmentStates} onDeleteAttachment={props.onDeleteAttachment} onRetryAttachment={props.onRetryAttachment} />}
    />
  );
}

/** The actual hook also preprocesses, cancels, deletes, and retries uploads through services. */
export function useAttachments(skillType = "default") {
  const [attachments, setAttachments] = useState<AttachmentInput[]>([]);
  const chatId = useStoreSelector("chatViewCoreStore", state => state.currentChatViewConfig?.chatId ?? "");
  const { attachmentStates, attachmentKeys } = useStoreSelector("attachmentUploadStore", state => deriveUploadState(attachments, state));

  async function addAttachment(file: File, type: string, context: object) {
    const service = await loadService("attachmentUploadStoreService");
    const task = service.preprocessFile(file, type, context, preprocessOptions(chatId, skillType));
    if (task?.local_key) setAttachments(current => [...current, { type, file, localKey: task.local_key, from: context["from"] }]);
  }
  async function removeAttachment(index: number, hardDelete = true) { /* cancel preprocess; optionally delete remote object; reset pre-generated ID when empty */ }
  async function retryAttachment(index: number) { /* call upload service reUpload(localKey, activeBotId) */ }

  return { attachments, attachmentKeys, attachmentStates, addAttachment, removeAttachment, retryAttachment };
}

export function ChatMessageContent({ message, ...props }: { message: NormalizedMessage }) {
  const data = extractMessageData(message);
  if (data.files.length) {
    return <><MessageText text={data.text} />{data.isSafetyError ? <UncompliantMessage /> : <AttachmentNode file={data.files[0]} readStatus={data.readStatus[0]} />}</>;
  }
  if (data.images.length) {
    return <><MessageText text={data.text} />{data.isSafetyError ? <UncompliantMessage /> : <LazyImage src={sanitizeUrl(data.primaryImageUrl)} onClick={imageAction(message)} />}</>;
  }
  if (data.websites.length) return <><MessageText text={data.text} /><WebsiteCardGrid pages={data.websites} /></>;
  return <MessageText text={data.text || "Unsupported message type"} />;
}

export function RenderReceivedMessage({ message, shared = false }: { message: NormalizedMessage; shared?: boolean }) {
  const showThinking = isThinkingMessage(message) && !message.think_reason_is_hide;
  return <>
    {showThinking && <ThinkingContainer content={message.content_obj?.think ?? ""} isThinkingFinished={isThinkingFinished(message)} isThinkingBroken={isThinkingBroken(message)} meta={message.meta_infos} />}
    {shared ? <AsyncSkillContentBlock message={message} theme="samantha" /> : <ChatMessageContent message={message} />}
    {shouldShowRiskTips(message) && <MessageTipsRender jsonString={message.verbose?.extra?.risk_tips} />}
  </>;
}

type InputProps = any;
type AttachmentInput = any;
type NormalizedMessage = any;
declare const React: any;
declare const useState: any, useSkillState: any, useStoreSelector: any;
declare const SkillGuidanceInput: any, SkillOverflowList: any, AttachmentAreaLazy: any, MessageText: any, UncompliantMessage: any, AttachmentNode: any, LazyImage: any, WebsiteCardGrid: any, ThinkingContainer: any, AsyncSkillContentBlock: any, MessageTipsRender: any;
declare function syncReferenceBlock(value: any): any; declare function extractText(data: any): string; declare function useChatInputSkillKeyHandler(args: any): any; declare function chain(...handlers: any[]): any; declare function renderOrderedActions(actions: any, context: any): any; declare function deriveUploadState(attachments: any, state: any): any; declare function loadService(key: string): Promise<any>; declare function preprocessOptions(chatId: string, skillType: string): any; declare function extractMessageData(message: any): any; declare function sanitizeUrl(url: string): string; declare function imageAction(message: any): any; declare function isThinkingMessage(message: any): boolean; declare function isThinkingFinished(message: any): boolean; declare function isThinkingBroken(message: any): boolean; declare function shouldShowRiskTips(message: any): boolean;
