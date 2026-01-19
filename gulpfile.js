// =====================================
// GULPFILE.JS - CONFIGURAÇÃO DE BUILD
// =====================================
// Este arquivo automatiza tarefas como compilação SASS, minificação de CSS e otimização de imagens

// Importa o Gulp - ferramenta de automação de tarefas
const gulp = require('gulp');

// Importa gulp-sass para compilar arquivos SCSS em CSS
const sass = require('gulp-sass')(require('sass'));

// Importa gulp-clean-css para minificar e otimizar arquivos CSS
const cleanCSS = require('gulp-clean-css');

// Importa gulp-imagemin para otimizar e comprimir imagens
const imagemin = require('gulp-imagemin');

// ===== FUNÇÃO STYLES =====
// Compila SCSS em CSS e minifica
// Esta função:
// 1. Busca todos os arquivos .scss na pasta src/styles
// 2. Compila SCSS em CSS
// 3. Minifica o CSS para reduzir o tamanho
// 4. Salva o resultado na pasta dist/css
function styles() {
    return gulp.src('src/styles/**/*.scss') // Busca todos os arquivos SCSS
        .pipe(sass().on('error', sass.logError)) // Compila SCSS em CSS e trata erros
        .pipe(cleanCSS()) // Minifica e otimiza o CSS
        .pipe(gulp.dest('dist/css')); // Salva em dist/css
}

// ===== FUNÇÃO IMAGES =====
// Otimiza e comprime imagens
// Esta função:
// 1. Busca todas as imagens na pasta src/images
// 2. Comprime as imagens sem perder muita qualidade
// 3. Salva as imagens otimizadas em dist/images
function images() {
    return gulp.src('./src/images/**/*', { encoding: false }) // Busca todas as imagens (encoding false = não converte em texto)
        .pipe(imagemin()) // Comprime e otimiza as imagens
        .pipe(gulp.dest('./dist/images')); // Salva em dist/images
}


// ===== EXPORTAR COMANDO DEFAULT =====
// Executa styles e images em paralelo
// Comando: npm run build
// Ambas as funções rodam ao mesmo tempo
exports.default = gulp.parallel(styles, images);

// ===== EXPORTAR COMANDO WATCH =====
// Fica observando mudanças nos arquivos SCSS
// Se houver mudanças, recompila automaticamente
// Comando: npm run dev
exports.watch = function() {
    // Monitora todos os arquivos SCSS e recompila quando há mudanças
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}