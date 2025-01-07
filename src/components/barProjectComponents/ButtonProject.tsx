interface props {
    active?: boolean
    label: string
    onClick: () => void;
}

export const ButtonProject = ({ active, label, onClick }: props) => {
  return (
    <button onClick={onClick} className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
    ${ active ? "text-[#000]" : "text-[#7d7d7d]" }
    `}>
        {label}
    </button>
  )
}
