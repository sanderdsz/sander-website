"use client"

import {Window} from "@/components/window";
import {useDevice} from "@/contexts/deviceContext";
import {PageWrapper} from "@/components/pageWrapper";

export default function About() {
  const device = useDevice();
  return (
    <PageWrapper>
      <Window
        width={device.deviceWidth < 640 ? 20 : 40}
        height={30}
      />
    </PageWrapper>
  )
}