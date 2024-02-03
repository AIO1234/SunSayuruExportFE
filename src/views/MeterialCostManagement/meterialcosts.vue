<template>
  <div>
    <div class="pt-3">
      <CommonHeader />
    </div>
    <div class="pt-5">
      <b-card>
        <MaterialCostsTable />
      </b-card>
    </div>
  </div>
</template>

<script>
import MaterialCostsTable from "@/views/MeterialCostManagement/Components/MaterialCostsTable.vue";
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
  name: "meterialcosts",
  components: {
    BInputGroup,
    CommonHeader,
    MaterialCostsTable,
    BImg,
    BCard,
    BButton,
    BInputGroupPrepend,
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
