"use client";
import React from "react";
import TrainingCurriculum from "./training-curriculum";
import TrainingMethodology from "./training-methodology";
import AccountabilitySection from "./accountability-section";
import EquipmentGrid from "./equipment-grid";

const TrainingPage = () => {
    return (
        <div className="py-20">
            <TrainingCurriculum />
            <TrainingMethodology />
            <AccountabilitySection />
            <EquipmentGrid />
        </div>
    );
};

export default TrainingPage;
