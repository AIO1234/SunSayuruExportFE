<template>
  <div class="pt-3">
    <!-- search bar -->
    <b-row>
      <b-col lg="4">
        <b-input-group class="input-group-merge form_input_styles_group">
          <b-input-group-prepend is-text>
            <feather-icon class="search_icon_color" icon="SearchIcon" />
          </b-input-group-prepend>
          <b-form-input
            type="search"
            class="form_input_styles"
            placeholder="Search Company Name...."
          ></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>

    <!-- airfreight table view -->

    <b-card class="mt-5"> <AirfreightBillTable /> </b-card>
  </div>
</template>
<script>
import AirfreightBillTable from "./Components/AirfreightTable.vue";
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
  components: {
    AirfreightBillTable,
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
  },
};
</script>
