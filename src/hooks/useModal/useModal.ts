import { useCallback, useMemo, useState } from "react";

export const useModal = (initialOpen = false) => {
  const [open, setOpen] = useState(initialOpen);

  const onOpen = useCallback(() => setOpen(true), []);

  const onClose = useCallback(() => setOpen(false), []);

  return useMemo(
    () => ({
      isOpen: open,
      onOpen,
      onClose,
    }),
    [onClose, onOpen, open]
  );
};
