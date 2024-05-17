import { validate } from '~/validator';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('validate', validate);
});
