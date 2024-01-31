<template>
  <div>
    <div class="pt-3">
     <CommonHeader/>
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
  name: "shipmentmanagement",
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
  directives: {
    Ripple,
  },
};
</script>

<style></style>
