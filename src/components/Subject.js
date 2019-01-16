import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroupItem } from 'reactstrap'

export default function Subject({ id, subject_name }) {
  return (
    <Link to={`/Subjects/${id}`}>
      <ListGroupItem action>{subject_name}</ListGroupItem>
    </Link>
  )
}