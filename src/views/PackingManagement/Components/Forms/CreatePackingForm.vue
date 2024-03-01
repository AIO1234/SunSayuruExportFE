<template>
  <div>
    <div>
      <br />
      <h2 class="shipment_create_header">Boxes & suppliers</h2>
      <!-- Add box For Loop -->
      <div v-for="(box, index) in items2" :id="box.id" :key="box.id" ref="row">
        <br />
        <div class="box_background">
          <b-container class="pl-3 pr-3 pt-2">
            <b-row>
              <b-col lg="2"
                ><h2 class="box_create_header">Box number</h2></b-col
              >
              <b-col lg="2">
                <b-form-input
                  placeholder="Enter box number"
                  v-model="form.box_number"
                  style="background-color: #003476; width: 170px; height: 39px"
                ></b-form-input>
              </b-col>
            </b-row>
            <br />

            <br /><br />

            <!-- Add seafood For Loop -->
            <div
              v-for="(seafood, index) in box.items1"
              :id="seafood.id"
              :key="seafood.id"
              ref="row"
            >
              <br />
              <div class="seafood_background">
                <b-container class="pl-3 pr-3 pt-2">
                  <h2 class="seafood_create_header">
                    Seafood type {{ seafood.id }}
                  </h2>
                  <b-form @submit.prevent>
                    <validation-observer ref="PackingCreateValidation">
                      <b-row>
                        <!-- seafood type  -->
                        <b-col lg="6" class="pt-1">
                          <b-form-group
                            label="Seafood Type*"
                            label-class="form_label_class_seafood a"
                          >
                            <validation-Provider
                              name="quality"
                              rules="required"
                              v-slot="{ errors }"
                            >
                              <v-select
                                v-model="selected1"
                                :dir="
                                  $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                                "
                                label="title"
                                class="custom-vue-select"
                                :options="options1"
                              />

                              <span class="text-danger">{{ errors[0] }}</span>
                            </validation-Provider>
                          </b-form-group>
                        </b-col>

                        <!-- Quality  -->

                        <b-col lg="6" class="pt-1">
                          <b-form-group
                            label="Quality*"
                            label-class="form_label_class_seafood"
                          >
                            <validation-Provider
                              name="grading"
                              rules="required"
                              v-slot="{ errors }"
                            >
                              <v-select
                                v-model="selected2"
                                :dir="
                                  $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                                "
                                label="title"
                                :options="options2"
                                class="custom-vue-select"
                              />

                              <span class="text-danger">{{ errors[0] }}</span>
                            </validation-Provider>
                          </b-form-group>
                        </b-col>

                        <!-- Grading -->

                        <b-col lg="6" class="pt-1">
                          <b-form-group
                            label="Grading*"
                            label-class="form_label_class_seafood"
                          >
                            <validation-Provider
                              name="grading"
                              rules="required"
                              v-slot="{ errors }"
                            >
                              <v-select
                                v-model="selected2"
                                :dir="
                                  $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                                "
                                label="title"
                                :options="options2"
                                class="custom-vue-select"
                              />

                              <span class="text-danger">{{ errors[0] }}</span>
                            </validation-Provider>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <!-- Supliers -->

                      <div class="background_suplier_box">
                        <b-container class="pl-3 pr-3 pt-2">
                          <div class="d-flex justify-content-between">
                            <div>
                              <h2 class="suplier_create_header">Suppliers</h2>
                            </div>
                          </div>
                          <br />

                          <!-- Add Supliers For Loop -->
                          <b-row
                            v-for="(suplier, index) in seafood.items"
                            :id="suplier.id"
                            :key="suplier.id"
                            ref="row"
                          >
                            <!-- Receiving date -->

                            <b-col lg="3">
                              <b-form-group
                                label="Receiving date*"
                                label-class="form_label_class"
                              >
                                <validation-Provider
                                  name="Receiving date"
                                  rules="required"
                                  v-slot="{ errors }"
                                >
                                  <b-form-datepicker
                                    placeholder="Select Date"
                                    style="
                                      background-color: #cde9fc;

                                      border-color: #0052ba;
                                    "
                                  ></b-form-datepicker>
                                  <span class="text-danger">{{
                                    errors[0]
                                  }}</span>
                                </validation-Provider>
                              </b-form-group>
                            </b-col>

                            <!-- Suplier Name -->
                            <b-col lg="3">
                              <b-form-group
                                label="Suplier*"
                                label-class="form_label_class"
                              >
                                <validation-Provider
                                  name="Select Suplier"
                                  rules="required"
                                  v-slot="{ errors }"
                                >
                                  <v-select
                                    :dir="
                                      $store.state.appConfig.isRTL
                                        ? 'rtl'
                                        : 'ltr'
                                    "
                                    label="title"
                                    :options="options4"
                                    class="custom-vue-select1"
                                  />

                                  <span class="text-danger">{{
                                    errors[0]
                                  }}</span>
                                </validation-Provider>
                              </b-form-group>
                            </b-col>

                            <!-- Weight -->
                            <b-col lg="3">
                              <b-form-group
                                label="Weight(g)*"
                                label-class="form_label_class"
                              >
                                <validation-Provider
                                  name="Weight"
                                  rules="required"
                                  v-slot="{ errors }"
                                >
                                  <b-form-input
                                    type="number"
                                    step="0.00"
                                    placeholder="Enter Weight"
                                    style="
                                      background-color: #cde9fc;

                                      border-color: #0052ba;
                                    "
                                  />
                                  <span class="text-danger">{{
                                    errors[0]
                                  }}</span>
                                </validation-Provider>
                              </b-form-group>
                            </b-col>

                            <!-- Rate -->
                            <b-col lg="3">
                              <b-form-group
                                label="Price Rate"
                                label-class="form_label_class"
                              >
                                <b-form-input
                                  placeholder="Enter Price"
                                  style="
                                    background-color: #cde9fc;

                                    border-color: #0052ba;
                                  "
                                />
                              </b-form-group>
                            </b-col>

                            <b-col lg="3">
                              <!-- <b-button>
                      <b-img src="@/assets/images/minus.png"></b-img>
                     </b-button> -->
                            </b-col>
                            <!-- Remove Button -->
                          </b-row>
                          <br />
                          <div class="text-right">
                            <b-button
                              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                              variant="none"
                              @click="repeateSuplier(seafood)"
                              class="form_submit_button"
                            >
                              <span class="button_text_styles"
                                >Add Suplier</span
                              >
                            </b-button>
                          </div>
                          <br />
                        </b-container>
                      </div>
                    </validation-observer>
                    <br />
                    <br />

                    <!-- <div class="d-flex justify-content-center">
                <b-button
                  @click="validationPackingCreateForm()"
                  type="submit"
                  variant="none"
                  class="form_submit_button"
                >
                  <span class="button_text_styles"> Create</span>
                </b-button>
              </div> -->
                    <br />
                    <br />
                  </b-form>
                </b-container>
              </div>
            </div>

            <br />
            <div class="text-right">
              <b-button
                @click="repeateSeafood(box)"
                type="submit"
                variant="none"
                class="seafood_add_button"
              >
                <span class="button_text_styles_seafood_type"
                  >Add seafood type</span
                >
              </b-button>
            </div>
            <br />
          </b-container>
        </div>
      </div>
      <br />
      <div class="text-right">
        <b-button
          @click="repeateBox()"
          type="submit"
          variant="none"
          class="box_add_button"
        >
          <span class="button_text_styles">Add Packing box</span>
        </b-button>
      </div>
    </div>

    <br />
    <br />
    <br />
    <br />
    <div>
      <b-row>
        <b-col lg="6">
          <b-button variant="none" class="backbutton">
            <span class="back_button_text_styles">Back</span>
          </b-button>
        </b-col>

        <b-col lg="6" class="text-right">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="none"
            class="form_submit_button"
          >
            <span class="button_text_styles">Next</span>
          </b-button></b-col
        >
      </b-row>
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
  BFormDatepicker,
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
  name: "CreatePackingForm",
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
    BFormDatepicker,
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
        title: "Select Seafood Type",
      },
      selected1: {
        title: "Select Quality",
      },
      selected2: {
        title: "Select Grading",
      },
      selected3: {
        title: "Select Status",
      },

      items2: [
        {
          id: 1,
          items1: [
            {
              id: 1,
              items: [
                {
                  id: 1,
                  suplier: "Select Suplier",
                  weight: "",
                  rate: "",
                  prevHeight: 0,
                },
              ],
            },
          ],
        },
      ],
      nextTodoId: 1,

      options: [
        { title: "Kelawalla" },
        { title: "Thalapath" },
        { title: "Hurulla" },
      ],
      options1: [{ title: "A+" }, { title: "A-" }, { title: "B+" }],
      options2: [
        { title: "50 - 60" },
        { title: "70 - 80" },
        { title: "90 - 100" },
      ],
      options3: [
        { title: "Kasun Perera" },
        { title: "Sithum Perera" },
        { title: "Namal Udugama" },
      ],
    };
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
    async saveData() {
      if (await this.$refs.PackingCreateValidation.validate()) {
      }
    },
    // add suplier
    repeateSuplier(seafood) {
      seafood.items.push({
        id: seafood.items.length + 1,
      });
    },

    // add seafood
    repeateSeafood(box) {
      box.items1.push({
        id: box.items1.length + 1,
        items: [
          {
            id: 1,
          },
        ],
      });
    },

    // add boxes
    repeateBox() {
      this.items2.push({
        id: this.items2.length + 1,
        items1: [
          {
            id: 1,
            items: [
              {
                id: 1,
              },
            ],
          },
        ],
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
.custom-vue-select .vs__dropdown-toggle {
  border-color: #897d3c;
}
.custom-vue-select1 .vs__dropdown-toggle {
  background-color: #cde9fc;
  border-color: #0052ba;
}
.repeater-form {
}
</style>
