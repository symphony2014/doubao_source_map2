/** Human-readable reconstruction of alice-chat-stream-protocol-plugin.js. */

type EventType = "ACK" | "CMPL" | "FIN" | "VERBOSE" | "ERR" | "VERSION";

interface StreamEntry {
  instance: { cancel(reason: string): void; isAborted?: boolean; abortReason?: string };
  sentEvent: any;
  lastEventId: string;
  retryCounter: RetryCounter;
  pqueue: SerialQueue;
  pipeManager: MessagePipeManager;
  logId: string;
  traceId: string;
}

export class SamanthaChatProtocolPlugin {
  readonly from = "SamanthaChat";
  private streams = new Map<string, StreamEntry>();
  private initialized = false;

  async sendMessage(messages: any[], options = { headers: {} }): Promise<void> {
    this.initialize();
    const useSamantha = messages[0]?.ext?.useSamanthaChat;
    const event = await transformMessagesToSamanthaFormat(messages, { launchStage: useSamantha ? 1 : messages[0]?.local?.samanthaChatStage });
    protocolStore.createSamanthaChatTask(event.local_message_id, event);
    await this.openStream({ sentEvent: event }, options);
  }

  private async openStream({ sentEvent, lastEventId = "0", messages = {}, retryCounter = new RetryCounter(5), protoVersion }: any, options: any) {
    const pipeManager = new MessagePipeManager(Boolean(Object.keys(messages).length), protoVersion, messages);
    const entry: Partial<StreamEntry> = { sentEvent, lastEventId, retryCounter, pqueue: new SerialQueue(), pipeManager, logId: "", traceId: "" };
    const url = buildUrl("/samantha/chat/completion", { ...getCommonParams(), fp: await getFingerprint() });
    const client = createSseClient(url, {
      method: "POST",
      credentials: "same-origin",
      headers: [["content-type", "application/json"], ["Agw-Js-Conv", "str"], ...Object.entries(getCommonHeaders()), ...Object.entries(options.headers)],
      body: JSON.stringify({ ...sentEvent, completion_option: { ...sentEvent.completion_option, event_id: lastEventId } }),
      onOpen: response => this.handleOpen(response, entry as StreamEntry),
      onMessage: raw => (entry.pqueue as SerialQueue).add(() => this.handleEvent(raw, entry as StreamEntry)),
      onError: error => this.handleTransportError(error, entry as StreamEntry, options),
    });
    entry.instance = client;
    this.streams.set(sentEvent.local_message_id, entry as StreamEntry);
  }

  private async handleOpen(response: Response, entry: StreamEntry) {
    if (!response.ok || !response.body || !response.headers.get("content-type")?.startsWith("text/event-stream")) {
      throw new Error("Completion response is not a valid SSE stream");
    }
    entry.logId = response.headers.get("x-tt-logid") ?? "";
    entry.traceId = response.headers.get("x-tt-trace-id") ?? "";
  }

  private async handleEvent(raw: { data: string; event?: string }, entry: StreamEntry) {
    const envelope = safeJsonParse(raw.data, {});
    const type: EventType = envelope.event_type;
    if (envelope.event_id && type !== "ACK") entry.lastEventId = envelope.event_id;

    switch (type) {
      case "ACK":
        entry.pipeManager.writeConversationId(safeJsonParse(envelope.event_data, {}).conversation_id);
        emitLifecycle(entry.pipeManager.createAckMessage(envelope.event_data, entry));
        return;
      case "CMPL":
        await writeCompletionChunk(entry, envelope.event_data);
        return;
      case "FIN":
        for (const pipe of entry.pipeManager.getAllMessagePipes()) emitLifecycle(pipe.writeFinishReply(entry));
        this.finish(entry.sentEvent.local_message_id);
        return;
      case "VERBOSE":
        entry.pipeManager.getMessagePipeByStreamId(String(safeJsonParse(envelope.event_data, {}).stream_id)).writeVerbose(envelope.event_data);
        return;
      case "ERR":
        writeStreamError(entry, envelope.event_data);
        return;
      case "VERSION":
        protocolStore.updateSamanthaChatTaskProtoVersion(entry.sentEvent.local_message_id, safeJsonParse(envelope.event_data, {}).proto_version);
        return;
    }
  }

  async resumeTask(tasks: any[]) {
    for (const task of tasks) {
      if (!task.localMessageId || this.streams.has(task.localMessageId)) continue;
      await this.openStream({ lastEventId: task.lastEventId, sentEvent: task.sentEvent, messages: task.messages, protoVersion: task.protoVersion }, { headers: {} });
    }
  }

  cancelTask(localMessageId: string) { this.streams.get(localMessageId)?.instance.cancel("cancel request"); this.finish(localMessageId); }
  private finish(localMessageId: string) { this.streams.delete(localMessageId); protocolStore.removeSamanthaChatTask(localMessageId); }
  private initialize() { if (!this.initialized) { this.initialized = true; configureCommonHttp(); } }
  private handleTransportError(error: unknown, entry: StreamEntry, options: any) { /* retry unless cancelled/diff/max-attempts */ }
}

declare class RetryCounter { constructor(maxAttempts: number); }
declare class SerialQueue { add(work: () => Promise<void>): void; }
declare class MessagePipeManager { constructor(hasMessages: boolean, version: unknown, messages: object); writeConversationId(id: string): void; createAckMessage(data: unknown, entry: StreamEntry): unknown; getAllMessagePipes(): any[]; getMessagePipeByStreamId(id: string): any; }
declare const protocolStore: any;
declare function transformMessagesToSamanthaFormat(messages: any[], options: object): Promise<any>;
declare function buildUrl(path: string, params: object): string;
declare function getCommonParams(): object;
declare function getCommonHeaders(): object;
declare function getFingerprint(): Promise<string>;
declare function createSseClient(url: string, options: object): any;
declare function safeJsonParse(value: string, fallback: any): any;
declare function emitLifecycle(message: unknown): void;
declare function writeCompletionChunk(entry: StreamEntry, data: string): Promise<void>;
declare function writeStreamError(entry: StreamEntry, data: string): void;
declare function configureCommonHttp(): void;
