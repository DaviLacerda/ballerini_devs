import { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { UserContainer, CardsDisplay, Card, DevInput, LogOutButton } from "./styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import { supabase } from "../../hooks/supabase";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export function User() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    const requestDatabase = async () => {
        const database = await supabase.from("user").select("*");
        setData(database.data)
    }

    SwiperCore.use([Navigation])

    const logOut = async () => {
        await supabase.auth.signOut()
        window.location.href = '/'
    }

    useEffect(() => {
        requestDatabase()
    }, [data])

    return (
        <>
            <Header />
            <DevInput>
                <SearchIcon />
                <input type="text" placeholder="Buscar Desenvolvedor" onInput={(e) => setSearch(e.target.value)}></input>
            </DevInput>
            <UserContainer>
                <CardsDisplay>
                    <LogOutButton onClick={logOut}>LogOut</LogOutButton>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        centeredSlides={true}
                        navigation
                        breakpoints={{
                            1200: {
                            slidesPerGroup: 1,
                            slidesPerView: 3,
                            },
                        }}
                    >
                    {
                        data.filter((user) => {
                            if(search === ""){
                                return user
                            }
                            else if(user.name.toLowerCase().includes(search.toLowerCase())){
                                return user
                            }
                        }).map((user) => {
                            return(
                                <SwiperSlide key={user.id}>
                                    <Card>
                                        {user.img && <img src={user.img} alt={user.name || "Developer"} />}
                                        {user.name && <h2>{user.name}</h2>}
                                        {user.about && <p>{user.about}</p>}
                                        <div className="icons">
                                            {
                                                user.github && (
                                                    <a href={user.github} target="_blank">
                                                        <GitHubIcon />
                                                    </a>
                                                )
                                            }
                                            {
                                                user.linkedin && (
                                                    <a href={user.linkedin} target="_blank">
                                                        <LinkedInIcon />
                                                    </a>
                                                )
                                            }
                                        </div>
                                    </Card>
                                </SwiperSlide>
                            )
                        })
                    }
                    </Swiper>
                </CardsDisplay>
            </UserContainer>
        </>
    );
}
