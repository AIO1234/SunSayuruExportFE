<template>
  <div>
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
            <b-col lg="6">
              <b-form-group label="Description*" label-class="form_label_class">
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

            <!--Amount -->
            <b-col lg="6">
              <b-form-group label="Amount*" label-class="form_label_class">
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
import vSelect from "vue-select";
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
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
export default {
  data() {
    return {
      form: {},
      items1: [
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
  methods: {
    repeateAgain1() {
      this.items1.push({
        id: (this.nextTodoId += this.nextTodoId),
      });
    },
  },
};
</script>
