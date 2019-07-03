<template>
  <v-dialog v-model="value" max-width="290">
    <v-card color="">
      <v-card-title class="dangerTitle">
        Delete this {{name}}?
      </v-card-title>
      <v-card-text>
        <div>
          Once deleted these items cannot be restored.
          Please confirm by clicking the delete button below.
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="secondary"
          flat="flat"
          v-on:click.stop="$emit('cancel')">
          Cancel
        </v-btn>
        <v-btn
          color="error"
          flat="flat"
          v-on:click.stop="$emit('confirm')">
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'delete-confirm',
  props: {
    value: {},
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
  .dangerTitle {
    background-color: #7c2e27;
    color: white;
  }
</style>
