"use client";

import dynamic from 'next/dynamic';

const PresentationWrapper = dynamic(
 () => import('./components/PresentationWrapper'),
 { ssr: false }
);

export default function Home() {
 return <PresentationWrapper />;
}
