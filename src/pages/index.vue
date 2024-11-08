<template>
  <v-container>
    <v-row>
      <v-col class="flex-between">
        <Settings class="mb-5" />
        <Inputs />
      </v-col>
      <v-col class="position-relative">
        <Results class="position-sticky top-0" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import { useBuilderStore } from '@/stores/builderStore';

  const store = useBuilderStore();
  store.events = [
    {
      title: '全体朝会',
      participants: '全社',
      body: '・いただけ',
      selected: false,
    },
    {
      title: 'チーム朝会',
      participants: '開発2課: 山田さん',
      body: '・一言お題「」\n　・\n・進捗や現状の報告',
      selected: false,
    },
    {
      title: '輪読会(朝)',
      participants: '開発2課: 山田さん',
      body: '・技術書の音読',
      selected: false,
    },
    {
      title: 'スプリントレビュー',
      participants: '開発2課: 山田さん、管理課: 白石さん, 西村さん',
      body: '・いただけ',
      selected: false,
    },
    {
      title: 'タスク評価',
      participants: '開発2課: 山田さん、管理課: 白石さん, 西村さん',
      body: '・いただけ',
      selected: false,
    },
    {
      title: '振り返り',
      participants: '開発2課: 山田さん',
      body: '・一週間の振り返りについて話し合い',
      selected: false,
    },
    {
      title: '共有会',
      participants: '開発部全体',
      body: '・いただけ',
      selected: false,
    },
    {
      title: 'スプリントプランニング',
      participants: '開発2課: 山田さん',
      body: '・来週実施のタスクについてコストの話し合い等',
      selected: false,
    },
    {
      title: 'チーム夕会',
      participants: '2課: 山田さん',
      body: '・進捗や現状の報告',
      selected: false,
    },
    {
      title: '輪読会(夕)',
      participants: '開発2課: 山田さん',
      body: '・技術書の音読',
      selected: false,
    },
  ];
</script>
