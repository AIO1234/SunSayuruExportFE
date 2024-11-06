<template>
  <div>
    <!-- Airfreight table -->
    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="checkData"
        :fields="fields"
        per-page="10"
        :current-page="currentPage"
      >
        <template #cell(type)="data">
          <span v-if="data.value === 'Suplier_Check'"> Suplier Check </span>
          <span v-if="data.value === 'Airfreight_Check'">
            Airfreight Check
          </span>
          <span v-else-if="data.value === 'Additional_Check'">
            Additional Check
          </span>
        </template>

        <template #cell(comment)="data">
          <span v-if="data.value !== ''">
            {{ data.value }}
          </span>
          <span v-else> N/A </span>
        </template>

        <template #cell(payment_no)="data">
          <span v-if="data.item.suplier_payment_no !== null">
            {{ data.item.suplier_payment_no }}
          </span>
          <span v-else-if="data.item.airfreight_payment_no !== null">
            {{ data.item.airfreight_payment_no }}
          </span>
          <span v-else-if="data.item.additional_payment_no !== null">
            {{ data.item.additional_payment_no }}
          </span>

          <span v-else> N/A </span>
        </template>

        <template #cell(declined_check_no)="data">
          <span v-if="data.value !== ''">
            {{ data.value }}
          </span>
          <span v-else> N/A </span>
        </template>

        <template #cell(action)="data">
          <b-row no-gutters>
            <b-col lg="2">
              <b-button variant="flat-none" @click="openUpdateModal(data.item)">
                <b-img
                  width="17px"
                  src="@/assets/images/icons/Group 101.png"
                ></b-img>
              </b-button>
            </b-col>
            <b-col lg="2"> </b-col>
          </b-row>
        </template>
      </b-table>

      <b-row>
        <b-col lg="4"></b-col>
        <b-col lg="8">
          <div class="mt-1">
            <b-pagination
              v-model="currentPage"
              :total-rows="checkData.length"
              per-page="10"
              first-text="First"
              prev-text="Prev"
              next-text="Next"
              last-text="Last"
            ></b-pagination>
          </div>
        </b-col>
      </b-row>
    </b-card>

    <b-modal
      ref="UpdateModal"
      title="Edit Check"
      title-class="modal_title_color"
      hide-footer
      no-close-on-backdrop
    >
      <CheckEdit :selectedItem="selectedCheck" @close="closeModal" />
    </b-modal>
  </div>
</template>
<script>
import CheckEdit from "./Edit.vue";
import {
  BModal,
  BCard,
  BTable,
  BBadge,
  BInputGroup,
  BInputGroupPrepend,
  BFormInput,
  BButton,
  BCol,
  BRow,
  BImg,
  BCardText,
  BAvatar,
  BLink,
  BContainer,
  BPagination,
} from "bootstrap-vue";
export default {
  name: "CheckBookTable",
  components: {
    BFormInput,
    BCard,
    BPagination,
    CheckEdit,
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
    BInputGroup,
    BInputGroupPrepend,
  },

  data() {
    return {
      selectedCheck: {},
      currentPage: 1,
      fields: [
        {
          key: "check_no",
          label: "Check No",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "td-style",
        },

        {
          key: "check_date",
          label: "Check Date",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "td-style",
        },

        {
          key: "amount",
          label: "Amount",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "td-style",
        },

        {
          key: "comment",
          label: "Comment",
          sortable: true,
          thStyle: { width: "30%" },
          // tdClass: "td-style",
        },
        {
          key: "status",
          label: "Status",
          sortable: true,
          thStyle: { width: "30%" },
          // tdClass: "td-style",
        },

        {
          key: "type",
          label: "Check Type",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "td-style",
        },

        {
          key: "payment_no",
          label: "Payment No",
          sortable: true,
          thStyle: { width: "25%" },
          // tdClass: "td-style",
        },

        {
          key: "declined_check_no",
          label: "Declined Check No",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "td-style",
        },

        {
          key: "action",
          label: "Action",
          sortable: true,
          thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
      ],
    };
  },

  props: {
    checkData: Array,
  },

  methods: {
    // open edit modal
    openUpdateModal(item) {
      this.$refs.UpdateModal.show();
      this.selectedCheck = item;
    },

    // close edit modal
    async closeModal() {
      this.$refs.UpdateModal.hide();
      this.$emit("close", true);
    },
  },
};
</script>
