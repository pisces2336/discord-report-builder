<template>
  <div :class="horizontal ? 'd-flex flex-wrap' : ''">
    <v-checkbox
      v-for="(val, idx) in values"
      :key="`${idx}-${val}`"
      v-model="selectdIdx"
      :class="horizontal ? 'me-3' : ''"
      :hide-details="hideDetails"
      :label="val"
      :value="idx"
      @change="change"
    />
  </div>
</template>
<script setup lang="ts">
  type Props = { values: any[]; horizontal?: boolean; hideDetails: boolean };
  const { values, horizontal, hideDetails } = defineProps<Props>();
  const model = defineModel();

  /**
   * チェックボックスの選択はいったんindexで受けて
   * changeイベントでmodelに反映することで
   * valuesの順番を保持する
   */
  const selectdIdx = ref<number[]>([]);
  const change = (): void => {
    model.value = values.filter((_, idx) => selectdIdx.value.includes(idx));
  };
</script>
