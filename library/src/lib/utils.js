export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const formatAMPM = (date) => {
  var hours = date.split(":")[0];
  // var hours = date.getHours();
  var minutes = date.split(":")[1];
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 && minutes > 0 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

export const formatCurrency = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GHS",
  }).format(number);
};

export const extractKeysAsHeaders = (object, excludes) => {
  const keys = Object.keys(object);
  return !excludes ? keys : keys.filter((key) => !excludes.includes(key));
};

export const extractValuesAsRows = (object, includeId) => {
  const values = Object.values(object).map((value) => {
    return { cell: value };
  });
  return !includeId ? values.filter((_, i) => i != 0) : values;
};

export const openExternalLink = (link) => {
  var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

  var regex = new RegExp(expression);

  if (link.match(regex)) {
    window.open(link, "_blank");
  } else {
    window.open(`https://${link}`, "_blank");
  }
};
