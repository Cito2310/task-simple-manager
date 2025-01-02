interface propsRadio {
    label: string;
    value: string;
    currentValue: string;
    set: React.Dispatch<React.SetStateAction<string>>;
}

const InputRad = ({ label, value, currentValue, set }: propsRadio) => {
  return (
    <div className="flex items-center space-x-2">
        <button 
          onClick={()=>set(value)}
          className="h-4 w-4 aspect-square rounded-full border border-primary text-primary ring-offset-backgroundfocus:outline-none focus-visible:ring-2 focus-visible:ring-ring flex items-center justify-center" type="button">
          { currentValue === value && <div className="bg-primary rounded-full w-2.5 aspect-square"></div> }
        </button>
    
        <label 
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {label}
        </label>
    </div>
  )
}


interface props {
  title: string;
  set: React.Dispatch<React.SetStateAction<any>>;
  currentValue: string;
  inputs: {
    label: string;
    value: string;
  }[]
}

export const InputRadio = ({ inputs, title, set, currentValue }: props) => {
  return (
    <div>
      <h3 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {title}
      </h3>
      
      <div className="flex gap-4 mt-2">
        { inputs.map(({ label, value }) => <InputRad 
          key={label} 
          label={label} 
          value={value} 
          currentValue={currentValue} 
          set={set} />
        )}
      </div>
    </div>
  )
}