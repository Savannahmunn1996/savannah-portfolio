import myPicture from '../../me.png'


export default function About() {
    return (
      <div max-w-sm>
        <h1 className="font-bold font-myFont text-6xl text-center  text-green-600 pt-4 mt-16 mb-16 pb-4">Savannah Mercedes Munn</h1>
        
        <div className='flex flex-col justify-center items-center'>
        <img class=" rounded-t-3xl object-scale-down h-80 w-99 rounded-b-3xl mb-3  shadow dark:bg-gray-800 dark:border-gray-700" src={myPicture}  alt="" />
        </div>
        
        
        <p className="text-center font-myFont font-semibold m-20 p-10 text-2xl text-blue-700">
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>
      </div>
    );
  }
  