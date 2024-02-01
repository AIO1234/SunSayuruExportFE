<template>
  <div>
    <div>
      <b-form @submit.prevent>
        <validation-observer ref="UserUpdateValidation">
          <b-row>
            <b-col md="12" class="mb-1">
              <b-form-group label="User name*" label-class="form_label_class">
                <validation-Provider
                  name="User Name"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    placeholder="Enter user name"
                    v-model="form.name"
                  ></b-form-input>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>

            <b-col md="12" class="mb-1">
              <b-form-group label="User Type*" label-class="form_label_class">
                <validation-Provider
                  name="User Type"
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
              <b-form-group label="Email*" label-class="form_label_class">
                <validation-Provider
                  name="Email"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    placeholder="Enter Email"
                    v-model="form.email"
                  ></b-form-input>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>

            <b-col md="12" class="mb-1">
              <b-form-group
                label="Phone Number*"
                label-class="form_label_class"
              >
                <validation-Provider
                  name="Phone Number"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    placeholder="Enter Phone Number"
                    v-model="form.mobile"
                  ></b-form-input>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>
            <br /><br />
            <b-col md="12" class="mb-1 text-center">
              <b-button
                @click="validationUserUpdateForm()"
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
        title: "Select Type",
      },
      options: [
        { title: "Admin" },
        { title: "Operation Manager" },
        { title: "Data Entry Officer" },
        { title: "Supplier" },
        { title: "Consignee" },
      ],
    };
  },
  props: {
    selectedItem: Object,
  },
  created() {
    this.form = this.selectedItem;
    this.selected.title = this.form.type;
  },
  methods: {
    async validationUserUpdateForm() {
      if (await this.$refs.UserUpdateValidation.validate()) {
      }
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
