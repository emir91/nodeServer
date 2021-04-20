const root = (req, res) => {
    res.end('Home page is coming soon!');
}

const text = (req,res) => {
    const param = req.params.param || 'Node';
    res.end(`Hello ${param} Server!`);
}

const html = (req,res) => {
    const param = req.params.param || 'Node';
    res.end(`<h1>Hello ${param} Server!</h1>`);
}

module.exports = { root, text, html };
