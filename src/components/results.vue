<template>
  <v-card title="出力">
    <v-card-text>
      <v-row>
        <v-col>
          <v-textarea v-model="report" auto-grow />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
  import { useBuilderStore } from '@/stores/builderStore';

  const store = useBuilderStore();
  store.$subscribe(() => {
    makeReport();
  });

  const report = ref('');
  const makeReport = () => {
    report.value = '';

    const today = getFormatDate(new Date());
    report.value += `# ${today} アルバイト`;

    store.events.forEach((event) => {
      if (!event.selected) return;

      report.value += '\n';
      report.value += `## ${event.title}\n`;
      report.value += `○${event.participants}\n`;
      report.value += `${event.body}`;
    });
  };

  const getFormatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekday = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()];

    return `${year}年${month}月${day}日(${weekday})`;
  };
</script>
