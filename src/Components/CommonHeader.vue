<template>
  <div>
    <b-row>
      <b-col lg="4" cols="6">
        <b-input-group class="input-group-merge form_input_styles_group">
          <b-input-group-prepend is-text>
            <feather-icon class="search_icon_color" icon="SearchIcon" />
          </b-input-group-prepend>
          <b-form-input
            type="search"
            class="form_input_styles"
            placeholder="Type here...."
          ></b-form-input>
        </b-input-group>
      </b-col>

      <b-col lg="8" cols="6">
        <div class="text-right">
          <b-button variant="none" class="button_color">
            <div class="d-flex justify-content-center">
              <b-row>
                <b-col lg="2" cols="2">
                  <b-img
                    width="20px"
                    src="@/assets/images/icons/Icons Solid.png"
                  ></b-img>
                </b-col>
                <b-col lg="2" cols="2">
                  <span class="button_text_styles">Create</span>
                </b-col>
              </b-row>
            </div>
          </b-button>
        </div>
      </b-col>
    </b-row>
    <div class="pt-3">
      <b-row>
        <b-col lg="4" cols="12"> </b-col>
        <b-col lg="8" cols="12">
          <div class="text-right">
            <b-button
              variant="outline-primary"
              class="export_button"
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            >
              <div class="d-flex justify-content-center">
                <b-row>
                  <b-col lg="2" cols="2">
                    <b-img
                      width="10px"
                      src="@/assets/images/icons/Vector.png"
                    ></b-img>
                  </b-col>
                  <b-col lg="2" cols="2">
                    <span class="export_button_text">Export</span>
                  </b-col>
                </b-row>
              </div>
            </b-button>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import CommonHeader from "@/Components/CommonHeader.vue";
import Ripple from "vue-ripple-directive";
import {
  BFormInput,
  BRow,
  BCard,
  BImg,
  BCol,
  BButton,
  BInputGroup,
  BInputGroupPrepend,
} from "bootstrap-vue";
export default {
  name: "CommonHeader",
  components: {
    BInputGroup,
    BImg,
    CommonHeader,
    BCard,
    BButton,
    BInputGroupPrepend,
    BFormInput,
    BRow,
    BCol,
  },
  directives: {
    Ripple,
  },
};
</script>

<style></style>
