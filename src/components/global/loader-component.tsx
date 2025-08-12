import { Loader } from "lucide-react";
import React from "react";

const LoaderComponent = () => {
    return (
        <div className="flex flex-col items-center h-full justify-center">
            <Loader className="animate-spin size-5" />
        </div>
    );
};

export default LoaderComponent;
