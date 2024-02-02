<template>
  <div>
    <div class="pt-3">
     <CommonHeader :modalType="modalType"/>
    </div>
    <div class="pt-5">
      <b-card>
        <PriceRateTable />
      </b-card>
    </div>
  </div>
</template>

<script>
import PriceRateTable from "@/views/PriceRateManagement/Components/PriceRateTable.vue";
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
  name: "pricerates",
  data() {
    return {
      modalType: "",
    };
  },
  components: {
    CommonHeader,
    BInputGroup,
    PriceRateTable,
    BImg,
    BCard,
    BButton,
    BInputGroupPrepend,
    BFormInput,
    BRow,
    BCol,
  },
  created() {
    this.modalType = "Create Price List";
  },
  directives: {
    Ripple,
  },
};
</script>

<style></style>
