<template>
  <div>
    <validation-observer ref="materialValidation" #default="{ invalid }">
      <br />
      <h2 class="shipment_create_header">Material cost</h2>
      <div class="pt-3">
        <div>
          <!-- Material  Cost Form -->
          <b-form
            ref="form"
            class="repeater-form"
            @submit.prevent="repeateAgain"
          >
            <!-- Row Loop -->
            <b-row
              class="pt-2"
              v-for="(item, index) in materialcosts"
              :id="item.id"
              :key="item.id"
              ref="row"
            >
              <!-- Description -->
              <b-col lg="3">
                <b-form-group
                  label="Description*"
                  label-class="form_label_class"
                >
                  <validation-Provider
                    name="Description"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <b-form-input
                      placeholder="Enter description"
                      v-model="item.description"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </validation-Provider>
                </b-form-group>
              </b-col>

              <!-- quantity -->
              <b-col>
                <b-form-group label="Quantity*" label-class="form_label_class">
                  <validation-Provider
                    name="quantity"
                    rules="required|integer"
                    v-slot="{ errors }"
                  >
                    <b-form-input
                      type="number"
                      placeholder="Enter quantity"
                      v-model="item.quantity"
                      @input="changeAmount(item.unitprice, item.quantity, index)"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </validation-Provider>
                </b-form-group>
              </b-col>

              <!-- unit price -->
              <b-col lg="3">
                <b-form-group
                  label="Unit Price*"
                  label-class="form_label_class"
                >
                  <validation-Provider
                    name="unit price"
                    rules="required|integer"
                    v-slot="{ errors }"
                  >
                    <b-form-input
                      placeholder="Enter Unit Price"
                      v-model="item.unitprice"
                      @input="changeAmount(item.unitprice, item.quantity, index)"
                      type="number"
                      step="0.00"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </validation-Provider>
                </b-form-group>
              </b-col>

              <!--Amount -->
              <b-col lg="3">
                <b-form-group label="Amount*" label-class="form_label_class">
                  <b-form-input
                    readonly
                    placeholder="Enter amount"
                    type="number"
                    step="0.00"
                    v-model="item.amount"
                  />
                </b-form-group>
              </b-col>

              <b-col lg="1" class="minus_button_margin">
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
            variant="none"
            @click="repeateAgain1()"
            class="form_submit_button"
          >
            <span class="button_text_styles">Add cost</span>
          </b-button>
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

        <b-col lg="6" class="text-right">
          <b-button
            variant="none"
            class="form_submit_button"
            :disabled="invalid"
          >
            <span class="button_text_styles" @click="next()">Next</span>
          </b-button></b-col
        >
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
  BTable,
  BBadge,
  BButton,
  BImg,
  BCol,
  BRow,
  BFormFile,
  BCardText,
  BLink,
  BFormInput,
  BContainer,
} from "bootstrap-vue";
import mixin from "@/mixins/commonmixins";
export default {
  data() {
    return {
      nextTodoId: 1,
      form: {},
      materialcosts: [
        {
          id: 1,
          description: "",
          quantity: "",
          amount: "",
        },
      ],
    };
  },
  components: {
    BCard,
    BImg,
    BFormRadio,
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
    await this.showMaterialCosts();
  },
  methods: {
    //  show current saves shipment

    async showMaterialCosts() {
      const payload = {
        shipment_id: this.$route.params.shipment_id,
        show: "material_costs",
      };
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await shipmentApi.showShipment(payload);
      this.materialcosts = res.data.data.material_costs;
      this.$vs.loading.close();
    },

    // calculate ampunt
    changeAmount(unitprice, quantity, index) {
      this.materialcosts[index].amount =
        mixin.methods.getPriceWithOutCurrency(unitprice) *
        mixin.methods.getPriceWithOutCurrency(quantity);

      this.materialcosts[index].amount = mixin.methods.getPriceWithOutCurrency(
        this.materialcosts[index].amount
      );
    },
    // next button
    async next() {
      if (await this.$refs.materialValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        });

        this.form.materialcosts = this.materialcosts;
        this.form.shipment_id = this.$route.params.shipment_id;
        await shipmentApi
          .addShipmentMaterials(this.form)
          .then(() => {
            this.$vs.loading.close();
          })
          .catch(() => {
            this.$vs.loading.close();
          });

        this.$emit("sendComponentName", "MaterialCostForm");
      }
    },
    // backn button
    back() {
      this.$emit("DirectBack", "");
    },
    // repeat button
    repeateAgain1() {
      this.materialcosts.push({
        id: (this.nextTodoId += this.nextTodoId),
        description: "",
        quantity: "",
        amount: "",
        unitprice: "",
      });
    },
    // remove item
    removeItem(index) {
      this.materialcosts.splice(index, 1);
    },
  },
};
</script>
