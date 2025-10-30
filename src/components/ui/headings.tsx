import React from 'react'

function Headings({title, subtitle}:{title:string, subtitle:string}) {
  return (
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
        <h5 className="text-sm text-foreground/40">{subtitle}</h5>
      </div>
        )
}

export default Headings