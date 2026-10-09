/**
 * Human-readable reconstruction of chat/chat-ioc-manager.js.
 * The original uses binding-manager and a Zustand-like store-hook factory.
 */

type Loader<T> = { load(): T | Promise<T> };

interface BindingContainer {
  bind<T>(key: string, value: T): void;
  unbind(key: string): void;
  isBound(key: string): boolean;
  get<T>(key: string): T;
}

interface PluginResource {
  priority?: number;
  loadResource(): Promise<unknown>;
}

interface FeaturePlugin {
  resource?: Record<string, Record<string, { resource?: Record<string, PluginResource> }>>;
  input?: Record<string, { matcher?: unknown }>;
  message?: Record<string, { matcher?: unknown }>;
  guidance?: Record<string, { matcher?: unknown }>;
  chatLayout?: Record<string, { matcher?: unknown }>;
  feed?: Record<string, { matcher?: unknown }>;
  launcher?: Record<string, { matcher?: unknown }>;
  lifeCycles?: { onInit?(): void };
}

export class ResourceController {
  readonly resourceStore: Map<string, Loader<unknown>>;
  readonly storeContainer: BindingContainer;
  readonly serviceContainer: BindingContainer;
  readonly pluginMatcherContainer: BindingContainer;
  readonly configContainer: BindingContainer;
  readonly pluginContainerMap: Record<string, unknown> = {};

  constructor(loader: Map<string, Loader<unknown>>, createContainer: () => BindingContainer) {
    this.resourceStore = loader;
    this.storeContainer = createContainer();
    this.serviceContainer = createContainer();
    this.pluginMatcherContainer = createContainer();
    this.configContainer = createContainer();
  }
}

/** Merge feature resource contributions and make every group lazy + memoized. */
function createSceneLoaders(plugins: FeaturePlugin[]): Map<string, Loader<unknown>> {
  // Original code merges resources by group/key, then orders priority before loading.
  // The concrete resource shape differs by feature, so the exact generic is intentionally loose.
  const loaders = new Map<string, Loader<unknown>>();
  // For each resource group: install a loader that Promise.all()s the memoized contributions.
  return loaders;
}

export class ChatIocManager {
  private activeScene = "PC_MAIN_BOT_WEB";
  private globalStore?: ResourceController;
  private scenes = new Map<string, ResourceController>();

  setActiveScene(scene: string, config: { core: unknown; pluginList?: FeaturePlugin[] }) {
    this.activeScene = scene;
    this.initializeGlobalStore(config);
    this.initializeScene(scene, config);
  }

  initializeGlobalStore(config: { core: unknown }) {
    if (!this.globalStore) {
      // Original registers global core stores: message, protocol, input, attachment, skill, layout, feed.
      this.globalStore = new ResourceController(new Map(), createBindingContainer);
    }
  }

  initializeScene(scene: string, config: { core: unknown; pluginList?: FeaturePlugin[] }) {
    if (this.scenes.has(scene)) return;
    this.scenes.set(scene, new ResourceController(createSceneLoaders(config.pluginList ?? []), createBindingContainer));
    for (const plugin of config.pluginList ?? []) {
      try { plugin.lifeCycles?.onInit?.(); } catch { /* original intentionally isolates plugin-init errors */ }
    }
  }

  getResourceCtrl(scene = this.activeScene): ResourceController {
    const controller = this.scenes.get(scene);
    if (!controller) throw new Error(`Resource controller for scene ${scene} is not initialized`);
    return controller;
  }

  getGlobalStore(): ResourceController {
    if (!this.globalStore) throw new Error("Global resource controller is not initialized");
    return this.globalStore;
  }
}

declare function createBindingContainer(): BindingContainer;
