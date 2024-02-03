<template>
  <div>
    <div>
      <b-form @submit.prevent>
        <validation-observer ref="ShipmentEditValidation">
          <b-row>
            <b-col lg="6">
              <b-row>
                <b-col lg="10" class="mb-1">
                  <b-form-group
                    label="shipment number*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="shipment number"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <b-form-input
                        placeholder="Enter shipment number"
                        v-model="form.shipmentid"
                      ></b-form-input>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <b-col lg="10" class="mb-1">
                  <b-form-group
                    label="Consignee*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="Consignee"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <v-select
                        v-model="selected"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        label="title"
                        :options="options"
                      />

                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <b-col lg="10" class="mb-1">
                  <b-form-group
                    label="Packing IDs*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="Packing IDs"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <v-select
                        multiple
                        v-model="selected1"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        label="title"
                        :options="options"
                      />

                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>
                <!-- 
                  <b-col lg="10" class="mb-1">
                    <b-form-group
                      label="Total weight(kg)*"
                      label-class="form_label_class"
                    >
                      <validation-Provider
                        name="Total weight"
                        v-slot="{ errors }"
                      >
                        <b-form-input
                          v-model="form.totalweight"
                          placeholder="Enter Total Weight"
                        ></b-form-input>
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-Provider>
                    </b-form-group>
                  </b-col> -->

                <b-col lg="10" class="mb-1">
                  <b-form-group label="Flight*" label-class="form_label_class">
                    <validation-Provider name="Flight" v-slot="{ errors }">
                      <b-form-input
                        v-model="form.totalweight"
                        placeholder="Enter Total Weight"
                      ></b-form-input>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <b-col lg="10" class="mb-1">
                  <b-form-group label="Status*" label-class="form_label_class">
                    <validation-Provider
                      name="status"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <v-select
                        v-model="selected3"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        label="title"
                        :options="options"
                      />

                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-col>

            <b-col lg="6">
              <h2 class="form_label_class_heading">Additional cost</h2>
              <br />
              <div>
                <div>
                  <b-form
                    ref="form"
                    :style="{ height: trHeight }"
                    class="repeater-form"
                    @submit.prevent="repeateAgain"
                  >
                    <!-- Row Loop -->
                    <b-row
                      v-for="(item, index) in items"
                      :id="item.id"
                      :key="item.id"
                      ref="row"
                    >
                      <!-- Description -->
                      <b-col lg="6">
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

                      <!--Amount -->
                      <b-col lg="6">
                        <b-form-group
                          label="Amount*"
                          label-class="form_label_class"
                        >
                          <validation-Provider
                            name="Amount"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <b-form-input
                              placeholder="Enter amount"
                              v-model="item.amount"
                            />
                            <span class="text-danger">{{ errors[0] }}</span>
                          </validation-Provider>
                        </b-form-group>
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
                    @click="repeateAgain()"
                    class="form_submit_button"
                  >
                    <span class="button_text_styles">Add cost</span>
                  </b-button>
                </div>
              </div>
            </b-col>
          </b-row>
        </validation-observer>
        <br />
        <br />
        <div class="d-flex justify-content-center">
          <b-button
            @click="validationPackingEditForm()"
            type="submit"
            variant="none"
            class="form_submit_button"
          >
            <span class="button_text_styles"> Edit</span>
          </b-button>
        </div>
        <br />
        <br />
      </b-form>
    </div>
  </div>
</template>

<script>
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
  BCol,
  BRow,
  BFormFile,
  BCardText,
  BLink,
  BFormInput,
  BContainer,
} from "bootstrap-vue";
import vSelect from "vue-select";
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";

export default {
  name: "EditShipmentForm",
  components: {
    BCard,
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
  props: {
    selectedshipment: Object,
  },
  data() {
    return {
      form: {},
      selected: {
        title: "Select Seafood Type",
      },
      selected1: {
        title: "Malayasia",
      },
      selected2: {
        title: "Select Grading",
      },
      selected3: {
        title: "Select Status",
      },
      items: [
        {
          id: 1,
          description: "",
          amount: "",
          prevHeight: 0,
        },
      ],
      items1: [
        {
          id: 1,
          selected: "male",
          selected1: "designer",
          prevHeight: 0,
        },
      ],
      options: [
        { title: "Admin" },
        { title: "Operation Manager" },
        { title: "Data Entry Officer" },
        { title: "Supplier" },
        { title: "Consignee" },
        { title: "Admin" },
        { title: "Operation Manager" },
        { title: "Data Entry Officer" },
        { title: "Supplier" },
        { title: "Consignee" },
      ],
    };
  },
  created() {
    this.form = this.selectedshipment;
    this.selected = this.selectedshipment.consignee;
    this.selected1 = this.selectedshipment.packingids;
    this.selected2 = this.selectedshipment.grading;
    this.selected3 = this.selectedshipment.status;
    this.items = this.selectedshipment.additionalcosts;
  },
  computed: {
    generateTotWeight() {
      const weight = 0;
      this.items.forEach((val) => {
        weight = val.weight + weight;
      });

      return weight;
    },
  },
  updated() {
    this.form.totalweight = this.generateTotWeight;
  },
  methods: {
    async validationShipmentEditForm() {
      if (await this.$refs.ShipmentEditValidation.validate()) {
      }
    },

    repeateAgain() {
      this.items.push({
        id: (this.nextTodoId += this.nextTodoId),
      });
    },

    removeItem(index) {
      this.items.splice(index, 1);
      this.trTrimHeight(this.$refs.row[0].offsetHeight);
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
.repeater-form {
}
</style>
