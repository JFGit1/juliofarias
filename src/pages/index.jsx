import Seo from '@/src/components/Seo';

export default function Home() {
	return (
		<>
			<Seo
				title='JULIO FARIAS'
				desc='UX/UI Designer - Web Developer - Motion Designer'
			/>
			<main className='container mx-auto h-screen flex items-center flex-col justify-center'>
				<h1 className='font-bold text-6xl text-white mt-[-14rem] mb-2'>
					JULIO FARIAS
				</h1>
				<p className='text-white text-2xl font-normal'>
					UX/UI Designer - Web Developer - Motion Designer
				</p>
			</main>
		</>
	);
}
