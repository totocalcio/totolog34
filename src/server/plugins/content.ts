export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("content:file:afterParse", (file: any) => {
    for (const prefix of ["/blog"]) {
      if (file._path && file._path.startsWith(prefix)) {
        file._original_dir = prefix;
        file._path = file._path.replace(prefix, "");
      }
    }
  });
});