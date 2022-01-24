<template>
  <section id="about" class="about mt-5 section-bg">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Update user</h2>
      </div>
      <div class="row content justify-content-center">
        <div
          class="col-lg-4 col-sm-6 col-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
        <div class="form-group">
          <label for="document_id">Document ID</label>
            <input
              type="number"
              class="form-control"
              name="document_id"
              id="document_id"
              placeholder="Ex. 11111111111"
              v-model="document_id"
            />
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              class="form-control"
              id="name"
              placeholder="Ex. Carlos"
              v-model="name"
            />
          </div>
          <div class="form-group">
            <label for="last_name">Last name</label>
            <input
              type="text"
              class="form-control"
              name="last_name"
              id="last_name"
              placeholder="Ex. Jaramillo"
              v-model="last_name"
            />
          </div>
          <div class="text-center">
            <button id="sendB" @click="updateDraftUser">Update</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End About Us Section -->
</template>

<script>
import api from "@/api";

export default {
  name: "DraftUserUpdate",
  data() {
    return {
      name: undefined,
      last_name: undefined,
      document_id: undefined,
      id: undefined,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getDraftUser();
  },
  methods: {
    async getDraftUser() {
      try {
        const { data, error } = await api.getDraftUser(this.id);
        if (!error) {
          this.name = data.values.name;
          this.last_name = data.values.last_name;
          this.document_id = data.values.document_id;
        }
        throw error;
      } catch (error) {
        console.log(error);
      }
    },
    async updateDraftUser() {
      try {
        if(!this.document_id || !this.name || !this.last_name ){
          alert('All fields are required')
          return false;
        }
        const { data, error } = await api.updateDraftUser(this.id, this.document_id.toString(), this.name, this.last_name);
        if (!error) {
          alert("User updated")
          return this.$router.push({name: 'draft-user-list'})
        }
        throw error;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
  #sendB{
    cursor: pointer;
    background: #3498db;
    border: 0;
    padding: 10px 24px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
    -webkit-appearance: button;
  }
</style>