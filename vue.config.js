module.exports= {
    pages: {
        home: {
            entry: './src/views/home/main.js',
            template: 'public/index.html',
            title: 'MimosByLiv - Home',
            chunks: ['chunk-vendors', 'chunk-common', 'home']
        },
        login: {
            entry: './src/views/login/main.js',
            template: 'public/index.html',
            title: 'MimosByLiv - Login',
            chunks: ['chunk-vendors', 'chunk-common', 'login']
        },
        catalogo: {
            entry: './src/views/catalogo/main.js',
            template: 'public/index.html',
            title: 'MimosByLiv - Catálogo',
            chunks: ['chunk-vendors', 'chunk-common', 'catalogo']
        },
        'catalogo-admin': {
            entry: './src/views/catalogo-admin/main.js',
            template: 'public/index.html',
            title: 'MimosByLiv - Catálogo | Admin',
            chunks: ['chunk-vendors', 'chunk-common', 'catalogo-admin']
        },
        'edicao-produto': {
            entry: './src/views/edicao-produto/main.js',
            template: 'public/index.html',
            title: 'MimosByLiv - Edição de produto',
            chunks: ['chunk-vendors', 'chunk-common', 'edicao-produto']
        },
        'cadastro-produto': {
            entry: './src/views/cadastro-produto/main.js',
            template: 'public/index.html',
            title: 'MimosByLiv - Cadastro de produto',
            chunks: ['chunk-vendors', 'chunk-common', 'cadastro-produto']
        }
    }
}
