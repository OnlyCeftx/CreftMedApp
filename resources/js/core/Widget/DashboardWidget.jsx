import React, { useState } from "react";

import {
    DndContext,
    DragOverlay,
    closestCorners,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
    useDroppable,
} from "@dnd-kit/core";

import {
    arrayMove,
    sortableKeyboardCoordinates,
    rectSortingStrategy,
    SortableContext,
    useSortable,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import Widget from "./Widget";

import WeatherWidget from "./widgets/WeatherWidget";

const availableWidgets = [
    { id: "weather", title: "Clima", component: WeatherWidget },
];

// Componente Sortable personalizado

const SortableWidget = ({ id, children, onRemove }) => {
    const {
        attributes,

        listeners,

        setNodeRef,

        transform,

        transition,

        isDragging,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),

        transition,

        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="dashboard-widget relative"
        >
            <button
                onClick={() => onRemove(id)}
                className="absolute top-2 right-2 z-10"
            >
                X
            </button>

            {children}
        </div>
    );
};

// Contenedor droppable personalizado

const DroppableContainer = ({ children }) => {
    const { isOver, setNodeRef } = useDroppable({
        id: "droppable-dashboard",
    });

    return (
        <div
            ref={setNodeRef}
            className={`dashboard-grid bg-indigo-300 grid grid-cols-3 gap-4 ${
                isOver ? "bg-green-100" : ""
            }`}
        >
            {children}
        </div>
    );
};

export default function DashboardWidget() {
    const [availableWidgetsState, setAvailableWidgetsState] =
        useState(availableWidgets);

    const [widgets, setWidgets] = useState([]);

    const [activeWidget, setActiveWidget] = useState(null);

    const sensors = useSensors(
        useSensor(MouseSensor),

        useSensor(TouchSensor),

        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragStart = (event) => {
        const { active } = event;

        // Buscar el widget en disponibles

        const widget = availableWidgetsState.find((w) => w.id === active.id);

        setActiveWidget(widget);
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (over?.id === "droppable-dashboard") {
            // Si el widget no está en el dashboard, lo agregamos

            if (!widgets.find((w) => w.id === active.id)) {
                const newWidget = availableWidgetsState.find(
                    (w) => w.id === active.id
                );

                setWidgets((prev) => [...prev, newWidget]);

                // Eliminar de widgets disponibles

                setAvailableWidgetsState((prev) =>
                    prev.filter((w) => w.id !== active.id)
                );
            }
        } else if (active.id !== over?.id) {
            // Reordenamiento dentro del dashboard

            const oldIndex = widgets.findIndex((w) => w.id === active.id);

            const newIndex = widgets.findIndex((w) => w.id === over?.id);

            setWidgets((prev) => arrayMove(prev, oldIndex, newIndex));
        }

        // Resetear el widget activo

        setActiveWidget(null);
    };

    const removeWidget = (widgetId) => {
        // Encontrar el widget a eliminar

        const widgetToRemove = widgets.find((w) => w.id === widgetId);

        // Eliminar del dashboard

        setWidgets((prev) => prev.filter((w) => w.id !== widgetId));

        // Volver a agregar a widgets disponibles

        setAvailableWidgetsState((prev) => [...prev, widgetToRemove]);
    };

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <div className="dashboard-available-widgets">
                <h3>Widgets Disponibles</h3>

                {availableWidgetsState.map((widget) => (
                    <Widget key={widget.id} id={widget.id} title={widget.title}>
                        {widget.title} aqui
                    </Widget>
                ))}
            </div>

            <SortableContext
                items={widgets.map((w) => w.id)}
                strategy={rectSortingStrategy}
            >
                <DroppableContainer>
                    {widgets.map((widget) => {
                        const WidgetComponent = widget.component;

                        return (
                            <SortableWidget
                                key={widget.id}
                                id={widget.id}
                                onRemove={removeWidget}
                            >
                                <WidgetComponent />
                            </SortableWidget>
                        );
                    })}
                </DroppableContainer>
            </SortableContext>

            <DragOverlay>
                {activeWidget ? (
                    <div className="p-4 bg-blue-200 border">
                        {activeWidget.title}
                    </div>
                ) : null}
            </DragOverlay>
        </DndContext>
    );
}
