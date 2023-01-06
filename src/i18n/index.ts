import { createI18n } from "vue-i18n";

/**
 * import locale messages resource from json for global scope
 */
import de from "./locales/de.json";
import enUS from "./locales/en-US.json";
import esMx from "./locales/es-MX.json";

/**
 * setup vue-i18n with i18n resources with global type definition.
 * if you define the i18n resource schema in your `*.d.ts`, these is checked with typeScript.
 */
export const i18n = createI18n<false>({
  legacy: false,
  locale: "es-MX",
  fallbackLocale: "en-US",
  messages: {
    de: de,
    "es-MX": esMx,
    "en-US": enUS,
  },
});
