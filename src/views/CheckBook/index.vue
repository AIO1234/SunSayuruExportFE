<template>
  <div>
    <!-- search bars -->
    <div class="pt-5"></div>

    <!-- search bank  -->
    <b-row>
      <b-col lg="3">
        <b-input-group class="input-group-merge form_input_styles_group">
          <b-input-group-prepend is-text>
            <feather-icon class="search_icon_color" icon="SearchIcon" />
          </b-input-group-prepend>
          <b-form-input
            type="search"
            class="form_input_styles"
            v-model="filter.bank_name"
            placeholder="Type Bank Name...."
          ></b-form-input>
        </b-input-group>
      </b-col>

      <!-- checkbook number -->
      <b-col lg="3">
        <b-input-group class="input-group-merge form_input_styles_group">
          <b-input-group-prepend is-text>
            <feather-icon class="search_icon_color" icon="SearchIcon" />
          </b-input-group-prepend>
          <b-form-input
            type="search"
            class="form_input_styles"
            v-model="filter.checkbook_no"
            placeholder="Type Check Book No...."
          ></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
    <div class="pt-2"></div>
    <b-row>
      <b-col lg="3">
        <b-input-group class="input-group-merge form_input_styles_group">
          <b-input-group-prepend is-text>
            <feather-icon class="search_icon_color" icon="SearchIcon" />
          </b-input-group-prepend>
          <b-form-input
            type="search"
            class="form_input_styles"
            v-model="filter.searchcheck_no"
            placeholder="Type Check No...."
          ></b-form-input>
        </b-input-group>
      </b-col>

      <b-col lg="3">
        <!-- space only for mobile -->
        <div class="mobile_only_view">
          <div class="mt-2"></div>
        </div>
        <v-date-picker v-model="filter.startdate" is-required>
          <template v-slot="{ inputValue, inputEvents }">
            <b-input-group class="input-group-merge form_input_styles_group">
              <b-input-group-prepend is-text>
                <b-img src="@/assets/images/icons/Vector (1).png"></b-img>
              </b-input-group-prepend>
              <b-form-input
                class="bg-white border px-2 py-1 rounded form_input_styles_date_1"
                :value="inputValue"
                v-on="inputEvents"
                placeholder="Start Date"
              ></b-form-input>
            </b-input-group>
          </template> </v-date-picker
      ></b-col>
      <b-col lg="3">
        <!-- space only for mobile -->
        <div class="mobile_only_view">
          <div class="mt-2"></div>
        </div>
        <v-date-picker v-model="filter.enddate" is-required>
          <template v-slot="{ inputValue, inputEvents }">
            <b-input-group class="input-group-merge form_input_styles_group">
              <b-input-group-prepend is-text>
                <b-img src="@/assets/images/icons/Vector (1).png"></b-img>
              </b-input-group-prepend>
              <b-form-input
                class="bg-white border px-2 py-1 rounded form_input_styles_date"
                :value="inputValue"
                v-on="inputEvents"
                placeholder="End Date"
              ></b-form-input>
            </b-input-group>
          </template>
        </v-date-picker>
      </b-col>
      <b-col lg="2">
        <b-button
          @click="getAllChecks()"
          variant="none"
          class="check_search_button"
          ><span class="search_text">Search</span></b-button
        >
      </b-col>
      <b-col lg="1">
        <b-button @click="clear()" variant="none" class="check_search_button"
          ><span class="search_text">Clear</span></b-button
        >
      </b-col>
    </b-row>
    <div class="mt-2"></div>
    <b-row>
      <b-col lg="3"></b-col>
      <b-col lg="3"></b-col>
      <b-col lg="3"></b-col>
      <b-col lg="3">
        <b-button
          @click="opencheckmodel()"
          variant="none"
          class="check_search_button"
          ><span class="search_text">Check Book Add</span></b-button
        >
      </b-col>
    </b-row>

    <!-- table -->
    <div class="mt-5">
      <CheckTable :checkData="checks" @close="closeUppdateModal" />
    </div>

    <!-- create check modal -->

    <b-modal
      ref="createcheckmodal"
      hide-footer
      :title="checkTitle"
      title-class="modal_title_color"
      no-close-on-backdrop
    >
      <SuplierCheckCreate @close="closecheckModal" />
    </b-modal>

    <!--Airfreight create modal -->

    <!-- <b-modal
      ref="createmodal"
      hide-footer
      scrollable
      title="Add Airfreight"
      title-class="modal_title_color"
      no-close-on-backdrop
    >
      <AddAirfreight @close="closeModal" />
    </b-modal> -->
  </div>
</template>
<script>
import CheckTable from "./Components/Table.vue";
import Ripple from "vue-ripple-directive";
import checkbookApi from "@/Api/Modules/checkbook";
import SuplierCheckCreate from "@/views/CheckBook/Components/Create.vue";
import {
  BFormInput,
  BModal,
  BRow,
  BCard,
  BImg,
  BCol,
  BButton,
  BInputGroup,
  BInputGroupPrepend,
} from "bootstrap-vue";
export default {
  name: "countries",
  data() {
    return {
      openmodal: false,
      checks: [],

      // global filter
      filter: {
        searchcheck_no: "",
        checkbook_no: "",
        bank_name: "",
        startdate: "",
        enddate: "",
       
      },
    };
  },
  components: {
    SuplierCheckCreate,
    CheckTable,
    BModal,
    BInputGroup,
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
  async created() {
    await this.getAllChecks();
  },
  methods: {
    formatDate(date) {
      if (!date) return "";
      const d = new Date(date);
      return d.toISOString().split("T")[0]; // YYYY-MM-DD
    },
    // all checks
    async getAllChecks() {
      // if seach data not clear geting profits with range

      const payload = {
        "check__books.check_no": this.filter.searchcheck_no,
        search_dates: `${this.formatDate(this.filter.startdate)},${this.formatDate(this.filter.enddate)}`,
        "check__books.bank_name": this.filter.bank_name,
        "check__books.checkbook_no": this.filter.checkbook_no,
      };

     // console.log(this.startdate);

      await this.$vs.loading({
        scale: 0.8,
      });
      await checkbookApi
        .allChecks(payload)
        .then((res) => {
          this.checks = res.data.data;
          this.$vs.loading.close();
        })
        .catch(() => {
          this.$vs.loading.close();
        });
    },
    // clear searhces

    async clear() {
      // clear start  and date

      this.filter.startdate = null;
      this.filter.enddate = null;
      this.filter.searchcheck_no = "";
      this.filter.checkbook_no = "";
      this.filter.bank_name = "";

      await this.getAllChecks();
    },
    // open create modal
    opencreatemodal() {
      this.$refs.createmodal.show();
    },

    // close create modal

    closeModal() {
      this.$refs.createmodal.hide();
    },

    async closeUppdateModal() {
      await this.getAllChecks();
    },

    // Open new check model
    opencheckmodel() {
      // open add chcek modal
      this.$refs.createcheckmodal.show();
    },

    // close new check add modal
    closecheckModal() {
      this.$refs.createcheckmodal.hide();
    },
  },
};
</script>

<style></style>
