<template>
  <v-card title="設定">
    <v-card-text>
      <v-row>
        <v-col class="d-flex flex-wrap">
          <checkbox-group
            v-model="selectedEvents"
            hide-details
            horizontal
            :values="eventTitles"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
  import { useBuilderStore } from '@/stores/builderStore';
  const store = useBuilderStore();

  const eventTitles = store.events.map((val) => val.title);

  const selectedEvents = ref<string[]>([]);
  watch(selectedEvents, () => {
    store.events.forEach((val) => {
      val.selected = selectedEvents.value.includes(val.title);
    });
  });
</script>
