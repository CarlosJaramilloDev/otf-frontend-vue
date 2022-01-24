<template>
  <section id="about" class="about mt-5 section-bg">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Published User List</h2>
        <span class="float-right">
          <input
            class="input-sm"
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
          />
        </span>
      </div>
      <div class="row content">
        <div class="col-lg-12" data-aos="fade-up" data-aos-delay="150">
          <table class="table table-striped table-hover text-center align-middle">
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  <!-- End About Us Section -->
</template>

<script>
import api from "@/api";

export default {
  name: "PublishedUserList",
  data() {
    return {
        filter: '',
        dataList: [],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        const { data, error } = await api.getUsers();
        if (!error) {
            console.log(data.results)
          return (this.dataList = data.results);
        }
        throw error;
      } catch (error) {
        console.log(error.message);
        alert(error.message);
      }
    },
  },
  computed: {
    filteredUsers() {
    return this.dataList.filter(a => a.values.name.toLowerCase().includes(this.filter.toLowerCase()) || a.values.last_name.toLowerCase().includes(this.filter.toLowerCase()) || a.values.document_id.toLowerCase().includes(this.filter.toLowerCase()))
  }
  },
};
</script>
