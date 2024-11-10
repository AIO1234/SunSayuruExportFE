<template>
  <div>
    <!-- airfreight table view -->
    <b-card class="mt-5">
      <AirfreightBillTable :bills="airfreightbills" />
    </b-card>
  </div>
</template>
<script>
import AirfreightBillTable from "./Components/AirfreightTable.vue";
import reportApi from "@/Api/Modules/reports";
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
  data() {
    return {
      airfreightbills: [],
    };
  },
  async created() {
    await this.getAirfreightBills();
  },
  methods: {
    async getAirfreightBills() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await reportApi.airfreightMainBills();
      this.airfreightbills = res.data.data;
      this.$vs.loading.close();
    },
  },
};
</script>
