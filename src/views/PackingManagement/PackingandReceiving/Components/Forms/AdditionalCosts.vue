<template>
  <div>
    <br />
    <h2 class="shipment_create_header">Additional cost</h2>
    <br /><br />
    <div>
      <div>
        <!-- additional Cost Form -->
        <b-form
          ref="form"
          :style="{ height: trHeight }"
          class="repeater-form"
          @submit.prevent="repeateAgain"
        >
          <!-- Row Loop -->
          <b-row
            class="pt-2"
            v-for="(item, index) in items1"
            :id="item.id"
            :key="item.id"
            ref="row"
          >
            <!-- Description -->
            <b-col lg="5">
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
            <b-col lg="5">
              <b-form-group label="Amount*" label-class="form_label_class">
                <b-form-input
                  placeholder="Enter amount"
                  v-model="item.amount"
                />
              </b-form-group>
            </b-col>

            <b-col lg="2" class="text-right minus_button_margin">
              <b-button variant="none" @click="removeItem(index)">
                <b-img src="@/assets/images/Group.png"></b-img>
              </b-button>
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

      <div class="pt-5 d-flex justify-content-center">
        <b-button class="additionalcost_submit_button" variant="none"
          ><span class="additionalcost_submit_button_text"
            >Submit</span
          ></b-button
        >
      </div>
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
  BImg,
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
    BImg,
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
    removeItem(index) {
      this.items1.splice(index, 1);
    },
  },
};
</script>
