import Link from 'next/link'
import React from 'react'

type Props = {
    title?: string;
    redirectTitle?: string
    redirectTo?: string
}

const ErrorBoundary = ({title , redirectTitle,redirectTo}: Props) => {
  return (
    <div>
      {/* <TbError404 size={160} className='text-red-700' /> */}
      <div className='flex flex-col gap-4 mt-5'>

      <h2 className='text-red-700 font-bold'>{title || "صفحه مورد نظر یافت نشد"}</h2>
      <Link
        className="p-2 border-green-700 text-center border font-bold rounded-md text-green-700 transition-all hover:bg-green-700 hover:text-white "
        href={redirectTo || '/'}
        >
        {redirectTitle || 'صفحه اصلی'}
      </Link>
        </div>
    </div>
  )
}

export default ErrorBoundary