import React from 'react'
import PageHeader from './PageHeader'
import Alert from './Alert';

export default function Page(props) {

  return (
    <div>
      <PageHeader pageInfo={props.pageInfo} />
      <div className="content">
        <div className="container">
        <Alert alert={props.alert} />
          {props.content}
        </div>
      </div>
    </div>
  )
}
