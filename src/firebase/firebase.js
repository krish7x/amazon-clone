import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyB5uo8CXbekFjdwf_NL60cQPEvOaw0y2yw',
	authDomain: 'amzn-clone-krish7x.firebaseapp.com',
	databaseURL: 'https://amzn-clone-krish7x.firebaseio.com',
	projectId: 'amzn-clone-krish7x',
	storageBucket: 'amzn-clone-krish7x.appspot.com',
	messagingSenderId: '965480133349',
	appId: '1:965480133349:web:e2a3420240ec4815589a0c',
	measurementId: 'G-5EF6MSYCKX'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
