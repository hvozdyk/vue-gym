import moment from 'moment'

export const date = function(value, format = 'MM-DD-YYYY') {
  return value ? moment(value).format(format) : ''
}
