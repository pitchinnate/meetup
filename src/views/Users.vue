<template>
  <div class='users'>
    <v-toolbar flat color="white">
      <v-toolbar-title>Users</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/users/new">
        <v-btn color="primary" dark class="mb-2">New User</v-btn>
      </router-link>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="users"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.email }}</td>
        <td class="text-xs-left">{{ props.item.created_at }}</td>
        <td class="text-md-right">
          <router-link :to="'/users/' + props.item.id">
            <v-icon>edit</v-icon>
          </router-link>
          <a @click="deleteConfirm(props.item.id)">
            <v-icon >
              delete
            </v-icon>
          </a>
        </td>
      </template>
    </v-data-table>
    <delete-confirm name="meetup" v-model="showDelete"
                    v-on:confirm="acceptDelete" v-on:cancel="showDelete = false" />
    <v-snackbar v-model="snackbar" color="green" :timeout="3000" top>
      User Deleted Successfully!
    </v-snackbar>
  </div>
</template>

<script>
import http from '../helper/http';
import DeleteConfirm from '../components/DeleteConfirm.vue';

export default {
  name: 'users',
  components: { DeleteConfirm },
  data() {
    return {
      users: [],
      headers: [
        { text: 'Email', value: 'email' },
        { text: 'Registered', value: 'created_at' },
        { text: '' },
      ],
      showDelete: false,
      deleteId: null,
      snackbar: false,
    };
  },
  methods: {
    async LoadUsers() {
      const response = await http.get('/users');
      this.users = response.data.data;
    },
    deleteConfirm(id) {
      this.showDelete = true;
      this.deleteId = id;
    },
    async acceptDelete() {
      const response = await http.delete(`/users/${this.deleteId}`);
      if (response.status === 201) {
        this.users = this.users.filter(user => user.id !== this.deleteId);
        this.snackbar = true;
        this.showDelete = false;
      }
    },
  },
  mounted() {
    this.LoadUsers();
  },
};
</script>

<style scoped>

</style>
