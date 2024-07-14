export default defineNuxtRouteMiddleware((to) => {
  if (!to.path.endsWith("/")) {
    const path = `${to.path}/`;
    return { path };
  }
});
