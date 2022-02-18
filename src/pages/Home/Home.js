import { Header } from "../../components/Header/Header";
import {
    HomeContainer,
    HomeContentContainer,
    HomeContentContainerLeft,
    HomeContentContainerRight,
} from "./styles";
import DeveloperImg from "../../assets/developer_home.svg";
import BlobsImg from "../../assets/blobs.svg";
import { supabase } from "../../hooks/supabase";
import { useState, useEffect } from "react";
import { CreateCard } from "../CreateCard/CreateCard";

export function Home() {
    const [user, setUser] = useState(null)

    async function signInWithGitHub() { 
        await supabase.auth.signIn({
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
                    <HomeContainer>
                        <Header></Header>
                        <HomeContentContainer>
                            <HomeContentContainerLeft>
                                <h1>O maior banco de devs do Brasil</h1>
                                <p>
                                    Não importa se front ou back end, fazer networking é
                                    muito importante. Faça parte da maior comunidade de
                                    desenvolvedores brasileiros.
                                </p>

                                <button onClick={signInWithGitHub}>Entre agora</button>
                            </HomeContentContainerLeft>

                            <HomeContentContainerRight>
                                <img src={DeveloperImg} alt="Developer" />
                            </HomeContentContainerRight>

                            <img src={BlobsImg} alt="Blobs" className="blobs" />
                        </HomeContentContainer>
                    </HomeContainer>
                </>
            )
        }
        </>
    );
}
