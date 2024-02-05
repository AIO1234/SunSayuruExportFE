<template>
  <div>
    <br>
    <b-row>
      <b-col lg="6">
        <b-row>
          <b-col lg="4"
            ><span class="detailed_modal_heading">Seafood type</span></b-col
          >
          <b-col lg="4"
            ><span class="detailed_modal_content">{{ selectedPacking.seafoodtype }}</span></b-col
          >
        </b-row>
        <br />
        <b-row>
          <b-col lg="4"
            ><span class="detailed_modal_heading">Quality</span></b-col
          >
          <b-col lg="4"><span class="detailed_modal_content">{{  selectedPacking.quality}}</span></b-col>
        </b-row>
        <br />
        <b-row>
          <b-col lg="4"
            ><span class="detailed_modal_heading">Grading</span></b-col
          >
          <b-col lg="4"
            ><span class="detailed_modal_content">{{  selectedPacking.grading }}</span></b-col
          >
        </b-row>
        <br />
        <b-row>
          <b-col lg="4"
            ><span class="detailed_modal_heading">Total weight</span></b-col
          >
          <b-col lg="4"
            ><span class="detailed_modal_content">{{  selectedPacking.totalweight }}</span></b-col
          >
        </b-row>
        <br />
      </b-col>

      <b-col lg="6">
        <b-row>
          <b-col lg="6"
            ><span class="detailed_modal_heading"
              >Material cost($)</span
            ></b-col
          >
          <b-col lg="6"
            ><span class="detailed_modal_content">200</span></b-col
          >
        </b-row>
        <br />
        <b-row>
          <b-col lg="6"
            ><span class="detailed_modal_heading"
              >Suppliers cost($)</span
            ></b-col
          >
          <b-col lg="6"
            ><span class="detailed_modal_content">1320.00</span></b-col
          >
        </b-row>
        <br />
        <b-row>
          <b-col lg="6"
            ><span class="detailed_modal_heading">Total cost($)</span></b-col
          >
          <b-col lg="6"
            ><span class="detailed_modal_content">1820.00</span></b-col
          >
        </b-row>
        <br />
      
      
        <b-row>
          <b-col lg="6"
            ><span class="detailed_modal_heading">Status</span></b-col
          >
          <b-col lg="6"
            ><span class="detailed_modal_content">{{ selectedPacking.status }}</span></b-col
          >
        </b-row>
      </b-col>
    </b-row>

    <div class="pt-3"></div>
    <span class="detailed_modal_heading" style="font-size: 18px"
      >Suppliers</span
    >

    <div class="pt-5"></div>
    <b-container>
      <b-row>
        <b-col lg="3">
          <span class="table_headings">Suppliers</span>
        </b-col>
        <b-col lg="3">
          <span class="table_headings">Weight(kg)</span>
        </b-col>
        <b-col lg="3">
          <span class="table_headings"> Price rate($)</span>
        </b-col>

        <b-col lg="3">
          <span class="table_headings">Cost($)</span>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col lg="3">
          <span class="detailed_modal_content">Namal</span>
        </b-col>
        <b-col lg="3">
          <span class="detailed_modal_content">6</span>
        </b-col>
        <b-col lg="3">
          <span class="detailed_modal_content">100</span>
        </b-col>

        <b-col lg="3">
          <span class="detailed_modal_content">600</span>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col lg="3">
          <span class="detailed_modal_content">Namal</span>
        </b-col>
        <b-col lg="3">
          <span class="detailed_modal_content">6</span>
        </b-col>
        <b-col lg="3">
          <span class="detailed_modal_content">100</span>
        </b-col>

        <b-col lg="3">
          <span class="detailed_modal_content">600</span>
        </b-col>
      </b-row>
    </b-container>

    <div class="pt-5"></div>
    <span class="detailed_modal_heading" style="font-size: 18px"
      >Material Costs</span
    >

    <div class="pt-5"></div>
    <b-container>
      <b-row>
        <b-col lg="3">
          <span class="table_headings">Description</span>
        </b-col>
        <b-col lg="3">
          <span class="table_headings">Quantity</span>
        </b-col>
        <b-col lg="3">
          <span class="table_headings">Amount</span>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col lg="3">
          <span class="detailed_modal_content">Box</span>
        </b-col>
        <b-col lg="3">
          <span class="detailed_modal_content">1</span>
        </b-col>
        <b-col lg="3">
          <span class="detailed_modal_content">$300</span>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col lg="3">
          <span class="detailed_modal_content">Ice Cube</span>
        </b-col>
        <b-col lg="3">
          <span class="detailed_modal_content">6</span>
        </b-col>
        <b-col lg="3">
          <span class="detailed_modal_content">$100</span>
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
    selectedPacking: Object,
  },
  
};
</script>
