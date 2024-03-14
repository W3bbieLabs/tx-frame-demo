import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL, API_URL } from './config';

//const searchParams = new URLSearchParams({ place_holder: 'place_holder' }); // place holder

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'tx',
      label: 'Shoot',
      target: `${NEXT_PUBLIC_URL}/api/tx`,
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/eyes_closed.jpg`,
    aspectRatio: '1:1',
  },
  postUrl: `${API_URL}/api/aftertx`,
});

export const metadata: Metadata = {
  title: 'w3bbie.xyz',
  description: 'W3bbie Was Here',
  openGraph: {
    title: 'w3bbie.xyz',
    description: 'W3bbie Was Here',
    images: [`${NEXT_PUBLIC_URL}/w3bbie1.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',

        padding: 0,
        margin: 0,
      }}
    >
      <h1>
        <a href="https://youtu.be/zugK5Tf4vJ8?si=W1VBJnst6wiLf9JO">Shoot</a>
      </h1>
    </div>
  );
}
