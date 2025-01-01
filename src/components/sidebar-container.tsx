import { ScrollArea } from '@/components/ui/scroll-area';
import { Search } from 'lucide-react';
import {FC, ReactNode} from 'react'

type SidebarContainerProps = {
    children: ReactNode;
    title: string;
    trigger : ReactNode
}

export const SidebarContainer: FC<SidebarContainerProps> = ({
    children,
    title,
    trigger
}) => {

    return <ScrollArea className='h-full'>
        <div className='px-4'>
            <div className=' flex items-center mt-10 justify-between '>
                <h2 className=' text-2xl font-bold'> {title} </h2>
                <div>{trigger}</div>
                 </div>

                 <div className=' my-4 h-8  bg-gray-200 dark:bg-gray-800  flex items-center  p-2 rounded-xl'>
                    <Search   className=' text-gray-50 mr-2 ' />
                    <input 
                    type=' text'
                    placeholder='search...'
                    className=' w-full h-8 p-2 rounded-lg  outline-none bg-gray-200 dark:bg-gray-800'/>

                 </div>
                 {children}
        </div>
    </ScrollArea>
}