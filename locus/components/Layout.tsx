import Footer from "./Footer"
import Nav from "./Nav"
import Sidebar from "./Sidebar"

const Layout = (props: any) => (
    <div className="h-screen overflow-hidden w-screen flex">

      <div style={{height: '100%'}} className="flex absolute z-10">
        <Sidebar component={props.component} />
      </div>

      <div style={{paddingLeft: 80}} className="bg-gray-200 flex-grow text-primary overflow-y-auto relative">
          <Nav />
          {props.children}
          <Footer />

      </div>

    </div>
)

export default Layout
