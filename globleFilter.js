export default {
  // add Area data
  returnParams(objectparam) {
    let finalParam = "";
    // check weather param object is not empty
    if (
      objectparam != null &&
      objectparam &&
      Object.keys(objectparam).length > 0
    ) {
      const keys = Object.keys(objectparam);

      // loop items in object
      keys.forEach((key) => {
        let finalParamnew = "";

        if (key == "per_page" || key == "page") {
          finalParamnew = `${key}=${encodeURIComponent(objectparam[key])}&`;
        } else {
          finalParamnew = `filter[${key}]=${encodeURIComponent(
            objectparam[key]
          )}&`;
        }
        // add filters to param string
        finalParam = finalParam + finalParamnew;
      });
    }
    return finalParam;
  },
};
