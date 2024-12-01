import localFont from "next/font/local";

export const IRANYekanWeb = localFont({
  src: [
    {
      path: "../../../public/fonts/yekan-bakh-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/yekan-bakh-bold.woff",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-yekan",
});
