import validator from '~/validator';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('validator', validator);
});
