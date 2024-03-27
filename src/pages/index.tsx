import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <Map
    // places={[
    //   {
    //     id: '1',
    //     name: 'Florianópolis',
    //     slug: 'florianopolis',
    //     location: { latitude: -27.5935, longitude: -48.55854 }
    //   }
    // ]}
    />
  )
}
