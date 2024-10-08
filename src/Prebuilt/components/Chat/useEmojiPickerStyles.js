import { useEffect, useRef } from "react";

export const useEmojiPickerStyles = (showing) => {
  const ref = useRef(null);
  useEffect(() => {
    if (showing) {
      setTimeout(() => {
        const root = ref.current?.querySelector("em-emoji-picker")?.shadowRoot;
        const style = document.createElement("style");
        style.textContent = `
          #root {
            --em-rgb-color: var(--hms-ui-colors-on_surface_high);
            --em-rgb-input: var(--hms-ui-colors-on_primary_high);
            --em-color-border: var(--hms-ui-colors-surface_bright);
            --color-b: var(--hms-ui-colors-on_surface_high);
            --rgb-background: transparent;
            color: var(--hms-ui-colors-on_surface_high);
            font-family: var(--hms-ui-fonts-sans);
          }
          .sticky {
            top: 0.25rem;
            background-color: var(--hms-ui-colors-surface_bright);
            margin-top: 0.5rem;
          }
        `;
        root?.appendChild(style);
      }, 0);
    }
  }, [showing]);

  return ref;
};
