module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/main.scss";` 
            }
        }
    }
}