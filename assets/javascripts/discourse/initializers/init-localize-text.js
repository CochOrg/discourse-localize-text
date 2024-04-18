import {withPluginApi} from "discourse/lib/plugin-api";
import Localization from "../lib/localization";

export default {
  name: 'init-localize-text',

  initialize(container) {
    let localization = new Localization();

    withPluginApi("0.12.1", (api) => {
      api.onPageChange((url, title) => {

        // localization.initSidebarObserver();
        localization.initWidgetObserver();
        localization.initTopicsObserver();
        localization.initFooterObserver();
        //
        //
        // localization.localizeSidebarCategories();
        localization.localizeTopicsCategories();
        localization.localizeShowTopicCategories();
        localization.localizeCategoriesList();
        localization.localizeFooter();
      });
    });
  }
};
