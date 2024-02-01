<template>
  <div>
    <div class="pt-3">
      <CommonHeader :modalType="modalType" />
    </div>
    <div class="pt-5">
      <b-card>
        <UserTable />
      </b-card>
    </div>
  </div>
</template>

<script>
import UserTable from "@/views/UserManagement/Components/UserTable.vue";
import CommonHeader from "@/Components/CommonHeader.vue";
import Ripple from "vue-ripple-directive";
import {
  BFormInput,
  BRow,
  BCard,
  BImg,
  BCol,
  BButton,
  BInputGroup,
  BInputGroupPrepend,
} from "bootstrap-vue";
export default {
  name: "users",
  data() {
    return {
      modalType: "",
    };
  },
  created() {
    this.modalType = "Create User";
  },
  components: {
    BInputGroup,
    CommonHeader,
    BImg,
    BCard,
    BButton,
    BInputGroupPrepend,
    UserTable,
    BFormInput,
    BRow,
    BCol,
  },
  directives: {
    Ripple,
  },
};
</script>

<style></style>
