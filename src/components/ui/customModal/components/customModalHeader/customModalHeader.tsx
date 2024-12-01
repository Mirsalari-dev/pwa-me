import { Box, IconButton } from "@mui/material";
import { CustomModalHeaderProps } from "./modalHeader.types";
import { PassBoldIcon } from "@/assets/icons/passBoldIcon";

export const CustomModalHeader = ({
  children,
  borderColor = "grey.400",
  onClose,
  headerSx,
}: CustomModalHeaderProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px",
        borderBottom: 1,
        position: "sticky",
        top: 0,
        width: 1,
        zIndex: (t) => t.zIndex.modal + 1,
        borderColor,
        bgcolor: "background.paper",
        ...headerSx,
      }}
    >
      <Box sx={{ width: 1 }}>{children}</Box>
      <IconButton
        edge="end"
        aria-label="close"
        disableRipple
        onClick={(e) => onClose(e as unknown as Event, "escapeKeyDown")}
        sx={{ p: 0 }}
      >
        <PassBoldIcon
          style={{
            width: "32px",
            height: "32px",
            cursor: "pointer",
            color: "",
          }}
        />
      </IconButton>
    </Box>
  );
};
