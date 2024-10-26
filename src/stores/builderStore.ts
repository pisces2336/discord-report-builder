import { defineStore } from 'pinia';

type builderState = {
  events: {
    readonly title: string;
    participants: string;
    body: string;
    selected: boolean;
  }[];
};

export const useBuilderStore = defineStore<string, builderState>({
  id: 'builder',
  state: () => ({
    events: [],
  }),
});
