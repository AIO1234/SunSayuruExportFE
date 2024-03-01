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
            <b-col lg="3">
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

            <!-- Quantity -->
            <b-col lg="3">
              <b-form-group
                v-if="item.description === 'Box' || item.description === 'box'"
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
                  item.description !== 'Box' || item.description !== 'box'
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

            <b-col lg="3">
              <b-form-group label="Unit Price*" label-class="form_label_class">
                <b-form-input
                  placeholder="Enter Unit Price"
                  v-model="item.amount"
                />
              </b-form-group>
            </b-col>

            <!--Amount -->
            <b-col lg="3">
              <b-form-group label="Amount*" label-class="form_label_class">
                <b-form-input
                  readonly
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
