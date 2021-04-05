import Link from 'next/link';
import Image from 'next/image';

export default function FirstPost() {
    return <div>
        <h1>First Post -Stu</h1>
        <img src="/images/headshot.jpg" width="300"></img>
        {/* <Image
                src="/images/intro.png" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Stuart Marsh"
              /> */}
        <Link href="/"><a>Let's go home</a></Link>
    </div>
  }