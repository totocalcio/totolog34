import type { Device } from "@nuxtjs/device/runtime/types";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $device: Device;
  }
}
