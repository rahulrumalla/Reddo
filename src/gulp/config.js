var src = "./";
var dest = "./build";
var deps = "./node_modules"

module.exports = {
    depScripts: {
        src: [
            deps + '/react/dist/react.js',
            deps + '/react/dist/JSXTransformer.js',
            deps + '/jquery/dist/jquery.js',
        ],
        dest: dest + "/js"
    },
    appScripts: {
        src: [
            src + 'app/components/*.js',
            src + 'app/views/*.js',
            src + 'app/*.js'
        ],
        dest: dest + "/js"
    },
    styles: {
        src: [
            deps + "/bootstrap/dist/css/bootstrap.min.css",
            src + "/assets/css/site.css"
        ],
        dest: dest + "/css"
    },
    icons: {
        src: [
            deps + '/bootstrap/dist/fonts/*'
        ],
        dest: dest + "/fonts"
    },
    images: {
        src: src + "assets/img/*",
        dest: dest + "/img"
    },
    index: {
        src: src + "app/Index.html",
        dest: dest
    },
    staticData: {
        src: src + "app/*.json",
        dest: dest
    }
};