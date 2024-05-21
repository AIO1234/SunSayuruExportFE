<template>
  <div>
    <!-- user table -->
    <b-card class="mt-5">
      <b-table sticky-header="" responsive="sm" :items="users" :fields="fields">
        <template #cell(action)="data">
          <b-row no-gutters>
            <b-col lg="4">
              <b-button variant="flat-none" @click="openUpdateModal(data.item)">
                <b-img
                  width="17px"
                  src="@/assets/images/icons/Group 101.png"
                ></b-img>
              </b-button>
            </b-col>
            <b-col lg="4"> </b-col>
          </b-row>
        </template>
      </b-table>
    </b-card>

    <b-modal
      ref="UpdateModal"
      title="Edit User"
      title-class="modal_title_color"
      hide-footer
    >
      <UserUpdateForm
        :selectedItem="selectedUser"
        @closemodal="closeUpdateModal"
      />
    </b-modal>
  </div>
</template>

<script>
import userApi from "@/Api/Modules/users";
import UserUpdateForm from "@/views/UserManagement/Components/UpdateUser.vue";
import {
  BModal,
  BCard,
  BTable,
  BBadge,
  BInputGroup,
  BInputGroupPrepend,
  BFormInput,
  BButton,
  BCol,
  BRow,
  BImg,
  BCardText,
  BAvatar,
  BLink,
  BContainer,
} from "bootstrap-vue";
export default {
  name: "UserTable",
  components: {
    UserUpdateForm,
    BFormInput,
    BCard,
    BModal,
    BImg,
    BButton,
    BCol,
    BBadge,
    BAvatar,
    BTable,
    BRow,
    BContainer,
    BCardText,
    BLink,
    BInputGroup,
    BInputGroupPrepend,
  },
  data() {
    return {
      show: false,
      selectedUser: {},
      fields: [
        {
          key: "name",
          label: "User Name",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "role_name",
          label: "User Type",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "email",
          label: "Email",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "phone",
          label: "Mobile",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "action",
          label: "Action",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "td-style",
        },
      ],
      users: [],
    };
  },
  async created() {
    await this.allUsers();
  },

  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },
    // open update modal
    openUpdateModal(data) {
      this.$refs.UpdateModal.show();
      this.selectedUser = data;
    },
    async closeUpdateModal() {
      this.$refs.UpdateModal.hide();
      await this.allUsers();
    },
    // all users
    async allUsers() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await userApi.allUsers();
      this.users = res.data.data;
      this.$vs.loading.close();
    },
    // delete users
    async deletUser(id) {
      await this.$vs.loading({
        scale: 0.8,
      });

      await userApi
        .deleteUser(id)
        .then(() => {
          this.$vs.loading.close();
        })
        .catch(() => {
          this.$vs.loading.close();
        });
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
