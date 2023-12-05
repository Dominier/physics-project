"use client";

import { velocity } from '@/utils/velocity';
import InputTable from '@/components/input-table';
import DisplayParse from '@/components/displayParse';

const TestPage = () => {
  let velocityTest = velocity();

  return (
    <div>
        <InputTable />
    </div>
  )
}

export default TestPage;
