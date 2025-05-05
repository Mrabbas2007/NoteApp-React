import { NavBar, Notes } from "../../components"


const Home = () => {

    return (
        <div className="w-[90%] h-full flex justify-between items-center">
            <NavBar/>
            <Notes/>
        </div>
    )
    
}


export default Home