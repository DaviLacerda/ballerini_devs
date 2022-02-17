import { Header } from "../../components/Header/Header";
import {
    HomeContainer,
    HomeContentContainer,
    HomeContentContainer__Left,
    HomeContentContainer__Right,
} from "./styles";
import DeveloperImg from "../../assets/developer_home.svg";
import BlobsImg from "../../assets/blobs.svg";
import { Error } from "../Error/Error";
import { supabase } from "../../hooks/supabase";
import { useState, useEffect } from "react";
import { CreateCard } from "../CreateCard/CreateCard";

export function Home() {
    const [user, setUser] = useState(null)

    async function signInWithGitHub() { 
        const {user, session, error} = await supabase.auth.signIn({
            provider: "github",
        })
    }

    const checkUser = async() => {
        const user = await supabase.auth.user()
        setUser(user)
    }

    useEffect(() => {
      checkUser()
      window.addEventListener('hashchange', () => {
          checkUser()
      })
    }, [])
    

    return (
        <>
            {
            user ? <CreateCard /> : ( 
                <>
                    <Header></Header>
                    <HomeContainer>
                        <HomeContentContainer>
                            <HomeContentContainer__Left>
                                <h1>O maior banco de devs do Brasil</h1>
                                <p>
                                    Não importa se front ou back end, fazer networking é
                                    muito importante. Faça parte da maior comunidade de
                                    desenvolvedores brasileiros.
                                </p>

                                <button onClick={signInWithGitHub}>Entre agora</button>
                            </HomeContentContainer__Left>

                            <HomeContentContainer__Right>
                                <img src={DeveloperImg} alt="Developer" />
                            </HomeContentContainer__Right>

                            <img src={BlobsImg} className="blobs" />
                        </HomeContentContainer>
                    </HomeContainer>
                </>
            )
        }
        </>
    );
}
