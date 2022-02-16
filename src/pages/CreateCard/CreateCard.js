import { useState, useEffect } from "react"
import { createClient } from "@supabase/supabase-js"
import { CreateCardContainer } from "./styles"

export function CreateCard(){   
    const [name, setName] = useState("")
    const [about, setAbout] = useState("")
    const [linkedin, setLinkedIn] = useState("")

    const gitHubUser = window.location.href.split("/")[4];

    const supabaseURL = process.env.REACT_APP_URL
    const supabaseApiKey = process.env.REACT_APP_API_KEY
    const supabaseClient = createClient(supabaseURL, supabaseApiKey)

    const handleNewUser = ({name, linkedin, about}) => {
        const newUser = {
            name: name,
            about: about,
            github: `https://github.com/${gitHubUser}`,
            linkedin: `https://linkedin.com/in/${linkedin}`,
            img: `https://github.com/${gitHubUser}.png`
        }

        supabaseClient.from("user").insert([newUser]).then((data) => {
            console.log(data);
        })
        
        window.location.href = `/user/${gitHubUser}`
    }

    return (
        <CreateCardContainer>  
            <img src={`https://github.com/${gitHubUser}.png`} alt={gitHubUser} className="img"/>
            <h2>{gitHubUser}</h2>
            <input type="text" placeholder="Name" onInput={(e) => setName(e.target.value)}></input>
            <input type="text" placeholder="About" onInput={(e) => setAbout(e.target.value)}></input>
            <input type="text" placeholder="LinkedIn User" onInput={(e) => setLinkedIn(e.target.value)}></input>
            <button onClick={() => handleNewUser({name, about, linkedin})}>Create Card</button>
        </CreateCardContainer>
    )
}