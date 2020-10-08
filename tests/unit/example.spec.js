import Vuex from 'vuex';
import { BootstrapVue } from 'bootstrap-vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ChoosePuzzle from "@/components/ChoosePuzzle.vue";

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue);

describe("ChoosePuzzle.vue", () => {
    it("renders message to choose a puzzle", () => {
        const msg = "Choose a puzzle";
        const wrapper = shallowMount(ChoosePuzzle, {
          mocks: {
            $store: {
              dispatch: () => Promise.resolve(),
              state: {
                startMessage: 'start message'
              }
            }
          },
          localVue
        });

        expect(wrapper.text()).toMatch(msg);
    });
});
