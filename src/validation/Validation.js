import R from "ramda"
import withState from "recompose/withState"
import mapProps from "recompose/mapProps"
import compose from "recompose/compose"

const createPredicate = ([test, errorMsg]) => a => (test(a) ? null : errorMsg)
const createPredicates = R.map(createPredicate)
const runPredicates = ([input, validations]) =>
  R.map(predFn => predFn(input), createPredicates(validations))

const validate = R.compose(
  R.map(R.head),
  R.filter(R.length),
  R.map(data => R.filter(R.identity, runPredicates(data))),
  R.mergeWithKey((k, l, r) => [l, r])
)

const Validation = rules =>
  compose(
    withState("errors", "setErrors", {}),
    mapProps(({ setErrors, onSubmitForm, ...rest }) => ({
      ...rest,
      onSubmit: e => {
        e.preventDefault()
        const form = R.keys(rules).reduce((form, keyName) => {
          form[keyName] = R.path(
            ["value"],
            e.target.querySelector(`[name=${keyName}]`)
          )
          return form
        }, {})
        const errors = validate(form, rules)

        setErrors(errors)

        if (R.isEmpty(errors)) {
          return onSubmitForm && onSubmitForm(form)
        }
      }
    }))
  )

export default Validation
