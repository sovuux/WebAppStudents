import { Configuration } from "webpack";

export default{
    css: {
        loaderOptions: {
            sass: {
                additionalData:
                    ' "@/assets/styles.scss"; '
            }
        }
    }
}