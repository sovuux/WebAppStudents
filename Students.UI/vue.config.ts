import { Configuration } from "webpack";

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData:
                    ' "@/assets/styles.scss"; '
            }
        }
    }
} as Configuration