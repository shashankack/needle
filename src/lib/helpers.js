export const toNumber = (v) => {
  if (v == null) return null;
  const n = Number(String(v).replace(/[^\d.-]/g, "")); // strips ₹, commas, spaces
  return Number.isFinite(n) ? n : null;
};

export const formatINR = (v) => {
  const n = toNumber(v);
  if (n == null) return "";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
};
