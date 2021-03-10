import { createApp } from "vue";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimesCircle, faCheck, faPlus);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
