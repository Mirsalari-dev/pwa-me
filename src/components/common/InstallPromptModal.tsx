"use client";
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { useInstallPrompt } from "@/context/InstallPromptContext";

const InstallPromptModal = () => {
  const { installPrompt, isInstalled } = useInstallPrompt();
  const [open, setOpen] = useState<boolean>(
    !isInstalled && installPrompt !== null
  );

  const handleInstallClick = () => {
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setOpen(false);
      });
    }
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Install App</DialogTitle>
      <DialogContent>
        <Typography>Get a better experience by installing the app!</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleInstallClick}
          variant="contained"
          color="primary"
        >
          Install
        </Button>
        <Button
          onClick={() => setOpen(false)}
          variant="outlined"
          color="secondary"
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InstallPromptModal;
