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
    <span class="detailed_modal_heading" style="font-size: 18px"
      >Packing IDs</span
    >

    <div class="pt-3"></div>
    <b-container>
    
      <b-row v-for="packing in selectedshipment.packingids" :key="packing">
        <b-col lg="9">
          <span class="detailed_modal_content">{{ packing }}</span>
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
      <b-row v-for="shipment in selectedshipment.additionalcosts" :key="shipment">
        <b-col lg="9">
          <span class="detailed_modal_content">{{shipment.description}}</span>
        </b-col>
        <b-col lg="3">
          <span class="detailed_modal_content">{{shipment.amount}}</span>
        </b-col>
      </b-row>
    
    </b-container>

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
