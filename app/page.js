import Image from 'next/image'
import nominated from '@/content/participants'
import AnnouncementRoller from '@/content/AnnouncementRoller'

export const metadata = {
  title: 'Bigg Boss 7 Telugu Voting Online Results Live ',
  description: 'Stay updated with the latest Bigg Boss 7 Telugu voting results live. Cast your vote and watch the drama unfold in real-time. Get all the inside scoop on your favorite reality show with our live updates and results tracking.',
}

export default function Home() {
  const week =7
  
  return (
    <div className='bg-[#D9D8D7]  '>
      <div className='w-full h-14 flex justify-center items-center bg-[#736C63] text-[#010000] '>
        <AnnouncementRoller/>
      </div>

      <div className='text-[1.7rem] text-[#261B14] font-semibold  text-center my-16'>
        Bigg Boss 7 Telugu Live Voting.
      </div>

      <div className='flex flex-col w-full justify-center items-center'>
        <div className='text-normal w-11/12 text-[#261B14] font-normal text-center md:w-8/12'>
          If you're looking for information on how to vote for Bigg Boss Telugu contestants and updates on Bigg Boss 7 Telugu, you've come to the right place. This blog is dedicated to providing you with the necessary details.
        </div>

        <a href='#voting-poll'  className='flex flex-col w-fit rounded-lg bg-[#8C4C27] text-[#D9D8D7] justify-center items-center my-12 text-normal py-4 px-8'>
          Voting Poll
        </a>

        <div className='text-3xl md:text-4xl font-semibold w-full first-letter text-center py-10 px-6 line-clamp-5 bg-[#40291C] text-[#D9D8D7]'>
        {`Bigg Boss 7 Telugu Vote (week ${week})`}
        </div>

        <div className='flex flex-col md:flex-row justify-center mt-12  items-center md:w-9/12 md:flex-wrap'>
          {nominated.map((detail) => (
            <div className='flex flex-col w-fit justify-center items-center my-8 text-2xl text-center px-4'>
              <Image src={detail.image} className='rounded-full' width={200} height={200}></Image>
              <div className='font-normal text-base  mt-6 mb-2.5 bg-[#b1a596] text-[#010000] px-6 py-2 rounded-lg'>{detail.name}</div>
              {/* <div className='font-normal text-sm text-center bg-[#8C4C27] text-[#D9D8D7] px-5 py-1.5 rounded-md'>Vote</div> */}
            </div>
          ))}
        </div>
        <div className='my-8'>
        <div className='text-xl md:text-5xl text-[#8C4C27] font-semibold'>Bigg Boss Telugu Voting</div>
        <div className='h-0.5 md:h-1 w-full mt-2 md:mt-4 bg-[#8C4C27]'></div>
        </div>
        
        <Image src={'/Bigg_Boss.jpg'} className='mb-8 md:mb-10 md:rounded-sm' width={500} height={500}/>
        <div className='text-normal w-11/12 font-normal text-center md:w-8/12 text-[#261B14]'>
        <p>Bigg Boss is an Indian Telugu-language television reality show of the Bigg Boss franchise which airs on Star Maa and streams on Disney+ Hotstar in India. It follows the format of the Dutch reality show Big Brother, which was first developed by Endemol in the Netherlands.</p>
        <p className='my-8'>Starting in 2017, the show has rolled out six seasons so far; N. T. Rama Rao Jr. and Nani hosted Season 1 and 2 respectively, while Nagarjuna is hosting the show from Season 3 onwards. In Season 2 and 6 features general public along with celebrities as a housemates.</p>
        </div>
        <div className="strawpoll-embed h-fit md:h-[40rem]" id='voting-poll' style={{ height: '48rem', maxWidth: '640px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
      <iframe title="StrawPoll Embed" id="strawpoll_iframe_Qrgebx7WjZp" src="https://strawpoll.com/embed/Qrgebx7WjZp" style={{ position: 'static', visibility: 'visible', display: 'block', width: '100%', flexGrow: 1 }} frameBorder="0" allowFullScreen allowTransparency>Loading...</iframe>
      <script async src="https://cdn.strawpoll.com/dist/widgets.js" charSet="utf-8"></script>
    </div>
    <div className='text-normal w-11/12 font-normal text-center md:-my-[10rem] pb-12 md:w-8/12'>
        <p>If you're looking for information on how to cast your vote for Bigg Boss Telugu contestants, you've landed on the right website. Our platform is dedicated to guiding you through the voting process for Bigg Boss 7 Telugu and keeping you updated on all the latest happenings in the show.</p>
        <p className='my-8'>For those seeking to participate in the Bigg Boss Telugu voting, our website is your go-to resource. We provide step-by-step instructions on how to vote for your favorite contestants, ensuring that you have a say in who stays and who goes on the show.</p>
        <p>In addition to voting instructions, we offer real-time updates, highlights, and insights into Bigg Boss 7 Telugu. Our goal is to keep you informed and engaged, making your Bigg Boss viewing experience even more enjoyable.</p>
    </div>
    </div>
    </div>
  )
}
