<template>
  <div>
    <div>
      <b-form @submit.prevent>
        <validation-observer ref="UserUpdateValidation">
          <b-row>
            <!-- user name -->
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
            <!-- email -->
            <b-col md="12" class="mb-1">
              <b-form-group label="Email*" label-class="form_label_class">
                <validation-Provider
                  name="Email"
                  rules="required|email"
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

            <!--phone  number -->
            <b-col md="12" class="mb-1">
              <b-form-group
                label="Phone Number*"
                label-class="form_label_class"
              >
                <validation-Provider
                  name="Phone Number"
                  rules="required|min:10|max:12"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    placeholder="Enter Phone Number"
                    v-model="form.phone"
                  ></b-form-input>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>
            <!-- address -->
            <b-col md="12" class="mb-1">
              <b-form-group label="Address*" label-class="form_label_class">
                <validation-Provider name="Address" v-slot="{ errors }">
                  <b-form-textarea
                    placeholder="Enter Email"
                    v-model="form.address"
                  ></b-form-textarea>
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
                <span class="button_text_styles">Update</span>
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
import userApi from "@/Api/Modules/users";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import {
  required,
  email,
  confirmed,
  url,
  between,
  alpha,
  integer,
  password,
  min,
  digits,
  alphaDash,
  length,
} from "@validations";
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
      role: {
        name: "",
      },
      roles: [],

      // validations

      required,
      email,
      confirmed,
      url,
      between,
      alpha,
      integer,
      password,
      min,
      digits,
      alphaDash,
      length,
    };
  },
  async created() {
    this.form = this.selectedItem;
    this.role.name = this.form.role_name;
  },
  props: {
    selectedItem: Object,
  },
  methods: {
    async validationUserUpdateForm() {
      if (await this.$refs.UserUpdateValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        });
        await userApi
          .updateUser(this.form.id, this.form)
          .then(() => {
            this.$vs.loading.close();
            this.$emit("closemodal", false);
          })
          .catch(() => {
            this.$vs.loading.close();
          });
      }
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
