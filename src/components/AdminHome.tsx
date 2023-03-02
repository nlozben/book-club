import React from 'react'

const AdminHome = () => {
	let popup: Window | null;

	const openPopup = () => {
		popup = window.open('http://example.localhost:3000', 'popup', 'height=300px, width=500px');
	};

	const sendMessage = () => {
		const message = {
			fullName: 'Steven is Cool',
			phoneNumber: '(626) 774-4130',
		}

    popup!.postMessage(message, 'http://example.localhost:3000')
    popup!.focus();
	}

	return (
		<div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<h1 style={{ color: 'black' }}>Admin App home</h1>
			<br />
			<button onClick={openPopup}>Open Dialer</button>
			<button onClick={sendMessage}>Send message</button>
		</div>
	)
}

export default AdminHome;