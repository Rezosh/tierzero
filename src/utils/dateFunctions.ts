export function formatDate(date: string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// add comma to number using locale
export function formatNumber(num: number): string {
  return num.toLocaleString("en-US");
}

// Tailwind conditional classes
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
