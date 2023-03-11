import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { ContinentIndex } from "../component/continentIndex";

export const Continentes = () => (
    <div>
        <h1>Continentes</h1>
        <ContinentIndex/>
    </div>
);