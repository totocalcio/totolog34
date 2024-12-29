export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("content:file:afterParse", (file: any) => {
    const prefix = "/blog";
    if (file._path.startsWith(prefix)) {
      file._original_dir = prefix;
      file._path = file._path.replace(prefix, "");
    }
  });
});
