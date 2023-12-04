import styles from "./student_signup.module.css"
import SignWrapper from "../../components/commons/sign/SignWrapper"
import ProfileIcon from "../../components/ProfileIcon"
import SignBtn from "../../components/commons/sign/SignBtn"
import SignInput from "../../components/commons/sign/SignInput"
import lottie from "@/public/lotties/profileCat"

export default async function Student_signup(props) {

    return (
        <div className={styles.container}>
          <form method="POST" action="/api/auth/studentSignup">
            <input style={{display: 'none'}} value={props.params.id} name="teacher"/>
            <SignWrapper>
                <h1
                    style={{
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        margin: '60px 0 48px 0',
                        color: '#666666',
                        fontWeight: '600'
                    }}>학생 회원가입</h1>
                <ProfileIcon lottie={lottie}/>
                <div className={styles.wrapper}>
                    <div
                        style={{
                            fontSize: '18px',
                            marginBottom: '16px',
                            fontWeight: '600',
                            color: '#666666'
                        }}>
                        이름을 입력하세요</div>
                    <SignInput name="name" type="text"/>
                    <div
                        style={{
                            fontSize: '18px',
                            marginBottom: '16px',
                            fontWeight: '600',
                            color: '#666666'
                        }}>
                        아이디를 입력하세요</div>
                    <SignInput name="id" type="text"/>
                    <div
                        style={{
                            fontSize: '18px',
                            marginBottom: '16px',
                            fontWeight: '600',
                            color: '#666666'
                        }}>비밀먼호를 입력하세요</div>
                    <SignInput name="password" type="password"/>
                    <div
                        style={{
                            fontSize: '18px',
                            marginBottom: '16px',
                            fontWeight: '600',
                            color: '#666666'
                        }}>비밀먼호를 한번 더 입력하세요</div>
                    <SignInput name="passwordConfirm" type="password" />
                    <SignBtn type="submit">회원가입</SignBtn>
                </div>
            </SignWrapper>
            </form>
        </div>
    )
}