<template>
  <v-select
    :items="items"
    label="Outlined style"
    dense
    outlined
></v-select>
</template>

<script>
export default {
    name: 'Select',
    data: () => ({
        items: ['Emocionante', 'Tristecillo', 'Amoroso', ''],
    })
}
</script>
