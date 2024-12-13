import { reactive } from 'vue';

export const eventBus = reactive({
  listeners: [],
  emit(event:any, payload:any) {
    this.listeners.forEach((listener) => {
      if (listener.event === event) {
        listener.callback(payload);
      }
    });
  },
  on(event:any, callback:any) {
    this.listeners.push({ event, callback });
  },
});