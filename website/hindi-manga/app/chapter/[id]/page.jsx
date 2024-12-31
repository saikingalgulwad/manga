import { connectToDatabase } from '@/app/lib/db';
import { users } from '@/app/lib/model/user';
import List from '@/components/List';
import React from 'react';

async function page({ params }) {
  const { id } = await params;
  await connectToDatabase();
  const data = await users.findById(id);

  return (
    <div className="flex flex-col-reverse gap-4 w-full mt-4 md:flex-row md:gap-6 md:mt-6">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 shadow-lg shadow-white rounded-lg p-4 m-2">
        <List id={data.title} number={id} />
      </div>

      {/* Content Area */}
      <div className="w-full md:w-3/4 md:h-screen">
        <iframe
          src={data.pdf}
          className="w-full h-[60vh] md:h-full rounded-md"
          title="PDF Viewer"
        />
      </div>
    </div>
  );
}

export default page;
