<template>
  <section id="about" class="about mt-5 section-bg">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Draft User List</h2>
        <span class="float-right">
          <input
            class="input-sm"
            id="filter"
            placeholder="Search..."
            type="text"
            v-model="filter"
          />
        </span>
      </div>
      <div class="row content">
        <div class="col-lg-12" data-aos="fade-up" data-aos-delay="150">
          <table
            class="table table-striped table-hover text-center align-middle"
          >
            <thead class="table-info">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Last name</th>
              <th scope="col">Document ID</th>
            </thead>
            <tbody>
              <tr v-for="u in filteredUsers" :key="u.id">
                <th scope="row">
                  {{ u.id }}
                </th>
                <td>
                  {{ u.values.name.toUpperCase() }}
                </td>
                <td>
                  {{ u.values.last_name.toUpperCase() }}
                </td>
                <td>
                  {{ u.values.document_id }}
                </td>
                <td>
                  <router-link
                    v-bind:to="{
                      name: 'draft-user-update',
                      params: { id: u.id },
                    }"
                  >
                    <button class="btn btn-warning mx-2">Update</button>
                  </router-link>
                  <button class="btn btn-danger"
                    @click="deleteDraftUser(u.id)"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="col-lg-6 pt-4 pt-lg-0"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <button class="btn-learn-more" @click="syncDraftTable">
            Push changes to server
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- End About Us Section -->
</template>

<script>
import api from "@/api";

export default {
  name: "DraftUserList",
  data() {
    return {
      filter: "",
      dataList: [],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        const { data, error } = await api.getDraftUsers();
        if (!error) {
          return (this.dataList = data.results);
        }
        throw error;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteDraftUser(id) {
      try {
        const { data, error } = await api.deleteDraftUser(id);
        if (!error) {
          alert("User deleted")
          return location.reload();
        }
        throw error;
      } catch (error) {
        console.log(error);
      }
    },
    async syncDraftTable() {
      try {
        const { data, error } = await api.syncDraftTable();
        if (!error) {
          alert("Successfully synchronized table")
          return this.$router.push({name: 'published-user-list'})
        }
        throw error;
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    filteredUsers() {
      return this.dataList.filter(
        (a) =>
          a.values.name.toLowerCase().includes(this.filter.toLowerCase()) ||
          a.values.last_name
            .toLowerCase()
            .includes(this.filter.toLowerCase()) ||
          a.values.document_id.toLowerCase().includes(this.filter.toLowerCase())
      );
    },
  },
};
</script>
