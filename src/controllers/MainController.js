const path = require('path');

module.exports = {
  async renderPage(req, res) {
    let { page } = req.params;

    if ( !page ) {
      page = 'index'
    }

    const filePath = path.resolve(__dirname, '..', `public/${page}.html`);

    return res.sendFile(filePath);
  },
  
  async getJsFile(req, res) {
    const { file } = req.params;
    const filePath = path.resolve(__dirname, '..', `public/js/${file}`);
    return res.sendFile(filePath)
  },

  async getCssFile(req, res) {
    const { file } = req.params;
    const filePath = path.resolve(__dirname, '..', `public/css/${file}`);
    return res.sendFile(filePath)
  }

}