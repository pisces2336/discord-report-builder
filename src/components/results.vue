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

    const today = new Date().toLocaleDateString('ja-JP');
    report.value += `# ${today} アルバイト\n`;

    store.events.forEach((event) => {
      if (!event.selected) return;

      report.value += '\n';
      report.value += `## ${event.title}\n`;
      report.value += `### ${event.participants}\n`;
      report.value += `${event.body}\n`;
    });
  };
</script>
