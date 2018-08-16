if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI:'mongodb://heilmarie:heilmarie"@ds123372.mlab.com:23372/nomnombears'}
} else {
    module.exports = {mongoURI:'mongodb://localhost/vidjot-dev'}
}