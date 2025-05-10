
interface CardProps {
    name: string;
    course: "CSE" | "ECE" | "IT" | "B.Arch";
    onDelete?: () => void
}

export default function Card(props: CardProps) {
    

    return (
        <div className="max-h-80 h-full lg:w-80 w-96 bg-white rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl p-4 m-4">
            <div className="p-4 flex flex-col justify-between gap-4">
                <div className="flex w-full  p-4 text-gray-600 items-center border-gray-400 border-2 rounded-xl">
                    
                   {props.name}
                </div>

                <div className="flex w-full  p-4 text-gray-600 items-center border-gray-400 border-2 rounded-xl">
               {props.course}
                </div>
                
            </div>

            
        </div>
    );
}
