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

  onMounted(() => {
    makeReport();
  });

  const report = ref('');
  const makeReport = () => {
    report.value = '';
    report.value += `# ${getDate()} アルバイト`;

    store.events.forEach((event) => {
      if (!event.selected) return;

      report.value += '\n';
      report.value += `## ${event.title}\n`;
      report.value += `○${event.participants}\n`;
      report.value += `${event.body}`;
    });
  };

  const getDate = (): string => {
    const date = new Date(`${store.year}-${store.month}-${store.day}`);
    const weekday = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()];
    return `${store.year}年${store.month}月${store.day}日(${weekday})`;
  };
</script>
