<template>
  <v-card title="入力">
    <v-card-text>
      <v-row>
        <v-col cols="2" class="flex">
          <v-text-field type="number" v-model="store.year" label="年" />
        </v-col>
        <v-col cols="2">
          <v-text-field type="number" v-model="store.month" label="月" />
        </v-col>
        <v-col cols="2">
          <v-text-field type="number" v-model="store.day" label="日" />
        </v-col>
      </v-row>
      <template v-for="(event, idx) in store.events" :key="`${idx}-${event.title}`">
        <v-row v-if="event.selected">
          <v-col>
            <v-card :title="event.title" variant="outlined">
              <v-card-text>
                <v-text-field v-model="event.participants" label="参加者" />
                <v-textarea
                  v-model="event.body"
                  auto-grow
                  label="本文"
                  rows="1"
                />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
  import { useBuilderStore } from '@/stores/builderStore';

  const store = useBuilderStore();
</script>
