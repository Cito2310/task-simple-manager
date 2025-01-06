interface props {
    label: string;
    autofocus?: boolean;
}

export const ButtonModal = ({ label, autofocus }: props) => {
  return (
    <button autoFocus={autofocus} type="submit" className="w-[140px] self-end inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-background hover:bg-primary/90 h-10 px-4 py-2">{label}</button>
  )
}