import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { Button, Form, Input } from "antd";


const firebaseConfig = {
  apiKey: "AIzaSyBOmqApRyG5ynHEwI9MI-ecfv7wsjc1bo8",
  authDomain: "my-first-firestore-nb.firebaseapp.com",
  projectId: "my-first-firestore-nb",
  storageBucket: "my-first-firestore-nb.appspot.com",
  messagingSenderId: "661912733015",
  appId: "1:661912733015:web:7f6d41b313e3ca0a9dea12"
};


export default function Login({setUser}) {
    const handleLogin = ({ email, password }) => {
        const app = initializeApp(firebaseConfig); //connect to firebase
        const auth = getAuth(app) //connect to firebase authentification
        //login with firebase auth
        signInWithEmailAndPassword(auth, email, password)
        .then(res => setUser(res.user))
        .catch(console.error)
    }
    const handleGoogleLogin= () =>{
        const app = initializeApp(firebaseConfig)
        const auth = getAuth(app)
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
                .then(res => setUser(res.user))
        .catch(console.error)
    }
    return(
        <section style={{padding: '2em'}}>

            <Form
            onFinish={handleLogin}
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            >
                <Form.Item label="Email" name="email" rules={[{required: true, message: 'Enter a valid email, please 😀'}]}>
                    <Input/>
                </Form.Item >
                <Form.Item label="Password" name="password" rules={[{required: true, message: 'Please enter your password!'}]}>
                    <Input.Password/>
                </Form.Item>
                <Form.Item wrapperCol={{span: 16, offset: 8}}>
                    <Button type="primary" htmlType="submit">Login</Button>
                </Form.Item>
                <Form.Item wrapperCol={{span: 16, offset: 8}}>
                    <Button onClick={handleGoogleLogin}>Google Login</Button>
                </Form.Item>
            </Form>
        </section>
    )
}