import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { createClient } from "@supabase/supabase-js";
import { Header } from "../../components/Header/Header";
import { UserContainer, CardsDisplay, Card } from "./styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export function User() {
    const [data, setData] = useState([])

    const supabaseURL = process.env.REACT_APP_URL
    const supabaseApiKey = process.env.REACT_APP_API_KEY
    const supabaseClient = createClient(supabaseURL, supabaseApiKey)

    const requestDatabase = async () => {
        const database = await supabaseClient.from("user").select("*");
        setData(database.data)
    }

    useEffect(() => {
        requestDatabase()
    }, [data])

    return (
        <>
            <Header />
            <UserContainer>
                <CardsDisplay>
                    <Swiper
                        slidesPerView={1}
                        navigation
                        centeredSlides="true"
                        breakpoints={{
                            1200: {
                            slidesPerGroup: 1,
                            slidesPerView: 3,
                            spaceBetween:200,
                            },
                        }}
                    >
                    {
                        data.map((user) => {
                            return(
                                <SwiperSlide key={user.id}>
                                    <Card>
                                        {user.img && <img src={user.img} alt={user.name || "Developer"} />}
                                        {user.name && <h2>{user.name}</h2>}
                                        {user.about && <h3>{user.about}</h3>}
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
