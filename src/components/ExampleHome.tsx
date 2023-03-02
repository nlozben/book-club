import React, { useState } from 'react'

const ExampleHome = () => {

	const [data, setData] = useState({
		fullName: '',
		phoneNumber: ''
	});

	window.addEventListener("message", (event)=>{
		if (event.origin !== 'http://admin.localhost:3000') {
			return null;
		}
		setData(event.data);
	});

	return (
		<div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<h1 style={{ color: 'black' }}>Example App home (Dialer)</h1>
			<body>
				<input type="text" id="fullName" name="fullName" value={data.fullName} /> <br />
				<input type="text" id="phoneNumber" name="phoneNumber" value={data.phoneNumber} />
			</body>
		</div>
	)
}

export default ExampleHome;