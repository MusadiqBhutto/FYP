import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function WorkingListingItem( props ) {
  const data = props.workingListing
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={`/workinglisting/${data._id}`}>
        <img
          src={
            data.imageUrls[0] 
          }
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {data.name}
          </p>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm text-gray-600 truncate w-full'>
              {data.address}
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            {data.description}
          </p>
         
        </div>
      </Link>
    </div>
  );
}
