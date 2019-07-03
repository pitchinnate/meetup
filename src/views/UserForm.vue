<template>
  <div class='userForm'>
    <v-card color="secondary lighten-3" class="white--text">
      <v-card-title primary-title>
        <div style='width: 100%; text-align: left;'>
          <h3 class="headline mb-0">{{ title }}</h3>
          <v-card>
            <v-card-title primary-title>
              <div style='width: 100%;'>
                <v-form v-model="valid" @submit.prevent="submit" ref="form">
                  <v-container>
                    <v-layout>
                      <v-flex xs12 md6>
                        <v-text-field
                          v-model="form.email"
                          label="User Email"
                          :rules="[rules.required,rules.email]"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 md6>
                        <v-text-field
                          v-model="form.password"
                          :append-icon="show1 ? 'visibility_off' : 'visibility'"
                          :rules="[rules.required,rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          name="password"
                          label="Password"
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-form>
              </div>
            </v-card-title>
          </v-card>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" to="/users">Cancel</v-btn>
        <v-btn color="primary" @click="submit">Save</v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="snackbar" color="green" :timeout="3000" top>
      User Created Successfully!
    </v-snackbar>
  </div>
</template>

<script>
import rules from '../helper/rules';
import http from '../helper/http';

export default {
  name: 'user-form',
  data() {
    return {
      rules,
      id: this.$route.params.id,
      valid: false,
      form: {
        email: '',
        password: '',
      },
      show1: false,
      snackbar: false,
    };
  },
  async mounted() {
    if (this.id !== 'new') {
      const response = await http.get(`/users/${this.id}`);
      this.form = response.data.data;
    }
  },
  computed: {
    title() {
      if (this.id === 'new') {
        return 'New User';
      }
      return 'Update User';
    },
    editMode() {
      return !(this.id === 'new');
    },
  },
  methods: {
    async submit() {
      if (!this.$refs.form.validate()) {
        return;
      }
      let response;
      if (this.editMode) {
        response = await http.put(`/users/${this.id}`, this.form);
      } else {
        response = await http.post('/users', this.form);
      }
      if (response.status >= 200 && response.status < 300) {
        this.snackbar = true;
        this.$router.push({ name: 'users' });
      }
    },
  },
};
</script>

<style scoped>

</style>
