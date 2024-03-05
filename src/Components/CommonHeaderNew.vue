<template>
  <div>
    <b-row>
      <b-col lg="3" cols="6">
        <b-input-group class="input-group-merge form_input_styles_group">
          <b-input-group-prepend is-text>
            <feather-icon class="search_icon_color" icon="SearchIcon" />
          </b-input-group-prepend>
          <b-form-input
            type="search"
            class="form_input_styles"
            placeholder="Type here...."
          ></b-form-input>
        </b-input-group>
      </b-col>
      <div class="pt-5 mobile_only_view"></div>
      <b-col lg="2">
        <v-date-picker v-model="startdate" is-required>
          <template v-slot="{ inputValue, inputEvents }">
            <b-input-group class="input-group-merge form_input_styles_group">
              <b-input-group-prepend is-text>
                <b-img src="@/assets/images/icons/Vector (1).png"></b-img>
              </b-input-group-prepend>
              <b-form-input
                class="bg-white border px-2 py-1 rounded form_input_styles_date"
                :value="inputValue"
                v-on="inputEvents"
                placeholder="16 Feb 2024 "
              ></b-form-input>
            </b-input-group>
          </template>
        </v-date-picker>
      </b-col>
      <div class="pt-5 mobile_only_view"></div>
      <b-col lg="2">
        <v-date-picker v-model="enddate" is-required>
          <template v-slot="{ inputValue, inputEvents }">
            <b-input-group class="input-group-merge form_input_styles_group">
              <b-input-group-prepend is-text>
                <b-img src="@/assets/images/icons/Vector (1).png"></b-img>
              </b-input-group-prepend>
              <b-form-input
                class="bg-white border px-2 py-1 rounded form_input_styles_date"
                :value="inputValue"
                v-on="inputEvents"
                placeholder="16 Feb 2024 "
              ></b-form-input>
            </b-input-group>
          </template>
        </v-date-picker>
      </b-col>
      <div class="pt-5 mobile_only_view"></div>
    </b-row>

    <div class="pt-3">
      <b-row>
        <b-col lg="4" cols="12"> </b-col>
        <b-col lg="8" cols="12">
          <div class="text-right">
            <b-button
              variant="outline-primary"
              class="export_button"
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            >
              <div class="d-flex justify-content-center">
                <b-row>
                  <b-col lg="2" cols="2">
                    <b-img
                      width="10px"
                      src="@/assets/images/icons/Vector.png"
                    ></b-img>
                  </b-col>
                  <b-col lg="2" cols="2">
                    <span class="export_button_text">Export</span>
                  </b-col>
                </b-row>
              </div>
            </b-button>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import CreateUserForm from "@/views/UserManagement/Components/AddUsers.vue";
import CreatePriceList from "@/views/PriceRateManagement/Components/CreatePricelist.vue";
import CreateShipment from "@/views/ShipmentManagement/Components/CreateShipment.vue";
import Ripple from "vue-ripple-directive";
import {
  BFormInput,
  BRow,
  BModal,
  BTab,
  BTabs,
  BCard,
  BCalendar,
  BFormDatepicker,
  BImg,
  BCol,
  BButton,
  BInputGroup,
  BInputGroupPrepend,
} from "bootstrap-vue";
export default {
  name: "CommonHeader",
  components: {
    BInputGroup,
    BTab,
    BTabs,
    BCalendar,
    BFormDatepicker,
    CreateShipment,
    BModal,
    CreateUserForm,
    CreatePriceList,
    BImg,
    BCard,
    BButton,
    BInputGroupPrepend,
    BFormInput,
    BRow,
    BCol,
  },
  props: {
    modalType: String,
  },
  directives: {
    Ripple,
  },
  methods: {
    openModal() {
      this.$refs.CreateModal.show();
    },
  },
};
</script>

<style lang="scss">
.modal_title_color {
  color: #0052ba;
}
</style>
