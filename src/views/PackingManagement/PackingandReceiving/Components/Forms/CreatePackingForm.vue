<template>
  <div>
    <validation-observer ref="packingValidation" #default="{ invalid }">
      <div>
        <br />
        <h2 class="shipment_create_header">Boxes & suppliers</h2>
        <!-- Add box For Loop -->
        <div
          v-for="(box, boxindexindex) in boxes"
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
                    v-model="box.box_number"
                    style="
                      background-color: #003476;
                      color: white;
                      width: 170px;
                      height: 39px;
                    "
                  ></b-form-input>
                </b-col>
              </b-row>
              <br />

              <br /><br />

              <!-- Add seafood For Loop -->
              <div
                v-for="(seafood, seafoodindex) in box.seafoods"
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
                                  v-model="seafood.seafoodtype"
                                  :dir="
                                    $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                                  "
                                  @input="
                                    seafoodGrding(
                                      seafood.seafoodtype.id,
                                      boxindexindex,
                                      seafoodindex
                                    )
                                  "
                                  label="type"
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
                                  v-model="seafood.quality"
                                  :dir="
                                    $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                                  "
                                  label="quality"
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
                                  v-model="seafood.grading"
                                  :dir="
                                    $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                                  "
                                  label="grading"
                                  :options="gradings"
                                  class="custom-vue-select"
                                />

                                <span class="text-danger">{{ errors[0] }}</span>
                              </validation-Provider>
                            </b-form-group>
                          </b-col>

                          <!-- water percentage -->

                          <b-col lg="6" class="pt-1">
                            <b-form-group
                              label="Water Percentage*"
                              label-class="form_label_class_seafood"
                            >
                              <validation-Provider
                                name="water percentage"
                                v-slot="{ errors }"
                              >
                                <b-input-group>
                                  <b-form-input
                                    type="number"
                                    step="0.00"
                                    v-model="seafood.water_percentage"
                                    placeholder="Water Percentage"
                                    style="
                                      border-color: #897d3c;
                                      background-color: #edf8ff;
                                    "
                                  />
                                  <b-input-group-append>
                                    <span
                                      class="pl-1 pr-1 font-weight-bold"
                                      style="
                                        padding-top: 3px;
                                        font-size: 20px;
                                        border-color: #897d3c;
                                        background-color: #cde9fc;
                                        border-top-right-radius: 6px;
                                      "
                                      >%</span
                                    >
                                  </b-input-group-append>
                                </b-input-group>
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
                              v-for="(
                                suplier, suplierindex
                              ) in seafood.supliers"
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
                                      v-model="suplier.recieving_date"
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
                                      v-model="suplier.suplier"
                                      label="name"
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
                                      v-model="suplier.weight"
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
                                    v-model="suplier.price_rate"
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
                                  <b-img
                                    src="@/assets/images/Group.png"
                                  ></b-img>
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
  BInputGroupAppend,
} from "bootstrap-vue";
import vSelect from "vue-select";
import seafoodApi from "@/Api/Modules/seafoods";
import qualityApi from "@/Api/Modules/qualities";
import gradingApi from "@/Api/Modules/gradings";
import suplierApi from "@/Api/Modules/supliers";
import shipmentApi from "@/Api/Modules/shipments.js";
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";

export default {
  name: "CreatePackingForm",
  components: {
    BCard,
    BImg,
    BInputGroupAppend,
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

      boxes: [
        {
          id: 1,
          box_number: "",
          seafoods: [
            {
              id: 1,
              seafoodtype: "Select Seafood",
              quality: "Select Quality",
              grading: "Select Grading",
              water_percentage: 0,
              supliers: [
                {
                  id: 1,
                  suplier: "Select Suplier",
                  weight: "Enter Weight",
                  rate: "Enter Rate",
                  recieving_date: "Select Date",
                },
              ],
            },
          ],
        },
      ],
      nextTodoId: 1,

      seafoods: [],
      qualities: [],
      gradings: [],
      supliers: [],
    };
  },
  async created() {
    await this.allSeafoods();
    await this.buyerQualities();
    await this.allSupliers();
  },
  methods: {
    // get all seafoods
    async allSeafoods() {
      const res = await seafoodApi.allSeafoods();
      this.seafoods = res.data.data;
    },

    // get all qualities reguarding seklected buyer
    async buyerQualities() {
      const payload = {
        buyer_id: parseInt(this.$route.params.buyer),
      };
      const res = await qualityApi.buyerQualities(payload);
      this.qualities = res.data.data;
    },
    // get gradings for selecte seafood

    async seafoodGrding(seafoodid, boxindex, seafoodindex) {
      const payload = {
        seafood_id: seafoodid,
      };
      const res = await gradingApi.seafoodGrading(payload);
      this.gradings = res.data.data;

      this.boxes[boxindex].seafoods[seafoodindex].grading = this.gradings[0];
    },

    // all supliers

    async allSupliers() {
      const res = await suplierApi.allSupliers();
      this.supliers = res.data.data;
    },
    // next button and save
    async next() {
      this.form.boxes = this.boxes;
      this.form.shipment_id = localStorage.getItem("currentShipmentId");
      if (await this.$refs.packingValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        });

        await shipmentApi
          .addShipmentBox(this.form)
          .then(() => {
            this.$vs.loading.close();
          })
          .catch(() => {
            this.$vs.loading.close();
          });

        this.$emit("sendComponentName", "BoxesandSupliers");
      }
    },
    // back button,
    async back() {
      this.$emit("DirectBack", "");
    },
    // add suplier
    repeateSuplier(seafood) {
      seafood.supliers.push({
        id: seafood.supliers.length + 1,
        suplier: "Select Suplier",
        weight: "Enter Weight",
        rate: "Enter Rate",
        recieving_date: "Select Date",
      });
    },

    // remove suplier
    removeSuplier(seafood, index) {
      seafood.supliers.splice(index, 1);
    },

    // add seafood
    repeateSeafood(box) {
      box.seafoods.push({
        id: box.seafoods.length + 1,
        seafoodtype: "Select Seafood",
        quality: "Select Quality",
        grading: "Select Grading",
        water_percentage: 0,
        supliers: [
          {
            id: 1,
            suplier: "Select Suplier",
            weight: "Enter Weight",
            rate: "Enter Rate",
            recieving_date: "Select Date",
          },
        ],
      });
    },

    // add boxes
    repeateBox() {
      this.boxes.push({
        id: this.boxes.length + 1,
        seafoods: [
          {
            id: 1,
            seafoodtype: "Select Seafood",
            quality: "Select Quality",
            grading: "Select Grading",
            water_percentage: 0,
            supliers: [
              {
                id: 1,
                suplier: "Select Suplier",
                weight: "Enter Weight",
                rate: "Enter Rate",
                recieving_date: "Select Date",
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
