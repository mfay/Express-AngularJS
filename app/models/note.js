
function Note (opts) {
  if(!opts) opts = {};
  this.title = opts.title || '';
  this.description = opts.description || '';
}

module.exports = Note;