import { tailwind } from "@theme-ui/presets";
import prism from "@theme-ui/prism/presets/theme-ui";

export default {
  ...tailwind,
  styles: {
    ...tailwind.styles,
    code: {
      ...prism,
    },
  },
};
