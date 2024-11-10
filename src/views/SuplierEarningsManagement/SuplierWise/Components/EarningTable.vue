<template>
  <div>
    <b-table
      sticky-header=""
      responsive="sm"
      :items="suplierearnings"
      :fields="fields"
    >
      <template #cell(action)="data">
        <b-row no-gutters>
          <b-col lg="4">
            <b-button
              variant="none"
              @click="
                $router.push(
                  `/suplierwiseearnings/supliers/${data.item.id}/${data.item.name}/earnings`
                )
              "
            >
              <b-img
                width="17px"
                src="@/assets/images/icons/Group 117855.png"
              ></b-img>
            </b-button>
          </b-col>
        </b-row>
      </template>

      <template #cell(total_amount)="data">
        {{ getPriceWithOutCurrency(data.value) }}
      </template>

      <template #cell(received_payments)="data">
        {{ getPriceWithOutCurrency(data.value) }}
      </template>

      <template #cell(due_balance)="data">
        {{ getPriceWithOutCurrency(data.value) }}
      </template>
    </b-table>

    <b-modal
      ref="DetailsModal"
      :title="`View earnings for ${selectedItem.supliername}`"
      title-class="modal_title_color"
      hide-footer
      size="lg"
    >
      <ViewEarnings :selectedItem="selectedItem" />
    </b-modal>
  </div>
</template>

<script>
import reportApi from "@/Api/Modules/reports";
import ViewEarnings from "@/views/SuplierEarningsManagement/SuplierWise/Components/ViewEarnings.vue";
import {
  BModal,
  BCard,
  BTable,
  BBadge,
  BButton,
  BCol,
  BRow,
  BImg,
  BCardText,
  BAvatar,
  BLink,
  BContainer,
} from "bootstrap-vue";
export default {
  name: "EarningTable",
  components: {
    ViewEarnings,
    BCard,
    BModal,
    BImg,
    BButton,
    BCol,
    BBadge,
    BAvatar,
    BTable,
    BRow,
    BContainer,
    BCardText,
    BLink,
  },
  data() {
    return {
      show: false,
      selectedItem: {},
      fields: [
        {
          key: "name",
          label: "Suplier",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "total_amount",
          label: "Total Cost(Rs)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "received_payments",
          label: "Total Paid Amount(Rs)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "due_balance",
          label: "Total Due Balance(Rs)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "action",
          label: "Action",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "custom-cell-padding",
        },
      ],
      suplierearnings: [],
    };
  },
  async created() {
    await this.suplierViseSupliers();
  },

  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },

    openDetailsModal(data) {
      this.$refs.DetailsModal.show();
      this.selectedItem = data;
    },

    async suplierViseSupliers() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await reportApi.suplierViseSuplierEarnings();
      this.suplierearnings = res.data.data;
      this.$vs.loading.close();
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
