<template>
  <div>
    <b-row>
      <b-col>
        <div class="text-right">
          <b-button
            variant="none"
            class="button_color"
            style="width: 200px"
            @click="opencreatemodal()"
          >
            <div class="d-flex justify-content-start">
              <b-img
                style="padding-top: 6px"
                width="22px"
                height="30px"
                src="@/assets/images/icons/Icons Solid.png"
              ></b-img>

              <span class="button_text_styles pl-1">Create User</span>
            </div>
          </b-button>
        </div>
      </b-col>
    </b-row>

    <div class="mt-5">
      <UserTable />
    </div>

    <!--user  create modal -->

    <b-modal
      ref="createmodal"
      hide-footer
      scrollable
      title="Add User"
      title-class="modal_title_color"
    >
      <CreateUser />
    </b-modal>
  </div>
</template>

<script>
import UserTable from "@/views/UserManagement/Components/UserTable.vue";
import CreateUser from "@/views/UserManagement/Components/AddUsers.vue";
import Ripple from "vue-ripple-directive";
import {
  BFormInput,
  BModal,
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
      openmodal: false,
    };
  },
  created() {
    this.modalType = "Create User";
  },
  components: {
    CreateUser,
    BModal,
    BInputGroup,
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
  methods: {
    opencreatemodal() {
      this.$refs.createmodal.show();
    },
  },
};
</script>

<style></style>
