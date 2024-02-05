<template>
  <div>
    <br />
    <b-row>
      <b-col lg="6">
        <b-row>
          <b-col lg="4"
            ><span class="detailed_modal_heading">date & time</span></b-col
          >
          <b-col lg="8"
            ><span class="detailed_modal_content">{{
              selectedshipment.datetime
            }}</span></b-col
          >
        </b-row>
        <br />
        <b-row>
          <b-col lg="4"
            ><span class="detailed_modal_heading">consignee</span></b-col
          >
          <b-col lg="4"
            ><span class="detailed_modal_content">{{
              selectedshipment.consignee
            }}</span></b-col
          >
        </b-row>

        <br />
        <b-row>
          <b-col lg="4"
            ><span class="detailed_modal_heading">Total weight</span></b-col
          >
          <b-col lg="4"
            ><span class="detailed_modal_content">{{
              selectedshipment.totalweight
            }}</span></b-col
          >
        </b-row>
        <br />
        <b-row>
          <b-col lg="4"
            ><span class="detailed_modal_heading">Flight</span></b-col
          >
          <b-col lg="4"
            ><span class="detailed_modal_content">{{
              selectedshipment.flight
            }}</span></b-col
          >
        </b-row>
        <br />
      </b-col>

      <b-col lg="6">
        <b-row>
          <b-col lg="6"
            ><span class="detailed_modal_heading">Total Cost($)</span></b-col
          >
          <b-col lg="6"><span class="detailed_modal_content">2220</span></b-col>
        </b-row>
        <br />
        <b-row>
          <b-col lg="6"
            ><span class="detailed_modal_heading">Status</span></b-col
          >
          <b-col lg="6"
            ><span class="detailed_modal_content">{{
              selectedshipment.status
            }}</span></b-col
          >
        </b-row>
      </b-col>
    </b-row>

    <div class="pt-3"></div>
    <span class="detailed_modal_heading" style="font-size: 18px">Packings</span>
    <div class="pt-3"></div>
    <b-row>
      <b-col lg="6">
        <span class="table_headings">Packing ID</span>
      </b-col>

      <b-col lg="6">
        <span class="table_headings">Total Cost($)</span>
      </b-col>
    </b-row>
    <br />
    <div class="pt-3"></div>
    <b-container>
      <b-row v-for="packing in selectedshipment.packingids" :key="packing">
        <b-col lg="6">
          <span class="detailed_modal_content">{{ packing }}</span>
          <br />
          <br />
        </b-col>

        <b-col lg="6">
          <span class="detailed_modal_content">1820</span>
          <br />
          <br />
        </b-col>
      </b-row>
    </b-container>

    <div class="pt-3"></div>
    <span class="detailed_modal_heading" style="font-size: 18px"
      >Additional Costs</span
    >

    <div class="pt-3"></div>
    <b-container>
      <b-row>
        <b-col lg="9">
          <span class="table_headings">Description</span>
        </b-col>

        <b-col lg="3">
          <span class="table_headings">Amount</span>
        </b-col>
      </b-row>
      <br />
      <b-row
        v-for="shipment in selectedshipment.additionalcosts"
        :key="shipment"
      >
        <b-col lg="9">
          <span class="detailed_modal_content">{{ shipment.description }}</span>
        </b-col>
        <b-col lg="3">
          <span class="detailed_modal_content">{{ shipment.amount }}</span>
        </b-col>
      </b-row>
    </b-container>
    <div class="pt-5 mobile_only_view">
      <b-row>
        <div class="pt-5"></div>
        <b-col lg="4" cols="12" sm="12">
          <b-button variant="none" style="background-color: #0052ba" block>
            <span class="button_text_styles">
              Genarate Fake Invoice</span
            ></b-button
          >
        </b-col>

        <div class="pt-5"></div>
        <b-col lg="4" cols="12" sm="12">
          <b-button variant="none" style="background-color: #0052ba" block>
            <span class="button_text_styles">
              Genarate Real Invoice</span
            ></b-button
          >
        </b-col>

        <div class="pt-5"></div>
        <b-col lg="4" cols="12" sm="12">
          <b-button variant="none" style="background-color: #0052ba" block>
            <span class="button_text_styles">
              Send Invoice To Consignee</span
            ></b-button
          >
        </b-col>
      </b-row>
    </div>

    <div class="pt-5 web_only_view">
      <b-container>
      <b-row>
        <div class="pt-3">
        <b-col lg="4" cols="12">
          <b-button variant="none" class="form_submit_button_shipment_view">
            <span class="button_text_styles">
              Genarate Fake Invoice</span
            ></b-button
          >
        </b-col>
</div>
        <div class="pt-3">
          <b-col lg="4" cols="12">
            <b-button variant="none" class="form_submit_button_shipment_view">
              <span class="button_text_styles">
                Genarate Real Invoice</span
              ></b-button
            >
          </b-col>
        </div>

        <div class="pt-3">
          <b-col lg="4" cols="12">
            <b-button variant="none" class="form_submit_button_shipment_view">
              <span class="button_text_styles">
                Send Invoice To Consignee</span
              ></b-button
            >
          </b-col>
        </div>
      </b-row>
      </b-container>
    </div>
    <br /><br />
  </div>
</template>
<script>
import {
  BModal,
  BCard,
  BTable,
  BBadge,
  BButton,
  BCol,
  BRow,
  BImg,
  BCardText,
  BAvatar,
  BLink,
  BContainer,
} from "bootstrap-vue";
export default {
  components: {
    BCard,
    BModal,
    BImg,
    BButton,
    BCol,
    BBadge,
    BAvatar,
    BTable,
    BRow,
    BContainer,
    BCardText,
    BLink,
  },
  props: {
    selectedshipment: Object,
  },
};
</script>
