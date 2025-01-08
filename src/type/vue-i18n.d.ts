import 'vue';
import { I18n } from 'vue-i18n';

declare module 'vue' {
  interface ComponentCustomProperties {
    $t: I18n['global']['t'];
  }
}
