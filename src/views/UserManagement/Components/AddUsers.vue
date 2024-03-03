<template>
  <div>
    <div>
      <b-form @submit.prevent>
        <validation-observer ref="UserCreateValidation">
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

            <b-col
            class="mb-1"
              cols="12"
              v-if="
                selected.title === 'Super Admin' ||
                selected.title === 'Operation Manager' ||
                selected.title === 'Data Entry Officer'
              "
            >
              <b-form-group
                label-for="register-password"
                label="Password*"
                label-class="form_label_class"
              >
                <validation-provider
                  v-slot="{ errors }"
                  name="Password"
                  vid="password"
                  rules="required|min:6"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid' : null"
                  >
                    <b-form-input
                      id="register-password"
                      v-model="form.password"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      :state="errors.length > 0 ? false : null"
                      name="register-password"
                      placeholder="············"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        :icon="passwordToggleIcon"
                        class="cursor-pointer"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <!-- password Confirmation -->
            <b-col
            class="mb-1"
              cols="12"
              v-if="
                selected.title === 'Super Admin' ||
                selected.title === 'Operation Manager' ||
                selected.title === 'Data Entry Officer'
              "
            >
              <b-form-group
                label="Confirm Password*"
                label-class="form_label_class"
              >
                <validation-provider
                  #default="{ errors }"
                  rules="required|confirmed:password"
                  name="Confirm Password"
                >
                  <b-form-input
                    v-model="form.password_confirmation"
                    type="password"
                    :state="errors.length > 0 ? false : null"
                    placeholder="Repeat Password"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
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
                @click="validationUserCreateForm()"
                type="submit"
                variant="none"
                class="form_submit_button"
              >
                <span class="button_text_styles"> Create</span>
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
  BInputGroupAppend,
} from "bootstrap-vue";
import vSelect from "vue-select";
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
export default {
  name: "AddUser",
  components: {
    BCard,
    BFormRadio,
    BInputGroupAppend,
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
        { title: "Super Admin" },
        { title: "Operation Manager" },
        { title: "Data Entry Officer" },
        { title: "Supplier" },
        { title: "Consignee" },
      ],
    };
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
  },
  mixins: [togglePasswordVisibility],
  methods: {
    async validationUserCreateForm() {
      if (await this.$refs.UserCreateValidation.validate()) {
      }
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
