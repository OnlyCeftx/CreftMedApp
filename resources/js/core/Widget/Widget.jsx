import React from "react";

import { useDraggable } from "@dnd-kit/core";

export default function Widget({ id, title, children }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
    });

    const style = transform
        ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,

              cursor: "grab",
          }
        : undefined;

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="widget-container"
        >
            <div className="widget-header">{title}</div>
            <div className="widget-content">{children}</div>
        </div>
    );
}