<template>
  <div>
    <div>
      <b-form @submit.prevent>
        <validation-observer ref="PackingCreateValidation">
          <b-row>
            <b-col lg="6">
              <b-row>
                <b-col lg="10" class="mb-1">
                  <b-form-group
                    label="Box number*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="Box number"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <b-form-input
                        placeholder="Enter box number"
                        v-model="form.box_number"
                      ></b-form-input>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <b-col lg="10" class="mb-1">
                  <b-form-group
                    label="Seafood Type*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="Seafood Type"
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
                  <b-form-group label="Quality*" label-class="form_label_class">
                    <validation-Provider
                      name="quality"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <v-select
                        v-model="selected1"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        label="title"
                        :options="options1"
                      />

                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <b-col lg="10" class="mb-1">
                  <b-form-group
                    label="Grading(g)*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="grading"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <v-select
                        v-model="selected2"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        label="title"
                        :options="options2"
                      />

                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <!-- <b-col lg="10" class="mb-1">
                  <b-form-group
                    label="Total weight(kg)*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="Total weight"
                      v-slot="{ errors }"
                    >
                      <b-form-input
                        readonly
                        v-model="form.totalweight"
                      ></b-form-input>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col> -->

                <!-- <b-col lg="10" class="mb-1">
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
                </b-col> -->
              </b-row>
            </b-col>

            <b-col lg="6">
              <h2 class="form_label_class_heading">Supliers</h2>
              <br />
              <div>
                <div>
                  <b-form
                    ref="form"
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
                      <!-- Suplier Name -->
                      <b-col lg="4">
                        <b-form-group
                          label="Suplier Name*"
                          label-class="form_label_class"
                        >
                          <validation-Provider
                            name="Select Suplier"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <v-select
                              v-model="item.suplier"
                              :dir="
                                $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                              "
                              label="title"
                              :options="options3"
                            />

                            <span class="text-danger">{{ errors[0] }}</span>
                          </validation-Provider>
                        </b-form-group>
                      </b-col>

                      <!-- Weight -->
                      <b-col lg="4">
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
                              v-model="item.weight"
                              placeholder="Enter Weight"
                            />
                            <span class="text-danger">{{ errors[0] }}</span>
                          </validation-Provider>
                        </b-form-group>
                      </b-col>

                      <!-- Rate -->
                      <b-col lg="4">
                        <b-form-group
                          label="Price Rate"
                          label-class="form_label_class"
                        >
                          <b-form-input readonly v-model="item.rate" />
                        </b-form-group>
                      </b-col>
                      <hr
                        style="
                          width: 100%;
                          text-align: left;
                          margin-left: 0;
                          background-color: #000;
                        "
                      />
                      <!-- Remove Button -->
                    </b-row>
                  </b-form>
                </div>
                <br />

                <div class="text-right">
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="none"
                    @click="repeateAgain"
                    class="form_submit_button"
                  >
                    <span class="button_text_styles">Add Suplier</span>
                  </b-button>
                </div>
              </div>

              <br />

              <h2 class="form_label_class_heading">Material cost</h2>
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
                      v-for="(item, index) in items1"
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
                            <b-form-input
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
                          v-if="
                            item.description === 'Box' ||
                            item.description === 'box'
                          "
                          label="Box Type*"
                          label-class="form_label_class"
                        >
                          <validation-Provider
                            name="Box Type"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <b-form-input
                              placeholder="Enter box type"
                              v-model="item.boxtype"
                            />
                            <span class="text-danger">{{ errors[0] }}</span>
                          </validation-Provider>
                        </b-form-group>

                        <b-form-group
                          v-else-if="
                            item.description !== 'Box' ||
                            item.description !== 'box'
                          "
                          label="Quantity*"
                          label-class="form_label_class"
                        >
                          <validation-Provider
                            name="quantity"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <b-form-input
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
                      <hr
                        style="
                          width: 100%;
                          text-align: left;
                          margin-left: 0;
                          background-color: #000;
                        "
                      />
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
              </div>
            </b-col>
          </b-row>
        </validation-observer>
        <br />
        <br />
        <div class="d-flex justify-content-center">
          <b-button
            @click="validationPackingCreateForm()"
            type="submit"
            variant="none"
            class="form_submit_button"
          >
            <span class="button_text_styles"> Create</span>
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
      items: [
        {
          id: 1,
          suplier: "Select Suplier",
          weight: "",
          rate: "",
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
    async validationPackingCreateForm() {
      if (await this.$refs.PackingCreateValidation.validate()) {
      }
    },

    repeateAgain() {
      this.items.push({
        id: (this.nextTodoId += this.nextTodoId),
        suplier: "Select Suplier",
      });
    },
    repeateAgain1() {
      this.items1.push({
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
