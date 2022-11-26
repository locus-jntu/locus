import Footer from "./Footer"
import Nav from "./Nav"
import Sidebar from "./Sidebar"

const Layout = (props: any) => (
    <div className="h-screen overflow-hidden flex">

      <Sidebar component="companies"/>

      <div className="bg-gray-200 flex-grow text-primary overflow-y-auto relative">
          <Nav />
          {props.children}
          <Footer />

      </div>

    </div>
)

export default Layout
