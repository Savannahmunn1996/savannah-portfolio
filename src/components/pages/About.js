import me from "../src/me.png"


export default function About() {
    return (
      <div>
        <h1 className="font-bold font-myFont text-6xl text-center  text-green-600 pt-4 mt-16 mb-16 pb-4">Savannah Mercedes Munn</h1>
        
        <div>
        <img
              class="rounded-t-lg"
              src={me}
              alt=""
            />
        </div>
        
        
        <p>
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
  