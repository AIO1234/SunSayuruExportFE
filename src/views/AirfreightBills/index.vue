<template>
  <div>
    <!-- airfreight table view -->
    <b-card class="mt-5">
      <AirfreightBillTable
        :bills="airfreightbills"
        :airfreight_lkr_due_balance_sum="airfreight_lkr_due_balance_sum"
        :airfreight_usd_due_balance_sum="airfreight_usd_due_balance_sum"
      />
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
      airfreight_lkr_due_balance_sum: "",
      airfreight_usd_due_balance_sum: "",
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
      this.airfreightbills = res.data.data.allairfreights;
      this.airfreight_lkr_due_balance_sum = res.data.data.airfreightlkrdutotal;
      this.airfreight_usd_due_balance_sum = res.data.data.airfreightusddutotal;
      this.$vs.loading.close();
    },
  },
};
</script>
