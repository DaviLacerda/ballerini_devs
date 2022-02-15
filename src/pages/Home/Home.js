import { Header } from "../../components/Header/Header";
import {
    HomeContainer,
    HomeContentContainer,
    HomeContentContainer__Left,
    HomeContentContainer__Right,
} from "./styles";
import DeveloperImg from "../../assets/developer_home.svg";
import BlobsImg from "../../assets/blobs.svg";
import { app } from "../../firebaseConfig";
import { GithubAuthProvider, getAuth, signInWithRedirect, signInWithPopup } from "firebase/auth";
import { Error } from "../Error/Error";

export function Home() {
    const gitHubProvider = new GithubAuthProvider();
    const auth = getAuth();

    const gitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider).then((res) => {
            window.location.href = `/user/${res._tokenResponse.screenName}`
        }).catch((err) => {
            window.location.href = '/error'
            console.log(err);
        })
    };

    return (
        <HomeContainer>
            <Header></Header>
            <HomeContentContainer>
                <HomeContentContainer__Left>
                    <h1>O maior banco de devs do Brasil</h1>
                    <p>
                        Não importa se front ou back end, fazer networking é
                        muito importante. Faça parte da maior comunidade de
                        desenvolvedores brasileiros.
                    </p>
                    
                        <button onClick={gitHubSignIn}>Entre agora</button>
                    
                </HomeContentContainer__Left>

                <HomeContentContainer__Right>
                    <img src={DeveloperImg} alt="Developer" />
                </HomeContentContainer__Right>

                <img src={BlobsImg} className="blobs" />
            </HomeContentContainer>
        </HomeContainer>
    );
}
