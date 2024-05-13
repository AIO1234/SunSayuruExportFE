<template>
  <div>
    <b-row>
      <b-col>
        <div class="text-right">
          <b-button
            variant="none"
            class="button_color"
            style="width: 200px"
            @click="$router.push(`/createshipment/${country.id}/${buyer.id}`)"
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
