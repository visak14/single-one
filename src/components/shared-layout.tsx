"use client";
import { usePathname } from "next/navigation";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useSidebarWidth } from "@/hooks/use-sidebar-width";

type SharedLayoutProps = {
  children: ReactNode;
  SidebarComponent: FC<any>;
  SidebarProps?: any;
};

const SharedLayout: FC<SharedLayoutProps> = ({ children , SidebarComponent , SidebarProps }) => {
  const [isRendered, setIsRendered] = useState(false);
  const { setSidebarWidth , sidebarWidth} = useSidebarWidth()
  const pathName = usePathname();

  useEffect(() => {
    setIsRendered(true);
  }, []);

  if (!isRendered) return null;
  return (
    <>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel onResize={width => setSidebarWidth(width)} defaultSize={30} maxSize={40} minSize={20}>
            <SidebarComponent {...SidebarProps} />
        </ResizablePanel>
        <ResizableHandle withHandle className=" border-r  border-r-gray-400 dark:border-r-gray-800" />
        <ResizablePanel className=" !overflow-y-auto my-20">
            <div className=" h-full hidden md:block ">{children}</div>
        </ResizablePanel>
        <div className=" md:hideen">{children}</div>
      </ResizablePanelGroup>
    </>
  );
};

export default SharedLayout;
