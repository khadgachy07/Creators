import { Footer, NavBar } from "@components/ui/common";


export default function BaseLayout({children}) {
    return(
        <div className="max-w-7xl mx-auto px-4">
            <NavBar/>
            <div className="fit">
                {children}
            </div>
            <Footer/>
        </div>
    )
    
}