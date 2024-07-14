export default defineNuxtRouteMiddleware((to, from) => {
  const split = to.path.split("/");
  const path = split.at(-1) === "" ? `/${split.at(-2)}/` : `/${split.at(-1)}/`;
  return { path };
});
