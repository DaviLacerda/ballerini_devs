import { useState, useEffect } from "react"
import { supabase } from "../../hooks/supabase"
import { CreateCardContainer } from "./styles"

export function CreateCard(){   
    const [name, setName] = useState("")
    const [about, setAbout] = useState("")
    const [linkedin, setLinkedIn] = useState("")

    const gitHubUser = supabase.auth.user().user_metadata.user_name;

    const handleNewUser = ({name, linkedin, about}) => {
        const newUser = {
            name: name,
            about: about,
            github: `https://github.com/${gitHubUser}`,
            linkedin: `https://linkedin.com/in/${linkedin}`,
            img: `https://github.com/${gitHubUser}.png`
        }

        supabase.from("user").insert([newUser]).then(() => {
            window.location.href = `/user`
        })
    }

    useEffect(() => {
        name !== "" && about !== "" && linkedin !== "" ? document.getElementById('createBtn').disabled = false : document.getElementById('createBtn').disabled = true
    }, [name, about, linkedin])
    

    return (
        <CreateCardContainer>  
            <img src={`https://github.com/${gitHubUser}.png`} alt={gitHubUser} className="img"/>
            <h2>{gitHubUser}</h2>
            <input type="text" placeholder="Nome" onInput={(e) => setName(e.target.value)}></input>
            <input type="text" placeholder="Sobre você" onInput={(e) => setAbout(e.target.value)}></input>
            <input type="text" placeholder="Usuário no LinkedIn" onInput={(e) => setLinkedIn(e.target.value)}></input>
            <button id="createBtn" onClick={() => handleNewUser({name, about, linkedin})}>Create Card</button>
        </CreateCardContainer>
    )
}