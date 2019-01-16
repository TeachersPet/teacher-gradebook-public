import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroupItem } from 'reactstrap'

export default function Student({ id, first_name, last_name }) {
  return (
  <Link to={`/Students/${id}?`}>
    <ListGroupItem action>{first_name} {last_name}</ListGroupItem>
  </Link>
  )
}