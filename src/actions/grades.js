export const ADD_GRADES = 'ADD_GRADES'

export function addGrades(grade) {
  return ({
    type: ADD_GRADES,
    payload: grade
  }
  )
}