import { Components, Theme } from "@mui/material";

const componentsShared: Components<Omit<Theme, "components">> | undefined = {
  MuiButton: {
    defaultProps: {
      size: "medium",
    },
    variants: [
      {
        props: { size: "extraSmall" },
        style: {
          fontSize: "16px",
          fontWeight: 400,
          padding: "3.5px 12px",
          borderRadius: "6px",
        },
      },
      {
        props: { size: "small" },
        style: {
          fontSize: "16px",
          fontWeight: 400,
          padding: "8px 16px",
          borderRadius: "8px",
        },
      },
      {
        props: { size: "medium" },
        style: {
          fontSize: "16px",
          fontWeight: 400,
          padding: "10px 18px",
          borderRadius: "10px",
        },
      },
      {
        props: { size: "large" },
        style: {
          padding: "12px 24px",
          borderRadius: "12px",
        },
      },
      {
        props: { size: "extraLarge" },
        style: {
          padding: "15px 24px",
          borderRadius: "14px",
        },
      },
    ],
  },
  MuiInputBase: {
    styleOverrides: {
      input: {
        fontFeatureSettings: '"ss01"',
      },
    },
  },
};
export default componentsShared;
