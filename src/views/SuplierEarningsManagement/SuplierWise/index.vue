<template>
  <div>
    <div class="pt-3">
      <CommonHeader />
    </div>
    <div class="pt-5">
      <b-card>
        <EarningTable />
      </b-card>
    </div>
  </div>
</template>

<script>
import EarningTable from "@/views/SuplierEarningsManagement/SuplierWise/Components/EarningTable.vue";
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
  name: "suplierearnings",
  data() {
    return {
      modalType: "",
    };
  },
  components: {
    BInputGroup,
    BImg,
    CommonHeader,
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
