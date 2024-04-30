<template>
  <div>
    <div>
      <br />
      <h2 class="shipment_create_header">Boxes & suppliers</h2>
      <!-- Add box For Loop -->
      <div
        v-for="(box, boxindexindex) in items2"
        :id="box.id"
        :key="box.id"
        ref="row"
      >
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
              v-for="(seafood, seafoodindex) in box.items1"
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
                            label-class="form_label_class_seafood"
                          >
                            <validation-Provider
                              name="seafood type"
                              rules="required"
                              v-slot="{ errors }"
                            >
                              <v-select
                                v-model="seafoodtype"
                                :dir="
                                  $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                                "
                                label="title"
                                class="custom-vue-select"
                                :options="seafoods"
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
                              name="quality"
                              rules="required"
                              v-slot="{ errors }"
                            >
                              <v-select
                                v-model="quality"
                                :dir="
                                  $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                                "
                                label="title"
                                :options="qualities"
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
                                v-model="grading"
                                :dir="
                                  $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                                "
                                label="title"
                                :options="gradings"
                                class="custom-vue-select"
                              />

                              <span class="text-danger">{{ errors[0] }}</span>
                            </validation-Provider>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <!-- Supliers -->

                      <div class="background_suplier_box">
                        <b-container class="supliers_padding">
                          <div class="d-flex justify-content-between">
                            <div>
                              <h2 class="suplier_create_header">Suppliers</h2>
                            </div>
                          </div>
                          <br />

                          <!-- Add Supliers For Loop -->
                          <b-row
                            class="pt-2"
                            v-for="(suplier, suplierindex) in seafood.items"
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
                                    v-model="supliername"
                                    label="title"
                                    :options="supliers"
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
                            <b-col lg="2">
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

                            <b-col lg="1" class="minus_button_margin">
                              <b-button
                                variant="none"
                                @click="removeSuplier(seafood, suplierindex)"
                              >
                                <b-img src="@/assets/images/Group.png"></b-img>
                              </b-button>
                            </b-col>
                            <!-- Remove Button -->
                          </b-row>
                          <br />
                          <div class="text-right">
                            <b-button
                              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                              variant="none"
                              @click="repeateSuplier(seafood)"
                              class="suplier_add_button"
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
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="none"
          class="form_submit_button"
        >
          <span class="button_text_styles" @click="next()">Next</span>
        </b-button></b-col
      >
    </b-row>
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
  BImg,
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
    BImg,
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
      seafoodtype: {
        title: "Select Seafood Type",
      },
      quality: {
        title: "Select Quality",
      },
      grading: {
        title: "Select Grading",
      },
      supliername: {
        title: "Select Suplier",
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
                  suplier: "",
                  weight: "",
                  rate: "",
                },
              ],
            },
          ],
        },
      ],
      nextTodoId: 1,

      seafoods: [
        { title: "Kelawalla" },
        { title: "Thalapath" },
        { title: "Hurulla" },
      ],
      qualities: [{ title: "A+" }, { title: "A-" }, { title: "B+" }],
      gradings: [
        { title: "50 - 60" },
        { title: "70 - 80" },
        { title: "90 - 100" },
      ],
      supliers: [
        { title: "Kasun Perera" },
        { title: "Sithum Perera" },
        { title: "Namal Udugama" },
      ],
    };
  },
  // computed: {
  //   generateTotWeight() {
  //     const weight = 0;
  //     this.items.forEach((val) => {
  //       weight = val.weight + weight;
  //     });

  //     return weight;
  //   },
  // },
  // updated() {
  //   this.form.totalweight = this.generateTotWeight;
  // },
  methods: {
    async next() {
      this.$emit("sendComponentName", "BoxesandSupliers");
    },
    async back() {
      this.$emit("DirectBack", "");
    },
    // add suplier
    repeateSuplier(seafood) {
      seafood.items.push({
        id: seafood.items.length + 1,
      });
    },

    // remove suplier
    removeSuplier(seafood, index) {
      seafood.items.splice(index, 1);
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
  },
};
</script>
<style lang="scss"></style>
