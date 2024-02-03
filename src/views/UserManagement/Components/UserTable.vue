<template>
  <div>
    <b-table sticky-header="" responsive="sm" :items="items" :fields="fields">
      <template #cell(action)="data">
        <b-row>
          <b-col lg="2">
            <b-button
              variant="flat-none"
              @click="openUpdateModal(data.item)"
              class="btn-icon"
            >
              <b-img
                width="17px"
                src="@/assets/images/icons/Group 101.png"
              ></b-img>
            </b-button>
          </b-col>
          <b-col lg="2">
            <b-button variant="none">
              <b-img
                width="17px"
                src="@/assets/images/icons/Group 59.png"
              ></b-img>
            </b-button>
          </b-col>
        </b-row>
      </template>
    </b-table>

    <b-modal
      ref="UpdateModal"
      title="Edit User"
      title-class="modal_title_color"
      hide-footer
    >
      <UserUpdateForm :selectedItem="selectedUser" />
    </b-modal>
  </div>
</template>

<script>
import UserUpdateForm from "@/views/UserManagement/Components/UpdateUser.vue";
import {
  BModal,
  BCard,
  BTable,
  BBadge,
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
  },
  data() {
    return {
      show: false,
      selectedUser: {},
      fields: [
        {
          key: "referenceid",
          label: "User Id",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "name",
          label: "User Name",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "type",
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
          key: "mobile",
          label: "Mobile",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        // {
        //   key: "country",
        //   label: "Country",
        //   sortable: true,
        //   // thStyle: { width: "2%" },
        //   // tdClass: "td-style",
        // },
        {
          key: "action",
          label: "Action",
          sortable: true,

          // tdClass: "td-style",
        },
      ],
      items: [
        {
          referenceid: "U001",
          name: "Sithum Perera",
          type: "Supplier",
          email: "sithum@gmail.com",
          mobile: "+94768559632",
          country: "Sri Lanka",
        },
        {
          referenceid: "U002",
          name: "Sithum Perera",
          type: "Supplier",
          email: "sithum@gmail.com",
          mobile: "+94768559632",
          country: "Sri Lanka",
        },
        {
          referenceid: "U003",
          name: "Sithum Perera",
          type: "Supplier",
          email: "sithum@gmail.com",
          mobile: "+94768559632",
          country: "Sri Lanka",
        },
      ],
    };
  },
  async created() {},

  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },
    openUpdateModal(data) {
      this.$refs.UpdateModal.show();
      this.selectedUser = data;
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
