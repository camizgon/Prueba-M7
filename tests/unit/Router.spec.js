import { createRouter, createWebHistory } from "vue-router";
import { mount, createLocalVue } from "@vue/test-utils";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const localVue = createLocalVue();
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/about", name: "about", component: AboutView },
  ],
});

describe("Vue Router", () => {
  it("carga HomeView por defecto", async () => {
    const wrapper = mount(HomeView, { global: { plugins: [router] } });
    await router.push("/");
    expect(wrapper.vm.$route.name).toBe("home");
  });

  it("carga AboutView", async () => {
    const wrapper = mount(AboutView, { global: { plugins: [router] } });
    await router.push("/about");
    expect(wrapper.vm.$route.name).toBe("about");
  });
});
