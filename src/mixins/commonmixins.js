import _ from "lodash";
const moment = require("moment-timezone");

export default {
  methods: {
    getErrorMessages(response, key) {
      // eslint-disable-next-line no-undef
      return _.get(response, key);
    },
    getPrice(price) {
      return `Rs. ${parseFloat(price).toFixed(2)} `;
    },
    getPriceUsd(price) {
      return `$. ${parseFloat(price).toFixed(2)} `;
    },
    getPriceWithOutCurrency(price) {
      return `${parseFloat(price).toFixed(2)}`;
    },
    getWeight(weight) {
      return `${parseFloat(weight).toFixed(2)}`;
    },
    removeLeadingZeorsFromReferences(reference) {
      // eslint-disable-next-line no-undef
      const split_ref = _.split(reference, "-");
      if (split_ref.length === 1) return reference;
      return `${split_ref[0]}-${parseInt(split_ref[1])}`;
    },
    getMonth(month) {
      // eslint-disable-next-line no-undef
      if (month == "1") {
        return "January";
      } else if (month == "2") {
        return "February";
      } else if (month == "3") {
        return "March";
      } else if (month == "4") {
        return "April";
      } else if (month == "5") {
        return "May";
      } else if (month == "6") {
        return "June";
      } else if (month == "7") {
        return "July";
      } else if (month == "8") {
        return "August";
      } else if (month == "9") {
        return "September";
      } else if (month == "10") {
        return "October";
      } else if (month == "11") {
        return "November";
      } else if (month == "12") {
        return "December";
      }
    },
    firstLetterUpperCase(value) {
      if (value === null) return "N/A";
      // eslint-disable-next-line no-undef
      return _.startCase(_.toLower(value));
    },
    makeUpperCase(value) {
      // eslint-disable-next-line no-undef
      return _.startCase(_.toUpper(value));
    },
    //For time format
    momentFormat(value, arg) {
      return moment(new Date(value), arg).tz("Asia/Colombo").format(arg);
    },
    momentTimestampFormat(value, arg) {
      return moment(new Date(value)).format(arg);
    },
    convertDateToTimezone(date, timezone) {
      const str = moment(date).format("DD MMMM YYYY hh:mm:ss A");
      const tzMoment = moment.tz(str, timezone.identifier);
      return tzMoment.toDate();
    },
    momentConvertToUTCAndReturn(value, arg) {
      return moment(new Date(moment.utc(value).format())).format(arg);
    },
    getFullName(tr) {
      if (!tr.first_name) return "N/A";
      // eslint-disable-next-line no-undef
      return _.startCase(_.toLower(`${tr.first_name} ${tr.last_name}`));
    },
    //For time format ends
  },
};
