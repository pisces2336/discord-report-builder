import { DateUtil } from '@/utils/date';
import { defineStore } from 'pinia';

type builderState = {
  year: string;
  month: string;
  day: string;
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
    year: DateUtil.getYear(new Date()),
    month: DateUtil.getMonth(new Date()),
    day: DateUtil.getDay(new Date()),
  }),
});
