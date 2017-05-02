import R from "ramda"
import hasMin from "./hasMin"

export default len => R.compose(hasMin(len), R.prop("length"))
