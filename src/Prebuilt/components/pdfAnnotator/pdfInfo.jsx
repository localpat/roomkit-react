import React from "react";
import { InfoIcon } from "@100mslive/react-icons";
import { Text } from "../../../";
import { DialogRow } from "../../primitives/DialogContent";

export const PDFInfo = () => {
  return (
    <DialogRow
      css={{
        px: "$8",
        py: "$3",
        bg: "$surface_default",
        r: "$1",
        outline: "none",
        border: "1px solid $border_bright",
        minHeight: "$11",
      }}
    >
      <InfoIcon
        width="64px"
        height="64px"
        style={{
          paddingRight: "16px",
        }}
      />
      <Text variant="caption">
        On the next screen, ensure you select “This Tab” and click on share.
        Only the PDF viewer will be seen by other participants
      </Text>
    </DialogRow>
  );
};
