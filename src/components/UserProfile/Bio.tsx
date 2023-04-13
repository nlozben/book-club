import React from "react"

const Bio = () => {
	const obj = {
		name: 'John',
		age: '19',
		bio: 'Let us plumb',
		review: 'This guy plumbs very well, but demanded chips' 
	}

  return (
		<>
			<h1>{obj.name}, {obj.age}</h1>
			<p>Bio: {obj.bio}</p>
			<p>This is an anonymous review: {obj.review}</p>
		</>
  )
}

export default Bio;
