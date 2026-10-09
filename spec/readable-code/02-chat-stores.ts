/** Human-readable reconstruction of chat-store-manager and the feed/message store factories. */

type Store<T = unknown> = { getState(): T; setState(next: Partial<T>): void };
type StoreFactory<T = unknown> = () => Store<T>;

interface GlobalStore {
  resourceStore: Map<string, { load(): StoreFactory | Promise<StoreFactory> }>;
  storeContainer: { isBound(key: string): boolean; bind(key: string, value: Store): void; unbind(key: string): void; get<T>(key: string): T };
}

export class ChatStoreManager {
  constructor(private readonly getGlobalStore: () => GlobalStore) {}

  getStore<T>(key: string): Store<T> {
    const { resourceStore, storeContainer } = this.getGlobalStore();
    if (storeContainer.isBound(key)) return storeContainer.get<Store<T>>(key);

    const loaded = resourceStore.get(key)?.load();
    if (loaded instanceof Promise) {
      throw new Error(`Store '${key}' is lazy; call getAsyncStore instead`);
    }
    if (!loaded) throw new Error(`Store '${key}' was not found`);

    // Rebinding allows configuration/scene replacement without retaining stale state.
    if (storeContainer.isBound(key)) storeContainer.unbind(key);
    storeContainer.bind(key, loaded());
    return storeContainer.get<Store<T>>(key);
  }

  async getAsyncStore<T>(key: string): Promise<Store<T>> {
    const { resourceStore, storeContainer } = this.getGlobalStore();
    if (storeContainer.isBound(key)) return storeContainer.get<Store<T>>(key);
    const factory = await resourceStore.get(key)?.load();
    if (!factory) throw new Error(`Store '${key}' was not found`);
    if (storeContainer.isBound(key)) storeContainer.unbind(key);
    storeContainer.bind(key, factory());
    return storeContainer.get<Store<T>>(key);
  }
}

export interface FeedState {
  conversationMap: Record<string, unknown>;
  localConversationMap: Record<string, unknown>;
  lastMessageIndexMap: Record<string, unknown>;
  actionBarTemplateMap: Record<string, unknown>;
  prevActiveConversationId: string | null;
  currentActiveConversationId: string | null;
  latestArchivedConversationId: string | null;
}

export const createInitialFeedState = (): FeedState => ({
  conversationMap: {}, localConversationMap: {}, lastMessageIndexMap: {}, actionBarTemplateMap: {},
  prevActiveConversationId: null, currentActiveConversationId: null, latestArchivedConversationId: null,
});

/**
 * The original factories create singleton hooks; initialization is allowed once.
 * A rewrite should inject a store factory rather than mutate Function.prototype as the bundle does.
 */
export class StoreSingleton<T> {
  private instance?: Store<T>;
  initialize(factory: () => Store<T>): void { this.instance ??= factory(); }
  get(): Store<T> { if (!this.instance) throw new Error("Store is not initialized"); return this.instance; }
}
