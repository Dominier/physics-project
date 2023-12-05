"use client";

import { velocity } from '@/utils/velocity';
import InputTable from '@/components/input-table';

const TestPage = () => {
  let velocityTest = velocity();

  return (
    <div>
        {velocityTest}
        <InputTable />
    </div>
  )
}

export default TestPage;
