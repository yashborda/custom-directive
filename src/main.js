import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
// Global custom directive 
app.directive("demo", {
  mounted: (el, binding) => {
    el.style.color = binding.value.color;
    if (binding.value.booleanvalue) {
      console.log("pass any function");
      el.style.fontSize = "30px";
    } else {
      console.log("pass any function");
    }
  },
});

app.use(store);
app.use(router);
app.mount("#app");
