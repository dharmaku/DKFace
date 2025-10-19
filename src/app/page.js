// import Navheader from "./components/Navheader";
import Navheader from '@/app/components/Navheader';
import Camera from '@/app/components/Camera';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
   <main className="bg-gray-950 min-h-screen py-8 text-white">
      <div className='max-w-3xl mx-auto px-4 space-y-8 py-4'>
        <Navheader />
        <Camera />
        <Footer />
      </div>
    </main>

  );
}
