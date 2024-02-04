<template>
  <div>
    <div>
      <b-form @submit.prevent>
        <validation-observer ref="MaterialCostUpdateValidation">
          <b-row>
            <b-col md="12" class="mb-1">
              <b-form-group label="Box Number*" label-class="form_label_class">
                <validation-Provider
                  name="Suplier"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    v-model="form.boxnumber"
                    placeholder="Enter Box Number"
                  ></b-form-input>

                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>
            <b-col md="12">
              <h2 class="form_label_class_heading">Material costs</h2>
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
                      <b-col lg="4">
                        <b-form-group
                          label="Description*"
                          label-class="form_label_class"
                        >
                          <validation-Provider
                            name="Description"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <b-form-textarea
                              placeholder="Enter description"
                              v-model="item.description"
                            />
                            <span class="text-danger">{{ errors[0] }}</span>
                          </validation-Provider>
                        </b-form-group>
                      </b-col>

                      <!-- Quantity -->
                      <b-col lg="4">
                        <b-form-group
                          label="Quantity*"
                          label-class="form_label_class"
                        >
                          <validation-Provider
                            name="quantity"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <b-form-input
                              type="number"
                              placeholder="Enter quantity"
                              v-model="item.quantity"
                            />
                            <span class="text-danger">{{ errors[0] }}</span>
                          </validation-Provider>
                        </b-form-group>
                      </b-col>

                      <!--Amount -->
                      <b-col lg="4">
                        <b-form-group
                          label="Amount*"
                          label-class="form_label_class"
                        >
                          <b-form-input
                            placeholder="Enter amount"
                            v-model="item.amount"
                          />
                        </b-form-group>
                      </b-col>

                      <!-- Remove Button -->
                    </b-row>
                  </b-form>
                </div>

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

            <b-col md="12" class="mb-1 text-center">
              <br /><br />
              <br />
              <b-button
                @click="validationMaterialCostCreateForm()"
                type="submit"
                variant="none"
                class="form_submit_button"
              >
                <span class="button_text_styles">Edit</span>
              </b-button>
            </b-col>
          </b-row>
        </validation-observer>
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
  name: "AddUser",
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
  data() {
    return {
      form: {},
      selected: {
        title: "Select Suplier",
      },
      options: [
        { title: "Kasun Perera" },
        { title: "Sithum Weerasinghe" },
        { title: "Namal Udugama" },
      ],
      items: [
        {
          id: 1,
          description: "",
          quantity: "",
          amount: "",
          prevHeight: 0,
        },
      ],
    };
  },
  props: {
    selectedItem: Object,
  },
  created() {
    this.form = this.selectedItem;
    this.items = this.selectedItem.costlist;
  },
  methods: {
    async validationMaterialCostCreateForm() {
      if (await this.$refs.MaterialCostUpdateValidation.validate()) {
      }
    },
    repeateAgain() {
      this.items.push({
        id: (this.nextTodoId += this.nextTodoId),
      });
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
