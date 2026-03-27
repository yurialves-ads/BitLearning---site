"use client";

import * as React from "react";
import { GripVerticalIcon } from "lucide-react";
import { Panel } from "react-resizable-panels"; // apenas Panel

import { cn } from "./utils";

function ResizableContainer({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="resizable-container"
      className={cn("flex h-full w-full flex-row", className)}
    >
      {children}
    </div>
  );
}

function ResizablePanel(props: React.HTMLAttributes<HTMLDivElement>) {
  return <Panel data-slot="resizable-panel" {...props} />;
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  withHandle?: boolean;
}) {
  return (
    <div
      data-slot="resizable-handle"
      className={cn(
        "bg-border relative flex w-px items-center justify-center",
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </div>
  );
}

export { ResizableContainer, ResizablePanel, ResizableHandle };
