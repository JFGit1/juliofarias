import Seo from '@/src/components/Seo';

export default function Home() {
	return (
		<>
			<Seo
				title='JULIO FARIAS'
				desc='UX/UI Designer - Web Developer - Motion Designer'
			/>
			<main className='container mx-auto h-screen flex items-center flex-col justify-center'>
				<div className='flex justify-center flex-col items-center mt-[-16rem] px-4 py-2 rounded-lg bg-[#0f1e7293] border border-[#2541e2b9]'>
					<h1 className='font-bold text-3xl text-[#00b7ff] mb-1'>
						JULIO FARIAS.com
					</h1>
					<p className='text-white text-lg font-normal'>
						UX/UI Designer - Web Developer - Motion Designer
					</p>
				</div>
			</main>
		</>
	);
}
