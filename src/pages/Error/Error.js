import { ErrorContainer } from "./styles"

export function Error(){
    const goHome = () => {
        window.location.href = '/'
    }
    
    return (
        <ErrorContainer>
            <h1>Error</h1>
            <div className="back">
                <h2>User Not Found or Acess Denied!</h2>
                <button onClick={goHome}>Go Home</button>
            </div>
        </ErrorContainer>
    )
}