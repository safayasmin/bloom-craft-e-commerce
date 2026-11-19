import Navbar from '../component/Navbar'
import Categories from './Categories'
import Footer from './Footer'

const Category = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Navbar />
      <main>
        <Categories />
      </main>
      <Footer />
    </div>
  )
}

export default Category
