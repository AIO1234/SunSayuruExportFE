<template>
    <div>
      <div>
        <b-form @submit.prevent>
          <validation-observer ref="PriceListCreateValidation">
            <b-row>
              <b-col md="12" class="mb-1">
                <b-form-group label="Suplier*" label-class="form_label_class">
                  <validation-Provider
                    name="Suplier"
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
  
              <b-col md="12" class="mb-1">
                <b-form-group>
                  <label class="form_label_class"
                    >Rate management file upload<span style="color: #929292">
                       (Only excel files are allowed)</span
                    ></label
                  >
                  <validation-Provider
                    name="File"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <b-form-file
                      accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                      placeholder="Choose a file or drop it here..."
                      drop-placeholder="Drop file here..."
                    ></b-form-file>
                    <span class="text-danger">{{ errors[0] }}</span>
                  </validation-Provider>
                </b-form-group>
              </b-col>
  
              <br /><br />
              <b-col md="12" class="mb-1 text-center">
                <b-button
                  @click="validationPriceListCreateForm()"
                  type="submit"
                  variant="none"
                  class="form_submit_button"
                >
                  <span class="button_text_styles">Create</span>
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
      };
    },
  
    methods: {
      async validationPriceListCreateForm() {
        if (await this.$refs.PriceListCreateValidation.validate()) {
        }
      },
    },
  };
  </script>
  <style lang="scss">
  @import "@core/scss/vue/libs/vue-select.scss";
  </style>
  