"use client";

import Image from 'next/image';
import { velocity } from '@/utils/velocity';
import InputTable from '@/components/input-table';

export default function Home() {
  let velocityTest = velocity();

  return (
    <div>
      <div className="font-bold text-xl text-center pt-5 border border-black">
        Physics Project Very Rough Draft
      </div>

      <div className="grid lg:grid-cols-2 pl-14 pr-14 mt-[4%]">
        <div className="border border-blue-600 text-center"><a href="/linechart">Kinematics</a></div>
        <div className="border border-red-600 text-center">Projectile Motion</div>
        {velocityTest}
      </div>

      <InputTable />

    </div>
  )
}
