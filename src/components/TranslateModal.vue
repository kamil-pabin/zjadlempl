<template>
  <b-modal
    id="translate-modal"
    size="l"
    title="Przetłumacz stronę"
    show-backdrop
    scrollable
    ><Translator :countries="countries" @on-country-click="hideModal"
  /></b-modal>
</template>

<script>
import { Translator } from "vue-google-translate";
export default {
  name: "TranslateModal",
  components: {
    Translator,
  },
  data() {
    return {
      countries: [
        {
          code: 'en|pl',
          title: 'Polish',
        },
        {
          code: "en|en",
          title: "English",
        },
        {
          code: "en|zh-CN",
          title: "Chinese (Simplified)",
        },
        {
          code: "en|fr",
          title: "French",
        },
        {
          code: "en|de",
          title: "German",
        },
        {
          code: "en|it",
          title: "Italian",
        },
        {
          code: "en|ru",
          title: "Russian",
        },
        {
          code: "en|es",
          title: "Spanish",
        },
        {
          code: "en|iw",
          title: "Hebrew",
          flagIconUrl: "https://flagicons.lipis.dev/flags/4x3/il.svg",
          altText: "Hebrew language translation",
        },
      ],
    };
  },
  methods: {
    hideModal() {
      this.$bvModal.hide("translate-modal");
    },
  },
};
</script>