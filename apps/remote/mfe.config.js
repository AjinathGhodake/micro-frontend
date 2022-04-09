module.exports = {
  output: {
    uniqueName: "remote",
    publicPath: "http://localhost:4201/",
    scriptType: 'text/javascript'
},
  name: 'remote',
  exposes: {
    './Module': 'apps/remote/src/app/remote-entry/entry.module.ts',
  },
};
