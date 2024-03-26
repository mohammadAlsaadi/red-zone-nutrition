import { formatDistance, parseISO } from "date-fns";
import { differenceInDays } from "date-fns";

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function (options = {}) {
  const today = new Date();

  // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};
export default function formatJordanDateTime(dateTimeString) {
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Amman", // Set the timezone to Jordan
  };

  const dateTime = new Date(dateTimeString);
  const formattedDateTime = new Intl.DateTimeFormat("en-JO", options).format(
    dateTime
  );

  return formattedDateTime;
}

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "JOD" }).format(
    value
  );
const language = window.localStorage.getItem("language");
export const formatPrice = (
  price,
  currency = language === "ar" ? "د.أ" : "JOD"
) => {
  // Check if the price is a number
  if (typeof price !== "number") {
    throw new Error("Invalid price. Must be a number.");
  }

  // Format the price with trailing zeroes and currency label
  const formattedPrice = price.toFixed(2);

  return `${formattedPrice} ${currency}`;
};

export const countryPhoneData = [
  { code: "JO", label: "Jordan", phone: "962", phoneLength: [8, 9] },
  { code: "IQ", label: "Iraq", phone: "964", phoneLength: 10 },
  { code: "AE", label: "United Arab Emirates", phone: "971", phoneLength: 9 },
  { code: "SA", label: "Saudi Arabia", phone: "966", phoneLength: 9 },
];
export const getStatusColor = (status) => {
  switch (status) {
    case "Order Received":
      return "#007bff";
    case "Processing":
      return "#ffc107";
    case "Shipped":
      return "#17a2b8";
    case "Completed":
      return "#28a745";
    default:
      return "#333";
  }
};
export function formatProductDescription(description) {
  // Split the description into sentences
  const sentences = description.split(". ");

  // Format each sentence
  const formattedSentences = sentences.map((sentence) => {
    // Capitalize the first letter of each sentence
    const capitalizedSentence =
      sentence.charAt(0).toUpperCase() + sentence.slice(1);
    // Add a period at the end of each sentence if it's not already there
    const formattedSentence = capitalizedSentence.endsWith(".")
      ? capitalizedSentence
      : capitalizedSentence + ".";
    return formattedSentence;
  });

  // Join the formatted sentences back into a single string
  const formattedDescription = formattedSentences.join(" ");

  return formattedDescription;
}

export function colorCoordination(text = "unflavored") {
  const LowerCaseedText = text.toLowerCase();
  if (LowerCaseedText.includes("chocolate" || "Choclate")) {
    return "#7B3F00";
  } else if (LowerCaseedText.includes("vanilla" || "white")) {
    return "#fffbe9";
  } else if (LowerCaseedText.includes("caramel" || "orange")) {
    return "#e68b22";
  } else if (LowerCaseedText.includes("banana" || "pineapple")) {
    return "#fbec5d";
  } else if (LowerCaseedText.includes("Strawberry")) {
    return "#db1515";
  } else if (LowerCaseedText.includes("unflavored")) {
    return "#bfc1c2";
  } else if (LowerCaseedText.includes("peanut" || "butter")) {
    return "#DCA465";
  } else if (LowerCaseedText.includes("cola" || "dark")) {
    return "#3c3024";
  } else if (LowerCaseedText.includes("fruit" || "punch")) {
    return "#ce3d48";
  } else if (LowerCaseedText.includes("lemon")) {
    return "#FAFA33";
  } else if (LowerCaseedText.includes("watermelon" || "green")) {
    return "#a9ff85";
  } else if (LowerCaseedText.includes("lemon")) {
    return "##FF5733";
  } else if (LowerCaseedText.includes("mango" || "peach")) {
    return "#F4BB44";
  } else if (LowerCaseedText.includes("blue" || "berry")) {
    return "#0CBFE9";
  } else if (LowerCaseedText.includes("cookies" || "cream")) {
    return "#6e5b55";
  } else {
    // default color or additional cases can be handled here
    return "#fff";
  }
}
