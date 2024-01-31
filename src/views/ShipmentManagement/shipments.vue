<template>
  <div>
    <div class="pt-3">
      <CommonHeader />
    </div>
    <div class="pt-5">
      <b-card>
        <ShipmentTable />
      </b-card>
    </div>
  </div>
</template>

<script>
import ShipmentTable from "@/views/ShipmentManagement/Components/ShipmentTable.vue";
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
    BInputGroup,
    CommonHeader,
    ShipmentTable,
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
