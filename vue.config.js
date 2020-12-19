module.exports = {
  publicPath: '/_admin',
  pages: {
    index: {
      // entry for the page
      entry: 'frontend/index.js',
      // the source template
      template: 'frontend/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Admin Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    public: {
      // entry for the page
      entry: 'frontend/public.js',
      // the source template
      template: 'frontend/public.html',
      // output as dist/public.html
      filename: 'public.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Public Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'public']
    }
  }
}
