<template>
  <div>
    <!-- search bars -->
    <div class="pt-5"></div>
    <b-row>
      <b-col lg="3">
        <b-input-group class="input-group-merge form_input_styles_group">
          <b-input-group-prepend is-text>
            <feather-icon class="search_icon_color" icon="SearchIcon" />
          </b-input-group-prepend>
          <b-form-input
            type="search"
            class="form_input_styles"
            v-model="searchcheck_no"
            placeholder="Type Check No...."
          ></b-form-input>
        </b-input-group>
      </b-col>

      <b-col lg="3">
        <!-- space only for mobile -->
        <div class="mobile_only_view">
          <div class="mt-2"></div>
        </div>
        <v-date-picker v-model="startdate" is-required>
          <template v-slot="{ inputValue, inputEvents }">
            <b-input-group class="input-group-merge form_input_styles_group">
              <b-input-group-prepend is-text>
                <b-img src="@/assets/images/icons/Vector (1).png"></b-img>
              </b-input-group-prepend>
              <b-form-input
                class="bg-white border px-2 py-1 rounded form_input_styles_date_1"
                :value="inputValue"
                v-on="inputEvents"
                placeholder="Start Eta"
              ></b-form-input>
            </b-input-group>
          </template> </v-date-picker
      ></b-col>
      <b-col lg="3">
        <!-- space only for mobile -->
        <div class="mobile_only_view">
          <div class="mt-2"></div>
        </div>
        <v-date-picker v-model="enddate" is-required>
          <template v-slot="{ inputValue, inputEvents }">
            <b-input-group class="input-group-merge form_input_styles_group">
              <b-input-group-prepend is-text>
                <b-img src="@/assets/images/icons/Vector (1).png"></b-img>
              </b-input-group-prepend>
              <b-form-input
                class="bg-white border px-2 py-1 rounded form_input_styles_date"
                :value="inputValue"
                v-on="inputEvents"
                placeholder="End Eta"
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

    <!-- table -->
    <div class="mt-5">
      <CheckTable :checkData="checks" @close="closeUppdateModal" />
    </div>

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
      searchcheck_no: "",
      openmodal: false,
      checks: [],
    };
  },
  components: {
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
    // all checks

    async getAllChecks() {
      // if seach data not clear geting profits with range
      if (
        (this.startdate !== "" && this.enddate !== "") ||
        this.searchcheck_no !== ""
      ) {
        const payload = {
          check_no: this.searchcheck_no,
          start_date: this.startdate,
          end_date: this.enddate,
        };

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
      }
      // if seach data clear geting pprofits  with not seach
      else if (
        (this.startdate === "" || this.enddate === "") &&
        this.searchcheck_no === ""
      ) {
        await this.$vs.loading({
          scale: 0.8,
        });
        await checkbookApi
          .allChecks()
          .then((res) => {
            this.checks = res.data.data;
            this.$vs.loading.close();
          })
          .catch(() => {
            this.$vs.loading.close();
          });
      }
    },
    // clear searhces

    async clear() {
      // clear start  and date

      this.startdate = "";
      this.enddate = "";
      this.searchcheck_no = "";

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
  },
};
</script>

<style></style>
