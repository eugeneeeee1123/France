import { routing } from "@/i18n/routing";
import messages from "../messages/fr.json";

// next-intl 4 type augmentation: `Locale` becomes the fr | en | zh union and
// every t('key') call is checked against the French message file, so a key
// that is missing in fr.json fails `tsc` instead of rendering an empty string.
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
