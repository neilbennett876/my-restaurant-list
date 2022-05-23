// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { Button, Form, Input } from "antd";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOmqApRyG5ynHEwI9MI-ecfv7wsjc1bo8",
  authDomain: "my-first-firestore-nb.firebaseapp.com",
  projectId: "my-first-firestore-nb",
  storageBucket: "my-first-firestore-nb.appspot.com",
  messagingSenderId: "661912733015",
  appId: "1:661912733015:web:7f6d41b313e3ca0a9dea12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function Login() {
    return(
        <section style={{padding: '2em'}}>

            <Form 
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            >
                <Form.Item label="Email" name="email">
                    <Input/>
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input.Password/>
                </Form.Item>
                <Form.Item wrapperCol={{span: 16, offset: 8}}>
                    <Button type="primary" htmlType="submit">Login</Button>
                </Form.Item>
            </Form>
        </section>
    )
}