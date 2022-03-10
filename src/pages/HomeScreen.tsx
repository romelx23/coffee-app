import { Layout } from '../components/Layout';
// import Lottie from 'lottie-web';
import CoffeData from '../data/coffe.json';
import BreadData from '../data/bread.json';
import { CardCoffe } from '../components/CardCoffe';
import { Toast } from '../components/Toast';
import { Link, useParams } from 'react-router-dom';

export const HomeScreen = () => {
  const {name}=useParams();
  // const [coffe, setCoffe] = useState<Coffee[]>([])
  // const [isPlaying, setIsPlaying] = useState(false);
  // const handleAnimate = () => {
  //   setIsPlaying(true);
  // }
  // // console.log(isPlaying);
  // const getCoffe = async () => {
  //   const resp = await fetch('https://api.sampleapis.com/coffee/hot')
  //   const data: Coffee[] = await resp.json()
  //   setCoffe(data.slice(2, 10))
  // }
  // useEffect(() => {
  //   getCoffe()
  // }, [])
  return (
    <Layout>
      <div className='p-3'>
        <div className="w-full h-[80vh] relative flex justify-center px-2">
        <div className='font-semibold text-2xl my-5 mt-3 absolute z-30 font-sansita top-1/3'>
          <h1 className='text-6xl my-3'>Café y Postres</h1>
          <p className='text-base'>Los mejores panes desde 1998</p>
          </div>
          <img src="https://abmauri.es/wp-content/uploads/2020/08/articulo-1-imagen.jpg" alt="pan" className='w-full h-[75vh] object-cover grayscale-[.4] rounded-xl' />
          <div className='w-full h-[75vh] bg-gradient-to-t from-orange-700 absolute z-20 rounded-b-xl'></div>
        </div>
        <div className="w-full h-20 flex justify-center gap-5 mb-5">
            <Link to={"/category/coffe"} className='btn__coffe'>
              coffe
            <i className="fas fa-coffee"></i>
            </Link>
            <Link to={"/category/pan"} className='btn__coffe'>
              pan
              <i className="fas fa-bread-slice"></i>
            </Link>
        </div>
        <div className='grid grid-cols-cards place-items-center gap-5 '>

          {
            name==='coffe'?
            CoffeData.map(coffe => (
              <CardCoffe key={coffe.id} coffe={coffe} type="coffe"/>
            ))
            :
            BreadData.map(coffe => (
              <CardCoffe key={coffe.id} coffe={coffe} type="pan"/>
            ))
          }

          {/* {
            BreadData.map(coffe => (
              <CardCoffe key={coffe.id} coffe={coffe} type="pan"/>
            ))
          } */}
          
        </div>
        {/* <Toast message='Se agrego al carrito' icon='fas fa-info-circle'/> */}
      </div>
    </Layout>
  )
}
