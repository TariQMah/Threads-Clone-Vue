import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "main-layout"
declare module "/Volumes/Macintosh HD - Data 1/vue-nuxt/threads-clone/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}