<template>
  <div>
    <div class="pt-3">
      <CommonHeaderNew />
    </div>
    <div class="pt-5">
      <b-card>
        <EarningTable />
      </b-card>
    </div>
  </div>
</template>

<script>
import EarningTable from "@/views/SuplierEarningsManagement/ShipmentWise/Components/EarningTable.vue";
import CommonHeaderNew from "@/Components/CommonHeaderNew.vue";
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
  name: "suplierearnings",
  data() {
    return {
      modalType: "",
    };
  },
  components: {
    BInputGroup,
    BImg,
    CommonHeaderNew,
    BCard,
    BButton,
    BInputGroupPrepend,
    EarningTable,
    BFormInput,
    BRow,
    BCol,
  },
  created() {
    this.modalType = "Earnings Modal";
  },
  directives: {
    Ripple,
  },
};
</script>

<style></style>
