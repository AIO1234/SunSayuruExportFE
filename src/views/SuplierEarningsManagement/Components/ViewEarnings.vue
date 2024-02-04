<template>
  <div>
    <br />
    <b-container>
      <b-row>
        <b-col lg="3">
          <span class="table_headings">Date</span>
        </b-col>
        <b-col lg="3">
          <span class="table_headings">Seafood Type</span>
        </b-col>
        <b-col lg="3">
          <span class="table_headings">Total Weight</span>
        </b-col>
        <b-col lg="3">
          <span class="table_headings">Cost($)</span>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col lg="3">
          <span class="detailed_modal_content">2024.01.2</span>
        </b-col>
        <b-col lg="3">
          <span class="detailed_modal_content">Kelawalla</span>
        </b-col>
        <b-col lg="3">
          <span class="detailed_modal_content">100kg</span>
        </b-col>

        <b-col lg="3">
          <span class="detailed_modal_content">600</span>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col lg="3">
          <span class="detailed_modal_content">2024.01.3</span>
        </b-col>
        <b-col lg="3">
          <span class="detailed_modal_content">Thalapath</span>
        </b-col>
        <b-col lg="3">
          <span class="detailed_modal_content">3000kg</span>
        </b-col>

        <b-col lg="3">
          <span class="detailed_modal_content">500</span>
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
    selectedItem: Object,
  },
};
</script>
