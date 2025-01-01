"use client"

import { FC, ReactNode } from "react";
import SharedLayout from "@/components/shared-layout";
import ChatSidebar from "@/components/chat-sidebar";


type ChatsLyoutProps = {
    children: ReactNode;
}


export const ChatsLayout: FC<ChatsLyoutProps> = ({children}) => {
  return <SharedLayout SidebarComponent={()=> <><ChatSidebar/></>}>{children}</SharedLayout>
}