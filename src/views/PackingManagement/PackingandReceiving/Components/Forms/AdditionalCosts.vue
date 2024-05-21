<template>
  <div>
    <validation-observer ref="additionalValidation" #default="{ invalid }">
      <br />
      <h2 class="shipment_create_header">Airfreight Cost</h2>

      <b-form-group label="Airfreight Cost*" label-class="form_label_class">
        <validation-Provider name="Airfreight Cost" v-slot="{ errors }">
          <b-form-input
            type="number"
            step="0.01"
            placeholder="Enter Airfreight Cost"
            v-model="form.airfreight_cost"
          ></b-form-input>
          <span class="text-danger">{{ errors[0] }}</span>
        </validation-Provider>
      </b-form-group>
      <br /><br />
      <h2 class="shipment_create_header">Additional cost</h2>
      <br /><br />
      <div>
        <div>
          <!-- additional Cost Form -->
          <b-form
            ref="form"
            :style="{ height: trHeight }"
            class="repeater-form"
            @submit.prevent="repeateAgain"
          >
            <!-- Row Loop -->
            <b-row
              class="pt-2"
              v-for="(item, index) in additionalcosts"
              :id="item.id"
              :key="item.id"
              ref="row"
            >
              <!-- Description -->
              <b-col lg="5">
                <b-form-group
                  label="Description*"
                  label-class="form_label_class"
                >
                  <validation-Provider name="Description" v-slot="{ errors }">
                    <b-form-input
                      placeholder="Enter description"
                      v-model="item.description"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </validation-Provider>
                </b-form-group>
              </b-col>

              <!--Amount -->
              <b-col lg="5">
                <b-form-group label="Amount*" label-class="form_label_class">
                  <validation-Provider name="Amount" v-slot="{ errors }">
                    <b-form-input
                      placeholder="Enter amount"
                      v-model="item.amount"
                      type="number"
                      step="0.00"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </validation-Provider>
                </b-form-group>
              </b-col>

              <b-col lg="2" class="text-right minus_button_margin">
                <b-button variant="none" @click="removeItem(index)">
                  <b-img src="@/assets/images/Group.png"></b-img>
                </b-button>
              </b-col>
              <!-- Remove Button -->
            </b-row>
          </b-form>
        </div>
        <br />
        <div class="text-right">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="none"
            @click="repeateAgain1()"
            class="form_submit_button"
          >
            <span class="button_text_styles">Add cost</span>
          </b-button>
        </div>

        <div class="pt-5 d-flex justify-content-center">
          <b-button
            class="additionalcost_submit_button"
            variant="none"
            @click="submitData()"
            ><span class="additionalcost_submit_button_text"
              >Submit</span
            ></b-button
          >
        </div>
      </div>

      <div class="pt-5"></div>
      <div class="pt-3"></div>
      <b-row>
        <b-col lg="6">
          <b-button variant="none" class="backbutton" @click="back()">
            <span class="back_button_text_styles">Back</span>
          </b-button>
        </b-col>

        <b-col lg="6" class="text-right"> </b-col>
      </b-row>
    </validation-observer>
  </div>
</template>
<script>
import vSelect from "vue-select";
import shipmentApi from "@/Api/Modules/shipments.js";
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import {
  BCard,
  BFormRadio,
  BFormGroup,
  BInputGroup,
  BFormTextarea,
  BForm,
  BImg,
  BTable,
  BBadge,
  BButton,
  BCol,
  BRow,
  BFormFile,
  BCardText,
  BLink,
  BFormInput,
  BContainer,
} from "bootstrap-vue";
export default {
  data() {
    return {
      form: {},
      nextTodoId: 1,
      additionalcosts: [
        {
          id: 1,
          description: "",
          amount: "",
          prevHeight: 0,
        },
      ],
    };
  },
  components: {
    BCard,
    BFormRadio,
    BImg,
    BFormFile,
    BForm,
    BFormInput,
    ValidationObserver,
    ValidationProvider,
    BFormTextarea,
    BFormTextarea,
    BFormGroup,
    BInputGroup,
    vSelect,
    BButton,
    BCol,
    BBadge,
    BTable,
    BRow,
    BContainer,
    BCardText,
    BLink,
  },
  async created() {
    await this.showAdditionalCosts();
  },
  methods: {
    //  show current saves additional costs

    async showAdditionalCosts() {
      const payload = {
        shipment_id: localStorage.currentShipmentId,
        show: "additional_costs",
      };
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await shipmentApi.showShipment(payload);
      this.additionalcosts = res.data.data.additional_costs;
      this.form.airfreight_cost = res.data.data.airfreid_cost;
      this.$vs.loading.close();
    },

    // submit data
    async submitData() {
      if (await this.$refs.additionalValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        });

        this.form.additionalcosts = this.additionalcosts;
        this.form.shipment_id = localStorage.getItem("currentShipmentId");
        await shipmentApi
          .addShipmentAditionalCosts(this.form)
          .then(() => {
            this.$vs.loading.close();
          })
          .catch(() => {
            this.$vs.loading.close();
          });
      }
    },
    // back button
    back() {
      this.$emit("DirectBack", "");
    },

    // repeat button
    repeateAgain1() {
      this.additionalcosts.push({
        id: (this.nextTodoId += this.nextTodoId),
        description: "",
        amount: "",
      });
    },
    // remove item
    removeItem(index) {
      this.additionalcosts.splice(index, 1);
    },
  },
};
</script>
