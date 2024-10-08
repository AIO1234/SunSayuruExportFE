<template>
  <div>
    <div>
      <b-form @submit.prevent>
        <validation-observer ref="SeafoodCreateValidation">
          <b-row>
            <!-- seafood type -->
            <b-col md="12" class="mb-1">
              <b-form-group
                label="Seafood Type*"
                label-class="form_label_class"
              >
                <validation-Provider
                  name="Seafood Type"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    placeholder="Enter Seafood Type"
                    v-model="form.type"
                  ></b-form-input>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>

            <!-- gradings assign -->
            <b-col lg="12" class="mb-1">
              <b-form-group
                label="Assign Gradings*"
                label-class="form_label_class"
              >
                <validation-Provider
                  name="Gradings"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-select
                    v-model="grading"
                    @input="opengradingmodel(grading)"
                    multiple
                    :dir="dir"
                    label="grading"
                    :options="propGradings"
                  >
                    <template slot="option" slot-scope="option">
                      <div class="d-center" v-if="option.grading === 'Add New'">
                        <span class="text-danger font-weight-bold">{{
                          option.grading
                        }}</span>
                      </div>
                    </template>
                  </v-select>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>
            <!-- button -->
            <b-col md="12" class="mb-1 text-center">
              <b-button
                @click="validationSeafoodCreateForm()"
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

    <!-- grading model -->
    <b-modal
      ref="gradingmodal"
      hide-footer
      scrollable
      title="Add Grading"
      title-class="modal_title_color"
      no-close-on-backdrop
    >
      <!-- grading create form(trigger if grading is not there to select ) -->
      <AddGrading @close="closeModal" :loadingStatus="load" />
    </b-modal>
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
import seafoodsApi from "@/Api/Modules/seafoods";
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
import AddGrading from "@/views/MasterData/GradingManagement/Components/Create.vue";
export default {
  name: "AddSeafood",
  components: {
    AddGrading,
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
  created() {
    if (this.grading[this.grading.length - 1].grading === "Add New") {
      this.grading.pop();
    }
  },
  data() {
    return {
      form: {},
      load: false,
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
      dir: "ltr",

      // gradings
      grading: [],
    };
  },
  props: {
    propGradings: Array,
  },
  methods: {
    async validationSeafoodCreateForm() {
      // assign grading to payload
      this.form.gradings = this.grading;
      if (await this.$refs.SeafoodCreateValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        });
        await seafoodsApi
          .storeSeafood(this.form)
          .then(() => {
            this.$vs.loading.close();
            this.$emit("close", false);
          })
          .catch(() => {
            this.$vs.loading.close();
          });
      }
    },
    opengradingmodel(grading) {
      if (grading[grading.length - 1].grading === "Add New") {
        this.$refs.gradingmodal.show();
        grading.pop();
      }
    },

    // close grading modal
    closeModal() {
      this.$refs.gradingmodal.hide();
      this.$emit("callGradings", true);
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
